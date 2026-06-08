---
title: Poboljšanje integracije kontrolne table
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Poboljšana Integracija Kontrolne Table

## Pregled
Enhance je moderna kontrolna tabla koja pruža moćne mogućnosti automatizacije i upravljanja hostingom. Ova integracija omogućava automatsko sinhronizovanje domena i upravljanje SSL certifikatima između Ultimate Multisite-a i Enhance Control Panel-a.

**Povezana diskusija:** Pogledajte [GitHub Diskusija #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) za savjete zajednice i dodatne informacije.

## Funkcionalnosti
- Automatsko sinhronizovanje domena kada su domeni mapirani u Ultimate Multisite-u
- Automatsko dodjeljivanje SSL certifikata putem LetsEncrypt-a kada DNS reši
- Podrška za poddomene za mreže koje rade u režimu poddomena
- Uklanjanje domena kada se mapiranja obrišu
- Testiranje konekcije radi provjere API vjerodajnica

## Zahtjevi

### Sistemski zahtjevi
- Instaliran i dostupan Enhance Control Panel
- Instalacija WordPress Multisite-a koja je hostovana na ili povezana sa Enhance serverom
- Apache web server (Enhance trenutno podržava Apache konfiguracije; LiteSpeed Enterprise je dostupan po sniženoj cijeni)

### Pristup API-ju
Morate imati administratorski pristup Enhance Control Panel-u kako biste kreirali API tokene.

## Dobivanje API vjerodajnica

### 1. Kreiranje API Tokena

1. Prijavite se na svoj Enhance Control Panel kao administrator
2. Kliknite na **Settings** (Podešavanja) u navigacionom meniju
3. Idite na **Access Tokens** (API tokene)
4. Kliknite na **Create Token** (Kreiraj token)
5. Dajte tokenu opisno ime (npr. "Ultimate Multisite Integracija")
6. Dodijelite ulogu **System Administrator** (Sistemski administrator)
7. Za datum isteka:
   - Ostavite prazno ako ne želite da token istekne
   - Ili postavite određeni datum isteka radi sigurnosti
8. Kliknite na **Create** (Kreiraj)

Nakon kreiranja, vaš **Access Token** (API token) i **Organization ID** (ID organizacije) će biti prikazani. **Sačuvajte ih odmah**, jer će token biti prikazan samo jednom.

### 2. Dobivanje ID-a organizacije

ID organizacije je prikazan na stranici Access Tokens u plavom informativnom okviru sa oznakom "Org ID: {your_id}".

ID organizacije je UUID formatiran kao: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

ID organizacije možete pronaći i na sljedeći način:
1. Idite na stranicu **Customers** (Klijenti)
2. Kliknite na **Manage customer** (Upravljanje klijentom) za relevantnog klijenta
3. Pogledajte URL - ID organizacije su alfanumerički znakovi nakon `/customers/`

### 3. Dobivanje ID-a servera

Da biste pronašli ID servera (neophodan za operacije sa domenima):

1. U Enhance Control Panel-u, idite na **Servers** (Serveri)
2. Kliknite na server na kojem je instaliran vaš WordPress
3. ID servera (UUID format) bit će vidljiv u URL-u ili detaljima servera
4. Alternativno, možete koristiti API za listanje servera:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

ID servera slijedi UUID format: `00000000-0000-0000-0000-000000000000`

### 4. Dobivanje API URL-a

Vaš API URL je URL vašeg Enhance Control Panel-a sa dodanim `/api/`:

```
https://your-enhance-panel.com/api/
```

**Važno:** Putanja `/api/` je obavezna. Uobičajene greške uključuju:
- Korištenje samo domena bez `/api/`
- Korištenje HTTP umjesto HTTPS (HTTPS je obavezan radi sigurnosti)

## Konfiguracija

### Potrebne konstante

Dodajte sljedeće konstante u vaš `wp-config.php` fajl:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Postavljanje putem čarobnjaka integracije

1. U WordPress administraciji, idite na **Ultimate Multisite** > **Settings** (Podešavanja)
2. Idite na karticu **Integrations** (Integracije)
3. Pronađite **Enhance Control Panel Integration** i kliknite na **Configuration** (Konfiguracija)
4. Čarobnjak će vas voditi kroz postavljanje:
   - **Korak 1:** Uvod i pregled funkcionalnosti
   - **Korak 2:** Unesite vaše API vjerodajnice (Token, API URL, Server ID)
   - **Korak 3:** Testiranje konekcije
   - **Korak 4:** Pregled i aktivacija

Možete izabrati da:
- Pustite čarobnjaka da automatski ubaci konstante u vaš `wp-config.php` fajl
- Ručno kopirate definicije konstanti i dodate ih

## Dodatna WordPress konfiguracija

Na temelju povratnih informacija zajednice ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), možda ćete morati da konfigurišete ove dodatne postavke:

