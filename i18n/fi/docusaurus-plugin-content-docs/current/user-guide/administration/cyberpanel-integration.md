---
title: CyberPanel -integraatio
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel -Integraatio

Tämä opas selittää, miten konfiguroidaan Ultimate Multisite CyberPanel -integraatio niin, että verkossasi kartoitettuja domeeneja lisätään (ja poistetaan) automaattisesti virtuaalipalvelimiksi CyberPanelissa, valinnaisella auto-SSL-proviisoinnilla Let's Encryptin kautta.

## Mitä se tekee

- Kun domeeni kartoitetaan Ultimate Multisite -järjestelmässä, integraatio kutsuu CyberPanel API:ta luodakseen kyseiselle domeenille virtuaalipalvelimen (virtual host).
- Kun domeenin kartoitus poistetaan, integraatio kutsuu API:ta poistaakseen vastaavan virtuaalipalvelimen.
- Jos auto-SSL on käytössä, integraatio käynnistää Let's Encrypt -sertifikaatin myöntämisen välittömästi virtuaalipalvelimen luomisen jälkeen.
- Valinnaisvalikossa lisätään/poistetaan `www.` -alias riippuen "Auto-create www subdomain" -asetuksestasi Domain Mapping -asetuksissa.

## Edellytykset

- Käynnissä oleva CyberPanel-instanssi (suositeltava v2.3 tai uudempi) joka on saavutettavissa WordPress-palvelimeltasi.
- Olemassa oleva verkkosivusto CyberPanelissa, joka palvelee jo WordPress-verkosiin juuripalvelinta. Integraatio liittää uusia virtuaalipalvelimia tähän palvelimeen.
- CyberPanel API -pääsyn aktivoitu. Autentikointi tapahtuu käyttämällä CyberPanel-adminin käyttäjätunnusta ja salasanaa.
- DNS-rekisterisi kartoitetuille domaineille on oltava jo osoittanut palvelimesi IP-osoitteeseen ennen kuin auto-SSL voi myöntää kelvollisen sertifikaatin.

## Vaatimukset

