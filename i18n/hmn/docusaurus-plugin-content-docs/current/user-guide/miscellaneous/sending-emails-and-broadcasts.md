---
title: Tsoom cov lus thiab cov ntaub ntawv
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# ការផ្ញើអ៊ីមែល និងការផ្សព្វផ្សាយ (v2)

_**ចំណាំសំខាន់: អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

Ultimate Multisite មានមុខងារមួយដែលអនុញ្ញាតឱ្យអ្នកទំនាក់ទំនងជាមួយអតិថិជនរបស់អ្នកដោយការផ្ញើអ៊ីមែលទៅកាន់អ្នកប្រើប្រាស់ជាក់លាក់ ឬក្រុមអ្នកប្រើប្រាស់ ហើយក៏អាចផ្ញើសារជូនដំណឹងនៅលើ admin dashboard របស់ពួកគេដើម្បីផ្សព្វផ្សាយព័ត៌មានផងដែរ។

## បន្ថែមការជូនដំណឹងសម្រាប់ admin ទៅក្នុង dashboard របស់អតិថិជនរបស់អ្នកជាមួយ Broadcasts

ដោយប្រើមុខងារ broadcast feature របស់ Ultimate Multisite អ្នកអាចបន្ថែម **admin notices** (ការជូនដំណឹងសម្រាប់អ្នកគ្រប់គ្រង) ទៅក្នុង admin dashboard របស់ subsite របស់អ្នក។

នេះមានប្រយោជន៍ខ្លាំងណាស់ ប្រសិនបើអ្នកត្រូវការធ្វើការប្រកាសអ្វីមួយ ដូចជាការថែទាំប្រព័ន្ធ ឬការផ្តល់ផលិតផល ឬសេវាកម្មថ្មីៗដល់អ្នកប្រើប្រាស់ដែលមានស្រាប់របស់អ្នក។ នេះគឺជារបៀបដែល admin notice នឹងបង្ហាញនៅលើ dashboard របស់អតិថិជនរបស់អ្នក។

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

ដើម្បីចាប់ផ្តើម admin notice សូមចូលទៅកាន់ network admin dashboard របស់អ្នក ហើយក្រោមเมนู **Ultimate Multisite** អ្នកនឹងឃើញជម្រើស **Broadcasts**។

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

អ្នកក៏អាចកែសម្រួល broadcast ដែលមានរួចហើយបានដែរ៖

![Broadcast edit interface](/img/admin/broadcast-edit.png)

ពីหน้านày សូមចុចប៊ូតុង **Add Broadcast** នៅខាងលើ។

វានឹងបង្ហាញ cửa sổ modal សម្រាប់ Add broadcast ដែលអ្នកអាចជ្រើសរើសប្រភេទ broadcast ដែលអ្នកចង់ផ្ញើបាន។

ទៅមុខហើយជ្រើសរើស **Message** រួចចុចប៊ូតុង **Next Step**។

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

បង្អួចបន្ទាប់នឹងសួរអ្នកអំពី **Target customer** (អតិថិជនគោលដៅ) ឬ **Target product** (ផលិតផលគោលដៅ)។ សូមចំណាំថា អ្នកអាចជ្រើសរើសច្រើនជាងមួយ user ឬច្រើនជាងមួយ product បាន។

User account loss los yog neev txhob hais rau tag keyword, user account loss los yog neev txhob hais rau tag product.

Under the field **Message type**, koj tuav tsim cov khoom (color) ntawm cov ntawv. Yuav ua rau cov ntawv ntawd zoo tshaj plaws tias nws yog qhuav tsis txhob tso cai.

Tsuas thaum ntawd, koj tuaj txhob thov **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Thim sau tshiab yog heev uas koj tuaj tsim cov lus los ntawm kev teb siab (subject) thiab cov ntaub ntawv/cov lus uas koj xav los tsim rau cov neeg.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Thaum tsim cov lus los, koj tuaj txhob thov nút **Send** button.

 thiab ntawd thôi. Cov ntawv uas admin tsim yuav tso cai rau dashboard ntawm user zoo li hnub.

