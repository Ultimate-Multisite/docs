---
title: Tsim hauv qauv tsim hauv qauv pib nrhiav txhais tau
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# ຕັ້ງຄ່າຜະລິດຕະພັນສະໝັກສະມາຊິກທໍາອິດຂອງທ່ານ (v2)

_**ຂໍ້ສັງເກດສຳຄັນ: ບົດຄວາມນີ້ແມ່ນສຳລັບຜູ້ໃຊ້ Ultimate Multisite ເພື່ອໃຊ້ເວີຊັນ 2.x ເທົ່ານັ້ນ. ຖ້າທ່ານກຳລັງໃຊ້ເວີຊັນ 1.x,**_ **_ເບິ່ງບົດຄວາມນີ້ເລີຍ**_।

ເພື່ອເລີ່ມຕົ້ນໃຫ້ເຄືອຂ່າຍຂອງທ່ານເຮັດວຽກ ແລະ ເລີ່ມຂາຍບໍລິການໃຫ້ຜູ້ໃຊ້ທີ່ມີທ່າແຮງ, ທ່ານຕ້ອງການມີຕົວເລືອກການສະໝັກສະມາຊິກທີ່ແຕກຕ່າງກັນ. ທ່ານສ້າງຜະລິດຕະພັນເຫຼົ່ານີ້ໄດ້ແນວໃດ? ຜະລິດຕະພັນປະເພດໃດທີ່ທ່ານສາມາດສະເໜີໄດ້? ໃນບົດຄວາມນີ້, ພວກເຮົາຈະກວມເອົາທຸກຢ່າງທີ່ທ່ານຄວນຮູ້ກ່ຽວກັບຜະລິດຕະພັນ.

## ປະເພດຜະລິດຕະພັນ (Product Type)

ດ້ວຍ Ultimate Multisite, ທ່ານສາມາດສະເໜີຜະລິດຕະພັນສອງປະເພດໃຫ້ລູກຄ້າຂອງທ່ານ: **plans** (ແຜນການ) ແລະ **add-ons** (Order Bump). Add-ons ສາມາດແບ່ງອອກເປັນສອງປະເພດຄື: **packages** (ຊຸດ) ແລະ **services** (ບໍລິການ). ຕໍ່ໄປນີ້ພວກເຮົາຈະເບິ່ງຄວາມແຕກຕ່າງ ແລະ ຈຸດເດັ່ນຂອງພວກມັນ.

  * **Plans**: ແມ່ນຜະລິດຕະພັນພື້ນຖານຂອງ Ultimate Multisite. ລູກຄ້າຂອງທ່ານສາມາດມີສະມາຊິກໄດ້ເມື່ອມັນຖືກຜູກກັບແຜນການໃດໜຶ່ງ. ແຜນການຈະໃຫ້ເວັບໄຊທ໌ໜຶ່ງ ຫຼື ຫຼາຍເວັບໄຊທ໌ (ຂຶ້ນຢູ່ກັບການຕັ້ງຄ່າຂອງແຜນການຂອງທ່ານ) ພ້ອມກັບຂໍ້ຈຳກັດທີ່ທ່ານໄດ້ຕັ້ງໄວ້ໃນໜ້າຕ່າງການແຕ່ງງານຜະລິດຕະພັນຂອງທ່ານ.

  * **Packages**: ແມ່ນ add-ons ທີ່ສົ່ງຜົນກະທົບໂດຍກົງຕໍ່ການເຮັດວຽກຂອງ Ultimate Multisite plans. ມັນຈະປ່ຽນຂໍ້ຈຳກັດ ຫຼື ເພີ່ມຊັບພະຍາກອນ, plugin ຫຼື theme ໃໝ່ເຂົ້າໃນແຜນການເດີມທີ່ລູກຄ້າຂອງທ່ານໄດ້ຊື້ໄວ້. ຕົວຢ່າງເຊັ່ນ: ແຜນການພື້ນຖານອາດຈະອະນຸຍາດໃຫ້ມີການເຂົ້າເຖິງ (visits) 1,000 ຄັ້ງຕໍ່ເດືອນ ແລະ ທ່ານສາມາດເຮັດໃຫ້ມີ package ທີ່ຂະຫຍາຍຈຳນວນນີ້ເປັນ 10,000 ຄັ້ງໄດ້.

  * **Services**: ແມ່ນ add-ons ທີ່ບໍ່ປ່ຽນແປງການເຮັດວຽກຂອງ Ultimate Multisite. ມັນແມ່ນໜ້າທີ່ (tasks) ທີ່ທ່ານຈະເຮັດໃຫ້ລູກຄ້າຂອງທ່ານເພີ່ມເຕີມຈາກແຜນການທີ່ເຂົາເຈົ້າຊື້ໄວ້. ຕົວຢ່າງເຊັ່ນ: ລູກຄ້າຂອງທ່ານອາດຈະຊື້ແຜນການທີ່ອະນຸຍາດໃຫ້ມີເວັບໄຊທ໌ດຽວ ແລະ ຈ່າຍເງິນເພີ່ມສຳລັບບໍລິການເສີມທີ່ຈະເຮັດການອອກແບບເວັບໄຊທ໌ນີ້.

