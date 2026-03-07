#!/usr/bin/env python3
"""
Submit all sitemap URLs to Google's Indexing API.
Tells Google to crawl/index these URLs immediately rather than waiting
for the normal crawl schedule.

Usage: python3 scripts/submit-urls.py
"""

import json
import time
import xml.etree.ElementTree as ET
from pathlib import Path

from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession

# --- Config ---
PROJECT_ROOT = Path(__file__).resolve().parent.parent
KEY_FILE = PROJECT_ROOT / ".secrets" / "indexing-api-key.json"
SITEMAP_FILE = PROJECT_ROOT / "sitemap.xml"
INDEXING_API_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish"
SCOPES = ["https://www.googleapis.com/auth/indexing"]

# Rate limit: Google allows 200 requests/day for the Indexing API
DELAY_BETWEEN_REQUESTS = 1  # seconds


def get_urls_from_sitemap(sitemap_path: Path) -> list[str]:
    """Parse sitemap.xml and return all <loc> URLs."""
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    # Handle XML namespace
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [loc.text for loc in root.findall(".//sm:loc", ns)]
    return urls


def submit_url(session: AuthorizedSession, url: str) -> dict:
    """Submit a single URL to the Indexing API."""
    payload = {
        "url": url,
        "type": "URL_UPDATED"
    }
    response = session.post(INDEXING_API_URL, json=payload)
    return {
        "url": url,
        "status_code": response.status_code,
        "response": response.json() if response.ok else response.text
    }


def main():
    # Verify files exist
    if not KEY_FILE.exists():
        print(f"ERROR: Service account key not found at {KEY_FILE}")
        return
    if not SITEMAP_FILE.exists():
        print(f"ERROR: Sitemap not found at {SITEMAP_FILE}")
        return

    # Authenticate
    print("Authenticating with Google Indexing API...")
    credentials = service_account.Credentials.from_service_account_file(
        str(KEY_FILE), scopes=SCOPES
    )
    session = AuthorizedSession(credentials)
    print(f"Authenticated as: {credentials.service_account_email}\n")

    # Get URLs
    urls = get_urls_from_sitemap(SITEMAP_FILE)
    print(f"Found {len(urls)} URLs in sitemap:\n")

    # Submit each URL
    results = {"success": 0, "failed": 0, "details": []}

    for i, url in enumerate(urls, 1):
        print(f"  [{i}/{len(urls)}] Submitting: {url}")
        result = submit_url(session, url)

        if result["status_code"] == 200:
            results["success"] += 1
            notify_time = result["response"].get("urlNotificationMetadata", {}).get("latestUpdate", {}).get("notifyTime", "N/A")
            print(f"           ✅ Success (notified: {notify_time})")
        else:
            results["failed"] += 1
            print(f"           ❌ Failed ({result['status_code']}): {result['response']}")

        results["details"].append(result)

        # Rate limit (skip delay on last URL)
        if i < len(urls):
            time.sleep(DELAY_BETWEEN_REQUESTS)

    # Summary
    print(f"\n{'='*60}")
    print(f"RESULTS: {results['success']} succeeded, {results['failed']} failed out of {len(urls)} URLs")
    print(f"{'='*60}")

    if results["failed"] > 0:
        print("\nFailed URLs:")
        for detail in results["details"]:
            if detail["status_code"] != 200:
                print(f"  - {detail['url']}: {detail['response']}")


if __name__ == "__main__":
    main()
