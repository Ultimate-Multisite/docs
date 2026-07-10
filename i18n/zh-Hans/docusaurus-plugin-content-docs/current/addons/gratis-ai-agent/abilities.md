---
title: 能力参考
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# 能力参考 {#abilities-reference}

能力是 Gratis AI Agent 可以在你的 WordPress 安装中调用的原子操作。每个能力都是一个已注册的 PHP 类，会公开一个 JSON schema — agent 会在运行时读取此 schema，以了解需要哪些参数以及该能力会返回什么。

本页记录了 Gratis AI Agent v1.9.0 随附的所有能力。

---

## 自定义文章类型 {#custom-post-types}

这些能力用于管理通过 agent 注册的自定义文章类型（CPT）。注册信息会持久保存到 WordPress options 表中，因此即使 plugin 停用并重新启用也会保留。

### `register_post_type` {#registerposttype}

注册一个新的自定义文章类型。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 文章类型键（最多 20 个字符，不含大写字母，不含空格） |
| `singular_label` | string | Yes | 人类可读的单数名称，例如 `Portfolio Item` |
| `plural_label` | string | Yes | 人类可读的复数名称，例如 `Portfolio Items` |
| `public` | boolean | No | 该文章类型是否可公开访问。默认 `true` |
| `supports` | array | No | 要支持的功能：`title`、`editor`、`thumbnail`、`excerpt`、`comments`、`revisions`、`custom-fields`。默认 `["title","editor"]` |
| `has_archive` | boolean | No | 是否启用文章类型归档页面。默认 `false` |
| `menu_icon` | string | No | 管理菜单图标的 Dashicons 类或 URL。默认 `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | 文章类型的 URL slug。默认为 `slug` |

**示例**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**返回** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

返回由 agent 注册的所有自定义文章类型。

**参数** — 无

**返回**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type` {#deleteposttype}

取消注册之前由 agent 注册的自定义文章类型。该类型的现有文章会保留在数据库中，但不再能通过该文章类型访问。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 要移除的文章类型键 |

**返回** `{ "success": true, "slug": "portfolio" }`

---

## 自定义分类法 {#custom-taxonomies}

这些能力用于管理自定义分类法。与 CPT 一样，分类法注册信息会被持久保存。

### `register_taxonomy` {#registertaxonomy}

注册一个新的自定义分类法。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 分类法键（最多 32 个字符） |
| `singular_label` | string | Yes | 人类可读的单数名称，例如 `Project Category` |
| `plural_label` | string | Yes | 人类可读的复数名称，例如 `Project Categories` |
| `post_types` | array | Yes | 此分类法应附加到的文章类型 slug |
| `hierarchical` | boolean | No | `true` 表示类别样式，`false` 表示标签样式。默认 `true` |
| `public` | boolean | No | 术语是否可公开访问。默认 `true` |
| `rewrite_slug` | string | No | 分类法的 URL slug。默认为 `slug` |

**示例**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**返回** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

返回由 agent 注册的所有自定义分类法。

**参数** — 无

**返回**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy` {#deletetaxonomy}

取消注册之前由 agent 注册的自定义分类法。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 要移除的分类法键 |

**返回** `{ "success": true, "slug": "project-category" }`

---

## 设计系统 {#design-system}

设计系统能力用于修改 WordPress 站点的视觉呈现 — 从自定义 CSS 到区块模式和站点标志。

### `inject_custom_css` {#injectcustomcss}

通过 `wp_add_inline_style` 将 CSS 追加到站点的 `<head>`。CSS 存储在 `gratis_ai_agent_custom_css` option 中，并在该能力重置时干净地取消入队。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | 要注入的有效 CSS |
| `label` | string | No | 此 CSS 块的人类可读标签，用于调试日志。默认 `"agent-injected"` |
| `replace` | boolean | No | 如果为 `true`，则替换所有先前注入的 CSS。默认 `false`（追加） |

**示例**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**返回** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

在 WordPress 模式库中注册一个可复用的区块模式。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 模式标识符，例如 `gratis/hero-dark` |
| `title` | string | Yes | 编辑器中显示的人类可读模式名称 |
| `content` | string | Yes | 该模式的序列化区块标记（HTML） |
| `categories` | array | No | 模式类别 slug，例如 `["featured", "hero"]` |
| `description` | string | No | 模式选择器中显示的简短描述 |
| `keywords` | array | No | 搜索关键词 |

**返回** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

列出由 agent 注册的所有区块模式。

**参数** — 无

**返回**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

将 WordPress 站点标志设置为给定的附件 ID 或远程图片 URL。提供 URL 时，图片会被下载并导入到媒体库中。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | 现有媒体库附件的 ID |
| `url` | string | No | 要导入并设置为标志的远程图片 URL |

必须提供 `attachment_id` 或 `url` 中的一个。

**返回** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

将命名的颜色/排版预设应用到当前启用主题的 `theme.json`（或 `global-styles`）。预设是由 Gratis AI Agent 团队维护的精选组合。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | 预设名称，例如 `minimal-dark`、`warm-editorial`、`corporate-blue` |
| `merge` | boolean | No | 如果为 `true`，则与现有值合并而不是替换。默认值为 `false` |

**可用预设**

| Preset | Description |
|---|---|
| `minimal-dark` | 近黑色背景、白色文本、单一强调色 |
| `warm-editorial` | 暖调米白背景、衬线标题、自然色系强调色 |
| `corporate-blue` | 海军蓝与白色配色，搭配专业排版 |
| `vibrant-startup` | 明亮渐变、圆角、现代无衬线字体 |
| `classic-blog` | 中性灰色、舒适行高、传统布局间距 |

**返回** `{ "success": true, "preset": "minimal-dark" }`

---

## 全局样式 {#global-styles}

全局样式功能通过 WordPress Global Styles API 读取和写入 theme.json 值，影响整个站点的所有区块和模板。

### `get_global_styles` {#getglobalstyles}

返回当前全局样式配置。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | 指向特定值的 JSON 指针，例如 `/color/palette` 或 `/typography/fontSizes`。如果省略，则返回整个对象。 |

**返回** 完整的全局样式对象或 `path` 处的值。

---

### `set_global_styles` {#setglobalstyles}

更新全局样式配置中的一个或多个值。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | 指向要设置值的 JSON 指针，例如 `/color/palette` |
| `value` | any | Yes | 新值 |

**示例** — 向调色板添加一种颜色

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**返回** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

重置所有由代理应用的全局样式更改，恢复主题默认值。

**参数** — 无

**返回** `{ "success": true }`

---

## 导航菜单 {#navigation-menus}

导航菜单功能用于创建和管理 WordPress 导航菜单及其项目。

### `create_menu` {#createmenu}

创建新的 WordPress 导航菜单。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | 菜单名称，例如 `Primary Navigation` |
| `location` | string | No | 要将此菜单分配到的主题位置，例如 `primary` |

**返回** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

重命名菜单或将其重新分配到主题位置。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | 要更新的菜单 ID |
| `name` | string | No | 新菜单名称 |
| `location` | string | No | 要分配或重新分配的主题位置 |

**返回** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

向现有导航菜单添加一个项目。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | 目标菜单的 ID |
| `type` | string | Yes | 项目类型：`custom`、`post_type` 或 `taxonomy` |
| `title` | string | No | 菜单项目的标签（`custom` 类型必填） |
| `url` | string | No | `custom` 项目的 URL |
| `object_id` | integer | No | `post_type`/`taxonomy` 项目的文章 ID 或术语 ID |
| `parent_id` | integer | No | 用于将此项目嵌套到其下的菜单项目 ID |
| `position` | integer | No | 菜单中从零开始的位置 |

**返回** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

从导航菜单中移除一个项目。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | 要移除的菜单项目 ID |

**返回** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

列出所有 WordPress 导航菜单，包括它们分配的主题位置。

**参数** — 无

**返回**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## 选项管理 {#options-management}

选项功能通过 `get_option` / `update_option` 读取和写入 WordPress 选项。内置安全阻止列表可防止意外修改关键设置。

### `get_option` {#getoption}

读取 WordPress 选项。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | 选项键，例如 `blogname` |

**返回** `{ "option_name": "blogname", "value": "My Site" }`

如果 `option_name` 位于安全阻止列表中，则返回错误。

---

### `set_option` {#setoption}

写入 WordPress 选项。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | 选项键 |
| `value` | any | Yes | 新值（数组/对象会自动序列化） |
| `autoload` | string | No | `"yes"` 或 `"no"`。默认保留现有 autoload 设置 |

如果 `option_name` 在安全阻止列表中，则返回错误。

**返回** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

删除一个 WordPress 选项。

**参数**

| 参数 | 类型 | 必需 | 描述 |
|---|---|---|---|
| `option_name` | string | 是 | 要删除的选项键 |

如果 `option_name` 在安全阻止列表中，则返回错误。

**返回** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

列出匹配某个模式的 WordPress 选项。

**参数**

| 参数 | 类型 | 必需 | 描述 |
|---|---|---|---|
| `pattern` | string | 否 | 用于筛选选项名称的 SQL LIKE 模式，例如 `gratis_%`。如果省略，则返回所有选项（在大型数据库上请谨慎使用）。 |
| `limit` | integer | 否 | 最大结果数量。默认 `50`，最大 `500` |

**返回**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## 内容管理 {#content-management}

内容管理能力可创建和编辑 WordPress 文章和页面。会返回文章 ID，以便多能力计划中的后续步骤可以引用已创建的内容。

### `create_post` {#createpost}

创建新的 WordPress 文章、页面或自定义文章类型条目。

**参数**

| 参数 | 类型 | 必需 | 描述 |
|---|---|---|---|
| `title` | string | 是 | 文章标题 |
| `content` | string | 否 | 文章正文 — 接受纯文本、HTML 或序列化的区块标记 |
| `status` | string | 否 | `draft`、`publish`、`pending`、`private`。默认 `draft` |
| `post_type` | string | 否 | 文章类型别名，例如 `post`、`page`，或任何已注册的 CPT。默认 `post` |
| `excerpt` | string | 否 | 在归档和搜索结果中显示的简短摘要 |
| `categories` | array | 否 | 要分配的分类名称或 ID 数组 |
| `tags` | array | 否 | 要分配的标签名称或 ID 数组 |
| `author` | integer | 否 | 要设为文章作者的 WordPress 用户 ID。默认为当前用户 |
| `date` | string | 否 | ISO 8601 格式的发布日期，例如 `2026-05-01T09:00:00` |
| `page_template` | string | 否 | 要分配给此文章或页面的模板文件，例如 `page-full-width.php`。仅当 `post_type` 为 `page` 或支持页面模板的 CPT 时才有意义。 |

**示例**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**返回** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

更新现有的 WordPress 文章或页面。

**参数**

| 参数 | 类型 | 必需 | 描述 |
|---|---|---|---|
| `post_id` | integer | 是 | 要更新的文章 ID |
| `title` | string | 否 | 新的文章标题 |
| `content` | string | 否 | 新的文章正文 |
| `status` | string | 否 | 新状态：`draft`、`publish`、`pending`、`private` |
| `excerpt` | string | 否 | 新摘要 |
| `categories` | array | 否 | 用此名称或 ID 数组替换完整分类列表 |
| `tags` | array | 否 | 用此名称或 ID 数组替换完整标签列表 |
| `page_template` | string | 否 | 要分配给此文章或页面的新模板文件，例如 `page-full-width.php`。传入空字符串可移除模板分配并恢复为 theme 默认值。 |

**示例** — 创建后更改模板

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**返回** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

在一次能力调用中创建多篇文章，减少站点构建或批量内容导入期间的往返请求。文章会按顺序创建；如果其中一篇失败，其他文章会继续处理，并在结果数组中报告该失败。

**参数**

| 参数 | 类型 | 必需 | 描述 |
|---|---|---|---|
| `posts` | array | 是 | 文章对象数组，每个对象接受与 `create_post` 相同的参数 |
| `stop_on_error` | boolean | 否 | 如果为 `true`，则在第一次失败后停止处理。默认 `false` |

**示例**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**返回**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

为现有文章或页面分配特色图片（文章缩略图）。接受现有媒体库附件 ID 或远程图片 URL；提供 URL 时，会自动下载并导入该图片。

**参数**

| 参数 | 类型 | 必需 | 描述 |
|---|---|---|---|
| `post_id` | integer | 是 | 要更新的文章或页面 ID |
| `attachment_id` | integer | 否 | 现有媒体库附件的 ID |
| `url` | string | 否 | 要导入并设为特色图片的远程图片 URL |
| `alt_text` | string | 否 | 如果附件是从 URL 导入的，则应用到该附件的替代文本 |

必须提供 `attachment_id` 或 `url` 之一。

**返回** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

使用当前启用的表单 plugin（Contact Form 7、WPForms、Fluent Forms 或 Gravity Forms，取决于已安装的 plugin）创建联系表单。返回一个可嵌入任何文章或页面的短代码。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | 表单 plugin 管理后台中显示的表单名称 |
| `fields` | array | Yes | 表单字段的有序列表（见下方 Field 对象） |
| `recipient` | string | No | 用于接收提交内容的电子邮件地址。默认使用 WordPress 管理员电子邮件 |
| `subject` | string | No | 电子邮件主题行。使用 Contact Form 7 时支持 `[your-name]` 和 `[your-subject]` 占位符 |
| `confirmation_message` | string | No | 成功提交后显示的消息。默认值：`"Thank you for your message. We'll be in touch soon."` |

**Field 对象**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | 内部字段名称 / 机器键 |
| `label` | string | Yes | 表单上显示的人类可读标签 |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | 提交前是否必须填写该字段。默认值 `false` |
| `options` | array | No | `select`、`checkbox` 和 `radio` 字段的选项 |
| `placeholder` | string | No | 文本类型输入的占位符文本 |

**示例**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**返回**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visual Review {#visual-review}

Visual Review 能力允许 agent 捕获实时页面的屏幕截图并对其进行分析，从而无需任何浏览器扩展即可进行自主设计评审、前后对比和视觉回归检查。

### `capture_screenshot` {#capturescreenshot}

使用服务器端无头浏览器捕获指定 URL 上 WordPress 页面的屏幕截图。图像会保存到媒体库，并返回一个 CDN URL。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | 要截图的页面完整 URL，例如 `https://example.com/about/` |
| `width` | integer | No | 视口宽度（像素）。默认值 `1280` |
| `height` | integer | No | 视口高度（像素）。默认值 `800` |
| `full_page` | boolean | No | 捕获完整可滚动页面，而不只是视口。默认值 `false` |
| `delay_ms` | integer | No | 页面加载后等待多少毫秒再捕获，适用于动画内容。默认值 `500` |
| `label` | string | No | 与媒体库中附件一起存储的人类可读标签 |

**返回**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots` {#comparescreenshots}

获取两张屏幕截图，并返回视觉差异分数以及突出显示变化区域的差异图像。适用于确认设计更改是否产生预期结果，或检测意外回归。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | 要作为“之前”状态捕获的页面 URL |
| `after_url` | string | Yes | 要作为“之后”状态捕获的页面 URL。如果是跨时间比较，可以是同一 URL |
| `width` | integer | No | 两次捕获的视口宽度。默认值 `1280` |
| `threshold` | float | No | 像素差异阈值（0.0–1.0）。此容差范围内的像素视为未变化。默认值 `0.1` |

**返回**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` 为 `0.0` 表示没有可见变化；`1.0` 表示每个像素都发生了变化。

---

### `review_page_design` {#reviewpagedesign}

捕获页面的屏幕截图并将其发送给语言模型进行视觉分析。返回涵盖布局、排版、颜色使用和无障碍问题的结构化评估。

**参数**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | 要评审的页面完整 URL |
| `focus` | string | No | 逗号分隔的要重点关注的评审区域列表：`layout`、`typography`、`colour`、`accessibility`、`mobile`。默认值：所有区域 |
| `width` | integer | No | 视口宽度。默认值 `1280` |

**返回**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## 可安装能力 {#installable-abilities}

可安装能力注册表允许你通过以 WordPress plugin 形式分发的附加能力包来扩展 agent。每个包使用标准能力 API 注册一个或多个能力。

### `list_available_abilities` {#listavailableabilities}

返回可从注册表安装的能力包目录。

**参数**

| 参数 | 类型 | 必填 | 描述 |
|---|---|---|---|
| `category` | string | 否 | 按类别筛选：`ecommerce`、`seo`、`media`、`social`、`developer` |

**返回**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#installability}

从注册表下载并激活一个能力包。

**参数**

| 参数 | 类型 | 必填 | 描述 |
|---|---|---|---|
| `slug` | string | 是 | 能力包 plugin slug |

**返回** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

查询能力注册表，以找到最适合所描述用例的 plugin，并可选择安装它。

**参数**

| 参数 | 类型 | 必填 | 描述 |
|---|---|---|---|
| `description` | string | 是 | 所需功能的自然语言描述 |
| `install` | boolean | 否 | 如果为 `true`，立即安装推荐的 plugin。默认值为 `false` |

**示例**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**返回**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
