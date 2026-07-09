---
title: Domain Seller 変更履歴
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller 変更履歴 {#domain-seller-changelog}

Version 1.3.0 - 2026-06-02 リリース
- New: HostAfrica reseller の残高が低くなりすぎたときの network-admin 警告を追加
- New: 新しく登録されたドメインをネットワークサイトへ自動的にマッピングする機能を追加
- Fix: 新しいドメインを登録する場合にのみ、登録者フィールドの要件を適用
- Fix: 残高監視通知を閉じられるように修正
- Fix: WooCommerce の登録者請求先情報が保持されるように修正
- Fix: 登録時に登録者連絡先要件を強制
- Fix: ドメイン登録商品が 0% のマークアップで作成されるのを防止
- Fix: ドメインの選択内容と価格がチェックアウトセッションフロー全体で保持されるように修正
- Fix: HostAfrica のドメイン価格の通貨表示を改善
- Fix: WP-core の query-var 不一致を防ぐため、チェックアウトフォームアクションの挙動を改善
- Improved: Setup ガイダンス内に HostAfrica reseller 設定ドキュメントへのリンクを追加

バージョン 1.2.0 - 2026-05-25 リリース
- 新規: checkout、setup wizard、lookup、TLD/pricing、登録、更新、移管、nameserver、DNS、EPP code、registrar lock、ID protection 対応を備えた domain 販売連携として HostAfrica を追加
- 新規: reseller pricing、登録、更新、移管、nameserver、DNS、EPP code、registrar lock、WHOIS privacy、TLD sync 対応を備えた domain 販売連携として Openprovider を追加
- 新規: 可用性チェック、登録、nameserver 更新、registrar lock、WHOIS privacy に core integration の共有 Hostinger API token を使用する domain 販売連携として Hostinger を追加
- 改善: developer 連携ガイダンス用の domain ライフサイクルアクションと filter docblock を追加
- 改善: addon readme の plugin 互換性メタデータを WordPress 7.0 に更新
- 改善: 今後のリリース調整に使用する planning template を更新

バージョン 1.1.0 - 2026-05-08 リリース
- 新規: ResellerClub、Enom、OpenSRS registrar 向けに DNS record 作成（add_dns_record）を実装
- 修正: Default DNS Records パーサーが {DOMAIN} および {SITE_URL} token を許容するようになりました
- 修正: Domain selection checkout field slug に namespace を付け、site_url との衝突を防止

バージョン 1.0.8 - 2026-05-07 リリース
- 修正: ResellerClub domain pricing が正しい API endpoint からライブ cost price を取得するようになりました

バージョン 1.0.7 - 2026-05-06 リリース
* 修正: ResellerClub test_connection が必須の tlds parameter を送信するようになりました（#224）

Version 1.0.6 - 2026-05-05 にリリース
* 修正: ResellerClub のドメイン登録が、改善された API レスポンス処理と registry 主導のプロバイダールーティングにより正しく動作するようになりました
* 修正: Register Domain 管理ページの UX 改善
* 削除: CyberPanel レジストラー連携

Version 1.0.5 - 2026-04-02 にリリース
* 新規: ドメイン登録と管理のための GoDaddy レジストラー連携
* 新規: NameSilo レジストラー連携
* 新規: ResellerClub レジストラー連携
* 新規: ドメイン購入およびマッピング時に SES 送信ドメインを自動検証
* 修正: テスト環境で plugin 定数の再定義を防止
* 修正: install-wp-tests.sh で MySQL フラグが正しく単語分割されるようにしました

Version 1.0.4 - 2026-03-14 にリリース
* **修正:** 一部の css アセットの欠落
* **修正:** 利用できない tlds に関連するエラー

Version 1.0.3 - 2026-03-09 にリリース
* **修正:** checkout shortcode でレガシー signup テンプレートを使用した場合の Vue リアクティブプロパティエラー（domain_option、selected_domain、domain_provider）
* **修正:** ドメイン選択 checkout field におけるサブドメイン入力フィールドの位置ずれと大きすぎるテキスト
* **修正:** ドメイン選択フィールドが存在する場合に「Your URL will be」プレビューブロックを非表示にしました

Version 1.0.2 - 2026-03-01 リリース
* **改善:** 設定ページからグローバルなマークアップ設定を削除 — 価格設定は商品ごとに限定されるようになりました
* **改善:** すばやく移動できるよう、設定ページに「Manage Domain Products」リンクを追加しました
* **改善:** ドメイン商品設定のフィールド説明とツールチップを明確化しました（catch-all と TLD 固有、マークアップの種類、導入価格）
* **改善:** 設定ページ全体の説明を改善しました（TLD 検索、更新、DNS、通知）

Version 1.0.1 - 2026-02-27 リリース

* **新規:** 一括価格管理のための TLD インポートツール
* **新規:** ドメイン商品の初回価格サポート
* **新規:** Cypress による E2E テストスイート
* **新規:** ドメインライフサイクル通知用のメールテンプレート
* **新規:** 管理者のドメイン登録モーダルに、設定から事前入力される登録者住所フィールド
* **新規:** レコードの追加、編集、削除に対応した顧客向け DNS 管理インターフェース
* **新規:** 自動ドメインマッピング付きの「独自ドメインを持ち込む」チェックアウトオプション
* **新規:** チェックアウト時にドメイン名からサイト URL を自動生成
* **新規:** 設定でのデフォルトネームサーバーと DNS レコード構成
* **新規:** コアのドメイン編集ページでのドメイン登録詳細と DNS 管理
* **新規:** セットアップウィザードが妥当なデフォルトでデフォルトのドメイン商品を自動作成
* **新規:** 設定済みのすべてのプロバイダーに対する cron による毎日の自動 TLD 同期
* **新規:** 商品ごとの構成（常時有効、顧客選択、または無効）に対応した WHOIS プライバシー保護
* **新規:** 価格表示とダークモード対応付きの WHOIS プライバシー用チェックアウトチェックボックス
* **新規:** 手動ドメイン登録用の Register Domain 管理ページ
* **新規:** Ultimate Multisite 更新サーバー経由の自動 plugin 更新
* **新規:** product リストテーブルのドメイン product type フィルタータブ（紫のバッジスタイル付き）
* **新規:** ドメインチェックアウトフォームの登録者連絡先フィールド（氏名、住所、市区町村、州、郵便番号、国、電話番号）

* **新規:** registrar API を呼び出す前の registrant フィールド検証と明確なエラーメッセージ
* **新規:** domain 登録イベント用の provider 固有ログチャネル（例: domain-seller-namecheap.log）
* **新規:** メインの registration/signup checkout フォーム上の registrant 連絡先フィールド（domain 登録時に表示）
* **改善:** Domain Search checkout フィールドを、subdomain、register、existing domain タブに対応した統合 Domain Selection フィールドに置き換え
* **改善:** domain product 設定を core widget system 経由で product 編集ページにインライン表示
* **改善:** customer domain info を standalone metabox ではなく core domain mapping widget にフック
* **改善:** TLD import wizard をすべての provider からのワンクリック同期に簡素化
* **改善:** Namecheap domain availability で、より高速な検索のため batch API call を使用
* **改善:** Namecheap pricing API で正しいパラメータとレスポンス解析を使用
* **改善:** TLD ストレージを単一の network option に集約
* **改善:** DNS 変更、移管、設定適用の domain activity logging
* **改善:** OpenSRS 用の Full TLD sync で、IANA master list と batch validation を使用
* **改善:** Namecheap 用の Full TLD sync で、ページネーション付き API リクエストを使用
* **改善:** legacy provider classes を Integration Registry パターンに置き換え
* **改善:** DNS と移管設定を備えた settings panel
* **改善:** 電話番号を自動的に +CC.NNN registrar 形式へフォーマット

* **改善:** Phone フィールドの検証で、送信前に書式設定文字を除去するようにしました
* **改善:** バージョン要件を Ultimate Multisite 2.4.12 に引き上げ、通知をより明確にしました
* **改善:** CI ワークフローで addon と core plugin の両方に適切な checkout を使用するようにしました
* **改善:** prepare_registrant_info() が、checkout で保存された user meta から読み取り、billing address をフォールバックとして使用するようにしました
* **修正:** checkout 中にログインしていないユーザーでドメイン検索 AJAX が失敗する問題
* **修正:** checkout 中にログインしていないユーザーでドメイン価格 AJAX が失敗する問題
* **修正:** WP-CLI コマンド実行時に Spyc クラスの再宣言で致命的エラーが発生する問題
* **修正:** Namecheap sandbox API のタイムアウトが短すぎる問題
* **修正:** ドメイン検索の Select ボタンのテキストが緑の背景で見えない問題
* **修正:** 連絡先情報の不足により "RegistrantFirstName is Missing" エラーでドメイン登録が失敗する問題
* **修正:** checkout 時点でサイトがまだ存在しない場合に、ドメインレコードが blog_id=0 で作成される問題
* **修正:** デフォルト TLDs 設定が解析済み配列ではなく文字列として返される問題
* **削除:** スタンドアロンの Domain Management 管理ページ — 現在はコアのドメインページで処理されます

Version 1.0.0 - 2025-09-28 リリース

**Ultimate Multisite v2 向けの大規模な書き直し**

* **新規:** 最新の PHP 7.4+ アーキテクチャで全面的に書き直し
* **新規:** Ultimate Multisite v2 チェックアウトシステムとのシームレスな統合
* **新規:** 柔軟な価格設定オプションを備えたドメイン商品の管理
* **新規:** 複数のドメインプロバイダーをサポートするアーキテクチャ
* **新規:** 自動更新とサブスクリプションの統合
* **新規:** 顧客向けドメイン管理インターフェース
* **新規:** 管理者向けドメイン監視とログ
* **新規:** ドメイン商品向けクーポン対応
* **新規:** 包括的な設定管理
* **新規:** 開発者に優しい拡張可能なコードベース
* **改善:** OpenSRS プロバイダーを更新し、全機能をサポート
* **改善:** Ultimate Multisite v2 と一貫性のあるモダンな UI
* **修正:** 非推奨の v1 コードをすべて v2 標準に更新
* **削除:** レガシー v1 互換性（破壊的変更）

### 以前のバージョン（v1 レガシー） {#previous-versions-v1-legacy}

### バージョン 0.0.3 - 20/08/2019 {#version-003---20082019}

* 修正: Groundhogg CRM との非互換性
* 注記: これは v1 互換の最後のリリースでした

### バージョン 0.0.2 - 07/12/2018 {#version-002---07122018}

* 修正: License Key フィールドを削除
* 修正: 機能 plugin が有効な場合にプランタブが表示されない問題
* 改善: 登録フィールドにスキップボタンを追加

### バージョン 0.0.1 - 初回リリース {#version-001---initial-release}

* WP Ultimo v1 向けの基本的な OpenSRS 統合
* シンプルなドメイン検索と登録
* プランベースのドメイン権限
