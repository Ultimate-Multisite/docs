---
title: 支払いと請求書の管理
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# 支払と請求書の管理

## 支払設定

支払を受け付ける前に、支払関連の設定を構成する必要があります。**Ultimate Multisite → Settings** に移動し、**Payment** タブをクリックしてください。

![Payment settings tab](/img/admin/settings-payments-top.png)

### 一般的な支払オプション

一般設定では、以下を構成できます：

- **Currency** — 取引で使用されるデフォルト通貨
- **Currency Position** — 通貨記号が表示される位置（金額の前/後）

![Payment gateway settings](/img/admin/settings-payments-options.png)

### 支払ゲートウェイ

Ultimate Multisite は複数の支払ゲートウェイをサポートしています。各ゲートウェイは、支払設定タブから有効化および構成できます。

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

利用可能なゲートウェイは次のとおりです：

- **Stripe** — Stripe を使用したクレジットカード決済
- **PayPal** — PayPal 決済
- **Manual** — オフラインまたはカスタム決済処理用

各ゲートウェイには、API キーやその他の設定を入力する独自の構成セクションがあります。

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### サンドボックスモード

**Sandbox Mode** を有効にすると、本番環境に移行する前に支払統合をテストできます。サンドボックスモードが有効な場合、実際の請求は行われません。

## 支払の閲覧

**Payments** ページに移動して、ネットワーク全体のすべての取引を確認してください。

![Payments list](/img/admin/payments-list.png)

支払をステータス（完了、保留、失敗、返金）でフィルタリングし、特定の取引を検索できます。

支払をクリックすると、ラインアイテム、関連メンバーシップ、顧客情報、支払ゲートウェイデータなどの詳細を確認できます。

## 請求書

Ultimate Multisite は支払の請求書を自動生成できます。支払設定から請求書テンプレートと番号付け形式をカスタマイズできます。

請求書カスタマイズオプションには次のものがあります：

- **Company name and address**（請求書に表示される会社名と住所）
- **Invoice numbering**（番号付け形式と順序）
- **Logo**（請求書ヘッダーに表示されるロゴ）
- **Custom footer text**（利用規約、メモ、法的情報用）

請求書テンプレートをカスタマイズするには、**Ultimate Multisite → Settings → Payment** に移動し、請求書関連の設定を探してください。
