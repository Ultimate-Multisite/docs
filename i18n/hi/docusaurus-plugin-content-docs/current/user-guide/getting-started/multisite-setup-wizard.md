---
title: मल्टीसाइट सेटअप विज़ार्ड
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite सेटअप विज़ार्ड

Ultimate Multisite में एक built-in विज़ार्ड है जो एक standard WordPress installation को अपने आप WordPress Multisite network में बदल देता है। इससे आपको `wp-config.php` को manually edit करने या database commands चलाने की ज़रूरत नहीं पड़ती।

:::tip
अगर आपका WordPress installation पहले से Multisite network के रूप में चल रहा है, तो आप इस step को पूरी तरह छोड़ सकते हैं। विज़ार्ड सिर्फ़ तभी दिखाई देता है जब Multisite अभी enable नहीं है।
:::

## विज़ार्ड कब दिखाई देता है?

जब आप किसी standard (non-Multisite) WordPress installation पर Ultimate Multisite activate करते हैं, तो plugin पता लगाता है कि Multisite enable नहीं है और आपको regular setup wizard की जगह अपने आप Multisite Setup Wizard पर redirect कर देता है।

आप इसे सीधे **WP Admin > Ultimate Multisite > Multisite Setup** पर भी access कर सकते हैं।

## ज़रूरी शर्तें

विज़ार्ड चलाने से पहले, सुनिश्चित करें कि:

- आपके पास अपने WordPress installation का **administrator access** है
- आपके server की `wp-config.php` file web server द्वारा **writable** है
- आपके पास अपनी files और database का **हालिया backup** है

:::warning
विज़ार्ड आपकी `wp-config.php` file में बदलाव करता है और नई database tables बनाता है। आगे बढ़ने से पहले हमेशा backup बनाएं।
:::

## Step 1: Welcome

पहली screen बताती है कि WordPress Multisite क्या है और विज़ार्ड क्या करेगा:

- आपके WordPress configuration में Multisite feature enable करेगा
- ज़रूरी network database tables बनाएगा
- `wp-config.php` में required multisite constants जोड़ेगा
- पूरे network में Ultimate Multisite को network-activate करेगा

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

आगे बढ़ने के लिए **Continue** पर click करें।

## Step 2: Network Configuration

इस step में आपसे अपनी network settings configure करने को कहा जाता है।

### Site Structure

चुनें कि आपकी network sites कैसे organize होंगी:

- **Sub-domains** (Recommended) — Sites को अपना subdomain मिलता है, जैसे `site1.yourdomain.com`
- **Sub-directories** — Sites paths के रूप में बनाई जाती हैं, जैसे `yourdomain.com/site1`

:::note
अगर आप sub-domains चुनते हैं, तो आपको अपने domain के लिए **wildcard DNS** और **wildcard SSL certificate** configure करना होगा। ज़्यादातर managed WordPress hosts इसे अपने आप handle करते हैं। विस्तृत तुलना के लिए [Ultimate Multisite 101](./ultimate-multisite-101) देखें।
:::

### Network Title

अपने network के लिए एक नाम enter करें। यह default रूप से आपकी current site title के साथ "Network" जुड़ा होता है। आप इसे बाद में network settings से बदल सकते हैं।

### Network Admin Email

वह email address जो network administration notifications के लिए use होगा। यह default रूप से current user का email address होता है।

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Fields भरने के बाद, आगे बढ़ने के लिए **Continue** पर click करें।

## Step 3: Installation

शुरू करने के लिए **Install** button पर click करें। विज़ार्ड क्रम में पांच automated steps perform करता है, हर एक अपनी progress real-time में दिखाता है:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | विवरण |
|------|-------------|
| **Enable Multisite** | `wp-config.php` में `WP_ALLOW_MULTISITE` constant जोड़ता है |
| **Create Network** | Multisite database tables (`wp_site`, `wp_sitemeta`, `wp_blogs`, आदि) बनाता है और उन्हें आपकी network configuration से populate करता है |
| **Update Configuration** | `wp-config.php` में final multisite constants जोड़ता है (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, आदि) |
| **Fix Cookies** | सुनिश्चित करता है कि activation के बाद authentication issues से बचने के लिए network metadata में site URL सही है |
| **Network Activate Plugin** | Ultimate Multisite को network-activate करता है ताकि यह पूरे network में चले |

हर step इनमें से कोई एक status दिखाता है:

- **Pending** — Process होने का इंतज़ार
- **Installing...** — अभी चल रहा है
- **Success!** — सफलतापूर्वक पूरा हो गया
- **Error message** — कोई error आई (message में issue बताया जाएगा)

जब सभी steps सफलतापूर्वक पूरे हो जाते हैं, तो आपको हर item के लिए green "Success!" status दिखाई देगा:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

इसके बाद विज़ार्ड अपने आप completion screen पर चला जाएगा।

## Step 4: Complete

जब installation पूरा हो जाता है, तो आपको एक success message दिखाई देगा जो confirm करता है कि WordPress Multisite enable हो गया है।

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

अब आप अपने WaaS platform को configure करने के लिए Ultimate Multisite setup wizard के साथ आगे बढ़ सकते हैं (company details, default content, payment gateways, आदि)।

:::note
Multisite installation पूरा होने के बाद, आपका browser newly-enabled network admin के through redirect होगा। आपको फिर से login करना पड़ सकता है क्योंकि authentication cookies multisite environment के लिए update हो जाती हैं।
:::

## Manual Setup Fallback

अगर विज़ार्ड आपकी `wp-config.php` file में write नहीं कर पाता (file permissions या server restrictions के कारण), तो यह वह exact code दिखाएगा जो आपको manually जोड़ना होगा:

1. **wp-config.php constants** जो `/* That's all, stop editing! */` line के ऊपर जोड़ने होंगे
2. आपकी चुनी हुई site structure (subdomain या subdirectory) के लिए उपयुक्त **.htaccess rewrite rules**

Manual changes करने के बाद, page refresh करें और विज़ार्ड detect कर लेगा कि multisite अब active है।

## समस्या निवारण

### विज़ार्ड कहता है कि wp-config.php writable नहीं है

आपके web server process को `wp-config.php` file में write करने की permission चाहिए। आप या तो:

- अस्थायी रूप से file permissions को `644` या `666` में बदल सकते हैं
- विज़ार्ड द्वारा दिए गए manual setup fallback instructions use कर सकते हैं
- अपने hosting provider से मदद मांग सकते हैं

### Setup के बाद sites accessible नहीं हैं (subdomains)

अगर आपने subdomain structure चुना है, तो आपको अपने domain के लिए **wildcard DNS** configure करना होगा। एक DNS record जोड़ें:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

अगर आपको इसे configure करने का तरीका नहीं पता, तो अपने hosting provider से जांच करें।

### Setup के बाद authentication issues

अगर multisite setup के बाद आप logout हो गए हैं या cookie errors आ रही हैं:

1. Site के लिए अपने browser cookies clear करें
2. `yourdomain.com/wp-login.php` पर फिर से login करें
3. अगर issue बना रहता है, तो check करें कि आपकी `wp-config.php` में `COOKIE_DOMAIN` `false` पर set नहीं है — यह subdomain multisite installations पर एक known issue है

### Installation के दौरान कोई step fail हो गया

अगर installation steps में से कोई एक error दिखाता है:

1. दिखाए गए error message को note करें
2. Configuration step पर वापस जाएं और फिर से try करें
3. अगर error बना रहता है, तो अधिक details के लिए अपने server का PHP error log check करें
4. जो steps पहले ही complete हो चुके हैं, वे अगली बार skip हो जाएंगे (installer idempotent है)
