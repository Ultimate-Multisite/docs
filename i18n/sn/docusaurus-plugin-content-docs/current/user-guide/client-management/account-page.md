---
title: Urhwaro Rwakasikati RweMwana
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Ukurumbwe wekudya kweMudzidzi wako (v2)

_**CHINTO CHINDIRA: Iye ndiyo inoratidzo kune Ultimate Multisite v2.x.**_

Nekuti mudzidzi anenge akubwera plan yakazara ku rwebuku rwawo, anaramba anogona kuita website uye dashboard yake inosanganisira zvinhu zvinotora nguva yakawanda nezvekuita payments, membership, domains, kuratidza matambudziko ekupedzisira (plan limitations), nehinga.

Mune tutorial iyi, tinokubatsira kuti uone ukurumbwe wekudya kweMudzidzi uye zvinhu zviri kuona uye kuita mune iye.

## Ukurumbwe wekudya (The Account Page) {#the-account-page}

Ukurumbwe wekudya kunogona kuonekwa nekutanga **Account** mu dashboard ya mudzidzi wako.

![Menu yekurumbwe kune dashboard ya mudzidzi](/img/account-page/account-menu.png)

Mu sovereign tenant networks, Ultimate Multisite v2.13.0 inoda kunge kuratidza nzira iyi yekubatsira mudzidzi pamusoro pehisi yakanaka (main site). Kana mudzidzi akasvika ku account, checkout, billing, invoice, site-management, template-switching, kana domain-mapping kubva mu sovereign tenant, chine kuti action dzaiita zvinorewa kune panel ya main-site yeMudzidzi kuti rekubatsira records dzebilling uye membership dziri dzinogona kuita.

Kana mudzidzi akasvika kubva mu sovereign tenant, panel ya main-site yeMudzidzi inogona kuonekwa link yekutsvaga kurudzi (return link) kune site yayo. Iye link inogone kuonekwa chete kana Ultimate Multisite inogona kuona kuti target yakareya (return target) ndiyo mumuya wekuti iye ndiyo site ya mudzidzi, izvi zvinopazuva redirects dzakakwanisa nekubatsira workflow yakanaka.

![Overview yekurumbwe kweMudzidzi](/img/account-page/overview.png)

Apana mudzidzi anenge akatanga kuita iye, anogona kuona overview yemembership yake, chiri chete chaunhu hwekuita payments (billing address), invoices, domains, matambudziko ekupedzisira kwesite, uye haasi anogone kutaura **Site Template** (kana iye inozuva pamusoro pehisi yako).

Anogonawo kunge kuunda membership yakare mu plan yakaipa, kana kuenda kupfungwa (purchase) package kana service inosanganisira. Tiri kuona zvinhu zvakawanda mumwe munzvimbo.

### Zvinoro Rako Rako Wako (Your Membership Overview): {#your-membership-overview}

Chikamu chiri chiri chini pezve zvinorenyo dzavo dzevanhu vachikuru chinonyanya kuti zvinhu zvavo zvakasarudzwa uye zvinhu zvine mhando (plan) kana zvinhu zvine mhando (services/packages) zvakasarudzwa nekuita iye. Chiri chiri chinonyanya kunyorererawo kunyanya, chinhu chinonyanya kunyorererawo kunyanya, kunyanya kunonyanya kunyanya, uye kunyanya kunyanya kunyanya, uye kunyanya kunyanya kunyanya, uye kunyanya kunyanya kunyanya. Chiri chiri chinonyanya kunyorererawo kunyanya, chinhu chinonyanya kunyorererawo kunyanya, kunyanya kunyanya, uye kunyanya kunyanya kunyanya. Chiri chiri chinonyanya kunyorererawo kunyanya, chinhu chinonyanya kunyorererawo kunyanya, kunyanya kunyanya, uye kunyanya kunyanya kunyanya.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Chiri chiri chini pezve iye, vanhu vachikuru vanogona kuona zvinonyanya dze **About This Site** uye zvinonyanya dze **Site Limits**. Zvinonyanya dzavo zvose dzinonyanya kunyanya kuti zvinhu zvavo zvakasarudzwa: disk space, posts, pages, visits, kana zvinhu zvine mhando (etc.). Izvi limits dzinogona kuonekwa pamwe neplan page pa **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Pamapfupi pane **Your Membership**, vanhu vachikuru vanogona kuita click pa **Change**. Izvi zvichova kuone zvinonyanya dzose dze plans uye packages/services. Kana avakumbira plan inotevera, izvi limits dzinotevera kunyanya nekuita iye pane limits dzakasarudzwa dze membership - hakuna kuteerera kana kuita upgrade.

