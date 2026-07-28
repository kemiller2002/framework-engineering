# Open ROS gaps

| Gap | Why generic / minimum ROS behavior | Priority | FE workaround | Delay risk |
|---|---|---:|---|---|
| Profile extension contract | Every discipline needs typed extensions; load a profile manifest and compose downstream checks without copying kernel rules | high | FE-only extension validator | divergent adapters |
| Execution manifests and write boundaries | All disciplines need reproducible isolated runs; validate provider/date/run layout and declared write root | high | documented policy and path check | accidental cross-run mutation |
| Context manifest and intake | Source/context acquisition is generic; define provenance-preserving intake records | medium | FE source index | inconsistent source capture |
| Artifact creation CLI | Safe record scaffolding is generic; create ROS-envelope records from registered types | medium | copy reviewed examples | cold-start errors |
| Accepted-content mutation enforcement | Immutability applies across disciplines; compare accepted content against recorded hashes/history | high | policy only | silent historical change |
| Cross-provider reproducibility semantics | Provider independence is generic; distinguish provider, model, role, and execution lineage | high | explicit prohibited claims | false replication claims |
| Full schema composition | All profiles need executable schemas; evaluate JSON Schema 2020-12 and referenced profile schemas | medium | narrow field checks | incomplete validation |

None of these capabilities is silently implemented as a generic FE subsystem.
