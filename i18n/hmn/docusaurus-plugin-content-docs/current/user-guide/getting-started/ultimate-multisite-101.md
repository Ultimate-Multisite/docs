---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite هو plugin មួយសម្រាប់ WordPress ដែលអនុញ្ញាតឱ្យអ្នកផ្តល់សេវា WaaS ឬ Websites as a Service ដល់អតិថិជន។ មុនពេលយើងចាប់ផ្តើមរៀនថា Ultimate Multisite អាចជួយអាជីវកម្ម និងអតិថិជនរបស់អ្នកបានយ៉ាងដូចម្តេច មានចំណេះដឹងមូលដ្ឋានមួយចំនួនដែលយើងត្រូវទទួលបាន។

## WordPress Multisite {#the-wordpress-multisite}

ពួកយើងភាគច្រើនស្គាល់ការដំឡើង WordPress ដែលជាស្តង់ដារ។ អ្នកបង្កើតវាតាមរយៈ control panel របស់ hosting provider របស់អ្នក ឬសម្រាប់អ្នកក្លាហាន អ្នកអាចរៀបចំ web server និង database ថ្មី ទាញយក core files ហើយចាប់ផ្តើមដំណើរការដំឡើង។

វាមិនមែនសម្រាប់គេហទំព័រ WordPress រាប់លាននៅជុំវិញពិភពលោកទេ ប៉ុន្តែពីទស្សនៈរបស់ agency ឬ hosting provider យើងមកនិយាយអំពីបរិមាណមួយភ្លែត។

ខណៈពេលដែលវាស្រួលក្នុងការបង្កើតគេហទំព័រ WordPress តែមួយ ឬសូម្បីតែរយដោយប្រើ control panel អូតូម៉ាទិក បញ្ហានឹងចាប់ផ្តើមលេចចេញនៅពេលដែលការគ្រប់គ្រងគេហទំព័រទាំងនោះធ្លាក់លើអ្នក។ ប្រសិនបើមិនបានគ្រប់គ្រងទេ អ្នកនឹងក្លាយជាគោលដៅដ៏ល្អសម្រាប់ malware។ ការគ្រប់គ្រងមានន័យថាជាការប្រើប្រាស់កម្លាំង និងធនធាន ហើយទោះបីជាមាន external tools និង plugins សម្រាប់ជួយសម្រួលដល់ការគ្រប់គ្រង និង administration គេហទំព័រ WordPress ក៏ដោយ ការដែលអតិថិជនរក្សា quyền administrative មានន័យថាការខិតខំទាំងនេះអាចនឹងត្រូវបានយកឈ្នះបានយ៉ាងងាយស្រួល។

នៅក្នុង core របស់វា WordPress មានមុខងារមួយដែលមានឈ្មោះថា ‘Multisite’ ដែលមានប្រភពដើមត្រលប់ទៅឆ្នាំ ២០១០ នៅពេលដែល WordPress 3.0 បើកដំណើរការ។ ចាប់តាំងពីពេលនោះមក វាបានទទួលការកែសម្រួលជាច្រើនដែលមានគោលបំណងណែនាំមុខងារថ្មីៗ និងពង្រឹងសុវត្ថិភាព។

និយាយឱ្យងាយគឺ WordPress multisite អាចត្រូវបានគិតថាដូចនេះ៖ សាកលវិទ្យាល័យមួយរក្សាទុកការដំឡើង WordPress តែមួយ ប៉ុន្តែសាកលវិទ្យាល័យនីមួយៗរក្សាទុកគេហទំព័រ WordPress របស់ខ្លួនផ្ទាល់។

### ຕາໜ່າງ (The Network) {#the-network}

ໃນດ້ານ WordPress, ເຄືອຂ່າຍ multisite ນັ້ນໝາຍຄວາມວ່າເຈົ້າສາມາດຈັດການ subsites (ເວັບໄຊຍ່ອຍ) ໄດ້ຈາກ dashboard (ແຜງຄວບຄຸມ) ດຽວ. ເຖິງແມ່ນວ່າການສ້າງ multisite network ຈະແຕກຕ່າງກັນໄປໃນຜູ້ໃຫ້ບໍລິການ hosting ແຕ່ຜົນສຸດທ້າຍສ່ວນຫຼາຍມັນຈະມີຄຳສັ່ງເພີ່ມເຕີມໜ້ອຍໜຶ່ງຢູ່ໃນໄຟລ໌ wp-config.php ເພື່ອບອກ WordPress ວ່າຕອນນີ້ມັນເຮັດວຽກໃນໂໝດສະເພາະແບບນີ້.

ມີຄວາມແຕກຕ່າງທີ່ຊັດເຈນຫຼາຍຢ່າງລະຫວ່າງ multisite network ກັບການຕິດຕັ້ງ WordPress ແບບເດ່ຽວ (stand-alone) ເຊິ່ງພວກເຮົາຈະມາເວົ້າສັ້ນໆກັນ.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

ໜຶ່ງໃນການຕັດສິນໃຈທຳອິດທີ່ເຈົ້າຕ້ອງເຮັດຄື ການເລືອກວ່າການຕິດຕັ້ງ multisite ນັ້ນຈະເຮັດວຽກກັບ _subdirectories_ (ໂຟເल्ດຍ່ອຍ) ຫຼື _subdomains_ (ໂດເມນຍ່ອຍ). Ultimate Multisite ໃຊ້ໄດ້ດີທັງສອງແບບ ແຕ່ມີຄວາມແຕກຕ່າງທາງດ້ານການອອກແບບລະບົບຂອງສອງວິທີນີ້.

ໃນການຕັ້ງຄ່າ _subdirectory_, ເຊື້ອຊົງຂອງ subsites ໃນ network ຈະໄດ້ຮັບ path (ເສັ້ນທາງ) ອີງຕາມຊື່ domain ຫຼັກ. ຕົວຢ່າງ, subsites ທີ່ຖືກຕິດປ້າຍວ່າ ‘site1’ ຈະມີ URL ເຕັມເປັນ https://domain.com/site1. ໃນການຕັ້ງຄ່າ _subdomain_, subsites ໃນ network ຈະມີ _subdomain_ ຂອງຕົນເອງທີ່ໄດ້ມາຈາກຊື່ domain ຫຼັກ. ເຊິ່ງSubsite ທີ່ຖືກຕິດປ້າຍວ່າ ‘site1’ ຈະມີ URL ເຕັມເປັນ https://site1.domain.com/.

ເຖິງແມ່ນວ່າທັງສອງທາງເລືອກນີ້ຈະໃຊ້ໄດ້ຢ່າງສົມບູນ, ແຕ່ການໃຊ້ _subdomains_ ນັ້ນໃຫ້ຂໍ້ໄດ້ປຽບຫຼາຍຢ່າງ ແຕ່ກໍຕ້ອງການຄວາມຄິດໄລ່ ແລະ ການວາງແຜນໃນດ້ານໂຄງສ້າງທີ່ຫຼາຍກວ່າ.

