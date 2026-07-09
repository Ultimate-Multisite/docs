---
title: セットアップとプロバイダー設定
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# ドメイン販売: 設定とプロバイダー構成 {#domain-seller-setup-and-provider-configuration}

ドメイン販売アドオンには、必要な手順を順番に案内する設定ウィザードが含まれています。このページでは、ウィザードの流れと、その後にプロバイダーを構成または再構成する方法を説明します。

## 要件 {#requirements}

- **Multisite Ultimate** v2.4.12 以上、ネットワーク有効化済み
- **PHP** 7.4+
- 対応レジストラのうち少なくとも1つの API 認証情報

## 初回実行設定ウィザード {#first-run-setup-wizard}

設定ウィザードは、plugin を初めてネットワーク有効化したときに自動的に起動します。いつでも **ネットワーク管理 › Ultimate Multisite › ドメイン販売設定** からも利用できます。

### ステップ 1 — プロバイダーを選択 {#step-1--choose-a-provider}

接続するレジストラを選択します。対応オプション:

| プロバイダー | DNS 管理 | WHOIS プライバシー |
|---|---|---|
| OpenSRS | はい | はい |
| Namecheap | いいえ | はい（WhoisGuard、無料） |
| HostAfrica | はい | はい（ID 保護） |
| Openprovider | はい | はい |
| Hostinger | ホスト済みドメイン向けのコア Hostinger ドメインマッピング経由 | はい |
| GoDaddy | いいえ | いいえ |
| ResellerClub | はい | いいえ |
| NameSilo | いいえ | いいえ |
| Enom | はい | いいえ |

### ステップ 2 — 認証情報を入力 {#step-2--enter-credentials}

プロバイダーごとに認証情報の項目が異なります:

**OpenSRS** — ユーザー名と秘密鍵（OpenSRS Reseller Control Panel から）

**Namecheap** — ユーザー名と API キー（Account › Tools › API Access から）

**HostAfrica** — HostAfrica リセラーモジュールの Domains Reseller API endpoint と認証情報。現在、別個のサンドボックス endpoint は文書化されていません。本番登録を実行する前に、安全な読み取り専用チェックでテストしてください。

**Openprovider** — API アクセスが有効なユーザー名とパスワード。任意のサンドボックスモードでは Openprovider サンドボックス API を使用し、任意のデフォルト顧客ハンドルを登録で再利用できます。

**Hostinger** — コア Hostinger 連携の共有 Hostinger hPanel API token。同じ token がコアのドメインマッピングとドメイン販売の登録処理を動かします。

**GoDaddy** — API キーとシークレット（developer.godaddy.com から）

**ResellerClub** — リセラー ID と API キー（ResellerClub コントロールパネルから）

**NameSilo** — API キー（namesilo.com › Account › API Manager から）

**Enom** — Account ID と API token

本番稼働前にプロバイダーのテスト環境で確認するには、利用可能な場合は **サンドボックスモード** をチェックしてください。

### ステップ 3 — 接続をテスト {#step-3--test-the-connection}

**接続をテスト** をクリックします。ウィザードは軽量な API 呼び出しを送信し、認証情報と接続性を検証します。続行する前に、認証情報の問題を修正してください。

### ステップ 4 — TLD をインポート {#step-4--import-tlds}

**TLD をインポート** をクリックして、接続済みプロバイダーから利用可能なすべての TLD と卸売価格を取得します。これにより、ドメイン商品で使用する TLD 一覧が作成されます。TLD カタログが大きいプロバイダーでは、インポートに30〜60秒かかる場合があります。

TLD は、スケジュールされた cron ジョブによって1日1回自動的にも再同期されます。

### ステップ 5 — ドメイン商品を作成 {#step-5--create-a-domain-product}

ウィザードは、10% のマークアップを適用したデフォルトの包括的なドメイン商品を作成します。この商品はすぐに編集できます。またはスキップして、**Ultimate Multisite › 商品** で手動で商品を作成できます。

