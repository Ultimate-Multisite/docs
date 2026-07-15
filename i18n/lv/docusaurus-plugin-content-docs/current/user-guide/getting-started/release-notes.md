---
title: Izlaiduma paziņojumi
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Izlaiduma paziņojumi

## Versija 2.13.0 — Izlaidums 2026.06.05 {#version-2130--released-on-2026-06-05}

- Jauns: Pievienots suverēno tenantu atbalstu klientu kontiem, kasina, fakturēšanai, vietnēm, faktūrām, šabloniem mainīšanai un domānu mapiņām, lai tenantu tīkli varētu novirkt klientus atpakaļ uz galveno vietni pārvaldījamajiem darbībām.
- Jauns: Pievienots atjauninājumu autentikācijas (renewal-credential) pārbaudes funkcijas atkārtoto pieejamības iemaksājumiem, lai lietotāji varētu deaktivizēt automātiskās atjauninājumus, ja nav sastopīta saglabāta fakturēšanas satevums, abonentā vai vault tokena.
- Jauns: Pievienots HMAC-verificēts loopback publicēšanai nepiegādājamajām vietnēm, lai piekārtošanu no checkout uz vietnes izveidi būtu drošāk hostos, kur paskaidrošanas darbi aizkavojās.
- Jauns: Pievienoti attīstītāju papildu punkts SSO URL-iem, checkout-formu pamata domāniem un automātiskās domānu reģistrācijas veidokli.
- Korekcija: SSO ir drošāk darbojas starp mapētiem domāniem, anonīgu brokeru apmeklējumiem, logouta un pluginu atkarību konfliktiem.
- Korekcija: Paskaidrošanas vietnes izveide tagad atkarpas no senām publicēšanas flagiem un izvairās, ka lietotāji ir bloķēti uz vietnes izveides ekrāna.
- Korekcija: Domānu reģistrācijas neizveido jaunas pamata domāniem checkout formai, un neizpildīti hosta sniedzēju bakšķerba darbi tiek pārgātāji, ja nav aktīva integrācija.
- Korekcija: Checkout, fakturēšanas adrese, partermes atjauninājumi, e-pasta apstiprināšana, šabloni mainīšana, tūri un klientu dashboarda edge cases tagad nebloķē normālus lietotāju tokus.
- Korekcija: Pasauliskie e-pasta ziņojumi tagad saglabā saņemto lapas, lai izvairītos no SMTP/pluginu fataļiem kļūdi, ja saraksti vai e-pasta transporti neizpildās.
- Korekcija: Abonentā atjauninājumi, izgaides parādīšana un maksājumu saņemšanas edge cases tagad izvairās no neatgriezeniskajām izgaidām, kļūdu vai nepieejami noteiktie maksājumi.
- Uzlabojums: WordPress compatibilitā ir pārbaudīta līdz 7.0 versijai, produkcijas Vue atkarības tiek atkārtoti veidotas no npm avotiem, un Cypress galvenais paklūdis tagad veikskārto vairāk checkout, iestatījumu, SSO un gateway tokus.

## Versija 2.12.0 — Izlaidums 2026-05-15 {#version-2120--released-on-2026-05-15}

- Jauns: Pievienots Hostinger (hPanel) kā atbalstīta hosta sniedzēja ar domēnu mapi integrāciju.
- Jauns: Site Exporter tagad apstrādā tīkla importu paku, lai nodrošinātu vienkāršu restorāciju visā tīklā vietnēm.
- Korekcija: BCC sarakstu e-pastus tagad izmanto neapzīmēto saņēmēju (undisclosed-recipients) headeri, lai novērstu saņēmēju adresi atklāšanu.
- Korekcija: Uzvārdošanas terminu (membership expiration date) datums tagad nav korrumpēts, ja to saglabājams ar datumu neuztveramā vērtību.
- Korekcija: Stripe uzturēšanas atjauninājumi tagad pareizi tīra izlīdzinājumu tūlīt, bez apgriežojamās deleteDiscount API piesaistes.
- Korekcija: SSO pāri (redirects) domēnu mapi vietnēs tagad ir ierobežoti, lai novērstu nebeidzamo pāri loopus.
- Korekcija: Iestatījumu wizardā attēla izvēle tagad pareizi atjauninā datu modelī.
- Korekcija: Site Exporter CLI tagad saglabā pareizu defaultu tīkla vietnes izvēli.
- Uzlabojums: No paketes ietilpības tika noņemts wp-cli, kas samazina paketes lielumu.

