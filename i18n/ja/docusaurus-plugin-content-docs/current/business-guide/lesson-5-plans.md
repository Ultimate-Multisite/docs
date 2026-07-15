---
title: レッスン5：計画を設計する
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lesson 5: プランの設計

プランの階層は単なる価格設定レベルではありません。それは、あなたのニッチな顧客が実際にどのようにビジネスを運営しているかを反映するものです。このレッスンでは、フィットネスビジネスが異なる段階で抱える実際のニーズに合った製品の階層を設計します。

## ここまでの進捗 {#where-we-left-off}

FitSiteにはすでに3つのテンプレート（Studio Essential、Gym Pro、Fitness Chain）が用意されています。次に、顧客が何にアクセスでき、いくら支払うかを決定する「プラン」を作成します。

## 顧客セグメントで考える {#thinking-in-customer-segments}

ほとんどの人が犯す間違いは、技術的な機能（ストレージ、帯域幅、ページ数など）に基づいてプランを設計してしまうことです。あなたのニッチな顧客は、そういった言葉で考えていません。ジムのオーナーは、自分のビジネスを運営するために何が必要かを考えています。

フィットネススタジオの場合、自然なセグメントが3つ存在します。

| セグメント | どのような顧客か | 必要なもの |
|---------|-------------|----------------|
| **個人トレーナー / 小規模スタジオ** | スタッフ1〜3名、単一の場所、初心者 | プロフェッショナルなサイト、クラス情報、問い合わせフォーム |
| **確立されたジム** | スタッフ5〜20名、単一の場所、成長期 | 上記すべてに加え、予約システム、ブログ、ギャラリー、カスタムドメイン |
| **フィットネスチェーン** | 複数拠点、確立されたブランド | 上記すべてに加え、マルチサイト、拠点ページ、スタッフ名簿 |

あなたのプランは、恣意的な機能の組み合わせではなく、これらのセグメントに対応するように設計する必要があります。

## FitSiteプランの作成 {#creating-the-fitsite-plans}

各プランについて、**Ultimate Multisite > Products > Add Product** に移動してください。

### Plan 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**ターゲット**: 個人トレーナーおよび小規模スタジオ

**説明タブ**:
- 名前: FitSite Starter
- 説明: 「個人トレーナーや小規模スタジオがオンラインでプロフェッショナルに見えるために必要なすべて。」

**一般タブ**:
- 製品タイプ: Plan
- 顧客ロール: Administrator

**サイトテンプレートタブ**:
- サイトテンプレートの許可: Enabled
- 利用可能なテンプレート: Studio Essential のみ

**制限事項**:
- サイト数: 1
- ディスク容量: 1 GB
- カスタムドメイン: Disabled (studioname.fitsite.com を使用)

**プラグインタブ**:
- 問い合わせフォームプラグイン: Force Activate
- SEOプラグイン: Force Activate
- 予約プラグイン: Not Available (アップグレードの動機付け)

**テーマタブ**:
- 選択したテーマ: Force Activate
- その他のすべてのテーマ: Hidden

### Plan 2: FitSite Growth -- $99/month {#plan-2-fitsite-growth----99month}

**ターゲット**: 確立された単一拠点ジム

**説明タブ**:
- 名前: FitSite Growth
- 説明: 「オンラインでの存在感を高め、新しいメンバーを引き付けたい、確立されたジム向け。」

**サイトテンプレートタブ**:
- 利用可能なテンプレート: Studio Essential および Gym Pro

**制限事項**:
- サイト数: 1
- ディスク容量: 5 GB
- カスタムドメイン: Enabled

**プラグインタブ**:
- Starterに含まれるすべてに加え:
- 予約プラグイン: Force Activate
- ギャラリープラグイン: Force Activate
- ブログ機能: Available

**アップグレード＆ダウングレードタブ**:
- プラングループ: FitSite Plans
- 製品の順序: 2

### Plan 3: FitSite Pro -- $199/month {#plan-3-fitsite-pro----199month}

**ターゲット**: 複数拠点フィットネスチェーン

**説明タブ**:
- 名前: FitSite Pro
- 説明: 「複数拠点を持つフィットネスブランドのための完全なプラットフォーム。」

**サイトテンプレートタブ**:
- 利用可能なテンプレート: すべてのテンプレート

**制限事項**:
- サイト数: 5 (拠点ごとに1つ)
- ディスク容量: 20 GB
- カスタムドメイン: Enabled

**プラグインタブ**:
- Growthに含まれるすべてに加え:
- すべてのプレミアムプラグイン: Force Activate

**アップグレード＆ダウングレードタブ**:
- プラングループ: FitSite Plans
- 製品の順序: 3

## プラングループの設定 {#setting-up-the-plan-group}

プラングループを設定することで、顧客がFitSiteプランファミリー内でのみアップグレードまたはダウングレードできるようにします。各プランの**Up & Downgrades**タブで以下を設定します。

1. すべてのプランの**Plan Group**を「FitSite Plans」に設定する
2. **Product Order**を 1 (Starter)、2 (Growth)、3 (Pro) に設定する

これにより、明確なアップグレードパスが作成されます：Starter → Growth → Pro。

## オプション商品（Order Bumps）の追加 {#adding-order-bumps}

オプション商品（Order bumps）は、チェックアウト時に提供される追加商品です。FitSiteの場合、以下のようなものを検討してください。

- **追加ストレージパック** ($19/month) -- 追加の5 GBディスク容量
- **優先サポート** ($29/month) -- より迅速な応答時間
- **追加サイト** ($39/month) -- プランで許可されている以上のサイトが必要な顧客向け

これらをUltimate Multisiteで**Package**タイプの製品として作成し、関連するプランに関連付けます。

## この構造が機能する理由 {#why-this-structure-works}

- **Starter** は参入障壁を取り除く — 低価格、シンプルな提供、トレーナーがすぐにオンラインになれる
- **Growth** はジムが実際に求める機能を追加する — 予約システム、ギャラリー、カスタムドメイン
- **Pro** は複数拠点サポートを必要とする高価値セグメントに対応する
- **オプション商品** は、コアプランを複雑にすることなく、顧客にカスタマイズの自由を与える
- **明確なアップグレードパス** は、顧客が離脱するのではなく、あなたと一緒に成長することを意味する

## これまでのFitSiteネットワーク {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## 今回構築した内容 {#what-we-built-this-lesson}

- 実際のフィットネスビジネスセグメントに対応した**3つのプラン階層**
- Ultimate Multisiteのプラグインおよびテンプレートコントロールを使用した**機能制限（Feature gating）**
- 明確なアップグレードパスを持つ**プラングループ**
- 追加収益のための**オプション商品（Order bump products）**
- 技術的な仕様ではなく、顧客の価値に基づいた**価格設定構造**

---

**次:** [Lesson 6: The Signup Experience](lesson-6-checkout) — フィットネススタジオのオーナーを支払いを行う顧客へと転換させるチェックアウトフローを構築します。
