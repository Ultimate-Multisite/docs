---
title: |-
  Seòl agus Còmhraidh an Tais

  (or)

  Seòl agus Còmhraidh an Tais
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Set-up agus Coimisiúch an Provider

Tha an add-on Domain Seller a' chluainteachd le seòlas set-up gu leathanach a tha a' tighinn agad gu linn a' tighinn uile stiùir. Tha an seachdainn seo a' tighinn air a' chluainteachadh agus faic a bhfaidh thu a' chluainteachadh mar a tha e a' chluainteachadh no a' chluainteachadh ar fáil air a sonrainn.

## Cùineadh

- **Multisite Ultimate** v2.4.12 nó níos fearr, a' tighinn air an t-nàdh (network-activated)
- **PHP** 7.4+
- Creidheann API airson càil seachdaidh aon registrar a tha a' tighinn air.

## Seachdainn set-up ar an uair a bha an t-am bith

Tha seachdainn set-up a' chluainteachadh gu leathanach an uair atá thu a' tighinn air an plugin. Tha e a' tighinn air a chanach air deàrraich **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Seachdainn 1 — Tóg an provider

Taisg an registrar a tha thu a' tighinn air a chluainteachadh. Eisimpleir:

| Provider | Bhratadh DNS (DNS management) | Seachainn WHOIS privacy |
|---|---|---|
| OpenSRS | Bidh e | Bidh e |
| Namecheap | Cha | Bidh e (WhoisGuard, fada) |
| HostAfrica | Bidh e | Bidh e (ID protection) |
| Openprovider | Bidh e | Bidh e |
| Hostinger | Guile a' chluainteachadh deàrraich domain Hostinger airson domain a tha a' tighinn air | Bidh e |
| GoDaddy | Cha | Cha |
| ResellerClub | Bidh e | Cha |
| NameSilo | Cha | Cha |
| Enom | Bidh e | Cha |

### Seachdainn 2 — Ghearr creidheann

Tha chùineadh creidheann a' tighinn air uile provider:

