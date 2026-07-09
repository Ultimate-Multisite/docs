---
title: WooCommerce 整合變更日誌
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce 整合變更記錄

版本 2.2.0 - 發布於 2026-07-01
* 新增：Ultimate Multisite 稅額現在會在 checkout 時以獨立的 WooCommerce 費用項目顯示，讓付款前的稅額總計更清楚。
* 新增：新增可選用的「續訂失敗時立即暫停 Memberships」設定，以及 `wu_woo_suspend_on_payment_failure` filter，供希望在 WooCommerce Subscriptions 重試期間於續訂失敗時暫停的網站使用。
* 修正：調整 WooCommerce Subscription 狀態，避免在續訂失敗或恢復後與 Ultimate Multisite memberships 保持不同步。
* 修正：當 Ultimate Multisite 貨幣清單缺少 WooCommerce 商店貨幣時，將其加入清單。
* 修正：將訂閱者重新導向至 WooCommerce checkout 時，保留客戶帳單詳細資料。
* 改進：新增與 Jetpack Autoloader 5 的相容性。
* 改進：清理發布套件產生流程，讓 GitHub 與 marketplace 壓縮檔避免包含巢狀暫存目錄與開發檔案。

版本 2.0.6 - 發布於 2026-01-16
* 改進：在 addon 中包含核心訂閱。不再需要 Woocommerce Subscriptinos extension。

版本 2.0.5 - 發布於 2026-01-09
* 改進：從 glotpress API 載入翻譯。
* 修正：某些頁面建置器中的嚴重錯誤。
* 修正：當客戶是主網站成員時發生無限重新導向。

版本 2.0.4 - 發布於 2025-11-14
* 新增：更多語言的翻譯。
* 變更：重新命名為 Ultimate Multisite: Woocommerce Integration。
* 新增：與 Woocommerce 10.2.1 的相容性。
* 新增：與 Woocommerce Subscriptions 7.7.0 的相容性。
* 修正：與 PHP 8.4 的相容性
* 修正：沒有 WC 帳戶頁面時的重新導向問題。

版本 2.0.3 - 發布於 2025-08-13
* 變更：啟用新 marketplace 的自動更新。

版本 2.0.2 - 發布於 2025-07-05
* 變更：重新命名為 Multisite Ultimate: Woocommerce Integration。
* 新增：與 Woocommerce 9.8.1 的相容性。
* 新增：與 Woocommerce Subscriptions 7.3.0 的相容性。
* 修正：客戶取消訂閱。
* 修正：使用 checkout block 時發生嚴重錯誤。
* 改進：現在與 Woocommerce 高效能自訂訂單表格相容。
* 修正：在 WooCommerce checkout 取消仍可能升級 membership。

版本 2.0.1 - 發布於 2023-08-09

* 新增：與 Woocommerce 7.9.0 的相容性。
* 新增：與 Woocommerce Subscriptions 5.3.0 的相容性。
* 新增：支援 membership 更新。
* 新增：Woocommerce 中關於試用與設定費的通知。
* 新增：以 meta 值識別 Ultimate Multisite Woocommerce 產品。
* 新增：插入一次性修正，以標記所有 Ultimate Multisite 相關 Woocommerce 產品。
* 新增：從 Woocommerce 清單移除 Ultimate Multisite 建立的產品。
* 改進：建立非週期性 Woocommerce 折扣以套用至購物車。
* 改進：將週期性折扣還原至 Woocommerce 產品。
* 改進：在 Woocommerce 產品加入週期性折扣標籤。
* 改進：確保 checkout 上的產品類型。
* 修正：在降級流程中維持 membership 狀態。
* 修正：檢查訂閱是否存在，以避免取消流程中的錯誤。
* 修正：新增訂閱開始日期，以用於 Woocommerce subscriptions。
* 內部：實作新的 PHP 8.1 建置流程。

版本 2.0.0 - 完整重寫。

* 新增：處理取消方法，以便在變更 gateway 或取消 membership 時移除 woo subscription；
* 新增：用於降級與升級 memberships 的處理器；
* 改進：在子網站的客戶更新表單上載入 woocommerce 相依項，以允許帳戶更新；
* 改進：若不存在則正確載入 Woocommerce 購物車；
* 改進：處理 checkout 時確保位於主網站表格；
* 改進：讓 Ultimo 續訂訂單依據 Woocommerce subscription 訂單值，而不是來自上次付款；
* 修正：前往 WU Membership 按鈕連結；
* 修正：當 Woocommerce subscriptions 續訂已付款時，將 Ultimo 訂單設為已付款；
* 建置：加入 MPB 作為建置器；

版本 2.0.0-beta-5 - 發布於 2022-01-21

* 內部：新增 hooks 與 filters 產生器；
* 內部：新增 Ultimate Multisite stubs，以提升開發者使用體驗；
* 修正：在不必要時防止建立多個產品；

版本 2.0.0-beta.4 - 2021-09-23

* 修正：要求 WooCommerce 必須在網路啟用，而不只是主網站啟用；
* 改進：新增 filter，允許將 add-on 作為 mu-plugin 使用；

版本 2.0.0-beta.3 - 2021-05-28

* 修正：dashboard 存取控制過於嚴格；
* 改進：將 WooCommerce 說明連結加入 Ultimate Multisite 頂端選單；

版本 2.0.0-beta.2 - 2021-05-04

* 改進：在 WCS 續訂訂單建立時，於 Ultimo 建立待付款項；
* 改進：使用 Ultimate Multisite 客戶資料預先填入帳單欄位；
* 改進：為 gateways 加回帳單欄位；

版本 2.0.0-beta.1 - 2021-05-04

* 初始 beta 發布

-- 舊版版本 --

版本 1.2.6 - 26/03/2020

* 修正：與較新版本 WooCommerce Subscriptions 的小型不相容問題；

版本 1.2.5 - 26/08/2019

* 修正：上一個發布版本中的錯誤；

版本 1.2.4 - 22/08/2019

* 改進：新增選項，可在整合後立即重新導向至 WooCommerce checkout 畫面；

版本 1.2.3 - 26/05/2019

* 修正：在某些邊緣案例中 WooCommerce 的付款電子郵件消失；

版本 1.2.2 - 27/02/2019

* 新增：支援 WooCommerce Subscription 整合中的設定費；

版本 1.2.1 - 17/11/2018

* 修正：與 Ultimate Multisite 版本 1.9.0 的相容性問題；

版本 1.2.0 - 10/09/2018

* 改進：add-ons 的新更新 URL；
* 新增：對 WooCommerce Subscription 的 Beta 支援；

版本 1.1.2 - 11/02/2018

* 修正：動態產生付款連結，以回應 WooCommerce endpoints 的變更；
* 改進：現在當呼叫 payment_completed 時，我們會強制訂單為已完成狀態，以確保續訂 hooks 在應執行時執行；

Version 1.1.1 - 24/01/2018

* 已修正：現在也會檢查 WooCommerce 是否剛在主網站啟用；
* 已修正：加入 over-loadings，允許建立訂單時包含稅金；

Version 1.1.0 - 04/11/2017

* 已修正：現在整合按鈕的標籤會實際變更以反映設定。需要 Ultimate Multisite 1.5.0；
* 已修正：即使 WooCommerce 不是在網路中啟用，而只在主網站啟用，WooCommerce Integration 現在也能運作；

1.0.0 - 初始發行
