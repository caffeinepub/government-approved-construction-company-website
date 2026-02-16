# Specification

## Summary
**Goal:** Add a repository-level workflow to export the full project source (frontend + backend) as a single downloadable ZIP, with clear instructions for using it locally and deploying to the Internet Computer.

**Planned changes:**
- Add a deterministic packaging/export command or script that creates one ZIP archive containing both frontend/ and backend/ source code.
- Configure the export to exclude large/generated directories (e.g., node_modules/, .dfx/, dist/build artifacts) while preserving required manifests/config needed to run locally.
- Add English documentation (README section or dedicated markdown file) explaining how to generate the ZIP, unzip it, install dependencies, run the frontend locally, and deploy the Motoko canister with dfx (including prerequisites and folder structure).

**User-visible outcome:** The user can run a single command to generate an up-to-date project-source ZIP and follow documented steps to unzip, run the app locally, and deploy it to the Internet Computer.
