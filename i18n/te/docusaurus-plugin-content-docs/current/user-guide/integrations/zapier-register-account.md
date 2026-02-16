---
title: Zapier ద్వారా ఖాతాను నమోదు చేయండి
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ఈవెంట్: Zapier ద్వారా ఖాతా నమోదు చేయడం

[Ultimate Multisite ను Zapier తో అనుసంధానం చేయడం](zapier.md) అనే వ్యాసంలో, ట్రిగ్గర్‌లు మరియు ఈవెంట్‌ల ఆధారంగా Ultimate Multisite లో వివిధ చర్యలను నిర్వహించడానికి Zapier ను ఎలా ఉపయోగించాలో చర్చించాము. ఈ వ్యాసంలో, మీరు 3rd party అప్లికేషన్‌లను ఎలా అనుసంధానం చేయవచ్చో చూపిస్తాము. మేము Google Sheets ను డేటా మూలంగా ఉపయోగించి, ఖాతా నమోదు చేయడానికి ఆ సమాచారాన్ని Ultimate Multisite కు పంపుతాము.

ముందుగా, మీరు మీ Google Drive లో ఒక **Google Sheet** సృష్టించాలి. తర్వాత డేటాను సులభంగా మ్యాప్ చేయడానికి ప్రతి కాలమ్‌ను సరిగ్గా నిర్వచించారని నిర్ధారించుకోండి.

![కస్టమర్ డేటా కోసం కాలమ్‌లతో Google Sheet](/img/admin/webhooks-list.png)Google sheet సృష్టించిన తర్వాత, మీరు మీ Zapier ఖాతాలో లాగిన్ అయి zap సృష్టించడం ప్రారంభించవచ్చు.

![Zap సృష్టించడానికి Zapier dashboard](/img/admin/webhooks-list.png)**"App event"** కోసం సెర్చ్ ఫీల్డ్ లో **"Google Sheets"** ఎంచుకోండి

![App event గా Google Sheets ఎంపిక చేయడం](/img/admin/webhooks-list.png)

తర్వాత "**Event**" ఫీల్డ్ లో "**New spreadsheet row**" ఎంచుకుని "**Continue**" క్లిక్ చేయండి

![Zapier లో New spreadsheet row ఈవెంట్ ఎంపిక చేయడం](/img/admin/webhooks-list.png)తదుపరి దశలో **Google Sheet** సేవ్ చేసిన **Google Account** ఎంచుకోమని అడుగుతుంది. కాబట్టి సరైన google account పేర్కొనబడిందని నిర్ధారించుకోండి.

![Google Sheet కోసం Google Account ఎంపిక చేయడం](/img/admin/webhooks-list.png)

**"Set up trigger"** లో, డేటా వచ్చే google spreadsheet మరియు worksheet ను ఎంచుకుని పేర్కొనాలి. వాటిని నింపి "**Continue**" క్లిక్ చేయండి.

![Spreadsheet మరియు worksheet ఎంపికతో trigger సెటప్ చేయడం](/img/admin/webhooks-list.png)తర్వాత మీ google sheet సరిగ్గా కనెక్ట్ అయిందని నిర్ధారించడానికి "**test your trigger**" చేయాలి.

![Zapier లో Test your trigger దశ](/img/admin/webhooks-list.png)మీ టెస్ట్ విజయవంతమైతే, మీ spreadsheets నుండి కొన్ని విలువలను చూపించే ఫలితం కనిపిస్తుంది. కొనసాగించడానికి "**Continue**" క్లిక్ చేయండి.

![Spreadsheet విలువలను చూపిస్తున్న విజయవంతమైన trigger టెస్ట్](/img/admin/webhooks-list.png)తదుపరి దశలో Ultimate Multisite లో ఖాతా సృష్టించే లేదా నమోదు చేసే రెండవ action సెటప్ చేయాలి. సెర్చ్ ఫీల్డ్ లో "**Ultimate Multisite(2.0.2)**" ఎంచుకోండి.

![Action app గా Ultimate Multisite ఎంపిక చేయడం](/img/admin/webhooks-list.png)

"**Event**" ఫీల్డ్ లో, "**Register an Account in Ultimate Multisite**" ఎంచుకుని "**Continue**" బటన్ క్లిక్ చేయండి.

![Register an Account in Ultimate Multisite action ఈవెంట్](/img/admin/webhooks-list.png)"**Set up an action**" లో, కస్టమర్ డేటా, memberships, products మొదలైన వాటికి అందుబాటులో ఉన్న వివిధ ఫీల్డ్‌లు కనిపిస్తాయి. మీరు మీ google sheet లోని విలువలను మ్యాప్ చేసి, కింద స్క్రీన్‌షాట్‌లో చూపిన విధంగా వాటిని సరైన ఫీల్డ్‌కు అసైన్ చేయవచ్చు.

![Google Sheet విలువలను Ultimate Multisite ఫీల్డ్‌లకు మ్యాపింగ్ చేయడం](/img/admin/webhooks-list.png)

విలువలను మ్యాప్ చేసిన తర్వాత, మీరు action ను టెస్ట్ చేయవచ్చు.

![Register account Zapier action ను టెస్ట్ చేయడం](/img/admin/webhooks-list.png)
