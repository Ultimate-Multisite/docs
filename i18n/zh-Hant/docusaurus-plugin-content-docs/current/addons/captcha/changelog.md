---
title: 驗證碼變更日誌
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha 更新日誌

版本：1.5.0 - 發布日期：2026-05-22
* 新增：硬性停止速率限制器（Hard-stop rate limiter）— 計算所有受 Captcha 保護頁面（wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login）上的 GET 和 POST 請求，並回傳 HTTP 429 錯誤、`Retry-After` 標頭，以及隨機的延遲休眠時間（tarpit sleep，範圍為 1–5 秒，最高限制為 15 秒）。
* 新增：`cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` 設定，用於調整延遲休眠的時間窗口。
* 新增：`wu_cap_rate_limit_whitelist_ip` 過濾器，用於排除受信任的 IP 範圍。
* 新增：`wu_cap_rate_limit_will_block` 動作，該動作會在發送硬性停止回應之前立即觸發。
* 新增：抗偽造的客戶端 IP 偵測。`Captcha_Core::get_client_ip()`（用於速率限制桶鍵、captcha siteverify 的 `remoteip`，以及統計 IP hash 的唯一來源）現在強制執行嚴格的信任模型：`REMOTE_ADDR` 是基礎，`CF-Connecting-IP` 僅在直接對等方位於當前 Cloudflare IP 範圍內時才被信任，而 `X-Forwarded-For` 僅在直接對等方位於管理員配置的受信任代理清單中時才被信任。它會從右到左檢查 IP 鏈，跳過受信任/Cloudflare 的跳點，最終確定訪客的 IP 位址。
* 新增：`cap_trust_cloudflare_headers` 設定（預設關閉）— 選擇在 Cloudflare 後方時信任 `CF-Connecting-IP`。此外掛會內建 Cloudflare 的 CIDR 快照，並透過 wp-cron 每週刷新一次，如果刷新失敗，會使用內建的備用機制。
* 新增：`cap_trusted_proxies` 設定 — 允許輸入 CIDR 或裸 IP（每行一個，可使用 `#` 註釋）的文字區域，用於列出您自己的前線代理/負載平衡器。如果沒有設定此項，即使啟用了速率限制器，`X-Forwarded-For` 也會被忽略。
* 新增：首次啟用時，會自動偵測可能的 Cloudflare/代理配置，並在管理介面顯示一個一鍵式的「套用偵測設定」通知。外掛永遠不會覆蓋您儲存的值；如果後續流量顯示您的配置已不符合實際情況（例如 Cloudflare 更改了 CIDR 範圍，而您的代理 CIDR 已過時），系統會顯示一個無法忽略的不匹配通知，並建議您更新配置。
* 修復：隱形模式不再靜默地將 `cap_security_level` 降級為 FAST — 管理員配置的級別會被尊重。新增了 `wu_cap_server_security_level` 過濾器，供需要客製化邏輯的網站使用。
* 修復：統計數據的 `rate_limits_triggered` 計數器現在會在每次封鎖時增加，而不僅僅是在罕見的成功後備用路徑上。
* 修復：`Captcha_Core::get_client_ip()` 現在是跨越速率限制器、captcha 提供商（reCAPTCHA + hCaptcha `siteverify`）和統計數據的訪客 IP 歸屬的唯一來源，從而關閉了一個偽造向量：原本直接來自源伺服器並攜帶偽造 `CF-Connecting-IP` 標頭的請求，會被偽造的 IP 進行計數，而不是真實的對等方。
* 修復：WooCommerce 經典結帳頁面的速率限制閘道現在在 `template_redirect`（優先級 1）觸發，而不是 `woocommerce_before_checkout_form`。由於表單級別的 hook 在購物車為空時永遠不會觸發，因此那些從未添加產品的洪水流量會完全繞過限制器。
* 修復：WooCommerce 支付訂單（pay-for-order）的速率限制閘道現在在 `template_redirect` 觸發，而不是 `woocommerce_before_pay_action`。後者只有在 `wp_verify_nonce('woocommerce-pay')` 成功後才會觸發，這意味著未經授權的攻擊者（實際的威脅模型）從未觸發過限制器。
* 修復：WooCommerce Store API (blocks) 結帳的速率限制閘道現在在 `rest_pre_dispatch` 觸發，而不是 `woocommerce_store_api_checkout_update_order_from_request`。後者只有在 Store API 驗證了購物車和帳單欄位後才會觸發，因此未經授權的機器人會從驗證器處收到 400 錯誤，從未觸發限制器。
* 修復：Ultimate Multisite 的 inline-login 速率限制閘道現在在 `wu_ajax_nopriv_wu_inline_login` 優先級 1（以及登入後的鏡像）觸發，而不是 `wu_before_inline_login`。後者只有在 `check_ajax_referer('wu_checkout')` 成功後才會觸發，這意味著沒有有效 `wu_checkout` nonce 的未經授權機器人會收到 403 錯誤，從未觸發限制器。
* 修復：`Rate_Limiter::enforce()` 現在應用一個按 `surface|ip` 鍵記錄的每次請求保護，因此上游 hook 如果在渲染過程中觸發兩次（特別是 Ultimate Multisite 中的 `wu_setup_checkout`），將不再使實際的速率限制閾值減半。
* 修復：速率限制頁面閘道不再諮詢 `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` 過濾器)。該過濾器用於標記「Captcha 已被其他頁面處理」，它與洪水保護是正交的——WooCommerce 的整合曾將其鉤接到當存在 Woo nonce 時跳過 WordPress 登入 Captcha，這導致了速率計數的洩漏，使得 Woo 的 POST 請求可以規避限制器。現在，只有專門用於速率限制的 `wu_cap_rate_limit_whitelist_ip` 過濾器才是有效的繞過機制。

