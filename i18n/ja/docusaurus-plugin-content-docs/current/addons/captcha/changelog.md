---
title: Captcha 変更履歴
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Captcha 変更履歴

バージョン: 1.3.2 - リリース日 2026-01-27
* 修正: Cap widget が Elementor または他のページビルダーを使用したチェックアウトフォームでレンダリングされない
* 修正: cap-widget カスタム要素が wp_kses() サニタイズで除去される
* 改善: チェックアウト captcha フィールドにコール可能コンテンツを使用して HTML フィルタリングを回避
* 改善: エッジケース用のフォールバック付きで JavaScript を簡素化

バージョン: 1.3.1 - リリース日 2026-01-26
* 修正: Cap Captcha 目に見えないモードが動的な Ultimate Multisite チェックアウトフォームで自動解決されない
* 改善: Cap checkout スクリプトが MutationObserver を使用して動的に読み込まれたウィジェットを検出
* 改善: チェックアウトボタンのインターセプションを追加し、送信前にトークンを待機

バージョン: 1.3.0 - リリース日 2026-01-27
* 新規: WooCommerce Blocks チェックアウト統合が Store API フェッチインターセプションを使用
* 新規: WooCommerce チェックアウトでの Invisible captcha サポート (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* 新規: Ultimate Multisite を使用しない独立した設定ページ
* 新規: Jetpack Autoloader による依存関係の競合防止
* 修正: hCaptcha が動的な Ultimate Multisite チェックアウトでレンダリングされない (AJAX ロードされたコンテンツ)
* 修正: フォーム検証エラーが発生した際に Captcha がリフレッシュ/リセットされない
* 修正: WooCommerce チェックアウトページで hCaptcha が表示されない
* 修正: reCAPTCHA クラスが見つからないエラー (google/recaptcha PHP ライブラリを追加)
* 改善: WordPress フック、MutationObserver、AJAX インターセプションを使用したエラー検出
* 改善: 設定説明に API キー用のダッシュボード URL が含まれるようになった

バージョン: 1.2.2 - リリース日 2026-01-24
* 修正: Ultimate Multisite Login Form Element で Captcha が表示されない (フォームフィルタ名の不一致)
* 修正: Cap widget HTML が wp_kses() サニタイズで除去される
* 修正: JavaScript セレクタが要素 ID にスラッシュが含まれるフォームを見つけられない
* 追加: Filter hook `wu_kses_allowed_html` を classaddons 用に追加し、許可された HTML タグを拡張
* 削除: デッドコード JavaScript ファイルをプロバイダー固有のスクリプトに置き換え

バージョン: 1.2.1 - リリース日 2026-01-23
* 修正: Cap Captcha トークン検証がマルチサイト環境で失敗する (現在はネットワーク全体のトランジェントを使用)
* 修正: Captcha がログイン状態に関係なくすべてのユーザーで一貫してレンダリングされる
* 修正: captcha のレンダリングと検証の不一致がチェックアウト失敗を引き起こした

バージョン: 1.2.0 - リリース日 2026-01-21
* 新規: Cap Captcha - 自前でホストする proof-of-work captcha、アクティベーション時にデフォルトで有効
* 新規: ゼロ構成保護 - アドオンを有効化するとすぐに保護される
* 新規: ポリモーフィック captcha プロバイダーアーキテクチャで簡単に拡張可能
* 新規: WooCommerce Store API チェックアウトがカードテスト攻撃に対して保護
* 新規: チャレンジ、検証、ブロックされた攻撃を表示する統計トラッキングダッシュボード
* 新規: Cap Captcha 難易度のセキュリティレベルプリセット (Fast, Medium, Max)
* 新規: reCAPTCHA と hCaptcha プロバイダー用の抽象ベースクラス
* 改善: コードベースをモジュラーなプロバイダークラスにリファクタリング
* 改善: 専用マネージャークラスで責務の分離を向上
* 修正: $_SERVER 変数のサニタイズに関するセキュリティ改善
* 修正: WordPress 命名規則に合わせた PHPUnit テスト構成

バージョン: 1.0.1 - リリース日 2025-09-28
* プレフィックスを ultimate-multisite に変更; テキストドメインを更新; バージョンを上げる