## Versija 2.11.0 — Izlaidums 2026-05-11 {#version-2110--released-on-2026-05-11}

- Jauns: Site exporti tagad apkurp visus self-booting `index.php` failus, lai ZIP failu būtu iespējams instalēt jaunam hosta bez atsevišķas paketes instalācijas.
- Jauns: Tīkla eksports ļauj administratoriem izveidot visas subvietas vienā arhivā no Site Export admin lapas.
- Jauns: Site Templates plāna pārlaupienojums tagad ir pilnībā ieguvts atbalsta ķēdes (fallback chain) veidarbju, pareizi ierobežoties templates pieejamību plāna ierobežojumiem.
- Jauns: Uzvārdošanas formulāra redaktors brīdin, ja produktus pievienājam bez konfiguriētām nepieciešamajām laukiem.
- Jauns: Import/Export iestatījumu posmā skaidri aprakstīts tās jomīgais un tieši saistīts ar Site Export rīku.

## Versija 2.10.0 — Izlaidums 2026-05-05 {#version-2100--released-on-2026-05-05}

- Jauns: Jaunais PayPal iestatīšanas wizard ar manuālo atkarību ievadīšanu un OAuth flagi, kas nodrošina vieglu portāla konfigurēšanu.
- Jauns: Klientpalikaļa šablona mainīšana redizainēta ar pašreizējās shablona kartiņu, pastāvīgu gridu un **Atgriezt pašreizējā shablona** pogu.
- Kļūda: Shablona mainīšana vairs neietver UI, ja AJAX kļūda.
- Kļūda: Shablona mainīšanas atļaupju stāvokli ir aizsargāts pret neautorizētu piekļuvi.
- Kļūda: Vietas pārslēgšanas ievadi tiek validēti pirms savkārtošanu.
- Kļūda: Fakturēšanas adrese jautājums tagad redzams, ja adrese ir tukša.
- Kļūda: PHP 8.1 null-no-stringa atbalsta paziņojumi ir risināti.
- Kļūda: Pašreizējais lauku slēgšana tiek veikta pirms init hook, lai novērstu laika problēmas.
- Kļūda: Filtrots SSO ceļš tiek ievērots visos iekāpšanās tokiem.
- Kļūda: Tukšu vietnes identitātes opcijas saglabāti savkārtošanai.

## Versija 2.9.0 — Izlaidums 2026-04-30 {#version-290--released-on-2026-04-30}

- Jauns: Pievienots vienasvietīgs vietnes izveide un importēšana sadaļā **Tools > Export & Import**.
- Kļūda: ZIP failu izveide tagad tiek sniegta ar autentikētu lejupielādi.
- Kļūda: SQL injekcijas risks un jautājumi kviņojuma/importa laukos ir laboti.
- Kļūda: Vietne neizlaidama, ja admins manuāli apstiprina klienta e-pasta adresi.
- Kļūda: Tukšu pending_site ieraksti tiek tīrēti, ja nav pievienotu majstības.
- Kļūda: Iestatījumu navigācijas padargi un meklēšanas ankaru navigācija ir labotas.
- Kļūda: Pending vietnes tagad redzamas pirms visām vietnēm skatīšanās režīmā (All Sites view).
- Kļūda: Iejaicējo sniegtevienas (mShots) User-Agent saraksts ir pievienots, lai novērstu 403 kļūdas.
- Kļūda: Importa cron grafika cikliska atkarība ir risināta.
- Kļūda: Tour ID normalizēti ar zīmējumiem (underscores) lietotāja iestatījumu sarakstā.
- Uzlabots: Tagad tiek izmantota ZipArchive vietā Alchemy/Zippy labāka compatibilitātes dēļ.

