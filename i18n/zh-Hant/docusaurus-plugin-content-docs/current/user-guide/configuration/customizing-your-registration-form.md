---
title: 自訂您的註冊表單
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# 自訂你的註冊表單

為了讓你的網路看起來有別於所有其他建立在 WordPress 平台上的 SaaS，Ultimate Multisite 允許你使用我們的 **Checkout Forms** 功能自訂你的註冊與登入頁面。

雖然它們是在嘗試轉換新客戶時，用來實驗不同方法的簡單且彈性的方式，但它們主要用於建立個人化註冊表單。本文旨在向你展示如何做到這一點。

## 登入與註冊頁面： {#login-and-registration-pages}

安裝 Ultimate Multisite 後，它會自動在你的主網站上建立自訂登入與註冊頁面。你可以隨時前往 **Ultimate Multisite > Settings > Login & Registration** 頁面變更這些預設頁面。

![登入與註冊設定頁面](/img/config/settings-general.png)

以下是登入與註冊設定頁面的完整檢視：

![登入與註冊設定完整頁面](/img/config/settings-login-registration-full.png)

讓我們看看你可以在 **Login & Registration** 頁面上自訂的每一個選項：

  * **啟用註冊：** 此選項會啟用或停用你網路上的註冊功能。如果將其關閉，你的客戶將無法註冊並訂閱你的產品。

  * **啟用電子郵件驗證：** 如果此選項開啟，訂閱免費方案或含試用期付費方案的客戶將收到驗證電子郵件，並需要點擊驗證連結，才能建立他們的網站。

  * **預設註冊頁面：** 這是註冊的預設頁面。此頁面需要在你的網站上發布，並包含註冊表單（也稱為結帳表單）——你的客戶將在此訂閱你的產品。你可以建立任意數量的註冊頁面與結帳表單，只要記得將結帳表單 shortcode 放在註冊頁面上，否則它不會顯示。

  * **使用自訂登入頁面：** 此選項允許你使用自訂登入頁面，而不是預設的 wp-login.php 頁面。如果此選項開啟，你可以在 **Default login page** 選項（就在下方）選擇哪個頁面將用於登入。

  * **混淆原始登入網址（wp-login.php）**：如果你想隱藏原始登入 URL，可以開啟此選項。這對於防止暴力破解攻擊很有用。如果啟用此選項，當使用者嘗試存取原始 wp-login.php 連結時，Ultimate Multisite 會顯示 404 錯誤

  * **強制同步網站發布：** 客戶在網路上訂閱產品後，新的待處理網站需要轉換為真正的網路網站。發布流程會透過 Job Queue 以非同步方式進行。啟用此選項可強制發布在與註冊相同的請求中發生。

現在，讓我們看看其他仍與登入與註冊流程相關的選項。它們位於同一個 Login & registration 頁面上的 **其他選項** 下方：

  * **預設角色：** 這是你的客戶在註冊流程後於其網站上擁有的角色。

  * **啟用 Jumper：** 在管理區域啟用 Jumper 捷徑。Jumper 讓管理員無需逐一瀏覽每個選單，即可快速跳轉到 Ultimate Multisite 畫面、網路物件，以及其他支援的目的地。如果你偏好在管理介面中隱藏該快速導覽工具，請將其關閉。

  * **也將使用者新增到主網站：** 啟用此選項後，註冊流程完成後也會將使用者新增到你網路的主網站。如果啟用此選項，下方也會出現一個用來設定這些使用者在你網站上 **預設角色** 的選項。

  * **啟用多重帳號：** 允許使用者使用相同電子郵件地址，在你網路中的不同網站擁有帳號。如果此選項關閉，你的客戶將無法使用相同電子郵件地址，在你網路上執行的其他網站建立帳號。

以上就是所有你可以自訂、與登入和註冊相關的選項！完成編輯後，別忘了儲存你的設定。

## 使用多個註冊表單： {#using-multiple-registration-forms}

Ultimate Multisite 2.0 提供結帳表單編輯器，讓你可以建立任意數量的表單，包含不同欄位、提供的產品等等。

登入頁面與註冊頁面都嵌入了 shortcode：登入頁面上的 **[wu_login_form]**，以及註冊頁面使用的 **[wu_checkout]**。你可以透過建置或建立結帳表單，進一步自訂註冊頁面。

若要存取此功能，請前往左側邊欄的 **Checkout Forms** 選單。

![側邊欄中的 Checkout Forms 選單](/img/config/checkout-forms-list.png)

在此頁面上，你可以看到你擁有的所有結帳表單。

如果你想建立新的表單，只需點擊頁面頂端的 **Add Checkout Form**。

你可以選擇這三個選項之一作為起點：單一步驟、多步驟或空白。然後，點擊 **Go to the Editor**。

![新增 Checkout Form，包含單一步驟、多步驟或空白選項](/img/config/checkout-forms-list.png)

或者，你可以點擊名稱下方的選項，編輯或複製你已經擁有的表單。在那裡，你也會找到複製表單 shortcode 或刪除表單的選項。

![Checkout form 滑鼠懸停動作，包含編輯、複製與刪除](/img/config/checkout-form-hover-actions.png)

如果你選擇單一步驟或多步驟，結帳表單會預先填入其運作所需的基本步驟。接著，如果你願意，可以新增額外步驟。

### 編輯 Checkout Form： {#editing-a-checkout-form}

如前所述，你可以為不同目的建立結帳表單。在此範例中，我們將處理註冊表單。

