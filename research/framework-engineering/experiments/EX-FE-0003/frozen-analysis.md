# Frozen-Analysis Record

Status: frozen for pre-execution review on 2026-07-25. No result has been generated.

The pre-execution audit found that all framework files have identical operating guidance and identical seven-section substantive response contract. Framework M adds only the four uncertainty requirements. Framework R retains those four requirements and adds only the five evidence-lineage requirements. Framework K contains neither added block.

Before execution, enter SHA-256 hashes for the three framework files and all three case files below, then do not modify them. If a change is needed, create a new protocol version and invalidate any runs based on the old hash.

| Artifact | SHA-256 |
|---|---|
| framework-k.md | `11ca8dca6efc7cec8a3e5e34c986673bec96cafbb523057a50efcd57f97d534e` |
| framework-m.md | `832dc98b4c2280b3e9ac7f92361987a60d2e11e3ccaac150b12192121c3a3f38` |
| framework-r.md | `3c20c60d1176ff302e95f65a1f6612af6247f1796a4cf939bd96e16b72deee0e` |
| cases/case-01-simple.md | `f1821db13c366bcff0cdc77d16721b487c721fee2a8da5bb76fbbd8feb09d068` |
| cases/case-02-incomplete.md | `2283ff6d3b6da5df09f1c62af9392cddd470134a24384db906d6804ace25f64e` |
| cases/case-03-conflicting.md | `fd2dced22351823a1af7b5be2b5e78cd9cdb981d1a0785087a9bb08abb0a4f2e` |

## Line-by-line drift audit

`framework-k.md` → `framework-m.md` differs only in the neutral identifier and the inserted `Uncertainty requirements` block. `framework-m.md` → `framework-r.md` differs only in the neutral identifier and the inserted `Evidence-lineage requirements` block. In particular:

1. The diagnostic task and seven substantive output sections are byte-for-byte identical after the identifier line.
2. The operating guidance (domain scope, evidence use, reasoning direction, and framework-self-critique) is byte-for-byte identical.
3. No framework contains domain-specific information or a case-specific advantage.
4. The added blocks directly encode the intended uncertainty and lineage variables only.
5. The surrounding language is identical in tone and imperatives; no variant is described as better, more rigorous, or preferred.

No results have been generated and no interpretation is recorded here.
