---
title: Gukoresha no Gukoresha Umuhoodwa n'Umuhoodwa w'Ubutabera
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Mwanditsi wa Domain: Urugero n'Urugero mu gukoresha Provider

Addon ya Domain Seller itangira na uburyo bwo gutanga (guided setup wizard) witeguye ukugera ku buryo bwose bwo kubyara. Iyi rubuga ririmo ibyo mu buryo bwo gukora iyo wizard, no uko ugomba guhindura cyangwa gukoresha provider nyuma.

## Amakuru (Requirements)

- **Multisite Ultimate** v2.4.12 cyangwa uburyo bwizera, wariwe mu rwego rwa network
- **PHP** 7.4+
- Icyemezo cy'API credentials ku gihe cyiza cyangwa cyose cyo registrar yashobora gukoreshwa

## Uburyo bwo gutanga (First-run setup wizard)

Iyi wizard itangira yo gukora iyo mbere ugiye gukoresha plugin. Iyo, ifite ubushobozi mu gihe cyose ku **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Igice 1 — Gukoresha provider

Gukoresha registrar wumva wumva kugira ngo ubanze. Uburyo bwo gukoresha:

| Provider | Umuco w'DNS (DNS management) | Ubwumvikane bw'WHOIS (WHOIS privacy) |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| HostAfrica | Yes | Yes (ID protection) |
| Openprovider | Yes | Yes |
| Hostinger | Buri uburyo bwo gukoresha domain ya Hostinger yari itangira | Yes |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Igice 2 — Gukoresha cyemezo (Enter credentials)

Icyemezo cy'API cyangwa ibindi byiza bishobora kuba bifite uburyo bw'ubwoko mu gihe cyose:

**OpenSRS** — Username n'iki key ya private (kuvugwa ku OpenSRS Reseller Control Panel)

**Namecheap** — Username n'iki API key (kuvugwa kuri Account › Tools › API Access)

**HostAfrica** — Endpoint ya API y'Domains Reseller no cyemezo mu gihe cyose ku module ya HostAfrica reseller. Cyangwa uburyo bwo gukoresha sandbox endpoint, nta cyemezo cyiza cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cyangwa cy

**Hostinger** — Token hPanel API ya keraherya y'umukoresha w'uburyo bw'ibyo bishobora gukora. Icyemezo cy'umukoresha cyaminshi cyashobora gukora uburyo bwo gukoresha domain zikoreshwa mu gihe cy'ubwujisoro (core domain mapping) n'uburyo bwo gukoresha abanyamukoresha bwo domain.

**GoDaddy** — API key na secret (kumenya ku developer.godaddy.com)

**ResellerClub** — Reseller ID na API key (kumenya mu control panel ya ResellerClub)

**NameSilo** — API key (kumenya ku namesilo.com › Account › API Manager)

**Enom** — Account ID na API token

Gukoresha **Sandbox mode** aho uzi, kugira ngo wanyize ibyo bishobora gukoreshwa mu gihe cy'ubwujisoro (test environment) mbere y'uko ubushobozi bukurwa.

### Icyemezo 3 — Gukora umwujiza (Test the connection)

Gukoresha **Test Connection**. Umuhitwa utuma API call ugiye gukoreshwa mu gihe cyo gutera umwujiza w'uburyo bwo kumenya amakuru n'ubushobozi. Kugira ngo ushyire ibyo byishobora kuba byari yibonye, ushyira ibyo byari yibonye mbere yuko ukarinda.

### Icyemezo 4 — Gukoresha TLDs (Import TLDs)

Gukoresha **Import TLDs** kugira ngo utera ubwo bose bishobora kuba byari yibonye n'uburyo bw'uburyo bwo gukoresha imyungano ya ubwujisoro (TLDs) na uburyo bwo gukoresha ubushobozi mu gihe cyo gutera umwujiza. Ibi bituma igice cy'imyungano y'ubwujisoro (TLD list) ishyirwa mu gihe cyo gukora ibintu bikoreshwa mu domain products. Gukoresha uburyo bwo gukoresha imyungano byashobora kugarura 30–60 segiyo ku gihe cyo abanyamukoresha bafite imyungano itonderaga.

Imyungano y'ubwujisoro (TLDs) bituma bikorwa mu gihe cyo gukoreshwa mu gihe cyo gutera umwujiza, ibyo byituma kugarura buri gihe cyo kuva ku gihe cyo kuboneka.

### Icyemezo 5 — Gukora domain product (Create a domain product)

Umuhitwa utuma uburyo bwo gukoresha domain w'ubwujisoro (catch-all domain product) mu gihe cyo gutera umwujiza, kandi uboneka n'uburyo bw'uburyo bwo kugarura 10%. Uzi gukora ibi byo mu gihe cyo gutera umwujiza cyangwa uburyo bwo gukoresha imyitwarire (skip) kandi ukora ibyo mu gihe cyo gukoreshwa **Ultimate Multisite › Products**.

Bona [Domain Products and Pricing](./domain-products) kugira ngo ushyire ibyo byose by'uburyo bwo gukoresha.

---

## Gukora uburyo bwo gukoresha umwujiza (Reconfiguring a provider)

