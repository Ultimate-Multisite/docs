---
title: సైట్ టెంప్లేట్లు
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# సైట్ టెంప్లేట్లు (v2)

_**గమనిక: ఈ వ్యాసం Ultimate Multisite వెర్షన్ 2.x గురించి. మీరు వెర్షన్ 1.x వాడుతుంటే,**_ **ఈ వ్యాసం చూడండి** _**.**_

Ultimate Multisite తో ప్రీమియం నెట్‌వర్క్ సృష్టించేటప్పుడు మా లక్ష్యం ఏమిటంటే - మా క్లయింట్లకు వెబ్‌సైట్లు సృష్టించేటప్పుడు వశ్యత మరియు వేర్వేరు ఆప్షన్లు ఇస్తూనే, వీలైనన్ని ప్రక్రియలను ఆటోమేట్ చేయడం. ఈ సమతుల్యతను సాధించడానికి ఒక సులభమైన మార్గం Ultimate Multisite Site Templates ఫీచర్‌ను ఉపయోగించడం.

## Site Template అంటే ఏమిటి?

పేరు సూచించినట్లుగా, Site Template అనేది మీ నెట్‌వర్క్‌లో కొత్త సైట్లు సృష్టించేటప్పుడు బేస్‌గా ఉపయోగించగల ఒక బాయిలర్‌ప్లేట్ సైట్.

అంటే మీరు ఒక బేస్ సైట్ సృష్టించి, వేర్వేరు plugins యాక్టివేట్ చేసి, ఒక యాక్టివ్ theme సెట్ చేసి, మీకు నచ్చిన విధంగా customize చేయవచ్చు. తర్వాత, మీ కస్టమర్ కొత్త అకౌంట్ సృష్టించినప్పుడు, లోపల అర్థవంతమైన కంటెంట్ లేని డిఫాల్ట్ WordPress సైట్ బదులు, వారికి అన్ని customizations మరియు contents ఇప్పటికే ఉన్న మీ బేస్ సైట్ కాపీ వస్తుంది.

అది అద్భుతంగా ఉంది, కానీ కొత్త site template ఎలా సృష్టించాలి? ఇది చాలా సులభం.

## కొత్త Site Template సృష్టించడం మరియు Edit చేయడం

Site Templates మీ నెట్‌వర్క్‌లో సాధారణ సైట్లు మాత్రమే. కొత్త template సృష్టించడానికి మీరు సింపుల్‌గా **Network Admin > Ultimate Multisite > Sites > Add Site** కి వెళ్ళవచ్చు.

**![Sites list పేజీలో Add site బటన్](/img/config/site-templates-list.png)**

ఇది ఒక modal window ఓపెన్ చేస్తుంది, అక్కడ **Site title, Site Domain/path,** మరియు **Site type** అడుగుతుంది. **Site Type** drop-down ఫీల్డ్ కింద మీరు **Site Template** సెలెక్ట్ చేయండి.

_![Site type dropdown తో Add site template modal](/img/config/site-templates-list.png)_

ఫారం దిగువన, మీరు **Copy Site** toggle switch చూస్తారు. ఇది మీకు ఒక ఉన్న site template ఆధారంగా కొత్త site template సృష్టించడానికి అనుమతిస్తుంది, తద్వారా మొదటి నుండి site template సృష్టించకుండా సమయం ఆదా అవుతుంది.

![Copy site toggle తో Add site template modal](/img/config/site-templates-list.png)

### Site Template కంటెంట్‌లను Customize చేయడం

మీ site template ను customize చేయడానికి, దాని dashboard panel కి navigate చేసి మీకు అవసరమైన మార్పులు చేయండి. మీరు కొత్త posts, pages సృష్టించవచ్చు, plugins యాక్టివేట్ చేయవచ్చు మరియు యాక్టివ్ theme మార్చవచ్చు. మీరు Customizer కి వెళ్ళి అన్ని రకాల customization ఆప్షన్లు మార్చవచ్చు.

ఆ డేటా అంతా ఒక కస్టమర్ ఆ Site Template ఆధారంగా కొత్త సైట్ సృష్టించినప్పుడు కాపీ అవుతుంది.

