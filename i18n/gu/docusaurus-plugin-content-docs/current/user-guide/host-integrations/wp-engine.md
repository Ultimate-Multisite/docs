---
title: WP Engine એકીકરણ
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine એકીકરણ

## સંક્ષિપ્ત માહિતી
WP Engine એ પ્રીમિયમ મેનેજ્ડ WordPress હોસ્ટિંગ પ્લેટફોર્મ છે જે WordPress સાઇટ્સ માટે optimized performance, સુરક્ષા અને scalability પ્રદાન કરે છે. આ એકીકરણ Ultimate Multisite અને WP Engine વચ્ચે ઓટોમેટિક domain syncing ને સક્ષમ કરે છે.

## વિશેષતાઓ
- ઓટોમેટિક domain syncing
- Multisite installations માટે subdomain સપોર્ટ
- WP Engine ની હાલની systems સાથે સરળ એકીકરણ

## આવશ્યકતાઓ
જો તમે WP Engine પર હોસ્ટ કરી રહ્યા છો તો આ એકીકરણ આપમેળે detect કરે છે અને built-in WP Engine API નો ઉપયોગ કરે છે. જો WP Engine plugin active અને યોગ્ય રીતે configured હોય તો કોઈ વધારાના configuration ની જરૂર નથી.

જો કે, જો તમારે manually એકીકરણ configure કરવું હોય, તો તમે તમારી `wp-config.php` ફાઇલમાં આમાંથી એક constant define કરી શકો છો:

```php
define('WPE_APIKEY', 'your_api_key'); // પસંદગીની પદ્ધતિ
// OR
define('WPE_API', 'your_api_key'); // વૈકલ્પિક પદ્ધતિ
```

## Setup સૂચનાઓ

### 1. WP Engine Plugin ની ચકાસણી કરો

જો તમે WP Engine પર હોસ્ટ કરી રહ્યા છો, તો WP Engine plugin પહેલેથી જ installed અને activated હોવો જોઈએ. ખાતરી કરો કે:

1. WP Engine plugin active છે
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ફાઇલ અસ્તિત્વમાં છે

### 2. એકીકરણ સક્ષમ કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" tab પર જાઓ
3. "Host Integrations" સુધી scroll કરો
4. WP Engine એકીકરણ enable કરો
5. "Save Changes" પર ક્લિક કરો

## તે કેવી રીતે કામ કરે છે

### Domain Syncing

જ્યારે Ultimate Multisite માં domain map કરવામાં આવે છે:

1. એકીકરણ WP Engine API નો ઉપયોગ કરીને તમારા WP Engine installation માં domain ઉમેરે છે
2. WP Engine domain configuration અને SSL certificate issuance સંભાળે છે
3. જ્યારે domain mapping દૂર કરવામાં આવે છે, ત્યારે એકીકરણ WP Engine માંથી domain દૂર કરશે

### Subdomain સપોર્ટ

Subdomain multisite installations માટે:

1. જ્યારે નવી site બનાવવામાં આવે છે ત્યારે એકીકરણ દરેક subdomain ને WP Engine માં ઉમેરે છે
2. WP Engine subdomain configuration સંભાળે છે
3. જ્યારે site delete કરવામાં આવે છે, ત્યારે એકીકરણ WP Engine માંથી subdomain દૂર કરશે

## મહત્વની નોંધો

### Wildcard Domains

Subdomain multisite installations માટે, wildcard domain configuration ની વિનંતી કરવા WP Engine support નો સંપર્ક કરવાની ભલામણ છે. આનાથી દરેક subdomain ને individually ઉમેરવાની જરૂર વગર બધા subdomains આપમેળે કામ કરે છે.

### SSL Certificates

WP Engine આ એકીકરણ દ્વારા ઉમેરવામાં આવેલા બધા domains માટે SSL certificate issuance અને renewal આપમેળે સંભાળે છે. કોઈ વધારાના configuration ની જરૂર નથી.

## સમસ્યાનિવારણ

### API Connection સમસ્યાઓ
- ખાતરી કરો કે WP Engine plugin active અને યોગ્ય રીતે configured છે
- જો તમે manually API key define કરી હોય, તો તપાસો કે તે સાચી છે
- જો તમને API સાથે મુશ્કેલી આવી રહી હોય તો WP Engine support નો સંપર્ક કરો

### Domain ઉમેરાયું નથી
- કોઈપણ error messages માટે Ultimate Multisite logs તપાસો
- ખાતરી કરો કે domain પહેલેથી WP Engine માં ઉમેરવામાં આવ્યું નથી
- ખાતરી કરો કે તમારો WP Engine plan તમે ઉમેરી રહ્યા છો તેટલા domains ને support કરે છે

### Subdomain સમસ્યાઓ
- જો subdomains કામ નથી કરી રહ્યા, તો wildcard domain configuration ની વિનંતી કરવા WP Engine support નો સંપર્ક કરો
- ખાતરી કરો કે તમારી DNS settings main domain અને subdomains માટે યોગ્ય રીતે configured છે
