---
title: Hostinger (hPanel) એકીકરણ
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## સંક્ષિપ્ત માહિતી (Overview)

Hostinger એક લોકપ્રિય વેબ હોસ્ટિંગ પ્રદાતા છે જે hPanel નામના આધુનિક કંટ્રોલ પેનલ સાથે આવે છે. Ultimate Multisite Hostinger integration Ultimate Multisite અને Hostinger ના hPanel વચ્ચે ડોમેનનું સ્વચાલિત (automatic) સિંકિંગ (syncing) સક્ષમ બનાવે છે. આનાથી તમે તમારા WordPress admin માંથી જ ડોમેન મેપિંગ અને સબડોમેનનું સંચાલન આપમેળે કરી શકો છો.

## વિશેષતાઓ (Features)

- hPanel માં આપમેળે એડ-ઓન ડોમેન બનાવવું
- hPanel માં આપમેળે સબડોમેન બનાવવું (સબડોમેન મલ્ટિસાઇટ ઇન્સ્ટોલેશન માટે)
- મેપિંગ્સ કાઢી નાખવામાં આવે ત્યારે ડોમેન દૂર કરવું
- hPanel ના ડોમેન મેનેજમેન્ટ API સાથે સરળ સંકલન (Seamless integration)

## જરૂરિયાતો (Requirements)

Hostinger integration નો ઉપયોગ કરવા માટે, તમારે નીચેની વસ્તુઓની જરૂર પડશે:

1. hPanel એક્સેસ સાથે એક Hostinger એકાઉન્ટ
2. Hostinger પાસેથી એક API ટોકન
3. તમારી `wp-config.php` ફાઇલમાં નીચેના કોન્સ્ટન્ટ્સ (constants) વ્યાખ્યાયિત કરવા પડશે:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

વૈકલ્પિક રીતે, તમે આ પણ વ્યાખ્યાયિત કરી શકો છો:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## સેટઅપ સૂચનાઓ (Setup Instructions)

### 1. તમારું Hostinger API ટોકન બનાવો (Generate Your Hostinger API Token)

1. તમારા Hostinger એકાઉન્ટમાં લોગ ઇન કરો અને hPanel એક્સેસ કરો.
2. **Account Settings** → **API Tokens** પર જાઓ.
3. **Create New Token** પર ક્લિક કરો.
4. તમારા ટોકનને એક વર્ણનાત્મક નામ આપો (દા.ત., "Ultimate Multisite").
5. જરૂરી પરવાનગીઓ (permissions) પસંદ કરો:
   - Domain management
   - Subdomain management
6. જનરેટ થયેલ ટોકન કોપી કરો અને તેને સુરક્ષિત રીતે સ્ટોર કરો.

### 2. તમારો એકાઉન્ટ ID શોધો (Find Your Account ID)

1. hPanel માં, **Account Settings** → **Account Information** પર જાઓ.
2. તમારો Account ID આ પેજ પર દેખાશે.
3. આ ID ને કોપી કરો અને આગલા પગલા માટે સેવ કરો.

### 3. wp-config.php માં કોન્સ્ટન્ટ્સ ઉમેરો (Add Constants to wp-config.php)

તમારી `wp-config.php` ફાઇલમાં નીચેના કોન્સ્ટન્ટ્સ ઉમેરો:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

જો તમારું Hostinger એકાઉન્ટ અલગ API endpoint નો ઉપયોગ કરતું હોય, તો તમે તેને કસ્ટમાઇઝ કરી શકો છો:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. integration ને સક્ષમ કરો (Enable the Integration)

1. તમારા WordPress admin માં, **Ultimate Multisite > Settings** પર જાઓ.
2. **Domain Mapping** ટેબ પર નેવિગેટ કરો.
3. **Host Integrations** સુધી સ્ક્રોલ કરો.
4. **Hostinger (hPanel)** integration ને સક્ષમ કરો.
5. **Save Changes** પર ક્લિક કરો.

## તે કેવી રીતે કામ કરે છે (How It Works)

### એડ-ઓન ડોમેન્સ (Addon Domains)

જ્યારે તમે Ultimate Multisite માં કોઈ ડોમેન મેપ કરો છો:

