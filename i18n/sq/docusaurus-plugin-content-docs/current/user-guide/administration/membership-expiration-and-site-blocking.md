---
title: Përfundimi i Veprimit dhe Bllokimi i Sitet
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Përfundimi i Veprimit dhe Bllokimi i Sitet

Ky seksion tregon se si të menaxhoni kur një anëtar (membership) i WordPress-it përfundon vjetri dhe si mund ta bllokoni faqet e internetit nëse keni nevojë.

## Përfundimi i Veprimit (Membership Expiration) {#membership-status-lifecycle}

Kur një anëtar i Ultimate Multisite (ose sistemi të ndryshëm që përdorni për menaxhimin e anëtarëve) i vjetri, ai nuk mund të aksesojë më faqet e internetit nëse keni aktivuar opsionin "Block access" (Bllokim i aksesit).

### Si funksionon? {#how-memberships-transition-to-expired}

Në thelb, kur një përdoruesi humbet statusin e anëtarisë, sistemi do të kontrollojë datën e fundit të vjetrit. Nëse keni vendosur që pas datës së skadimit, akseset duhet të bllokohen automatikisht.

**Shembull i thjeshtë:**
Nëse një anëtar ka vjetër për 12 muaj dhe në datën e fundit të vjetrit ai nuk është më aktiv, sistemi do ta ndalojë atë nga faqet që kërkojnë autorizim.

### Konfigurimi i Bllokimit Automatik {#auto-renewing-vs-non-auto-renewing-memberships}

Për të siguruar se bllokimi funksionon siç dëshironi:

1.  **Kontrolloni cilësimet e anëtarisë:** Shkoni në seksionin e menaxhimit të anëtarëve dhe kontrolloni opsionet që lidhen me skadimin e vjetrit dhe bllokimin e aksesit.
2.  **Aktivizoni Bllokimin:** Sigurohuni që funksioni i "Block access" është aktiv për anëtarët që kanë kaluar datën e fundit të vjetrit.

## Bllokimi i Sitet (Site Blocking) {#how-trials-end}

Ndonjëherë, mund të keni nevojë të bllokoni një faqe specifike ose një pjesë të faqes pa ndalur anëtarin në të gjithë sistemin. Kjo do të thotë që ju duhet të menaxhoni rregjet e aksesit (permissions) për atë faqe konkretë.

### Menaxhimi i Rregullave të Aksesit {#block-frontend-access}

Për të bllokuar një faqe, zakonisht përdorni funksionet standarde të WordPress-it ose plugin-eve që menaxhojnë permisionet (si Access Control Plugins).

**Hapat kryesor:**

1.  **Identifiko Faqen:** Vendosni se cilën faqe dëshironi të bllokoni.
2.  **Ndërto Rregullat:** Përdorni menaxherin e permisioneve për atë faqe dhe vendosni që vetëm anëtarët me status X (p.sh., "Active Member") mund ta shohin, ose ndryshe, të bllokoni aksesin plotësisht.

### Këshilla Importante {#configuring-the-setting}

*   **Testoni:** Pasi keni ndryshuar rregullat e bllokimit, gjithmonë testoni nga një llogari që ka kaluar datën e vjetrit për të siguruar se nuk po ndaloni pa gabim anëtarët aktivë.
*   **Dokumentacioni i Plugin-ut:** Nëse përdorni një plugin specifik për menaxhimin e anëtarëve, kontrolloni dokumentacionin e tij (plugin settings) sepse mënyra se si bllokohet mund të ndryshojë nga një sistem tjetër.

Ky udhëzues shpjegon se si Ultimate Multisite menaxhon skadimin e privatësisë (membership expiration), mbarimin e provave dhe bllokimin e faqeve frontend. Ai mbulon ciklin e një privatës nga aktive në skaduar, cilat janë cilësimet që kontrollojnë nëse faqet janë blokuar dhe çfarë duhet të kontrolloni kur faqet mbeten të aksesueshme edhe pas skadimit të privatësisë.

## Cicli i Statusit i Anëtarisë {#what-visitors-see-when-a-site-is-blocked}

Çdo anëtarësi në Ultimate Multisite ka një nga statuset më poshtë:

:::note A privatësi falas është për gjatë jetës. Privatësitë falas nuk zvieh automatikisht. Ultimate Multisite i trajton ato si akses për gjatë jetës, kështu që nuk përfshihen në kontrollin e skadimit përveçse administratorja ndryshon statusin ose lëviz klientin te një produkt tjetër.

