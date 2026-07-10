---
title: VAT 変更履歴
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT 変更履歴 {#vat-changelog}

Version 1.0.7 - 2026-02-03 リリース

* 修正: VIES SOAP service の MS_MAX_CONCURRENT_REQ エラーにより、ドイツ（DE）の VAT 番号の検証に失敗していました。より信頼性の高い検証のため、従来の SOAP API から公式 EU VIES REST API に切り替えました。
* 修正: VIES service が一時的に利用できない場合、VAT 番号を誤って拒否せず受け付けるようになりました。後で確認できるよう、ログ項目が作成されます。
* 修正: VAT/Tax ID フィールドが、EU 加盟国だけでなくすべての国で表示されるようになりました。EU 以外の税務 ID（例: スイスの CHE 番号）は、VIES 検証なしで請求書表示用に保存されます。
* 修正: ギリシャ（GR）、モナコ（MC）、マン島（IM）の VAT 接頭辞検索が、不正な配列検索ロジックにより壊れていました。
* 改善: Site Exporter addon と併用した際に致命的エラーを引き起こす可能性があった、不要な wp-cli-bundle 開発依存関係を削除しました。
* 改善: 包括的なユニットテスト一式（53 件）を追加しました。

Version 1.0.6 - 2026-01-25 リリース

* 修正: 国内 B2B 取引で VAT が正しく課税されるようになりました。EU VAT ルールでは、リバースチャージは越境 B2B 取引にのみ適用され、顧客の国が会社の国と一致する場合には適用されません。

Version 1.0.5 - 2026-01-22 リリース

* 修正: Addon が読み込まれない、または正しく動作しない問題。
* 変更: より信頼性が高く、活発に保守されているデータのため、VAT 税率データソースを euvatrates.com から ibericode/vat-rates リポジトリに切り替えました。
* 修正: super_reduced_rates オプション値の誤字を修正しました。
* 改善: エラーを防ぐため、国コード処理に null チェックを追加しました。
* 変更: Traduttore による自動更新を優先し、同梱の翻訳ファイルを削除しました。

Version: 1.0.3 - 2025-09-28 リリース

* 接頭辞を ultimate-multisite に変更。テキストドメインを更新。バージョンを更新。

Version 1.0.0-beta.4 - 2021-09-24

* 追加: mu-plugins ベースの構成向けにフィルター wp_ultimo_skip_network_active_check を追加。

Version 1.0.0 - 2021/05/08 - 初回リリース
