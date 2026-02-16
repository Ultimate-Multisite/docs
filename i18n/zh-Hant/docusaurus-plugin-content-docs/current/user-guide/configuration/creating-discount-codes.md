---
title: 建立折扣碼
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# 建立折扣碼 (v2)

_**重要提醒：本文適用於 Ultimate Multisite 2.x 版本。**_

透過 Ultimate Multisite，你可以建立折扣碼，讓客戶在訂閱時享有優惠。而且建立過程非常簡單！

## 建立與編輯折扣碼

若要建立或編輯折扣碼，請前往 **Ultimate Multisite > Discount Codes**。

![](/img/config/discount-codes-list.png)

這裡會列出你已建立的所有折扣碼。

你可以點擊 **Add Discount** **Code** 來建立新的優惠券，或是將滑鼠移到現有的折扣碼上，點擊 **Edit** 進行編輯。

![滑鼠懸停時顯示操作選項的折扣碼清單](/img/config/discount-codes-list.png)

![Add Discount Code 按鈕](/img/config/discount-codes-list.png)

接著你會被導向建立或編輯優惠券代碼的頁面。以下範例將示範如何建立新的折扣碼。

![折扣碼編輯頁面](/img/config/discount-codes-list.png)

讓我們來看看這裡有哪些設定選項：

**Enter Discount Code：** 這只是折扣碼的名稱，並非客戶在結帳時需要輸入的代碼。

**Description：** 你可以在這裡簡短說明這個優惠券的用途。

![折扣碼名稱與說明欄位](/img/config/discount-codes-list.png)

**Coupon code：** 這裡是設定客戶在結帳時需要輸入的代碼。

![優惠券代碼欄位](/img/config/discount-codes-list.png)

**Discount：** 你可以在這裡設定折扣的**百分比**或**固定金額**。

![折扣百分比或固定金額設定](/img/config/discount-codes-list.png)

**Apply to renewals：** 如果關閉此選項，折扣碼只會套用於**首次付款**，之後的續約付款都不會享有折扣。如果開啟此選項，折扣碼將適用於所有未來的付款。

**Setup fee discount：** 如果關閉此選項，優惠券代碼**不會對設定費提供任何折扣**。如果開啟此選項，你可以設定此優惠券代碼對方案設定費的折扣（百分比或固定金額）。

![Apply to renewals 與 setup fee discount 選項](/img/config/discount-codes-list.png)

**Active：** 手動啟用或停用此優惠券代碼。

![折扣碼的啟用開關](/img/config/discount-codes-list.png)

在 **Advanced Optio** **ns** 底下，有以下設定：

**Limit uses：**

  * **Uses：** 這裡會顯示折扣碼已被使用的次數。

  * **Max uses：** 限制折扣碼可被使用的總次數。例如，如果你設定為 10，這個優惠券就只能被使用 10 次。達到上限後，優惠券代碼將無法再使用。

![使用次數限制設定，包含 uses 與 max uses 欄位](/img/config/discount-codes-list.png)**Start & expiration dates：** 你可以在這裡為優惠券設定開始日期和/或到期日期。

![開始日期與到期日期欄位](/img/config/discount-codes-list.png)

**Limit products：** 如果開啟 **Select products**，系統會顯示你所有的產品。你可以透過開關來手動選擇哪些產品可以使用此優惠券代碼。被關閉的產品即使客戶嘗試使用此優惠券代碼，也不會有任何折扣效果。

![限制產品的選擇開關](/img/config/discount-codes-list.png)

完成所有設定後，點擊 **Save Discount Code** 儲存你的優惠券，就大功告成了！

![Save Discount Code 按鈕](/img/config/discount-codes-list.png)

優惠券現在已加入你的清單中，你可以從這裡點擊**編輯或刪除**它。

![清單中的折扣碼，顯示編輯與刪除選項](/img/config/discount-codes-list.png)

### 

### 使用 URL 參數：

如果你想要自訂價格表，或是為網站建立精美的優惠券頁面，並希望自動將折扣碼套用到結帳表單，你可以透過 URL 參數來實現。

首先，你需要取得方案的分享連結。請前往 **Ultimate Multisite > Products** 並選擇一個方案。

點擊 **Click to Copy Shareable Link** 按鈕，即可取得該特定方案的分享連結。以我們的範例來說，取得的分享連結是 [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_。_

![產品頁面與分享連結按鈕](/img/config/products-list.png)

若要將折扣碼套用到這個特定方案，只需在 URL 後方加上參數 **?discount_code=XXX**，其中 **XXX** 就是優惠券代碼。

以我們的範例來說，我們要將優惠券代碼 **50OFF** 套用到這個特定產品。

套用 50OFF 折扣碼後，這個特定方案的 URL 會是：[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_。

### 