## ການຈັດການຜະລິດຕະພັນ (Managing Products)

ብዙသူတွေအတွက် Ultimate Multisite-nii **Products** tab (Ultimate Multisite > Products) нь ердийн хостинг орчинд байгаа төлөвлөгөөс адил юм.

Ultimate Multisite доторх Products tab нь тухайн бүтээгдэхүүн эсвэл үйлчилгээнд хамаарах бүтэц болон хязгаарлалтыг тодорхойлно. Энэхүү бүтэц нь бүтээгдэхүүний тайлбар, үнэ, татвар, эрхийн зэрэгтэй холбоотой байдаг.

Энэ хэсэг нь Ultimate Multisite-ийн энэхүү чухал суурь ойлголтыг тань ойлгоход туслана.

![Products list page](/img/config/products-list.png)

## Бүтээгдэхүүн нэмэх (Adding Products)

Төлөвлөгөө, багц эсвэл үйлчилгээ нь шинэ зүйлийг тодорхойлох орох цэг бол **Ultimate Multisite > Products > Add Product**-аар хийгддэг.

![Add Product button](/img/config/product-add-button.png)

Интерфейст хоёр гол хэсэг байна. Зүүн талд нь бүтээгдэхүүнийг тодорхойлохэд туслах хэд хэдэн tab байгаа бөгөөс баруун талд нь бүтээгдэхүүний үндсэн үнэ, түүний идэвхтэй төлөв, болон бүтээгдэхүүний зураг зэргийг тодорхойлох хэсгүүд байдаг.

![Product edit page overview](/img/config/product-edit-full.png)

### Тайлалбар (Description)

Үндсэн бүтээгдэхүүний мэдээллийг бүтээгдэхүүний нэр болон тайлбарыг оруулснаар тодорхойлно. Эдгээр дугаарлалт нь төлөвлөгөө ба үнийн сонголт, инвойс, шинэчлэлт зэрэг бүтээгдэхүүний мэдээлэл шаардлагатай бүх газраар харагдана.

![Product description section](/img/config/product-description.png)

### Үнийн төрөл (Pricing Type)

Интерфейсийн баруун талд үндсэн үнийг тодорхойлно.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite нь гурван өөр үнийн төрлийг дэмждэг. **paid** (өлөх) сонголт нь сүлжээний администраторууд руу бүтээгдэхүүний үнэ болон төлбөрийн давтамжийн талаар мэдээлэл асууна.

### Үнэ (Pricing)

Үнэ гэсэн хэсэг нь үндсэн бүтээгдэхүүний үнэ болон төлбөрийн хугацааг тодорхойлно.

![Pricing and save section](/img/config/product-pricing-save.png)

म्हणून, $29.99 ဈေးနှုန်းနဲ့ 1 महिना嘅 සැකစ케 있으면, प्रत्येक महिना $29.99 ယူမယ်။ അതുപോലെ, $89.97 ဈေးနှုန်းနဲ့ 3 महिना嘅 සැකစ케 있으면, ప్రతి quý (quarter) 每 quý嗰 အတိုင်း ပေးရမယ်။

### Billing Cycles

Billing cycles section က အထက်ပါ billing interval ရဲ့ မည်မျှကြာကြာပေးရမလဲဆိုတာကို သတ်မှတ်ပေးထားပြီး၊ ဒါဟာ contract တွေ ဒါမှမဟုတ် fixed term တွေနဲ့ ဆိုင်တဲ့ အရာဖြစ်လို့ နားလည်ဖို့ လွယ်ပါတယ်။

![Pricing and save section](/img/config/product-pricing-save.png)

ဥပမာအနေနဲ့၊ product price က $29.99 နဲ့ interval က ၁ လပြီး billing cycle ၁၂ ခုရှိရင်၊ နောက်ထပ် ၁၂ လတာကာလအတွက် ဒီ product ကို တစ်လကို $29.99 ပေးရမှာ ဖြစ်ပါတယ်။ ဆိုလိုတာက၊ ဒီ setting ဟာ ၁၂ လအတွက် တစ်လละ $29.99 ဈေးနှုန်း သတ်မှတ်ပြီး အဲဒီနောက်မှာတော့ billing ရပ်သွားပါလိမ့်မယ်။

### Trial Period

offer trial toggle ကို ဖွင့်လိုက်ရင် network administrator က product အတွက် စမ်းသပ်ကာလ (trial period) ကို သတ်မှတ်နိုင်ပါတယ်။

![Pricing and save section](/img/config/product-pricing-save.png)

