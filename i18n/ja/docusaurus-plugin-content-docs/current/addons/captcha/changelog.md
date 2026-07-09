---
title: Captcha 変更履歴
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha 変更履歴

バージョン: 1.5.0 - 2026-05-22 リリース
* 新規: ハードストップのレートリミッター — captcha で保護された対象（wp-login / register / lost-password / comments、WooCommerce my-account / checkout / pay-for-order、Ultimate Multisite checkout / inline-login）で発生するすべての GET と POST を数え、HTTP 429、`Retry-After` header、ランダム化されたターピット待機（1〜5秒、最大15秒で厳格に上限）で応答します。
* 新規: ターピット時間枠を調整するための `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` 設定。
* 新規: 信頼済み IP 範囲を除外する `wu_cap_rate_limit_whitelist_ip` filter。
* 新規: ハードストップ応答が送信される直前に実行される `wu_cap_rate_limit_will_block` action。
* 新規: なりすましに強い client-IP 検出。`Captcha_Core::get_client_ip()`（レート制限バケットキー、captcha siteverify `remoteip`、統計 IP ハッシュの信頼できる情報源）は、厳格な信頼モデルを適用するようになりました。REMOTE_ADDR を基準とし、`CF-Connecting-IP` は直近の接続元が現在の Cloudflare IP 範囲内にある場合のみ信頼され、`X-Forwarded-For` は直近の接続元が管理者設定の信頼済みプロキシ一覧にある場合のみ信頼されます。そのうえで右から左へたどり、信頼済み/CF ホップを飛ばして訪問者 IP を確定します。
* 新規: `cap_trust_cloudflare_headers` 設定（初期値は OFF）— Cloudflare の背後にある場合に `CF-Connecting-IP` の信頼を有効化できます。plugin には Cloudflare CIDR スナップショットが同梱され、wp-cron により毎週更新されます。更新に失敗した場合は同梱版にフォールバックします。
* 新規: `cap_trusted_proxies` 設定 — 自前のフロントラインプロキシ / ロードバランサーを列挙する CIDR または裸の IP の textarea（1行に1つ、`#` コメント可）。これがない場合、レートリミッターが有効でも `X-Forwarded-For` は無視されます。
* 新規: 初回有効化時に、Cloudflare / プロキシ構成の可能性を自動検出し、ワンクリックの「検出した設定を適用」管理通知を表示します。plugin が保存済みの値を上書きすることはありません。その後のトラフィックから設定が実際の構成と一致しなくなった可能性が示された場合（例: Cloudflare が CIDR 範囲を変更し、プロキシ CIDR が古くなった場合）、推奨更新を示す閉じられない不一致通知が表示されます。
* 修正: 非表示モードが `cap_security_level` を黙って FAST に下げることはなくなりました。管理者が設定したレベルが尊重されます。独自ロジックを使いたいサイト向けに、新しい `wu_cap_server_security_level` filter を利用できます。
* 修正: 統計の `rate_limits_triggered` カウンターは、まれな成功後のバックストップ経路だけでなく、すべてのブロックで増加するようになりました。
* 修正: `Captcha_Core::get_client_ip()` は、レートリミッター、captcha プロバイダー（reCAPTCHA + hCaptcha `siteverify`）、統計にまたがる訪問者 IP 帰属の単一の信頼できる情報源になりました。これにより、偽造された `CF-Connecting-IP` header を付けた直接のオリジンサーバーリクエストが、実際の接続元ではなく偽装 IP でバケット化されるなりすまし経路を閉じました。
* 修正: WooCommerce クラシック購入手続きのレート制限ゲートは、`woocommerce_before_checkout_form` ではなく `template_redirect`（優先度 1）で実行されるようになりました。カートが空の場合、フォームレベルの hook は実行されないため、商品を追加しないフラッドトラフィックがリミッターを完全に回避していました。
* 修正: WooCommerce 注文支払いのレート制限ゲートは、`woocommerce_before_pay_action` ではなく `template_redirect` で実行されるようになりました。後者は `wp_verify_nonce('woocommerce-pay')` が成功した後にしか実行されず、未認証の攻撃者（実際の脅威モデル）はリミッターを一度も発動しませんでした。
* 修正: WooCommerce Store API（ブロック）の購入手続きレート制限ゲートは、`woocommerce_store_api_checkout_update_order_from_request` ではなく `rest_pre_dispatch` で実行されるようになりました。後者は Store API がカートと請求フィールドを検証した後にしか実行されないため、未認証 bot は検証側から 400 を受け取り、リミッターを発動しませんでした。
* 修正: Ultimate Multisite インラインログインのレート制限ゲートは、`wu_before_inline_login` ではなく `wu_ajax_nopriv_wu_inline_login` 優先度 1（およびログイン済み側の対応処理）で実行されるようになりました。後者は `check_ajax_referer('wu_checkout')` が成功した後にしか実行されないため、有効な wu_checkout nonce を持たない未認証 bot は 403 を受け取り、リミッターを発動しませんでした。
* 修正: `Rate_Limiter::enforce()` は `surface|ip` をキーにしたリクエストごと1回のガードを適用するようになり、1回の描画で2度実行される上流 hook（特に Ultimate Multisite の `wu_setup_checkout`）が実効レート制限しきい値を半減させることはなくなりました。
* 修正: レート制限対象のゲートは `Captcha_Core::is_whitelisted()`（`wu_captcha_whitelisted` filter）を参照しなくなりました。この filter は「captcha が別の対象で処理済み」であることを示すもので、フラッド保護とは独立しています。WooCommerce 連携では、Woo nonce が存在する場合に WordPress ログイン captcha をスキップするためにこれを hook しており、それがレートカウントに波及して Woo POST がリミッターを回避できていました。現在適用される唯一の回避手段は、レート制限専用の `wu_cap_rate_limit_whitelist_ip` filter です。

