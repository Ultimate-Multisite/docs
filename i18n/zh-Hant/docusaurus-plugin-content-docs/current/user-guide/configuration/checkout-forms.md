---
title: 結帳表單
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# 結帳表單 {#checkout-forms}

結帳表單是在嘗試轉換新客戶時，用來實驗不同做法的簡單且彈性的方式。

Ultimate Multisite 2.0 提供結帳表單編輯器，讓你可以建立任意數量的表單，並設定不同欄位、提供的產品等等。

若要存取此功能，請前往左側邊欄的結帳表單選單。

![結帳表單清單](/img/config/checkout-forms-list.png)

在此頁面上，你可以看到你擁有的所有結帳表單。

清單表格包含一個 **狀態** 欄，讓你可以確認每個表單目前是否可供客戶使用：

| 狀態 | 意義 |
|---|---|
| **啟用** | 此表單可在其短代碼或註冊頁面已發布的任何位置使用。 |
| **停用** | 此表單已儲存但已停用。客戶無法使用它完成結帳，直到你再次啟用它。 |

在編輯公開註冊流程之前，請使用狀態欄確認，特別是當你將草稿或季節性結帳表單與正式表單並存時。

如果你想建立新的表單，只要點擊頁面頂端的新增結帳表單。

你可以選擇以下三個選項之一作為起點：單一步驟、多步驟或空白。然後，點擊前往編輯器。

當你選擇 **單一步驟** 或 **多步驟** 作為起點時，表單範本現在預設包含一個 **範本選擇** 欄位。此欄位可讓你的客戶在註冊流程中挑選網站範本。你可以保留它、移除它，或像編輯器中的任何其他欄位一樣重新定位它。

![結帳表單編輯器](/img/config/checkout-form-editor.png)

或者，你可以點擊現有表單名稱下方的選項來編輯或複製表單。在那裡，你也會找到複製表單短代碼或刪除表單的選項。

![結帳表單懸停操作](/img/config/checkout-form-hover-actions.png)

#### 結帳表單編輯器概覽 {#checkout-form-editor-overview}

結帳表單編輯器提供完整介面，用於建立你的註冊表單。以下是編輯器版面的概覽：

![結帳表單編輯器概覽](/img/config/checkout-form-editor-overview.png)

### 編輯結帳表單 {#editing-a-checkout-form}

你可以為不同目的建立結帳表單。在此範例中，我們將處理一個註冊表單。

前往結帳表單編輯器後，為你的表單命名（僅供內部參考使用）並設定 slug（例如用於建立短代碼）。

![結帳表單編輯器](/img/config/checkout-form-editor.png)

表單由步驟和欄位組成。你可以點擊新增結帳步驟來加入新步驟。

![新增結帳步驟](/img/config/checkout-form-add-step.png)

在彈出視窗的第一個分頁中，填寫表單步驟的內容。為它設定 ID、名稱和描述。這些項目大多用於內部。

![結帳表單步驟內容分頁](/img/config/checkout-form-step-content.png)

接著，設定步驟的可見性。你可以在「永遠顯示」、「僅對已登入使用者顯示」或「僅對訪客顯示」之間選擇。

![結帳表單步驟可見性分頁](/img/config/checkout-form-step-visibility.png)

最後，設定步驟樣式。這些是選填欄位。

![結帳表單步驟樣式分頁](/img/config/checkout-form-step-style.png)

現在，是時候將欄位加入我們的第一個步驟了。只要點擊新增欄位並選擇你想要的區段類型。

![含欄位的結帳表單步驟](/img/config/checkout-form-step-with-fields.png)

每個欄位都有不同的參數需要填寫。對於這個第一個入口，我們將選擇「使用者名稱」欄位。

![欄位類型選擇下拉選單](/img/config/checkout-form-field-type-dropdown.png)

![使用者名稱欄位內容設定](/img/config/checkout-form-username-content.png)

![使用者名稱欄位可見性設定](/img/config/checkout-form-username-visibility.png)

![使用者名稱欄位樣式設定](/img/config/checkout-form-username-style.png)

