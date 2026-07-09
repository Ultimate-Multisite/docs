---
title: បំណែកកូដ
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets សម្រាប់ v2 {#code-snippets-for-v2}

ជាមូលដ្ឋានហើយ, code snippets សម្រាប់ **WordPress** គឺប្រើដើម្បីធ្វើសកម្មភាពជាក់លាក់មួយ ដែលបើមិនដូច្នោះទេ ប្រហែលជាត្រូវការ plugin តូចផ្សេងទៀត។ code snippets ទាំងនេះត្រូវបានដាក់នៅក្នុងឯកសារ core ឬ theme របស់ WordPress (ជាទូទៅគឺឯកសារ functions.php នៃ theme របស់អ្នក) ឬក៏អាចប្រើជា MU plugin បានដែរ។

នៅក្នុងអត្ថបទនេះ យើងនឹងបង្ហាញអ្នកនូវ code snippets បី ដែលអាចប្រើជាមួយ **Ultimate Multisite v2**៖

  * [**ការផ្លាស់ប្តូរទីតាំងនៃមុខងារเมนู Account**](#changing-the-position-of-the-account-menu-item)

  * [**របៀបពិនិត្យមើលថាតើអ្នកប្រើប្រាស់ស្ថិតក្រោមផែនការជាក់លាក់មួយ និង/ឬមានការជាវសកម្មដែរឬទេ**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**ការជួសជុលបញ្ហា CORS ជាមួយ Font-Icons នៅលើ domain ដែលបាន map**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## ការផ្លាស់ប្តូរទីតាំងនៃមុខងារเมนู Account {#changing-the-position-of-the-account-menu-item}

ដើម្បីផ្លាស់ប្តូរទីតាំងនៃមុខងារเมนู Account នៅលើ Dashboard របស់អតិថិជនរបស់អ្នក សូមបន្ថែម code snippet ខាងក្រោមទៅក្នុង functions.php នៃ theme ដែលកំពុងដំណើរការរបស់គេហទំព័រ chính របស់អ្នក។ អ្នកក៏អាចដាក់ snippet នោះនៅក្នុង mu-plugin ឬ custom plugin ណាមួយរបស់អ្នកបានដែរ។

```php
add_filter('wu_my_account_menu_position', function() { return 10; // កែតម្រូវតម្លៃនេះដើម្បីដាក់เมนูនៅទីតាំងដែលអ្នកចង់បាន។
```

## របៀបពិនិត្យមើលថាតើអ្នកប្រើប្រាស់ស្ថិតក្រោមផែនការជាក់លាក់មួយ និង/ឬមានការជាវសកម្មដែរឬទេ {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

ក្នុងនាមជា network admin អ្នកអាចនឹងត្រូវការបង្កើត functions ដែលធ្វើសកម្មភាពមូលដ្ឋាន ឬផ្តល់សេវាកម្ម/មុខងារដល់ក្រុមអ្នកជាវ ឬអ្នកប្រើប្រាស់ចុងក្រោយដែលបានជ្រើសរើស ដោយផ្អែកលើស្ថានភាពនៃការជាវ និងផែនការដែលពួកគេកំពុងជាវ។

Functions ដើមរបស់ Ultimate Multisite ទាំងនេះនឹងជួយអ្នកក្នុងកិច្ចការនោះ។

ដើម្បីពិនិត្យមើលថាតើអ្នកប្រើប្រាស់ជាសមាជិកនៃផែនការជាក់លាក់មួយដែរឬទេ អ្នកអាចប្រើ function នេះ៖

`wu_has_plan($user_id, $plan_id)`

ដើម្បីពិនិត្យមើលថាតើការជាវ (subscription) ដំណើរការឬអត់ អ្នកអាចប្រើមុខងារនេះ៖

`wu_is_active_subscriber($user_id)`

ខាងក្រោមនេះគឺជាឧទាហរណ៍ខ្លីមួយដែលត្រួតពិនិត្យមើលថាតើអ្នកប្រើប្រាស់បច្ចុប្បន្នស្ថិតនៅក្រោមផែនការជាក់លាក់ណាមួយ (_Plan ID 50_) និងការជាវរបស់គាត់កំពុងដំណើរការឬអត់។

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // អ្នកប្រើប្រាស់ជាសមាជិកនៃផែនការ ហើយការជាវរបស់គាត់កំពុងដំណើរការ សូមធ្វើអ្វីមួយ } else { // អ្នកប្រើប្រាស់មិនមែនជាសមាជិកនៃផែនការទេ -- ឬ -- ការជាវរបស់គាត់មិនបានដំណើរការទេ សូមធ្វើអ្វីផ្សេង}`

ចំណាំថា `_**wu_has_plan**_` ទាមទារឱ្យមាន "Plan ID" ដើម្បីដំណើរការ។

ដើម្បីទទួលបាន ID នៃផែនការមួយ អ្នកអាចចូលទៅកាន់ **Ultimate Multisite > Products**។ ID នៃផលិតផលនីមួយៗនឹងបង្ហាញនៅខាងស្តាំនៃតារាង។

ចំណាំថា អ្នកប្រើប្រាស់អាចជាវបានតែ **Plan** ប៉ុណ្ណោះទេ មិនមែន Package ឬ Service ទេ ព្រោះពួកវាគ្រាន់តែជាផ្នែកបន្ថែមសម្រាប់ **Plan** ប៉ុណ្ណោះ។

![Products list showing plan IDs](/img/admin/products-list.png)

## ការជួសជុលបញ្ហា CORS ដោយប្រើ Font-Icons នៅលើដែនដែលបានកំណត់ (mapped domains) {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## ការជួសជុលបញ្ហា CORS ដោយប្រើ Font-Icons នៅលើដែនដែលបានកំណត់ (mapped domains) {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

បន្ទាប់ពីអ្នកបានកំណត់ដែនទៅកាន់ sub-site អ្នកប្រហែលជាជួបបញ្ហាថាគេហទំព័រមានការលំបាកក្នុងការផ្ទុក font ដែលអ្នកកែសម្រួល។ បញ្ហានេះបណ្តាលមកពីការរារាំងឆ្លងដែន (cross-origin block) នៅក្នុងការកំណត់ម៉ាស៊ីនរបស់អ្នក។

ដោយសារឯកសារ font ភាគច្រើនត្រូវបានផ្ទុកដោយផ្ទាល់ពី CSS ដូច្នេះ plugin ការកំណត់ដែនរបស់យើងមិនអាចសរសេរ URL ឡើងវិញដើម្បីប្រើដែនដែលបានកំណត់ជំនួសឱ្យដែនដើមនោះទេ ដូច្នេះដើម្បីជួសជុលបញ្ហានេះ អ្នកនឹងត្រូវកែសម្រួលឯកសារការកំណត់ម៉ាស៊ីនរបស់អ្នក។

ខាងក្រោមនេះគឺជាកូដសម្រាប់ជួសជុលបញ្ហាសម្រាប់ Apache និង NGINX។ ការផ្លាស់ប្តូរទាំងនេះទាមទារចំណេះដឹងខ្ពស់អំពីឯកសារកំណត់រចនាសម្ព័ន្ធម៉ាស៊ីនមេ (.htaccess files និង NGINX config files)។ ប្រសិនបើអ្នកមិនស្រួលក្នុងការធ្វើការផ្លាស់ប្តូរដោយខ្លួនឯងទេ សូមផ្ញើหน้านี้ទៅកាន់ក្រុមជំនួយរបស់អ្នកផ្តល់ hosting នៅពេលដែលអ្នកត្រូវការជំនួយ។

### Apache {#apache}

នៅក្នុងឯកសារ .htaccess របស់អ្នក សូមបន្ថែម៖

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

នៅក្នុងឯកសារកំណត់រចនាសម្ព័ន្ធម៉ាស៊ីនមេរបស់អ្នក (ទីតាំងអាចខុសគ្នាទៅតាម server) សូមបន្ថែម៖

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
