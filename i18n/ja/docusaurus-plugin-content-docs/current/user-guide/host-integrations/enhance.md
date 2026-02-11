---
title: コントロールパネル統合の強化
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration

## Overview
Enhance は、強力なホスティング自動化と管理機能を提供するモダンなコントロールパネルです。この統合により、Ultimate Multisite と Enhance Control Panel の間で自動ドメイン同期と SSL 証明書管理が可能になります。

**Related Discussion:** See [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) for community tips and additional information.

## Features
- Ultimate Multisite でドメインがマッピングされると自動でドメイン同期
- DNS が解決されたときに LetsEncrypt を介して自動 SSL 証明書発行
- サブドメインモードで動作するネットワークのサブドメインサポート
- マッピングが削除されたときにドメインを削除
- API 認証情報を検証する接続テスト

## Requirements

### System Requirements
- Enhance Control Panel がインストールされ、アクセス可能であること
- Enhance サーバーにホストされているか、接続されている WordPress Multisite インストール
- Apache ウェブサーバー（Enhance は現在 Apache 設定をサポートしています；LiteSpeed Enterprise は割引価格で利用可能です）

### API Access
Enhance Control Panel の管理者権限が必要です。API トークンを作成するために管理者アクセスが必要です。

## Getting Your API Credentials

### 1. Create an API Token

1. 管理者として Enhance Control Panel にログインします
2. ナビゲーションメニューで **Settings** をクリック
3. **Access Tokens** に移動
4. **Create Token** をクリック
5. トークンに説明的な名前を付けます（例：「Ultimate Multisite Integration」）
6. **System Administrator** ロールを割り当てます
7. 有効期限について：
   - トークンを無期限にしたい場合は空欄のままにします
   - あるいはセキュリティ上の理由で特定の有効期限を設定します
8. **Create** をクリック

作成後、**Access Token** と **Organization ID** が表示されます。**すぐに保存**してください。トークンは一度しか表示されません。

### 2. Get Your Organization ID

Organization ID は Access Tokens ページの青い情報ボックスに「Org ID: {your_id}」として表示されます。

Organization ID は次のような UUID 形式です：`d8554b6d-5d0d-6719-009b-fec1189aa8f3`

顧客の Organization ID を確認するには：
1. **Customers** ページへ移動
2. 該当顧客の **Manage customer** をクリック
3. URL を確認 - Organization ID は `/customers/` の後ろにある英数字です

### 3. Get Your Server ID

ドメイン操作に必要な Server ID を確認するには：

1. Enhance Control Panel で **Servers** に移動
2. WordPress インストールが実行されているサーバーをクリック
3. Server ID（UUID 形式）は URL またはサーバー詳細に表示されます
4. 代わりに API を使用してサーバー一覧を取得できます：

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID は UUID 形式です：`00000000-0000-0000-0000-000000000000`

### 4. Get Your API URL

API URL は Enhance Control Panel の URL に `/api/` を付けたものです：

```
https://your-enhance-panel.com/api/
```

**Important:** The `/api/` path is required. Common mistakes include:
- Using just the domain without `/api/`
- Using HTTP instead of HTTPS (HTTPS is required for security)

## Configuration

### Required Constants

Add the following constants to your `wp-config.php` file:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Setup via Integration Wizard

1. WordPress 管理画面で **Ultimate Multisite** > **Settings** に移動
2. **Integrations** タブへ移動
3. **Enhance Control Panel Integration** を見つけて **Configuration** をクリック
4. ウィザードがセットアップを案内します：
   - **Step 1:** イントロダクションと機能概要
   - **Step 2:** API 認証情報（Token、API URL、Server ID）を入力
   - **Step 3:** 接続テスト
   - **Step 4:** レビューと有効化

ウィザードで `wp-config.php` ファイルに定数を自動で挿入するか、定数定義をコピーして手動で追加するかを選択できます。

## Additional WordPress Configuration

Based on community feedback ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), you may need to configure these additional settings:

### .htaccess Configuration

ドメインマッピングに問題がある場合：
1. 元の Enhance `.htaccess` ファイルを削除
2. 標準の WordPress Multisite `.htaccess` ファイルに置き換える

### Cookie Constants

`wp-config.php` に次の定数を追加して、マッピングされたドメイン間で正しいクッキー処理を確保します：

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## How It Works

### When a Domain is Mapped

1. ユーザーが Ultimate Multisite でカスタムドメインをマッピングすると（またはサブドメインモードで新しいサイトが作成されると）
2. 統合が Enhance の API に POST リクエストを送信：`/servers/{server_id}/domains`
3. Enhance がサーバー設定にドメインを追加
4. DNS がサーバーに解決されると、Enhance が LetsEncrypt を介して自動で SSL 証明書を発行
5. ドメインが HTTPS で有効化される

### When a Domain is Removed

1. Ultimate Multisite でドメインマッピングが削除されると
2. 統合が Enhance からドメイン ID を取得
3. DELETE リクエストを送信：`/servers/{server_id}/domains/{domain_id}`
4. Enhance がサーバー設定からドメインを削除

### DNS and SSL Checking

