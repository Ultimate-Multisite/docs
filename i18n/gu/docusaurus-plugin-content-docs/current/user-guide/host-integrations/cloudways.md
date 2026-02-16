---
title: Cloudways ઇન્ટિગ્રેશન
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways ઇન્ટિગ્રેશન

## ઝાંખી
Cloudways એ managed cloud hosting પ્લેટફોર્મ છે જે તમને DigitalOcean, AWS, Google Cloud અને અન્ય cloud providers પર WordPress સાઇટ્સ deploy કરવાની મંજૂરી આપે છે. આ integration Ultimate Multisite અને Cloudways વચ્ચે automatic domain syncing અને SSL certificate management ને સક્ષમ કરે છે.

## વિશેષતાઓ
- Automatic domain syncing
- SSL certificate management
- વધારાના domains માટે સપોર્ટ
- SSL certificates માટે DNS validation

## જરૂરિયાતો
તમારી `wp-config.php` ફાઇલમાં નીચેના constants define કરવા જરૂરી છે:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

વૈકલ્પિક રીતે, તમે આ પણ define કરી શકો છો:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## સેટઅપ સૂચનાઓ

### 1. તમારા Cloudways API Credentials મેળવો

1. તમારા Cloudways dashboard માં લોગ ઇન કરો
2. "Account" > "API Keys" પર જાઓ
3. જો તમારી પાસે પહેલેથી API key નથી, તો એક generate કરો
4. તમારો email અને API key કોપી કરો

### 2. તમારા Server અને Application IDs મેળવો

1. તમારા Cloudways dashboard માં, "Servers" પર જાઓ
2. જે server પર તમારી WordPress multisite hosted છે તે પસંદ કરો
3. Server ID URL માં દેખાય છે: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" પર જાઓ અને તમારી WordPress application પસંદ કરો
5. App ID URL માં દેખાય છે: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php માં Constants ઉમેરો

તમારી `wp-config.php` ફાઇલમાં નીચેના constants ઉમેરો:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

જો તમારી પાસે વધારાના domains છે જે હંમેશા શામેલ હોવા જોઈએ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Integration સક્ષમ કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" ટેબ પર navigate કરો
3. "Host Integrations" સુધી scroll કરો
4. Cloudways integration સક્ષમ કરો
5. "Save Changes" પર ક્લિક કરો

## તે કેવી રીતે કાર્ય કરે છે

### Domain Syncing

જ્યારે Ultimate Multisite માં domain map થાય છે:

1. Integration હાલમાં map થયેલા બધા domains મેળવે છે
2. તે નવા domain ને list માં ઉમેરે છે (જો લાગુ પડે તો www version સાથે)
3. તે API દ્વારા Cloudways ને complete list મોકલે છે
4. Cloudways તમારી application માટે domain aliases અપડેટ કરે છે

નોંધ: Cloudways API ને દર વખતે domains ની complete list મોકલવાની જરૂર છે, ફક્ત individual domains ઉમેરવા કે દૂર કરવાની નહીં.

### SSL Certificate Management

Domains sync થયા પછી:

1. Integration તપાસે છે કે કયા domains પાસે તમારા server તરફ point કરતા valid DNS records છે
2. તે Cloudways ને Let's Encrypt SSL certificates install કરવા માટે request મોકલે છે
3. Cloudways SSL certificate issuance અને installation સંભાળે છે

## Extra Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant તમને વધારાના domains specify કરવાની મંજૂરી આપે છે જે Cloudways સાથે sync કરતી વખતે હંમેશા શામેલ હોવા જોઈએ. આ આ માટે ઉપયોગી છે:

- Domains જે Ultimate Multisite દ્વારા manage નથી થતા
- Wildcard domains (દા.ત., `*.example.com`)
- Development અથવા staging domains

## સમસ્યાનિવારણ

### API Connection સમસ્યાઓ
- ચકાસો કે તમારો email અને API key સાચા છે
- તપાસો કે તમારા server અને application IDs સાચા છે
- ખાતરી કરો કે તમારા Cloudways account પાસે જરૂરી permissions છે

### SSL Certificate સમસ્યાઓ
- Cloudways ને SSL certificates issue કરતા પહેલા domains પાસે તમારા server તરફ point કરતા valid DNS records હોવા જરૂરી છે
- Integration SSL certificates request કરતા પહેલા DNS records validate કરે છે
- જો SSL certificates issue નથી થઈ રહ્યા, તો તપાસો કે તમારા domains યોગ્ય રીતે તમારા server ના IP address તરફ point કરે છે

### Domain ઉમેરાયું નહીં
- કોઈપણ error messages માટે Ultimate Multisite logs તપાસો
- ચકાસો કે domain પહેલેથી Cloudways માં ઉમેરાયેલું નથી
- ખાતરી કરો કે તમારો Cloudways plan તમે ઉમેરી રહ્યા છો તે domains ની સંખ્યાને support કરે છે