ဒီစမ်းသပ်ကာလအတွင်းမှာ customer တွေဟာ product ကို အခမဲ့ အသုံးပြုလို့ရပြီး စမ်းသပ်ကာလ မကုန်မသွားတဲ့အထိ ဘယ်တော့မှ billing မလုပ်ပါဘူး။

### Setup Fee

သင့်ရဲ့ plan အတွက် setup fee ကိုလည်း သတ်မှတ်နိုင်ပါတယ်။

![Pricing and save section](/img/config/product-pricing-save.png)

ဒါဆိုရင် သင့် client ဟာ ပထမဆုံး ငွေပေးတဲ့အခါ (price plan အပြင်) ဒီ section မှာ သင်သတ်မှတ်ထားတဲ့ fee နဲ့ ကိုက်ညီတဲ့ ထပ်ဖြည့်ငွေကို ပေးရမှာ ဖြစ်ပါတယ်။

### Active

active toggle က product ဟာ customer တွေအတွက် အသစ်စာရင်းသွင်းဖို့ ရရှိနိုင်မလားဆိုတာကို ထိရောက်စွာ သတ်မှတ်ပေးပါတယ်။

![Active toggle](/img/config/product-active.png)

ຖ້າມີລູກຄ້າຢູ່ແລ້ວໃນແຜນນີ້ ການຕັ້ງຄ່າ toggle ໃຫ້ເປັນ state disabled (ປິດ) ກໍໝາຍຄວາມວ່າທ່ານໄດ້ເອົາແຜນນັ້ນອອກຈາກການຈ່າຍເງິນໃສ່ການສະໝັກໃໝ່ໆແລ້ວ. **ລູກຄ້າທີ່ມີຢູ່ແລ້ວໃນແຜນນີ້ ຈະຖືກຄິດໄລ່ເງິນຕໍ່ໄປ** ຈົນກວ່າພວກເຂົາຈະຖືກຍົກລະດັບໄປໃຊ້ແຜນໃໝ່ ຫຼື ຖືກເອົາອອກຈາກແຜນ.

### ຮູບພາບຜະລິດຕະພັນ (Product Image)

ປຸ່ມ **Upload Image** ຊ່ວຍໃຫ້ຜູ້ບໍລິຫານເຄືອຂ່າຍສາມາດໃຊ້ media library ເພື່ອເລືອກ ຫຼື ອັບໂຫຼດຮູບຂອງຜະລິດຕະພັນໄດ້.

![Product image section](/img/config/product-image.png)

### ລຶບ (Delete)

ປຸ່ມ **Delete Product** ຈະລຶບຜະລິດຕະພັນອອກຈາກລະບົບ. ມັນຈະສະແດງຂຶ້ນເມື່ອຜະລິດຕະພັນຖືກເຜີຍແຜ່ແລ້ວ.

![Delete product section](/img/config/product-delete.png)

ບໍ່ຄືກັບການລຶບອື່ນໆ, ຜະລິດຕະພັນນີ້ຈະບໍ່ຖືກເອົາໄປໄວ້ໃນ state trash (ຖັງຂີ້ເຫຍື້ອ). ດັ່ງນັ້ນ ເມື່ອລຶບແລ້ວ ການກະທຳນັ້ນແມ່ນບໍ່ສາມາດກັບມາໄດ້ອີກ.

### ຕົວເລືອກຜະລິດຕະພັນ (Product Options)

ເມື່ອຂໍ້ມູນພື້ນຖານຂອງຜະລິດຕະພັນຖືກກຳນົດແລ້ວ, product options ຈະຊ່ວຍໃຫ້ຜູ້ບໍລິຫານເຄືອຂ່າຍສາມາດກຳນົດຄຸນສົມບັດສະເພາະຂອງຜະລິດຕະພັນໄດ້ຫຼາຍຂຶ້ນ.

#### ທົ່ວໄປ (General)

แท็บ **General** ແມ່ນໃຊ້ເພື່ອ ກຳນົດຄຸນສົມບັດທົ່ວໄປຂອງຜະລິດຕະພັນທີ່ບໍ່ສາມາດໃສ່ໃນແຖບສະເພາະຂອງຜະລິດຕະພັນອື່ນໆໄດ້.

![General tab](/img/config/product-general-tab.png)

**product slug** ທີ່ອະທິບາຍເອງນີ້ ແມ່ນສ່ວນທີ່ຈະໃຊ້ເພື່ອລະບຸຜະລິດຕະພັນໃນ URL ແລະ ພື້ນທີ່ອື່ນໆຂອງ Ultimate Multisite.

Ultimate Multisite ຮອງຮັບປະເພດຜະລິດຕະພັນຫຼາຍຢ່າງ ເຊັ່ນ: Plan, Package, ແລະ Service. แท็บ **Product Options** ຈະປ່ຽນແປງໄປຕາມປະເພດຜະລິດຕະພັນທີ່ເລືອກໄວ້.