1. integration Hostinger ના API ને ડોમેનને એડ-ઓન ડોમેન તરીકે ઉમેરવા માટે વિનંતી (request) મોકલે છે.
2. ડોમેનને તમારા રૂટ ડિરેક્ટરી (root directory) તરફ પોઇન્ટ કરવા માટે configure કરવામાં આવે છે.
3. જ્યારે ડોમેન મેપિંગ દૂર કરવામાં આવે છે, ત્યારે integration આપમેળે hPanel માંથી એડ-ઓન ડોમેન દૂર કરે છે.

### સબડોમેન્સ (Subdomains)

સબડોમેન મલ્ટિસાઇટ ઇન્સ્ટોલેશન્સ માટે, જ્યારે નવું સાઇટ બનાવવામાં આવે છે:

1. integration સંપૂર્ણ ડોમેનમાંથી સબડોમેન ભાગ કાઢે છે.
2. તે સબડોમેન ઉમેરવા માટે Hostinger ના API ને વિનંતી મોકલે છે.
3. સબડોમેનને તમારા રૂટ ડિરેક્ટરી તરફ પોઇન્ટ કરવા માટે configure કરવામાં આવે છે.

## મહત્વપૂર્ણ નોંધો (Important Notes)

- આ integration તમારા એકાઉન્ટ સાથે વાતચીત કરવા માટે Hostinger ના REST API નો ઉપયોગ કરે છે.
- તમારા API ટોકનમાં ડોમેન અને સબડોમેન મેનેજમેન્ટ માટે જરૂરી પરવાનગીઓ હોવી જોઈએ.
- આ integration DNS configuration નું સંચાલન કરતું નથી; ડોમેન પહેલેથી જ તમારા Hostinger એકાઉન્ટ તરફ પોઇન્ટ થયેલા હોવા જોઈએ.
- API વિનંતીઓ સુરક્ષિત રીતે HTTPS દ્વારા કરવામાં આવે છે.
- તમારા API ટોકનને સુરક્ષિત રાખો અને તેને ક્યારેય જાહેર ન કરો.

## મુશ્કેલીનિવારણ (Troubleshooting)

### API કનેક્શન સમસ્યાઓ (API Connection Issues)

- ચકાસો કે તમારું API ટોકન સાચું છે અને તેની સમય મર્યાદા (expired) નથી થઈ.
- ખાતરી કરો કે તમારો Account ID સાચો છે.
- ખાતરી કરો કે તમારા API ટોકનમાં ડોમેન મેનેજમેન્ટ માટે જરૂરી પરવાનગીઓ છે.
- ચકાસો કે તમારું Hostinger એકાઉન્ટ active છે અને સારી સ્થિતિમાં છે.

### ડોમેન ઉમેરાયું નથી (Domain Not Added)

- કોઈપણ એરર મેસેજ માટે Ultimate Multisite logs તપાસો.
- ચકાસો કે ડોમેન પહેલેથી જ તમારા Hostinger એકાઉન્ટમાં ઉમેરાયું નથી.
- ખાતરી કરો કે તમારા Hostinger એકાઉન્ટમાં એડ-ઓન ડોમેન માટે તેની મર્યાદા (limit) પૂરી થઈ નથી.
- પુષ્ટિ કરો કે ડોમેન યોગ્ય રીતે તમારા Hostinger nameservers તરફ પોઇન્ટ થયેલ છે.

### SSL Certificate સમસ્યાઓ (SSL Certificate Issues)

- આ integration SSL certificate ઇશ્યૂઅન્સનું સંચાલન કરતું નથી.
- Hostinger સામાન્ય રીતે AutoSSL દ્વારા મફત SSL certificate પ્રદાન કરે છે.
- તમે **SSL/TLS** હેઠળ hPanel માં સીધા SSL certificate નું સંચાલન કરી શકો છો.
- વૈકલ્પિક રીતે, Hostinger ના AutoSSL ફીચર સાથે Let's Encrypt નો ઉપયોગ કરો.

## સપોર્ટ (Support)

Hostinger integration સાથે વધુ મદદ માટે, કૃપા કરીને આનો સંદર્ભ લો:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
