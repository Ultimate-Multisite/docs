---
title: Cloudflare samstarf
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Samning við Cloudflare

## Áhersla
Cloudflare er stamtökandi nýrra netanna og öryggisþjónustana leiðandi tengslnet (CDN) og öryggisþjónusta sem hjálpar því að vernda og hraða vefsíður. Þessi samning fer með sjálfvirkan stjórnun domænum á milli Ultimate Multisite og Cloudflare, sérstaklega fyrir nýtingar með subdomain multisite uppsetunum.

## Stöðvar
- Sjálfvirkt sköpun subdomain í Cloudflare
- Stöðvar sem eru proxied (þá ferlusta)
- Stjórnun DNS-skjalanna
- Aðgerðarmiðlar fyrir DNS-skjalann í Ultimate Multisite admin

## Kreftingar
Fylgja eftir að þessum konstantum verða sett í `wp-config.php` skjalinu:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Stöðvarferli

### 1. Fá þennan Cloudflare API Key
1. Logga inn í Cloudflare dashboard-inn þínu
2. Gangi yfir til "My Profile" (klikka á tölvupóstinum þínum í hópnum upphaflega)
3. Veldu "API Tokens" úr menulinum
4. Skapa nýtt API token með eftirfarandi réttum:
   - Zone.Zone: Read (Læsning)
   - Zone.DNS: Edit (Borging/Endling)
5. Kopla þennan API token

### 2. Fá þennan Zone ID
1. Í Cloudflare dashboard-inum þínum, veldu domænið sem þú vilt nota
2. Zone ID er sýnt í "Overview" tabinn, í höfuðblaði til vinstri (right sidebar) undir "API"
3. Kopla Zone ID

### 3. Setta konstantir í wp-config.php
Setta eftirfarandi konstantir í `wp-config.php` skjalinu þínu:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Skynna samninginn
1. Í WordPress admin-inum þínum, gangi yfir til Ultimate Multisite > Settings
2. Gangi yfir til tabins "Domain Mapping" (Domænuþjónustu)
3. Skolia niður í "Host Integrations" (Stöðvar samninga)
4. Skynna samninginn við Cloudflare
5. Klikka á "Save Changes" (Sérðu breytingar)

## Hvernig það virkar

### Stjórnun subdomain-skjalanna

Þegar nýtt vísitalinn er skráð í uppsetingu með subdomain multisite:

1. Samningur sendir skýrslu til API Cloudflare til að bæta CNAME skrá við undirnámnaðann (subdomain).
2. Undirnámnaðurinn er settur í standardinn til að vera proxied með Cloudflare (þetta leiðast á með filterum), sem getur breytist með filterjum.
3. Þegar staflinn er slettur, fjernar samningurinn undirnámnaðann frá Cloudflare.

### Visning DNS-skráms
Samningurinn bætir við visningu DNS-skráms í Ultimate Multisite admin með því að:

1. Henta DNS-skrár beint frá Cloudflare
2. Visna hvort skráir sé proxied eða ekki
3. Visna aðrar upplýsingar um DNS-skrárnar

## Cloudflare Custom Hostnames (Handhildaðir nefnunir í Cloudflare)

**Cloudflare Custom Hostnames** (tímar fyrir "Cloudflare for SaaS") er eiginleiki Cloudflare sem leyfir viðskiptavinum þínum að nota sína eignar domænar með SSL á netverkinn þínum multisite. Þetta er tillagað leið fyrir multisite-innstalls sem eru mappa við domænu og nota Cloudflare, þar sem Cloudflare stýrir sjálf umferðu og uppfærslu SSL-sertifikata fyrir hvert handhildaða domén sjálft.

### Hvernig þetta er annleikur yfir standard Cloudflare samningi

| | Standard samningurinn | Cloudflare Custom Hostnames |
|---|---|---|
| **Lof** | Auto-skapar DNS-skráir fyrir undirnámnaðann (subdomain) | Leiðar að handhildaðum domænum með SSL sem Cloudflare stýrir |
| **Best fyrir** | Multisite með undirnámnaðum (subdomains) | Multisite mappa við domænu (domain-mapped) |
| **SSL** | Stýrt sjálf | Stýrt af Cloudflare sjálf |

### Innstillingar Cloudflare Custom Hostnames

1. Opna í Cloudflare dashboard þínu, opna zónuna fyrir aðaldomænin þitt.
2. Gangi yfir **SSL/TLS > Custom Hostnames**.
3. Búa til fallback origin sem stigur á IP-n af serverinn eða hostname.
4. Fyrir hvert viðskiptavarmenns domén sem er mappa í Ultimate Multisite, bæti með Custom Hostname entry í Cloudflare. Þú getur automatíska þessar skref notað með Cloudflare API.
5. Cloudflare gerir og uppfærir TLS-certifikat fyrir hvert custom hostname sjálft án þess að þú þarf að gera það, eins og bara þegar viðskiptavarmenns DNS er stigður á nýtingarnetið þitt.

For full API reference, sjá [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Uppdatering hugtaka
Frá Ultimate Multisite v2.6.1 er þessi eiginleiki nefnd **Cloudflare Custom Hostnames** í öllum innstillingum og merkimótum pluginins. Eldri vísperðum nota nafni "Cloudflare for SaaS", sem er grunnvinnuproduktnafni Cloudflare.
:::

## Mikilvægar athugasemdir

Frá nýjum uppfærðum í Cloudflare er villkár proxying (wildcard proxying) nú að ganga fyrir öll viðskiptavarmenn. Þetta þýðir að standard DNS-samstarfi með Cloudflare er ekki eins mikilvægt fyrir subdomain multisite innreiðingar eins og það var í ölum tíma, þar sem þú bara getur sett upp villkár DNS-rétt á Cloudflare.

## Feilanaskynning (Troubleshooting)

### Vélbúnaðsfornleiki við API tengingu
- Staða að þitt API token er rétt og það hefur nauðsynlegum réttunum
- Skenni að Zónu ID þín sé rétt
- Tryggðir að Cloudflare reikningurinn þinn hafi nauðsynleg réttindi

### Subdomain ekki bætt við
- Skenni Ultimate Multisite logs fyrir nánastilka villum
- Staða að subdomainin er ekki eingöngu búa til í Cloudflare
- Tryggðir að Cloudflare planinn þinn stuðlar að fjölda DNS-rétta sem þú ert að skapa

### Vafnissvið (Proxying Issues)
- Ef þú vilt ekki að undirdomænir (subdomains) verði proxied, geturðu notað filterinn `wu_cloudflare_should_proxy`.
- Nokkar eiginleikar gætu ekki virka rétt þegar þær eru proxied (t.d. sérstök myndir í WordPress admin).
- Hugsa um að nota Cloudflare Page Rules til að umgåsara (bypass) cache fyrir admin-sider.