**Customer Role** ແມ່ນລະບຸວ່າລູກຄ້າຈະໄດ້ຮັບບົດບາດ (role) ອັນໃດເມື່ອສ້າງເວັບໄຊທ໌. ໂດຍທົ່ວໄປ ສຳລັບຜູ້ບໍລິຫານເຄືອຂ່າຍສ່ວນໃຫຍ່, ນີ້ແມ່ນ default ຫຼື Administrator ຂອງ Ultimate Multisite. Default role ຂອງ Ultimate Multisite ສາມາດຕັ້ງຄ່າໄດ້ໃນ **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### ຍົກລະດັບຂຶ້ນ ແລະ ລົງ (Up & Downgrades)

ແຖບນີ້ຈະບອກວ່າລູກຄ້າສາມາດຍົກລະດັບ ຫຼື ລົງລະດັບໄດ້ແບບໃດໃນລະດັບຂອງເຂົາເຈົ້າ.

ເພື່ອເຂົ້າໃຈເລື່ອງນີ້, ເອົາຕົວຢ່າງຄື: ຖ້າການຕິດຕັ້ງ Ultimate Multisite ແບບສະເພາະ (niche) ນັ້ນໃຫ້ໂຊລູຊັນການຈັດການຮຽນຮູ້ແກ່ລູກຄ້າຂອງມັນ. ເພື່ອເຮັດໃຫ້ມີແຜນການສາມແບບ (Basic, Plus, ແລະ Premium), ພວກມັນຈະຖືກກຳນົດໄວ້ ແລະ ມີ plugin ສະເພາະທີ່ເປີດໃຊ້ງານສຳລັບແຕ່ລະແຜນ (ເບິ່ງຕໍ່ໄປໃນສ່ວນນີ້ເພື່ອຄູ່ມືວິທີເປີດໃຊ້ plugin).

ຖ້າການຕິດຕັ້ງ Ultimate Multisite ນັ້ນຍັງໃຫ້ບໍລິການເວັບໄຊທ໌ທຸລະກິດ ຫຼື ເວັບໄຊອີຄອມເມີຊ, ແຜນການເຫຼົ່ານີ້ອາດຈະຕ້ອງການ plugin ທີ່ແຕກຕ່າງກັນມາຕິດຕັ້ງ ແລະ ເປີດໃຊ້ງານ.

ໃນຂອບເຂດນີ້, ການປ່ອຍໃຫ້ລູກຄ້າ eLearning ປ່ຽນໄປເປັນແຜນ eCommerce ອາດຈະບໍ່ດີ ແລະ ມີບັນຫາ ເພາະວ່າແຜນການ, ລາຄາ, ແລະ ຂີດຈຳກັດຂອງມັນອາດຈະບໍ່ເໝາະສົມ.

ດັ່ງນັ້ນ, ເພື່ອຈຳກັດເສັ້ນທາງຂອງລູກຄ້າ ແລະ ປ້ອງກັນບັນຫາ, ຜູ້ບໍລິຫານເຄືອຂ່າຍສາມາດກຳນົດ plan group (ກຸ່ມແຜນ) ແລະ ໃນກຸ່ມນັ້ນລະບຸໄດ້ວ່າລູກຄ້າສາມາດຍົກໄປໃຊ້ແຜນໃດໄດ້.

![Up and Downgrades tab](/img/config/product-upgrades.png)

ເພື່ອ ກຳນົດ plan group, ໃຫ້ລະບຸແຜນທີ່ເຂົ້າກັນໄດ້ໃນລາຍການ **plan group**. **product order** (ລຳດັບຂອງຜະລິດຕະພັນ) ແມ່ນສິ່ງທີ່ຈະກຳນົດວ່າແຜນຕ່າງໆຈະຖືກຈັດລຽງ ແລະ ສະແດງອອກຈາກຕ່ຳສຸດໄປສູງສຸດ.

Ultimate Multisite ຍັງມີຟີເຈີ **order bump** ເຊິ່ງສາມາດເພີ່ມ product ຫຼື บริການທີ່ເໝາະສົມເຂົ້າກັບແຜນໄດ້. ສິ່ງເຫຼົ່ານີ້ຈະຖືກສະເໜີໃຫ້ລູກຄ້າເປັນລາຍການເພີ່ມເຕີມທີ່ສາມາດເພີ່ມເຂົ້າໃນແຜນໄດ້ເວລາຈ່າຍເງິນ (checkout) ຫຼື ໃນລະຫວ່າງການຍົກລະດັບ.

#### ຄວາມແຕກຕ່າງຂອງລາຄາ (Price Variations)

