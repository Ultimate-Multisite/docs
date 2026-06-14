---
title: Pagtukod ug Konfigurasyon sa Provider
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Setup ug Configuration sa Provider

Ang Domain Seller addon naa uban og guided setup wizard nga magatudlo nimo sa matag kinahanglan nimong lakang. Kining page naghisgot bahin sa daloy sa wizard ug unsaon pag-configure o pag-reconfigure sa mga provider pagkahuman.

## Mga Kinahanglanon

- **Multisite Ultimate** v2.4.12 o mas taas, network-activated
- **PHP** 7.4+
- API credentials para sa labing menos usa ka supported registrar

## Unang setup wizard

Ang setup wizard awtomatikong mo-launch sa unang higayon nga i-network activate nimo ang plugin. Mahimo usab kini gamiton bisan kanus-a gikan sa **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Lakang 1 — Pilia og provider

Piliha ang registrar nga gusto nimong ikonekta. Mga suportadong opsyon:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Oo | Oo |
| Namecheap | Dili | Oo (WhoisGuard, libre) |
| HostAfrica | Oo | Oo (ID protection) |
| Openprovider | Oo | Oo |
| Hostinger | Pinaagi sa core Hostinger domain mapping para sa mga hosted domains | Oo |
| GoDaddy | Dili | Dili |
| ResellerClub | Oo | Dili |
| NameSilo | Dili | Dili |
| Enom | Oo | Dili |

### Lakang 2 — Sugdi og credentials

Ang matag provider adunay lain nga mga field para sa credentials:

**OpenSRS** — Username ug private key (gikan sa OpenSRS Reseller Control Panel)

**Namecheap** — Username ug API key (gikan sa Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint ug credentials gikan sa HostAfrica reseller module. Walay separate sandbox endpoint nga dokumentado karon; i-test gamit ang luwas nga read-only checks sa dili pa magpadagan og live registrations.

**Openprovider** — Username ug password nga adunay API access enabled. Ang optional sandbox mode naggamit sa Openprovider sandbox API, ug ang optional default customer handle mahimong gamiton pag-usab para sa mga registration.

**Hostinger** — Ang shared Hostinger hPanel API token gikan sa core Hostinger integration. Ang parehas nga token nagpabida sa core domain mapping ug Domain Seller registration operations.

**GoDaddy** — API key ug secret (gikan sa developer.godaddy.com)

**ResellerClub** — Reseller ID ug API key (gikan sa ResellerClub control panel)

**NameSilo** — API key (gikan sa namesilo.com › Account › API Manager)

**Enom** — Account ID ug API token

I-check ang **Sandbox mode** kung naa, para mag-test batok sa test environment sa provider sa dili pa mo-live.

### Step 3 — I-test ang koneksyon

I-click ang **Test Connection**. Ang wizard magpadala og gamay nga API call para ma-verify ang credentials ug connectivity. Ayuhon ang bisan unsang problema sa credentials sa dili pa magpadayon.

### Step 4 — Import TLDs

I-click ang **Import TLDs** para kuha ang tanang available TLDs ug wholesale pricing gikan sa connected provider. Kini magpuno sa listahan sa TLD nga gigamit sa domain products. Ang import mahimong molungtad og 30–60 seconds para sa mga provider nga adunay dagkong catalog sa TLD.

Ang mga TLD gi-resync usab awtomatiko usa ka beses kada adlaw pinaagi sa scheduled cron job.

### Step 5 — Paghimo og domain product

Ang wizard maghimo og default catch-all domain product nga naay 10% markup. Mahimo nimong i-edit kining product dayon o palihog ug himuon ang mga products manually ubos sa **Ultimate Multisite › Products**.

Tan-awa ang [Domain Products and Pricing](./domain-products) para sa tibuok giya sa configuration sa product.

---

## Pag-reconfigure sa provider

Padulong sa **Network Admin › Ultimate Multisite › Settings › Domain Seller** (o i-click ang **Settings** sa listahan sa plugin).

Ang settings page naglangkob sa:

- **Enable domain selling** — i-toggle ang tibuok feature on/off
- **Default provider** — ang provider nga gigamit para sa pagpangita og domain ug bag-ong mga produkto
- **Max TLDs per search** — pila ka TLD (Top-Level Domain) ang i-check kung magasulat ang customer; mas taas nga values nagpakita og daghang kapilian pero mas hinay kini
- **Availability cache duration** — unsa ka dugay ang pag-cache sa availability ug presyo; mas ubos nga values mas tukma pero mas daghan ang API calls
- **Manage domain products** — dali nga link padulong sa Products list
- **Configure providers** — magbukas kini og Integration Wizard para magdagmo o mag-reconfigure og mga provider

### Pagdugang og ikaduhang provider

I-click ang **Configure providers** ug i-run pag-usab ang wizard para sa bag-ong registrar. Mahimo kang adunay daghang providers nga naka-configure sa samang higayon. Ihatag ang matag domain product ngadto sa usa ka specific provider, o biyaan kini sa default.

### Manual Sync sa TLDs

Sa settings page, i-click ang **Sync TLDs** tupad sa bisan unsang naka-configure nga provider para kuhaon ang pinakabag-ong presyo. Kini makatabang pagkahuman nga mag-update og wholesale pricing ang usa ka provider o magdugang og bag-ong TLDs.

---

## Logs

Ang matag provider nag-isulat sa iyang kaugalingong log channel. Ang mga logs mahimong tan-awon ubos sa **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Tanang tanan nga mga pag-apply (success ug failure) sa registration |
| `domain-seller-renewal` | Mga resulta sa renewal job |
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

## Mga nota bahin sa abilidad sa Provider

Dili tanan nga registrar API nagpakita og parehas nga mga operasyon. Ang addon magpakita sa mga operasyong dili suportado pinaagi sa klaro nga mga sayop nga makita sa admin, imbes nga hilom lang kini mapakyas.

- **HostAfrica** nagsuporta sa pinaklapad nga workflow sa live reseller, lakip ang pagpangita (lookup), sync sa TLD/presyo, registration, renewal, transfer, nameserver updates, DNS records, EPP codes, registrar lock, ug ID protection.
- **Openprovider** nagsuporta sa reseller-priced TLD sync, registration, renewal, transfers, nameserver updates, DNS zones, EPP codes, registrar lock, ug WHOIS privacy. Kini nag-authenticate gamit ang usa ka short-lived bearer token nga awtomatikong gi-refresh sa addon.
- **Hostinger** nagsuporta sa availability search, registration, portfolio lookup, nameserver updates, registrar lock, ug WHOIS privacy pinaagi sa shared hPanel API token. Ang public Domains API sa Hostinger dili nagpakita og reseller/wholesale pricing, inbound transfer, explicit renewal, o pagkuha sa EPP-code; ang mga renewal kay auto-renew ra lang.