### Advanced ఆప్షన్లు

మీకు custom coding గురించి తెలిస్తే, కొత్త సైట్ సృష్టించిన తర్వాత ఆటోమేటిక్‌గా సమాచారం భర్తీ చేయడానికి మా Search and Replace API ఉపయోగించవచ్చు. About పేజీలో కంపెనీ పేర్లు భర్తీ చేయడం, Contact పేజీలో contact email భర్తీ చేయడం వంటి వాటికి ఇది ఉపయోగపడుతుంది.

### Site Templates ఉపయోగించడం

సరే, మీరు వేర్వేరు designs, themes మరియు settings తో చాలా Site Templates సృష్టించారు. వాటిని మీ నెట్‌వర్క్‌లో ఎలా ఉపయోగకరంగా చేస్తారు?

ప్రాథమికంగా, మీరు ఇప్పుడు రెండు విధానాలు ఉపయోగించవచ్చు (ఏకకాలంలో కాదు):

  * మీ ప్రతి Plan కి ఒక Site Template అటాచ్ చేయడం

**లేదా**

  * sign-up సమయంలో మీ క్లయింట్లను site templates ఎంచుకోనివ్వడం.

#### Mode 1: Site Template కేటాయించడం

ఈ mode లో, మీ క్లయింట్లు అకౌంట్ సృష్టించేటప్పుడు template ఎంచుకోలేరు, కానీ మీ ప్రతి Plan లో ఏ template ఉపయోగించాలో మీరు నిర్వచిస్తారు.

దీని కోసం, మీరు **Ultimate Multisite > Products > Edit** కి వెళ్ళాలి.

![Site template కేటాయించడానికి Edit product](/img/config/product-site-templates.png)

ఇది మిమ్మల్ని **Edit Product** పేజీకి తీసుకెళ్తుంది. **Product Options** సెక్షన్ కింద, **Site template** tab కనుగొని drop-down ఫీల్డ్ నుండి **Assign Site Template** ఆప్షన్ సెలెక్ట్ చేయండి. ఇది అందుబాటులో ఉన్న site templates జాబితా చూపిస్తుంది మరియు product కి అంకితమైన ఒక site template మాత్రమే ఎంచుకోనిస్తుంది.

![Assign site template ఆప్షన్ తో Product site template tab](/img/config/product-site-templates.png)

#### Mode 2: అందుబాటులో ఉన్న Site Template ఎంచుకోండి

ఈ mode లో, sign-up ప్రక్రియలో మీ క్లయింట్లకు ఎంపిక ఇస్తారు. product settings కింద మీరు నిర్వచించిన వేర్వేరు site templates నుండి వారు ఎంచుకోగలరు. ఎంచుకున్న product కింద వారు ఎంచుకోగల site templates పరిమితం చేసే ఆప్షన్ మీకు ఉంది. ఇది ఎక్కువ ధర ఉన్న product కి వేర్వేరు ఫంక్షన్లు మరియు ఫీచర్లను హైలైట్ చేయడానికి ఆదర్శమైన, ప్రతి product కింద వేర్వేరు site templates సెట్లు కలిగి ఉండటానికి అనుమతిస్తుంది.

**Edit Product** పేజీలో. **Product Options** సెక్షన్ కింద, **Site template** tab కనుగొని drop-down ఫీల్డ్ నుండి **Choose Available Site Template** ఆప్షన్ సెలెక్ట్ చేయండి. ఇది అందుబాటులో ఉన్న site templates జాబితా చూపిస్తుంది మరియు మీరు అందుబాటులో ఉంచాలనుకునే site template ఎంచుకోనిస్తుంది. దాని Behavior ఎంచుకోవడం ద్వారా ఇది చేయవచ్చు: site template జాబితాలో చేర్చాలంటే **Available**. site template ఆప్షన్‌గా చూపించకూడదంటే _**Not Available**_. జాబితా చేయబడిన site templates లో ఒకటి డిఫాల్ట్‌గా ఎంచుకోబడాలంటే **Pre-selected**.