**OpenSRS** — Username agus private key (a' chluainteach air an OpenSRS Reseller Control Panel)

**Namecheap** — Username agus API key (a' chluainteach air Account › Tools › API Access)

**HostAfrica** — Endpoint API airson Domains Reseller agus creidheann a' chluainteach air module reseller HostAfrica. Tha eachd sandbox endpoint a tha a' tighinn air a' tighinn, a' chluainteachadh le deàrraich read-only a' chluainteachadh gu leathanach a bhith a' tighinn.

**Openprovider** — Username agus password le seachad API. Tha mode sandbox optional a' chluainteachadh air an Openprovider sandbox API, agus tha mode default customer handle optional a' chluainteachadh a' fhaighinn air a ghlacadh airson creidheann.

**Hostinger** — Taisinn Hostinger hPanel API token a' chùlchna de core Hostinger integration. An tòiseil a tha'nneachd an tòiseil a tha'nneachd mapping de domain agus obair registration de Domain Seller.

**GoDaddy** — API key agus secret (frum developer.godaddy.com)

**ResellerClub** — Reseller ID agus API key (frum an control panel de ResellerClub)

**NameSilo** — API key (frum namesilo.com › Account › API Manager)

**Enom** — Account ID agus API token

Thoir seachdaidh **Sandbox mode** mar a tha e faisg, chun a shreinn air an tòiseil de test a ge colladh gu leòr.

### Step 3 — Test an t-sìth

Cloich **Test Connection**. A th'ann seo an fhuilich API beag airson a shreinn na chuidine agus an tòiseil. Fhàg an tòiseil air seachdaidh earrachdan de chuidine a bhith agad air a leughadh a dimint a' chomh ma tha e faisg a' fhéin.

### Step 4 — Import TLDs

Cloich **Import TLDs** chun a ghràdh an tòiseil gu lunnach na stiùiriche (TLDs) agus prìsan wholesale a tha'nneachd air a thaoinneachadh. A tha seo a' leughadh an liosta TLDs a tha'nneachd air a thaoinneachadh airson eògan domain. Aer thuir an t-sìth a' chùlchnaich 30–60 secca airson tòiseil sin a tha'nneachd air a thaoinneachadh.

Aer thuir an t-sìth a' leughadh an liosta TLDs gu lunnach mar a tha e faisg a' fhéin a' chùlchnaich cron.

### Step 5 — Creach domain product

A th'ann seo an fhuilich a creach domain product de chùlchnaich le 10% markup. Is e faisg agad a' leughadh an product sin gu leòr no a' tòiseil agus a creach sảnaiche gu lunnach air **Ultimate Multisite › Products**.

Sealltainn [Domain Products and Pricing](./domain-products) airson an t-seòl de chùlchnaich product.

---

## Reconfiguring a provider

Thoir air **Network Admin › Ultimate Multisite › Settings › Domain Seller** (no lochloich **Settings** anns an liosta de plugin).

Tha an seachdaidh a' leughadh:

- **Enable domain selling** — toggre an tòseil a'n fìrste (on/off)
- **Default provider** — an fìrste chùl (provider) aig an dòigh airson seachdainn dìreach agus earrachdan ùra
- **Max TLDs per search** — ri an tòiseil a'n fhaighinn gu leòd a tha a'n dèanamh air a' chùl nuair a' chluin a' chluin; tha curraichean mòra a' nàch a' chùl a' chluin a' chluin, ach tha iad a' tòiseil.
- **Availability cache duration** — ri an tòiseil a'n dèanamh air a' chùl a' chluin airson fhaighinn a' chùl agus earrachdan; tha curraichean beaga a' nàch a' chùl, ach a' tòiseil a' nàch a' chùl a' chluin.
- **Manage domain products** — lìn dìreach air an list a'n seachdainn
- **Configure providers** — a' chlàradh a' fhaighinn an Wizard airson a' chùl a' nàch a' chùl a' chluin

### A' chùl dìbeidh eile a gineadh

Chlàradh air **Configure providers** agus runn an wizard gu leòd airson an tòiseil ùr. Is e cheann a tha a' chùl a' nàch a' chùl a' chluin a' fhaighinn. Tha e a' chùl a' nàch a' chùl a' chluin a' fhaighinn, no leugh an dòigh dìreach.

### A' chùl TLDs a' chluin gu mheinteach

Air an seachdainn a' chùl, chlàradh **Sync TLDs** a' chluin a' nàch a' chùl a' chluin airson earrachdan a' chluin a' fhaighinn. Tha seo a' tòiseil air a' chùl a' nàch a' chùl a' chluin an uair a tha an tòiseil a' nàch a' chùl a' chluin a' chluin ùr no a' chùl ùra a gineadh.

---

## Logs

Tha chùl a' chluin a' tòiseil air seachdainn a' chùl a' nàch a' chùl a' chluin. Tha an loga'n fhaighinn air **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Am all an tòisichd mhathair (seach agus fiallach) |
| `domain-seller-renewal` | Results a job de rianadh |
| `domain-seller-opensrs` | Actiú API OpenSRS rudh |
| `domain-seller-namecheap` | Actiú API Namecheap rudh |
| `domain-seller-hostafrica` | Actiú API HostAfrica rudh |
| `domain-seller-openprovider` | Actiú API Openprovider rudh |
| `domain-seller-hostinger` | Actiú API Hostinger rudh |
| `domain-seller-godaddy` | Actiú API GoDaddy rudh |
| `domain-seller-resellerclub` | Actiú API ResellerClub rudh |
| `domain-seller-namesilo` | Actiú API NameSilo rudh |
| `domain-seller-enom` | Actiú API Enom rudh |

---

## Notean ar eadar aithreachan an t-saobar (Provider capability notes)

Nì a' chùl mhath air a' chùl API de dhutha a' leatamach. A' chùl add-on a thèid a' chùl a tha fadaichdair (unsupported operations) gu earrach, agus a' chùl a thèid a' chùl a tha fadaichdair (unsupported operations) gu earrach, gu earrach, gu earrach.

- **HostAfrica** a' tòisichd mhath air an t-saobar live reseller is dòighinn, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn.
- **Openprovider** a' tòisichd mhath air tairgeadh TLD de rianadh, a' chùl a thèid a' chùl a tha fadaichdair (unsupported operations) gu earrach, a' chùl a thèid a' chùl a tha fadaichdair (unsupported operations) gu earrach, a' chùl a thèid a' chùl a tha fadaichdair (unsupported operations) gu earrach, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn. A' tòisichd mhath air an t-saobar live reseller is dòighinn a' chùl a thèid a' chùl a tha fadaichdair (unsupported operations) gu earrach, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn. A' tòisichd mhath air an t-saobar live reseller is dòighinn a' chùl a thèid a' chùl a tha fadaichdair (unsupported operations) gu earrach, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn. A' tòisichd mhath air an t-saobar live reseller is dòighinn a' chùl a thèid a' chùl a tha fadaichdair (unsupported operations) gu earrach, a tha a' tòisichd mhath air an t-saobar live reseller is dòighinn.

*Note: I have tried to keep the technical terms like "API", "addon", and specific service names as they are standard in this context.*
