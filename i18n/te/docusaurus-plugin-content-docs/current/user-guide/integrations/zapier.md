---
title: Zapier ఇంటిగ్రేషన్
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite ను Zapier తో అనుసంధానం చేయడం

మా వ్యాసాలలో ఒకదానిలో, [Webhooks](webhooks.md) గురించి మరియు వాటిని 3rd party అప్లికేషన్లతో అనుసంధానం చేయడానికి ఎలా ఉపయోగించవచ్చో చర్చించాము.

Webhooks ఉపయోగించడం కొంచెం సంక్లిష్టంగా ఉంటుంది, ఎందుకంటే దీనికి కోడింగ్ మరియు payloads ను క్యాచ్ చేయడంలో అధునాతన నైపుణ్యం అవసరం. **Zapier** ఉపయోగించడం దీనిని సులభంగా అధిగమించే మార్గం.

Zapier 5000+ కంటే ఎక్కువ యాప్‌లతో అనుసంధానం కలిగి ఉంది, ఇది వివిధ అప్లికేషన్ల మధ్య కమ్యూనికేషన్‌ను సులభతరం చేస్తుంది.

మీ నెట్‌వర్క్‌లో ఈవెంట్‌లు జరిగినప్పుడు (ఉదా. ఒక ఖాతా సృష్టించబడి account_create ఈవెంట్‌ను ట్రిగ్గర్ చేసినప్పుడు) ప్రారంభమయ్యే **Triggers** ను మీరు సృష్టించవచ్చు లేదా బాహ్య ఈవెంట్‌లకు స్పందించి మీ నెట్‌వర్క్‌లో **Actions** ను ఉత్పత్తి చేయవచ్చు (ఉదా. మీ Ultimate Multisite నెట్‌వర్క్‌లో కొత్త ఖాతా సభ్యత్వాన్ని సృష్టించడం).