Nekuti vanhu vachikuru vakumbire kuita purchase packages kana services dze membership iyi inotevera - seko disk space kana visits zvakanyanya, membership iyi haichizvinotevera asi packages dzine hoku zvinotevera zvinoita.

Chii chii chinonyanya kunyanya kuti coupon codes hazvazozivikanwa pamwe nepage ya change membership. Kana vanhu vakashandisa coupon code pamwe nekuita purchase ya first membership, code iye ichaitawo pamwe nemembership iyi inotevera.

### Kuti Unge Kuratidza Zvinonyanya Dze Billing Address: {#updating-the-billing-address}

Pa shabhuku, pa account page, vana vana vanhuva kuti vagariro vavo vanogona kuupedza address yevakubatsiri vavo. Vana vavo anofanira kunge kupfeka **Update** panguva _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Chinechakanenge chineonekwa kuvanhu vavo. Zvinodi zviri kune kuti vanoreva address yenyu uye vaipfeke **Save Changes**.

![Update billing address form](/img/account-page/billing-address-form.png)

### Kusimbisa Site Template: {#changing-the-site-template}

Kuti vanhu vavo vanogone kusimbisa site templates, unofanira kuenda ku **Ultimate Multisite > Settings > Sites** uye kupfeka option ya **Allow Template Switching**.

Hupenyera, mu **Ultimate Multisite > Products**, chine zvinoita plans dzako uye uenda ku tab ya **Site Templates**. Zvinodi kuti option ya **Allow Site Templates** ine onyekerera uye mu **Site Template Selection Mode**, option ya **Choose Available Site Templates** inenge yakasiya.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Ungaona templates dzese dzinogone ku website yenyu. Chine zvinoita kuti uve nekuvaka zvinodi vachigone uye zvinodi vanotarisirwa panguva iplan iyu. Ziva kuti option iyi inogona kunge kuitira checkout form, zvichienderera kuti template inotarisirwa ku **Not Available** haizovaka pa registration page yeyo iplan iyu.

Nekuti vana vavo vanogone kupfeka **Change Site Template** mune account page yevavo.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 inonyanyawo panel ya kusimbisa template. Panel inoziva ne **current-template card** kuti vanhu vavo vone kuti template yakanaka ndiyo inoshandiswa panguva vanoreva iyu template yakachengetedza.

Mugwata wosefu wepuku wepapo vachifamba, zvichingobva zvinogona kuone templates dzakare dzineku kune mhando inoshandiswa. Izviro zvinhu hinobatsira vana vachigara vachifamba kuti vashandise templates dzinogona kubva pamwe chete panguva yakasi, uye vanoziva kuti vachishandisa izi zvinodiwa.

![Available site templates list for the plan](/img/config/site-templates-list.png)

Apana vachigadzirawo unoavo vanoda kuenda kune chokwadi chekuti vanoreva chiri chiri chiri, zvichizovalwa kuti vashandise template yakare.

![Site template switch confirmation dialog](/img/account-page/template-switch-confirm.png)

Apana vachifamba kuita onaka (toggle on) uye vachikira **Process Switch**, template yakare yakanaka itai munyoringo wavo wepapo.

Vana vachongona kuti vanogone kushandisa **Reset current template** kubva panovhu iyi kana vanoda kurudzirwa iropamba yakare yawo. Sei kuenda kune template inotra, kurudzirwa template kunogona kusarudza zvinhu zvepapo, zvichizovalwa kuti vana vachikire chokwadi chekurudzirwa kana vanoziva zvakanaka nezvakaipa zvinodiwa pane iropamba yakare.

