---
title: WordPress Multisite అంటే ఏమిటి?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite అంటే ఏమిటి?

WordPress తన core లో 'Multisite' అనే ఫీచర్‌ను అందిస్తుంది, ఇది 2010లో WordPress 3.0 విడుదలతో మొదలైంది. అప్పటి నుండి కొత్త ఫీచర్లను జోడించడానికి మరియు సెక్యూరిటీని మెరుగుపరచడానికి అనేక మార్పులు జరిగాయి.

సరళంగా చెప్పాలంటే, WordPress multisite ను ఇలా అర్థం చేసుకోవచ్చు: ఒక యూనివర్సిటీ ఒకే WordPress installation ను నిర్వహిస్తుంది, కానీ ప్రతి ఫ్యాకల్టీ తమ సొంత WordPress సైట్‌ను నిర్వహిస్తుంది.

## 

## WordPress Multisite అంటే సరిగ్గా ఏమిటి?

Multisite అనేది WordPress యొక్క ఒక ఫీచర్, ఇది ఒకే WordPress installation లో అనేక సైట్లను షేర్ చేయడానికి అనుమతిస్తుంది. Multisite యాక్టివేట్ చేసినప్పుడు, అసలు WordPress సైట్ సాధారణంగా **sites network** అని పిలువబడే దానిని సపోర్ట్ చేసేలా మారుతుంది.

ఈ network file system ను షేర్ చేస్తుంది (అంటే **plugins మరియు themes కూడా షేర్ అవుతాయి**), database, WordPress core files, wp-config.php మొదలైనవి.

దీని అర్థం WordPress, theme మరియు plugin updates మీ network లోని అన్ని సైట్లకు ఒక్కసారి మాత్రమే చేయాలి, ఎందుకంటే అవి filesystem లో ఒకే files ను షేర్ చేస్తాయి.

ఈ విషయం multisite యొక్క ప్రధాన ప్రయోజనాలలో ఒకటి, ఎందుకంటే మీ కస్టమర్ల సైట్లను మెయింటెయిన్ చేయడానికి చేయవలసిన పనుల సంఖ్యను అలాగే ఉంచుతూ మీరు మేనేజ్ చేసే సైట్ల సంఖ్యను పెంచుకోవచ్చు.

## 

## Subdomain లేదా Subdirectory?

WordPress multisite ను రన్ చేయడానికి రెండు modes ఉన్నాయి – మీ సాధారణ WordPress installation ను multisite installation గా మార్చేటప్పుడు మీరు ఒకదాన్ని ఎంచుకోవాలి:

