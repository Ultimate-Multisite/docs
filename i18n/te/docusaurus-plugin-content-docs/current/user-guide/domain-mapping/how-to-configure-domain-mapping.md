---
title: డొమైన్ మ్యాపింగ్‌ను ఎలా కాన్ఫిగర్ చేయాలి
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# డొమైన్ మ్యాపింగ్‌ను ఎలా కాన్ఫిగర్ చేయాలి (v2) {#how-to-configure-domain-mapping-v2}

_**ముఖ్యమైన గమనిక: ఈ వ్యాసం Ultimate Multisite version 2.x గురించి.**_

ప్రీమియం నెట్‌వర్క్‌లోని అత్యంత శక్తివంతమైన ఫీచర్లలో ఒకటి, మా క్లయింట్లకు వారి సైట్లకు టాప్-లెవల్ డొమైన్‌ను జోడించుకునే అవకాశం ఇవ్వడం. చివరికి, ఏది మరింత ప్రొఫెషనల్‌గా కనిపిస్తుంది: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) లేదా [_**joesbikeshop.com**_](http://joesbikeshop.com)? అందుకే Ultimate Multisite ఈ ఫీచర్‌ను మూడవ పక్ష plugins అవసరం లేకుండానే అందిస్తుంది.

## డొమైన్ మ్యాపింగ్ అంటే ఏమిటి? {#whats-domain-mapping}

పేరు సూచించినట్లే, డొమైన్ మ్యాపింగ్ అనేది కస్టమ్ డొమైన్ కోసం వచ్చిన అభ్యర్థనను స్వీకరించి, ఆ నిర్దిష్ట డొమైన్ జోడించబడిన నెట్‌వర్క్‌లోని సంబంధిత సైట్‌కు ఆ అభ్యర్థనను మ్యాప్ చేసే Ultimate Multisite అందించే సామర్థ్యం.

### మీ Ultimate Multisite నెట్‌వర్క్‌లో డొమైన్ మ్యాపింగ్‌ను ఎలా సెటప్ చేయాలి {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

డొమైన్ మ్యాపింగ్ పని చేయడానికి మీవైపు కొంత సెటప్ అవసరం. అదృష్టవశాత్తూ, Ultimate Multisite కఠినమైన పనిని మీ కోసం ఆటోమేట్ చేస్తుంది, కాబట్టి మీరు అవసరాలను సులభంగా పూర్తి చేయవచ్చు.

Ultimate Multisite ఇన్‌స్టాలేషన్ సమయంలో, విజార్డ్ **sunrise.php** ను నిర్దేశిత ఫోల్డర్‌కు స్వయంచాలకంగా కాపీ చేసి ఇన్‌స్టాల్ చేస్తుంది. **ఈ దశ పూర్తయ్యే వరకు విజార్డ్ మిమ్మల్ని ముందుకు వెళ్లనివ్వదు**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

దీని అర్థం, Ultimate Multisite ఇన్‌స్టాలేషన్ విజార్డ్ మీ నెట్‌వర్క్‌ను సెటప్ చేయడం పూర్తిచేసిన వెంటనే, మీరు కస్టమ్ డొమైన్‌ను వెంటనే మ్యాప్ చేయడం ప్రారంభించవచ్చు.

Ultimate Multisite లో డొమైన్ మ్యాపింగ్ తప్పనిసరి కాదని గమనించండి. WordPress Multisite స్థానిక డొమైన్ మ్యాపింగ్ ఫంక్షన్ లేదా మరే ఇతర డొమైన్ మ్యాపింగ్ పరిష్కారాన్ని ఉపయోగించే ఎంపిక మీకు ఉంది.

ఇతర డొమైన్ మ్యాపింగ్ పరిష్కారాలకు అవకాశం ఇవ్వడానికి Ultimate Multisite డొమైన్ మ్యాపింగ్‌ను నిలిపివేయాల్సి వస్తే, మీరు ఈ ఫీచర్‌ను **Ultimate Multisite > Settings > Domain Mapping** కింద నిలిపివేయవచ్చు.

![అడ్మిన్ రీడైరెక్ట్, మ్యాపింగ్ సందేశం మరియు DNS ఎంపికలను చూపిస్తున్న డొమైన్ మ్యాపింగ్ సెట్టింగ్స్ పేజీ](/img/config/domain-mapping-settings.png)

ఈ ఎంపికకు కిందనే, మీరు **Force Admin Redirect** అనే ఎంపికను కూడా చూడవచ్చు. మీ కస్టమర్లు తమ కస్టమ్ డొమైన్ మరియు సబ్‌డొమైన్ రెండింటిలోనూ తమ అడ్మిన్ డాష్‌బోర్డ్‌ను యాక్సెస్ చేయగలరా, లేక వాటిలో ఒక్కదానిలో మాత్రమే యాక్సెస్ చేయగలరా అనే విషయాన్ని నియంత్రించడానికి ఈ ఎంపిక మీకు సహాయపడుతుంది.

మీరు **Force redirect to mapped domain** ఎంచుకుంటే, మీ కస్టమర్లు తమ కస్టమ్ డొమైన్లలో మాత్రమే తమ అడ్మిన్ డాష్‌బోర్డ్‌ను యాక్సెస్ చేయగలరు.

**Force redirect to** **network domain** ఎంపిక పూర్తిగా విరుద్ధంగా పనిచేస్తుంది - మీ కస్టమర్లు తమ కస్టమ్ డొమైన్లలో సైన్ ఇన్ చేయడానికి ప్రయత్నించినా, తమ సబ్‌డొమైన్‌లో మాత్రమే తమ డాష్‌బోర్డులను యాక్సెస్ చేయడానికి అనుమతించబడతారు.

మరియు **Allow access to the admin by both mapped domain domain and network domain** ఎంపిక, వారికి సబ్‌డొమైన్ మరియు కస్టమ్ డొమైన్ రెండింటిలోనూ తమ అడ్మిన్ డాష్‌బోర్డులను యాక్సెస్ చేయడానికి అనుమతిస్తుంది.

![మూడు రీడైరెక్ట్ ఎంపికలను చూపిస్తూ విస్తరించిన అడ్మిన్ రీడైరెక్ట్ డ్రాప్‌డౌన్](/img/config/domain-mapping-redirect-options.png)

కస్టమ్ డొమైన్‌ను మ్యాప్ చేయడానికి రెండు మార్గాలు ఉన్నాయి. మొదటిది, super admin గా మీ నెట్‌వర్క్ అడ్మిన్ డాష్‌బోర్డ్ నుండి డొమైన్ పేరును మ్యాప్ చేయడం. రెండవది, Account పేజీ కింద ఉన్న సబ్‌సైట్ అడ్మిన్ డాష్‌బోర్డ్ ద్వారా చేయడం.

కానీ మీ నెట్‌వర్క్‌లోని సబ్‌సైట్లలో ఒకదానికి కస్టమ్ డొమైన్‌ను మ్యాప్ చేయడం ప్రారంభించే ముందు, ఆ డొమైన్ పేరుకు సంబంధించిన **DNS settings** సరిగా కాన్ఫిగర్ చేయబడ్డాయో లేదో నిర్ధారించాలి.

###

### డొమైన్ DNS సెట్టింగ్స్ సరిగా కాన్ఫిగర్ చేయబడ్డాయని నిర్ధారించుకోవడం {#making-sure-the-domain-dns-settings-are-properly-configured}

మ్యాపింగ్ పనిచేయాలంటే, మీరు మ్యాప్ చేయాలని భావిస్తున్న డొమైన్ మీ నెట్‌వర్క్ IP చిరునామాను సూచిస్తున్నదని నిర్ధారించాలి. మీకు అవసరమైనది నెట్‌వర్క్ IP చిరునామా అని గమనించండి - అంటే Ultimate Multisite ఇన్‌స్టాల్ చేసిన డొమైన్ యొక్క IP చిరునామా - మీరు మ్యాప్ చేయాలనుకుంటున్న కస్టమ్ డొమైన్ యొక్క IP చిరునామా కాదు. నిర్దిష్ట డొమైన్ యొక్క IP చిరునామాను వెతకడానికి, ఉదాహరణకు [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) కు వెళ్లాలని మేము సూచిస్తున్నాము.

డొమైన్‌ను సరిగ్గా మ్యాప్ చేయడానికి, మీ **DNS** కాన్ఫిగరేషన్‌లో ఆ **IP చిరునామా** ను సూచించే **A RECORD** ను జోడించాలి. వేర్వేరు డొమైన్ రిజిస్ట్రార్లలో DNS నిర్వహణ చాలా భిన్నంగా ఉంటుంది. కానీ మీరు మీ డొమైన్ రిజిస్ట్రార్ స్థానంలో XXXX పెట్టి " _Creating A Record on XXXX_ " అని వెతికితే, దీని గురించి ఆన్‌లైన్‌లో చాలానే ట్యుటోరియల్స్ లభిస్తాయి (ఉదా.: " _Creating A Record on_ _GoDaddy_ ").

ఇది పని చేయించడంలో మీకు ఇబ్బంది ఉంటే, **మీ డొమైన్ రిజిస్ట్రార్ సపోర్ట్‌ను సంప్రదించండి**. ఈ భాగంలో వారు మీకు సహాయం చేయగలరు.

మీరు మీ క్లయింట్లు తమ స్వంత డొమైన్లను మ్యాప్ చేసుకునేందుకు అనుమతించాలని భావిస్తే, ఈ భాగంలో అవసరమైన పనిని వారు స్వయంగా చేయాలి. వారు A Record సృష్టించలేకపోతే, వారిని వారి రిజిస్ట్రార్ సపోర్ట్ వ్యవస్థవైపు మార్గనిర్దేశం చేయండి.

### Super Admin గా కస్టమ్ డొమైన్ పేరును మ్యాప్ చేయడం {#mapping-custom-domain-name-as-super-admin}

మీ నెట్‌వర్క్‌లో super admin గా లాగిన్ అయినప్పుడు, **Ultimate Multisite > Domains** కిందకు వెళ్లి కస్టమ్ డొమైన్ పేర్లను సులభంగా జోడించి నిర్వహించవచ్చు.

![Ultimate Multisite లో డొమైన్ల జాబితా పేజీ](/img/admin/domains-list.png)

ఈ పేజీలో, పైభాగంలో ఉన్న **Add Domain** బటన్‌ను క్లిక్ చేయవచ్చు. అప్పుడు ఒక మోడల్ విండో తెరుచుకుంటుంది. అందులో మీరు **కస్టమ్ డొమైన్ పేరు**, కస్టమ్ డొమైన్ పేరును వర్తింపజేయాలనుకునే **సబ్‌సైట్** ను సెట్ చేసి పూరించవచ్చు, అలాగే దాన్ని **ప్రధాన డొమైన్** పేరుగా సెట్ చేయాలా వద్దా అని నిర్ణయించవచ్చు (ఒక సబ్‌సైట్‌కు **అనేక డొమైన్ పేర్లను మ్యాప్** చేయవచ్చని గమనించండి).

![డొమైన్ పేరు, సైట్ ఎంపిక, ప్రధాన డొమైన్ టోగుల్‌తో Add Domain మోడల్](/img/admin/domain-add-modal.png)

అన్ని సమాచారాన్ని నమోదు చేసిన తరువాత, దిగువన ఉన్న **Add Existing Domain** బటన్‌ను క్లిక్ చేయవచ్చు.

ఇది కస్టమ్ డొమైన్ యొక్క DNS సమాచారాన్ని ధృవీకరించి తీసుకురావడం ప్రారంభిస్తుంది. ప్రక్రియ ఎలా సాగుతోందో అనుసరించడానికి పేజీ దిగువన ఒక లాగ్‌ను కూడా మీరు చూస్తారు. ఈ ప్రక్రియ పూర్తవడానికి కొన్ని నిమిషాలు పట్టవచ్చు.

Ultimate Multisite v2.13.0 కొత్త site సృష్టించినప్పుడు, ఆ host‌ను ప్రతి-site డొమైన్‌గా పరిగణించాల్సి ఉంటే, అంతర్గత డొమైన్ రికార్డును కూడా స్వయంచాలకంగా సృష్టిస్తుంది. host నెట్‌వర్క్ ప్రధాన డొమైన్ అయితే, లేదా **Site URL** field‌లో కాన్ఫిగర్ చేసిన పంచుకున్న checkout-form base డొమైన్‌లలో ఒకటి అయితే, ప్రతి site దాన్ని ఉపయోగించుకునేలా ఆ పంచుకున్న base డొమైన్ అందుబాటులో ఉండేందుకు స్వయంచాలక mapped-domain రికార్డు దాటవేయబడుతుంది.

కస్టమర్ Domain Seller v1.3.0 లేదా దానికంటే కొత్తదానితో కొత్త డొమైన్‌ను నమోదు చేసినప్పుడు, Ultimate Multisite డిఫాల్ట్‌గా నమోదు చేసిన డొమైన్‌ను కస్టమర్ network site‌కు స్వయంచాలకంగా map చేస్తుంది. విజయవంతమైన నమోదు తర్వాత primary-domain flag, activation state, లేదా SSL handling వంటి ఎంపికలను సర్దుబాటు చేయాలనుకుంటే తప్ప, administrators ఇకపై వేరే mapped-domain రికార్డు జోడించాల్సిన అవసరం లేదు.

అన్నీ సరిగ్గా setup చేయబడితే **Stage** లేదా status **Checking DNS** నుండి **Ready**కి మారాలి.

<!-- స్క్రీన్‌షాట్ అందుబాటులో లేదు: domains జాబితాలో Checking DNS stage చూపిస్తున్న domain row -->

<!-- స్క్రీన్‌షాట్ అందుబాటులో లేదు: ఆకుపచ్చ status indicator‌తో Ready stage చూపిస్తున్న domain row -->

మీరు డొమైన్ పేరుపై క్లిక్ చేస్తే, దాని లోపల కొన్ని ఎంపికలను చూడగలరు. వాటిని త్వరగా చూద్దాం:

![stage, site, active, primary మరియు SSL toggles‌తో domain detail page](/img/admin/domain-edit.png)

**Stage:** ఇది డొమైన్ ప్రస్తుతం ఉన్న stage. మీరు మొదట డొమైన్‌ను జోడించినప్పుడు, అది బహుశా **Checking DNS** stage‌లో ఉంటుంది. ప్రక్రియ DNS entries‌ను తనిఖీ చేసి అవి సరైనవని నిర్ధారిస్తుంది. తర్వాత, డొమైన్ **Checking SSL** stage‌కు మార్చబడుతుంది. Ultimate Multisite డొమైన్‌లో SSL ఉందా లేదా అని తనిఖీ చేసి, మీ డొమైన్‌ను **Ready** లేదా **Ready (without SSL)**గా వర్గీకరిస్తుంది.

**Site:** ఈ డొమైన్‌కు అనుబంధించిన subdomain. mapped domain ఈ నిర్దిష్ట site కంటెంట్‌ను చూపిస్తుంది.

**Active:** డొమైన్‌ను activate లేదా deactivate చేయడానికి మీరు ఈ ఎంపికను on లేదా off చేయవచ్చు.

**Is Primary Domain?:** మీ కస్టమర్‌లకు ప్రతి site కోసం ఒకటి కంటే ఎక్కువ mapped domain ఉండవచ్చు. ఇది ఆ నిర్దిష్ట site కోసం primary domain అవుతుందా లేదా ఎంచుకోవడానికి ఈ ఎంపికను ఉపయోగించండి.

**Is Secure?:** Ultimate Multisite డొమైన్‌ను enable చేయడానికి ముందు దానిలో SSL certificate ఉందా లేదా తనిఖీ చేసినప్పటికీ, మీరు డొమైన్‌ను SSL certificate‌తో లేదా లేకుండా load చేయాలని manually ఎంచుకోవచ్చు. website‌కు SSL certificate లేకపోయినా మీరు దాన్ని SSL‌తో బలవంతంగా load చేయడానికి ప్రయత్నిస్తే, errors రావచ్చని గమనించండి.

### Subsite user‌గా custom domain name mapping చేయడం {#mapping-custom-domain-name-as-subsite-user}

Subsite administrators తమ subsite admin dashboard నుండి కూడా custom domain names‌ను map చేయగలరు.

ముందుగా, **Domain mapping** settings క్రింద ఈ ఎంపికను enable చేశారని నిర్ధారించుకోవాలి. క్రింది స్క్రీన్‌షాట్‌ను చూడండి.

<!-- స్క్రీన్‌షాట్ అందుబాటులో లేదు: Customer DNS Management toggle ద్వారా subsite users domains‌ను map చేయడానికి అనుమతించే Domain mapping settings -->

మీరు ఈ ఎంపికను **Plan** level క్రింద లేదా **Ultimate Multisite > Products**లో product options‌లో కూడా set లేదా configure చేయవచ్చు.

![product edit pageలో Custom Domains విభాగం](/img/config/product-custom-domains.png)

ఆ ఎంపికల్లో ఏదైనా enable చేసి, subsite user‌కు custom domain names‌ను map చేయడానికి అనుమతి ఉంటే, subsite user **Account** page క్రింద **Domains** అనే metabox‌ను చూడాలి.

<!-- స్క్రీన్‌షాట్ అందుబాటులో లేదు: Add Domain button‌తో subsite Account pageలో Domains metabox -->

user **Add Domain** button‌ను క్లిక్ చేయవచ్చు. అది కొన్ని సూచనలతో modal window‌ను తెస్తుంది.

<!-- స్క్రీన్‌షాట్ అందుబాటులో లేదు: subsite users కోసం DNS A-record సూచనలు చూపించే Add Domain modal -->

తర్వాత user **Next Step**ను క్లిక్ చేసి custom domain name జోడించడానికి కొనసాగవచ్చు. ఇది primary domain అవుతుందా లేదా అని కూడా ఎంచుకోవచ్చు.

<!-- స్క్రీన్‌షాట్ అందుబాటులో లేదు: custom domain name field మరియు primary domain toggle‌తో Add Domain form -->

<!-- స్క్రీన్‌షాట్ అందుబాటులో లేదు: DNS verification‌ను trigger చేసే Add Domain confirmation step -->

**Add Domain**ను క్లిక్ చేయడం custom domain యొక్క DNS సమాచారాన్ని verify చేసి fetch చేసే ప్రక్రియను ప్రారంభిస్తుంది.

### Domain Syncing గురించి {#about-domain-syncing}

Domain Syncing అనేది **domain mapping పని చేయడానికి** Ultimate Multisite మీ hosting account‌కు custom domain name‌ను add-on domain‌గా జోడించే ప్రక్రియ.

మీ hosting provider‌కు Ultimate Multisite domain mapping feature‌తో integration ఉంటే domain syncing స్వయంచాలకంగా జరుగుతుంది. ప్రస్తుతం ఈ hosting providers _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ మరియు _Cpanel._

host-provider integration active‌గా ఉన్నప్పుడు, కొత్తగా సృష్టించిన sites కోసం provider-side DNS లేదా subdomain creation task‌ను Ultimate Multisite enqueue చేయగలదు. ఆ task కోసం ఏ integration వినకపోతే, no-op queue entries‌ను నివారించడానికి background job దాటవేయబడుతుంది. mapped domains కోసం DNS మరియు SSL checks సాధారణ domain-stage process ద్వారా కొనసాగుతాయి.

మీరు ఈ integration‌ను Ultimate Multisite settingsలో **Integration** tab క్రింద activate చేయాలి.

![hosting providers‌ను చూపిస్తున్న Ultimate Multisite settingsలో Integrations tab](/img/config/integrations-tab.png)

<!-- స్క్రీన్‌షాట్ అందుబాటులో లేదు: Integrations settings tabలో Hosting provider Configuration links -->

_మీ hosting provider పైన పేర్కొన్న providers‌లో ఒకటి కాకపోతే, **మీరు domain name‌ను manually sync చేయాలి లేదా మీ hosting account‌కు జోడించాలి** అని గమనించండి._
