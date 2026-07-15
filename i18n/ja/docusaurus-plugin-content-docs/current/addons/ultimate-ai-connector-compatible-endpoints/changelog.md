---
title: Ultimate AI Connector for Compatible Endpoints 変更履歴
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector for Compatible Endpoints 変更履歴

## Version 2.0.0 — 2026-04-24 リリース {#version-200--released-on-2026-04-24}

* 新機能: マルチプロバイダー対応 — 複数の AI エンドポイントを設定し、プロバイダー間で自動フォールバックを行うリクエストルーティングが可能になりました。
* 修正: プロバイダーごとに正しいプロバイダーID、登録URL、HTTPフィルターのスコープを持つマルチプロバイダーSDK連携を実装しました。
* 修正: 新しいプロバイダーカードが追加された際に自動的に展開するようになり、プラグイン更新時にスクリプトのキャッシュバスターが機能するようになりました。
* 修正: `eval()` 用の動的なプロバイダークラス名前空間と、新しく追加されたプロバイダーに対する自動展開の動作を修正しました。
* 修正: WordPress 6.9+ の互換性のために、未定義だった `DragHandle` を廃止し、ユニコードのグリップアイコンを使用するようになり、Card/CardBody/CardHeader/CardDivider コンポーネントが安定版になりました。
* 修正: プロバイダーのドラッグ＆ドロップでの並び替えに使用されていた、ブロックするHTTPリクエストが、ページロードのたびに実行されるのを排除しました。
* 改善: GitHub Actionsのワークフローを Node.js 24 にアップグレードしました。

## Version 1.0.0 — 初期リリース {#version-100--initial-release}
