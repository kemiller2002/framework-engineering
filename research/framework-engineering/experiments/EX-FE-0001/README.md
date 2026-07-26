# EX-FE-0001

This ready pilot tests the experiment system and produces protocol input for FE-MISSION-001. `experiment.json` is canonical; `prompt.md` is generated and drift-checked.

Run:

```sh
npm run experiments -- validate EX-FE-0001
npm run experiments -- prepare EX-FE-0001 --provider manual
npm run experiments -- run EX-FE-0001 --provider claude
```

The final command is a dry run unless `--execute` is explicitly supplied. Prepared runs contain immutable prompt and input digests. Import external output with the workflow in the system README.
