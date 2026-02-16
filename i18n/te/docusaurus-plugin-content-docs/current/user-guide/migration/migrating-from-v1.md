---
title: V1 నుండి మైగ్రేట్ చేయడం
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 నుండి మైగ్రేట్ చేయడం

## Ultimate Multisite తన అసలు 1.x రిలీజ్‌ల కుటుంబం నుండి 2.x రిలీజ్‌ల కుటుంబానికి మారింది.

Ultimate Multisite వెర్షన్ 2.0 మరియు అంతకంటే పైన కోడ్‌బేస్ యొక్క పూర్తి పునర్రచన, అంటే పాత వెర్షన్ మరియు కొత్త వెర్షన్ మధ్య చాలా తక్కువ సారూప్యత ఉంది. ఆ కారణంగా, 1.x నుండి 2.x కి అప్‌గ్రేడ్ చేసేటప్పుడు, మీ డేటాను కొత్త వెర్షన్‌లు అర్థం చేసుకోగలిగే ఫార్మాట్‌కు మైగ్రేట్ చేయాల్సి ఉంటుంది.

అదృష్టవశాత్తూ, Ultimate Multisite 2.0+ **కోర్‌లో అంతర్నిర్మిత migrator తో వస్తుంది**, ఇది పాత వెర్షన్ నుండి డేటాను గుర్తించి కొత్త ఫార్మాట్‌కు మార్చగలదు. ఈ migration వెర్షన్ 2.0+ యొక్క **Setup Wizard** సమయంలో జరుగుతుంది.

ఈ పాఠం migrator ఎలా పని చేస్తుందో, వైఫల్యం సంభవించినప్పుడు ఏమి చేయాలో, మరియు ఈ ప్రక్రియలో తలెత్తే సమస్యలను ఎలా పరిష్కరించాలో వివరిస్తుంది.

_**ముఖ్యమైనది: వెర్షన్ 1.x నుండి వెర్షన్ 2.0 కి అప్‌గ్రేడ్ చేయడం ప్రారంభించే ముందు మీ సైట్ డేటాబేస్ యొక్క బ్యాకప్ తీసుకోవడం నిర్ధారించుకోండి**_

## మొదటి దశలు

మొదటి దశ plugin .zip ఫైల్‌ను డౌన్‌లోడ్ చేసి, మీ network admin dashboard లో వెర్షన్ 2.0 ను ఇన్‌స్టాల్ చేయడం.

మీరు [వెర్షన్ 2.0 ను ఇన్‌స్టాల్ చేసి యాక్టివేట్ చేసిన](../getting-started/installing-ultimate-multisite.md) తర్వాత, మీ Multisite లెగసీ వెర్షన్‌లో నడుస్తుందని సిస్టమ్ స్వయంచాలకంగా గుర్తిస్తుంది మరియు plugin పేజీ పైభాగంలో ఈ సందేశం కనిపిస్తుంది.

_**గమనిక:** మీ Multisite లో Ultimate Multisite 1.x ఇన్‌స్టాల్ చేయబడి ఉంటే, మీరు ఇప్పుడే డౌన్‌లోడ్ చేసిన వెర్షన్‌తో plugin ను రీప్లేస్ చేసే ఎంపిక మీకు ఉంటుంది. దయచేసి ముందుకు వెళ్ళి **Replace current with uploaded** క్లిక్ చేయండి._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

తదుపరి పేజీ వెర్షన్ 1.x తో పాటు మీరు ఇన్‌స్టాల్ చేసిన లెగసీ add-ons ఏమిటో తెలియజేస్తుంది. మీరు ఉపయోగిస్తున్న వెర్షన్ 2.0 తో అనుకూలంగా ఉందా లేదా migration తర్వాత add-on యొక్క అప్‌గ్రేడెడ్ వెర్షన్ ఇన్‌స్టాల్ చేయాల్సిన అవసరం ఉందా అనే సూచనలు ఇందులో ఉంటాయి.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

మీరు ముందుకు సాగడానికి సిద్ధంగా ఉన్నప్పుడు, **Visit the Installer to finish the upgrade** అని చెప్పే బటన్‌ను క్లిక్ చేయవచ్చు.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

అది మిమ్మల్ని కొన్ని స్వాగత సందేశాలతో installation wizard పేజీకి తీసుకెళ్తుంది. తదుపరి పేజీకి వెళ్ళడానికి మీరు **Get Started** క్లిక్ చేయాలి.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** క్లిక్ చేసిన తర్వాత, ఇది మిమ్మల్ని Pre-install Checks కు రీడైరెక్ట్ చేస్తుంది. ఇది మీ System Information మరియు WordPress installation ను చూపిస్తుంది మరియు ఇది **Ultimate Multisite యొక్క అవసరాలను** తీరుస్తుందా అని తెలియజేస్తుంది.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

