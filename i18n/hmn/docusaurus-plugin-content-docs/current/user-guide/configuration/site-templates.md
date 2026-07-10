---
title: Tsem tsiab tsoom
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2) {#site-templates-v2}

_**NOTE: This article refers to Ultimate Multisite version 2.x. If you are using version 1.x,**_ **see this article** _**.**_

Thaob hmo ua hauv khiab chuul nrog Ultimate Multisite, peb tsis txhob ua kev txiav tlay txhua yam, thiab muaj qhov uas yuav tsum tsis txhob txhob rau peb cov neeg uas xav tsim cov wuv (websites) hauv peb network. Qhov tseem ceeb heev yog tias peb muaj kev hloov tshiab thiab muaj qhov uas peb cov neeg yuav thov txhawm tsis txhob txhob rau tsim cov wuv. Ib qho kev loj zoo tshaj hauv kev ua li ntawd yog siv kuv feature Ultimate Multisite Site Templates.

## Site Template yog dab neeg? {#what-is-a-site-template}

Thaog uas peb hloov leej twg, Site Template yog ib qho wuv (boilerplate) site uas yuav tiv thaiv los tsim cov wuv tshiab hauv peb network.

No ceeb tias koj yuav tsum tsim ib qho wuv tiv thaiv, thov plugin tshiab, teb theme ua haujlwm, thiab customize nws tsis txhob txhob rau koj xav li cas los yog tsim. Thaum ntawd, thaum tus neeg uas yuav tsim account tsim tshiab tsim, tias tsis txhob mus tau WordPress site uas tsis muaj qhov tseeb hauv nws, tias lawv yuav tau tau ib qho kop (copy) ntawm koj wuv tiv thaiv uas muaj txhua customization thiab txhua yam uas peb tsim los.

Qhov ntawd zoo heev heev, tab sis kuv yuav tsum ua li cas los tsim site template tshiab? Qhov ntawd tseem tsis muaj qhia txawm.

## Tsim thiab Ua lawm Site Template tshiab {#creating-and-editing-a-new-site-template}

Site Templates yog ib qho wuv (site) baib yim hauv peb network. Hauv pe, koj yuav tsum mus rau **Network Admin > Ultimate Multisite > Sites > Add Site** uas yog los tsim template tshiab.

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Qhov no yuav ua rau muaj modal window uas yuav hais tias koj xav **Site title, Site Domain/path,** thiab **Site type**. Hauv lub field **Site Type** drop-down ntawd, kaya tsis txhob txhob rau koj thov tau **Site Template** *.*

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Koj tseem yuav muaj lub han hloov (description) uas tus neeg xav tsim yuav paub ti template ntawd muaj yam xws li cas:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Form-tsh uaj tsis txhob tsis txhob, tam yuav paub **Copy Site** toggle switch ha ib rub. Yuav tuav siv nws los tsim site template shuas ob site template uas tus kaiv tsim siab los tsim site template tshiab, uas yuav los tsim sijhawm loog tam thov tsim site template tshiab tus.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Tsim siab ha cov ntaub (Contents) ntawm Site Template {#customizing-the-contents-of-a-site-template}

Ua tsim siab site template zoo li cas, yuav tsis txhob ua li cas, yuav tsuas tsim lub dashboard panel ntawm nws thiab ua raws li yam u xav. Yuav tsim posts tshiab, pages, activate plugins, thiab ua ib tshiab theme. Thaum ntawd, koj tseem tuaj yeem mus rau Customizer thiab thov cov khoom tsim siab zoo li txhua yam.

![Site template edit interface](/img/config/site-template-edit.png)

Cov ntaub no yuav tsis txhob tsis txhob, thaum tus neeg u tsim site tshiab los ntawm Site Template ntawd.

### Cov kev tsim siab tshaj (Advanced Options) {#advanced-options}

Thaum koj paub txog kev tsim siab tsis txhob zoo ib yam, koj yuav tuaj yeem siv Search and Replace API ntawm peb los tsim cov ntaub tshiab hauv site tshiab thaum nws tsim los. Yuav muaj utlạp rau qhov chaw sib txawv li tsim lub ntsiab lus zoo li tsim lub ntsiab lus ntawm tus neeg u siv hauv About page, tsim lub email contact hauv Contact page, txhua yam.

### Siv Site Templates {#using-site-templates}

Ok, koj tsim site template no ntau loj ntau ntau nrog cov desain, themes thiab settings tshiab. Kuv yuav ua li cas los yog siv nws hauv peb network tamah?

Tsis txhob tsis txhob, yuav muaj dua raws li qhov uas koj tuaj yeem siv (tshiab tsis tsim hmoov):

  * Tshawb Site Template ib yam rau txhua Plan ntawm koj.

**LOSS**

  * Tso cai rau tus neeg u thov site templates txog tias nws xav los ua haujlwm thaum nws yuav rooj.

#### Mode 1: Assign Site Template {#mode-1-assign-site-template}

ໃນໂໝດນີ້, ລູກຄ້າຂອງເຈົ້າຈະບໍ່ສາມາດເລືອກ template ເມື່ອເຂົາເຈົ້າສ້າງບັນຊີໄດ້, ແຕ່ເປັນເຈົ້າທີ່ຈະຕ້ອງກຳນົດວ່າ template ໃດຄວນຖືກໃຊ້ກັບແຜນ (Plan) ໃດໜຶ່ງ.

ເພື່ອເຮັດແບບນັ້ນ, ເຈົ້າຈະຕ້ອງເຂົ້າໄປທີ່ **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

ສິ່ງນີ້ຈະພາເຈົ້າໄປຫາໜ້າ **Edit Product**. ພາຍໃຕ້ສ່ວນ **Product Options**, ຊອກຫາ tab **Site template** ແລ້ວເລືອກຕົວເລືອກ **Assign Site Template** ຈາກ drop-down field. ສິ່ງນີ້ຈະສະແດງລາຍການຂອງ site templates ທີ່ມີຢູ່ ແລະ ເຈົ້າສາມາດເລືອກໄດ້ພຽງ template site template ດຽວທີ່ສຸມໃສ່ຜະລິດຕະພັນນັ້ນໆເທົ່ານັ້ນ.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: ເລືອກ Site Template ທີ່ມີຢູ່ {#mode-2-choose-available-site-template}

ໃນໂໝດນີ້, ເຈົ້າຈະໃຫ້ທາງເລືອກກັບລູກຄ້າໃນຂະນະທີ່ເຂົາເຈົ້າກຳລັງลงทะเบียน (sign-up). ເຂົາເຈົ້າຈະສາມາດເລືອກໄດ້ຈາກ site templates ແຕກຕ່າງກັນທີ່ເຈົ້າໄດ້ກຳນົດໄວ້ພາຍໃຕ້ການตั้งค่าຜະລິດຕະພັນ. ເຈົ້າຈະມີທາງເລືອກທີ່ຈະຈຳກັດ template site template ທີ່ເຂົາເຈົ້າສາມາດເລືອກໄດ້ພາຍໃຕ້ product ທີ່ຖືກເລືອກ. ສິ່ງນີ້ຈະຊ່ວຍໃຫ້ເຈົ້າສາມາດມີ set ຂອງ site templates ແຕກຕ່າງກັນພາຍໃຕ້ຜະລິດຕະພັນແຕ່ລະອັນ, ເຊິ່ງເໝາະສົມກັບການເນັ້ນໜັກເຖິງຟັງຊັນ ແລະ ຄຸນສົມບັດທີ່ແຕກຕ່າງກັນສຳລັບ product ທີ່ມີລາຄາສູງກວ່າ.

Haav tsis tas.

Tha koj thiaj mus rau **Edit Product** (Edit Product) page. Under section **Product Options**, hauv tab **Site template** thiab thov tau siv option **Choose Available Site Template** los ntawm drop-down field. Qhov no yuav ua rau muaj list ntawm site templates uas muaj, thiab nws yuav choj koj txhawm siab siv site template uas koj xav tias muaj. Koj yuav ua li no los ntawm kev thov tau qhov chaw: **Available** (Muaj) heev ib yam los yog koj xav tias site template ntawd yuav mus txwar hauv list, **Not Available** (Tsis Muaj) heev ib yam los yog koj xav tias site template ntawd tsis muaj hom ua option, thiab **Pre-selected** (Muaj Tsis Muaj) heev ib yam los yog koj xav tias qhov uas muaj hauv list yuav muaj los ua default.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Site template selection on the Checkout form {#default-mode-site-template-selection-on-the-checkout-form}

Yog koj xav txhua site templates muaj los ntawm registration, lossis koj tsis xav ua khoom ntxiv hauv txhua product uas koj tsim. Yog li ntawd, koj yuav tso qhov chaw site template selection ib yam los ntawm **Checkout Form** (Checkout Form) ntawm koj. Los yog siv qhov no: mus rau **Ultimate Multisite > Checkout Forms** thiab thov tau click **Edit** hauv form uas koj xav tias yuav ua li.

Qhov no yuav ua rau muaj page **Edit Checkout Form**. Haiv qhov chaw **Template Selection** (Template Selection) thiab thov tau click **Edit** hauv nws.

Modal window ib yam yuav tsim los. Under field **Template Sites**, koj yuav tuaj yeem xav thiab list txhua site templates uas koj xav tias muaj los ntawm registration. Site templates uas koj tso los ntawm no yuav muaj los hauv ob ob ob, lossis tsis muaj lossis tsis muaj txawm li kuv tsim qhov product.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Thaum muaj rau frontend (frontend), tus neeg uas raug checkout yuav hloov site template choj hauv chaw checkout thiab yuav tso tau design musuat los ntawm txhua site tshiab.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### ຕາໜ່າງແບບເວັບໄຊ (Site Template Options) {#site-template-options}

ມີຟັງຊັນຕາໜ່າງເວັບໄຊ ອື່ນໆທີ່ເຈົ້າສາມາດເປີດ ຫຼື បិទបានក្រោមការកំណត់ຂອງ Ultimate Multisite។

![site template options in Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### ປ່ອຍឱ្យប្តូរ Template (Allow Template Switching) {#allow-template-switching}

បើកជម្រើសនេះនឹងអនុញ្ញាតឱ្យអតិថិជនរបស់អ្នកអាចប្តូរ Template ដែលពួកគេជ្រើសរើសក្នុងអំឡុងពេលចុះឈ្មោះ បន្ទាប់ពីគណនី និងເວັບໄຊត្រូវបានបង្កើតរួច។ វារឿងល្អសម្រាប់អតិថិជនព្រោះវាអនុញ្ញាតឱ្យពួកគេជ្រើសរើស Template ម្ដងទៀត ប្រសិនបើក្រោយមកពួកគេដឹងថាជម្រើសដើមមិនសមស្របនឹងតម្រូវការជាក់លាក់របស់ពួកគេទេ។

#### អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ប្រើ Site របស់ពួកគេជា template (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

ដោយសារតែអ្នកប្រើប្រាស់ subsite បានចំណាយពេលបង្កើត និងរចនាគេហទំព័ររបស់ពួកគេផ្ទាល់ ពួកគេអាចចង់ប្លុក (clone) ហើយប្រើវាជា Template មួយក្នុងចំណោម Template ដែលមាននៅពេលបង្កើត subsite ថ្មីនៅលើបណ្តាញរបស់អ្នក។ ជម្រើសនេះនឹងអនុញ្ញាតឱ្យពួកគេសម្រេចបាននូវរឿងនោះ។

#### ចម្លង Media នៅពេលធ្វើការបិទបាំង Template (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

ការធីកជម្រើសនេះនឹងចម្លង media ដែលបានបង្ហោះនៅលើ site template ទៅកាន់ site ដែលបង្កើតថ្មី។ រឿងនេះអាចត្រូវបាន Override (ផ្លាស់ប្តូរ) នៅលើផែនការនីមួយៗ។

#### **ការពារ Search Engines មិនឱ្យធ្វើ Index Site Templates** (Prevent Search Engines from indexing Site Templates) {#prevent-search-engines-from-indexing-site-templates}

Site templates ដែលបានពិភាក្សានៅក្នុងអត្ថបទនេះ គឺជា boilerplate ប៉ុន្តែវានៅតែជាផ្នែកមួយនៃបណ្តាញរបស់អ្នក ដែលមានន័យថាវាអាចរកឃើញដោយ search engines បាន។ ជម្រើសនេះនឹងអនុញ្ញាតឱ្យអ្នកលាក់ site templates ដើម្បីឱ្យ search engines អាចធ្វើ Index ពួកវាបាន។

## ការបំពេញ Site Templates ដោយស្វ័យប្រវត្តិជាមួយនឹង auto search-and-replace {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite-a cej tsis muaj qhuas uej tsoom loj nrog qhuas uej, kuvj, thiab cov ntaub ntawv uas yuav tsum hauv registration form. Kuv sau ntaub ntawv no mus ua li, peb tuaj yeem siv nws los pre-populate cov ntaub ntawv hauv yam tsv raws li template uas tau txiav txim siab. Thaum tab tom muaj site tshiab ua online, Ultimate Multisite yuav thej txhua placeholder (tsoom) mus rau cov ntaub ntawv uas tau teb los thaum registration.

Tsis tas, thov zoo li koj xav tau lub koom hauv qhov chaw uas muaj registration thiab txhua koom hauv homepage. Rau template site homepage cua koj yuav tsum duns cov placeholder, loj li sawv hauv image no (tsaom cov placeholder yuav tsum hauv double curly braces - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Thaum ntawd, koj tuaj yeem tsim cov field registration uas hociazione rau checkout form cua koj los ntawm kev qhuas ntaub ntawv ntawd. Editor checkout form uas ua li hauv template selection yuav tsim cov field tshiab hauv lub koom hauv template chooser:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Cov neeg cua koj yuav tuaj yeem qhuas ntaub ntawv ntawd thaum tab tom muaj registration.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite yuav thej txhua placeholder mus rau cov ntaub ntawv uas neeg cua koj tsoom los.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Tsim cov "template muaj placeholder noj" zoo li cas? {#solving-the-template-full-of-placeholders-problem}

Txhua yam no zoo heev, tab sis peb mus tau txog ib qho teeb meem uas tsis zoo: template site cua peb - uas neeg cua koj yuav rov los mus tsoom - muaj cov placeholder noj uas tsis hlub thiab tsis muaj yam uas hlub.

Txh州 rau hauv neeg ntawd, peb muaj opsio ua giá trị fawb (fake values) rau mga placeholder, thiab peb siv tias tawm ntawd los htsiab thiab thay cov ntsiab lus ntawm template sites no thaum tus neeg tso cai tham.

Kuv yuav pom editor ntawm template placeholders tau txais los ntawm kev mus rau **Ultimate Multisite > Settings > Sites**, thiab hauv sidebar, thov klik rau link **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

No yuav ua koj mus rau editor ntawm cov ntsiab lus (placeholders), tau txais los tsim thiab cov ntsiab lus ntawd.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
