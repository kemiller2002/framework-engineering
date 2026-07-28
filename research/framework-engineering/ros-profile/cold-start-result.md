# Cold-start test result

Prompt used:

> Starting only from START-HERE.md, locate ROS requirements, identify the allowed execution directory and artifact set, run documented registry and validation commands, and determine the handoff requirements. Do not modify files. Report confusion and failures.

First run: the reviewer located the profile and produced a passing validation result, but had to infer the ROS checkout path, npm working directory, five-file execution shape, and handoff representation.

Revision: `START-HERE.md` now gives the current ROS path, repository-root command context, exact six-part execution shape, and explicit handoff fields. `execution-profile.md` and the synthetic execution now include `HANDOFF.md`.

Second run: passed. The reviewer opened the stated ROS governance files, identified the exact execution write boundary and six-part artifact shape, ran all three commands from the stated repository root, and found every required handoff field in the synthetic `HANDOFF.md`. Registry generation passed, profile validation passed, and both tests passed.

Remaining minor limitations: the recorded ROS path is local-machine-specific (the versioned ROS identity remains the portable dependency), and registry generation is a mutating build step even when output bytes are deterministic.
