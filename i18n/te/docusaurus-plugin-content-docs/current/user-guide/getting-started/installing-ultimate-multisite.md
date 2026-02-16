---
title: Ultimate Multisite ఇన్‌స్టాల్ చేయడం
sidebar_position: 12
_i18n_hash: 400c7f9fc01ce3a8275a1710ef7e903a
---
# Ultimate Multisite ఇన్‌స్టాల్ చేయడం

:::note
ఈ ట్యుటోరియల్ మీరు ఇప్పటికే WordPress Multisite ఇన్‌స్టాల్ చేసి కాన్ఫిగర్ చేసి ఉన్నారని అనుకుంటుంది. ఎలా చేయాలో తెలుసుకోవడానికి, WP Beginner వారి [ఈ ట్యుటోరియల్](https://www.wpbeginner.com/glossary/multisite/) చూడండి.
:::

## Plugin ఇన్‌స్టాల్ చేయడం

Ultimate Multisite [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/)లో ఉచితంగా అందుబాటులో ఉంది.

మీ **Network Admin Dashboard** నుండి, **Plugins → Add New Plugin** కి వెళ్ళండి.

![Network Admin Add New Plugin పేజీ](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (ఖచ్చితమైన మ్యాచ్ కోసం కొటేషన్ మార్కులతో) అని సెర్చ్ చేయండి, అది మొదటి ఫలితంగా కనిపిస్తుంది. **Install Now** క్లిక్ చేయండి.

![Ultimate Multisite చూపుతున్న సెర్చ్ ఫలితాలు](/img/installation/search-ultimate-multisite.png)

ఇన్‌స్టాల్ అయిన తర్వాత, మీ మొత్తం నెట్‌వర్క్‌లో plugin ను యాక్టివేట్ చేయడానికి **Network Activate** క్లిక్ చేయండి.

![Plugin ఇన్‌స్టాల్ అయి Network Activate బటన్ ఉన్న స్క్రీన్](/img/installation/plugin-installed.png)

యాక్టివేషన్ తర్వాత, మీరు స్వయంచాలకంగా Setup Wizard కి రీడైరెక్ట్ అవుతారు.

![Plugin యాక్టివేట్ అయి wizard కి రీడైరెక్ట్ అయిన స్క్రీన్](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard దాదాపు 10 నిమిషాల్లో Ultimate Multisite ను కాన్ఫిగర్ చేయడంలో మీకు మార్గదర్శనం చేస్తుంది.

### స్వాగతం

ప్రారంభించడానికి **Get Started** క్లిక్ చేయండి.

![Setup Wizard స్వాగత స్క్రీన్](/img/installation/wizard-welcome.png)

### ప్రీ-ఇన్‌స్టాల్ తనిఖీలు

ఈ దశ మీ సిస్టమ్ సమాచారాన్ని మరియు WordPress ఇన్‌స్టాలేషన్‌ను Ultimate Multisite అవసరాలను తీరుస్తుందో లేదో నిర్ధారించడానికి తనిఖీ చేస్తుంది. అన్నీ సరిగ్గా ఉంటే, **Go to the Next Step** క్లిక్ చేయండి.

![సిస్టమ్ అవసరాలు చూపుతున్న ప్రీ-ఇన్‌స్టాల్ తనిఖీలు](/img/installation/wizard-pre-install-checks.png)

### ఇన్‌స్టాలేషన్

ఇన్‌స్టాలర్ అవసరమైన డేటాబేస్ టేబుల్స్‌ను సృష్టిస్తుంది మరియు Ultimate Multisite పని చేయడానికి అవసరమైన `sunrise.php` ఫైల్‌ను ఇన్‌స్టాల్ చేస్తుంది. కొనసాగించడానికి **Install** క్లిక్ చేయండి.

![డేటాబేస్ టేబుల్స్ మరియు sunrise.php చూపుతున్న ఇన్‌స్టాలేషన్ దశ](/img/installation/wizard-installation.png)

### మీ కంపెనీ

మీ కంపెనీ సమాచారాన్ని నింపండి మరియు మీ డిఫాల్ట్ కరెన్సీని సెట్ చేయండి. ఈ సమాచారం మీ WaaS ప్లాట్‌ఫారమ్ అంతటా ఉపయోగించబడుతుంది. పూర్తయినప్పుడు **Continue** క్లిక్ చేయండి.

![మీ కంపెనీ కాన్ఫిగరేషన్ దశ](/img/installation/wizard-your-company.png)

### డిఫాల్ట్ కంటెంట్

ఈ దశ మీకు ముందుగా నిర్వచించిన టెంప్లేట్లు, ప్రొడక్ట్‌లు మరియు ఇతర స్టార్టర్ కంటెంట్‌ను ఇన్‌స్టాల్ చేయడానికి అనుమతిస్తుంది. Ultimate Multisite ఫీచర్లతో పరిచయం పొందడానికి ఇది మంచి మార్గం. డిఫాల్ట్ కంటెంట్‌ను జోడించడానికి **Install** క్లిక్ చేయండి, లేదా మొదటి నుండి ప్రారంభించాలనుకుంటే ఈ దశను స్కిప్ చేయండి.

![డిఫాల్ట్ కంటెంట్ ఇన్‌స్టాలేషన్ దశ](/img/installation/wizard-default-content.png)

### సిఫారసు చేసిన Plugins

ఐచ్ఛికంగా సిఫారసు చేసిన companion plugins ను ఇన్‌స్టాల్ చేయండి. వాటిని జోడించడానికి **Install** క్లిక్ చేయండి లేదా కొనసాగించడానికి స్కిప్ చేయండి.

![సిఫారసు చేసిన plugins దశ](/img/installation/wizard-recommended-plugins.png)

### సిద్ధం!

అంతే! మీ Ultimate Multisite ఇన్‌స్టాలేషన్ పూర్తయింది. మీరు ఇప్పుడు **Network Admin Dashboard** నుండి మీ Website as a Service ప్లాట్‌ఫారమ్‌ను నిర్మించడం ప్రారంభించవచ్చు.

![సెటప్ పూర్తయింది - సిద్ధం స్క్రీన్](/img/installation/wizard-ready.png)

![Ultimate Multisite యాక్టివ్‌గా ఉన్న Network Admin Dashboard](/img/installation/network-dashboard.png)

ముందుకు వెళ్ళండి మరియు ఆనందించండి!
