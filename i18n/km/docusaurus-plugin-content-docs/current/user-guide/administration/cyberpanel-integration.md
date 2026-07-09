---
title: ការរួមបញ្ចូល CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# ការរួមបញ្ចូល CyberPanel {#cyberpanel-integration}

လမ်းណែនាំនេះពន្យល់ពីរបៀបកំណត់រចនាសម្ព័ន្ធការរួមបញ្ចូល Ultimate Multisite CyberPanel ដើម្បីឱ្យដែនដែលបានតម្រូវ (mapped domains) នៅក្នុងបណ្តាញរបស់អ្នកត្រូវបានបន្ថែម (និងដកចេញ) ជា virtual hosts នៅក្នុង CyberPanel ដោយស្វ័យប្រវត្តិ រួមជាមួយនឹងជម្រើសនៃការផ្តល់ SSL ដោយស្វ័យប្រវត្តិតាមរយៈ Let's Encrypt។

## វាធ្វើអ្វីខ្លះ {#what-it-does}

- នៅពេលដែលដែនមួយត្រូវបានតម្រូវនៅក្នុង Ultimate Multisite ការរួមបញ្ចូលនេះនឹងហៅ API របស់ CyberPanel ដើម្បីបង្កើត virtual host សម្រាប់ដែននោះ។
- នៅពេលដែលការតម្រូវដែនត្រូវបានលុប ការរួមបញ្ចូលនេះនឹងហៅ API ដើម្បីលុប virtual host ដែលត្រូវគ្នា។
- នៅពេលដែល auto-SSL ត្រូវបានបើក ការរួមបញ្ចូលនេះនឹងបង្កឱ្យមានការចេញវិញ្ញាបនបត្រ Let's Encrypt ជាបន្ទាន់ បន្ទាប់ពីបង្កើត virtual host រួច។
- វាបន្ថែម/ដក alias `www.` ដោយជម្រើសទៅតាមការកំណត់ "Auto-create www subdomain" របស់អ្នកនៅក្នុងការตั้งค่า Domain Mapping។

## តម្រូវការជាមុន {#prerequisites}

- ម៉ាស៊ីន CyberPanel ដែលកំពុងដំណើរការ (ណែនាំ v2.3 ឬថ្មីជាងនេះ) ដែលអាចចូលបានពីម៉ាស៊ីន WordPress របស់អ្នក។
- គេហទំព័រដែលមានស្រាប់នៅក្នុង CyberPanel ដែលបម្រើ root network WordPress របស់អ្នករួចហើយ។ ការរួមបញ្ចូលនេះនឹងភ្ជាប់ virtual hosts ថ្មីទៅកាន់ម៉ាស៊ីននេះ។
- ការអនុញ្ញាត API របស់ CyberPanel ត្រូវបានបើក។ ការផ្ទៀងផ្ទាត់ប្រើឈ្មោះអ្នកគ្រប់គ្រង (admin username) និងពាក្យសម្ងាត់ (password) របស់អ្នកនៅក្នុង CyberPanel។
- កំណត់ត្រា DNS របស់អ្នកសម្រាប់ដែនដែលបានតម្រូវត្រូវតែចង្អុលទៅ IP address របស់ម៉ាស៊ីនអ្នករួចហើយ មុនពេល auto-SSL អាចចេញវិញ្ញាបនបត្រដែលមានសុពលភាពបាន។

## តម្រូវការ {#requirements}

ថេរ (constants) ខាងក្រោមនេះត្រូវតែត្រូវបានកំណត់នៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ជម្រើសផ្សេងទៀត អ្នកក៏អាចកំណត់បានដូចខាងក្រោម៖

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // ค่าเริ่มต้น: true — បញ្ចេញ SSL Let's Encrypt បន្ទាប់ពីបង្កើតឈ្មោះដែន
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // ค่าเริ่มต้น: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // ប្រើសម្រាប់ទំនាក់ទំនងអំពីใบรับรอง SSL
```

## ការណែនាំអំពីការរៀបចំ (Setup Instructions) {#setup-instructions}

### ១. បើកដំណើរការ CyberPanel API {#1-enable-the-cyberpanel-api}

1. ចុចចូលទៅកាន់แดชบอร์ด CyberPanel របស់អ្នកក្នុងនាមជាអ្នកគ្រប់គ្រង (administrator)។
2. ចូលទៅកាន់ **Security** > **SSL** ហើយបញ្ជាក់ថា SSL ត្រូវបានបើកនៅលើចំណុចប្រទាក់ CyberPanel ផ្ទាល់ (នេះគឺចាំបាច់សម្រាប់ការហៅ API ដោយសុវត្ថិភាព)។
3. CyberPanel API មាននៅ `https://your-server-ip:8090/api/` ជាលំនាំដើម។ មិនចាំបាច់មានជំហានបន្ថែមដើម្បីបើកវាទេ — វាត្រូវបានបើកជាលំនាំដើមសម្រាប់អ្នកប្រើប្រាស់ admin។

