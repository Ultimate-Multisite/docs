---
title: Cloudways integration
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## Oversigt {#overview}
Cloudways er en administreret cloud hosting platform, der giver dig mulighed for at udrulle WordPress-sider på forskellige cloud-udbydere som DigitalOcean, AWS, Google Cloud og flere. Denne integration muliggør automatisk domænesynkronisering og styring af SSL-certifikater mellem Ultimate Multisite og Cloudways.

## Funktioner {#features}
- Automatisk domænesynkronisering
- Styring af SSL-certifikater
- Understøttelse af ekstra domæner
- DNS-validering for SSL-certifikater

## Krav {#requirements}
Følgende konstanter skal defineres i din `wp-config.php` fil:

```php
define('WU_CLOUDWAYS_EMAIL', 'din_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'din_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'din_server_id');
define('WU_CLOUDWAYS_APP_ID', 'din_app_id');
```

Valgfrit kan du også definere:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'komma,adskilt,liste,af,domæner');
```

## Opsætning {#setup-instructions}

### 1. Få dine Cloudways API-nøgler {#1-get-your-cloudways-api-credentials}

1. Log ind på dit Cloudways dashboard
2. Gå til "Account" > "API Keys"
3. Generer en API-nøgle, hvis du ikke allerede har en
4. Kopier din e-mail og din API-nøgle

### 2. Få dine Server- og App-ID'er {#2-get-your-server-and-application-ids}

1. I dit Cloudways dashboard gå til "Servers"
2. Vælg serveren, hvor dit WordPress multisite er hostet
3. Server ID'et ses i URL'en: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gå til "Applications" og vælg din WordPress-applikation
5. App ID'et ses i URL'en: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Tilføj konstanter til wp-config.php {#3-add-constants-to-wp-configphp}

Tilføj følgende konstanter til din `wp-config.php` fil:

```php
define('WU_CLOUDWAYS_EMAIL', 'din_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'din_api_nøgle');
define('WU_CLOUDWAYS_SERVER_ID', 'din_server_id');
define('WU_CLOUDWAYS_APP_ID', 'din_app_id');
```

Hvis du har yderligere **eksterne** domæner (uden for dit multisite-netværk), som altid skal være på Cloudways aliaslisten:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Inkludér ikke dit eget netværks wildcard
Tilføj **ikke** `*.din-netværk.dk` (eller et hvilket som helst underdomæne mønster fra dit eget netværk) til
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Se [Vigtigt — wildcard SSL faldgrube](#important--wildcard-ssl-pitfall) nedenfor for hvorfor dette forhindrer udstedelse af per-tenant SSL-certifikater.
:::

### 4. Aktiver integrationen {#4-enable-the-integration}

1. I din WordPress admin, gå til Ultimate Multisite > Indstillinger (Settings)
2. Gå til fanen "Domain Mapping"
3. Scroll ned til "Host Integrations"
4. Aktiver Cloudways-integrationen
5. Klik på "Save Changes"

## Hvordan det virker {#how-it-works}

### Domæne-synkronisering {#domain-syncing}

Når et domæne mappes i Ultimate Multisite:

1. Integrationen henter alle i øjeblikket mappede domæner
2. Den tilføjer det nye domæne til listen (samt en www-version, hvis relevant)
3. Den sender den komplette liste til Cloudways via API'en
4. Cloudways opdaterer aliasene for dit app

Bemærk: Cloudways API kræver, at du sender hele listen af domæner hver gang, ikke blot tilføjer eller fjerner individuelle domæner.

### SSL-certifikatstyring {#ssl-certificate-management}

Efter at domænerne er synkroniseret:

1. Integrationen tjekker, hvilke domæner der har gyldige DNS-opslag, der peger på dit server
2. Den sender en anmodning til Cloudways om at installere Let's Encrypt SSL-certifikater for disse domæner
3. Cloudways håndterer udstedelsen og installationen af SSL-certifikatet

Integrationen bederber altid **standard** (ikke-wildcard) Let's Encrypt certifikater fra Cloudways. Hvis et wildcard mønster oplyses i `WU_CLOUDWAYS_EXTRA_DOMAINS`, bliver det indledende `*.` fjernet før SSL-anmodningen – selve wildcarden installeres aldrig af denne integration. For at bruge et wildcard certifikat på Cloudways skulle du installere det manuelt, men det blokerer for Let's Encrypt-udstedelse pr. domæne for de kortede brugerdefinerede domæner (se faldgruben nedenfor).

## Ekstra Domæner {#extra-domains}

Konstanten `WU_CLOUDWAYS_EXTRA_DOMAINS` lader dig specificere yderligere **eksterne** domæner, der altid skal gemmes på Cloudways-applikationens aliasliste. Brug den til:

- Eksterne domæner, der ikke administreres af Ultimate Multisite (f.eks. en separat marketingside, der deler samme Cloudways-applikation).
- Parkerede eller staging domæner, du ønsker gemt på applikationens aliasliste.

**Brug IKKE** denne konstant til din egen netværks subdomæne wildcard (f.eks. `*.din-netværk.com`). Se faldgruben vedrørende wildcard SSL nedenfor.

## Vigtigt — Wildcard SSL Faldgrube {#important--wildcard-ssl-pitfall}

En almindelig fejl, når man følger Cloudways' standard opsætning, er at tilføje en wildcard som `*.din-netværk.com` til `WU_CLOUDWAYS_EXTRA_DOMAINS`, eller manuelt installere et Cloudways wildcard SSL certifikat for den specifikke wildcard.

**Hvis du gør dette, vil Cloudways nægte at udstede Let's Encrypt certifikater for de per-tenant brugerdefinerede domæner, som Ultimate Multisite kortegør.** Cloudways erstatter aktivt SSL-certifikatet på applikationen hver gang, og et eksisterende wildcard certifikat på applikationen blokerer den per-domæne Let's Encrypt-udstedelse, som integrationen er afhængig af.

### Anbefalet Cloudways SSL opsætning for et Ultimate Multisite netværk {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. I **installerer et standard Let's Encrypt certifikat** i fanen **SSL Certificate** i Cloudways applikationen, der kun dækker `your-network.com` og `www.your-network.com` — **ikke** en wildcard.
2. Sæt ikke `*.your-network.com` (eller et hvilket som helst subdomain mønster fra dit eget netværk) i `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserver denne konstant kun til **eksterne** domæner.
3. Opret den per-tenant subdomain wildcard udelukkende på **DNS** niveau (en `A` record for `*.your-network.com`, der peger på din Cloudways server IP), så undersiderne kan løses. SSL for individuelle kortlagte custom domæner udstedes derefter automatisk af integrationen via Let's Encrypt.

Hvis dine tenants custom domæner sidder fast uden SSL, tjek Cloudways SSL-fanen. Hvis der er et wildcard certifikat aktivt der, skal du fjerne det, udstede et standard Let's Encrypt certifikat kun for hovednetværksdomænet og fjerne eventuelle wildcard-indgange fra `WU_CLOUDWAYS_EXTRA_DOMAINS`. Derefter genudløser du en domænemapping (eller vent på den næste) og integrationen vil begynde at udstede certifikater per domæne igen.

## Fejlfinding {#troubleshooting}

### API-forbindelsesproblemer {#api-connection-issues}
- Tjek, at din e-mail og API-nøgle er korrekte
- Kontroller, at dine server- og applikations-ID'er er korrekte
- Sørg for, at din Cloudways konto har de nødvendige rettigheder

### Problemer med SSL-certifikater {#ssl-certificate-issues}
- Cloudways kræver, at domæner har gyldige DNS-oplysninger, der peger på din server, før SSL-certifikater udstedes.
- Integrationen validerer DNS-oplysningerne, før den anmoder om SSL-certifikater.
- Hvis SSL-certifikater ikke udstedes, tjek, at dine domæner korrekt peger på din servers IP-adresse.
- **Per-tenant custom domæner fastlåst uden SSL?** Tjek fanen for SSL Certificate i Cloudways applikationen. Hvis et jokertegn-certifikat (manuel installeret eller dækker `*.your-network.com`) er aktivt, vil Cloudways ikke udstede Let's Encrypt-certifikater til individuelt kortlagte custom domæner. Erstat det med et standard Let's Encrypt-certifikat, der kun dækker hovednetværksdomænen (`your-network.com`, `www.your-network.com`), og fjern eventuelle jokertegnindgange fra `WU_CLOUDWAYS_EXTRA_DOMAINS`. Start derefter en domæne-kortlægning igen (eller vent på den næste) og integrationen vil anmode om certifikater pr. domæne.

### Domæne er ikke tilføjet {#domain-not-added}
- Tjek Ultimate Multisite logs for eventuelle fejlmeddelelser.
- Bekræft, at domænet ikke allerede er tilføjet til Cloudways.
- Sørg for, at din Cloudways plan understøtter antallet af domæner, du tilføjer.
