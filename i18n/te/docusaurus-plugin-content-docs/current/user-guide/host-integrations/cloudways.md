---
title: Cloudways అనుసంధానం
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways సమీకరణ {#cloudways-integration}

## అవలోకనం {#overview}
Cloudways అనేది నిర్వహిత క్లౌడ్ హోస్టింగ్ వేదిక. ఇది DigitalOcean, AWS, Google Cloud వంటి వివిధ క్లౌడ్ ప్రొవైడర్లపై WordPress సైట్‌లను అమలు చేయడానికి మిమ్మల్ని అనుమతిస్తుంది. ఈ సమీకరణ Ultimate Multisite మరియు Cloudways మధ్య ఆటోమేటిక్ డొమైన్ సమకాలీకరణను, SSL సర్టిఫికేట్ నిర్వహణను ప్రారంభిస్తుంది.

## ఫీచర్లు {#features}
- ఆటోమేటిక్ డొమైన్ సమకాలీకరణ
- SSL సర్టిఫికేట్ నిర్వహణ
- అదనపు డొమైన్‌లకు మద్దతు
- SSL సర్టిఫికేట్‌ల కోసం DNS ధృవీకరణ

## అవసరాలు {#requirements}
మీ `wp-config.php` ఫైల్‌లో క్రింది కాన్స్టెంట్‌లు నిర్వచించాలి:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ఐచ్చికంగా, మీరు ఇవి కూడా నిర్వచించవచ్చు:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## సెటప్ సూచనలు {#setup-instructions}

### 1. మీ Cloudways API ఆధారాలను పొందండి {#1-get-your-cloudways-api-credentials}

1. మీ Cloudways Dashboardకి లాగిన్ అవండి
2. "Account" > "API Keys"కి వెళ్లండి
3. మీ వద్ద ఇప్పటికే API కీ లేకపోతే ఒకదాన్ని రూపొందించండి
4. మీ ఇమెయిల్ మరియు API కీని కాపీ చేయండి

### 2. మీ సర్వర్ మరియు అప్లికేషన్ IDలను పొందండి {#2-get-your-server-and-application-ids}

1. మీ Cloudways Dashboardలో, "Servers"కి వెళ్లండి
2. మీ WordPress మల్టీసైట్ హోస్ట్ చేయబడిన సర్వర్‌ను ఎంచుకోండి
3. Server ID URLలో కనిపిస్తుంది: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications"కి వెళ్లి మీ WordPress అప్లికేషన్‌ను ఎంచుకోండి
5. App ID URLలో కనిపిస్తుంది: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.phpకి కాన్స్టెంట్‌లను జోడించండి {#3-add-constants-to-wp-configphp}

మీ `wp-config.php` ఫైల్‌కు క్రింది కాన్స్టెంట్‌లను జోడించండి:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

మీ మల్టీసైట్ నెట్‌వర్క్ వెలుపల ఉన్న అదనపు **బాహ్య** డొమైన్‌లు Cloudways అలియాస్‌ల జాబితాలో ఎల్లప్పుడూ ఉండాలి అనుకుంటే:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning మీ స్వంత నెట్‌వర్క్ వైల్డ్‌కార్డ్‌ను చేర్చవద్దు
`WU_CLOUDWAYS_EXTRA_DOMAINS`లో `*.your-network.com`ను లేదా మీ స్వంత నెట్‌వర్క్‌కు చెందిన ఏ సబ్‌డొమైన్ నమూనాన్నైనా జోడించవద్దు.
ఇది ప్రతి అద్దెదారుకి ప్రత్యేకంగా SSL సర్టిఫికేట్‌లు జారీ కావడాన్ని ఎందుకు అడ్డుకుంటుందో తెలుసుకోవడానికి క్రింద ఉన్న [ముఖ్యం — వైల్డ్‌కార్డ్ SSL లోపం](#important--wildcard-ssl-pitfall) చూడండి.
:::

### 4. సమీకరణను ప్రారంభించండి {#4-enable-the-integration}

1. మీ WordPress నిర్వాహక విభాగంలో, Ultimate Multisite > Settingsకి వెళ్లండి
2. "Domain Mapping" ట్యాబ్‌కి వెళ్లండి
3. "Host Integrations" వరకు కిందికి స్క్రోల్ చేయండి
4. Cloudways సమీకరణను ప్రారంభించండి
5. "Save Changes" క్లిక్ చేయండి

## ఇది ఎలా పనిచేస్తుంది {#how-it-works}

### డొమైన్ సమకాలీకరణ {#domain-syncing}

Ultimate Multisiteలో డొమైన్ మ్యాప్ చేయబడినప్పుడు:

1. సమీకరణ ప్రస్తుతం మ్యాప్ చేసిన అన్ని డొమైన్‌లను పొందుతుంది
2. వర్తిస్తే www వెర్షన్‌తో పాటు కొత్త డొమైన్‌ను జాబితాకు జోడిస్తుంది
3. పూర్తి జాబితాను API ద్వారా Cloudwaysకి పంపుతుంది
4. Cloudways మీ అప్లికేషన్ కోసం డొమైన్ అలియాస్‌లను నవీకరిస్తుంది

గమనిక: Cloudways APIకి ప్రతి సారి పూర్తి డొమైన్‌ల జాబితా పంపాలి. ఒక్కో డొమైన్‌ను మాత్రమే జోడించడం లేదా తొలగించడం సరిపోదు.

### SSL సర్టిఫికేట్ నిర్వహణ {#ssl-certificate-management}

డొమైన్‌లు సమకాలీకరించిన తర్వాత:

1. మీ సర్వర్‌ను సూచించే చెల్లుబాటు అయ్యే DNS రికార్డ్‌లు ఏ డొమైన్‌లకు ఉన్నాయో సమీకరణ తనిఖీ చేస్తుంది
2. ఆ డొమైన్‌ల కోసం Let's Encrypt SSL సర్టిఫికేట్‌లను ఇన్‌స్టాల్ చేయడానికి Cloudwaysకి అభ్యర్థన పంపుతుంది
3. SSL సర్టిఫికేట్ జారీ మరియు ఇన్‌స్టాలేషన్‌ను Cloudways నిర్వహిస్తుంది

సమీకరణ ఎల్లప్పుడూ Cloudways నుండి **ప్రామాణిక** (వైల్డ్‌కార్డ్ కాని) Let's Encrypt సర్టిఫికేట్‌లనే అభ్యర్థిస్తుంది.
`WU_CLOUDWAYS_EXTRA_DOMAINS`లో వైల్డ్‌కార్డ్ నమూనా ఇచ్చినట్లయితే, SSL అభ్యర్థనకు ముందు ప్రారంభంలోని
`*.` తొలగించబడుతుంది — ఈ సమీకరణ వైల్డ్‌కార్డ్‌ను ఎప్పుడూ ఇన్‌స్టాల్ చేయదు.
Cloudwaysలో వైల్డ్‌కార్డ్ సర్టిఫికేట్ ఉపయోగించాలంటే దాన్ని మీరు చేతితో ఇన్‌స్టాల్ చేయాలి,
కానీ అలా చేస్తే మ్యాప్ చేసిన అనుకూల డొమైన్‌లకు ప్రతి డొమైన్‌కు ప్రత్యేకంగా Let's Encrypt జారీ కావడం ఆగిపోతుంది
(క్రింద ఉన్న లోపం చూడండి).

## అదనపు డొమైన్‌లు {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` కాన్స్టెంట్ Cloudways అప్లికేషన్ అలియాస్‌ల జాబితాలో ఎల్లప్పుడూ ఉండాల్సిన అదనపు **బాహ్య**
డొమైన్‌లను పేర్కొనడానికి మిమ్మల్ని అనుమతిస్తుంది. దీన్ని వీటి కోసం ఉపయోగించండి:

- Ultimate Multisite ద్వారా నిర్వహించని బాహ్య డొమైన్‌లు (ఉదా. అదే Cloudways అప్లికేషన్‌ను పంచుకునే వేరే మార్కెటింగ్ సైట్)
- అప్లికేషన్ అలియాస్‌ల జాబితాలో ఉంచాలనుకునే పార్క్ చేసిన లేదా స్టేజింగ్ డొమైన్‌లు

మీ స్వంత నెట్‌వర్క్ సబ్‌డొమైన్ వైల్డ్‌కార్డ్ కోసం ఈ కాన్స్టెంట్‌ను ఉపయోగించవద్దు
(ఉదా. `*.your-network.com`). క్రింద ఉన్న వైల్డ్‌కార్డ్ SSL లోపాన్ని చూడండి.

## ముఖ్యం — వైల్డ్‌కార్డ్ SSL లోపం {#important--wildcard-ssl-pitfall}

Cloudways యొక్క డిఫాల్ట్ సెటప్‌ను అనుసరించేటప్పుడు జరిగే సాధారణ పొరపాటు ఏమిటంటే
`WU_CLOUDWAYS_EXTRA_DOMAINS`కు `*.your-network.com` వంటి వైల్డ్‌కార్డ్‌ను జోడించడం, లేదా ఆ వైల్డ్‌కార్డ్ కోసం Cloudways
వైల్డ్‌కార్డ్ SSL సర్టిఫికేట్‌ను చేతితో ఇన్‌స్టాల్ చేయడం.

**మీరు ఇలా చేస్తే, Ultimate Multisite మ్యాప్ చేసే ప్రతి అద్దెదారి అనుకూల డొమైన్‌ల కోసం
Let's Encrypt సర్టిఫికేట్‌లను జారీ చేయడానికి Cloudways నిరాకరిస్తుంది.** Cloudways ప్రతి సారి అప్లికేషన్‌లో సక్రియంగా ఉన్న
SSL సర్టిఫికేట్‌ను భర్తీ చేస్తుంది. అప్లికేషన్‌లో ముందే ఉన్న వైల్డ్‌కార్డ్ సర్టిఫికేట్,
సమీకరణ ఆధారపడే ప్రతి డొమైన్‌కు ప్రత్యేకమైన Let's Encrypt జారీని అడ్డుకుంటుంది.

### Ultimate Multisite నెట్‌వర్క్ కోసం సిఫార్సు చేసిన Cloudways SSL సెటప్ {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways అప్లికేషన్‌లోని **SSL Certificate** ట్యాబ్‌లో, కేవలం `your-network.com` మరియు `www.your-network.com`ను మాత్రమే కవర్ చేసే **ప్రామాణిక
   Let's Encrypt సర్టిఫికేట్** ఇన్‌స్టాల్ చేయండి
   — వైల్డ్‌కార్డ్ కాదు.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS`లో `*.your-network.com` లేదా మీ స్వంత నెట్‌వర్క్‌కు చెందిన ఏ సబ్‌డొమైన్ నమూనాన్నైనా పెట్టవద్దు.
   ఆ కాన్స్టెంట్‌ను **బాహ్య** డొమైన్‌లకే పరిమితం చేయండి.
3. ప్రతి అద్దెదారి సబ్‌డొమైన్ వైల్డ్‌కార్డ్‌ను **DNS** స్థాయిలో మాత్రమే సృష్టించండి (`*.your-network.com` కోసం మీ Cloudways సర్వర్ IPని సూచించే `A` రికార్డ్)
   తద్వారా సబ్‌సైట్‌లు పరిష్కరించబడతాయి. ఒక్కో మ్యాప్ చేసిన అనుకూల డొమైన్‌కు SSL ఆ తర్వాత సమీకరణ ద్వారా
   Let's Encryptతో ఆటోమేటిక్‌గా జారీ అవుతుంది.

మీ tenants యొక్క custom domains SSL లేకుండా నిలిచిపోయి ఉంటే, Cloudways SSL ట్యాబ్‌ను తనిఖీ చేయండి. అక్కడ
wildcard certificate సక్రియంగా ఉంటే, దాన్ని తీసివేసి, ప్రధాన network domain కోసం మాత్రమే standard Let's Encrypt
certificate‌ను మళ్లీ జారీ చేయండి, అలాగే `WU_CLOUDWAYS_EXTRA_DOMAINS` నుండి wildcard entries ఏవైనా ఉంటే తొలగించండి.
తర్వాత domain mapping‌ను మళ్లీ ప్రారంభించండి (లేదా తదుపరి దాని కోసం వేచి ఉండండి)
అప్పుడు integration మళ్లీ ప్రతి-domain certificates జారీ చేయడం ప్రారంభిస్తుంది.

## సమస్య పరిష్కారం {#troubleshooting}

### API Connection సమస్యలు {#api-connection-issues}
- మీ email మరియు API key సరైనవని ధృవీకరించండి
- మీ server మరియు application IDs సరైనవని తనిఖీ చేయండి
- మీ Cloudways account‌కు అవసరమైన permissions ఉన్నాయని నిర్ధారించండి

### SSL Certificate సమస్యలు {#ssl-certificate-issues}
- SSL certificates జారీ చేయడానికి ముందు domains మీ server వైపు చూపే చెల్లుబాటు అయ్యే DNS records కలిగి ఉండాలని Cloudways కోరుతుంది
- SSL certificates అభ్యర్థించే ముందు integration DNS records‌ను ధృవీకరిస్తుంది
- SSL certificates జారీ కాకపోతే, మీ domains మీ server IP address‌ను సరిగ్గా చూపుతున్నాయో లేదో తనిఖీ చేయండి
- **ప్రతి-tenant custom domains SSL లేకుండా నిలిచిపోయాయా?** Cloudways application యొక్క SSL Certificate ట్యాబ్‌ను తనిఖీ చేయండి. wildcard certificate (చేతితో ఇన్‌స్టాల్ చేసినది, లేదా `*.your-network.com`ని కవర్ చేసేది) సక్రియంగా ఉంటే, విడిగా మ్యాప్ చేసిన custom domains కోసం Cloudways Let's Encrypt certificates జారీ చేయదు. ప్రధాన network domain (`your-network.com`, `www.your-network.com`) మాత్రమే కవర్ చేసే standard Let's Encrypt certificate‌తో దాన్ని భర్తీ చేసి, `WU_CLOUDWAYS_EXTRA_DOMAINS` నుండి wildcard entries ఏవైనా ఉంటే తొలగించండి. తర్వాత domain mapping‌ను మళ్లీ ప్రారంభించండి (లేదా తదుపరి దాని కోసం వేచి ఉండండి) అప్పుడు integration ప్రతి-domain certificates‌ను అభ్యర్థిస్తుంది.

### Domain జోడించబడలేదు {#domain-not-added}
- ఏవైనా error messages కోసం Ultimate Multisite logs‌ను తనిఖీ చేయండి
- domain ఇప్పటికే Cloudwaysకి జోడించబడలేదని ధృవీకరించండి
- మీరు జోడిస్తున్న domains సంఖ్యకు మీ Cloudways plan మద్దతు ఇస్తుందని నిర్ధారించండి