バージョン: 1.3.2 - 2026-01-27 リリース
* 修正: Elementor やその他のページビルダーを使用した購入手続きフォームで Cap widget が表示されない問題
* 修正: cap-widget カスタム要素が wp_kses() サニタイズで削除される問題
* 改善: HTML フィルタリングを回避するため、購入手続き captcha フィールドに呼び出し可能な内容を使用
* 改善: エッジケース向けフォールバックを備えた JavaScript の簡素化

バージョン: 1.3.1 - 2026-01-26 リリース
* 修正: Cap Captcha の非表示モードが、動的な Ultimate Multisite 購入手続きフォームで自動解決されない問題
* 改善: Cap 購入手続きスクリプトが MutationObserver を使用して動的に読み込まれる widgets を検出するようになりました
* 改善: 送信前に token を待つための購入手続きボタン割り込みを追加

Version: 1.3.0 - 2026-01-27 にリリース
* 新規: Store API フェッチ割り込みによる WooCommerce Blocks チェックアウト統合
* 新規: WooCommerce チェックアウト向け不可視 captcha 対応（hCaptcha invisible、reCAPTCHA v2 invisible、v3）
* 新規: Ultimate Multisite なしで使用するための独立した設定ページ
* 新規: 依存関係の競合を防ぐ Jetpack Autoloader
* 修正: 動的な Ultimate Multisite チェックアウト（AJAX 読み込みコンテンツ）で hCaptcha が描画されない問題
* 修正: フォーム検証エラー発生時に Captcha が更新/リセットされない問題
* 修正: WooCommerce チェックアウトページで hCaptcha が表示されない問題
* 修正: reCAPTCHA クラスが見つからないエラー（google/recaptcha PHP ライブラリを追加）
* 改善: WordPress フック、MutationObserver、AJAX 割り込みによるエラー検出
* 改善: 設定の説明に API キー用の Dashboard URL を含めるようになりました

Version: 1.2.2 - 2026-01-24 にリリース
* 修正: Ultimate Multisite ログインフォーム要素で Captcha が表示されない問題（フォームフィルター名の不一致）
* 修正: Cap ウィジェット HTML が wp_kses() サニタイズで削除される問題
* 修正: JavaScript セレクターが要素 ID にスラッシュを含むフォームを見つけられない問題
* 追加: classaddons が許可 HTML タグを拡張するためのフィルターフック `wu_kses_allowed_html`
* 削除: プロバイダー固有のスクリプトに置き換えられた不要な JavaScript ファイル

Version: 1.2.1 - 2026-01-23 にリリース

* 修正: マルチサイト環境で Cap Captcha トークン検証が失敗する問題（現在はネットワーク全体の transients を使用）
* 修正: ログイン状態に関係なく、すべてのユーザーに Captcha が一貫して描画されるようになりました
* 修正: チェックアウト失敗の原因となっていた captcha 描画と検証の不一致

Version: 1.2.0 - 2026-01-21 にリリース

* 新規: Cap Captcha - セルフホスト型 proof-of-work captcha。activate 時にデフォルトで有効化
* 新規: ゼロ設定の保護 - アドオンを有効化するとすぐに保護されます
* 新規: 拡張しやすい多態的 captcha プロバイダー構成
* 新規: カードテスト攻撃に対する WooCommerce Store API チェックアウト保護
* 新規: チャレンジ、検証、ブロックされた攻撃を表示する統計追跡 Dashboard
* 新規: Cap Captcha 難易度のセキュリティレベルプリセット（高速、中、最大）
* 新規: reCAPTCHA および hCaptcha プロバイダー用の抽象基底クラス
* 改善: コードベースをモジュール式プロバイダークラスにリファクタリング
* 改善: 専用マネージャークラスによる責務の分離の向上
* Fixed: Security improvements for $_SERVER variable sanitization
* 修正: WordPress 命名規則に合わせた PHPUnit テスト設定

Version: 1.0.1 - 2025-09-28 にリリース

* プレフィックスを ultimate-multisite に変更。テキストドメインを更新。バージョンを更新。