**Ultimate Multisite Zapier యొక్క triggers** మరియు actions [REST API](https://developer.ultimatemultisite.com/api/docs/) ద్వారా శక్తివంతం చేయబడతాయి కాబట్టి ఇది సాధ్యమవుతుంది.

## ప్రారంభించడం ఎలా

ముందుగా, Zapier యాప్ జాబితాలో Ultimate Multisite కోసం శోధించండి. ప్రత్యామ్నాయంగా, మీరు [ఈ లింక్](https://zapier.com/apps/wp-ultimo/integrations) పై క్లిక్ చేయవచ్చు.

మీ dashboard కు వెళ్ళి, కొత్త Zap ను సెటప్ చేయడానికి ఎడమ సైడ్‌బార్‌లో **+** **Create Zap** బటన్‌ను నొక్కండి.

![Create Zap బటన్ తో Zapier dashboard](/img/admin/webhooks-list.png)

మీరు Zap సృష్టి పేజీకి మళ్ళించబడతారు.

శోధన పెట్టెలో "wp ultimo" అని టైప్ చేయండి. **Beta** వెర్షన్ ఆప్షన్‌ను ఎంచుకోవడానికి క్లిక్ చేయండి.

![Zapier యాప్ జాబితాలో WP Ultimo కోసం శోధించడం](/img/admin/webhooks-list.png)

మా యాప్‌ను ఎంచుకున్న తర్వాత, అందుబాటులో ఉన్న ఈవెంట్‌ను ఎంచుకోండి: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger ను ఎంచుకోవడం](/img/admin/webhooks-list.png)

ఇప్పుడు మనం Zapier కు **మీ నెట్‌వర్క్** యాక్సెస్ ఇవ్వాలి. **Sign in** పై క్లిక్ చేస్తే **API credentials** అవసరమయ్యే కొత్త విండో తెరవబడుతుంది.

![API credentials కోసం Zapier Sign in prompt](/img/admin/webhooks-list.png)

మీ నెట్‌వర్క్ అడ్మిన్ ప్యానెల్‌కు వెళ్ళి **Ultimate Multisite > Settings** > **API & Webhooks** కు నావిగేట్ చేసి API Settings విభాగాన్ని చూడండి.

ఈ కనెక్షన్ పని చేయడానికి అవసరం కాబట్టి **Enable API** ఆప్షన్‌ను ఎంచుకోండి.

![Ultimate Multisite లో Enable API ఆప్షన్ తో API Settings](/img/admin/webhooks-list.png)

API Key మరియు API Secret ఫీల్డ్‌లపై **Copy to Clipboard** చిహ్నాన్ని ఉపయోగించి ఆ విలువలను integration స్క్రీన్‌పై పేస్ట్ చేయండి.

URL ఫీల్డ్‌లో, protocol (HTTP లేదా HTTPS) తో సహా మీ నెట్‌వర్క్ పూర్తి URL ను ఉంచండి.

![API Key, Secret మరియు URL ఫీల్డ్‌లతో Zapier integration స్క్రీన్](/img/admin/webhooks-list.png)

తదుపరి దశకు వెళ్ళడానికి **Yes, Continue** బటన్‌ను క్లిక్ చేయండి. అంతా సరిగ్గా పని చేస్తే, మీ కొత్త కనెక్ట్ చేయబడిన ఖాతా మీకు స్వాగతం పలుకుతుంది! కొత్త trigger సృష్టించడానికి **Continue** క్లిక్ చేయండి.

## కొత్త Trigger ను ఎలా సృష్టించాలి

ఇప్పుడు మీ ఖాతా కనెక్ట్ అయినందున మీరు అందుబాటులో ఉన్న ఈవెంట్‌లను చూడవచ్చు. ఈ ట్యుటోరియల్ కోసం **payment_received** ఈవెంట్‌ను ఎంచుకుందాం.

![Zapier trigger లో payment_received ఈవెంట్‌ను ఎంచుకోవడం](/img/admin/webhooks-list.png)

ఈవెంట్ ఎంచుకోబడి మీరు **continue** క్లిక్ చేసిన తర్వాత, **test step** కనిపిస్తుంది.

![Trigger కోసం Zapier test step](/img/admin/webhooks-list.png)

ఈ దశలో, మీ Zap **ఆ ఈవెంట్‌కు నిర్దిష్ట payload ను పొందగలదా** అని Zapier పరీక్షిస్తుంది. అదే రకమైన భవిష్యత్ ఈవెంట్‌లలో, ఇదే నిర్మాణంతో సమాచారం పంపబడుతుంది.

![Payload తో విజయవంతంగా పూర్తయిన Zapier trigger పరీక్ష](/img/admin/webhooks-list.png)

మా ట్యుటోరియల్‌లో పరీక్ష **విజయవంతంగా పూర్తయింది** మరియు ఉదాహరణ payload సమాచారాన్ని తిరిగి ఇచ్చింది. actions సృష్టించేటప్పుడు మాకు మార్గదర్శకంగా ఈ ఉదాహరణ సమాచారం ఉపయోగపడుతుంది. మీ trigger ఇప్పుడు సృష్టించబడింది మరియు ఇతర అప్లికేషన్లతో కనెక్ట్ అవ్వడానికి సిద్ధంగా ఉంది.

## Actions ఎలా సృష్టించాలి

Actions మీ నెట్‌వర్క్‌లో కొత్త ఎంట్రీలను సృష్టించడానికి ఇతర triggers నుండి సమాచారాన్ని ఉపయోగిస్తాయి.

**action సృష్టించే దశలో** మీరు Ultimate Multisite **Beta** మరియు **Create Items on Ultimate Multisite** ఆప్షన్‌ను ఎంచుకుంటారు.

![Create Items on Ultimate Multisite తో action సృష్టించడం](/img/admin/webhooks-list.png)

తదుపరి దశలో మీరు **ప్రారంభించడం ఎలా** లో చేసినట్లుగా మీ authentication ను సృష్టించవచ్చు లేదా ఇప్పటికే సృష్టించిన authentication ను ఎంచుకోవచ్చు. ఈ ట్యుటోరియల్‌లో మేము ముందుగా సృష్టించిన అదే authentication ను ఎంచుకుంటాము.

![Zapier action కోసం authentication ఎంచుకోవడం](/img/admin/webhooks-list.png)

### Action ను సెటప్ చేయడం

ఇది **action యొక్క ప్రధాన దశ** మరియు ఇక్కడ విషయాలు కొంచెం భిన్నంగా ఉంటాయి. మీరు ఎంచుకునే మొదటి సమాచారం **Item**. Item అనేది **Customers, Payments, Sites, Emails** మరియు ఇతరాల వంటి మీ నెట్‌వర్క్ యొక్క **information model**.

![Zapier action కోసం Item రకాన్ని ఎంచుకోవడం](/img/admin/webhooks-list.png)

ఒక item ను ఎంచుకున్నప్పుడు, ఎంచుకున్న item కోసం **అవసరమైన మరియు ఐచ్ఛిక ఫీల్డ్‌లను తీసుకురావడానికి** ఫారమ్ పునర్వ్యవస్థీకరించబడుతుంది.

ఉదాహరణకు, **Customer** item ను ఎంచుకున్నప్పుడు, నెట్‌వర్క్‌లో కొత్త Customer ను సృష్టించడానికి నింపడానికి అవసరమైన అన్నింటిని ఫారమ్ ఫీల్డ్‌లు తీసుకువస్తాయి.

![Zapier action setup లో Customer item ఫీల్డ్‌లు](/img/admin/webhooks-list.png)

**required** గా గుర్తించబడిన అన్ని ఫీల్డ్‌లను నింపిన తర్వాత మరియు continue పై క్లిక్ చేసిన తర్వాత, నింపిన ఫీల్డ్‌లు మరియు నింపని ఫీల్డ్‌లను చివరి స్క్రీన్ చూపిస్తుంది.

![నింపిన మరియు నింపని ఫీల్డ్‌లను చూపించే Zapier action పరీక్ష](/img/admin/webhooks-list.png)

మీ పరీక్ష పూర్తయిన వెంటనే మరియు విజయవంతం అయిన తర్వాత మీ action కాన్ఫిగర్ చేయబడుతుంది. మీ action పరీక్షతో item సృష్టించబడిందా అని మీ నెట్‌వర్క్‌లో తనిఖీ చేయడం కూడా ముఖ్యం.