### Konfiguracija .htaccess
Ako naiđete na probleme sa mapiranjem domena:
1. Obrišite originalni Enhance `.htaccess` fajl
2. Zamijenite ga standardnim WordPress Multisite `.htaccess` fajlom

### Konstante kolačića (Cookie Constants)
Dodajte ove konstante u `wp-config.php` kako biste osigurali pravilno rukovanje kolačićima preko mapiranih domena:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kako to radi

### Kada se domen mapira
1. Korisnik mapira custom domen u Ultimate Multisite-u (ili se kreira novi sajt u režimu poddomena)
2. Integracija šalje POST zahtjev na API Enhance-a: `/servers/{server_id}/domains`
3. Enhance dodaje domen u vašu server konfiguraciju
4. Kada DNS reši na vaš server, Enhance automatski dodjeljuje SSL certifikat putem LetsEncrypt-a
5. Domen postaje aktivan sa HTTPS

### Kada se domen uklanja
1. Mapiranje domena se briše u Ultimate Multisite-u
2. Integracija upita Enhance kako bi pronašla ID domena
3. Šalje se DELETE zahtjev na: `/servers/{server_id}/domains/{domain_id}`
4. Enhance uklanja domen iz vaše server konfiguracije

### Provjera DNS-a i SSL-a
Ultimate Multisite uključuje ugrađenu provjeru DNS-a i SSL-a:
- Interval provjere možete konfigurisati u **Domain Mapping Settings** (Podešavanja mapiranja domena) (podrazumevano: 300 sekundi/5 minuta)
- Sistem će provjeriti propagaciju DNS-a prije označavanja domena kao aktivnog
- Važeća SSL certifikata se provjerava automatski
- Enhance automatski upravlja dodjeljivanjem SSL-a, pa nije potrebna ručna konfiguracija SSL-a

## Provjera postavljanja

### Testiranje konekcije
1. U čarobnjaku integracije, koristite korak **Test Connection** (Testiranje konekcije)
2. Plugin će pokušati listati domene na vašem serveru
3. Poruka uspjeha potvrđuje:
   - API vjerodajnice su ispravne
   - API URL je dostupan
   - ID servera je validan
   - Dopuštenja su pravilno postavljena

