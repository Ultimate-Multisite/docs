---
title: Hostinger (hPanel) 連携
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) 連携 {#hostinger-hpanel-integration}

## 概要 {#overview}

Hostingerは、hPanelというモダンなコントロールパネルを持つ人気のウェブホスティングプロバイダーです。Ultimate Multisite Hostinger連携機能を使用すると、Ultimate MultisiteとHostingerのhPanel間でドメインの同期が自動的に行われます。これにより、WordPressの管理画面から、ドメインマッピングやサブドメインを自動で管理できるようになります。

## 機能 {#features}

*   hPanelでのアドオンドメインの自動作成
*   hPanelでのサブドメインの自動作成（サブドメインマルチサイトのインストール向け）
*   マッピングが削除された際のドメインの自動削除
*   hPanelのドメイン管理APIとのシームレスな連携

## 要件 {#requirements}

Hostinger連携機能を使用するには、以下のものが必要です。

1.  hPanelにアクセスできるHostingerアカウント
2.  Hostingerから取得したAPIトークン
3.  `wp-config.php`ファイルに以下の定数を定義すること：

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

オプションとして、以下を定義することもできます。

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // デフォルトのAPIエンドポイント
```

## 設定手順 {#setup-instructions}

### 1. Hostinger APIトークンの生成 {#1-generate-your-hostinger-api-token}

1.  Hostingerアカウントにログインし、hPanelにアクセスします。
2.  **アカウント設定** → **APIトークン** に移動します。
3.  **新しいトークンを作成** をクリックします。
4.  トークンに説明的な名前を付けます（例：「Ultimate Multisite」）。
5.  必要な権限を選択します。
    *   ドメイン管理
    *   サブドメイン管理
6.  生成されたトークンをコピーし、安全な場所に保管してください。

### 2. アカウントIDの確認 {#2-find-your-account-id}

1.  hPanelで、**アカウント設定** → **アカウント情報** に移動します。
2.  アカウントIDがこのページに表示されています。
3.  このIDをコピーし、次のステップのために保存してください。

### 3. wp-config.phpに定数を追加 {#3-add-constants-to-wp-configphp}

以下の定数を`wp-config.php`ファイルに追加します。

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Hostingerアカウントが異なるAPIエンドポイントを使用している場合は、カスタマイズできます。

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. 連携機能の有効化 {#4-enable-the-integration}

1.  WordPressの管理画面で、**Ultimate Multisite > 設定** に移動します。
2.  **ドメインマッピング** タブに移動します。
3.  **ホスト連携** までスクロールダウンします。
4.  **Hostinger (hPanel)** 連携を有効にします。
5.  **変更を保存** をクリックします。

## 仕組み {#how-it-works}

### アドオンドメイン {#addon-domains}

Ultimate Multisiteでドメインをマッピングすると：

1.  連携機能が、そのドメインをアドオンドメインとして追加するためのリクエストをHostingerのAPIに送信します。
2.  そのドメインは、ルートディレクトリを指すように設定されます。
3.  ドメインマッピングが削除されると、連携機能がhPanelからアドオンドメインを自動的に削除します。

### サブドメイン {#subdomains}

サブドメインマルチサイトのインストールの場合、新しいサイトが作成されると：

1.  連携機能が、完全なドメインからサブドメイン部分を抽出します。
2.  サブドメインを追加するためのリクエストをHostingerのAPIに送信します。
3.  そのサブドメインは、ルートディレクトリを指すように設定されます。

## 重要な注意事項 {#important-notes}

*   本連携機能は、HostingerのREST APIを使用してアカウントと通信します。
*   APIトークンには、ドメインおよびサブドメイン管理に必要な権限が付与されている必要があります。
*   本連携機能はDNS設定は行いません。ドメインはすでにHostingerアカウントを指している必要があります。
*   APIリクエストは、安全なHTTPS経由で行われます。
*   APIトークンは安全に保管し、絶対に公開しないでください。

## トラブルシューティング {#troubleshooting}

### API接続の問題 {#api-connection-issues}

*   APIトークンが正しいか、期限が切れていないかを確認してください。
*   アカウントIDが正しいか確認してください。
*   APIトークンにドメイン管理に必要な権限が付与されているか確認してください。
*   Hostingerアカウントがアクティブで、問題なく利用できる状態か確認してください。

### ドメインが追加されない場合 {#domain-not-added}

*   Ultimate Multisiteのログにエラーメッセージがないか確認してください。
*   そのドメインがすでにHostingerアカウントに追加されていないか確認してください。
*   Hostingerアカウントがアドオンドメインの制限に達していないか確認してください。
*   ドメインがHostingerのネームサーバーを適切に指していることを確認してください。

### SSL証明書の問題 {#ssl-certificate-issues}

*   本連携機能はSSL証明書の発行は行いません。
*   Hostingerは通常、AutoSSLを通じて無料のSSL証明書を提供しています。
*   SSL証明書は、hPanelの**SSL/TLS**セクションから直接管理できます。
*   または、HostingerのAutoSSL機能を使用してLet's Encryptを利用してください。

## サポート {#support}

Hostinger連携機能に関する追加のヘルプが必要な場合は、以下を参照してください。

*   [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
*   [Ultimate Multisite Documentation](/)
*   [Ultimate Multisite Support](https://ultimatemultisite.com/support)
