# Architecture

The runnable interface is the existing index.html. README.md explains how to open or serve it. The added docs, examples, tests, and scripts describe and verify the current browser boundary.

The existing page stores working state in browser local storage; this is not account-backed sync.

Keep the page static unless a feature needs a separately designed service. Before adding one, document authentication, data ownership, failure behavior, and migration.