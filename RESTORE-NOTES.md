# Star Nootropics source preservation

The intended design is https://starnootropics-research.shastafox.chatgpt.site/.

- `starnootropics-research-github.zip` contains the original source for published version 32, commit `e568f9aec3749779f59d429832539a76a484c744`. Use this version for the design.
- `starnootropics-all-code.zip` contains 209 current local source files, including newer uncommitted edits and a SHA-256 file manifest. These newer edits are preserved separately and are not the selected design.
- `starnootropics-history.bundle` contains all 41 commits reachable from the local repository's saved references. Restore with `git clone starnootropics-history.bundle recovered-history`.

The existing HTML/CSS files in this GitHub repository remain preserved. Dependencies and generated runtime caches are excluded from the source archives. The Git bundle was verified to contain complete history; both ZIP archives passed integrity checks.

This preserves the available local source and history, not hosted database contents or unknown files outside the project. The site manifest declares no D1 or R2 resources.
