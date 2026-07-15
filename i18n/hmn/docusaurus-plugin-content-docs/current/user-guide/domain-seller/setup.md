---
title: Tsoom hais thiab txhais rau tsim thiab provider configuration
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: ຕັ້ງຄ່າ ແລະ ການຕັ້ງຄ່າຜູ້ໃຫ້ບໍລິການ (Provider Configuration)

Addon Domain Seller ມາພ້ອມກັບເຄື່ອງມືຊ່ວຍຕັ້ງຄ່າທີ່ພາເຈົ້າຜ່ານທຸກຂັ້ນຕອນທີ່ຕ້ອງການ. ໜ້າພ这 ນີ້ຈະອະທິບາຍເຖິງການເຮັດວຽກຂອງ wizard ແລະ ວິທີການຕັ້ງຄ່າ ຫຼື ຕັ້ງຄ່າໃໝ່ໃຫ້ກັບ provider ຫຼັງຈາກນັ້ນ.

## ຂໍ້ກຳນົດ (Requirements) {#requirements}

- **Multisite Ultimate** v2.4.12 ຫຼື ສູງກວ່າ, ຕ້ອງໄດ້ເປີດໃຊ້ໃນເຄືອຂ່າຍແລ້ວ
- **PHP** 7.4+
- API credentials ສຳລັບ registrar ທີ່ຮອງຮັບຢ່າງໜ້ອຍໜຶ່ງ

## ການຕັ້ງຄ່າ wizard ຄັ້ງທຳອິດ (First-run setup wizard) {#first-run-setup-wizard}

Wizard ຈະເລີ່ມເຮັດວຽກໂດຍອັດຕະໂນມັດໃນເທື່ອທຳອິດທີ່ເຈົ້າເປີດໃຊ້ plugin ໃນເຄືອຂ່າຍ. ເຈົ້າສາມາດເຂົ້າໄປໄດ້ສະເໝີຈາກ **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### ຂັ້ນຕອນທີ 1 — ເລືອກ provider (Choose a provider) {#step-1--choose-a-provider}

ເລືອກ registrar ທີ່ເຈົ້າຢາກເຊື່ອມຕໍ່. ທາງເລືອກທີ່ຮອງຮັບ:

| Provider | ການຈັດການ DNS | WHOIS privacy |
|---|---|---|
| OpenSRS | ມີ | ມີ |
| Namecheap | ບໍ່ມີ | ມີ (WhoisGuard, ຟຣີ) |
| HostAfrica | ມີ | ມີ (ID protection) |
| Openprovider | ມີ | ມີ |
| Hostinger | ຜ່ານການ map domain ຫຼັກຂອງ Hostinger ສຳລັບ hosted domains | ມີ |
| GoDaddy | ບໍ່ມີ | ບໍ່ມີ |
| ResellerClub | ມີ | ບໍ່ມີ |
| NameSilo | ບໍ່ມີ | ບໍ່ມີ |
| Enom | ມີ | ບໍ່ມີ |

### ຂັ້ນຕອນທີ 2 — ໃສ່ຂໍ້ມູນການເຂົ້າສູ່ລະບົບ (Enter credentials) {#step-2--enter-credentials}

ແຕ່ລະ provider ມີຊ່ອງຂໍ້ມູນທີ່ແຕກຕ່າງກັນ:

**OpenSRS** — Username ແລະ private key (ຈາກ OpenSRS Reseller Control Panel)

**Namecheap** — Username ແລະ API key (ຈາກ Account › Tools › API Access)

**HostAfrica** — Domain Reseller API endpoint ແລະ credentials ຈາກ module reseller ຂອງ HostAfrica. ປັດຈຸບັນບໍ່ມີ sandbox endpoint ແຍກຕ່າງຫາກໃຫ້ເບິ່ງ; ເທດການກວດສອບແບບ read-only ກ່ອນທີ່ຈະເຮັດການລົງທະບຽນຕົວຈິງ.

**Openprovider** — Username ແລະ password ພ້ອມການເຂົ້າເຖິງ API. ໂໝດ sandbox ທາງເລືອກໃຊ້ Openprovider sandbox API, ແລະ customer handle ປົກກະຕິທີ່ເປັນ default ສາມາດນຳໃຊ້ຄືນໄດ້ສຳລັບການລົງທະບຽນ.

**Hostinger** — API token ຂອງ Hostinger hPanel ທີ່ໃຊ້ສຳລັບການເຊື່ອມຕໍ່ຫຼັກ. ເຄື່ອງມືນີ້ໃຊ້ເພື່ອເຮັດວຽກກັບການແຕ້ມໂດເມນຫຼັກ ແລະ ການລົງທະບຽນຜູ້ຂາຍໂດເມນ.

**GoDaddy** — API key ແລະ secret (ຈາກ developer.godaddy.com)

**ResellerClub** — Reseller ID ແລະ API key (ຈາກ control panel ຂອງ ResellerClub)

**NameSilo** — API key (ຈາກ namesilo.com › Account › API Manager)

**Enom** — Account ID ແລະ API token

ກວດສອບ **Sandbox mode** (ຖ້າມີ) ເພື່ອທົດສອບກັບ environment testing ຂອງ provider ກ່ອນທີ່ຈະເປີດໃຊ້ຕົວຈິງ.

### ຂັ້ນຕອນທີ 3 — ທົດສອບການເຊື່ອມຕໍ່ {#step-3--test-the-connection}

