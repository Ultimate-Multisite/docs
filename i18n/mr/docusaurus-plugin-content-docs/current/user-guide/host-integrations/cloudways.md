---
title: Cloudways समाकलन
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways एकत्रीकरण {#cloudways-integration}

## विहंगावलोकन {#overview}
Cloudways हे managed cloud hosting platform आहे जे तुम्हाला DigitalOcean, AWS, Google Cloud आणि इतर विविध cloud providers वर WordPress साइट्स तैनात करण्याची परवानगी देते. हे एकत्रीकरण Ultimate Multisite आणि Cloudways दरम्यान स्वयंचलित डोमेन समक्रमण आणि SSL प्रमाणपत्र व्यवस्थापन सक्षम करते.

## वैशिष्ट्ये {#features}
- स्वयंचलित डोमेन समक्रमण
- SSL प्रमाणपत्र व्यवस्थापन
- अतिरिक्त डोमेन्ससाठी समर्थन
- SSL प्रमाणपत्रांसाठी DNS पडताळणी

## आवश्यकता {#requirements}
खालील constants तुमच्या `wp-config.php` फाइलमध्ये परिभाषित केलेले असणे आवश्यक आहे:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

पर्यायाने, तुम्ही हे देखील परिभाषित करू शकता:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## सेटअप सूचना {#setup-instructions}

### 1. तुमची Cloudways API credentials मिळवा {#1-get-your-cloudways-api-credentials}

1. तुमच्या Cloudways Dashboard मध्ये लॉग इन करा
2. "Account" > "API की" येथे जा
3. तुमच्याकडे आधीपासून API key नसेल तर एक तयार करा
4. तुमचा ईमेल आणि API key कॉपी करा

### 2. तुमचे Server आणि Application IDs मिळवा {#2-get-your-server-and-application-ids}

1. तुमच्या Cloudways Dashboard मध्ये, "सर्व्हर्स" येथे जा
2. तुमची WordPress multisite ज्या server वर host केली आहे तो server निवडा
3. Server ID URL मध्ये दिसतो: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" येथे जा आणि तुमचे WordPress application निवडा
5. App ID URL मध्ये दिसतो: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php मध्ये constants जोडा {#3-add-constants-to-wp-configphp}

तुमच्या `wp-config.php` फाइलमध्ये खालील constants जोडा:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

तुमच्याकडे अतिरिक्त **बाह्य** डोमेन्स (तुमच्या multisite नेटवर्कच्या बाहेर) असतील जे नेहमी Cloudways aliases यादीत ठेवले गेले पाहिजेत:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning तुमच्या स्वतःच्या नेटवर्कचा wildcard समाविष्ट करू नका
`WU_CLOUDWAYS_EXTRA_DOMAINS` मध्ये `*.your-network.com` (किंवा तुमच्या स्वतःच्या नेटवर्कचा कोणताही subdomain pattern) जोडू **नका**. हे per-tenant SSL प्रमाणपत्रे जारी होण्यापासून का रोखते हे जाणून घेण्यासाठी खालील [महत्त्वाचे — wildcard SSL अडचण](#important--wildcard-ssl-pitfall) पहा.
:::

### 4. एकत्रीकरण सक्षम करा {#4-enable-the-integration}

1. तुमच्या WordPress admin मध्ये, Ultimate Multisite > Settings येथे जा
2. "Domain Mapping" tab वर जा
3. "Host Integrations" पर्यंत खाली स्क्रोल करा
4. Cloudways एकत्रीकरण सक्षम करा
5. "Save Changes" वर क्लिक करा

## हे कसे कार्य करते {#how-it-works}

### डोमेन समक्रमण {#domain-syncing}

Ultimate Multisite मध्ये डोमेन map केले जाते तेव्हा:

1. एकत्रीकरण सध्या map केलेली सर्व डोमेन्स मिळवते
2. ते नवीन डोमेन यादीत जोडते (लागू असल्यास www version सह)
3. ते API द्वारे संपूर्ण यादी Cloudways ला पाठवते
4. Cloudways तुमच्या application साठी domain aliases अद्यतनित करते

टीप: Cloudways API ला प्रत्येक वेळी डोमेन्सची संपूर्ण यादी पाठवणे आवश्यक असते, फक्त स्वतंत्र डोमेन्स जोडणे किंवा काढणे नाही.

### SSL प्रमाणपत्र व्यवस्थापन {#ssl-certificate-management}

डोमेन्स समक्रमित झाल्यानंतर:

1. एकत्रीकरण कोणत्या डोमेन्सकडे तुमच्या server कडे निर्देश करणारे वैध DNS records आहेत ते तपासते
2. ते त्या डोमेन्ससाठी Let's Encrypt SSL प्रमाणपत्रे install करण्यासाठी Cloudways ला विनंती पाठवते
3. Cloudways SSL प्रमाणपत्र जारी करणे आणि installation हाताळते

एकत्रीकरण नेहमी Cloudways कडून **standard** (non-wildcard) Let's Encrypt प्रमाणपत्रांची विनंती करते. `WU_CLOUDWAYS_EXTRA_DOMAINS` मध्ये wildcard pattern दिल्यास, SSL विनंतीपूर्वी सुरुवातीचे `*.` काढले जाते — wildcard स्वतः या एकत्रीकरणाद्वारे कधीही install केला जात नाही. Cloudways वर wildcard प्रमाणपत्र वापरण्यासाठी तुम्हाला ते manually install करावे लागेल, पण तसे केल्याने mapped custom domains साठी per-domain Let's Encrypt issuance block होते (खालील अडचण पहा).

## अतिरिक्त डोमेन्स {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant तुम्हाला अतिरिक्त **बाह्य** डोमेन्स निर्दिष्ट करण्याची परवानगी देते जी नेहमी Cloudways application च्या aliases यादीत ठेवली गेली पाहिजेत. यासाठी ते वापरा:

- Ultimate Multisite द्वारे manage न केलेली बाह्य डोमेन्स (उदा. त्याच Cloudways application शेअर करणारी स्वतंत्र marketing साइट)
- application aliases यादीत ठेवू इच्छित parked किंवा staging डोमेन्स

हा constant तुमच्या स्वतःच्या नेटवर्कच्या subdomain wildcard साठी वापरू **नका**
(उदा. `*.your-network.com`). खालील wildcard SSL अडचण पहा.

## महत्त्वाचे — Wildcard SSL अडचण {#important--wildcard-ssl-pitfall}

Cloudways च्या default setup चे पालन करताना एक सामान्य चूक म्हणजे `WU_CLOUDWAYS_EXTRA_DOMAINS` मध्ये `*.your-network.com` सारखा wildcard जोडणे, किंवा त्या wildcard साठी Cloudways wildcard SSL प्रमाणपत्र manually install करणे.

**तुम्ही असे केल्यास, Ultimate Multisite map करत असलेल्या per-tenant custom domains साठी Cloudways Let's Encrypt प्रमाणपत्रे जारी करण्यास नकार देईल.** Cloudways प्रत्येक वेळी application वरील सक्रिय SSL प्रमाणपत्र बदलते, आणि application वरील आधीपासून अस्तित्वात असलेले wildcard प्रमाणपत्र एकत्रीकरण ज्यावर अवलंबून आहे त्या per-domain Let's Encrypt issuance ला block करते.

### Ultimate Multisite नेटवर्कसाठी शिफारस केलेला Cloudways SSL setup {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways application च्या **SSL Certificate** tab मध्ये, फक्त `your-network.com` आणि `www.your-network.com` कव्हर करणारे **standard
   Let's Encrypt प्रमाणपत्र** install करा
   — wildcard **नाही**.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` मध्ये `*.your-network.com` (किंवा तुमच्या स्वतःच्या नेटवर्कचा कोणताही subdomain pattern) ठेवू **नका**. तो constant फक्त **बाह्य** डोमेन्ससाठी राखून ठेवा.
3. per-tenant subdomain wildcard फक्त **DNS** स्तरावर तयार करा (`*.your-network.com` साठी तुमच्या Cloudways server IP कडे निर्देश करणारा `A` record) जेणेकरून subsites resolve होतील. स्वतंत्र mapped custom domains साठी SSL नंतर एकत्रीकरणाद्वारे Let's Encrypt मार्फत आपोआप जारी केले जाते.

जर तुमच्या tenant चे custom domains SSL शिवाय अडकले असतील, तर Cloudways SSL tab तपासा. जर तिथे
wildcard certificate सक्रिय असेल, तर ते काढा, फक्त मुख्य network domain साठी standard Let's Encrypt
certificate पुन्हा जारी करा, आणि `WU_CLOUDWAYS_EXTRA_DOMAINS` मधून कोणत्याही wildcard entries काढा. मग domain mapping पुन्हा trigger करा (किंवा पुढच्या mapping ची वाट पाहा)
आणि integration पुन्हा प्रत्येक domain साठी certificates जारी करायला सुरुवात करेल.

## समस्या निराकरण {#troubleshooting}

### API Connection समस्या {#api-connection-issues}
- तुमचा email आणि API key बरोबर आहेत याची खात्री करा
- तुमचे server आणि application IDs बरोबर आहेत का तपासा
- तुमच्या Cloudways account कडे आवश्यक permissions आहेत याची खात्री करा

### SSL Certificate समस्या {#ssl-certificate-issues}
- SSL certificates जारी करण्यापूर्वी domains कडे तुमच्या server कडे निर्देश करणारे वैध DNS records असणे Cloudways ला आवश्यक आहे
- SSL certificates ची विनंती करण्यापूर्वी integration DNS records पडताळते
- SSL certificates जारी होत नसतील, तर तुमचे domains तुमच्या server च्या IP address कडे योग्यरीत्या निर्देश करत आहेत का ते तपासा
- **प्रत्येक tenant चे custom domains SSL शिवाय अडकले आहेत का?** Cloudways application चा SSL Certificate tab तपासा. जर wildcard certificate (हाताने install केलेले, किंवा `*.your-network.com` कव्हर करणारे) सक्रिय असेल, तर Cloudways स्वतंत्रपणे mapped केलेल्या custom domains साठी Let's Encrypt certificates जारी करणार नाही. त्याऐवजी फक्त मुख्य network domain (`your-network.com`, `www.your-network.com`) कव्हर करणारे standard Let's Encrypt certificate ठेवा आणि `WU_CLOUDWAYS_EXTRA_DOMAINS` मधून कोणत्याही wildcard entries काढा. मग domain mapping पुन्हा trigger करा (किंवा पुढच्या mapping ची वाट पाहा) आणि integration प्रत्येक domain साठी certificates ची विनंती करेल.

### Domain जोडला गेला नाही {#domain-not-added}
- कोणतेही error messages आहेत का ते पाहण्यासाठी Ultimate Multisite logs तपासा
- domain आधीच Cloudways मध्ये जोडलेला नाही याची खात्री करा
- तुम्ही जोडत असलेल्या domains च्या संख्येला तुमचा Cloudways plan support करतो याची खात्री करा