你可以依需求新增任意數量的步驟和欄位。若要顯示產品供客戶挑選，請使用價格表欄位。如果你想讓客戶選擇範本，請加入範本選擇欄位。依此類推。

![新增欄位對話框](/img/config/checkout-form-add-field-dialog.png)

_**注意：** 使用者名稱、電子郵件、密碼、網站標題、網站 URL、訂單摘要、付款和提交按鈕是建立結帳表單的必要欄位。_

在處理結帳表單時，你隨時可以使用預覽按鈕查看客戶將如何看到此表單。你也可以在以現有使用者或訪客身分檢視之間切換

![結帳表單預覽按鈕](/img/config/checkout-form-preview-button.png)

![結帳表單預覽彈出視窗](/img/config/checkout-form-preview-modal.png)

最後，在進階選項中，你可以設定「謝謝」頁面的訊息、加入片段以追蹤轉換、將自訂 CSS 加入你的結帳表單，或將其限制於特定國家/地區。

![進階選項](/img/config/checkout-form-advanced.png)

你也可以透過切換右欄中的此選項，手動啟用或停用你的結帳表單，或永久刪除該表單。

![啟用切換](/img/config/checkout-form-active.png)

若要刪除表單，請點擊表單操作中的刪除選項：

![結帳表單刪除選項](/img/config/checkout-form-delete.png)

別忘了儲存你的結帳表單！

![儲存按鈕](/img/config/checkout-form-save.png)

若要取得表單的短代碼，請點擊產生短代碼，並複製彈出視窗中顯示的結果。

![含短代碼的儲存按鈕](/img/config/checkout-form-save.png)

### 價格表欄位 {#the-pricing-table-field}

**價格表** 欄位會在結帳表單上顯示你的產品，讓客戶可以選擇方案。當你編輯此欄位時，可以設定多個選項：

![價格表欄位設定](/img/config/pricing-table-field-settings.png)

以下是價格表在前端註冊表單上的顯示方式：

![前端結帳價格表](/img/config/frontend-checkout-pricing-table.png)

  * **產品**：選擇要顯示哪些產品，以及它們出現的順序。
  * **強制不同期間**：啟用時，無論所有產品是否有符合目前所選計費週期的價格變化，都會顯示。停用時（預設），沒有符合所選週期之變化的產品會被隱藏。
    ![價格表強制期間選項](/img/config/pricing-table-force-durations.png)
  * **預先選取時隱藏**：當已透過 URL 選取方案時（例如 `/register/premium`），隱藏價格表。
  * **價格表範本**：選擇價格表的視覺範本（簡易清單、舊版等）。

如果你在表單包含完成該產品結帳流程所需欄位之前，就將產品加入價格表，編輯器現在會顯示警告。請使用該警告在發布或儲存即時註冊表單的變更之前，加入缺少的必要欄位。

### 新增週期選擇切換 {#adding-a-period-selection-toggle}

