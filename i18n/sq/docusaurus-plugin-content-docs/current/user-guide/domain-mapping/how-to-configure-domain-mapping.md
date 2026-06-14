---
title: Si të konfigurosh mapiet e domenit
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Si të Konfigurosh Mapeimin e Domenit (v2)

_**SHËNJE E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Një nga funksionet më të fuqishme të një rrjeti premium është aftësia që i ofrojmë klientëve mundësinë t'i lidhin domenin kryesor (top-level domain) me faqeve të tyre. Më mirë, cilat duket më profesionale: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) apo [_**joesbikeshop.com**_](http://joesbikeshop.com)? Kjo është arsyeja pse Ultimate Multisite ofron këtë funksion të integruar, pa nevojën për të përdorur plugin-e të pallejuara (third-party).

## Çfarë është mapi i domenit (domain mapping)?

Mapi i domenit, ose *domain mapping*, është një koncept që ju ndihmon të lidhni një adresë URL (domen) me një vend tjetër në sistemin tuaj WordPress. Në thelb, kur përdorni një plugin si Ultimate Multisite, kjo funksion ju lejon të menaxhoni sa më shumë site-e ose sub-site-e që mund të ketë të gjitha të lidhur me një adresë bazë (domen kryesore).

Për shkak të kësaj, mund të keni një strukturë si:
*   `site1.com`
*   `blog.site1.com`
*   `shop.site1.com`

Mapi i domenit është mekanizmi që WordPress-i e kupton se kur dikush shkruan adresën `blog.site1.com`, ai duhet të shërbejë përmbajtjen nga serveri i site-it kryesor (`site1.com`), por me një konfigurim specifik për atë sub-site.

**Pse është e rëndësishme?**

Kjo funksion ju jep fleksibilitet të madhe:
1.  **Menaxhimi i Shtëpisë:** Ju lejon të vendosni se cilat pjesë të faqes (p.sh., blogu, dyqani) do të jetë e lidhur me çfarë domen.
2.  **Sisteme Komplekse:** Është thelbësore në ndërtimin e platformave më të mëdha që kanë shumë pjesë të veçme (p.sh., një kompani me disa dyqane, një organizatë me disa departamente).
3.  **SEO dhe Strukturë:** Ju ndihmon të menaxhoni si informacionin nga sub-site-t i lidhur do të shfaqet në rezultatet e kërkimeve (SEO) pa mos penguar performancën e site-it kryesor.

Në thelb, mapi i domenit është një "kartë adresesh" që thotë: "Kur dikush kërkon `[domen_e_subsite]`, shko këtu për të marrë përmbajtjen nga ky vend."

Siç sugjeron emri i tij, mapi i domen (domain mapping) është aftësia që ofron Ultimate Multisite të marrë një kërkesë për një domen të özel dhe ta lidh atë me faqen e përshtatshme në rrjetën me atë domen specifik.

### Si të konfigurosh mapi i domen në rrjetin tënd Ultimate Multisite

Mapi i domen kërkon disa hapet nga ana jote për ta bërë funksional. Mirë që Ultimate Multisite automatizon punën e vështirë për ty, kështu që mund të plotësojesh lehtësisht kërkesat.

Gjatë instalimit të Ultimate Multisite, wizard-i do kopjojë dhe do të instaloje automatikisht **sunrise.php** në folderin e caktuar. Wizard-i nuk do të lejoje se vazhdoni derisa ky hap të jetë përfunduar.

