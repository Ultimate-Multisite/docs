---
title: Ultimate Multisite のインストール
sidebar_position: 12
_i18n_hash: 400c7f9fc01ce3a8275a1710ef7e903a
---
# Ultimate Multisite のインストール

:::note
このチュートリアルでは、すでに WordPress Multisite がインストールされ、設定されていることを前提としています。方法を学ぶには、WP Beginner の [このチュートリアル](https://www.wpbeginner.com/glossary/multisite/) をご覧ください。
:::

## プラグインのインストール

Ultimate Multisite は WordPress.org で無料で入手できます。

Network Admin Dashboard から **Plugins → Add New Plugin** に移動してください。

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

「Ultimate Multisite」（正確に一致させるために引用符付き）を検索すると、最初の結果として表示されます。**Install Now** をクリックしてください。

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

インストール後、**Network Activate** をクリックして、ネットワーク全体でプラグインを有効化してください。

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

有効化後、自動的に Setup Wizard にリダイレクトされます。

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard は約10分で Ultimate Multisite の設定を案内します。

### Welcome

**Get Started** をクリックして開始してください。

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks

このステップでは、システム情報と WordPress のインストールを確認し、Ultimate Multisite の要件を満たしているかをチェックします。すべて問題なければ、**Go to the Next Step** をクリックしてください。

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

### Installation

インストーラは必要なデータベーステーブルを作成し、Ultimate Multisite が機能するために必要な `sunrise.php` ファイルをインストールします。**Install** をクリックして進めてください。

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Your Company

会社情報を入力し、デフォルト通貨を設定してください。この情報は WaaS プラットフォーム全体で使用されます。完了したら **Continue** をクリックしてください。

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content

このステップでは、事前定義されたテンプレート、製品、その他のスタータコンテンツをインストールできます。Ultimate Multisite の機能に慣れるのに最適です。デフォルトコンテンツを追加するには **Install** をクリックし、ゼロから始めたい場合はこのステップをスキップしてください。

![Default content installation step](/img/installation/wizard-default-content.png)

### Recommended Plugins

推奨されるコンパニオンプラグインをオプションでインストールしてください。追加するには **Install** をクリックし、続行するにはスキップしてください。

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Ready!

これで完了です！Ultimate Multisite のインストールが完了しました。Network Admin Dashboard から Website as a Service プラットフォームの構築を開始できます。

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

ぜひ楽しんでください！