如果你已在產品上設定[價格變化](creating-your-first-subscription-product#price-variations)（例如月繳與年繳價格），你可以在結帳表單中新增**週期選擇**欄位。此欄位會顯示一個切換控制，讓客戶在計費週期之間切換，而價格表會即時動態更新。

#### 步驟 1：在產品上設定價格變化 {#step-1-set-up-price-variations-on-your-products}

在新增週期選擇欄位之前，請確認你的產品已設定價格變化。前往 **Ultimate Multisite > 產品**，編輯一個產品，並前往**價格變化**分頁以新增替代計費週期（例如以折扣價提供年繳）。

![產品上的價格變化分頁](/img/config/product-price-variations-tab.png)

#### 步驟 2：將週期選擇欄位新增至你的結帳表單 {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. 前往 **Ultimate Multisite > 結帳表單** 並編輯你的結帳表單。

2. 向下捲動到包含**價格表**欄位的步驟，然後點擊**新增欄位**。

3. 在欄位類型選擇對話框中，點擊**週期選擇**。

![顯示週期選擇的新增欄位對話框](/img/config/checkout-form-add-field-dialog.png)

4. 設定週期選項。每個選項都需要：
   * **期間**：數字（例如 `1`）
   * **期間單位**：週期類型（天、週、月或年）
   * **標籤**：客戶會看到的文字（例如「月繳」、「年繳」）

5. 點擊 **+ 新增選項** 以加入更多週期選擇。這些選項必須符合你在產品上設定的價格變化。

![週期選擇欄位設定](/img/config/period-selection-field-settings.png)

6. 選擇一個**週期選擇器範本**（Clean 為預設，會呈現一個簡單樣式化、可供自訂 CSS 使用的選擇器）。

7. 點擊**儲存欄位**。

#### 步驟 3：將欄位置於價格表上方 {#step-3-position-the-field-above-the-pricing-table}

為了獲得最佳使用者體驗，請確認週期選擇欄位在你的結帳步驟中出現在**價格表**欄位**之前**。你可以在結帳表單編輯器中拖曳欄位以重新排序。如此一來，客戶會先選擇計費週期，然後看到該週期的價格。

![顯示欄位順序的結帳表單編輯器](/img/config/checkout-form-editor-with-fields.png)

#### 它在前端如何運作 {#how-it-works-on-the-frontend}

設定完成後，造訪你的註冊頁面的客戶會在價格表上方看到週期選擇器。當他們點擊不同的計費週期時：

  * 價格表會立即更新，以顯示所選週期的價格（不需要重新載入頁面）。
  * 如果價格表欄位上的**強制不同期間**已停用，沒有符合所選週期價格變化的產品會被隱藏。
  * 如果**強制不同期間**已啟用，所有產品即使沒有符合所選週期的變化，也會保持可見（它們會顯示預設價格）。

#### 透過 URL 預先選取計費週期 {#pre-selecting-a-billing-period-via-url}

你也可以透過 URL 預先選取產品和計費週期。Ultimate Multisite 支援這些 URL 模式：

  * `/register/premium` — 僅預先選取「Premium」產品
  * `/register/premium/12` — 預先選取產品與 12 個月期間
  * `/register/premium/1/year` — 預先選取產品與 1 年期間

### 範本選擇欄位 {#the-template-selection-field}

**範本選擇**欄位可讓客戶在結帳期間選擇網站範本。它現在已預設包含在 Ultimate Multisite v2.6.1 新增的**單一步驟**與**多步驟**結帳表單範本中。

#### 手動新增欄位 {#adding-the-field-manually}

如果你正在使用 v2.6.1 之前建立的表單，或是從空白範本開始：

1. 前往 **Ultimate Multisite > 結帳表單** 並編輯你的結帳表單。
2. 在收集網站詳細資訊的步驟中，點擊**新增欄位**。
3. 從欄位類型對話框中選取**範本選擇**。
4. 設定欄位：
   - **標籤** — 客戶在範本網格上方看到的標題（例如「選擇網站範本」）。
   - **必要** — 客戶是否必須先選取範本才能繼續。

#### 它如何運作 {#how-it-works}

當客戶在結帳期間挑選範本時，Ultimate Multisite 會在佈建他們的新網站時使用該範本。顯示的範本來自你的**網站範本**清單（**Ultimate Multisite > 網站範本**）。只有標示為可供客戶使用的範本會出現在這裡。

### 結帳表單基礎網域 {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 會將結帳表單**網站 URL** 欄位上設定的網域視為網路基礎網域。當你希望客戶在一個或多個共用註冊網域下建立網站時，請使用該欄位的可用網域設定，例如 `example.com` 和 `sites.example.com`。

共用的 checkout-form 基礎網域不會被視為每個網站專屬的自訂網域映射。當客戶在其中一個基礎網域上建立子目錄網站時，Ultimate Multisite 不會建立映射網域記錄，導致該共用主機只屬於那一個網站。共用主機仍可供使用相同 checkout form base 的同層網站使用。

將自訂網域保留給每位客戶的映射主機，例如 `customer-example.com`。將 checkout-form base 網域保留給許多網站都可使用的共用註冊主機。

#### 移除欄位 {#removing-the-field}

如果你不提供網站範本，請從你的表單中移除 Template Selection 欄位。客戶之後會收到在 **Ultimate Multisite > Settings > Site Templates** 下設定的預設範本。
