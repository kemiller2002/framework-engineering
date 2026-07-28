# Migration notes

Existing FE files remain authoritative at their current paths. The profile introduces aliases rather than rewrites:

- existing experiment IDs map to FE experiment proposals or executions only through explicit future migration manifests;
- existing framework corpus folders may be indexed as legacy framework sources without converting their claims;
- existing evidence, hypothesis, and theory records retain their original lifecycle and governance;
- frozen experiment artifacts are never edited by migration.

Future migrations must record source path, source hash, target ID, adapter version, preserved fields, omitted fields, and unresolved incompatibilities.
