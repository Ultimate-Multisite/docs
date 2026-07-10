---
title: 第三方模式迁移
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# 第三方模式迁移 {#third-party-mode-migration}

Superdav AI Agent v1.12.0 更改了第三方能力（third-party abilities）的处理方式。**第三方模式现在默认设置为自动（auto）**，这意味着在 WordPress 7.0+ 上，您无需手动配置即可启用原生的 WordPress Abilities API 集成。

## 变化了什么？ {#what-changed}

### v1.12.0 之前 {#before-v1120}

第三方能力需要手动配置：

- 您必须明确启用“第三方模式”
- 能力是从自定义注册表加载的
- 与 WordPress Abilities API 的集成是可选的
- 默认模式是遗留模式（Legacy mode）

### v1.12.0 之后 {#after-v1120}

第三方能力可以自动工作：

- 第三方模式默认设置为“自动”（auto）
- 能力原生集成到 WordPress Abilities API
- 在 WordPress 7.0+ 上无需手动配置
- 遗留模式仍然可用于较旧的 WordPress 版本

## 哪些用户会受到影响？ {#who-is-affected}

### 新安装（WordPress 7.0+） {#new-installations-wordpress-70}

**无需操作。** 第三方模式会自动设置为“自动”（auto），能力开箱即用。

### 已有安装 {#existing-installations}

**您的设置会被保留。** 如果您之前使用的是：

- **遗留模式（Legacy mode）**：您将保持在遗留模式（无变化）
- **手动第三方模式（Manual third-party mode）**：您将保持在手动模式（无变化）
- **自动模式（Auto mode）**：您将继续使用自动模式（无变化）

### WordPress 版本低于 7.0 {#wordpress-versions-before-70}

**遗留模式仍然可用。** 如果您使用的是 WordPress 6.x 或更早版本：

- 第三方模式默认设置为“遗留”（legacy）
- 如果需要，您可以手动启用第三方模式
- 升级到 WordPress 7.0+ 以使用原生的 Abilities API

## 了解不同模式 {#understanding-the-modes}

### 自动模式（Auto Mode）（新的默认模式） {#auto-mode-new-default}

**自动模式**使用原生的 WordPress Abilities API 集成：

- 能力通过 WordPress hooks 进行注册
- 与 WordPress 7.0+ Abilities API 完全兼容
- 自动发现第三方能力
- 无需手动配置

**何时使用**：使用第三方能力的 WordPress 7.0+

### 手动模式（Manual Mode） {#manual-mode}

**手动模式**需要明确配置：

- 您指定要加载哪些第三方能力
- 适用于测试或选择性加载能力
- 需要编辑配置文件
- 控制力更强，但设置也更复杂

**何时使用**：测试、选择性加载能力或自定义配置

### 遗留模式（Legacy Mode） {#legacy-mode}

**遗留模式**使用旧的第三方能力系统：

- 自定义能力注册表（而非 WordPress Abilities API）
- 与较旧的 WordPress 版本向后兼容
- 没有原生的 WordPress 集成
- 已弃用但仍受支持

**何时使用**：WordPress 6.x 或更早版本，或需要遗留兼容性时

## 检查当前模式 {#checking-your-current-mode}

### 通过管理面板 {#via-admin-panel}

1. 导航到 **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. 查找 **Third-Party Mode** 设置
3. 您将看到当前的模式以及更改它的选项