Ultimate Multisite には組み込みの DNS と SSL チェック機能があります：
- **Domain Mapping Settings** でチェック間隔を設定できます（デフォルト：300 秒 / 5 分）
- システムはドメインが有効になる前に DNS 伝搬を確認します
- SSL 証明書の有効性は自動で確認されます
- Enhance が SSL 発行を自動で処理するため、手動で SSL を設定する必要はありません

## Verifying Setup

### Test the Connection

1. Integration Wizard の **Test Connection** ステップを使用
2. プラグインがサーバー上のドメイン一覧を取得しようとします
3. 成功メッセージが表示されれば：
   - API 認証情報が正しい
   - API URL がアクセス可能
   - Server ID が有効
   - 権限が正しく設定されている

### After Mapping a Domain

1. Ultimate Multisite でテストドメインをマッピング
2. Ultimate Multisite のログ（**Ultimate Multisite** > **Logs** > **integration-enhance**）を確認
3. Enhance Control Panel でドメインが追加されたことを確認：
   - **Servers** > **Your Server** > **Domains** に移動
   - 新しいドメインがリストに表示される
4. DNS が伝搬したら、SSL が自動で発行されていることを確認

## Troubleshooting

### API Connection Issues

**Error: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` が `/api/` で終わっていることを確認
- HTTPS を使用していることを確認（HTTP は不可）
- WordPress サーバーから Enhance パネルにアクセスできることを確認
- 接続をブロックするファイアウォールルールがないか確認

**Error: "Enhance API Token not found"**
- `WU_ENHANCE_API_TOKEN` が `wp-config.php` に定義されていることを確認
- Enhance でトークンが削除または期限切れになっていないか確認
- トークン値にタイプミスがないか確認

**Error: "Server ID is not configured"**
- `WU_ENHANCE_SERVER_ID` が `wp-config.php` に定義されていることを確認
- Server ID が有効な UUID 形式であることを確認
- サーバーが Enhance パネルに存在することを確認

### Domain Not Added

**Check the logs:**
1. **Ultimate Multisite** > **Logs** に移動
2. **integration-enhance** でフィルタリング
3. 問題を示すエラーメッセージを探す

**Common causes:**
- 無効なドメイン名形式
- ドメインが既に Enhance に存在
- API 権限が不足（トークンに System Administrator ロールがあることを確認）
- Server ID が Enhance の実際のサーバーと一致しない

### SSL Certificate Issues

**SSL not provisioning:**
- DNS がサーバーの IP アドレスを指していることを確認
- ドメインが正しく解決されているか確認：`nslookup yourdomain.com`
- Enhance は DNS が解決されるまで SSL を発行できません
- SSL 発行には通常 DNS 伝搬後 5〜10 分かかります
- Enhance Control Panel のログで SSL 関連のエラーを確認

**Manual SSL troubleshooting in Enhance:**
1. **Servers** > **Your Server** > **Domains** に移動
2. ドメインを見つけて SSL ステータスを確認
3. 必要に応じて手動で SSL 発行をトリガー

### DNS Check Interval

ドメインや SSL 証明書が有効になるまでに時間がかかる場合：
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** に移動
2. **DNS Check Interval** 設定を探す
3. デフォルトの 300 秒から低い値（最低 10 秒）に調整
4. **注意:** 低い間隔はチェック頻度が増えるためサーバー負荷が高くなる

### Authentication Errors

**HTTP 401/403 errors:**
- Enhance で API トークンを再生成
- トークンに **System Administrator** ロールがあることを確認
- トークンが期限切れでないことを確認
- 正しい Organization ID を使用していることを確認（URL には通常不要）

### Log Analysis

詳細ログを有効にする：
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Then check logs at:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Available in Enhance's admin interface

## API Reference

### Authentication
All API requests use Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Common Endpoints Used

**List Servers:**
```
GET /servers
```

**List Domains on a Server:**
```
GET /servers/{server_id}/domains
```

**Add a Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Full API Documentation
Complete API documentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices

### Security
- **Never commit API tokens to version control**
- Store tokens in `wp-config.php` which should be excluded from Git
- Use tokens with appropriate permissions (System Administrator for full integration)
- Set token expiry dates for production environments
- Rotate tokens periodically

### Performance
- Use the default DNS check interval (300 seconds) to avoid excessive API calls
- Monitor Enhance server resources when running large-scale domain operations
- Consider staggering domain additions if mapping many domains at once

### Monitoring
- Regularly check Ultimate Multisite logs for integration errors
- Set up monitoring for failed domain additions
- Verify SSL certificates are provisioning correctly
- Keep an eye on Enhance server capacity and domain limits

## Additional Resources

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** See wiki page "How to Configure Domain Mapping v2"

## Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review the Ultimate Multisite logs
3. Consult the [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contact Enhance support for panel‑specific issues
5. Create a new discussion with detailed error logs for community assistance

## Notes

- This integration handles domain aliases only; Enhance manages SSL automatically
- The integration supports both custom domain mappings and subdomain‑based sites
- Automatic www subdomain creation can be configured in Domain Mapping settings
- Enhance currently supports Apache configurations (LiteSpeed Enterprise available)
- Domain removal from Ultimate Multisite will remove the domain from Enhance but may not delete associated SSL certificates immediately
