---
title: Céadtaíocht Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Iompairte le Cloudflare

## Oibríocht
Is é Cloudflare cur leimeann de chuidaithe (CDN) agus cur chuile chuid de chuid website, ag cur isteach agus ag cur chuile. Féachfaidh an chéad seo a bheith iarracht ar chuid rialacha domáin idir Ultimate Multisite agus Cloudflare, go háirithe leat ar fáil leat do chuid installation multisite ar subdomain.

## Feicharásanna
- Creachais subdomain ag Cloudflare go mbeolaí
- Suíocht ar subdomain a bheith iarracht (Proxied)
- Cur na réada DNS a bheith iarracht
- Déanáil níos fearr le cur na réada DNS i admin Ultimate Multisite

## Cuidiúcháin
Is gceart sin é a bheith ag cur na constants seo i do láimhseáil `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'do_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'do_zone_id');
```

## Instructionaí Déanála

### 1. Déan an t-Aipkey Cloudflare

1. Glacadh ar do dashboard Cloudflare
2. Déan go dtí "My Profile" (cliceáil ar do email i gcóras áirítear a bhunchas)
3. Déan chun "API Tokens" a bheith iarracht ó chuid meán
4. Creachais API token nua le na gníomhartha seo:
   - Zone.Zone: Read (Léid)
   - Zone.DNS: Edit (Rinn)
5. Coptaidh do API token

### 2. Déan an t-Zone ID

1. I do dashboard Cloudflare, déan ar domáin a bhfuil tú ag úsáid
2. Tá an Zone ID i ar fáil i "Overview" tab, i bhfathair a dhéan ar an chuid eile under "API"
3. Coptaidh an Zone ID

### 3. Add Constants i wp-config.php

Add na constants seo i do láimhseáil `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'do_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'do_zone_id');
```

### 4. Fáil an Iompairte

1. I do admin WordPress, déan go dtí Ultimate Multisite > Settings
2. Déan chun "Domain Mapping" a bheith iarracht
3. Glacadh go hiomlán go "Host Integrations"
4. Fáil an iompairte Cloudflare
5. Cliceáil ar "Save Changes"

## Conas Tá Éifeachtach

### Cur na Subdomains

Nuair a bhíonn site nua ag creachtail i installation multisite ar subdomain:

1. An tús áit an cur chuireann isteach (integration) raonacht go API Cloudflare chun cur record CNAME ar fhoin mhaith (subdomain).
2. Tá an subdomain ceangailte leat a bheith proxied tríd Cloudflare de-fhéid (isín) mar chuid isín, ach is féidir é seo athrú a dhéanamh le filter.
3. Nuair a bhíonn site ag déanamh an t-amhas (deleted), beidh an cur chuireann isteach ag iarraidh an subdomain a tógáil ó Cloudflare.

### Déan na Record DNS

Tá an cur chuireann isteach ag fhorbairt an t-amhas ar na record DNS i bhfostála Ultimate Multisite mar:

1. A fháil leis na record DNS go díreach ó Cloudflare
2. A shonneadh má tá na recorda proxied nó níl
3. A shonneadh stiúradh eile ar na recorda DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (a bhí ag cur chuireann isteach "Cloudflare for SaaS") is feidm na Cloudflare a leagan do do chuidisteoirí a bheith ag úsáid do chuid domáin le SSL ar do net multisite. Is é seo an cur chuireann isteach ríomhach don càionnáid multisite a bhaineann leis an domáin atá ag úsáid Cloudflare, mar máireann Cloudflare an t-amhas (certificate) SSL agus an athrú go léir ar chuid domáin ceangailte go mhaith.

### Conas é seo ag déanamh é freisin ná cur chuireann isteach chuẩn

| | Cur chuireann isteach chuẩn | Cloudflare Custom Hostnames |
|---|---|---|
| **Amas** | A chur ar fhoin record DNS ar subdomain | A leagan domáin ceangailte (mapped) le SSL a bhaineann leis an Cloudflare |
| **Idreach** | Multisite ar subdomain | Multisite ar domáin ceangailte |
| **SSL** | Ag déanamh é freisin | Ag mhaireann an Cloudflare go léir |

### Déan Cloudflare Custom Hostnames



1. Iar an dashboard Cloudflare a chluainn (dashboard), open an zone do chuid (zone) do do chuid (domain) lá.
2. Go tới **SSL/TLS > Custom Hostnames**.
3. Add un origin fallback a bhaint go cur IP nó hostname do do chuid (server).
4. Do chuid (customer domain) as mapped in Ultimate Multisite, add an entry Custom Hostname i Cloudflare. Is féidir leat an tait seo a chuid (automate) a bheith ag dul ar an tait seo a bheith ag dul ar an tait seo ag cur isteach trí API Cloudflare.
5. Cloudflare ionraíonn agus a nualann TLS certificates do chuid (custom hostname) as éifeachtach mar a bhfáine an DNS do chuid (customer's DNS) a bheith ag cur isteach ar do chuid (network).

For full API reference, leat a fheiceáil [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Athrachadh terminology
As at Ultimate Multisite v2.6.1, is é an fáil seo ag cur isteach ar **Cloudflare Custom Hostnames** i gcónaí agus leaganacha (labels) do chuid plugin. Ua chuid fhoinnseanna a bhí níos luaithe, a bheith "Cloudflare for SaaS", is é an t-aontóir Cloudflare a bhí ar an bhfáil.
:::

## Note ag cur isteach

As at recent updates do Cloudflare, tá proxying wildcard agat ar chuid (customers) a bheith ar fáil anois. Is é sin ag cur isteach go bhfuil an t-aontóir DNS standard Cloudflare níos sárta chun multisite installations subdomain ná mar a bhí inniu, to gaol thuair an tait seo a chur isteach i Cloudflare.

## Treoicí (Troubleshooting)

### Cúsaí ar connadh API
- Déan cinnte go bhfuil do token API ceart agus go bhfuil na breiseanna ag cur isteach.
- Chléir go bhfuil do Zone ID ceart.
- Déan cinnte go bhfuil na breiseanna ceart ag do chuid (Cloudflare account).

### Níl an subdomain ag cur isteach
- Chléir leat ar na logs Ultimate Multisite ar aon fhoinnseanna éifeachtach.
- Déan cinnte go bhfuil an subdomain ag cur isteach i Cloudflare.
- Déan cinnte go bhfuil do chuid (Cloudflare plan) ag cur isteach an n-uimhir DNS a bhíonn tú ag cur isteach.

### Probleanna Proxy

- Má tá tú níl ag iarraidh go bhfuil subdomains a bheith proxy, leat é a úsáid an filter `wu_cloudflare_should_proxy`.
- Beagadh feicíocht cheana féachfaidh sé go bhfuil sé proxy (e.g., cumhachtanna admin WordPress ar chuid).
- Déan cinnte go bhfuil tú ag cur isteach Rules Page a Cloudflare chun cache a bhaint ar na pages admin.
