# Project Source Export Guide

This document explains how to generate, download, and use the full project source code ZIP archive.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) and **npm** (or **pnpm**/yarn)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version` and `npm --version`

- **DFX** (Internet Computer SDK)
  - Install: `sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"`
  - Verify installation: `dfx --version`
  - Documentation: https://internetcomputer.org/docs/current/developer-docs/getting-started/install/

- **zip/unzip** utilities (usually pre-installed on macOS/Linux)
  - Windows users: Use 7-Zip or built-in Windows extraction

## Generating the Source ZIP

### Option 1: Using the Packaging Script (Recommended)

From the `frontend/` directory, run:

