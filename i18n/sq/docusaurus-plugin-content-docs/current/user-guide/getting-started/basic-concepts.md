---
title: Konceptet themelore
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Koncepti Bazë

Ky seksion shpjegon konceptet themelore që duhet të kuptoni për WordPress dhe si funksionojnë elementët kryesor.

**WordPress** është një sistem menaxhimi i përmbajtjes (CMS) i fuqishëm, i cili ju lejon të krijoni dhe menaxhoni faqe interneti pa nevojë për programim kompleks. Përpara se të filloni, mendoni si WordPress është si një "platformë" që ju ofron bazën e gjithë vendit tuaj online.

**PHP** është gjuhësia kryesore që përdoret për të ndërtuar WordPress-in. Është motori i aftë që bën të gjitha funksionet e faqes të punojnë siç duhet.

**MySQL** është sistemi bazë të të dhënave (database) ku të gjitha informacionit tuaj – postimet, komentin, përdoruesit dhe konfigurimet – ruhen në mënyrë të strukturuar dhe të sigurt. Mendoni se MySQL është biblioteka e madhe që WordPress përdor për të mbajtur të gjithë "memjet" tuaja.

**Pluginet (Plugins)** janë si "aplikacione" ose "moti" shtesë që ju lejojnë të shton funksionalitë specifike në WordPress, si formata të reja, integrime me shërbime të tjera, apo ndryshime esteteike. Kjo është mënyra më e lehtë për të modifikuar se çfarë bën WordPress bazë.

**Tema (Themes)** janë dizajnet vizuale që përcaktojnin pamjen e faqes tuaj – si duket tek vizitorët, cilat janë fontet, ngjyrat dhe strukturat. Tema është si "skin" ose "paket i pamjes" i faqes suaj.

**Dashboard (Paneli Qendror)** është hapësira ku ju ndërvepron me WordPress-in. Këtu gjendet të gjitha opsionet për menaxhim, publikim e postimeve, aktivizimin e plugin-eve dhe ndryshimet e temave. Është qendra e komandës suaj në sistem.

**URL (Adresa në Internet)** është adresa unik që përdoret për të gjetur faqen tuaj online. Për shembull, `www.example.com`. Kur vendosni një postim ose faqe, WordPress i jep automatikisht një URL unike.

**Database Query (Kërkimi në Bazë të Dhënave)** është mënyra si ju kërkoni informacion nga MySQL-i. Kjo ndodh kur WordPress duhet të gjejë të gjitha postimet e një kategori ose të bëjë ndonjë operacion me të dhënat që janë ruajtur në bazë.

**Hook (Marrja)** është një mekanizëm i fuqishëm në WordPress që ju lejon të "ngaranit" kodin tuaj në pikën e saktë kur diçka ndodh brenda procesit të WordPress-it (p.sh., para se faqa të shfaqet, ose pas se postimi të ruhet). Kjo është thelbësore për krijimin e funksionaliteteve të avancuara.

**Custom Post Type (Lloji i Postimit i Përshtatshëm)** ju lejon të krijoni lloj të veçantë postimes, si p.sh., "Produkte" ose "Portofoljo", që kanë strukturën e tyre specifike dhe nuk janë thjesht postime normale.

**Meta Data (Të Dhënat Shtesë)** janë informacione shtesë që ju mund të lidhni me një faqe, postim apo imazh, si data e publikimit, autoriteti ose informacion specifik tjetër. Kjo ndihmon WordPress-in të menaxhojë më mirë përmbajtjen tuaj.

Për një përdorues të ri WordPress Multisite dhe dikë që po fillojnë të përdorin Ultimate Multisite, mund të ketë shumë fjalë e reja dhe fraza që duhet të mësoni në fillim. Mësimi i tyre është një detyrë e rëndësishme sepse do të keni nevojë të kuptoni platformën dhe se si funksionon si një tjetër.

