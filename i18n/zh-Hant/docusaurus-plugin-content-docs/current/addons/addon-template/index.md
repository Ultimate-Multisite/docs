---
title: 外掛範本
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# 外掛範本 {#addon-template}

{{ADDON_DESCRIPTION}}

## 需求 {#requirements}

- WordPress 5.3 或更高版本
- PHP 7.4 或更高版本
- Multisite Ultimate 外掛 (需啟用)

## 安裝 {#installation}

1. 將外掛檔案上傳到您的 `/wp-content/plugins/` 目錄
2. 透過 WordPress 的「外掛」選單啟用外掛
3. 在網路管理員介面配置外掛設定

## 開發 {#development}

### 設定 {#setup}

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

### 專案結構 {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP 類別和包含檔案
│   ├── class-multisite-ultimate-updater.php  # 更新處理器
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # 主要功能
├── tests/                        # 單元測試
│   ├── bootstrap.php            # 測試啟動檔案
│   ├── class-*-base.php         # 基礎測試類別
│   └── class-*-test.php         # 測試案例
├── views/                       # 範本檔案
├── assets/                      # 靜態資源
│   ├── css/                     # 樣式表
│   ├── js/                      # JavaScript 檔案
│   └── images/                  # 圖片
├── lang/                        # 語言檔案
├── composer.json                # PHP 依賴
├── package.json                 # Node.js 依賴
├── phpunit.xml.dist             # PHPUnit 設定
├── .phpcs.xml.dist              # 代碼標準設定
└── rector.php                   # 代碼現代化規則
```

### 測試 {#testing}

此外掛包含一個全面的測試框架：

- **單元測試 (Unit Tests)**：基於 PHPUnit 且包含 WordPress 測試套件
- **基礎測試類別 (Base Test Class)**：提供用於常見測試情境的輔助方法
- **測試覆蓋率 (Test Coverage)**：已配置用於追蹤代碼覆蓋率
- **多站點測試 (Multisite Testing)**：測試會在多站點環境中運行

### 代碼標準 {#code-standards}

- **WordPress 代碼標準 (WordPress Coding Standards)**：透過 PHPCS 執行強制檢查
- **PHP 7.4+ 相容性 (PHP 7.4+ Compatibility)**：支援現代 PHP 功能
- **靜態分析 (Static Analysis)**：整合 PHPStan 進行型別檢查
- **代碼現代化 (Code Modernization)**：使用 Rector 規則進行 PHP 升級

### 建構系統 {#build-system}

- **資源處理 (Asset Processing)**：對 CSS/JS 檔案進行最小化處理 (Minification)
- **翻譯 (Translation)**：生成 POT 檔案
- **打包 (Packaging)**：創建用於發佈的壓縮檔案
- **開發模式 (Development Mode)**：提供未最小化的資源檔案，用於除錯

## 配置 {#configuration}

此外掛支援多種配置選項，您可以在網路管理員介面中存取。

## Hooks 與 Filters {#hooks-and-filters}

### Actions (動作) {#actions}

- `ultimate-multisite-addon-template_init` - 在外掛初始化後觸發
- `ultimate-multisite-addon-template_loaded` - 在所有外掛檔案載入後觸發

### Filters (過濾器) {#filters}

- `ultimate-multisite-addon-template_settings` - 修改外掛設定
- `ultimate-multisite-addon-template_enabled` - 覆寫外掛的啟用/停用狀態

## 授權 {#license}

此外掛根據 GPL v3 或更高版本授權。

## 支援 {#support}

如需支援和文件，請造訪 [MultisiteUltimate.com](https://multisiteultimate.com)
## 更新日誌 {#changelog}

- Version 1.0.1 (2025-09-28)：將前綴名稱重命名為 ultimate-multisite；更新文字域 (text domain)；版本號提升。


- Version (2025-09-28)：將前綴名稱重命名為 ultimate-multisite；更新文字域 (text domain)；版本號提升。