導覽到結帳表單編輯器後，為你的表單命名（僅供內部參考使用）並設定 slug（例如用於建立 shortcodes）。

![含名稱與代稱欄位的結帳表單編輯器](/img/config/checkout-form-name-slug.png)

表單由步驟與欄位組成。你可以點擊 **新增結帳步驟** 來新增步驟。

![新增結帳步驟按鈕](/img/config/checkout-form-add-step.png)

在彈出視窗的第一個分頁中，填寫表單步驟的內容。為它設定 ID、名稱和描述。這些項目大多在內部使用。

![含 ID、名稱和描述的結帳步驟內容分頁](/img/config/checkout-form-step-content.png)

接著，設定步驟的可見性。你可以在 **永遠顯示**、**僅向已登入使用者顯示** 或 **僅向訪客顯示** 之間選擇。

![結帳步驟可見性選項](/img/config/checkout-form-step-visibility.png)

最後，設定步驟樣式。這些是選填欄位。

![結帳步驟樣式設定](/img/config/checkout-form-step-style.png)

現在，是時候在第一個步驟中新增欄位了。只要點擊 **新增欄位**，然後選擇你想要的區段類型。

![新增欄位按鈕](/img/config/checkout-form-add-field-button.png)![欄位類型選擇下拉選單](/img/config/checkout-form-field-type-dropdown.png)

每個欄位都有不同的參數需要填寫。對於這第一個項目，我們將選擇 **使用者名稱** 欄位。

![使用者名稱欄位設定](/img/config/checkout-form-username-content.png)![使用者名稱欄位參數](/img/config/checkout-form-username-visibility.png)![使用者名稱欄位其他設定](/img/config/checkout-form-username-style.png)

你可以依需求新增任意數量的步驟與欄位。若要顯示產品供客戶選擇，請使用價格表欄位。如果你想讓客戶選擇範本，請新增範本選擇欄位。以此類推。

![含範本選擇欄位的結帳表單編輯器](/img/config/checkout-form-with-template-field.png)

_**注意：** 如果你在建立結帳表單後才建立產品，你需要在價格表區段中加入該產品。如果沒有加入，該產品將不會在註冊頁面上顯示給客戶。_

_**注意 2：** 使用者名稱、電子郵件、密碼、網站標題、網站 URL、訂單摘要、付款和提交按鈕都是建立結帳表單的必填欄位。_

在處理結帳表單時，你隨時可以使用預覽按鈕查看客戶會如何看到表單。你也可以在以現有使用者或訪客身分檢視之間切換。

![結帳表單編輯器上的預覽按鈕](/img/config/checkout-form-preview-button.png)![以訪客或現有使用者身分預覽結帳表單](/img/config/checkout-form-preview-modal.png)

最後，在 **進階選項** 中，你可以設定 **感謝你** 頁面的訊息、新增追蹤轉換的程式碼片段、為結帳表單新增自訂 CSS，或將其限制於特定國家/地區。

![含感謝你頁面、轉換追蹤和自訂 CSS 的進階選項](/img/config/checkout-form-advanced.png)

你也可以透過切換右側欄中的這個選項，手動啟用或停用結帳表單，或永久刪除該表單。

![結帳表單的啟用切換與刪除選項](/img/config/checkout-form-active.png)

別忘了儲存你的結帳表單！

![儲存結帳表單按鈕](/img/config/checkout-form-save.png)

若要取得表單的短代碼，請點擊 **產生短代碼**，並複製彈出視窗中顯示的結果。

![含可複製短代碼的產生短代碼彈出視窗](/img/config/checkout-form-editor.png)

_**注意：** 你需要將此短代碼新增到註冊頁面，才能將此結帳表單加入其中。_

## 透過 URL 參數預先選取產品與範本： {#pre-selecting-products-and-templates-via-url-parameters}

如果你想為產品建立自訂價格表，並在結帳表單上預先選取客戶從價格表或範本頁面選擇的產品或範本，你可以使用 URL 參數來達成。

### **對於方案：** {#for-plans}

前往 **Ultimate Multisite > 產品 > 選擇方案**。你應該會在頁面頂端看到 **點擊以複製可分享連結** 按鈕。這是你可以用來在結帳表單上預先選取此特定方案的連結。

![含可分享連結按鈕的產品頁面](/img/config/products-list.png)

請注意，此可分享連結僅適用於 **方案**。你無法將可分享連結用於套裝或服務。

### 對於範本： {#for-templates}

如果你想在結帳表單上預先選取網站範本，可以在註冊頁面 URL 上使用參數：**?template_id=X**。「X」需要替換為 **網站範本 ID 編號**。若要取得此編號，請前往 **Ultimate Multisite > 網站**。

點擊你想使用的網站範本正下方的 **管理**。你會看到 SITE ID 編號。只要使用此編號，就能讓這個特定網站範本在結帳表單上被預先選取。在我們這裡的範例中，URL 參數會是 **?template_id=2**。

![顯示網站範本 ID 的網站清單](/img/config/site-templates-list.png)

假設我們的網路網站是 [**www.mynetwork.com**](http://www.mynetwork.com)，而包含結帳表單的註冊頁面位於 **/register** 頁面。預先選取此網站範本的完整 URL 會看起來像 [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**。

如果你想，也可以同時為結帳表單預先選取產品和範本。你只需要複製方案的可分享連結，並在末尾貼上範本參數。它會看起來像 [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**。
