---
title: Usanidi na Mipangilio ya Mtoa Huduma
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Muuzaji wa Vikoa: Usanidi na Mipangilio ya Watoa Huduma

Nyongeza ya Muuzaji wa Vikoa huja na mchawi wa usanidi unaokuongoza kupitia kila hatua inayohitajika. Ukurasa huu unaeleza mtiririko wa mchawi na jinsi ya kusanidi au kusanidi upya watoa huduma baadaye.

## Mahitaji

- **Multisite Ultimate** v2.4.12 au ya juu zaidi, imewashwa kwenye mtandao
- **PHP** 7.4+
- Vitambulisho vya API kwa angalau msajili mmoja unaoungwa mkono

## Mchawi wa usanidi wa mara ya kwanza

Mchawi wa usanidi huanzishwa kiotomatiki mara ya kwanza unapowasha plugin kwenye mtandao. Pia unapatikana wakati wowote kutoka **Msimamizi wa Mtandao › Ultimate Multisite › Usanidi wa Muuzaji wa Vikoa**.

### Hatua ya 1 — Chagua mtoa huduma

Chagua msajili unayetaka kuunganisha. Chaguo zinazoungwa mkono:

| Mtoa huduma | Usimamizi wa DNS | Faragha ya WHOIS |
|---|---|---|
| OpenSRS | Ndiyo | Ndiyo |
| Namecheap | Hapana | Ndiyo (WhoisGuard, bure) |
| HostAfrica | Ndiyo | Ndiyo (ulinzi wa kitambulisho) |
| Openprovider | Ndiyo | Ndiyo |
| Hostinger | Kupitia ulinganishaji wa vikoa wa msingi wa Hostinger kwa vikoa vinavyopangishwa | Ndiyo |
| GoDaddy | Hapana | Hapana |
| ResellerClub | Ndiyo | Hapana |
| NameSilo | Hapana | Hapana |
| Enom | Ndiyo | Hapana |

### Hatua ya 2 — Weka vitambulisho

Kila mtoa huduma ana sehemu tofauti za vitambulisho:

**OpenSRS** — Jina la mtumiaji na ufunguo binafsi (kutoka OpenSRS Reseller Control Panel)

**Namecheap** — Jina la mtumiaji na ufunguo wa API (kutoka Account › Zana › Ufikiaji wa API)

**HostAfrica** — Endpoint ya Domains Reseller API na vitambulisho kutoka moduli ya muuzaji wa HostAfrica. Hakuna endpoint tofauti ya sandbox iliyorekodiwa kwa sasa; jaribu kwa ukaguzi salama wa kusoma tu kabla ya kuendesha usajili wa moja kwa moja.

**Openprovider** — Jina la mtumiaji na nenosiri lenye ufikiaji wa API uliowezeshwa. Hali ya hiari ya sandbox hutumia Openprovider sandbox API, na handle chaguomsingi ya mteja ya hiari inaweza kutumika tena kwa usajili.

**Hostinger** — Tokeni ya pamoja ya Hostinger hPanel API kutoka ujumuishaji wa msingi wa Hostinger. Tokeni hiyo hiyo huendesha ulinganishaji wa msingi wa vikoa na shughuli za usajili za Muuzaji wa Vikoa.

**GoDaddy** — Ufunguo wa API na siri (kutoka developer.godaddy.com)

**ResellerClub** — Kitambulisho cha muuzaji na ufunguo wa API (kutoka paneli ya udhibiti ya ResellerClub)

**NameSilo** — Ufunguo wa API (kutoka namesilo.com › Account › Kidhibiti cha API)

**Enom** — Kitambulisho cha Account na tokeni ya API

Weka alama kwenye **Hali ya sandbox** inapopatikana ili kujaribu dhidi ya mazingira ya majaribio ya mtoa huduma kabla ya kwenda moja kwa moja.

### Hatua ya 3 — Jaribu muunganisho

Bofya **Jaribu Muunganisho**. Mchawi hutuma mwito mwepesi wa API ili kuthibitisha vitambulisho na muunganisho. Rekebisha matatizo yoyote ya vitambulisho kabla ya kuendelea.

### Hatua ya 4 — Ingiza TLD

Bofya **Ingiza TLD** ili kuvuta TLD zote zinazopatikana na bei za jumla kutoka kwa mtoa huduma aliyeunganishwa. Hii hujaza orodha ya TLD inayotumiwa na bidhaa za vikoa. Uingizaji unaweza kuchukua sekunde 30–60 kwa watoa huduma wenye katalogi kubwa za TLD.

TLD pia husawazishwa upya kiotomatiki mara moja kwa siku kupitia kazi ya cron iliyoratibiwa.

### Hatua ya 5 — Unda bidhaa ya kikoa

Mchawi huunda bidhaa chaguomsingi ya kikoa inayojumuisha zote kwa nyongeza ya bei ya 10%. Unaweza kuhariri bidhaa hii mara moja au kuruka na kuunda bidhaa mwenyewe chini ya **Ultimate Multisite › Bidhaa**.

