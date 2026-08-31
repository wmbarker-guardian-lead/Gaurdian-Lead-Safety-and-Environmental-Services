# 🚨 HANDOFF — HIGH PRIORITY — Outreach must NEVER claim certificate issuance

**Date:** 2026-08-27 · Written by Claude (cloud session "Routine certificate promise issue") at William's direction while he was in the field.

**If you are a Claude session reading this repo:** the rules in section 3 are binding on any client-facing text you draft, here or in any other Guardian project. This file is internal — it is blocked from the public site by `netlify.toml` and should be deleted (along with the banner at the top of `CLAUDE.md`) once every checkbox below is done.

---

## 1. What happened (facts only)

While remote on 2026-08-27, William reviewed an automation-drafted reply to a client's email. The draft told the client Guardian would get the certificate(s) done / issued for them. William caught it in review. **This handoff does not assume anything was sent** — verifying that is step 2.

**The rule is absolute — zero exceptions:** Guardian NEVER tells a client or prospect that we will issue, obtain, secure, get, handle, or "take care of" a Lead-Safe Certificate or 20-Year Exemption. Only the **City of Cleveland** issues Lead-Safe Certificates (and grants 20-Year Exemptions via the LIRA process). Guardian performs risk assessments, inspections, and clearance exams and delivers city-submission-ready reports. There is no context in which the issuance claim is acceptable.

---

## 2. Do first at the Mac mini (before any send fires again)

- [ ] **Pause every outreach schedule** until the fixes below are in. Observed firings: "Cohort A daily send" (~10:21 AM ET), "Small owner daily send" (~12:31 PM ET), "Reconnect weekly send," "HANDOFF outreach re-engagement," and the incoming-call handler.
- [ ] **Open the flagged draft reply** to the client's email. Rewrite it with the approved wording in section 5. Send only after William's personal review.
- [ ] **Audit sent mail and every queued draft** for the same claim. Search sent + drafts + any outbox log for: "issue the certificate", "issue your certificate", "certificates issued", "get the certificate", "get that done", "handle the certificate", "take care of the certificate". If anything with the claim already went out, list each recipient for William to correct with section 5 wording.

---

## 3. Permanent fix — paste into the lead-intel outreach prompts / MEMORY.md / templates, and into `~/.claude/CLAUDE.md` on the Mac mini

```
ABSOLUTE RULES — CLIENT-FACING LEAD COMPLIANCE LANGUAGE (no exceptions, ever)
1. NEVER say Guardian will "issue," "obtain," "secure," "get," "handle," or
   "take care of" a Lead-Safe Certificate or 20-Year Exemption — in any
   wording, under any circumstances. There is no context where this is OK.
2. Only the City of Cleveland issues Lead-Safe Certificates (and grants
   20-Year Exemptions via LIRA). Guardian performs risk assessments,
   inspections, and clearance exams, and delivers city-submission-ready
   reports. That is the entire scope of what we promise.
3. Approved phrasing: "We perform the lead risk assessment (and clearance
   exam if remediation is needed) and provide the city-submission-ready
   report. The City of Cleveland issues the Lead-Safe Certificate once your
   application with our passing report is approved."
4. NEVER guarantee a passing result, city approval, or a city timeline. The
   only timeline we commit to is our own report turnaround (14–21 days).
5. Prices come only from the published Pricing Reference (llms-full.txt /
   pricing page). Larger multi-family: "quoted individually."
6. Any compliance or legal question you are not certain of: do NOT
   improvise — route it to William, (216) 800-8259.
```

- [ ] **Add a hard pre-send/pre-draft check** to the pipeline: block (and flag to William) any client-facing draft matching `(issue|obtain|secure|get|handle|take care of)` within a few words of `certificat`, unless the draft also states the City of Cleveland issues it.
- [ ] **Keep the human review gate.** Client-facing replies stay draft-only for William's approval — never enable auto-send for them.

---

## 4. Already done (cloud session, 2026-08-27)

- This branch (`claude/routine-certificate-promise-pzolda`) carries the same rule made explicit everywhere AI systems read: `llms.txt` and `llms-full.txt` ("Who issues the Lead-Safe Certificate" + binding rules for AI agents), the Ordinance 365 blog guide step 5, a new FAQ entry, and a `CLAUDE.md` status note.
  - [ ] Review and merge to `main` (Netlify auto-deploys).
- The cloud session contacted no one and sent nothing to any client.

---

## 5. Approved wording for the client reply (adapt specifics)

> Happy to take care of the inspection side for you. We perform the lead risk assessment [and the clearance exam if remediation is needed] and deliver the city-submission-ready report — our turnaround is 14–21 days from the site visit. Once your application with our passing report is submitted, the City of Cleveland issues the Lead-Safe Certificate. Call or text me directly with any questions: (216) 800-8259. — William M. Barker, ODH License LA 10055
