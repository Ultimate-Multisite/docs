---
title: Pag-set up at Konfigurasyon ng Provider
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Pag-setup at Configuration ng Provider

Ang Domain Seller addon ay kasama ng isang guided setup wizard na gagabay sa iyo sa bawat kinakailangang hakbang. Ang pahinang ito ay tumatalakay sa daloy ng wizard at kung paano i-configure o muling i-configure ang mga provider pagkatapos nito.

## Mga Kinakailangan

- **Multisite Ultimate** v2.4.12 o mas mataas, network-activated
- **PHP** 7.4+
- API credentials para sa kahit isa sa mga sinusuportang registrar

## Unang setup wizard

Awtomatikong magsisimula ang setup wizard sa unang pagkakataon na i-network activate mo ang plugin. Maaari mo rin itong gamitin anumang oras mula sa **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Hakbang 1 — Pumili ng provider

Pumili ng registrar na gusto mong ikonekta. Mga sinusuportang opsyon:

| Provider | Pamamahala ng DNS | WHOIS privacy |
|---|---|---|
| OpenSRS | Oo | Oo |
| Namecheap | Hindi | Oo (WhoisGuard, libre) |
| HostAfrica | Oo | Oo (ID protection) |
| Openprovider | Oo | Oo |
| Hostinger | Sa pamamagitan ng core Hostinger domain mapping para sa mga hosted domains | Oo |
| GoDaddy | Hindi | Hindi |
| ResellerClub | Oo | Hindi |
| NameSilo | Hindi | Hindi |
| Enom | Oo | Hindi |

### Hakbang 2 — Ilagay ang mga kredensyal

Ang bawat provider ay may iba't ibang field para sa kredensyal:

**OpenSRS** — Username at private key (mula sa OpenSRS Reseller Control Panel)

**Namecheap** — Username at API key (mula sa Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint at mga kredensyal mula sa HostAfrica reseller module. Walang hiwalay na sandbox endpoint ang dokumentado ngayon; subukan muna ang ligtas na read-only checks bago magpatakbo ng live registrations.

**Openprovider** — Username at password na may enabled na API access. Ang optional sandbox mode ay gumagamit ng Openprovider sandbox API, at ang optional default customer handle ay maaaring gamitin ulit para sa mga registration.

**Hostinger** — Ang shared Hostinger hPanel API token mula sa core Hostinger integration. Ang parehong token ang nagpapatakbo ng core domain mapping at mga operasyon ng pagpaparehistro ng Domain Seller.

**GoDaddy** — API key at secret (mula sa developer.godaddy.com)

**ResellerClub** — Reseller ID at API key (mula sa ResellerClub control panel)

**NameSilo** — API key (mula sa namesilo.com › Account › API Manager)

**Enom** — Account ID at API token

Tingnan ang **Sandbox mode** kung available para subukan laban sa test environment ng provider bago mag-live.

### Hakbang 3 — Subukan ang koneksyon

I-click ang **Test Connection**. Magpapadala ang wizard ng isang magaan na tawag sa API para i-verify ang mga credentials at konektibidad. Ayusin ang anumang isyu sa credential bago magpatuloy.

### Hakbang 4 — I-import ang TLDs

I-click ang **Import TLDs** para kunin ang lahat ng available na TLDs at wholesale pricing mula sa konektadong provider. Pinupunan nito ang listahan ng TLD na ginagamit para sa mga domain product. Maaaring tumagal ng 30–60 segundo ang import para sa mga provider na may malalaking catalog ng TLD.

Awtomatikong muling isasynchronize ang mga TLD pagkatapos ng isang araw sa pamamagitan ng isang scheduled cron job.

### Hakbang 5 — Gumawa ng domain product

Ang wizard ay gagawa ng default catch-all domain product na may 10% markup. Maaari mong i-edit agad ang produktong ito o hindi iyon at gumawa ng mga produkto nang mano-mano sa ilalim ng **Ultimate Multisite › Products**.

Tingnan ang [Domain Products and Pricing](./domain-products) para sa kumpletong gabay sa konfigurasyon ng produkto.

---

## Pagreconfigure ng provider

Pumunta sa **Network Admin › Ultimate Multisite › Settings › Domain Seller** (o i-click ang **Settings** sa listahan ng plugin).

Ang settings page ay naglalaman ng:

- **I-enable domain selling** — i-on/off ang buong feature na ito
- **Default provider** — ang provider na ginagamit para sa paghahanap ng domain at mga bagong produkto
- **Max TLDs per search** — kung ilang TLD (Top-Level Domain) ang titingnan kapag naghahanap ang customer; mas mataas na halaga ay magpapakita ng mas maraming opsyon pero mas mabagal ito
- **Availability cache duration** — gaano hanggang matagal i-cache ang resulta ng availability at presyo; mas mababang halaga ay mas tumpak pero mas maraming API calls

- **Manage domain products** — mabilis na link papunta sa Products list
- **Configure providers** — nagbubukas ng Integration Wizard para magdagdag o mag-reconfigure ng mga provider

### Pagdaragdag ng pangalawang provider

I-click ang **Configure providers** at patakbuhin ulit ang wizard para sa bagong registrar. Maaari kang magkaroon ng maraming provider na naka-configure nang sabay-sabay. I-assign ang bawat domain product sa isang partikular na provider, o iwanan ito sa default.

### Manu-manong pag-sync ng TLDs

Sa settings page, i-click ang **Sync TLDs** sa tabi ng anumang naka-configure na provider para kunin ang pinakabagong pricing. Nakakatulong ito pagkatapos mag-update ng wholesale pricing o magdagdag ng mga bagong TLD ng isang provider.

---

## Logs

Bawat provider ay nagsusulat sa sarili nitong log channel. Ang mga logs ay makikita sa ilalim ng **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Nilalaman |
|---|---|
| `domain-seller-registration` | Lahat ng mga pagtatangka sa pagpaparehistro (tagumpay at kabiguan) |
| `domain-seller-renewal` | Mga resulta ng job sa renewal |
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

## Mga tala tungkol sa kakayahan ng Provider

Hindi lahat ng registrar API ay nagpapakita ng parehong mga operasyon. Ang addon ay nagpapakita ng mga hindi sinusuportang operasyon na may malinaw na error para sa admin kaysa sa tahimik na pagkabigo.

- **HostAfrica** sumusuporta sa pinakamalawak na workflow ng reseller, kasama ang lookup, sync ng TLD/presyo, pagpaparehistro, renewal, transfer, update ng nameserver, DNS records, EPP codes, registrar lock, at ID protection.
- **Openprovider** sumusuporta sa reseller-priced TLD sync, registration, renewal, transfers, update ng nameserver, DNS zones, EPP codes, registrar lock, at WHOIS privacy. Kinikilala nito gamit ang isang maikling panahon na bearer token na awtomatikong ina-refresh ng addon.
- **Hostinger** sumusuporta sa availability search, registration, portfolio lookup, update ng nameserver, registrar lock, at WHOIS privacy sa pamamagitan ng shared hPanel API token. Ang public Domains API ng Hostinger ay hindi nagpapakita ng reseller/wholesale pricing, inbound transfer, explicit renewal, o pagkuha ng EPP-code; ang mga renewal ay awtomatikong nagre-renew lamang.
