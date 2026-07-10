---
title: 設定リファレンス
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# 設定リファレンス {#settings-reference}

このページでは、Ultimate Multisite の日常的な管理に影響する設定と、最近の動作変更を追跡します。

## その他のオプション {#other-options}

**その他のオプション** エリアは、**Ultimate Multisite > 設定 > Login & Registration** の下に表示されます。

| 設定 | 説明 |
|---|---|
| **Enable Jumper** | 管理エリアに Jumper クイックナビゲーションツールを表示します。Ultimate Multisite の画面、ネットワークオブジェクト、対応する管理先へ直接移動するために使用します。このショートカットを表示したくない場合は無効にしてください。 |

## エラー報告とテレメトリ {#error-reporting-and-telemetry}

以前のエラー報告オプトイン設定は、設定ページから削除されました。匿名テレメトリは無効であり、有効にするための UI トグルはありません。

設定ページ向けの社内 Runbook やスクリーンショットを管理している場合は、古いエラー報告オプトイン項目への参照を削除してください。管理者が、もう存在しない設定を探さないようにするためです。

## Import/Export 設定 {#importexport-settings}

**Import/Export** 設定タブには、管理対象の設定が説明されており、サイトとネットワークのアーカイブ用に **Ultimate Multisite > Site Export** へ直接リンクされています。インポート/エクスポート設定には設定タブを使用し、単一サイトのエクスポート/インポート手順には **Tools > Export & Import** を使用し、完全な Network Export アーカイブが必要な場合は Site Export ツールを使用してください。

## Domain Seller HostAfrica 残高警告 {#domain-seller-hostafrica-balance-warning}

Domain Seller アドオンが HostAfrica に接続されている場合、リセラー Account の残高が信頼性の高いドメイン登録または更新処理に対して不足していると、ネットワーク管理者に閉じられる残高不足の警告が表示されるようになりました。

この通知は運用上の警告として扱ってください。有料ドメイン登録をさらに受け付ける前に HostAfrica リセラー残高を補充し、その後 Domain Seller 設定またはドメイン監視画面に戻って、登録と更新が通常どおり続行できることを確認してください。

## AI プロバイダー接続設定 {#ai-provider-connector-settings}

AI プロバイダー接続設定では、対応している OAuth Account プールのみが表示されるようになりました。

| プロバイダー | 設定フロー |
|---|---|
| **Anthropic Max** | OAuth ボタンで 1 つ以上の Anthropic Max Account を接続します。サンドボックス化されたブラウザーがリダイレクトを自動で完了できない場合は、手動 OAuth フォールバックを使用します。 |
| **OpenAI ChatGPT/Codex** | 同じ OAuth プールのワークフローで ChatGPT Account を接続します。接続後、接続が対応する操作では ChatGPT Codex ツール呼び出しを使用できます。 |
| **Google AI Pro** | OAuth で Google AI Pro Account を接続し、Account 一覧がすぐに更新されない場合は接続を更新します。 |

Cursor Pro は対応プロバイダーではなくなりました。Cursor Pro の設定項目や接続パスに言及している古い社内スクリーンショット、Runbook、オンボーディング手順を削除してください。

プロバイダー Account を追加または削除する場合は、更新または削除する Account の有効なメールアドレスを入力し、接続に支えられた操作をテストする前にプロバイダー設定を保存してください。
