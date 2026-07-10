---
title: 站点构建器编排 v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2（在 Gratis AI Agent v1.4.0 中引入）是驱动多步骤网站创建的引擎。当你要求 Agent “构建一个餐厅网站”或“创建一个带博客的作品集”时，编排器会将这个高层次的目标分解成一个结构化的**计划**，发现完成该目标所需的插件，按顺序执行每一步，跟踪进度，并能自主从错误中恢复。

---

## 工作原理 {#how-it-works}

### 1. 计划生成 {#1-plan-generation}

当 Agent 收到网站构建指令时，它会调用 `create_site_plan` ability 来生成一个 JSON **网站计划**。该计划描述了以下内容：

- **Goal（目标）** — 完成的网站应该实现什么功能
- **Phases（阶段）** — 有序的步骤组（例如：_设置_、_内容类型_、_设计_、_内容_）
- **Steps（步骤）** — 每个阶段内的单个 ability 调用
- **Plugin requirements（插件要求）** — 某些步骤运行必须激活的插件
- **Fallbacks（回退机制）** — 如果主要步骤失败，则执行的替代步骤

**示例计划（节选）**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "构建一个带有在线菜单、预订表单和联系页面的餐厅网站",
  "phases": [
    {
      "id": "setup",
      "label": "设置",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "菜单项", "plural_label": "菜单项们" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "菜单分类", "plural_label": "菜单分类们", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "设计",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "导航",
      "steps": [
        { "ability": "create_menu", "params": { "name": "主导航", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "菜单", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "预订餐桌", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "预订和联系表单需要此插件" }
  ]
}
```

### 2. 插件发现 {#2-plugin-discovery}

在执行开始之前，编排器会扫描计划中的 `plugin_requirements`，并检查哪些插件已经处于激活状态。对于缺失的插件，它会：

1. 通过 `recommend_plugin` 搜索注册表，找到最佳匹配项
2. 提示 Agent 确认推荐
3. 如果获批（或如果设置中启用了自动安装），则触发安装

插件发现失败不会导致致命错误——编排器会将受影响的步骤标记为 `skipped`（跳过），并继续执行计划的其余部分。

### 3. 计划执行 {#3-plan-execution}

编排器使用计划 ID 调用 `execute_site_plan`。执行过程是分阶段、分步骤进行的：

- **步骤引用** (`__ref:` 前缀) — 步骤可以引用先前步骤的输出。在上面的示例中，`__ref:create_menu.menu_id` 会被解析为 `create_menu` 步骤返回的 `menu_id`。
- **并行步骤** — 在同一阶段内，如果步骤之间没有相互依赖关系，并且设置了 `parallel` 标志，这些步骤将并发分派。
- **步骤超时** — 每个步骤都有独立的超时时间（默认为 `Ability Timeout` 设置）。如果步骤超时，它将被标记为 `failed`（失败），但计划会继续执行。

### 4. 进度跟踪 {#4-progress-tracking}

随时调用 `get_plan_progress` 来检查执行状态：

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

WP-CLI 用户可以使用以下命令监控进度：

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. 错误恢复 {#5-error-recovery}

当一个步骤失败时，编排器会检查计划中是否定义了**回退**步骤：

- **有回退机制** — 会立即尝试回退步骤。如果成功，执行继续；如果回退步骤也失败了，则该步骤被标记为 `failed`，执行继续到下一个步骤。
- **无回退机制** — 该步骤被标记为 `failed`。非关键步骤会被跳过；关键步骤（标记为 `required: true`）会暂停当前阶段，并触发阶段级别的恢复尝试。

Agent 会在最终的计划摘要中报告所有失败，并可能为无法恢复的错误建议手动修复步骤。

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

根据自然语言的目标描述生成结构化的网站计划。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | 对所需网站的自然语言描述 |
| `style` | string | No | 视觉风格偏好：`minimal`、`bold`、`professional`、`playful`。默认：Agent 根据目标选择 |
| `plugins` | array | No | 要包含在计划中的插件 slug。编排器会自动添加所需的插件。 |
| `dry_run` | boolean | No | 如果为 `true`，则返回计划 JSON，但不会保存或执行它。默认 `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

开始执行先前生成的网站计划。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 要执行的计划 ID |
| `auto_install_plugins` | boolean | No | 如果为 `true`，则自动安装所需的插件，无需确认。默认 `false` |
| `max_retries` | integer | No | 在移动到下一个步骤之前，重试失败步骤的次数。默认 `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

返回网站计划当前的执行状态。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 要查询的计划 ID |

**Returns** 上述 [进度跟踪](#4-progress-tracking) 中描述的进度对象。

---

### `handle_plan_error` {#handleplanerror}

手动解决失败的步骤，并从下一个步骤恢复计划执行。当自动恢复不可行，而您需要进行干预时使用此功能。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 计划 ID |
| `step_id` | string | Yes | 失败步骤的 ID |
| `resolution` | string | Yes | 值为 `skip`（跳过并继续）、`retry`（立即重试该步骤）或 `mark_done`（视为成功，无需重新运行）之一 |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 与 v2 的比较 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans（多阶段计划） | No | Yes |
| Step output references (`__ref:`)（步骤输出引用） | No | Yes |
| Plugin discovery（插件发现） | Manual（手动） | Automatic（自动） |
| Progress tracking API（进度跟踪 API） | No | Yes |
| Error recovery（错误恢复） | Fail-and-stop（失败即停止） | Fallback + continue（回退+继续） |
| Parallel step execution（并行步骤执行） | No | Yes (opt-in per phase)（每阶段可选） |
| WP-CLI plan commands（WP-CLI 计划命令） | No | Yes |
| Benchmark integration（基准测试集成） | No | Yes (`q-restaurant-website`) |

---

## WP-CLI 计划命令 {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

根据目标描述生成网站计划。

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

执行先前生成的计划。

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

显示正在执行或已完成计划的当前进度。

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

列出所有网站计划（待处理、进行中和已完成）。

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

将失败的计划重置为 `pending`（待处理）状态，以便从头开始重新执行。

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
