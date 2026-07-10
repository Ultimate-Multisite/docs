---
title: レッスン6：サインアップ体験
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# レッスン6：サインアップ体験 {#lesson-6-the-signup-experience}

チェックアウトフローは、興味を収益に変える場所です。分かりにくい、または一般的なサインアッププロセスは、顧客を失います。ターゲット層に響き、手間なく使えるニッチ特化型のフローこそが、コンバージョンを最大化します。

## ここまでの進捗 {#where-we-left-off}

FitSiteには、テンプレートとプランが設定されました。次は、フィットネススタジオのオーナーを支払いを行う顧客に変えるための、登録およびチェックアウト体験を構築します。

## 登録フローの理解 {#understanding-the-registration-flow}

Ultimate Multisiteのチェックアウトフォームは、完全にカスタマイズ可能なマルチステップフォームです。FitSiteの場合、以下の要素を持つフローを目指します。

1. フィットネスビジネス向けに作られたように感じること
2. 必要な情報だけを収集すること
3. 顧客が可能な限り早く稼働するサイトにたどり着けるようにすること

完全な技術的な参照については、[登録フロー](/user-guide/configuration/the-registration-flow)を参照してください。

## FitSiteチェックアウトの設計 {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** に移動し、新しいフォームを作成します。

### ステップ1：プランの選択 {#step-1-plan-selection}

フィットネススタジオのオーナーが最初に目にするのは、彼らが理解できる言葉で提示されたプランであるべきです。

- **Pricing Table** フィールドを追加します
- 3つのFitSiteプランすべてが表示されるように設定します
- レッスン5で書いたプランの説明文がここに表示されます。これらは技術的な機能ではなく、フィットネスビジネスのニーズに語りかけるものであることを確認してください。

:::tip ニッチな言葉遣いが重要
「1 GBストレージ」はジムオーナーにとって何も意味しません。「プロ仕様のスタジオウェブサイトに必要なすべて」こそがすべてを意味します。プランの説明文は、お客様の言葉で書いてください。
:::

### ステップ2：テンプレートの選択 {#step-2-template-selection}

プランを選択した後、顧客は開始するテンプレートを選びます。

- **Template Selection** フィールドを追加します
- 利用可能なテンプレートは、選択されたプラン（レッスン5で設定）によってフィルタリングされます
- 各テンプレートには、フィットネス特有のデザインを示すプレビュー画像が必要です

### ステップ3：アカウントの作成 {#step-3-account-creation}

ここは最小限に抑えます。以下の情報のみを収集します。

- メールアドレス
- パスワード
- スタジオ/ビジネス名（これがサイト名になります）

サインアップに不要な情報は尋ねてはいけません。追加のフィールドは、コンバージョン率を低下させます。

### ステップ4：サイトのセットアップ {#step-4-site-setup}

- **Site title**: ステップ3で入力されたスタジオ名から自動入力します
- **Site URL**: スタジオ名から自動生成します（例：`ironworks.fitsite.com`）

### ステップ5：支払い {#step-5-payment}

- **Payment** フィールドを追加します
- 支払いゲートウェイを設定します（サブスクリプション課金には[Stripe](/user-guide/payment-gateways/stripe)が推奨されます）
- レッスン5でオダーバンプを作成した場合、支払いステップの前に**Order Bump**フィールドを追加します

### ステップ6：確認 {#step-6-confirmation}

- フィットネス特有の言葉遣いで確認メッセージをカスタマイズします
- 例：「フィットネススタジオのウェブサイトが作成中です。数秒後に新しいサイトにリダイレクトされます。」

## 期間選択トグルの追加 {#adding-a-period-selection-toggle}

プランで価格バリエーション（月額か年額か）を設定した場合、**Period Selection**フィールドをチェックアウトフォームに追加し、顧客が請求期間を切り替えられるようにします。手順については、[Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle)を参照してください。

## 支払いの設定 {#configuring-payment}

まだ支払いゲートウェイを設定していない場合は、以下の手順を実行します。

1. **Ultimate Multisite > Settings > Payment Gateways** に移動します
2. [Stripeのセットアップガイド](/user-guide/payment-gateways/stripe)または希望のゲートウェイに従います
3. テスト支払いを使用して、完全なチェックアウトフローをテストします

支払いに関する詳細は、[Getting Paid](/user-guide/payment-gateways/getting-paid)を参照してください。

## フローのテスト {#testing-the-flow}

次に進む前に、完全なテストサインアップを完了してください。

1. シークレット/プライベートブラウザウィンドウでチェックアウトフォームを開きます
2. プランを選択します
3. テンプレートを選びます
4. アカウントを作成します
5. 支払いを完了します（テストモードを使用します）
6. サイトが正しいテンプレートで作成されていることを確認します

以下の点を確認してください。

- [ ] プランの説明が明確で、ニッチ特化型である
- [ ] テンプレートのプレビューがフィットネスに適したデザインを示している
- [ ] サイトURLがスタジオ名から正しく生成される
- [ ] 支払いが正常に処理される
- [ ] 顧客が選択したテンプレートを持つ稼働中のサイトにたどり着く
- [ ] 確認メールがフィットネス特有の言葉遣いを使用している

## これまでのFitSiteネットワーク {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## 今回構築した内容 {#what-we-built-this-lesson}

- フィットネススタジオオーナー向けに調整された**マルチステップチェックアウトフォーム**
- サインアップフロー全体にわたる**ニッチ特化型の言葉遣い**
- **最小限の摩擦** — 必須フィールドのみ、稼働サイトへの迅速な導線
- テスト検証を伴う**支払い連携**
- プラン選択から稼働サイトに至るまで、テストされた**エンドツーエンドのフロー**

---

**次:** [レッスン7：自分らしくする](lesson-7-branding) — プラットフォームをホワイトラベル化し、FitSiteをブランドとして確立します。
