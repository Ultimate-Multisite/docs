---
title: Tswv thiab Txoj Hauj Coj thiab Txoj Txhais
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# ຜະລິດຕະພັນລາຄາໂດເມນ (Domain Products and Pricing)

ຜະລິດຕະພັນໂດເມນແມ່ນວິທີທີ່ເຈົ້າຄວບຄຸມລາຄາ, TLDs (Top-Level Domains), ຄວາມເປັນສ່ວນຕົວຂອງ WHOIS, ແລະ ການເລືອກຜູ້ໃຫ້ບໍລິການ. ຜະລິດຕະພັນໂດເມນແຕ່ລະຢ່າງແມ່ນຜະລິດຕະພັນ Multisite Ultimate ມາດຕະຖານທີ່ມີ tab ເພີ່ມເຕີມຊື່ວ່າ **Domain Settings**.

## ການສ້າງຜະລິດຕະພັນໂດເມນ (Creating a domain product)

1. ໄປທີ່ **Network Admin › Ultimate Multisite › Products**
2. ກົດ **Add New**
3. ຕັ້ງປະເພດຜະລິດຕະພັນເປັນ **Domain**
4. ຕັ້ງຄ່າ tab **Domain Settings** (ເບິ່ງລຸ່ມນີ້)
5. ເກັບຮັກສາ (Save)

ຜະລິດຕະພັນໂດເມນຈະປາກົດຂຶ້ນດ້ວຍແທັກ **Domain** ສີ紫色 ໃນລາຍການຜະລິດຕະພັນ ແລະ ສາມາດກອງໃຊ້ໂດຍໃຊ້ tab **Domain Products**.

## tab Domain settings

### ຜູ້ໃຫ້ບໍລິການ (Provider)

ເລືອກວ່າເຈົ້າຕ້ອງການໃຫ້ຈົດທະບຽນຜະລິດຕະພັນນີ້ແມ່ນໃຜເປັນຜູ້ຈັດການ. ຄ່າເລີ່ມຕົ້ນແມ່ນ **Default provider** ທົ່ວໂລກທີ່ຕັ້ງໄວ້ໃນການຕັ້ງຄ່າ Domain Seller.

### TLDs ທີ່ຮອງຮັບ (Supported TLDs)

ປ່ອຍວ່າງໄວ້ເພື່ອສ້າງຜະລິດຕະພັນແບບ **catch-all product** ທີ່ຈະໃຊ້ກັບທຸກ TLDs ທີ່ບໍ່ໄດ້ຖືກຈັບໂດຍຜະລິດຕະພັນອື່ນໆ.

ໃສ່ລາຍຊື່ TLDs ແຍກດ້ວຍເຄື່ອງໝາຍ comma (ເຊັ່ນ: `.com, .net, .org`) ເພື່ອສ້າງ **TLD-specific product** ທີ່ຈະໃຊ້ກັບສ່ວນຂະຫຍາຍນັ້ນເທົ່ານັ້ນ.

**ວິທີການຈັບຜະລິດຕະພັນ (How product matching works):** ເມື່ອລູກຄ້າຄົນໜຶ່ງຊອກຫາໂດເມນ, Addon ນີ້ຈະເລືອກຜະລິດຕະພັນທີ່ຈັບໄດ້ສະເພາະທີ່ສຸດ. ຜະລິດຕະພັນທີ່ມີ `.com` ໃນລາຍຊື່ TLD ຂອງມັນ ຈະມີຄວາມສຳຄັນກວ່າຜະລິດຕະພັນແບບ catch-all. ຖ້າບໍ່ມີຜະລິດຕະພັນໃດທີ່ຈັບໄດ້ຕາມ TLD, ຜະລິດຕະພັນແບບ catch-all ຈະຖືກນຳໃຊ້. ຖ້າມີຜະລິດຕະພັນບໍ່ມີ, ການຄົ້ນຫາໂດເມນຈະບໍ່ສະແດງຂຶ້ນມາ.

### ປະເພດການຕັ້ງລາຄາ (Markup type)

ສາມໂໝດນີ້ຄວບຄຸມວິທີທີ່ລາຄາຂາຍຂອງເຈົ້າຖືກຄິດໄລ່ຈາກຕົ້ນທຶນສົ່ງຕໍ່ (wholesale cost):