### Kuva neCustom Domains: {#adding-custom-domains}

Vana vana vachongona kuti vana vachigone kuita onaka (option) yekuti vashandise custom domain panguva yavo wepapo. Kuti vana vachishandise custom domains, enda kune **Ultimate Multisite > Settings >** **Domain Mapping**.

Onaka (toggle on) onaka ye **Enable Domain Mapping**. Izviro zvinhu zvinogone kuita kuti vana vachishandise custom domains pamwe chete panguva yakare.

Usingatse kutaura kuti mapping ya domain inoshandiswa pane product - nekuti unogona kurudzirwa product kuti isina vanogone kushandisa custom domains.

Enda kune **Ultimate Multisite > Products**. Chibvumira plan yako uye enda kune tab ye **Custom Domains**. Onaka (toggle on) onaka ye **Allow Custom Domains**.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Izvirova iwe dzai zvandinobva kuti vanhu vose vakapfungwa (customers) vanoita custom domains. Ndizvi, pa Account page, vanhu vavo vanogona kuita custom domain nekuti vanenge vachikira **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Chifukwa chiri chekuti window yakafamba inotangazira kune vanhu vavo kuti vave kuendesa DNS records vavo kuti custom domain iyi iwe itizwe munzvimbo yenyu (network).

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Iyi message inogona kuendwa (ne iwe) mu **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Ndi pano nzira yakare yese ye settings ya domain mapping:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Panguva ya kukira **Next Step**, vanhu vavo vanogona kuita custom domain name yavo nekuti vanenge vachigona kutaura kuti iwe ndiyo inozivimbika (primary one). Ndinonaka kunzwisisa kuti vanhu vavo vanogona kuita custom domains zvakawanda panyama dzenyu, zvichiri kukosha kuti vave vachigone kutenda upi ndiyo inozivimbika.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Panguva ya kukira **Add Domain**, domain iyi inozviitwa ku account yevakapfungwa vavo. Zvose zvinoita kunenge vanenge vachigona kutaura DNS records dzenyu dzemcustom domain iyi pa domain registrar yavo.

### Kuti Uendese Password: {#changing-password}

Mune dashboard ya account, vanhu vavo vanogona kuendesa password yavo nekuti vanenge vachikira **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Izviro rakozo inotshona chinoratidza finestra pane kuita kuti vafana vamwe vachikumbira kupfeka password yavo yaakaipa uye ndichikumbira kupfeka password yakareta.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Chishoma chine kudzera (Danger Zone): {#danger-zone}

Tiri nezvinhu maviri zviri kuonekwa munzira ya **Danger Zone**: **Delete Site** (Kusarudza Website) uye **Delete Account** (Kusarudza Akaunti). Zvinodiwa munzira ya Danger Zone nekuti nzira dzaiita dziri dzinotevera. Kana vafana vamwe vachaisarudza kusarudza website yavo kana akaunti yavo, vanovaka kuti vaive zvinhu zvaunoda kuenda (toggle on) kuti vave kuenda nekuenda akaunti uye vanovaka kuti vave kuita kuti vone kuti iyi nzira haizvinogona kuenderwa mberi. Nezvina zvakatsanana kuti iyi chivimbo chinotevera.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Kana vanokumbira munzira dzaiita maviri iyi, vanovaka finestra inoratidza kuti vave kuenda nekuenda option yekusarudza website kana akaunti uye vanovaka kuti zvakatsanana kuti nzira iyi haizvinogona kuenderwa mberi.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Kana vanarudza kusarudza website yavo, akaunti yavo uye membership yavo zvakaita kuti zvinhu izvi zvinotevera. Vachida kuita kuti vone zvose zviri munzira yakareta pamwe chete. Kana vanarudza akaunti yavo, nzvimbo dzese dzinoratidzorwa website, memberships uye matanho anogona kubva panzvimbo iyi dzichazvahara.
