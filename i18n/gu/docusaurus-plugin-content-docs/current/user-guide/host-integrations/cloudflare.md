---
title: Cloudflare એકીકરણ
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare એકીકરણ

## સિંહાવલોકન
Cloudflare એક અગ્રણી content delivery network (CDN) અને સુરક્ષા પ્રદાતા છે જે વેબસાઇટ્સને સુરક્ષિત અને ઝડપી બનાવવામાં મદદ કરે છે. આ એકીકરણ Ultimate Multisite અને Cloudflare વચ્ચે સ્વચાલિત ડોમેન વ્યવસ્થાપન સક્ષમ કરે છે, ખાસ કરીને subdomain multisite ઇન્સ્ટોલેશન માટે.

## વિશેષતાઓ
- Cloudflare માં સ્વચાલિત subdomain નિર્માણ
- પ્રોક્સી કરેલ subdomain સપોર્ટ
- DNS રેકોર્ડ વ્યવસ્થાપન
- Ultimate Multisite admin માં વધારિત DNS રેકોર્ડ પ્રદર્શન

## આવશ્યકતાઓ
તમારી `wp-config.php` ફાઇલમાં નીચેના constants વ્યાખ્યાયિત કરવા જરૂરી છે:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## સેટઅપ સૂચનાઓ

### 1. તમારી Cloudflare API Key મેળવો

1. તમારા Cloudflare dashboard માં લૉગ ઇન કરો
2. "My Profile" પર જાઓ (ઉપર-જમણા ખૂણામાં તમારા ઈમેલ પર ક્લિક કરો)
3. મેનૂમાંથી "API Tokens" પસંદ કરો
4. નીચેની permissions સાથે નવું API token બનાવો:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. તમારું API token કૉપી કરો

### 2. તમારું Zone ID મેળવો

1. તમારા Cloudflare dashboard માં, તમે ઉપયોગ કરવા માંગો છો તે ડોમેન પસંદ કરો
2. Zone ID "Overview" ટેબમાં, જમણી sidebar માં "API" હેઠળ દેખાય છે
3. Zone ID કૉપી કરો

### 3. wp-config.php માં Constants ઉમેરો

તમારી `wp-config.php` ફાઇલમાં નીચેના constants ઉમેરો:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. એકીકરણ સક્ષમ કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" ટેબ પર નેવિગેટ કરો
3. "Host Integrations" સુધી નીચે સ્ક્રોલ કરો
4. Cloudflare એકીકરણ સક્ષમ કરો
5. "Save Changes" પર ક્લિક કરો

## તે કેવી રીતે કામ કરે છે

### Subdomain વ્યવસ્થાપન

જ્યારે subdomain multisite ઇન્સ્ટોલેશનમાં નવી સાઇટ બનાવવામાં આવે છે:

1. એકીકરણ subdomain માટે CNAME રેકોર્ડ ઉમેરવા Cloudflare ના API ને વિનંતી મોકલે છે
2. subdomain ડિફૉલ્ટ રૂપે Cloudflare દ્વારા પ્રોક્સી થવા માટે ગોઠવાયેલ છે (આ filters વડે બદલી શકાય છે)
3. જ્યારે સાઇટ ડિલીટ કરવામાં આવે છે, ત્યારે એકીકરણ Cloudflare માંથી subdomain દૂર કરશે

### DNS રેકોર્ડ પ્રદર્શન

એકીકરણ Ultimate Multisite admin માં DNS રેકોર્ડ પ્રદર્શનને આ રીતે વધારે છે:

1. Cloudflare માંથી સીધા DNS રેકોર્ડ મેળવે છે
2. રેકોર્ડ પ્રોક્સી છે કે નહીં તે બતાવે છે
3. DNS રેકોર્ડ વિશે વધારાની માહિતી દર્શાવે છે

## મહત્વની નોંધો

Cloudflare ના તાજેતરના અપડેટ્સ મુજબ, wildcard proxying હવે તમામ ગ્રાહકો માટે ઉપલબ્ધ છે. આનો અર્થ એ છે કે Cloudflare એકીકરણ subdomain multisite ઇન્સ્ટોલેશન માટે પહેલાં જેટલું જરૂરી નથી, કારણ કે તમે Cloudflare માં ફક્ત wildcard DNS રેકોર્ડ સેટ કરી શકો છો.

## સમસ્યાનિવારણ

### API કનેક્શન સમસ્યાઓ
- ચકાસો કે તમારું API token સાચું છે અને જરૂરી permissions ધરાવે છે
- ખાતરી કરો કે તમારું Zone ID સાચું છે
- ખાતરી કરો કે તમારા Cloudflare એકાઉન્ટ પાસે જરૂરી permissions છે

### Subdomain ઉમેરાયું નથી
- કોઈપણ error messages માટે Ultimate Multisite logs તપાસો
- ચકાસો કે subdomain પહેલેથી Cloudflare માં ઉમેરાયેલું નથી
- ખાતરી કરો કે તમારો Cloudflare પ્લાન તમે બનાવી રહ્યા છો તે DNS રેકોર્ડ્સની સંખ્યાને સપોર્ટ કરે છે

### Proxying સમસ્યાઓ
- જો તમે subdomains ને પ્રોક્સી કરવા માંગતા નથી, તો તમે `wu_cloudflare_should_proxy` filter નો ઉપયોગ કરી શકો છો
- પ્રોક્સી કરવામાં આવે ત્યારે કેટલીક સુવિધાઓ યોગ્ય રીતે કામ ન કરી શકે (દા.ત., અમુક WordPress admin functions)
- admin pages માટે cache bypass કરવા Cloudflare ના Page Rules નો ઉપયોગ કરવાનું વિચારો
