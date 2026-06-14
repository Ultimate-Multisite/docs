---
title: Cloudways-integraatio
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways -Integraatio

## Yleiskatsaus
Cloudways on pilvipohjainen hallittu palvelin alusta, joka mahdollistaa WordPress-sivustojen käyttämisen monenlaisten pilvipalveluntarjoajien, kuten DigitalOcean, AWS ja Google Cloud, kautta. Tämä integraatio mahdollistaa automaattisen verkkotunnusten synkronoinnin sekä SSL-sertifikaattien hallinnan Ultimate Multisite:n ja Cloudwaysin välillä.

## Ominaisuudet
- Automaattinen verkkotunnusten synkronointi
- SSL-sertifikaattien hallinta
- Lisäverkkotunnusten tuki
- DNS-varmistus SSL-sertifikaatteille

## Vaatimukset
Seuraavat vakioiden on määritettävä tiedostoosi `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Valinnaisina voit myös määritellä:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'kommalta, eroteltuna listana, verkkotunnukset');
```

## Asetusohjeet

### 1. Hae Cloudwaysin API-tunnisteet
1. Kirjaudu sisään Cloudways-hallintapaneeliin
2. Mene kohtaan "Account" > "API Keys" (Tili > API-avaimet)
3. Luo API-avain, jos sinulla ei ole vielä yhtä
4. Kopioi sähköpostisi ja API-avaimesi

### 2. Hae palvelimen ja sovelluksen ID:t
1. Cloudwaysin hallintapaneelissa mene kohtaan "Servers" (Palvelimet)
2. Valitse se palvelin, johon WordPress multisite on sijoitettu
3. Palvelimen ID näkyy URL-osoitteessa: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Mene kohtaan "Applications" (Sovellukset) ja valitse WordPress-sovellus
5. Sovelluksen ID näkyy URL-osoitteessa: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Lisää vakioita wp-config.php:ään
Lisää seuraavat vakioiden tiedot tiedostoonsi `wp-config.php`:

