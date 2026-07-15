---
title: 能力可见性
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# 能力可见性

Superdav AI Agent v1.12.0 引入了 **能力可见性** (Ability Visibility) 控制功能，用于管理哪些界面可以暴露哪些能力。这允许管理员精细调整哪些代理功能可以通过 REST API、MCP 服务器、WooCommerce 集成和其他接口使用。

## 什么是能力可见性？ {#what-is-ability-visibility}

能力可见性是一个权限系统，用于控制以下内容：

- **哪些能力**可供代理使用
- **它们在哪里暴露**（REST API、MCP、WooCommerce 等）
- **谁可以访问它们**（通过合作伙伴白名单）
- **它们如何分类**（已识别 vs. 未识别）

每项能力都带有可见性级别，决定了它在不同界面上的可用性。

## 可见性级别 {#visibility-levels}

### 公开 (Public) {#public}

**公开能力**在所有地方都可用：

- REST API 端点
- MCP 服务器
- WooCommerce 集成
- 聊天界面
- 所有用户角色（具有适当权限）

示例：`scaffold-block-theme`, `activate-theme`, `send-email`

### 内部 (Internal) {#internal}

**内部能力**仅在您的 WordPress 安装内部可用：

- 聊天界面
- 管理面板
- 仅限登录用户
- 不通过 REST API 或外部集成暴露

示例：`manage-settings`, `view-analytics`, `export-data`

### 合作伙伴 (Partner) {#partner}

**合作伙伴能力**仅对白名单中的合作伙伴可用：

- 需要明确的合作伙伴白名单条目
- 通过合作伙伴凭证可通过 REST API 使用
- 通过合作伙伴身份验证可通过 MCP 使用
- 普通用户不可用

示例：`bulk-import-users`, `modify-billing`, `access-analytics`

### 已禁用 (Disabled) {#disabled}

**已禁用能力**在任何地方都不可用：

- 不通过任何界面暴露
- 聊天中不可用
- 管理面板中不可用
- 适用于已弃用或实验性的能力

## 管理能力可见性 {#managing-ability-visibility}

### 访问能力可见性设置 {#accessing-ability-visibility-settings}

1. 导航到 **WordPress 管理后台** → **Superdav AI Agent** → **设置**
2. 点击 **能力** (Abilities) 选项卡
3. 您将看到所有已安装能力的列表及其可见性级别

### 查看能力详情 {#viewing-ability-details}

点击任何能力，您可以看到：

- **名称**：能力的标识符
- **描述**：能力的作用
- **当前可见性**：公开、内部、合作伙伴或已禁用
- **合作伙伴白名单**：哪些合作伙伴可以访问（如果可见性为合作伙伴）
- **上次更新**：可见性最后更改的时间
- **状态**：已识别或未识别

### 更改可见性级别 {#changing-visibility-levels}

要更改能力的可见性：

1. 点击列表中的能力
2. 从下拉菜单中选择新的可见性级别
3. 如果选择“合作伙伴”，请将合作伙伴标识符添加到白名单中
4. 点击 **保存**

示例：

```
能力：bulk-import-users
当前可见性：公开
更改为：合作伙伴
合作伙伴白名单：partner-123, partner-456
```

### 批量操作 {#bulk-operations}

要更改多个能力的可见性：

1. 勾选能力旁边的复选框
2. 从批量操作下拉菜单中选择新的可见性级别
3. 点击 **应用**

## 合作伙伴白名单 {#partner-allow-list}

**合作伙伴白名单**控制哪些外部合作伙伴可以访问合作伙伴级别的能力。

### 添加合作伙伴 {#adding-partners}

1. 导航到 **Superdav AI Agent** → **设置** → **合作伙伴**
2. 点击 **添加合作伙伴**
3. 输入合作伙伴标识符（通常是 API 密钥或组织 ID）
4. 可选地添加合作伙伴名称和描述
5. 点击 **保存**

### 将能力分配给合作伙伴 {#assigning-abilities-to-partners}

添加合作伙伴后：

1. 导航到 **能力** (Abilities) 选项卡
2. 找到具有合作伙伴可见性的能力
3. 点击编辑
4. 在“合作伙伴白名单”部分，勾选应该拥有访问权限的合作伙伴的复选框
5. 点击 **保存**

### 撤销合作伙伴访问权限 {#revoking-partner-access}

要移除合作伙伴的访问权限：

1. 编辑该能力
2. 在白名单中取消勾选该合作伙伴的复选框
3. 点击 **保存**

该合作伙伴将立即失去对该能力的访问权限。

## 未识别的能力 {#unclassified-abilities}

当您安装了一个 Superdav AI Agent 不认识的第三方能力时，它会被标记为 **未识别** (Unclassified)。

