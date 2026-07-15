---
title: 管理パネルを見て回る
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# 管理パネルのツアー

Ultimate Multisite は、できる限りシンプルで分かりやすいことを目指していますが、これほど強力なツールではガイド付きツアーが役立ちます。管理ページを一緒に見て、全体像を把握しましょう。

## Dashboard {#dashboard}

Ultimate Multisite **Dashboard** には、収益、サイトのアクティビティ、会員数の増加、訪問者数、地域データなどの基本的なレポートと分析が表示されます。

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Dashboard の全体表示はこちらです。

![Ultimate Multisite Dashboard 全ページ](/img/admin/um-dashboard-full.png)

Dashboard の下部セクションはこちらです。

![Ultimate Multisite Dashboard 下部セクション](/img/admin/um-dashboard-bottom.png)

ネットワーク Dashboard の全体表示もこちらです。

![Network Dashboard 全ページ](/img/admin/network-dashboard-full-page.png)

## チェックアウトフォーム {#checkout-forms}

**チェックアウトフォーム**では、カスタム登録ページを柔軟に作成できます。フィールドをカスタマイズし、カスタムクラスやスクリプトを挿入し、訪問者の国や所在地に基づいてアクセスを制限できます。

![チェックアウトフォーム一覧](/img/admin/checkout-forms-list.png)

## 商品 {#products}

**商品**セクションでは、ネットワーク向けのさまざまなプラン、パッケージ、サービスを作成します。商品レベルで価格、請求頻度、制限とクォータを定義します。

![商品一覧](/img/admin/products-list.png)

## メンバーシップ {#memberships}

**メンバーシップ**ページには、ネットワーク内のすべてのサブスクリプションが表示されます。プラン、商品、請求金額と頻度、支払い履歴、タイムスタンプなどのサブスクリプション詳細を確認・編集できます。

![メンバーシップ一覧](/img/admin/memberships-list.png)

## 支払い {#payments}

**支払い**ページでは、ネットワーク全体の支払い履歴をすばやく確認できます。特定の商品や金額を含む詳細な取引情報も表示されます。

![支払い一覧](/img/admin/payments-list.png)

## 顧客 {#customers}

**顧客**ページには、ネットワークに登録されたすべてのメンバーが表示されます。名前、メールアドレス、最終ログイン、サブサイトにログインするための「切り替え」リンクなど、基本的なユーザー情報が含まれます。

![顧客一覧](/img/admin/customers-list.png)

## サイト {#sites}

**サイト**ページには、サイトテンプレートや顧客所有のサイトを含む、ネットワーク内のすべてのサブサイトが一覧表示されます。マッピング済みドメイン、制限とクォータ、プラグインとテーマ、サイトサムネイルを簡単に管理できます。

![サイト一覧](/img/admin/sites-list.png)

## ドメイン {#domains}

**ドメイン**ページは、サブサイトにマッピングされたカスタムドメイン専用です。スーパー管理者として、カスタムドメイン名を手動で追加またはマッピングし、DNS レコードとログを表示できます。

![ドメイン一覧](/img/admin/domains-list.png)

## 割引コード {#discount-codes}

**割引コード**では、エンドユーザーに割引を提供するためのクーポンコードを作成できます。割引額を指定し、特定のユーザーまたはグループを対象にできます。

![割引コード一覧](/img/admin/discount-codes-list.png)

## ブロードキャスト {#broadcasts}

**ブロードキャスト**は、お知らせの配信や、サブサイトユーザーへの非公開メッセージ送信に使うツールです。購読しているプランや商品に基づいて、特定のユーザーグループを対象にできます。

![ブロードキャスト一覧](/img/admin/broadcasts-list.png)

## 設定 {#settings}

**設定**ページでは、Ultimate Multisite を設定します。登録設定、支払い、API と Webhook、ドメインマッピング、その他の連携を設定できます。

AI コネクター設定には、現在サポートされている OAuth プロバイダープールである Anthropic Max、OpenAI ChatGPT/Codex、Google AI Pro が一覧表示されます。各プロバイダーカードでは、スーパー管理者が Account を接続し、保存済み Account を更新し、メールアドレスで Account を削除し、サンドボックス環境でブラウザーリダイレクトがブロックされる場合に手動 OAuth フォールバックを使用できます。Cursor Pro のセットアップオプションは管理パネルから削除されました。

ChatGPT/Codex Account は、操作がツールを許可している場合、コネクターに支えられたツール使用をサポートします。そのため、コネクター対応操作に依存する管理ワークフローでは、OpenAI Account の接続後に Codex のツール動作を使用できます。

![設定ページ](/img/admin/settings-general.png)

一般設定ページの全体表示はこちらです。

![一般設定 全ページ](/img/admin/settings-general-full.png)

メール設定ページはこちらです。

![メール設定 全ページ](/img/admin/settings-emails-full.png)

支払い設定ページはこちらです。

![支払い設定 全ページ](/img/admin/settings-payments-full.png)

支払い設定の下部セクションはこちらです。

![支払い設定 下部セクション](/img/admin/settings-payments-bottom.png)

サイト設定ページはこちらです。

![サイト設定 全ページ](/img/admin/settings-sites-full.png)

## イベント {#events}

**イベント**ページでは、ネットワーク内のすべてのイベントとログを記録します。プラン変更、登録、その他の動きなどのアクティビティを追跡し、マルチサイトの監視に役立ちます。

![イベント一覧](/img/admin/events-list.png)

## Webhook {#webhooks}

**Webhook**を使うと、別のアプリケーションへデータを送信できます。Ultimate Multisite から Zapier のようなプラットフォームへデータを送る場合に便利です。

![Webhook 一覧](/img/admin/webhooks-list.png)
