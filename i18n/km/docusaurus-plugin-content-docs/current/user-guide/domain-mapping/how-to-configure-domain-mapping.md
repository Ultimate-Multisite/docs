---
title: របៀបកំណត់ការបិទភ្ជាប់ដែន
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# របៀបកំណត់ការបំប្លែងដែន (v2)

_**ចំណាំសំខាន់៖ អត្ថបទនេះសំដៅលើ Ultimate Multisite version 2.x។**_

មុខងារដ៏មានឥទ្ធិពលបំផុតមួយនៃបណ្តាញពិសេសគឺសមត្ថភាពក្នុងការផ្តល់ឱកាសដល់អតិថិជនរបស់យើងក្នុងការភ្ជាប់ដែនកម្រិតកំពូល (top-level domain) ទៅកាន់គេហទំព័ររបស់ពួកគេ។ បន្ទាប់មក តើអ្វីដែលមើលទៅប្រណីតជាង៖ [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ឬ [_**joesbikeshop.com**_](http://joesbikeshop.com)? នោះហើយជាមូលហេតុដែល Ultimate Multisite មានមុខងារនេះភ្ជាប់មកជាមួយរួចហើយ ដោយមិនចាំបាច់ប្រើ plugin ពីភាគីទីបី។

## ការបំប្លែងដែន (domain mapping) ជាអ្វី?

ដូចឈ្មោះរបស់វាបានបង្ហាញ ការបំប្លែងដែន គឺជាសមត្ថភាពដែល Ultimate Multisite ផ្តល់ឱ្យ ដើម្បីទទួលយកសំណើសម្រាប់ដែនផ្ទាល់ខ្លួន (custom domain) ហើយភ្ជាប់សំណើនោះទៅនឹងគេហទំព័រដែលត្រូវគ្នានៅក្នុងបណ្តាញ ដោយភ្ជាប់ជាមួយដែនជាក់លាក់នោះ។

### របៀបកំណត់ការបំប្លែងដែននៅលើបណ្តាញ Ultimate Multisite របស់អ្នក

ការបំប្លែងដែនទាមទារឱ្យមានការកំណត់មួយចំនួនពីខាងអ្នកដើម្បីដំណើរការបាន។ ជាសំណាងល្អ Ultimate Multisite បានធ្វើស្វ័យប្រវត្តិសម្រាប់កិច្ចការលំបាកនេះ ដើម្បីឱ្យអ្នកអាចបំពេញតាមតម្រូវការបានយ៉ាងងាយស្រួល។

ក្នុងអំឡុងពេលដំឡើង Ultimate Multisite ឧបករណ៍ណែនាំ (wizard) នឹងចម្លង និងដំឡើង **sunrise.php** ដោយស្វ័យប្រវត្តិទៅកាន់โฟลเดอร์ដែលបានកំណត់។ **ឧបករណ៍ណែនាំនឹងមិនអនុញ្ញាតឱ្យអ្នកបន្តដំណើរការទេ រហូតទាល់តែជំហាននេះត្រូវបានបញ្ចប់**។

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

នេះមានន័យថា នៅពេលដែលឧបករណ៍ណែនាំដំឡើង Ultimate Multisite បានបញ្ចប់ការរៀបចំបណ្តាញរបស់អ្នករួចហើយ អ្នកអាចចាប់ផ្តើមបំប្លែងដែនផ្ទាល់ខ្លួនបានភ្លាមៗ។

សូមចំណាំថា ការបំប្លែងដែននៅក្នុង Ultimate Multisite មិនមែនជាកាតព្វកិច្ចទេ។ អ្នកមានជម្រើសក្នុងការប្រើមុខងារការបំប្លែងដែនដើមរបស់ WordPress Multisite ឬដំណោះស្រាយការបំប្លែងដែនផ្សេងទៀត។

តើអ្នកត្រូវបិទការបំប្លែងឈ្មោះដែន (domain mapping) របស់ Ultimate Multisite ដើម្បីបើកផ្លូវឱ្យដំណោះស្រាយការបំប្លែងដែនផ្សេងទៀតដែរឬទេ? អ្នកអាចបិទមុខងារនេះបានក្រោម **Ultimate Multisite > Settings > Domain Mapping**។

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

នៅខាងក្រោមជម្រើសនេះ អ្នកក៏អាចឃើញជម្រើស **Force Admin Redirect** (បង្ខំការបំប្លែងអ្នកគ្រប់គ្រង) ផងដែរ។ ជម្រើសនេះអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងថា តើអតិថិជនរបស់អ្នកនឹងអាចចូលទៅកាន់แดชบอร์ดអ្នកគ្រប់គ្រងរបស់ពួកគេបានទាំងនៅលើដែនផ្ទាល់ខ្លួន (custom domain) និង subdomain ឬត្រឹមតែមួយក្នុងចំណោមនោះប៉ុណ្ណោះ។

ប្រសិនបើអ្នកជ្រើសរើស **Force redirect to mapped domain** (បង្ខំការបំប្លែងទៅដែនដែលបានកំណត់), អតិថិជនរបស់អ្នកនឹងអាចចូលទៅកាន់แดชบอร์ดអ្នកគ្រប់គ្រងរបស់ពួកគេបានតែនៅលើដែនផ្ទាល់ខ្លួនប៉ុណ្ណោះ។

ជម្រើស **Force redirect to network domain** (បង្ខំការបំប្លែងទៅដែនបណ្តាញ) នឹងធ្វើអ្វីដែលផ្ទុយគ្នាទាំងស្រុង - អតិថិជនរបស់អ្នកនឹងត្រូវបានអនុញ្ញាតឱ្យចូលប្រើแดชบอร์ดរបស់ពួកគេតែនៅលើ subdomain ប៉ុណ្ណោះ ទោះបីជាព្យាយាមចូលប្រើនៅលើដែនផ្ទាល់ខ្លួនក៏ដោយ។

ហើយជម្រើស **Allow access to the admin by both mapped domain domain and network domain** (អនុញ្ញាតឱ្យចូលប្រើអ្នកគ្រប់គ្រងដោយដែនដែលបានកំណត់ និងដែនបណ្តាញ) អនុញ្ញាតឱ្យពួកគេចូលទៅកាន់แดชบอร์ดអ្នកគ្រប់គ្រងរបស់ពួកគេទាំងនៅលើ subdomain និងដែនផ្ទាល់ខ្លួន។

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

មានវិធីពីរយ៉ាងដើម្បីបំប្លែងដែនផ្ទាល់ខ្លួន (custom domain)។ ទីមួយគឺការបំប្លែងឈ្មោះដែនពីแดชบอร์ดអ្នកគ្រប់គ្រងបណ្តាញរបស់អ្នកជា super admin ហើយទីពីរគឺតាមរយៈแดชบอร์ด subsite admin នៅក្រោមទំព័រ account។

ប៉ុន្តែមុននឹងចាប់ផ្តើមបំប្លែងដែនផ្ទាល់ខ្លួនទៅកាន់ subsites ណាមួយនៅក្នុងបណ្តាញរបស់អ្នក អ្នកត្រូវប្រាកដថា **DNS settings** (ការកំណត់ DNS) របស់ឈ្មោះដែនត្រូវបានកំណត់ត្រឹមត្រូវជាមុនសិន។

### ការធ្វើឱ្យប្រាកដថាការកំណត់ DNS របស់ដែនត្រូវបានកំណត់ត្រឹមត្រូវ

ដើម្បីឱ្យការធ្វើแมป (mapping) ដំណើរការ អ្នកต้องแน่ใจว่าโดเมนที่คุณวางแผนจะทำแมปนั้นชี้ไปยัง IP address ของเครือข่ายของคุณ โปรดจำไว้ว่าคุณต้องการ Network IP address - นั่นคือ IP address ของโดเมนที่ติดตั้ง Ultimate Multisite ไว้ ไม่ใช่ IP address ของโดเมนที่กำหนดเอง (custom domain) ที่คุณต้องการทำแมป

สำหรับการค้นหา IP address ของโดเมนเฉพาะเจาะจง เราแนะนำให้ไปที่ [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) ជាឧទាហរណ៍។

ដើម្បីធ្វើแมปโดเมนได้อย่างถูกต้อง คุณต้องเพิ่ม **A RECORD** នៅក្នុងការកំណត់ **DNS** ของคุณให้ชี้ไปยัง **IP address** នោះ การគ្រប់គ្រង DNS មានភាពខុសគ្នាខ្លាំងរវាងអ្នកចុះឈ្មោះដែន (domain registrars) ផ្សេងៗគ្នា ប៉ុន្តែមានមេរៀនជាច្រើននៅលើអ៊ីនធឺណិតដែលនិយាយអំពីបញ្ហានេះ ប្រសិនបើអ្នកស្វែងរក " _Creating A Record on XXXX_ " ដោយ XXXX គឺជាអ្នកចុះឈ្មោះដែនរបស់អ្នក (ឧទាហរណ៍: " _Creating A Record on_ _GoDaddy_ ")។

ប្រសិនបើអ្នកជួបအခက်အခဲក្នុងការធ្វើឱ្យវាកើតឡើង អ្នកត្រូវ **ទាក់ទងក្រុមការគាំទ្ររបស់អ្នកចុះឈ្មោះដែន** ហើយពួកគេនឹងអាចជួយអ្នកបានចំពោះផ្នែកនេះ។

ប្រសិនបើអ្នកគ្រោងអនុញ្ញាតឱ្យអតិថិជនរបស់អ្នកធ្វើแมปโดเมนរបស់ពួកគេដោយខ្លួនឯង ពួកគេនឹងត្រូវធ្វើការងារផ្នែកនេះដោយខ្លួនឯង។ សូមណែនាំពួកគេទៅកាន់ប្រព័ន្ធជំនួយការចុះឈ្មោះដែនរបស់ពួកគេ ប្រសិនបើពួកគេមិនអាចបង្កើត A Record បាន។

### ការធ្វើแมปឈ្មោះโดเมนផ្ទាល់ខ្លួនជា Super Admin

នៅពេលអ្នកចូលក្នុងតួនាទី super admin លើเครือข่ายរបស់អ្នក អ្នកអាចបន្ថែម និងគ្រប់គ្រងឈ្មោះโดเมนផ្ទាល់ខ្លួនបានយ៉ាងងាយស្រួល ដោយចូលទៅកាន់ **Ultimate Multisite > Domains**។

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

នៅខាងក្រោមหน้านี้ អ្នកអាចចុចปุ่ม **Add Domain** (បន្ថែមโดเมน) ที่ด้านบน ซึ่งจะเปิดหน้าต่าง modal ขึ้นมาให้คุณสามารถตั้งค่าและกรอกข้อมูล **custom domain name** (ชื่อโดเมนที่กำหนดเอง), **the subsite** (เว็บไซต์ย่อย) ที่คุณต้องการใช้ชื่อโดเมนที่กำหนดเองนั้น และตัดสินใจว่าจะตั้งเป็น **primary domain** (โดเมนหลัก) หรือไม่ (โปรดทราบว่าคุณสามารถแมป **multiple domain names to one subsite** (หลายชื่อโดเมนไปยังเว็บไซต์ย่อยเดียว) ได้ด้วยนะ)

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

หลังจากใส่ข้อมูลทั้งหมดแล้ว คุณสามารถคลิกปุ่ม **Add Existing Domain** (เพิ่มโดเมนที่มีอยู่) ที่ด้านล่างได้เลย

ขั้นตอนนี้จะเริ่มกระบวนการตรวจสอบและดึงข้อมูล DNS ของ custom domain คุณจะเห็น log ที่ด้านล่างของหน้าเพื่อติดตามขั้นตอนที่กำลังดำเนินการอยู่ กระบวนการนี้อาจใช้เวลาสักครู่จึงจะเสร็จสมบูรณ์

Ultimate Multisite v2.13.0 ยังสร้าง record โดเมนภายในโดยอัตโนมัติเมื่อมีการสร้างไซต์ใหม่บนโฮสต์ที่ควรถูกจัดการเป็นโดเมนต่อไซต์ (per-site domain) หากโฮสต์นั้นเป็นโดเมนหลักของเครือข่าย หรือเป็นหนึ่งในโดเมนพื้นฐานของฟอร์ม checkout ที่ตั้งค่าไว้ในช่อง **Site URL** (URL ของไซต์) การบันทึก mapped-domain อัตโนมัติจะถูกข้ามไป เพื่อให้โดเมนพื้นฐานที่ใช้ร่วมกันยังคงพร้อมใช้งานสำหรับทุกไซต์ที่ใช้งานมัน

สถานะ **Stage** หรือสถานะควรเปลี่ยนจาก **Checking DNS** (กำลังตรวจสอบ DNS) เป็น **Ready** (พร้อมใช้งาน) หากทุกอย่างตั้งค่าถูกต้องแล้ว

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

หากคุณคลิกที่ชื่อโดเมน คุณจะสามารถดูตัวเลือกบางอย่างภายในนั้นได้ ลองมาดูตัวเลือกเหล่านั้นกันเร็วๆ นะ:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** នេះគឺជាដំណាក់កាលដែលដែន (domain) ស្ថិតនៅ។ នៅពេលអ្នកបន្ថែមដែនដំបូង វាទំនងជាស្ថិតនៅក្នុងដំណាក់កាល **Checking DNS**។ ដំណើរការនេះនឹងពិនិត្យមើលធាតុ DNS និងបញ្ជាក់ថាវាត្រឹមត្រូវឬអត់។ បន្ទាប់មក ដែននោះនឹងត្រូវបានដាក់នៅដំណាក់កាល **Checking SSL**។ Ultimate Multisite នឹងពិនិត្យមើលថាតើដែននោះមាន SSL ឬអត់ ហើយនឹងចាត់ថ្នាក់ដែនរបស់អ្នកជា **Ready** ឬ **Ready (without SSL)**។

**Site:** វាគឺជា subdomain ដែលភ្ជាប់ជាមួយដែននេះ។ ដែនដែលបានកំណត់ (mapped domain) នឹងបង្ហាញខ្លឹមសារនៃគេហទំព័រជាក់លាក់នេះ។

**Active:** អ្នកអាចបើក ឬបិទជម្រើសនេះដើម្បីធ្វើឱ្យដែននោះដំណើរការ ឬមិនដំណើរការបាន។

**Is Primary Domain?:** អតិថិជនរបស់អ្នកអាចមានដែនដែលបានកំណត់ច្រើនជាងមួយសម្រាប់គេហទំព័រនីមួយៗ។ សូមប្រើជម្រើសនេះដើម្បីជ្រើសរើសថា តើនេះជាដែនចម្បង (primary domain) សម្រាប់គេហទំព័រជាក់លាក់នោះឬទេ។

**Is Secure?:** ទោះបីជា Ultimate Multisite ពិនិត្យមើលថាតើដែននោះមានវិញ្ញាបនបត្រ SSL ឬអត់ មុនពេលបើកវាបានក៏ដោយ អ្នកអាចជ្រើសរើសដោយដៃដើម្បីផ្ទុកដែនដោយមាន ឬគ្មានវិញ្ញាបនបត្រ SSL។ សូមចំណាំថា ប្រសិនបើគេហទំព័រមិនមានវិញ្ញាបនបត្រ SSL ហើយអ្នកព្យាយាមបង្ខំឱ្យផ្ទុកវាជាមួយ SSL វាអាចនឹងផ្តល់កំហុសដល់អ្នក។

### ការកំណត់ឈ្មោះដែនផ្ទាល់ខ្លួនជា Subsite user

អ្នកគ្រប់គ្រង subsite ក៏អាចកំណត់ឈ្មោះដែនផ្ទាល់ខ្លួនពីแดชบอร์ดអ្នកគ្រប់គ្រង subsite របស់ពួកគេបានដែរ។

ដំបូង អ្នកត្រូវប្រាកដថាអ្នកបានបើកជម្រើសនេះនៅក្រោមការកំណត់ **Domain mapping**។ សូមមើលរូបតំណាងខាងក្រោម។

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

អ្នកក៏អាចកំណត់ ឬរៀបចំជម្រើសនេះនៅក្រោមថ្នាក់ **Plan** ឬជម្រើសផលិតផលនៅលើ **Ultimate Multisite > Products** ផងដែរ។

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

នៅពេលដែលអ្នកបើកជម្រើសណាមួយ ហើយអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ subsite អាចកំណត់ឈ្មោះដែនផ្ទាល់ខ្លួន (custom domain names) អ្នកប្រើប្រាស់ subsite នឹងឃើញ metabox មួយនៅក្រោមទំព័រ **Account** ដែលមានឈ្មោះថា **Domains**។

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

អ្នកប្រើប្រាស់អាចចុចប៊ូតុង **Add Domain** ហើយវានឹងបង្ហាញ cửa sổ modal មួយដែលមានការណែនាំខ្លះៗ។

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

បន្ទាប់មក អ្នកប្រើប្រាស់អាចចុច **Next Step** ដើម្បីបន្តបន្ថែមឈ្មោះដែនផ្ទាល់ខ្លួន។ ពួកគេក៏អាចជ្រើសរើសបានថាតើនេះនឹងជាដែនចម្បង (primary domain) ឬអត់។

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

ការចុចលើ **Add Domain** នឹងចាប់ផ្តើមដំណើរការនៃការផ្ទៀងផ្ទាត់ និងការទាញយកព័ត៌មាន DNS នៃឈ្មោះដែនផ្ទាល់ខ្លួន។

### អំពី Domain Syncing

Domain Syncing គឺជាដំណើរការមួយដែល Ultimate Multisite បន្ថែមឈ្មោះដែនផ្ទាល់ខ្លួនរបស់អ្នកទៅក្នុងគណនី hosting របស់អ្នកជា add-on domain **ដើម្បីឱ្យការបិទភ្ជាប់ដែន (domain mapping) ដំណើរការបាន**។

Domain syncing នឹងកើតឡើងដោយស្វ័យប្រវត្តិ ប្រសិនបើអ្នកផ្តល់សេវា hosting របស់អ្នកមានការរួមបញ្ចូលជាមួយមុខងារ domain mapping របស់ Ultimate Multisite។ បច្ចុប្បន្ន អ្នកផ្តល់សេវា hosting ទាំងនេះគឺ _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ និង _Cpanel_។

នៅពេលដែលការរួមបញ្ចូលជាមួយអ្នកផ្តល់សេវា hosting ត្រូវបានបើក Ultimate Multisite ក៏អាចដាក់ task ការបង្កើត DNS ឬ subdomain សម្រាប់គេហទំព័រដែលបានបង្កើតថ្មីដោយ provider ផងដែរ។ ប្រសិនបើគ្មានការរួមបញ្ចូលណាមួយកំពុងស្តាប់ task នោះទេ background job នឹងត្រូវបានលុបចោលដើម្បីជៀសវាងការមាន entries នៅលើ no-op queue។ ការពិនិត្យ DNS និង SSL សម្រាប់ដែនដែលបានកំណត់ទៅដំណើរការបន្តតាមដំណើរការ domain-stage បែបធម្មតា។

អ្នកត្រូវបើកការតភ្ជាប់ (integration) នេះនៅក្នុងការកំណត់ Ultimate Multisite នៅក្រោមផ្ទាំង **Integration**។

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_ចំណាំ៖ ប្រសិនបើអ្នកផ្តល់សេវាបង្ហោះ (hosting provider) របស់អ្នកមិនមែនជាអ្នកដែលបានរៀបរាប់ខាងលើទេ អ្នកនឹងត្រូវធ្វើការซิงค์ (sync) ឬបន្ថែមឈ្មោះដែន (domain name) ដោយដៃទៅក្នុងគណនីបង្ហោះរបស់អ្នក។_
