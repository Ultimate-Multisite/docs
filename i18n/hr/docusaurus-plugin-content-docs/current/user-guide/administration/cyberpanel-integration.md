---
title: Integracija s CyberPanelom
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integracija s CyberPanelom

Ovaj vodič objašnjava kako podesiti integraciju Ultimate Multisite CyberPanel-a tako da se mapirani domeni u vašoj mreži automatski dodaju (i uklanjaju) kao virtual hostovi u CyberPanelu, uz opcionalno proviziranje auto-SSL putem Let's Encrypt.

## Što radi

- Kada se domen mapira u Ultimate Multisite, integracija poziva CyberPanel API kako bi stvorila virtual host za taj domen.
- Kada se ukloni mapiranje domena, integracija poziva API da obriše odgovarajući virtual host.
- Kada je auto-SSL aktiviran, integracija pokreće izdavač Let's Encrypt certifikata odmah nakon što se stvori virtual host.
- Opcionalno dodaje/uklanja alias `www.` ovisno o vašoj postavci "Auto-create www subdomain" u postavkama mapiranja domena (Domain Mapping settings).

## Preduslovi

- Pokrenut CyberPanel instance (preporučeno v2.3 ili noviji) doseg, dostupan s vašeg WordPress servera.
- Postojeći web stranica u CyberPanelu koja već služi korijen vaše WordPress mreže. Integracija vezuje nove virtual hostove za taj server.
- Omogućena pristup CyberPanel API-ju. Autentifikacija koristi korisničko ime i lozinku vašeg CyberPanel admina.
- Vaši DNS podaci za mapirane domene moraju već pokazivati na IP adresu vašeg servera prije nego što auto-SSL može izdati važeći certifikat.

## Zahtjevi

Sledeće konstante morate definirati u datoteci `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionalno možete definirati i:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Podrazmjena: true — SSL Let's Encrypt cert nakon kreiranja domena
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Podrazmjena: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Koristi se za kontakt s SSL certifikatima
```

## Upute za postavljanje

### 1. Omogućite CyberPanel API

1. Prijavite se na svoj CyberPanel dashboard kao administrator.
2. Idite na **Security** > **SSL** i potvrdite da je SSL aktivan na samoj CyberPanel interfejsu (nužno za sigurne pozive API-ja).
3. CyberPanel API je dostupan na adresi `https://va-server-ip:8090/api/` podrazumijevano. Nema potrebe za dodatnim koracima za njegovo omogućavanje — on je podrazumijevano uključen za korisnike administratora.

### 2. Dodajte konstante u wp-config.php

Dodajte sljedeće konstante u vaš datoteku `wp-config.php` prije linije `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://va-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'va_sigurna_lozinka');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Da biste omogućili auto-SSL (preporučeno):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@va-domain.com');
```

### 3. Omogućite integraciju

1. U svom WordPress network adminu, idite na **Ultimate Multisite** > **Settings**.
2. Navigirajte na karticu **Domain Mapping**.
3. Skrolajte do **Host Integrations**.
4. Omogućite integraciju **CyberPanel**.
5. Kliknite na **Save Changes**.

### 4. Provjerite konektivnost

Koristite ugrađeni test konekcije u wizardu za postavke:

1. Idite u **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Kliknite na **Test Connection**.
3. Poruka o uspjehu potvrđuje da plugin može pristupiti CyberPanel API-ju i ispravno se autentificirati.

## Kako to radi

### Domain Mapping (Mapiranje domena)

Kada se domen mapira u Ultimate Multisite:

1. Integracija šalje `POST` zahtjev na `/api/createWebsite` na vašem CyberPanel hostu.
2. CyberPanel kreira novi virtual host za domen pod konfiguriranim paketi.
3. Root dokumenta se postavlja da pokazuje na root direktorij WordPress mreže.
4. Kada se mapiranje domena ukloni, integracija poziva `/api/deleteWebsite` kako bi očistila virtualni host.

### Auto-SSL (Automatsko SSL)

Kada je `WU_CYBERPANEL_AUTO_SSL` postavljen na `true`:

1. Nakon kreiranja virtualnog hosta, integracija poziva `/api/issueSSL` za domen.
2. CyberPanel traži Let's Encrypt certifikat koristeći ACME HTTP-01 challenge.
3. Certifikat je automatski obnavlja CyberPanel prije isteka roka.

> **Važno:** DNS mora biti potpuno propagiran na IP adresu vašeg servera prije nego što Let's Encrypt može validirati domen. Ako isporuka SSL certifikata ne uspije odmah nakon mapiranja, sačekajte propagaciju DNS-a i ponovno pokrenite isporuku SSL putem CyberPanel dashboarda pod **SSL** > **Manage SSL**.

### www Subdomain (Poddomen www)

Ako je opcija **Auto-create www subdomain** uključena u podešavanjima Domain Mapping-a, integracija također kreira alias virtualnog hosta za `www.<domena>` i, kada je Auto-SSL uključen, isporuči certifikat koji pokriva i apex (glavni) i www varijante.

### Email Forwarders (Preusmjerivači e-mailova)

