---
title: మీ రిజిస్ట్రేషన్ ఫారమ్‌ను అనుకూలీకరించడం
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# మీ రిజిస్ట్రేషన్ ఫారమ్‌ను అనుకూలీకరించడం

WordPress ప్లాట్‌ఫారమ్‌పై నిర్మించిన ఇతర SaaS ల నుండి మీ నెట్‌వర్క్‌ను ప్రత్యేకంగా కనిపించేలా చేయడానికి, Ultimate Multisite మా **Checkout Forms** ఫీచర్ ద్వారా మీ రిజిస్ట్రేషన్ మరియు లాగిన్ పేజీలను అనుకూలీకరించడానికి అనుమతిస్తుంది.

కొత్త కస్టమర్‌లను మార్చడానికి వివిధ విధానాలతో ప్రయోగాలు చేయడానికి ఇవి సులభమైన మరియు అనువైన మార్గం అయినప్పటికీ, వీటిని ప్రధానంగా వ్యక్తిగతీకరించిన రిజిస్ట్రేషన్ ఫారమ్‌లను రూపొందించడానికి ఉపయోగిస్తారు. మీరు ఇది ఎలా చేయవచ్చో ఈ ఆర్టికల్ మీకు చూపించడానికి ఉద్దేశించబడింది.

## లాగిన్ మరియు రిజిస్ట్రేషన్ పేజీలు:

Ultimate Multisite ఇన్‌స్టాలేషన్ తర్వాత, ఇది మీ ప్రధాన సైట్‌లో స్వయంచాలకంగా అనుకూల లాగిన్ మరియు రిజిస్ట్రేషన్ పేజీలను సృష్టిస్తుంది. మీ **Ultimate Multisite > Settings > Login & Registration** పేజీకి వెళ్ళడం ద్వారా మీరు ఈ డిఫాల్ట్ పేజీలను ఎప్పుడైనా మార్చవచ్చు.

![Login and Registration settings page](/img/config/settings-general.png)

**Login & Registration** పేజీలో మీరు అనుకూలీకరించగల ప్రతి ఆప్షన్‌ను చూద్దాం:

  * **Enable registration:** ఈ ఆప్షన్ మీ నెట్‌వర్క్‌లో రిజిస్ట్రేషన్‌ను ఎనేబుల్ లేదా డిసేబుల్ చేస్తుంది. ఇది ఆఫ్ చేయబడితే, మీ కస్టమర్‌లు రిజిస్టర్ చేసుకుని మీ ప్రొడక్ట్‌లకు సబ్‌స్క్రైబ్ చేయలేరు.

  * **Enable email verification:** ఈ ఆప్షన్ ఆన్ చేయబడితే, ఉచిత ప్లాన్ లేదా ట్రయల్ పీరియడ్ ఉన్న పెయిడ్ ప్లాన్‌కు సబ్‌స్క్రైబ్ చేసిన కస్టమర్‌లు వెరిఫికేషన్ ఇమెయిల్ అందుకుంటారు మరియు వారి వెబ్‌సైట్‌లు సృష్టించబడటానికి వెరిఫికేషన్ లింక్‌పై క్లిక్ చేయాలి.

  * **Default registration page:** రిజిస్ట్రేషన్ కోసం ఇది డిఫాల్ట్ పేజీ. ఈ పేజీ మీ వెబ్‌సైట్‌లో పబ్లిష్ చేయబడాలి మరియు రిజిస్ట్రేషన్ ఫారమ్ (checkout form అని కూడా పిలుస్తారు) కలిగి ఉండాలి - ఇక్కడ మీ క్లయింట్‌లు మీ ప్రొడక్ట్‌లకు సబ్‌స్క్రైబ్ చేస్తారు. మీరు కావలసినన్ని రిజిస్ట్రేషన్ పేజీలు మరియు checkout forms సృష్టించవచ్చు, రిజిస్ట్రేషన్ పేజీలో checkout form shortcode ను ఉంచడం గుర్తుంచుకోండి, లేకపోతే అది కనిపించదు.

  * **Use custom login page:** ఈ ఆప్షన్ మీకు డిఫాల్ట్ wp-login.php పేజీ కాకుండా, అనుకూలీకరించిన లాగిన్ పేజీని ఉపయోగించడానికి అనుమతిస్తుంది. ఈ ఆప్షన్ ఆన్ చేయబడితే, **Default login page** ఆప్షన్‌లో (క్రింద) లాగిన్ కోసం ఏ పేజీని ఉపయోగించాలో మీరు ఎంచుకోవచ్చు.

  * **Obfuscate the original login url (wp-login.php):** మీరు ఒరిజినల్ లాగిన్ URL ను దాచాలనుకుంటే, మీరు ఈ ఆప్షన్‌ను ఆన్ చేయవచ్చు. brute-force దాడులను నిరోధించడానికి ఇది ఉపయోగపడుతుంది. ఈ ఆప్షన్ ఎనేబుల్ చేయబడితే, యూజర్ ఒరిజినల్ wp-login.php లింక్‌ను యాక్సెస్ చేయడానికి ప్రయత్నించినప్పుడు Ultimate Multisite 404 ఎర్రర్ ప్రదర్శిస్తుంది

  * **Force synchronous site publication:** కస్టమర్ నెట్‌వర్క్‌లో ప్రొడక్ట్‌కు సబ్‌స్క్రైబ్ చేసిన తర్వాత, కొత్త పెండింగ్ సైట్ అసలు నెట్‌వర్క్ సైట్‌గా మార్చబడాలి. పబ్లిషింగ్ ప్రాసెస్ Job Queue ద్వారా, అసమకాలికంగా జరుగుతుంది. signup అదే రిక్వెస్ట్‌లో పబ్లికేషన్ జరగడానికి ఈ ఆప్షన్‌ను ఎనేబుల్ చేయండి.

