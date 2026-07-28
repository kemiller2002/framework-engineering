# Validation profile

Run ROS validation in the ROS checkout for generic records. In FE run:

```sh
npm run ros-fe:registry
npm run ros-fe:validate
npm run ros-fe:test
```

ROS owns identifier syntax, lifecycle enums, confidence vocabulary, supersession, canonical-reference integrity, immutability policy, and generic registries. FE checks record type, required framework fields, profile declaration, FE-local references, execution directory shape, controlled taxonomy sources, and deterministic FE indexes.

An FE record is not valid merely because FE checks pass; it must also conform to the inherited ROS contract. Automated cross-repository composition remains an open ROS gap.
