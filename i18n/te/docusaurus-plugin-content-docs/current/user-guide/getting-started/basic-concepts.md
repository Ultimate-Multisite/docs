---
title: ప్రాథమిక భావనలు
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# ప్రాథమిక భావనలు

WordPress Multisite కి కొత్తగా వచ్చిన వారికి మరియు Ultimate Multisite వాడటం మొదలుపెట్టిన వారికి, మొదట్లో చాలా కొత్త పదాలు మరియు పదబంధాలు నేర్చుకోవాల్సి ఉంటుంది. ఈ పదాలను నేర్చుకోవడం చాలా ముఖ్యమైన పని ఎందుకంటే ఈ platform ను మరియు ఇది మొత్తంగా ఎలా పనిచేస్తుందో మీరు అర్థం చేసుకోవాలి.

ఈ వ్యాసంలో, WordPress లోని కొన్ని కీలక భావనలను నిర్వచించి వివరించడానికి ప్రయత్నిస్తాము. వీటిలో కొన్ని వినియోగదారులకు ఎక్కువగా సంబంధించినవి, మరికొన్ని డెవలపర్లకు, మరియు కొన్ని ఇద్దరికీ సంబంధించినవి.

## WordPress Multisite

WordPress **Multisite** అనేది ఒక రకమైన WordPress installation, ఇది ఒకే WordPress dashboard నుండి బహుళ వెబ్‌సైట్ల నెట్‌వర్క్‌ను సృష్టించి నిర్వహించడానికి మిమ్మల్ని అనుమతిస్తుంది. సైట్ల సంఖ్య, ఫీచర్లు, themes మరియు user roles తో సహా అన్నింటినీ మీరు నిర్వహించవచ్చు. వందల మరియు వేల సైట్లను నిర్వహించడం సాధ్యమే.

## Network

WordPress పరంగా, multisite network అంటే ఒకే dashboard నుండి అనేక **subsites** ను నిర్వహించగల వ్యవస్థ. Multisite network ను సృష్టించడం hosting providers మధ్య భిన్నంగా ఉన్నప్పటికీ, చివరి ఫలితం సాధారణంగా **wp-config.php** file లో కొన్ని అదనపు directives ఉంటాయి, ఇది WordPress ఈ నిర్దిష్ట mode లో పనిచేస్తుందని తెలియజేస్తుంది.

Multisite network మరియు stand-alone WordPress installation మధ్య అనేక స్పష్టమైన తేడాలు ఉన్నాయి, వాటిని మనం క్లుప్తంగా చర్చిస్తాము.

## Database

Database అనేది నిర్మాణాత్మకంగా, క్రమబద్ధంగా అమర్చబడిన డేటా సమూహం. కంప్యూటర్ పరిభాషలో, database అంటే డేటాను నిల్వ చేయడానికి మరియు క్రమబద్ధం చేయడానికి ఉపయోగించే software. దీన్ని ఒక file cabinet గా ఊహించుకోండి, ఇక్కడ మీరు tables అని పిలవబడే వేర్వేరు విభాగాలలో డేటాను నిల్వ చేస్తారు.

WordPress Multisite ఒక database ను ఉపయోగిస్తుంది మరియు ప్రతి subsite కి prefix లో blog id తో దాని స్వంత tables ఉంటాయి, కాబట్టి మీరు network installation ను install చేసి మీ database ను సృష్టించి subsite ను క్రియేట్ చేసిన తర్వాత, మీకు ఈ tables ఉండాలి:

_wp_1_options_ \- మొదటి subsite కోసం options table

_wp_2_options_ \- రెండవ subsite కోసం options table

## Hosting provider

Hosting provider అనేది వ్యాపారాలు మరియు వ్యక్తులు తమ వెబ్‌సైట్లను World Wide Web ద్వారా అందుబాటులో ఉంచడానికి వీలు కల్పించే కంపెనీ. Web hosting providers అందించే సేవలు మారవచ్చు కానీ సాధారణంగా website design, host పై storage space మరియు Internet కి connectivity ఉంటాయి.

## Domain

