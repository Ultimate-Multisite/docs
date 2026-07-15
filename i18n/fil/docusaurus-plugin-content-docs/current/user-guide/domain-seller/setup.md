---
title: Pagse-set up at Pagsasaayos ng Tagapagbigay
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Setup at Configuration ng Provider

Ang Domain Seller addon ay may kasamang ginabayang setup wizard na gagabay sa iyo sa bawat kinakailangang hakbang. Saklaw ng pahinang ito ang daloy ng wizard at kung paano i-configure o muling i-configure ang mga provider pagkatapos.

## Mga Kinakailangan {#requirements}

- **Multisite Ultimate** v2.4.12 o mas mataas, naka-activate sa network
- **PHP** 7.4+
- Mga API credential para sa hindi bababa sa isang suportadong registrar

## Setup wizard sa unang paggamit {#first-run-setup-wizard}

Awtomatikong inilulunsad ang setup wizard sa unang pagkakataong i-network-activate mo ang plugin. Available din ito anumang oras mula sa **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Hakbang 1 — Pumili ng provider {#step-1--choose-a-provider}

Piliin ang registrar na gusto mong ikonekta. Mga suportadong opsyon:

| Provider | Pamamahala ng DNS | Privacy ng WHOIS |
|---|---|---|
| OpenSRS | Oo | Oo |
| Namecheap | Hindi | Oo (WhoisGuard, libre) |
| HostAfrica | Oo | Oo (proteksyon ng ID) |
| Openprovider | Oo | Oo |
| Hostinger | Sa pamamagitan ng core Hostinger domain mapping para sa mga naka-host na domain | Oo |
| GoDaddy | Hindi | Hindi |
| ResellerClub | Oo | Hindi |
| NameSilo | Hindi | Hindi |
| Enom | Oo | Hindi |

### Hakbang 2 — Ilagay ang mga credential {#step-2--enter-credentials}

Magkakaiba ang mga field ng credential ng bawat provider:

**OpenSRS** — Username at private key (mula sa OpenSRS Reseller Control Panel)

**Namecheap** — Username at API key (mula sa Account › Mga Tool › API Access)

**HostAfrica** — Domains Reseller API endpoint at mga credential mula sa HostAfrica reseller module. Walang hiwalay na sandbox endpoint na kasalukuyang naka-dokumento; subukan gamit ang ligtas na read-only na mga pagsusuri bago magpatakbo ng live na mga pagpaparehistro.

**Openprovider** — Username at password na may naka-enable na API access. Gumagamit ang opsyonal na sandbox mode ng Openprovider sandbox API, at maaaring muling gamitin ang opsyonal na default customer handle para sa mga pagpaparehistro.

**Hostinger** — Ang shared Hostinger hPanel API token mula sa core Hostinger integration. Ang parehong token ang nagpapatakbo ng core domain mapping at mga operasyon sa pagpaparehistro ng Domain Seller.

**GoDaddy** — API key at secret (mula sa developer.godaddy.com)

**ResellerClub** — Reseller ID at API key (mula sa ResellerClub control panel)

**NameSilo** — API key (mula sa namesilo.com › Account › API Manager)

**Enom** — Account ID at API token

Lagyan ng check ang **Sandbox mode** kung available upang subukan laban sa test environment ng provider bago mag-live.

### Hakbang 3 — Subukan ang koneksyon {#step-3--test-the-connection}

I-click ang **Subukan ang Koneksyon**. Nagpapadala ang wizard ng magaan na API call upang beripikahin ang mga credential at connectivity. Ayusin ang anumang isyu sa credential bago magpatuloy.

### Hakbang 4 — Mag-import ng mga TLD {#step-4--import-tlds}

I-click ang **Mag-import ng mga TLD** upang kunin ang lahat ng available na TLD at wholesale pricing mula sa nakakonektang provider. Pinupunan nito ang listahan ng TLD na ginagamit ng mga produkto ng domain. Maaaring tumagal ang import nang 30–60 segundo para sa mga provider na may malalaking catalog ng TLD.

Awtomatiko ring nire-re-sync ang mga TLD isang beses bawat araw sa pamamagitan ng naka-schedule na cron job.

### Hakbang 5 — Gumawa ng produkto ng domain {#step-5--create-a-domain-product}

Gumagawa ang wizard ng default na catch-all na produkto ng domain na may 10% markup. Maaari mong i-edit agad ang produktong ito o laktawan at manu-manong gumawa ng mga produkto sa ilalim ng **Ultimate Multisite › Mga Produkto**.

Tingnan ang [Mga Produkto at Pagpepresyo ng Domain](./domain-products) para sa kumpletong gabay sa configuration ng produkto.

---

## Muling pag-configure ng provider {#reconfiguring-a-provider}

Pumunta sa **Network Admin › Ultimate Multisite › Mga Setting › Domain Seller** (o i-click ang **Mga Setting** sa listahan ng plugin).

Naglalaman ang pahina ng mga setting ng:

- **I-enable ang pagbebenta ng domain** — i-toggle ang buong feature on/off
- **Default na provider** — ang provider na ginagamit para sa mga paghahanap ng domain at mga bagong produkto
- **Pinakamaraming TLD bawat paghahanap** — kung ilang TLD ang susuriin kapag naghahanap ang customer; mas maraming opsyon ang ipinapakita ng mas matataas na halaga ngunit mas mabagal
- **Tagal ng availability cache** — kung gaano katagal i-cache ang mga resulta ng availability at pricing; mas tumpak ang mas mabababang halaga ngunit nagpaparami ng mga API call
- **Pamahalaan ang mga produkto ng domain** — mabilis na link sa listahan ng Mga Produkto
- **I-configure ang mga provider** — binubuksan ang Integration Wizard upang magdagdag o muling mag-configure ng mga provider

### Pagdaragdag ng pangalawang provider {#adding-a-second-provider}

I-click ang **I-configure ang mga provider** at patakbuhing muli ang wizard para sa bagong registrar. Maaari kang magkaroon ng maraming provider na sabay-sabay na naka-configure. Italaga ang bawat produkto ng domain sa isang partikular na provider, o iwan ito sa default.

### Manu-manong pag-sync ng mga TLD {#syncing-tlds-manually}

Sa pahina ng mga setting, i-click ang **I-sync ang mga TLD** sa tabi ng anumang naka-configure na provider upang kunin ang pinakabagong pricing. Kapaki-pakinabang ito pagkatapos mag-update ang provider ng wholesale pricing o magdagdag ng mga bagong TLD.

---

## Mga Log {#logs}

Nagsusulat ang bawat provider sa sarili nitong log channel. Matitingnan ang mga log sa ilalim ng **Network Admin › Ultimate Multisite › Mga Log**:

| Log channel | Mga Nilalaman |
|---|---|
| `domain-seller-registration` | Lahat ng pagtatangka sa pagpaparehistro (tagumpay at pagkabigo) |
| `domain-seller-renewal` | Mga resulta ng renewal job |
| `domain-seller-opensrs` | Raw na aktibidad ng OpenSRS API |
| `domain-seller-namecheap` | Raw na aktibidad ng Namecheap API |
| `domain-seller-hostafrica` | Raw na aktibidad ng HostAfrica API |
| `domain-seller-openprovider` | Raw na aktibidad ng Openprovider API |
| `domain-seller-hostinger` | Raw na aktibidad ng Hostinger API |
| `domain-seller-godaddy` | Raw na aktibidad ng GoDaddy API |
| `domain-seller-resellerclub` | Raw na aktibidad ng ResellerClub API |
| `domain-seller-namesilo` | Raw na aktibidad ng NameSilo API |
| `domain-seller-enom` | Raw na aktibidad ng Enom API |

---

## Mga tala sa kakayahan ng provider {#provider-capability-notes}

Hindi inilalantad ng bawat registrar API ang parehong mga operasyon. Ipinapakita ng addon ang mga hindi suportadong operasyon gamit ang malinaw na mga error na nakaharap sa admin sa halip na tahimik na mabigo.

- **HostAfrica** sumusuporta sa pinakamalawak na live na daloy ng reseller, kabilang ang lookup, pag-sync ng TLD/pagpepresyo, pagpaparehistro, renewal, transfer, mga update sa nameserver, mga DNS record, EPP code, registrar lock, at proteksyon sa ID.
- **Openprovider** sumusuporta sa pag-sync ng TLD na may presyong pang-reseller, pagpaparehistro, renewal, mga transfer, mga update sa nameserver, mga DNS zone, EPP code, registrar lock, at WHOIS privacy. Nag-a-authenticate ito gamit ang panandaliang bearer token na awtomatikong nire-refresh ng addon.
- **Hostinger** sumusuporta sa availability search, pagpaparehistro, portfolio lookup, mga update sa nameserver, registrar lock, at WHOIS privacy sa pamamagitan ng shared na hPanel API token. Hindi inilalantad ng public Domains API ng Hostinger ang reseller/wholesale na pagpepresyo, inbound transfer, tahasang renewal, o pagkuha ng EPP-code; ang mga renewal ay auto-renew lamang.
