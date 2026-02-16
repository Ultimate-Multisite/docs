---
title: cPanel એકીકરણ
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integration

## ઝાંખી
cPanel એ સૌથી લોકપ્રિય વેબ હોસ્ટિંગ કંટ્રોલ પેનલમાંનું એક છે જેનો ઉપયોગ ઘણા shared અને dedicated hosting પ્રદાતાઓ કરે છે. આ integration Ultimate Multisite અને cPanel વચ્ચે automatic domain syncing ને સક્ષમ બનાવે છે, જેનાથી તમે તમારા cPanel એકાઉન્ટમાં domain aliases અને subdomains આપોઆપ ઉમેરી શકો છો.

## લક્ષણો
- cPanel માં automatic addon domain creation
- cPanel માં automatic subdomain creation (subdomain multisite installations માટે)
- Mappings કાઢી નાખવામાં આવે ત્યારે domain removal

## જરૂરિયાતો
નીચેના constants તમારી `wp-config.php` ફાઇલમાં define કરવા જરૂરી છે:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

વૈકલ્પિક રીતે, તમે આ પણ define કરી શકો છો:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Setup સૂચનાઓ

### 1. તમારા cPanel Credentials મેળવો

1. તમારા hosting provider પાસેથી તમારું cPanel username અને password મેળવો
2. તમારો cPanel host નક્કી કરો (સામાન્ય રીતે `cpanel.yourdomain.com` અથવા `yourdomain.com:2083`)

### 2. wp-config.php માં Constants ઉમેરો

તમારી `wp-config.php` ફાઇલમાં નીચેના constants ઉમેરો:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

વૈકલ્પિક રીતે, તમે port અને root directory customize કરી શકો છો:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Integration Enable કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" tab પર navigate કરો
3. "Host Integrations" સુધી નીચે scroll કરો
4. cPanel integration enable કરો
5. "Save Changes" પર click કરો

## તે કેવી રીતે કામ કરે છે

### Addon Domains

જ્યારે Ultimate Multisite માં domain map કરવામાં આવે છે:

1. Integration domain ને addon domain તરીકે ઉમેરવા માટે cPanel ના API ને request મોકલે છે
2. Domain તમારી root directory તરફ point કરવા માટે configure થાય છે
3. જ્યારે domain mapping દૂર કરવામાં આવે છે, ત્યારે integration cPanel માંથી addon domain દૂર કરશે

### Subdomains

Subdomain multisite installations માટે, જ્યારે નવી site બનાવવામાં આવે છે:

1. Integration full domain માંથી subdomain part extract કરે છે
2. તે subdomain ઉમેરવા માટે cPanel ના API ને request મોકલે છે
3. Subdomain તમારી root directory તરફ point કરવા માટે configure થાય છે

## મહત્વપૂર્ણ નોંધો

- Integration તમારા cPanel account સાથે communicate કરવા માટે cPanel ના API2 નો ઉપયોગ કરે છે
- તમારા cPanel account પાસે addon domains અને subdomains ઉમેરવાની permissions હોવી જરૂરી છે
- કેટલાક hosting providers તમે બનાવી શકો તે addon domains અથવા subdomains ની સંખ્યા મર્યાદિત કરી શકે છે
- Integration DNS configuration handle કરતું નથી; તમારે હજુ પણ તમારા domains ને તમારા server ના IP address તરફ point કરવાની જરૂર છે

## સમસ્યાનું નિવારણ

### API Connection Issues
- ખાતરી કરો કે તમારું cPanel username અને password સાચા છે
- ચકાસો કે તમારો cPanel host સાચો છે અને accessible છે
- ખાતરી કરો કે તમારા cPanel account પાસે જરૂરી permissions છે
- Host માટે full URL વાપરવાનો પ્રયાસ કરો (દા.ત., `https://cpanel.yourdomain.com`)

### Domain ઉમેરાયું નથી
- કોઈપણ error messages માટે Ultimate Multisite logs ચકાસો
- ખાતરી કરો કે domain પહેલેથી cPanel માં ઉમેરાયેલું નથી
- ખાતરી કરો કે તમારા cPanel account એ addon domains અથવા subdomains માટેની તેની limit સુધી પહોંચ્યું નથી

### SSL Certificate Issues
- Integration SSL certificate issuance handle કરતું નથી
- તમારા domains માટે SSL certificates issue કરવા માટે તમારે cPanel ના SSL/TLS tools અથવા AutoSSL feature નો ઉપયોગ કરવો પડશે
- વૈકલ્પિક રીતે, તમે cPanel ના AutoSSL સાથે Let's Encrypt જેવી service નો ઉપયોગ કરી શકો છો