### ២. បន្ថែម Constants ទៅក្នុង wp-config.php {#2-add-constants-to-wp-configphp}

បន្ថែម constants (តម្លៃថេរ) ខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក មុនបន្ទាត់ `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ដើម្បីបើកដំណើរការ auto-SSL (ត្រូវបានណែនាំ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ៣. បើកដំណើរការ Integration {#3-enable-the-integration}

1. នៅក្នុង network admin របស់ WordPress អ្នក សូមចូលទៅកាន់ **Ultimate Multisite** > **Settings**។
2. ចូលទៅកាន់แท็บ **Domain Mapping** (ការបែងចែកដែន)។
3. រំលងចុះក្រោមទៅផ្នែក **Host Integrations** (ការរួមបញ្ចូលម្ចាស់ផ្ទះ)។
4. បើកដំណើរការ integration **CyberPanel**។
5. ចុចលើ **Save Changes** (រក្សាទុកការផ្លាស់ប្តូរ)។

### ៤. ផ្ទៀងផ្ទាត់ការតភ្ជាប់ {#4-verify-connectivity}

ប្រើការសាកល្បងការតភ្ជាប់ដែលមាននៅក្នុង settings wizard៖

១. ចូលទៅកាន់ **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
២. ចុចលើ **Test Connection**.
៣. សារបញ្ជាក់ថា plugin អាចទាក់ទងជាមួយ CyberPanel API និងផ្ទៀងផ្ទាត់បានត្រឹមត្រូវ។

## វាដំណើរការដូចម្តេច? {#how-it-works}

### Domain Mapping (ការបំប្លែងដែន) {#domain-mapping}

នៅពេលដែលដែនមួយត្រូវបានកំណត់នៅក្នុង Ultimate Multisite៖

១. ការរួមបញ្ចូលគ្នា (integration) នឹងបញ្ជូនសំណើ `POST` ទៅកាន់ `/api/createWebsite` នៅលើ host CyberPanel របស់អ្នក។
២. CyberPanel នឹងបង្កើត virtual host ថ្មីសម្រាប់ដែននោះក្រោម package ដែលបានកំណត់។
៣. Document root នឹងត្រូវបានកំណត់ឱ្យចង្អុលទៅ directory ឫសបណ្តាញ WordPress របស់អ្នក។
៤. នៅពេលដែលការកំណត់ Domain Mapping ត្រូវបានលុបចេញ ការរួមបញ្ចូលគ្នា (integration) នឹងហៅ `/api/deleteWebsite` ដើម្បីសម្អាត virtual host ចេញ។

### Auto-SSL (ពន្លឺ SSL ដោយស្វ័យប្រវត្តិ) {#auto-ssl}

នៅពេលដែល `WU_CYBERPANEL_AUTO_SSL` កំណត់ជា `true`៖

១. បន្ទាប់ពីបង្កើត virtual host រួច ការរួមបញ្ចូលគ្នា (integration) នឹងហៅ `/api/issueSSL` សម្រាប់ដែននោះ។
២. CyberPanel នឹងស្នើសុំវិញ្ញាបនបត្រ Let's Encrypt ដោយប្រើ ACME HTTP-01 challenge។
៣. CyberPanel នឹងធ្វើការបន្តសុពលភាព (renew) វិញ្ញាបនបត្រដោយស្វ័យប្រវត្តិមុនពេលផុតកំណត់។

> **សំខាន់:** DNS ត្រូវតែផ្សព្វផ្សាយពេញលេញទៅកាន់ IP address របស់ server របស់អ្នក មុនពេល Let's Encrypt អាចផ្ទៀងផ្ទាត់ដែននោះបាន។ ប្រសិនបើការចេញ SSL របររងភ្លាមៗបន្ទាប់ពីកំណត់ Domain Mapping សូមរង់ចាំ DNS ផ្សព្វផ្សាយ ហើយដំណើរការ SSL ឡើងវិញពី CyberPanel dashboard ក្រោម **SSL** > **Manage SSL**។

### www Subdomain (Subdomain www) {#www-subdomain}

ប្រសិនបើ **Auto-create www subdomain** ត្រូវបានបើកនៅក្នុងការកំណត់ Domain Mapping របស់អ្នក ការរួមបញ្ចូលគ្នា (integration) ក៏នឹងបង្កើត virtual host alias សម្រាប់ `www.<domain>` ហើយនៅពេលដែល Auto-SSL បើក អ្នកវានឹងចេញវិញ្ញាបនបត្រដែលគ្របដណ្តប់ទាំង variant apex និង www។

### Email Forwarders (ការបញ្ជូនអ៊ីមែលទៅកាន់អាសយដ្ឋានផ្សេង) {#email-forwarders}

នៅពេលដែល Addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) ដំណើរការ អ្នកគ្រប់គ្រង CyberPanel ក៏អាចផ្តល់នូវមុខងារផ្ទេរអ៊ីមែលសម្រាប់អតិថិជនផងដែរ។ Forwarders នេះនឹងជួយបញ្ជូនសារពីអាសយដ្ឋានដែនមួយទៅប្រអប់ទទួលផ្សេង ដោយមិនចាំបាច់បង្កើត mailbox ពេញលេញ ដែលមានប្រយោជន៍សម្រាប់ឈ្មោះជំនួស (aliases) ដូចជា `info@customer-domain.test` ឬ `support@customer-domain.test`។

មុននឹងបើកមុខងារ forwarders សម្រាប់អតិថិជន៖

១. បញ្ជាក់ថា constant ខាងលើរបស់ CyberPanel បានកំណត់ត្រឹមត្រូវ ហើយការធ្វើតេស្តការតភ្ជាប់ (connection test) ប្រែជាជោគជ័យ។
២. បើកដំណើរការអ្នកផ្តល់សេវាអ៊ីមែល (email provider) របស់ CyberPanel នៅក្នុងការตั้งค่า Addon Emails។
៣. បញ្ជាក់ថាដែនអតិថិជនមានរួចហើយនៅក្នុង CyberPanel មុននឹងបង្កើត forwarder។
៤. បង្កើត forwarder សាកល្បងមួយ ហើយផ្ញើសារតាមរយៈវា មុនពេលផ្តល់មុខងារនេះនៅលើ Production plans។

ប្រសិនបើការបង្កើត forwarder មិនដំណើរការ សូមពិនិត្យមើល activity logs របស់ Ultimate Multisite ជាមុនសិន បន្ទាប់មកបញ្ជាក់នៅក្នុង CyberPanel ថាដែនប្រភព (source domain) មានរួចហើយ និងអ្នកប្រើប្រាស់ API មានសិទ្ធិគ្រប់គ្រងអ៊ីមែល។

## ឯកសារយោងការកំណត់រចនាសម្ព័ន្ធ (Configuration Reference) {#configuration-reference}

| Constant | តម្រូវការ | កំណត់ត្រាដើម | ការពិពណ៌នា |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | បាទ/ទេ | — | URL ពេញទៅកាន់ CyberPanel instance របស់អ្នក រួមទាំង port ឧទាហរណ៍៖ `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | បាទ/ទេ | — | Username អ្នកគ្រប់គ្រង CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | បាទ/ទេ | — | រក្សាទុក password អ្នកគ្រប់គ្រង CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | បាទ/ទេ | `Default` | កញ្ចប់ hosting របស់ CyberPanel ដែលត្រូវកំណត់សម្រាប់ virtual hosts ថ្មី |
| `WU_CYBERPANEL_AUTO_SSL` | ទេ | `true` | បង្កើត Let's Encrypt SSL certificate បន្ទាប់ពីបង្កើតដែនរួច |
| `WU_CYBERPANEL_PHP_VERSION` | ទេ | `PHP 8.2` | កំណែ PHP សម្រាប់ virtual hosts ថ្មី (ត្រូវតែផ្គូផ្គងនឹងកំណែដែលបានដំឡើងនៅក្នុង CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | ទេ | — | អ៊ីមែលទំនាក់ទំនងសម្រាប់ការចុះបញ្ជី SSL certificate |

## ចំណាំសំខាន់ៗ (Important Notes) {#important-notes}

API របស់ CyberPanel ប្រើការផ្ទៀងផ្ទាត់โทเคน (token authentication) ដែលផ្អែកលើ Session។ ការរួមបញ្ចូលនេះនឹងដោះស្រាយបញ្ហាការទទួលបាន token ដោយស្វ័យប្រវត្តិនៅក្នុងការហៅ API រៀងៗខ្លួន។
គណនី admin របស់អ្នកនៅលើ CyberPanel ត្រូវតែមានសិទ្ធិក្នុងការបង្កើត និងលុបគេហទំព័រ (websites)។
CyberPanel បដំណើរការលើ port `8090` ជាលំនាំដើម។ ប្រសិនបើម៉ាស៊ីនរបស់អ្នកប្រើ firewall សូមប្រាកដថា port នេះអាចចូលបានពី WordPress application server។
ការរួមបញ្ចូលនេះមិនគ្រប់គ្រងកំណត់ត្រា DNS ទេ។ អ្នកត្រូវបញ្ជាក់ (point) DNS របស់ domain ទៅកាន់ IP address របស់ server របស់អ្នក មុនពេលធ្វើការ map domain នៅក្នុង Ultimate Multisite។
ប្រសិនបើអ្នកប្រើ OpenLiteSpeed (OLS) ការចាប់ផ្តើមឡើងវិញដោយសុភាព (graceful restart) នឹងត្រូវបានដំណើរការដោយស្វ័យប្រវត្តិបន្ទាប់ពីមានការផ្លាស់ប្តូរ virtual host។ មិនចាំបាច់មានការអន្តរាគមន៍ដោយដៃទេ។

## ការដោះស្រាយបញ្ហា (Troubleshooting) {#troubleshooting}

### API Connection Refused (ការបដិសេធការតភ្ជាប់ API) {#api-connection-refused}

- សូមពិនិត្យមើលថាតើ port `8090` បើកនៅក្នុង firewall របស់ server អ្នកឬអត់។
- សូមផ្ទៀងផ្ទាត់ថាតម្លៃនៃ `WU_CYBERPANEL_HOST` មានプロトコルត្រឹមត្រូវ (`https://`) និង port។
- សូមពិនិត្យមើលថាតើវិញ្ញាបនបត្រ SSL របស់ CyberPanel របស់អ្នកមានសុពលភាពឬអត់។ វិញ្ញាបនបត្រដែលបង្កើតដោយខ្លួនឯង (self-signed certificates) អាចបង្កឱ្យមានការបរាជ័យក្នុងការផ្ទៀងផ្ទាត់ TLS។ សូមកំណត់ `WU_CYBERPANEL_VERIFY_SSL` ជា `false` មានតែនៅក្នុងបរិយាកាសបណ្តាញឯកជនដែលអ្នកទុកចិត្តប៉ុណ្ណោះ។

### Authentication Errors (កំហុសនៃការផ្ទៀងផ្ទាត់) {#authentication-errors}

- សូមបញ្ជាក់ថា `WU_CYBERPANEL_USERNAME` និង `WU_CYBERPANEL_PASSWORD` របស់អ្នកត្រឹមត្រូវ ដោយការចូលទៅក្នុង CyberPanel ដោយផ្ទាល់។
- CyberPanel នឹងចាក់សោគណនីបន្ទាប់ពីមានការប៉ុនប៉ងចូលបរាជ័យម្តងហើយម្តងទៀត។ សូមពិនិត្យមើល **Security** > **Brute Force Monitor** នៅក្នុង CyberPanel ប្រសិនបើមានការចាក់សោកើតឡើង។

### Domain Not Created (មិនបានបង្កើត Domain) {#domain-not-created}

- សូមពិនិត្យមើលកំណត់ហេតុសកម្មភាពរបស់ Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) ដើម្បីរកសារកំហុស API។
- សូមផ្ទៀងផ្ទាត់ថា package ដែលបានកំណត់នៅក្នុង `WU_CYBERPANEL_PACKAGE` មាននៅក្នុង CyberPanel (**Packages** > **List Packages**)។
- សូមប្រាកដថា domain នោះមិនទាន់ត្រូវបានចុះបញ្ជីជាគេហទំព័រនៅក្នុង CyberPanel រួចហើយទេ — ការបង្កើត website ច្រើនលើសនឹងផ្ដល់កំហុស។

