---
title: Isdhaafinta WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Isku-dhaafinta WordPress (WP Engine Integration)

## Guudbixitaanka guud (Overview) {#overview}
WP Engine waa platform hosting-ka WordPress oo heer sare ah oo maamul ah oo bixiya waxa ugu wanaagsan ee performance, amniga, iyo ballaaran (scalability) loona siiyo bogagga WordPress. Isku-dhaafinta (integration) kan ayaa kuu oggolaanaya isku-dubbaridda domain-ka (domain syncing) oo toos ah inta u dhaxaysa Ultimate Multisite iyo WP Engine.

## Faahfaahintooda (Features) {#features}
- Isku-dubbaridda domain-ka si toos ah
- Taageerada subdomain-ka ee loogu talagalay install-ka multisite
- Isku-dhaafinta fudud ee nidaamyada hore ee WP Engine

## Shuruudaha (Requirements) {#requirements}
Isku-dhaafinta waxay si toos ah u ogaanaysaa haddii aad ku hosteyso WP Engine waxayna isticmaashaa API-ga la bilaabay ee WP Engine. Ma baahna inaad sameyso wax cusub oo lagu hagaajinayo haddii plugin-ka WP Engine uu socdo oo si sax ah loo hagaajiyay.

Si kastaba ha ahaatee, haddii aad u baahan tahay inaad si gacanta ah ugu hagaajiso isku-dhaafinta, waxaad qori kartaa mid ka mid ah astaamahan (constants) faylkaaga `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Habka la doorbiday
// AMA
define('WPE_API', 'your_api_key'); // Habka kale ee loo isticmaali karo
```

## Tilmaamaha Dejinta (Setup Instructions) {#setup-instructions}

### 1. Hubi Plugin-ka WP Engine {#1-verify-wp-engine-plugin}

Haddii aad ku hosteyso WP Engine, plugin-ka WP Engine waa inuu horey u socdo oo la fuliyay. Hubi in:

1. Plugin-ka WP Engine uu socdo
2. Faylka `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` uu jiro

### 2. Fur Isku-dhaafinta (Enable the Integration) {#2-enable-the-integration}

1. Admin-ka WordPress-kaaga, aagi Ultimate Multisite > Settings
2. Tag "Domain Mapping" tab-ka
3. Hoos u soo saar "Host Integrations"
4. Fur isku-dhaafinta WP Engine
5. Click "Save Changes" (Waxay beddelaysaa)

## Sida ay U Shaqeeyaan (How It Works) {#how-it-works}

### Isku-dubbaridda Domain-ka (Domain Syncing) {#domain-syncing}

Marka domain la dhigo Ultimate Multisite:

1. Isku-dhaafinta waxay isticmaashaa WP Engine API si ay u ku darto domain-ka install-kaaga WP Engine
2. WP Engine wuxuu maamulaa hagaajinta domain-ka iyo bixinta SSL certificate-ka (sertificate)
3. Marka la saaro isku-dubbaridda domain-ka, isku-dhaafinta waxay ka saartaa domain-ka WP Engine

### Taageerada Subdomain-ka {#subdomain-support}

# Install Multisite oo Subdomains:

1. Isku-dhaafinta waxay ku dhex jirtaa inuu koox kasta oo subdomain ah u soo diri doono WP Engine marka website cusub la abuuro.
2. WP Engine wuxuu maamulaa habka loo dejiyo subdomain-ka.
3. Marka website la saaro, isku-dhaafinta waxay ka saari doontaa subdomain-ka WP Engine.

## Fiiro Muhiim ah {#wildcard-domains}

### Domain-yada Wildcard (Wildcard Domains) {#ssl-certificates}

Marka aad samaynayso install multisite oo ku salaysan subdomain, waxaa la talinaya in la laabto taageerada WP Engine si loo codsado dejinta domain wildcard. Tani waxay u oggolaanaysaa dhammaan subdomains inay si toos ah u shaqeeyaan iyadoo aan loo baahnayn in la ku daro mid kasta oo si gaar ah.

### SSL Certificates (Sertifikadu SSL) {#troubleshooting}

WP Engine wuxuu si toos ah maamulaa bixinta iyo dib-u-soo-celinta sertifikalka SSL dhammaan domain-yada lagu daray isku-dhaafinta. Ma loo baahna in la dejiyo wax kale oo dheeri ah.

## Xallinta Dhibaatooyinka (Troubleshooting) {#api-connection-issues}

### Masalahaat Ku Saabsan API Connection {#domain-not-added}
- Hubi in plugin-ka WP Engine uu shaqaynayo oo si sax ah u dejiyay.
- Haddii aad adiga isku diiday inaad key-ga API si gacanta ugu qorto, hubi inuu sax yahay.
- Laabto taageerada WP Engine haddii aad la kulanto dhibaatooyin ku saabsan API-ga.

### Domain-ka Aan Lagu Darin {#subdomain-issues}
- Hubi logs-ka Ultimate Multisite wax walba oo qalad ah oo ka soo baxay.
- Hubi in domain-ku aysan la darin hadda WP Engine.
- Hubi in qorshaha (plan) ee WP Engine-kaagu uu taageero tirada domain-yada aad ku darayso.

### Masalahaat Ku Saabsan Subdomain-yada
- Haddii subdomains ay aysan shaqayn, laabto taageerada WP Engine si loo codsado dejinta domain wildcard.
- Hubi in dejimaha DNS-kaagu si sax ah u dejisay domain-ka ugu weyni iyo subdomain-yada.
