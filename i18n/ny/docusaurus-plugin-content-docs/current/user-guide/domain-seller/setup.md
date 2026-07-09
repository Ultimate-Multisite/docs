---
title: Kuthandiza ndi Kukhazikitsa ndi Mwandikazi
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Mwandikizi wa Domain: Kuanzisha na Kuweka Watoa Huduma (Provider Configuration) {#domain-seller-setup-and-provider-configuration}

Addon ya Domain Seller inatoka na mwongozo wa kuanzisha unaokuelekeza hatua zote unazohitaji kufanya. Ukurasa huu unahusu mtiririko wa mwongozo huo na jinsi ya kuweka au kubadilisha watoa huduma (providers) baada ya hapo.

## Mahitaji {#requirements}

- **Multisite Ultimate** v2.4.12 au zaidi, inayoamsha kwenye mtandao
- **PHP** 7.4+
- API credentials kwa angalau moja ya registrar inayotumiwa

## Mwongozo wa kuanzisha mara ya kwanza (First-run setup wizard) {#first-run-setup-wizard}

Mwongozo huu unaanza kiotomatiki wakati mwanzo unapofanya usajili wa mtandao (network-activate) plugin. Unaweza kupata pia wakati wowote kutoka **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Hatua ya 1 — Chagua mtoa huduma (Choose a provider) {#step-1--choose-a-provider}

Chagua registrar unayotaka kuunganisha nalo. Chaguo zilizosomozwa:

| Mtoa Huduma (Provider) | Usimamizi wa DNS | Faragha la WHOIS |
|---|---|---|
| OpenSRS | Ndiyo | Ndiyo |
| Namecheap | Hapana | Ndiyo (WhoisGuard, bure) |
| HostAfrica | Ndiyo | Ndiyo (Ulinzi wa ID) |
| Openprovider | Ndiyo | Ndiyo |
| Hostinger | Kupitia muundo wa domain ya Hostinger kwa domains zilizohifadhiwa | Ndiyo |
| GoDaddy | Hapana | Hapana |
| ResellerClub | Ndiyo | Hapana |
| NameSilo | Hapana | Hapana |
| Enom | Ndiyo | Hapana |

### Hatua ya 2 — Ingiza taarifa (Enter credentials) {#step-2--enter-credentials}

Kila mtoa huduma una sehemu tofauti za taarifa:

**OpenSRS** — Jina la mtumiaji na ufunguo wa siri (private key) (kutoka kwenye OpenSRS Reseller Control Panel)

**Namecheap** — Jina la mtumiaji na API key (kutoka kwenye Account › Tools › API Access)

**HostAfrica** — Mwisho wa API ya Domains Reseller na taarifa kutoka kwenye module ya reseller ya HostAfrica. Kwa sasa hakuna sandbox endpoint tofauti iliyodokumentiwa; jaribu kwa kuangalia tu kwa usalama kabla ya kuanza usajili halisi.

**Openprovider** — Jina la mtumiaji na nenosiri (password) na kufanya API access iwe imefunguliwa. Modu ya sandbox ni hiari inatumia Openprovider sandbox API, na jina la mteja la msingi (default customer handle) liwehiari linaweza kutumika tena kwa usajili.

**Hostinger** — Token ya yomwe wamene wa Hostinger hPanel. Iyi token yomwe imapera ku mapeto a domain ya mupatanso woyamba ndi mapeto a Domain Seller.

**GoDaddy** — API key ndi secret (kuyenera kuchokera mu developer.godaddy.com)

**ResellerClub** — Reseller ID ndi API key (kuyenera kuchokera mu control panel ya ResellerClub)

**NameSilo** — API key (kuyenera kuchokera mu namesilo.com › Account › API Manager)

**Enom** — Account ID ndi API token

Chitete **Sandbox mode** pamene muli ndi ulemu wopereka kuti mupatsa kuwoneka pa mwayi wopereka poyamba mopereka kupita m'mwayi wopereka.

### Step 3 — Yendetsa kukonzekera (Test the connection) {#step-3--test-the-connection}

Kutete **Test Connection**. Wizard imapereka API call yomwe yomwe imapereka kuti mupatsa mapeto ndi kukhala ndi malo. Onesha ndalama zosiyana pa mapeto monga momwe mungayendetsa poyamba.

### Step 4 — Kutsatira TLDs (Import TLDs) {#step-4--import-tlds}

Kutete **Import TLDs** kuti mupatsa zonse za TLDs zomwe zili pansi ndi mitengo ya wholesale kuchokera kwa provider yomwe muli wokhala ndi malo. Izi zimapereka list ya TLDs yomwe imaperekedwa pa mapeto a domain. Kutsatira kumatha kulimbikitsa sekondi kapena sekondi ziwiri poyamba kuti mupatsa mitengo ya wholesale zomwe zili pansi ndi kuwoneka kwa provider omwe muli wokhala ndi list ikulu ya TLDs.

TLDs zimaperekedwa pano poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba p

- **Kusanya kuuzia domain** — kusongoza (toggle) feature yose on/off
- **Mphamvu ya mpambano (Default provider)** — mpambano woyendwa wokutera kutambula domain ndi zinthu zatsopano
- **Max TLDs poyenera kupeza** — koti m'moyo wofunsa, kodi m'moyo wofunsa kuti m'moyo wofunsa ndipo; mavuto omwe ochepa amapereka zozoza koma amapangidwa nthawi yomweyo.
- **Mfutso wa cache ya kuwoneka (Availability cache duration)** — kutanthauza kuti m'moyo woyendwa wokwoneka ndi kuphunzira kwa mpambano; mavuto omwe ochepa amapereka zokhazikitsa koma amapangidwa nthawi yomweyo.
- **Kupanga domain products** — link yofupi kuti m'moyo wopambana (Products list)

### Kuti m'moyo woyendwa wokwoneka (second provider) {#step-5--create-a-domain-product}

Chonje **Configure providers** ndikugwira wizard pano kwa mpambano woyendwa wosiyanasiyana. Muli ndi mpambano osiyanasiyana omwe mwapanga m'moyo wopambana. Kodi mupereka mpambano woyendwa wokhutskizi (domain product) ku mpambano oyenera, kapena mupereka kuti muli m'default.

### Kuti TLDs kukhazikitsidwe ndi m'moyo wopambana (Syncing TLDs manually) {#reconfiguring-a-provider}

M'moyo wopambana, chonje **Sync TLDs** poyenera mpambano yoyendwa wokwoneka kuti mupeza mavuto omwe ochepa. Izi zimene kukhala kofunika pambuyo potera mpambano imapereka mavuto awholesale kapena kupanga TLDs zatsopano.

---

## Logs (M'moyo wopambana) {#adding-a-second-provider}

Kukonse mpambano imapereka ku channel yoyenera kwake. M'moyo wopambana ndi wogulitsidwa m'moyo wofunsa **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Zomwezi zonse zokugwira imi (zomwezi zomwezi womwe) (zomwezi zomwezi wosangalala ndi osangalala ndi osangalala) |
| `domain-seller-renewal` | Zomwezi zomwezi za ntchito ya kulemba m'maka |
| `domain-seller-opensrs` | Zomwezi zokwera kwa OpenSRS API |
| `domain-seller-namecheap` | Zomwezi zokwera kwa Namecheap API |
| `domain-seller-hostafrica` | Zomwezi zokwera kwa HostAfrica API |
| `domain-seller-openprovider` | Zomwezi zokwera kwa Openprovider API |
| `domain-seller-hostinger` | Zomwezi zokwera kwa Hostinger API |
| `domain-seller-godaddy` | Zomwezi zokwera kwa GoDaddy API |
| `domain-seller-resellerclub` | Zomwezi zokwera kwa ResellerClub API |
| `domain-seller-namesilo` | Zomwezi zokwera kwa NameSilo API |
| `domain-seller-enom` | Zomwezi zokwera kwa Enom API |

---

## Zomwezi za ulemu wa M'maka (Provider capability notes) {#syncing-tlds-manually}

Sikuti ndipo m'maka onse a registrar amapereka zomwe ndi ntchito yomwe. Addon imapereka ntchito zomwe si zikubwera ndi m'maka ya admin kwa njira yomwezi, m'maka kuti zimweze kukhala ndi mavuto osalira.

- **HostAfrica** imapereka njira yomwezi yomweyo kwambiri ya reseller, kuphunzitsa, kusinchronicera TLD/mifeso, kugwira imi, ntchito ya kulemba m'maka (nameserver updates), DNS records, EPP codes, registrar lock, ndi ID protection.
- **Openprovider** imapereka sync ya TLD yomwezi yomwe wosangalala, kusinchronicera, kugwira imi, ntchito ya kulemba m'maka (nameserver updates), DNS zones, EPP codes, registrar lock, ndi WHOIS privacy. Imapereka nkhani ya short-lived bearer token yomwe addon imaperekera kwa kujambula bwino.
- **Hostinger** imapereka kupatsa m'maka (availability search), kugwira imi, kuphunzitsa portfolio, ntchito ya kulemba m'maka (nameserver updates), registrar lock, ndi WHOIS privacy monga token ya hPanel yomwe imapereka kwawo. API ya Hostinger ya Domains imapereka ntchito ya reseller/wholesale pricing, inbound transfer, renewal yomwe wosangalala, kapena kupereka EPP-code; ntchito za kulemba m'maka (renewals) zimaperekera kuti zikulemba zikukulemba.