![Behavior ఆప్షన్లతో Choose available site templates](/img/config/product-site-templates.png)

### Default Mode: Checkout form లో Site template ఎంపిక

మీ అన్ని site templates రిజిస్ట్రేషన్ సమయంలో అందుబాటులో ఉండాలని, లేదా మీరు సృష్టించే ప్రతి product కింద site templates కేటాయించడం లేదా పేర్కొనడం వంటి అదనపు పని చేయడానికి ఇష్టపడకపోతే. అప్పుడు మీరు సింపుల్‌గా మీ **Checkout Form** కింద site template ఎంపిక సెట్ చేయవచ్చు. దీని కోసం, మీరు **Ultimate Multisite > Checkout Forms** కి వెళ్ళాలి. తర్వాత మీరు configure చేయాలనుకునే form కింద **Edit** క్లిక్ చేయండి.

![Checkout forms list పేజీ](/img/config/checkout-forms-list.png)

ఇది **Edit Checkout Form** పేజీని తెస్తుంది. **Template Selection** ఫీల్డ్ కనుగొని దాని కింద **Edit** క్లిక్ చేయండి.

![Template selection ఫీల్డ్ తో Checkout form editor](/img/config/checkout-form-editor.png)

ఒక modal window కనిపిస్తుంది. **Template Sites** ఫీల్డ్ కింద మీరు రిజిస్ట్రేషన్ సమయంలో అందుబాటులో ఉండాలనుకునే అన్ని site templates ఎంచుకొని జాబితా చేయవచ్చు. మీరు ఇక్కడ పేర్కొనే site templates యూజర్ ఏ product ఎంచుకున్నా అందుబాటులో ఉంటాయి.

![Checkout form editor లో Template sites ఫీల్డ్](/img/config/checkout-form-step.png)

### Site Template ఆప్షన్లు

Ultimate Multisite settings కింద మీరు ఆన్ లేదా ఆఫ్ చేయగల ఇతర site templates ఫంక్షన్లు ఉన్నాయి.

![Ultimate Multisite settings లో Site template ఆప్షన్లు](/img/config/settings-sites.png)

#### Template మారడం అనుమతించు

ఈ ఆప్షన్ ఎనేబుల్ చేస్తే, అకౌంట్ మరియు సైట్ సృష్టించిన తర్వాత sign-up ప్రక్రియలో వారు ఎంచుకున్న template మార్చడానికి మీ క్లయింట్లకు అనుమతిస్తుంది. క్లయింట్ దృష్టికోణం నుండి ఇది ఉపయోగకరం, ఎందుకంటే వారి అసలు ఎంపిక వారి నిర్దిష్ట అవసరాలకు ఉత్తమం కాదని తర్వాత తెలిస్తే template మళ్ళీ ఎంచుకోనిస్తుంది.

#### యూజర్లను వారి సైట్‌ను templates గా ఉపయోగించడానికి అనుమతించు

subsite యూజర్లు వారి స్వంత సైట్ నిర్మించడం మరియు design చేయడంలో సమయం గడిపారు కాబట్టి, మీ నెట్‌వర్క్‌లో మరొక subsite సృష్టించేటప్పుడు దానిని clone చేసి అందుబాటులో ఉన్న site templates లో ఒకటిగా ఉపయోగించాలనుకోవచ్చు. ఈ ఆప్షన్ వారికి అది సాధించడానికి అనుమతిస్తుంది.

#### Template Duplication లో Media కాపీ చేయి

ఈ ఆప్షన్ చెక్ చేస్తే template సైట్‌లో అప్‌లోడ్ చేసిన media ను కొత్తగా సృష్టించిన సైట్‌కు కాపీ చేస్తుంది. ఇది ప్రతి plans లో override చేయవచ్చు.

#### **Search Engines Site Templates ను index చేయకుండా నిరోధించు**

