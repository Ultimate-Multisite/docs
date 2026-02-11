---
title: 插件模板
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# 插件模板

{{ADDON_DESCRIPTION}}

## 需求

- WordPress 5.3 或更高
- PHP 7.4 或更高
- Multisite Ultimate plugin（已激活）

## 安装

1. 将插件文件上传到您的 `/wp-content/plugins/` 目录
2. 通过 WordPress 的 '插件' 菜单激活插件
3. 在网络管理后台配置插件设置

## 开发

### 设置

```bash
# Install dependencies
composer install
npm install

# Run tests
npm run test

# Run code standards checks
vendor/bin/phpcs
vendor/bin/phpstan

# Fix code style issues
vendor/bin/phpcbf

# Build for production
npm run build
```

### 项目结构

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes and includes
│   ├── class-multisite-ultimate-updater.php  # Update handler
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Main functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Test cases
├── views/                       # Template files
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Images
├── lang/                        # Language files
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### 测试

插件包含一个全面的测试框架：

- **单元测试**：基于 PHPUnit 的测试，使用 WordPress 测试套件
- **基础测试类**：提供常见测试场景的辅助方法
- **测试覆盖率**：已配置以跟踪代码覆盖率
- **多站点测试**：在多站点环境中运行测试

### 代码规范

- **WordPress 编码规范**：通过 PHPCS 强制执行
- **PHP 7.4+ 兼容性**：支持现代 PHP 功能
- **静态分析**：集成 PHPStan 进行类型检查
- **代码现代化**：使用 Rector 规则进行 PHP 升级

### 构建系统

- **资产处理**：对 CSS/JS 文件进行压缩
- **翻译**：生成 POT 文件
- **打包**：创建归档文件以供分发
- **开发模式**：未压缩的资产用于调试

## 配置

插件支持多种可通过网络管理界面访问的配置选项。

## 挂钩与过滤器

### 动作

- `ultimate-multisite-addon-template_init` - Fired after addon initialization
- `ultimate-multisite-addon-template_loaded` - Fired after all addon files are loaded

### 过滤器

- `ultimate-multisite-addon-template_settings` - Modify addon settings
- `ultimate-multisite-addon-template_enabled` - Override addon enable/disable status

## 许可证

此插件采用 GPL v3 或更高版本授权。

## 支持

如需支持和文档，请访问 [MultisiteUltimate.com](https://multisiteultimate.com)

## 变更日志

- 版本 1.0.1 (2025-09-28)：将前缀重命名为 ultimate-multisite；更新文本域；版本升级。

- 版本 (2025-09-28)：将前缀重命名为 ultimate-multisite；更新文本域；版本升级。