# Përdorimi i WooCommerce me WordPress

Ky dokument ju ndihmon të kuptoni se si të përdorni pluginin WooCommerce në një instalim WordPress. Kjo është një platformë fantastike për të krijuar dyqane online dhe tregime elektronike (e-commerce).

## Përgatitja e Parë: Instalimi i WooCommerce {#troubleshooting-sites-remaining-accessible-after-expiration}

Për të filluar, duhet të keni një instalim aktiv të WordPress. Hapi më i parë është të shkarkoni pluginin WooCommerce nga [WordPress Plugin Directory](https://wordpress.org/plugins/woocommerce/).

1. **Shkarkoni dhe Instalo:** Shkarkoni file-in e WooCommerce dhe pastaj, në dashboard-in tuaj të WordPress-it, shko te "Plugins" (Pluginet) > "Add New" (Shto i ri) dhe zgjidhni pluginin për ta instaluar.
2. **Konfigurimi:** Pasi të instaloni, do të keni një ekran me opsione për të konfiguruar dyqanin tuaj – siç është lloji i monedhas, adresat e shpërndarjes dhe më shumë detaje teknike. Sigurohuni që të plotësoni të gjitha informacionet e nevojshme para se të vazhdoni.

## Konfigurimi i Bazës së Të Dhënave (Database) {#1-verify-the-block-frontend-access-setting-is-enabled}

WooCommerce kërkon disa informacione shtesë për të funksionuar si një dyqan online, veçanërisht në lidhje me menaxhimin e produkteve dhe pagesave. Kjo bazohet te MySQL database-i i WordPress-it.

Nëse keni nevojë për ndryshime më të thella në strukturën e bazës së të dhënave, mund të përdorni një plugin si **[All-in-One WP Migration](https://wordpress.org/plugins/all-in-one-wp-migration/)** ose mjetet e menaxhimit të bazës së të dhënave që ofrohen nga hosting-u juaj.

## Menaxhimi i Produkteve (Products) {#2-check-the-frontend-block-grace-period}

Kryesimi i produkteve është thelbësor për çdo dyqan online. Kjo lejon klientët të shohin dhe të blin gjithçka që keni në magazinë tuaj.

1. **Shtoni Produkte:** Shko te "Products" (Produkte) > "Add New" (Shto i ri). Këtu mund të vendosni titullin, përshkrimin e produktit, çmimin dhe imazhet.
2. **Variante:** Nëse keni produkte me variabël (p.sh., një t-shirt në blu, ku mund të zgjedhësh ngjyrën), përdorni opsionet e "Product Variations" për të menaxhuar këto ndryshime lehtësisht.

## Pagesa dhe Menusit {#3-confirm-the-membership-status-has-actually-changed}

Për të krijuar një dyqan profesional, keni nevojë për faqet kryesore si: Home (Kryesore), About Us (Rreth Nesh), Contact Us (Kontakti) dhe Cart (Karë).

* **Pagesat:** Krijoni këto faqe përmes editorit i WordPress-it ose duke përdorur një page builder.
* **Menusi:** Pasi të keni faqet, shko te "Appearance" (Pamja) > "Menus" (Menujt). Këtu mund të vendosni menunit tuaj në navigimin e faqes që klientët do të shohin.

## Pagesa të Pagimit (Checkout) dhe Stripe {#4-verify-action-scheduler-is-running}

Pjesa më kritike është procesi i pagesës. WooCommerce ofron një sistem të integruar për të marrë paraqitjet nga klientët.

### Konfigurimi i Pagarit {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

1. **Payment Gateways:** Shko te "WooCommerce" > "Settings" (Opsione) > "Payments". Këtu mund të shtoni metoda si procesi me banka, PayPal ose Stripe.
2. **Stripe Integration:** Nëse dëshironi të pranoni pagesat me kartë krediti/debito, integrimi me **Stripe** është opsioni më i zakonshëm dhe i sigurtuar. Ju do të keni nevojë për një llogari Stripe dhe të ndiqni udhëzimet e tyre për të marrë "API keys" ose token-e të tjera që do t'i vendosni në WordPress.

### Procesi i Checkout-ut {#6-check-the-expiration-grace-period-cron-level}

Kur një klient shtyn produkte në karë (Cart) dhe shkon te checkout, ai do të ndjekë hapat e përcaktuara nga WooCommerce për të plotësuar informacionin e dorës dhe më pas të bëjë pagesën duke përdorur metodën që keni konfiguruar.

## Përmbledhje {#7-manually-expire-a-membership}

Përdorimi i WooCommerce është një proces i ndarë:
1. **Instalimi:** Kthehu te plugin-i në WordPress.
2. **Konfigurimi:** Vendos informacionin e dyqanit (moneda, adresat).
3. **Kontenjt:** Shtoni produkte dhe krijoni faqet kryesore.
4. **Pagesa:** Konfiguro metodën e pagesës (p.sh., Stripe) për të marrë paraqitjet.

Nëse keni ndonjë pyetje specifike rreth një hapi, ju lutem më tregoni!

| Status | Kuqyrje |
|---|---|
| **Pending** | Pritet i parë pagesës ose verifikimi me email |
| **Trialing** | Periudha e provimit aktuale, ende nuk është mbledhur ndonjë pagesë |
| **Active** | E paguar dhe aktuale |
| **On Hold** | Pagesa për rinovimin është në pritje (fatura është krijuar, po pritet pagesa)

| **Përcaktuar si të Ekspiruar** | Kaloni datën e skadimit dhe periudhën e lehtësisë pa rikuperuar |
| **Anuluar** | Anuluar qartë nga klient ose administrator |

### Si Kthehen Aplikimet (Memberships) në Status të Ekspiruar {#summary}

Ultimate Multisite ekzekuton një kontroll sfond **çdo orë** që kërkon anëtaritë që duhet të marren si të skaduluara. Ky kontroll përdor [Action Scheduler](https://actionscheduler.org/) (jo WP-Cron direkt) dhe ekzekutohet si veprim i orari `wu_membership_check`.

Kontrolli i skadimit ka një periudhë leje të **integruar prej 3 ditësh** si parëdhon. Një anëtarë nuk do të etiketohet si `expired` derisa kalojnë 3 ditë pas datës së tij `date_expiration`. Kjo i jep klientëve kohë për të përfunduar një pagesë të vonë para se statusi i tyre ndryshojë.

:::info
Periudha e lejeve për skadole 3-ditore është e veçuar nga cilësimi i Periudhës së Lejes për Bloku Frontend, i përshkruar më poshtë. Periudha e lejeve për skadole kontrollohet kur **statusi ndryshon** nga aktiv/në pritje në skaduar. Periudha e lejeve për bloku frontend kontrollohet kur **faqja është bllokuar** pasi statusi tashmë ka ndryshuar.

#### Abonimet me Rritje Automjake (Auto-Renewing) vs. Pa Rritje Automjake (Non-Auto-Renewing) {#developer-reference}

Ky ndarje është shumë i rëndësishëm për të kuptuar se si funksionon zgjatja e periudhës së abonimit:

- **Membresat që nuk rifilluesin automatikisht** (`auto_renew = false`): Joba orare (cron job) menaxhon gjithë ciklin e jetës -- ajo krijon pagesat për rifillimin, i ndryshon statusin e membresës në "në pritje" (on-hold), dhe më pas e markuron si të skaduar nëse nuk merrte pagesën.

- **Abonamente që rikuhen automatikisht** (`auto_renew = true`): Kontrolli i skadimit të cron **ekskludojnë plotësisht këto**. Pranimi i pagesave (Stripe, PayPal, etj.) pritet të njoftojë Ultimate Multisite përmes webhooks kur abonimi dështon ose kontrollohet. Nëse webhook-u nuk merrni -- për shkak të një pikat terminale të gabuar, ndërprerjeje në gateway, ose kontroleve që bëhen jashtë sistemit -- abonimi mund të mbetet `active` (aktiv) përgjithmonë edhe pasi kaloj data e skadimit.

### Kur Kthet Vlera e Provës (Trials)

Kur përfundon periudha e provimit të një anëtarie që është në fazën e provimit, sistemi bën këtë:

1. Krijon një pagesë të ardhshme rinovimi me të gjatë shumën e abonimit.
2. Ndryshon statusin e anëtarisë nga `trialing` (prova) në `on-hold` (në pritje).
3. Dërgon një email njoftimi për pagesën e rinovimit klientit.

Ky proces ekzekutohet me të njëjtën orare si kontrolli i zakonshëm i skadimit, por **vetëm për anëtaritë që nuk rikuperojnë automatikisht**. Për provat që rikuperojnë automatikisht, dyqani i pagesave (payment gateway) menaxhon kalimin nga provimi në abonim të paguar.

## Qasja në Frontend të Bloku

Kjo seksion i shpjegon se si mund të akseshni dhe menaxhoni përmbajtjen e bloku (block) nga faqja kryesore (frontend) e faqes tuaj me WordPress.

Në defrinitë, kur një anëtarje (membership) piqet ose hyn në pauzë, **vetëm dashboard-i wp-admin kufizohet**. Frontend-i publik i faqes mbetet i aksesueshëm për vizitorët. Për të bllokuar edhe aksesin e publikut, duhet të aktivizoni cilësimin **Block Frontend Access**.

### Konfigurimi i cilësimeve

Shkoni te **Ultimate Multisite > Settings > Memberships** dhe aktivizoni opsionin **Block Frontend Access**.

![Konfigurimi i opsioneve të aksesit frontend duke shfaqur ndërprerjen e aktivizuar, një periudhë leje prej 7 ditësh dhe zgjedhjen e faqes Frontend Block](/img/config/settings-membership-block-frontend.png)

Këtu është një pamje e plotë e faqes së cilës janë të vendosura opsionet për anëtarinë:

![Settings të anëtarisë në faqe të plotë](/img/config/settings-membership-full.png)

Tre opsione të lidhura kontrollojnë këtë sjellje:

| Cila | Përshkrimi | Vlera Paragjine |
|---|---|---|
| **Qedrimi i Aksesit Frontend** | Ky është një ndrysim kryesor (toggle). Kur është aktiv, bllokon frontend-in e publikut të sitëve në rrjet kur anëtarësia jote nuk është më aktive. | Off |

| **Periudha e lehtësisë Frontend** | Numri i ditëve që të presi pas se anëtarja bëhet inactive para se të bllokohet. Vendosni në `0` për t'u bllokuar menjëherë. | 0 |

| **Frontend Block Page** | Një faqe në faqen kryesore të vendit ku ju drejtohet vizitorët kur një faqe është bllokuar. Nëse nuk keni vendosur asgjë, vizitorët shohin mesazhin e përgjithshëm "Faqa nuk është e disponueshme". | Asnjë |

### Çfarë shihni vizitorët kur një faqe është bllokuar

Kur aksesimi në front-end është bllokuar, vizitorët tek faqja mund të bëjnë një nga këto gjëra:

1. **Rishdrejtohu** në faqen që keni zgjedhur në **Frontend Block Page** (nëse është e konfiguruar), ose
2. **Shikoni një mesazh standard**: "Ky vend nuk është i disponues për momentin" me një link drejt faqes së hyrjes për administratorin e vendit.

Adminët e faqes mund të vazhdojnë të hyjnë në sistem – faqja e hyrjes nuk bllokohet kurrë.

### Çfarë Bllokohet dhe Kur

Veprimi i bllokimit varet nga statusi i anëtarisë:

| Status i Anëtarisë | Frontend Blokuar? | Periudha e Lehtësuar? |
|---|---|---|
| Aktiv | Jo | -- |
| Në Provim (Trialing) | **Jo** (shikoni shënimet më poshtë) | -- |
| Në Hold | Konsiderohet aktiv -- jo blokuar | -- |

| Expired | **Po**, nëse Qedrimi i Aksesit të Frontend është i aktivizuar | Po |
| Cancelled | **Po**, gjithmonë (pavarësisht cilësimit) | **Jo** -- bllokim menjëherë |
| Pending | Nuk bllokohet përmes kontrollit të anëtarisë | -- |

:::warning Prova e abonimeve nuk bllokohen
Edhe nëse periudha provuese është përfunduar, një abonim me statusin `trialing` **nuk** do të bllokohet në frontend. Provat duhet së pari të kalojë në një status tjetër (zakonisht `on-hold` përmes cron jobit, pastaj `expired` nëse nuk është paguar). Nëse po shihni abonime provuese që nuk kanë kaluar statusin, kontrolloni seksionin e zbulimit probleme më poshtë.

# Përdorimi i WooCommerce me Ultimate Multisite

Ky dokument ju ndihmon të kuptoni se si të përdorni pluginin **Ultimate Multisite** së bashku me **WooCommerce**. Kjo kombinuaritet ju lejon të menaxhoni një rrjet të loja (multisite) dhe të vendosni dyqane online shumë fleksibël.

## Përgatitja e Parë

Para se të filloni, sigurohuni që keni:
1. Një instalim i suksesshëm të **WordPress**.
2. Pluginin **WooCommerce** të instaluar dhe konfiguruar në një nga site-të tuaja.
3. Pluginin **Ultimate Multisite** të instaluar në sistemin tuaj WordPress.

## Konfigurimi i Rrjetit (Multisite Setup)

Kjo pjesë është thelbësore për të krijuar strukturën e rrjetit tuaj.

1. **Aktivizoni Ultimate Multisite:** Shko te menyn e pluginit dhe aktivizojeni funksionalitetin e multisite.
2. **Konfigurimi i Site-it Kryesor (Network Settings):** Këtu do të vendosni parametrat bazë si emri i rrjetit, cilat janë site-të që do të përfshihen dhe ndonjë konfigurim tjetër që keni nevojë.
3. **Krijimi i Site-eve:** Pasi të konfiguroheni rrjetin kryesor, mund të filloni të krijoni site-të e tjera (site-të në rrjet). Çdo site do të ketë një URL të veçantë dhe do të funksionojë si një dyqan i vetëm.

## Integrimi me WooCommerce

Pasi që keni strukturën e multisite gati, tani është koha të lidhimdyrë dyqanet tuaja me WooCommerce.

### Vendosja e Dyqanit në Site-in E Veçantë

Ndonjë site (site) brenda rrjetit mund të jetë një dyqan i plotë WooCommerce.

1. **Instalimi i WooCommerce:** Në site-in që do të funksionojë si dyqan, instalo dhe konfiguro WooCommerce si normalisht.
2. **Konfigurimi i Dyqanit:** Sigurohuni që të keni vendosur çmimet tuaja, metodat e pagesës (si Stripe ose PayPal) dhe konfigurimin e produkteve në atë site-in specifik.

### Menaxhimi i Kontenenteve

Në Ultimate Multisite, mund të kontrolloni se cilët site-e janë aktive dhe si ndikojnë tek WooCommerce:

*   **Site Settings:** Shko te menyn e rrjetit për të parë listën e të gjitha site-eve. Kjo ju lejon të vendosni në cilin site do të jetë dyqani i aktivizuar (nëse keni nevojë).
*   **WooCommerce Dashboard:** Për çdo site që është konfiguruar si WooCommerce, mund të shkoni direkt te dashboard-i i WooCommerce për të menaxhuar produkte, porositë dhe pagesat e atij dyqani.

## Rrjetet e Pagesave (Permalinks)

Kur përdorni multisite, ndonjëherë mund të keni nevojë të kontrolloni se si funksionojnë linket tuaja.

*   **URL-të:** Kujdesuni që URL-të e dyqanit të veçantë të jenë të qarta dhe të lehtë për t'u lexuar nga klientët. Ultimate Multisite ju ndihmon në menaxhimin e kësaj.
*   **SEO:** Sigurohuni që çdo site (dyqan) të ketë një SEO-friendly URL, sepse secili dyqan do të jetë i vizituar nga motori i kerimeve si një entitet i veçantë.

## Rrjetet e Përgjithshme (Network Hooks)

Nëse keni nevojë për funksionalitete më të avancuara, mund të përdorni **hooks** që ofron Ultimate Multisite. Këto janë pika ku ju lejon të vendosni kod shtesë në ndryshime specifike të proceseve (p.sh., para se një produkte të shfaqet).

```php
// Shembull i thjeshtë për përdorimin e një hook-u
add_action( 'woocommerce_before_single_product', 'mi_custom_code' );

function mi_custom_code() {
    // Këtu vendosni kodin tuaj që do të ekzekutohet para se shfaqet produkti i vetëm.
}
```

Kjo ju jep kontroll më të thellë mbi ndërveprimet e dyqanit me rrjetin tuaj.

:::note A lajtimet e abonimeve të anuluara përshkojnë periudhën e lehtësisë (grace period).

Abonimet që janë anuluar bllokohen gjithmonë pasi datat e skadimit kanë kaluar, pavarësisht nëse është i aktivizuar "Block Frontend Access". Periudha e lehtësisë e blokuar frontend nuk vlen për abonimet e anuluara.

## Zgjidhja e problemeve: Sitet që mbeten të aksesueshëm pas skadimit

Nëse sitet mbeten të aksesueshme publik pasi vjetri i anëtarisë (membership) të piqet, ndiqni këto kontrollë në rend:

### 1. Verifikoni se është aktiv opsioni "Block Frontend Access"

*(Këtu do të vendoset teksti për hapat e verifikimit, duke ruajtur formatin e dokumentacionit.)*

Shkoni te **Ultimate Multisite > Settings > Memberships** dhe konfirmo se rreshti (toggle) **Block Frontend Access** është i aktivizuar (on). Kjo opsionim është **i fikur në parim**, që do të thotë se vetëm wp-admin do kufizohet kur një anëtarje bëhet inactive.

### 2. Kontrolloni Periodin e Përkohshëm të Bloku Frontend

Ky seksion ju ndihmon të kuptoni se për sa një periudhë mund të qëndrojë bloku frontend (frontend block) para se të fillojë procesi i kontrollit ose aktivizimit. Kjo është shumë e rëndësishme kur po përdorni ndonjë funksionalitet dinamik në WordPress.

Në të njëjtën faqe të cilave që keni konfigurimin, kontrolloni vlerën **Frontend Block Grace Period**. Nëse kjo është e vendosur në 7 ditë, për shembull, front-end nuk do të bllokohet derisa pas 7 ditëve nga data e skadimit të anëtarisë – edhe nëse statusi i anëtarisë është tashmë `expired`.

Vendosni këtë në `0` nëse dëshironi ndalimin menjëhershëm pasi anëtarja bëhet inactive (pa aktivitet).

Shkoni te **Ultimate Multisite > Memberships** dhe kontrolloni statusin e anëtarisë të ndikuar. Nëse ende shfaqet si `active` edhe pse data e skadimit ka kaluar, kthesimi i statusit nuk është ndodhur. Shkaqet më të zakonshme janë:

**Membruzi i auto-renewing**: Kontrolloni fushën `auto_renew` në faqen e redaktimit të anëtarisë. Nëse auto-renew është i aktivizuar, croni i skaderrjes (expiration cron) përkujdeset këtë anëtarë – ai varet nga gateway i pagesave për të raportuar dështimin. Kontrolloni dashboard-in e gateway-t tuaj (Stripe, PayPal) për të konfirmuar që statusi i abonimit përputhet me atë që shfaq Ultimate Multisite.

- **Cron jobi nuk është ekzekutuar**: Shikoni hapat e ardhshëm.

### 4. Verifikoni nëse Action Scheduler po punon

Ultimate Multisite përdor Action Scheduler për cron jobet e tij. Shkoni te **Tools > Scheduled Actions** (Instrumentet > Akit të Planifikuar) në adminin e rrjetit dhe kërkoni:

- **`wu_membership_check`** -- Kjo duhet të shfaqet si veprim që ekzekutohet çdo orë. Nëse është mungesë, kontrolli i anëtarisë nuk po programohet.

- **`wu_async_mark_membership_as_expired`** -- Këto janë detyra individuale për të marrë në dijmen (markuar si të skaduluar) disa anëtarje si të skaduluara. Nëse shihni veprime të dështuara këtu, mund të përmbajnë mesazhe gabimi që shpjegojnë pse ndodhi ky problemi.

Nëse shihni veprime të ngatërruara ose që dështojnë, mund të keni një problem me Action Scheduler. Shkaqet më të zakonshme janë:

* **`DISABLE_WP_CRON` është i vendosur në `true`** në `wp-config.php` pa një zëvendësim nivel sistemi për cronin e sistemit.
* **Traffiqi i ulët i faqes** -- WP-Cron ekzekutohet vetëm kur dikush viziton faqen

Për të siguruar ekzekutimin e besueshëm të cronit, vendos një job cron në nivelin sistemit:

```bash
# Ekzekuto çdo 5 minuta me wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# O ose përmes WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Kontrolloni Problemet me Gateway Webhook (Abonime Auto-Rinvoltuese)

Nëse abonimi po rinovitet automatikisht dhe abonimi i gateway është anuluar ose ka dështuar, por Ultimate Multisite ende e tregon atë si `active` (aktiv):

**Stripe**: Shko në Stripe Dashboard > Customers dhe kontrolloni statusin e abonimit. Pastaj verifiko që endpoint-i i webhook-ut është aktiv te Developers > Webhooks. Endpoint-i duhet të tregojë faqen tuaj dhe të tregojë dërgesat e suksesshme.

**PayPal**: Kontrolloni statusin e abonimit në llogarinë tuaj biznesi të PayPal dhe verifikoni dërgesën e IPN/webhook.

Nëse gateway-ja tregon se abonimi është i ndërprerë (cancelled) por Ultimate Multisite nuk e tregon këtë, ka shumë gjasa që njoftimi i webhook të ketë humbur. Mund ta ndryshoni statusin e anëtarisë manualisht në **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Kontrolloni Perjapsin e Përkohshme të Skadimit (Niveli Cron)

Kontrolli i cron ka një periudhë leje (përparim) të vet mundshme (vifullimi: 3 ditë) para se të etiketojë një anëtarin si të skaduar. Kjo është e veçantë nga periudha leje e bloku front-end. Koha totale para se një faqe interneti të bllokohet mund të jetë:

Periudha e lejeve për skaderrjen (3 ditë) + Periudha e lejeve për bloku frontend (çfarë keni vendosur ju) = Veprimi total i vjetruar

### 7. Përcaktimi Manual i Vjetrimit të Njohurit (Membership)

Për shembull, me cilësimet e paracaktuar dhe një periudhë lejeje frontend prej 7 ditësh, mund të marrë deri në 10 ditë pas datës `date_expiration` para se faqja të bllokohet vërtet.

Nëse keni nevojë të bllokoni një faqe menjëherë pa presurimin e ciklit të cronit, mund ta ndryshoni statusin e anëtarisë manualisht:

1. Shko te **Ultimate Multisite > Memberships**
2. Kliko mbi anëtarin e prekur
3. Ndrysho statusin në **Expired** (Përfunduar) ose **Cancelled** (Anuluar)
4. Kliko **Save** (Ruaj)

Bloku i front-end do të ndikojë në ngarkimin e faqes tjetër (duke u përmendur për periudhën e lehtësisë së bloku front-end për abonimeve të skaduluara, ose menjëherë për abonimet e anuluara).

## Përmbledhje

Kthimi i plotë nga data e skadimit deri në bllokimin e faqes:

data_expiration kalon
       |
       v
  [Periudha leje 3-ditore cron] <-- anëtarja vazhdon të shfaqet si aktive/në pritje
       |
       v
  Cron e caktuesin e datës e markon anëtarinë si "përcaktuar" (expired)
       |
       v
  [Periudha leje për bloku Frontend] <-- konfigurohet në Settings > Memberships
       |
       v
  Frontend i faqes është bllokuar

Për anë të anëtarive të hequra, rruga është më e shkurtër:

```text
  Membership cancelled
       |
       v
  date_expiration passes (pa periudhë leje)
       |
       v
  Site frontend is blocked immediately
```

## Referencë për zhvillues

Këto hook-e dhe filter-t ju lejojnë të personalizoni se kur do të piqet (expiration) dhe si do të bllokohet përmes WordPress.

| Hook/Filter | Përshkrimi |
|---|---|
| `wu_membership_grace_period_days` | Filtro numrin e ditëve të përkohshme para se një anëtarë t'i marrë në dukje si i skaduar (viftesa: 3) |

| `wu_schedule_membership_check_interval` | Filtro progessin midis kontrollit i anëtarisë (vifulluesi: 1 orë) |
| `wu_membership_renewal_days_before_expiring` | Filtro sa ditë para se të skadeti për të krijuar një pagesë rikuperimi (vifulluesi: 3) |

| `wu_blocked_site_reactivation_url` | Filtro për të ofruar një URL aktivizimi të personalizuar kur një faqe është bllokuar |
| `wu_membership_is_active` | Filtro nëse një anëtarë (membership) konsiderohet i aktiv |

| `wu_membership_expired_check_query_params` | Filtro parametrat e kërkimit të përdorur për të gjetur abonentat që kanë skaduar |
| `wu_membership_trial_check_query_params` | Filtro parametrat e kërkimit të përdorur për të gjetur provimet (trials) që kanë skaduar |