Seuraavat vakioiden tulee määritellä `wp-config.php` -tiedostoonsi:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Valinnaisvalikossa voit myös määritellä:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Oletusar: true — saat lisenssin myynti (Let's Encrypt) SSL:n saa domainin luomisen jälkeen
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Oletus: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Käytetään SSL-sertifikaatin yhteydenottamiseen
```

## Asetusohjeet

### 1. Aktivoi CyberPanel API

1. Kirjaudu sisään CyberPanel -hallintapaneeliin ylläpitäjänä.
2. Mene kohtaan **Security** > **SSL** ja varmista, että SSL on aktiivinen itse CyberPanel-rajapinnalla (vaaditaan turvallisia API-kutsuja varten).
3. CyberPanel API on saatavilla oletuksena osoitteessa `https://your-server-ip:8090/api/`. Sen aktivoimiseksi ei tarvita lisäaskelia – se on jo käytössä ylläpitäjille oletuksena.

### 2. Lisää vakioita wp-config.php:ään

Lisää seuraavat vakioiden määritykset `wp-config.php`-tiedostoon ennen riviä `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Automaattisen SSL:n aktivoimiseksi (suositeltavaa):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktivoi integraatio

1. WordPressin verkko-adminissa (network admin) mene kohtaan **Ultimate Multisite** > **Settings**.
2. Siirry välilehdelle **Domain Mapping**.
3. Vieritä alas osioon **Host Integrations**.
4. Aktivoi **CyberPanel** -integraatio.
5. Napsauta **Save Changes** (Tallenna muutokset).

### 4. Tarkista yhteys

Käytä sisäänrakennettua yhteyden testausta asetusten ohjaimessa:

1. Mene mene **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** -sivulle.
2. Napsauta **Test Connection**.
3. Onnistumisviesti vahvistaa, että plugin pystyy tavoittamaan CyberPanel-API:n ja tunnistautumaan oikein.

## Miten se toimii

### Domain Mapping (Verkkotunnusten kartoitus)

Kun verkkotunnus kartoitetaan Ultimate Multisite -järjestelmässä:

1. Integraatio lähettää `POST`-pyynnön `/api/createWebsite`-reitille CyberPanel-hostillasi.
2. CyberPanel luo uuden virtuaalisen isännän kyseiselle verkkotunnukselle määritellyn paketissa.
3. Dokumentin juuri (document root) asetetaan osoittamaan WordPress-verkoston juurihakemistoa.
4. Kun verkkotunnuksen kartoitus poistetaan, integraatio kutsuu `/api/deleteWebsite`-reittiä virtuaalisen isännän siivoamiseksi.

### Auto-SSL (Automaattinen SSL)

Kun `WU_CYBERPANEL_AUTO_SSL` on asetettu `true`:

1. Virtuaalisen isännän luomisen jälkeen integraatio kutsuu `/api/issueSSL`-reittiä kyseiselle verkkotunnukselle.
2. CyberPanel pyytää Let's Encrypt -sertifikaattia ACME HTTP-01 -haasteella.
3. Sertifikaatti uusitaan automaattisesti ennen vanhentumispäivää CyberPanelin toimesta.

> **Tärkeää:** DNS:n on levinnyt kokonaan palvelimesi IP-osoitteeseen ennen kuin Let's Encrypt voi validoida verkkotunnuksen. Jos SSL-sertifikaatin myöntäminen epäonnistuu heti kartoituksen jälkeen, odota DNS:n leviämistä ja käynnistä uudelleen SSL CyberPanelin hallintapaneelista kohdasta **SSL** > **Manage SSL**.

### www Subdomain (www-aluekunta)

Jos **Auto-create www subdomain** on käytössä Domain Mapping -asetuksissasi, integraatio luo myös virtuaalisen isännän aliasin `www.<domain>` -ille ja kun auto-SSL on päällä, se myöntää sertifikaatin, joka kattaa sekä perusverkkotunnuksen (apex) että www-muotoiset variantit.

### Email Forwarders (Sähköpostin eteenpäinviestintä)

Kun [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) -lisäosan aktivoimisen jälkeen CyberPanel voi tarjota asiakkaille sähköpostin eteenpäinlähetyspalvelimia. Nämä palvelimet ohjaavat viestejä tietystä verkkotunnuksesta toiseen postilaatikkoon ilman, että luodaan koko postilaatikkoa – mikä on hyödyllistä tällaisille alikuvauksille kuten `info@customer-domain.test` tai `support@customer-domain.test`.

Asiakkaiden eteenpäinlähetyspalvelimien aktivoimiseen ennen niiden käyttöönottoa:

1. Varmista, että yllä olevat CyberPanel-vakioasetukset on konfiguroitu ja yhteyskoe onnistuu.
2. Aktivoi CyberPanel -sähköpostinhjälki (email provider) Emails -lisäosan asetuksissa.
3. Varmista, että asiakkaan verkkotunnus on jo olemassa CyberPanelissa ennen eteenpäinlähetyspalvelimen luomista.
4. Luo testitreeni ja lähetä viesti sen kautta ennen ominaisuuden tarjoamista tuotantokokonaisuuksille (production plans).

Jos palvelimen luominen epäonnistuu, tarkista ensin Ultimate Multisite -aktiivisuuslogit, ja varmista sitten CyberPanelissa, että lähdeverkkotunnus on olemassa ja että API-käyttäjällä on sähköpostinhallintaluvat.

## Konfiguraatiota koskeva viittaus

| Vakio (Constant) | Vaadittu | Oletusarvo | Kuvaus |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Kyllä | — | Täysi URL-osoite CyberPanel-instanssillesi mukaan, sisältäen portin, esim. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Kyllä | — | CyberPanel-adminin käyttäjätunnus |
| `WU_CYBERPANEL_PASSWORD` | Kyllä | — | CyberPanel-adminin salasana |
| `WU_CYBERPANEL_PACKAGE` | Kyllä | `Default` | CyberPanel-hostauspaketti, joka määritetään uusille virtuaalisille isännöinnille |
| `WU_CYBERPANEL_AUTO_SSL` | Ei | `true` | Let's Encrypt -SSL-sertifikaatin myöntäminen verkkotunnuksen luomisen jälkeen |
| `WU_CYBERPANEL_PHP_VERSION` | Ei | `PHP 8.2` | PHP-versio uusille virtuaalisille isännöinnille (täytyy täsmätä CyberPanelissa asennettuun versioon) |
| `WU_CYBERPANEL_EMAIL` | Ei | — | Sähköpostiosoite SSL-sertifikaatin rekisteröintiin yhteydenottoon |

## Tärkeät huomiot

CyberPanelin API käyttää istuntoon perustuvaa token-autentikointia. Integrointi hoitaa tokenin hankinnan automaattisesti jokaisen API-kutsun yhteydessä.
Sinulla on oltava oikeudet luoda ja poistaa verkkosivustoja CyberPanel-adminitililläsi.
CyberPanel suoritetaan oletuksena portilla `8090`. Jos palvelimessasi on käytössä firewall, varmista, että tämä portti on saavutettavissa WordPress-sovelluspalvelimelta.
Integrointi ei hallitse DNS-rekistereitä. Sinun on ohjattava domeenin DNS-asetukset palvelimen IP-osoitteeseen ennen kuin kartoitat domeenin Ultimate Multisite -järjestelmässä.
Jos käytät OpenLiteSpeedia (OLS), virtuaalisten hostien muutosten jälkeen käynnistys tapahtuu automaattisesti sulavasti. Ei tarvita manuaalista toimintaa.

## Ongelmanratkaisu

### API-yhteyden hylätty

- Tarkista, onko portti `8090` avoin palvelimen firewallissa.
- Varmista, että `WU_CYBERPANEL_HOST`-arvo sisältää oikean protokollan (`https://`) ja portin.
- Tarkista, että CyberPanel-SSL-sertifikaattesi on voimassa; itse allekirjoitetut sertifikaatit voivat aiheuttaa TLS-vahvistusvirheitä. Aseta `WU_CYBERPANEL_VERIFY_SSL` arvoksi `false` vain luotetuissa yksityisverkkoympäristöissä.

### Autentikointivirheet

- Varmista, että `WU_CYBERPANEL_USERNAME`- ja `WU_CYBERPANEL_PASSWORD`-tiedot ovat oikein kirjautumalla suoraan CyberPaneliin.
- CyberPanel lukitsee tilin toistuvien epäonnistuneiden kirjautumistyritysten jälkeen. Tarkista **Security** > **Brute Force Monitor** -osio CyberPanelissa, jos lukitukset tapahtuvat.

### Domenia ei luotu

- Tarkista Ultimate Multisite -aktiologista (**Ultimate Multisite** > **Activity Logs**) API-virheilmoituksia varten.
- Varmista, että `WU_CYBERPANEL_PACKAGE`-muuttujan määrittelemä paketti on olemassa CyberPanelissa (**Packages** > **List Packages**).
- Varmista, että domeeni ei ole jo rekisteröity verkkosivustona CyberPanelissa – kaksoiskasvusto luominen antaa virheen.

### SSL-sertifikaattia ei myönnetty

Varmista, että DNS on täysin levittäytynyt: `dig +short your-domain.com` pitäisi palauttaa palvelimesi IP-osoitteen.
Let's Encrypt asettaa rajoituksia pyyntien määrälle. Jos olet juuri myöntänyt useita sertifikaatteja samalle domeenille, odota ennen uudelleenyritystä.
Tarkista CyberPanelin SSL-logit kohdasta **Logs** > **Error Logs** saadaksesi yksityiskohtia sertifikaattien myöntämisvirheistä.
Vaihtoehtona voit myöntää SSL:n manuaalisesti CyberPanelista: **SSL** > **Manage SSL** > valitse domeeni > **Issue SSL**.

## Viittaukset

- CyberPanel API -dokumentaatio: https://docs.cyberpanel.net/docs/category/api
- CyberPanelin SSL-hallinta: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encryptin rajoitukset: https://letsencrypt.org/docs/rate-limits/
