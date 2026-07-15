---
title: Kugadzirisa uye Kuva Nekuti Mupenyu
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Setup uye Kuita Provider Configuration

Addon ya Domain Seller inosvika ne wizard ye setup inoshandisa kuti inokupa mhinduro yakakubatsira kuenda zvinhu zvose zvinodzidzera. Ipeji iyi inozivaka kurumo (flow) ye wizard uye sei kutaura kana kutambawo (reconfigure) providers panguva apo.

## Zvinodzidzera (Requirements) {#requirements}

- **Multisite Ultimate** v2.4.12 kana yakare, inoshandiswa ne network
- **PHP** 7.4+
- Credentials dzem API dzinogona kuita kune registrar inga yakaita zvinhu zvakakosha.

## Wizard ye setup yavo yakare (First-run setup wizard) {#first-run-setup-wizard}

Wizard ya setup inokuramba inozivaka nekuti unowada network-activate plugin yakare. Inoonekawo kunge mazuva ose ku **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Step 1 — Chibvumirano (Choose a provider) {#step-1--choose-a-provider}

Tsvaka registrar inotipa kuti utangei kune iye. Zvinogona kutanga zvinhu izvi:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| HostAfrica | Yes | Yes (ID protection) |
| Openprovider | Yes | Yes |
| Hostinger | Via core Hostinger domain mapping for hosted domains | Yes |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Step 2 — Shanda (Enter credentials) {#step-2--enter-credentials}

Mwari wese we provider anogona kuita zvinhu dzakasiyana dze credentials:

**OpenSRS** — Username uye private key (kutanga kubva mu OpenSRS Reseller Control Panel)

**Namecheap** — Username uye API key (kutanga kubva mu Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint uye credentials kutanga kubva mu HostAfrica reseller module. Hasi haichiri sandbox endpoint inozivaka; shandisa checks dzakare dzinogona kuita kuti zvinhu zvakare (read-only) panguva iweina registration.

**Openprovider** — Username uye password neAPI access yakare imba. Sandbox mode inoshandisa Openprovider sandbox API, uye default customer handle inogona kutanga kubva kune registrations.

**Hostinger** — Token ya hPanel ya Hostinger inotera shared kubva. Iyi token iyei inogona kuita mapping kwedomain core nekuita operations dzakare nedzimba dzeDomain Seller.

**GoDaddy** — API key uye secret (kubva ku developer.godaddy.com)

**ResellerClub** — Reseller ID uye API key (kubva mu control panel ya ResellerClub)

**NameSilo** — API key (kubva ku namesilo.com › Account › API Manager)

**Enom** — Account ID uye API token

Chinjisa **Sandbox mode** kana inengei ine kuti uone zvinhu vachiri munzvimbo yechine kuteerera (test environment) pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba pamba

- **Enable domain selling** — chira (toggle) feature yese on/off
- **Default provider** — provider inosikati inosikati dziri kuita domain searches uye new products
- **Max TLDs per search** — kunge kuita tsvakurudzo nemutare anenge akawanda kana kuti zvakawanda, asi zvinhu zvakawanda zvinotora nguva yakawanda
- **Availability cache duration** — nguva inosikati (cache) results dzinogona kuonekwa; nguva dzinokwanisa dzakaoma zvakanyanya asi dzichingai dzine API calls dzakawanda

- **Manage domain products** — link yakafanana kune Products list
- **Configure providers** — inosimbisa Integration Wizard kuti uonge kana utaunganidza providers

### Kuongeza provider yechipiri {#step-3--test-the-connection}

Chira **Configure providers** uye run wizard anobva dzinotora registrar yese. Unogona kuva neproviders dzakawanda dzinotsvaga mumwe nguva. Ramba unoreva domain product kune provider yakasiya, kana uva pamusoro pe default.

### Kuita sync TLDs manually {#step-4--import-tlds}

Muninga settings page, chira **Sync TLDs** panguva yese inosimbisa configured provider kuti utore pricing dzakare. Izvi zviri kuita zvakanaka panguva provider inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Zvinura dzose dzirevo (kuchengetedzo uye kusvika) zvose zvekuita registration (kubva uye kupera) |
| `domain-seller-renewal` | Matopapo ekuti job ye renewal yakapfuma |
| `domain-seller-opensrs` | Zvinangwa zvinokosha zve OpenSRS API |
| `domain-seller-namecheap` | Zvinangwa zvinokosha zve Namecheap API |
| `domain-seller-hostafrica` | Zvinangwa zvinokosha zve HostAfrica API |
| `domain-seller-openprovider` | Zvinangwa zvinokosha zve Openprovider API |
| `domain-seller-hostinger` | Zvinangwa zvinokosha zve Hostinger API |
| `domain-seller-godaddy` | Zvinangwa zvinokosha zve GoDaddy API |
| `domain-seller-resellerclub` | Zvinangwa zvinokosha zve ResellerClub API |
| `domain-seller-namesilo` | Zvinangwa zvinokosha zve NameSilo API |
| `domain-seller-enom` | Zvinangwa zvinokosha zve Enom API |

---

## Notes dzinogona kuita neva (Provider capability notes) {#step-5--create-a-domain-product}

Hauonzi zvose API dzine zvinhu zvakasiyana. Addon inoshandisa zvinhu hazvazovanzwiswa nekugadzirisa matambudziko akakosha kune admin, pane kupfuura nekugadzirisa matambudziko akakosha kune admin pane kuita zvinangwa dzine kuratidza (support).

- **HostAfrica** inoshandisa nzira yakawanda yekuti reseller workflow ine zvinhu zvakasiyana, izvo zvichiri kuita lookup, sync ya TLD/pricing, registration, renewal, transfer, updates dze nameserver, DNS records, EPP codes, registrar lock, uye ID protection.
- **Openprovider** inoshandisa sync ya TLD yekuti inopfuura reseller pricing, registration, renewal, transfers, updates dze nameserver, DNS zones, EPP codes, registrar lock, uye WHOIS privacy. Inoauthenticate nebearer token inosvika nguva yakakura inoshandiswa nekugadzirisa zvinhu izvi automatically.
- **Hostinger** inoshandisa availability search, registration, portfolio lookup, updates dze nameserver, registrar lock, uye WHOIS privacy kupfuura hPanel API token yavo. Public Domains API ya Hostinger haisi inoshandisa reseller/wholesale pricing, inbound transfer, renewal yakasimba (explicit renewal), kana kuita EPP-code retrieval; renewals dzine auto-renewal chete.
