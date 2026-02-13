---
title: 多站点设置向导
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# 多站点设置向导

Ultimate Multisite 包含一个内置向导，能够自动将标准 WordPress 安装转换为 WordPress 多站点网络。这样就不需要手动编辑 `wp-config.php` 或运行数据库命令。

:::tip
如果您的 WordPress 安装已经以多站点网络运行，您可以完全跳过此步骤。向导仅在多站点尚未启用时出现。
:::

## 向导何时出现？

当您在标准（非多站点）WordPress 安装上激活 Ultimate Multisite 时，插件会检测到多站点未启用，并自动将您重定向到多站点设置向导，而不是常规设置向导。

您也可以直接在 **WP Admin > Ultimate Multisite > Multisite Setup** 访问它。

## 先决条件

在运行向导之前，请确保：

- 您拥有对 WordPress 安装的 **管理员访问权限**
- 您服务器的 `wp-config.php` 文件对 Web 服务器 **可写**
- 您有最近的文件和数据库备份

:::warning
向导会修改您的 `wp-config.php` 文件并创建新的数据库表。请在继续之前务必创建备份。
:::

## 第 1 步：欢迎

第一个屏幕解释了 WordPress 多站点是什么以及向导将执行的操作：

- 在您的 WordPress 配置中启用多站点功能
- 创建必要的网络数据库表
- 将所需的多站点常量添加到 `wp-config.php`
- 在整个网络中网络激活 Ultimate Multisite

![多站点设置向导 - 欢迎步骤](/img/installation/multisite-wizard/wizard-welcome.png)

点击 **继续** 继续。

## 第 2 步：网络配置

此步骤要求您配置网络设置。

### 站点结构

选择您的网络站点如何组织：

- **子域名**（推荐）— 站点拥有自己的子域名，例如 `site1.yourdomain.com`
- **子目录** — 站点以路径形式创建，例如 `yourdomain.com/site1`

:::note
如果您选择子域名，您需要为您的域名配置 **通配符 DNS** 和 **通配符 SSL 证书**。大多数托管 WordPress 主机会自动处理此事。请参阅 [Ultimate Multisite 101](./ultimate-multisite-101) 以获取详细比较。
:::

### 网络标题

输入网络名称。默认值为当前站点标题后追加“Network”。您可以稍后在网络设置中更改此名称。

### 网络管理员邮箱

用于网络管理通知的电子邮件地址。默认值为当前用户的电子邮件地址。

![多站点设置向导 - 网络配置](/img/installation/multisite-wizard/wizard-network-configuration.png)

填写完字段后，点击 **继续** 继续。

## 第 3 步：安装

点击 **Install** 按钮开始。向导按顺序执行五个自动化步骤，每个步骤都会实时显示进度：

![多站点设置向导 - 安装待定](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Description |
|------|-------------|
| **Enable Multisite** | 将 `WP_ALLOW_MULTISITE` 常量添加到 `wp-config.php` |
| **Create Network** | 创建多站点数据库表（`wp_site`、`wp_sitemeta`、`wp_blogs` 等）并使用您的网络配置填充它们 |
| **Update Configuration** | 将最终的多站点常量添加到 `wp-config.php`（`MULTISITE`、`SUBDOMAIN_INSTALL`、`DOMAIN_CURRENT_SITE` 等） |
| **Fix Cookies** | 确保网络元数据中的站点 URL 正确，以防激活后出现身份验证问题 |
| **Network Activate Plugin** | 在整个网络中网络激活 Ultimate Multisite，使其在整个网络中运行 |

每个步骤会显示以下状态之一：

- **Pending** — 等待处理
- **Installing...** — 正在运行
- **Success!** — 成功完成
- **Error message** — 出现错误（消息将描述问题）

一旦所有步骤成功完成，您将看到每个项目的绿色“Success!”状态：

![多站点设置向导 - 安装完成](/img/installation/multisite-wizard/wizard-installation-complete.png)

随后向导将自动进入完成屏幕。

## 第 4 步：完成

安装完成后，您将看到一条成功消息，确认已启用 WordPress 多站点。

![多站点设置向导 - 设置完成](/img/installation/multisite-wizard/wizard-complete.png)

现在，您可以继续使用 Ultimate Multisite 设置向导来配置您的 WaaS 平台（公司信息、默认内容、支付网关等）。

:::note
多站点安装完成后，您的浏览器将通过新启用的网络管理员进行重定向。您可能需要再次登录，因为身份验证 cookie 已为多站点环境更新。
:::

## 手动设置回退

如果向导无法写入您的 `wp-config.php` 文件（由于文件权限或服务器限制），它将显示您需要手动添加的确切代码：

1. 需要添加到 `/* That's all, stop editing! */` 行上方的 **wp-config.php 常量**
2. 与您选择的站点结构（子域名或子目录）相对应的 **.htaccess 重写规则**

完成手动更改后，刷新页面，向导将检测到多站点现在已激活。

## 故障排除

### 向导提示 wp-config.php 无法写入

您的 Web 服务器进程需要对 `wp-config.php` 文件具有写权限。您可以：

- 临时将文件权限更改为 `644` 或 `666`
- 使用向导提供的手动设置回退说明
- 向您的托管服务提供商寻求帮助

### 设置后站点无法访问（子域名）

如果您选择了子域名结构，需要为您的域名配置 **通配符 DNS**。添加一个 DNS 记录：

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

如果您不确定如何配置，请咨询您的托管服务提供商。

### 设置后身份验证问题

如果在多站点设置后您被登出或遇到 cookie 错误：

1. 清除站点的浏览器 cookie
2. 在 `yourdomain.com/wp-login.php` 重新登录
3. 如果问题仍然存在，请检查您的 `wp-config.php` 中是否将 `COOKIE_DOMAIN` 设置为 `false` — 这是子域名多站点安装中的已知问题

### 安装过程中某一步骤失败

如果某个安装步骤显示错误：

1. 记录显示的错误信息
2. 返回配置步骤并重试
3. 如果错误仍然存在，请检查服务器的 PHP 错误日志以获取更多细节
4. 已完成的步骤在后续运行中将被跳过（安装程序是幂等的）
