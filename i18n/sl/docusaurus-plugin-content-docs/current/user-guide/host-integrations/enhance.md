---
title: Izboljšajte integracijo Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Oboljšanje integracije Control Panel

## Pregled {#overview}
Enhance je moderni control panel, ki omogoča močne možnosti za avtomatizacijo in upravljanje hostinga. Ta integracija omogoča avtomatizirano sinhronizacijo domen in upravljanje SSL sertifikatov med Ultimate Multisite in Enhance Control Panel.

**Povezane razpravke:** Pogledajte [GitHub Diskusija #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) za priporočila skupnosti in dodatne informacije.

## Funkcionalnosti {#features}
- Avtomatizirana sinhronizacija domen, ko so domena mapirani v Ultimate Multisite
- Avtomatizirano zagotavljanje SSL sertifikata preko LetsEncrypt ob DNS se razreši
- Podpora poddomenov za mreže, ki delujejo na načinu poddomene (subdomain mode)
- Odstranitev domena, ko so mapiranja odstranjeni
- Preizkušanje povezave za preverjanje API podatkov

## Zahtevi {#requirements}

### Sistemni zahteve {#system-requirements}
- Instaliran in dostopen Enhance Control Panel
- Instalacija WordPress Multisite hostirana na ali povezana z serverjem Enhance
- Apache spletni server (Enhance trenutno podpirajo konfiguracije Apache; LiteSpeed Enterprise je na voljo z nižjo ceno)

### Dostop do API {#api-access}
Morate imeti administrator dostop do Enhance Control Panel za ustvarjanje API tokenov.

## Dobavo vaših API podatkov {#getting-your-api-credentials}

### 1. Ustvarite API Token {#1-create-an-api-token}

1. Pri logiranje v svoj Enhance Control Panel kot administrator
2. Kliknite na **Settings** (Nastavitve) v meniju navigacije
3. Navigirajte do **Access Tokens** (Dostopni tokeni)
4. Kliknite na **Create Token** (Ustvari token)
5. Dajte tokenu opisno ime (npr. "Ultimate Multisite Integration")
6. Na določite vlogo **System Administrator** (Sistemni administrator)
7. Za datum poteka:
   - Prazno, če želite da token nikoli ne poteka
   - Ali postavite specifičen datum poteka za varnostne sisteme
8. Kliknite na **Create** (Ustvari)

Po kreiranju se bodo prikazani vaš **Access Token** in **Organization ID**. **Sprejto jih takoj shranite**, ker token se bo prikazal le enkrat.

### 2. Doberite do svoj Organization ID {#2-get-your-organization-id}

Organization ID je prikazan na strani Access Tokens z modrimi informativno okvortom, ki je označeno "Org ID: {your_id}".

Organization ID je UUID formatiran kot: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Možete ga tudi najti Organization ID stranke, tako:
1. Pojdite na stran **Customers** (Stranke)
2. Kliknite na **Manage customer** (Upravljanje stranke) za določeno stranko
3. Pogledajte URL - Organization ID je alfanumerični znaki po `/customers/`

### 3. Doberite do svoj Server ID {#3-get-your-server-id}

Da bi našli vaš Server ID (potreben za operacije domena):

1. V Enhance Control Panelu navigirajte na **Servers** (Serveri)
2. Kliknite na server, kjer je nameščen WordPress
3. Server ID (UUID format) bo bil vidno v URL-ju ali podatkih o serverju
4. Alternativno lahko uporabite API za seznam serverjev:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID sledi UUID formatu: `00000000-0000-0000-0000-000000000000`

### 4. Doberite do svoje API URL {#4-get-your-api-url}

Vaša API URL je vaša URL Enhance Control Panel z pripomočanjem `/api/`:

```
https://your-enhance-panel.com/api/
```

**Pomembno:** Potrditev `/api/` je potrebna. Pogostih greškov vključujejo:
- Uporabljanje le domena brez `/api/`
- Uporabljanje HTTP namesto HTTPS (HTTPS je nujno za varnost)

## Konfiguracija {#configuration}

### Potrebne konstante {#required-constants}

Dodajte naslednje konstante do svojega datoteke `wp-config.php`:

// Oprečanje integracije z kontrolno panelom
define('WU_ENHANCE_API_TOKEN', 'vaš-bearer-token-tukaj');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'vaš-server-uuid-tukaj');

### Postavitev preko Wizardja za integracijo {#setup-via-integration-wizard}

1. V admin panel WordPressa, gre do **Ultimate Multisite** > **Settings** (Nastavitve)
2. Navigirajte na tab **Integrations** (Integracije)
3. Poiščite **Enhance Control Panel Integration** in kliknite na **Configuration** (Konfiguracija)
4. Wizard vas bo vodil skozi postavljanje:
   - **Korak 1:** Uvod in pregled funkcij
   - **Korak 2:** Vnesite svoje API podatke (Token, API URL, Server ID)
   - **Korak 3:** Preizkus konektnosti
   - **Korak 4:** Pregled in aktivacija

