---
title: Txhua Kws Tsis Muaj Qhia
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# ការបែងចែកការប្រើប្រាស់ច្រើន (Multi-Tenancy Isolation) {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 គាំទ្រការបែងចែកមូលដ្ឋានទិន្នន័យ និងឯកសារសម្រាប់អ្នកប្រើប្រាស់ម្នាក់ៗ (per-subsite database and filesystem isolation) ដើម្បីរក្សាភាពឯករាជ្យរបស់អ្នកប្រើប្រាស់។ វាធ្វើឱ្យទិន្នន័យរបស់ tenant នីមួយៗនៅដាច់ពីគ្នា ខណៈពេលដែលនៅតែរក្សាការផ្តល់សេវាបណ្តាញ ការគិតថ្លៃ និងការគ្រប់គ្រង។

## យុទ្ធសាស្ត្រនៃការបែងចែក (Isolation strategy) {#isolation-strategy}

ប្រើការបែងចែកបែប sovereign isolation សម្រាប់អតិថិជនដែលត្រូវការការបំបែកទិន្នន័យកាន់តែខ្លាំង ការផ្ទុកឯកសារដែលបានកំណត់ជាពិសេស ឬព្រំដែនម្ចាស់ផ្ទះដាច់ដោយឡែក។

Tenant sovereign នីមួយៗគួរតែមាន៖

- មូលដ្ឋានទិន្នន័យ tenant ដាច់ដោយឡែក ឬយុទ្ធសាស្ត្រ prefix មូលដ្ឋានទិន្នន័យដែលបានអនុម័តសម្រាប់ម្ចាស់ផ្ទះ។
- រ៉ូទ៍ឯកសារ (filesystem root) tenant ដាច់ដោយឡែក។
- ការចុះបញ្ជី tenant registry ដែលភ្ជាប់ সাইតទៅនឹងមូលដ្ឋានទិន្នន័យ ផ្លូវដើម (root path) ឈ្មោះម៉ាស៊ីន (hostname) និងគំរូនៃការបែងចែក (isolation model)។
- លទ្ធផលផ្ទៀងផ្ទាត់ការធ្វើ migracion មុនពេល tenant ត្រូវបានចាត់ទុកថាដំណើរការ live។

## ការភ្ជាប់ម្ចាស់ផ្ទះមូលដ្ឋានទិន្នន័យ (Database host binding) {#database-host-binding}

កំណែ 1.2.0 បានផ្លាស់ប្តូរអាកប្បកិរិយាការភ្ជាប់ម្ចាស់ផ្ទះដូចគ្នាលើម៉ាស៊ីនតែមួយ (same-machine host binding behavior) សម្រាប់ការដំឡើង sovereign។ តម្លៃដូចជា `localhost` ត្រូវបានធ្វើឱ្យមានលក្ខណៈធម្មតា (normalized) ដើម្បីឱ្យ Bedrock, FrankenPHP និងការដំឡើង WordPress ដែលប្រើ container អាចផ្តល់ និងផ្ទៀងផ្ទាត់ការអនុញ្ញាតប្រឆាំងនឹងខ្សែអត្ថបទម្ចាស់ផ្ទះ MySQL ពិតជាមើលឃើញ។

នៅពេលកំណត់រចនាសម្ព័ន្ធ tenant sovereign៖

1. កំណត់ database host ទៅជាតម្លៃដែល runtime របស់ tenant ទាមទារ។
2. ប្រើ `localhost` សម្រាប់ការដំឡើង socket នៅលើម៉ាស៊ីនក្នុងស្រុក (local socket installs) នៅពេលដែលម្ចាស់ផ្ទះរំពឹងការតភ្ជាប់ក្នុងស្រុក។
3. ប្រើ `127.0.0.1` ឬឈ្មោះ hostname នៃ service ប៉ុណ្ណោះនៅពេលដែល server មូលដ្ឋានទិន្នន័យផ្តល់សិទ្ធិដល់ host នោះ។
4. រត់ migration verification បន្ទាប់ពីផ្លាស់ប្តូរការភ្ជាប់ម្ចាស់ផ្ទះ។

ប្រសិនបើរបាយការណ៍ផ្ទៀងផ្ទាត់បង្ហាញពីបរាជ័យនៃការផ្តល់សិទ្ធិ សូមប្រៀបធៀបការផ្តល់សិទ្ធិអ្នកប្រើប្រាស់ (user grants) របស់ DB tenant ជាមួយការភ្ជាប់ម្ចាស់ផ្ទះដែលបានកំណត់រចនាសម្ព័ន្ធ។ អ្នកប្រើប្រាស់ដែលត្រូវបានផ្តល់សិទ្ធិសម្រាប់ `user@localhost` គឺខុសពី `user@127.0.0.1` ឬ `user@%`។

## រ៉ូទ៍ឯកសារ (Filesystem root) {#filesystem-root}

