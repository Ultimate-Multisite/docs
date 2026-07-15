---
title: Paranna hallintapaneelin integrointia
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Hallitse hallintapaneelin integrointi

## Yleiskatsaus {#overview}
Enhance on moderni hallintapaneeli, joka tarjoaa tehokkaita isännöinnin automaatiota ja hallintamahdollisuuksia. Tämä integrointi mahdollistaa verkkotunnusten automaattisen synkronoinnin sekä SSL-sertifikaattien hallinnan Ultimate Multisite -järjestelmän ja Enhance Control Panel -palvelimen välillä.

**Aiheeseen liittyvä keskustelu:** Katso [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) saadaksesi yhteisön vinkkejä ja lisätietoja.

## Ominaisuudet {#features}
- Automatiivinen verkkotunnusten synkronointi, kun verkkotunnukset on kartoitettu Ultimate Multisite -järjestelmään
- Automatiivinen SSL-sertifikaattien tarjoaminen LetsEncryptin kautta DNS:n ratkaisemisen yhteydessä
- Alavalikkojen tuki verkkoille, jotka toimivat alavalikkomuodossa
- Verkkotunnusten poisto kartoitusten poistamisen yhteydessä
- Yhteyden testaus API-tietojen varmistamiseksi

## Vaatimukset {#requirements}

### Järjestelmävaatimukset {#system-requirements}
- Enhance Control Panel asennettuna ja käytettävissä
- WordPress Multisite -asennus isännöitynä tai yhdistetty Enhance-palvelimeen
- Apache web server (Enhance tukee tällä hetkellä Apache-konfiguraatioita; LiteSpeed Enterprise on saatavilla alennettuun hintaan)

### API-pääsy {#api-access}
Sinulla on oltava hallintajärjestelmän pääsy Enhance Control Panel -palvelimeen API-tunnusten luomiseksi.

## API-tietojen hankkiminen {#getting-your-api-credentials}

### 1. Luo API-token {#1-create-an-api-token}

1. Kirjaudu sisään Enhance Control Panel -palvelimeen ylläpitäjänä
2. Napsauta **Settings** (Asetukset) -painiketta navigointivalikosta
3. Siirry kohtaan **Access Tokens** (Pääsy-tokenit)
4. Napsauta **Create Token** (Luo token)
5. Anna tokenille kuvaileva nimi (esim. "Ultimate Multisite Integration")
6. Myönnä rooli **System Administrator** (Järjestelmän ylläpitäjä)
7. Päivämäärälle vanhenemiseen:
   - Jätä tyhjä, jos haluat tokenin ikuisesti voimattoman
   - Tai aseta tietyn vanhentumispäivämäärän turvallisuuden vuoksi
8. Napsauta **Create** (Luo)

Olen luonut, ja sen jälkeen näet **Access Token** - ja **Organization ID**:n. **Tallenna nämä heti**, sillä tokenia näytetään vain kerran.

### 2. Hae Organisaatiotunniste (Organization ID) {#2-get-your-organization-id}

Organisaatiotunniste näkyy Access Tokens -sivulla sinisessä tietolaatikossa, jossa lukee "Org ID: {your_id}".

Organisaatiotunniste on UUID-muotoinen tunniste, joka näyttää tältä: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Voit myös löytää asiakkaan Organisaatiotunnisteen seuraavasti:
1. Mene **Customers** -sivulle
2. Napsauta **Manage customer** (Hallinnoi asiakasta) kyseisen asiakkaan kohdalla
3. Katso URL-osoitetta – Organisaatiotunniste on se kirjainyhdistelmä, joka seuraa `/customers/`-osaa.

### 3. Hae Palvelintitunniste (Server ID) {#3-get-your-server-id}

Palvelintunnisteen (tarvitaan domeenitoimintoihin) löytämiseksi:

1. Enhance Control Panel -paneelissa siirry **Servers** (Palvelimet) -osioon
2. Napsauta palvelinta, jossa WordPress-asennuksesi on käynnissä
3. Palvelintitunniste (UUID-muotoinen) näkyy URL-osoitteessa tai palvelimen tiedoissa
4. Vaihtoehtoisesti voit käyttää API:a palvelimien luettelointiin:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Palvelintunniste noudattaa UUID-muotoa: `00000000-0000-0000-0000-000000000000`

