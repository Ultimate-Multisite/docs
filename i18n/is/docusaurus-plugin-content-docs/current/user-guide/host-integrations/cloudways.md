---
title: Cloudways samstarf
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Samningur við Cloudways

## Översikt
Cloudways er þjónusta fyrir skýmyndarþjónustu (managed cloud hosting platform) sem leysir þér möguleika að dekkja WordPress vísitaldir á ólíkomum skýmyndarþjónustum eins og DigitalOcean, AWS, Google Cloud og fleiri. Þessi samningur gerir mögulega sjálfsvítingu domæna (domain syncing) og stjórnun SSL-tækja milli Ultimate Multisite og Cloudways.

## Stöðvar
- Sjálfvirk þjónusta domæna (Automatic domain syncing)
- Stjórnun SSL-tækja (SSL certificate management)
- Stöðvar fyrir extra domæna (Support for extra domains)
- DNS staðfesting fyrir SSL tækja (DNS validation for SSL certificates)

## Kreftingar
Fylgja eftir eftirfarandi konstantum í lausnari `wp-config.php` skiptum:

```php
define('WU_CLOUDWAYS_EMAIL', 'þurrka_tífa_einn_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'þurrka_api_tífa');
define('WU_CLOUDWAYS_SERVER_ID', 'þurrka_server_id');
define('WU_CLOUDWAYS_APP_ID', 'þurrka_app_id');
```