Në këtë artikull do të përpiqemi të përcaktojmë dhe të shpjegojmë disa nga konceptet kryesore në WordPress. Disa prej tyre janë më të rëndësishëm për përdoruesit, të tjerë për zhvilluesit, dhe disa për të dyja.

## WordPress Multisite {#wordpress-multisite}

**Multisite** në WordPress është një lloj instalimi WordPress që ju lejon të krijoni dhe menaxhoni një rrjet shumë faqeve (websites) nga një dashboard i vetëm WordPress. Ju mund të menaxhoni gjithçka, përfshirë numrin e faqeve, funksionet, temat dhe rolet e përdoruesve. Mund të menaxhoni qindëra dhe mijëra faqe.

## Rrëshqitja (Network) {#network}

Në termat e WordPress, një rrjet multisite është vendi ku mund të menaxhoni një numër **subsite-ve** nga një dashboard i vetëm. Edhe pse krijimi i një rrjeti multisite ndryshon në varësi të ofrues së hostingut, rezultati final është zakonisht disa udhyrje shtesë në skedarin **wp-config.php** që t'i thonim WordPress-it se po punon në këtë mënyrë specifike.

Ka disa ndryshime të qarta midis një rrjeti multisite dhe një instalimi WordPress standalone, të cilat do t'i diskutojmë shkurtimisht.

## Database {#database}

Një bazë të dhënash është një mbledhje e strukturuar dhe e organizuar e të dhënave. Në terminologjin e kompjuterizimit, baza e të dhënave i referohet softuerit që përdoret për ruajtjen dhe organizimin e të dhënave. Mendoni si një kabinet arkivash ku ju ruani të dhënat në seksione të ndryshme të quajtura tabela (tables).

WordPress Multisite përdor një bazë të vetme dhe secili subsite merr tabelat e tij specifike me ID-n e blogut në prefiks. Pra, pasi instaloni një instalim rrjeti (network installation) dhe krijoni një subsite, duhet të keni këto tabela:

_wp_1_options_ - tabelat e opsioneve për subsite të parë

_wp_2_options_ - tabelat e opsioneve për subsite të dytë

## Përfshëndetja (Hosting) {#hosting-provider}

Një ofrues hosting është një kompani që lejon bizneset dhe individët të bëjnë faqet e tyre të aksesueshme përmes World Wide Web-it. Shërbimet që ofrojnë ofrues hosting mund të ndryshojnë, por zakonisht përfshijnë dizajnin e faqes, hapësirën për ruajtjen te hosti dhe lidhjen me Internetin.

## Domeni {#domain}

Emri i domenit është adresa që njerëzit përdorin për të vizituar faqen tuaj. Ai i thotë shfletuesit të internetit ku duhet të kërkojë faqen tuaj. Ashtu si një adresë rruge, domeni është mënyra se si njerëzit vizitojnë faquinë tuaj online. Dhe, ashtu si të keni një shenjë para dyqanit tuaj. Nëse dëshironi të vizitoni faqen tonë, do t'kuni të shkruani adresën e internetit në adresën e shfletuesit tuaj, që është [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ ku [**ultimatemultisite.com**](http://ultimatemultisite.com) është emri i domenit.

## Subdomeni {#subdomain}

