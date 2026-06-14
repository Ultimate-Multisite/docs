---
title: Integrazzjoni WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrà WP Engine

## Panoramika
WP Engine huwa piattaforma di hosting WordPress gestita premium li fornisce prestazzjoni ottimizzati, sigurtà u scalabilità għall-sites ta WordPress. Dan l-integrà tismella s-sinc (sync) tal-domain automatic between Ultimate Multisite u WP Engine.

## Funzjonijiet
- Sinc automatiku tal-domain
- Support għal subdomain għall-installazzjonijiet multisite
- Integrà seamless (li ma jgħidu problemi) mal-sistemi esistenti ta' WP Engine

## Reġistrazzjonijiet
L-integrà tiskawti awtomatik jekk qed hosti fuq WP Engine u tistaqxf l-API tal-WP Engine li hija built-in. Ma għandekx configurazzjoni aggiettiva jekk il-plugin ta' WP Engine huwa attiv u konfigurat b'mod appropriat.

Madankoll, jekk għandek bżonn tgħallari l-integrà manualment, tista' definixxi xi żgħir konstanta (constant) f'file `wp-config.php` tiegħek:

```php
define('WPE_APIKEY', 'your_api_key'); // Metodu preferutu
// ORA
define('WPE_API', 'your_api_key'); // Metodu alternattiv
```

## Istruzzjonijiet ta' Isettabbilizzjoni (Setup)

### 1. Verifika il-Plugin ta' WP Engine

Jekk qed hosti fuq WP Engine, il-plugin ta' WP Engine għandu jkun dejjem installat u attivat. Verifika li:

1. Il-plugin ta' WP Engine huwa attiv
2. Il-file `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` huwa esiste

### 2. Attiva l-Integrà
1. F'l-admin ta' WordPress tiegħek, għandi tnejj la Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping" (Mappatura tal-domain)
3. Scrolla' għal "Host Integrations" (Integrazzjonijiet ta' Host)
4. Attiva l-integrà ta' WP Engine
5. Klikka fuq "Save Changes" (Saħħa Bidżi)

## Come Funziona

### Sinc tal-Domain
Meta li d-domain tismella f Ultimate Multisite:

1. L-integrà tistaqxf l-WP Engine API biex tudda d-domain għall-installazzjoni tiegħek ta' WP Engine
2. WP Engine hija responsabbli għall-konfigurazzjoni tal-domain u emissioni sertifikat SSL
3. Meta tiddir il-mapping tal-domain, l-integrà tistaqxf d-domain min WP Engine

ליסטה לחיבורי subdomain multisite:

1. האינטגרצjoni tiddittie l-WP Engine għal kull subdomain meta jkun siti جديد.
2. WP Engine huwa li jipproċessa konfigurar il-subdomain.
3. Meta jinkludi sit, l-integrazzjoni tixlebba l-subdomain minn WP Engine.

## Nota Importanti

### Domini Wildcard (Wildcard Domains)

B'mod kif jekk għandek installazzjoni multisite ta subdomain, jgħinnil biex titassal maħmurja mal-support ta WP Engine biex tillaq konfigurar domain wildcard. Dan jippermettix li kull subdomain jservi awtomatik b'mod li ma għandekx teħaddem għalihwa waħda waħda.

### Certifikat SSL

WP Engine huwa li jipproċessa l-issigurar u il-riġenerazzjoni tal-certifikati SSL għal kull domain li tiddittie b'attra qabel dan integrazzjoni. Ma għandekx biex tagħmel konfigurar aggiem.

## Problemi (Troubleshooting)

### Problemi ma jkunx jinkludi l-API
- Verifika li l-plugin ta WP Engine huwa attif u konfigurat b'mod appropriat.
- Jekk definitt il-API key manualment, verifika li hija korretta.
- Kontatta l-support ta WP Engine jekk għandek problemi mal-API.

### Domain ma jkunx jinkludi
- Verifika l-logs ta Ultimate Multisite biex tiqgħu msgji speċifi.
- Verifika li d-dominju ma huwa giàżżat x-xogħol b'WP Engine.
- Assigurah li il-plan ta WP Engine tiegħek jippoġġa l-numa ta domini li qed tiddittie.

### Problemi subdomini
- Jekk subdomini ma jistgħux jservu, kontatta l-support ta WP Engine biex titillaq konfigurar domain wildcard.
- Verifika li l-setting tal-DNS tiegħek konfigurat b'mod korrett għad-dominju primari u subdomini.
