---
title: Ukumisela kunye noQwalaselo loMboneleli
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Umthengisi weDomeyini: Ukumisela kunye noLungiselelo loMboneleli {#domain-seller-setup-and-provider-configuration}

I-addon yoMthengisi weDomeyini iza newizadi yokumisela ekhokelwayo ekukhokelela kuwo onke amanyathelo afunekayo. Eli phepha ligubungela ukuhamba kwewizadi kunye nendlela yokulungisa okanye yokuphinda ulungiselele ababoneleli emva koko.

## Iimfuno {#requirements}

- **Multisite Ultimate** v2.4.12 okanye ephezulu, yenziwe isebenze kwinethiwekhi
- **PHP** 7.4+
- Iinkcukacha ze-API ubuncinane zomnye umbhalisi oxhaswayo

## Iwizadi yokumisela okokuqala {#first-run-setup-wizard}

Iwizadi yokumisela iqaliswa ngokuzenzekelayo okokuqala xa wenza i-plugin isebenze kwinethiwekhi. Ikwafumaneka nangaliphi na ixesha ukusuka ku-**Umlawuli weNethiwekhi › Ultimate Multisite › Ukumisela uMthengisi weDomeyini**.

### Inyathelo 1 — Khetha umboneleli {#step-1--choose-a-provider}

Khetha umbhalisi ofuna ukumqhagamshela. Iinketho ezixhaswayo:

| Umboneleli | Ulawulo lwe-DNS | Ubumfihlo be-WHOIS |
|---|---|---|
| OpenSRS | Ewe | Ewe |
| Namecheap | Hayi | Ewe (WhoisGuard, simahla) |
| HostAfrica | Ewe | Ewe (ukhuselo lwe-ID) |
| Openprovider | Ewe | Ewe |
| Hostinger | Ngesiseko semaphu yeedomeyini ze-Hostinger zeedomeyini ezibanjwayo | Ewe |
| GoDaddy | Hayi | Hayi |
| ResellerClub | Ewe | Hayi |
| NameSilo | Hayi | Hayi |
| Enom | Ewe | Hayi |

### Inyathelo 2 — Faka iinkcukacha zokungena {#step-2--enter-credentials}

Umboneleli ngamnye unemimandla yeenkcukacha zokungena eyahlukileyo:

**OpenSRS** — Igama lomsebenzisi kunye nesitshixo sabucala (zisuka kwi-OpenSRS Reseller Control Panel)

**Namecheap** — Igama lomsebenzisi kunye nesitshixo se-API (zisuka ku-Account › Izixhobo › Ufikelelo lwe-API)

**HostAfrica** — I-endpoint ye-Domains Reseller API kunye neenkcukacha zokungena ezisuka kwimodyuli yomthengisi kwakhona ye-HostAfrica. Akukho endpoint ye-sandbox eyahlukileyo echaziweyo okwangoku; vavanya ngeetsheki ezikhuselekileyo zokufunda kuphela ngaphambi kokuqhuba ukubhaliswa okusebenzayo.

**Openprovider** — Igama lomsebenzisi kunye nephasiwedi enofikelelo lwe-API oluvuliweyo. Imowudi ye-sandbox ekhethwayo isebenzisa i-Openprovider sandbox API, kwaye i-handle yomthengi emiselweyo ekhethwayo inokuphinda isetyenziswe kubhaliso.

**Hostinger** — I-token ye-Hostinger hPanel API ekwabelwana ngayo ukusuka kudibaniso olusisiseko lwe-Hostinger. Kwa-lo token inika amandla imaphu esisiseko yeedomeyini kunye nemisebenzi yokubhalisa yoMthengisi weDomeyini.

**GoDaddy** — Isitshixo se-API kunye nemfihlo (zisuka ku-developer.godaddy.com)

**ResellerClub** — I-ID yomthengisi kwakhona kunye nesitshixo se-API (zisuka kwiphaneli yolawulo ye-ResellerClub)

**NameSilo** — Isitshixo se-API (sisuka ku-namesilo.com › Account › Umphathi we-API)

**Enom** — I-ID ye-Account kunye ne-token ye-API

Phawula **Imowudi ye-sandbox** apho ifumaneka khona ukuze uvavanye ngokuchasene nendawo yovavanyo yomboneleli ngaphambi kokuba uye ngqo.

### Inyathelo 3 — Vavanya uqhagamshelo {#step-3--test-the-connection}

Cofa **Vavanya uQhagamshelo**. Iwizadi ithumela umnxeba we-API okhaphukhaphu ukuqinisekisa iinkcukacha zokungena kunye noqhagamshelwano. Lungisa nayiphi na imiba yeenkcukacha zokungena ngaphambi kokuqhubeka.

### Inyathelo 4 — Ngenisa ii-TLDs {#step-4--import-tlds}

Cofa **Ngenisa ii-TLDs** ukuze utsale zonke ii-TLDs ezifumanekayo kunye namaxabiso e-wholesale kumboneleli oqhagamshelweyo. Oku kugcwalisa uluhlu lwe-TLD olusetyenziswa ziimveliso zeedomeyini. Ukungenisa kungathatha imizuzwana engama-30–60 kubaboneleli abanekhatalaogu enkulu yee-TLD.

Ii-TLDs zikwaphinda zivumelaniswe ngokuzenzekelayo kanye ngemini ngomsebenzi we-cron ocwangcisiweyo.

### Inyathelo 5 — Yenza imveliso yedomeyini {#step-5--create-a-domain-product}

Iwizadi yenza imveliso yedomeyini emiselweyo ebamba konke ene-markup ye-10%. Ungayihlela le mveliso ngoko nangoko okanye utsibe uze wenze iimveliso ngesandla phantsi kwe-**Ultimate Multisite › Iimveliso**.

Bona [Iimveliso zeDomeyini kunye namaxabiso](./domain-products) ngesikhokelo esipheleleyo solungiselelo lwemveliso.

---

## Ukuphinda ulungiselele umboneleli {#reconfiguring-a-provider}

Yiya ku-**Umlawuli weNethiwekhi › Ultimate Multisite › Izicwangciso › Umthengisi weDomeyini** (okanye ucofe **Izicwangciso** kuluhlu lwe-plugin).

Iphepha lezicwangciso liqulathe:

- **Vumela ukuthengiswa kweedomeyini** — vula/cima lonke eli nqaku
- **Umboneleli omiselweyo** — umboneleli osetyenziselwa ukukhangela iidomeyini kunye neemveliso ezintsha
- **Ubuninzi bee-TLDs kukhangelo ngalunye** — zingaphi ii-TLDs ezijongwayo xa umthengi ekhangela; amaxabiso aphezulu abonisa iinketho ezininzi kodwa ayacotha
- **Ixesha le-cache lokufumaneka** — ixesha lokugcina iziphumo zokufumaneka kunye namaxabiso kwi-cache; amaxabiso aphantsi achaneke ngakumbi kodwa anyusa iminxeba ye-API
- **Lawula iimveliso zeedomeyini** — ikhonkco elikhawulezayo kuluhlu lweeMveliso
- **Lungiselela ababoneleli** — ivula iWizadi yoDibaniso ukongeza okanye ukuphinda ulungiselele ababoneleli

### Ukongeza umboneleli wesibini {#adding-a-second-provider}

Cofa **Lungiselela ababoneleli** uze uqhube iwizadi kwakhona kumbhalisi omtsha. Ungaba nababoneleli abaninzi abalungiselelwe ngaxeshanye. Yabela imveliso nganye yedomeyini kumboneleli othile, okanye uyishiye komiselweyo.

### Ukuvumelanisa ii-TLDs ngesandla {#syncing-tlds-manually}

Kwiphepha lezicwangciso, cofa **Vumelanisa ii-TLDs** ecaleni kwakhe nawuphi na umboneleli olungiselelweyo ukuze utsale amaxabiso amva nje. Oku kuluncedo emva kokuba umboneleli ehlaziye amaxabiso e-wholesale okanye ongeze ii-TLDs ezintsha.

---

## Iilog {#logs}

Umboneleli ngamnye ubhala kwitshaneli yakhe yelog. Iilog ziyabonakala phantsi kwe-**Umlawuli weNethiwekhi › Ultimate Multisite › Iilog**:

| Itshaneli yelog | Imixholo |
|---|---|
| `domain-seller-registration` | Zonke iinzame zobhaliso (impumelelo nokusilela) |
| `domain-seller-renewal` | Iziphumo zomsebenzi wohlaziyo |
| `domain-seller-opensrs` | Umsebenzi we-API ongahluzwanga we-OpenSRS |
| `domain-seller-namecheap` | Umsebenzi we-API ongahluzwanga we-Namecheap |
| `domain-seller-hostafrica` | Umsebenzi we-API ongahluzwanga we-HostAfrica |
| `domain-seller-openprovider` | Umsebenzi we-API ongahluzwanga we-Openprovider |
| `domain-seller-hostinger` | Umsebenzi we-API ongahluzwanga we-Hostinger |
| `domain-seller-godaddy` | Umsebenzi we-API ongahluzwanga we-GoDaddy |
| `domain-seller-resellerclub` | Umsebenzi we-API ongahluzwanga we-ResellerClub |
| `domain-seller-namesilo` | Umsebenzi we-API ongahluzwanga we-NameSilo |
| `domain-seller-enom` | Umsebenzi we-API ongahluzwanga we-Enom |

---

## Amanqaku ngobuchule bomboneleli {#provider-capability-notes}

Ayizizo zonke ii-API zababhalisi eziveza imisebenzi efanayo. I-addon ibonisa imisebenzi engaxhaswayo ngeempazamo ezicacileyo ezijoliswe kumlawuli endaweni yokusilela ngokuthe cwaka.

- **HostAfrica** ixhasa eyona workflow yabathengisi ebanzi esebenzayo, kuquka ukukhangela, ungqamaniso lwe-TLD/amaxabiso, ubhaliso, uhlaziyo, ukudlulisela, uhlaziyo lwe-nameserver, iirekhodi ze-DNS, iikhowudi ze-EPP, registrar lock, kunye nokhuseleko lwe-ID.
- **Openprovider** ixhasa ungqamaniso lwe-TLD olunamaxabiso omthengisi, ubhaliso, uhlaziyo, ukudluliselwa, uhlaziyo lwe-nameserver, iindawo ze-DNS, iikhowudi ze-EPP, registrar lock, kunye nobumfihlo be-WHOIS. Iqinisekisa nge-bearer token yexesha elifutshane ethi i-addon iyihlaziye ngokuzenzekelayo.
- **Hostinger** ixhasa ukukhangela ukufumaneka, ubhaliso, ukukhangela ipotifoliyo, uhlaziyo lwe-nameserver, registrar lock, kunye nobumfihlo be-WHOIS nge-token ye-hPanel API ekwabelwana ngayo. I-Domains API kawonke-wonke ka-Hostinger ayivezi amaxabiso omthengisi/ewholesale, ukudluliselwa okungenayo, uhlaziyo olucacileyo, okanye ukufunyanwa kwekhowudi ye-EPP; uhlaziyo luyi-auto-renew kuphela.