### SSL Certificate Not Issued (មិនបានចេញវិញ្ញាបនបត្រ SSL) {#ssl-certificate-not-issued}

- បញ្ជាក់ថា DNS បានផ្សព្វផ្សាយពេញលេញហើយ៖ ការប្រើ `dig +short your-domain.com` គួរតែបង្ហាញ IP address របស់ server អ្នក។
- Let's Encrypt មានការកំណត់ដែនកំណត់អត្រា (rate limits)។ ប្រសិនបើអ្នកបានចេញវិញ្ញាបនបត្រច្រើនសម្រាប់ domain ដូចគ្នាថ្មីៗនេះ សូមរង់ចាំមួយភ្លែតមុននឹងព្យាយាមម្តងទៀត។
- សូមពិនិត្យមើល log SSL របស់ CyberPanel នៅក្រោម **Logs** > **Error Logs** ដើម្បីមើលព័ត៌មានលម្អិតអំពីការបរាជ័យក្នុងការចេញវិញ្ញាបនបត្រ។
- ជាជម្រើសជំនួស (fallback) អ្នកអាចចេញ SSL ដោយដៃពី CyberPanel បាន៖ **SSL** > **Manage SSL** > ជ្រើសរើស domain > **Issue SSL**។

## សារព័ត៌មានបន្ថែម (References) {#references}

- ការណែនាំ API របស់ CyberPanel: https://docs.cyberpanel.net/docs/category/api
- ការគ្រប់គ្រង SSL របស់ CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- ការកំណត់ដែនកំណត់អត្រា (Rate Limits) របស់ Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
