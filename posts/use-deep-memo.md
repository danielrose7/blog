---
title: "useDeepMemo"
date: "2026-04-17"
image: "/images/gifs/use-deep-memo.svg"
imageWidth: 640
imageHeight: 400
githubLink: "https://gist.github.com/danielrose7/04e80e45ca96c3f7f6bdf654c99efe3f"
slug: use-deep-memo
---

A React hook that memoizes by deep equality — returns the previous reference when content is unchanged, even if the input is a new object.

- `useMemo` compares deps by reference, so a new object with identical data still invalidates
- `useDeepMemo` uses `lodash.isequal` to compare by value, keeping the old reference stable
- Prevents unnecessary downstream re-renders in `memo`-wrapped children
- Avoid passing values that contain functions — `isEqual` returns false for different instances, causing an infinite loop
