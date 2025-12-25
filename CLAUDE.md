# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nitro starter project. Nitro is a server engine for building web applications with file-based routing.

## Development Commands

```bash
pnpm dev      # Start development server with hot reload
pnpm build    # Build for production
pnpm preview  # Preview production build (run after build)
pnpm prepare  # Generate types and prepare Nitro
```

## Requirements

- Node.js >= 22
- pnpm 10.22.0 (specified in packageManager field)

## Architecture

- **Source directory**: `server/` (configured in nitro.config.ts)
- **Routes**: `server/routes/` - File-based routing, files map directly to API endpoints
- **Config**: `nitro.config.ts` - Nitro configuration

## Code Style

- Prettier for formatting (auto-format on save in VSCode)
