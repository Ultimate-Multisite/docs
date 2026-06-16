---
title: Ultimate Multisite ઇન્સ્ટોલ કરી રહ્યા છીએ
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite ની સ્થાપના

:::note
આ ટ્યુટોરિયલ ધારે છે કે તમારી પાસે WordPress Multisite ની સ્થાપના અને રૂપરેખાંકન પહેલેથી જ છે. તે શીખવા માટે, WP Beginner દ્વારા [આ ટ્યુટોરિયલ](https://www.wpbeginner.com/glossary/multisite/) તપાસો.
:::

## પ્લગઇનની સ્થાપના

Ultimate Multisite [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) પર મફત ઉપલબ્ધ છે.

તમારા **Network Admin Dashboard** માંથી, જાઓ **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (ચોક્કસ મેચ માટે કોટ્સ સાથે) શોધો અને તે પ્રથમ પરિણામ તરીકે દેખાશે. **Install Now** પર ક્લિક કરો.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

સ્થાપના પછી, તમારા સમગ્ર નેટવર્કમાં પ્લગઇનને સક્રિય કરવા માટે **Network Activate** પર ક્લિક કરો.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

સક્રિયતા પછી, તમને આપમેળે Setup Wizard પર રીડાયરેક્ટ કરવામાં આવશે.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## સેટઅપ વિઝાર્ડ

Setup Wizard તમને લગભગ 10 મિનિટમાં Ultimate Multisite ની રૂપરેખાંકન કરવા માટે માર્ગદર્શન આપશે.

### સ્વાગત

શરૂ કરવા માટે **Get Started** પર ક્લિક કરો.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### પ્રી-ઇન્સ્ટોલ ચેક્સ

આ પગલું તમારી સિસ્ટમ માહિતી અને WordPress સ્થાપનાની તપાસ કરે છે જેથી તે Ultimate Multisite ની આવશ્યકતાઓને પૂર્ણ કરે છે. જો બધું સારું દેખાય, તો **Go to the Next Step** પર ક્લિક કરો.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
જો Ultimate Multisite ની સ્થાપના થઈ હોય પણ **હજુ સુધી network-activated ન હોય** — ઉદાહરણ તરીકે, જો તમે નેટવર્ક પ્લગઇન સ્ક્રીન પરથી **Network Activate** ને બદલે **Activate** (સિંગલ-સાઇટ) પર ક્લિક કર્યું હોય — તો Pre-install Checks પગલું આની શોધ કરશે અને **Network Activate** બટન દર્શાવશે.

**Network Activate** પર ક્લિક કરવાથી પ્લગઇન તમારા સમગ્ર મલ્ટિસાઇટ નેટવર્કમાં આપમેળે સક્રિય થાય છે. એકવાર સક્રિય થયા પછી, વિઝાર્ડ સામાન્ય રીતે સ્થાપના પગલાં તરફ આગળ વધે છે. સક્રિયતાની સ્થિતિ સુધારવા માટે તમારે વિઝાર્ડ છોડવું પડતું નથી.
:::

### સ્થાપના

ઇન્સ્ટોલર જરૂરી ડેટાબેસ ટેબલ બનાવશે અને Ultimate Multisite ની કાર્યક્ષમતા માટે જરૂરી `sunrise.php` ફાઇલને સ્થાપિત કરશે. આગળ વધવા માટે **Install** પર ક્લિક કરો.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### તમારી કંપની

તમારી કંપનીની માહિતી ભરો અને તમારા ડિફોલ્ટ કરન્સી સેટ કરો. આ માહિતી તમારા WaaS પ્લેટફોર્મમાં વ્યાપક રીતે ઉપયોગમાં લેવાશે. પૂરું થયા પછી **Continue** પર ક્લિક કરો.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### ડિફોલ્ટ કન્ટેન્ટ

આ પગલું તમને પૂર્વ-વ્યાખ્યાયિત ટેમ્પલેટ, પ્રોડક્ટ અને અન્ય શરૂઆતનો કન્ટેન્ટ સ્થાપિત કરવાની મંજૂરી આપે છે. આ Ultimate Multisite ની વિશેષતાઓ સાથે પરિચિત થવાનો એક ઉત્તમ રસ્તો છે. ડિફોલ્ટ કન્ટેન્ટ ઉમેરવા માટે **Install** પર ક્લિક કરો, અથવા જો તમે શૂન્યમાંથી શરૂઆત કરવા પસંદ કરો છો તો આ પગલું સ્કિપ કરો.

![Default content installation step](/img/installation/wizard-default-content.png)

### ભલામણ કરેલા પ્લગઇન

વૈકલ્પિક રીતે ભલામણ કરેલા સાથી પ્લગઇન સ્થાપિત કરો. તે ઉમેરવા માટે **Install** પર ક્લિક કરો અથવા આગળ વધવા માટે સ્કિપ કરો.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### તૈયાર!

આટલું જ! તમારી Ultimate Multisite ની સ્થાપના પૂર્ણ થઈ ગઈ છે. હવે તમે **Network Admin Dashboard** માંથી તમારા Website as a Service પ્લેટફોર્મ બનાવવા શરૂ કરી શકો છો.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

આગળ વધો અને થોડું મજા કરો!
