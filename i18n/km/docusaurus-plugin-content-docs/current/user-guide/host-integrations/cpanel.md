---
title: ការរួមបញ្ចូល cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# ការតភ្ជាប់ជាមួយ cPanel {#cpanel-integration}

## ទិដ្ឋភាពទូទៅ {#overview}
cPanel គឺជាផ្ទាំងគ្រប់គ្រងគេហទំព័រ (web hosting control panel) ដែលពេញនិយមបំផុតមួយដែលប្រើដោយអ្នកផ្តល់សេវាបង្ហោះទំហំចែករំលែក និងឯកជនជាច្រើន។ ការតភ្ជាប់នេះអនុញ្ញាតឱ្យមានការធ្វើសមកាលកម្មដែន (domain syncing) ដោយស្វ័យប្រវត្តិរវាង Ultimate Multisite និង cPanel ដែលអនុញ្ញាតឱ្យអ្នកបន្ថែមអាលិអានដែន (domain aliases) និង subdomain ទៅក្នុងគណនី cPanel របស់អ្នកដោយស្វ័យប្រវត្តិ។

## លក្ខណៈពិសេស {#features}
- ការបង្កើត addon domain ដោយស្វ័យប្រវត្តិនៅក្នុង cPanel
- ការបង្កើត subdomain ដោយស្វ័យប្រវត្តិនៅក្នុង cPanel (សម្រាប់ការដំឡើង subdomain multisite)
- ការលុបដែននៅពេលដែលការផ្គូផ្គង (mappings) ត្រូវបានលុប

## តម្រូវការ {#requirements}
តម្លៃថេរ (constants) ខាងក្រោមត្រូវតែត្រូវបានកំណត់នៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ជាជម្រើស អ្នកក៏អាចកំណត់តម្លៃផ្សេងទៀតបាន៖

```php
define('WU_CPANEL_PORT', 2083); // តម្លៃលំនាំគឺ 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // តម្លៃលំនាំគឺ /public_html
```

## ការណែនាំអំពីការរៀបចំ (Setup Instructions) {#setup-instructions}

### ១. ទទួលបានព័ត៌មានសម្ងាត់ cPanel របស់អ្នក {#1-get-your-cpanel-credentials}
1. ទទួលបានឈ្មោះអ្នកប្រើប្រាស់ (username) និងពាក្យសម្ងាត់ (password) cPanel របស់អ្នកពីអ្នកផ្តល់សេវាបង្ហោះរបស់អ្នក។
2. កំណត់ host cPanel របស់អ្នក (ជាធម្មតាគឺ `cpanel.yourdomain.com` ឬ `yourdomain.com:2083`)។

### ២. បន្ថែមតម្លៃថេរទៅក្នុង wp-config.php {#2-add-constants-to-wp-configphp}
បន្ថែមតម្លៃថេរខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ជាជម្រើស អ្នកអាចកែសម្រួល port និង root directory បាន៖

```php
define('WU_CPANEL_PORT', 2083); // ផ្លាស់ប្តូរប្រសិនបើ cPanel របស់អ្នកប្រើ port ផ្សេង
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ផ្លាស់ប្តូរប្រសិនបើ root directory ឯកសាររបស់អ្នកខុសគ្នា
```

### ៣. បើកដំណើរការការតភ្ជាប់ (Enable the Integration) {#3-enable-the-integration}

១. នៅលើ WordPress admin របស់អ្នក សូមទៅកាន់ Ultimate Multisite > Settings
២. ចូលទៅកាន់แท็บ "Domain Mapping" (ការបែងចែកដែន)
៣. រំលងចុះក្រោមទៅផ្នែក "Host Integrations" (ការរួមបញ្ចូល Host)
៤. បើកដំណើរការការរួមបញ្ចូល cPanel
៥. ចុចលើ "Save Changes" (រក្សាទុកការផ្លាស់ប្តូរ)

## វាដំណើរការដោយរបៀបណា {#how-it-works}

### Addon Domains (ដែនបន្ថែម) {#addon-domains}

នៅពេលដែលដែនមួយត្រូវបានកំណត់ (mapped) នៅក្នុង Ultimate Multisite៖

