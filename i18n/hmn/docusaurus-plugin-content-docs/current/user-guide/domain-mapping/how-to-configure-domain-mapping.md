---
title: Yiwm tau txais Domain Mapping li cas
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# 돔 Mapping របៀបកំណត់ (v2)

_**ចំណាំសំខាន់៖ អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

មុខងារដ៏មានឥទ្ធិពលបំផុតមួយនៃ network ប្រភេទ premium គឺសមត្ថភាពក្នុងការផ្តល់ឱកាសដល់អតិថិជនរបស់យើងក្នុងការភ្ជាប់ domain ជាន់ខ្ពស់ (top-level domain) ទៅនឹងគេហទំព័ររបស់ពួកគេ។ បន្ទាប់មក តើមួយណាមើលទៅអាជីពជាង៖ [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ឬ [_**joesbikeshop.com**_](http://joesbikeshop.com)? នោះហើយជាមូលហេតុដែល Ultimate Multisite មានមុខងារនេះភ្ជាប់មកជាមួយរួចហើយ ដោយមិនបាច់ប្រើ plugin ពីភាគីទីបីទេ។

## Domain mapping គឺជាអ្វី?

ដូចឈ្មោះរបស់វាដែរ domain mapping គឺជារបៀបដែល Ultimate Multisite អនុញ្ញាតឱ្យអ្នកទទួលសំណើសម្រាប់ custom domain ហើយភ្ជាប់សំណើនោះទៅនឹងគេហទំព័រដែលត្រូវគ្នានៅក្នុង network ដោយភ្ជាប់ domain នោះជាប់ជាមួយ។

### របៀបកំណត់រចនាសម្ព័ន្ធ domain mapping នៅលើ Network Ultimate Multisite របស់អ្នក

Domain mapping ទាមទារការកំណត់មួយចំនួនពីអ្នកដើម្បីឱ្យវាដំណើរការបាន។ ជាសំណាងល្អ Ultimate Multisite បានធ្វើការងារលំបាកទាំងនេះដោយស្វ័យប្រវត្តិសម្រាប់អ្នក ដើម្បីឱ្យអ្នកអាចបំពេញតាមតម្រូវការបានយ៉ាងងាយស្រួល។

ក្នុងអំឡុងពេលដំឡើង Ultimate Multisite ឧបករណ៍ណែនាំ (wizard) នឹងចម្លង និងដំឡើង **sunrise.php** ទៅកាន់โฟลเดอร์ដែលបានកំណត់ដោយស្វ័យប្រវត្តិ។ **ឧបករណ៍ណែនាំនឹងមិនអនុញ្ញាតឱ្យអ្នកបន្តដំណើរការទេ រហូតទាល់តែជំហាននេះត្រូវបានបញ្ចប់**។

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

នេះមានន័យថា នៅពេលដែលឧបករណ៍ណែនាំដំឡើង Ultimate Multisite បានបញ្ចប់ការរៀបចំ network របស់អ្នកហើយ អ្នកអាចចាប់ផ្តើម mapping custom domain បានភ្លាមៗ។

សូមចំណាំថា domain mapping នៅក្នុង Ultimate Multisite មិនមែនជាកាតព្វកិច្ចទេ។ អ្នកមានជម្រើសក្នុងការប្រើប្រាស់មុខងារ native domain mapping របស់ WordPress Multisite ឬដំណោះស្រាយ domain mapping ផ្សេងទៀត។

ຖ້າເຈົ້າຕ້ອງການປິດການ map ຂອງ Ultimate Multisite domain ເພື່ອໃຫ້ສາມາດໃຊ້ວິທີການ map ອື່ນໆໄດ້, ເຈົ້າສາມາດປິດຄ່າສະເໜີນີ້ໄດ້ຢູ່ທີ່ **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

ໃຕ້ທາງເລືອກນີ້, ເຈົ້າຈະເຫັນຕົວເລືອກ **Force Admin Redirect** ຢູ່ອີກໜຶ່ງ. ຕົວເລືອກນີ້ຊ່ວຍໃຫ້ເຈົ້າຄວບຄຸມໄດ້ວ່າລູກຄ້າຂອງເຈົ້າຈະສາມາດເຂົ້າເຖິງ admin dashboard ໄດ້ທັງໃນ custom domain ແລະ subdomain ຫຼື ເຂົ້າເຖິງໄດ້ພຽງແຕ່ໜຶ່ງເທົ່ານັ້ນ.

ຖ້າເຈົ້າເລືອກ **Force redirect to mapped domain** (ບັງຄັບປ່ຽນໄປຫາ domain ທີ່ map ແລ້ວ), ລູກຄ້າຂອງເຈົ້າຈະສາມາດເຂົ້າເຖິງ admin dashboard ໄດ້ສະເພາະໃນ custom domains ຂອງເຂົາເຈົ້າເທົ່ານັ້ນ.

ຕົວເລືອກ **Force redirect to network domain** (ບັງຄັບປ່ຽນໄປຫາ network domain) ຈະເຮັດຜິດທຸກຢ່າງກົງກັນຂ້າມ - ລູກຄ້າຂອງເຈົ້າຈະຖືກອະນຸຍາດໃຫ້ເຂົ້າເຖິງ dashboard ໄດ້ສະເພາະໃນ subdomain, ເຖິງແມ່ນວ່າເຂົາເຈົ້າຈະພະຍາຍາມເຂົ້າສູ່ລະບົບໃນ custom domains ກໍຕາມ.

ແລະ ຕົວເລືອກ **Allow access to the admin by both mapped domain domain and network domain** (ອະນຸຍາດໃຫ້ເຂົ້າເຖິງ admin ໂດຍໃຊ້ທັງ mapped domain ແລະ network domain) ອະນຸຍາດໃຫ້ເຂົາເຈົ້າເຂົ້າເຖິງ admin dashboard ໄດ້ທັງໃນ subdomain ແລະ custom domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

ມີສອງວິທີໃນການ map custom domain. ອັນທໍາອິດແມ່ນການ map ຊື່ domain ຈາກ network admin dashboard ເປັນ super admin ແລະ ອັນທີສອງແມ່ນຜ່ານ subsite admin dashboard ຢູ່ໜ້າ account.

ແຕ່ກ່ອນທີ່ເຈົ້າຈະເລີ່ມ map custom domain ໄປໃສ່ subsites ໃນ network ຂອງເຈົ້າ, ເຈົ້າຕ້ອງເຮັດໃຫ້ແນ່ໃຈວ່າ **DNS settings** ຂອງຊື່ domain ນັ້ນຖືກຕັ້ງຄ່າຢ່າງຖືກຕ້ອງແລ້ວ.

###

### ການເຮັດໃຫ້ແນ່ໃຈວ່າ DNS settings ຂອງ domain ຖືກຕັ້ງຄ່າຢ່າງເໝາະສົມ

Kuvaum neej tsoomjiam ua hauv txhua yam uas yuav tsim. Yuav tsim tsuumjiam ti domain uas koj yuav tsim ua li kuvaum (map) yuav tsoomjiam rau IP address ntawm Network koj. Tsis txhob tsoomjiam ti koj xav tsoomjiam IP address ntawm custom domain uas koj yuav tsim ua li kuvaum. Koj yuav tsoomjiam IP address ntawm domain uas Ultimate Multisite tsoomjiam, heev. Hauv qhov uas koj xav khoom IP address ntawm ib domain, peb saib tias yuav tsoomjiam rau [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), heev.

Ua tsim domain ua kuvaum zoo, koj yuav tsoomjiam **A RECORD** hauv koj **DNS** configuration uas tsoomjiam rau IP address ntawd. DNS management yuav teeb meem heev txawm mus rau domain registrar tshiab txhua yam, tab sis muaj tutorials noob online uas tsoomjiam ti koj xav " _Creating A Record on XXXX_ " (ex.: " _Creating A Record on_ _GoDaddy_ ").

Yog ti koj xav khoom txawv hauv kev ua nws zoo, **tsaig rau support ntawm koj domain registrar** thiab lawv yuav tuaj yeem pab koj hauv qhov no.

Yog koj xav tsim kom tus neeg uas koj thov (clients) yuav tsim kuvaum (map) domain txhais los, lawv yuav tsum ua haujlwm ntawm qhov no txhais los. Yog ti law yuav tsis paub txog kev tsim A Record, koj yuav tsoomjiam rau support system ntawm law registrar.

### Tsim custom domain name ua Super Admin

Thaum koj log in tuaj yeem ua Super Admin hauv Network koj, koj yuav tsum ua thiab teb siab custom domain names zoo heev los ntawm kev mus rau **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Հայտարարության տակ, դու կարող ես վերևում գտնվող **Add Domain** կոճակը սեղմել և դա բացի մոդալ պատուհան, որտեղ դու կարող ես սահմանել և լրացնել **custom domain name** (հարմար տիրույթի անուն), **the subsite** (ենթամշակումը), որին ցանկանում ես կիրառել custom domain-ը, և որոշել, թե արդյոք ուզում ես այն սահմանել որպես **primary domain** (հիմնական տիրույթ)։ (հիշի՛ր, դու կարող ես միանգամից մի ենթամշակման համար կապել **մի քանի custom domain name**):

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Բոլոր տեղեկությունները լրացնելուց հետո, դու կարող ես սեղմել ներքևում գտնվող **Add Existing Domain** կոճակը։

Սա կսկսի custom domain-ի DNS տեղեկատվությունը ստուգելու և հավաքելու գործընթացը։ Դու նաև կտեսնես էջի ներքևում լոգ (log), որպեսզի հետևես այն գործընթացին, որով այն անցնում է։ Այս գործընթացը կարող մի քանի րոպե տևել։

Ultimate Multisite v2.13.0-ը ավտոմատ ստեղծում է ներքին domain record-ը, երբ նոր site է ստեղծվում հոստինի վրա, որը պետք է համարվի per-site domain։ Եթե հոստինը դառնում է ցանցի հիմնական domain-ը կամ **Site URL** դաշտում կազմա միացված checkout-form base domain-ներից մեկը, ապա ավտոմատ կապված mapped-domain record-ը բաց թողնվում է, որպեսզի համատեղ հիմնական domainը մնա հասանելի յուրաքանչյուր site-ի համար, որը այն օգտագործում է։

**Stage** կամ կարգավիճակը պետք է փոխվի **Checking DNS** (DNS ստուգվում է) վիճակից **Ready** (Պատրաստ է), եթե ամեն ինչ ճիշտ է սահմանված։

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Եթե կտեսնես domain name-ը, դու կարող ես տեսնել մի քանի տարբերակներ դրա ներսում։ Եկեք արագ նայենք դրանց։

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** ຕອນນີ້ແມ່ນສະຖານະທີ່ໂດເມນ (domain) ຢູ່. ເມື່ອເຈົ້າເພີ່ມໂດເມນໃໝ່, ມັນອາດຈະຢູ່ໃນສະຖານະ **Checking DNS**. ຂັ້ນຕອນນີ້ຈະກວດສອບຂໍ້ມູນ DNS ແລະ ຢືນຢັນວ່າຖືກຕ້ອງແລ້ວ. ຈາກນັ້ນ, ໂດເມນຈະຖືກຍົກໄປຢູ່ສະຖານະ **Checking SSL**. Ultimate Multisite ຈະກວດເບິ່ງວ່າໂດເມນມີ SSL ຫຼື ບໍ່ ແລະ ຈັດປະເພດໂດເມນຂອງເຈົ້າເປັນ **Ready** (ພ້ອມໃຊ້) ຫຼື **Ready (without SSL)** (ພ້ອມໃຊ້ໂດຍບໍ່ມີ SSL).

**Site:** ແມ່ນ subdomain (ຊື່ຍ່ອຍ) ທີ່ກ່ຽວຂ້ອງກັບໂດເມນນີ້. ໂດເມນທີ່ຖືກแมັບ (mapped domain) ຈະສະແດງເນື້ອໃນຂອງໄຊທ໌ (site) ສະເພາະນີ້.

**Active:** ເຈົ້າສາມາດເປີດ ຫຼື ປິດຕົວເລືອກນີ້ເພື່ອເປີດໃຊ້ ຫຼື ປິດການໃຊ້ໂດເມນໄດ້.

**Is Primary Domain?:** ລູກຄ້າຂອງເຈົ້າສາມາດມີໂດເມນທີ່ຖືກแมັບຫຼາຍກວ່າໜຶ່ງອັນສຳລັບໄຊທ໌ແຕ່ລະໄຊທ໌. ໃຊ້ຕົວເລືອກນີ້ເພື່ອເລືອກວ່າອັນໃດແມ່ນໂດເມນຫຼັກ (primary domain) ສຳລັບໄຊທ໌ສະເພາະນັ້ນ.

**Is Secure?:** ເຖິງແມ່ນວ່າ Ultimate Multisite ຈະກວດສອບວ່າໂດເມນມີ SSL certificate ຫຼື ບໍ່ກ່ອນທີ່ຈະເປີດໃຊ້, ແຕ່ເຈົ້າສາມາດເລືອກດ້ວຍຕົນເອງເພື່ອໂຫຼດໂດເມນທີ່ມີຫຼືບໍ່ມີ SSL. ສັງເກດໄວ້ວ່າຖ້າເວັບໄຊທ໌ບໍ່ມີ SSL certificate ແລະ ເຈົ້າພະຍາຍາມບັງຄັບໃຫ້ມັນໂຫຼດດ້ວຍ SSL, ມັນອາດຈະເຮັດໃຫ້ເກີດຂໍ້ຜິດພາດໄດ້.

### ການแมັບ custom domain name ເປັນ Subsite user

ຜູ້ບໍລິຫານ subsite ກໍສາມາດแมັບ custom domain names ຈາກ dashboard ຂອງ subsite admin ຂອງເຂົາເຈົ້າໄດ້ຄືກັນ.

ກ່ອນອື່ນ, ເຈົ້າຕ້ອງເຮັດໃຫ້ແນ່ໃຈວ່າເຈົ້າໄດ້ເປີດໃຊ້ຕົວເລືອກນີ້ພາຍໃຕ້ການຕັ້ງຄ່າ **Domain mapping**. ເບິ່ງຮູບພາບຂ້າງລຸ່ມນີ້.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

ເຈົ້າກໍສາມາດຕັ້ງຄ່າ ຫຼື ຈັດການຕົວເລືອກນີ້ພາຍໃຕ້ລະດັບ **Plan** ຫຼື product options ໃນໜ້າ **Ultimate Multisite > Products** ໄດ້ເຊັ່ນກັນ.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Thaum tsiin hauv tsiin hmoj chu, thloi ua rau muaj tsiin tsis tsiin hmoj (option) loj chu, thiab muaj tus neeg uas yog subsite user yuav tsum pa txhawb domain custom names. Tus subsite user yuav tsum tsim cov metabox hauv peevau **Account** page, uas yog **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Tus neeg yuav tsum thov **Add Domain** button, thiab nws yuav muaj modal window raug tsim cov lus qhia.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Thaum ntawd, tus neeg yuav thov **Next Step** thiab ua rau nws los tsim domain custom name. Tus yuav muaj kev txiav tlay ti nws yog primary domain lossis tsis yog.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Thov **Add Domain** yuav rau hauv kev tsim cov lus qhia DNS information ntawm custom domain lossis ua rau nws.

### Txoj kev txhawb txog Domain Syncing

Domain Syncing yog ib qho loj tau uas Ultimate Multisite yuav tsum hais lub domain custom name rau lub hosting account zoo li ib lub add-on domain **tso cai rau lub domain mapping thiaj ua raws**.

Domain syncing yuav ua raws los thaum koj tus provider hosting muaj integration rau Ultimate Multisite domain mapping feature. Tsis tas muaj integration txhua tus, tab sis heev yog _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ thiab _Cpanel._

Thaum integration ntawm lub host-provider zoo, Ultimate Multisite yuav tsum hais cov task rau DNS lossis subdomain creation cho tus sites uas tsim los. Hej siab tsis muaj integration thov task ntawd, tab sis background job yuav tsis tau los ntawm kev ua noj (no-op queue entries) kom tsis muaj. Cov DNS thiab SSL checks rau cov domain mapping lossis yog txhua tus ua raws li lub process domain uas zoo.

Kuvau yuav tsoom jaug hauv txhua settings ntawm Ultimate Multisite ntawd hauv tab **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Loj siab heev tias yog tias koj hosting provider tsis yog ib tug neeg uas tau muaj hauv ntawd, **koj yuav tsum tsim domain name (domain name) txawm rau koj tài khoản hosting**._
