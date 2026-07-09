---
title: 验证调色板对比度
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# 验证调色板对比度 {#validate-palette-contrast}

**验证调色板对比度**功能会检查您设计调色板中的颜色组合，以确保它们符合 WCAG（Web 内容无障碍指南）标准，然后再将这些颜色应用到您的主题上。

## 概述 {#overview}

此功能通过验证文本和背景颜色之间的对比度比，确保您的网站配色方案符合无障碍标准。这有助于防止那些可能让视力障碍用户难以阅读的颜色组合。

## 输入格式 {#input-format}

该功能接受一个颜色调色板作为输入：

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### 参数 {#parameters}

| 参数 | 类型 | 是否必需 | 描述 |
|-----------|------|----------|-------------|
| `colors` | array | 是 | 包含 `name` 和 `hex` 属性的颜色对象数组 |
| `wcag_level` | string | 否 | WCAG 合规级别："A"、"AA"（默认）或 "AAA" |
| `pairs_to_check` | array | 否 | 需要验证的特定颜色对（例如：`["primary-text", "background-text"]`） |

## 检查的 WCAG 级别 {#wcag-levels-checked}

该功能根据 WCAG 标准验证对比度比：

| 级别 | 普通文本 | 大文本 | 最小比例 |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **普通文本** — 小于 18pt（或 14pt 粗体）的文本
- **大文本** — 18pt 或更大的文本（或 14pt 粗体或更大）

## 输出结构 {#output-schema}

该功能会返回一份详细的验证报告：

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### 输出字段 {#output-fields}

| Field | Type | 描述 |
|-------|------|-------------|
| `compliant` | boolean | 整个调色板是否符合指定的 WCAG 级别 |
| `wcag_level` | string | 检查的 WCAG 级别 |
| `pairs` | array | 每个颜色对的详细结果 |
| `contrast_ratio` | number | 计算出的对比度比（1:1 到 21:1） |
| `status` | string | 每个颜色对的 "pass"（通过）或 "fail"（失败）状态 |
| `recommendations` | array | 改进失败颜色对的建议 |

## 用法示例 {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**结果:**
该功能会验证所有颜色组合并返回：
- ✅ Primary + Text: 5.2:1 比例（通过 WCAG AA）
- ✅ Background + Text: 12.1:1 比例（通过 WCAG AAA）
- 总体：符合 WCAG AA 标准

## 与主题构建器的集成 {#integration-with-theme-builder}

当使用 Theme Builder 的设计方向选择功能时，验证调色板对比度功能：

1. 分析您选择的颜色调色板
2. 检查所有文本与背景的组合
3. 根据您选择的 WCAG 级别进行验证
4. 为不合规的颜色对提供建议
5. 防止应用无法访问的配色方案

## 最佳实践 {#best-practices}

- **从 AA 级别开始** — WCAG AA 是大多数网站的标准
- **应用前进行测试** — 在确定设计之前，先验证您的调色板
- **检查所有组合** — 确保文本、链接和 UI 元素都符合标准
- **考虑用户偏好** — 有些用户可能有额外的颜色敏感度
- **使用对比度检查器** — 将此功能与浏览器工具结合使用进行验证

## 失败的颜色对和建议 {#failing-pairs-and-recommendations}

如果某个颜色对验证失败，该功能会提供建议：

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "将文本颜色调亮到 #ffffff（比例将为 5.2:1）",
    "将背景颜色调暗到 #556b2f（比例将为 4.8:1）",
    "使用不同的主色，例如 #4a6b1f（比例将为 6.1:1）"
  ]
}
```

## 相关功能 {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — 使用您验证过的调色板创建 Logo
- [Create Menu](./create-menu.md) — 使用无障碍颜色构建导航菜单
