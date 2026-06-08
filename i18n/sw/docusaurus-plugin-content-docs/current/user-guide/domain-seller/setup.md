---
title: Kusanidi na Utoaji wa Konfigurasi
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Ufungaji na Kuweka Waraka wa Watoa Huduma

Kiambato cha Domain Seller kinakuja na mfumo wa ufungaji wenye mwongozo ambao unakufanyia kazi kila hatua inayohitajika. Ukurasa huu unazungumzia mtiririko wa mfumo wa ufungaji na jinsi ya kuweka au kurekebisha waraka wa watoa huduma baadaye.

## Mahitaji

- **Multisite Ultimate** v2.4.12 au zaidi, iliyofunguzwa kwa kiwango cha mtandao (network-activated)
- **PHP** 7.4+
- Usajili wa API (API credentials) kwa angalau rejista moja inayodukungazwa

## Mfumo wa ufungaji wa mara ya kwanza

Mfumo wa ufungaji unainuka kiotomatiki mara ya kwanza unapofungusha kiambato hicho kwa kiwango cha mtandao. Pia unapatikana wakati wowote kutoka **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Hatua 1 — Chagua mtoa huduma

Chagua rejista unayotaka kuunganisha. Chaguo zilizodukungazwa ni:

| Provider | Usimamizi wa DNS | Faragha ya WHOIS |
|---|---|---|
| OpenSRS | Ndiyo | Ndiyo |
| Namecheap | Hapana | Ndiyo (WhoisGuard, bure) |
| GoDaddy | Hapana | Hapana |
| ResellerClub | Ndiyo | Hapana |
| NameSilo | Hapana | Hapana |
| Enom | Ndiyo | Hapana |

### Hatua 2 — Ingiza usajili (credentials)

Kila mtoa huduma ana sehemu tofauti za usajili:

**OpenSRS** — Jina la mtumiaji (Username) na *private key* (kutoka OpenSRS Reseller Control Panel)

**Namecheap** — Jina la mtumiaji (Username) na *API key* (kutoka Account › Tools › API Access)

**GoDaddy** — *API key* na *secret* (kutoka developer.godaddy.com)

**ResellerClub** — Reseller ID na *API key* (kutoka ResellerClub control panel)

**NameSilo** — *API key* (kutoka namesilo.com › Account › API Manager)

**Enom** — Account ID na API token

Angalia **Sandbox mode** pale inapopatikana ili kujaribu dhidi ya mazingira ya majaribio ya mtoa huduma kabla ya kuweka kwa matumizi halisi.

### Hatua 3 — Jaribu muunganisho

Bonyeza **Test Connection**. Mfumo unatuma wito mdogo wa API ili kuthibitisha usajili na muunganisho. Rekebisha matatizo yoyote ya usajili kabla ya kuendelea.

### Hatua 4 — Import TLDs

Bonyeza **Import TLDs** ili kuvuta TLDs zote zinazopatikana na bei za jumla kutoka kwa mtoa huduma aliyeunganishwa. Hii inajaza orodha ya TLDs inayotumika na bidhaa za nje ya nje (domain products). Import inaweza kuchukua sekunde 30–60 kwa watoa huduma wenye katalogi kubwa ya TLDs.

TLDs pia huzunganishwa upya kiotomatiki mara moja kwa siku kupitia kazi ya *cron job* iliyopangwa.

### Hatua 5 — Unda bidhaa ya nje ya nje (domain product)

Mfumo unaunda bidhaa ya nje ya nje ya msingi (default catch-all domain product) yenye ongezeko la 10%. Unaweza kuhariri bidhaa hii mara moja au kupuuzia na kuunda bidhaa kwa mikono chini ya **Ultimate Multisite › Products**.

Tazama [Domain Products and Pricing](./domain-products) kwa mwongozo kamili wa kuweka bidhaa.

---

## Kuweka Waraka Upya wa Mtoa Huduma

Nenda kwa **Network Admin › Ultimate Multisite › Settings › Domain Seller** (au bonyeza **Settings** katika orodha ya kiambato).

Ukurasa wa mipangilio unajumuisha:

- **Enable domain selling** — kubadilisha kipengele kizima kuwa wazi/zim.
- **Default provider** — mtoa huduma anayetumika kwa utafutaji wa nje ya nje na bidhaa mpya.
- **Max TLDs per search** — ni TLDs ngapi za kuangalia wakati mteja anatafuta; thamani kubwa huonyesha chaguo zaidi lakini ni polepole.
- **Availability cache duration** — muda wa kuhifadhi (cache) matokeo ya upatikanaji na bei; thamani ndogo ni sahihi zaidi lakini huongeza wito wa API.
- **Manage domain products** — kiungo cha haraka kwenda orodha ya Bidhaa (Products).
- **Configure providers** — kufungua Integration Wizard kuongeza au kuweka waraka upya wa watoa huduma.

### Kuongeza Mtoa Huduma wa Pili

Bonyeza **Configure providers** na uendeshe mfumo wa ufungaji tena kwa rejista mpya. Unaweza kuwa na watoa huduma kadhaa waliofunguzwa kwa wakati mmoja. Weka kila bidhaa ya nje ya nje kwa mtoa huduma maalum, au iache kwenye chaguo la msingi.

### Kusawazisha TLDs kwa Mikono

Katika ukurasa wa mipangilio, bonyeza **Sync TLDs** kando ya mtoa huduma yeyote aliyezunguzwa ili kuvuta bei mpya. Hii ni muhimu baada ya mtoa huduma kubadilisha bei za jumla au kuongeza TLDs mpya.

---

## Matukio (Logs)

Kila mtoa huduma ana chaneli yake ya matukio. Matukio yanaweza kuonekana chini ya **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Maudhui |
|---|---|
| `domain-seller-registration` | Jaribio zote za usajili (za mafanikio na kushindwa) |
| `domain-seller-renewal` | Matokeo ya kazi ya uwezesha upya (Renewal job) |
| `domain-seller-opensrs` | Shughuli za API za OpenSRS (Raw) |
| `domain-seller-namecheap` | Shughuli za API za Namecheap (Raw) |
| `domain-seller-godaddy` | Shughuli za API za GoDaddy (Raw) |
| `domain-seller-resellerclub` | Shughuli za API za ResellerClub (Raw) |
| `domain-seller-namesilo` | Shughuli za API za NameSilo (Raw) |
| `domain-seller-enom` | Shughuli za API za Enom (Raw) |
