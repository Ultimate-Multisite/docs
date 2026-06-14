---
title: Cloudways integreerimine
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integreerimine

## Üldinekuvur
Cloudways on juhtimata hooldatud pilvehostingu platvorm on, mis võimaldab teil WordPress-siti neid erinevate pilvepakenduste nagu DigitalOcean, AWS, Google Cloud ja veel paljuega. See integreerimine võimaldab automaatselt domeenide sünkroonimist ja SSL-tsete sertifikaatide haldamist Ultimate Multisite'i ja Cloudways' vahel.

## Funktsioonid
- Automootne domeenide sünkroonimine
- SSL-tsete sertifikaadide haldamine
- Lisadomeenide toetmine
- SSL-tsete sertifikaadide DNS-validatsioon

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'komma,eritatud,domaanide,nimekiri');
```

## Seadistused

### 1. Päästa oma Cloudways API kinnitused

1. Logi sisse oma Cloudways dashboardi
2. Minna "Account" > "API Keys" (Konto > API-kinnitused)
3. Loo API-kinnitus, kui teil pole seda juba
4. Kopya oma e-posti ja API-kinnituse

### 2. Päästa oma serveri ja rakenduse ID-d

1. Cloudways dashboardis minna "Servers" (Serverid)
2. Vali serveri, kus on hostitud teie WordPress multisite
3. Serveri ID näed URL-is: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Minna "Applications" (Rakendused) ja vali oma WordPress rakenduse
5. Rakenduse ID näed URL-is: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Lisage konstantsid wp-config.php'le

Lisage järgmised konstantsid oma `wp-config.php` failile:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Kui teil on lisaks **välise** domeene (multisite'i võrku välja arvatud), mida tuleb alati hoida Cloudways alias-listil:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Lõpule jääge oma võrku wildcard'id ära
Ära lisage `*.your-network.com` (või konkreetset alsuboomi skeemi teie oma võrkuse jaoks) `WU_CLOUDWAYS_EXTRA_DOMAINS`-i sisse. Näha all [Oluline — wildcard SSL probleem](#important--wildcard-ssl-pitfall), miks see tagab per-tenant SSL sertifikaadide väljendamise.
:::

### 4. Lülitage integreerimine sisse

1. WordPressi administraatoris minud Ultimate Multisite > Settings'i juurde.
2. Minumise "Domain Mapping" tabile.
3. Skroolipõõs endale "Host Integrations".
4. Lülitage Cloudways integraati sisse.
5. Klõpsake "Save Changes" (Muudeta).

## Kuidas see toimib

### Domeenid synkronimine

Kui domeen on Ultimate Multisite'is määratud:

1. Integreerimine võtab kõik praegu mappitud domeenid.
2. Lisatakse uue domeeni listile (samuti www-versiooni, kui see on sobiv).
3. Täielik lista lähetatakse Cloudways'ile API abil.
4. Cloudways uuendab teie rakenduse domeenaliasid.

Märkus: Cloudways API nõuab iga kord täieliku domeenilista laenamist, mitte ainult üksinda domeenide lisamist või eemaldamist.

### SSL-sertifikaadi haldamine

Domeenid synkronimise pärast seda:

1. Integreerimine kontrollib, millised domeenid on validne DNS-registreid, mis viitavad teie serverile.
2. Lähetatakse Cloudways'ile küsimuse selle kohta, et installida Let's Encrypt SSL-sertifikaade need domeenide jaoks.
3. Cloudways haldab SSL-sertifikaadide väljastamisega ja paigaldamisega.

Kogumise protsess palub alati **standardseid** (ei-wildcard) Let's Encrypt sertifikaate Cloudwaysist. Kui `WU_CLOUDWAYS_EXTRA_DOMAINS`-i sisse on antud wildcard-näite, eesmine `*.` on eemaldatud SSL-vaatamise enne seda – selle wildcardit ei paista see integreerimine. Wildcard-sertifikaati kasutamiseks Cloudwaysil pead seda manuaalselt paigaldama, kuid selle tegemine blokeerib per-domain Let's Encrypt sertifikaatide väljundida mappatud kasutajakohaste jaoks (vaata alla olevaa probleem).

## Lisakohjad

`WU_CLOUDWAYS_EXTRA_DOMAINS`-konstants võimaldab teil määrata lisakohjaid, mida tuleb alati hoida Cloudwaysi rakenduse alias-listil. Kasutage seda:

Ekskordne domeenid, mida Ultimate Multisite ei halda (nt eraldi asutatud turundusveebile, mis kasutab sama Cloudways rakendust)

Parkitud või staging domeenid, mida soovite lisada application alias listile

**Ärge** kasutage seda konstantsi oma võrku subdomain wildcard jaoks
(nt `*.your-network.com`). Näha alla olevat wildcard SSL probleemide kohta.

## Oluline — Wildcard SSL probleem

Üldiselt tekitatud viga Cloudways' poolt määratletud seadistuse järgimisel on lisada wildcard nagu
`*.your-network.com` `WU_CLOUDWAYS_EXTRA_DOMAINS`-i sisse, või manuaalselt installida Cloudways wildcard SSL sertifikaadi selle wildcard jaoks.

**Kui te seda teete, keeldub Cloudways antuda Let's Encrypt sertifikaate sellele per-tenanti domeenide jaoks, mida Ultimate Multisite mappab.** Cloudways asendab aktiivset SSL-sertifikaati rakendusele iga kord, ja eelnevalt oleva wildcard-sertifikaat rakendusel blokeerib per-domeeni Let's Encrypt sertifikaate antmist, millele integreerimine on sõltuv.

### soovitatav Cloudways SSL-seadistus Ultimate Multisite võrku jaoks

1. **SSL Sertifikaat** tabis Cloudways-programmil installige **standardset Let's Encrypt sertifikaat**, mis katab ainult `your-network.com` ja `www.your-network.com`-i. — mitte wildcard (näiteks `*.your-network.com`).
2. Ära lisa `*.your-network.com` (või millekonda oma võrku subdomääne) `WU_CLOUDWAYS_EXTRA_DOMAINS`-i sisuna. Hoidke seda konstantsed väärtusi ainult **välise** domeenide jaoks.
3. Luue per-tenant subdomääni wildcard ainult **DNS** tasemel (A-registri `*.your-network.com` Cloudways-serveri IP-le), seetõttu saab subdomääneid resolveeritud. Individuaalsete märgitud domeenide SSL sertifikaadid antakse siis automaatselt integratsiooni poolt Let's Encrypti.

Kui teie ühire domeenid on SSL-iga probleem, kontrollige Cloudways SSL tabist. Kui seal on aktiivne wildcard sertifikaat, eemaldage see, uusige standard Let's Encrypt sertifikaat ainult peamise võrku domeenile ja eemaldage kõik wildcardi sisse `WU_CLOUDWAYS_EXTRA_DOMAINS`. Seejärel käivitage uuesti domeenimappimist (või oodke järgmist) ja integreerimine alustab sertifikaatide uusissitamist iga domeeni jaoks.

## Probleemide lahendamine

### API ühenduse probleemid
- Kontrollige, kas teie e-posti aadress ja API key on õigud
- Kontrollige, kas teie serveri ja rakenduse ID-d on õigud
- Veenduge, et teie Cloudways konto on vajalikud õigused

### SSL sertifikaadi probleemid
- Cloudways nõuab, et domeenide peapasutus (DNS) rekordid oleva serveri juurde viitavad on validse SSL sertifikaadide küsimuse esitamiseks.
- Integreerimine valideerib DNS rekorde enne SSL sertifikaadide küsimust esitamist.
- Kui SSL sertifikaade ei antakse, kontrollige, et teie domeenid on õigesti serveri IP aadressile viitavad.

**Kliendile spetsiifilised domeenid ilma SSL-ga?** Kontrollige Cloudways rakenduse SSL Sertifikaatit. Kui aktiivne on wildcard sertifikaat (manuaalselt paigaldatud või katab `*.your-network.com`), ei küpsata Cloudways Let's Encrypt sertifikaate eriti mappitud domeenide jaoks. Asendage selle standardiga Let's Encrypt sertifikatsiooniga, mis katab ainult peamise võrkooma domeeneid (`your-network.com`, `www.your-network.com`) ja eemaldage kõik wildcardi sisse `WU_CLOUDWAYS_EXTRA_DOMAINS` välja. Seejärel käivitage domeeni mappimise uuesti (või oodke järgmist) ja integreerimine koordineerib eriti domeenide sertifikaate.

### Domeen ei lisatud

* Kontrollige Ultimate Multisite logud vigu või teaduse sõnumite osas.
* Veenduge, et domeen ei ole juba Cloudwaysis lisatud.
* Varmendage, et teie Cloudwaysi plaan toetab seda domeenide määr vett, mida te lisate.
