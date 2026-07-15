---
title: レッスン7：自分らしくする
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# レッスン7：あなたらしく仕上げる

お客様に「ただのWordPressプラグインを使っている」と感じさせてはいけません。FitSiteという、業界に特化したプラットフォームを使っていると感じてもらうことが重要です。このレッスンでは、ブランディング、ホワイトラベル化、そしてプラットフォームを「製品」として感じてもらう方法を解説します。

## ここまでの進捗 {#where-we-left-off}

FitSiteは、フィットネススタジオのオーナーがプラン選択から実際のサイト公開に至るまでの、動作するチェックアウトフローを構築しました。次は、この一連の体験全体を、統一されたブランドイメージを持つ製品のように仕上げていきます。

## プラットフォームのドメイン {#your-platform-domain}

ブランドの基盤となるのはドメインです。FitSiteの場合、以下のようになります。

- **メインドメイン**: `fitsite.com`（マーケティングサイトおよびネットワークのルート）
- **顧客サイト**: `studioname.fitsite.com`（サブドメイン）
- **カスタムドメイン**: GrowthプランおよびProプランの顧客は、独自のドメインを設定できます

### ドメインの設定方法 {#setting-up-your-domain}

1. プラットフォームのドメインを登録する
2. ホスティングプロバイダーに接続する
3. 顧客のサブドメイン用にワイルドカードDNS（`*.fitsite.com`）を設定する
4. ワイルドカードSSLが有効になっていることを確認する

詳細な手順については、[How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping)を参照してください。

## 管理画面のホワイトラベル化 {#white-labeling-the-admin-experience}

フィットネススタジオのオーナーがサイトのダッシュボードにログインした際、WordPressやUltimate Multisiteのブランドではなく、FitSiteのブランドが表示されるようにする必要があります。

### カスタムログインページ {#custom-login-page}

WordPressのログインページをカスタマイズし、以下の要素を表示させます。

- FitSiteのロゴ
- フィットネスに適した背景画像
- ブランドカラー

### ダッシュボードのブランディング {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator)アドオン、またはカスタムCSSを使用して、以下の作業を行います。

- WordPressのロゴをFitSiteのロゴに置き換える
- 管理画面の色構成をブランドに合わせる
- フィットネスに特化したクイックリンクやヘルプリソースを備えたカスタムダッシュボードウィジェットを追加する

### カスタム管理ページ {#custom-admin-pages}

フィットネススタジオのオーナーにとって最も関連性の高いアクションを前面に出すカスタム管理ページを作成することを検討してください。

- 「クラススケジュールを編集」
- 「トレーナープロフィールを更新」
- 「サイトの閲覧」

これにより、標準のWordPressメニューに埋もれてしまうのではなく、ニッチな関連アクションを中央に配置することで、学習曲線が緩やかになります。

## コミュニケーションのブランディング {#branding-your-communications}

すべてのメール、請求書、通知は、ブランドを強化するものである必要があります。

### システムメール {#system-emails}

**Ultimate Multisite > Settings > Emails** に移動し、すべてのシステムメールをカスタマイズします。

- **送信元名**: FitSite
- **送信元メール**: hello@fitsite.com
- **メールテンプレート**: ブランドカラーとロゴを使用する
- **言語**: フィットネス関連の内容に統一する

カスタマイズすべき主要なメール：

| メール | 一般的なバージョン | FitSiteバージョン |
|-------|----------------|-----------------|
| ようこそ | 「新しいサイトが準備できました」 | 「あなたのフィットネススタジオのウェブサイトが公開されました」 |
| 支払い領収書 | 「お支払いを受け付けました」 | 「FitSiteのサブスクリプション支払いを確認しました」 |
| トライアル終了 | 「トライアルがまもなく終了します」 | 「FitSiteのトライアルは3日後に終了します — スタジオのウェブサイトを稼働させ続けましょう」 |

### 請求書 {#invoices}

以下の要素を使用して、請求書テンプレートをカスタマイズします。

- FitSiteのロゴとブランドカラー
- 事業者情報
- フィットネスに特化した商品名（一般的なプランIDではない）

## 顧客向けのサイト {#the-customer-facing-site}

メインドメイン（`fitsite.com`）には、プラットフォームを販売するマーケティングサイトが必要です。これはUltimate Multisiteのネットワーク管理とは別物であり、あなたのビジネスの「顔」となる部分です。

主要なページ：

- **ホームページ**: フィットネスビジネス向けの明確な価値提案
- **機能**: FitSiteが何をするのかを、フィットネスの言葉で説明
- **料金**: ニッチな機能比較を含む、3つのプラン
- **事例**: プラットフォームで構築されたサイトの紹介
- **サインアップ**: チェックアウトフォームへのリンク

:::tip マーケティングサイトをネットワークサイトにすることができます
マーケティングサイトを独自のネットワーク内のサイトとして作成してください。これにより、同じダッシュボードから管理でき、自社のプラットフォームの能力を実証できます。
:::

## 顧客向けカスタムドメイン {#custom-domain-for-customers}

カスタムドメインを含むプランの顧客向けには、プロセスを明確に文書化する必要があります。

1. 顧客がドメインを登録またはレジストラに移管する
2. 顧客がDNSを更新し、プラットフォームを指すようにする（正確なレコードを提供する）
3. Ultimate MultisiteがドメインマッピングとSSLを処理する

このプロセス専用のヘルプ記事またはナレッジベースのエントリーを作成し、技術的な知識のないフィットネススタジオのオーナー向けに記述します。

## これまでに構築したFitSiteネットワーク {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## このレッスンで構築したこと {#what-we-built-this-lesson}

- ブランド化された体験のための**プラットフォームドメインとDNS**の設定
- FitSiteのブランドが隅々まで行き届いた**ホワイトラベル管理画面**
- **カスタマイズされたコミュニケーション** — メール、請求書、通知すべてがブランドに準拠
- FitSiteをフィットネススタジオオーナーに販売する**マーケティングサイト**
- 独自のドメインを希望する顧客向けの**カスタムドメインの文書化**

---

**次へ：** [Lesson 8: Customer Onboarding](lesson-8-onboarding) — 新規登録者を活動的で満足度の高い顧客に変える体験を設計します。
