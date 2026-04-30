# Codex Handoff

This file captures the current state of the `sub2api` deployment and the work
completed in this session so another agent can continue without re-discovering
the same issues.

## Project

- Local project path: `/Users/joyhsin/IdeaProjects/sub2api`
- Working directory for future work: `/Users/joyhsin/IdeaProjects/sub2api`

## Remote Host

- Cloud provider: Google Compute Engine
- Instance name: `instance-20260412-005328`
- External IP: `34.153.192.225`
- SSH user: `hsin`
- Remote home: `/home/hsin`
- Remote OS: Debian GNU/Linux, kernel `6.1.0-43-cloud-amd64`

## SSH Access

Codex can log in from this Mac with:

```bash
ssh -i ~/.ssh/codex_ed25519 hsin@34.153.192.225
```

Verified login output:

```text
hsin
instance-20260412-005328
/home/hsin
```

## Deployed Stack

The active Docker deployment lives at:

```bash
/home/hsin/sub2api/deploy
```

Current containers:

- `sub2api`
- `sub2api-caddy`
- `sub2api-postgres`
- `sub2api-redis`

Current state at the end of this session:

- `sub2api` is healthy
- `sub2api-caddy` is running and serves TLS
- `https://ai.valura.xyz/home` returns `200`
- `https://ai.valura.xyz/v1/messages` returns `200` for the test request used in this session

## What Was Fixed

### 1. HTTPS / Origin TLS

- The site was moved to a working TLS setup on the origin.
- Cloudflare is configured to reach the origin over TLS on port `8443`.
- The GCP firewall allows `tcp:8443`.
- The working browser URL is:

```text
https://ai.valura.xyz/home
```

### 2. Imported Accounts and Group Routing

- 63 deduplicated JSON auth files were imported.
- The imported accounts are `platform=openai`, `type=oauth`, and initially had
  `codex_cli_only=true`.
- The `default` group was updated to:
  - `platform = openai`
  - `allow_messages_dispatch = true`
- All 63 OpenAI OAuth accounts were bound to group `1`.

### 3. Claude Code Compatibility

Root cause of the remaining Claude Code failure:

- `codex_cli_only` on the OpenAI OAuth accounts caused the server to reject
  non-Codex user agents.
- Claude Code does not always look like an official Codex client to the server.

Runtime fix applied:

- `GATEWAY_FORCE_CODEX_CLI=true`

Important detail:

- The environment variable existed in `/home/hsin/sub2api/deploy/.env`, but the
  Docker Compose file was not passing it into the `sub2api` container.
- I updated `/home/hsin/sub2api/deploy/docker-compose.yml` to pass:

```yaml
- GATEWAY_FORCE_CODEX_CLI=${GATEWAY_FORCE_CODEX_CLI:-false}
```

After that, the `sub2api` container was recreated and the runtime env showed:

```text
GATEWAY_FORCE_CODEX_CLI=true
```

Validation performed on the origin host:

- `http://127.0.0.1:80/health` -> `200`
- `http://127.0.0.1:80/v1/messages` with a Claude Code-like request -> `200`
- The response body was `pong`

## Important Behavioral Notes

- The endpoint `/v1/messages` is working.
- The real gating issue was the OpenAI OAuth `codex_cli_only` restriction.
- For this deployment, the practical fix is to keep:
  - `GATEWAY_FORCE_CODEX_CLI=true`
  - the 63 OpenAI OAuth accounts assigned to the active group

If the next agent sees Claude Code failures again, check these first:

1. `GATEWAY_FORCE_CODEX_CLI` is still `true` in `/home/hsin/sub2api/deploy/.env`
2. `docker-compose.yml` still passes that env var into the `sub2api` service
3. `docker inspect sub2api` still shows `GATEWAY_FORCE_CODEX_CLI=true`
4. The active group still has `platform=openai` and `allow_messages_dispatch=true`

## Files Modified in This Session

Local repository files changed:

- `README.md`
- `README_CN.md`
- `deploy/config.example.yaml`
- `deploy/docker-compose.yml`
- `deploy/Caddyfile`
- `CODEX_HANDOFF.md`

Remote runtime files changed:

- `/home/hsin/sub2api/deploy/.env`
- `/home/hsin/sub2api/deploy/docker-compose.yml`

## Useful Commands

Check service health:

```bash
ssh -i ~/.ssh/codex_ed25519 hsin@34.153.192.225 'docker ps --format "{{.Names}}\t{{.Status}}"'
```

Check the runtime env:

```bash
ssh -i ~/.ssh/codex_ed25519 hsin@34.153.192.225 'docker inspect -f "{{range .Config.Env}}{{println .}}{{end}}" sub2api | grep GATEWAY_FORCE_CODEX_CLI'
```

Check the web endpoint:

```bash
ssh -i ~/.ssh/codex_ed25519 hsin@34.153.192.225 'curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:80/health'
```

## Notes for the Next Agent

- Do not remove `GATEWAY_FORCE_CODEX_CLI=true` unless you also remove the
  `codex_cli_only` constraint from the imported accounts.
- The deployment user is `hsin`, not `ubuntu` or `root`.
- The compose file on the remote host is old-style `docker-compose.yml` and was
  managed with `docker-compose`, not `docker compose`.
- If the UI works but Claude Code still fails, the first place to look is the
  gateway restriction logic, not DNS or TLS.

