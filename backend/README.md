# NimAI — Backend

Reserved for backend services (APIs, integrations, data/AI workloads).

No backend code exists yet. The current site is a static React front end served from
[`../frontend`](../frontend). When backend services are added (e.g. a contact API,
auth, or AI inference endpoints), place all server-side code here.

Suggested layout:

```
backend/
  src/            # application code
  tests/
  package.json    # or pyproject.toml / go.mod, depending on stack
```
