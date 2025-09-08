#!/bin/bash

# Development script for create-rn-trpc CLI

set -e

echo "🔨 Building CLI..."
npm run build

echo "🔗 Linking CLI globally..."
npm link

echo "✅ CLI is now available globally as 'create-rn-trpc'"
echo ""
echo "Test it with:"
echo "  create-rn-trpc test-project"
echo ""
echo "To unlink when done:"
echo "  npm unlink"