## Tsim email rau cov neeg uas xav tau
Thaum siv cov khoom broadcast ntawm Ultimate Multisite, koj tuaj yeem tsim email rau cov neeg. Koj muaj kev txiav tlay los tsim email rau cov neeg txawm tsis txhob hais lossis tsim rau qho neeg uas xav tau yog hauv product lossis plan uas lawv xav tau.

Tus tsim email broadcast, tsam rau dashboard admin ntawm koj network thiab hauv menu Ultimate Multisite, koj yuav pom cov khoom Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Thaum siv sau ntawd, thov nút **Add broadcast** button uas muaj rau ntawm lub ntsiab uas koj xav los tsim broadcast yuav ua li cas. Tsim cov khoom **Email** thiab thov nút **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Thim sau tshiab yuav hais rau koj txog **Target customer** lossis **Target product**. Muaj kev xav tau tias koj tuaj yeem thov ntau dua user lossis ntau dua product.

User account loss los yog product tx hais txhua tus neeg tsim tsis txhob tsim qhia keyword ha thul.

Thaum koj thov tus neeg uas koj xav hauv, koj tuaj **Next Step**.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Thwm window tshiab yog he ti koj yuav rov los tsim cov email tsim los ntawm kev siv subject thiab content/message uas koj xav hloov rau tus neeg.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Thaum koj tsim cov ntawv, koj tuaj thov **Send** button.

Uaws lub email rau tus neeg uas koj xav hloov los ntawm broadcast feature zoo li no.

## System emails

System emails hais rau Ultimate Multisite yog he **automatic notifications** uas system tsim los hauv sau nog siab loj li kev txais lub cai, kev tsim lub cuab, kev map domain, thiab lwm yam. Cov email no yuav muaj zog los hloov lossis thov los ntawm Ultimate Multisite settings. Muaj tus feature los yog koj tsim los thiab import cov settings uas muaj los ntawm ib tug Ultimate Multisite installation loj.

### Resetting & Importing

Cov phiên Ultimate Multisite tshiab, kom muaj add-ons, yuav tsim email tsim tsis txhob hauv lub sijhawm.

Ua txhua tus system **tsis tsim cov template email tsim tshiab los ntawm ib installation loj** uas yog heem los ntawm kev ua rau nws pom zoo rau kev tsim txawv ib feature.

Thaum ntawd, super admins thiab agents yuav muaj zog los import cov email tsim tshiab no hais rau hauv importer tool. Qhov kev ua no yuav tsim system email tsim tshiab loj nrog cov content thiab configuration ntawm cov template email tsim tshiab, uas choj rau super admin los hloov lossis tsim los zoo li heev koj xav.

#### How to import system emails

ໄປທີ່你 Ultimate Multisite Settings 頁面，然後點進 **Emails** 選項卡。

![Ultimate Multisite settings emails tab showing the System Emails section](/img/config/settings-emails-tab.png)

然後，在側邊欄上，點擊 **Customize System Emails** 按鈕。

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

在 System Emails 頁面上，你會看到頂部有一個 **Reset & Import** 行動按鈕。點擊那個按鈕會打開匯入和重置的視窗。

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

然後，你可以開啟「Import Emails」選項來看看有哪些系統郵件可以匯入。

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### 重置 System Emails

有時候，你會發現你對某個電子郵件範本所做的修改已經不再適用了，你想把它恢復到佢嘅 **default state**（預設狀態）。

在這種情況下，你有兩個選擇：你可以直接刪除那個系統郵件然後再匯入它回來（使用上面的說明）——這樣會清除發送指標和其他東西，所以這個方法最不推薦。

或者，你可以使用 **Reset & Import tool** 來重置那個電子郵件範本。

要重置一個電子郵件範本，你可以按照上面的步驟一直做，直到你到達 Reset & Import tool 為止，然後開啟 **Reset** 選項並選擇你想將電子郵件恢復到預設內容的那些郵件。

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
