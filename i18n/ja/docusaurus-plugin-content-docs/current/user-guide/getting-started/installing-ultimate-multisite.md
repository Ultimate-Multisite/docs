---
title: Ultimate Multisite のインストール
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite のインストール {#installing-ultimate-multisite}

:::note
このチュートリアルでは、WordPress Multisite がすでにインストールおよび設定されていることを前提としています。手順については、WP Beginner の [こちらのチュートリアル](https://www.wpbeginner.com/glossary/multisite/) を参照してください。
:::

## プラグインのインストール {#installing-the-plugin}

Ultimate Multisite は、[WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) で無料で利用できます。

**ネットワーク管理者ダッシュボード**から、**プラグイン → 新しいプラグインを追加**に移動します。

![ネットワーク管理者 - 新しいプラグインを追加ページ](/img/installation/add-new-plugin.png)

**「Ultimate Multisite」**(引用符で囲んで正確な一致を検索) を検索すると、最初の結果として表示されます。**インストール**をクリックします。

![検索結果に Ultimate Multisite が表示される](/img/installation/search-ultimate-multisite.png)

インストールが完了したら、**ネットワーク全体で有効化**をクリックして、プラグインをネットワーク全体で有効にします。

![プラグインがインストールされ、「ネットワーク全体で有効化」ボタンが表示される](/img/installation/plugin-installed.png)

有効化後、自動的にセットアップウィザードにリダイレクトされます。

![プラグインが有効になり、ウィザードにリダイレクトされる](/img/installation/plugin-activated.png)

## セットアップウィザード {#setup-wizard}

セットアップウィザードは、Ultimate Multisite の設定を約 10 分でガイドします。

### ようこそ {#welcome}

**開始**をクリックして始めます。

![セットアップウィザードのウェルカム画面](/img/installation/wizard-welcome.png)

### 事前チェック {#pre-install-checks}

このステップでは、システム情報と WordPress インストールを確認し、Ultimate Multisite の要件を満たしているかどうかを検証します。すべて問題がなければ、**次のステップに進む**をクリックします。

![事前チェックでシステム要件が表示される](/img/installation/wizard-pre-install-checks.png)

:::note ネットワーク全体で有効化ボタン (v2.6.1 以降)
Ultimate Multisite がインストールされたものの、まだ**ネットワーク全体で有効化されていない**場合（たとえば、ネットワークプラグイン画面から**有効化**(単一サイト) をクリックした代わりに、**ネットワーク全体で有効化**をクリックした場合）、事前チェックのステップでこの状態が検出され、**ネットワーク全体で有効化**ボタンが表示されます。

**ネットワーク全体で有効化**をクリックすると、プラグインがネットワーク全体で自動的に有効になります。有効化されると、ウィザードは通常どおりインストールステップに進みます。ウィザードを終了して有効化の状態を修正する必要はありません。
:::

### インストール {#installation}

インストーラーは、必要なデータベーステーブルを作成し、Ultimate Multisite が機能するために必要な `sunrise.php` ファイルをインストールします。**インストール**をクリックして続行します。

![インストールステップでデータベーステーブルと sunrise.php が表示される](/img/installation/wizard-installation.png)

### 会社情報 {#your-company}

会社情報を入力し、デフォルトの通貨を設定します。この情報は、WaaS プラットフォーム全体で使用されます。完了したら、**次へ**をクリックします。

![会社情報の構成ステップ](/img/installation/wizard-your-company.png)

### デフォルトコンテンツ {#default-content}

このステップでは、定義済みのテンプレート、製品、その他のスターターコンテンツをインストールできます。これは、Ultimate Multisite の機能に慣れるための優れた方法です。デフォルトのコンテンツを追加するには**インストール**をクリックするか、最初から開始する場合はこのステップをスキップします。

![デフォルトコンテンツのインストールステップ](/img/installation/wizard-default-content.png)

### 推奨プラグイン {#recommended-plugins}

オプションで、推奨されるコンパニオンプラグインをインストールできます。追加するには**インストール**をクリックするか、続行するにはスキップします。

![推奨プラグインのステップ](/img/installation/wizard-recommended-plugins.png)

### 完了！ {#ready}

以上です！Ultimate Multisite のインストールが完了しました。これで、**ネットワーク管理者ダッシュボード**から Website as a Service プラットフォームの構築を開始できます。

![セットアップ完了 - 準備完了画面](/img/installation/wizard-ready.png)

![Ultimate Multisite が有効になっているネットワーク管理者ダッシュボード](/img/installation/network-dashboard.png)

さあ、楽しんでください！
