---
title: 创建菜单
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# 创建菜单

**创建菜单**功能可以创建 WordPress 导航菜单，并支持与页面标题不同的独立导航标签。

## 概述

此功能扩展了标准的菜单创建功能，增加了指定 `navigation_label` 参数的能力。这允许您创建菜单，其中导航栏显示的标签与实际的页面标题不同，从而在网站结构和用户体验方面提供了更大的灵活性。

## 参数

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | 菜单名称，例如 `主导航` |
| `location` | string | No | 要分配此菜单的主题位置，例如 `primary` |
| `navigation_label` | string | No | 在导航中显示的标签（与页面标题不同） |

## 返回值

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## 导航标签 vs 页面标题

`navigation_label` 参数允许您将内部菜单名称与显示给用户的标签分离开来：

- **`name`** — WordPress 使用的内部菜单标识符（例如："Primary Navigation"）
- **`navigation_label`** — 显示给网站访问者的导航标签（例如："Main Menu"）

当出现以下情况时，使用此功能非常有用：
- 您的内部命名约定与用户可见的标签不同
- 您希望导航中的标签比后台管理面板中的标签更简洁
- 您需要支持多种语言，并且不同语言的标签长度不同
- 您正在为特定的区域或用户群体构建菜单

## 用例示例

### 示例 1：带导航标签的简单菜单

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### 示例 2：用于特定主题位置的菜单

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## 与 Theme Builder 的集成

在使用 Theme Builder 时，创建菜单功能：

1. 自动检测可用的主题菜单位置
2. 为您的设计创建带有适当导航标签的菜单
3. 将菜单分配到正确的主题位置
4. 支持在创建后添加菜单项

## 相关功能

- **`add_menu_item`** — 向现有菜单添加项目
- **`update_menu`** — 重命名菜单或将其重新分配给主题位置
- **`delete_menu`** — 从您的网站移除菜单

## 最佳实践

- **使用清晰的导航标签** — 保持标签简洁且具有描述性，方便用户理解
- **匹配主题位置** — 将菜单分配到正确的、对应的主题位置，以确保正确显示
- **规划菜单结构** — 在创建项目之前，先确定好菜单的层级结构
- **测试响应式设计** — 验证菜单在移动设备上是否能正确显示
- **本地化标签** — 为不同语言版本使用不同的导航标签

## 限制

- 导航标签仅用于显示；内部的 `name` 仍然用于 WordPress 的识别
- 主题支持度不一；并非所有主题都支持所有菜单位置
- 菜单项必须在创建菜单之后单独添加
- 更改导航标签需要更新整个菜单

## 相关功能

- [Generate Logo SVG](./generate-logo-svg.md) — 为您的网站头部创建 Logo
- [Validate Palette Contrast](./validate-palette-contrast.md) — 确保颜色方案具有可访问性
