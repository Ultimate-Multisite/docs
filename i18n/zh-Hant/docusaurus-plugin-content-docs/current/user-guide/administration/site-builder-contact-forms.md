---
title: 網站建構器聯絡表單
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# 網站建立器聯絡表單 {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 新增了透過 Site Builder agent 直接從聊天介面建立聯絡表單的功能。這讓您無需離開聊天介面，就能為任何頁面添加功能完整的聯絡表單。

## 概覽 {#overview}

Site Builder 的聯絡表單功能（`create_contact_form`）會自動偵測您安裝的表單 plugin，並使用該 plugin 的原生功能來建立聯絡表單。支援的表單 plugin 包括：

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

助理會自動選擇您網站上最佳可用的表單 plugin，並為該 plugin 量身打造聯絡表單。

## 建立聯絡表單 {#creating-a-contact-form}

若要使用 Site Builder 建立聯絡表單：

1. 在 WordPress 管理介面中開啟 **Gratis AI Agent** 聊天面板。
2. 點擊聊天標題中的 agent 圖示，切換到 **Site Builder** agent。
3. 描述您想要建立的聯絡表單。例如：

   > "請在聯絡頁面新增一個聯絡表單，包含姓名、電子郵件、訊息和電話號碼欄位。"

   或者簡單地說：

   > "為聯絡頁面建立一個聯絡表單。"

4. Site Builder 將會生成聯絡表單，並回傳一個可直接嵌入的 shortcode。

## 使用生成的 Shortcode {#using-the-generated-shortcode}

Site Builder 建立聯絡表單後，會回傳一個 shortcode（例如，`[contact-form-7 id="123"]`）。您可以：

1. **嵌入到頁面或文章中** — 複製 shortcode，然後使用區塊編輯器或經典編輯器貼到任何頁面或文章中。
2. **透過 Site Builder 添加** — 要求 Site Builder 自動將表單新增到特定頁面：

   > "請將聯絡表單新增到聯絡頁面。"

3. **在模板中使用** — 如果您熟悉 PHP，您可以將 shortcode 添加到主題模板檔案中。

## 自訂聯絡表單 {#customizing-the-contact-form}

Site Builder 建立聯絡表單後，您可以進一步進行客製化：

### 透過聊天介面 {#via-the-chat-interface}

要求 Site Builder 修改表單：

> "請更新聯絡表單，新增一個主旨欄位，並將訊息欄位設為必填。"

Site Builder 會更新表單，並回傳更新後的 shortcode。

### 透過表單 Plugin 的管理介面 {#via-the-form-plugins-admin-interface}

您也可以直接在表單 plugin 的設定中客製化表單：

1. 在 WordPress 管理介面中，前往 **Contact Form 7**（或您安裝的表單 plugin）。
2. 找到由 Site Builder 建立的表單。
3. 根據需要編輯表單欄位、驗證規則和電子郵件通知。

## 表單 Plugin 與相容性 {#form-plugins-and-compatibility}

Site Builder 會自動偵測您網站上安裝了哪個表單 plugin，並使用它來建立聯絡表單。如果安裝了多個表單 plugin，Site Builder 會按照以下順序優先使用它們：

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

如果沒有安裝上述任何一個 plugin，Site Builder 會建議您先安裝一個再建立聯絡表單。

## 電子郵件通知 {#email-notifications}

Site Builder 建立的聯絡表單預設會設定為將電子郵件通知發送給網站管理員。您可以自訂接收電子郵件地址和通知訊息：

1. 前往您的表單 plugin 管理介面。
2. 找到由 Site Builder 建立的表單。
3. 編輯電子郵件通知設定。

如需詳細說明，請參閱您的表單 plugin 文件：

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## 範例使用情境 {#example-use-cases}

### 簡單聯絡表單 {#simple-contact-form}

> "建立一個包含姓名、電子郵件和訊息欄位的簡單聯絡表單。"

### 多步驟表單 {#multi-step-form}

> "建立一個聯絡表單，第一步用於輸入聯絡資訊，第二步用於輸入訊息和偏好的聯絡方式。"

### 帶有條件邏輯的表單 {#form-with-conditional-logic}

> "建立一個聯絡表單，根據使用者在下拉式選單中的選擇，顯示不同的欄位。"

### 帶有檔案上傳的表單 {#form-with-file-upload}

> "建立一個聯絡表單，允許使用者上傳檔案或附件。"

:::note
聯絡表單建立功能在 Superdav AI Agent v1.10.0 及更高版本中可用。使用此功能必須確保 Site Builder agent 是啟用的。
:::
