---
title: Wazancin Shiga Wurin Samar da Shafuka
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# ڕێنمایی دامەزراندنی Multisite {#multisite-setup-wizard}

Ultimate Multisite یەکێکە لە ئەوەی کە بە شێوەیەکی ئۆتۆماتیک جێبەجێ دەکات وردبینی WordPressێکی ستاندارد بۆ تۆڕێکی WordPress Multisite. ئەمە پێویستی بە دەستکاری دستی `wp-config.php` یان دانانی ئەو کارامە لەسەر داتابەیس (database) نییە.

:::tip
ئەگەر جێبەجێکردنی WordPress یەکەت لە ئێستادا وەک تۆڕێکی Multisite بێت، دەتوانیت ئەم هەنگاوە بە تەواوی پاشکەویت. ڕێنمایەکە تەنها کاتێک دەردەکەوێت کە Multisite هێشتا چالاک نەکراوە.
:::

## کەی ڕێنمایەکە دەردەکەوێت؟ {#when-does-the-wizard-appear}

کاتێک Ultimate Multisite لەسەر جێبەجێ دەکەیت لەسەر وردبینی WordPressێکی ستاندارد (نەبوونی Multisite)، پڵگینی دەبینێت کە Multisite چالاک نییە و بە شێوەیەکی ئۆتۆماتیک تۆ ڕێدەدات بۆ ڕێنمای دامەزراندنی Multisite، لەکاتێکدا ڕێنمای دامەزراندنی ئاسایی نییە.

تو دەتوانیت بە شێوەیەکی ڕاستەوخۆ لە **WP Admin > Ultimate Multisite > Multisite Setup** برێت.

## پێشنیارەکان (Prerequisites) {#prerequisites}

پێش ئەوەی ڕێنمایەکە بکەیتەوە، دڵنیا بیت کە:

- تۆ دەستگەیشت بە **Administrator access** بۆ وردبینی WordPress یەکەت
- فایلی `wp-config.php` لەسەر خەریکی (writable) بێت بۆ Web server
- کۆنترۆڵی نوێی ئەو فایلە و داتابەیسە هەبێت

:::warning
ڕێنمایەکە فایلی `wp-config.php` یەکەت دەگۆڕێت و چەندین خاڵەی داتابەیسی نوێ دروست دەکات. هەمیشە پێش ئەوەی بەردەوام بیت، کۆپییەکی فایل و داتابەیسەکە بگرە.
:::

## هەنگاو 1: بەخێربێیت (Welcome) {#step-1-welcome}

پێشینە یەکەم شاشة دەڵێت کە Multisite چییە و ڕێنمایەکە چ کاری گەردێت:

- چالاککردنی تایبەتمەندی Multisite لە پیکیجینگ WordPress یەکەت
- دروستکردنی خاڵەکانی داتابەیسی پێویست بۆ تۆڕ (network database tables)
- زیادکردنی ئەو کۆنستانتە پێویستە بۆ `wp-config.php`
- چالاککردنی Ultimate Multisite لەسەر هەموو تۆڕەکە

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

بۆ بەردەوامبوون، **Continue** بگرە.

## هەنگاو 2: پێکهاتەی تۆڕ (Network Configuration) {#step-2-network-configuration}

ئەم هەنگاوە داوا دەکات کە ڕێکخستنی تایبەتمەندی تۆڕیەکەت بکەیت.

### پێکهاتەی سایت (Site Structure) {#site-structure}

Kaɗan zaɓi yadda za a tsara wuraren yanar gizo (network sites) ku yi:

- **Sub-domains** (Wanda aka ba da shawarar) — Kowane wuri zai samu subdomain dinsa, misali `site1.yourdomain.com`
- **Sub-directories** — Wurin za a ƙirƙira shi ne hanyoyi, misali `yourdomain.com/site1`

:::note
Idan ka zaɓi sub-domains, za ka buƙaci tsara **wildcard DNS** da **wildcard SSL certificate** ga domain ɗinka. Girman lokacin masu gudanar da WordPress (managed WordPress hosts) suna yin hakan kai tsaye. Ka duba [Ultimate Multisite 101](./ultimate-multisite-101) don bayani dalla-dalla kan bambancin su.
:::

### Labalin Yanar Gizo (Network Title) {#network-title}

Ka shigar wani magana ga yanar gizon ku. Wannan yana fara da sunan wurin ku na yanzu tare da ƙara "Network". Za ka iya canza shi daga baya daga tsarin network.

### Imelin Gudanar da Network Admin Email {#network-admin-email}

Imelin da ake amfani da shi don samun bayanan gudanar da network. Wannan yana fara da imelin mai amfani na yanzu.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Bayan ka cika maɓallan, danna **Continue** don ci gaba.

## Mataki 3: Shigarwa (Installation) {#step-3-installation}