ఇప్పుడు, లాగిన్ మరియు రిజిస్ట్రేషన్ ప్రాసెస్‌కు సంబంధించిన ఇతర ఆప్షన్‌లను చూద్దాం. అవి అదే Login & Registration పేజీలో **Other options** క్రింద ఉన్నాయి:

  * **Default role:** signup ప్రాసెస్ తర్వాత మీ కస్టమర్‌లు వారి వెబ్‌సైట్‌లో కలిగి ఉండే రోల్ ఇది.

  * **Add users to the main site as well:** ఈ ఆప్షన్‌ను ఎనేబుల్ చేయడం వల్ల signup ప్రాసెస్ తర్వాత యూజర్‌ను మీ నెట్‌వర్క్ యొక్క ప్రధాన సైట్‌కు కూడా జోడిస్తుంది. మీరు ఈ ఆప్షన్‌ను ఎనేబుల్ చేస్తే, మీ వెబ్‌సైట్‌లో ఈ యూజర్‌ల **default role** సెట్ చేయడానికి ఒక ఆప్షన్ కూడా క్రింద కనిపిస్తుంది.

  * **Enable multiple accounts:** మీ నెట్‌వర్క్‌లోని వివిధ సైట్‌లలో అదే ఇమెయిల్ అడ్రస్‌తో యూజర్‌లకు అకౌంట్‌లు కలిగి ఉండటానికి అనుమతించండి. ఈ ఆప్షన్ ఆఫ్ అయితే, మీ కస్టమర్‌లు అదే ఇమెయిల్ అడ్రస్‌తో మీ నెట్‌వర్క్‌లో నడుస్తున్న ఇతర వెబ్‌సైట్‌లలో అకౌంట్ సృష్టించలేరు.

మీరు అనుకూలీకరించగల లాగిన్ మరియు రిజిస్ట్రేషన్‌కు సంబంధించిన అన్ని ఆప్షన్‌లు ఇవే! వాటిని ఎడిట్ చేసిన తర్వాత మీ సెట్టింగ్‌లను సేవ్ చేయడం మర్చిపోకండి.

## బహుళ రిజిస్ట్రేషన్ ఫారమ్‌లను ఉపయోగించడం:

Ultimate Multisite 2.0 మీకు కావలసినన్ని ఫారమ్‌లను, వేర్వేరు ఫీల్డ్‌లు, ఆఫర్‌లో ఉన్న ప్రొడక్ట్‌లు మొదలైన వాటితో సృష్టించడానికి అనుమతించే checkout form editor ను అందిస్తుంది.

లాగిన్ మరియు రిజిస్ట్రేషన్ పేజీలు రెండూ shortcodes తో ఎంబెడ్ చేయబడ్డాయి: లాగిన్ పేజీలో **[wu_login_form]** మరియు రిజిస్ట్రేషన్ పేజీ కోసం **[wu_checkout]**. checkout forms ను నిర్మించడం లేదా సృష్టించడం ద్వారా మీరు రిజిస్ట్రేషన్ పేజీని మరింత అనుకూలీకరించవచ్చు.

ఈ ఫీచర్‌ను యాక్సెస్ చేయడానికి, ఎడమ వైపు సైడ్-బార్‌లో **Checkout Forms** మెనూకి వెళ్ళండి.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

ఈ పేజీలో, మీకు ఉన్న అన్ని checkout forms ను చూడవచ్చు.

మీరు కొత్తది సృష్టించాలనుకుంటే, పేజీ పైభాగంలో **Add Checkout Form** పై క్లిక్ చేయండి.

