---
title: WP-CLI 参考
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI 参考手册

Gratis AI Agent 提供了一个 `wp gratis-ai-agent` 命令家族，用于从命令行执行代理（agent）基准测试、管理能力（abilities）和查询代理状态。所有命令都需要 WP-CLI 2.0 或更高版本。

## 安装

当插件激活时，WP-CLI 命令会自动注册。请使用以下命令进行验证：

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

运行代理能力基准测试套件——这是一组复杂的、多步骤的提示，用于测试代理的全部能力范围。您可以使用此命令来评估模型性能、比较不同的 AI 提供商，或在部署到生产环境之前验证能力包。

### 语法

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### 选项

| 选项 | 描述 |
|---|---|
| `--question=<id>` | 按 ID 运行单个基准测试问题，而不是整个套件 |
| `--provider=<provider>` | 覆盖当前配置的 AI 提供商（例如：`anthropic`、`openai`） |
| `--model=<model>` | 覆盖当前配置的模型（例如：`claude-opus-4-6`、`gpt-4o`） |
| `--output=<format>` | 输出格式：`table`（默认）、`json`、`csv` |
| `--save` | 将基准测试结果保存到数据库，以便进行历史比较 |

### 示例

使用当前配置的提供商和模型运行完整的基准测试套件：

```bash
wp gratis-ai-agent benchmark
```

运行单个问题（`q-restaurant-website`）并以 JSON 格式输出：

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

针对特定模型运行并保存结果：

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### 输出

基准测试会为每个问题输出一行，包含以下列：

| 列名 | 描述 |
|---|---|
| `ID` | 问题标识符 |
| `Description` | 基准测试场景的简短摘要 |
| `Score` | 通过/失败或数值分数（0–100） |
| `Abilities Used` | 调用的能力列表（逗号分隔） |
| `Tokens` | 消耗的总 Token 数 |
| `Duration` | 耗时（秒） |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### 基准测试问题

默认套件包括：

| ID | 场景 |
|---|---|
| `q-portfolio-site` | 创建一个带有项目分类（Project Category）分类法的 Portfolio CPT，并注册一个区块模式 |
| `q-restaurant-website` | 使用包含菜单 CPT、预订表单和导航的完整餐厅网站 |
| `q-dark-mode-theme` | 应用深色模式预设，并注入品牌颜色 |
| `q-nav-builder` | 创建一个包含嵌套下拉菜单的四项主导航菜单 |
| `q-options-roundtrip` | 读取、修改并恢复一组 WordPress 选项 |
| `q-ability-install` | 发现并安装最适合描述用例的能力包 |

您可以通过 `gratis_ai_agent_benchmark_questions` 过滤器注册额外的测试问题。

---

## `wp gratis-ai-agent abilities`

用于管理已安装的能力和能力包。

### `wp gratis-ai-agent abilities list`

列出所有已注册的能力、它们的来源（核心或能力包）以及当前的状态。

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**选项**

| 选项 | 描述 |
|---|---|
| `--format=<format>` | 输出格式：`table`（默认）、`json`、`csv` |

**示例输出**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install`

从注册表中下载并激活一个能力包。

```bash
wp gratis-ai-agent abilities install <slug>
```

**参数**

| 参数 | 描述 |
|---|---|
| `<slug>` | 能力包的插件 slug，例如：`gratis-ai-agent-woocommerce` |

**示例**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

禁用特定的能力，但不会移除整个能力包。这对于限制代理在特定网站上的作用范围非常有用。

```bash
wp gratis-ai-agent abilities disable <ability>
```

**示例**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

重新启用之前禁用的能力。

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

显示当前的代理配置和连接状态。

```bash
wp gratis-ai-agent status
```

**示例输出**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs`

显示来自调试日志的最近的代理活动记录。

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**选项**

| 选项 | 描述 |
|---|---|
| `--last=<n>` | 显示最近 N 条日志记录。默认值 `50` |
| `--level=<level>` | 按级别过滤：`info`、`warning`、`error` |
| `--ability=<ability>` | 按能力名称过滤 |

**示例**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

重置代理状态：清除注入的 CSS、移除代理注册的 CPT 和分类法、重置全局样式，并清空代理的选项缓存。此操作不会移除插件或其设置。

```bash
wp gratis-ai-agent reset [--yes]
```

添加 `--yes` 选项可以跳过确认提示。

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## 退出代码

所有命令成功时退出代码为 `0`。非零退出代码：

| 代码 | 含义 |
|---|---|
| `1` | 通用错误（请查看错误消息） |
| `2` | 提供商连接失败 |
| `3` | 未找到能力 |
| `4` | 未找到基准测试问题 |
