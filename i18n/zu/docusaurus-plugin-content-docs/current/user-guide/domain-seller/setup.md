---
title: Ukusetha kanye Nokulungiselelwa Komhlinzeki
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Umthengisi Wesizinda: Ukusetha Nokumisa Umhlinzeki

Isengezo se-Umthengisi Wesizinda siza newizadi yokusetha eqondisiwe ekuhambisa kuzo zonke izinyathelo ezidingekayo. Leli khasi lichaza ukugeleza kwewizadi nokuthi ungabamisa noma ubamise kabusha kanjani abahlinzeki kamuva.

## Izimfuneko {#requirements}

- **Multisite Ultimate** v2.4.12 noma ngaphezulu, yenziwe yasebenza kunethiwekhi
- **PHP** 7.4+
- Imininingwane ye-API okungenani yomregistrar oyedwa osekelwayo

## Iwizadi yokusetha yokuqala {#first-run-setup-wizard}

Iwizadi yokusetha ivuleka ngokuzenzakalelayo okokuqala lapho wenza i-plugin isebenze kunethiwekhi. Iyatholakala futhi nganoma yisiphi isikhathi kusuka ku-**Umphathi Wenethiwekhi › Ultimate Multisite › Ukusetha Umthengisi Wesizinda**.

### Isinyathelo 1 — Khetha umhlinzeki {#step-1--choose-a-provider}

Khetha umregistrar ofuna ukumxhuma. Izinketho ezisekelwayo:

| Umhlinzeki | Ukuphathwa kwe-DNS | Ubumfihlo be-WHOIS |
|---|---|---|
| OpenSRS | Yebo | Yebo |
| Namecheap | Cha | Yebo (WhoisGuard, mahhala) |
| HostAfrica | Yebo | Yebo (ukuvikelwa kwe-ID) |
| Openprovider | Yebo | Yebo |
| Hostinger | Nge-core Hostinger domain mapping yezizinda ezisingathiwe | Yebo |
| GoDaddy | Cha | Cha |
| ResellerClub | Yebo | Cha |
| NameSilo | Cha | Cha |
| Enom | Yebo | Cha |

### Isinyathelo 2 — Faka imininingwane yokungena {#step-2--enter-credentials}

Umhlinzeki ngamunye unezinkambu ezihlukene zemininingwane yokungena:

**OpenSRS** — Igama lomsebenzisi nokhiye wangasese (kusuka ku-OpenSRS Reseller Control Panel)

**Namecheap** — Igama lomsebenzisi nokhiye we-API (kusuka ku-Account › Tools › API Access)

**HostAfrica** — I-endpoint ye-Domains Reseller API nemininingwane yokungena evela kumojuli ye-reseller ye-HostAfrica. Ayikho i-endpoint ehlukile ye-sandbox ebhalwe njengamanje; hlola ngezivivinyo eziphephile zokufunda kuphela ngaphambi kokusebenzisa ukubhaliswa bukhoma.

**Openprovider** — Igama lomsebenzisi nephasiwedi enokufinyelela kwe-API okuvunyelwe. Imodi ye-sandbox ozikhethela yona isebenzisa i-Openprovider sandbox API, futhi i-handle yekhasimende ezenzakalelayo ozikhethela yona ingaphinda isetshenziselwe ukubhaliswa.

**Hostinger** — I-token ye-Hostinger hPanel API eyabiwe evela ekuhlanganisweni kwe-core Hostinger. I-token efanayo inika amandla i-core domain mapping nemisebenzi yokubhalisa ye-Umthengisi Wesizinda.

**GoDaddy** — Ukhiye we-API nemfihlo (kusuka ku-developer.godaddy.com)

**ResellerClub** — I-ID ye-reseller nokhiye we-API (kusuka kuphaneli yokulawula ye-ResellerClub)

**NameSilo** — Ukhiye we-API (kusuka ku-namesilo.com › Account › API Manager)

**Enom** — I-ID ye-Account ne-token ye-API

Hlola **Imodi ye-sandbox** lapho itholakala khona ukuze uvivinye ngokumelene nendawo yokuhlola yomhlengzeki ngaphambi kokuya bukhoma.

### Isinyathelo 3 — Hlola ukuxhumana {#step-3--test-the-connection}

Chofoza **Hlola Ukuxhumana**. Iwizadi ithumela ucingo lwe-API olulula ukuze iqinisekise imininingwane yokungena nokuxhumeka. Lungisa noma yiziphi izinkinga zemininingwane yokungena ngaphambi kokuqhubeka.

### Isinyathelo 4 — Ngenisa ama-TLD {#step-4--import-tlds}

Chofoza **Ngenisa ama-TLD** ukuze udonse wonke ama-TLD atholakalayo namanani e-wholesale kumhlinzeki oxhunyiwe. Lokhu kugcwalisa uhlu lwama-TLD olusetshenziswa imikhiqizo yezizinda. Ukungenisa kungathatha imizuzwana engu-30–60 kubahlinzeki abanamakhathalogi amakhulu ama-TLD.

Ama-TLD aphinde avumelaniswe ngokuzenzakalelayo kanye ngosuku ngomsebenzi we-cron ohleliwe.

### Isinyathelo 5 — Dala umkhiqizo wesizinda {#step-5--create-a-domain-product}