Price variations ལས་མཐུན་པའི་ཆ་ཚང་གི་ລາຄાઓ (Price Variations) ལ་བརྟེན་ནས་ ཁྱེད་ཀྱི་ network administrator ཚོས་དུས་ཚོད་འདིར་བརྟེན་ གཞན་དྲང་པོ་ཡོད་པའི་ລາຄའི་སྒྲིག་འཇོག་ (alternate pricing tiers) တွေကို သတ်မှတ်ཐུབ་པ་རེད། ད་ལྟ་བུ་འདི་གིས་ product གཅིག་ལ་ཚོང་མཁན་ཚོས་ ཚོང་རྒྱག་སྐབས་ ཚོང་རྒྱག་ཚར་བའི་དུས་ཚོད་ (monthly, quarterly, annual) སོགས་ ཡང་ན་གཞན་དྲང་པོ་ཡོད་པའི་ billing period རྣམས་ཀྱི་ཆ་ཚང་ལ་གནང་ཐུབ་པ་རེད། ຕົວຢ່າງအနေနဲ့ $29.99/လ ལུ་ product ཅིག་བཟོ་ནས་ ལོ་རིང་འདི་ $249.99/ལ ལུ་ discount ཡོད་པའི་ option ཞིག་བསྐྲུར་ཐུབ་པ་ཨིན།

![Price Variations tab](/img/config/product-price-variations-tab.png)

Price variations ཚུ་བཟོ་ནི་དོན་ལུ་ **Enable Price Variations** toggle འདི་ active ལ་བཏང་ནས་ **Add new Price Variation** button ལ་คลิก (click) flatiron。

![Product price variations](/img/config/product-price-variations.png)

Variation ཅིག་བསྐྱར་མི་ནིའི་དོན་ལུ་, duration (དུས་ཚོད་), period (ཚོར་བ་), དང་ variation གྱི་ລາຄ་འདི་ཚུ་ သတ်မှတ်ནི་འདི་ཨིན། Variation ཚུ་ཡང་ button ལ་ཡང་ click བཏང་ནས་བསྐྱར་མི་ཐབས་སུ་བཏང་ནི་ཚུགས་པའི་ product ཚུ་ལས་བཟོ་ཐུབ་ཅಿದೆ།

ຕົວຢ່າງအနေနဲ့, ཁྱེད་ཀྱི་ base product price འདི་ $29.99/လ ཡོད་པ་ལས་, ཁྱེད་ཚོས་འདི་ཚུ་བསྐྱར་མི་ཐབས་སུ་བཏང་ནི་ཚུགས་པའི་ option ཚུ་བཟོ་ཐུབ་ཅಿದೆ:

  * **3 Months** ལ་$79.99 (monthly ལས་ཆུང་ཀུ་ discount)
  * **1 Year** ལ་$249.99 (annual commitment ལུ་ 大 discount)

:::tip Frontend-ལུ་ Billing Period Toggle བསྟན་ནི་

Price variations ཚུ་གིས་ frontend checkout ལུ་ toggle ཡང་盘མ་འདྲ་བའི་ switch ཞིག་བཏང་མི་ཐུབ་པར་. Customer ཚོས་ billing period ཚུ་ (e.g. Monthly / Annual) བར་ལས་ switch བསྒྱུར་ནིའི་དོན་ལུ་, checkout form ལ་**Period Selection** field ཅིག་ ထည့်သွင်းདགོཔ་ཨིན། Step-by-step instructions ཚུ་ **Checkout Forms: Adding a Period Selection Toggle** ལས་བལྟ་རོགས།
:::

#### Taxes (སภาษ)

**Taxes** tab འདི་ Ultimate Multisite > Settings > Taxes ལུ་ သတ်မှတ်ထားတဲ့ tax settings དང་, དེ་ལས་གཞན་ ཚང་མའི་ tax rates དང་འབྲེལ་ཡོད། Tax ཚུ་ activate ເພື່ອ བཟོ་ནི་དང་, 適用 (applicable) tax rates ཚུ་ သတ်မှတ်ནིའི་དོན་ལུ་ **Ultimate Multisite: Settings** ལས་documentation ཚུ་བལྟ་རོགས།

![Taxes tab](/img/config/product-taxes.png)

Kuvj tsis tasawm, thav tsi kuvj ua raws (local tax rate) 7.25% uas rau customers hauv California (United States of America).

Yum tsoom tax rate-a **Ultimate Multisite > Settings > Manage Tax Rates**-tij, yuav tsoom tam sim product level-tij.

![Taxes tab](/img/config/product-taxes.png)

Product-a taxable item uas tsoom, set the **Is Taxable** toggle-a active-tij thiab select the applicable tax rate tob Tax Category dropdown.

#### Site Templates

Yog tsis tasawm, site templates yog lub WordPress website tam heev uas ua clone rau customer's site hauv chaw ua rau lawv mus subscription rov los.

![Site Templates tab](/img/config/product-site-templates.png)

Network administrator yuav ua thiab configure template site zoo li regular WordPress site loom cov theme, plugin, thiab content uas active thiab configured. Template site yog clone verbatim rau customer.

