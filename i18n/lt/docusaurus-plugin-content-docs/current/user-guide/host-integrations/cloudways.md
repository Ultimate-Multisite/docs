---
title: Cloudways integracija
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integracija {#cloudways-integration}

## Vaizda informacija {#overview}
Cloudways yra išlaikoma sklaidų (managed cloud hosting) platforma, kuri leidžia jums įdėti WordPress svetainius įvairiems sklaidų tiekėjams, tokius kaip DigitalOcean, AWS, Google Cloud ir kitais. Ši integracija leido automatinį domenų sinigrinimą ir SSL sertifikatų valdymą tarp Ultimate Multisite ir Cloudways.

## Funkcijos {#features}
- Automatinis domenų sinigrinimas
- SSL sertifikatų valdymas
- Pagalbanka papildomoms domenams
- DNS validacinis procesas SSL sertifikatų uchun

## Reikalavimai {#requirements}
Šie konstanta turi būti nurodytos jūsų `wp-config.php` failu:

```php
define('WU_CLOUDWAYS_EMAIL', 'jūsų_cloudways_el.pašto_adresas');
define('WU_CLOUDWAYS_API_KEY', 'jūsų_api_kiltis');
define('WU_CLOUDWAYS_SERVER_ID', 'jūsų_serverio_id');
define('WU_CLOUDWAYS_APP_ID', 'jūsų_programos_id');
```

Valstybinai galite nurodyti:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'komoje, suviršytu, domenų_sutiklis');
```

## Įrengimo instrukcijos {#setup-instructions}

### 1. Gaukite savo Cloudways API kreditiuosius duomenis {#1-get-your-cloudways-api-credentials}

1. Prisijunkite prie jūsų Cloudways dashboardo
2. Eikite į "Account" > "API Keys" (El. sąskaita > API kiltys)
3. Suprankite API kiltį, jei turite jos ne
4. Kopijuokite savo el. pašto adresą ir API kiltį

### 2. Gaukite savo serverio ir programos ID {#2-get-your-server-and-application-ids}

1. Jūsų Cloudways dashboardoje eikite į "Servers" (Serveriai)
2. Pasirinkite tą serverį, kur hostuojama jūsų WordPress multisite
3. Serverio ID yra matomas URL adresyje: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Eikite į "Applications" (Programos) ir pasirinkite savo WordPress programėlę
5. Programos ID yra matomas URL adresyje: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Įdėkite konstantas į wp-config.php {#3-add-constants-to-wp-configphp}

Įdėkite šiuose konstanta į jūsų `wp-config.php` failą:

```php
define('WU_CLOUDWAYS_EMAIL', 'twojaki_adresas_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'kly_api_kly');
define('WU_CLOUDWAYS_SERVER_ID', 'id_servera');
define('WU_CLOUDWAYS_APP_ID', 'id_aplikacijos');
```

Jei turite papildomus **išvengimo** domenus (nepriklausomai nuo jūsų multisite tinklo), kuriuos visada reikia laikyti Cloudways aliasų sąraše:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Neįdėkite savo tinklo wildcard
**Neįdėkite** `*.jūsų-tinklas.com` (arba bet kokį jūsų tinklo subdomainų schemą) į
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Priešrinkite [Svarbu — wildcard SSL problema](#important--wildcard-ssl-pitfall) below, kad suprastumėte, kodėl tai nesureikia pertenant SSL sertifikatų išdavimo.
:::

### 4. Įjunkite integraciją {#4-enable-the-integration}

1. Jūsų WordPress admin panel'yje eikite į Ultimate Multisite > Settings
2. Navig uokite į "Domain Mapping" (Domeno netyvimo) tabą
3. Pasirinkite "Host Integrations" (Host integracijos) sekciją
4. Įjunkite Cloudways integraciją
5. Spauskite "Save Changes" (Išsaugoti pakeitimus)

## Kaip tai veikia {#how-it-works}

### Domenų sinigrinimas (Domain Syncing) {#domain-syncing}

Kai domenai netyvomi Ultimate Multisite:

1. Integracija atsisiunčia visus šiuo metu netyvomus domenus
2. Ji pridėja naują domeną prie sąrašo (jei ta yra www versija, ji taip pat pridėta)
3. Ji siunčia visą sąrašą Cloudways per API
4. Cloudways atnaujina jūsų aplikacijos domenų aliasus

Paminėjimas: Cloudways API reikalauja siuntioti visą domenų sąrašą kiekvieną kartą, o ne tik pridėti ar pašalinti individualius domenus.

### SSL sertifikatų valdymas (SSL Certificate Management) {#ssl-certificate-management}

Po domainų sinigrinimo:

1. Integracija patikrina, kurie domenai turi veiksmus DNS į jūsų serverį
2. Ji siunčia prašymą Cloudways instaluoti Let's Encrypt SSL sertifikatus tiems domenams
3. Cloudways atsakingi už SSL sertifikatų išdavimą ir instalavimą

Integracija visada **standardinius** (newildcard) Let's Encrypt sertifikatų nuo Cloudways. Jei `WU_CLOUDWAYS_EXTRA_DOMAINS` laiko pateikiama wildcard pattern, pirmasis `*.` yra pašalinamas prieš SSL reikalavimą – ta wildcard nenaudojama šioje integracijoje. Kad naudoti wildcard sertifikatą Cloudways, turėtumėte jį įdaryti rankiniu būdu, bet tai blokuoja Let's Encrypt išdavimą po domenų (pateikta problema below).

## Papildomi Domenai {#extra-domains}

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` leidžia nurodyti papildomus **išvardintus** domenus, kuriuos turėtų būti visada laikomi Cloudways programos aliasų sąraše. Naudokite ją:

- Išvardintus domenus, kuriuos nevaldosi Ultimate Multisite (pvz., atskiria marketingo svetainę, kurios dalia tą pačią Cloudways programą).
- Parkuotus ar staging domenus, kuriuos norite laikyti aliasų sąraše.

**Ne naudokite šito konstanto savo tinklo subdomain wildcard` (pvz., `*.your-network.com`). Pakeičkite saugumo problema apie wildcard SSL below.**

## Svarbu — Wildcard SSL Problema {#important--wildcard-ssl-pitfall}

Dažnai klaida, laikydamiesi Cloudways standartinio nustatymo, yra pridėti wildcardą, pavyzdžiui, `*.your-network.com`, prie `WU_CLOUDWAYS_EXTRA_DOMAINS` arba rankiniu būdu įdaryti Cloudways wildcard SSL sertifikatą šiam wildcardui.

**Jei tai padarysite, Cloudways neatsisakys išduoti Let's Encrypt sertifikatų po domenams, kuriuos Ultimate Multisite mapuoja.** Cloudways pakeičia veikiančią SSL sertifikatą programoje kiekvienai kartui, o pre-eksistuoja wildcardas sertifikatas programoje blokuoja po domenų Let's Encrypt išdavimą, kurį nariai pasinaudojasi.

### Rekomenduojamas Cloudways SSL nustatymas Ultimate Multisite tinklui {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Wsistaije vaužkite **SSL sertifikatą** „Cloudways“ (Cloudways) skiltyje, įdėkite **standartų Let's Encrypt sertifikatą**, kuris apima tik `your-network.com` ir `www.your-network.com` – **ne** vaizduotakį (*wildcard*).
2. Neįdėkite `*.your-network.com` (arba kitų jūsų tinklo subdomeno schemą) į `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rezervuokite šią konstanta tik **išvengti** (external) domenams.
3. Sukurkite subdomeno vaizduotakį per tenant'us laukimo (per-tenant subdomain wildcard) tik **DNS** lygioje ( `A` įrašą, kuris nurodo į jūsų Cloudways servero IP adresą), kad subdomeniai būtų pasiekti. SSL sertifikatas individualiems nurodytems pritaikyti domenams bus išduotas automatiškai per integraciją via Let's Encrypt.

Jei jūsų tenantų pritaikytos domenai yra užblaudžytos be SSL, patikrinkite Cloudways SSL skiltį. Jei tenje veikia vaizduotakio sertifikatas, išimkite jį, išduokit standartinį Let's Encrypt sertifikatą tik pagrindinei tinklo domenui ir išimkite bet kokias vaizduotakio įrašus iš `WU_CLOUDWAYS_EXTRA_DOMAINS`. Tada atsakingai veikite domenų nurodymą (arba laukite kiteno) ir integracija bus praskininti sertifikatus per domeną.

## Problemos atšalinimas {#troubleshooting}

### API jungimo problemų {#api-connection-issues}
- Patikrinkite, ar jūsų el. pašto adresas ir API klaidų raktas yra teisingi
- Patikrinkite, ar jūsų serverio ir programos ID teisingi
- Užtikrinkite, kad jūsų Cloudways paskyrai yra reikalingos teisės

### SSL Sertifikato Problemai {#ssl-certificate-issues}
- Cloudways reikalauja, kad domenų DNS įrašai būtų validūs ir nurodytų į jūsų serverį prieš išdidant SSL sertifikatus.
- Integracija patikrina DNS įrašus iki to, kol pateiks SSL sertifikato prašymą.
- Jei SSL sertifikatai nebus išdidomi, patikrinkite, ar jūsų domenai teisingai nurodyti jūsų serverio IP adresui.
- **Per-tenant kustom domena neįtrauktas be SSL?** Patikrinkite Cloudways programos "SSL Certificate" (SSL sertifikato) tvarką. Jei aktyvus yra wildcard sertifikatas (nustabytas rankiniu būdu arba apima `*.your-network.com`), Cloudways nebus išdidyti Let's Encrypt sertifikatų individualiai nurodytoms kustom domena. Pakeiskite jį standartiniu Let's Encrypt sertifikatu, apimančiu tik pagrindinį tinklo domeną (`your-network.com`, `www.your-network.com`) ir pašalykite bet kokius wildcard įrašus iš `WU_CLOUDWAYS_EXTRA_DOMAINS`. Vėl paleiskite domeno nurodymą (arba laukite kiteno) ir integracija pateiks sertifikatus per domeną.

### Domenas neįtrauktas {#domain-not-added}
- Patikrinkite Ultimate Multisite logus, ar yra kokių klaidos pranešimų.
- Patikrinkite, kad domenas nėra jau įtrauktas į Cloudways.
- Užtikrinkite, kad jūsų Cloudways planui yra pateikta tinkama domenų skaičius, kurį norite pridėti.