Një subdomain është një lloj hierarkie të faqeve web nën domenin kryesor, por në vend që të përdorni foldert për të organizuar përmbajtjen në një faqe, ai krijon një faqe të tij të vetme. Ai paraqitet si [**https://site1.domain.com/**](https://site1.domain.com/) ku _site1_ është emri i subdomainit dhe [_domain.com_](http://domain.com) është domeni kryesor.

## Subdirekt {#subdirectory}

Kjo është një mënyrë për të ndarë përmbajtjen e faqes tuaj në një strukturë më të organizuar, duke krijuar faqe që janë pjesë e një direktori (folder) më të madh. Kjo është shumë e dobishme kur keni nevojë për faqet e veçanta ose për të ndarë përmbajtjen teknike nga ajo që shfaqet publikisht.

Një sous-direktor (subdirectory) është një lloj hierarkieje të faqes së internetit nën një domen kryesor që përdor fusha (folders) për të organizuar përmbajtjen e faqes. Një sous-direktor është i njëjtë si një subfolder dhe emrat mund të përdoren ndërfaqësisht. Ai paraqitet si [**https://domain.com/site1**](https://domain.com/site1) ku _site1_ është emri i sous-direktorit dhe [_domain.com_](http://domain.com) është domeni kryesor.

## Subsite {#subsite}

Subsite është një faqe nën (child site) që krijoni në një rrjet Multisit. Ajo mund të jetë një **subdomain** ose **subdirectory**, varet nga mënyra se si është konfigurimi i instalimit tuaj WordPress Multisite.

## Super Admin {#super-admin}

Super Admin-i i WordPress është një rol përdorues me të gjitha aftësitë për të menaxhu të gjitha subsitet në një rrjet Multisite. Për përdoruesit e Multisite, ky është **nivel më i lartë i aksesit** që mund t'i ofroni instalimit tuaj WordPress.

## Plugin {#plugin}

Në përgjithësi, një plugin është një grup kod që shton funksionalitet shtesë në faqen tuaj të WordPress. Kjo mund të jetë aq e thjeshtë sa ndryshimi i logos së hyrjes apo aq komplekse sa shtimi i funksionalit të tregut elektronik (e-commerce). _Woocommerce dhe Contact Form_ janë shembuj të plugin-eve.

Në një WordPress Multisite, pluginet mund të instalohen vetëm nga administratorit i rrjetit (network admin) duke qenë Super Admin. Administratorët e subsite-ve mund të aktivizojnë dhe deaktivojnë pluginet vetëm brenda subsite-it të tyre.

## Temat {#themes}

Një temë WordPress është një grup skedarë (grafika, stilet dhe kod) që përcakton pamjen e përgjithshme të faqes së internetit. Ajo ofron të gjitha stilimet e front-end-it si stili i fontit, dizajni i faqes, ngjyrat, etj.

## Shkema e Sitet (Site Template) {#site-template}

Të gjitha pluginet dhe temat në WordPress Multisite mund të instalohen vetëm nga Super Admini dhe aktivizohen në nivelin i subsite-it nga administratorët e subsite-ve.

**Template i Siti** është një skedar bazë që mund të përdoret si bazë kur keni nevojë të krijoni njerëzore të reja në rrjetin tuaj.

Kjo do të thotë që mund të krijoni një faqe bazë, të aktivizoni plugin-e të ndryshme, të vendosni një temë aktive dhe ta personalizoni atë si dëshironi. Pastaj, kur klienti ju krijon një llogari të re, në vend që të marrin një faqe WordPress standard me përmbajtje pa kuptim, ata do të marrin një kopje të faqes bazë tuaj me të gjitha personalizimet dhe përmbajtjet e paraqitura tashmë.

## Mapimi i Domenive {#domain-mapping}

Ky seksion tregon se si WordPress menaxhon dhe lidh domenët (domain mapping) në një sistem me shumë faqe. Kjo është thelbësore kur keni nevojë të ndërroni ose të menaxhoni mënyrën se si vizitorët e shohin faqet tuaja, duke përdorur një adresë URL tjetër për të të drejtuar në një faqe tjetër.

Në thelb, domain mapping ju lejon të vendosni që kur dikush shkruan `www.example.com`, ai duhet të shohë faqen A, ndërsa kur shkruan `blog.example.com`, ai duhet të shohë faqen B.

### Si funksionon Domain Mapping? {#ssl}

Domain mapping-u zakonisht bazohet në rregullat e konfigurimit të WordPress dhe si ju vendosni që një domen i caktuar (p.sh., `blog.example.com`) duhet të lidhet me një instalim specifik të WordPress, ndërsa domeni kryesor (`www.example.com`) mund të jetë i lidhur me një instalim tjetër ose direkt me faqen kryesore.

Kjo funksionon duke përdorur një sistem që ju lejon të vendosni rregullat e redirekcionimit (redirection rules). Kur një vizitor shkon në adresën e domeneve të ndara, sistemi i WordPress e kërkon informacionin se ku duhet drejtuar.

### Konfigurimi i Domain Mapping-ut {#media}

Konfigurimi i domain mapping-ut zakonisht bëhet përmes dy mënyrash kryesore:

#### 1. Përdorimi i Plugins (Më e lehtë) {#permalinks}

Për shumic të përdoruesve, mënyra më e thjeshtë është përdorimi i një plugin-i që ju ofron opsione grafike për menaxhimin e domain mapping-ut. Këta plugin-e zakonisht janë shumë intuitive dhe nuk kërkojnë ndonjë njohuri të thellë teknike.

*   **Përpara se të filloni:** Kërkoni një plugin që mbështetet në WooCommerce ose WordPress standard, i cili ju lejon të krijoni rregullat e redirekcionimit (p.sh., "Redirektoni `blog.example.com` te `/blog/`").

#### 2. Konfigurimi me Kod (Për ata që duan kontroll më të madh) {#ultimate-multisite}

Nëse keni nevojë për një kontroll më të detajuar ose jeni duke punuar në një mjedis më profesional, mund të përdorni kod direkt në skriptet e WordPress-it tuaja. Kjo zakonisht bëhet duke shtuar kode në `functions.php` të temës suaj ose duke përdorur një plugin që lejon injektimin e kodeve të personalizuara (custom code).

**Shembull i thjeshtë se si mund të duket logika bazë:**

```php
function custom_domain_mapping() {
    // Kërkon nëse vizituesi shkon te blog.example.com
    if ( is_domain( 'blog.example.com' ) ) {
        // Redirekton atë automatikisht te faqja e blogut
        wp_redirect( home_url( '/blog/' ) );
        exit;
    }
}
add_action( 'template_redirect', 'custom_domain_mapping' );
```

Kodi mësipërm thjesht kontrollon nëse vizituesi shkon te domeni i ndarë dhe, nëse po e bën këtë, e drejton automatikisht te faqja e blogut. Kjo është një mënyrë shumë fleksibël për të menaxhu rregullat tuaja.

### Pikat Kryesore që Duhet të Keni Parasurmi {#checkout-form}

1.  **Siguria (Security):** Sigurohuni se çdo ndryshim ose kod që vendosni është i sigurt. Kur përdorni kod, bëni gjithmonë një kopje e rezervuar (backup) para se të modifikoni skriptet kryesore.
2.  **Redirekcione 301:** Kur ju ndryshoni adresat, është thelbësishme që të përdorni redirekcione 301. Kjo tregon serverëve dhe Google-it se faqja e vjetër ka u transferuar permanent te adresa e re, duke ruajtur trafikun (SEO).
3.  **Testimi:** Pasi të bëni ndonjë konfigurim, testoni gjithmonë në disa pajisje për të siguruar që redirekcionimet funksionojnë siç duhet dhe nuk krijojnë probleme me faqet e tjera.

Mapelimin e domenit (Domain mapping) me WordPress është një mënyrë për të drejtuar përdoruesit te hosti i duhur, duke përmes adresës së faqes. Në një WordPress Multisite, subfaqet krijohen duke përdorur ose një folder nën (subdirectory) ose një domenable (subdomain). Mapelimi i domenit lejon përdoruesve të subfaqeve të përdorin një domen kryesor si [**joesbikeshop.com**](http://joesbikeshop.com) për të bërë adresën e faqes më profesionale.

## SSL {#webhook}

SSL (Secure Sockets Layer) është një protokol që siguron komunikimin midis shfletuesit tuaj dhe serverit të internetit. Në thelb, ai krijon një lidhje të menirë e sigurt, duke kryer enkriptimin e të gjitha të dhënave që transmetohen – si fjalët e pasur (passwordet), informacionin personal ose të dhënat bankare.

**Pse është i rëndësishëm?**

1. **Siguria:** Për të mbrojtur informacionin tuaj nga mirëvestin e paluxhëm gjatë transmetimit në internet, SSL është thelbësor.
2. **Besimi:** Kur shfletuesi ju konfirmon se lidhja është e sigurt (shikoni ikonën me çelësin në adresën tuaj), kjo do të thotë që informacionin tuaj nuk po vjedhet.
3. **SEO (Optimizimi i Motorit Kërkimit):** Motori i kërkimit Google preferon faqet e sigurta (HTTP-to-HTTPS).

Në kontekstin e WordPress dhe WooCommerce, përdorimi i SSL është një standard që duhet të jetë aktiv gjithmonë. Ai ndihmon në mbrojtjen e të dhënave tuaja dhe ndihmon në optimizimin e faqes suaj për SEO.

**Si funksionon?**

Kur shkoni te një faqe me SSL, burimi i informacionit (serveri) dhe shfletuesi juaj bëjnë një "shake" (shprehje) të menirës së sigurt përmes një sertifikati. Ky proces krijon një çelës simetrik që përdoret për të enkriptuar dhe dekriptuar të gjitha të dhënat në mënyrë që vetëm si dëshironi mund t'i lexoni ato.

**Llojet e SSL:**

Ekzistojnë disa lloje, por ato kryesore janë:

* **SSL (Secure Sockets Layer):** Kjo është teknologjia bazë.
* **TLS (Transport Layer Security):** Ky është standardi i përditësuar dhe më modern që zëvendëson SSL-in. Për shumicën e shfletuesve të sotëm, TLS është ajo që ju siguron lidhjen tuaj.

Nëse keni nevojë për udhëzime se si të aktivizoni ose ndryshoni sertifikatin SSL në një instalim WordPress/WooCommerce, ju lutem më tregoni!

SSL do të thotë **Secure Sockets Layer**. Është një certifikat digital që vërteton identitetin e një faqeje web dhe lejon një lidhje të enkriptuar. Sot, përdoret si teknologjia standard për të mbajtur një lidhje interneti të sigurt dhe për të mbrojtur të dhënat sensitive që transmetohen midis dy sistemeve, duke parandaluar kriminalët nga leximi dhe modifikimi i çdo informacionit që transferohet, përfshirë detaje personale. Shkrimet moderne kërkojnë SSL, gjë që e bën të thelbësore kur krijoni dhe ndërtoni një faqe interneti.

## Media {#events}

Media janë imazhe, audio, video dhe skedarë të tjerë që bëjnë një faqe interneti.

Sitet në rrjet (Network sites) ndajnë një bazë të vetme të dhënash në WordPress Multisite, por mbajnë rrugë të veçanta në sistemin operativ (filesystem) për skedarët e mediave.

Lokacioni standard i WordPress (`wp-content/uploads`) mbetet i njëjtë; megjithatë, rruga e tij ndrysohet për të pasqyruar ID-n unik të faqes në rrjet. Si pasojë, filmat multimedial për një faqe në rrjet duken si `wp-contents/uploads/site/[id]`.

## Permalinks

Permalinks janë URL-t e përhyrshëm të postimit ose faqes tuaj individuale në vendin tuaj. Permalinks gjithashtu quhen si **link të bukur** (pretty links). Në defrutat, URL-t e WordPress-it përdorin formatin e query string, që duket diçka e kësaj:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite është një plugin për WordPress, i krijuar për instalimet WordPress Multisite, që transformon instalimin tuaj të WordPress në një rrjet premium të vendeve – si [WordPress.com](https://WordPress.com) – duke lejuar klientët të krijojnë vende përmes pagesave mujore, kuartore ose vjetore (mund të krijoni edhe plane të lirë).

## Formi i Kontodhit

Ky seksion shpjegon se si funksionon formati i kontodhit (checkout) në WooCommerce. Kjo është pjesa ku klientët përfundojnë blerjen e tyre dhe ofrojnë informacionin e nevojshëm për të realizuar transaksionin.

Në mënyrë të përgjithshme, formati i kontodhit ndahet në disa faza:

1. **Përvoja e Klientit (Customer Experience):** Kjo është pjesa vizuale ku klientit i paraqitet procesi i blerjes.
2. **Mbledhja të Informacionit:** Këtu kërkohen detajet kryesore si adresa, numri i telefonit dhe informacionin e pagesës.
3. **Paguja (Payment):** Pjesa ku klient përzgjedh metodën e pagesës dhe llogarit shuma totale.

### Elementet Kryesore të Formës

Forma e kontodhit zakonisht përfshin këto elemente:

*   **Adresa:** Këtu vendosni informacionin se ku do dërgohet produkti (adresat).
*   **Informacion i Klientit:** Emri dhe email-i i klientit.
*   **Përshkrimi i Rrugës/Dërgesave:** Detaje shtesë rreth dërgesës.

### Metodat e Pagesës (Payment Gateways)

Në WooCommerce, ju mund të lidhni formën me ndryshme metoda pagese. Kjo lejon klientët të paguajnë përmes bankut ose nëpërmjet platformave si Stripe.

Për të shtuar apo menaxhuar metodat e pagesës, shkoni te **WooCommerce > Settings > Payments**. Aty mund të aktivizoni dhe konfiguroni opsionet tuaja.

### Pjesa e Paguës (Payment Section)

Kjo është pjesa ku klient përzgjedh si do të paguajë. Nëse keni integruar Stripe, ju do të shihni opsionin për pagesë me kartë krediti/bankare.

```php
// Kjo është një shembull i se si mund të duket pjesa e metodave në kod (nëse po ndërtoni personalizime)
function display_payment_methods() {
    echo '<h2>Metodat e Pagesës</h2>';
    if ( class_exists( 'WC' ) && function_exists( 'wc_get_payment_gateways' ) ) {
        $methods = wc_get_payment_gateways();
        foreach ( $methods as $method ) {
            echo '<p><strong>' . esc_html( $method->title ) . '</strong></p>';
        }
    } else {
        echo '<p>Nuk janë të disponueshme metoda pagese.</p>';
    }
}
```

### Përfundimi i Procesit (Order Confirmation)

Pasi klientin të përfundojë procesin e blerjes dhe ta konfirmojë, ai do të shohë një faqe konfirmimi. Kjo faqe është thelbësore sepse tregon se blerja është arritur me sukses dhe ofron opsione për ndryshime ose mbualje të rregullave.

Nëse keni nevojë për ndryshime specifike në pamjen e faqes konfirmimi, mund të përdorni hook-e (hooks) si `woocommerce_after_checkout_form` për të shtuar kod tuaj.

Forma e Checkout është një formular i një ose shumë hapa për një porosi që përfshin krijimin e një subsite, anëtarit dhe kontave të përdoruesve përmes regjistrimit Ultimate Multisite. Ajo përbën fusha dhe forma pagese të ndryshme që përdoruesi duhet t'i plotësojë gjatë procesit të regjistrimit.

## Webhook

Webhook (shpesh i quajtur edhe web callback ose HTTP push API) është një mënyrë për aplikacionin që të ofrojë informacion në kohë reale për aplikacione të tjera. Një webhook dërgon të dhëna te aplikacionet e tjera sa ajo ndodh, që do të thotë se merrni të dhënat menjëherë.

**Webhooks Ultimate Multisite** hapin mundësi të pafundme, duke lejuar administratorëve të rrjete të bëjnë lloje të ndryshme integrime që janë si të çuditshme por shumë të dobishme, veçanërisht nëse përdoren me shërbime si _Zapier_ dhe IFTTT_.

## Eventet

Një Event (Ngjarje) është një veprim që ndodh si rezultat i një veprimi të përdoruesit ose një burimi tjetër, si për shembull klikimi me miun. Ultimate Multisite mbart një regjistrim të të gjitha ngjarjeve dhe logjeve që po ndodhin brenda gjithë rrjetit tuaj. Ai ndjek aktivitetet e ndryshme që ndahen në multisite-in tuaj, si ndryshimet e planit.
