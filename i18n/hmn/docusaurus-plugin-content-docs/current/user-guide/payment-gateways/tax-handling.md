---
title: Txhawm txais tax
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# ការគ្រប់គ្រងពន្ធ (Tax Handling)

Ultimate Multisite មាន module សម្រាប់ប្រមូលពន្ធដែលត្រូវបានបង្កើតចូលក្នុង plugin មេរបស់យើងរួចហើយ។ ដូច្នេះ បើអ្នកត្រូវការប្រមូលពន្ធលក់លើផែនការ (plans), កញ្ចប់ (packages) និងសេវាកម្មរបស់អ្នក អ្នកអាចធ្វើវាបានយ៉ាងងាយស្រួលដោយមិនចាំបាច់ដំឡើង add-ons ផ្សេងទៀតទេ។

សម្រាប់ក្រុមហ៊ុនដែលស្ថិតនៅក្នុងអឺរ៉ុប យើងមាន **add-on** ដែលបន្ថែមឧបករណ៍ និងមុខងារដើម្បីជួយ **គាំទ្រការអនុលោមតាម VAT** (Value Added Tax) បានកាន់តែប្រសើរ។

Ultimate Multisite មិនបានដាក់ពន្ធ ឬបញ្ជូនពន្ធជំនួសអ្នកទៅរដ្ឋាភិបាលទេ យើងគ្រាន់តែជួយអ្នកប្រមូលពន្ធសមស្របនៅពេលមានប្រតិបត្តិការប៉ុណ្ណោះ។ **អ្នកនៅតែត្រូវបង់ពន្ធដោយខ្លួនឯង។**

## ការបើកដំណើរការការប្រមូលពន្ធ (Enabling Tax Collection)

ការប្រមូលពន្ធមិនត្រូវបានបើកដំណើរការជាលំនាំដើមទេ។ ដើម្បីបើកវា អ្នកត្រូវចូលទៅកាន់ **Ultimate Multisite > Settings > Taxes** ហើយប្ដូរ toggle ទៅបើកការកំណត់ Enable Taxes។

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

នេះគឺជាទិដ្ឋភាពពេញលេញនៃទំព័រការកំណត់ពន្ធ៖

![Tax settings full page](/img/config/settings-taxes-full.png)

អ្នកក៏អាចមើលការកំណត់ពន្ធសម្រាប់ផលិតផលនីមួយៗបានដែរ៖

![Tax settings for products](/img/config/settings-taxes.png)

### ពន្ធមិនរាប់បញ្ចូល vs. ពន្ធរាប់បញ្ចូល (Tax excluded vs. Tax included)

ជាលំនាំដើម តម្លៃផលិតផលទាំងអស់របស់អ្នកគឺ **មិនរាប់បញ្ចូលពន្ធ** ដែលមានន័យថា ពន្ធ **មិនត្រូវបានដាក់បញ្ចូល** ក្នុងតម្លៃផលិតផលនោះទេ។ ប្រសិនបើពួកយើងកំណត់ថាអតិថិជនគួរតែបង់ពន្ធលើការទិញជាក់លាក់មួយ យើងនឹងបន្ថែមពន្ធ **បន្ថែមពីលើ** ចំនួនទឹកប្រាក់ក្រោម (subtotal)។

ប្រសិនបើអ្នកចង់ឱ្យពន្ធត្រូវបានរាប់បញ្ចូលក្នុងតម្លៃផលិតផលរបស់អ្នក អ្នកអាចធ្វើបានដោយបើកដំណើរការការកំណត់ **Inclusive Tax**។

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

កុំភ្លេច **រក្សាទុក (save)** ការផ្លាស់ប្ដូរដែលអ្នកបានធ្វើ។

###

## ការបង្កើតអត្រាពន្ធ (Creating Tax Rates)

បន្ទាប់ពីអ្នកបើកដំណើរការ Tax Collection រួច អ្នកនឹងត្រូវបង្កើតអត្រាពន្ធសម្រាប់ទីតាំងជាក់លាក់ ដោយប្រើ tax rates editor របស់យើង។

ታክስ ደረጃን ፈልግ (Manage Tax Rates) button-টো sidebar-ilt Tax settings page-ilt ፈልгээ.

![Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Tax rates editor page-ilt, **Add new Row** button-টো ፈልгээ.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

እያንዳንዱ tax rate-ኢ **title** (ለinvoice-ilt ፈልጋል) ፈልግ። ከዚያም የትኛው ሀገር (አስፈላጊ ነው), የክልል እና ከተማ (ሁለቱም አማራጭ ናቸው) ይህ ታክስ የሚከፈለው ቦታ መሆኑን ይምረጡ። በመጨረሻም **tax rate in percents**-ን ይጨምሩ።

### Tax Categories

የተለያዩ ምርቶች ለተለያዩ tax rates እንዲኖራቸው ብዙ Tax Categories መፍጠር ይችላሉ።

**Add new Tax Category**-ን ፈልግ፣ ከዚያ የcategory ስሙን ይጻፉ እና **Create**-ን ይጫኑ።

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

የcategory creation modal ውስጥ የTax Category Name input field-ን ፈልግ።

为了 categories-ን ለማየት, **Switch**-ን ፈልግ እና አዲስ ታክስ ለመጨመር የሚፈልጉትን category ይምረጡ።

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

የሚገኙ categories-ን የሚያሳየውን Tax category selector dropdown ፈልግ።

ለ특정 ምርት የTax Category-ን ለመያዝ, ወደ **Product edit page** በመሄድ ከዚያ ወደ Taxes tab ይሂዱ።

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

በዚያው ስክሪን ላይ, Ultimate Multisite ለዚያ ምርት ታክስ መሰብሰብ እንደሌለበት እንዲያውቅ **Is Taxable?** toggle-ን መጥፋት ይችላሉ።

## የയورو VAT ድጋፍ (European VAT Support)

כמו שאנציא קודם צעמד, биел байгаа add-on (תוספת) ווייזות (customer) שרענן מאירופה (EU) וואס האבן דעם דריטער נוסף ווייל европей VAT רעגולערן (VAT regulations).

דער VAT טولز פילן קל אויס צוויי wichtיגע זאכן:

  * קל לטעען איבער די EU VAT רעטן;

  * זיך נויט פון VAT Number איצטקענען און פירשן (validation) - און reverse charging פאר אדערשטענטער וואס איז נישט קל פון VAT (ווי לעצטע קאָמפּאַניעס מיט gültige VAT Numbers);

צו אינסטאלירן דעם add-on, גיי צו **Ultimate Multisite > Settings** און דאן קליק אויף די לינק אין דער sidebar וואס איז גערופן "Check our Add-ons".

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

דער וועלד וועט זיך רעדירקטירט צו דער לעשן פון אינעם add-onס פאג. דאן קען איר סערכן פון **Ultimate Multisite VAT add-on** און אינסטאלירן עס.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

דערשטיי, גיי צו **Network Admin > Plugins** און אקטיבירן דעם add-on פון די נטवर्क (network-wide).

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

אויב איר גיי צוריק צו דער **Tax Settings tab**, וועסט קענען זען נייע Option's וואס זענען פאפארן. טוגל די Option "Enable VAT Support" און אויסצטellen די נייע VAT טولز. נישט פארגעסן צו **save** די אידענטער!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Pulling on VAT Tax Rates

איין פון די טولز וואס דער integration זוגט איז די מעגלעכקייט צו טטענען די tax rates פאר EU member states. דאס קען מאכן דורך זיך גייען צו דער page פון tax rates editor נאך אקטיבירטן EU VAT support.

ታችኛው ገጽမှာ VAT (Value Added Tax) ດຶງມາເອົາເລືອກတဲ့ ທາງເລືອກເຫັນໄດ້. ເລືອກປະເພດອັດຕາສ່ວນ ແລະ ກົດປຸ່ມ **Update EU VAT Rates** ແລ້ວ, ຕາຕະລາງທີ່ມີອັດຕາພາສີຂອງແຕ່ລະປະເທດໃນສະມາຊິກ EU ຈະលេចຂຶ້ນມາ ແລະ ຕື່ມຂໍ້ມູນໃຫ້ໂດຍອັດຕະໂນມັດ. ຈາກນັ້ນ, ເຈົ້າພຽງແຕ່ບັນທຶກມັນໃສ່ໄດ້ເລີຍ.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

ເຈົ້າສາມາດແກ້ໄຂຄ່າຫຼັງຈາກດຶງຂໍ້ມູນມາແລ້ວໄດ້ເດີ. ເພື່ອເຮັດແບບນັ້ນ, ພຽງແຕ່ແກ້ໄຂແຖວຕາຕະລາງທີ່ເຈົ້າຕ້ອງການ ແລ້ວກົດເພື່ອບັນທຶກຄ່າໃໝ່.

### VAT Validation (ການກວດສອບ VAT)

ເມື່ອເປີດໃຊ້ VAT support ແລ້ວ, Ultimate Multisite ຈະເພີ່ມຟິລ໌ເພີ່ມເຕີມເຂົ້າໃນແບບຟອມ checkout, ຢູ່ໃຕ້ຟິລ໌ທີ່ຢູ່ບิล (billing address field). ຟິລ໌ນີ້ຈະສະແດງຂຶ້ນສະເພາະສຳລັບລູກຄ້າທີ່ຢູ່ໃນ EU ເທົ່ານັ້ນ.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite ຈະກວດສອບ VAT Number ແລະ ຖ້າມັນເປັນຄ່າທີ່ຖືກຕ້ອງ, ກົນໄກ reverse charge (ການປ່ຽນພາສີກັບ) ຈະຖືກນຳໃຊ້ ແລະ ອັດຕາພາສີຈະຖືກຕັ້ງເປັນ 0% ໃນ ഓർเดอร์ນັ້ນ.
