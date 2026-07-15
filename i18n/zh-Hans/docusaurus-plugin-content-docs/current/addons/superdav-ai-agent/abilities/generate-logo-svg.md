---
title: 生成 Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# 生成 Logo SVG

**生成 Logo SVG** 功能允许主题构建器（Theme Builder）直接在您的 WordPress 网站中创建和嵌入自定义 Logo SVG，并自动进行命名空间安全的清理（sanitisation）。

## 概述 {#overview}

此功能根据您网站的品牌方向和设计偏好，生成可缩放矢量图形（SVG）Logo。生成的 SVG 会自动进行清理（sanitisation），以确保它们在 WordPress 中使用是安全的，同时保持视觉完整性。

## 参数 {#parameters}

| 参数 | 类型 | 是否必需 | 描述 |
| :--- | :--- | :--- | :--- |
| `site_name` | string | 是 | 用于生成 Logo 的网站名称 |
| `style` | string | 是 | 设计风格（例如：“现代”、“经典”、“极简”、“活泼”） |
| `colors` | array | 否 | 用于 Logo 的十六进制颜色代码数组（例如：`["#678233", "#ffffff"]`） |
| `width` | number | 否 | SVG 宽度（像素），默认为 200 |
| `height` | number | 否 | SVG 高度（像素），默认为 200 |
| `include_text` | boolean | 否 | 是否在 Logo 中包含网站名称作为文本（默认为 true） |

## 输出格式 {#output-format}

此功能返回一个 SVG 字符串，结构如下：

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanititised": true
}
```

## SVG 清理行为 {#svg-sanitisation-behaviour}

生成的 SVG 会经过自动的、命名空间安全的清理（sanitisation），以实现以下目标：

- **移除不安全的属性** — 剥离事件处理程序、脚本和潜在危险的属性
- **保留命名空间** — 保留 SVG 命名空间（xmlns, xlink），确保正确渲染
- **验证结构** — 确保 SVG 符合 W3C 标准
- **转义实体** — 对文本内容中的特殊字符进行适当转义
- **移除外部引用** — 剥离外部样式表和图片引用

这确保了 SVG 可以直接嵌入 WordPress，无需额外的清理步骤。

## 用法示例 {#usage-example}

**提示：**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**结果：**
此功能会创建一个 SVG Logo，该 Logo：
- 包含了网站名称 "CloudSync"
- 使用了指定的蓝色和白色配色方案
- 遵循了现代设计原则
- 自动清理，可直接使用

## 与主题构建器的集成 {#integration-with-theme-builder}

当您使用主题构建器（Theme Builder）的“设计方向”选择时，生成 Logo SVG 功能会：

1. 分析您的设计方向和配色方案。
2. 生成与您的偏好相匹配的自定义 SVG Logo。
3. 自动将 Logo 嵌入到您网站的页眉/品牌区域。
4. 将 SVG 作为自定义 Logo 存储在 WordPress 媒体库中。

## 最佳实践 {#best-practices}

- **提供清晰的风格偏好** — 描述您想要的风格（现代、经典、活泼等）。
- **指定颜色** — 包含您的品牌颜色，以保持一致性。
- **测试渲染** — 验证 Logo 在不同屏幕尺寸上显示是否正确。
- **进一步自定义** — 使用 WordPress 的 Logo 定制工具来调整尺寸和位置。

## 限制 {#limitations}

- SVG Logo 是作为静态图形生成的（不是动画）。
- 包含许多元素的复杂 Logo 可能需要手动精修。
- 不支持自定义字体；文本使用系统字体。
- 尺寸过大或过小可能会影响质量。

## 相关功能 {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — 检查颜色对比度以确保可访问性
- [Create Menu](./create-menu.md) — 为您的网站创建导航菜单