ໃຫ້ຄລິກທີ່ **Test Connection**. Wizard ນີ້ຈະສົ່ງ API call ທີ່ມີນ້ຳໜັກເບົາໄປເພື່ອຢືນຢັນຂໍ້ມູນ ແລະ ການເຊື່ອມຕໍ່. ແກ້ໄຂບັນຫາ credential (ຂໍ້ມູນເຂົ້າລະຫັດ) ທັງໝົດກ່ອນທີ່ຈະດຳເນີນການຕໍ່ໄປ.

### ຂັ້ນຕອນທີ 4 — ສົ່ງသွင်း TLDs {#step-4--import-tlds}

ໃຫ້ຄລິກທີ່ **Import TLDs** ເພື່ອດຶງເອົາ TLDs ທັງໝົດທີ່ມີຢູ່ ແລະ ລາຄາສົ່ງຕໍ່ (wholesale pricing) ຈາກ provider ທີ່ເຊື່ອມຕໍ່. ນີ້ຈະເຮັດໃຫ້ມີລາຍຊື່ TLDs ທີ່ໃຊ້ໃນຜະລິດຕະພັນໂດເມນ. ການ import ອາດໃຊ້ເວລາ 30–60 ວິນາທີສຳລັບ provider ທີ່ມີ catalog TLDs ຂະໜາດໃຫຍ່.

TLDs ຈະຖືກ đồng bộ (re-synced) ອີກຄັ້ງຕໍ່ມື້ໂດຍອັດຕະໂນມັດຜ່ານ cron job ທີ່ຕັ້ງເວລາໄວ້.

### ຂັ້ນຕອນທີ 5 — ສ້າງຜະລິດຕະພັນໂດເມນ {#step-5--create-a-domain-product}

Wizard ນີ້ຈະສ້າງ product ຫຼັກທີ່ເປັນ catch-all (ໃຊ້ໄດ້ກັບທຸກຢ່າງ) ພ້ອມ markup 10%. ເຈົ້າສາມາດແກ້ໄຂ product ນີ້ໄດ້ທັນທີ ຫຼື ຂ້າມໄປ ແລະ ສ້າງ product ແບບເອງໃສ່ **Ultimate Multisite › Products**.

ເບິ່ງ [Domain Products and Pricing](./domain-products) ເພື່ອຄູ່ມືການຕັ້ງຄ່າ product ຢ່າງເຕັມທີ່.

---

## ການຕັ້ງຄ່າ provider ໃໝ່ {#reconfiguring-a-provider}

ໄປທີ່ **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ຫຼື ຄລິກ **Settings** ໃນ list plugin).

ໜ້າຕງການຕັ້ງຄ່ານີ້ມີ:

- **Enable domain selling** — toggle feature thav (on/off)
- **Default provider** — provider uaj (used for domain searchs and new products)
- **Max TLDs per search** — how many TLDs to check when customer search; value huv (higher values show more options but slower)
- **Availability cache duration** — how long to cache availability and pricing results; value luv (lower values are more accurate but increase API calls)
- **Manage domain products** — quick link tsu Products list
- **Configure providers** — opens Integration Wizard tu add or reconfigure provider

### Adding a second provider {#adding-a-second-provider}

Click **Configure providers** thiab run wizard heev rau registrar tshiab. Kuv yuav muaj provider ntau hauv peb zoo li hnub thiaj. Assign domain product txhua ib lub provider rau ib yam, loss it on default.

### Syncing TLDs manually {#syncing-tlds-manually}

U settings page, click **Sync TLDs** hauv ib lub provider uas tau configure los to pull latest pricing. Yuav muaj qhuas yog tha provider update wholesale pricing loss add new TLDs.

---

## Logs {#logs}

Each provider write rau log channel zoo li nws. Logs yuav paub hauv **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Òlwbauj txhua txoj (success thiab failure) |
| `domain-seller-renewal` | Job renewal results |
| `domain-seller-opensrs` | Raw OpenSRS API activity |
| `domain-seller-namecheap` | Raw Namecheap API activity |
| `domain-seller-hostafrica` | Raw HostAfrica API activity |
| `domain-seller-openprovider` | Raw Openprovider API activity |
| `domain-seller-hostinger` | Raw Hostinger API activity |
| `domain-seller-godaddy` | Raw GoDaddy API activity |
| `domain-seller-resellerclub` | Raw ResellerClub API activity |
| `domain-seller-namesilo` | Raw NameSilo API activity |
| `domain-seller-enom` | Raw Enom API activity |

---

## Provider capability notes {#provider-capability-notes}

Txhua registrar API tsis muaj lub luag haujlwm uas sib kao nhau. Addon nta cwjiam txog lub luag haujlwm uas tsis hlub (unsupported operations) yuav tsum yim rau thov tshiab (admin-facing errors) los ntawm kev tsis paub.

- **HostAfrica** muaj lub luag haujlwm reseller uas zoo tshaj plaws, loj hlob tias sib txawv, TLD/pricing sync, registration, renewal, transfer, nameserver updates, DNS records, EPP codes, registrar lock, thiab ID protection.
- **Openprovider** muaj lub luag haujlwm txhua yam uas muaj tus reseller price TLD sync, registration, renewal, transfers, nameserver updates, DNS zones, EPP codes, registrar lock, thiab WHOIS privacy. nws yuav txhais rau bearer token uas tsis muaj lub sijhawm (short-lived) thiab addon yuav txhua hnub refresh.
- **Hostinger** muaj lub luag haujlwm hloov tsim, registration, portfolio lookup, nameserver updates, registrar lock, thiab WHOIS privacy zoo li hPanel API token uas teb siab chung. Hostinger's public Domains API tsis muaj reseller/wholesale pricing, inbound transfer, explicit renewal, lossis EPP-code retrieval; renewals yuav ua auto-renew (tự động gia rau) u nka.