版本：1.3.2 - 發布日期：2026-01-27
* 修復：使用 Elementor 或其他頁面建構器在結帳表單上無法渲染 Captcha 小工具。
* 修復：`cap-widget` 自定義元素被 `wp_kses()` 消毒機制移除。
* 改進：使用可呼叫內容（callable content）來處理結帳 Captcha 欄位，以繞過 HTML 過濾。
* 改進：簡化了 JavaScript，並為邊緣案例增加了備用機制。

版本：1.3.1 - 發布日期：2026-01-26
* 修復：在動態的 Ultimate Multisite 結帳表單上，隱形 Captcha 無法自動解決。
* 改進：Captcha 結帳腳本現在使用 MutationObserver 來偵測動態載入的小工具。
* 改進：增加了結帳按鈕攔截機制，以等待 token 之後再提交。

版本：1.3.0 - 發布日期：2026-01-27
* 新增：WooCommerce Blocks 結帳整合，並攔截 Store API 請求。
* 新增：WooCommerce 結帳的隱形 Captcha 支援（hCaptcha invisible, reCAPTCHA v2 invisible, v3）。
* 新增：獨立的設定頁面，可不依賴 Ultimate Multisite 使用。
* 新增：Jetpack Autoloader，用於預防依賴衝突。
* 修復：hCaptcha 在動態的 Ultimate Multisite 結帳（AJAX 載入內容）上無法渲染。
* 修復：表單驗證錯誤發生時，Captcha 未刷新/重置。
* 修復：hCaptcha 在 WooCommerce 結帳頁面未顯示。
* 修復：reCAPTCHA 類別未找到錯誤（新增了 google/recaptcha PHP 函式庫）。
* 改進：透過 WordPress hooks、MutationObserver 和 AJAX 攔截來偵測錯誤。
* 改進：設定描述現在包含用於 API key 的管理員儀表板 URL。

版本：1.2.2 - 發布日期：2026-01-24
* 修復：Ultimate Multisite 登入表單元素上無法顯示 Captcha（表單過濾器名稱不匹配）。
* 修復：`cap-widget` 的 HTML 被 `wp_kses()` 消毒機制移除。
* 修復：JavaScript 選擇器無法找到 ID 中包含斜線的表單。
* 新增：過濾器 hook `wu_kses_allowed_html`，供 classaddons 擴展允許的 HTML 標籤。
* 移除：死程式碼 JavaScript 檔案已被提供商特定的腳本取代。

版本：1.2.1 - 發布日期：2026-01-23

* 修復：在多站點環境中，Captcha token 驗證失敗（現在使用網路範圍的 transients）。
* 修復：無論登入狀態如何，Captcha 現在都能一致地渲染。
* 修復：Captcha 渲染與驗證之間的不匹配導致結帳失敗。

版本：1.2.0 - 發布日期：2026-01-21

* 新增：Cap Captcha - 自託管的計算證明（proof-of-work）Captcha，啟用時預設開啟。
* 新增：零配置保護 — 啟用外掛後即可立即受到保護。
* 新增：多型 Captcha 提供商架構，易於擴展。
* 新增：WooCommerce Store API 結帳保護，防止卡片測試攻擊。
* 新增：統計數據追蹤儀表板，顯示挑戰、驗證和被封鎖的攻擊。
* 新增：安全級別預設值（Fast, Medium, Max），用於設定 Cap Captcha 的難度。
* 新增：reCAPTCHA 和 hCaptcha 提供商的抽象基礎類。
* 改進：將程式碼庫重構為模組化的提供商類。
* 改進：使用專用的管理類，更好地分離了職責。
* 修復：對 `$_SERVER` 變數消毒的安全性改進。
* 修復：PHPUnit 測試配置以符合 WordPress 的命名慣例。

版本：1.0.1 - 發布日期：2025-09-28

* 將前綴名稱更改為 ultimate-multisite；更新文本域；版本號增加。