Kada je dodatak [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) aktivan, CyberPanel vam može omogućiti i prebacivanje e-mailova korisnicima. Prebacivači (forwarders) proslijeđuju poruke s jedne domene na drugu pošte bez stvaranja pune pošte, što je korisno za alase poput `info@customer-domain.test` ili `support@customer-domain.test`.

Prije nego što omogućite prebacivače za korisnike:

1. Provjerite da su gore navedene konstante CyberPanel podešene i da test poveznice prolazi.
2. Omogućite e-mail provajdera u podešavanjima dodatka Emails.
3. Potvrdite da je domena klijenta već postoji u CyberPanel prije stvaranja prebacivača.
4. Kreirajte testni prebacivač i pošaljite poruku putem njega prije ponude značajke na planove za produkciju.

Ako kreiranje prebacivača ne uspije, prvo provjerite aktivne logove Ultimate Multisite, a zatim potvrdite u CyberPanel da postoji izvorna domena i da korisnički račun API-ja ima dozvole za upravljanje e-mailom.

## Referenca za konfiguraciju

| Konstanta | Obavezno | Podrazmjena vrijednost | Opis |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Da | — | Pun URL vaše instance CyberPanel uključujući port, npr. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Da | — | Korisnički račun admina CyberPanel-a |
| `WU_CYBERPANEL_PASSWORD` | Da | — | Lozinka admina CyberPanel-a |
| `WU_CYBERPANEL_PACKAGE` | Da | `Default` | Paket hostinga CyberPanel-a koji se dodjeljuje novim virtualnim hostovima |
| `WU_CYBERPANEL_AUTO_SSL` | Ne | `true` | Izradi Let's Encrypt SSL certifikata nakon kreiranja domene |
| `WU_CYBERPANEL_PHP_VERSION` | Ne | `PHP 8.2` | Verzija PHP-a za nove virtualne hostove (mora odgovarati verziji instalirano u CyberPanelu) |
| `WU_CYBERPANEL_EMAIL` | Ne | — | E-mail kontakt za registraciju SSL certifikata |

## Važne napomene

API za CyberPanel koristi autentifikaciju na osnovu sesije (session-based token authentication). Integracija automatski obrađuje dobivanje tokena pri svakom pozivu API-ja.
Vaš administrativni račun u CyberPanel mora imati dozvole za kreiranje i brisanje web stranica.
CyberPanel se podrazumijevano pokreće na portu `8090`. Ako vaš server koristi firewall, provjerite da je taj port dostupan aplikacijskom serveru WordPress-a.
Integracija ne upravlja DNS zapisima. Morate uputiti DNS domena na IP adresu vašeg servera prije mapiranja domena u Ultimate Multisite.
Ako koristite OpenLiteSpeed (OLS), automatski se obavlja elegantno restart nakon promjene virtualnog hosta. Ne treba ručnog intervencije.

## Rješavanje problema

### Odjednako odbijen spoj API-ja (API Connection Refused)

- Provjerite da je port `8090` otvoren u firewallu vašeg servera.
- Potvrdite da vrijednost `WU_CYBERPANEL_HOST` uključuje ispravan protokol (`https://`) i port.
- Provjerite da je vaš SSL certifikat CyberPanel-a važeći; samoznaga (self-signed) certifikati mogu uzrokovati neuspjeh pri provjeri TLS-a. Postavite `WU_CYBERPANEL_VERIFY_SSL` na `false` samo u okruženjima pouzdanih privatne mreže.

### Greške pri autentifikaciji (Authentication Errors)

- Potvrdite da su vaši `WU_CYBERPANEL_USERNAME` i `WU_CYBERPANEL_PASSWORD` ispravni tako što ćete se direktno ulogirati u CyberPanel.
- CyberPanel zaključava račune nakon ponavljanja neuspješnih pokušaja prijave. Provjerite **Security** > **Brute Force Monitor** u CyberPanel ako nastaju blokade.

### Domena nije kreirana (Domain Not Created)

- Provjerite aktivni log aktivnosti Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) za poruke o greškama API-ja.
- Potvrdite da paket definiran u `WU_CYBERPANEL_PACKAGE` postoji u CyberPanel (**Packages** > **List Packages**).
- Osigurajte da domena nije već registrirana kao web stranica u CyberPanel — dupliranje kreiranja web stranice vraća grešku.

### SSL certifikat nije izdat (SSL Certificate Not Issued)

Potvrdite da je DNS potpuno proširio: `dig +short your-domain.com` bi trebao vratiti IP vašeg servera.
Let's Encrypt primjenjuje ograničenja brzine (rate limits). Ako ste nedavno izdali nekoliko certifikata za isti domen, sačekajte prije ponovnog pokušaja.
Provjerite SSL logove CyberPanel pod **Logs** > **Error Logs** za detalje o neuspješnim izdanjima certifikata.
Kao rezervno rješenje, možete ručno izdati SSL putem CyberPanel-a: **SSL** > **Manage SSL** > odaberite domen > **Issue SSL**.

## Referanse

- Dokumentacija CyberPanel API: https://docs.cyberpanel.net/docs/category/api
- Upravljanje SSL-om u CyberPanelu: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Ograničenja brzine Let's Encrypta: https://letsencrypt.org/docs/rate-limits/
