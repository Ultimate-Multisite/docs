---
title: Integracija CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integracija z CyberPanelom {#cyberpanel-integration}

Ta vodič pojasnjuje, kako konfigurirati integracijo Ultimate Multisite CyberPanel tako, da se mapirani domeni v vašeta omrežja samodejno dodajo (in odstranjujajo) kot virtualni hosti v CyberPanel, z opcionalno avtomatsko zagotovitvijo SSL-a preko Let's Encrypt.

## Kaj to naredi {#what-it-does}

- Ko je domen mapiran v Ultimate Multisite, integracija uporabi API CyberPanel za ustvarjanje virtualnega hosta za taj domen.
- Ko se odstrani mapiranje domena, integracija uporabi API za odstranitev odgovarjajočega virtualnega hosta.
- Ko je avtomatsko SSL vključeno, integracija sproži izdanje sertifikata Let's Encrypt takoj po ustvarjanju virtualnega hosta.
- Opcionalno dodaja/odstranja alias `www.` v skladu z vašim nastavitvami "Auto-create www subdomain" v nastavitvah mapiranja domen.

## Predhodni podatki {#prerequisites}

- Delujoč CyberPanel instance (priporočamo verzijo 2.3 ali novje), ki je dostopna iz vaše WordPress serverja.
- Obstajajoči spletni strani v CyberPanel, ki že služi vaš omrežni koren za WordPress. Integracija prilega nove virtualne hoste temu serverju.
- Omogočen dostop do CyberPanel API. Avtorizacija uporablja uporabniško ime in geslo vaše administracije CyberPanel.
- Vaša DNS podatkovna vpis za mapirane domene morajo že usmerjati na IP vašega serverja, preden avtomatsko SSL lahko izda validen sertifikat.

## Zahtevi {#requirements}

Slede konstante morate definirati v datoteci `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionalno lahko definirate tudi:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Omreč: true — izstopite Let's Encrypt SSL po kreiranju domena
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Omreč: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Uporabno za stik z sertifikatom SSL

## Navodila do nastavitve

### 1. Omogočite API CyberPanel-a

1. Pri logovanju v svoj CyberPanel dashboard kot administrator, se prijavite na **Security** > **SSL** in potrdite, da je SSL aktiv na samem interfejsu CyberPanel-a (potrebno za varnostne API pozive).
2. CyberPanel API je omogočen na `https://vaš-server-ip:8090/api/` po podrazmerju. Ni potrebno dodatnih korakov za njegovo omogočitev — je on omogočen po podrazmerju za administratorje.

### 2. Dodajte konstante v wp-config.php

Dodajte naslednje konstante v svoj datotek `wp-config.php` pred vrstico `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://vaš-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'vaša_sigurna_polazna_beseda');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Za omogočitev auto-SSL (priporočljivo):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@vašdomen.com');
```

### 3. Omogočite integracijo

1. V adminu vaše WordPress mreže se prijavite na **Ultimate Multisite** > **Settings**.
2. Navigirajte do tabe **Domain Mapping**.
3. Preli je dolji del do **Host Integrations**.
4. Omogočite integracijo **CyberPanel**.
5. Kliknite na **Save Changes** (Shrani spremembe).

### 4. Preverite povezljivost

Uporabite vgrajen test povezljivosti v wizardu nastavitve:

1. Idi **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klikni na **Test Connection**.
3. sporočilo uspeha potrjuje, da je plugin v stik z CyberPanel API dosegla in se pravilno avtentično identificirala.

## Kako to deluje

### Domain Mapping (Mapiranje domen)

Ko se domen mapira v Ultimate Multisite:

1. Integracija pošlje `POST` zahtevo na `/api/createWebsite` na vašem CyberPanel hostu.
2. CyberPanel ustvari novo virtualno host za domen pod konfigurirano paketo.
3. Root dokumenta je nastavljen tako, da kaže na root smer vaše WordPress mreže.
4. Ko se mapiranje domena odstrani, integracija povrne `api/deleteWebsite`, da bi virtualni host bil poskrbljen.

### Auto-SSL (Avtomatizirano SSL)

Ko je `WU_CYBERPANEL_AUTO_SSL` nastavljen na `true`:

1. Po ustvaritvi virtualnega hosta integracija povrne `api/issueSSL` za domen.
2. CyberPanel zahteva certifikat Let's Encrypt z uporabo ACME HTTP-01 challenge.
3. Certifikat je CyberPanel avtomatično obnovil pred potekom.

> **Pomembno:** DNS mora biti popolnoma propagiran na IP naslov vašega serverja, preden Let's Encrypt lahko domen validira. Če izдача SSL-a ne uspe takoj po mapiranju, počakaj na propagacijo DNS in ponovno sproži SSL z CyberPanel dashboarda pod **SSL** > **Manage SSL**.

### www Subdomain (Poddomen www)

Če je **Auto-create www subdomain** v nastavitvah Domain Mapping enabled, integracija ustvari tudi alias virtualnega hosta za `www.<domain>` in, ko je auto-SSL na, izda certifikat, ki pokriva tako apex kot variant z www.

### Email Forwarders (Preusmerje e-pošte)

Ko je dodatek [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) aktiven, lahko CyberPanel tudi ponudi prenosnike e-pošte za stranke. Prenosniki usmerjajo sporočila z ene domene na drugo pošiljateljsko skoto brez ustvarjanja celotnega poštnega sanduka, kar je koristno za alije kot so `info@customer-domain.test` ali `support@customer-domain.test`.

Preden začnete uporabljati prenosnike za stranke:

1. Preverite, da so gore navedene konconste CyberPanel pravilno nastavljene in test povezave uspešen.
2. V nastavitvah dodatka Emails vključite ponudnika e-pošte CyberPanel.
3. Potrdite, da obstaja domena stranke že v CyberPanel pred ustvarjanjem prenosnika.
4. Ustvarite testni prenosnik in pošljite sporočilo skozi njega, preden ponudite funkcijo na produkcijskih plani.

Če ustvarjanje prenosnika ne uspe, najprej preverite aktivnostne logove Ultimate Multisite, nato pa potrdite v CyberPanel, da obstaja virna domena in da ima uporabnik API dovoljenja za upravljanje e-pošte.

## Referenca za konfiguracijo

| Konstanta | Obvezno | Podrazlo vrednost | Opis |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Da | — | Polna URL vašega CyberPanel instancias, vključno z portom, npr. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Da | — | Uporabnik admina CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Da | — | Geslovo admina CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Da | `Default` | Paket hostinga CyberPanel, ki ga dodelite novim virtualnim hostom |
| `WU_CYBERPANEL_AUTO_SSL` | Ne | `true` | Izdelajte Let's Encrypt SSL certifikat po ustvarjanju domena |
| `WU_CYBERPANEL_PHP_VERSION` | Ne | `PHP 8.2` | Verzija PHP za nove virtualne hoste (mora biti ena, ki je instalirana v CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Ne | — | E-pošta za registracijo SSL certifikata |

## Pomembna opozorila

API CyberPanel uporablja autentifikacijo na podlagi sesije tokenov. Integracija samodejno pridobiva tokene pri vsak poslanju API klicov.
Vaš admin račun CyberPanel mora imeti dovoljenja za ustvarjanje in brisanje spletnih strani.
CyberPanel deluje na portu `8090` po podrazmerju. Če vaš server uporablja firewall, preverite, da je ta port dostopen za aplikacijski server WordPressa.
Integracija ne upravlja DNS zapise. Preden mapirate domen v Ultimate Multisite, morate usmeriti DNS domena na IP naslov vašega serverja.
Če uporabljate OpenLiteSpeed (OLS), se samodejno sproži ugodno restart po spremembah virtualnih hostov. Ni potrebna ručna intervencija.

## Reševanje težav

### Odbijanje povezave API-ja

- Preverite, da je port `8090` odprt v firewall serverja.
- Potrdite, da vrednost `WU_CYBERPANEL_HOST` vsebuje pravilno protokol (`https://`) in port.
- Preverite, da je vaš SSL certifikat CyberPanel validen; samodejno podpisane certifikate lahko povzročijo napake pri TLS verifikaciji. Vrednost `WU_CYBERPANEL_VERIFY_SSL` postavite na `false` le v okoljih zanesljivih zasebnih omrežij.

### Napake pri autentifikaciji

- Potrdite, da so vaši `WU_CYBERPANEL_USERNAME` in `WU_CYBERPANEL_PASSWORD` pravilni, tako da se direktno prijavete na CyberPanel.
- CyberPanel blokira račune po ponavljanih neuspešnih poskusih pri prijavi. Preverite **Security** > **Brute Force Monitor** v CyberPanel, če se pojavijo blokade.

### Domen ni ustvarjen

- Preverite dnevnik aktivnosti Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) na iskalne sporočila o napaki API-ja.
- Potrdite, da paket definiran v `WU_CYBERPANEL_PACKAGE` obstaja v CyberPanel (**Packages** > **List Packages**).
- Preverite, da domen ni že registriran kot spletna stran v CyberPanel — duplikat ustvarjanja spletne strani povrne napako.

### SSL certifikat ni izdan



* Potrdite, da je DNS popolnoma propagirana: `dig +short your-domain.com` bi moralo vrniti IP vašega serverja.
* Let's Encrypt vprašuje omejitve hitrosti (rate limits). Če ste v nedelji izdali več sertifikatov za isti domen, počakajte pred ponovnim poskušanjem.
* Preverite SSL loge CyberPanel pod **Logs** > **Error Logs** za podrobnosti o napakah pri izdajanju sertifikata.
* Kot rezervno reč, lahko SSL vstopite ručno iz CyberPanelja: **SSL** > **Manage SSL** > izberite domen > **Issue SSL**.

## Reference

- Dokumentacija API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Upravljanje SSL na CyberPanelju: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Omejitve hitrosti Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