ກ່ຽວກັບ DNS ເວລາໃຊ້ _subdirectories_ ມັນເປັນເລື່ອງທີ່ງ່າຍດາຍສຳລັບຄົນສ່ວນໃຫຍ່. ເພາະວ່າເວັບໄຊທ໌ໃນເຄືອຂ່າຍແມ່ນພຽງແຕ່ລູກຂອງ path (ໜ້າຫຼັກ), ມັນຈຶ່ງຕ້ອງການຊື່ໂດເມນ (domain name entry) ພຽງແຕ່ໜຶ່ງຊື່ສຳລັບ domain ຫຼັກເທົ່ານັ້ນ. ສຳລັບ _subdomains_ ຄວາມທ້າທາຍມັນຈະສັບສົນກວ່າເລັກນ້ອຍ, ເພາະວ່າຕ້ອງມີການໃສ່ CNAME entry ແຍກໆສຳລັບແຕ່ລະເວັບໄຊໃນເຄືອຂ່າຍ ຫຼື ການໃຊ້ wildcard (*) entry ໃນ DNS records.

ອີກດ້ານໜຶ່ງທີ່ຄວນພິຈາລະນາແມ່ນເລື່ອງ SSL ແລະ ການອອກໃບຢັ້ງຢືນ SSL (SSL certificates). ໃນການຕັ້ງຄ່າ _subdirectory_ ສາມາດໃຊ້ໃບຢັ້ງຢືນ domain ດຽວໄດ້ ເພາະວ່າເວັບໄຊໃນເຄືອຂ່າຍເປັນພຽງແຕ່ path ຂອງ domain ຫຼັກ. ດັ່ງນັ້ນ, ໃບຢັ້ງຢືນສຳລັບ domain.com ກໍຈະໃຫ້ SSL ແກ້ໄຂ HTTPS ສຳລັບ https://domain.com/site1, https://domain.com/site2 ແລະ ອື່ນໆໄດ້ຢ່າງພຽງພໍ.

ໃນການຕັ້ງຄ່າ _subdomain_ ການໃຊ້ wildcard SSL certificate ແມ່ນໜຶ່ງໃນທາງເລືອກທີ່ທົ່ວໄປທີ່ສຸດ. ໃບຢັ້ງຢືນ SSL ແບບນີ້ຈະໃຫ້ການเข้ารหัส (encryption) ສຳລັບ domain ແລະ _subdomains_ ຂອງມັນ. ດັ່ງນັ້ນ, wildcard SSL certificate ກໍຈະໃຫ້ການเข้ารหัสສຳລັບ https://site1.domain.com, https://site2.domain.com ແລະ https://domain.com ເອງດ້ວຍ.

ເຖິງວ່າຈະມີທາງເລືອກອື່ນໆກໍມີຢູ່ ແຕ່ພວກມັນມັກຈະມີຂອບເຂດຈຳກັດ ແລະ ການນຳໃຊ້ທີ່ຈຳກັດ ແລະ ຕ້ອງການການຕັ້ງຄ່າເພີ່ມເຕີມພ້ອມທັງການພິຈາລະນາວ່າເໝາະສົມກັບຄວາມຕ້ອງການຂອງເຮົາບໍ່.

#### Plugins ແລະ Themes {#plugins-and-themes}

WordPress ມັນໃຫ້ມາແລ້ວກໍເອົາໄປເສຍໄປເຊັ່ນກັນ, ຢ່າງໜ້ອຍໃນມຸມຂອງລູກຄ້າ. ໃນການຕິດຕັ້ງ WordPress ແບບ Stand-alone (ຕິດກັບເຄື່ອງດຽວ) ຖ້າຜູ້ບໍລິຫານເວັບໄຊທ໌ຕິດຕັ້ງ plugin ທີ່ບໍ່ດີ ຫຼື ລືມອັບເດດການຕິດຕັ້ງຂອງເຂົາເຈົ້າ, ເປັນຄົນເສຍຫາຍ ແລະ ເປັນຜົນກະທົບໂດຍກົງ. ແຕ່ຖ້າຜູ້ບໍລິຫານເວັບໄຊທ໌ຕິດຕັ້ງ plugin ທີ່ບໍ່ດີໃນການຕິດຕັ້ງແບບ multisite (ຫຼາຍເວັບໄຊທ໌), ມັນຈະເຮັດໃຫ້ທຸກເວັບໄຊທ໌ທີ່ຕິດຕັ້ງຢູ່ໃນເຄືອຂ່າຍນັ້ນກາຍເປັນຄົນເສຍຫາຍ.

དེའི་ཕྱིར་ན་ WordPress multisite ཞིག་བཟོས་པའི་སྐབས་སུ་, site administrators-ཚོ་ plugin (Addon)དང་ theme ຕິດຕັ້ງབྱེད་ཀྱི་ཆ་རྐྱེན། མཐུན་འགྲོགས་ལས་གཏོང་བ་དང་, དེ་ཚོ་ལ་ capability (ཆ་རྐྱེན།) བཞག་པ་ལས་, network administrator (ཡིག་ཚང་མའི་ལས་ཀ་བྱེད་သူ) ཞིག་ལ་དེ་ཚོའི་ཆ་རྐྱེན་འདི་གཏོང་བ་བྱེད་ཀྱི་ཡོད།

ད་དུང་, འདིའི་ privileged role (ཆ་རྐྱེན་ཆེ་བའི་ལས་ཀ་བྱེད་သူ) ནི་ network sites-ཚོའི་ administrators-ཚོ་ plugin menu (plugin མෙනUEZ) ལ་ເຫັນ ຫຼື ເຂົ້າເຖິງໄດ້ບໍ່ කියලා ຕັດສິນເດ, ແລະ ເຫັນໄດ້ແລ້ວ, plugin တွေကို _activate_ (ເປີດໃຊ້) ຫຼື _deactivating_ (ປິດໃຊ້) བྱེད་ཐུབ་လား ກໍ ຕັດສິນເດ।

འདི་ལྟར་ན་, network administrator- ຕ້ອງ network ລະບົບထဲຂອງ plugin ແລະ theme ຕິດຕັ້ງໃຫ້ແລ້ວ, network sites-ཚོ་ ໃຊ້ plugin ແລະ theme ເພື່ອເຮັດວຽກໄດ້ຮັບອະນຸຍາດ (permissions) ໃຫ້ເຂົາເຈົ້າແຈກຢາຍເດ। Site administrators- ບໍ່ສາມາດ plugin ຫຼື theme ຕິດຕັ້ງໄດ້ ຫຼື ຕົນຂອງເຂົາເຈົ້າບໍ່ໄດ້ມອບໝາຍ (assign) plugin ແລະ theme ເປັນຂອງ site ຂອງເຂົາເຈົ້າທີ່ບໍ່ແມ່ນຂອງເຂົາເຈົ້າໄດ້।

#### Users and Administrators {#users-and-administrators}

WordPress Multisite ໃນ WordPress, network sites ທັງໝົດໃຊ້ database ດຽວກັນ, ດັ່ງນັ້ນ users, roles, ແລະ capabilities ກໍໃຊ້ຮ່ວມກັນ. ເວົ້າງ່າຍໆ ກວ່າແມ່ນ, user ທຸກຄົນແມ່ນສະມາຊິກຂອງ network ໂດຍບໍ່ໄດ້ເປັນຂອງ site ໃດ site ໜຶ່ງສະເພາະ.

ຄວາມເຂົ້າໃຈນີ້ມີຢູ່ແລ້ວ, ການສ້າງ users ໃໝ່ໃຫ້ເຂົາເຈົ້າກໍອາດຈະບໍ່ເໝາະສົມ. ນັ້ນຕulah WordPress Multisite ໄດ້ເອົາ capability ນີ້ອອກຈາກ site administrators ແລະ ຍົກໄປໃຫ້ network administrator ແທນ. ໃນທາງກັບກັນ, network administrator ສາມາດແຈກຢາຍສິດ (privileges) ທີ່ຈຳເປັນໃຫ້ site administrator ເພື່ອໃຫ້ເຂົາເຈົ້າສາມາດສ້າງ user accounts ສຳລັບ site ຂອງຕົນເອງໄດ້.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