Gukoresha **Network Admin › Ultimate Multisite › Settings › Domain Seller** (cyangwa gukoresha **Settings** mu gihe cyo kubona imyitwarire).

Icyemezo cy'uburyo bwo gukoresha kigira ibi:

- **Koresha ubushya ubutshe** — gura mu gukoresha ubutshe (toggle) uburyo bwose bukurikirana on/off
- **Ubutshe bwa mbere** — ubutshe w'ubutshe w'ubwujuzi (provider) w'uburyo bwo gukoresha ubutshe n'uburyo bwo ubushobozi bwa mbere
- **Max TLDs mu gukoresha** — uburyo bwo kumenya ko hari ibyo ngufi cyane cyangwa ibyo byiza kubona mu gihe umuntu yashaka; ibyo bikomeye byerekana ibyo byinshi ariko byihutirwa cyane
- **Icyemezo cyo gukoresha availability cache** — igihe cyo gukoresha uburyo bwo gukoresha availability n'ibyo byiza mu gihe umuntu yashaka; ibyo bikomeye byerekana ibyo byihutirwa cyane
- **Gukoresha domain products** — urugero rishobora kugera ku gukoresha Products list

### Gufasha ubutshe runaka (Adding a second provider)

Koresha **Configure providers** kandi ugira umuntu w'uburyo bwo gukoresha cyangwa uburyo bwo kubyara mu gihe cyose. Ufite ubutshe bwa mbere n'ibindi byiza kugira mu gihe cyose. Gukoresha domain product cyangwa se yaba kuri default.

### Gufasha TLDs mu buryo bw'umwihariko (Syncing TLDs manually)

Mu settings page, koresha **Sync TLDs** ku gukoresha ubutshe runaka (configured provider) kugira ngo wumva ibyo byiza cyane. Ibi bikomeye cyane iyo ubutshe runaka bishobora gufasha ubushobozi bw'uburyo bwo gukoresha wholesale pricing cyangwa gufasha TLDs zishya.

---

## Logs (Icyemezo)

Ubutshe runaka buri bwo gukoresha ubutshe bwawe bishobora gukoresha log channel y'ibyo byiza. Icyemezo byerekana ku **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Inshuro |
|---|---|
| `domain-seller-registration` | Uburyo bosemezo bwo gukoresha (ubwumva n'ubunyangwa) |
| `domain-seller-renewal` | Kurimo y'ibyo byo kurimo (job results) |
| `domain-seller-opensrs` | Icyemezo cy'ingenzi ya OpenSRS API |
| `domain-seller-namecheap` | Icyemezo cy'ingenzi ya Namecheap API |
| `domain-seller-hostafrica` | Icyemezo cy'ingenzi ya HostAfrica API |
| `domain-seller-openprovider` | Icyemezo cy'ingenzi ya Openprovider API |
| `domain-seller-hostinger` | Icyemezo cy'ingenzi ya Hostinger API |
| `domain-seller-godaddy` | Icyemezo cy'ingenzi ya GoDaddy API |
| `domain-seller-resellerclub` | Icyemezo cy'ingenzi ya ResellerClub API |
| `domain-seller-namesilo` | Icyemezo cy'ingenzi ya NameSilo API |
| `domain-seller-enom` | Icyemezo cy'ingenzi ya Enom API |

---

## Icyemezo ry'uburyo bwo gukoresha (Provider capability notes)

Nta API y'ingenzi ituma uburyo bwose bwo gukora ibyo. Addon (plugin) yituma ibyo byo bitewe n'ibyo ntibyo byumva mu buryo bwo kwandikira (admin-facing errors) kandi bituma ubwoba bwawe bukoresha cyangwa butera umuntu ku masezerano.

- **HostAfrica** ituma uburyo bwose bwiza bwo gukora ibyo bishobora kwitwa "reseller workflow", bifasha mu guteka, guhindura urugero rwa TLD/giciro (pricing sync), gukoresha, kurimo, guhindura inyandiko z'ibanga (nameserver updates), DNS records, EPP codes, gukora lock y'ingenzi, no gukemura ikibazo cyo kwitonderwa.
- **Openprovider** ituma uburyo bwo gukoresha TLD sync ry'ingenzi ya reseller, gukoresha, kurimo, guhindura inyandiko z'ibanga (nameserver updates), DNS zones, EPP codes, gukora lock y'ingenzi, no kwita ku privacy ya WHOIS. Iyi API ituma uburyo bwo gutera umuntu mu token w'ubwoba w'umwuka (short-lived bearer token) uyu addon utuma mu gihe cyiza.
- **Hostinger** ituma uburyo bwo gukoresha gukoresha urugero rwa kumenya ubushobozi, gukoresha, guhindura inyandiko z'ibanga (nameserver updates), gukora lock y'ingenzi, no kwita ku privacy ya WHOIS binyuze mu token w'hPanel wosemeze. API ya Hostinger ituma uburyo bwo kumenya giciro ry'ingenzi ya reseller/wholesale, guhindura ibyo byo bitewe n'ibyo byumva (inbound transfer), kurimo cyangwa gukoresha EPP-code; kurimo y'ingenzi irimo gukora auto-renewal gusa.
