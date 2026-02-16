---
title: Closte Integration
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte ઇન્ટીગ્રેશન

## ઝાંખી
Closte એ Google Cloud ઇન્ફ્રાસ્ટ્રક્ચર પર બનેલું managed WordPress hosting platform છે. આ ઇન્ટીગ્રેશન Ultimate Multisite અને Closte વચ્ચે ઓટોમેટિક ડોમેઇન સિંકિંગ અને SSL સર્ટિફિકેટ મેનેજમેન્ટ સક્ષમ કરે છે.

## ફીચર્સ
- ઓટોમેટિક ડોમેઇન સિંકિંગ
- SSL સર્ટિફિકેટ મેનેજમેન્ટ
- Wildcard ડોમેઇન સપોર્ટ
- જો Closte પર ચાલી રહ્યું હોય તો કોઈ કૉન્ફિગરેશનની જરૂર નથી

## આવશ્યકતાઓ
જો તમે Closte વાપરી રહ્યા છો તો તમારી `wp-config.php` ફાઇલમાં નીચેનો constant define કરવો જરૂરી છે:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

જો તમે Closte પર hosting કરી રહ્યા છો તો આ constant સામાન્ય રીતે પહેલેથી જ define કરેલો હોય છે.

## સેટઅપ સૂચનાઓ

### 1. તમારી Closte API Key ચકાસો

જો તમે Closte પર hosting કરી રહ્યા છો, તો `CLOSTE_CLIENT_API_KEY` constant તમારી `wp-config.php` ફાઇલમાં પહેલેથી જ define કરેલો હોવો જોઈએ. તમે તમારી `wp-config.php` ફાઇલ તપાસીને આ ચકાસી શકો છો.

### 2. ઇન્ટીગ્રેશન સક્ષમ કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" ટેબ પર નેવિગેટ કરો
3. "Host Integrations" સુધી સ્ક્રોલ કરો
4. Closte ઇન્ટીગ્રેશન સક્ષમ કરો
5. "Save Changes" પર ક્લિક કરો

## આ કેવી રીતે કામ કરે છે

જ્યારે Ultimate Multisite માં ડોમેઇન map થાય છે:

1. ઇન્ટીગ્રેશન તમારી એપ્લિકેશનમાં ડોમેઇન ઉમેરવા માટે Closte ના API ને request મોકલે છે
2. Closte ઓટોમેટિક રીતે SSL સર્ટિફિકેટ provisioning સંભાળે છે
3. જ્યારે domain mapping દૂર કરવામાં આવે છે, ત્યારે ઇન્ટીગ્રેશન Closte માંથી ડોમેઇન દૂર કરશે

ઇન્ટીગ્રેશન Ultimate Multisite માં DNS check interval સેટિંગ સાથે પણ કામ કરે છે, જે તમને DNS propagation અને SSL સર્ટિફિકેટ issuance માટે સિસ્ટમ કેટલી વાર ચકાસે છે તે configure કરવાની મંજૂરી આપે છે.

## ડોમેઇન રેકોર્ડ બનાવવું

આ ઇન્ટીગ્રેશન સુનિશ્ચિત કરે છે કે જ્યારે સાઇટ બનાવવામાં આવે અથવા duplicate કરવામાં આવે ત્યારે ડોમેઇન રેકોર્ડ ઓટોમેટિક બને. Closte ઇન્ટીગ્રેશન માટે આ ખાસ કરીને મહત્વપૂર્ણ છે, કારણ કે ડોમેઇન રેકોર્ડ બનાવવાથી Closte API ને ડોમેઇન અને SSL સર્ટિફિકેટ બનાવવા માટે trigger થાય છે.

## સમસ્યાનિવારણ

### API કનેક્શન સમસ્યાઓ
- ચકાસો કે તમારી Closte API key સાચી છે
- ખાતરી કરો કે તમારા Closte એકાઉન્ટ પાસે જરૂરી permissions છે

### SSL સર્ટિફિકેટ સમસ્યાઓ
- Closte ને SSL સર્ટિફિકેટ issue કરવામાં થોડો સમય લાગી શકે છે (સામાન્ય રીતે 5-10 મિનિટ)
- ચકાસો કે તમારા ડોમેઇન્સ તમારા Closte સર્વરના IP address તરફ યોગ્ય રીતે point કરી રહ્યા છે
- ખાતરી કરો કે તમારા ડોમેઇન માટે DNS records યોગ્ય રીતે configure થયેલા છે

### ડોમેઇન ઉમેરાયું નથી
- કોઈપણ error messages માટે Ultimate Multisite logs તપાસો
- ચકાસો કે ડોમેઇન Closte માં પહેલેથી ઉમેરાયેલું નથી
- ખાતરી કરો કે તમારા ડોમેઇનના DNS records યોગ્ય રીતે configure થયેલા છે

### DNS Check Interval
- જો SSL સર્ટિફિકેટ issue થવામાં ઘણો સમય લાગી રહ્યો હોય, તો તમે Domain Mapping settings માં DNS check interval adjust કરી શકો છો
- Default interval 300 સેકન્ડ (5 મિનિટ) છે, પરંતુ testing દરમિયાન ઝડપી checking માટે તમે તેને 10 સેકન્ડ જેટલું ઓછું સેટ કરી શકો છો