Danna maɓallan **Install** don fara. Wannan wizard yana yin bakwai matakan na samarwa da aka tsara a tsari, kowane wakilta yana nuna dalilin sa da yadda yake tafiya a zahiri:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Mataki | Bayanai |
|------|-------------|
| **Faraɓi Multisite** | `wp-config.php` cikin `WP_ALLOW_MULTISITE` constant a ƙara |
| **Ƙirƙirar Network** | ƙirƙirar jadawalin database na multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, da sauransu) kuma shigar bayanan tsarin network ɗinka |
| **Gyara Bayanai** | ƙara ƙarshen constants na multisite zuwa `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, da sauransu) |
| **Gyaran Cookies** | tabbatar cewa URL ɗin site yana daidai a cikin metadata na network don hana matsalolin girmamawa bayan an fara aiki |
| **Fara Aikin Plugin na Network** | Fara aiki (Network-activate) Ultimate Multisite domin ya yi aiki a dukkan network |

Kowane mataki yana nuna wani daga cikin waɗannan yanayen:

- **Pending** — Juri don a lura
- **Installing...** — Yanzu ana gudanarwa
- **Success!** — An kammala nasara
- **Sako na shiri** — Wata matsala ta faruwa (sako zai bayyana matsalar)

Bayan an kammala duk matakan cikin nasara, za ka ga yanayin "Success!" na girmantu don kowane abu:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Sannan wazancin (wizard) zai ci gaba ne kai tsaye zuwa shafin kammala aiki.

## Mataki na 4: Kammalawa {#step-4-complete}

Bayan an kammala shigarwa, za ka ga saƙon nasara wanda ke tabbatar da cewa WordPress Multisite an fara aiki.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Yanzu za ka iya ci gaba da wazancin Ultimate Multisite don tsara tsarin WaaS ɗinka (bayanan kamfanin, abubuwan da ake bayarwa a asali, ƙwarewolin biyan kuɗi, da sauransu).

:::note
Bayan da shigar wajen bayan an kammala shigar Multisite, babban browser ɗinka zai tura (redirect) ta hanyar admin na shaidar da aka ba da sabon lokaci. Zaka iya buƙatar shiga bayani dobita don a sake tabbatarwa saboda an mayar da gyare ga cookies na tabbatarwa ga muhallin Multisite.
:::

## Shigar da Wajen Gaba (Manual Setup Fallback) {#manual-setup-fallback}

Idan wajen gaba ba zai iya rubuta cikin fayil ɗinka `wp-config.php` ba (saboda buɗaɗɗɗen fayil ko karin ƙarin server), zai nuna maka kodi ɗin da kake buƙatar ƙara ne kai tsaye:

1. **constants na wp-config.php** da ake buƙatar ƙara a sama da lissafin `/* Kasa, daina gyara! */`
2. **tsarin rewrite na .htaccess** wanda ya dace da tsarin wajen ka zaɓa (subdomain ko subdirectory)

Bayan an yi canje-canjin kai tsaye, ka sake farawa (refresh) shafin kuma wajen gaba zai gane cewa Multisite yanzu yana aiki.

## Magance Matala (Troubleshooting) {#troubleshooting}

### Wajen gaba ya ce ba za rubuta cikin wp-config.php ba {#the-wizard-says-wp-configphp-is-not-writable}

Wurin aiki na web ɗinka yana buƙatar iyakacin rubutu (write permission) ga fayil ɗin `wp-config.php`. Za ka iya:

- Canza iyakacin fayil ɗin zuwa `644` ko `666` na waje (temporarily).
- Yi amfani da umarni shigar da wajen gaba da aka ba ka ta hanyar wajen gaba.
- Tambaya ga masu samar da sabon wuri (hosting provider) don taimako.

### Ba za a samu damar shiga bayan an kammala shigarwa (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Idan ka zaɓi tsarin subdomain, dole ne ka tsara **wildcard DNS** ga domain ɗinka. Ka ƙara rekodi na DNS:

```
Type: A (ko CNAME)
Host: *
Value: [server IP ɗin ka]
```

Ka tambaya masu samar da sabon wuri idan ba ka da tabbacin yadda za a tsara wannan.

### Matsalolin tabbatarwa bayan an kammala shigarwa {#authentication-issues-after-setup}

Idan aka yi maka shiga ko kana fuskantar ƙarin kuskuren cookies bayan an kammala shigarwar Multisite:

1. Ka tsaftawa cookies na browser ɗinka ga wajen site
2. Yi shiga dobita a `yourdomain.com/wp-login.php`다 sake
3. Idan matsalar ci gaba, ka tabbatar cewa ba a sanya `COOKIE_DOMAIN` zuwa `false` ba a cikin `wp-config.php` — wannan wani matsaloli ne da aka san shi a shigarwar Multisite na subdomain.

### Wata matalau ta yi nasara bayan an shigarwa {#a-step-failed-during-installation}

Idan wata ɗaya daga cikin matakan shigarwa yana nuna kuskure:

1. Ka lura da saƙon kuskuren da aka nuna.
2. Doge zuwa matakin tsara (configuration step) kuma gwada dobaya.
3. Idan kuskuren ya ci gaba, ka bincika login kuskuren PHP na server ɗinka don samun ƙarin bayani.
4. Matakan da suka kammala ba za a sake bi su a lokacin da aka sake gudanarwa (installer yana da wanda ake kira idempotency).