Tab no tsoom rau network administrator los qhia txog behavior ntawm site templates hauv lub sijhawm subscription tshiab. Ua siv site templates rau qhov plan no, set the **Allow Site Templates** toggle-a mus ua active state.

Thaum **Allow Site Templates** tsis active, customers hauv qhov plan tsis tuaj yeem txiav tixlub templates txhua tabom tias checkout form, shareable link, lossis URL parameter yuav ua rau templates zoo. Ultimate Multisite tsoom qhov no los ntawm fallback chain tam ob entry points uas muaj: plan settings yog tsoom mus, hauv checkout-form template settings, thiab pre-selected lossis URL-provided templates. Qhov no txais qhov chaw plan limits zoo thiab tsis txhob ua rau templates tsim rau cov product uas tsis txhob muaj lawv.

**site template selection mode** yog qhov uas tsoom qhov behavior ntawm site templates hauv lub sijhawm subscription.

**D** **Default** setting chuuaj tshoob chuuj tshoob chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj chuuj tshoob. If the network administrator has defined a template selection step in the checkout process and the step has been defined with templates this setting will honor the directives established in the checkout step.

**A** **Assign Site Template** chuuaj tshoob chuuaj site template chuuaj. This forces the selection of the specified template. Consequently, any template selection steps in the checkout process are removed.

Lastly, **C** **Choose Available Site Templates** overrides the templates specified in the checkout step with the templates selected in this setting. A pre-selected template can also be defined to aid the customer in selection.

Ultimately if the network administrator desires template selection to occur in the checkout steps the setting of ' _default_ ' will suffice. Alternatively to remove and lock template selection and delegate the selection to the plan settings the ' _assign new template_ ' or ' _choose available site templates_ ' options may be desirable.

#### Sites

The **Sites** tab chuuaj tshoob chuuj Ultimate Multisite's limitations functionality.

![Sites tab](/img/config/product-sites.png)

This setting specifies the maximum number of sites a customer can create under their membership.

To enable the limitation, set the **limit sites** toggle to its active state and specify the maximum number of sites in the **site allowance** field.

#### Visits

The **Visits** tab chuuaj tshoob chuuj Ultimate Multisite's limitations system. This setting allows for the accounting and subsequent throttling of unique visitors to a customer's site.

![Visits tab](/img/config/product-visits.png)

כמו שאתה חושב מבחינת שיווק, מנהלי הרשת יכולים להשתמש בהגדרת הזו כדרך לעודד לקוחות לשדרג את התוכנית שלהם ברגע שהמגבלות הגיעו. הגדרה זו גם יכולה לעזור למנהל הרשת לצמצם ולמנוע תנועה מופרזת לאתרים כדי לשמור על משאבי המערכת.

כדי להשתמש בתכונה הזו, הפעל את המתג **limit unique visits** (מגבלת ביקורים ייחודיים) והגדר את המספר המקסימלי של מבקרים ייחודיים בשדה **unique visits quota** (קוטיות ביקורים ייחודיים).

ברגע שהמגבלה הזו תגיע, Ultimate Multisite לא ימשיך לשרת את האתר של הלקוח אלא יציג הודעה שמציינת שהמגבלות חופרו.

#### משתמשים (Users)

המגבלות של 'Users' ב-Ultimate Multisite מאפשרות למנהל הרשת להטיל מגבלות על מספר המשתמשים שניתן ליצור ולהקצות תפקידים להם.

![Users tab](/img/config/product-users.png)

כדי להפעיל את תכונת המגבלות, הפעל את המתג **limit user** (מגבלת משתמש) על ידי גרירת הלחצן ימינה.

לאחר מכן עבור כל תפקיד שברצונך להגביל, הפעל את המתג לידו והגדר את המגבלה העליונה המקסימלית בשדה המתאים.

#### סוגי פוסט (Post Types)

ללשונית **Post Types** (סוגי פוסט) מאפשרת למנהל הרשת להטיל מגבלות מפורטות על מערך סוגי הפוסטים הנרחב ב-WordPress.

![Post Types tab](/img/config/product-post-types.png)

בגלל איך ש-WordPress בנוי, פוסטים וסוגי פוסט הם חלק מרכזי מהפונקציונליות הבסיסית שלו, ולכן מערכת המגבלות של Ultimate Multisite נועדה לסייע למנהל הרשת בבנייה ותחזוקה של מגבלות.

כדי להפעיל את תת-מערכת המגבלות הזו, הפעל את המתג **limit post types** (מגבלת סוגי פוסט) על ידי גרירת הלחצן ימינה.

#### Disk Space

