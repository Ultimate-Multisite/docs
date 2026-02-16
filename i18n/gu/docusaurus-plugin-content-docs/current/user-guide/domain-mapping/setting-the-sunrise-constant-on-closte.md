---
title: Closte પર Sunrise Constant સેટ કરવું
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte પર Sunrise constant ને true સેટ કરવું

કેટલાક host providers સુરક્ષાના કારણોસર wp-config.php ને lock કરી દે છે. આનો અર્થ એ છે કે Ultimate Multisite domain mapping અને અન્ય features કામ કરે તે માટે જરૂરી constants ઉમેરવા માટે આ ફાઇલને આપોઆપ edit કરી શકતું નથી. Closte આવો જ એક host છે.

જો કે, Closte wp-config.php માં constants ઉમેરવાની એક સુરક્ષિત રીત આપે છે. તમારે ફક્ત નીચેના steps અનુસરવાની જરૂર છે:

## Closte dashboard પર

સૌ પ્રથમ, [તમારા Closte account માં log in કરો](https://app.closte.com/), Sites menu item પર click કરો, પછી તમે હાલમાં જે site પર કામ કરી રહ્યા છો તેની Dashboard link પર click કરો:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

તમને screen ની ડાબી બાજુએ ઘણા નવા menu items દેખાશે. તે menu નો ઉપયોગ કરીને **Settings** page પર જાઓ:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

પછી, **Settings** પર, WP-Config tab શોધો, અને પછી તે tab પર "Additional wp-config.php content" field શોધો:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite install કરવાના સંદર્ભમાં, તમારે તે field માં sunrise constant ઉમેરવાની જરૂર પડશે. બસ એક નવી line ઉમેરો અને નીચેની line paste કરો. તે પછી, **Save All** button પર click કરો.

define('SUNRISE', true);

બસ, તમે તૈયાર છો. Ultimate Multisite install wizard પર પાછા જાઓ અને process ચાલુ રાખવા માટે page refresh કરો.
