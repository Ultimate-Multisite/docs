---
title: ការកំណត់រចនាសម្ព័ន្ធ Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# ការตั้งค่า Stripe Gateway (v2)

_**ចំណាំសំខាន់: អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

អ្នកអាចបើកវិធីសាស្ត្របង់ប្រាក់បានរហូតដល់បួនវិធីនៅលើទំព័រការកំណត់នៃការបង់ប្រាក់របស់យើង៖ Stripe, Stripe Checkout, PayPal និងដោយដៃ (Manual)។ នៅក្នុងអត្ថបទនេះ យើងនឹងមើលពីរបៀបភ្ជាប់ជាមួយ **Stripe**។

## ការបើកដំណើរការ Stripe {#enabling-stripe}

ដើម្បីបើកដំណើរការ Stripe ជាច្រកបង់ប្រាក់ដែលអាចប្រើបាននៅលើបណ្តាញរបស់អ្នក សូមចូលទៅកាន់ **Ultimate Multisite > Settings > Payments** ហើយធីកប៊ូតុង (toggle) នៅជាប់នឹង **Stripe** ឬ **Stripe Checkout** នៅក្នុងផ្នែក Active Payment Gateways។

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe ប៉ះ Stripe Checkout៖ {#stripe-vs-stripe-checkout}

**Stripe:** វិធីសាស្ត្រនេះនឹងបង្ហាញកន្លែងសម្រាប់បញ្ចូលលេខកាតឥណទានក្នុងអំឡុងពេលបង់ប្រាក់។

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** វិធីសាស្ត្រនេះនឹងបញ្ជូនអតិថិជនទៅកាន់ទំព័រ Stripe Checkout ក្នុងអំឡុងពេលបង់ប្រាក់។

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

ការទទួលបាន API keys របស់ Stripe

នៅពេលដែលបានបើកដំណើរការ Stripe ជាច្រកបង់ប្រាក់ហើយ អ្នកនឹងត្រូវបំពេញវាលសម្រាប់ **Stripe Publishable Key** និង **Stripe Secret Key**។ អ្នកអាចទទួលបានវាតាមរយៈការចូលទៅកាន់គណនី Stripe របស់អ្នក។

_**ចំណាំ:** អ្នកអាចបើកដំណើរការ **Sandbox mode** ដើម្បីសាកល្បងមើលថាតើវិធីសាស្រ្តបង់ប្រាក់ដំណើរការឬអត់។_

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

នៅលើ dashboard របស់ Stripe អ្នកត្រូវចុច **Developers** នៅជ្រុងខាងស្តាំលើ ហើយបន្ទាប់មក **API Keys** នៅលើម៉ឺនុយខាងឆ្វេង។

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

អ្នកអាចជ្រើសរើសប្រើ **Test Data** (ដើម្បីសាកល្បងមើលថាតើការរួមបញ្ចូលដំណើរការលើគេហទំព័រផលិតកម្មរបស់អ្នកឬអត់) ឬមិនប្រើក៏បាន។ ដើម្បីផ្លាស់ប្តូរវា សូមបិទ/បើក (toggle) ការបង្ហាញ **Viewing test data**។

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

ចម្លងតម្លៃពី **Publishable key** និង **Secret key**, ពីជួរឈរ **Token** ហើយបិទភ្ជាប់វាទៅក្នុងវាល Stripe Gateway របស់ Ultimate Multisite។ បន្ទាប់មក ចុចដើម្បី **Save Changes** (រក្សាទុកការផ្លាស់ប្តូរ)។

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## ការកំណត់រចនាសម្ព័ន្ធ Stripe Webhook {#setting-up-stripe-webhook}

Stripe ផ្ញើព្រឹត្តិការណ៍ webhook ដែលជូនដំណឹងដល់ Ultimate Multisite រាល់ពេលដែលមានព្រឹត្តិការណ៍កើតឡើងនៅលើ **គណនី stripe** របស់អ្នក។

ចុចលើ **Developers** ហើយបន្ទាប់មកជ្រើសរើសធាតុ **Webhooks** នៅក្នុងម៉ឺនុយខាងឆ្វេង។ បន្ទាប់មកនៅខាងស្តាំ ចុចលើ **Add endpoint** *។

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

អ្នកនឹងត្រូវការ **Endpoint URL** *។ Ultimate Multisite នឹងបង្កើត Endpoint URL ដោយស្វ័យប្រវត្តិ ដែលអ្នកអាចរកឃើញនៅខាងក្រោមវាល **Webhook Listener URL** នៅក្នុងផ្នែក **Ultimate Multisite Stripe Gateway**។_។

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**ចម្លង** endpoint URL ហើយ **បិទភ្ជាប់** វាទៅក្នុងវាល **Endpoint URL** របស់ Stripe។

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

បន្ទាប់មកគឺការជ្រើសរើស **Event** *។ ក្រោមជម្រើសនេះ អ្នកគ្រាន់តែត្រូវធីកប្រអប់ **Select all events** ហើយចុចលើ **Add events** (បន្ថែមព្រឹត្តិការណ៍)។ បន្ទាប់មក ចុច **Add Endpoint** ដើម្បីរក្សាទុកការផ្លាស់ប្តូរ។

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

ការតភ្ជាប់ការបង់ប្រាក់ Stripe របស់អ្នកបានបញ្ចប់ហើយ!
