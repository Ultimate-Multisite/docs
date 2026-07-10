---
title: Cloudways એકીકરણ
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways ઇન્ટિગ્રેશન {#cloudways-integration}

## સરવાળો {#overview}
Cloudways એક મેનેજ્ડ ક્લાઉડ હોસ્ટિંગ પ્લેટફોર્મ છે જે તમને DigitalOcean, AWS, Google Cloud અને વધુ જેવા વિવિધ ક્લાઉડ પ્રોવાઇડર્સ પર WordPress સાઇટ્સ ડિપ્લોય કરવાની મંજૂરી આપે છે. આ ઇન્ટિગ્રેશન Ultimate Multisite અને Cloudways વચ્ચે ઓટોમેટિક ડોમેન સિંકિંગ અને SSL સર્ટિફિકેટ મેનેજમેન્ટ સક્ષમ કરે છે.

## સુવિધાઓ {#features}
- ઓટોમેટિક ડોમેન સિંકિંગ
- SSL સર્ટિફિકેટ મેનેજમેન્ટ
- વધારાના ડોમેન્સ માટે સપોર્ટ
- SSL સર્ટિફિકેટ્સ માટે DNS વેલિડેશન

## આવશ્યકતાઓ {#requirements}
તમારી `wp-config.php` ફાઇલમાં નીચેના કોન્સ્ટન્ટ્સ વ્યાખ્યાયિત હોવા જોઈએ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

વૈકલ્પિક રીતે, તમે આ પણ વ્યાખ્યાયિત કરી શકો છો:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## સેટઅપ સૂચનાઓ {#setup-instructions}

### 1. તમારા Cloudways API ક્રેડેન્શિયલ્સ મેળવો {#1-get-your-cloudways-api-credentials}

1. તમારા Cloudways dashboard માં લોગ ઇન કરો
2. "Account" > "API Keys" પર જાઓ
3. જો તમારી પાસે પહેલેથી ન હોય તો API key જનરેટ કરો
4. તમારો ઇમેઇલ અને API key કૉપી કરો

### 2. તમારા Server અને Application IDs મેળવો {#2-get-your-server-and-application-ids}

1. તમારા Cloudways dashboard માં, "Servers" પર જાઓ
2. જ્યાં તમારું WordPress multisite હોસ્ટ થયેલું છે તે સર્વર પસંદ કરો
3. Server ID URL માં દેખાય છે: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" પર જાઓ અને તમારી WordPress એપ્લિકેશન પસંદ કરો
5. App ID URL માં દેખાય છે: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php માં કોન્સ્ટન્ટ્સ ઉમેરો {#3-add-constants-to-wp-configphp}

તમારી `wp-config.php` ફાઇલમાં નીચેના કોન્સ્ટન્ટ્સ ઉમેરો:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

જો તમારી પાસે વધારાના **બાહ્ય** ડોમેન્સ હોય (તમારા multisite નેટવર્કની બહાર) જે Cloudways aliases યાદીમાં હંમેશા રાખવા જોઈએ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning તમારા પોતાના નેટવર્કનું wildcard સામેલ ન કરો
`WU_CLOUDWAYS_EXTRA_DOMAINS` માં `*.your-network.com` (અથવા તમારા પોતાના નેટવર્કની કોઈપણ subdomain pattern) **ન** ઉમેરો. આ કેમ દરેક ટેનન્ટ માટે SSL સર્ટિફિકેટ્સ જારી થવાથી અટકાવે છે તે માટે નીચે [મહત્વપૂર્ણ — wildcard SSL ખામી](#important--wildcard-ssl-pitfall) જુઓ.
:::

### 4. ઇન્ટિગ્રેશન સક્ષમ કરો {#4-enable-the-integration}

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" ટૅબ પર નેવિગેટ કરો
3. "Host Integrations" સુધી નીચે સ્ક્રોલ કરો
4. Cloudways ઇન્ટિગ્રેશન સક્ષમ કરો
5. "Save Changes" ક્લિક કરો

## તે કેવી રીતે કાર્ય કરે છે {#how-it-works}

### ડોમેન સિંકિંગ {#domain-syncing}

જ્યારે Ultimate Multisite માં ડોમેન મેપ થાય છે:

1. ઇન્ટિગ્રેશન હાલમાં મેપ કરાયેલા બધા ડોમેન્સ મેળવે છે
2. તે યાદીમાં નવો ડોમેન ઉમેરે છે (લાગુ પડે તો www વર્ઝન સાથે)
3. તે API મારફતે Cloudways ને સંપૂર્ણ યાદી મોકલે છે
4. Cloudways તમારી એપ્લિકેશન માટે ડોમેન aliases અપડેટ કરે છે

નોંધ: Cloudways API માટે દરેક વખતે ડોમેન્સની સંપૂર્ણ યાદી મોકલવી જરૂરી છે, માત્ર અલગ-અલગ ડોમેન્સ ઉમેરવા કે દૂર કરવા પૂરતું નથી.

### SSL સર્ટિફિકેટ મેનેજમેન્ટ {#ssl-certificate-management}

ડોમેન્સ સિંક થયા પછી:

1. ઇન્ટિગ્રેશન તપાસે છે કે કયા ડોમેન્સમાં તમારા સર્વર તરફ સૂચવતા માન્ય DNS records છે
2. તે તે ડોમેન્સ માટે Let's Encrypt SSL સર્ટિફિકેટ્સ ઇન્સ્ટોલ કરવા Cloudways ને વિનંતી મોકલે છે
3. Cloudways SSL સર્ટિફિકેટ જારીકરણ અને ઇન્સ્ટોલેશન સંભાળે છે

ઇન્ટિગ્રેશન હંમેશા Cloudways પાસેથી **સ્ટાન્ડર્ડ** (non-wildcard) Let's Encrypt સર્ટિફિકેટ્સ માટે વિનંતી કરે છે. જો `WU_CLOUDWAYS_EXTRA_DOMAINS` માં wildcard pattern આપવામાં આવે, તો SSL વિનંતી પહેલાં શરૂઆતનું `*.` કાઢી નાખવામાં આવે છે — આ ઇન્ટિગ્રેશન દ્વારા wildcard પોતે ક્યારેય ઇન્સ્ટોલ થતું નથી. Cloudways પર wildcard સર્ટિફિકેટનો ઉપયોગ કરવા માટે તમારે તેને મેન્યુઅલી ઇન્સ્ટોલ કરવું પડશે, પરંતુ આમ કરવાથી મેપ કરાયેલા કસ્ટમ ડોમેન્સ માટે પ્રતિ-ડોમેન Let's Encrypt જારીકરણ બ્લોક થાય છે (નીચેની ખામી જુઓ).

## વધારાના ડોમેન્સ {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` કોન્સ્ટન્ટ તમને વધારાના **બાહ્ય**
ડોમેન્સ સ્પષ્ટ કરવાની મંજૂરી આપે છે જે Cloudways એપ્લિકેશનની aliases યાદીમાં હંમેશા રાખવા જોઈએ. તેનો ઉપયોગ આ માટે કરો:

- બાહ્ય ડોમેન્સ જે Ultimate Multisite દ્વારા મેનેજ થતા નથી (દા.ત. તે જ Cloudways એપ્લિકેશન શેર કરતી અલગ માર્કેટિંગ સાઇટ)
- પાર્ક કરેલા અથવા સ્ટેજિંગ ડોમેન્સ જેને તમે એપ્લિકેશન aliases યાદીમાં રાખવા માંગો છો

તમારા પોતાના નેટવર્કના subdomain wildcard માટે આ કોન્સ્ટન્ટનો ઉપયોગ **ન** કરો
(દા.ત. `*.your-network.com`). નીચે wildcard SSL ખામી જુઓ.

## મહત્વપૂર્ણ — Wildcard SSL ખામી {#important--wildcard-ssl-pitfall}

Cloudways ના ડિફોલ્ટ સેટઅપને અનુસરતી વખતે સામાન્ય ભૂલ એ છે કે
`WU_CLOUDWAYS_EXTRA_DOMAINS` માં `*.your-network.com` જેવા wildcard ઉમેરવું, અથવા તે wildcard માટે Cloudways wildcard SSL સર્ટિફિકેટ મેન્યુઅલી ઇન્સ્ટોલ કરવું.

**જો તમે આવું કરો છો, તો Cloudways Ultimate Multisite દ્વારા મેપ કરાયેલા પ્રતિ-ટેનન્ટ કસ્ટમ ડોમેન્સ માટે Let's Encrypt સર્ટિફિકેટ્સ જારી કરવાનો ઇનકાર કરશે.** Cloudways દરેક વખતે એપ્લિકેશન પર સક્રિય SSL સર્ટિફિકેટ બદલે છે, અને એપ્લિકેશન પર પહેલેથી હાજર wildcard સર્ટિફિકેટ ઇન્ટિગ્રેશન જેના પર આધાર રાખે છે તે પ્રતિ-ડોમેન Let's Encrypt જારીકરણને બ્લોક કરે છે.

### Ultimate Multisite નેટવર્ક માટે ભલામણ કરાયેલ Cloudways SSL સેટઅપ {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways એપ્લિકેશનની **SSL Certificate** ટૅબમાં, ફક્ત `your-network.com` અને `www.your-network.com` આવરી લેતું **સ્ટાન્ડર્ડ
   Let's Encrypt સર્ટિફિકેટ** ઇન્સ્ટોલ કરો
   — wildcard **નહીં**.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` માં `*.your-network.com` (અથવા તમારા પોતાના નેટવર્કની કોઈપણ subdomain pattern) **ન** મૂકો. તે કોન્સ્ટન્ટ માત્ર **બાહ્ય** ડોમેન્સ માટે જ રાખો.
3. પ્રતિ-ટેનન્ટ subdomain wildcard માત્ર **DNS** સ્તરે બનાવો (`*.your-network.com` માટે
   તમારા Cloudways સર્વર IP તરફ સૂચવતો `A` record) જેથી subsites resolve થાય. અલગ-અલગ મેપ કરાયેલા કસ્ટમ ડોમેન્સ માટે SSL ત્યારબાદ ઇન્ટિગ્રેશન દ્વારા Let's Encrypt મારફતે ઓટોમેટિક જારી થાય છે.

જો તમારા tenants ના custom domains SSL વિના અટવાયા હોય, તો Cloudways SSL tab તપાસો. જો ત્યાં
wildcard certificate સક્રિય હોય, તો તેને દૂર કરો, માત્ર મુખ્ય network domain માટે standard Let's Encrypt
certificate ફરીથી ઇશ્યૂ કરો, અને `WU_CLOUDWAYS_EXTRA_DOMAINS`માંથી કોઈપણ wildcard entries દૂર કરો.
પછી domain mapping ફરીથી ટ્રિગર કરો (અથવા આગામીની રાહ જુઓ)
અને integration ફરીથી per-domain certificates ઇશ્યૂ કરવાનું શરૂ કરશે.

## મુશ્કેલીનિવારણ {#troubleshooting}

### API Connection સમસ્યાઓ {#api-connection-issues}
- ચકાસો કે તમારો email અને API key સાચા છે
- ચકાસો કે તમારા server અને application IDs સાચા છે
- ખાતરી કરો કે તમારા Cloudways account પાસે જરૂરી permissions છે

### SSL Certificate સમસ્યાઓ {#ssl-certificate-issues}
- Cloudways માટે જરૂરી છે કે SSL certificates ઇશ્યૂ કરતાં પહેલાં domains પાસે તમારા server તરફ નિર્દેશ કરતા માન્ય DNS records હોય
- integration SSL certificates ની વિનંતી કરતાં પહેલાં DNS records માન્ય કરે છે
- જો SSL certificates ઇશ્યૂ થઈ રહ્યા ન હોય, તો તપાસો કે તમારા domains તમારા server ના IP address તરફ યોગ્ય રીતે નિર્દેશ કરી રહ્યા છે
- **Per-tenant custom domains SSL વિના અટવાયા છે?** Cloudways application ના SSL Certificate tab તપાસો. જો wildcard certificate (મેન્યુઅલી ઇન્સ્ટોલ કરાયેલ, અથવા `*.your-network.com` આવરી લેતું) સક્રિય હોય, તો Cloudways વ્યક્તિગત રીતે mapped custom domains માટે Let's Encrypt certificates ઇશ્યૂ નહીં કરે. તેને માત્ર મુખ્ય network domain (`your-network.com`, `www.your-network.com`) આવરી લેતા standard Let's Encrypt certificate થી બદલો અને `WU_CLOUDWAYS_EXTRA_DOMAINS`માંથી કોઈપણ wildcard entries દૂર કરો. પછી domain mapping ફરીથી ટ્રિગર કરો (અથવા આગામીની રાહ જુઓ) અને integration per-domain certificates માટે વિનંતી કરશે.

### Domain ઉમેરાયેલ નથી {#domain-not-added}
- કોઈપણ error messages માટે Ultimate Multisite logs તપાસો
- ચકાસો કે domain પહેલેથી Cloudways માં ઉમેરાયેલ નથી
- ખાતરી કરો કે તમારો Cloudways plan તમે ઉમેરી રહ્યા છો તે domains ની સંખ્યાને સપોર્ટ કરે છે
