---
title: Tsim sijhawm txhua tus uap
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# ការតាំងរៀបចំការបង់ប្រាក់ដោយដៃ (v2)

_**ចំណាំសំខាន់៖ អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

ការបង់ប្រាក់ដោយដៃ គឺជាវិធីមួយដែលអ្នកអាចផ្តល់ជម្រើសវិធីបង់ប្រាក់ផ្សេងទៀត ប្រសិនបើ **Stripe** ឬ **PayPal** មិនមានសម្រាប់អ្នកប្រើប្រាស់របស់អ្នកទេ។ វាអាចជាការផ្ទេរលុយ (wire) ការផ្ទេរធនាគារ ឬវិធីបង់ប្រាក់ផ្សេងទៀតដែលអាចរកបានក្នុងតំបន់របស់អ្នក។

## របៀបបើកដំណើរការការបង់ប្រាក់ដោយដៃ

ការរៀបចំការបង់ប្រាក់ដោយដៃគឺងាយស្រួលណាស់។ អ្នកគ្រាន់តែបើកវាក្រោម payment gateways ហើយដាក់ការណែនាំលម្អិតអំពីរបៀបដែលអ្នកប្រើប្រាស់គួរផ្ញើការទូទាត់។

ដំបូង សូមចូលទៅកាន់ **Ultimate Multisite > Settings > Payments**។ ខាងក្រោម **Payment Gateways** សូមបិទ/បើក (toggle) **Manual** ឱ្យបើក។ អ្នកនឹងឃើញប្រអប់ **Payment Instructions** បង្ហាញឡើងសម្រាប់អ្នក។

បន្ថែមព័ត៌មានដែលអតិថិជនរបស់អ្នកត្រូវការដើម្បីធ្វើការបង់ប្រាក់ទៅក្នុងប្រអប់នេះ។ វាអាចជាព័ត៌មានគណនីធនាគាររបស់អ្នក និងអ៊ីមែលរបស់អ្នក ដើម្បីឱ្យអតិថិជនអាចផ្ញើការបញ្ជាក់ការទូទាត់មកអ្នកបាន ឧទាហរណ៍។

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

នេះគឺជាចំណុចកំណត់ការបង់ប្រាក់ដោយដៃ៖

![Manual gateway settings](/img/config/manual-gateway-settings.png)

បន្ទាប់ពីបានរៀបចំរួច សូមចុចលើ **Save Settings** ហើយវាត្រូវបានបញ្ចប់ហើយ។ នៅពេលដែលអ្នកប្រើប្រាស់ចុះឈ្មោះចូលក្នុងបណ្តាញរបស់អ្នក ពួកគេនឹងឃើញសារមួយប្រាប់ថា ពួកគេនឹងទទួលបានការណែនាំពីអ្នកដើម្បីបំពេញការទិញ។

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

ហើយពួកគេក៏នឹងទទួលបានសារនៅលើទំព័រ **Thank You** របស់អ្នកជាមួយនឹងការណែនាំអំពីការបង់ប្រាក់របស់អ្នកផងដែរ។

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## ការបញ្ជាក់ការបង់ប្រាក់ដោយដៃ

Manual Payment བཀོད་འགྲོ་བའི་སྐོར་

Manual payment ག་རེ་བྱེད་དགོས་လဲဆိုတာ ཁྱེད་རང་གིས་ **Payments** menu (ལེགས་པའི་མིང་ཚུ་) ལ་ས izquierda bar (མཐའ་མའི་བར་མ་) ནས་ចូលទៅပါ။ ཁོང་གི་ network (སྤྱི་ཚོགས་) ནང་ཡོད་པའི་ payment (ལག་རྩིས་) ཚོ་དང་དེའི་ details (གཞིའི་ཆ་ཚང་) ལ་, status (ལུགས་བཀོད་) ཚུ་ཡོངས་སུ་ལྟ་ཐུབ་པ་མ་ཟད།. Manual payment ག་འདྲ་བྱས་ནའང་, ཁྱེད་རང་གིས་ manual བསྒྱུར་བའི་ཆ་ཚང་མི་བཞག་པའི་དུས་ནས་ **Pending** (བཀོད་འགྲོ་བའི་སྐབས་) status ལྟར་ཡོང་རྒྱུ་ཡིན།.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Payment page ལ་གནང་དགོས་པ་ནི་ **reference code** (གོ་རིམ་མཚན་) ལ་click (བཀླག་) བྱེད་རྒྱུ་ཡིན།. དེའི་ page ལས་ཁྱེད་རང་གིས་ pending payment (བཀོད་འགྲོ་བའི་སྐབས་ཀྱི་ལག་རྩིས་) གི་ details (གཞིའི་ཆ་ཚང་) ཚུ་ཡོངས་སུ་ལྟ་ཐུབ་པ་མ་ཟད།. Reference ID, products (ကုန်ပစ္စည်းཚོ་), timestamps (དུས་ཚོད་མཚན་) དང་ ཡང་ན་གཞན་ཚུ་ཡོངས་སུ་བལྟ་ཐུབ།.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Right column (མཐའ་མའི་བར་མ་) ལ་ཁྱེད་རང་གིས་ payment (ལག་རྩིས་) གི་ status (ལུགས་བཀོད་) ཚོ་སປ່ຽནི་ཐུབ།. Status ཚོ་ **Completed** (གྲུབ་པ་) ལ་བསྒྱུར་དུ་བཅུག་པ་དང་, **Activate Membership** (Membership འགོ་བཙུགས་པའི་ལས་བྱེད་) option (ເລືອກབྱེད་) ལ་toggle (བསྒྱུར་) བྱས་ན་ཁྱེད་རང་གི་ customer (བཀྲ་ཤིས་པའི་མ客) གི་ site (웹) འགོ་བཙུགས་ཐུབ་པ་དང་, သူཚོའི་ membership (ལས་བྱེད་ཚོགས་) ཡང་ active (ལག་ལེན་འགོ་བཙུགས་) 状態 (Status) ལུ་འོང་རྒྱུ་ཡིན།.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
