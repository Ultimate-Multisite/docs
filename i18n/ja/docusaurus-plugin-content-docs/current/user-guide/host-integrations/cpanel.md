---
title: cPanel 統合
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integration

## Overview
cPanelは、多くの共有および専用ホスティングプロバイダーで使用されている最も人気のあるウェブホスティング制御パネルの1つです。この統合により、Ultimate MultisiteとcPanel間で自動ドメイン同期が可能になり、ドメインエイリアスとサブドメインを自動的にcPanelアカウントに追加できるようになります。

## Features
- cPanelでの自動アドオンドメイン作成
- cPanelでの自動サブドメイン作成（サブドメインマルチサイトインストール用）
- マッピングが削除されたときのドメイン削除

## Requirements
The following constants must be defined in your `wp-config.php` file:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optionally, you can also define:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Setup Instructions

### 1. Get Your cPanel Credentials

1. Obtain your cPanel username and password from your hosting provider
2. Determine your cPanel host (usually `cpanel.yourdomain.com` or `yourdomain.com:2083`)

### 2. Add Constants to wp-config.php

Add the following constants to your `wp-config.php` file:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optionally, you can customize the port and root directory:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Enable the Integration

1. In your WordPress admin, go to Ultimate Multisite > Settings
2. Navigate to the "Domain Mapping" tab
3. Scroll down to "Host Integrations"
4. Enable the cPanel integration
5. Click "Save Changes"

## How It Works

### Addon Domains

When a domain is mapped in Ultimate Multisite:

1. 統合はcPanelのAPIにリクエストを送信し、ドメインをアドオンドメインとして追加します
2. ドメインはルートディレクトリを指すように設定されます
3. ドメインマッピングが削除されたとき、統合はcPanelからアドオンドメインを削除します

### Subdomains

For subdomain multisite installations, when a new site is created:

1. 統合はフルドメインからサブドメイン部分を抽出します
2. cPanelのAPIにリクエストを送信し、サブドメインを追加します
3. サブドメインはルートディレクトリを指すように設定されます

## Important Notes

- The integration uses cPanel's API2 to communicate with your cPanel account
- Your cPanel account must have permissions to add addon domains and subdomains
- Some hosting providers may limit the number of addon domains or subdomains you can create
- The integration does not handle DNS configuration; you still need to point your domains to your server's IP address

## Troubleshooting

### API Connection Issues

- Verify that your cPanel username and password are correct
- Check that your cPanel host is correct and accessible
- Ensure that your cPanel account has the necessary permissions
- Try using the full URL for the host (e.g., `https://cpanel.yourdomain.com`)

### Domain Not Added

- Check the Ultimate Multisite logs for any error messages
- Verify that the domain is not already added to cPanel
- Ensure that your cPanel account has not reached its limit for addon domains or subdomains

### SSL Certificate Issues

- The integration does not handle SSL certificate issuance
- You will need to use cPanel's SSL/TLS tools or AutoSSL feature to issue SSL certificates for your domains
- Alternatively, you can use a service like Let's Encrypt with cPanel's AutoSSL