## Versija 2.8.0 — Izlaidums 2026-04-29 {#version-280--released-on-2026-04-29}

- Jauns: Iespējams ielikt Jumper toggleu, kas ir pievienots "Other Options" (Citi opcijas) saskrūves UI.
- Jauns: Pievienota statusa stola checkout formām saraksta tabulā.
- Jauns: Pievienota Addon sunrise fail loaderi custom MU-plugin sunrise paplašinājumiem.
- Uzlabots: No saskrūves lapas iestatījumiem tika noņemts kļūdu ziņošanas opcijas ieliktums (opt-in).
- Korekcija: Pāciešniecības lapas kartē (site card) attēls ir ierobežots un saiti stilizēti.
- Korekcija: Ieikasti attēlu sniedzējs pārvietots no thum.io uz WordPress.com mShots.
- Korekcija: Reģistrācija un defaulta lomas (default role) ieliktums tagad ir noteikti pareizi ja novietojams sistēmas instalācijā.
- Korekcija: `get_site_url()` nepaliek tukšs, ja domēns ietver portu.
- Korekcija: Mediju failu klonēšana tagad tiek kopēta pareizi, ja `copy_media` iestatījums ir tukšs.
- Korekcija: Objekta kešēšana (object cache) tiek nevalidēta pareizi pēc sitemeta rakstīšanas "network-activate" veiksmīgā veikt.
- Korekcija: Custom domain automātiski tiek promots uz primāro, ja DNS apstiprinājumā ir 3 daļas domēni.
- Korekcija: Piekļuve (membership) tiek atceltas, ja izpildīts maksājums tiek tīrēts.
- Korekcija: Parvadu katras vārdas pārbaudes (password strength checker) atjaunojums notiek pēc internā iekļaušanas (inline login prompt) atslēgšanas.
- Korekcija: Beidzama lapas atsaucīšanās (infinite page reload) tiek stopēta, ja sistēma jau ir izveidota.
- Korekcija: WP core reģistrācijas opcija sinkronizējas ar paplašinājuma aktivizāciju un iestatījumu savošanu.
- Korekcija: Pievienots nullas laika aizsardzība (`Null expiration guard`) `calculate_expiration` funkcijā PHP 8.4 compatibilitātei.
- Korekcija: Dublēti reģistrējumi tiek bloķēti, ja klientam jau ir aktīva piekļuve (membership).
- Korekcija: Pievienots nullas pārbaude `date_expiration` checkouta laikā.
- Korekcija: Sistēmas sniegšana (site provisioning) ir stiprināta — ierobežojumi, piekļuves inferēšana un domēna promots.
- Korekcija: Pre-instalācijas pārbaudes statusa zīme korelē ar "NOT Activated", ja pārbaude neiztur.
- Korekcija: Checkoutā tiek izmantota domēns e-pasta apstiprinājuma saitiem.
- Korekcija: Automātiskā iekļaušana (auto-login) pēc checkouta, ja nav pieejam vārda lauku.
- Korekcija: Bezmaksas piekļuves (free memberships) tagad neizpildās — tiek uzskatītas par dzīves laikap notikumu (lifetime).

- Korekcija: E-pasta apstiprinājuma vārsta (email verification gate) bloks saglabā vietni, līdz kliente neapstiprina e-pastu.
- Korekcija: SES v2 API galvenās ceļas (base path) un identitātes maršrutas korelēšana labojama.
- Korekcija: `wu_inline_login_error` hook izstrādājams pre-submit catch blokā.