ຂໍຍໍ້າອີກເທື່ອໜຶ່ງ, ເຖິງແມ່ນວ່າ user accounts ຈະເບິ່ງຄືວ່າກ່ຽວຂ້ອງກັບ site ທີ່ເຂົາເຈົ້າຢູ່, ແຕ່ຄວາມເປັນຈິງແລ້ວມັນຖືກຈັດສັນໃຫ້ກັບ network ແລະ ດັ່ງນັ້ນຕ້ອງມີຄວາມເປັນເອກະລັກ (unique) ທົ່ວ network. ອາດຈະມີສະຖານະການທີ່ username ບໍ່ສາມາດລົງທະບຽນໄດ້ຍ້ອນເຫດນີ້.

Although it's not new to big company systems, this one place for user registration and login can be hard to grasp for people who are used to regular WordPress installations where managing users is a bit simpler.

#### Media {#media}

When network sites share one database in WordPress Multisite, they keep separate folders on the filesystem for media files.

The usual spot (wp-content/uploads) stays the same; but its path changes to show the unique ID of the network site. So, media files for a network site will appear as wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

We talked about how _subdomain_ is better than _subdirectory_ setup before, and here are the paths:

In a _subdirectory_ setup, the main site (the first one you make when the network starts) and the network subsites must use the same path from the domain name. This can cause a lot of conflicts.

For posts, we add a required /blog/ path to the main site so it doesn't clash with other network sites. This means pretty permalinks like ‘Post name’ will look like domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

