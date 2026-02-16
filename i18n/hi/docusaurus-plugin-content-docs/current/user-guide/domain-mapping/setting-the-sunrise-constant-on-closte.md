---
title: Closte पर Sunrise Constant सेट करना
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte पर Sunrise constant को true पर सेट करना

कुछ hosting providers सुरक्षा कारणों से wp-config.php फ़ाइल को lock कर देते हैं। इसका मतलब है कि Ultimate Multisite उस फ़ाइल को automatically edit नहीं कर सकता और domain mapping तथा अन्य features के लिए ज़रूरी constants नहीं जोड़ सकता। Closte ऐसा ही एक host है।

हालांकि, Closte आपको wp-config.php में constants जोड़ने का एक सुरक्षित तरीका देता है। बस नीचे दिए गए steps follow करें:

## Closte dashboard पर

सबसे पहले, [अपने Closte account में log in करें](https://app.closte.com/), Sites menu item पर click करें, फिर जिस site पर आप काम कर रहे हैं उसके Dashboard link पर click करें:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

आपको screen के बाईं तरफ कई नए menu items दिखाई देंगे। उस menu से **Settings** page पर जाएं:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

फिर, **Settings** में, WP-Config tab खोजें, और उस tab में "Additional wp-config.php content" field देखें:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite install करने के संदर्भ में, आपको उस field में sunrise constant जोड़ना होगा। बस एक नई line जोड़ें और नीचे दी गई line paste करें। उसके बाद, **Save All** button पर click करें।

define('SUNRISE', true);

बस इतना ही, आपका काम हो गया। Ultimate Multisite install wizard पर वापस जाएं और process जारी रखने के लिए page को refresh करें।
