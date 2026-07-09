---
title: Cloudflare 連携
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare連携

## 概要
Cloudflareは、Webサイトの保護と高速化を支援する主要なコンテンツ配信ネットワーク（CDN）およびセキュリティプロバイダーです。この連携により、Ultimate MultisiteとCloudflareの間でドメイン管理を自動化できます。特にサブドメイン型のマルチサイト構成に適しています。

## 機能
- Cloudflareでのサブドメイン自動作成
- プロキシされたサブドメインのサポート
- DNSレコード管理
- Ultimate Multisite管理画面でのDNSレコード表示の強化

## 要件
次の定数を`wp-config.php`ファイルで定義する必要があります。

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## 設定手順

### 1. Cloudflare API Keyを取得する

1. Cloudflare Dashboardにログインします
2. 「マイプロフィール」に移動します（右上のメールアドレスをクリック）
3. メニューから「APIトークン」を選択します
4. 次の権限を持つ新しいAPIトークンを作成します。
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. APIトークンをコピーします

### 2. Zone IDを取得する

1. Cloudflare Dashboardで、使用するドメインを選択します
2. Zone IDは「概要」タブの右側サイドバーにある「API」の下に表示されています
3. Zone IDをコピーします

### 3. wp-config.phpに定数を追加する

次の定数を`wp-config.php`ファイルに追加します。

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. 連携を有効化する

1. WordPress管理画面で、Ultimate Multisite > 設定に移動します
2. 「ドメインマッピング」タブに移動します
3. 「ホスト連携」まで下にスクロールします
4. Cloudflare連携を有効化します
5. 「変更を保存」をクリックします

## 仕組み

### サブドメイン管理

サブドメイン型のマルチサイト構成で新しいサイトが作成されると、次の処理が行われます。

1. 連携機能がCloudflareのAPIへリクエストを送信し、サブドメインのCNAMEレコードを追加します
2. サブドメインは既定でCloudflare経由でプロキシされるように設定されます（これはフィルターで変更できます）
3. サイトが削除されると、連携機能がCloudflareからサブドメインを削除します

### DNSレコード表示

この連携は、次の方法でUltimate Multisite管理画面のDNSレコード表示を強化します。

1. CloudflareからDNSレコードを直接取得します
2. レコードがプロキシされているかどうかを表示します
3. DNSレコードに関する追加情報を表示します

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames**（以前は「Cloudflare for SaaS」と呼ばれていました）は、顧客が自身のドメインをSSL付きであなたのマルチサイトネットワーク上で使用できるようにするCloudflareの機能です。Cloudflareを使用するドメインマッピング型マルチサイト構成では推奨される方法です。Cloudflareが各カスタムドメインのSSL証明書の発行と更新を自動的に管理するためです。

### 標準のCloudflare連携との違い

| | 標準連携 | Cloudflare Custom Hostnames |
|---|---|---|
| **目的** | サブドメインのDNSレコードを自動作成 | Cloudflare管理のSSL付きでカスタム（マッピング済み）ドメインを有効化 |
| **最適な用途** | サブドメイン型マルチサイト | ドメインマッピング型マルチサイト |
| **SSL** | 別途処理 | Cloudflareが自動管理 |

### Cloudflare Custom Hostnamesの設定

1. Cloudflare Dashboardで、メインドメインのゾーンを開きます。
2. **SSL/TLS > Custom Hostnames**に移動します。
3. サーバーのIPまたはホスト名を指すフォールバックオリジンを追加します。
4. Ultimate Multisiteでマッピングされた各顧客ドメインについて、CloudflareにCustom Hostnameエントリーを追加します。この手順はCloudflare APIを使って自動化できます。
5. 顧客のDNSがあなたのネットワークを指すようになると、Cloudflareが各カスタムホスト名のTLS証明書を自動的に発行および更新します。

完全なAPIリファレンスについては、[Cloudflare Custom Hostnamesドキュメント](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/)を参照してください。

:::note 用語の更新
Ultimate Multisite v2.6.1以降、この機能はすべてのplugin設定およびラベルで**Cloudflare Custom Hostnames**と呼ばれます。以前のバージョンでは「Cloudflare for SaaS」という名称が使われていました。これは基盤となるCloudflare product名です。
:::

## 重要な注意事項

Cloudflareの最近の更新により、ワイルドカードプロキシがすべての顧客で利用できるようになりました。つまり、CloudflareでワイルドカードDNSレコードを設定するだけでよいため、サブドメイン型マルチサイト構成における標準のCloudflare DNS連携の重要性は以前より低くなっています。

## トラブルシューティング

### API接続の問題
- APIトークンが正しく、必要な権限を持っていることを確認してください
- Zone IDが正しいことを確認してください
- Cloudflare Accountに必要な権限があることを確認してください

### サブドメインが追加されない
- Ultimate Multisiteのログでエラーメッセージを確認してください
- サブドメインがCloudflareにすでに追加されていないことを確認してください
- 作成しようとしているDNSレコード数をCloudflare planがサポートしていることを確認してください

### プロキシの問題
- サブドメインをプロキシしたくない場合は、`wu_cloudflare_should_proxy`フィルターを使用できます
- プロキシ時には、一部の機能が正しく動作しない場合があります（例：特定のWordPress管理機能）
- 管理ページのキャッシュを回避するには、Cloudflareのページルールの使用を検討してください
