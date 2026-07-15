---
title: Poboljšajte integraciju kontrolne ploče
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Povećajte Integraciju sa Control Panelom

## Pregled {#overview}
Enhance je moderni control panel koji pruža moćne mogućnosti automatizacije i upravljanja hostingom. Ova integracija omogućava automatsku sinhronizaciju domena i upravljanje SSL sertifikatima između Ultimate Multisite-a i Enhance Control Panel-a.

**Povezana diskusija:** Pogledajte [GitHub Diskusiju #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) za savete zajednice i dodatne informacije.

## Karakteristike {#features}
- Automatska sinhronizacija domena kada su domeni mapirani u Ultimate Multisite-u
- Automatsko dodeljivanje SSL sertifikata putem LetsEncrypta kada DNS rešava
- Podrška poddomena za mreže koje rade u modu poddomene
- Uklanjanje domena kada se uklone mape
- Testiranje konekcije za proveru API kredencijala

## Zahtevi {#requirements}

### Zahtevi sistema {#system-requirements}
- Instaliran i dostupan Enhance Control Panel
- Instalacija WordPress Multisite-a hostovana na ili povezana sa serverom Enhance-a
- Apache web server (Enhance trenutno podržava konfiguracije Apache; LiteSpeed Enterprise je dostupan po smanjenoj ceni)

### Pristup API-ju {#api-access}
Morate imati administratorski pristup Enhance Control Panelu da biste kreirali API tokene.

## Dobijanje Vaših API Kredencijala {#getting-your-api-credentials}

### 1. Kreiranje API Tokena {#1-create-an-api-token}

1. Prijavite se na svoj Enhance Control Panel kao administrator
2. Kliknite na **Settings** (Podešavanja) u meniju navigacije
3. Idite na **Access Tokens** (API Tokeni)
4. Kliknite na **Create Token** (Kreiraj token)
5. Dajte tokenu opisno ime (npr. "Ultimate Multisite Integracija")
6. Dodelite ulogu **System Administrator** (Administrator sistema)
7. Za datum isteka:
   - Ostavite prazno ako želite da token nikada ne istekne
   - Ili postavite određeni datum isteka za potrebe bezbednosti
8. Kliknite na **Create** (Kreiraj)

Након креирања, ће вам бити prikazан **Access Token** и **Organization ID**. **Сачувајте их одмах**, јер токен се приказује само jednom.

### 2. Пронађи Организациодни ИД (Organization ID) {#2-get-your-organization-id}

Организациодни ИД се наводи на страници Access Tokens у синовом информационом блоку означеном "Org ID: {your_id}".

Организациодни ИД је UUID формат који изгледа овако: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Можете пронаћи Организациодни ИД кликнувши на следеће:
1. Страница **Customers** (Клијенти)
2. Кликнути на **Manage customer** (Управљај клијентом) за релевантног клијента
3. Погледати URL - Организациодни ИД су алфанумерички знаци који се налазију након `/customers/`

### 3. Пронађи Ваш Серверни ИД (Server ID) {#3-get-your-server-id}

Да бисте пронашли Ваш Серверни ИД (неопходно за операције домена):

1. У Enhance Control Panel-у, уђите у **Servers** (Сервери)
2. Кликните на сервер где се окружење WordPress-а налази
3. Серверни ИД (UUID формат) ће бити видљив у URL-у или детаљима сервера
4. Или можете користити API да листите сервере:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Серверни ИД следи UUID формат: `00000000-0000-0000-0000-000000000000`

### 4. Пронађи Ваш API URL {#4-get-your-api-url}

Ваш API URL је URL ваше Enhance Control Panel-а са допуњеним `/api/`:

```
https://your-enhance-panel.com/api/
```

**Важно:** Пут `/api/` је обавезан. Честиви грешке укључују:
- Коришћење само домена без `/api/`
- Коришћење HTTP-а уместо HTTPS-а (HTTPS је неопходно за безбедност)

## Конфигурација {#configuration}

### Неопходне константне вредности (Required Constants) {#required-constants}

Додајте следеће константне вредности у ваш `wp-config.php` датотеку:

// Povećajte integraciju sa Control Panelom
define('WU_ENHANCE_API_TOKEN', 'vaš-bearer-token-ovde');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'vaš-server-uuid-ovde');

### Podešavanje putem Integracionog magičnog alata (Integration Wizard) {#setup-via-integration-wizard}

1. U WordPress adminu, idite na **Ultimate Multisite** > **Settings**
2. Idite na karticu **Integrations**
3. Pronađite **Enhance Control Panel Integration** i kliknite na **Configuration**
4. Magični alat će vas voditi kroz podešavanje:
   - **Korak 1:** Uvod i pregled funkcija
   - **Korak 2:** Unesite svoje API podatke (Token, API URL, Server ID)
   - **Korak 3:** Testirajte vezu
   - **Korak 4:** Pregledajte i aktivirajte