Domain name అనేది మీ సైట్‌ను సందర్శించడానికి వ్యక్తులు ఉపయోగించే చిరునామా. ఇది web browser కి మీ సైట్ ఎక్కడ చూడాలో చెబుతుంది. వీధి చిరునామా లాగే, domain అనేది వ్యక్తులు మీ వెబ్‌సైట్‌ను online లో సందర్శించే విధానం. మరియు, మీ దుకాణం ముందు సైన్ బోర్డు ఉన్నట్లే. మీరు మా వెబ్‌సైట్‌ను సందర్శించాలనుకుంటే, మీ browser యొక్క address లో మా web address టైప్ చేయాలి అది [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, ఇక్కడ_ [**ultimatemultisite.com**](http://ultimatemultisite.com) domain name.

## Subdomain

Subdomain అనేది main domain కింద ఒక రకమైన website hierarchy, కానీ వెబ్‌సైట్‌లో content ను organize చేయడానికి folders ఉపయోగించకుండా, ఇది ఒక విధంగా దాని స్వంత వెబ్‌సైట్ పొందుతుంది. ఇది [**https://site1.domain.com/**](https://site1.domain.com/) గా ప్రదర్శించబడుతుంది, ఇక్కడ _site1_ subdomain పేరు మరియు [_domain.com_](http://domain.com) main domain.

## Subdirectory

Subdirectory అనేది root domain కింద ఒక రకమైన website hierarchy, ఇది వెబ్‌సైట్‌లో content ను organize చేయడానికి folders ను ఉపయోగిస్తుంది. Subdirectory అనేది subfolder తో సమానం మరియు ఈ పేర్లను పరస్పరం మార్చుకోవచ్చు. ఇది [**https://domain.com/site1**](https://domain.com/site1) గా ప్రదర్శించబడుతుంది, ఇక్కడ _site1_ subdirectory పేరు మరియు [_domain.com_](http://domain.com) main domain.

## Subsite

Subsite అనేది మీరు Multisite network లో సృష్టించే child site. మీ WordPress Multisite installation ఎలా configure చేయబడిందో బట్టి ఇది **subdomain** లేదా **subdirectory** కావచ్చు.

## Super Admin

WordPress Super Admin అనేది Multisite network లో అన్ని subsites ను నిర్వహించడానికి పూర్తి సామర్థ్యాలు కలిగిన user role. Multisite వినియోగదారులకు, ఇది మీ WordPress installation కు మీరు అందించగల **అత్యున్నత స్థాయి access**.

## Plugin

సాధారణంగా, plugin అనేది మీ WordPress సైట్‌కు అదనపు functionality ని జోడించే code సమూహం. ఇది login logo మార్చడం అంత సులభం కావచ్చు లేదా e-commerce functionality జోడించడం అంత సంక్లిష్టం కావచ్చు. _Woocommerce మరియు Contact Form_ అనేవి plugin కు ఉదాహరణలు.

WordPress Multisite లో, plugins ను network admin dashboard నుండి Super Admin మాత్రమే install చేయగలరు. Subsite Admins తమ subsite లో plugins ను activate మరియు deactivate మాత్రమే చేయగలరు.

## Themes

WordPress theme అనేది సైట్ యొక్క మొత్తం రూపాన్ని నిర్దేశించే files సమూహం (_graphics, style sheets మరియు code_). ఇది font styling, page layout, colors మొదలైన అన్ని front-end stylings ను అందిస్తుంది.

Plugins లాగే, WordPress Multisite లో themes ను Super Admin మాత్రమే install చేయగలరు మరియు subsite admins ద్వారా subsite స్థాయిలో activate చేయవచ్చు.

## Site Template

**Site Template** అనేది మీ network లో కొత్త sites సృష్టించేటప్పుడు base గా ఉపయోగించగల boilerplate site.

అంటే మీరు ఒక base site సృష్టించవచ్చు, వివిధ plugins ను activate చేయవచ్చు, ఒక active theme సెట్ చేయవచ్చు మరియు మీకు నచ్చిన విధంగా customize చేయవచ్చు. అప్పుడు, మీ customer కొత్త account సృష్టించినప్పుడు, లోపల అర్థవంతమైన content లేని default WordPress site పొందకుండా, వారు అన్ని customizations మరియు contents ఇప్పటికే ఉన్న మీ base site యొక్క copy పొందుతారు.

## Domain Mapping

WordPress తో **Domain mapping** అనేది వెబ్‌సైట్ చిరునామా ద్వారా వినియోగదారులను సరైన host కు redirect చేసే మార్గం. WordPress Multisite లో, subsites subdirectory లేదా subdomain ఉపయోగించి సృష్టించబడతాయి. Domain mapping ఏమి చేస్తుందంటే ఇది subsite వినియోగదారులు తమ site address మరింత professional గా కనిపించేలా [**joesbikeshop.com**](http://joesbikeshop.com) వంటి top-level domain ఉపయోగించడానికి అనుమతిస్తుంది.

## SSL

SSL అంటే **Secure Sockets Layer**. ఇది ఒక digital certificate, ఇది web site యొక్క గుర్తింపును authenticate చేస్తుంది మరియు encrypted connection ను enable చేస్తుంది. ఈ రోజుల్లో ఇది internet connection ను secure గా ఉంచడానికి మరియు రెండు systems మధ్య పంపబడుతున్న ఏదైనా sensitive data ను రక్షించడానికి standard technology గా ఉపయోగించబడుతుంది, నేరగాళ్లు బదిలీ చేయబడిన ఏదైనా సమాచారాన్ని చదవడం మరియు మార్చడం నిరోధిస్తుంది, వ్యక్తిగత వివరాలు సహా. Modern browsers కు SSL అవసరం, ఇది వెబ్‌సైట్‌ను సృష్టించేటప్పుడు మరియు నడిపేటప్పుడు అవసరం అవుతుంది.

## Media

Media అంటే వెబ్‌సైట్‌ను రూపొందించే images, audio, video మరియు ఇతర files.

WordPress Multisite లో Network sites ఒకే database ను share చేస్తాయి, అయితే media files కోసం filesystem లో వేర్వేరు paths ను నిర్వహిస్తాయి.

Standard WordPress location (wp-content/uploads) అలాగే ఉంటుంది; అయితే, దాని path network site యొక్క unique ID ని reflect చేయడానికి మార్చబడుతుంది. తత్ఫలితంగా network site కోసం media files wp-contents/uploads/site/[id] గా కనిపిస్తాయి.

## Permalinks

Permalinks అనేవి మీ సైట్‌లోని మీ వ్యక్తిగత blog post లేదా page యొక్క permanent URLs. Permalinks ను **pretty links** అని కూడా అంటారు. Default గా, WordPress URLs query string format ను ఉపయోగిస్తాయి, ఇది ఇలా కనిపిస్తుంది:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite అనేది WordPress Multisite installs కోసం తయారు చేయబడిన WordPress plugin, ఇది మీ WordPress install ను premium network of sites గా మారుస్తుంది – [WordPress.com](https://WordPress.com) లాగా – నెలవారీ, త్రైమాసిక లేదా వార్షిక రుసుముల ద్వారా clients sites సృష్టించడానికి అనుమతిస్తుంది (మీరు Free plans కూడా సృష్టించవచ్చు).

## Checkout Form

Checkout Form అనేది Ultimate Multisite registration ద్వారా subsite, membership మరియు user accounts సృష్టించడంలో భాగంగా ఉండే single లేదా multi-step order form. ఇది sign-up process లో వినియోగదారు submit చేయాల్సిన వివిధ fields మరియు payment forms ను కలిగి ఉంటుంది.

## Webhook

Webhook (web callback లేదా HTTP push API అని కూడా పిలుస్తారు) అనేది ఒక app ఇతర applications కు real-time సమాచారాన్ని అందించే మార్గం. Webhook ఇతర applications కు data జరుగుతున్నప్పుడే deliver చేస్తుంది, అంటే మీకు data వెంటనే లభిస్తుంది.

**Ultimate Multisite webhooks** అనంతమైన అవకాశాలను తెరుస్తాయి, network admins అన్ని రకాల crazy-but-useful integrations చేయడానికి అనుమతిస్తాయి, ముఖ్యంగా _Zapier మరియు IFTTT_ వంటి services తో కలిపి ఉపయోగించినప్పుడు.

## Events

Event అనేది mouse click వంటి వినియోగదారు లేదా మరొక source action ఫలితంగా జరిగే action. Ultimate Multisite మీ మొత్తం network లో జరుగుతున్న అన్ని events మరియు logs యొక్క record ను ఉంచుతుంది. ఇది plan changes వంటి మీ multisite లో జరుగుతున్న వివిధ activities ను track చేస్తుంది.
