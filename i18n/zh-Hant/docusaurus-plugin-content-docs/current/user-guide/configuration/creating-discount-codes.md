---
title: 建立折扣碼
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# 建立折扣代碼（v2） {#creating-discount-codes-v2}

_**重要注意事項：本文適用於 Ultimate Multisite 版本 2.x。**_

使用 Ultimate Multisite，你可以建立折扣代碼，為你的客戶提供訂閱折扣。而且建立起來很簡單！

## 建立與編輯折扣代碼 {#creating-and-editing-discount-codes}

若要建立或編輯折扣代碼，請前往 **Ultimate Multisite > 折扣代碼**。

![折扣代碼清單 — 尚未有任何代碼前的空狀態](/img/config/discount-codes-empty.png)

你會在那裡看到已建立的折扣代碼清單。

你可以點擊 **新增折扣** **代碼** 來建立新的優惠券，或將滑鼠移到現有項目上並點擊 **編輯** 來編輯它們。

![折扣代碼清單，滑鼠懸停操作顯示編輯與刪除連結](/img/config/discount-codes-list-hover.png)

![頁首中的新增折扣代碼按鈕](/img/config/discount-codes-add-button.png)

你將被重新導向到可建立或編輯優惠券代碼的頁面。在這個範例中，我們將建立一個新的代碼。

![折扣代碼編輯頁面，所有區段皆可見](/img/config/discount-code-edit.png)

讓我們看看這裡可用的設定：

**輸入折扣代碼：** 這只是你的折扣代碼名稱。這不是你的客戶需要在結帳表單中使用的代碼。

**描述：** 在這裡，你可以簡要描述這張優惠券的用途。

![編輯頁面頂部的折扣代碼名稱與描述欄位](/img/config/discount-code-description.png)

你也可以查看折扣代碼為啟用或停用：

![折扣代碼啟用狀態](/img/config/discount-code-active.png)

**優惠券代碼：** 這裡是你定義客戶在結帳時需要輸入的代碼。

![客戶在結帳時輸入代碼的優惠券代碼欄位](/img/config/discount-code-coupon-field.png)

**折扣：** 在這裡，你可以為折扣代碼設定**百分比**或**固定金額**的折扣。

![折扣金額設定，含百分比或固定金額下拉選單](/img/config/discount-code-amount.png)

**套用至續訂：** 如果此選項關閉，此折扣代碼只會套用到**第一次付款**。其他所有付款都不會有折扣。如果此選項開啟，折扣代碼將適用於所有未來付款。

**設定費折扣：** 如果此選項關閉，優惠券代碼將**不會對訂單的設定費提供任何折扣**。如果此選項開啟，你可以設定此優惠券代碼將套用到方案設定費的折扣（百分比或固定金額）。

![套用至續訂與設定費折扣切換選項](/img/config/discount-code-renewals.png)

**啟用：** 手動啟用或停用此優惠券代碼。

![手動啟用或停用折扣代碼的啟用切換](/img/config/discount-code-active.png)

在**進階選項**下，我們有以下設定：

![折扣代碼進階選項](/img/config/discount-code-advanced.png)

**限制使用次數：**

  * **使用次數：** 在這裡，你可以看到折扣代碼已被使用了多少次。

  * **最大使用次數：** 這會限制使用者可以使用此折扣代碼的次數。例如，如果你在這裡填入 10，優惠券就只能使用 10 次。達到此限制後，優惠券代碼就不能再使用。

![限制使用次數設定，含目前使用次數計數與最大使用次數欄位](/img/config/discount-code-limit-uses.png)

**開始與到期日期：** 在這裡，你可以選擇為優惠券新增開始日期和／或到期日期。

![用於排程折扣代碼的開始與到期日期欄位](/img/config/discount-code-dates.png)

**限制產品：** 如果你開啟**選取產品**，所有產品都會顯示給你。你可以手動選取（透過開啟或關閉切換）哪些產品可以接受此優惠券代碼。如果客戶嘗試將此優惠券代碼用於這裡已關閉的產品，這些產品不會顯示任何變更。

![限制產品區段，含每個產品的切換開關](/img/config/discount-code-limit-products.png)

設定好所有這些選項後，點擊**儲存折扣代碼**來儲存你的優惠券，這樣就完成了！

![編輯頁面底部的儲存折扣代碼按鈕](/img/config/discount-code-save.png)

優惠券現在已在你的清單中，從那裡你可以點擊以**編輯或刪除**它。

![清單中的折扣代碼列，含編輯與刪除滑鼠懸停操作](/img/config/discount-codes-list-hover.png)

###

### 使用 URL 參數： {#using-url-parameters}

如果你想自訂網站的價格表，或為你的網站建立漂亮的優惠券代碼頁面，並想自動將折扣代碼套用到結帳表單，可以透過 URL 參數完成。

首先，你需要取得方案的可分享連結。若要這麼做，請前往 **Ultimate Multisite > 產品** 並選取一個方案。

點擊 **點擊以複製可分享連結** 按鈕。這會提供你此特定方案的可分享連結。在我們的情況中，取得的可分享連結是 [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_。_

![產品頁面，含可分享連結按鈕](/img/config/products-list.png)

若要將折扣代碼套用到此特定方案，只需將參數 **?discount_code=XXX** 加到 URL。此處 **XXX** 是優惠券代碼。

在這裡的範例中，我們會將優惠券代碼 **50OFF** 套用到此特定產品。

此特定方案的 URL 加上 50OFF 折扣代碼後會如下所示：[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_。

###
