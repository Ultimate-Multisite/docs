---
title: Cloudflare એકીકરણ
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare એકીકરણ {#cloudflare-integration}

## અવલોકન {#overview}
Cloudflare એક અગ્રણી સામગ્રી વિતરણ નેટવર્ક (CDN) અને સુરક્ષા પ્રદાતા છે, જે વેબસાઇટોને સુરક્ષિત અને ઝડપી બનાવવામાં મદદ કરે છે. આ એકીકરણ Ultimate Multisite અને Cloudflare વચ્ચે સ્વચાલિત ડોમેન વ્યવસ્થાપન સક્ષમ કરે છે, ખાસ કરીને સબડોમેન multisite સ્થાપનો માટે.

## સુવિધાઓ {#features}
- Cloudflare માં સ્વચાલિત સબડોમેન બનાવટ
- પ્રોક્સી કરેલા સબડોમેન સપોર્ટ
- DNS રેકોર્ડ વ્યવસ્થાપન
- Ultimate Multisite એડમિનમાં સુધારેલ DNS રેકોર્ડ પ્રદર્શન

## આવશ્યકતાઓ {#requirements}
તમારી `wp-config.php` ફાઇલમાં નીચેના constants વ્યાખ્યાયિત હોવા જોઈએ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## સેટઅપ સૂચનાઓ {#setup-instructions}

### 1. તમારી Cloudflare API Key મેળવો {#1-get-your-cloudflare-api-key}

1. તમારા Cloudflare dashboard માં લૉગ ઇન કરો
2. "My Profile" પર જાઓ (ઉપર-જમણા ખૂણામાં તમારા ઇમેઇલ પર ક્લિક કરો)
3. મેનુમાંથી "API Tokens" પસંદ કરો
4. નીચેની પરવાનગીઓ સાથે નવો API token બનાવો:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. તમારો API token કૉપી કરો

### 2. તમારો Zone ID મેળવો {#2-get-your-zone-id}

1. તમારા Cloudflare dashboard માં, તમે ઉપયોગ કરવા માંગો છો તે ડોમેન પસંદ કરો
2. Zone ID "Overview" ટેબમાં, જમણી સાઇડબારમાં "API" હેઠળ દેખાય છે
3. Zone ID કૉપી કરો

### 3. wp-config.php માં Constants ઉમેરો {#3-add-constants-to-wp-configphp}

તમારી `wp-config.php` ફાઇલમાં નીચેના constants ઉમેરો:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. એકીકરણ સક્ષમ કરો {#4-enable-the-integration}

1. તમારા WordPress એડમિનમાં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" ટેબ પર નેવિગેટ કરો
3. "Host Integrations" સુધી નીચે સ્ક્રોલ કરો
4. Cloudflare એકીકરણ સક્ષમ કરો
5. "Save Changes" ક્લિક કરો

## તે કેવી રીતે કામ કરે છે {#how-it-works}

### સબડોમેન વ્યવસ્થાપન {#subdomain-management}

જ્યારે સબડોમેન multisite સ્થાપનમાં નવી સાઇટ બનાવવામાં આવે છે:

1. એકીકરણ સબડોમેન માટે CNAME રેકોર્ડ ઉમેરવા Cloudflare ની API ને વિનંતી મોકલે છે
2. સબડોમેન ડિફૉલ્ટ રીતે Cloudflare મારફતે પ્રોક્સી થવા માટે કન્ફિગર થાય છે (આ filters વડે બદલી શકાય છે)
3. જ્યારે સાઇટ કાઢી નાખવામાં આવે છે, ત્યારે એકીકરણ Cloudflare માંથી સબડોમેન દૂર કરશે

### DNS રેકોર્ડ પ્રદર્શન {#dns-record-display}

એકીકરણ Ultimate Multisite એડમિનમાં DNS રેકોર્ડ પ્રદર્શનને આ રીતે સુધારે છે:

1. Cloudflare માંથી સીધા DNS રેકોર્ડ્સ મેળવવા
2. રેકોર્ડ્સ પ્રોક્સી કરેલા છે કે નહીં તે દર્શાવવું
3. DNS રેકોર્ડ્સ વિશે વધારાની માહિતી બતાવવી

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (અગાઉ "Cloudflare for SaaS" કહેવાતું) એ Cloudflare ની એક સુવિધા છે, જે તમારા ગ્રાહકોને તમારા multisite નેટવર્ક પર SSL સાથે તેમના પોતાના ડોમેનનો ઉપયોગ કરવાની મંજૂરી આપે છે. Cloudflare નો ઉપયોગ કરતા ડોમેન-મેપ્ડ multisite સ્થાપનો માટે આ ભલામણ કરાયેલ અભિગમ છે, કારણ કે Cloudflare દરેક કસ્ટમ ડોમેન માટે SSL પ્રમાણપત્ર જારીકરણ અને નવીકરણ આપમેળે સંચાલિત કરે છે.

### તે પ્રમાણભૂત Cloudflare એકીકરણથી કેવી રીતે જુદું છે {#how-it-differs-from-the-standard-cloudflare-integration}

| | પ્રમાણભૂત એકીકરણ | Cloudflare Custom Hostnames |
|---|---|---|
| **હેતુ** | સબડોમેન માટે DNS રેકોર્ડ્સ આપમેળે બનાવે છે | Cloudflare-સંચાલિત SSL સાથે કસ્ટમ (મેપ્ડ) ડોમેન સક્ષમ કરે છે |
| **માટે શ્રેષ્ઠ** | સબડોમેન multisite | ડોમેન-મેપ્ડ multisite |
| **SSL** | અલગથી સંભાળવામાં આવે છે | Cloudflare દ્વારા આપમેળે સંચાલિત |

### Cloudflare Custom Hostnames સેટ અપ કરવું {#setting-up-cloudflare-custom-hostnames}

1. તમારા Cloudflare dashboard માં, તમારા મુખ્ય ડોમેન માટેનો zone ખોલો.
2. **SSL/TLS > Custom Hostnames** પર જાઓ.
3. તમારા સર્વરના IP અથવા hostname તરફ સૂચવતું fallback origin ઉમેરો.
4. Ultimate Multisite માં મેપ કરેલા દરેક ગ્રાહક ડોમેન માટે, Cloudflare માં Custom Hostname એન્ટ્રી ઉમેરો. તમે Cloudflare API નો ઉપયોગ કરીને આ પગલું સ્વચાલિત કરી શકો છો.
5. ગ્રાહકનું DNS તમારા નેટવર્ક તરફ સૂચવ્યા પછી Cloudflare દરેક કસ્ટમ hostname માટે TLS પ્રમાણપત્રો આપમેળે જારી અને નવીકરણ કરે છે.

સંપૂર્ણ API સંદર્ભ માટે, [Cloudflare Custom Hostnames દસ્તાવેજીકરણ](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) જુઓ.

:::note પરિભાષા અપડેટ
Ultimate Multisite v2.6.1 મુજબ, તમામ plugin settings અને labels માં આ સુવિધાને **Cloudflare Custom Hostnames** તરીકે ઓળખવામાં આવે છે. અગાઉના સંસ્કરણોમાં "Cloudflare for SaaS" નામનો ઉપયોગ થતો હતો, જે મૂળભૂત Cloudflare ઉત્પાદનનું નામ છે.
:::

## મહત્વપૂર્ણ નોંધો {#important-notes}

Cloudflare ના તાજેતરના અપડેટ્સ મુજબ, wildcard proxying હવે તમામ ગ્રાહકો માટે ઉપલબ્ધ છે. તેનો અર્થ એ છે કે પ્રમાણભૂત Cloudflare DNS એકીકરણ સબડોમેન multisite સ્થાપનો માટે પહેલાં જેટલું મહત્વપૂર્ણ નથી, કારણ કે તમે Cloudflare માં સરળતાથી wildcard DNS રેકોર્ડ સેટ અપ કરી શકો છો.

## સમસ્યાનિવારણ {#troubleshooting}

### API કનેક્શન સમસ્યાઓ {#api-connection-issues}
- ચકાસો કે તમારો API token સાચો છે અને જરૂરી પરવાનગીઓ ધરાવે છે
- તપાસો કે તમારો Zone ID સાચો છે
- ખાતરી કરો કે તમારા Cloudflare account પાસે જરૂરી પરવાનગીઓ છે

### સબડોમેન ઉમેરાયો નથી {#subdomain-not-added}
- કોઈપણ ભૂલ સંદેશાઓ માટે Ultimate Multisite logs તપાસો
- ચકાસો કે સબડોમેન પહેલેથી જ Cloudflare માં ઉમેરાયેલો નથી
- ખાતરી કરો કે તમારો Cloudflare plan તમે બનાવી રહ્યા છો તે DNS રેકોર્ડ્સની સંખ્યાને સપોર્ટ કરે છે

### પ્રોક્સીંગ સમસ્યાઓ {#proxying-issues}
- જો તમે સબડોમેન પ્રોક્સી ન થાય એવું ઇચ્છો છો, તો તમે `wu_cloudflare_should_proxy` filter નો ઉપયોગ કરી શકો છો
- પ્રોક્સી કરવામાં આવે ત્યારે કેટલીક સુવિધાઓ યોગ્ય રીતે કામ ન કરી શકે (દા.ત., ચોક્કસ WordPress એડમિન functions)
- એડમિન પેજ માટે cache બાયપાસ કરવા Cloudflare ના Page Rules નો ઉપયોગ કરવાનો વિચાર કરો
