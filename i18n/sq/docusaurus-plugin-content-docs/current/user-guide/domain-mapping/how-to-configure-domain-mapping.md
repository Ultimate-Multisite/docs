---
title: Si të konfiguroni hartëzimin e domenit
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Si të konfiguroni hartëzimin e domain-it (v2)

_**SHËNIM I RËNDËSISHËM: Ky artikull i referohet Ultimate Multisite versionit 2.x.**_

Një nga veçoritë më të fuqishme të një rrjeti premium është aftësia për t’u ofruar klientëve tanë mundësinë të lidhin një domain të nivelit të lartë me sajtet e tyre. Në fund të fundit, cila duket më profesionale: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) apo [_**joesbikeshop.com**_](http://joesbikeshop.com)? Prandaj Ultimate Multisite e ofron këtë veçori të integruar, pa pasur nevojë të përdoren plugin-e të palëve të treta.

## Çfarë është hartëzimi i domain-it?

Siç sugjeron emri, hartëzimi i domain-it është aftësia e ofruar nga Ultimate Multisite për të marrë një kërkesë për një domain të personalizuar dhe për ta hartëzuar atë kërkesë te sajti përkatës në rrjet, me atë domain të veçantë të bashkëngjitur.

### Si të konfiguroni hartëzimin e domain-it në rrjetin tuaj Ultimate Multisite

Hartëzimi i domain-it kërkon disa konfigurime nga ana juaj që të funksionojë. Fatmirësisht, Ultimate Multisite automatizon punën e vështirë për ju, në mënyrë që t’i përmbushni lehtësisht kërkesat.

Gjatë instalimit të Ultimate Multisite, udhëzuesi do të kopjojë dhe instalojë automatikisht **sunrise.php** në dosjen e caktuar. **Udhëzuesi nuk do t’ju lejojë të vazhdoni derisa ky hap të përfundojë**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Kjo do të thotë se pasi udhëzuesi i instalimit të Ultimate Multisite të ketë përfunduar konfigurimin e rrjetit tuaj, mund të filloni menjëherë hartëzimin e domain-it të personalizuar.

Vini re se hartëzimi i domain-it në Ultimate Multisite nuk është i detyrueshëm. Keni mundësinë të përdorni funksionin vendas të hartëzimit të domain-it të WordPress Multisite ose çfarëdo zgjidhjeje tjetër për hartëzim domain-i.

Nëse ju duhet të çaktivizoni hartëzimin e domain-it të Ultimate Multisite për t’i hapur rrugë zgjidhjeve të tjera të hartëzimit të domain-it, mund ta çaktivizoni këtë veçori nën **Ultimate Multisite > Cilësimet > Hartëzimi i domain-it**.

![Faqja e cilësimeve të hartëzimit të domain-it që tregon ridrejtimin e adminit, mesazhin e hartëzimit dhe opsionet DNS](/img/config/domain-mapping-settings.png)

Menjëherë poshtë këtij opsioni, mund të shihni gjithashtu opsionin **Detyro ridrejtimin e adminit**. Ky opsion ju lejon të kontrolloni nëse klientët tuaj do të mund të hyjnë në panelin e tyre të adminit si në domain-in e tyre të personalizuar ashtu edhe në nën-domain, apo vetëm në njërin prej tyre.

Nëse zgjidhni **Detyro ridrejtimin te domain-i i hartëzuar** , klientët tuaj do të mund të hyjnë në panelin e tyre të adminit vetëm në domain-et e tyre të personalizuara.

Opsioni **Detyro ridrejtimin te** **domain-i i rrjetit** do të bëjë pikërisht të kundërtën - klientëve tuaj do t’u lejohet të hyjnë në panelet e tyre vetëm në nën-domain-in e tyre, edhe nëse përpiqen të identifikohen në domain-et e tyre të personalizuara.

Dhe opsioni **Lejo aksesin te admini si nga domain-i i hartëzuar ashtu edhe nga domain-i i rrjetit** u lejon atyre të hyjnë në panelet e tyre të adminit si në nën-domain ashtu edhe në domain-in e personalizuar.

![Menuja rënëse e ridrejtimit të adminit e zgjeruar që tregon tre opsionet e ridrejtimit](/img/config/domain-mapping-redirect-options.png)

Ka dy mënyra për të hartëzuar një domain të personalizuar. E para është duke hartëzuar emrin e domain-it nga paneli i adminit të rrjetit tuaj si super administrator dhe e dyta është përmes panelit të adminit të nën-sajtit nën faqen Account.

Por përpara se të filloni hartëzimin e domain-it të personalizuar te një nga nën-sajtet në rrjetin tuaj, do t’ju duhet të siguroheni që **cilësimet DNS** të emrit të domain-it janë konfiguruar siç duhet.

###

### Si të siguroheni që cilësimet DNS të domain-it janë konfiguruar siç duhet

Që një hartëzim të funksionojë, duhet të siguroheni që domain-i që planifikoni të hartëzoni po drejtohet te adresa IP e rrjetit tuaj. Vini re se ju duhet adresa IP e rrjetit - adresa IP e domain-it ku është instaluar Ultimate Multisite - jo adresa IP e domain-it të personalizuar që dëshironi të hartëzoni. Për të kërkuar adresën IP të një domain-i specifik, sugjerojmë të shkoni te [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), për shembull.

Për ta hartëzuar siç duhet domain-in, duhet të shtoni një **A RECORD** në konfigurimin tuaj **DNS** që drejtohet te ajo **adresë IP**. Menaxhimi i DNS ndryshon shumë midis regjistruesve të ndryshëm të domain-eve, por ka plot udhëzues online që e mbulojnë këtë nëse kërkoni për " _Krijimi i një A Record në XXXX_ " ku XXXX është regjistruesi juaj i domain-it (p.sh.: " _Krijimi i një A Record në_ _GoDaddy_ ").

Nëse hasni vështirësi për ta bërë këtë të funksionojë, **kontaktoni mbështetjen e regjistruesit të domain-it tuaj** dhe ata do të jenë në gjendje t’ju ndihmojnë me këtë pjesë.

Nëse planifikoni t’u lejoni klientëve tuaj të hartëzojnë domain-et e tyre, ata do të duhet ta bëjnë vetë punën për këtë pjesë. Drejtojini te sistemi i mbështetjes së regjistruesit të tyre nëse nuk arrijnë të krijojnë A Record.

### Hartëzimi i emrit të domain-it të personalizuar si Super Administrator

Kur jeni të identifikuar si super administrator në rrjetin tuaj, mund të shtoni dhe menaxhoni lehtësisht emra domain-esh të personalizuar duke shkuar te **Ultimate Multisite > Domain-et**.

![Faqja e listës së domain-eve në Ultimate Multisite](/img/admin/domains-list.png)

Nën këtë faqe, mund të klikoni butonin **Shto domain** në krye dhe kjo do të hapë një dritare modale ku mund të vendosni dhe plotësoni **emrin e domain-it të personalizuar** , **nën-sajtin** ku dëshironi të aplikoni emrin e domain-it të personalizuar, dhe të vendosni nëse dëshironi ta caktoni si emrin e **domain-it kryesor** apo jo (vini re se mund të hartëzoni **shumë emra domain-esh te një nën-sajt**).

![Modalja Shto domain me emrin e domain-it, zgjedhësin e sajtit dhe çelësin e domain-it kryesor](/img/admin/domain-add-modal.png)

Pasi të keni futur të gjitha informacionet, pastaj mund të klikoni butonin **Shto domain ekzistues** në fund.

Kjo do të nisë procesin e verifikimit dhe marrjes së informacionit DNS të domain-it të personalizuar. Do të shihni gjithashtu një regjistër në fund të faqes për të ndjekur procesin nëpër të cilin po kalon. Ky proces mund të zgjasë disa minuta për t’u përfunduar.

Ultimate Multisite v2.13.0 krijon gjithashtu automatikisht regjistrimin e brendshëm të domain-it kur krijohet një site i ri në një host që duhet të trajtohet si domain për çdo site. Nëse host-i është domain-i kryesor i rrjetit, ose një nga domain-et bazë të përbashkëta të formularit të checkout të konfiguruara në një fushë **Site URL**, regjistrimi automatik i mapped-domain anashkalohet në mënyrë që domain-i bazë i përbashkët të mbetet i disponueshëm për çdo site që e përdor atë.

Kur një klient regjistron një domain të ri përmes Domain Seller v1.3.0 ose më të ri, Ultimate Multisite e mapon automatikisht domain-in e regjistruar te site-i i rrjetit të klientit si parazgjedhje. Administratorët nuk kanë më nevojë të shtojnë një regjistrim të veçantë mapped-domain pas një regjistrimi të suksesshëm, përveç nëse duan të rregullojnë opsione si flamuri i domain-it kryesor, gjendja e aktivizimit ose trajtimi i SSL-së.

**Stage** ose statusi duhet të ndryshojë nga **Checking DNS** në **Ready** nëse gjithçka është konfiguruar siç duhet.

<!-- Screenshot unavailable: Rreshti i domain-it që tregon fazën Checking DNS në listën e domain-eve -->

<!-- Screenshot unavailable: Rreshti i domain-it që tregon fazën Ready me treguesin e gjelbër të statusit -->

Nëse klikoni mbi emrin e domain-it, do të mund të shihni disa opsione brenda tij. Le t’u hedhim një vështrim të shpejtë:

![Faqja e detajeve të domain-it me fazën, site-in, aktiv, primar dhe çelësat SSL](/img/admin/domain-edit.png)

**Stage:** Kjo është faza në të cilën ndodhet domain-i. Kur e shtoni domain-in për herë të parë, ai me shumë gjasë do të jetë në fazën **Checking DNS**. Procesi do të kontrollojë hyrjet DNS dhe do të konfirmojë që ato janë të sakta. Pastaj, domain-i do të vendoset në fazën **Checking SSL**. Ultimate Multisite do të kontrollojë nëse domain-i ka SSL apo jo dhe do ta kategorizojë domain-in tuaj si **Ready** ose **Ready (without SSL)**.

**Site:** Nëndomain-i që lidhet me këtë domain. Domain-i i mapuar do të shfaqë përmbajtjen e këtij site-i specifik.

**Active:** Mund ta aktivizoni ose çaktivizoni këtë opsion për të aktivizuar ose çaktivizuar domain-in.

**Is Primary Domain?:** Klientët tuaj mund të kenë më shumë se një domain të mapuar për secilin site. Përdoreni këtë opsion për të zgjedhur nëse ky është domain-i kryesor për site-in specifik.

**Is Secure?:** Edhe pse Ultimate Multisite kontrollon nëse domain-i ka një certifikatë SSL apo jo përpara se ta aktivizojë, ju mund të zgjidhni manualisht ta ngarkoni domain-in me ose pa certifikatë SSL. Vini re se nëse website-i nuk ka certifikatë SSL dhe përpiqeni ta detyroni të ngarkohet me SSL, mund t’ju japë gabime.

### Mapimi i emrit të domain-it personal si përdorues Subsite

Administratorët e subsite-it mund të mapojnë gjithashtu emra domain-esh personalë nga dashboard-i i administratorit të subsite-it të tyre.

Së pari, duhet të siguroheni që ta aktivizoni këtë opsion te cilësimet **Domain mapping**. Shihni screenshot-in më poshtë.

<!-- Screenshot unavailable: Cilësimet Domain mapping që lejojnë përdoruesit e subsite-it të mapojnë domain-e përmes çelësit Customer DNS Management -->

Mund ta vendosni ose konfiguroni gjithashtu këtë opsion në nivelin **Plan** ose te opsionet e produktit në **Ultimate Multisite > Products**.

![Seksioni Custom Domains në faqen e redaktimit të produktit](/img/config/product-custom-domains.png)

Kur ndonjëri nga këto opsione është aktivizuar dhe një përdorues subsite-i lejohet të mapojë emra domain-esh personalë, përdoruesi i subsite-it duhet të shohë një metabox nën faqen **Account** të quajtur **Domains**.

<!-- Screenshot unavailable: Metabox Domains në faqen Account të subsite-it me butonin Add Domain -->

Përdoruesi mund të klikojë butonin **Add Domain** dhe kjo do të hapë një dritare modale me disa udhëzime.

<!-- Screenshot unavailable: Modal Add Domain që tregon udhëzimet e DNS A-record për përdoruesit e subsite-it -->

Përdoruesi pastaj mund të klikojë **Next Step** dhe të vazhdojë të shtojë emrin personal të domain-it. Ai mund të zgjedhë gjithashtu nëse ky do të jetë domain-i kryesor apo jo.

<!-- Screenshot unavailable: Formulari Add Domain me fushën e emrit personal të domain-it dhe çelësin e domain-it kryesor -->

<!-- Screenshot unavailable: Hapi i konfirmimit Add Domain që nis verifikimin DNS -->

Klikimi te **Add Domain** do të nisë procesin e verifikimit dhe marrjes së informacionit DNS të domain-it personal.

### Rreth sinkronizimit të domain-eve

Sinkronizimi i domain-eve është një proces ku Ultimate Multisite shton emrin personal të domain-it në llogarinë tuaj të hosting-ut si një domain shtesë **që domain mapping të funksionojë**.

Sinkronizimi i domain-it ndodh automatikisht nëse ofruesi juaj i hosting-ut ka integrim me veçorinë domain mapping të Ultimate Multisite. Aktualisht, këta ofrues hosting-u janë _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ dhe _Cpanel._

Kur një integrim i host-provider është aktiv, Ultimate Multisite mund të vendosë gjithashtu në radhë detyrën nga ana e ofruesit për krijimin e DNS ose subdomain-it për site-et e sapokrijuara. Nëse asnjë integrim nuk po dëgjon për atë detyrë, puna në sfond anashkalohet për të shmangur hyrjet pa veprim në radhë. Kontrollet DNS dhe SSL për domain-et e mapuara vazhdojnë të ekzekutohen përmes procesit normal të fazave të domain-it.

Do t’ju duhet ta aktivizoni këtë integrim në cilësimet e Ultimate Multisite nën skedën **Integration**.

![Skeda Integrations në cilësimet e Ultimate Multisite që tregon ofruesit e hosting-ut](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Lidhjet e konfigurimit të ofruesit të hosting-ut në skedën e cilësimeve Integrations -->

_Vini re se nëse ofruesi juaj i hosting-ut nuk është një nga ofruesit e përmendur më sipër,**do t’ju duhet të sinkronizoni ose shtoni manualisht emrin e domain-it** në llogarinë tuaj të hosting-ut._