完全な商品構成ガイドについては、[ドメイン商品と価格設定](./domain-products) を参照してください。

---

## プロバイダーを再構成 {#reconfiguring-a-provider}

**ネットワーク管理 › Ultimate Multisite › 設定 › ドメイン販売** に移動します（または plugin 一覧で **設定** をクリックします）。

設定ページには次の項目があります:

- **ドメイン販売を有効化** — 機能全体のオン/オフを切り替え
- **デフォルトプロバイダー** — ドメイン検索と新規商品に使用されるプロバイダー
- **検索ごとの最大 TLD 数** — 顧客が検索したときに確認する TLD 数。値を大きくすると選択肢は増えますが遅くなります
- **空き状況キャッシュ期間** — 空き状況と価格結果をキャッシュする期間。値を小さくすると正確性は上がりますが、API 呼び出しが増えます
- **ドメイン商品を管理** — 商品一覧へのクイックリンク
- **プロバイダーを構成** — Integration Wizard を開き、プロバイダーを追加または再構成します

### 2つ目のプロバイダーを追加 {#adding-a-second-provider}

**プロバイダーを構成** をクリックし、新しいレジストラ用にウィザードをもう一度実行します。複数のプロバイダーを同時に構成できます。各ドメイン商品を特定のプロバイダーに割り当てるか、デフォルトのままにします。

### TLD を手動で同期 {#syncing-tlds-manually}

設定ページで、構成済みプロバイダーの横にある **TLD を同期** をクリックして最新の価格を取得します。これは、プロバイダーが卸売価格を更新した後や新しい TLD を追加した後に便利です。

---

## ログ {#logs}

各プロバイダーは専用のログチャンネルに書き込みます。ログは **ネットワーク管理 › Ultimate Multisite › ログ** で表示できます:

| ログチャンネル | 内容 |
|---|---|
| `domain-seller-registration` | すべての登録試行（成功と失敗） |
| `domain-seller-renewal` | 更新ジョブの結果 |
| `domain-seller-opensrs` | 生の OpenSRS API アクティビティ |
| `domain-seller-namecheap` | 生の Namecheap API アクティビティ |
| `domain-seller-hostafrica` | 生の HostAfrica API アクティビティ |
| `domain-seller-openprovider` | 生の Openprovider API アクティビティ |
| `domain-seller-hostinger` | 生の Hostinger API アクティビティ |
| `domain-seller-godaddy` | 生の GoDaddy API アクティビティ |
| `domain-seller-resellerclub` | 生の ResellerClub API アクティビティ |
| `domain-seller-namesilo` | 生の NameSilo API アクティビティ |
| `domain-seller-enom` | 生の Enom API アクティビティ |

---

## プロバイダー機能に関する注意 {#provider-capability-notes}

すべてのレジストラ API が同じ操作を公開しているわけではありません。このアドオンは、対応していない操作について、黙って失敗するのではなく、管理者に分かりやすいエラーを表示します。

- **HostAfrica** は、検索、TLD/価格同期、登録、更新、移管、ネームサーバー更新、DNS レコード、EPP コード、レジストラロック、ID 保護を含む、最も幅広いライブ再販業者ワークフローをサポートします。
- **Openprovider** は、再販業者価格の TLD 同期、登録、更新、移管、ネームサーバー更新、DNS ゾーン、EPP コード、レジストラロック、WHOIS プライバシーをサポートします。短命の bearer token で認証し、addon が自動的に更新します。
- **Hostinger** は、共有 hPanel API トークンを通じて、空き状況検索、登録、ポートフォリオ検索、ネームサーバー更新、レジストラロック、WHOIS プライバシーをサポートします。Hostinger の公開 Domains API は、再販業者/卸売価格、受信移管、明示的な更新、EPP コード取得を公開していません。更新は自動更新のみです。
