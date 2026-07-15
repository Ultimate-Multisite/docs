---
title: 安裝 Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# 安裝 Ultimate Multisite

:::note
本教學假設您已安裝並設定好 WordPress Multisite。如需了解如何操作，請參閱 WP Beginner 的 [這篇教學](https://www.wpbeginner.com/glossary/multisite/)。
:::

## 安裝外掛 {#installing-the-plugin}

Ultimate Multisite 可於 [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) 免費取得。

從您的 **Network Admin Dashboard**，前往 **Plugins → Add New Plugin**。

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

搜尋 **"Ultimate Multisite"**（加上引號以進行精確比對），它將作為第一個結果出現。點擊 **Install Now**。

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

安裝完成後，點擊 **Network Activate** 以在您整個網路中啟用此外掛。

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

啟用後，您將自動重新導向至 Setup Wizard。

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard {#setup-wizard}

Setup Wizard 將引導您在約 10 分鐘內完成 Ultimate Multisite 的設定。

### Welcome {#welcome}

點擊 **Get Started** 開始。

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks {#pre-install-checks}

此步驟會檢查您的系統資訊與 WordPress 安裝，以確保符合 Ultimate Multisite 的需求。若一切正常，請點擊 **Go to the Next Step**。

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
若 Ultimate Multisite 已安裝但**尚未網路啟用**——例如，您在網路外掛畫面中點擊了 **Activate**（單一網站）而非 **Network Activate**——Pre-install Checks 步驟將偵測到此狀況並顯示 **Network Activate** 按鈕。

點擊 **Network Activate** 會自動在您整個多站網路中啟用此外掛。啟用後，精靈將正常繼續至安裝步驟。您無需離開精靈來修正啟用狀態。
:::

### Installation {#installation}

安裝程式將建立必要的資料庫表格並安裝 Ultimate Multisite 運作所需的 `sunrise.php` 檔案。點擊 **Install** 以繼續。

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Your Company {#your-company}

填寫您的公司資訊並設定預設貨幣。此資訊將用於您的 WaaS 平台各處。完成後點擊 **Continue**。

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content {#default-content}

此步驟讓您安裝預定義的模板、產品與其他起始內容。這是熟悉 Ultimate Multisite 功能的絕佳方式。點擊 **Install** 以新增預設內容，或跳過此步驟若您偏好從頭開始。

![Default content installation step](/img/installation/wizard-default-content.png)

### Recommended Plugins {#recommended-plugins}

選擇性安裝推薦的配套外掛。點擊 **Install** 以新增它們，或跳過以繼續。

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Ready! {#ready}

完成了！您的 Ultimate Multisite 安裝已完成。您現在可以從 **Network Admin Dashboard** 開始建立您的 Website as a Service 平台。

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

放手去享受吧！