```php
// Tähän lisätään yllä määritetyt WU_CLOUDWAYS_... -vakioiden määritykset
```

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Jos sinulla on lisä**ulkoisia** domeeneja (jotka eivät kuulu multisite-verkkoosi) jotka pitäisi aina pysyä Cloudwaysin aliaslistalla:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Älä sisällytä omaa verkkoasi wildcard-asetuksiin
Älä lisää `*.your-network.com` (tai minkään oman verkosi aladomeenikuvion) `WU_CLOUDWAYS_EXTRA_DOMAINS`-asetukseen. Katso [Tärkeää — wildcard SSL -ongelma](#important--wildcard-ssl-pitfall) alla, miksi tämä estää yksittäisten tenantien SSL-sertifikaattien myöntämisen.
:::

### 4. Aktivoi integraatio

1. WordPressin hallintapaneelissa siirry Ultimate Multisite > Settings (Asetukset).
2. Siirry "Domain Mapping" (Domeenimapping) -välilehdelle.
3. Vieritä alas kohtaan "Host Integrations" (Isännöintöintegraatiot).
4. Aktivoi Cloudways-integraatio.
5. Napsauta "Save Changes" (Tallenna muutokset).

## Miten se toimii

### Domeenien synkronointi

Kun domeeni mappataan Ultimate Multisite -järjestelmässä:

1. Integraatio hakee kaikki tällä hetkellä mappaukseen olevat domeenit.
2. Se lisää uuden domeenin listalle (sekä www-versio, jos sitä on mahdollista).
3. Se lähettää koko listan Cloudwaysiin API:n kautta.
4. Cloudways päivittää sovelluksesi domeenialikot (aliases).

Huomio: Cloudwaysin API vaatii koko domeenilistan lähettämisen joka kerta, ei vain yksittäisten domeenien lisäämistä tai poistamista.

### SSL-sertifikaattien hallinta

Domeenit synkronoiduttua:

1. Integraatio tarkistaa, mitkä domeenit ovat kelvollisia DNS-rekistereillä, jotka osoittavat palvelimesi puolelle.
2. Se lähettää pyynnön Cloudwaysille asettaakseen Let's Encrypt -SSL-sertifikaatteja kyseisille domaineille.
3. Cloudways hoitaa SSL-sertifikaattien myöntämisen ja asennuksen.

Integraatio pyytää aina **standardia** (ei villakarttaa) Let's Encrypt -sertifikaatteja Cloudwaysilta. Jos `WU_CLOUDWAYS_EXTRA_DOMAINS`-muuttujaan annetaan villakartta-malli (`*.`), etuliite `*.` poistetaan ennen SSL-pyyntöä – itse villakarttaa ei asenneta tällä integraatiolla. Villakarttasertifikaatin käyttö Cloudwaysissa vaatisi sen asennattamista manuaalisesti, mutta tämän tekeminen estää per-domeen Let's Encrypt -sertifikaattien myöntämisen kartoituihin omaanille hallittaville dominoille (katso alla olevaa ongelmaa).

## Lisadomaineet

`WU_CLOUDWAYS_EXTRA_DOMAINS`-vakio mahdollistaa lisädomaen määrittelyn, jotka pitäisi aina pysyä Cloudways-sovelluksen alias-listalla. Käytä sitä seuraaviin tarkoituksiin:

- Ulkoiset domainit, joita ei hallita Ultimate Multisite (esim. erillinen markkinointisivusto, joka jakaa saman Cloudways-sovelluksen).
- Parkat tai staging -domainit, jotka haluat pysyvän sovelluksen alias-listalla.

**Älä** käytä tätä vakioita omalle verkostollasi alalohkolle villakarttaa (esim. `*.your-network.com`). Katso villakarttasertifikaatin ongelmaa alla.

## Tärkeää — Villakarttasertifikaatin ongelma

Yhteinen virhe Cloudwaysin oletusasetusten seuraamisessa on lisätä villakartta, kuten `*.your-network.com`, `WU_CLOUDWAYS_EXTRA_DOMAINS`-muuttujaan tai asentaa manuaalisesti Cloudwaysille villakarttasertifikaatin kyseiselle villakartalle.

**Jos teet näin, Cloudways hylkää Let's Encrypt -sertifikaattien myöntämisen niille per-tenant -domaineille, joita Ultimate Multisite kartoittaa.** Cloudways korvaa aktiivisen SSL-sertifikaatin sovelluksessa joka kerta, ja olemassa oleva villakarttasertifikaatti sovelluksessa estää per-domeen Let's Encrypt -myöntämisen, johon integraatio luottaa.

### Suositeltu Cloudways SSL-asetus Ultimate Multisite -verkostolle

1. **SSL-sertifikaatti** - asenna standardin Let's Encrypt - sertifikaatti, joka kattaa vain `your-network.com` ja `www.your-network.com` -nimen – ei yleistä (wildcard).

2. Älä lisää `*.your-network.com` (tai mitään omaa verkkoasi alalohkoa) muuttujaan `WU_CLOUDWAYS_EXTRA_DOMAINS`. Säästä se vakio vain **ulkopuolisille** domaineille.

3. Luo per-tenant -alaluokan yleinen sertifikaatti vain **DNS**-tasolla (A-rekisteri, joka osoittaa Cloudways-palvelimen IP:hen `*.your-network.com` -nimen kohdalla), jotta alalohkot voidaan ratkaista. SSL-sertifikaatit yksittäisille mappatuille oma-alan dominoille myönnetään sitten automaattisesti integraation kautta Let's Encryptin toimesta.

Jos vuokralaisesi oma-alat ovat jumissa ilman SSL:ää, tarkista Cloudways SSL -välilehti. Jos siellä on aktiivinen yleinen sertifikaatti, poista se, myönnä uusi standardi Let's Encrypt -sertifikaatti vain pääverkko-domeenille ja poista kaikki yleiset merkinnät `WU_CLOUDWAYS_EXTRA_DOMAINS`-muuttujasta. Sen jälkeen käynnistä uudelleen domeenin mappauksen (tai odota seuraavaa) ja integraatio alkaa myöntää sertifikaatteja kerrallaan domainille.

## Ongelmanratkaisu

### API-yhteyden ongelmat
- Varmista, että sähköpostisi ja API-avaimesi ovat oikein.
- Tarkista, että palvelimen ja sovelluksen ID:t ovat oikein.
- Varmista, että Cloudways-tilillä on tarvittavat oikeudet.

### SSL-sertifika ongelmat

- Cloudways vaatii, että hallitsemillasi domaine on kelvollisia DNS-rekistereitä, jotka osoittavat palvelimellesi ennen kuin SSL-sertifikaatteja myydään.
- Integrointi tarkistaa DNS-rekisterit ennen SSL-sertifikaattien pyytämistä.
- Jos SSL-sertifikaatteja ei myydä, varmista, että domainisi osoittavat oikein palvelimesi IP-osoitteeseen.
- **Per-tenant custom domain pysyy ilman SSL:llä?** Tarkista Cloudways -sovelluksen SSL Certificate -välilehti. Jos aktiivinen on villin sertifikaatti (manuaalisesti asennettu tai kattava `*.your-network.com`), Cloudways ei myy Let's Encrypt -sertifikaatteja yksittäisille kartoitetuille custom domaineille. Vaihda se standardilla Let's Encrypt -sertifikaatilla, joka kattaa vain pääverkoston domainin (`your-network.com`, `www.your-network.com`) ja poista villit merkinnät `WU_CLOUDWAYS_EXTRA_DOMAINS`-muuttujasta. Sen jälkeen käynnistä uudelleen domain-kartoituksen (tai odota seuraavaa) ja integrointi pyytää per-domain sertifikaatteja.

### Domainia ei lisätty
- Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi.
- Varmista, että domain ei ole jo lisätty Cloudwaysiin.
- Varmista, että Cloudways-tilaasi tukee lisäämiäsi domainien määrää.
