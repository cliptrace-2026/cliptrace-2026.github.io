# 后门模型检测与反演挑战赛

本仓库用于维护“后门模型检测与反演挑战赛”官方网站。

网站采用公开的 Anti-BAD Challenge Jekyll 网站作为视觉与结构模板，并根据本赛事的题目、规则、资源和组织者信息完成中文化改造。

## 本地预览

```bash
bundle install
bundle exec jekyll serve --source site
```

随后访问 <http://localhost:4000>。

## 网站发布

每次向 `main` 分支推送更新后，系统都会使用 Jekyll 构建 `site/` 目录，并自动发布至 <https://cliptrace-2026.github.io/>。

官方基线代码单独维护在 <https://github.com/cliptrace-2026/cliptrace-baseline>。

自动检查流程包括网页格式检查、链接检查、减少动态效果模式检查，以及桌面端和移动端截图检查。

## 模板来源

网站模板改编自 [anti-bad/anti-bad.github.io](https://github.com/anti-bad/anti-bad.github.io)，该模板采用 MIT 许可证。原始许可证声明保留在 `site/LICENSE` 中。