తదుపరి దశ మీ Ultimate Multisite లైసెన్స్ కీని నమోదు చేసి plugin ను యాక్టివేట్ చేయడం. ఇది add-ons తో సహా అన్ని ఫీచర్లు మీ సైట్‌లో అందుబాటులో ఉండేలా నిర్ధారిస్తుంది.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

మీ కీని నమోదు చేసిన తర్వాత, **Agree & Activate** క్లిక్ చేయండి.

లైసెన్స్ యాక్టివేషన్ తర్వాత, తదుపరి పేజీలో **Install** క్లిక్ చేయడం ద్వారా మీరు అసలు installation ను ప్రారంభించవచ్చు. ఇది వెర్షన్ 2.0 పని చేయడానికి అవసరమైన ఫైల్‌లు మరియు డేటాబేస్‌ను స్వయంచాలకంగా సృష్టిస్తుంది.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## ఇప్పుడు, migration

Migrator లో అంతర్నిర్మిత భద్రతా ఫీచర్ ఉంది, ఇది మీ మొత్తం multisite ను తనిఖీ చేసి మీ మొత్తం Ultimate Multisite డేటాను ఎటువంటి సమస్యలు లేకుండా మైగ్రేట్ చేయవచ్చని నిర్ధారిస్తుంది. ప్రక్రియను ప్రారంభించడానికి **Run Check** బటన్‌ను క్లిక్ చేయండి.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

తనిఖీ అమలు చేసిన తర్వాత, మీకు రెండు అవకాశాలు ఉన్నాయి: ఫలితం **ఎర్రర్ తో** లేదా **ఎర్రర్ లేకుండా** ఉండవచ్చు.

### ఎర్రర్ తో

మీకు ఎర్రర్ మెసేజ్ వచ్చినట్లయితే, ఎర్రర్‌ను పరిష్కరించడంలో సహాయం కోసం మీరు మా support team ను సంప్రదించాల్సి ఉంటుంది. మీరు టికెట్ సృష్టించేటప్పుడు **ఎర్రర్ లాగ్‌ను అందించడం** నిర్ధారించుకోండి. మీరు లాగ్‌ను డౌన్‌లోడ్ చేయవచ్చు లేదా contact our support team అనే లింక్‌ను క్లిక్ చేయవచ్చు. ఇది మీ పేజీ కుడి వైపున help widget ను తెరుస్తుంది, ఇందులో description కింద ఎర్రర్ లాగ్‌లతో సహా ఫీల్డ్‌లు మీ కోసం ముందే నింపబడి ఉంటాయి.

_**సిస్టమ్ ఎర్రర్‌ను కనుగొన్నందున, మీరు వెర్షన్ 2.0 కి మైగ్రేట్ చేయడానికి ముందుకు సాగలేరు. ఎర్రర్ పరిష్కారమయ్యే వరకు మీ నెట్‌వర్క్‌ను నడపడం కొనసాగించడానికి మీరు వెర్షన్ 1.x కి రోల్ బ్యాక్ చేయవచ్చు.**_

### ఎర్రర్ లేకుండా

సిస్టమ్ ఎటువంటి ఎర్రర్‌ను కనుగొనకపోతే, మీకు విజయ సందేశం మరియు దిగువన **Migrate** బటన్ కనిపిస్తుంది, ఇది migration తో ముందుకు సాగడానికి మిమ్మల్ని అనుమతిస్తుంది. ఈ పేజీలో, ముందుకు వెళ్ళే ముందు మీ డేటాబేస్ బ్యాకప్ సృష్టించమని మీకు గుర్తు చేయబడుతుంది, దీనిని మేము గట్టిగా సిఫార్సు చేస్తున్నాము. మీ వద్ద ఇప్పటికే బ్యాకప్ ఉంటే **Migrate** నొక్కండి.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

ఇంతే!

మీరు మీ నెట్‌వర్క్‌లో మీ లోగో మరియు ఇతర విషయాలను అప్‌డేట్ చేయడానికి Wizard setup ను కొనసాగించవచ్చు లేదా మీ Ultimate Multisite వెర్షన్ 2.0 మెనూ మరియు దాని కొత్త ఇంటర్‌ఫేస్‌ను నావిగేట్ చేయడం ప్రారంభించవచ్చు. ముందుకు వెళ్ళి ఆనందించండి.