| ໂໝດ (Mode) | ມັນເຮັດວຽກແນວໃດ |
|---|---|
| **Percentage** | ເພີ່ມເປີເຊັນໃສ່ຕົ້ນທຶນສົ່ງຕໍ່. ການເພີ່ມ markup 20% ໃນໂດເມນທີ່ມີຕົ້ນທຶນສົ່ງຕໍ່ $10 ຈະໄດ້ລາຄາ $12. |
| **Fixed markup** | ເພີ່ມຈຳນວນເງິນທີ່ຕັ້ງໄວ້ແບບຄົງທີ່. ການເພີ່ມ markup $5 ໃນໂດເມນທີ່ມີຕົ້ນທຶນສົ່ງຕໍ່ $10 ຈະໄດ້ລາຄາ $15. |
| **Fixed price** | ບໍ່ສົນໃຈຕົ້ນທຶນສົ່ງຕໍ່ເລີຍ. ຈະເກັບຄ່າຕາມຈຳນວນທີ່ເຈົ້າໃສ່ເທົ່ານັ້ນສະເໝີ. |

### ລາຄາແນະນຳ (Introductory pricing)

**Discounted First-Year Price Offer**

You can set a special **Introductory price** (the first year's price) that is different from the regular **Renewal price** (for year 2 and beyond). Khawm customer will see both prices when they are checking out, so they know what to expect when it comes time to renew.

### WHOIS privacy

This setting controls whether we offer WHOIS privacy protection for domains registered through this product.

| Setting | Behaviour |
|---|---|
| **Disabled** | WHOIS privacy will never be offered or enabled. |
| **Always Included** | WHOIS privacy will be turned on automatically when someone registers, and there is no charge for it. |
| **Customer Choice** | A checkbox will show up during checkout. You can set the **Privacy price** to charge per year, or leave it at $0 if you want to offer it for free. |

For Namecheap, WHOIS privacy uses WhoisGuard (which is always free). For OpenSRS, it uses the OpenSRS privacy service (it might have a cost when buying in bulk).

---

## TLD import and sync

Domain products will show real-time wholesale prices that are pulled from the provider you connected. To make this work, you need to import the TLDs first.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** This runs every day through a scheduled cron job for all the providers you have set up.

After syncing, go to any domain product's Domain Settings tab and use the TLD picker to see which TLDs are available right now along with their current wholesale prices.

---

## Auto-renewal

Domain renewals are connected to the customer's membership status:

- When a membership renews and a domain is linked, the domain renewal will be automatically put in line.
- Renewal attempts use the payment gateway that the customer has active.
- If a renewal fails, it will try again automatically with an increasing wait time (exponential backoff).
- We send emails for successful renewals, failures, and when the domain is about to expire.

Email template IDs for domain lifecycle events:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: མུ་མཐུད་ཀྱི་Domain བསྐྲུན་པ་ (Manual domain registration)

ग्राहकགིས་checkout མ་འགྲོ་བར་ཁོང་གི་ལས་ཀ་ནང་Domain ཞིག་བསྐྲུན་དགོས་ཚེ་འདི་ལྟར་လုပ်ဆောင်နိုင်ပါတယ်:

1. **Network Admin › Ultimate Multisite › Register Domain** (Admin > Network མུ་མཐུད་ > Ultimate Multisite > Domain བསྐྲུན་པ་) ལ་ចូលទៅ.
2. Customer ཁོང་གི་མཚན་དང་Domain མིང་བཏགས་ནས་བསྐྱར་ཞུ་དགོས་པའི་མིང་ (domain name) བécས།
3. ཁ་འབྲེལ་བྱེད་རྒྱུའི་ཆ་ཤས་ཀྱི་ལག་ལེན་ཐོབ་ཚུལ་ (མཚན་, ཡུལ་, སོ་) བསྐྱར་ཞུ་དགོས་པའི་ཆ་རྐྱེན།
4. **Register** (བསྐྲུན་པ་) ལ་བཀློ་.

Domain record འདི་བཟོས་པ་དང་ Customer ཁོང་གི་ account དང་འབྲེལ་བ་བྱས་པ་ལྟར་ཡོད།
