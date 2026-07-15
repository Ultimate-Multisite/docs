---
title: Uusjuhendid
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Versioon 2.13.0 — Valmistatud 2026-06-05

* Uued: Lisatud suvereense tenantide tuent (sovereign-tenant) klienti kontoile, ostukusprotsedidele, lahendustele, faktuuritele, šabloni ülemine ja domeenimappimise protsessidele, et tenantide võrked saaksid kliente juhatada tagasi peale site'ile haldeta toimingute jaoks.
* Uued: Lisatud uuesti kinnituse kontrollid korduvate jälgenduste jaoks, et veebilehed (gateways) võisid auto-uudutust välja lülitada, kui puudub salvestatud faktuuriseheloole, jälgenduse või vault tokeni.
* Uued: Lisatud HMAC-verifitseeritud loopback publikuse site'ide loomiseks, et ostukusprotsessist site'ile valmistamiseks oleks usaldavamisem, kui tausttegevused on hiljem.
* Uued: Lisatud arendajatele lahenduste punktid SSO URL-ide, ostukusformi baasdomeenide ja automaatse domeenikoodide loomiseks.
* Parandatud: SSO on usaldavamisem peuselise domeenide üle, anonüümsete brokerite külastustes, logoomisega ja pluginide vahel olevate konfliktide puhul.
* Parandatud: Site'ide valmistamiseks puudutatud protsessid tagasi käivituvad vanade publikuse flagide (publish flags) järgi ja vältivad klientide jäetavaks site'i loomise ekraanil.
* Parandatud: Domeenikoodid ei looda enam ühise ostukusformi baasdomeenide jaoks, ja kasutamata host-tehtute tausttegevused on ülesliidetud, kui ei ole aktiivset integreerimist.
* Parandatud: Ostukusprotsessis, faktuuriseheloole, paroolikujutuse, e-posti kinnituse, šabloni ülemine, tuuride ja klientide dashboardi äärmise juhtumid ei blokeeri enam tavalisi kliente toimimist.
* Parandatud: Laadimised e-kirjastused säilitavad nüüd vastaanottajate privaatsust, samas kui vältivad SMTP/pluginide fataalseid vigu, kui vastaanottaja loendid või e-posti transportid ei õnnestu.
* Parandatud: Jälgenduste uuesti kinnitused, lülituse näitamine ja maksude kogumine äärmise juhtumid vältivad nüüd koondatud lahendusi, krahid või vajalikud maksed puudutamist.
* Parandatud: Parandatud WordPressi compatibiliteet testitud kuni versiooni 7.0, tootmisvahetuste (production) Vue asetest laaditakse npm allikatest ja Cypress end-to-end kattuvus täna uurib rohkem ostukusprotsesse, seadistamise, SSO ja veebilehejuhtimise protsesse.

## Versioon 2.12.0 — Valmistatud 2026-05-15 {#version-2130--released-on-2026-06-05}

- Uued: Lisati Hostinger (hPanel) toetud host providerina domeenmapingu integreerimise abil.
- Uued: Site Exporter käsitleb nüüd võrku importi pakette, mis võimaldab ümberkõrgevõrku site restoratsiooni lihtsustada.
- Parandused: BCC broadcast e-kirjastused kasutavad nüüd teavetud vastutajate aadresside väldimiseks teavetud vastutajate headerit.
- Parandused: Liikmesuse lisu lõppdatav datum ei ole enam korrumpeerunud, kui seda salvestatakse ühtlustamata datavaluga.
- Parandused: Stripe liikmesuse uuendused puhastavad nüüd korrektselt allahindlusi ilma vanade deleteDiscount API-ga kutsuda.
- Parandused: SSO juhatised domeenmapitud srautel on piiratud, et vältida ikkala juhatise sükli.
- Parandused: Seadistusjuhtimise pilti valik uuendustab nüüd korrektselt põhjal olevaid andmeomad.
- Parandused: Site Exporter CLI säilitab nüüd korrektselt pooltud pooltseade võrku site valiku.
- Parandused: Kaasa pakutud wp-cli on plugin pakkust välja eemaldatud, mis vähendab plugin suurust.

## Versioon 2.11.0 — Valmistatud 2026-05-11 {#version-2120--released-on-2026-05-15}

- Uued: Site exportid pakuvad nüüd itse käivitavat `index.php` faili, nii et ZIP-fail saab installida uue hostile ilma eraldi pluginil olla.
- Uued: Võrku eksport võimaldab administraatoritele eksportaalselt välja võtta kõik alatesite ühe arkivi kätte Site Export administratiivsest lehel.
- Uued: Site Templates plaani lülituse võimalus on nüüd tagatud tagajärgega, mis piirab mallide kasutamist plaani piirde järgi korrektivalt.
- Uued: Checkout vormi redigeerija teavitab, kui toodet lisatakse ilma vajalikule valdkonnale konfiguratsioonil.
- Uued: Import/Export seadistuste tab kirjeldab nüüd oma ületust selgelt ja linkub otse Site Export tööriistasse.

## Versioon 2.10.0 — Valmistatud 2026-05-05 {#version-2110--released-on-2026-05-11}