Iwizadi idala umkhiqizo wesizinda ozenzakalelayo obamba konke one-markup engu-10%. Ungahlela lo mkhiqizo ngokushesha noma weqe bese udala imikhiqizo mathupha ngaphansi kwe-**Ultimate Multisite › Imikhiqizo**.

Bheka [Imikhiqizo Yezizinda Namanani](./domain-products) ukuze uthole umhlahlandlela ogcwele wokumisa umkhiqizo.

---

## Ukumisa kabusha umhlinzeki {#reconfiguring-a-provider}

Iya ku-**Umphathi Wenethiwekhi › Ultimate Multisite › Izilungiselelo › Umthengisi Wesizinda** (noma chofoza **Izilungiselelo** ohlwini lwama-plugin).

Ikhasi lezilungiselelo liqukethe:

- **Vumela ukuthengiswa kwezizinda** — shintsha isici sonke sivuleke/sivaleke
- **Umhlinzeki ozenzakalelayo** — umhlinzeki osetshenziselwa ukusesha izizinda nemikhiqizo emisha
- **Ama-TLD amaningi kakhulu ekusesheni ngakunye** — mangaki ama-TLD okufanele ahlolwe lapho ikhasimende lisesha; amanani aphezulu abonisa izinketho eziningi kodwa ayanensa
- **Isikhathi se-cache sokutholakala** — isikhathi sokugcina imiphumela yokutholakala namanani ku-cache; amanani aphansi anembe kakhulu kodwa akhulisa izingcingo ze-API
- **Phatha imikhiqizo yezizinda** — isixhumanisi esisheshayo ohlwini lweMikhiqizo
- **Misa abahlinzeki** — kuvula iWizadi Yokuhlanganisa ukuze wengeze noma umise kabusha abahlinzeki

### Ukwengeza umhlinzeki wesibili {#adding-a-second-provider}

Chofoza **Misa abahlinzeki** bese usebenzisa iwizadi futhi kumregistrar omusha. Ungaba nabahlinzeki abaningi abamiswe ngesikhathi esisodwa. Nikeza umkhiqizo wesizinda ngamunye kumhlinzeki othile, noma uwushiye kozenzakalelayo.

### Ukuvumelanisa ama-TLD mathupha {#syncing-tlds-manually}

Ekhasini lezilungiselelo, chofoza **Vumelanisa ama-TLD** eduze kwanoma yimuphi umhlinzeki omisiwe ukuze udonse amanani akamuva. Lokhu kuyasiza ngemva kokuthi umhlinzeki ebuyekeze amanani e-wholesale noma engeze ama-TLD amasha.

---

## Amalogi {#logs}

Umhlinzeki ngamunye ubhala esiteshini sakhe selogi. Amalogi ayabonakala ngaphansi kwe-**Umphathi Wenethiwekhi › Ultimate Multisite › Amalogi**:

| Isiteshi selogi | Okuqukethwe |
|---|---|
| `domain-seller-registration` | Yonke imizamo yokubhalisa (impumelelo nokwehluleka) |
| `domain-seller-renewal` | Imiphumela yomsebenzi wokuvuselela |
| `domain-seller-opensrs` | Umsebenzi we-OpenSRS API ongahluziwe |
| `domain-seller-namecheap` | Umsebenzi we-Namecheap API ongahluziwe |
| `domain-seller-hostafrica` | Umsebenzi we-HostAfrica API ongahluziwe |
| `domain-seller-openprovider` | Umsebenzi we-Openprovider API ongahluziwe |
| `domain-seller-hostinger` | Umsebenzi we-Hostinger API ongahluziwe |
| `domain-seller-godaddy` | Umsebenzi we-GoDaddy API ongahluziwe |
| `domain-seller-resellerclub` | Umsebenzi we-ResellerClub API ongahluziwe |
| `domain-seller-namesilo` | Umsebenzi we-NameSilo API ongahluziwe |
| `domain-seller-enom` | Umsebenzi we-Enom API ongahluziwe |

---

## Amanothi ngamakhono omhlinzeki {#provider-capability-notes}

Akuwona wonke ama-API ama-registrar aveza imisebenzi efanayo. Isengezo siveza imisebenzi engasekelwayo ngamaphutha acacile abhekiswe kumphathi esikhundleni sokwehluleka buthule.

- **HostAfrica** isekela ukuhamba komsebenzi kwe-reseller okubanzi kakhulu okubukhoma, okuhlanganisa lookup, ukuvumelanisa kwe-TLD/pricing, registration, renewal, transfer, nameserver updates, DNS records, EPP codes, registrar lock, kanye ne-ID protection.
- **Openprovider** isekela ukuvumelanisa kwe-TLD okunentengo ye-reseller, registration, renewal, transfers, nameserver updates, DNS zones, EPP codes, registrar lock, kanye ne-WHOIS privacy. Iqinisekisa nge-bearer token ephila isikhathi esifushane i-addon eyivuselelayo ngokuzenzakalelayo.
- **Hostinger** isekela availability search, registration, portfolio lookup, nameserver updates, registrar lock, kanye ne-WHOIS privacy nge-hPanel API token eyabiwe. I-Domains API yomphakathi ye-Hostinger ayivezi amanani e-reseller/wholesale, inbound transfer, explicit renewal, noma ukutholwa kwe-EPP-code; renewals zi-auto-renew kuphela.
