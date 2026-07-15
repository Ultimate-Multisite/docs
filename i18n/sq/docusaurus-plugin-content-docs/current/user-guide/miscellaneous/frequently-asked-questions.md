---
title: Pyetje dhe përgjigje shpesh pyetëse
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Pyetë e Shpeshtë Kërkuar (FAQ)

Këtu janë disa pyetje që shpesh vijojnë gjatë kërkesave për mbështetje.

  * **Çfarë është Ultimate Multisite?**

Ultimate Multisite është një plugin WordPress, i krijuar për instalimet multisite të WordPress-it, që transformon instalimin tuaj të WordPress-it në një rrjet premium të vendeve – si [WordPress.com](https://WordPress.com) – duke lejuar klientëve të krijojnë vende përmes pagesave mujore, kuartore ose vjetore (mund të krijoni edhe plane të lirë).

  * **A do funksionoj Ultimate Multisite pa multisite?**

Jo. Ultimate Multisite kërkon WordPress multisite, një sous-direktori ose subdomain.

  * **Cilat janë kërkesat për Ultimate Multisite?**

Ultimate Multisite kërkon:

**Versioni i WordPress-it** : v5.3+ (Rekomandohet: Versioni më stabil)
**Versioni i PHP-së** : 7.4.x (Mendimi në > 8.0 vijon së shpej)
**Versioni i MySQL-it** : v5+ (Rekomandohet: Versioni 5.6, në rast se nuk keni versionin 8.0 të disponueshëm tek ofruesi juaj hosting)

_Multisite (subdomain ose sous-direktori) gjithashtu duhet të aktivizohet._ [Si të Instalohet WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **A do funksionoj Ultimate Multisite me multisite me sous-direktore?**

Po. Ultimate Multisite mbështet si instalimet në sous-direktori ashtu edhe ato në sous-direktori.

  * **A do funksionoj Ultimate Multisite me multisite me subdomain?**

Po. Ultimate Multisite mbështet si instalimet në sous-direktori ashtu edhe ato në subdomain.

  * **Mund të përdor Ultimate Multisite për të kufizuar cilat Plugins dhe Themes mund t'i përdorin përdoruesit?**

Po. Me Ultimate Multisite mund të zgjidhni cilat plugins dhe themes janë të disponueshëm për çdo plan në rrjetin tuaj.

  * **Mund të përdor Ultimate Multisite për të kufizuar numrin e postimeve që një përdorues mund t'i krijojë te sit i tij/saj?**

Po, me Ultimate Multisite mund të vendos post quotas për **çdo lloj postimi** që keni në rrjetin tuaj. Gjithashtu, mund të kufizoni numrin e përdoruesve që admini mund t'i ftojë, **sasia e hapësirës disk**, dhe shumë më tepër.

  * **A mbështet Ultimate Multisite Site Templates?**

Po. Me Ultimate Multisite mund të krijoni sa të dëshironi Site Templates. Site Templates nuk janë teme (themes), por janë site të zakonshëm në rrjetin tuaj. Mund të aktivizoni plugin-e, tema dhe të personalizoni atë Site Template siç dëshironi. Nëse një përdorues zgjedh këtë template, sitja e tij do të krijohet si kopje e asaj template, me të gjitha personalizimet në vendin.

Mund të vendosni edhe një template specifik për një plan. Bën kështu, çdo përdorues që regjistrohet në atë plan do të ketë sitja e tij krijuar si duplikat i asaj Site Template.

  * **A integron Ultimate Multisite me WooCommerce?**

Po!

Nëse dëshironi që përdoruesit tuaj në rrjet të kenë akses në WooCommerce, duke u lejuar t'u vendosin dyqane, kjo është e mundur duke përdorur Ultimate Multisite. Mund të kufizoni edhe numrin e produkteve që klientët tuaj do të mund të krijojnë në çdo nivel plani.

Në lidhje me pagesat e abonimeve për Ultimate Multisite, mund të përdorni [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) për të lejuar klientëve tuaj Ultimate Multisite të paguajnë duke përdorur WooCommerce gateways në sitin tuaj kryesor. Kështu, mund të përfshini librarin e madh të payment gateway-ve të zhvilluar për WooCommerce dhe t'i përdorni për të faturuar klientët tuaj Ultimate Multisite.

  * **A ka mënyrë të migrojmë abonimet nga WPMUDEV Pro Sites?**

Po, Ultimate Multisite tani ju ofronon një mjet të dobishëm për t'ju ndihmuar me migrimin në rrjetin tuaj Pro Sites.

  * **Pse është tabu "Allowed Plugins" (Pluginet Lejuara) i zbrazët në faqen tuaj të Editimit të Planit?**

Ultimate Multisite ju lejon vetëm të lejoni ose të refuzoni akses për pluginet që nuk janë aktivizuar në rrjetin tuaj. Kur një plugin aktivizohet në rrjet, natyrshëm do të ngarkohet automatikisht në çdo faqe të rrjetit tuaj.

Nëse nuk e shihni asnjë plugin listuar në tabun "Allowed Plugins", kontrolloni nëse plugin-i që dëshironi është aktiv në rrjet apo jo.

  * **A mund të përdorja dizajnin tim i Tabelës së Çmimit (Pricing Table)?**

Po. Qëndruese 1.4.0, Ultimate Multisite mbështet mbylljen e shablloneve (template overrides).

  * **A funksionon Ultimate Multisite me WP Engine?**

Po. Ultimate Multisite gjithmonë ka mbështetur nga WP Engine, por për të bërë që mapimi i domenit të funksionojë ishte e nevojshme një hap shtesë manual nga admini (duke shtuar domenit në panelin e WP Engine). **Kjo nuk është më rasti pasi keni version 1.6.0.** Ultimate Multisite integron drejtpërdrejt me API-n e WP Engine dhe domenët shtojnë automatikisht në panel pas mapimit.

  * **Çfarë ofroni si proveedor hosting?**

Ultimate Multisite mund të funksionojë me çdo provider hosting. Vetmia është se disa kompani hosting, si Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane dhe [Runcloud.io](http://Runcloud.io), kanë një integrim më të ngushtë për aftësitë e mapimit të domenit, kështu që funksionojnë "out of the box". Për hostinge të tjera, mund të duhet të vendosni manualizimin e mapimit të domenit.
