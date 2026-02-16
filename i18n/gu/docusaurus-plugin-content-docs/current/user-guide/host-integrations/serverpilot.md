---
title: ServerPilot એકીકરણ
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot ઇન્ટિગ્રેશન

## સંક્ષિપ્ત વિહંગાવલોકન
ServerPilot એ DigitalOcean, Amazon, Google અથવા અન્ય કોઈપણ સર્વર પ્રદાતા પર WordPress અને અન્ય PHP વેબસાઇટ્સ હોસ્ટ કરવા માટેની ક્લાઉડ સેવા છે. આ ઇન્ટિગ્રેશન Ultimate Multisite અને ServerPilot વચ્ચે ઓટોમેટિક ડોમેન સિંકિંગ અને SSL certificate મેનેજમેન્ટ સક્ષમ કરે છે.

## સુવિધાઓ
- ઓટોમેટિક ડોમેન સિંકિંગ
- Let's Encrypt સાથે SSL certificate મેનેજમેન્ટ
- ઓટોમેટિક SSL રિન્યુઅલ

## જરૂરિયાતો
તમારી `wp-config.php` ફાઇલમાં નીચેના constants વ્યાખ્યાયિત કરવા આવશ્યક છે:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## સેટઅપ સૂચનાઓ

### 1. તમારા ServerPilot API ક્રેડેન્શિયલ્સ મેળવો

1. તમારા ServerPilot dashboard માં લોગ ઇન કરો
2. "Account" > "API" પર જાઓ
3. જો તમારી પાસે પહેલેથી API key ન હોય તો નવી બનાવો
4. તમારું Client ID અને API Key કોપી કરો

### 2. તમારું App ID મેળવો

1. તમારા ServerPilot dashboard માં, "Apps" પર જાઓ
2. જે app પર તમારી WordPress multisite હોસ્ટ છે તે પસંદ કરો
3. App ID URL માં દેખાય છે: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php માં Constants ઉમેરો

તમારી `wp-config.php` ફાઇલમાં નીચેના constants ઉમેરો:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. ઇન્ટિગ્રેશન સક્રિય કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" ટેબ પર જાઓ
3. "Host Integrations" સુધી નીચે સ્ક્રોલ કરો
4. ServerPilot ઇન્ટિગ્રેશન સક્રિય કરો
5. "Save Changes" પર ક્લિક કરો

## આ કેવી રીતે કામ કરે છે

### ડોમેન સિંકિંગ

જ્યારે Ultimate Multisite માં ડોમેન મેપ થાય છે:

1. ઇન્ટિગ્રેશન ServerPilot માંથી ડોમેન્સની વર્તમાન યાદી મેળવે છે
2. તે નવા ડોમેનને યાદીમાં ઉમેરે છે (જો લાગુ પડતું હોય તો www version સાથે)
3. તે API દ્વારા અપડેટ થયેલી યાદી ServerPilot ને મોકલે છે
4. ServerPilot તમારી એપ્લિકેશન માટે ડોમેન યાદી અપડેટ કરે છે

### SSL Certificate મેનેજમેન્ટ

ડોમેન્સ સિંક થયા પછી:

1. ઇન્ટિગ્રેશન તમારી એપ્લિકેશન માટે ઓટોમેટિક AutoSSL સક્રિય કરે છે
2. ServerPilot Let's Encrypt નો ઉપયોગ કરીને SSL certificate જારી અને ઇન્સ્ટોલ કરે છે
3. ServerPilot SSL certificates નું ઓટોમેટિક રિન્યુઅલ પણ સંભાળે છે

## SSL Certificate ચકાસણી

આ ઇન્ટિગ્રેશન ServerPilot માટે SSL certificate ચકાસણીના પ્રયાસોની સંખ્યા વધારવા માટે ગોઠવાયેલું છે, કારણ કે ServerPilot ને SSL certificates જારી અને ઇન્સ્ટોલ કરવામાં થોડો સમય લાગી શકે છે. ડિફોલ્ટ રીતે, તે 5 વખત સુધી પ્રયાસ કરશે, પરંતુ આને filters નો ઉપયોગ કરીને એડજસ્ટ કરી શકાય છે.

## સમસ્યા નિવારણ

### API કનેક્શન સમસ્યાઓ
- ખાતરી કરો કે તમારું Client ID અને API Key સાચા છે
- ચકાસો કે તમારું App ID સાચું છે
- ખાતરી કરો કે તમારા ServerPilot એકાઉન્ટ પાસે જરૂરી permissions છે

### SSL Certificate સમસ્યાઓ
- ServerPilot માટે જરૂરી છે કે SSL certificates જારી કરતા પહેલા ડોમેન્સ પાસે તમારા સર્વર તરફ પોઇન્ટ થતા માન્ય DNS records હોય
- જો SSL certificates જારી થઈ રહ્યા નથી, તો ચકાસો કે તમારા ડોમેન્સ તમારા સર્વરના IP address તરફ યોગ્ય રીતે પોઇન્ટ થઈ રહ્યા છે
- ServerPilot ને SSL certificates જારી અને ઇન્સ્ટોલ કરવામાં થોડો સમય લાગી શકે છે (સામાન્ય રીતે 5-15 મિનિટ)

### ડોમેન ઉમેરાયું નથી
- કોઈપણ error messages માટે Ultimate Multisite logs ચકાસો
- ખાતરી કરો કે ડોમેન પહેલેથી ServerPilot માં ઉમેરાયેલું નથી
- ખાતરી કરો કે તમારો ServerPilot plan તમે ઉમેરી રહ્યા છો તેટલા ડોમેન્સને સપોર્ટ કરે છે

### ડોમેન દૂર કરવું
- હાલમાં, ServerPilot API વ્યક્તિગત ડોમેન્સ દૂર કરવાની રીત પ્રદાન કરતું નથી
- જ્યારે Ultimate Multisite માં domain mapping દૂર કરવામાં આવે છે, ત્યારે ઇન્ટિગ્રેશન દૂર કરેલા ડોમેનને બાકાત રાખવા માટે ServerPilot માં ડોમેન યાદી અપડેટ કરશે
