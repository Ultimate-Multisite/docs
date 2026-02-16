---
title: WPMU DEV એકીકરણ
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV ઇન્ટિગ્રેશન

## ઝાંખી
WPMU DEV એ એક સંપૂર્ણ WordPress પ્લેટફોર્મ છે જે WordPress સાઇટ્સ માટે hosting, plugins અને સેવાઓ પ્રદાન કરે છે. આ ઇન્ટિગ્રેશન Ultimate Multisite અને WPMU DEV hosting વચ્ચે ઓટોમેટિક domain syncing અને SSL certificate મેનેજમેન્ટ સક્ષમ કરે છે.

## ફીચર્સ
- ઓટોમેટિક domain syncing
- SSL certificate મેનેજમેન્ટ
- SSL certificate ચકાસણીના વધારાના પ્રયાસો

## જરૂરિયાતો
જો તમે WPMU DEV પર hosting કરો છો તો ઇન્ટિગ્રેશન આપોઆપ શોધી કાઢે છે અને built-in API નો ઉપયોગ કરે છે. જો તમે WPMU DEV પર hosting કરો છો તો કોઈ વધારાની configuration ની જરૂર નથી.

ઇન્ટિગ્રેશન `WPMUDEV_HOSTING_SITE_ID` constant ની હાજરી ચકાસે છે, જે WPMU DEV પર hosting કરતી વખતે આપોઆપ define થાય છે.

## Setup સૂચનાઓ

### 1. WPMU DEV Hosting ચકાસો

જો તમે WPMU DEV પર hosting કરો છો, તો જરૂરી constants પહેલેથી define થયેલા હોવા જોઈએ. ચકાસો કે:

1. તમારા environment માં `WPMUDEV_HOSTING_SITE_ID` constant define થયેલો છે
2. તમારી પાસે API access સાથે active WPMU DEV membership છે

### 2. ઇન્ટિગ્રેશન સક્ષમ કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" tab પર navigate કરો
3. "Host Integrations" સુધી scroll કરો
4. WPMU DEV ઇન્ટિગ્રેશન સક્ષમ કરો
5. "Save Changes" પર ક્લિક કરો

## તે કેવી રીતે કામ કરે છે

### Domain Syncing

જ્યારે Ultimate Multisite માં domain map થાય છે:

1. ઇન્ટિગ્રેશન તમારા hosting account માં domain ઉમેરવા માટે WPMU DEV API નો ઉપયોગ કરે છે
2. તે domain ના www version ને પણ આપોઆપ ઉમેરે છે
3. WPMU DEV domain configuration અને SSL certificate issuance સંભાળે છે

### SSL Certificate મેનેજમેન્ટ

ઇન્ટિગ્રેશન WPMU DEV hosting માટે SSL certificate ચકાસણીના પ્રયાસોની સંખ્યા વધારવા માટે configure થયેલું છે, કારણ કે SSL certificates issue અને install થવામાં થોડો સમય લાગી શકે છે. default રૂપે, તે SSL certificate ચકાસણી માટે 10 વખત સુધી પ્રયાસ કરશે, જ્યારે standard 5 પ્રયાસો છે.

## મહત્વપૂર્ણ નોંધો

### Domain દૂર કરવું

હાલમાં, WPMU DEV API domains દૂર કરવાની રીત પ્રદાન કરતું નથી. જ્યારે Ultimate Multisite માં domain mapping દૂર કરવામાં આવે છે, ત્યારે domain તમારા WPMU DEV hosting account માં રહેશે. જો જરૂરી હોય તો તમારે તેને WPMU DEV hosting dashboard માંથી manually દૂર કરવું પડશે.

### API Authentication

ઇન્ટિગ્રેશન WPMU DEV API key નો ઉપયોગ કરે છે જે તમારા WordPress database માં `wpmudev_apikey` option તરીકે store થયેલી છે. જ્યારે તમે તમારી site ને WPMU DEV સાથે connect કરો છો ત્યારે આ આપોઆપ set up થાય છે.

## મુશ્કેલીનિવારણ

### API Connection સમસ્યાઓ
- ચકાસો કે તમારી site WPMU DEV સાથે યોગ્ય રીતે connected છે
- ચકાસો કે `wpmudev_apikey` option તમારા WordPress database માં set છે
- ખાતરી કરો કે તમારું WPMU DEV membership active છે

### SSL Certificate સમસ્યાઓ
- WPMU DEV ને SSL certificates issue કરવામાં થોડો સમય લાગી શકે છે (સામાન્ય રીતે 5-15 મિનિટ)
- ઇન્ટિગ્રેશન SSL certificates માટે 10 વખત સુધી ચકાસવા માટે configure થયેલું છે
- જો ઘણા પ્રયાસો પછી પણ SSL certificates issue નથી થઈ રહ્યા, તો WPMU DEV support નો સંપર્ક કરો

### Domain ઉમેરાયું નહીં
- કોઈપણ error messages માટે Ultimate Multisite logs ચકાસો
- ચકાસો કે domain પહેલેથી WPMU DEV માં ઉમેરાયેલું નથી
- ખાતરી કરો કે તમારો WPMU DEV hosting plan તમે ઉમેરી રહ્યા છો તેટલા domains ને support કરે છે