**Subdomain:** ఉదా.: [site.domain.com](http://site.domain.com)

…లేదా

**Subdirectory:** ఉదా.: [yourdomain.com/site](http://yourdomain.com/site)

ఈ నిర్ణయం తీసుకునేటప్పుడు ప్రతి mode కు ఉన్న ప్రయోజనాలు మరియు అప్రయోజనాలను పరిగణించాలి.

అయితే ఒక ముఖ్యమైన విషయం గమనించాలి: మీరు ఒకసారి నిర్ణయం తీసుకున్న తర్వాత, మీ network ను subdirectory నుండి subdomain కు లేదా దానికి విరుద్ధంగా మార్చడం చాలా కష్టం – ముఖ్యంగా మీకు ఇప్పటికే కొన్ని సైట్లు ఉంటే.

ఆ నిర్ణయం తీసుకునే ముందు, గుర్తుంచుకోవలసిన కొన్ని అంశాలు:

**Subdirectory Mode** సెటప్ మరియు maintenance పరంగా సులభమైన mode. ఎందుకంటే అన్ని సైట్లు main domain కు జోడించబడిన paths మాత్రమే (ఉదా. [yourdomain.com/subsite](http://yourdomain.com/subsite)). దీని వల్ల, మీకు main domain కోసం **ఒకే SSL certificate** అవసరం మరియు అది మొత్తం network ను కవర్ చేస్తుంది.

అదే సమయంలో, దాని URL structure కారణంగా, Google మరియు చాలా ఇతర search engines మీ subdirectory-based network లోని అన్ని subsites ను ఒక పెద్ద సైట్‌గా పరిగణిస్తాయి. దీని ఫలితంగా, మీ end-customers subsites లో జోడించిన content మీ landing site యొక్క SEO performance ను ప్రభావితం చేయవచ్చు. ఈ ప్రభావం ఎంత అనేది చర్చనీయమే, మరియు ఇలాంటి arrangement SEO performance కు ప్రయోజనకరంగా కూడా ఉంటుందని వాదించవచ్చు.

**Subdomain Mode** సెటప్ చేయడానికి కొంచెం క్లిష్టంగా ఉంటుంది, కానీ దాని URL structure (ఉదా. [subsite.yournetwork.com](http://subsite.yournetwork.com)) సాధారణంగా "మరింత professional గా" కనిపిస్తుంది.

Subdomain mode సెటప్ చేయడంలో ప్రధాన సవాళ్లలో ఒకటి మొత్తం network కోసం SSL coverage (HTTPS). విషయం ఏమిటంటే browsers subdomains ను వేరువేరు entities గా పరిగణిస్తాయి. దీని ఫలితంగా, మీ network లోని ప్రతి subdomain కు వేరే SSL certificate అవసరం, లేదా **Wildcard SSL certificate** అని పిలువబడే ప్రత్యేక రకమైన certificate అవసరం. ఇటీవలి సంవత్సరాలలో, hosting providers మరియు panels SSL provisioning పరంగా మెరుగుపడుతున్నాయి మరియు కొన్ని ఒక్క క్లిక్‌తో wildcard certificates అందిస్తున్నాయి, సెటప్ complexity పరంగా రెండు modes మధ్య అంతరాన్ని తగ్గిస్తున్నాయి.

Subdirectory mode కి భిన్నంగా, subdomain-based network లోని subsites ను search engines వేరువేరు websites గా పరిగణిస్తాయి, అంటే ఒక subsite లోని content ఇతర subsites యొక్క SEO performance ను అస్సలు ప్రభావితం చేయదు.

## Super Admin

Single-site WordPress installations మీకు అపరిమిత సంఖ్యలో users ను జోడించడానికి మరియు ఆ users కు వేర్వేరు permissions తో వేర్వేరు user roles ఇవ్వడానికి అనుమతిస్తాయి.

WordPress Multisite లో, ఒక కొత్త రకం user అన్‌లాక్ అవుతుంది: **super admin** – మరియు ఒక కొత్త admin panel అన్‌లాక్ అవుతుంది: **network admin panel**.

పేరు సూచించినట్లుగా, super admin కు network పై superpowers ఉంటాయి, దాని అన్ని subsites, plugins, themes, అన్నింటినీ మేనేజ్ చేయగల సామర్థ్యం ఉంటుంది!

మీ single-site WordPress installation ను multisite గా మార్చిన తర్వాత, single site యొక్క అసలు admin స్వయంచాలకంగా super admin గా అప్‌గ్రేడ్ అవుతారు.

Plugins మరియు themes ను super admins మాత్రమే network admin panel నుండి install లేదా uninstall చేయవచ్చు. Subsite admins అప్పుడు ఆ plugins లేదా themes ను activate లేదా deactivate చేయడాన్ని ఎంచుకోవచ్చు, super admin ఒక plugin ను network activate చేస్తే తప్ప, అది అన్ని subsites కు ఎల్లప్పుడూ active గా ఉండేలా బలవంతం చేస్తుంది.

_గమనిక: మీరు చూడగలిగినట్లుగా, ఎవరైనా మీ network కు ఆహ్వానించి వారికి super admin status ఇవ్వడం ఆ user కు మీ network పై పూర్తి నియంత్రణ ఇస్తుంది. ఉదాహరణకు, ఇతర super admins మీ super admin status ను కూడా తొలగించవచ్చు, మిమ్మల్ని మీ సొంత network admin panel నుండి లాక్ అవుట్ చేయవచ్చు. Ultimate Multisite customers కు అదనపు super admins ఏమి చేయగలరో దానిపై granular control ఇవ్వడానికి, మాకు Support Agents అనే add-on ఉంది. ఈ add-on మీకు మరొక రకమైన user ను సృష్టించడానికి అనుమతిస్తుంది – ఒక agent – వారికి network లో వారి tasks చేయడానికి అవసరమైన permissions మాత్రమే ఉంటాయి._

## Subsites మధ్య ఏమి షేర్ అవుతుంది మరియు ఏమి అవ్వదు

మేము ముందుగా చెప్పినట్లుగా, WordPress multisite యొక్క ముఖ్యమైన ప్రయోజనాలలో ఒకటి ఏమిటంటే అన్ని subsites ఒకే configurations, core files, themes, plugins, WordPress core files మొదలైనవాటిని షేర్ చేస్తాయి.

అయితే, ప్రతి subsite ప్రాతిపదికన చక్కగా scope చేయబడిన elements ఉన్నాయి.

\- ఉదాహరణకు, ప్రతి subsite కు దాని సొంత uploads folder ఉంటుంది. దీని ఫలితంగా, ఒక నిర్దిష్ట subsite యొక్క users అప్‌లోడ్ చేసిన వాటిని మరొక subsite లో access చేయలేరు.

\- ప్రతి subsite కు దాని సొంత dedicated admin panel ఉంటుంది మరియు super admin చేత network active చేయబడితే తప్ప plugins లేదా themes ను activate లేదా deactivate చేయవచ్చు.

\- చాలా database tables ప్రతి subsite కోసం సృష్టించబడతాయి, అంటే posts, comments, pages, settings మరియు ఇతరాలు ప్రతి subsite కోసం scope చేయబడతాయి.

## WordPress Multisite లో User management

WordPress multisite లో ఒక సున్నితమైన అంశం user management. WordPress user table అన్ని subsites మధ్య షేర్ చేయబడే కొన్ని tables లో ఒకటి.

మీ network తో ఏమి నిర్మించాలని ప్లాన్ చేస్తున్నారో దాని ఆధారంగా ఈ arrangement కొన్ని సమస్యలను సృష్టించవచ్చు. దిగువ ఉదాహరణ అత్యంత ముఖ్యమైన సమస్యను వివరించడంలో సహాయపడుతుంది.

ఈ scenario ను ఊహించండి:

మీరు WordPress multisite network సృష్టిస్తారు మరియు e-commerce store కావాలనుకునే వారికి నెలవారీ ఫీ కోసం subsites అందించడం ప్రారంభిస్తారు.

మీకు మొదటి paying customer వస్తారు – John. మీరు John కోసం మీ network లో ఒక site సృష్టిస్తారు, అవసరమైన అన్ని plugins install చేస్తారు, తర్వాత John తన store ను manage చేయగలిగేలా ఒక user సృష్టిస్తారు.

తర్వాత రెండవ customer వస్తారు – Alice. మీరు ఆమె కోసం కూడా అదే చేస్తారు మరియు ఇప్పుడు ఆమెకు కూడా మీ network లో ఒక store ఉంది.

John మరియు Alice ఇద్దరూ మీ customers, కానీ వారు ఒకరినొకరు తెలియదు. ఇంకా ముఖ్యంగా, వారిలో ఒకరు మరొకరి store website ను visit చేస్తే, ఈ store అదే sites network లో host చేయబడుతోందని తెలుసుకునే మార్గం లేదు.

ఒక రోజు, John కు కొత్త జత shoes కావాలి మరియు అతను Alice's store లో perfect ones కనుగొంటాడు. అతను purchase పూర్తి చేయడానికి ప్రయత్నించినప్పుడు, "email already in use" error message వస్తుంది, ఇది విచిత్రంగా ఉంది ఎందుకంటే John ఇది Alice's website ను visit చేసిన మొదటిసారి అని 100% sure.

ఇక్కడ ఏమి జరిగిందంటే John యొక్క user మొత్తం network లో షేర్ చేయబడింది కాబట్టి అతను Alice's site లో checkout కోసం account సృష్టించడానికి ప్రయత్నించినప్పుడు, WordPress అదే email address తో user ఇప్పటికే ఉన్నట్లు detect చేసి error throw చేస్తుంది.

_గమనిక: మీ use-case ని బట్టి ఇది ఎంత చెడ్డగా ఉంటుందో మాకు తెలుసు, అందుకే Ultimate Multisite లో ఇప్పటికే ఉన్న user కోసం regular checks ను bypass చేసే option ఉంది, ఒకే email address ను ఉపయోగించి multiple accounts సృష్టించడానికి అనుమతిస్తుంది. ప్రతి account ఒక subsite కు bound అవుతుంది, కాబట్టి collision risk కనీసంగా ఉంటుంది. పై ఉదాహరణలో, John కు error message రాదు మరియు ఆ shoes ను సమస్య లేకుండా కొనగలుగుతారు. ఈ option Enable Multiple Accounts అని పిలువబడుతుంది, మరియు Ultimate Multisite → Settings → Login & Registration లో activate చేయవచ్చు._

User table షేర్ చేయబడినప్పటికీ, users ను subsite admins లేదా super admin ద్వారా subsites కు add చేయవచ్చు మరియు తొలగించవచ్చు, మరియు వారికి వేర్వేరు subsites లో వేర్వేరు user roles కూడా ఉండవచ్చు.

## Performance పరిగణనలు

WordPress multisite సపోర్ట్ చేయగల sites సంఖ్య విషయంలో నిజంగా powerful. [WordPress.com](https://WordPress.com), Edublogs, మరియు Campuspress అన్నీ multisite-based services అని మరియు ప్రతి ఒక్కటి వేలాది sites ను host చేస్తుందని ఈ విషయాన్ని పరీక్షించవచ్చు.

సిద్ధాంతపరంగా ఒకే WordPress multisite installation లో మీరు host చేయగల sites కు maximum సంఖ్య లేనప్పటికీ, ఆచరణలో మీరు సంతృప్తికరంగా run చేయగల sites సంఖ్య అనేక factors పై ఆధారపడి విస్తృతంగా మారవచ్చు: sites ఎంత dynamic గా ఉన్నాయి, subsites కు ఏ plugins అందుబాటులో ఉన్నాయి మొదలైనవి.

సాధారణ నియమంగా, మీ network ఎంత simple గా ఉంటే అంత మంచిది. Content నిజంగా dynamic కాని sites కు preference ఇవ్వడం (ఇవి aggressive caching strategies కు గొప్ప అభ్యర్థులు అవుతాయి) మరియు plugin stack ను వీలైనంత తేలికగా ఉంచడం (active plugins సంఖ్య తక్కువగా ఉంటే మంచిది) మీరు host చేయగల subsites సంఖ్యను గణనీయంగా పెంచవచ్చు.

అత్యుత్తమ భాగం ఏమిటంటే ఇది అంతా WordPress కాబట్టి, performance improvements కోసం మీకు ఇప్పటికే తెలిసిన మరియు ఇష్టమైన అదే tools multisite network కోసం కూడా పని చేస్తాయి.

Multisite కోసం ప్రధాన bottleneck database, కానీ అన్నీ సరిగ్గా setup చేయబడితే, మీరు దాని గురించి ఆందోళన చెందడానికి ముందు కొన్ని వేల sites వరకు తీసుకోవచ్చు. అప్పుడు కూడా, ఆ సమయంలో progressively add చేయగల solutions ఉన్నాయి (ఉదాహరణకు database sharding solutions వంటివి).
