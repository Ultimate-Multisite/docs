---
title: چۆنی چۆنی WordPress Multisite دامەزرێنن؟
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# چۆن WordPress Multisite دامەسازم؟

WordPress Multisite دەبێت بگەیت بە تۆڕێکی سایت لەسەر جێبەجێکردنی تاکێک. ئەمە تایبەتمەندییەکی ناوخۆییە، بەڵام بە شێوەیەکی پیش‌تەوا، چالاک نییە.

:::tip
Ultimate Multisite یەکێکە لە ئەوانەی کە **[دەرچوونی سیستەم بۆ دامەسازکردنی Multisite](./multisite-setup-wizard)** دەگرێت کە ئەم پڕۆسەیە بە تەواوی ئۆتۆماتیک دەکات. ئەگەر Ultimate Multisite دامەزراوە، پێمان دەڵێین لە جیاتی چوونە سەر هەنگاوە دستییەکان خێراتر بێت و لەسەر ئەو wizard-ەکە کار بکەیت.
:::

لەبەر ئەوەی Ultimate Multisite پۆلینی تەنها بۆ تۆڕ (network) یە، لەم ڕێنماییەدا دەبێت فێری چۆنیەتی دامەسازکردن و سیستەمکردنی WordPress Multisite بە شێوەیەکی دستی بیت. ئەم دەقە پشت بە [چۆنیەتی دامەسازکردن و سیستەمکردنی تۆڕی WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) لە WPBeginner داتوویت.

**شایدارەکان کە پێش دروستکردنی تۆڕی multisite بکەیت:**

  * هاستکردنی باش بۆ WordPress هەبێت! ئەو سایتانەی لەسەر تۆڕن، سەرچاوە پڕۆژەی یەک خزمەتگوزاری (server) بەش دەبن.

  * ئەگەر تەنها چەند سایتێکی کەم و کارکردنی کەم هەیە، هاستکردنی هاوبەش (shared hosting) ڕەنگە بۆت کاریگەری بکات.

  * زۆربەی **پڕۆژەکانی هاستکردنی WordPress کە بەڕێوەدەچن** Multisite لە سەرەتادا دەدەنەوە (ئەوان WordPress وەک Multisite چالاک و سیستەمکراو پێشکەوتوو دامەزراون). ئەمە بۆ WP Engine، Closte، Cloudways و هتد. ئەگەر ناتێبینییە کە ئایا بۆ پڕۆژەی هاستکردنی خۆت بەم شێوەیە دەبێت، پێش ئەوەی بەم ڕێنماییە بەردەوام بیت، پەیوەندی بکە بە پشتیوانیان.

  * باشترە لەگەڵ دامەسازکردنی WordPress و دەستکاری فایلەکان بە FTP ئامادە بیت.

_**گرنگە**_ **:** ئەگەر تۆ Multisite networkێک لەسەر سایتێکی WordPress هەیە، لەبیرت مەبێت:

  * کۆپییەکی تەواوی (backup) لە سایتەکەت دروست بکەیت.

  * هەموو پۆلینەکان لەسەر سایتەکەت بەکاربهێنانی دەستکەوتنی پڕۆژە (plugins page) و هەڵبژاردنی _Deactivate_ لە کاراکتەرەکانی bulk actions، پاشان کلیککردن لەسەر _Apply_.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

باش بۆ فعالکردنی Multisite، پش Čihtîna xwe bi FTP client an cPanel file manager bi site-a xwe pirsê û fîlê wp-config.php ji bo edayt kirin, û pêşiva linya _*Ewê, edayî edayt bike! Xebatkirina xwe bi xweşî.*_ li berî wê، kodea lêgerî li bajarî:

define('WP_ALLOW_MULTISITE', true);

Fîlê wp-config.php ji bo edayt kirin û paşê berê serverê biketiye.

Bi fehşûkkirina Multisite li site-a xwe, niha wexta ye ku şêweyek (network) xwe bi destê bêye sêwirandin.

Ji ber **Tools » Network Setup** bibêjin.

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Niha tu ji WordPress re vekîna wê biaxivî ku çendû navê domên (domain structure) ji bo site-ên şêweyekê xwe dikevin: subdomains an subdirectories.

Heke tu subdomains biyan, tu mirovî DNS settings ji bo xistina domên û paşî fîlê _**wildcard subdomains**_ ji bo şêweyek Multisite xwe bikeve.

Beribûyî Network Setup, sernameyek (title) ji bo şêweyekê xwe bidawî û bi guman be ku adresa e-mail li admin email yê Network rast e. Ji bo davamkirin, _Install_ biketiye.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Ev kodea ji aliyê WordPress ve hatibe, li fîlê _**wp-config.php**_ xwe bixive:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Û ev kodea jî ji aliyê WordPress ve hatibe, li fîlê _**.htaccess**_ xwe:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# paşî slash-e (/) ji bo /wp-admin e
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use një klient FTP ose menaxherin e skedarëve (nëse po përdorni diçka si cPanel, për shembull) për të kopjuar dhe ngjitur kodin në këto dy skedarë.

Mbaręs, ndryshoni përsëri hyrjen tuaj në faqen WordPress për të aksesuar rrjetin e multisite-it tuaj.

**Është shumë e rëndësishme të provoni dhe të siguroheni se mund të krijoni një subsite në instalimin tuaj WordPress Multisite para se të instaloheni Ultimate Multisite.**

Për të krijuar një subsite:

  1. Hapni adminin tuaj i faqeve të internetit wp-admin

  2. Navigjoni te My Sites > Sites (/wp-admin/network/sites.php)

  3. Klikoni Add New në krye

  4. Plotësoni të gjitha fushat:

  * Site Address — Mos përdorni kurrë “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Titulli i faqes, mund të ndryshohet më vonë

  * Admin Email — Vendosni si përdoruesin admin fillestar për subsite-in

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Pas plotësuar fushat, klikoni butonin "Add site". Pasi subsite-i i ri krijohet, shkoni dhe aksesojeni atë për të siguruar se subsite-i funksionon.

## Problemet e Shpeshta:

### 1. Unë mund të krijoj site të rinj por ato nuk janë të aksesueshme.

Nëse keni zgjedhur subdomain, ju duhet gjithashtu të vendosni wildcard subdomains për rrjetin tuaj multisite.

Për të bërë këtë, shijoni panelin e kontrollit të kontabilitetit të hostimit të faqes tuaj (p.sh cPanel/Plesk/Direct Admin në varësi të ofrues suaj).

Gjeni një opsion për “Domains” ose “Subdomains”. Në disa panele kontrolli, është etiketuar si “Domain administration”.

لە فیلدی subdomain، ئەستێرە (*) بنووسە. پاشان دەبێت پرسیار بکاتت کە ناوی دۆمێنی دیاری بکەیت کە دایە بە زیرەکی ئەو subdomain یەکەکە.

ڕووی سەرەکی (document root) بۆ ناو دۆمێنی دروستکراوە، بە شێوەیەکی ئۆتۆماتیک دەبینرێت. لەسەر دغدغه `_Create_` یان `_Save_` کلیکی بکە بۆ زیادکردنی subdomainی wildcard یەکەت. دەبێت وردەکاریەکە وەک “*.[mydomain.com](http://mydomain.com)” دیار بێت.
