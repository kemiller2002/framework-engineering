# Compatibility and decisions

ROS 1.0.0 has canonical roots and fixed registry kinds, but no profile loading or validator extension API. FE therefore uses a narrow downstream validator over ROS-shaped JSON records. It checks only the inherited envelope's presence, FE record fields, FE references, execution paths, and registry determinism.

Rejected alternatives:

- Copying ROS validation into FE would create a second ROS.
- Adding FE prefixes and taxonomies to the ROS kernel would make generic infrastructure domain-specific.
- Rewriting historical FE artifacts would destroy stable paths and blur their original governance.

The selected adapter is provisional until ROS supports profile-aware validation. JSON documents are used where machine-readability matters; `.yaml` manifests contain JSON, which is valid YAML and dependency-free to parse.