ఈ వ్యాసంలో చర్చించిన Site templates boilerplate అయినా మీ నెట్‌వర్క్‌లో భాగం, అంటే search engines కనుగొనడానికి ఇంకా అందుబాటులో ఉంటాయి. ఈ ఆప్షన్ search engines వాటిని index చేయకుండా site templates దాచడానికి అనుమతిస్తుంది.

## ఆటో search-and-replace తో Site Templates ను ముందుగా నింపడం

Ultimate Multisite యొక్క అత్యంత శక్తివంతమైన ఫీచర్లలో ఒకటి రిజిస్ట్రేషన్ form పై ఏకపక్ష text, color, మరియు select ఫీల్డ్‌లను జోడించగల సామర్థ్యం. ఆ డేటా capture అయిన తర్వాత, ఎంచుకున్న site template లో కొన్ని భాగాలలో కంటెంట్ ముందుగా నింపడానికి ఉపయోగించవచ్చు. తర్వాత, కొత్త సైట్ publish అవుతున్నప్పుడు, Ultimate Multisite రిజిస్ట్రేషన్ సమయంలో నమోదు చేసిన వాస్తవ సమాచారంతో placeholders ను భర్తీ చేస్తుంది.

ఉదాహరణకు, రిజిస్ట్రేషన్ సమయంలో మీ end-user కంపెనీ పేరు పొంది ఆటోమేటిక్‌గా home page పై కంపెనీ పేరు పెట్టాలనుకుంటే. మీ template సైట్ home page లో దిగువ చిత్రంలో వలె placeholders జోడించాలి (placeholders డబుల్ curly braces తో చుట్టబడి ఉండాలి - {{placeholder_name}}).

![Curly braces లో placeholder text తో Homepage](/img/config/site-templates-list.png)

తర్వాత, ఆ డేటా capture చేయడానికి మీ checkout form లో సరిపోయే రిజిస్ట్రేషన్ ఫీల్డ్ సింపుల్‌గా జోడించవచ్చు:

![సరిపోయే రిజిస్ట్రేషన్ ఫీల్డ్ తో Checkout form](/img/config/checkout-form-editor.png)

మీ కస్టమర్ రిజిస్ట్రేషన్ సమయంలో ఆ ఫీల్డ్ నింపగలరు.

![కస్టమర్ నింపిన రిజిస్ట్రేషన్ ఫీల్డ్](/img/config/checkout-form-step.png)

![రిజిస్ట్రేషన్ form ప్రివ్యూ](/img/config/checkout-form-editor.png)

Ultimate Multisite కస్టమర్ అందించిన డేటాతో placeholders ను ఆటోమేటిక్‌గా భర్తీ చేస్తుంది.

![సైట్‌లో కస్టమర్ డేటాతో భర్తీ చేయబడిన Placeholders](/img/config/site-templates-list.png)

### "placeholders తో నిండిన template" సమస్య పరిష్కరించడం

అదంతా గొప్పగా ఉంది, కానీ మనకు ఒక అసహ్యమైన సమస్య వస్తుంది: ఇప్పుడు మా site templates - మా కస్టమర్లు సందర్శించగలవి - ఎక్కువ చెప్పని అసహ్యమైన placeholders తో నిండి ఉన్నాయి.

దీన్ని పరిష్కరించడానికి, placeholders కు fake values సెట్ చేసే ఆప్షన్ అందిస్తాము, మరియు మీ కస్టమర్లు సందర్శిస్తున్నప్పుడు template సైట్లలో వాటి కంటెంట్‌లను search and replace చేయడానికి ఆ values ఉపయోగిస్తాము.

**Ultimate Multisite > Settings > Sites** కి వెళ్ళి, sidebar లో **Edit Placeholders** లింక్ క్లిక్ చేయడం ద్వారా template placeholders editor యాక్సెస్ చేయవచ్చు.

![Sites settings పేజీ కింద Placeholder settings](/img/config/settings-sites.png)

అది మిమ్మల్ని placeholders కంటెంట్ editor కి తీసుకెళ్తుంది, అక్కడ మీరు placeholders మరియు వాటి సంబంధిత కంటెంట్ జోడించవచ్చు.

![Template placeholders content editor](/img/config/settings-sites.png)
