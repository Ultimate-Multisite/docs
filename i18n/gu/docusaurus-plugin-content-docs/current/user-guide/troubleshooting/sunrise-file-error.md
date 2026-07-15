---
title: Sunrise ફાઇલ ભૂલ
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise ફાઇલ ઇન્સ્ટોલ કરવામાં Error

sunrise.php ફાઇલ એક ખાસ ફાઇલ છે જે WordPress શરૂ થતી વખતે શોધે છે. WordPress sunrise.php ફાઇલ શોધી શકે તે માટે, તે **wp-content folder** માં હોવી જરૂરી છે.

જ્યારે તમે Ultimate Multisite activate કરો છો અને screenshot માં બતાવ્યા મુજબ setup wizard માંથી પસાર થાઓ છો, ત્યારે Ultimate Multisite અમારી sunrise.php ફાઇલને wp-content folder માં copy કરવાનો પ્રયાસ કરે છે.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

મોટાભાગે, અમે ફાઇલ સફળતાપૂર્વક copy કરી શકીએ છીએ અને બધું બરાબર કામ કરે છે. જો કે, જો કંઈક યોગ્ય રીતે set up ન હોય (ઉદાહરણ તરીકે, folder permissions), તો તમને એવી પરિસ્થિતિ આવી શકે છે જ્યાં Ultimate Multisite ફાઇલ copy કરી શકતું નથી.

જો તમે Ultimo દ્વારા આપવામાં આવેલો error message વાંચો, તો તમને ખબર પડશે કે અહીં બરાબર એ જ થયું છે: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

આને ઠીક કરવા માટે, તમે wp-ultimo plugin folder માંથી sunrise.php ફાઇલને copy કરીને તમારા wp-content folder માં paste કરી શકો છો. આ કર્યા પછી, wizard page reload કરો અને checks પાસ થઈ જવા જોઈએ.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> ગમે તે હોય, ભવિષ્યમાં સમસ્યાઓ ટાળવા માટે તમારા folder permissions ની સામાન્ય તપાસ કરવી યોગ્ય રહેશે (માત્ર Ultimate Multisite માટે જ નહીં પણ અન્ય plugins અને themes માટે પણ).

**Health Check tool** જે WordPress નો ભાગ છે (તમે તમારી main site **admin panel > Tools > Health Check** દ્વારા access કરી શકો છો) તમને જણાવી શકે છે કે તમારા folder permissions એવા values પર set છે કે જે WordPress સાથે સમસ્યાઓ ઊભી કરી શકે છે.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
