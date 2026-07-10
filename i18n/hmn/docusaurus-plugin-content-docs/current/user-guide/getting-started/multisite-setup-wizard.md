---
title: Kev tsim phoj Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard {#multisite-setup-wizard}

Ultimate Multisite 에는 WordPress 설치를 자동으로 WordPress Multisite mạng lưới (network) へປ່ຽນໃຫ້တဲ့ built-in wizard ຢູ່. ມັນमुळे `wp-config.php` ໄຟລ໌ manually ແກ້ໄຂ ຫຼື database commands ດໍາເນີນການ કરવાની ຄວາມຈໍາເປັນບໍ່ມີ.

:::tip
ຖ້າ WordPress installation ຂອງທ່ານ પહેલેથીເຮັດວຽກເປັນ Multisite network ຢູ່ແລ້ວ, ທ່ານສາມາດຂ້າມຂັ້ນຕອນນີ້ໄດ້ເລີຍ. Wizard ນີ້ຈະປາກົດສະເພາະເວລາທີ່ Multisite ຍັງບໍ່ໄດ້ເປີດໃຊ້ເທົ່ານັ້ນ.
:::

## ເມື່ອໃດທີ່ Wizard ປາກົດ? {#when-does-the-wizard-appear}

ເມື່ອທ່ານ activate Ultimate Multisite ໃນ WordPress installation ປົກກະຕິ (non-Multisite) ຢູ່, plugin ຈະຮູ້ວ່າ Multisite ຍັງບໍ່ໄດ້ເປີດໃຊ້ ແລະ ມັນຈະແນ່ໃຈພາທ່ານໄປຫາ Multisite Setup Wizard ແທນທີ່ຈະເປັນ regular setup wizard.

ທ່ານຍັງສາມາດເຂົ້າເຖິງມັນໂດຍກົງທີ່ **WP Admin > Ultimate Multisite > Multisite Setup**.

## ສິ່ງທີ່ຕ້ອງມີ (Prerequisites) {#prerequisites}

ກ່ອນທີ່ຈະດໍາເນີນການ wizard, ໃຫ້ແນ່ໃຈວ່າ:

- ທ່ານມີ **administrator access** ເຂົ້າສູ່ WordPress installation ຂອງທ່ານ
- ໄຟລ໌ `wp-config.php` ຂອງ server ຂອງທ່ານສາມາດ **writable** (ຂຽນໄດ້) ໂດຍ web server
- ທ່ານມີ **recent backup** ຂອງໄຟລ໌ ແລະ database ຂອງທ່ານ

:::warning
Wizard ນີ້ຈະແກ້ໄຂໄຟລ໌ `wp-config.php` ຂອງທ່ານ ແລະ ສ້າງ database tables ໃໝ່. ສະເໝີສ້າງ backup ກ່ອນທີ່ຈະດໍາເນີນການຕໍ່ໄປ.
:::

## ຂັ້ນຕອນທີ 1: ຕ້ອນຮັບ (Welcome) {#step-1-welcome}

ໜ້າທໍາອິດຈະອະທິບາຍວ່າ WordPress Multisite ແມ່ນຫຍັງ ແລະ wizard ນີ້ຈະເຮັດຫຍັງແດ່:

- ເປີດໃຊ້ feature Multisite ໃນການຕັ້ງຄ່າ WordPress ຂອງທ່ານ
- ສ້າງ database tables ຂອງ network ທີ່ຈໍາເປັນ
- ເພີ່ມ multisite constants ທີ່ຕ້ອງການເຂົ້າໃນ `wp-config.php`
- Activate Ultimate Multisite ທົ່ວ network

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

ກົດ **Continue** ເພື່ອໄປຕໍ່.

## ຂັ້ນຕອນທີ 2: ການຕັ້ງຄ່າ Network (Network Configuration) {#step-2-network-configuration}

ຂັ້ນຕອນນີ້ຈະຂໍໃຫ້ທ່ານຕັ້ງຄ່າການຕັ້ງຄ່າ network ຂອງທ່ານ.

### Site Structure {#site-structure}

Kuvau ti li yu tham tsis tasawm yuav hauv network sites yuav ua li:

- **Sub-domains** (Recommended) — Sites yuav hauv subdomain yuav txhua ib lub npe, ví, `site1.yourdomain.com`
- **Sub-directories** — Sites yuav ua tus path, ví, `yourdomain.com/site1`

:::note
He neeg ti koj xav siv sub-domains, koj yuav tsum txhua ib lub npe DNS wildcard thiab SSL certificate rau lub domain hauv koj. Ntau hosting WordPress management yuav ua li no txawm kom zoo. Thov pib thiaj paub ntau yam los ntawm [Ultimate Multisite 101](./ultimate-multisite-101) rau kev hloov chaw tsis txhob.
:::

### Network Title (Lub Npe Network) {#network-title}

Teev lub npe rau koj network. No yuav ua li ti koj site uas muaj tsis tasawm, thiab nws yuav muaj "Network" hauv ib lub npe. Koj yuav thib hloov no los ntawm network settings sau.

### Network Admin Email (Email Ua Thawm Network) {#network-admin-email}

Lub email address uas siv rau kev thov tshiab txog teeb meem ntawm network. No yuav ua li ti koj tus user uas muaj tsis tasawm yuav siv no.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Thaum koj tso lub npe, thov tso **Continue** los ntawm no kom mus rau qhov uas tsis tasawm.

## Step 3: Installation (Qhov Chaw Ua Install) {#step-3-installation}

Thov tso lub nút **Install** los ntawm no kom muaj rov los. The wizard yuav ua lim tshiab lima hauv txoj ib lub sijhawm, thiab txhua qhov yuav tsum tsis tasawm nyob hauv real-time:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Description |
|------|-------------|
| **Enable Multisite** | Thaw `WP_ALLOW_MULTISITE` constant into `wp-config.php` |
| **Create Network** | Tạo database tables cho multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, v.v.) thiab nạp thông tin network configuration của koj |
| **Update Configuration** | Thêm constants cuối cùng cho multisite vào `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, v.v.) |
| **Fix Cookies** | Having site URL zoo siab ha metadata cua network kom tsis muaj raug kev txhais khoom (authentication issues) tha uas koj thov lub plugin |
| **Network Activate Plugin** | Network-activate Ultimate Multisite los yog ua haujlwm mus rau txhua qhov chaw ha tej network |

Txhua step yuav tso ib yam status no:

- **Pending** — Tsis muaj raug ua (Waiting to be processed)
- **Installing...** — Ua haujlwm los (Currently running)
- **Success!** — Ua tau zoo (Completed successfully)
- **Error message** — Muaj raug txawm (An error occurred) (The message yuav hloov qhia tias muaj ceeb ceeb)

Thaum txhua step ua tau zoo, koj yuav hcis tsim neej "Success!" leeb tsawv rau txhua yam:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Thaw mus ua screen tsim neej (completion screen) yuav ua haujlwm los txoj.

## Step 4: Complete {#step-4-complete}

Thaum uas installation tam tam li, koj yuav hcis lub hanws zoo tias WordPress Multisite tau muaj raug ua.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Taw mus ua Ultimate Multisite setup wizard los ntawm txhua yam uas koj xav ua (company details, default content, payment gateways, v.v.).

:::note
Multisite installation 完咗之後，你嘅瀏覽器會自動轉到新開嘅 network admin。有時你需要再登入一次，因為 authentication cookies 會更新成適合 multisite 環境嘅設定。
:::

## 手動設定備用方案 (Manual Setup Fallback) {#manual-setup-fallback}

如果 wizard 無法寫入你嘅 `wp-config.php` 檔案（可能係因為檔案權限問題或者伺服器限制），佢會顯示你需要手動加埋嘅精確程式碼：

1. 需要加喺 `/* That's all, stop editing! */` 這一行上面的 **wp-config.php constants**。
2. 適合你選擇嘅網站結構（subdomain 定是 subdirectory）嘅 **.htaccess rewrite rules**。

做完手動修改之後，刷新頁面，wizard 就會偵測到 multisite 已經啟動喇。

## 疑難排解 (Troubleshooting) {#troubleshooting}

### wizard 話 wp-config.php 無法寫入 (The wizard says wp-config.php is not writable) {#the-wizard-says-wp-configphp-is-not-writable}

你嘅 web server process 需要對 `wp-config.php` 檔案有寫入權限。你可以選擇：

- 暫時將檔案權限改為 `644` 或 `666`
- 使用 wizard 提供嘅手動設定備用說明
- 問吓你嘅 hosting provider 有冇幫忙

### 設定完之後網站無法存取（subdomains）(Sites are not accessible after setup (subdomains)) {#sites-are-not-accessible-after-setup-subdomains}

如果你選擇咗 subdomain 結構，你需要為你嘅網域設定 **wildcard DNS**。加一個 DNS record：

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

如果唔知點樣設定呢個，可以問吓你嘅 hosting provider。

### 設定完之後出現認證問題（Authentication issues after setup） {#authentication-issues-after-setup}

如果你登出咗或者遇到 cookie 錯誤：

1. 清除瀏覽器針對該網站嘅 cookies
2. 再到 `yourdomain.com/wp-login.php` 重新登入
3. 如果問題仲係有，請檢查你嘅 `wp-config.php` 裡面 `COOKIE_DOMAIN` 是否設定為 `false` — 呢個係 subdomain multisite 安裝時常見嘅問題。

### 安裝過程中某一步失敗咗 (A step failed during installation) {#a-step-failed-during-installation}

Thaw ib yam los ntawm qhov teb chaw tsim:

1. Tsoj ib yam lus zoo rau qhov tseeb (error message) uas tau tsim.
2. Ua lub hanj tsim (configuration step) yeej thiab thử los tsim yim.
3. Yog tias qhov teb tseeb tseem, tsawg lub log teb PHP ntawm server zoo rau kev xav pa ntau yam tsis muaj meej txog qhov tseeb.
4. Qhov teb uas tau tsim los tawm yeej yuav tsis txhob ua rau lwm tus (the installer is idempotent) hauv lub sijhawm tsim los ntau.