![Instalimi i Ultimate Multisite me sunrise.php](https://example.com/img/installation/install-wizard.png)

Kjo do të thotë se pasi instalimi i Ultimate Multisite ka përfunduar konfigurimin e rrjetit tuaj, mund të filloni të mapi domenin tuaj të personalizuar menjëherë.

Shënim: Mapelimi i domenit në Ultimate Multisite nuk është i detyrueshëm. Keni opsionin të përdorni funksionin natyral të maperimit të domenit të WordPress Multisite ose çdo tjetër zgjidhje maperimi të domenit.

Nëse keni nevojë ta ftoni (disabilitoni) mapiet e domenit të Ultimate Multisite për t'u lënë hapësirë për zgjidhje të tjera të mapimit të domenit, mund ta bëni këtë funksion në **Ultimate Multisite > Settings > Domain Mapping**.

![Faqja e cilësimeve të mapi i domenit që tregon redaktimin administrator, mesazhin e mapi dhe opsionet DNS](/img/config/domain-mapping-settings.png)

Nën këtë opsion mund të shihni edhe opsionin **Force Admin Redirect** (Forco Redirekim Administrator). Ky opsion ju lejon të kontrolloni nëse klientët do të mund të aksesojnë dashboard-in e tyre administrator duke përdorur domenat tuaj personalizuar dhe subdomainet ose vetëm në një prej tyre.

Nëse zgjidhni **Force redirect to mapped domain**, klientët do të mund të aksesojnë vetëm panelin e tyre administrator në domeneve të personalizuara (custom domains).

Opsioni **Forcëso redaktimin drejt domenit të rrjetit (network domain)** bën pikërisht të kundqartën – klientët do të lejohen të aksesojnë dashboard-t e tyre vetëm në subdomain, edhe nëse po provojnë të hyjnë duke përdorur domene personalizuara.

Detyri i opsionit **Lejoim akses në admin nga domen i mapi dhe domeni i rrjetit** lejon që ata të aksesojnë dashboard-t e tyre të admini si në subdomenë ashtu edhe në domen custom.

![Menyja e redaktimit Admin Redirect i zgjeruar duke shfaqur opsionet e tre të redirekimit](/img/config/domain-mapping-redirect-options.png)

Ka dy mënyra për të hartuar një domen të personalizuar (custom domain). E para është duke hartuar emrin e domeneve nga dashboard-i i administratorit të rrjetit si super administrator, dhe e dyti është përmes dashboard-it të administratorit të subsite-it nën faqen e llogarisë.

Por para se të filloni të maponi domenin i personalizuar me një nga sub-sitet në rrjetin tuaj, duhet të siguroheni që **konfigurimet DNS** të emrit të domenit janë të vendosura siç duhet.

###

### Sigurohja që cilësimet DNS të domenit janë konfiguruar si duhet

Për që të funksionoj mapi, duhet të sigurohesh se domeni që planifikon ta maposh po i drejton te adresa IP e rrjetit (Network's IP address). Vërejtje: ke nevojë për adresën IP të rrjetit – adresa IP e domenit ku është instaluar Ultimate Multisite – jo adresa IP e domeniu personalizada që dëshiron ta maposh. Për të kërkuar adresën IP të një domeni specifik, sugjerojmë të shkoni te [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), për shembull.

Për të mapuar domenit në mënyrë të saktë, duhet të shtoni një **A RECORD** në konfigurimin tuaj të **DNS** duke e orientuar atë drejt asaj **IP address**. Menaxhimi i DNS-it ndryshon shumë nga regjistratës së domenit, por ka shumë tutoriale online që mbulojnë këtë nëse kërkoni " _Creating A Record on XXXX_ " ku XXXX është regjistratësi juaj i domeneve (p.sh.: " _Creating A Record on_ _GoDaddy_ ").

Nëse has kërkuar vështirësi të bëni që kjo të funksionojë, **kontaktoni mbështetjen e registrues së domeneve tuaja** dhe ata do të mund t'ju ndihmojnë me këtë pjesë.

Nëse planit të lejoni klientët të hartojnë vetë domenët e tyre, ata duhet të bëjnë këtë pjesë vetë. Ju drejtojeni te sistemi i mbështetjes së registruesë (registrar) nëse ndiheni se nuk jeni në gjendje të krijoni A Record-in.

### Mapon emetuesin e domeneve si Super Administrator

Kur jesh i hyrë në sistem me të drejta Super Admin në rrjetin tënd, mund të shtosh dhe menaxhosh lehtësisht emetuesit e domeneve duke shkuar te **Ultimate Multisite > Domains**.

![Faqja me listën e domenve në Ultimate Multisite](/img/admin/domains-list.png)

Në këtë faqe, mund të klikoni në butonin **Add Domain** (Shto Domen) në krye dhe ky do t'ju hapë një dritare modale ku mund të vendosni dhe plotësoni **custom domain name** (emrin e domeneve të personalizuara), **the subsite** (nënfaçilin) ku dëshironi të aplikoni emrin e domeneve të personalizuara, dhe të vendosni nëse dëshironi ta vendosni si **primary domain name** (emrin kryesor i domeneve) apo jo (vërejeni se mund të maponi **multiple domain names to one subsite** - shumë emra domen për një nënfaçil).

![Modal për shtimin e domeneve me emrin domenit, zgjedhjen vendndomene dhe ndërrim i domeneve primare](/img/admin/domain-add-modal.png)

Pas se keni plotësuar të gjitha informacionet, mund të klikoni butonin **Add Existing Domain** (Shtoni Domenin Ekzistues) në fund.

Ky proces do të fillojë verifikimin dhe të shkarkimin e informacionit DNS për domenit tuaj të personalizuar. Gjithashtu, do të shihni një log në fund të faqes ku mund ta ndiqni procesin që po kalon. Ky proces mund të zgjasë disa minuta për të përfunduar.

Ultimate Multisite v2.13.0 gjithashtu krijon automatikisht regjistrimin e domenit të brendshëm kur krijohet një faqe në një host që duhet të trajtohet si domen për secilin faqe (per-site domain). Nëse hosti është domeni kryesor i rrjetit, ose një nga domenet bazë të formularit të shitjes së përbashkueshme e konfiguruara në fushën **Site URL**, regjistrimi i domeneve të mapiara automatike hiqet (skipped) që që ky domen bazë i përbashkueshëm të mbetet i disponues për çdo faqe që e përdor.

Faza ose statusi duhet të ndryshojë nga **Verifikimi i DNS-it (Checking DNS)** në **Kushtuar (Ready)** nëse gjithçka është e vendosur si duhet.

<!-- Screenshot unavailable: Rreshti i domeneve që tregon fazën Verifikimi i DNS-it në listën e domenve -->

<!-- Screenshot unavailable: Rresha e domeneve që tregon fazën Ready me indikatorin e statusit të gjelbër -->

Nëse klikoni mbi emrin e domenit, do të mund të shihni disa opsione brenda tij. Le të hedhim një shikim të shkurtër ndaj tyre:

![Faça detalje të domenit me ndërruese për fazën, faqe, aktive, primare dhe SSL](/img/admin/domain-edit.png)

**Faza:** Kjo është faza në të cilën ndodhet domeni. Kur e shtoni domenin për herë të parë, do të jetë atje në fazën **Verifikimi i DNS-it**. Procesi do të kontrollojë hyrjet e DNS-it dhe do të konfirmojë që janë korrekte. Më pas, domeni do të vendoset në fazën **Verifikimi i SSL-it**. Ultimate Multisite do të kontrollojë nëse domeni ka SSL apo jo dhe do ta kategorizojë domenit tuaj si **Ready** (Përgatitur) ose **Ready (without SSL)** (Përgatitur pa SSL).

**Sitet (Site):** Subdomeni që është i lidhur me këtë domen. Domeni i mapi do të shfaqë përmbajtjen e kësaj dite specifike.

**Aktive (Active):** Mund ta ndryshoni këtë opsion për ta aktivizuar ose deaktivizuar domen.

**A domene primar?**: Klientët mund të kenë më shumë se një domen të mapuar për çdo faqe. Përdorni këtë opsion për të zgjedhur nëse ky është domeni primar për faqen specifike.

**A është i sigurt?:** Edhe pse Ultimate Multisite kontrollon nëse domeni ka certifikatë SSL apo jo para se ta aktivizosh, mund të zgjedhësh manualisht të ngarko domenin me ose pa certifikatë SSL. Vërejtje: nëse faqja web nuk ka certifikatë SSL dhe përpiqesh ta ngarkosh majë me SSL, mund të të japë gabime.

### Mapon emrat e domeneve të personalizuara si përdorues subsite-i

Administratorët e subsite-it mund të marrin edhe emrat e domeneve të personalizuara nga dashboard-i i administratorit të subsite-it.

Përpara, duhet të siguroheni që keni aktivizuar këtë opsion nëseçimin e **Domain mapping**. Shikoni skenën më poshtë.

<!-- Screenshot unavailable: Konfigurimi i mapi të domenve që lejon përdoruesit e subsite-ve të mapojnë domenet përmes ndërveprimit të menaxhimit të DNS-së të Klientit -->

Kaes mund ta vendos ose konfigurosh këtë opsion në nivelin e **Planit** ose opsionet e produktit në **Ultimate Multisite > Products**.

![Seksioni i domeneve të personalizuara në faqen e redaktimit të produktit](/img/config/product-custom-domains.png)

Kur i keni aktivizuar ndonjë nga këto opsione dhe një përdorues i subsite-it lejohet të mappojë emra domene të personalizuar, përdoruesi i subsite-it duhet të shohë një metabox në faqen **Account** (Llogaria) me titullin **Domains** (Domene).

<!-- Screenshot unavailable: Metaboket e domenve në faqen Konti të subsite me butonin Shtoni Domen -->

Përdoruesi mund të klikojë butonin **Shtoni Domen** dhe do të hapet një dritare modale (modal window) me disa udhëzime.

<!-- Screenshot unavailable: Modal i shtuar me domenin që tregon udhëzimet për recordin DNS A për përdoruesit e subsiteve -->

Më pas, përdoruesi mund të klikojë në **Hapi i Ardhshëm** dhe të vazhdojë me shtimin e emrit të domeneve të personalizuara. Ata gjithashtu mund të zgjedhin nëse ky do të jetë domeni primar apo jo.

<!-- Screenshot unavailable: Forma për shtimin e domenit me fushë emri të domeneve të personalizuar dhe ndërfaqe primare e domeneve -->

<!-- Screenshot unavailable: Hapi i konfirmimit të shtimit të domeneve që shkakton verifikimin DNS -->

Klikoni në **Add Domain** (Shto Domenin) për të nisur procesin e verifikimit dhe marrjes së informacionit DNS të domenit tuaj të personalizuar.

### Rreth Sincronizimit të Domenive

Sinkronizimi i domenit është një proces ku Ultimate Multisite shton emrin e domnit custom në llogarinë tuaj të hostimit si një domen shtesë **për që të funksionojet mappendja e domeneve**.

Sinkronizimi i domenit ndodh automatikisht nëse providenci juaj e hostimit ka integrim me funksionin Ultimate Multisite për mapiet domene. Aktualisht, këto providenca janë Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways dhe Cpanel.

Kur integrimi me një host-provider është i aktivizuar, Ultimate Multisite mund të vendosë (enqueue) edhe detyrën e krijimit të DNS ose subdomain për sitet e krijuara së fundmi nga provideri. Nëse asnjë integrim nuk po dëgjon këtë detyrë, puna në sfond (background job) kalon derisa të mos shkon me ndryshime që nuk bëjnë asgjë (no-op queue entries). Kontodat e DNS dhe SSL për domenët e mapuar vazhdojnë të ekzekutohen përmes procesit normal të fazës së domeneve.

Duhet të aktivizoni këtë integrim në cilësimet e Ultimate Multisite, në tabin **Integration**.

![Tabi Integrime në cilësimet e Ultimate Multisite që tregon ofruesit hosting](/img/config/integrations-tab.png)

![Linket e konfigurimit të ofrues së hostingut në tabin Integrime](https://example.com/img/config/integrations-providers.png)

Nëse dizajneri juaj nuk është një nga ata që përmenden më lart, **do të duhet ta synoni ose shtoni manualisht emrin e domenit** në llogarinë tuaj të hostimit.
