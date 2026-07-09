---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integration {#hostinger-hpanel-integration}

## Overview {#overview}

Hostinger हे एक लोकप्रिय web hosting provider आहे, ज्याचे आधुनिक कंट्रोल पॅनेलचे नाव hPanel आहे. Ultimate Multisite Hostinger integration मुळे Ultimate Multisite आणि Hostinger च्या hPanel मध्ये डोमेनचे स्वयंचलित सिंक्रोनायझेशन (automatic domain syncing) शक्य होते. यामुळे तुम्ही तुमच्या WordPress admin मधूनच डोमेन मॅपिंग (domain mappings) आणि सबडोमेन (subdomains) चे व्यवस्थापन स्वयंचलितपणे करू शकता.

## Features {#features}

- hPanel मध्ये automatic addon domain creation
- hPanel मध्ये automatic subdomain creation (subdomain multisite installations साठी)
- मॅपिंग (mappings) डिलीट केल्यावर डोमेनचे removal
- hPanel च्या domain management API सोबत सहज एकत्रीकरण (Seamless integration)

## Requirements {#requirements}

Hostinger integration वापरण्यासाठी, तुम्हाला खालील गोष्टींची आवश्यकता आहे:

1. hPanel ॲक्सेस असलेला Hostinger account
2. Hostinger कडून मिळालेला API token
3. तुमच्या `wp-config.php` फाईलमध्ये खालील constants परिभाषित केलेले असावेत:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

पर्यायीरित्या, तुम्ही हे देखील परिभाषित करू शकता:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Setup Instructions {#setup-instructions}

### 1. Generate Your Hostinger API Token {#1-generate-your-hostinger-api-token}

1. तुमच्या Hostinger account मध्ये लॉग इन करा आणि hPanel ॲक्सेस करा.
2. **Account Settings** → **API Tokens** येथे जा.
3. **Create New Token** वर क्लिक करा.
4. तुमच्या token ला एक वर्णनात्मक नाव द्या (उदा. "Ultimate Multisite").
5. आवश्यक परवानग्या (permissions) निवडा:
   - Domain management
   - Subdomain management
6. तयार झालेला token कॉपी करा आणि तो सुरक्षित ठिकाणी साठवा.

### 2. Find Your Account ID {#2-find-your-account-id}

1. hPanel मध्ये, **Account Settings** → **Account Information** येथे जा.
2. तुमचा Account ID या पानावर प्रदर्शित (displayed) केला आहे.
3. पुढील पायरीसाठी हा ID कॉपी करा आणि सेव्ह करा.

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

खालील constants तुमच्या `wp-config.php` फाईलमध्ये जोडा:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

जर तुमचा Hostinger account वेगळ्या API endpoint चा वापर करत असेल, तर तुम्ही ते कस्टमाइझ करू शकता:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. तुमच्या WordPress admin मध्ये, **Ultimate Multisite > Settings** येथे जा.
2. **Domain Mapping** टॅबवर (tab) जा.
3. **Host Integrations** पर्यंत खाली स्क्रोल करा.
4. **Hostinger (hPanel)** integration सक्षम (Enable) करा.
5. **Save Changes** वर क्लिक करा.

## How It Works {#how-it-works}

### Addon Domains {#addon-domains}

जेव्हा तुम्ही Ultimate Multisite मध्ये एखादे डोमेन मॅप (map) करता:

1. integration हे डोमेन addon domain म्हणून जोडण्यासाठी Hostinger च्या API ला एक request पाठवते.
2. हे डोमेन तुमच्या root directory कडे निर्देशित (point) करण्यासाठी कॉन्फिगर केले जाते.
3. जेव्हा डोमेन मॅपिंग काढले जाते, तेव्हा integration आपोआप hPanel मधून addon domain काढून टाकते.

### Subdomains {#subdomains}

subdomain multisite installations साठी, जेव्हा नवीन साइट तयार होते:

1. integration पूर्ण डोमेनमधून subdomain भाग काढते.
2. ते subdomain जोडण्यासाठी Hostinger च्या API ला एक request पाठवते.
3. subdomain हे तुमच्या root directory कडे निर्देशित करण्यासाठी कॉन्फिगर केले जाते.

## Important Notes {#important-notes}

- हे integration तुमच्या account सोबत संवाद साधण्यासाठी Hostinger च्या REST API चा वापर करते.
- तुमच्या API token मध्ये domain आणि subdomain management साठी आवश्यक परवानग्या (permissions) असणे आवश्यक आहे.
- हे integration DNS configuration हाताळत नाही; डोमेन आधीच तुमच्या Hostinger account कडे निर्देशित केलेले असावेत.
- API requests सुरक्षितपणे HTTPS द्वारे केल्या जातात.
- तुमचा API token सुरक्षित ठेवा आणि तो कधीही सार्वजनिकरित्या शेअर करू नका.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}

- तपासा की तुमचा API token बरोबर आहे आणि तो कालबाह्य (expired) झालेला नाही.
- तपासा की तुमचा Account ID बरोबर आहे.
- खात्री करा की तुमच्या API token मध्ये domain management साठी आवश्यक परवानग्या आहेत.
- तपासा की तुमचा Hostinger account सक्रिय (active) आणि व्यवस्थित स्थितीत आहे.

### Domain Not Added {#domain-not-added}

- कोणत्याही त्रुटी संदेशांसाठी Ultimate Multisite logs तपासा.
- तपासा की ते डोमेन आधीच तुमच्या Hostinger account मध्ये जोडलेले नाही.
- खात्री करा की तुमच्या Hostinger account ने addon domains साठी मर्यादा (limit) गाठलेली नाही.
- खात्री करा की डोमेन योग्यरित्या तुमच्या Hostinger nameservers कडे निर्देशित केले आहे.

### SSL Certificate Issues {#ssl-certificate-issues}

- हे integration SSL certificate जारी (issuance) करत नाही.
- Hostinger सहसा AutoSSL द्वारे विनामूल्य SSL certificates पुरवते.
- तुम्ही hPanel मध्ये **SSL/TLS** अंतर्गत थेट SSL certificates व्यवस्थापित करू शकता.
- पर्यायीरित्या, Hostinger च्या AutoSSL वैशिष्ट्यासह Let's Encrypt चा वापर करा.

## Support {#support}

Hostinger integration बद्दल अधिक मदतीसाठी, कृपया खालील ठिकाणी संदर्भ घ्या:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
