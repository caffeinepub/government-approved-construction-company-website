#!/bin/bash
# Package full project source into a single ZIP archive
# Excludes large/generated folders to keep the download small and source-focused

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND_DIR="$(dirname "$SCRIPT_DIR")"
PROJECT_ROOT="$(dirname "$FRONTEND_DIR")"
OUTPUT_ZIP="$PROJECT_ROOT/project-source.zip"
EXCLUDE_FILE="$SCRIPT_DIR/package-source.exclude.txt"

echo "📦 Packaging project source..."
echo "Project root: $PROJECT_ROOT"
echo "Output: $OUTPUT_ZIP"

# Remove existing ZIP if present
if [ -f "$OUTPUT_ZIP" ]; then
  echo "🗑️  Removing existing ZIP..."
  rm "$OUTPUT_ZIP"
fi

# Change to project root for consistent paths in ZIP
cd "$PROJECT_ROOT"

# Create ZIP with exclusions
echo "🔨 Creating ZIP archive..."
if [ -f "$EXCLUDE_FILE" ]; then
  zip -r "$OUTPUT_ZIP" . -x@"$EXCLUDE_FILE" > /dev/null
else
  echo "⚠️  Warning: Exclude file not found at $EXCLUDE_FILE"
  echo "Creating ZIP without exclusions..."
  zip -r "$OUTPUT_ZIP" . > /dev/null
fi

# Get file size
if [ -f "$OUTPUT_ZIP" ]; then
  SIZE=$(du -h "$OUTPUT_ZIP" | cut -f1)
  echo "✅ Package created successfully!"
  echo "📊 Size: $SIZE"
  echo "📍 Location: $OUTPUT_ZIP"
else
  echo "❌ Failed to create package"
  exit 1
fi