### 未识别能力管理员通知 {#admin-notice-for-unclassified-abilities}

您会看到一个管理员通知：

```
⚠️ 检测到未识别的能力

以下能力已安装但未被识别：
- custom-import-tool
- external-api-wrapper

这些能力可能存在安全或兼容性风险。
请进行审查并进行分类。

[审查能力] [忽略]
```

### 审查未识别的能力 {#reviewing-unclassified-abilities}

1. 点击通知中的 **审查能力**
2. 对于每个未识别的能力，您将看到：
   - 能力名称和描述
   - 来源（哪个插件/附加组件安装的）
   - 建议的可见性级别
   - 安全评估

3. 选择一个可见性级别：
   - **公开 (Public)**：信任该能力；在所有地方暴露它
   - **内部 (Internal)**：仅限制内部使用
   - **合作伙伴 (Partner)**：限制给特定的合作伙伴
   - **已禁用 (Disabled)**：不使用此能力

4. 点击 **分类** 来保存您的决定

### 为什么要分类未识别的能力？ {#why-classify-unclassified-abilities}

分类能力的好处：

- **提高安全性**：您明确批准了哪些内容是暴露的
- **防止意外**：未识别的能力默认是禁用的
- **启用功能**：一旦分类，该能力就会可用
- **记录决策**：您的选择会记录下来，用于审计目的

## 不同界面中的可见性 {#visibility-in-different-surfaces}

### REST API {#rest-api}

**公开能力**可通过 REST 端点使用：

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**内部和合作伙伴能力**无法通过 REST API 使用。

### MCP 服务器 {#mcp-servers}

**公开能力**可通过 MCP 使用：

```
MCP 服务器：Superdav AI Agent
可用能力：
- scaffold-block-theme
- activate-theme
- send-email
```

**内部能力**不会通过 MCP 暴露。

**合作伙伴能力**仅凭合作伙伴凭证可用。

### WooCommerce 集成 {#woocommerce-integration}

与 WooCommerce 相关的**公开能力**可用：

- 产品管理
- 订单处理
- 客户沟通

**内部能力**不会暴露给 WooCommerce。

### 聊天界面 {#chat-interface}

**所有能力**（公开、内部、合作伙伴）都可以在聊天中使用，具体取决于用户权限：

- 管理员可以看到所有能力
- 普通用户只能看到公开能力
- 合作伙伴可以看到公开能力 + 合作伙伴能力（如果已加入白名单）

## 安全最佳实践 {#security-best-practices}

### 最小权限原则 {#principle-of-least-privilege}

- 将能力设置为仍允许使用但限制最严格的可见性级别
- 对于敏感操作，使用合作伙伴可见性
- 禁用您不使用的能力

### 定期审计 {#regular-audits}

- 每月审查能力可见性
- 检查未识别的能力
- 移除未使用的合作伙伴的访问权限

### 日志记录和监控 {#logging-and-monitoring}

- 监控哪些能力使用最频繁
- 跟踪合作伙伴的访问模式
- 对异常的能力使用发出警报

### 第三方能力 {#third-party-abilities}

- 在启用前审查第三方能力
- 明确分类它们
- 从内部或合作伙伴可见性开始
- 仅在经过严格审查后才能提升为公开

## 故障排除 {#troubleshooting}

**能力在列表中看不到**
- 验证该能力是否已安装且处于活动状态
- 检查插件/附加组件是否已启用
- 刷新页面

**我无法更改能力的可见性**
- 验证您是否具有管理员权限
- 检查该能力是否被插件锁定
- 尝试禁用冲突的插件

**合作伙伴无法访问某个能力**
- 验证该合作伙伴是否在白名单中
- 检查该能力的可见性是否设置为“合作伙伴”
- 确认合作伙伴的凭证是否正确
- 检查 API 日志是否有身份验证错误

**未识别的能力持续出现**
- 在管理员通知中审查并分类它们
- 检查您的分类是否已保存
- 验证提供该能力的插件是否已更新

## 从旧模式迁移 {#migration-from-legacy-mode}

如果您正在从 Superdav AI Agent 的旧版本升级：

- 所有现有能力将自动分类为公开
- 根据需要审查和调整可见性
- 除非您想限制访问，否则无需采取任何操作

有关过渡到原生 Abilities API 集成的更多详细信息，请参阅 **第三方模式迁移**。

## 后续步骤 {#next-steps}

配置能力可见性后：

1. **审查您的能力**：审计所有已安装的能力
2. **分类未识别的能力**：回复管理员通知
3. **设置合作伙伴**：如果使用合作伙伴可见性，请添加合作伙伴
4. **监控使用情况**：跟踪哪些能力使用最频繁
5. **记录决策**：记录您选择每种可见性级别的原因
