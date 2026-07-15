---
title: 稅務處理
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# 稅務處理

Ultimate Multisite 在我們的核心 plugin 中內建了稅務收取模組，因此如果你需要對你的方案、套裝與服務收取銷售稅，可以輕鬆做到，而不需要安裝任何 add-ons。

對於位於歐洲的公司，我們提供一個 **add-on**，加入工具與功能，以更好地**支援 VAT** 合規。

Ultimate Multisite 不會代表你向政府申報或繳納稅款；我們只是協助你在交易時收取適當的稅款。**你仍然需要自行繳納稅款。**

## 啟用稅務收取 {#enabling-tax-collection}

稅務收取預設未啟用。若要啟用，你需要前往 **Ultimate Multisite > Settings > Taxes**，並切換以啟用 Enable Taxes 設定。

![稅務設定頁面頂部的 Enable Taxes 切換](/img/config/settings-taxes-enable.png)

以下是稅務設定頁面的完整檢視：

![稅務設定完整頁面](/img/config/settings-taxes-full.png)

你也可以檢視個別產品的稅務設定：

![產品的稅務設定](/img/config/settings-taxes.png)

### 未含稅與含稅 {#tax-excluded-vs-tax-included}

預設情況下，你所有產品價格都是未含稅，這表示稅款**不包含**在產品價格中。如果我們判定某位客戶應該為某筆購買支付稅款，我們會在小計**之上**加上稅款。

如果你偏好將稅款包含在產品價格中，可以啟用 **Inclusive Tax** 設定來做到。

![Enable Taxes 設定下方的 Inclusive Tax 切換列](/img/config/settings-taxes-inclusive.png)

別忘了**儲存**你所做的變更。

###

## 建立稅率 {#creating-tax-rates}

啟用稅務收取後，你需要使用我們的稅率編輯器為特定地點建立稅率。

你可以在稅務設定頁面側邊欄點擊 **Manage Tax Rates** 按鈕來存取編輯器。

![設定頁面 Tax Rates 面板中的 Manage Tax Rates 連結](/img/config/settings-taxes-manage-rates.png)

在稅率編輯器頁面，你可以點擊 **Add new Row** 按鈕來新增 Tax Rates。

![頂部有 Add new Row 按鈕的稅率編輯器表格](/img/config/tax-rates-editor.png)

你需要為每個稅率提供一個**標題**（用於發票）。接著你可以選擇將收取此稅的**國家**（必填）、**州/省，**以及**城市**（兩者皆為選填）。最後，加入**百分比稅率**。

### 稅務類別 {#tax-categories}

你也可以建立多個稅務類別，以便為不同種類的產品加入不同稅率。

點擊 **Add new Tax Category**，然後輸入你的類別名稱並按下 **Create**。

![稅率編輯器頂部的 Add new Tax Category 按鈕](/img/config/tax-categories-add.png)

![建立類別彈窗中的 Tax Category Name 輸入欄位](/img/config/tax-categories-create-modal.png)

若要瀏覽類別，請點擊 **Switch**，並選擇你想新增稅項的類別。

![用於切換稅務類別的 Switch 下拉按鈕](/img/config/tax-categories-switch.png)

![顯示可用類別的稅務類別選擇器下拉選單](/img/config/tax-categories-select.png)

你可以前往 **Product edit page**，然後到 Taxes 分頁，為特定產品設定稅務類別。

![含稅務類別與應稅切換的產品稅務分頁](/img/config/product-taxes.png)

在同一個畫面上，你可以關閉 **Is Taxable?** 切換，讓 Ultimate Multisite 知道不應對該指定產品收取稅款。

## 歐洲 VAT 支援 {#european-vat-support}

如前所述，我們為 EU 中因歐洲 VAT 規定而有額外需求的客戶提供 add-on。

我們的 VAT 工具有助於幾件重要事項：

  * 輕鬆載入 EU VAT 稅率；

  * VAT 號碼收集與驗證——以及對 VAT 免稅實體（例如擁有有效 VAT 號碼的公司）進行反向課稅；

若要安裝該 add-on，請前往 **Ultimate Multisite > Settings**，然後點擊 **Check our Add-ons** 側邊欄連結。

![含 Check our Add-ons 連結的 Settings 頁面側邊欄](/img/config/settings-taxes-addons-link.png)

你將被重新導向至我們的 add-ons 頁面。在那裡，你可以搜尋 **Ultimate Multisite VAT add-on** 並安裝它。

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

接著，前往 **Network Admin > Plugins**，並在整個網路範圍啟用該 add-on。

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

如果你回到 **Tax Settings tab**，會看到新的可用選項。切換 **Enable VAT Support** 選項以啟用新的 VAT 工具。別忘了**儲存**你的設定！

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### 擷取 VAT 稅率 {#pulling-on-vat-tax-rates}

我們的整合加入的工具之一，是能夠載入 EU 成員國的稅率。這可以在啟用 EU VAT 支援後，造訪稅率編輯器頁面來完成。

在頁面底部，你會看到 VAT 擷取選項。選擇稅率類型並點擊 **Update EU VAT Rates** 按鈕，將會擷取並自動填入表格，列出每個 EU 成員國的稅率。接著，你只需要儲存即可。

![稅率編輯器底部的 Update EU VAT Rates 按鈕](/img/config/tax-rates-vat-pull.png)

你也可以在擷取後編輯數值。若要這麼做，只要編輯你需要的表格列，並點擊以儲存新數值。

### VAT 驗證 {#vat-validation}

啟用 VAT 支援後，Ultimate Multisite 會在 checkout 表單中、帳單地址欄位下方加入一個額外欄位。此欄位只會顯示給位於 EU 的客戶。

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite 接著會驗證 VAT Number；如果回傳為有效，則會套用反向課稅機制，並將該訂單的稅率設為 0%。