In a _subdomain_ setup, you don't need to do this because each network site gets its own complete domain separation and doesn't have to rely on one single path. Instead, they keep their own different paths based on their _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages {#static-pages}

ໃນການຕັ້ງຄ່າ _subdirectory_  Configuraton, ມີຄວາມເປັນໄປໄດ້ທີ່ຈະເກີດຊ້ອນກັນຂອງຊື່ (naming conflicts) ກັບ static pages ເປັນ main site ແລະ network sites ໃຊ້ path ດຽວກັນ.

ເພື່ອປ້ອງກັນບັນຫານີ້, WordPress ໃຫ້ວິທີໜຶ່ງໃນການ blacklist ຊື່ site ບາງອັນ ເພື່ອບໍ່ໃຫ້ມັນຊ້ອນກັບຊື່ຂອງ site ທຳອິດ. Thông thường, network administrator ຈະໃສ່ root paths ຂອງ pages ຂອງ main site.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

ໃນການຕັ້ງຄ່າ _subdomain_ Configuraton, ຄວາມເປັນໄປໄດ້ທີ່ຈະເກີດຊ້ອນກັນຂອງຊື່ (naming conflicts) ແມ່ນຖືກຫຼຸດລົງໂດຍ _subdomain_ ເພາະມັນເປັນເອກະລັກຂອງ network site ແລະ ບໍ່ກ່ຽວຂ້ອງກັບ main site ແນວໃດ.

### ການລົງທະບຽນ (Registration) {#registration}

ໃນການຕັ້ງຄ່າ network settings ຂອງ WordPress Multisite, ມີຕົວເລືອກການລົງທະບຽນຜູ້ໃຊ້ໃໝ່ໆ ເຊິ່ງເຮັດໃຫ້ຜູ້ໃຊ້ໃໝ່ ແລະ ຜູ້ໃຊ້ທີ່ມີຢູ່ແລ້ວສາມາດສ້າງ site ໄດ້.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

ແຕກຕ່າງຈາກການຕິດຕັ້ງ WordPress ແບບ stand-alone, network sites ຈະບໍ່ມີຕົວເລືອກທີ່ຄຸ້ນເຄີຍໃນການອະນຸຍາດໃຫ້ຜູ້ໃຊ້ລົງທະບຽນ ຫຼື ມອບໝາຍການລົງທະບຽນເຫຼົ່ານັ້ນໃຫ້ກັບ roles.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

ເມື່ອມີການສ້າງ user accounts, user accounts เหล่านั้นຈະຖືກສ້າງຂຶ້ນໃນລະດັບ network. ດັ່ງນັ້ນ, ແທນທີ່ຈະເປັນຂອງ siteໃດໜຶ່ງໂດຍສະເພາະ, ມັນຈະເປັນຂອງ network. ອັນນີ້ມີຂໍ້ໄດ້ປຽບ ແລະ ຂໍ້ເສຍທີ່ແຕກຕ່າງກັນ.

ဥပမာအနေနဲ့ သင့်ရဲ့ WordPress Multisite ဟာ သတင်းနဲ့ အချက်အလက်ဆိုင်တဲ့ လုပ်ငန်းတစ်ခု ဖြစ်တယ်လို့ ယူဆကြည့်ရအောင်။ သင်က multisite ကို တည်ထောင်ပြီး ဘဏ္ဍာရေး၊ နည်းပညာ၊ ဖျော်ဖြေရေး နဲ့ တခြား စိတ်ဝင်စားစရာနယ်ပယ်တွေအတွက် network sites တွေကို ဖန်တီးနိုင်သလို plugin တွေနဲ့ theme တွေကို အားလုံးကို ထိန်းချုပ်ထားနိုင်ပါတယ်။ Network site တစ်ခုချင်းစီမှာ custom post types (cpt) ဒါမှမဟုတ် ပုံမှန် post categories တွေထက် သူတို့ရဲ့ look and feel နဲ့ user experience ကို ပိုပြီး ထိန်းချုပ်နိုင်တဲ့ အဆင့်ပိုများပါတယ်။

ဒီလိုအခြေအနေမျိုးမှာ သုံးစွဲသူက login လုပ်တဲ့အခါ network ထဲကို login လုပ်တာဖြစ်ပြီး နောက်ဆုံးတော့ seamless ဖြစ်တဲ့ အတွေ့အကြုံရဖို့အတွက် network site တစ်ခုချင်းစီထဲကိုပါ login လုပ်ရမှာ ဖြစ်ပါတယ်။ သင့်ရဲ့ website က subscription based (လစဉ်ကြေးပေးရတဲ့) အမျိုးအစား ဖြစ်တယ်ဆိုရင် ဒါဟာ အကောင်းဆုံး ဖြေရှင်းနည်းနဲ့ ရလဒ်ပဲ ဖြစ်ပါလိမ့်မယ်။

သို့သော်၊ multisite ရဲ့ ရည်ရွယ်ချက်နဲ့ သဘောသဘာဝက တစ်ခုနဲ့တစ်ခု ဆက်စပ်မှု မရှိတဲ့ network sites တွေကို ပေးဖို့ဖြစ်တယ်ဆိုရင် user roles တွေကို ပြောင်းလဲဖို့ external ဒါမှမဟုတ် နောက်ထပ် plugin တွေ လိုအပ်လေ့ရှိပါတယ်။

### Domain နဲ့ SSL {#domain-and-ssl}

WordPress Multisite တည်ဆောက်မှုမှာ ကျွန်တော်တို့ သတိမထားမိတတ်တဲ့ အရာတစ်ခုအကြောင်း ပြောကြည့်ရအောင် - Wordpress.com။ ဒါဟာ WordPress multisite ရဲ့ အကျယ်အဝန်း အများဆုံးဥပမာဖြစ်ပြီး ဘယ်လိုရည်ရွယ်ချက်အတွက်ပဲ ဖြစ်ဖြစ် ပြောင်းလဲနိုင်စွမ်းရှိတယ်ဆိုတာကို ပြသပါတယ်။

ဒီနေ့ခေတ် internet ပေါ်မှာ SSL ကို သုံးဖို့က မဖြစ်မနေ လိုအပ်လာပြီး WordPress multisite ရဲ့ network administrators တွေဟာ ဒီစိန်ခေါ်မှုတွေကို မကြာခင် ကြုံတွေ့ရတော့မှာ ဖြစ်ပါတယ်။

_subdomain_ configuration နဲ့ဆိုရင် site တွေကို root domain name အပေါ် အခြေခံပြီး ဖန်တီးတာပါ။ ဥပမာအားဖြင့် ‘site1’ လို့ နာမည်ပေးထားတဲ့ site တစ်ခုကို ‘site1.domain.com’ အဖြစ် ဖန်တီးမှာ ဖြစ်ပါတယ်။ wildcard SSL certificate ကို အသုံးပြုခြင်းဖြင့် network administrator ဟာ ဒီစိန်ခေါ်မှုကို အောင်မြင်စွာ ဖြေရှင်းနိုင်ပြီး network အတွက် SSL encryption စွမ်းရည်တွေကို ပေးနိုင်မှာ ဖြစ်ပါတယ်။

WordPress Multisite တွင် domain mapping function (domain-uamap) មួយရှိတဲ့ feature មួយရှိတယ်။ ມັນက network sites-တွေကို custom domain names ឬ network-ৰ মূল domain-ৰ বেলেগ domain name-ৰ সৈতে সংযোগ কৰিবলৈ অনুমতি দিয়ে।

network administrators-বোৰ বাছনি কৰাৰ ক্ষেত্ৰত, domain name configuration আৰু SSL certificate issuance আৰু maintenance দুয়োটাতেই এটা اضافي জটিলতা আনি দিয়ে।

এই ধাৰণাটোৰ পৰা, WordPress Multisite তেওঁলোকক [www.anotherdomain.com](http://www.anotherdomain.com)-ক ‘site1’ ৰ সৈতে map কৰিবলৈ এটা উপায় দিলেও, network administrator-কে external DNS entries management আৰু SSL certificate implement কৰাৰ প্ৰত্যাহ্বানটো থাকিব।

## Ultimate Multisite {#ultimate-multisite}

Standalone WordPress installation আৰু Multisite installationৰ মাজৰ পাৰ্থক্যবোৰ বুজি পোৱাৰ পিছত, Website as a Service (WaaS) দিবলৈ কেনেকৈ Ultimate Multisite হৈছে সেই সকলোৰে বাবে সেরা উপায়, আহক চাবলৈ।

### Introduction {#introduction}

Ultimate Multisite হৈছে WaaS নিৰ্মাণ কৰিবলৈ আপোনাৰ Swiss Army knife। Wix.com, Squarespace, WordPress.com আৰু তাৰ পিছত নিজৰ service নিজে থকাটো ভাবি লওক।

Under the hood Ultimate Multisite-এ WordPress Multisite ব্যৱহাৰ কৰে কিন্তু ই এনেদৰে কৰে যে ই network administrators-বোৰ multisite installationৰ সৈতে facing বহুতো সমস্যা সমাধান কৰাৰ লগতে capability উন্নত কৰে, যিয়ে বহুত ধৰণৰ use cases سپور্ট কৰিবলৈ অনুমতি দিয়ে।

নিম্নলিখিত section-বোৰত আমি কিছুমান common use case আৰু সেই কেছবোৰক سپور্ট কৰিবলৈ প্ৰয়োজনীয় consideration-বোৰ চাবলৈ আহিম।

### Use Cases {#use-cases}

#### Case 1: An Agency {#case-1-an-agency}

সাধারণত এটা agency-ৰ core skill-বোৰ website design-ৰ ওপৰত নিৰ্ভৰ কৰে, য'ত hosting বা marketing যেন additional services হিচাপে list কৰা থাকে।

ສຳລັບອົງການຈັດຕັ້ງ (agencies), Ultimate Multisite ມັນມີຄຸນຄ່າທີ່ໜ້າທึ่งໃນຄວາມສາມາດຂອງມັນທີ່ຈະຮອງຮັບ ແລະ ຈັດການເວັບໄຊທ໌ຫຼາຍໆແຫ່ງໃນເວທີດຽວ. ສຳລັບອົງການຈັດຕັ້ງທີ່ເຮັດແບບເປັນມາດຕະຖານກ່ຽວກັບ design ໂດຍໃຊ້ theme ເປັນ particular (ເຊັ່ນ: GeneratePress, Astra, OceanWP ຫຼື ອື່ນໆ), ພວກເຂົາສາມາດໃຊ້ຄວາມສາມາດຂອງ Ultimate Multisite ເພື່ອເປີດໃຊ້ theme ເຫຼົ່ານັ້ນໃຫ້ກັບເວັບໄຊທ໌ໃໝ່ໆໄດ້ອັດຕະໂນມັດ.

ຄືກັນກັບການມີຂໍ້ສະເໜີທີ່ດີຫຼາຍສຳລັບລາຄາ plugin ທີ່ເປັນທີ່ນິຍົມຂອງ agency, ການໃຊ້ Ultimate Multisite ຊ່ວຍໃຫ້ agency ສາມາດໃຊ້ການລົງທຶນທີ່ມີຢູ່ແລ້ວໄດ້ໂດຍການມີ platform ຕົ້ນຕໍທີ່ຈະຕິດຕັ້ງ, ထိန်းသိ້ ແລະ ນຳໃຊ້ plugin ເຫຼົ່ານັ້ນ.

ສ່ວນຫຼາຍແມ່ນການໃຊ້ configuration (ການຕັ້ງຄ່າ) ແມ່ນເປັນທີ່ຕ້ອງການ ແລະ ແຮງໂຊກທີ່ Ultimate Multisite ເຮັດໃຫ້ການເຮັດ domain mapping ແລະ SSL certificates ມັນງ່າຍຫຼາຍຜ່ານການເຊື່ອມຕໍ່ກັບ hosting providers ທີ່ນິຍົມຈຳນວນໜຶ່ງ ລວມທັງ services ເຊັ່ນ Cloudflare ແລະ cPanel.

ດັ່ງນັ້ນ, ການໃຊ້ຜູ້ສະໜອງໃດໜຶ່ງໃນບັນດາພວກນີ້ ຫຼື ການເອົາ Ultimate Multisite ໄວ້ຫຼັງ Cloudflare ສ່ວນດ້ານການຈັດການ domain ແລະ SSL certificates ກໍຈະງ່າຍຫຼາຍ.

ອົງການຈັດຕັ້ງທີ່ຢາກຄວບຄຸມການສ້າງເວັບໄຊທ໌ຢ່າງໃກ້ຊິດ ຈະເຫັນຄວາມສະດວກໃນການສ້າງເວັບໄຊທ໌ ແລະ ເຊື່ອມໂຍງເວັບໄຊທ໌ກັບລູກຄ້າ ແລະ ແຜນການຕ່າງໆ ຜ່ານ interface ທີ່ເຮັດໃຫ້ງ່າຍຂອງ Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

ການຄວບຄຸມ plugin ແລະ theme ແມ່ນຖືກຮັກສາໄວ້ໃນລະດັບ product ໂດຍໃຊ້ interface ທີ່ເຂົ້າໃຈງ່າຍຂອງ Ultimate Multisite ເຊິ່ງເຮັດໃຫ້ສາມາດເປີດ, ປິດ ຫຼື ສະແດງສະຖານະການ activate ຂອງ plugin ແລະ theme ເມື່ອສ້າງເວັບໄຊທ໌ໃໝ່ໄດ້.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes ལས་ཀྱི་གནས་ཚུལ་དེ་དག་གི་ལས་བྱེད་ཐབས་དང་འདྲ་བ་ཞིག་ཡོད། དེའི་སྐབས་སུ་ເວັບໄຊ བཟོ་སྐྲུན་པའི་སྐབས་སུ་ཁྱད་ཆོས་ (themes) ཁག་ལ་བསྒྲུབ་བྱེད་པ་དང་གནས་ཚུལ་འདྲ་བ་ཞིག་ལ་བསྒྲུབ་བྱེད་པ་ལྟར་ ជ្រើសរើស 켜 (activate) ឬ ປິດ (hide) နိုင်တယ်။

![Product theme limitations interface](/img/config/product-themes.png)

Agency ཚོས་ Ultimate Multisite ប្រើတဲ့အခါ ស្ងប់ស្ងាត់នឹងមានརེ་བ་ཆེན་པོ་ཡོད། ཁོང་ཚོས་ដែលខ្លួនឯង အကောင်းဆုံးလုပ်နိုင်တာ—អស្ចារ្យமான website တွေ ឌីហ្សាញ လုပ်နိုင်တယ်။

#### ករណីទី ២: ຜູ້ផ្តល់សេវាเฉพาะ niche (Niche Provider) {#case-2-niche-provider}

មានពាក្យចាស់មួយដែលថា "ធ្វើអ្វីមួយឱ្យបានល្អ"។ អ្នកជំនាញជាច្រើនសម្រាប់អ្នកនេះ មានន័យថា មូលដ្ឋានគំនិតតែមួយជុំវិញផលិតផល ឬសេវាកម្មတစ်ခု ត្រូវបង្កើតឡើង។

ប្រហែលជាអ្នកជាអ្នកលេងកីឡាហ្គោលដែលចូលចិត្តផ្សព្វផ្សាយ website ទៅកាន់ក្លឹប ឬក៏អ្នកជាអ្នកលេង esports ដែលចូលចិត្តផ្តល់ website ទៅឱ្យក្រុម (clans)។ អ្នកដែលផ្សព្វផ្សាយសេវាការណាត់ជួបទៅភោជនីយដ្ឋានវិញ?

ដោយសារមូលហេតុជាច្រើន អ្នកចង់ផ្តល់សេវាផ្អែកលើក្របខ័ណ្ឌ (framework) និងវេទិកា (platform) ដូចគ្នា។ វាអាចជាអ្នកបានឌីហ្សាញ ឬវិនិយោគលើ plugin ដែលធ្វើឱ្យមានមុខងារដែលត្រូវការ ឬក៏វាអាចជាករណីដែលការអនុវត្តល្អបំផុតក្នុងឧស្សាហកម្ម ទាមទារឱ្យមានវិធីសាស្រ្តស្តង់ដារសម្រាប់ការឌីហ្សាញមួយចំនួន។

លក្ខណៈពិសេសថ្មីមួយរបស់ Ultimate Multisite គឺការប្រើ template sites (template site)។ Template site ဆိုတာ theme ត្រូវបានដំឡើង និងបើកដំណើរការហើយ၊ plugin ដែលចាំបាច់ត្រូវបានដំឡើង និងបើកដំណើរការរួច ហើយ posts ឬ pages គំរូត្រូវបានបង្កើតរួចហើយ។ នៅពេលដែលអតិថិជនបង្កើត site ថ្មីដោយផ្អែកលើ template នោះ ខ្លឹមសារ និងការកំណត់ (settings) នៃ template នឹងត្រូវបានចម្លងទៅក្នុង site ដែលទើបបង្កើតថ្មីនោះ។

សម្រាប់អ្នកផ្តល់សេវា niche sites និង services នេះ វាផ្តល់នូវអត្ថប្រយោជន៍ដ៏ធំមួយក្នុងការបង្កើត site ដែលត្រៀមរួចរាល់ភ្លាមៗ ដោយមាន custom plugins និងការឌីហ្សាញ។ អតិថិជនគ្រាន់តែត្រូវផ្តល់ input ច្រើនតិចបំផុតដើម្បីបញ្ចប់សេវាកម្មនោះប៉ុណ្ណោះ។

Khuav tsis paub ti yeej, thloob hauj tsis paub ti _subdirectory_ lossa _subdomain_ configuration yuav hual. Thloob, architecture choice yuav muaj tsis paub ti SSL certificate simple ha _subdirectories_ lossa wildcard SSL certificate ha _subdomains_.

#### Case 3: WordPress Web Hosting {#case-3-wordpress-web-hosting}

WordPress site-u hosting tsis muaj yeej taa, hyn thaum tsis paub ti hual ti muaj web space rau customer loh pre-installed version of WordPress. Thao hmooj he chuaw vim ti muaj decision lossa thiab consideration hauv txhua yam uas yuav tsum mus ua ke los ntawm kev ua kom khoom uas muaj yam uas muaj txiaj ntsig.

Ultimate Multisite zoo tshaj plaws heev heev hauv qhov no, vim nws pab txhawm rau muaj comprehensive turnkey solution rau hosting WordPress sites. Included hauv solution ntawd yog theem uas pab tsim tom qhuas subscription services, payment collection, checkout forms, discount vouchers thiab customer communications.

Qhov uas muaj txoj hauj tsis paub uas yuav tsum ua kom install, configure thiab maintain WordPress Multisite zoo heev, Ultimate Multisite pab txhawm rau network administrators tsuas tsis txhob xav ti aspects uas hloov rau lawv service lossis niche chaw thiaj li cas sida product tiers, pricing thiab service offers.

For developers uas xav yuav integrate mus Ultimate Multisite, solution ntawd tseem muaj comprehensive RESTful API thiab Webhooks rau event notification.

Tsis txhob teeb meem mus xav ti plugin lossis license no, Ultimate Multisite pab tsim tom solution uas muaj feature ntau thiab hloov zoo li Wix, Squarespace, WordPress.com thiab lwm yam.

### Architecture Considerations {#architecture-considerations}

Thaum tsis yog qhuas ua leej twg, cov khoom uas thiaj yuav pab tsim tom kev txiav tlay rau kev tiv thaiv technologies zoo rau Ultimate Multisite installation yuav tsum muaj.

#### Shared vs. Dedicated Hosting {#shared-vs-dedicated-hosting}

Hosting providers མང་པོ་ཞིག་གི་ཆ་རེད་ ហើយཁག་ཅིག་ནི་སྒྲོལ་བའི་ server density (server ད densiti) འཇོག་པ་ལས་བྱེད་ཀྱི་ཡོད། Low-cost provider ཚོས་ revenue འཐོབ་པ་ནི་server ད densiti རྒྱ་ཆེ་བ་ལས་ maximum འཐོབ་པ་ལས་བྱེད་ཀྱི་ཡོད། དེའི་ཕྱིར་བརྟེན་ཁྱེད་ཀྱི་ Ultimate Multisite installation ནི་ server གཅིག་ལ་site མང་པོ་ཞིག་ (hundreds of sites) ནང་གི་ site ཤིག་ཙམ་ཡིན་ཐུབ།

provider ལས་ appropriate safeguards ཚུ་མེད་པ་ཅིན་ shared server ལ་sites ཚོས་ ‘noisy neighbour’ problem འཕྲད་དགོས། དེ་ནི་server གཅིག་ལ་site ཞིག་གིས་ resource མང་པོ་བསགས་ထားတဲ့အတွက် གཞན་啲 sites ཚུ་ཡང་ remaining resource ཚུ་ལས་འགྲན་རྩོད་བྱེད་དགོས་པ་ཨིན། དེའི་སྐབས་སུ་ site ཚུ་ ལ chậm (slow) འགྲོ་བ་ཅིན་ respond མི་ཐུབ་པ་ཚུ་ མང་པོ་ཞིག་ တွေ့ရတတ်တယ်။

web hosting provider མཁན་པོ་အနေနဲ့ flow on effects ཚུ་ནི་ཁྱེད་ཀྱི་ customer ཚོས་ speed ལེགས་པོ་མེད་པ་དང་ page rank འདྲ་མིན་བྱེད་པ་ (low page rank) ཡོད་པ་དང་ bounce rate འདྲ་མིན་བསྐྱེད་པ་ཚུ་ တွေ့ရཐོབ་ཅིང་། customer ཚོས་ service གཞན་ལ་སོང་ནི་ལས་ churn (customer churn) འགྲོ་ཐོབ་ཐུབ།

བརྗོད་བའི་དོན་ནི་, cheap འདྲ་མིན་བྱེད་པ་ནི་好 (good) མེད་པར་བརྗོད་ཆོག

Ultimate Multisite ནི་好 hosting provider ཚུ་མང་པོ་དང་ལས་ကောင်းབྱེད་ཀྱི་ཡོད། དེ་ཚུ་དང་ environment དང་འགྲོ་སོང་ལེགས་ཤོམ་པ་དང་ domain mapping དང་ automatic SSL လို ལས་ཀ་ཚུ་ བཟོ་ནི་ལས་བྱེད་ཐུབ། དེ་ཚུ་ Performance (ལས་ကောင်း) ལ་གོ་སྐབས་ཆེ་བ་དང་ shared hosting ལས་ལྷག་པའི་ service འགྲོ་ཐུབ།

compatible providers ཚུ་ list དང་ site ཚུ་ སྒྲིག་བཟོ་ནི་ instructions ཚུ་ ཡོད་པ་ཅིན་ Compatible Providers documentation དེའི་ནང་གི་ལས་ཀ་ཚུ་ བལྟ་རོགས།

#### Performance Considerations (Performance ལ་བལྟ་རྒྱུར་) {#performance-considerations}

Ultimate Multisite ནི་ application ཞིག་ slow མེད་པར་ཡོད་པ་མ་རེད་၊ འ反 (remarkably) ལྷག་པའི་မြန်ས་ཅན་ཞིག་ཨིན། ཡང་ན་, དེའི་ performance ནི་ underlying application དང་ infrastructure ཚུ་ལྟར་ཡོངས་སུ་བལྟ་རྒྱུར་ ཡོད་པ་མ་རེད་， དེ་ལས་ access ཐོབ་པའི་ལས་ཀ་ཚུ་ལས་ ལྷག་པའི་ལས་ཀ་ཚུ་ བཟོ་ནི་མི་ཐུབ།

འདི་ལྟར་བསམ་བློ་བཏང་རོགས། ཁྱེད་ཀྱིས་ site 100 ཡོད་པའི་ Ultimate Multisite installation གི་ network administrator ཡིན་པ་ཅིན་， site ཚུ་ ག་ཅིག་ནི་ལེགས་ཤོམ་དང་ ཉིན་མོ་ཚུ་ website visitor མང་པོ་བསྐྱལ་ཐུབ་པ་ཚུ་ တွေ့ရཐོབ་ཐུབ།

ຖ້າເປັນສະຖານະການແບບນັ້ນມັນຈະແຕກຕ່າງກັນໃນຂະໜາດນ້ອຍ ເຊັ່ນ website ໜຶ່ງຫາຫ້າ site ແຕ່ບໍ່ດົນມານີ້ບັນຫາຂອງຂະໜາດໃຫຍ່ກໍຈະເຫັນຕົວ.

ຖ້າປ່ອຍໃຫ້ເວັບໄຊ Ultimate Multisite ຫນຶ່ງຢູ່ໂດຍບໍ່ມີໃຜເບິ່ງແຍງ, ເວັບໄຊນັ້ນຈະເປັນຜູ້ຮັບຜິດຊອບໃນການຕອບສະໜອງຄຳຮ້ອງຂໍຂອງຜູ້ເຂົ້າຊົມທຸກຄົນ. ຄຳຮ້ອງຂໍເຫຼົ່ານີ້ອາດຈະເປັນສຳລັບ PHP pages ທີ່ປ່ຽນແປງໄດ້ ຫຼື file ແບບ static ເຊັ່ນ: stylesheets, javascript ຫຼື media files. ບໍ່ວ່າຈະເປັນ website ໜຶ່ງ ຫຼື website ເຮືອນຮ້ອຍ, ວຽກເຫຼົ່ານີ້ກໍຈະຊ້ຳໆ, ໜ້າເບື່ອ ແລະ ສິ້ນເປືອງເວລາ. ມັນບໍ່ຈຳເປັນຕ້ອງໃຊ້ CPU power ແລະ memory ເພື່ອປະມວນຜົນ file PHP ເພາະວ່າຜົນລັບທີ່ໄດ້ນັ້ນແມ່ນຂໍ້ມູນແບບ static ຊ້ຳໆສຳລັບທຸກຄຳຮ້ອງຂໍ.

ໃນ Caracter ດຽວກັນ ຄຳຮ້ອງຂໍໜຶ່ງສຳລັບ PHP ຫຼື HTML page ກໍຈະສ້າງຄຳຮ້ອງຂໍຕໍ່ມາຫຼາຍ requests ສຳລັບ scripts, stylesheets ແລະ image files. ຄຳຮ້ອງຂໍເຫຼົ່ານີ້ແມ່ນມຸ່ງໄປທີ່ server Ultimate Multisite ຂອງທ່ານໂດຍກົງ.

ທ່ານສາມາດແກ້ໄຂບັນຫານີ້ໄດ້ງ່າຍໆໂດຍການອັບເກຣດ server ແຕ່ມັນບໍ່ໄດ້ແກ້ໄຂບັນຫາທີສອງຄື geographic latencies (ຄວາມຊັກຊ້າທາງພູມສາດ). ມີແຕ່ server ຫຼາຍໂຕໃນຕ່າງໆ ເທົ່ານັ້ນທີ່ຈະສາມາດແກ້ໄຂບັນຫານີ້ໄດ້ຢ່າງຖືກຕ້ອງ.

ດ້ວຍເຫດນີ້, ນັກບໍລິຫານ network ສ່ວນໃຫຍ່ໃຊ້ front-end caching solutions ແລະ content distribution networks (CDN) ເພື່ອຕອບສະໜອງຄຳຮ້ອງຂໍສຳລັບ static pages. ການຕອບສະໜອງຄຳຮ້ອງຂໍເຫຼົ່ານີ້ ແລະ ການສົ່ງ asset ກ່ອນທີ່ request ຈະໄປເຖິງ server ຊ່ວຍປະຢັດຊັບພະຍາກອນການປະມວນຜົນ, ກຳຈັດຄວາມຊັກຊ້າ, ຫຼີກລ່ຽງການອັບເກຣດທີ່ບໍ່ຈຳເປັນ ແລະ ເຮັດໃຫ້ການລົງທຶນດ້ານເຕັກໂນໂລຊີມີປະສິດທິພາບສູງສຸດ.

Ultimate Multisite ມີ Cloudflare add-on ທີ່ຊັບຊ້ອນ ເຊິ່ງເຮັດໃຫ້ network administrators ສາມາດວາງການຕິດຕັ້ງຂອງເຂົາເຈົ້າໄວ້ຫຼັງ Cloudflare ແລະ ນຳໃຊ້ບໍ່ພຽງແຕ່ຄວາມສາມາດໃນການ caching ຂອງມັນເທົ່ານັ້ນ ແຕ່ຍັງມີ DNS hosting, SSL certificates ແລະ ກົນໄກຄວາມປອດໄພອີກດ້ວຍ.

#### ການສຳຮອງຂໍ້ມູນ (Backups) {#backups}

ທ່ານອາດຈະຖາມຄົນ 50 ຄົນເພື່ອຂໍຄຳແນະນຳກ່ຽວກັບ backups ແລະ ໄດ້ຮັບຄວາມຄິດເຫັນທີ່ແຕກຕ່າງກັນ 50 ແບບກ່ຽວກັບ chiến lược backup. ຄຳຕອບແມ່ນ, ມັນຂຶ້ນກັບສະຖານະການ.

Kuvlaj tsis muaj qhuas tias yuav tualah backups (backups) yuav tualah, thiab tias nws nyob hauv lub luag txhua tus provider, heev tshwj xeeb yog heev uas muaj dịch vụ managed. Txhua tus customer yuav tshawb xyuas mus rau network administrator los tso thiab thov lawv muaj thiab thov lawv leej. Tiag tias network administrator tshawb xyuas mus rau nws yog ib qho yam tsis txhob hloov.

Tsy hais txog backup tsis yog ib qho copy ntawm lubstee system (system state) tha uas yuav los tso backup. Tsis txhob hloov, txhua yam uas muaj hauv lubstee system tha uas yuav los tso backup ntawd yuav tau thov thiab tsim kom lawv tsis txhob kho mus rau hauv backup.

Thaum muaj qhuas no, tias yuav ua li cas los tso backup thiab yuav uas zoo tshaj rau lubstee environment yuav nyob txoj kev xav txhua yam ntawm koj tus requirements thiab lub sijhawm uas hosting provider yuav tsum tsis txhob hloov lawv. Tab sis, hauv lub sijhawm uas muaj qhuas tshaj tshiab mus rau qhuas tsis tshiab, cov kev txiav tlay (options) ntawm ib leej yuav muaj qhuas los yog tsim kom koj paub.

#### Snapshots {#snapshots}

Snapshots yog tus "silver bullets" rau backups vim lawv ring txaus, tsis keem duaw, thiab 'just work' (txeem tias nws thov txhua yam). Txhua yam tsis txhob muaj kev pab tso los ntawm koj provider, thiab nws yuav laus yog heev tshwj xeeb thaum koj muaj VPS (Virtual Private Server) lossis ib yam li ntawd. Cov provider uas muaj hauv lub documentation 'Compatible Providers' cua rau backups uas tsis txhob tsum muaj kev pab tso los ntawm network administrator lossis kawm txog nws.

Kuvlaj tsoomjoo (Traditional Backups) нь файл болон database-удыг зориулдаг бол snapshot нь бүх disk-ийг зорино. Энэ нь зөвхөн сайтны data-г snapshot-д багтаах биш, харин operating system болон configuration-ийг ч багтаадаг гэсэн үг юм. Олон хүмүүст энэ нь тодорхой давуу тал болдог учир, snapshot-оос бараг шууд шинэ system-ыг үүсгэж, асуудалтай instance-ийг орлуулах боломжтой. Үүнтэй ижил төстэй байдлаар, файл сэргээх recovery process нь зөвхөн snapshot image-ийг disk болгон одоо байгаа instance дээр холбоход л хангалттай бөгөөд ингэснээр файлуудыг ашиглаж, хуулбарлах боломжтой болно.

Snapshot нь хостинг провайдерийн талбарт нэмэлт зардлыг авчирч болзошгүй ч энэ нь ослоос хамгаалалт юм.

#### Гаднах скриптүүд (External Scripts) {#external-scripts}

WordPress болон MySQL resources-ийг backup хийх гаднах script болон шийдлүүд их байдаг бөгөөд эдгээр нь Ultimate Multisite-д сайн ажиллана учир байна. Учир нь энэ нь WordPress filesystem болон database-ийг ашигладаг WordPress plugin юм. Тиймээс WordPress сайтуудыг backup хийх шийдэл нь Ultimate Multisite-ийн хэрэгцээнд хангалттай байх ёстой.

Бид аль нэг script-ийг бусадтай харьцуулж зөвлөхгүй ч, ерөнхий зөвлөмж бол үр дүн хүссэн байгаа эсэхийг шалгахын тулд хэд хэдэн backup ба restore test хийх бөгөөд script болон түүний функц ажиллаж буй газрыг тогтмол үнэлэх замаар "баталгаатай байх" ёстой.

Эдгээр script-үүд ажиллаж байгаа үед system load-ийг нэмэгдүүлнэ гэдгийг анхаарах хэрэгтэй.

#### Plugins {#plugins}

WordPress дээр plugin-ээр шийдэж чадахгүй асуудал бараг байхгүй бөгөөд гаднах script-үүдийг удирдах нь таны хүссэн зүйл биш бол plugin нь дараагийн сайн сонголт байж болно.

Plugins ཚུ་ལས་オプションདང་ feature တွေ ကွာခြားပေမယ့် သူတို့အများစုက အလုပ်တစ်ခုတည်းကိုပဲ လုပ်ဆောင်ကြတယ်၊ အဲဒါက WordPress ဖိုင်တွေနဲ့ database အကြောင်းအရာတွေကို ကူးယူတာပါ။ အဲဒီနောက်မှာတော့ plugin တွေရဲ့ လုပ်ဆောင်ချက်တွေက ကွာခြားလာတယ်။ ဘာလို့လဲဆိုတော့ တချို့ plugin တွေက backup တွေကို Google Drive ဒါမှမဟုတ် Dropbox လိုမျိုး ပြင်ပ service တွေဆီ ပို့နိုင်တယ်၊ ဒါမှမဟုတ် S3, Wasabi စတဲ့ object storage service တွေလို သင့်တော်တဲ့ service တွေဆီကို ပို့နိုင်တယ်။ ပိုပြီး အပြည့်အစုံပါတဲ့ plugin တွေကတော့ external storage ကုန်ကျစရိတ် လျှော့ချဖို့အတွက် ပြောင်းလဲသွားတဲ့ data တွေကိုပဲ backup လုပ်တဲ့ differential backups ဒါမှမဟုတ် တစ်မျိုးတစ်ဖုံ စတဲ့ နည်းလမ်းတွေကို ပေးလေ့ရှိတယ်။

plugin တစ်ခုကို ရွေးချယ်တဲ့အခါ multisite နဲ့ သတိထားဖို့ မမေ့ပါနဲ့။ အဲဒီလိုအလုပ်လုပ်ပုံကြောင့် backup လုပ်နေစဉ်မှာ server ပေါ်မှာ ခဏတာ load တက်လာနိုင်တယ်လို့ မျှော်လင့်ထားသင့်ပါတယ်။

#### Domain နဲ့ SSL {#domain-and-ssl-1}

multisite _subdomain_ mode မှာ domain name တွေနဲ့ ပတ်သက်ပြီး အရင်ကတည်းက များများစားစား ဆွေးနွေးခဲ့ကြပါပြီ။ network administrator တွေအတွက် almost universal ဖြစ်တဲ့ solution က wildcard DNS entries တွေကို သုံးတာပါ။

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

ဒီလို DNS entry အမျိုးအစားမျိုးက ‘site1.domain.com’ နဲ့ ‘site2.domain.com’ လို subdomain တွေကို IP address 1.2.3.4 ကို အောင်မြင်စွာ ပြန်ပေးနိုင်ပြီး Ultimate Multisite နဲ့ _subdomain_ mode သုံးတဲ့ WordPress Multisite အတွက် ပိုကြီးမားတဲ့ အကျိုးပြုပါတယ်။

ဒါက HTTP အတွက်လည်း အကောင်းဆုံး အလုပ်လုပ်နိုင်ပါတယ်၊ ဘာလို့လဲဆိုတော့ target host ဟာ HTTP headers ကနေ ဖတ်ယူရတာဖြစ်ပြီး ဒီနေ့ခေတ်မှာ လုံခြုံရေးအတွက် HTTPS transaction တွေ မရှိမဖြစ်လိုအပ်တဲ့ web တွေ မများတော့ပါဘူး။

Khawm neej tsis muaj kev txiav txhua yam u siab rau SSL certificates. Zauj siab (subdirectory) mode hauv cas, yuav tuaj ye siv certificate tom domain tam sim. Txoj ntawd yog tus hosting provider tsis txhob siv free LetsEncrypt service lossis lub sijhawm lossis tus cawm tsis txhob siv tus cawm uas muaj. Tsis tas, hauv cas no yuav muaj komercial available los ntawm cov authoritys heev heev koj yuav tsum muaj txoj certificate signing request (CSR) los tsim.

Hauv subdomain mode, yuav siv wildcard SSL certificate yuav hlub khois li lub domain wildcard thiab choj tias yuav tso cai rau certificate yog tus uas mam li tus root domain thiab txhua subdomain tsis muaj kev teb ceeb lossis tswv kawm.

Thaum ntawd, yuav tsum paub tias wildcard SSL certificates tsis hlub khois li cov kev siv los ntawm services loj zoo li Cloudflare hais tias koj tsis muaj enterprise plan lossis koj tsim qhia lub teeb meem rau DNS only uas txhua caching thiab optimization tsis muaj.

Out-of-the-box Ultimate Multisite yuav muaj kev tso cai rau teeb meem no, ua raws li tus kaus tsis txhob hmoov txog tus hauv WordPress multisites. Siv add-on siab no yuav ua rau Ultimate Multisite siv tus credentials Cloudflare los tsim DNS entries autonoom rau cov network sites hauv Cloudflare thiab teb mode mus rau ‘proxied’. Txoj kev ua zoo li ntawd, txhua network subsite uas tsim los yuav muaj kev bാവ rooj thiab txhua txiaj ncuam ntawm Cloudflare loj zoo li SSL.

Thaum xim nyob heev rau kev sib txawv thiab lub sijhawm ntawm koj Ultimate Multisite installation, cov neeg yuav muaj vaj zoo los siv tus domain uas tsim los ntawm txhua tus. Hauv cas no, tus network administrator yuav muaj tus hauv dua teeb meem ntau. Ib yam, hauv qhia lub domain thiab SSL certificates rau lub domain.

ສຳລັບຫຼາຍໆຄົນ, ການໃຊ້ Cloudflare ເປັນທາງເລືອກທີ່ງ່າຍ. ລູກຄ້າພຽງແຕ່ຕ້ອງເອົາໂດເມນຂອງເຂົາເຈົ້າໄປໃສ່ໃນ Cloudflare, ຊີ້ (point) CNAME ໄປຫາໂດເມນຫຼັກ (root domain) ຂອງ Ultimate Multisite ແລະ ມັດ (map) ໂດເມນຂອງເຂົາເຈົ້າໃນ Ultimate Multisite ເພື່ອເລີ່ມໃຊ້ຊື່ໂດເມນທີ່ເປັນແບບສະເພາະຂອງຕົນ.

ນອກຈາກນີ້, ຕ້ອງໄດ້ຊອກຫາວິທີແກ້ໄຂທາງເລືອກອື່ນໆ ເພາະດັ່ງນັ້ນ Ultimate Multisite ຈຶ່ງແນະນຳລາຍຊື່ຜູ້ໃຫ້ບໍລິການທີ່ເຂົ້າກັນໄດ້ (Compatible Providers). ນີ້ແມ່ນເພາະວ່າຂັ້ນຕອນການຕັ້ງຄ່າ DNS ແລະ SSL ອາດເປັນຂັ້ນຕອນທີ່ບໍ່ງ່າຍ. ແຕ່ດ້ວຍການເຊື່ອມໂຍງຂອງ Ultimate Multisite ກັບຜູ້ໃຫ້ບໍລິການເຫຼົ່ານີ້, ຄວາມສັບສົນຈະຖືກຫຼຸດລົງຫຼາຍ ແລະ ຂັ້ນຕອນຈະເປັນແບບອັດຕະໂນມັດ.

#### Plugins (Add-ons) {#plugins-1}

ມີແນວໂນ້ມສູງວ່າທ່ານຈະຕ້ອງການ plugin ເພີ່ມເຕີມເພື່ອໃຫ້ຟັງຊັນກັບລູກຄ້າ ຫຼື ໄຊທ໌ໃນເຄືອຂ່າຍຂອງທ່ານ. ທຸກ plugin ເຮັດວຽກກັບ WordPress Multisite ແລະ Ultimate Multisite ບໍ່? ແມ່ນແລ້ວ, ຂຶ້ນຢູ່ກັບມັນ.

ໃນຂະນະທີ່ plugin ສ່ວນໃຫຍ່ສາມາດຕິດຕັ້ງໄດ້ໃນ WordPress Multisite ແລ້ວ, ການເປີດໃຊ້ງານ (activation) ແລະ ການໃສ່ໃບອະນຸຍາດ (licensing) ຂອງມັນແຕກຕ່າງກັນໄປຕາມຜູ້ຂຽນ.

ຄວາມທ້າທາຍແມ່ນຢູ່ໃນວິທີການນຳໃຊ້ໃບອະນຸຍາດກັບບາງ plugin ທີ່ຕ້ອງການໃບອະນຸຍາດໃນລະດັບ per-domain (ຕໍ່ໂດເມນ). ນີ້ໝາຍຄວາມວ່າສຳລັບບາງ plugin, ຜູ້ບໍລິຫານເຄືອຂ່າຍຈະຕ້ອງເປີດໃຊ້ໃບອະນຸຍາດດ້ວຍຕົນເອງສຳລັບແຕ່ລະ plugin ໃນແຕ່ລະໄຊທ໌ໃໝ່.

ດັ່ງນັ້ນ, ອາດຈະດີທີ່ສຸດທີ່ຈະກວດສອບກັບຜູ້ຂຽນ plugin ເພື່ອຮູ້ວ່າ plugin ຂອງເຂົາເຈົ້າຈະເຮັດວຽກກັບ WordPress Multisite ແນວໃດ ແລະ ມີຂໍ້ກຳນົດ ຫຼື ຂັ້ນຕອນພິເສດຫຍັງທີ່ຕ້ອງໃຊ້ໃນການໃສ່ໃບອະນຸຍາດມັນບໍ່.
