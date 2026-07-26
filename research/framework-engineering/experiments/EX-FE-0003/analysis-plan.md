# Preregistered Analysis Plan

Score every output on D1–D12 from 1 to 5 using `evaluations/rubric.md`. D1–D10 are beneficial when higher. D11 (burden) and D12 (false precision) are harmful when higher.

For each framework and case type, calculate mean, median, range, run-to-run variance, average word count, substantive-score gain per 1,000 words, and exploratory burden-adjusted score:

`mean(D1…D10) − 0.5 × mean(D11, D12)`

This formula is exploratory, not validated. Compare K–M for uncertainty, M–R for added lineage, K–R for the combined effect, and all comparisons by case complexity. Examine qualitative differences in recommendations as well as scores.

Classify as:

- **Supported for further testing** only if M or R repeatedly materially improves at least three substantive dimensions, the benefit is not primarily length, burden/false precision remain acceptable, and adversarial review has no simpler explanation.
- **Conditionally supported** if benefits concentrate in incomplete or conflicting cases and simple cases show little benefit or greater burden.
- **Not supported** if improvements are inconsistent/equivalent, length explains apparent gains, or lineage is decorative.
- **Harm signal** if indecision, obscured conclusions, false precision, material difficulty, or weaker next actions occur.

No conclusion may treat model-family agreement as human validation.