- Uued: PayPal suunupäivitusjuhtis (guided setup wizard) manuaidud lehekülenduste sisestamiseks OAuth flagiga, mis võimaldab sujuva veebilehtide konfiguratsiooni.
- Uued: Teemakujärjestikute (Template switch) kasutajapane uuendatud koos uue **current-template** kaartiga, pysenduvate gridiga ja **Reset current template** nupuga.
- Korratus: Teemakujärjestiku ülemine ei leppe enam AJAX-failumise korral UI-l.
- Korratus: Teemakujärjestiku lubuse staatused on kaitstud lülalise küsimuste eest.
- Korratus: Lehekülenduste üleületamise sissevad valikud valideeritud enne salvestamist.
- Korratus: Atekohale küsimus näidatakse nüüd, kui aadress on tühja.
- Korratus: PHP 8.1 null-stringi deprecierimise teavet lahendatud.
- Korratus: Current lazy-loaded funktsioon on nüüd init hooki enne kasutamist ladustatud, et vältida ajastundunud probleemid.
- Korratus: Filtreeritud SSO-teeg (Single Sign-On) on tagatud kõigis sisselogi protsessides.
- Korratus: Lehekülenduste salvestamisel tühjad lehekülenduse identiteetivalikud valikud säilitatakse.

## Versioon 2.9.0 — Valmistatud 2026-04-30 {#version-2100--released-on-2026-05-05}

- Uued: Ükslehe eksporti ja impordi lisatud **Tools > Export & Import** allpool.
- Korratus: Eksport ZIP failid on nüüd teenindatud autentseeritud allalaadimispäeva (download endpoint) abil.
- Korratus: SQL-injektsiooniga riski ja küsimuste probleemid ootavate eksport/impordi küsimustes korrigeeritud.
- Korratus: Lehekülenduse ei avalda, kui administraator kasutaja e-posti manuaalselt kinnitab.
- Korratus: Kurjatud `pending_site` registreerimised puhastatakse, kui li membership puudub.
- Korratus: Seadistuste navigaati padding ja otsingukohja navigaatio korrigeeritud.
- Korratus: Ootavate lehekülenduste on nüüd esimesena nähtavates All Sites vaateva.
- Korratus: Skrinšooti teenindaja (mShots) User-Agent header lisatud 403 vigaid vältimiseks.
- Korratus: Impordi cron-juurdepiduse tsükline sõltuvus lahendatud.
- Parandatud: ZipArchive kasutatakse nüüd Alchemy/Zippy asemel parema compatibiliteedi tõttu.

## Versioon 2.8.0 — Valmistatud 2026-04-29 {#version-290--released-on-2026-04-30}

Uus: Lisatud Jumper-liiklik (toggle) "Muud valikute" (Other Options) seadistuste käyttöliini (UI) sekundi.
Uus: Lisatud staatuskolonn (Status column) kassapõhja vormide nimekiri tabelile.
Uus: Lisatud Addon sunrise faili laadimise funktsioon kasutamata MU-pluginite sunrise-laikmete jaoks.
Parandatud: Optilised kirjeldused seadistuste lehelest ebaõnnestamise (error-reporting) valikust eemaldati.
Lause: Teียด tänanud lehel — pild on nüüd piiratud ja linkid stiilitud õigesti.
Lause: Skrinšootoriväljund laadistati thum.io'st WordPress.com mShotsiks.
Lause: Registreerimise ja poololeva rolli aktiveerimine on nüüd seaditatud õigesti uue installimise korral.
Lause: `get_site_url()` ei annu enam tühjakohja, kui domeen sisaldab porti.
Lause: Mediafailide klonimine toimib nüüd õigesti, kui `copy_media` seadistus on tühjaline.
Lause: Objekti kašile (Object cache) validatsioon toimib korrektivalt pärast sitemeta-kirjutamist `network-activate` protsessiga.
Lause: Kasutatud domeen automaatselt promotoiti primäärseks DNS-verifitseerimise korral 3 osalise domeenide jaoks.
Lause: Poololeva jälgimine annab tühja, kui lühendatud maksutuse tagajärge puhul.
Lause: Paroolikohustamise tugevuskontroll (Password strength checker) käivitub uue sisselogi tegemise pärast eemaldamist.
Lause: Lõpulemisuvahel on lõpetatud, kui lehel on juba loodud.
Lause: WP core registreerimise valik synkronineerib pluginite aktiveerimise ja seadistuste salvestamise ajal.
Lause: PHP 8.4 compatibiliteeti jaoks lisatud null-eksipatsiooniv kaitsja `calculate_expiration`-i sisemise funktsioonisse.
Lause: Duplikaalsed registreerimised blokeeritakse, kui kasutajal on juba aktiveeritud poololeva jälgimine.
Lause: Checkoutis `date_expiration` jaoks lisatud null-kontroll.
Lause: Sitemeta (Site provisioning) tugevdatakse — piirangud, poololeva jälgimise tõendused ja domeenpromootioon.
Lause: Esimise installimise kontrolli staatusetikett on korrigeeritud "Ei aktiveeritud"iks, kui kontroll ebaõnnestub.
Lause: Checkoutis kasutatav domeen e-posti kinnituse URL-ide jaoks.
Lause: Autolõendamine pärast kassapõhja tegemist, kui paroolikohustamist ei ole oleole.
Lause: Vaba poololevad enam ei lühenda — käsitleb neid eluaegseks.

* Korjaus: E-posti autentimise port (gate) hoidab veebilehte publikutamist, kuni klient e-posti kinnitamist ei teenda.
* Korjaus: SES v2 API endpointi alusevi ja identiteetirootu korrigeerimine.
* Korjaus: `wu_inline_login_error` hook laaditakse pre-submit catch blocki sisemesse.
