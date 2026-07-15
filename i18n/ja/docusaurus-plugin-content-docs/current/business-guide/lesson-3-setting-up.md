---
title: レッスン3：ネットワークの設定
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# レッスン3：ネットワークの構築

いよいよ構築の段階です。このレッスンでは、Ultimate Multisiteをインストールし、FitSiteネットワークの基盤を構築します。ここで下すすべての決定は、フィットネスというニッチ市場を念頭に置いて行います。

## ここまでの進捗 {#where-we-left-off}

私たちはフィットネススタジオをニッチ市場として選び、その機会を検証しました。今、そのアイデアを実際に機能するプラットフォームへと変えていきます。

## ホスティングの選択 {#choosing-your-hosting}

ニッチなプラットフォームの場合、ホスティングの選択は単一のウェブサイトの場合よりも重要になります。ホスティングしているのは単一のサイトではなく、数十、数百のサイトに成長するネットワーク全体だからです。

### 確認すべき点 {#what-to-look-for}

- **WordPress Multisiteのサポート**: すべてのホスティングプロバイダーがマルチサイトを適切に処理できるわけではありません。
- **ワイルドカードSSL**: サブドメインベースのネットワークには必須です。
- **スケーラブルなリソース**: 移行することなく成長するための余地が必要です。
- **Ultimate Multisiteの統合**: ドメインマッピングとSSLの自動化は、運用上の労力を大幅に削減します。

### 推奨されるアプローチ {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) リストからホスティングプロバイダーを選んでください。これらはUltimate Multisiteでテストされており、ドメインマッピングとSSL自動化に必要な統合を提供します。

FitSiteでは、サブドメイン構成を使用します。これは、顧客サイトが最初に `studioname.fitsite.com` のように表示され、その後オプションで独自のドメインをマッピングできるようにすることを意味します。

## WordPress Multisiteのインストール {#installing-wordpress-multisite}

まだWordPress Multisiteがインストールされていない場合は、以下の手順を実行してください。

1. ホスティングプロバイダーにWordPressをインストールします。
2. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) ガイドに従います。
3. プロンプトが表示されたら、**サブドメイン**構成を選択します。

:::tip なぜサブドメインなのか？
サブドメインを使用すると、各顧客サイトがパス（`fitsite.com/studio`）ではなく、独自の明確なアドレス（`studio.fitsite.com`）を持つことができます。これはお客様にとってよりプロフェッショナルであり、パーマリンクの競合を避けることができます。詳細な比較については、[Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) を参照してください。
:::

## Ultimate Multisiteのインストール {#installing-ultimate-multisite}

[Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) ガイドに従って、以下の作業を行います。

1. プラグインをネットワーク全体にアップロードし、有効化します。
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) を実行します。

セットアップウィザード中は、FitSiteのニッチ市場を念頭に置いてください。

- **通貨**: フィットネススタジオの顧客が使用する通貨に設定します。
- **会社名**: 「FitSite」（または選択したブランド名）
- **会社ロゴ**: ブランドロゴをアップロードします。これは請求書やメールに表示されます。

## フィットネスニッチに合わせた設定 {#configuring-for-the-fitness-niche}

Ultimate Multisiteがインストールされたら、以下のニッチ固有の設定を行います。

### 一般設定 {#general-settings}

**Ultimate Multisite > Settings** に移動し、以下を設定します。

- **Site name**: FitSite
- **Default role**: Administrator — フィットネススタジオのオーナーは、自身のサイトコンテンツに対する完全な管理権限が必要です。
- **Registration**: ユーザー登録を有効にし、スタジオオーナーが自身でサインアップできるようにします。

### メール設定 {#email-configuration}

システムからのメールは、ニッチ市場の言葉遣いを反映している必要があります。**Ultimate Multisite > Settings > Emails** に移動し、カスタマイズします。

- 一般的な「あなたの新しいサイト」という文言を、フィットネスに特化したメッセージに置き換えます。
- 例：ウェルカム件名：「あなたのフィットネススタジオのウェブサイトが準備できました」
- 例：ウェルカム本文：彼らのスタジオ、クラス、そしてフィットネスサイトの利用開始について言及します。

これらの点はレッスン8（顧客オンボーディング）でさらに洗練させますが、今からトーンを設定しておくことで、初期のテストサインアップであってもニッチに特化した印象を与えることができます。

### ドメイン設定 {#domain-configuration}

互換性のあるホスティングプロバイダーを使用している場合は、ここでドメインマッピングを設定します。

1. **Ultimate Multisite > Settings > Domain Mapping** に移動します。
2. ご利用のホスト固有の統合ガイドに従います。
3. 新しいサブサイトが自動的にSSLを取得するかテストします。

これにより、次のレッスンでテンプレートやテストサイトを作成し始める際、すべてがエンドツーエンドで機能することが保証されます。

## これまでのFitSiteネットワーク {#the-fitsite-network-so-far}

このレッスンを終えるまでに、以下のものが完成しています。

```
FitSite Network
├── WordPress Multisite (サブドメインモード)
├── Ultimate Multisite (インストールおよび設定済み)
├── ワイルドカードSSLを備えたホスティング
├── ドメインマッピングの設定
├── ニッチ固有のメールテンプレート（初期）
└── サイトテンプレートの準備完了（次レッスン）
```

## このレッスンで構築したこと {#what-we-built-this-lesson}

- **サブドメインモード**での動作するWordPress Multisiteのインストール
- **Ultimate Multisiteのインストール**とFitSiteのブランディングによる設定
- 成長するネットワークに対応した**ホスティングとSSL**のセットアップ
- ホスティングプロバイダー向けの**ドメインマッピング**の設定
- 初日から確立された**ニッチ固有のメールトーン**

---

**次へ：** [Lesson 4: Building Niche Templates](lesson-4-templates) — フィットネススタジオのオーナーが実際に使いたいと思うようなサイトテンプレートを作成します。
