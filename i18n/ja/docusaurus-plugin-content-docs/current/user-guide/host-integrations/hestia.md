---
title: Hestia コントロールパネル統合
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integration

このガイドでは、Ultimate Multisite の Hestia 統合を設定し、ネットワーク内でマッピングされたドメインが自動的に Hestia の Web Domain Aliases に追加（および削除）される方法を説明します。

- Hestia CLI 参照: v-add-web-domain-alias / v-delete-web-domain-alias
- 公式 REST API ドキュメント: https://hestiacp.com/docs/server-administration/rest-api.html

## 何をするか
- Ultimate Multisite でドメインがマッピングされると、統合は Hestia API を呼び出して実行します:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ドメインマッピングが削除されると、次を実行します:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- 「Auto-create www subdomain」設定に応じて、`www.` エイリアスを追加/削除します。

## 前提条件
- 既に WordPress インストールを指している既存の Hestia Web Domain。統合はこのベースドメインにエイリアスを付与します。
- Hestia API アクセスが有効になっている。パスワードまたは API ハッシュ/トークンを使用して認証できます。

Hestia の REST API ドキュメントで API アクセスと認証の詳細を確認してください:
https://hestiacp.com/docs/server-administration/rest-api.html

## 設定 (Wizard → Integrations → Hestia)
以下の値を入力してください:

- `WU_HESTIA_API_URL` (必須)
  - 基本 API エンドポイント。通常は `https://your-hestia-host:8083/api/` です。
- `WU_HESTIA_API_USER` (必須)
  - API コマンドに使用する Hestia ユーザー（通常は `admin`）。
- `WU_HESTIA_API_PASSWORD` または `WU_HESTIA_API_HASH`（少なくとも1つ）
  - 認証方法を1つ選択してください：パスワードまたは API ハッシュ/トークン。
- `WU_HESTIA_ACCOUNT` (必須)
  - Hestia の Web Domain のアカウント（所有者）。これは CLI の最初の引数です。
- `WU_HESTIA_WEB_DOMAIN` (必須)
  - WordPress を提供する既存の Hestia Web Domain（エイリアスはここに付与されます）。
- `WU_HESTIA_RESTART` (任意; デフォルトは `yes`)
  - エイリアス変更後にサービスを再起動/リロードするかどうか。

ウィザードにこれらの定数を `wp-config.php` に挿入させるか、手動で定義できます。

## 設定確認
- ウィザードの「テスト」ステップで、プラグインは API 経由で `v-list-web-domains <WU_HESTIA_ACCOUNT> json` を呼び出します。成功レスポンスで接続と認証が確認されます。
- ドメインをマッピングした後、Hestia で Web > ベースドメイン > Aliases を確認してください。新しいエイリアスが追加されているはずです。

## 注意点とヒント
- `WU_HESTIA_WEB_DOMAIN` が既に存在し、`WU_HESTIA_ACCOUNT` が所有していることを確認してください。
- SSL が必要な場合は、Hestia で証明書を管理してください。この統合は現在エイリアスのみを扱います。
- プラグインは、Domain Mapping の「www subdomain」設定に応じて `www.<domain>` を追加/削除する場合があります。

## API 呼び出し例 (cURL)
以下は概念的な例です（環境に合わせて調整してください）。正確なパラメータは公式ドキュメントを参照してください。

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

削除の場合は `cmd=v-delete-web-domain-alias` を使用し、同じ引数を渡します。

## トラブルシューティング
- API からの HTTP エラー：`WU_HESTIA_API_URL` が到達可能で `/api` を含むことを確認してください。
- 認証エラー：`WU_HESTIA_API_USER` と `WU_HESTIA_API_PASSWORD` または `WU_HESTIA_API_HASH` を確認してください。
- ログに「Missing account/base domain」と表示される場合：`WU_HESTIA_ACCOUNT` と `WU_HESTIA_WEB_DOMAIN` が設定され、Hestia で有効であることを確認してください。

## 参考文献
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI 参照 (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
