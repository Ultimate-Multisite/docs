---
title: ការកំណត់ Sunrise Constant នៅលើ Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# ការកំណត់ constant sunrise ទៅជា true នៅលើ Closte

អ្នកផ្តល់សេវាផ្ទុក (host providers) ខ្លះចាក់សោឯកសារ wp-config.php ដើម្បីសុវត្ថិភាព។ មានន័យថា Ultimate Multisite មិនអាចកែសម្រួលឯកសារនោះដោយស្វ័យប្រវត្តិដើម្បីបញ្ចូល constant ដែលចាំបាច់សម្រាប់ការកំណត់ផែនទីដែន (domain mapping) និងមុខងារផ្សេងៗដំណើរការបានទេ។ Closte គឺជាអ្នកផ្តល់សេវាផ្ទុកមួយក្នុងចំណោមនោះ។

ទោះជាយ៉ាងណាក៏ដោយ Closte មានវិធីបន្ថែម constant ទៅក្នុង wp-config.php តាមរបៀបដែលមានសុវត្ថិភាព។ អ្នកគ្រាន់តែធ្វើតាមជំហានខាងក្រោម៖

## នៅលើ dashboard របស់ Closte {#on-the-closte-dashboard}

ដំបូង សូម [ចូលគណនី Closte របស់អ្នក](https://app.closte.com/) បន្ទាប់មក ចុចលើเมนู Sites (Sites) រួចចុចលើប៊ូតុង Dashboard នៅលើគេហទំព័រដែលអ្នកកំពុងធ្វើការ៖

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

អ្នកនឹងឃើញមុខងារថ្មីៗមួយចំនួននៅខាងឆ្វេងនៃអេក្រង់។ សូមចូលទៅកាន់ទំព័រ **Settings** (ការកំណត់) ដោយប្រើเมนูនោះ៖

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

បន្ទាប់មក នៅលើ **Settings** សូមស្វែងរកแท็บ WP-Config ហើយបន្ទាប់មកវាល "Additional wp-config.php content" (មាតិកាបន្ថែមសម្រាប់ wp-config.php) នៅលើแท็บនោះ៖

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

ក្នុងបរិបទនៃការដំឡើង Ultimate Multisite អ្នកនឹងត្រូវបន្ថែម constant sunrise ទៅក្នុងវាលនោះ។ អ្នកគ្រាន់តែបន្ថែមបន្ទាត់ថ្មីមួយ ហើយបិទភ្ជាប់បន្ទាត់ខាងក្រោមនេះ។ បន្ទាប់មក ចុចលើប៊ូតុង **Save All** (រក្សាទុកទាំងអស់)។

define('SUNRISE', true);

ចប់ហើយ អ្នកត្រៀមរួចរាល់ហើយ។ ត្រឡប់ទៅ wizard ដំឡើង Ultimate Multisite ហើយធ្វើការ refresh ទំព័រដើម្បីបន្តដំណើរការ។
