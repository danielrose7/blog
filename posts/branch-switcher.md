---
title: "Worktree Branch Switcher"
date: "2026-03-24"
image: "/images/gifs/branch-switcher-mar-24-2026.gif"
imageWidth: 762
imageHeight: 466
githubLink: "https://gist.github.com/danielrose7/15d7c36e4d1ddec87f221ad9285ea52a"
slug: branch-switcher
---

## Problem

Git won't let you checkout a branch that's already open in a worktree:

```
fatal: 'feat/my-branch' is already checked out at '/Users/dan/work/admin.worktrees/feat/my-branch'
```

The path is right there in the error — but worktree paths are hard to remember. Branch names are easy (GitHub PR, Linear ticket). So why not just use the error to navigate?

## Solution

Try to checkout the branch. If it's already in a worktree, catch the error and `cd` there automatically.

```sh
switch feat/my-branch
# Already in worktree, switching to: /Users/dan/work/admin.worktrees/feat/my-branch
```

Customize the two hardcoded values in the gist for your repo path and default branch.