១. ការរួមបញ្ចូលនេះនឹងផ្ញើសំណើទៅ API របស់ cPanel ដើម្បីបន្ថែមដែននោះជា addon domain
២. ដែននោះនឹងត្រូវបានកំណត់ឱ្យចង្អុលទៅ root directory (ថតឯកសារដើម) របស់អ្នក
៣. នៅពេលដែលការកំណត់ដែនមួយត្រូវបានលុបចេញ ការរួមបញ្ចូលនេះនឹងលុប addon domain ចេញពី cPanel

### Subdomains (ដែនរង) {#subdomains}

សម្រាប់ការដំឡើង subdomain multisite នៅពេលបង្កើតគេហទំព័រថ្មី៖

១. ការរួមបញ្ចូលនេះនឹងស្រង់ផ្នែក subdomain ចេញពី full domain
២. វាផ្ញើសំណើទៅ API របស់ cPanel ដើម្បីបន្ថែម subdomain
៣. Subdomain នោះនឹងត្រូវបានកំណត់ឱ្យចង្អុលទៅ root directory (ថតឯកសារដើម) របស់អ្នក

## កំណត់សម្គាល់សំខាន់ៗ {#important-notes}

- ការរួមបញ្ចូលនេះប្រើប្រាស់ API2 របស់ cPanel ដើម្បីទំនាក់ទំនងជាមួយគណនី cPanel របស់អ្នក
- គណនី cPanel របស់អ្នកត្រូវតែមានសិទ្ធិក្នុងការបន្ថែម addon domains និង subdomains
- អ្នកផ្តល់ hosting ខ្លះអាចនឹងកំណត់ចំនួន addon domains ឬ subdomains ដែលអ្នកអាចបង្កើតបាន
- ការរួមបញ្ចូលនេះមិនបានគ្រប់គ្រងការកំណត់ DNS ទេ អ្នកនៅតែត្រូវការចង្អុលដែនរបស់អ្នកទៅកាន់ IP address របស់ server របស់អ្នក

## ការដោះស្រាយបញ្ហា (Troubleshooting) {#troubleshooting}

### បញ្ហានៅពេលភ្ជាប់ API (API Connection Issues) {#api-connection-issues}
- សូមពិនិត្យមើលថាតើ username និង password របស់ cPanel របស់អ្នកត្រឹមត្រូវឬទេ
- စစ်ဆေးថា host របស់ cPanel អ្នកត្រឹមត្រូវ និងអាចចូលប្រើបានដែរឬទេ
- ត្រូវប្រាកដថាគណនី cPanel របស់អ្នកមានសិទ្ធិចាំបាច់
- សូមព្យាយាមប្រើ full URL សម្រាប់ host (ឧទាហរណ៍៖ `https://cpanel.yourdomain.com`)

### ដែនមិនត្រូវបានបន្ថែម (Domain Not Added) {#domain-not-added}
- សូមពិនិត្យមើល logs របស់ Ultimate Multisite សម្រាប់សារកំហុសណាមួយ
- សូមផ្ទៀងផ្ទាត់ថាដែននោះមិនទាន់ត្រូវបានបន្ថែមទៅ cPanel រួចហើយឬនៅ
- សូមប្រាកដថាគណនី cPanel របស់អ្នកមិនទាន់បានដល់ដែនកំណត់សម្រាប់ការបន្ថែម addon domains ឬ subdomains នោះទេ។

### បញ្ហាវិញ្ញាបនបត្រ SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- ការរួមបញ្ចូលនេះមិនអាចដោះស្រាយការចេញវិញ្ញាបនបត្រ SSL បានទេ។
- អ្នកនឹងត្រូវប្រើឧបករណ៍ SSL/TLS របស់ cPanel ឬមុខងារ AutoSSL ដើម្បីចេញវិញ្ញាបនបត្រ SSL សម្រាប់ដែនរបស់អ្នក។
- ឬមួយក៏ អ្នកអាចប្រើសេវាកម្មដូចជា Let's Encrypt រួមជាមួយ AutoSSL របស់ cPanel បានដែរ។
