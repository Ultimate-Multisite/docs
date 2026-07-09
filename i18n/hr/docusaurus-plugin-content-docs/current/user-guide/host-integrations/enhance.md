---
title: Poboljšajte integraciju s kontrolnom pločom
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Poboljšajte integraciju s kontrolnom panelom {#enhance-control-panel-integration}

## Pregled {#overview}
Enhance je moderni kontrolni panel koji nudi moćne mogućnosti automatizacije i upravljanja hostingom. Ova integracija omogućuje automatsko sinhroniziranje domena i upravljanje SSL sertifikatima između Ultimate Multisite-a i Enhance Control Panel-a.

**Povezana diskusija:** Pogledajte [GitHub Diskusiju #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) za korisne savjete i dodatne informacije.

## Svojstva {#features}
- Automatsko sinhroniziranje domena kada su domeni mapirani u Ultimate Multisiteu
- Automatsko dodjeljivanje SSL sertifikata putem LetsEncrypta kada se DNS resolve
- Podrška poddomena za mreže koje rade u modu poddomene
- Uklanjanje domena kada se uklone mape
- Testiranje konekcije za provjeru API credentijala

## Zahtjevi {#requirements}

### Zahtjevi o sustavu {#system-requirements}
- Enhance Control Panel instaliran i dostupan
- Instalacija WordPress Multisite hostirana na ili povezana s serverom Enhancea
- Apache web server (Enhance trenutno podržava konfiguracije Apache; LiteSpeed Enterprise je dostupan po smanjenoj cijeni)

### Pristup API-ju {#api-access}
Morate imati administrator pristup Enhance Control Panelu kako biste kreirali API tokene.

## Dobivanje vaših API credentijala {#getting-your-api-credentials}

### 1. Kreiranje API toke {#1-create-an-api-token}
1. Prijavite se na svoj Enhance Control Panel kao administrator
2. Kliknite na **Settings** (Postavke) u navigacijskom meniju
3. Idite na **Access Tokens** (API tokovi)
4. Kliknite na **Create Token** (Kreiraj token)
5. Dajte tokenu opisno ime (npr. "Ultimate Multisite Integracija")
6. Dodijelite ulogu **System Administrator** (Administrator sustava)
7. Za datum isteka:
   - Ostavite prazno ako želite da token nikada ne istekne
   - Ili postavite određeni datum isteka za sigurnosne svrhe
8. Kliknite na **Create** (Kreiraj)

Nakon kreiranja, prikazat će se vaš **Access Token** i **Organization ID**. **Spremite ih odmah**, jer token se neće ponovno prikazati.

### 2. Dohvatite svoj Organization ID {#2-get-your-organization-id}

Organization ID se prikazuje na stranici Access Tokens u plavoj informativnoj kutiji s oznakom "Org ID: {vaš_id}".

Organization ID je UUID formatiran kao: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Možete pronaći Organization ID klijenta tako da:
1. Idete na stranicu **Customers** (Klijenti)
2. Kliknete na **Manage customer** (Upravljanje klijentom) za relevantnog klijenta
3. Pogledate URL - Organization ID je alfanumerički znakovi nakon `/customers/`

### 3. Dohvatite svoj Server ID {#3-get-your-server-id}

Da biste pronašli svoj Server ID (potreqljen za operacije domena):

1. U Enhance Control Panelu, navigirajte do **Servers** (Serveri)
2. Kliknite na server gdje se nalazi vaš WordPress instalacija
3. Server ID (UUID format) će biti vidljiv u URL-u ili detaljima servera
4. Alternativno, možete koristiti API za popis servera:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID slijedi UUID format: `00000000-0000-0000-0000-000000000000`

### 4. Dohvatite svoj API URL {#4-get-your-api-url}

Vaš API URL je URL vašeg Enhance Control Panel-a s dodanim `/api/`:

```
https://your-enhance-panel.com/api/
```

**Važno:** Potrebna je putanja `/api/`. Česte greške uključuju:
- Korištenje samo domena bez `/api/`
- Korištenje HTTP umjesto HTTPS-a (HTTPS je potreban za sigurnost)

## Konfiguracija {#configuration}

### Obavezni konstanti {#required-constants}

Dodajte sljedeće konstante u vaš `wp-config.php` datoteku:

// Poboljšajte integraciju s Control Panelom
define('WU_ENHANCE_API_TOKEN', 'vaš-bearer-token-ovdje');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'vaš-server-uuid-ovdje');

### Postavka putem Integracijskog vodiča (Integration Wizard) {#setup-via-integration-wizard}

1. U WordPress adminu, idite na **Ultimate Multisite** > **Settings**
2. Idite na karticu **Integrations**
3. Pronađite **Enhance Control Panel Integration** i kliknite na **Configuration**
4. Vodič će vas voditi kroz postavljanje:
   - **Korak 1:** Uvod i pregled značajki
   - **Korak 2:** Unesite svoje API podatke (Token, API URL, Server ID)
   - **Korak 3:** Testirajte vezu
   - **Korak 4:** Pregledajte i aktivirajte

Možete odabrati:
- Da vodič automatski ubaci konstante u vaš `wp-config.php` datoteku
- Da kopirate definicije konstanti i dodate ih ručno

## Dodatna WordPress konfiguracija {#additional-wordpress-configuration}

Na temelju povratnih informacija zajednice ([Diskutiraj #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), možda ćete morati podesiti ove dodatne postavke:

### Konfiguracija .htaccess datoteke {#htaccess-configuration}

Ako imate problema s mapiranjem domena:
1. Obrišite originalnu Enhance `.htaccess` datoteku
2. Zamijenite je standardnom WordPress Multisite `.htaccess` datotekom

### Konstante za kolačiće (Cookie Constants) {#cookie-constants}

Dodajte ove konstante u `wp-config.php` kako biste osigurali ispravan rad s kolačićima na mapiranim domenima:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kako to radi {#how-it-works}

### Kada se domena mapiraju {#when-a-domain-is-mapped}

1. Korisnik mapira prilagođeni domen u Ultimate Multisite (ili se na poddomenu kreće novi sajt)
2. Integracija šalje POST zahtjev API-ju Enhance: `/servers/{server_id}/domains`
3. Enhance dodaje domen u vašu server konfiguraciju
4. Kada DNS resolved bude na vašem serveru, Enhance automatski providira SSL certifikat putem LetsEncrypta
5. Domen postaje aktivan s HTTPS-om

### Kada se Domen Ukloni {#when-a-domain-is-removed}

1. Brisanje mape domena u Ultimate Multisite
2. Integracija upita Enhance da pronađe ID domena
3. Slanje DELETE zahtjeva na: `/servers/{server_id}/domains/{domain_id}`
4. Enhance uklanja domen iz vaše server konfiguracije

### Provjera DNS-a i SSL-a {#dns-and-ssl-checking}

Ultimate Multisite uključuje ugrađenu provjeru DNS-a i SSL-a:
- Možete podesiti interval provjere u **Domain Mapping Settings** (podrazumevano: 300 sekundi/5 minuta)
- Sistem će provjeriti propagaciju DNS-a prije označavanja domena kao aktivnog
- Važi li SSL certifikat se automatski provjerava
- Enhance upravlja providjanjem SSL-a automatski, tako da ručna konfiguracija SSL-a nije potrebna

## Provjera Postavke {#verifying-setup}

### Testirajte Povezivanje {#test-the-connection}

1. U Wizardu za integraciju koristite korak **Test Connection** (Testiraj povezivanje)
2. Plugin će pokušati popisati domene na vašem serveru
3. Poruka o uspjehu potvrđuje:
   - API kredencijali su ispravni
   - API URL je dostupan
   - Server ID je validan
   - Imidžije (Permissions) su pravilno postavljene

### Nakon Mape Domena {#after-mapping-a-domain}

1. Mapirajte test domen u Ultimate Multisite
2. Provjerite Ultimate Multisite logove (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Potvrdite u Enhance Control Panel da je domen dodan:
   - Idite na **Servers** > **Vaš Server** > **Domains**
   - Novi domen bi trebao biti vidljiv na listi
4. Kada se DNS propagira, provjerite da je SSL automatski providiran

## Rješavanje problema {#troubleshooting}

### Problemi s povezivanjem API-ja {#api-connection-issues}

**Greška: "Failed to connect to Enhance API" (Neuspješno se povezao s Enhance API-jem)**
- Provjerite da li `WU_ENHANCE_API_URL` uključuje `/api/` na kraju.
- Osigurajte se da koristite HTTPS, a ne HTTP.
- Provjerite da li je panel Enhance dostupan s vašeg WordPress servera.
- Provjerite da li postoje firewall pravila koja blokiraju povezivanje.

**Greška: "Enhance API Token not found" (Token Enhance API-ja nije pronađen)**
- Osigurajte da je `WU_ENHANCE_API_TOKEN` definiran u `wp-config.php`.
- Provjerite da se token nije obrisao ili nije istekao u Enhanceu.
- Provjerite da li postoji tipfeler u vrijednosti tokena.

**Greška: "Server ID is not configured" (ID servera nije konfiguriran)**
- Provjerite da li je `WU_ENHANCE_SERVER_ID` definiran u `wp-config.php`.
- Osigurajte da je Server ID validan UUID format.
- Potvrdite da postoji server u vašem Enhance panelu.

### Domen ne dodan {#domain-not-added}

**Provjerite logove:**
1. Idite na **Ultimate Multisite** > **Logs**.
2. Filtrirajte po **integration-enhance**.
3. Potražite poruke o greškama koje ukazuju na problem.

**Česta uzroka:**
- Neispravan format imena domena.
- Domen već postoji u Enhanceu.
- Nedovoljna API dozvolama (provjerite da li token ima ulogu System Administrator).
- Server ID se ne podudara s stvarnim serverom u Enhanceu.

### Problemi s SSL certifikatima {#ssl-certificate-issues}

**SSL se ne providira:**
- Provjerite da li DNS pokazuje na IP adresu vašeg servera.
- Provjerite da li domen ispravno resolves: `nslookup yourdomain.com`.
- Enhance zahtijeva da se DNS resolve prije nego što može providirati SSL.
- Providiranje SSL certifikata obično traje 5-10 minuta nakon propagacije DNS-a.
- Provjerite logove Enhance Control Panel za specifične greške vezane uz SSL.

**Ručno rješavanje problema s SSL-om u Enhancu:**
1. Idite na **Servers** > **Your Server** > **Domains**.
2. Pronađite svoj domen i provjerite njegov status SSL-a.
3. Možete ručno pokrenuti providiranje SSL-a ako je potrebno.

### Interval provjere DNS-a {#dns-check-interval}

Ako se domene ili SSL certifikati dugo aktiviraju:
1. Idite u **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Pronađite podešavanje **DNS Check Interval** (Interval provjere DNS-a)
3. Podesavajte ga s podrazmjenskih 300 sekunde na manju vrijednost (minimalno: 10 sekundi)
4. **Napomena:** Manji interval znači češće provjere, ali to dovodi do većeg opterećenja servera

### Greške pri autentifikaciji {#authentication-errors}

**HTTP 401/403 greške:**
- Regenerirajte svoj API token u Enhanceu
- Provjerite da li je token ima ulogu **System Administrator** (Administrator sustava)
- Provjerite jesu li token istekle
- Osigurajte se da koristite ispravan Organization ID (iako obično nije potreban u URL-u)

### Analiza logova {#log-analysis}

Omogućite detaljno logiranje:
```php
// Dodajte u wp-config.php za poboljšanu debagiranje
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Zatim provjerite logove na sljedećim mjestima:
- Ultimate Multisite logovi: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Logovi Enhance panela: Dostupni u admin sučelju Enhancea

## API Referenca {#api-reference}

### Autentifikacija {#authentication}
Svi API zahtjevi koriste autentifikaciju Bearer tokenom:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Često korišteni endpoint-ovi {#common-endpoints-used}

**Lista servera:**
```
GET /servers
```

**Lista domena na serveru:**
```
GET /servers/{server_id}/domains
```

**Dodaj domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Obriši domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Potpuna API dokumentacija {#full-api-documentation}
Potpuna API dokumentacija: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Najbolje prakse {#best-practices}

### Sigurnost {#security}
- **Nikada ne komitajte API tokene u verziju kontrole**
- Spremite tokene u `wp-config.php` koji treba isključiti iz Gita
- Koristite tokene s odgovarajućim dozvolama (System Administrator za punu integraciju)
- Postavite datume isteka tokena za produkcijske okruženja
- Periodično rotirajte tokene

### Performanse {#performance}
- Koristite podrazumevan interval provjere DNS-a (300 sekundi) kako biste izbjegli prekomjerno pozivanje API-ja
- Prati resurse servera Enhance kada se izvode velike operacije domena
- Razmislite o podešavanju dodavanja domena u razdoblju ako mapirate mnogo domena istovremeno

### Praćenje (Monitoring) {#monitoring}
- Redovito provjeravajte Ultimate Multisite logove na bazu podataka za greške integracije
- Postavite praćenje za neuspješno dodavanje domena
- Provjerite da su SSL certifikati ispravno generirani
- Prati kapacitet servera Enhance i granice domena

## Dodatne resurse {#additional-resources}

- **Zvanična dokumentacija Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentacija API-ja Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Komunitas forum Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub diskusija:** [Issue #265 - Savjeti za integraciju Enhancea](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Vodič za mapiranje domena Ultimate Multisite:** Pogledajte wiki stranicu "Kako konfigurirati mapiranje domena v2"

## Podrška {#support}

Ako naiđete na probleme:
1. Provjerite odjeljak za rješavanje problema iznad
2. Pregledajte Ultimate Multisite logove
3. Konsultirajte [GitHub Diskusije](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktirajte podršku Enhance za probleme specifične za panel
5. Kreirajte novu diskusiju s detaljnim logovima grešaka za pomoć zajednice

## Napomene {#notes}

Ova integracija obrađuje samo alias domene; Extend upravlja SSL-om automatski.
Integracija podržava i prilagođene mape domena (custom domain mappings) te web stranice bazirane na poddomijenima.
Automatsko kreiranje www poddomijena može se konfigurirati u postavkama Mape domena (Domain Mapping settings).
Extend trenutno podržava Apache konfiguracije (dostupna je LiteSpeed Enterprise verzija).
Uklanjanje domena iz Ultimate Multisite ukloni će domen iz Extend, ali SSL certifikati povezani s njim se možda neće odmah obrisati.
