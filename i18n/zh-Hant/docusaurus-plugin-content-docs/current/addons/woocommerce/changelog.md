---
title: WooCommerce 整合變更日誌
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce 整合更新日誌

Version 2.0.6 - 發布日期 2026-01-16
* 改進：將核心訂閱功能納入外掛。不再需要 WooCommerce Subscriptions 外掛。

Version 2.0.5 - 發布日期 2026-01-09
* 改進：從 glotpress API 載入翻譯。
* 修復：修復了某些頁面建構器遇到的致命錯誤。
* 修復：當客戶是主站會員時，避免無限重定向。

Version 2.0.4 - 發布日期 2025-11-14
* 新增：支援更多語言的翻譯。
* 變更：名稱變更為 Ultimate Multisite: Woocommerce Integration。
* 新增：與 Woocommerce 10.2.1 的相容性。
* 新增：與 Woocommerce Subscriptions 7.7.0 的相容性。
* 修復：與 PHP 8.4 的相容性。
* 修復：當不存在 WC 帳戶頁面時，避免重定向錯誤。

Version 2.0.3 - 發布日期 2025-08-13
* 變更：啟用與新市場的自動更新。

Version 2.0.2 - 發布日期 2025-07-05
* 變更：名稱變更為 Multisite Ultimate: Woocommerce Integration。
* 新增：與 Woocommerce 9.8.1 的相容性。
* 新增：與 Woocommerce Subscriptions 7.3.0 的相容性。
* 修復：客戶取消訂閱時的流程。
* 修復：使用結帳區塊時的致命錯誤。
* 改進：現在與 Woocommerce 高效能自訂訂單表相容。
* 修復：在 WooCommerce 結帳時取消訂閱，仍可升級會員資格。

Version 2.0.1 - 發布日期 2023-08-09

* 新增：與 Woocommerce 7.9.0 的相容性。
* 新增：與 Woocommerce Subscriptions 5.3.0 的相容性。
* 新增：支援會員資格更新。
* 新增：在 Woocommerce 中顯示關於試用和設定費用的通知。
* 新增：透過 meta 值識別 Ultimate Multisite 的 Woocommerce 產品。
* 新增：插入一次性修復，用於標記所有與 Ultimate Multisite 相關的 Woocommerce 產品。
* 新增：從 Woocommerce 清單中移除 Ultimate Multisite 創建的產品。
* 改進：創建一個非經常性（non-recurring）的 Woocommerce 折扣，用於購物車。
* 改進：將經常性折扣恢復到 Woocommerce 產品。
* 改進：在 Woocommerce 產品上新增經常性折扣標籤。
* 改進：確保結帳頁面的產品類型。
* 修復：在降級過程中維持會員狀態。
* 修復：檢查訂閱是否存在，以避免取消流程中的錯誤。
* 修復：新增開始訂閱日期，用於 Woocommerce 訂閱。
* 內部：實作了新的 PHP 8.1 建構流程。

Version 2.0.0 - 重寫。

* 新增：處理取消方法，用於變更支付閘道或取消會員資格時移除 woo 訂閱；
* 新增：處理會員資格降級和升級的邏輯；
* 改進：在子站點的客戶更新表單上載入 woocommerce 依賴，以允許帳戶更新；
* 改進：如果 Woocommerce 購物車不存在，則正確載入；
* 改進：在處理結帳時，確保我們位於主站的表單上；
* 改進：使 Ultimo 續訂訂單基於 Woocommerce 訂閱訂單價值，而非上次付款；
* 修復：導航到 WU Membership 按鈕連結；
* 修復：當 Woocommerce 訂閱續訂已付款時，將 Ultimo 訂單設為已付款；
* 建構：新增 MPB 作為建構器。

Version 2.0.0-beta-5 - 發布日期 2022-01-21

* 內部：新增了 hooks 和 filters 生成器；
* 內部：新增了 Ultimate Multisite 的 stub，提升開發者使用體驗；
* 修復：防止不必要地創建多個產品。

Version 2.0.0-beta.4 - 2021-09-23

* 修復：要求 WooCommerce 必須在整個網路（network）上啟用，而非僅限主站；
* 改進：新增 filter，允許外掛作為 mu-plugin 使用。

Version 2.0.0-beta.3 - 2021-05-28

* 修復：Dashboard 存取控制過於嚴格；
* 改進：在 Ultimate Multisite 的頂部選單中新增了 WooCommerce 幫助連結；

Version 2.0.0-beta.2 - 2021-05-04

* 改進：在 WCS 續訂訂單創建時，在 Ultimo 上創建待付款項；
* 改進：使用 Ultimate Multisite 客戶資料預填寫帳單欄位；
* 改進：為支付閘道新增帳單欄位。

Version 2.0.0-beta.1 - 2021-05-04

* 初步 Beta 版本

-- 舊版本 --

Version 1.2.6 - 2020/03/26

* 修復：與較新版本的 WooCommerce Subscriptions 存在的小相容性問題；

Version 1.2.5 - 2019/08/26

* 修復：修復了前一個版本中的錯誤；

Version 1.2.4 - 2019/08/22

* 改進：新增了選項，可讓整合後立即重定向到 WooCommerce 結帳頁面；

Version 1.2.3 - 2019/05/26

* 修復：某些邊緣情況下，WooCommerce 的付款電子郵件會消失；

Version 1.2.2 - 2019/02/27

* 新增：支援在 WooCommerce 訂閱整合中設定費用；

Version 1.2.1 - 2018/11/17

* 修復：與 Ultimate Multisite 版本 1.9.0 的相容性問題；

Version 1.2.0 - 2018/09/10

* 改進：外掛的新更新 URL；
* 新增：對 WooCommerce Subscription 的 Beta 支援；

Version 1.1.2 - 2018/02/11

* 修復：連結到 Pay 是動態生成的，以響應 WooCommerce 端點的變更；
* 改進：當呼叫 payment_completed 時，我們現在會強制將訂單狀態設為已完成，以確保我們的續訂 hooks 能在適當時候運行；

Version 1.1.1 - 2018/01/24

* 修復：現在也會檢查 WooCommerce 是否僅在主站啟用了；
* 修復：包含了過載（over-loadings）功能，允許訂單創建包含稅金；

Version 1.1.0 - 2017/11/04

* 修復：整合按鈕的標籤現在會實際變更以反映設定。需要 Ultimate Multisite 1.5.0；
* 修復：即使 WooCommerce 沒有在網路層面啟用，僅在主站啟用，WooCommerce Integration 也能正常運作；

1.0.0 - 初次發布