### 4. Hae API-osoite (API URL) {#4-get-your-api-url}

API-osoitteesi on Enhance Control Panel -osoitteesi, johon lisätään `/api/`:

```
https://your-enhance-panel.com/api/
```

**Tärkeää:** `/api/`-polku on pakollinen. Yleisiä virheitä ovat:
- Pelkkän domeenin käyttäminen ilman `/api/`-osaa
- HTTP-protokollan käyttö sen sijaan, että käytettäisiin HTTPS:ää (turvallisuuden vuoksi HTTPS on vaadittu)

## Konfiguraatio {#configuration}

### Tarvittavat vakio-muuttujat (Required Constants) {#required-constants}

Lisää seuraavat vakio-muuttujat `wp-config.php`-tiedostoonsi:

// Paranna hallinta-paneelin integraation parantaminen
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Asetukset integraation ohjaimella (Setup via Integration Wizard) {#setup-via-integration-wizard}

1. WordPressin hallintapaneelissa siirry **Ultimate Multisite** > **Asetukset** -sivulle
2. Siirry välilehdelle **Integraatiot** (Integrations)
3. Etsi **Enhance Control Panel Integration** ja napsauta **Konfiguroi** (Configuration)
4. Ohjaaja ohjaa sinua asennusprosessin läpi:
   - **Vaihe 1:** Johdanto ja ominaisuuksien yleiskatsaus
   - **Vaihe 2:** Syötä API-tunnisteesi (Token, API-osoite, Server ID)
   - **Vaihe 3:** Testaa yhteys
   - **Vaihe 4:** Tarkista ja aktivoi

Voit valita:
- Anna ohjaajan syöttää vakioiden automaattisesti `wp-config.php`-tiedostoonsi
- Kopioi vakioiden määritykset ja lisää ne manuaalisesti

## LisäWordPress-konfiguraatio {#additional-wordpress-configuration}

Yhteisön palautteen perusteella ([Keskustelu #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) saatat tarvita näiden lisäasetusten konfiguroimista:

### .htaccess -konfiguraatio {#htaccess-configuration}

Jos kohtaat ongelmia domeenien kartoituksessa (domain mapping):
1. Poista alkuperäinen Enhance `.htaccess` -tiedosto
2. Vaihda se standardilla WordPress Multisite `.htaccess` -tiedostolla

### Evästevakiot (Cookie Constants) {#cookie-constants}

Lisää nämä vakioiden määritykset `wp-config.php`-tiedostoon varmistaaksesi asianmukaisen evästehallinnan kartoitettujen domeenien välillä:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Miten se toimii {#how-it-works}

### Kun domeeni on kartoitettu (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. Käyttäjä yhdistää omaa verkkotunnusta Ultimate Multisiteen (tai uusi sivu luodaan alalohkon tavoin).
2. Integrointi lähettää POST-pyynnön Enhance'n API:lle: `/servers/{server_id}/domains`
3. Enhance lisää alan palvelinasetuksiisi.
4. Kun DNS ratkaisee osoitteen omaan palvelimeesi, Enhance tarjoaa automaattisesti SSL-sertifikaatin LetsEncryptin kautta.
5. Tunnus on aktiivinen HTTPS:llä.

### Kun aluetta poistetaan {#when-a-domain-is-removed}

1. Aluekartta (domain mapping) poistetaan Ultimate Multisitesta.
2. Integrointi kysyy Enhanceelta alan ID:n löytämiseksi.
3. DELETE-pyyntö lähetetään osoitteeseen: `/servers/{server_id}/domains/{domain_id}`
4. Enhance poistaa alan omaa palvelinasetuksistaan.

### DNS- ja SSL-tarkistukset {#dns-and-ssl-checking}

Ultimate Multisite sisältää sisäänrakennetun DNS- ja SSL-tarkistuksen:
- Voit määrittää tarkistusvälit ajan **Domain Mapping Settings** -osiossa (oletusarvo: 300 sekuntia/5 minuuttia).
- Järjestelmä varmistaa DNS-levityksen ennen kuin aluetta merkitään aktiiviseksi.
- SSL-sertifikaatin kelpoisuus tarkistetaan automaattisesti.
- Enhance hoitaa SSL-tarjoamisen automaattisesti, joten manuaalista SSL-konfiguraatiota ei tarvita.

## Asetuksen vahvistaminen {#verifying-setup}

### Yhteyden testaus {#test-the-connection}

1. Integrointikurssissa käytä **Test Connection** -vaihetta.
2. Plugin yrittää luetella aluetta palvelimellasi.
3. Onnistumisviesti vahvistaa:
   - API-tiedot ovat oikein
   - API-osoite on saavutettavissa
   - Palvelin-ID on kelvollinen
   - Mahdollisuudet on asetettu asianmukaisesti

### Alan kartoittamisen jälkeen {#after-mapping-a-domain}

1. Kartta testialueella Ultimate Multisiteen.
2. Tarkista Ultimate Multisiten logit (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Vahvista Enhance Control Panelissa, että alue on lisätty:
   - Mene kohtaan **Servers** > **Your Server** > **Domains**
   - Uusi alue pitäisi ilmestyä listalle
4. Kun DNS levittyy, varmista, että SSL on tarjottu automaattisesti

## Ongelmanratkaisu {#troubleshooting}

### API-yhteyden ongelmat {#api-connection-issues}

**Virheilmoitus: "Failed to connect to Enhance API" (Yhteys Enhance API:hin epäonnistui)**
- Tarkista, että `WU_ENHANCE_API_URL` päättyy `/api/`-merkkiin.
- Varmista, että käytät HTTPS-protokollaa eikä HTTP:tä.
- Tarkista, että Enhance-paneeli on saavutettavissa WordPress-palvelimeltasi.
- Tarkista, ettei mitään tulipalomuuri (firewall) estä yhteyttä.

**Virheilmoitus: "Enhance API Token not found" (Enhance API-tokea ei löytynyt)**
- Varmista, että `WU_ENHANCE_API_TOKEN` on määritelty `wp-config.php`-tiedostoon.
- Tarkista, ettei token ole poistettu tai vanhentunut Enhance-palvelussa.
- Tarkista virheet tokenin arvossa.

**Virheilmoitus: "Server ID is not configured" (Palvelinumero ei ole määritetty)**
- Varmista, että `WU_ENHANCE_SERVER_ID` on määritelty `wp-config.php`-tiedostoon.
- Varmista, että Server ID on kelvollinen UUID-muoto.
- Vahvista, että palvelin on olemassa Enhance-paneelissasi.

### Alueen (Domain) lisääminen ei onnistunut {#domain-not-added}

**Tarkista logit:**
1. Mene **Ultimate Multisite** > **Logs** -sivulle.
2. Suodata hakutulokset termillä **integration-enhance**.
3. Etsi virheilmoituksia, jotka osoittavat ongelman syyn.

**Yleisimmät syyt:**
- Virheellinen verkkotunnuksen (domain) muoto.
- Alue on jo olemassa Enhance-palvelussa.
- Riittämättömät API-oikeudet (varmista, että tokenilla on System Administrator -rooli).
- Server ID ei vastaa todellista palvelinta Enhancessa.

### SSL-sertifikaatin ongelmat {#ssl-certificate-issues}

**SSL:n luominen epäonnistuu:**
- Varmista, että DNS osoittaa palvelimen IP-osoitteeseen.
- Tarkista, että verkkotunnus ratkeaa oikein: `nslookup yourdomain.com`
- Enhance vaatii DNS:n ratkeavan ennen kuin se voi luoda SSL-sertifikaattia.
- SSL-sertifikaatin luominen kestää tyypillisesti 5–10 minuuttia DNS-levityksen jälkeen.
- Tarkista Enhancen hallintapaneelin logit SSL:iin liittyvistä virheistä.

**Manuaalinen SSL-ongelmanratkaisu Enhance-palvelussa:**
1. Mene **Servers** > **Your Server** > **Domains** -sivulle.
2. Etsi verkkotunnuksesi ja tarkista sen SSL-tila.
3. Voit käynnistää SSL-luomisen manuaalisesti, jos tarve on.

### DNS-tarkistusväli {#dns-check-interval}

Jos nimet tai SSL-sertifikaatit aktivoituvat liian hitaasti:
1. Mene **Ultimate Multisite** > **Settings** > **Domain Mapping** -asetuksiin.
2. Etsi asetusta **DNS Check Interval**.
3. Säädä arvo oletusarvosta 300 sekuntia pienempään arvoon (minimiarvo: 10 sekuntia).
4. **Huom:** Lyhyemmät väliajat tarkoittavat useampia tarkistuksia, mutta suurempaa palvelinrasitusta.

### Autentikointivirheet {#authentication-errors}

**HTTP 401/403 -virheet:**
- Uudelleenkäynnistä API-tokeni Enhanceissa.
- Varmista, että tokenilla on **System Administrator** -rooli.
- Tarkista, ettet ole käyttänyt vanhentunutta tokenia.
- Varmista, että käytät oikeaa Organization ID:tä (vaikka se ei yleensä ole pakollinen URL-osoitteessa).

### Logien analysointi {#log-analysis}

Ota käyttöön yksityiskohtainen loggaus:
```php
// Lisää wp-config.php -tiedostoon lisätty parempaan virheenkorjaukseen
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Tarkista logit seuraavista paikoista:
- Ultimate Multisite -logit: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panelin logit: Saatavilla Enhance-käyttöliittymän hallinnassa

## API-viittaukset {#api-reference}

### Autentikointi {#authentication}
Kaikki API-pyynnöt käyttävät Bearer token -autentikointia:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Yleisesti käytetyt päätepisteet (Endpoints) {#common-endpoints-used}

**List Servers:**
```
GET /servers
```

**List Domains on a Server:**
```
GET /servers/{server_id}/domains
```

**Lisää Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Poista Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Täydellinen API-dokumentaatio {#full-api-documentation}
Täydellinen API-dokumentaatio: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Paras käytäntö {#best-practices}

### Turvallisuus {#security}
- **Älä koskaan tallenna API-tokeutuksia versiohallintaan**
- Tallennustapa on `wp-config.php`, jota ei tulisi lisätä Git-repositorioon
- Käytä tukea, jolla on asianmukaiset oikeudet (System Administrator koko integraatiota varten)
- Aseta tokenien vanhentumispäivämäärät tuotantoympäristöihin
- Vaihda tokeneja säännöllisesti

### Suorituskyky {#performance}
- Käytä oletustietä DNS-tarkistusväli (300 sekuntia) välttääksesi liiallisia API-kutsuja
- Valvo Enhance-palvelimen resursseja, kun suoritetaan laajoja verkkotunnusten operaatioita
- Harkitse verkkotunnusten lisäämisen ajoittamista, jos mappataan monia verkkotunnuksia kerralla

### Valvonta {#monitoring}
- Tarkista säännöllisesti Ultimate Multisite -logit integraatiovirheiden tarkistamiseksi
- Aseta valvontajärjestelmä epäonnistuneille verkkotunnusten lisääksille
- Varmista, että SSL-sertifikaatit luodaan oikein
- Seuraa Enhance-palvelimen kapasiteettia ja verkkotunnusten rajoja

## Lisäresurssit {#additional-resources}

- **Enhance virallinen dokumentaatio:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API-dokumentaatio:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance yhteisöfoorumi:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub-keskustelu:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite verkkotunnusten mappausopas:** Katso wiki-sivua "How to Configure Domain Mapping v2"

## Tuki {#support}

Jos kohtaat ongelmia:
1. Tarkista yllä oleva Ongelmanratkaisu-osio
2. Tarkista Ultimate Multisite -logit
3. Ota yhteyttä [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) -keskusteluihin
4. Ota yhteyttä Enhanceen tukeen paneeliin liittyvissä ongelmissa
5. Luo uusi keskustelu yksityiskohtaisilla virhesivulla yhteisön avun saamiseksi

## Huomiot {#notes}

Tämä integraatio käsittelee vain domeenialiasia; Enhance hallinnoi SSL:iä automaattisesti.
Integraatio tukee sekä räätälöityjen domeenin mappauksia että aladomeenipohjaisia sivustoja.
Automaattisen www-aladomeenin luominen voi konfiguroida Domain Mapping -asetuksissa.
Enhance tukee tällä hetkellä Apache-konfiguraatioita (LiteSpeed Enterprise saatavilla).
Domeenin poistaminen Ultimate Multisite -järjestelmästä poistaa domeenin Enhance-integraatiosta, mutta se ei välttämättä poista liitettyjä SSL-sertifikaatteja välittömästi.