Tazama [Bidhaa za Vikoa na Bei](./domain-products) kwa mwongozo kamili wa usanidi wa bidhaa.

---

## Kusanidi upya mtoa huduma

Nenda kwenye **Msimamizi wa Mtandao › Ultimate Multisite › Mipangilio › Muuzaji wa Vikoa** (au bofya **Mipangilio** kwenye orodha ya plugin).

Ukurasa wa mipangilio una:

- **Washa uuzaji wa vikoa** — washa/zima kipengele kizima
- **Mtoa huduma chaguomsingi** — mtoa huduma anayetumiwa kwa utafutaji wa vikoa na bidhaa mpya
- **TLD za juu zaidi kwa kila utafutaji** — idadi ya TLD za kukagua mteja anapotafuta; thamani za juu huonyesha chaguo zaidi lakini ni polepole zaidi
- **Muda wa cache ya upatikanaji** — muda wa kuhifadhi matokeo ya upatikanaji na bei kwenye cache; thamani za chini ni sahihi zaidi lakini huongeza miito ya API
- **Dhibiti bidhaa za vikoa** — kiungo cha haraka kwenda kwenye orodha ya Bidhaa
- **Sanidi watoa huduma** — hufungua Mchawi wa Ujumuishaji ili kuongeza au kusanidi upya watoa huduma

### Kuongeza mtoa huduma wa pili

Bofya **Sanidi watoa huduma** na endesha mchawi tena kwa msajili mpya. Unaweza kuwa na watoa huduma wengi waliowekwa mipangilio kwa wakati mmoja. Pangia kila bidhaa ya kikoa mtoa huduma mahususi, au iache kwenye chaguomsingi.

### Kusawazisha TLD mwenyewe

Kwenye ukurasa wa mipangilio, bofya **Sawazisha TLD** karibu na mtoa huduma yeyote aliyesanidiwa ili kuvuta bei za hivi karibuni. Hii ni muhimu baada ya mtoa huduma kusasisha bei za jumla au kuongeza TLD mpya.

---

## Kumbukumbu

Kila mtoa huduma huandika kwenye chaneli yake ya kumbukumbu. Kumbukumbu zinaweza kutazamwa chini ya **Msimamizi wa Mtandao › Ultimate Multisite › Kumbukumbu**:

| Chaneli ya kumbukumbu | Yaliyomo |
|---|---|
| `domain-seller-registration` | Majaribio yote ya usajili (yaliyofanikiwa na yaliyoshindwa) |
| `domain-seller-renewal` | Matokeo ya kazi za usasishaji |
| `domain-seller-opensrs` | Shughuli ghafi za OpenSRS API |
| `domain-seller-namecheap` | Shughuli ghafi za Namecheap API |
| `domain-seller-hostafrica` | Shughuli ghafi za HostAfrica API |
| `domain-seller-openprovider` | Shughuli ghafi za Openprovider API |
| `domain-seller-hostinger` | Shughuli ghafi za Hostinger API |
| `domain-seller-godaddy` | Shughuli ghafi za GoDaddy API |
| `domain-seller-resellerclub` | Shughuli ghafi za ResellerClub API |
| `domain-seller-namesilo` | Shughuli ghafi za NameSilo API |
| `domain-seller-enom` | Shughuli ghafi za Enom API |

---

## Vidokezo vya uwezo wa watoa huduma

Si kila API ya msajili hufichua shughuli zilezile. Nyongeza huonyesha shughuli zisizoungwa mkono kwa hitilafu zilizo wazi zinazoonekana kwa msimamizi badala ya kushindwa kimya kimya.

- **HostAfrica** inasaidia mtiririko mpana zaidi wa moja kwa moja wa kazi za muuzaji tena, ikijumuisha utafutaji, usawazishaji wa TLD/bei, usajili, usasishaji, uhamisho, masasisho ya seva za majina, rekodi za DNS, misimbo ya EPP, kufuli ya msajili, na ulinzi wa ID.
- **Openprovider** inasaidia usawazishaji wa TLD kwa bei za wauzaji tena, usajili, usasishaji, uhamisho, masasisho ya seva za majina, kanda za DNS, misimbo ya EPP, kufuli ya msajili, na faragha ya WHOIS. Inathibitisha kwa bearer token ya muda mfupi ambayo kiendelezi huisasisha kiotomatiki.
- **Hostinger** inasaidia utafutaji wa upatikanaji, usajili, utafutaji wa mkusanyiko, masasisho ya seva za majina, kufuli ya msajili, na faragha ya WHOIS kupitia hPanel API token ya pamoja. Domains API ya umma ya Hostinger haionyeshi bei za muuzaji tena/jumla, uhamisho unaoingia, usasishaji wa wazi, au urejeshaji wa msimbo wa EPP; usasishaji ni wa kiotomatiki pekee.
