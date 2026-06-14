---
title: ការកំណត់ការបង់ប្រាក់ដោយដៃ
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# ការตั้งค่าការបង់ប្រាក់ដោយដៃ (v2)

_**ចំណាំសំខាន់៖ អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

ការបង់ប្រាក់ដោយដៃគឺជាវិធីមួយដែលអ្នកអាចផ្តល់ជូននូវវិធីសាស្ត្របង់ប្រាក់ផ្សេងទៀត ប្រសិនបើ **Stripe** ឬ **PayPal** មិនមានសម្រាប់អ្នកប្រើប្រាស់របស់អ្នកទេ។ វាអាចជាការផ្ទេរលុយ (wire) ការផ្ទេរធនាគារ ឬវិធីសាស្ត្របង់ប្រាក់ផ្សេងទៀតដែលមានសម្រាប់អ្នកប្រើប្រាស់របស់អ្នកក្នុងតំបន់។

## របៀបបើកដំណើរការការបង់ប្រាក់ដោយដៃ

ការตั้งค่าការបង់ប្រាក់ដោយដៃគឺងាយស្រួលណាស់។ អ្នកគ្រាន់តែបើកវាក្រោម Payment Gateways ហើយដាក់ការណែនាំលម្អិតអំពីរបៀបដែលអ្នកប្រើប្រាស់គួរផ្ញើការទូទាត់។

ដំបូង សូមចូលទៅកាន់ **Ultimate Multisite > Settings > Payments**។ ខាងក្រោម **Payment Gateways** សូមប្ដូរ **Manual** ជាបើក (on)។ អ្នកនឹងឃើញប្រអប់ **Payment Instructions** បង្ហាញឡើងសម្រាប់អ្នក។

បន្ថែមព័ត៌មានដែលអតិថិជនរបស់អ្នកត្រូវការដើម្បីធ្វើការទូទាត់ទៅក្នុងប្រអប់នេះ។ វាអាចជាព័ត៌មានគណនីធនាគាររបស់អ្នក និងអ៊ីមែលរបស់អ្នក ដើម្បីឱ្យអតិថិជនអាចផ្ញើការបញ្ជាក់ការទូទាត់មកអ្នកបាន ឧទាហរណ៍។

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

នេះគឺជាចំណុចប្រទាក់នៃការตั้งค่า manual gateway៖

![Manual gateway settings](/img/config/manual-gateway-settings.png)

បន្ទាប់ពីตั้งค่าរួច សូមចុចលើ **Save Settings** ហើយវាបានបញ្ចប់ហើយ។ នៅពេលដែលអ្នកប្រើប្រាស់ចុះឈ្មោះចូលក្នុងបណ្តាញរបស់អ្នក ពួកគេនឹងឃើញសារមួយប្រាប់ពួកគេថា ពួកគេនឹងទទួលបានការណែនាំពីអ្នកដើម្បីបំពេញការទិញ។

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

ហើយពួកគេក៏នឹងទទួលបានសារនៅលើទំព័រ **Thank You** របស់អ្នកជាមួយនឹងការណែនាំអំពីការបង់ប្រាក់របស់អ្នកផងដែរ។

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## ការបញ្ជាក់ការបង់ប្រាក់ដោយដៃ

ដើម្បីបញ្ជាក់ការបង់ប្រាក់ដោយដៃ សូមចូលទៅកាន់ម៉ឺនុយ **Payments** នៅលើរបារខាងឆ្វេង។ នៅទីនោះ អ្នកអាចមើលឃើញការបង់ប្រាក់ទាំងអស់នៅក្នុងបណ្តាញរបស់អ្នក និងព័ត៌មានលម្អិតរបស់វា រួមទាំង **status** (ស្ថានភាព) របស់វាផងដែរ។ ការបង់ប្រាក់ដោយដៃនឹងមានស្ថានភាពជា **Pending** (រង់ចាំ) រហូតដល់អ្នកផ្លាស់ប្តូរវាដោយខ្លួនឯង។

![Payments list showing pending manual payment](/img/admin/payments-list.png)

បញ្ចូលទំព័រនៃការបង់ប្រាក់ដោយចុចលើ **reference code** (លេខយោង)។ នៅលើទំព័រនេះ អ្នកនឹងទទួលបានព័ត៌មានលម្អិតទាំងអស់នៃការបង់ប្រាក់ដែលកំពុងរង់ចាំ ដូចជា reference ID, ផលិតផល, timestamp និងច្រើនទៀត។

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

នៅជួរខាងស្តាំ អ្នកអាចផ្លាស់ប្តូរស្ថានភាពនៃការបង់ប្រាក់បាន។ ការផ្លាស់ប្តូរវាទៅជា **Completed** (បានបញ្ចប់) និងការបើកជម្រើស **Activate Membership** (បើកសមាជិកភាព) នឹងធ្វើឱ្យគេហទំព័ររបស់អតិថិជនរបស់អ្នកដំណើរការ ហើយសមាជិកភាពរបស់ពួកគេនឹងក្លាយជាសកម្ម។

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
