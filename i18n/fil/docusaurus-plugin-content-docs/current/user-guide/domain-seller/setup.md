---
title: Pag-set up at Pag-configure ng Provider
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Pag-set Up at Pag-configure ng Provider

Ang Domain Seller addon ay may kasamang guided setup wizard na gagabay sa iyo sa bawat kinakailangang hakbang. Tinatalakay ng pahinang ito ang daloy ng wizard at kung paano i-configure o i-reconfigure ang mga provider pagkatapos.

## Mga Kinakailangan (Requirements)

- **Multisite Ultimate** v2.4.12 o mas mataas, na naka-activate sa network
- **PHP** 7.4+
- API credentials para sa hindi bababa sa isang sinusuportahang registrar

## Setup Wizard sa Unang Pag-run

Ang setup wizard ay awtomatikong maglulunsad sa unang pagkakataon na i-network-activate mo ang plugin. Makukuha rin ito anumang oras mula sa **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Hakbang 1 — Pumili ng provider

Pumili ng registrar na gusto mong ikonekta. Mga sinusuportahang opsyon:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Hakbang 2 — Ipasok ang credentials

Ang bawat provider ay may iba't ibang field ng credentials:

**OpenSRS** — Username at private key (mula sa OpenSRS Reseller Control Panel)

**Namecheap** — Username at API key (mula sa Account › Tools › API Access)

**GoDaddy** — API key at secret (mula sa developer.godaddy.com)

**ResellerClub** — Reseller ID at API key (mula sa ResellerClub control panel)

**NameSilo** — API key (mula sa namesilo.com › Account › API Manager)

**Enom** — Account ID at API token

Tingnan ang **Sandbox mode** kung available para makapag-test sa test environment ng provider bago maging live.

### Hakbang 3 — Subukan ang koneksyon

I-click ang **Test Connection**. Magpapadala ang wizard ng isang magaan na API call para i-verify ang credentials at konektibidad. Ayusin ang anumang isyu sa credentials bago magpatuloy.

### Hakbang 4 — I-import ang TLDs

I-click ang **Import TLDs** para kumuha ng lahat ng available na TLDs at wholesale pricing mula sa nakakonekta na provider. Ito ang magpupuno sa listahan ng TLD na ginagamit ng mga domain product. Maaaring tumagal ang import ng 30–60 segundo para sa mga provider na may malaking TLD catalog.

Ang mga TLD ay awtomatikong re-sync din minsan sa isang araw sa pamamagitan ng isang scheduled cron job.

### Hakbang 5 — Gumawa ng domain product

Ang wizard ay gagawa ng default catch-all domain product na may 10% markup. Maaari mong i-edit ang product na ito kaagad o laktawan at gumawa ng mga product nang mano-mano sa ilalim ng **Ultimate Multisite › Products**.

Tingnan ang [Domain Products and Pricing](./domain-products) para sa kumpletong gabay sa pag-configure ng product.

---

## Pag-reconfigure ng isang provider

Pumunta sa **Network Admin › Ultimate Multisite › Settings › Domain Seller** (o i-click ang **Settings** sa listahan ng plugin).

Ang settings page ay naglalaman ng:

- **Enable domain selling** — i-toggle ang buong feature sa on/off
- **Default provider** — ang provider na ginagamit para sa paghahanap ng domain at mga bagong product
- **Max TLDs per search** — ilang TLD ang titingnan kapag naghahanap ang isang customer; ang mas mataas na values ay nagpapakita ng mas maraming opsyon ngunit mas mabagal
- **Availability cache duration** — gaano katagal i-i-cache ang availability at pricing results; ang mas mababang values ay mas accurate ngunit nagpapataas ng API calls
- **Manage domain products** — mabilis na link sa Products list
- **Configure providers** — nagbubukas ng Integration Wizard para magdagdag o mag-reconfigure ng mga provider

### Pagdaragdag ng pangalawang provider

I-click ang **Configure providers** at patakbuhin muli ang wizard para sa bagong registrar. Maaari kang magkaroon ng maraming provider na naka-configure nang sabay-sabay. I-assign ang bawat domain product sa isang specific provider, o iwanan ito sa default.

### Manu-manong Pag-sync ng TLDs

Sa settings page, i-click ang **Sync TLDs** sa tabi ng anumang naka-configure na provider para kumuha ng pinakabagong pricing. Ito ay kapaki-pakinabang pagkatapos mag-update ang isang provider ng wholesale pricing o magdagdag ng mga bagong TLDs.

---

## Logs

Ang bawat provider ay nagsusulat sa sarili nitong log channel. Ang mga logs ay makikita sa ilalim ng **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Lahat ng pagtatangka sa pagrehistro (tagumpay at kabiguan) |
| `domain-seller-renewal` | Mga resulta ng renewal job |
| `domain-seller-opensrs` | Raw OpenSRS API activity |
| `domain-seller-namecheap` | Raw Namecheap API activity |
| `domain-seller-godaddy` | Raw GoDaddy API activity |
| `domain-seller-resellerclub` | Raw ResellerClub API activity |
| `domain-seller-namesilo` | Raw NameSilo API activity |
| `domain-seller-enom` | Raw Enom API activity |