Lahko izberete:
- Dajte wizardju dovoljenje, da sam avtomatsko vstavil konstante v vaš `wp-config.php` datotek
- Kopirate definicije konstant in jih dodate ručno

## Dodatna konfiguracija WordPressa {#additional-wordpress-configuration}

Na podlagi spopameznih povratnih informacij ([Diskuzija #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), boste morda morali postaviti tudi te dodatne nastavitve:

### Konfiguracija .htaccess {#htaccess-configuration}
Če imate težave z mapiranjem domen:
1. Obrišite originalni `.htaccess` datotek Enhance
2. Zamenjajte ga standardnim WordPress Multisite `.htaccess` datotekom

### Konstante za piškotke (Cookie Constants) {#cookie-constants}
Dodajte te konstante v `wp-config.php`, da zagotovite pravilno obravnavanje piškotkov na mapiranih domenah:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kako to deluje {#how-it-works}

### Ko je domen mapiran {#when-a-domain-is-mapped}

1. Koristnik povezuje prilagojen domen v Ultimate Multisite (ali se na poddomenu ustvari novega spleta).
2. Integracija pošlje POST zahtevo na API Enhance: `/servers/{server_id}/domains`
3. Enhance dodaje domen do vaše server konfiguracije
4. Ko DNS razreši na vaš server, Enhance sam avtomatsko pripravi SSL certifikat preko LetsEncrypta
5. Domen postane aktiven z HTTPS

### Ko je domen odstranjen {#when-a-domain-is-removed}

1. Odstrani se povezava domena v Ultimate Multisite
2. Integracija vpraša Enhance za najdenje ID-ja domena
3. Pošlje se DELETE zahteva na: `/servers/{server_id}/domains/{domain_id}`
4. Enhance odstrani domen iz vaše server konfiguracije

### Preverjanje DNS in SSL {#dns-and-ssl-checking}

Ultimate Multisite vključuje zgrajene preveritve DNS in SSL-ja:
- Lahko nastavite interval preverjanja v **Domain Mapping Settings** (podrazmerno: 300 sekund/5 minut)
- Sistem preveri propagacijo DNS pred označevanjem domena kot aktivnega
- Velikost certifikata SSL se sam avtomatsko preveri
- Enhance upravlja z pripravljanjem SSL-ja sam, zato ni potrebna ručna konfiguracija SSL-ja

## Preverjanje postavitve {#verifying-setup}

### Testirajte povezavo {#test-the-connection}

1. V Wizardu integracije uporabite korak **Test Connection** (Test povezave)
2. Plugin poskuša seznam domenov na vašem serverju
3. Ta uspešni sporočilo potrjuje:
   - API podatki so pravilni
   - API URL je dostopen
   - Server ID je validen
   - Dovoljenja so pravilno postavljena

### Po povezovanju domena {#after-mapping-a-domain}

1. Povežite test domen v Ultimate Multisite
2. Preverite loge Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Potrdite v Enhance Control Panel, da je domen dodan:
   - Pojdite na **Servers** > **Your Server** > **Domains** (Serveri > Vaš server > Domena)
   - Novi domen bi morall pojaviti na seznamu
4. Ko se DNS propagira, preverite avtomatsko pripravljanje SSL-ja

## Reševanje težav {#troubleshooting}

### Problemi z povezavo na API {#api-connection-issues}

**Napaka: "Povezava na Enhance API ni uspešna"**
- Preverite, da je `WU_ENHANCE_API_URL` na koncu `/api/`
- Preverite, da uporabljate HTTPS, ne HTTP
- Preverite, da je panel Enhance dostopen z vašega WordPress serverja
- Preverite, da ni v firewall pravil blokirajo povezave

**Napaka: "Token API Enhance ni najden"**
- Preverite, da je `WU_ENHANCE_API_TOKEN` definiran v `wp-config.php`
- Preverite, da ni token odstranjen ali iztekel v Enhance
- Preverite napake v vrednosti tokena

**Napaka: "Server ID ni konfiguriran"**
- Preverite, da je `WU_ENHANCE_SERVER_ID` definiran v `wp-config.php`
- Preverite, da Server ID ima validen format UUID
- Potrdite, da obstaja server v vašem panelu Enhance

### Domen ni dodan {#domain-not-added}

**Preverite logove:**
1. Pojdite na **Ultimate Multisite** > **Logs**
2. Filtrirajte po **integration-enhance**
3. Poiščite sporočila o napaki, ki kažejo na problem

**Pogostejša vzroki:**
- Nevaliden format imena domena
- Domen že obstaja v Enhance
- Nedovoljstva API dovoljenic (preverite, da token ima vlogo System Administrator)
- Server ID ni enako pravi serverju v Enhancu

### Problemi z SSL certifikatom {#ssl-certificate-issues}

**SSL se ne ustvarja:**
- Preverite, da DNS usmerja na IP vašega serverja
- Preverite, da domen pravilno razrešuje: `nslookup yourdomain.com`
- Enhance zahteva, da DNS pravilno razreši pred tem, ko lahko ustvari SSL
- Ustvarjanje SSL se običajno takes 5-10 minut po propagaciji DNS-a
- Preverite logove Enhance Control Panel za napake specifične za SSL

**Ročno reševanje težav z SSL v Enhancu:**
1. Pojdite na **Servers** > **Your Server** > **Domains**
2. Poiščite svoj domen in preverite njegovo stanje SSL-ja
3. Če je potrebno, lahko ročno sprostitve SSL ustvarite

Če sta domena ali SSL sertifikati preveč čaka z aktivacijo:
1. Pojdite na **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Poiščite nastavitvo **DNS Check Interval** (Interval preprečevanja DNS).
3. Prepravite jo s podrazmerja 300 sekund na nižjo vrednost (minimalno: 10 sekund).
4. **Opomba:** Nižje intervala pomenijo večji pogostega preverjanja, vendar višjo obremenjenost serverja.

### Greškovanja pri avtentičiranju {#dns-check-interval}

**Greškovi HTTP 401/403:**
- Regenerirajte svoj API token v Enhance sistemu.
- Preverite, da ima token vlogo **System Administrator**.
- Preverite, da se token ni izčkal.
- Ugotovite, da uporabljate pravilno Organizacijsko ID (čeprav ni običajno potreben v URL).

### Analiza logov {#authentication-errors}

Omogočite podrobno logovanje:
```php
// Dodajte v wp-config.php za zagotovljeno debugovanje
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Potem preverite logove na:
- Logi Ultimate Multisite: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Logi panela Enhance: Na voljo v admin interfeju Enhance

## API Referenca {#log-analysis}

### Avtentičiranje {#api-reference}
Vsi API zahtevajo avtentičiranje z Bearer tokenom:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Pogostej uporabljenih endpointov {#authentication}

**Seznam serverjev:**
```
GET /servers
```

**Seznam domen na serverju:**
```
GET /servers/{server_id}/domains
```

**Dodaj domen:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Obriši domen:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Popolna API dokumentacija {#common-endpoints-used}
Popolna API dokumentacija: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Najboljše prakse {#full-api-documentation}

### Varnostnost (Security) {#best-practices}
- **Nikoli komitirati API tokene v version control**
- Shranjajte tokene v `wp-config.php`, ki jih ne sme biti v Gitu
- Uporabljajte tokene z primernimi dovoljenjami (System Administrator za popolno integracijo)
- Določite datum poteka tokenov za produkcijske okolje
- Periodično rotirajte tokene

### Uporaba in učinkovitost (Performance) {#security}
- Uporabite standardni interval preverjanja DNS-a (300 sekund), da bi se izognili prevelikim pozivom API.
- Nadzirajte resurse serverja Enhance, če opravljate velike operacije domenin.
- Razmislite o postepenem dodajan domen, če mapirate veliko domen v eni akciji.

### Nadzor (Monitoring) {#performance}
- Redno preverjujte logove Ultimate Multisite za napake pri integraciji.
- Ustanovite nadzor za neuspešne dodajanje domen.
- Preverite da so SSL sertifikati pravilno pripravljeni.
- Oprezujte kapacitete serverja Enhance in omejitve domenin.

## Dodatna resursa (Additional Resources) {#monitoring}

- **Official Dokumentacija Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **API Dokumentacija Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Diskusija:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Vodnik za mapiranje domen v Ultimate Multisite:** Pogledajte wiki stran "Kako konfigurirati mapiranje domenin v verziji 2"

## Podpora (Support) {#additional-resources}

Če se soočate z težavami:
1. Preverite razdelek za reševanje težav zgoraj
2. Pregledajte logove Ultimate Multisite
3. Konsultirajte [GitHub Diskusije](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Stikajte se z podporo Enhance za probleme specifične za panel
5. Ustvarite novo diskusijo z podrobnimi logovi napak za pomoč skupnosti

## Opombe (Notes) {#support}

Ta integracija obravnava le aliase domen; Enhance upravlja SSL avtomatsko.
Integracija podpira tako prilagojene mape domen kot tudi spletne strani na poddomeni.
Avtomatizirano ustvarjanje poddomene www je mogoče konfigurirati v nastavitvah Mape domenet.
Enhance trenutno podpira Apache konfiguracije (na voljo je LiteSpeed Enterprise).
Odstranitev domena iz Ultimate Multisite odstrani domen iz Enhance, vendar se SSL sertifikati lahko ne odstranijo takoj.