Valfræðlega gætirðu einnig að definið:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'virðist,skiptaða,lista,domæna');
```

## Innreiðarferli

### 1. Fá þína Cloudways API staðfestingar (API Credentials)

1. Logga inn í Cloudways dashboard-inn þínu.
2. Gangi yfir "Account" > "API Keys".
3. Skapa API key ef þú hefur ekki enn eina.
4. Kopla eftirfarandi tækifæri (email og API key).

### 2. Fá þína Server- og Application ID's

1. Í Cloudways dashboard-inum þínu, gangi yfir "Servers".
2. Velðu server sem heldur vísitaldirna þín WordPress multisite.
3. Server ID er sýnt í URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gangi yfir "Applications" og veldu WordPress application-inn þína.
5. App ID er sýnt í URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Búa að konstantum í wp-config.php

Búa eftirfarandi konstantum í lausnari `wp-config.php` skiptum:

```php
define('WU_CLOUDWAYS_EMAIL', 'þurr cloudways e-post');
define('WU_CLOUDWAYS_API_KEY', 'þurr api-nennandi');
define('WU_CLOUDWAYS_SERVER_ID', 'þurr server-íð');
define('WU_CLOUDWAYS_APP_ID', 'þurr app-íð');
```

Ef þér eru enn **efterfellar** (utanfor netverkinn þinn multisite) sem þarf að vera alltaf í lista fyrir alias á Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Skrá ekki eigin netverkinn með villu
**Skrá ekki** `*.your-network.com` (eða neðanlenduþróun þínar netverkars) í `WU_CLOUDWAYS_EXTRA_DOMAINS`. Sjá [Mikilvægt — villur SSL á villu](#important--wildcard-ssl-pitfall) hér nedan fyrir því hvernig þetta hindrar að skila per-tenant SSL sertifikata.
:::

### 4. Skrá inn samstarfsemi (Enable the Integration)

1. Í WordPress admin, gae í Ultimate Multisite > Settings
2. Hraudi yfir til "Domain Mapping" tabinn
3. Hraudi niður til "Host Integrations"
4. Skrá inn Cloudways samstarfsemi (Enable the Cloudways integration)
5. Klikka á "Save Changes"

## Hvernig þetta virkar

### Samræmi domæna (Domain Syncing)

Þegar domén er skráð í Ultimate Multisite:

1. Samstarfsemiin hentar allar domænar sem eru nú skráðar
2. Hún bætir nýri doménni við lista (samt www-versjón ef það er nauðsynlegt)
3. Hún sendir heildar lista til Cloudways með API
4. Cloudways uppfærir alias domænum fyrir appinn þinn

Athugið: Cloudways API krefst að senda heildar lista domæna í hvert skref, ekki bara viðbót eða fjarlæsing einstaklinga domæna.

### Stjórnun SSL sertifikata (SSL Certificate Management)

Eftir að domænar séu samræmdar:

1. Samstarfsemiin skynjur hvarð er domænar sem hafa rétt DNS-skrá í gegnum þennan server
2. Hún sendir skynjun til Cloudways um að installa Let's Encrypt SSL sertifikata fyrir þá domænar
3. Cloudways skynjur og installar SSL sertifikata

Inngangurinn tengingin krefst **standard** (eina ekki villandi) Let's Encrypt sertifikata frá Cloudways. Ef er villandi mönnun í `WU_CLOUDWAYS_EXTRA_DOMAINS`, er forritan `*.` fjarlægð áður en SSL-skynjunin skiptist — villandi sjálfur er aldrei sett upp af þessum tengslinu. Til að nota villandi sertifikat á Cloudways þurftu að setja það manueel, en það heldur fyrir skynjunum Let's Encrypt fyrir per-domain handhilda domænum (sjá ferðarferli nánar).

## Extra Domains

Konstantinn `WU_CLOUDWAYS_EXTRA_DOMAINS` leyfir þér að gefa sérstök **efterfellar** domænar sem verða alltaf að halda á lista alias-anna á Cloudways applikationni. Notaðu hann til:

- Eftelldum domænum sem eru ekki stýrt af Ultimate Multisite (t.d. sérstakt markaðsvefs miðlað með sama Cloudways applikation).
- Domænum sem eru parkað eða staging sem þú vilt halda á lista alias-anna á applikationni.

**Notandi ekki** þennan konstant til villandi domænu fyrir netið þitt (t.d. `*.your-network.com`). Sjá villandi SSL ferðarferli nánar.

## Mikilvægt — Villandi SSL ferðarferli

Almenn villur þegar fylgir Cloudways' default sett upp er að bæta villandi eins og
`*.your-network.com` í `WU_CLOUDWAYS_EXTRA_DOMAINS`, eða manueel setja villandi Cloudways SSL sertifikat fyrir það villandi.

**Ef þú gert þetta, neikir Cloudways ekki að gefa Let's Encrypt sertifikata fyrir per-tenant handhilda domænum sem Ultimate Multisite mönnunar.** Cloudways skiptir aktivt SSL sertifikati á applikationni hverju gongd, og eitthvaður villandi sertifikat sem er fyrirfram sett upp á applikationni heldur fyrir per-domain Let's Encrypt gefningu sem tengslinu byggist á.

### Aðskilt Cloudways SSL sett upp fyrir Ultimate Multisite net



1. Í fanntu í **SSL Certificate** tabinn í Cloudways appinu, nýttu **standard Let's Encrypt certificate** sem dektar aðeins `your-network.com` og `www.your-network.com` — **ekki** wildcard.
2. Skráðu ekki `*.your-network.com` (eða neikva eitthvað annað subdomain mótökku þín netverkets) í `WU_CLOUDWAYS_EXTRA_DOMAINS`. Fáðu þann konstant fyrir **efterfandi** domænar aðeins.
3. Skapa per-tenant wildcard subdomain á **DNS** level eina (ein `A` record fyrir `*.your-network.com` sem stigur til IP-heiti Cloudways serverinn) svo subsíðar séu upplýsingar. SSL fyrir einstaka mappa custom domænar er þá útgerð á sjálfskipti með integrationni via Let's Encrypt.

Ef tenantirnar þínar custom domænar eru fanga án SSL, skoða Cloudways SSL tabinn. Ef wildcard certificate er aktivt þar, fjarlægðu það, útgerðu standard Let's Encrypt certificate fyrir aðeins hlutina í hvern netverkets domænu og fjarlægðu alla wildcard innskráningar frá `WU_CLOUDWAYS_EXTRA_DOMAINS`. Þá færðu upp á domæna mappa (eða væntuðu næst) og integrationn byrjar að útgerða certificate fyrir hvern domén aftur.

## Feilfellingar

### API Connection Issues
- Staðfestu að tölvupósturinn þinn og API key er rétt
- Skennið að serverinn og application IDs þín séu rétt
- Tryggðu þér að Cloudways account þinn hafi nauðsynlegum réttunum

### Vấn đề Chứng chỉ SSL
- Cloudways krefst að domænar séu með rétt DNS-skráir sem stig á serverinn þinn áður en þeir eru útboðin SSL-certifikat.
- Samningurinn staðfestar DNS-skráir áður en hann byrjar að beitional um SSL-certifikat.
- Ef SSL-certifikat eru ekki útboðin, skoða hvort domænar þín séu rétt stig á IP-heiti serverinnar þín.
- **Per-tenant custom domains sem eru fanga án SSL?** Skoða tabinn fyrir SSL Certificate í Cloudways app-inu. Ef villandi certifikat (manually installed, eða sem dekkur `*.your-network.com`) er aktivt, mun Cloudways ekki útboða Let's Encrypt certifikat fyrir einstaklingar mappa domænar. Skipti það með standard Let's Encrypt certifikati sem dekkur aðeins hlutina á hufum nýtingarnetið (`your-network.com`, `www.your-network.com`) og fjær alla villandi skráir úr `WU_CLOUDWAYS_EXTRA_DOMAINS`. Þá fær upphafnar domæna mappa aftur (eða væntuðu á næsta) og samningurinn mun beitional um certifikat fyrir hverja domén.

### Domæna er ekki viðbúin
- Skoða Ultimate Multisite logs fyrir nánastilka villum
- Staðfesti að domænan sé ekki þegar viðbúin í Cloudways
- Tryggðu þig þess að Cloudways planinn þinn stuðlar til fjölda domána sem þú hefur viðbúið
