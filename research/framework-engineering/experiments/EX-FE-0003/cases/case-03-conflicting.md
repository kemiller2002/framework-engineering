# Case 03 — Provider agreement without human validation

## Problem statement

A program team is considering adopting a diagnostic framework to prioritize high-consequence safety controls. Three AI providers produce consistent recommendations, but no human validation study has been completed. Decide whether to authorize operational use now.

## Evidence

- **E01.** On 30 historical scenarios, three AI providers produced the same top-three control recommendations in 24 scenarios.
- **E02.** The scenarios and their reference recommendations were written by one internal team before the providers were tested.
- **E03.** No independent human experts have judged whether the recommendations were safe, complete, or preferable.
- **E04.** In an internal spot check of six scenarios, the framework cited relevant policy text and produced coherent rationales.
- **E05.** On three scenarios containing a rare regulatory exception, all three providers omitted the exception and recommended the same action.
- **E06.** One scenario had a known reference recommendation that prioritized immediate containment; all three providers instead prioritized documentation review.
- **E07.** The current proposal would allow the framework's recommendation to defer a control for up to 30 days without mandatory human sign-off.
- **E08.** A separate red-team review found that changing the order of two evidence paragraphs changed the top recommendation in 5 of 12 trials.
- **E09.** The providers were prompted with the same framework instructions and the same internal policy corpus.
- **E10.** The policy corpus was updated after the historical scenarios were authored; version alignment for each scenario has not been checked.
- **E11.** The program has a manual review process that can review recommendations within one business day, but it is capacity constrained.
- **E12.** The framework produced a correct recommendation on a recent live low-consequence pilot, confirmed by the responsible operator.

## Diagnostic task

Analyze this case using the provided diagnostic framework. Produce the framework's required response.
