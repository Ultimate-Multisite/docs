---
title: 支払いと請求書の管理
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# 支払いと請求書の管理

## 支払い設定 {#payment-settings}

支払いを受け取り始める前に、支払い関連の設定を構成する必要があります。**Ultimate Multisite → 設定**に移動し、**支払い**タブをクリックします。

![支払い設定タブ](/img/admin/settings-payments-top.png)

支払い設定ページ全体は次のとおりです。

![支払い設定の全ページ](/img/admin/settings-payments-full.png)

### 一般的な支払いオプション {#general-payment-options}

一般設定では、次を構成できます。

- **通貨** — 取引に使用される既定の通貨
- **通貨位置** — 通貨記号が表示される位置（金額の前／後）

![支払いゲートウェイ設定](/img/admin/settings-payments-options.png)

### 支払いゲートウェイ {#payment-gateways}

Ultimate Multisite は複数の支払いゲートウェイをサポートしています。Payment 設定タブから、それぞれを有効化して構成できます。

![支払いゲートウェイ構成](/img/admin/settings-payments-gateways.png)

利用可能なゲートウェイは次のとおりです。

- **Stripe** — Stripe によるクレジットカード支払い
- **PayPal** — PayPal 支払い
- **Manual** — オフラインまたはカスタムの支払い処理用

各ゲートウェイには専用の構成セクションがあり、API キーやその他の設定を入力します。

![追加のゲートウェイ設定](/img/admin/settings-payments-gateways-2.png)

### サンドボックスモード {#sandbox-mode}

本番運用を開始する前に支払い連携をテストするため、**サンドボックスモード**を有効化できます。サンドボックスモードが有効な間は、実際の請求は発生しません。

## 支払いの表示 {#viewing-payments}

ネットワーク全体のすべての取引を確認するには、Ultimate Multisite の下にある**支払い**ページに移動します。

![支払い一覧](/img/admin/payments-list.png)

ステータス（完了、保留中、失敗、返金済み）で支払いを絞り込んだり、特定の取引を検索したりできます。

支払いをクリックすると、明細項目、関連するメンバーシップ、顧客情報、支払いゲートウェイデータを含む詳細全体を確認できます。

## 請求書 {#invoices}

Ultimate Multisite は支払いに対して請求書を自動生成できます。Payment 設定から請求書テンプレートと番号形式をカスタマイズできます。

請求書のカスタマイズオプションには次が含まれます。

- 請求書に表示される**会社名と住所**
- **請求書番号**の形式と連番
- 請求書ヘッダーに表示される**ロゴ**
- 利用規約、注記、または法的情報のための**カスタムフッターテキスト**

請求書テンプレートをカスタマイズするには、**Ultimate Multisite → 設定 → Payment**に移動し、請求書関連の設定を探します。
