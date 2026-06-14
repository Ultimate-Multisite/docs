---
title: Parandage kontrollplaani integreerimist
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Kontrollpaneli integreerimise parandamine

## Üldine ülevaade
Enhance on moderni kontrollpaneel, mis pakub võimlikku hoitjaautomaatika ja haldamise võimalusi. See integreerimine võimaldab domeenide automaatselt synkronida ja SSL-sertifikaate halda Ultimate Multisite'i ja Enhance Control Panel vahel.

**Seotud diskussioon:** Leia [GitHub Diskussiooni #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) kogukonnalt antud nõuete ja lisate teavet.

## Funktsioonid
- Domeenide automaatne synkronimine, kui domeenid on Ultimate Multisite'is määratud
- Automootne SSL-sertifikaatide provisjonimine LetsEncrypti abil DNS resolvtud ajal
- Subdomeenide toetmine võrkude jaoks, mis toimivad subdomeenirežiimis
- Domeenide eemaldamine, kui määrustused eemaldatakse
- API-kujutuse testimine API-kõrrekordide kinnitamiseks

## nõuded

### Süsteernõuded
- Enhance Control Panel on paigaldatud ja kättesaadav
- WordPress Multisite installatsioon on hoitija serveril või seotud Enhance serverile
- Apache veebiserver (Enhance toetab praegu Apache konfiguratsioone; LiteSpeed Enterprise on saadaval vähendatud hinnaga)

### API-kättesaadavus
Pea peate administratorõigust Enhance Control Panelis, et luua API-tokenid.

## API-kujutuse saamist

### 1. API-tokeni loomine

1. Logi sisse oma Enhance Control Panelile administratorina
2. Klõpsake navigatsioonimenu **Settings** (Seaded) välja
3. Minema **Access Tokens** (Kättesaadavused) sekkoni
4. Klõpsake **Create Token** (Token loomine) välja
5. Anna tokenile kirjeldav nimi (nt. "Ultimate Multisite Integraals)
6. Teata **System Administrator** (Süsteemi administrator) rolli
7. Lõpppäeva kohta:
   - Jätka tühistamata, kui soovite, et token ei kunagi luba
   - Või seenda spetsiifilise kümnemise kuupäeval turvalisuse tagamiseks
8. Klõpsake **Create** (Loo)

Pärast loomist näidatakse teie **Access Token** ja **Organization ID**. **Salvestage need kohe**, kuna token näidatakse ainult ühe korra.

### 2. Hii oma Organization ID

Organization ID on näidatud Access Tokens lehel sinise informatsioonikasti, kus on märgitud "Org ID: {your_id}".

Organization ID on UUID-formati: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Võite ka leida kliendi Organization ID järgnevate sammude abil:
1. Minenda **Customers** lehel
2. Klientide jaoks klõpsata **Manage customer**
3. Vaata URL-i – Organization ID on alfanumerilised tegevused `/customers/` pärast.

### 3. Hii oma Server ID

Server ID (vajalik domeenoperatsioonide jaoks) leida:

1. Enhance Control Panelis navige **Servers** sekkoni küsimuse alla
2. Klõpsake sellele serverile, kus on WordPress installitud
3. Server ID (UUID-formati) on näha URL-is või serveri detailides
4. Alternatiivselt saate API kasutades serverite lista:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID järgib UUID-formati: `00000000-0000-0000-0000-000000000000`

### 4. Hii oma API URL

Teie API URL on teie Enhance Control Panel URL, millele lisatakse `/api/`:

```
https://your-enhance-panel.com/api/
```

**Tälevend:** `/api/` polud on vajalik. Tavaliselt tekitavad vigu:
- ainult domeeni ilma `/api/` pärast kasutamine
- HTTP asemel HTTPS kasutamine (turvalisuse jaoks on HTTPS vajalik)

## Konfiguratsioon

### Vajalikud konstantsid

Lisa järgmised konstantsid oma `wp-config.php` failile:

// Parandige kontrollpaneli integreerimist parandige.
define('WU_ENHANCE_API_TOKEN', 'si-asi-token-si-si');
define('WU_ENHANCE_API_URL', 'https://si-parandige-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'si-server-uuid-si');

### Seadistundise integreerimise abil

1. WordPress administratiivis osas lahti, minuga **Ultimate Multisite** > **Settings** menuka.
2. Minuga navigeerige **Integrations** tabilele.
3. Leidsi **Enhance Control Panel Integration** ja klõpsake **Configuration**-iga.
4. Wizard juhendab teid seadistamise läbi:
   - **Samuti 1:** Sissejuhatus ja funktsioonide ülevaade
   - **Samuti 2:** Sisenda API-kreditaalid (Token, API URL, Server ID)
   - **Samuti 3:** Ühenduse testimine
   - **Samuti 4:** Vaadikus ja aktiveerimine

Võite valida:
- Wizardi, et see automatiliselt sisenda konstants teie `wp-config.php` failisse.
- Kopida konstants define'id ja lisada need manuaaliselt.

## Lisakogu WordPressi seadistusi

Kogemuste tagastandimise (\[Diskussioon #265\]) põhjal, võib tekkuda vajadus konfigurida neid lisaseadistusi:

### .htaccess Konfiguratsioon

Kui tuvate probleeme domeenide maapoolise määratlemise puhul:
1. Eeletud originaal Enhance `.htaccess` fail.
2. Asenda sellele standard WordPress Multisite `.htaccess` fail.

### Cookie Konstantsid

Lisage need konstantsid `wp-config.php`-le, et tagada õiguse cookie-juhtimise maapoolset domeene üle:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kuidas see toimib

### Kui domeen on maapoolise määratud

1. Kasutaja määrab oma domeeni Ultimate Multisite's (või luuakse uue saini mode)

2. Integreerimine lähevad POST-vaate Enhance'i API:le: `/servers/{server_id}/domains`

3. Enhance lisab domeeni teie server konfiguratsioonile

4. Kui DNS resolveeritub teie serverile, Enhance loodab automaatselt SSL-sertifikaadi LetsEncrypti abil

5. Domeen muutub aktiivseks HTTPS-ga

### Kui domeeni eemaldatakse

1. Ultimate Multisite'is domeeni mappimine eemaldatakse
2. Integreerimine küsib Enhance'ilt domeeni ID leidmiseks
3. Lähteb DELETE-vaate: `/servers/{server_id}/domains/{domain_id}`
4. Enhance eemaldab domeeni teie server konfiguratsioonist

### DNS ja SSL kontrollimine

Ultimate Multisite sisaldab sissejuhatud DNS- ja SSL-kontrolli:
- Saate konfigurida kontrolli intervalli **Domain Mapping Settings**is (oletus: 300 sekunsti/5 minutit)
- Süsteem kinnitab DNS-propagatsiooni enne domeeni aktiivseks märkimist
- SSL-sertifikaadi kehtivuse kontroll on automaatselt tehtud
- Enhance haldab SSL-proviisjon automaatselt, seega manuaalset SSL-konfiguratsiooni ei vaja

## Seadistuse kinnitamine

### Ühenduse testimine

1. Integreerimise juhendis kasutage **Test Connection** sammuga
2. Plugin proovib serveril olevat domeene loetada
3. Edu sõnum kinnitab:
   - API ülesandeid on õigud
   - API URL on kättesaadav
   - Server ID on valide
   - Permissioonid on õigilt seaditud

### Domeeni mappamise pärast

1. Mappige Ultimate Multisite'is testdomeen
2. Kontrollige Ultimate Multisite logid (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Kontrollige Enhance Control Panelis, et domeen lisatud oleks:
   - Minenda **Servers** > **Your Server** > **Domains**
   - Uue domeeni peaks ilmbumine loendisse

4. Kui DNS propagatsioon on lõpetatud, kinnitage, et SSL loodud on automaatselt

## Probleemide lahendused

### API ühenduse probleemid

**Vigav: "Enhance API-le ühendamine ebaõnnestus"**
- Kontrollige, kas `WU_ENHANCE_API_URL` lõpus on `/api/`.
- Veendunud, et kasutate HTTPS'i ja mitte HTTP-t.
- Kontrollige, kas Enhance paneel on kättesaadav teie WordPress serverilt.
- Kontrollige, et ei ole seadmevahelise (firewall) reegleid, mis blokeeriksid ühendust.

**Vigav: "Enhance API-tokeni ei leitud"**
- Veendunud, et `WU_ENHANCE_API_TOKEN` on definitsioonideks `wp-config.php`-failis.
- Kontrollige, kas token ei ole ebatatud või lügnenud Enhance'is.
- Kontrollige tokeni väärtuse otsingud (typo).

**Vigav: "Server ID on konfiguratsioonil mitte"**
- Veendunud, et `WU_ENHANCE_SERVER_ID` on definitsioonideks `wp-config.php`-failis.
- Veendunud, et Server ID on valide UUID-formati.
- Kontrollige, kas server on teie Enhance paneelis olemas.

### Domeeni lisamata

**Logide kontrollimine:**
1. Minenda **Ultimate Multisite** > **Logs**.
2. Filtreerige logid **integration-enhance** abil.
3. Vaadake väärtusi, mis viitavad probleemist.

**Leitmise põhjusted:**
- Valida domeeni nimetusvormi ei ole õige.
- Domeen on juba Enhance'is olemas.
- Piisiklik API-luba (veendunud, et tokenil on System Administrator roll).
- Server ID ei vastata tõelise serveriga Enhance'is.

### SSL-sertifikaadi probleemid

**SSL ei loodud:**
- Kontrollige, kas DNS viitab teie serveri IP-adressile.
- Kontrollige, et domeen lahendatakse õigesti: `nslookup yourdomain.com`.
- Enhance nõuab, et DNS lahendaks enne SSL-sertifikaadi loomist.
- SSL-sertifikaadi loodamine võtab tavaliselt 5–10 minutit pärast DNS-lahendamist.
- Kontrollige Enhance Control Panel logid SSL-spesifiliste vigu kohta.

**Manuaalne SSL-probleemide lahendamine Enhance'is:**
1. Minenda **Servers** > **Your Server** > **Domains**.
2. Leidske oma domeen ja kontrollige selle SSL-tila.
3. Kas vajalik, saate SSL-sertifikaadi loodamist manuaalselt käivitada.

### DNS-kontrolli vahel olev intervall

Kui domeenid või SSL-sertifikaadid aktifleštavad liiga pika aega:
1. Minenda **Ultimate Multisite** > **Settings** > **Domain Mapping** menüüle
2. Leppida **DNS Check Interval** seost
3. Reguleerida seda poolt puudutult 300 sekündist väiksemaks (minimum: 10 sekundit)
4. **Märkus:** Väike intervallid tähendavad sagedamalt kontrolli, kuid suuremat serveri koormust

### Autentikatsioonivõrgeid

**HTTP 401/403 väärtuseid:**
- Uusenda API token Enhance'is.
- Kontrollida, et tokenil on **System Administrator** roll.
- Kontrollida, kas token pole lülitunud.
- Veenduda, et kasutate õiget Organisatsiooni ID-d (kuigi see tavaliselt ei ole vajalik URL-is).

### Logide analüüs

Lülitage üksikasjalik logi:
```php
// Lisage wp-config.php'le parema debuggi jaoks
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Kontrollige logid järgmisel viisil:
- Ultimate Multisite logid: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance paneli logid: Saadaval Enhancei administraatoripaneelis

## API Viitamine

### Autentikatsioon
Kõik API-vaadised kasutavad Bearer token autentikat:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Tavaliselt kasutatavad endpunktid

**Serverite listimine:**
```
GET /servers
```

**Domeenide listimine serveril:**
```
GET /servers/{server_id}/domains
```

**Domeeni lisamine:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domeeni eemaldamine:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Täielik API Dokumentatsioon
Täielik API dokumentatsioon: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Parimad praktikad

### Turvalisus
- **Ärge kun API tokenid version controlile**
- Salvesta tokenid `wp-config.php` faili, mida Gitist tuleb eksklüduuda
- Kasuta tokenide, millel on sobivad õigused (Süsteemi administraator kogu integreerimiseks)
- Aseta tokenide kümned ajad tootmerekontuurides
- Vahetada tokenide perioodiliselt

### Tõhusus
- Kasuta pooltoleva DNS-kontrolli intervalli (300 sekundi) vältida ületundlikke API-kutseid
- Jälgige Enhance serveri ressursside monitoreerimist suurte domeenoperatsioonide korral
- Arvesta domeenlisandeid järjepidevusega, kui palju domeene kord kordaga mappite
- Arvesta

### Monitööring
- Kontrollige regulaarselt Ultimate Multisite logud integreerimisvigu kohta
- Aseta monitoreerimine ebaõnnestatud domeenlisandeid jaoks
- Veenda, et SSL-tsete provisjonimine toimub õigesti
- Jälgige Enhance serveri võimejääki ja domeenlimite

## Lisareakondid

- **Enhance ametlik dokumentatsioon:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API dokumentatsioon:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance kogukonna foorum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub diskussioon:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite domeenmappimise juhend:** Vaata wiki lehte "How to Configure Domain Mapping v2"

## Tuge
Kui te kohtate probleeme:
1. Kontrollige ülaloleva probleemide lahendamise osakonda
2. Vaadake Ultimate Multisite logud
3. Konsulteerige [GitHub diskussioone](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktige Enhance tugepanekule paneelspesaseid küsimusi jaoks
5. Luue uue diskussiooni üksikasjaliste vigu logudega kogukonna abi saamiseks

## Nooted

* See, see. See.

See, see. See.

* See, see. See.

* See, see. See.

* See, see. See.

* See, see. See.