**Disk Space** tab ལས་གཞི་ནི་ 网上 སྤྱོད་མཁོ་ (space) བཀག་དགོས་པའི་སྐོར་ལ། 网上 འཛིན་སྐྱོང་བྱེད་པ་ཚོས་རྩ་བ་ (core files) དང་ མཐུན་པའི་ site ཚོས་བེད་སྤྱོད་བྱས་པའི་ media file ཚོས་བེད་སྤྱོད་བྱས་པའི་ directory ཚོར་གྱི་ space ལ་བཀག་འཇོག་ཆོག

![Disk Space tab](/img/config/product-disk-space.png)

WordPress multisite ནང་དུ་ core files ཚོ་མཐུན་པའི་ site ཚོས་བེད་སྤྱོད་བྱས་པའི་ media file དང་ uploads directory ཚོར་གྱི་ settings དང་ limit ཚོ་འདི་ལྟར་བཀག་འཇོག་ཆོག

Disk usage limitation ལ་བསྐྱར་འགོ་བཙུགས་པའི་ཆེད་དུ་, **limit disk size per site** toggle ཚོ་ ညာဘက်ལ་སྒྲིབ་ནས་ active state (བསྐྱར་འགོ་བཙུགས་པ་) བྱེད་དགོས་པ་དང་།

དེ་ནས་, megabytes 単位ལས་ **disk space allowance** field ནང་ maximum upper limit ཚོ་ သတ်မှတ်རོགས།

#### Custom Domain

འདི་ ལ་toggle བྱས་ན་, ད་ལྟའི་ plan ལུ་ custom domains ཚོ་བཅོལ་ཆོག་པ་ལུ་ བསྐྱར་འགོ་བཙུགས་ནི་ཆོག

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes

Product options ནང་ **Themes** tab ལས་ network administrator ཚོས་ customer ཚོས་བརྟག་དཔྱད་བྱེད་ཐབས་ཀྱི་ theme ཚོ་བསྐྱར་འགོ་བཙུགས་ནི་དང་, theme ཚོའི་ state (སྟབས་བདེའི་འགོ་བཙུགས་པ་) ལ་optional བཏང་ཆོག

![Themes tab](/img/config/product-themes.png)

_**Note: Themes ཚོ་ customer ཚོས་བརྟག་དཔྱད་བྱེད་ཐབས་ཀྱི་ཆེད་དུ་ network administrator ཚོས་ network enabled (network འགོ་བཙུགས་པ་) བྱིན་ནི་དགོས།**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**visibility** option ལས་ theme ཚོ་ customer ཚོས་ site ནང་ **Appearance > Themes** tab བརྟག་དཔྱད་བྱེད་སྐབས་ເຫັນཐུབ་ཡོད་མིན་པ་  definine ເរນາ། འདི་ ལ་option ཚོ་ **Hidden** ལུ་ set ຖ້າ, theme ཚོ་ hide (བསྒྲིབ་) ནས་ customer ཚོས་ select (བརྟག་དཔྱད་བྱེད་ཐུབ་) དང་ activate (བསྐྱར་འགོ་བཙུགས་ཐུབ་) ບໍ່ໄດ້ ເປັນການ བཀག་འཇོག་བྱེད་པ་ལུ་ བཏང་།

![Themes tab](/img/config/product-themes.png)

**behavior** selection ལས་ network administrator ཚོས་ customer site ཚོ་ བསྐྲུན་ (create) སྐབས་ theme ཚོའི་ state ཚོ་ definine ເរນາ।

ໃນສະພາບທີ່ **Available**, ຫົວຂໍ້ (theme) ຈະຖືກເປີດໃຫ້ລູກຄ້າສາມາດເປີດໃຊ້ງານໄດ້ດ້ວຍຕົນເອງ. ໃນທາງກົງກັນຂ້າມ, ສະພາບທີ່ **Not Available** ຈະເອົາຄວາມສາມາດໃນການເປີດໃຊ້ຫົວຂໍ້ນັ້ນອອກຈາກລູກຄ້າ. ສຸດທ້າຍ, ຕົວເລືອກ **Force Activate** ຈະບັງຄັບໃຫ້ເລືອກ ແລະ ເປີດໃຊ້ຫົວຂໍ້ນັ້ນ, ເຮັດໃຫ້ມັນເປັນຄ່າເລີ່ມຕົ້ນເມື່ອສ້າງໄຊທ໌ໃໝ່.

#### Plugins

ຄືກັບ tab Themes, Ultimate Multisite ອະນຸຍາດໃຫ້ຜູ້ບໍລິຫານເຄືອຂ່າຍ (network administrator) ກໍານົດການເຫັນຂອງ plugins ຕໍ່ລູກຄ້າ ແລະ ສະພາບຂອງມັນເມື່ອສ້າງໄຊທ໌ໃໝ່.

![Plugins tab](/img/config/product-plugins.png)