Root ຂອງ tenant (ຜູ້ເຊົ່າ) ຕ້ອງສະຖຽນແໜ້ນໃນເວລາເລີ່ມຕົ້ນໃໝ່ ແລະ ເວລາ deploy. ຄວນຫຼີກລ່ຽງການໃຊ້ temporary mount paths. ສຳລັບການຕິດຕັ້ງແບບ Bedrock, ກວດສອບໃຫ້ແນ່ໃຈວ່າ tenant root ຊີ້ໄປທີ່ WordPress web root ທີ່ tenant bootstrap ຕັ້ງຄ່າໄວ້, ບໍ່ແມ່ນພຽງແຕ່ project root ເທົ່ານັ້ນ.

## ລຳດັບການຈັດຕັ້ງ (Provisioning order) {#provisioning-order}

ສຳລັບ tenant ໃໝ່ທີ່ມີອະທິປະໄຕຂອງຕົນເອງ (sovereign tenants), ໃຫ້ໃຊ້ລຳດັບນີ້:

1. ສ້າງ entry ໃນ tenant registry.
2. ສ້າງ database ແລະ database user ຂອງ tenant.
3. Bootstrap schema ຂອງ tenant.
4. Provision users ຂອງ tenant.
5. Configure filesystem paths ຂອງ tenant.
6. Run migration verification.
7. Switch routing ຫຼື DNS ຫຼັງຈາກການກວດສອບຜ່ານແລ້ວ.

ລຳດັບນີ້ຈະປ້ອງກັນບໍ່ໃຫ້ tenant ທີ່ຖືກແຍກອອກມາບາງສ່ວນໄດ້ຮັບທຣ্যাຟິກ ກ່ອນທີ່ database writer, users ແລະ filesystem ຈະພ້ອມ.

## ຂະບວນການຈັດການລູກຄ້າແບບ sovereign (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 ຈະເກັບການກະທຳຂອງການຈັດການລູກຄ້າໄວ້ໃນ site ຫຼັກ ເມື່ອເປີດໃຊ້ sovereign mode ແລ້ວ. Tenant ກໍຍັງສາມາດເຮັດວຽກເປັນ WordPress install ທີ່ແຍກອອກມາໄດ້, ແຕ່ການກະທຳທີ່ berhubungan ກັບລູກຄ້າເຊິ່ງຕ້ອງອີງໃສ່ network billing, membership ຫຼື shared account data ຄວນສົ່ງລູກຄ້າກັບໄປຫາ site ຫຼັກ ແທນທີ່ຈະພະຍາຍາມເຮັດໃຫ້ສໍາເລັດໃນ runtime ຂອງ tenant.

ຂະບວນການຂອງ main-site ນີ້ໃຊ້ໄດ້ກັບ:

- ການຈ່າຍເງິນ ແລະ ການປ່ຽນແປງແຜນການ (Checkout and plan changes).
- ການເບິ່ງພາບລວມບັນຊີ ແລະ ການກະທຳໂປຣໄຟລ໌ລູກຄ້າ (Account overview and customer profile actions).
- ການອັບເດດທີ່ຢູ່ໃບບິນ ແລະ ໜ້າການຈັດການການຈ່າຍເງິນ (Billing address updates and payment-management screens).
- ການເບິ່ງ invoice ແລະ ເວລາປະຫວັດການຈ່າຍເງິນ (Invoice and payment-history views).
- ການກະທຳໃນການຈັດການ site ເຊັ່ນ: ການເພີ່ມ site ຫຼື ການລຶບ site. (Site management actions such as adding sites or deleting a site.)
- ການປ່ຽນ template. (Template switching.)
- ການແຕ້ມ domain ແລະ ການປ່ຽນ primary-domain. (Domain mapping and primary-domain changes.)

Thaum ti neeg ua hauv txhua yam no: Kuv (Ultimate Multisite) yuav tsim URL cua main-site rau tenant uas txawv los ntawm qhov chaw ntawd, thiab muaj kev txhawb qhov chaw uas yog qhov uas yuav los raug ib yam hauv qhov chaw ntawd (source tenant). Yog ti nws an tsim sijhawm ua tau, kuv yuav tsim cov ntsiab lus rau qhov uas yuav los raug. Qhov no muaj kev txaus rau cov neeg los raug yam uas yog leej twg tsim hauv network records, thiab sau cia raug raws li tenant context tsis txhob ua lwm txog billing lossis membership state hauv sovereign database.

Tsy rau cov operator, qhov kev txiav tlayc yog: txhawb cov pejar uas muaj billing, account, checkout, invoice, template, thiab domain-management pages yuav tsis txhob tso cai rau cov network sovereign. Cov tenant dashboards yuav tsim link mus rau cov pejar ntawd, tab sis main site tseem yog qhov chaw uas muaj kev txaus (source of truth) rau yam hauv qhov chaw ntawd.
