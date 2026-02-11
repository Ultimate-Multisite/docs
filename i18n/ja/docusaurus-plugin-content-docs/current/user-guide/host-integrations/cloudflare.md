---
title: Cloudflare 統合
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare 統合

## 概要
Cloudflare は、ウェブサイトを保護し高速化するための主要なコンテンツ配信ネットワーク（CDN）およびセキュリティプロバイダーです。この統合により、Ultimate Multisite と Cloudflare の間で自動ドメイン管理が可能になり、特にサブドメインマルチサイトインストールに対応します。

## 機能
- Cloudflare でのサブドメイン自動作成
- プロキシ対象サブドメインのサポート
- DNS レコード管理
- Ultimate Multisite 管理画面での DNS レコード表示の強化

## 要件
`wp-config.php` ファイルに以下の定数を定義する必要があります：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## 設定手順

### 1. Cloudflare API キーを取得する

1. Cloudflare ダッシュボードにログインする
2. 右上隅のメールアドレスをクリックして「My Profile」に移動する
3. メニューから「API Tokens」を選択する
4. 以下の権限を持つ新しい API トークンを作成する：
   - Zone.Zone: 読み取り
   - Zone.DNS: 編集
5. API トークンをコピーする

### 2. ゾーン ID を取得する

1. Cloudflare ダッシュボードで使用したいドメインを選択する
2. ゾーン ID は「Overview」タブの右サイドバーにある「API」の下に表示されます
3. ゾーン ID をコピーする

### 3. wp-config.php に定数を追加する

`wp-config.php` ファイルに以下の定数を追加してください：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. 統合を有効にする

1. WordPress 管理画面で Ultimate Multisite > Settings に移動する
2. 「Domain Mapping」タブに移動する
3. 「Host Integrations」にスクロールダウンする
4. Cloudflare 統合を有効にする
5. 「Save Changes」をクリックする

## 動作概要

### サブドメイン管理

サブドメインマルチサイトインストールで新しいサイトが作成されたとき：

1. 統合が Cloudflare の API にリクエストを送信し、サブドメインの CNAME レコードを追加する
2. サブドメインはデフォルトで Cloudflare 経由でプロキシされるように設定されます（フィルタで変更可能）
3. サイトが削除されると、統合はサブドメインを Cloudflare から削除します

### DNS レコード表示

統合は Ultimate Multisite 管理画面の DNS レコード表示を以下のように強化します：

1. Cloudflare から直接 DNS レコードを取得する
2. レコードがプロキシされているかどうかを表示する
3. DNS レコードに関する追加情報を表示する

## 重要な注意点

Cloudflare の最近のアップデートにより、ワイルドカードプロキシがすべての顧客に利用可能になりました。これは、サブドメインマルチサイトインストールにおいて Cloudflare 統合が以前ほど重要ではなくなったことを意味します。ワイルドカード DNS レコードを Cloudflare に設定するだけで済むためです。

## トラブルシューティング

### API 接続の問題

- API トークンが正しく、必要な権限を持っていることを確認する
- ゾーン ID が正しいことを確認する
- Cloudflare アカウントに必要な権限があることを確認する

### サブドメインが追加されない

- Ultimate Multisite のログにエラーメッセージがないか確認する
- サブドメインがすでに Cloudflare に追加されていないことを確認する
- Cloudflare のプランが作成している DNS レコード数をサポートしていることを確認する

### プロキシの問題

- サブドメインをプロキシしたくない場合は、`wu_cloudflare_should_proxy` フィルタを使用できます
- プロキシ時に一部機能が正しく動作しない場合があります（例：一部の WordPress 管理機能）
- 管理ページのキャッシュをバイパスするために Cloudflare の Page Rules を使用することを検討してください
