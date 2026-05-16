---
name: sub2api-local-deploy
description: Use when working in this sub2api repository and the user asks to deploy, refresh, rebuild, or verify the local Docker instance at 127.0.0.1:8080 after code changes.
---

# Sub2API Local Deploy

Use this only inside `/Users/joyhsin/IdeaProjects/sub2api`.

## Purpose

Refresh the local Docker deployment at `http://127.0.0.1:8080` from the local source tree while preserving the existing Postgres and Redis containers/data.

## Local Conventions

- Runtime image tag: `sub2api:local-ai-image`
- Compose files: `deploy/docker-compose.local.yml` and `deploy/docker-compose.local.override.yml`
- Temporary binary and Dockerfile live under `.codex_tmp/`; do not commit them.

## Workflow

Run these checks after frontend changes:

```bash
pnpm --dir frontend typecheck
pnpm --dir frontend lint:check
pnpm --dir frontend build
```

Build the embedded Linux ARM64 server binary:

```bash
VERSION_VALUE=$(tr -d '\r\n' < backend/cmd/server/VERSION)
DATE_VALUE=$(date -u +%Y-%m-%dT%H:%M:%SZ)
cd backend
CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -tags embed -ldflags="-s -w -X main.Version=${VERSION_VALUE}-local-ai -X main.Commit=local-ai-image -X main.Date=${DATE_VALUE} -X main.BuildType=release" -trimpath -o ../.codex_tmp/sub2api-linux-arm64 ./cmd/server
```

Ensure `.codex_tmp/Dockerfile.local-ai-image` exists:

```dockerfile
FROM weishaw/sub2api:latest
COPY --chown=sub2api:sub2api sub2api-linux-arm64 /app/sub2api
```

Rebuild and restart only the app container:

```bash
docker build -t sub2api:local-ai-image -f .codex_tmp/Dockerfile.local-ai-image .codex_tmp
docker compose -f deploy/docker-compose.local.yml -f deploy/docker-compose.local.override.yml up -d --no-deps --force-recreate sub2api
```

Verify:

```bash
docker compose -f deploy/docker-compose.local.yml -f deploy/docker-compose.local.override.yml ps
curl -sS http://127.0.0.1:8080/image-generation | rg 'index-|Sub2API' -n | head
```

## Git Hygiene

Commit source files and this skill only. Do not commit `.codex_tmp/`, `deploy/docker-compose.local.override.yml`, generated binaries, screenshots, or one-off local assets.