Možete da izaberete:
- Da magični alat automatski ubaci konstante u vaš `wp-config.php` fajl
- Da kopirate definicije konstanti i dodate ih ručno

## Dodatna WordPress konfiguracija {#additional-wordpress-configuration}

Na osnovu povratnih informacija zajednice ([Diskusija #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), možda ćete morati da podešite ove dodatne postavke:

### Konfiguracija .htaccess fajla {#htaccess-configuration}

Ako imate problema sa mapiranjem domena:
1. Obrišite originalni Enhance `.htaccess` fajl
2. Zamenite ga standardnim WordPress Multisite `.htaccess` fajlom

### Konstante za kolačiće (Cookie Constants) {#cookie-constants}

Dodajte ove konstante u `wp-config.php` kako biste osigurali ispravno rukovanje kolačićima na mapiranim domenima:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kako to funkcioniše {#how-it-works}

### Kada se domena mapiraju {#when-a-domain-is-mapped}

1. Korisnik mapuje prilagođeni domen u Ultimate Multisite (ili se na poddomenu kreira nova lokacija)
2. Integracija šalje POST zahtev API-ju Enhance: `/servers/{server_id}/domains`
3. Enhance dodaje domen u vašu server konfiguraciju
4. Kada DNS resolved bude na vašem serveru, Enhance automatski proviziše SSL sertifikat putem LetsEncrypta
5. Domen postaje aktivan sa HTTPS-om

### Kada se Domen Ukloni {#when-a-domain-is-removed}

1. Brisanje mape domena u Ultimate Multisite
2. Integracija upita Enhance da pronađe ID domena
3. Slanje DELETE zahteva na: `/servers/{server_id}/domains/{domain_id}`
4. Enhance uklanja domen iz vaše server konfiguracije

### Provera DNS-a i SSL-a {#dns-and-ssl-checking}

Ultimate Multisite uključuje ugrađenu promenu DNS-a i SSL-a:
- Možete podesiti interval provere u **Domain Mapping Settings** (podrazumevano: 300 sekundi/5 minuta)
- Sistem će proveriti propagaciju DNS-a pre nego što domen označi kao aktivan
- Važi li je SSL sertifikat se automatski proverava
- Enhance upravlja provizijom SSL-a automatski, tako da ručna konfiguracija SSL-a nije potrebna

## Provera Podešavanja {#verifying-setup}

### Testiranje Povezivanja {#test-the-connection}

1. U Wizardu Integracije, koristite korak **Test Connection** (Testiraj vezu)
2. Plugin će pokušati da prikaže domene na vašem serveru
3. Poruka uspeha potvrđuje:
   - API kredencijali su ispravni
   - API URL je dostupan
   - Server ID je validan
   - Dostižna imanja (Permissions) su pravilno postavljena

### Nakon Mapiranja Domena {#after-mapping-a-domain}

1. Mapirajte test domen u Ultimate Multisite
2. Proverite logove Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Proverite u Enhance Control Panel da li je domen dodan:
   - Idite na **Servers** > **Vaš Server** > **Domains**
   - Novi domen bi trebalo da se pojavi u listi
4. Kada DNS prođe, proverite da je SSL automatski provizovan

## Rešavanje problema {#troubleshooting}

### Problemi sa povezivanjem API-ja {#api-connection-issues}

**Greška: "Neuspešno se povezao sa Enhance API-jem"**
- Proverite da li `WU_ENHANCE_API_URL` završava sa `/api/`
- Uverite se da koristite HTTPS, a ne HTTP
- Proverite da li je panel Enhance dostupan sa vašeg WordPress servera
- Proverite da li postoje firewall pravila koja blokiraju konekciju

**Greška: "Token API-ja Enhance nije pronađen"**
- Uverite se da je `WU_ENHANCE_API_TOKEN` definisan u fajlu `wp-config.php`
- Proverite da li je token obrisan ili istekao u Enhance-u
- Proverite da li postoji greška u vrednosti tokena

**Greška: "Server ID nije podešen"**
- Proverite da li je `WU_ENHANCE_SERVER_ID` definisan u fajlu `wp-config.php`
- Uverite se da Server ID ima ispravan format UUID-ja
- Potvrdite da postoji server u vašem Enhance panelu

### Domen ne dodaje se {#domain-not-added}

**Proverite logove:**
1. Idite na **Ultimate Multisite** > **Logs**
2. Filtrirajte po **integration-enhance**
3. Tražite poruke o greškama koje ukazuju na problem

**Česta uzroka:**
- Neispravan format imena domena
- Domen već postoji u Enhance-u
- Nedovoljna API dozvola (proverite da li token ima ulogu System Administrator)
- Server ID se ne poklapa sa stvarnim serverom u Enhance-u

### Problemi sa SSL sertifikatom {#ssl-certificate-issues}

**SSL se ne generiše:**
- Proverite da li DNS pokazuje na IP adresu vašeg servera
- Proverite da li domen ispravno rešava: `nslookup yourdomain.com`
- Enhance zahteva da DNS bude rešen pre nego što može da generiše SSL
- Generisanje SSL-a obično traje 5-10 minuta nakon propagacije DNS-a
- Proverite logove Enhance Control Panel za specifične greške vezane za SSL

**Ručno rešavanje problema sa SSL-om u Enhance-u:**
1. Idite na **Servers** > **Your Server** > **Domains**
2. Pronađite svoj domen i proverite njegov status SSL-a
3. Možete ručno pokrenuti generisanje SSL-a ako je potrebno

### Interval provere DNS-a {#dns-check-interval}

Ako domen ili SSL sertifikati duže od uobičajenog vremena traju za aktivaciju:
1. Idite na **Ultimate Multisite** > **Settings** > **Domain Mapping** (Mapiranje domena)
2. Pronađite podešavanje **DNS Check Interval** (Interval provere DNS-a)
3. Prilagodite ga sa podrazmeDefault vrednosti od 300 sekunde na nižu vrednost (minimalno: 10 sekundi)
4. **Napomena:** Niži interval znači češće provere, ali to dovodi do većeg opterećenja servera

### Greške pri autentifikaciji {#authentication-errors}

**HTTP 401/403 greške:**
- Generišite novi API token u Enhance-u
- Proverite da li je token ima ulogu **System Administrator** (Administrator sistema)
- Proverite da li token nije istekao
- Uverite se da koristite ispravan Organization ID (iako obično nije potreban u URL-u)

### Analiza logova {#log-analysis}

Omogućite detaljno logovanje:
```php
// Dodajte u wp-config.php za poboljšanu debagovanje
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Zatim proverite logove na sledećim mestima:
- Ultimate Multisite logovi: **Ultimate Multisite** > **Logs** (Logovi)
- WordPress debug log: `wp-content/debug.log`
- Logovi Enhance panela: Dostupni u admin interfejsu Enhance

## API Referenca {#api-reference}

### Autentifikacija {#authentication}
Sve API zahtevi koriste autentifikaciju Bearer tokenom:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Česte endpointove koji se koriste {#common-endpoints-used}

**Lista servera:**
```
GET /servers
```

**Lista domena na serveru:**
```
GET /servers/{server_id}/domains
```

**Dodavanje domena:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Brisanje domena:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Potpuna API dokumentacija {#full-api-documentation}
Potpuna API dokumentacija: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Najbolje prakse {#best-practices}

### Безбедност {#security}
- **Nikada ne komitujte API tokene u verziju kontrole**
- Spremite tokene u `wp-config.php` fajlu koji treba isključiti iz Gita
- Koristite tokene sa odgovarajućim dozvolama (System Administrator za punu integraciju)
- Postavite datume isteka tokena za produkcione okruženja
- Periodično rotirajte tokene

### Performanse {#performance}
- Koristite podrazumevan interval provere DNS-a (300 sekundi) kako biste izbegli prekomerno pozivanje API-ja
- Prati resurse servera Enhance kada se izvode operacije na domenima velikog obima
- Razmislite o podešavanju dodavanja domena u razmacima ako mapirate mnogo domena odjednom

### Praćenje (Monitoring) {#monitoring}
- Redovno proveravajte logove Ultimate Multisite za greške integracije
- Postavite praćenje za neuspešno dodavanje domena
- Proverite da li su SSL sertifikati ispravno postavljeni
- Prati kapacitet servera Enhance i granice domena

## Dodatne resurse {#additional-resources}

- **Zvanična dokumentacija Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentacija API-ja Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Komajni forum Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub diskusija:** [Issue #265 - Saveti za integraciju Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Vodič za mapiranje domena Ultimate Multisite:** Pogledajte wiki stranicu "Kako konfigurirati mapiranje domena v2"

## Podrška {#support}

Ako naiđete na probleme:
1. Proverite sekciju Rešavanja problema iznad
2. Pregledajte logove Ultimate Multisite
3. Konsultujte [GitHub Diskusije](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktirajte podršku Enhance za probleme specifične za panel
5. Kreirajte novu diskusiju sa detaljnim logovima grešaka za pomoć zajednice

## Napomene {#notes}

Ova integracija obrađuje samo alase domena; Extend automatski upravlja SSL sertifikatima.
Integracija podržava i prilagođene mape domena (custom domain mappings) kao i sajtove bazirane na poddomenu.
Automatsko kreiranje poddomena www može biti podešeno u podešavanjima mape domena (Domain Mapping settings).
Extend trenutno podržava Apache konfiguracije (dostupna je LiteSpeed Enterprise verzija).
Uklanjanje domena iz Ultimate Multisite će ukloniti domen iz Extend, ali možda neće odmah obrisati povezane SSL sertifikate.
