# Case 01 — Research-site duplicate output URLs

## Problem statement

The production build of a research site began failing with duplicate output-URL errors after a content import. Diagnose the immediate cause and recommend the appropriate current disposition.

## Evidence

- **E01.** The build log reports: `duplicate output path: /research/field-notes/` for records `rn-104` and `rn-117`.
- **E02.** `rn-104` has front matter `canonical_id: field-notes` and `status: published`.
- **E03.** `rn-117` has front matter `canonical_id: field-notes` and `status: published`.
- **E04.** The route generator creates each record URL from `canonical_id` as `/research/<canonical_id>/`.
- **E05.** The import completed 12 minutes before the first failed build and added `rn-117`.
- **E06.** The last successful build contained `rn-104` and no record with ID `rn-117`.
- **E07.** A local reproduction fails after adding only `rn-117` to the last successful revision.
- **E08.** Asset optimization also emitted three non-fatal image-compression warnings in the same build.
- **E09.** `rn-117` has a different display title and author from `rn-104`.

## Diagnostic task

Analyze this case using the provided diagnostic framework. Produce the framework's required response.