### Nakon mapiranja domena
1. Mapirajte test domen u Ultimate Multisite-u
2. Provjerite logove Ultimate Multisite-a (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Potvrdite u Enhance Control Panel-u da je domen dodan:
   - Idite na **Servers** > **Your Server** > **Domains**
   - Novi domen bi trebao biti vidljiv u listi
4. Nakon što DNS propagira, provjerite da li je SSL automatski dodijeljen

## Rješavanje problema

### Problemi sa API konekcijom

**Greška: "Failed to connect to Enhance API"** (Neuspješno povezivanje sa Enhance API-jem)
- Provjerite da li `WU_ENHANCE_API_URL` uključuje `/api/` na kraju
- Osigurajte da koristite HTTPS, a ne HTTP
- Provjerite da li je Enhance panel dostupan sa vašeg WordPress servera
- Provjerite da nema firewall pravila koja blokiraju konekciju

**Greška: "Enhance API Token not found"** (Enhance API token nije pronađen)
- Osigurajte da je `WU_ENHANCE_API_TOKEN` definisan u `wp-config.php`
- Provjerite da token nije obrisan ili istekao u Enhance-u
- Provjerite da li postoji tipfela u vrijednosti tokena

**Greška: "Server ID is not configured"** (ID servera nije konfigurisan)
- Provjerite da li je `WU_ENHANCE_SERVER_ID` definisan u `wp-config.php`
- Osigurajte da je ID servera validan UUID format
- Potvrdite da server postoji u vašem Enhance panelu

### Domen nije dodan

**Provjerite logove:**
1. Idite na **Ultimate Multisite** > **Logs**
2. Filtrirajte po **integration-enhance**
3. Potražite poruke o greškama koje ukazuju na problem

**Uobičajeni uzroci:**
- Neispravan format imena domena
- Domen već postoji u Enhance-u
- Nedovoljna API dozvoljenja (osigurajte da token ima ulogu System Administrator)
- ID servera ne odgovara stvarnom serveru u Enhance-u

### Problemi sa SSL certifikatima

**SSL se ne dodjeljuje:**
- Provjerite da li DNS pokazuje na IP adresu vašeg servera
- Provjerite da li se domen pravilno rešava: `nslookup yourdomain.com`
- Enhance zahtijeva da DNS reši prije nego što može dodijeliti SSL
- Dodjeljivanje SSL-a obično traje 5-10 minuta nakon propagacije DNS-a
- Provjerite logove Enhance Control Panel-a za specifične greške SSL-a

**Ručno rješavanje problema sa SSL-om u Enhance-u:**
1. Idite na **Servers** > **Your Server** > **Domains**
2. Pronađite svoj domen i provjerite njegov status SSL-a
3. Ako je potrebno, možete ručno pokrenuti dodjeljivanje SSL-a

### Interval provjere DNS-a
Ako domeni ili SSL certifikati predugo traže da se aktiviraju:
1. Idite na **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Pronađite postavku **DNS Check Interval** (Interval provjere DNS-a)
3. Podesite sa podrazumevanih 300 sekundi na nižu vrijednost (minimum: 10 sekundi)
4. **Napomena:** Niži interval znači češće provjere, ali i veći opterećenje na serveru

### Greške autentifikacije

**Greške HTTP 401/403:**
- Regenerišite svoj API token u Enhance-u
- Provjerite da token ima ulogu **System Administrator**
- Provjerite da token nije istekao
- Osigurajte da koristite ispravan ID organizacije (iako nije obično potreban u URL-u)

### Analiza logova
Omogućite detaljno logovanje:
```php
// Dodati u wp-config.php za poboljšano debugovanje
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Zatim provjerite logove na:
- Logovi Ultimate Multisite-a: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Logovi Enhance panela: Dostupni u admin interfejsu Enhance-a

## API Reference

### Autentifikacija
Svi API zahtjevi koriste Bearer token autentifikaciju:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Uobičajni Endpoints korišteni

**Listanje servera:**
```
GET /servers
```

**Listanje domena na serveru:**
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

### Potpuna API dokumentacija
Potpuna API dokumentacija: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Najbolje prakse

### Sigurnost
- **Nikada ne commitujte API tokene u version control**
- Sačuvajte tokene u `wp-config.php` koji bi trebao biti isključen iz Git-a
- Koristite tokene sa odgovarajućim dozvolama (System Administrator za punu integraciju)
- Postavite datume isteka tokena za produkcione okruženja
- Rotirajte tokene periodično

### Performanse
- Koristite podrazumevani interval provjere DNS-a (300 sekundi) kako biste izbjegli prekomjerne API pozive
- Pratite resurse servera Enhance-a prilikom pokretanja operacija sa domenima velikog obima
- Razmislite o razdvajanju dodavanja domena ako mapirate mnogo domena odjednom

### Monitoring
- Redovno provjeravajte logove Ultimate Multisite-a za greške integracije
- Postavite monitoring za neuspješno dodavanje domena
- Provjerite da li se SSL certifikati dodjeljuju ispravno
- Pratite kapacitet servera Enhance-a i limite domena

## Dodatni resursi

- **Enhance zvanična dokumentacija:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API dokumentacija:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance zajednički forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Diskusija:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Vodič za mapiranje domena:** Pogledajte wiki stranicu "How to Configure Domain Mapping v2"

## Podrška

Ako naiđete na probleme:
1. Provjerite sekciju Rješavanje problema iznad
2. Pregledajte logove Ultimate Multisite-a
3. Konsultujte [GitHub Diskusije](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktirajte podršku Enhance-a za probleme specifične za panel
5. Kreirajte novu diskusiju sa detaljnim logovima grešaka za pomoć zajednice

## Napomene

- Ova integracija obrađuje samo aliase domena; Enhance automatski upravlja SSL-om
- Integracija podržava i mapiranje custom domena i sajtove zasnovane na poddomenama
- Automatsko kreiranje www poddomena može se konfigurisati u podešavanjima mapiranja domena
- Enhance trenutno podržava Apache konfiguracije (LiteSpeed Enterprise je dostupan)
- Uklanjanje domena iz Ultimate Multisite-a ukloniće domen iz Enhance-a, ali možda neće odmah obrisati povezane SSL certifikate
