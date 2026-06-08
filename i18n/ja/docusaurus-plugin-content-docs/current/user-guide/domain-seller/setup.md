---
title: セットアップとプロバイダー設定
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller：セットアップとプロバイダーの設定

Domain Seller アドオンには、必要な手順をすべて案内するセットアップウィザードが付属しています。このページでは、ウィザードのフローと、その後のプロバイダーの構成や再構成方法について解説します。

## 要件

- **Ultimate Multisite** v2.4.12 以上、ネットワークで有効化されていること
- **PHP** 7.4 以上
- サポートされているレジストラ（登録業者）のAPI認証情報が最低1つ必要

## 初回セットアップウィザード

セットアップウィザードは、プラグインをネットワークで有効化した際に自動的に起動します。また、いつでも **Network Admin › Ultimate Multisite › Domain Seller Setup** からアクセスできます。

### ステップ 1 — プロバイダーの選択

接続したいレジストラ（登録業者）を選択します。対応オプションは以下の通りです。

| Provider | DNS管理 | WHOISプライバシー |
|---|---|---|
| OpenSRS | はい | はい |
| Namecheap | いいえ | はい (WhoisGuard、無料) |
| GoDaddy | いいえ | いいえ |
| ResellerClub | はい | いいえ |
| NameSilo | いいえ | いいえ |
| Enom | はい | いいえ |

### ステップ 2 — 認証情報の入力

プロバイダーごとに必要な認証情報フィールドが異なります。

**OpenSRS** — ユーザー名とプライベートキー（OpenSRS Reseller Control Panelから取得）

**Namecheap** — ユーザー名とAPIキー（Account › Tools › API Accessから取得）

**GoDaddy** — APIキーとシークレット（developer.godaddy.comから取得）

**ResellerClub** — Reseller IDとAPIキー（ResellerClubのコントロールパネルから取得）

**NameSilo** — APIキー（namesilo.com › Account › API Managerから取得）

**Enom** — アカウントIDとAPIトークン

利用可能な場合は、**Sandbox mode** にチェックを入れて、本番環境に移行する前にプロバイダーのテスト環境でテストすることをお勧めします。

### ステップ 3 — 接続のテスト

**Test Connection** をクリックします。ウィザードが軽量なAPIコールを送信し、認証情報と接続性を検証します。続行する前に、認証情報に問題がないか修正してください。

### ステップ 4 — TLDのインポート

**Import TLDs** をクリックすると、接続したプロバイダーから利用可能なすべてのTLD（トップレベルドメイン）と卸売価格が取得されます。これにより、ドメイン製品で使用されるTLDリストが充実します。TLDのカタログが大きいプロバイダーの場合、インポートには30〜60秒かかることがあります。

TLDは、スケジュールされたcronジョブによって毎日自動的に再同期されます。

### ステップ 5 — ドメイン製品の作成

ウィザードは、10%のマークアップが適用されたデフォルトのキャッチオールドメイン製品を作成します。この製品はすぐに編集するか、スキップして **Ultimate Multisite › Products** から手動で製品を作成できます。

完全な製品構成ガイドについては、[Domain Products and Pricing](./domain-products) を参照してください。

---

## プロバイダーの再構成

**Network Admin › Ultimate Multisite › Settings › Domain Seller** に移動するか、プラグインリストで **Settings** をクリックしてください。

設定ページには以下の項目が含まれています。

- **Enable domain selling** — ドメイン販売機能全体をオン/オフするトグルスイッチ
- **Default provider** — ドメイン検索や新規製品作成に使用されるプロバイダー
- **Max TLDs per search** — 顧客が検索を行う際にチェックするTLDの最大数。値が高いほど多くのオプションが表示されますが、処理が遅くなります。
- **Availability cache duration** — 空き状況と価格の結果をキャッシュする期間。値が低いほど正確ですが、APIコールが増加します。
- **Manage domain products** — 製品リストへのクイックリンク
- **Configure providers** — プロバイダーを追加または再構成するための統合ウィザードを開きます

### 2つ目のプロバイダーの追加

**Configure providers** をクリックし、新しいレジストラに対してウィザードを再度実行します。複数のプロバイダーを同時に設定できます。各ドメイン製品を特定のプロバイダーに割り当てるか、デフォルトのままにしておけます。

### TLDの手動同期

設定ページで、設定済みのプロバイダーの横にある **Sync TLDs** をクリックすると、最新の価格が取得されます。これは、プロバイダーが卸売価格を更新したり、新しいTLDを追加したりした後に特に役立ちます。

---

## ログ

各プロバイダーは独自のログチャネルに書き込みます。ログは **Network Admin › Ultimate Multisite › Logs** から確認できます。

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | すべての登録試行（成功および失敗） |
| `domain-seller-renewal` | 更新ジョブの結果 |
| `domain-seller-opensrs` | OpenSRSの生のAPIアクティビティ |
| `domain-seller-namecheap` | Namecheapの生のAPIアクティビティ |
| `domain-seller-godaddy` | GoDaddyの生のAPIアクティビティ |
| `domain-seller-resellerclub` | ResellerClubの生のAPIアクティビティ |
| `domain-seller-namesilo` | NameSiloの生のAPIアクティビティ |
| `domain-seller-enom` | Enomの生のAPIアクティビティ |