మీరు ఈ మూడు ఆప్షన్‌లలో ఒకదాన్ని మీ ప్రారంభ బిందువుగా ఎంచుకోవచ్చు: single step, multi-step లేదా blank. తర్వాత, **Go to the Editor** పై క్లిక్ చేయండి.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

ప్రత్యామ్నాయంగా, దాని పేరు క్రింద ఉన్న ఆప్షన్‌లపై క్లిక్ చేయడం ద్వారా మీకు ఇప్పటికే ఉన్న ఫారమ్‌లను ఎడిట్ లేదా డూప్లికేట్ చేయవచ్చు. అక్కడ, మీరు ఫారమ్ యొక్క shortcode ను కాపీ చేయడానికి లేదా ఫారమ్‌ను డిలీట్ చేయడానికి ఆప్షన్‌లను కూడా కనుగొంటారు.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

మీరు single step లేదా multi-step ఎంచుకుంటే, checkout form పని చేయడానికి అవసరమైన ప్రాథమిక steps తో ఇప్పటికే ముందే నిండి ఉంటుంది. తర్వాత, మీరు కావాలనుకుంటే, దానికి అదనపు steps జోడించవచ్చు.

### Checkout Form ను ఎడిట్ చేయడం:

మేము ముందుగా చెప్పినట్లుగా, మీరు వివిధ ప్రయోజనాల కోసం checkout forms సృష్టించవచ్చు. ఈ ఉదాహరణలో మేము రిజిస్ట్రేషన్ ఫారమ్‌పై పని చేస్తాము.

checkout form editor కు నావిగేట్ చేసిన తర్వాత, మీ ఫారమ్‌కు ఒక పేరు (అంతర్గత రెఫరెన్స్ కోసం మాత్రమే ఉపయోగించబడుతుంది) మరియు ఒక slug (shortcodes సృష్టించడానికి ఉపయోగించబడుతుంది, ఉదాహరణకు) ఇవ్వండి.

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

ఫారమ్‌లు steps మరియు fields తో తయారవుతాయి. **Add New Checkout Step** పై క్లిక్ చేయడం ద్వారా మీరు కొత్త step జోడించవచ్చు.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

మోడల్ విండో యొక్క మొదటి ట్యాబ్‌లో, మీ ఫారమ్ యొక్క step యొక్క కంటెంట్‌ను నింపండి. దానికి ఒక ID, పేరు మరియు వివరణ ఇవ్వండి. ఈ అంశాలు ఎక్కువగా అంతర్గతంగా ఉపయోగించబడతాయి.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

తర్వాత, step యొక్క విజిబిలిటీని సెట్ చేయండి. మీరు **Always show**, **Only show for logged in users** లేదా **Only show for guests** మధ్య ఎంచుకోవచ్చు.

![Checkout step visibility options](/img/config/checkout-form-step.png)

చివరగా, step style ను కాన్ఫిగర్ చేయండి. ఇవి ఆప్షనల్ ఫీల్డ్‌లు.

![Checkout step style configuration](/img/config/checkout-form-step.png)

ఇప్పుడు, మా మొదటి step కు fields జోడించే సమయం వచ్చింది. **Add New Field** పై క్లిక్ చేసి మీకు కావలసిన సెక్షన్ రకాన్ని ఎంచుకోండి.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

ప్రతి field నింపవలసిన వివిధ parameters కలిగి ఉంటుంది. ఈ మొదటి ఎంట్రీ కోసం, మేము **Username** field ఎంచుకుంటాము.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

మీకు అవసరమైనన్ని steps మరియు fields జోడించవచ్చు. మీ కస్టమర్‌లు ఎంచుకోవడానికి మీ ప్రొడక్ట్‌లను ప్రదర్శించడానికి, Pricing Table field ఉపయోగించండి. మీ క్లయింట్‌లు ఒక template ఎంచుకోవడానికి అనుమతించాలనుకుంటే, Template Selection field జోడించండి. ఇలాంటివే.

_**గమనిక:** మీరు మీ checkout form సృష్టించిన తర్వాత ఒక product సృష్టిస్తే, మీరు Pricing table సెక్షన్‌లో product ను జోడించాలి. మీరు దానిని జోడించకపోతే, product మీ కస్టమర్‌లకు రిజిస్ట్రేషన్ పేజీలో కనిపించదు._

_**గమనిక 2:** username, email, password, site title, site URL, order summary, payment, మరియు submit button అనేవి checkout form సృష్టించడానికి తప్పనిసరి fields._

