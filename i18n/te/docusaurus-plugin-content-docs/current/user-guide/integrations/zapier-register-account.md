---
title: Zapier ద్వారా Account నమోదు చేయండి
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# ఈవెంట్: Zapier ద్వారా Account నమోదు చేయడం

[Ultimate Multisiteని Zapierతో సమగ్రపరచడం](zapier.md) అనే వ్యాసంలో, ట్రిగర్లు మరియు ఈవెంట్ల ఆధారంగా Ultimate Multisiteలో వేర్వేరు చర్యలు చేయడానికి Zapierను ఎలా ఉపయోగించాలో చర్చించాం. ఈ వ్యాసంలో, 3rd party అప్లికేషన్లను మీరు ఎలా సమగ్రపరచవచ్చో చూపిస్తాము. డేటా మూలంగా Google Sheetsను ఉపయోగించి, Account నమోదు చేయడానికి సమాచారాన్ని Ultimate Multisiteకు పంపుతాము.

Zapierను కనెక్ట్ చేయడానికి ముందు, **Ultimate Multisite > Settings > API & Webhooks**కి వెళ్లి API ప్రారంభించబడిందని నిర్ధారించండి. Zapier Ultimate Multisite Account ఆధారాలను అడిగినప్పుడు, ఈ స్క్రీన్‌ నుండి API Key మరియు API Secretను కాపీ చేయండి.

![API Key, API Secret, మరియు Enable API ఎంపికలతో API మరియు Webhooks settings](/img/admin/settings-api-webhooks.png)

ముందుగా, మీ Google Driveలో **Google Sheet** సృష్టించాలి. తర్వాత డేటాను సులభంగా మ్యాప్ చేయగలిగేలా ప్రతి కాలమ్‌ను సరిగ్గా నిర్వచించారని నిర్ధారించుకోండి.

Google sheet సృష్టించిన తర్వాత, మీ Zapier Accountలో లాగిన్ చేసి zap సృష్టించడం ప్రారంభించవచ్చు.

**"App event"** కోసం ఉన్న శోధన ఫీల్డ్‌లో **"Google Sheets"** ఎంచుకోండి


తర్వాత "**Event** " ఫీల్డ్ కోసం "**New spreadsheet row** " ఎంచుకుని "**Continue** " నొక్కండి

తదుపరి దశలో **Google Sheet** సేవ్ చేయబడిన **Google Account**ను ఎంచుకోవాలని అడుగుతుంది. కాబట్టి సరైన google account పేర్కొన్నారని నిర్ధారించుకోండి.


**"Set up trigger** " కింద, డేటా వచ్చే google spreadsheet మరియు worksheetను ఎంచుకుని పేర్కొనాలి. వాటిని పూరించి "**Continue** " నొక్కండి

తర్వాత మీ google sheet సరిగ్గా కనెక్ట్ అయిందని నిర్ధారించడానికి "**test your trigger** " చేయాలి.

మీ పరీక్ష విజయవంతమైతే, మీ spreadsheets నుండి కొన్ని విలువలను చూపించే ఫలితం కనిపిస్తుంది. కొనసాగడానికి "**Continue** " క్లిక్ చేయండి.

తదుపరి దశ Ultimate Multisiteలో Account సృష్టించే లేదా నమోదు చేసే రెండవ చర్యను సెటప్ చేయడం. శోధన ఫీల్డ్‌లో "**Ultimate Multisite(2.0.2)** " ఎంచుకోండి


"**Event** " ఫీల్డ్ కింద, "**Register an Account in Ultimate Multisite** " ఎంచుకుని, తర్వాత "**Continue** " బటన్‌ను క్లిక్ చేయండి.

"**Set up an action** " కింద, కస్టమర్ డేటా, సభ్యత్వాలు, ఉత్పత్తులు మొదలైన వాటికి అందుబాటులో ఉన్న వేర్వేరు ఫీల్డ్‌లు కనిపిస్తాయి. క్రింది స్క్రీన్‌షాట్‌లో చూపినట్లుగా, మీ google sheetలోని విలువలను మ్యాప్ చేసి అవి నింపబడాల్సిన సరైన ఫీల్డ్‌కు కేటాయించవచ్చు.


విలువలను మ్యాప్ చేసిన తర్వాత, మీరు చర్యను పరీక్షించవచ్చు.
