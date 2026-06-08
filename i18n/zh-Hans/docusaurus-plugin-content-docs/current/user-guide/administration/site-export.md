---
title: 站点导出
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# 站点导出

**Site Export**（站点导出）管理页面允许网络管理员将单个站点或整个网络打包成可下载的归档文件，用于迁移、备份或交接工作。

## 导出单个站点

前往 **Ultimate Multisite > Site Export**，然后选择 **Generate new Site Export**（生成新的站点导出）。选择您要导出的子站点，然后选择归档文件是否包含上传文件、插件和主题。

导出完成后，从 **Existing Exports**（现有导出）列表中下载 ZIP 文件。现在的导出 ZIP 文件包含自启动的 `index.php` 和 `readme.txt`，因此即使不先安装单独的导入插件，也可以将该归档文件上传到新的主机并启动。

## 导出整个网络

当您需要包含网络中所有子站点的单个归档文件时，请使用 Site Export 页面上的 **Network Export**（网络导出）。这在主机迁移、灾难恢复演练或分阶段重建时非常有用，因为这些场景要求每个子站点必须作为一个整体移动。

由于网络导出的文件大小可能远大于单个站点导出，请在流量较低的时段运行此功能，并确认目标存储空间有足够的可用空间来容纳上传文件、插件、主题和生成的 ZIP 文件。

### 网络导入包 (Network Import Bundles)

从 Ultimate Multisite 2.12.0 版本开始，Site Exporter 可以生成 **network import bundles**（网络导入包）—— 这是一种专门为简化网络范围的站点恢复而设计的特殊归档文件。网络导入包包含恢复多个站点到新网络安装所需的所有文件和元数据。

#### 生成网络导入包

1. 前往 **Ultimate Multisite > Site Export**
2. 点击 **Generate new Network Export**（生成新的网络导出）
3. 选择 **Network Import Bundle** 作为导出类型
4. 选择是否包含上传文件、插件和主题
5. 点击 **Generate**（生成）
6. 从 **Existing Exports**（现有导出）列表中下载包 ZIP 文件

#### 从网络导入包恢复

要从网络导入包恢复站点：

1. 在目标主机上安装 Ultimate Multisite
2. 完成多站点设置向导
3. 在新的网络上前往 **Ultimate Multisite > Site Export**
4. 点击 **Import Network Bundle**（导入网络包）
5. 上传网络导入包 ZIP 文件
6. 遵循屏幕上的导入说明
7. 导入过程将恢复所有站点、其内容和配置。

网络导入包会保留以下内容：
- 站点内容（文章、页面、自定义文章类型）
- 站点设置和选项
- 用户角色和权限
- 插件和主题（如果包含在包内）
- 媒体上传文件（如果包含在包内）
- 自定义数据库表和数据

## 安装自启动的导出 ZIP

要在新的主机上恢复自启动的 ZIP 文件：

1. 将导出的 ZIP 文件内容上传到目标网站根目录。
2. 在浏览器中打开上传的 `index.php`。
3. 按照包内导出提供的屏幕安装说明进行操作。
4. 在删除临时文件之前，请查阅包内附带的 `readme.txt`，了解导出特定的注意事项。

有关插件特定的安装和导入详情，请参阅 [Site Exporter addon documentation](/addons/site-exporter)。

对于 Ultimate Multisite 2.9.0 版本中增加的单个站点工具，请参阅 [Export & Import](/user-guide/administration/export-import)。