### 通过代码 {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', 或 'legacy'
```

## 更改模式 {#changing-your-mode}

### 切换到自动模式（Auto Mode） {#switch-to-auto-mode}

如果您使用的是 WordPress 7.0+ 并且想使用自动模式：

1. 导航到 **Superdav AI Agent** → **Settings**
2. 找到 **Third-Party Mode**
3. 选择 **Auto (WordPress Abilities API)**
4. 点击 **Save**

Superdav AI Agent 将自动发现并注册第三方能力。

### 切换到手动模式（Manual Mode） {#switch-to-manual-mode}

如果您想手动控制哪些能力加载：

1. 导航到 **Superdav AI Agent** → **Settings**
2. 找到 **Third-Party Mode**
3. 选择 **Manual**
4. 点击 **Save**
5. 编辑您的配置文件，指定要加载哪些能力

### 切换到遗留模式（Legacy Mode） {#switch-to-legacy-mode}

如果您需要遗留兼容性：

1. 导航到 **Superdav AI Agent** → **Settings**
2. 找到 **Third-Party Mode**
3. 选择 **Legacy**
4. 点击 **Save**

## 自动模式的优势 {#benefits-of-auto-mode}

### 自动发现 {#automatic-discovery}

能力会自动从以下位置发现：

- 已安装的插件
- 激活的主题
- 必须使用插件（Must-use plugins）
- 滴入插件（Drop-in plugins）

无需手动注册。

### 原生集成 {#native-integration}

能力与 WordPress Abilities API 集成：

- 与 WordPress 核心保持一致
- 在 WordPress 管理后台工作
- 与使用 Abilities API 的其他插件兼容
- 随着 WordPress 的发展，具备前瞻性

### 简化管理 {#simplified-management}

- 无需编辑配置文件
- 无需手动注册能力
- 能力可见性（Ability Visibility）控制自动工作
- 管理通知会提醒您未分类的能力

### 更好的性能 {#better-performance}

- 能力会被缓存
- 按需延迟加载
- 针对 WordPress 7.0+ 进行了优化

## 迁移路径 {#migration-path}

### 如果您使用的是 WordPress 6.x {#if-youre-on-wordpress-6x}

1. **升级到 WordPress 7.0+**（准备好时）
2. **将 Superdav AI Agent 更新到 v1.12.0+**
3. **将第三方模式更改为自动（Auto）**（可选；遗留模式仍然可用）
4. **检查能力可见性**，确保适当的访问控制

### 如果您使用的是 WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **将 Superdav AI Agent 更新到 v1.12.0+**
2. **验证第三方模式是否设置为自动（Auto）**（默认应该是）
3. **检查能力可见性**，确保适当的访问控制
4. **测试第三方能力**，确认它们是否正常工作

## 故障排除 {#troubleshooting}

### 自动模式下能力没有加载 {#abilities-arent-loading-in-auto-mode}

- 验证您是否使用的是 WordPress 7.0+
- 检查第三方模式是否设置为“自动”（Auto）
- 验证提供该能力的插件是否已激活
- 检查 WordPress 错误日志以查找注册错误

### 我想保留遗留模式 {#i-want-to-keep-legacy-mode}

- 前往 **Settings** → **Third-Party Mode**
- 选择 **Legacy**
- 点击 **Save**
- 遗留模式将继续工作

### 我的自定义能力没有显示 {#my-custom-abilities-arent-showing}

- 验证它们是否通过 WordPress hooks 注册
- 检查它们是否正确实现了 Abilities API
- 查阅 WordPress 错误日志
- 使用 **Ability Visibility** 管理页面查看所有已注册的能力

### 我收到了“未分类能力”通知 {#im-getting-unclassified-ability-notices}

- 对于新的第三方能力，这是正常的
- 在管理通知中进行审查和分类
- 查看 **Ability Visibility** 以获取分类详情

## 向后兼容性 {#backward-compatibility}

### 现有配置 {#existing-configurations}

如果您有现有的第三方能力配置：

- **遗留模式（Legacy mode）**：您的配置将继续工作
- **手动模式（Manual mode）**：您的配置将继续工作
- **自动模式（Auto mode）**：您的配置将被忽略（自动模式会接管）

如需保留自定义配置，请保持在手动模式或遗留模式。

### 弃用时间表 {#deprecation-timeline}

- **v1.12.0**：遗留模式和手动模式仍完全支持
- **v1.13.0+**：遗留模式可能会显示弃用通知
- **v2.0.0**：遗留模式可能会被移除（待定）

## 最佳实践 {#best-practices}

### 对于新安装 {#for-new-installations}

- 使用自动模式（它是默认的）
- 让 Superdav AI Agent 自动发现能力
- 使用 Ability Visibility 来控制访问权限

### 对于现有安装 {#for-existing-installations}

- 尽可能升级到 WordPress 7.0+
- 切换到自动模式以简化管理
- 使用 Ability Visibility 审查和分类能力

### 对于自定义能力 {#for-custom-abilities}

- 通过 WordPress hooks 注册能力（Abilities API）
- 避免使用自定义能力注册表
- 在 WordPress 7.0+ 的自动模式下进行测试

## 后续步骤 {#next-steps}

1. **检查您的 WordPress 版本**：验证您是否处于 7.0+，以便使用自动模式
2. **审查您的第三方模式**：前往 Settings 检查当前模式
3. **如有需要，进行更新**：如果您处于 WordPress 7.0+，请切换到自动模式
4. **分类能力**：审查并分类任何未分类的能力
5. **测试**：验证您的第三方能力是否正常工作

## 相关主题 {#related-topics}

- **Ability Visibility**：控制哪些能力可以在哪里暴露
- **WordPress Abilities API**：了解原生的 WordPress 能力注册
- **Third-Party Ability Development**：创建与自动模式兼容的能力
