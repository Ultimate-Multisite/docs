---
title: 稅務處理
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# 稅務處理

Ultimate Multisite 在核心外掛中內建了稅務收取模組，如果您需要對方案、套裝和服務收取銷售稅，可以輕鬆完成，無需安裝任何額外附加元件。

針對位於歐洲的公司，我們提供一個**附加元件**，新增工具和功能以更好地**支援 VAT** 合規要求。

Ultimate Multisite 不會代您向政府申報或繳納稅款；我們只是協助您在交易時收取適當的稅款。**您仍需自行繳納稅款。**

## 啟用稅務收取

稅務收取功能預設為停用。若要啟用，請前往 **Ultimate Multisite > Settings > Taxes**，然後切換開啟「Enable Taxes」設定。

![稅務設定中的 Enable Taxes 切換開關](/img/config/settings-taxes.png)

### 稅外加 vs. 稅內含

預設情況下，您的所有產品價格皆為稅外加，代表稅款**未包含**在產品價格中。如果我們判斷客戶在特定購買時需要支付稅款，我們會將稅款**加到**小計金額之上。

如果您希望將稅款包含在產品價格中，可以啟用 **Inclusive Tax** 設定。

![Inclusive Tax 設定切換開關](/img/config/settings-taxes.png)

別忘了**儲存**您所做的變更。

### 

## 建立稅率

啟用稅務收取後，您需要使用我們的稅率編輯器為特定地區建立稅率。

您可以點擊稅務設定頁面側邊欄上的 **Manage Tax Rates** 按鈕來存取編輯器。

![側邊欄上的 Manage Tax Rates 按鈕](/img/config/settings-taxes.png)

在稅率編輯器頁面，您可以點擊 **Add new Row** 按鈕來新增稅率。

![稅率編輯器與 Add new Row 按鈕](/img/config/settings-taxes.png)

您需要為每個稅率指定一個**名稱**（用於發票）。然後您可以選擇將收取此稅款的**國家**（必填）、**州/省**和**城市**（兩者皆為選填）。最後，輸入**百分比稅率**。

### 稅務類別

您也可以建立多個稅務類別，為不同類型的產品設定不同的稅率。

點擊 **Add new Tax Category**，然後輸入類別名稱並按下 **Create**。

![Add new Tax Category 按鈕](/img/config/settings-taxes.png)

![建立新的稅務類別](/img/config/settings-taxes.png)

若要瀏覽各個類別，請點擊 **Switch** 並選擇您要新增稅率的類別。

![在稅務類別之間切換](/img/config/settings-taxes.png)

![選擇要檢視的稅務類別](/img/config/settings-taxes.png)

您可以前往**產品編輯頁面**，然後切換到 Taxes 分頁，為特定產品設定稅務類別。

![產品稅務分頁，包含稅務類別和是否課稅切換開關](/img/config/product-taxes.png)

在同一個畫面上，您可以關閉 **Is Taxable?** 切換開關，讓 Ultimate Multisite 知道不應對該產品收取稅款。

## 歐洲 VAT 支援

如前所述，我們為歐盟的客戶提供一個附加元件，以滿足因歐洲 VAT 法規而產生的額外要求。

我們的 VAT 工具可協助處理幾項重要事務：

  * 輕鬆載入歐盟 VAT 稅率；

  * VAT 號碼收集與驗證 - 以及對 VAT 豁免實體（例如擁有有效 VAT 號碼的公司）進行反向收費；

若要安裝該附加元件，請前往 **Ultimate Multisite > Settings**，然後點擊側邊欄的 **Check our Add-ons** 連結。

![設定頁面與附加元件側邊欄連結](/img/config/settings-taxes.png)

您將被重新導向至我們的附加元件頁面。在那裡，您可以搜尋 **Ultimate Multisite VAT add-on** 並安裝它。

![附加元件頁面上的 VAT 附加元件](/img/config/settings-taxes.png)

![VAT 附加元件安裝對話框](/img/config/settings-taxes.png)

然後，前往 **Network Admin > Plugins** 並在全網路啟用該附加元件。

![全網路啟用 VAT 附加元件](/img/config/settings-taxes.png)

如果您返回 **Tax Settings 分頁**，您會看到新的選項。切換開啟 **Enable VAT Support** 選項以啟用新的 VAT 工具。別忘了**儲存**您的設定！

![稅務設定中的 Enable VAT Support 切換開關](/img/config/settings-taxes.png)

### 拉取 VAT 稅率

我們整合的工具之一是能夠載入歐盟成員國的稅率。啟用歐盟 VAT 支援後，您可以前往稅率編輯器頁面來執行此操作。

在頁面底部，您會看到 VAT 拉取選項。選擇稅率類型並點擊 **Update EU VAT Rates** 按鈕，將會拉取並自動填入每個歐盟成員國的稅率到表格中。然後，您只需儲存即可。

### ![VAT 稅率拉取選項與 Update EU VAT Rates 按鈕](/img/config/settings-taxes.png)

您也可以在拉取後編輯這些值。只需編輯您需要的表格列，然後點擊儲存新值即可。

### VAT 驗證

啟用 VAT 支援後，Ultimate Multisite 會在結帳表單的帳單地址欄位下方新增一個額外欄位。此欄位僅對位於歐盟的客戶顯示。

![結帳表單上的 VAT 號碼欄位](/img/config/settings-taxes.png)

Ultimate Multisite 接著會驗證 VAT 號碼，如果驗證為有效，將套用反向收費機制，並將該訂單的稅率設為 0%。
