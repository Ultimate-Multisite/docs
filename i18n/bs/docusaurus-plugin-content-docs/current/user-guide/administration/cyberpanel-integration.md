---
title: Integracija CyberPanela
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integracija sa CyberPanelom {#cyberpanel-integration}

Ovaj vodič objašnjava kako da konfigurišete integraciju Ultimate Multisite CyberPanel kako bi domeni mapirani u vašoj mreži bili automatski dodati (i uklonjeni) kao virtuelni hostovi u CyberPanelu, sa opcijom automatskog pružanja SSL certifikata putem Let's Encrypt-a.

## Šta radi {#what-it-does}

- Kada se domen mapira u Ultimate Multisite, integracija poziva CyberPanel API kako bi kreirala virtuelni host za taj domen.
- Kada se ukloni mapiranje domena, integracija poziva API kako bi obrisala odgovarajući virtuelni host.
- Kada je automatski SSL uključen, integracija odmah pokreće izdavanje Let's Encrypt certifikata nakon kreiranja virtuelnog hosta.
- Opciono dodaje/uklanja alias `www.` u zavisnosti od vaše postavke "Auto-create www subdomain" u podešavanjima mapiranja domena.

## Preduslovi {#prerequisites}

- Pokrenuta CyberPanel instanca (preporučuje se v2.3 ili noviji) dostupna sa vašeg WordPress servera.
- Postojeći sajt u CyberPanelu koji već služi kao root vašeg WordPress network-a. Integracija dodaje nove virtuelne hostove na ovaj server.
- Omogućeni pristup CyberPanel API-ju. Autentifikacija koristi vaše korisničko ime i lozinku administratora CyberPanel-a.
- Vaši DNS zapisi za mapirane domene moraju već ukazivati na IP adresu vašeg servera pre nego što automatski SSL može izdati validan certifikat.

## Zahtjevi {#requirements}

U vašu `wp-config.php` datoteku moraju biti definisane sledeće konstante:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opciono, možete definisati i:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Podrazumevano: true — izdaje Let's Encrypt SSL nakon kreiranja domena
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Podrazumevano: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Koristi se za kontakt za SSL certifikat
```

## Upute za podešavanje {#setup-instructions}

### 1. Omogućite CyberPanel API {#1-enable-the-cyberpanel-api}

1. Prijavite se na vaš CyberPanel dashboard kao administrator.
2. Idite na **Security** > **SSL** i potvrdite da je SSL aktivan na samom CyberPanel interfejsu (neophodno za sigurne API pozive).
3. CyberPanel API je podrazumevano dostupan na `https://your-server-ip:8090/api/`. Nije potrebno dodatno ništa da biste ga omogućili — podrazumevano je uključen za korisnike administratora.

### 2. Dodajte konstante u wp-config.php {#2-add-constants-to-wp-configphp}

Dodajte sledeće konstante u vašu `wp-config.php` datoteku pre linije `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Da biste omogućili automatski SSL (preporučeno):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Omogućite integraciju {#3-enable-the-integration}

1. U administraciji vaše WordPress mreže, idite na **Ultimate Multisite** > **Settings**.
2. Navigirajte do kartice **Domain Mapping**.
3. Skrolujte do **Host Integrations**.
4. Omogućite integraciju **CyberPanel**.
5. Kliknite na **Save Changes**.

### 4. Proverite konektivnost {#4-verify-connectivity}

Koristite ugrađeni test konekcije u čarobnjaku podešavanja:

1. Idite na **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Kliknite na **Test Connection**.
3. Poruka o uspjehu potvrđuje da plugin može doći do CyberPanel API-ja i pravilno se autentifikovati.

## Kako funkcioniše {#how-it-works}

### Mapiranje domena {#domain-mapping}

Kada se domen mapira u Ultimate Multisite:

1. Integracija šalje `POST` zahtjev na `/api/createWebsite` na vaš CyberPanel host.
2. CyberPanel kreira novi virtuelni host za domen pod konfigurisanim paketom.
3. Root dokument se postavlja da ukazuje na direktorijum root vašeg WordPress network-a.
4. Kada se mapiranje domena ukloni, integracija poziva `/api/deleteWebsite` za čišćenje virtuelnog hosta.

### Auto-SSL {#auto-ssl}

Kada je `WU_CYBERPANEL_AUTO_SSL` postavljeno na `true`:

1. Nakon kreiranja virtuelnog hosta, integracija poziva `/api/issueSSL` za domen.
2. CyberPanel traži Let's Encrypt certifikat koristeći ACME HTTP-01 izazov.
3. Certifikat se automatski obnavlja od strane CyberPanel-a prije isteka.

> **Važno:** DNS mora biti potpuno propagiran na IP adresu vašeg servera prije nego što Let's Encrypt može validirati domen. Ako izdavanje SSL ne uspije odmah nakon mapiranja, sačekajte propagaciju DNS-a i ponovo pokrenite SSL sa CyberPanel dashboard-a pod **SSL** > **Manage SSL**.

### www Subdomen {#www-subdomain}

Ako je **Auto-create www subdomain** omogućeno u vašim podešavanjima mapiranja domena, integracija takođe kreira alias virtuelni host za `www.<domen>` i, kada je automatski SSL uključen, izdaje certifikat koji pokriva i apex i www varijante.

### Email Forwarderi {#email-forwarders}

Kada je dodatak [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) aktivan, CyberPanel takođe može pružiti email forvardere za klijente. Forvarderi proslijeđuju poruke sa adrese domena na drugi inbox bez kreiranja punog poštanskog sandučića, što je korisno za aliase kao što su `info@customer-domain.test` ili `support@customer-domain.test`.

Prije omogućavanja forvardera za klijente:

1. Potvrdite da su konstante CyberPanel iznad konfigurisane i da test konekcije prolazi.
2. Omogućite provajdera e-pošte CyberPanel-a u podešavanjima Addon-a za e-poštu.
3. Potvrdite da domen klijenta već postoji u CyberPanelu prije kreiranja forvardera.
4. Kreirajte test forvarder i pošaljite poruku kroz njega prije nego što ponudite ovu funkciju na produkcionim planovima.

Ako kreiranje forvardera ne uspije, prvo provjerite logove aktivnosti Ultimate Multisite-a, a zatim potvrdite u CyberPanelu da li domen izvora postoji i da li API korisnik ima dozvolu za upravljanje e-poštom.

## Referenca konfiguracije {#configuration-reference}

| Konstanta | Obavezno | Podrazumevano | Opis |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Da | — | Puni URL do vaše CyberPanel instance, uključujući port, npr. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Da | — | Korisničko ime administratora CyberPanel-a |
| `WU_CYBERPANEL_PASSWORD` | Da | — | Lozinka administratora CyberPanel-a |
| `WU_CYBERPANEL_PACKAGE` | Da | `Default` | Paket hostinga CyberPanel-a koji se dodjeljuje novim virtuelnim hostovima |
| `WU_CYBERPANEL_AUTO_SSL` | Ne | `true` | Izdaje Let's Encrypt SSL certifikat nakon kreiranja domena |
| `WU_CYBERPANEL_PHP_VERSION` | Ne | `PHP 8.2` | PHP verzija za nove virtuelne hostove (mora odgovarati verziji instaliranoj u CyberPanelu) |
| `WU_CYBERPANEL_EMAIL` | Ne | — | Kontakt e-pošta za registraciju SSL certifikata |

## Važne napomene {#important-notes}

- CyberPanel API koristi autentifikaciju tokenom zasnovanom na sesijama. Integracija automatski upravlja akvizicijom tokena pri svakom API pozivu.
- Vaš CyberPanel admin nalog mora imati dozvolu za kreiranje i brisanje sajtova.
- CyberPanel radi na portu `8090` podrazumevano. Ako vaš server koristi firewall, osigurajte da je ovaj port dostupan sa WordPress aplikacionog servera.
- Integracija ne upravlja DNS zapisima. Morate ukazati DNS domena na IP adresu vašeg servera prije mapiranja domena u Ultimate Multisite.
- Ako koristite OpenLiteSpeed (OLS), automatski se pokreće restart nakon promjena virtuelnih hostova. Nije potrebno ručno intervenisanje.

## Rješavanje problema {#troubleshooting}

### Connection Refused (Odbijanje konekcije API-ja) {#api-connection-refused}

- Provjerite da li je port `8090` otvoren u firewallu vašeg servera.
- Potvrdite da `WU_CYBERPANEL_HOST` vrijednost uključuje ispravan protokol (`https://`) i port.
- Provjerite da li je vaš CyberPanel SSL certifikat validan; samostalno potpisani certifikati mogu uzrokovati neuspjeh TLS verifikacije. Postavite `WU_CYBERPANEL_VERIFY_SSL` na `false` samo u pouzdanim privatnim mrežnim okruženjima.

### Authentication Errors (Greške autentifikacije) {#authentication-errors}

- Potvrdite da su vaše `WU_CYBERPANEL_USERNAME` i `WU_CYBERPANEL_PASSWORD` ispravni tako što ćete se prijaviti na CyberPanel direktno.
- CyberPanel zaključava naloge nakon ponovljenih neuspješnih pokušaja prijave. Provjerite **Security** > **Brute Force Monitor** u CyberPanelu ako dođe do zaključavanja.

### Domain Not Created (Domen nije kreiran) {#domain-not-created}

- Provjerite log aktivnosti Ultimate Multisite-a (**Ultimate Multisite** > **Activity Logs**) radi poruka o greškama API-ja.
- Potvrdite da paket definisan u `WU_CYBERPANEL_PACKAGE` postoji u CyberPanelu (**Packages** > **List Packages**).
- Osigurajte da domen nije već registrovan kao sajt u CyberPanelu — kreiranje duplog sajta vraća grešku.

### SSL Certificate Not Issued (SSL certifikat nije izdat) {#ssl-certificate-not-issued}

- Potvrdite da je DNS potpuno propagiran: `dig +short your-domain.com` bi trebalo da vrati IP adresu vašeg servera.
- Let's Encrypt nameće ograničenja brzine. Ako ste nedavno izdali nekoliko certifikata za isti domen, sačekajte prije ponovnog pokušaja.
- Provjerite logove SSL-a CyberPanel-a pod **Logs** > **Error Logs** radi detalja o neuspjehom izdavanju certifikata.
- Kao rezervni plan, možete SSL ručno izdati iz CyberPanel-a: **SSL** > **Manage SSL** > odaberite domen > **Issue SSL**.

## Reference {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
