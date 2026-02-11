---
title: アドオンテンプレート
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## Requirements

- WordPress 5.3 or higher
- PHP 7.4 or higher
- Multisite Ultimate plugin (active)

## Installation

1. addon ファイルを `/wp-content/plugins/` ディレクトリにアップロードしてください
2. WordPress の 'Plugins' メニューからプラグインを有効化してください
3. ネットワーク管理画面で addon の設定を構成してください

## Development

### Setup

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

### Project Structure

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

### Testing

addon には包括的なテストフレームワークが含まれています:

- **Unit Tests**: PHPUnit ベースのテストで WordPress テストスイートを使用
- **Base Test Class**: 共通のテストシナリオ用のヘルパーメソッドを提供
- **Test Coverage**: コードカバレッジを追跡するように設定
- **Multisite Testing**: テストはマルチサイト環境で実行

### Code Standards

- **WordPress Coding Standards**: PHPCS を介して強制
- **PHP 7.4+ Compatibility**: 最新の PHP 機能がサポート
- **Static Analysis**: PHPStan を統合して型チェック
- **Code Modernization**: PHP アップグレード用の Rector ルール

### Build System

- **Asset Processing**: CSS/JS ファイルのミニファイ
- **Translation**: POT ファイル生成
- **Packaging**: 配布用アーカイブ作成
- **Development Mode**: デバッグ用にミニファイされていないアセット

## Configuration

addon はネットワーク管理画面のインターフェースからアクセスできるさまざまな設定オプションをサポートしています。

## Hooks and Filters

### Actions

- `ultimate-multisite-addon-template_init` - addon の初期化後に発火
- `ultimate-multisite-addon-template_loaded` - すべての addon ファイルが読み込まれた後に発火

### Filters

- `ultimate-multisite-addon-template_settings` - addon の設定を変更
- `ultimate-multisite-addon-template_enabled` - addon の有効/無効状態を上書き

## License

この addon は GPL v3 以上のライセンスで提供されています。

## Support

サポートとドキュメントについては、[MultisiteUltimate.com](https://multisiteultimate.com) をご覧ください

## Changelog

- Version 1.0.1 (2025-09-28): prefix を ultimate-multisite に変更; テキストドメインを更新; バージョンを更新。
- Version (2025-09-28): prefix を ultimate-multisite に変更; テキストドメインを更新; バージョンを更新。