మీరు మీ checkout form పై పని చేస్తున్నప్పుడు, మీ క్లయింట్‌లకు ఫారమ్ ఎలా కనిపిస్తుందో చూడటానికి మీరు ఎల్లప్పుడూ Preview బటన్ ఉపయోగించవచ్చు. మీరు ఇప్పటికే ఉన్న యూజర్‌గా లేదా విజిటర్‌గా వీక్షించడం మధ్య మారవచ్చు.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

చివరగా, **Advanced Options** లో మీరు **Thank You** పేజీ కోసం మెసేజ్‌ని కాన్ఫిగర్ చేయవచ్చు, conversions ట్రాక్ చేయడానికి snippets జోడించవచ్చు, మీ checkout form కు custom CSS జోడించవచ్చు లేదా నిర్దిష్ట దేశాలకు దీన్ని పరిమితం చేయవచ్చు.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

మీరు కుడి కాలమ్‌లో ఈ ఆప్షన్‌ను టోగుల్ చేయడం ద్వారా మీ checkout form ను మాన్యువల్‌గా ఎనేబుల్ లేదా డిసేబుల్ చేయవచ్చు, లేదా ఫారమ్‌ను శాశ్వతంగా డిలీట్ చేయవచ్చు.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

మీ checkout form ను సేవ్ చేయడం మర్చిపోకండి!

![Save Checkout Form button](/img/config/checkout-form-save.png)

మీ ఫారమ్ యొక్క shortcode పొందడానికి **Generate Shortcode** పై క్లిక్ చేసి మోడల్ విండోలో చూపిన ఫలితాన్ని కాపీ చేయండి.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**గమనిక:** ఈ checkout form ను జోడించడానికి మీరు ఈ shortcode ను మీ రిజిస్ట్రేషన్ పేజీకి జోడించాలి._

## URL parameters ద్వారా ప్రొడక్ట్‌లు మరియు templates ను ముందుగా ఎంచుకోవడం:

మీ ప్రొడక్ట్‌ల కోసం అనుకూలీకరించిన pricing tables సృష్టించాలనుకుంటే మరియు మీ pricing table లేదా templates పేజీ నుండి మీ కస్టమర్ ఎంచుకునే product లేదా template ను checkout form లో ముందుగా ఎంచుకోవాలనుకుంటే, మీరు దీని కోసం URL parameters ఉపయోగించవచ్చు.

### **Plans కోసం:**

**Ultimate Multisite > Products > Select a plan** కు వెళ్ళండి. పేజీ పైభాగంలో **Click to copy Shareable Link** బటన్ కనిపించాలి. మీ checkout form లో ఈ నిర్దిష్ట plan ను ముందుగా ఎంచుకోవడానికి మీరు ఉపయోగించగల లింక్ ఇది.

![Product page with shareable link button](/img/config/products-list.png)

ఈ shareable link **Plans** కోసం మాత్రమే చెల్లుబాటు అవుతుందని గమనించండి. packages లేదా services కోసం మీరు shareable links ఉపయోగించలేరు.

### Templates కోసం:

మీ checkout form లో site templates ను ముందుగా ఎంచుకోవాలనుకుంటే, మీ రిజిస్ట్రేషన్ పేజీ URL లో **?template_id=X** parameter ఉపయోగించవచ్చు. "X" ను **site template ID number** తో భర్తీ చేయాలి. ఈ నంబర్ పొందడానికి, **Ultimate Multisite > Sites** కు వెళ్ళండి.

మీరు ఉపయోగించాలనుకునే site template క్రింద **Manage** పై క్లిక్ చేయండి. మీరు SITE ID నంబర్ చూస్తారు. మీ checkout form లో ఈ నిర్దిష్ట site template ముందుగా ఎంపిక చేయడానికి ఈ నంబర్ ఉపయోగించండి. మా విషయంలో ఇక్కడ, URL parameter **?template_id=2** అవుతుంది.

![Sites list showing site template ID](/img/config/site-templates-list.png)

మా నెట్‌వర్క్ వెబ్‌సైట్ [**www.mynetwork.com**](http://www.mynetwork.com) అని మరియు మా checkout form ఉన్న మా రిజిస్ట్రేషన్ పేజీ **/register** పేజీలో ఉందని అనుకుందాం. ఈ site template ముందుగా ఎంపిక చేయబడిన మొత్తం URL [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** లా కనిపిస్తుంది.

మీరు కావాలనుకుంటే, మీ checkout form కోసం products మరియు templates రెండింటినీ ముందుగా ఎంచుకోవచ్చు. మీరు చేయాల్సిందల్లా plan యొక్క shareable link ను కాపీ చేసి చివరన template parameter ను పేస్ట్ చేయడం. ఇది [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2** లా కనిపిస్తుంది.
