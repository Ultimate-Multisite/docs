---
title: ស្វែងរកដែនក្នុងក្បាលទំព័រ
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# ការស្វែងរកដែនពី Header

ប្រើការរៀបចំនេះ នៅពេលអ្នកចង់បានទម្រង់តូចមួយនៅក្នុង header ដែលចាប់ផ្តើមការស្វែងរកដែន បន្ទាប់មកអនុញ្ញាតឱ្យអតិថិជនជ្រើសរើសពីដែនដែលមាន នៅក្នុង checkout របស់ Ultimate Multisite។

## តម្រូវការ

- Ultimate Multisite បើកសកម្មនៅកម្រិតបណ្តាញ។
- Multisite Ultimate Domain Seller បើកសកម្មនៅកម្រិតបណ្តាញ។
- មានផលិតផលចុះបញ្ជីដែនសកម្មយ៉ាងហោចណាស់មួយ ដែលមាន៖
  - `domain_provider` កំណត់ទៅកាន់អ្នកផ្តល់សេវាដែលបានរៀបចំ។
  - TLD ដែលគាំទ្រត្រូវបានកំណត់ ឧទាហរណ៍ `com`, `net`, និង `org`។
- ទម្រង់ checkout ត្រឹមត្រូវមួយ ដែលមានវាល **ការជ្រើសរើសដែន**។

## ទម្រង់ checkout

1. បង្កើត ឬកែសម្រួលទម្រង់ checkout ដែលប្រើដោយទំព័រចុះបញ្ជី។
2. បន្ថែមវាល checkout/account ចាំបាច់ធម្មតា រួមទាំង **ឈ្មោះអ្នកប្រើ**។ ទម្រង់ checkout ដែលមានតែវាលដែន នឹងត្រូវបានបដិសេធដោយការផ្ទៀងផ្ទាត់របស់ Ultimate Multisite។
3. បន្ថែមវាល **ការជ្រើសរើសដែន**។
4. កំណត់របៀបការជ្រើសរើសដែនទៅជា **ចុះបញ្ជីតែប៉ុណ្ណោះ** នៅពេលលំហូរគួរផ្តោតលើដែនដែលបានចុះបញ្ជី ជាជាងដែនរងឥតគិតថ្លៃ ឬដែនដែលមានស្រាប់។
5. កំណត់ផលិតផលចុះបញ្ជីដែនទៅវាលនោះ។

ទំព័រចុះបញ្ជីគួរបង្ហាញទម្រង់ checkout ឧទាហរណ៍៖

```text
[wu_checkout slug="domain-form"]
```

## ទម្រង់ Header

បន្ថែមទម្រង់ `GET` តូចមួយនៅក្នុង header របស់ site ដែលផ្ញើពាក្យស្វែងរកដែលបានបញ្ចូលទៅទំព័រ checkout ជា `domain_name`៖

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

កុំជ្រើសដែនជាមុននៅក្នុង JavaScript header ផ្ទាល់ខ្លួន។ Header គួរតែផ្ញើតែពាក្យស្វែងរកប៉ុណ្ណោះ។ ស្គ្រីប checkout របស់ Domain Seller អាន `?domain_name=example` បំពេញប្រអប់ស្វែងរក checkout ហើយដំណើរការការស្វែងរកភាពមាន ដើម្បីឱ្យអតិថិជនអាចជ្រើសរើសពីដែនដែលបានត្រឡប់មកវិញ។

## ឥរិយាបថដែលរំពឹងទុក

ការស្វែងរក `example` នៅក្នុង header គួរបើក៖

```text
/register/?domain_name=example
```

បន្ទាប់មក checkout គួរបង្ហាញលទ្ធផលដែលអាចជ្រើសរើសបាន ដូចជា៖

- `example.com`
- `example.net`
- `example.org` មិនមាន
- TLD ផ្សេងទៀតដែលអ្នកផ្តល់សេវាគាំទ្រ

បន្ទាប់ពីជ្រើសរើសលទ្ធផលដែលមាន សេចក្តីសង្ខេបការបញ្ជាទិញគួររួមបញ្ចូលផលិតផលចុះបញ្ជីដែន និងឈ្មោះដែនដែលបានជ្រើស។

## ការផ្ទៀងផ្ទាត់

1. បើកទំព័រដើម។
2. ស្វែងរកឈ្មោះទទេមួយ ឧទាហរណ៍ `example`។
3. បញ្ជាក់ថា URL checkout រួមបញ្ចូល `?domain_name=example`។
4. បញ្ជាក់ថាវាលដែន checkout មាន `example`។
5. បញ្ជាក់ថាបញ្ជីជម្រើសដែនបង្ហាញឡើង។
6. ចុច **ជ្រើសរើស** សម្រាប់ដែនដែលមាន។
7. បញ្ជាក់ថាសេចក្តីសង្ខេបការបញ្ជាទិញមាន `Domain Registration - example.com` ឬដែនដែលបានជ្រើស។

## ការដោះស្រាយបញ្ហា

- ប្រសិនបើគ្មានបញ្ជីបង្ហាញទេ សូមពិនិត្យផ្ទាំង network របស់ browser សម្រាប់ `admin-ajax.php?action=wu_domain_search` ហើយបញ្ជាក់ថាវាត្រឡប់ `domains` ឬ `results` ដែលមិនទទេ។
- ប្រសិនបើទម្រង់ checkout បរាជ័យការផ្ទៀងផ្ទាត់នៅពេលរក្សាទុក សូមបន្ថែមវាល account ចាំបាច់ ដូចជា **ឈ្មោះអ្នកប្រើ**។
- ប្រសិនបើការជ្រើសរើសដែនមិនធ្វើបច្ចុប្បន្នភាព cart សូមបញ្ជាក់ថា `window.wu_checkout_form` មាន ហើយ assets checkout របស់ Domain Seller ត្រូវបានផ្ទុកនៅលើទំព័រ checkout។