ເມນູ **visibility** ອະນຸຍາດໃຫ້ plugin ນັ້ນສາມາດເຫັນໄດ້ ຫຼື ຖືກເຊື່ອງໄວ້ຈາກລູກຄ້າ ເມື່ອເບິ່ງໃນໄຊທ໌ຂອງເຂົາເຈົ້າຜ່ານຕົວເລືອກ Plugins menu.

ຜູ້ບໍລິຫານເຄືອຂ່າຍສາມາດປັບພຶດຕິກຳຂອງ plugins ອີກດ້ວຍໂດຍການໃຊ້ຕົວເລືອກໃນ drop-down behavior.

![Plugins tab](/img/config/product-plugins.png)

ການເລືອກ **Default** ຈະໃຫ້ຄວາມສຳຄັນກັບສະພາບຂອງ plugin ທີ່ຖືກກຳນົດໄວ້ໃນ site template (ແມ່ແບບໄຊທ໌) ທີ່ລູກຄ້າເລືອກ. ເຊິ່ງໝາຍຄວາມວ່າ plugins ທີ່ເປີດໃຊ້ງານຢູ່ໃນ template ນັ້ນ ຈະຍັງເປີດໃຊ້ງານຢູ່ເມື່ອ template ນັ້ນຖືກຄັດລອກໄປເປັນໄຊທ໌ຂອງລູກຄ້າ.

**Force Activate** ຈະວາງ plugin ໄວ້ໃນສະພາບທີ່ເປີດໃຊ້ງານເມື່ອສ້າງໄຊທ໌ ແລະ ໃນທາງກັບກັນ, **Force Inactivate** ຈະປິດການເປີດໃຊ້ plugin ເມື່ອສ້າງໄຊທ໌. ໃນທັງສອງສະຖານະນີ້, ສະພາບຂອງ plugin ສາມາດຖືກປ່ຽນແປງດ້ວຍຕົນເອງໂດຍລູກຄ້າຜ່ານ WordPress Plugins menu ຂອງເຂົາເຈົ້າໄດ້ເລີຍ.

ການຕັ້ງຄ່າ **Force Activate & Lock** ເຮັດວຽກຄືກັນ ແຕ່ມັນຈະປ້ອງກັນບໍ່ໃຫ້ລູກຄ້າປ່ຽນສະຖານະຂອງ plugin ນັ້ນໄດ້. ສະນັ້ນ, ການຕັ້ງຄ່າ Force Activate and Lock ຈະບັງຄັບໃຫ້ plugin ເຂົ້າໄປໃນສະຖານະທີ່ເປີດໃຊ້ງານແລ້ວ ແລະ ປ້ອງກັນບໍ່ໃຫ້ລູກຄ້າປິດມັນໄດ້. ຄືກັນກັບການຕັ້ງຄ່າ **Force Inactivate & Lock** ຈະບັງຄັບໃຫ້ plugin ເຂົ້າໄປໃນສະຖານະທີ່ປິດໃຊ້ງານແລ້ວ ແລະ ປ້ອງກັນຜູ້ໃຊ້ບໍ່ໃຫ້ເປີດໃຊ້ງານ plugin ນັ້ນ.

ຜູ້ບໍລິຫານເຄືອຂ່າຍອາດຈະຢາກພິຈາລະນາການຕັ້ງຄ່າ Force Activate & Lock ແລະ Force Inactivate & Lock ຮ່ວມກັບ site templates ເປັນ plugins ເພາະສະຖານະຂອງ plugin ຢູ່ພາຍໃນ templates ອາດຈະຖືກສົ່ງຜົນກະທົບຈາກການຕັ້ງຄ່ານີ້ຖ້າເລືອກໃຊ້.

#### ການຣີເຊັດຂໍ້ຈຳກັດ (Reset Limitations)

ແທັບ **Reset Limitations** ຈະຣີເຊັດຂໍ້ຈຳກັດທີ່ສ້າງຂຶ້ນໃສ່ຜະລິດຕະພັນທັງໝົດ. ເພື່ອຣີເຊັດຂໍ້ຈຳກັດ, ກະລຸນາກົດປຸ່ມ **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

ເພື່ອຢືນຢັນການກະທຳ, ໃຫ້ເລື່ອນ toggle **confirm reset** ໄປທີ່ສະຖານະ active (ເປີດ) ທາງຂວາ ແລະ ກົດປຸ່ມ **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## ແກ້ໄຂ, ສ້າງຄືນ, ຫຼື ລຶບຜະລິດຕະພັນ (Edit, Duplicate, or Delete Product)

ຜະລິດຕະພັນທີ່ມີຢູ່ແລ້ວສາມາດຖືກແກ້ໄຂ, ສ້າງຄືນ (duplicate), ຫຼື ລຶບໄດ້ໂດຍການໄປທີ່ **Ultimate Multisite > Products** ແລະ ເລື່ອນເມົ້າໄປໃສ່ຊື່ຜະລິດຕະພັນທີ່ມີຢູ່.

![Product hover actions](/img/config/product-hover-actions.png)
