---
title: Imikhiqizo Yezizinda kanye Namanani
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Imikhiqizo Yama-domain Namanani

Imikhiqizo yama-domain iyindlela olawula ngayo amanani, ama-TLD, ubumfihlo be-WHOIS, nokukhethwa komhlinzeki. Umkhiqizo ngamunye we-domain ungumkhiqizo ojwayelekile we-Multisite Ultimate onethebhu eyengeziwe ethi **Izilungiselelo Ze-domain**.

## Ukudala umkhiqizo we-domain {#creating-a-domain-product}

1. Iya ku-**Network Admin › Ultimate Multisite › Products**
2. Chofoza **Add New**
3. Setha uhlobo lomkhiqizo lube **Domain**
4. Lungisa ithebhu ethi **Izilungiselelo Ze-domain** (bheka ngezansi)
5. Londoloza

Imikhiqizo yama-domain ivela nebheji elinsomi elithi **Domain** ohlwini lwemikhiqizo futhi ingahlungwa kusetshenziswa ithebhu ethi **Imikhiqizo Yama-domain**.

## Ithebhu yezilungiselelo ze-domain {#domain-settings-tab}

### Umhlinzeki {#provider}

Khetha ukuthi yimuphi umbhalisi ophethe ukubhaliswa kwalo mkhiqizo. Okuzenzakalelayo kuba **Default provider** yomhlaba wonke esethwe kuzilungiselelo ze-Domain Seller.

### Ama-TLD asekelwayo {#supported-tlds}

Kushiye kungenalutho ukuze udale **umkhiqizo obamba konke** osebenza kuwo wonke ama-TLD angahambisani nomunye umkhiqizo.

Faka uhlu lwama-TLD oluhlukaniswe ngamakhoma (isb., `.com, .net, .org`) ukuze udale **umkhiqizo oqondene ne-TLD ethile** osebenza kulezo zandiso kuphela.

**Ukuthi ukufanisa imikhiqizo kusebenza kanjani:** Lapho ikhasimende lisesha i-domain, i-addon ikhetha umkhiqizo ofana ngokucacile kakhulu. Umkhiqizo one-`.com` ohlwini lwawo lwama-TLD uthola kuqala kunomkhiqizo obamba konke. Uma kungekho mkhiqizo oqondene ne-TLD ethile ofanayo, kusetshenziswa obamba konke. Uma kungekho mikhiqizo ekhona, ukusesha i-domain akuboniswa.

### Uhlobo lwe-markup {#markup-type}

Izindlela ezintathu zilawula ukuthi intengo yakho yokudayisa ibalwa kanjani kusukela ezindlekweni ze-wholesale:

| Imodi | Isebenza kanjani |
|---|---|
| **Iphesenti** | Yengeza iphesenti ngaphezu kwezindleko ze-wholesale. I-markup engu-20% ku-domain ye-wholesale engu-$10 inikeza u-$12. |
| **I-markup engaguquki** | Yengeza inani ledola elingaguquki. I-markup engu-$5 ku-domain engu-$10 inikeza u-$15. |
| **Intengo engaguquki** | Ayinaki nhlobo izindleko ze-wholesale. Ihlala ikhokhisa inani olifakayo. |

### Amanani esingeniso {#introductory-pricing}

Kuvumele ukuze unikeze intengo yonyaka wokuqala eyehlisiwe. Setha **Intengo yesingeniso** ehlukile (intengo yonyaka woku-1) kanye **Nentengo yokuvuselela** evamile (unyaka wesi-2 nangaphezulu). Ikhasimende libona womabili amanani eboniswa ngesikhathi se-checkout ukuze lazi ukuthi lilindeleni lapho kuvuselelwa.

### Ubumfihlo be-WHOIS {#whois-privacy}

Kulawula ukuthi ukuvikelwa kobumfihlo be-WHOIS kunikezwa yini kuma-domain abhaliswe ngalo mkhiqizo.

| Isilungiselelo | Ukuziphatha |
|---|---|
| **Kukhutshaziwe** | Ubumfihlo be-WHOIS abunikezwa noma bunikwe amandla neze. |
| **Kufakiwe Njalo** | Ubumfihlo be-WHOIS bunikwa amandla ngokuzenzakalelayo lapho kubhaliswa ngaphandle kwenkokhiso. |
| **Ukukhetha Kwekhasimende** | Ibhokisi lokuhlola livela ngesikhathi se-checkout. Setha **Intengo yobumfihlo** ukuze ukhokhise ngonyaka, noma uyishiye ku-$0 ukuze uyinikeze mahhala. |

Ku-Namecheap, ubumfihlo be-WHOIS busebenzisa i-WhoisGuard (ihlala imahhala). Ku-OpenSRS, busebenzisa isevisi yobumfihlo ye-OpenSRS (ingaba nezindleko ku-wholesale).

---

## Ukungenisa nokuvumelanisa ama-TLD {#tld-import-and-sync}

Imikhiqizo yama-domain ibonisa amanani e-wholesale esikhathi sangempela atholwe kumhlinzeki oxhunyiwe. Ukuze lokhu kusebenze, ama-TLD kufanele angeniswe.

- **Ukuvumelanisa ngesandla:** Settings › Domain Seller › Sync TLDs (ngomhlinzeki ngamunye)
- **Ukuvumelanisa okuzenzakalelayo:** Kusebenza nsuku zonke ngomsebenzi we-cron ohleliwe kubo bonke abahlinzeki abahlelwe

Ngemva kokuvumelanisa, iya kunoma iyiphi ithebhu ethi Domain Settings yomkhiqizo we-domain bese usebenzisa isikhethi se-TLD ukuze ubone ama-TLD atholakalayo namanani awo amanje e-wholesale.

---

## Ukuvuselela okuzenzakalelayo {#auto-renewal}

Ukuvuselelwa kwama-domain kuxhunywe esimweni sobulungu sekhasimende:

- Lapho ubulungu buvuselelwa futhi i-domain ixhunyiwe, ukuvuselelwa kwe-domain kufakwa ngokuzenzakalelayo emgqeni
- Imizamo yokuvuselela isebenzisa i-payment gateway esebenzayo yekhasimende
- Ukuvuselela okuhlulekile kuzanywa futhi ngokuzenzakalelayo nge-exponential backoff
- Izaziso ze-imeyili zithunyelwa ngokuvuselelwa okuphumelele, ukwehluleka, nokuphelelwa yisikhathi okusondelayo

Ama-ID ezifanekiso ze-imeyili ezehlakalo zomjikelezo wokuphila kwe-domain:

| Isehlakalo | I-ID yesifanekiso |
|---|---|
| I-domain ibhalisiwe | `domain_registered` |
| I-domain ivuselelwe | `domain_renewed` |
| Ukuvuselela kuhlulekile | `domain_renewal_failed` |
| I-domain izophelelwa yisikhathi maduze | `domain_expiring_soon` |

---

## Admin: Ukubhaliswa kwe-domain ngesandla {#admin-manual-domain-registration}

Ukuze ubhalise i-domain egameni lekhasimende ngaphandle kokuthi lidlule ku-checkout:

1. Iya ku-**Network Admin › Ultimate Multisite › Register Domain**
2. Khetha ikhasimende bese ufaka igama le-domain
3. Gcwalisa imininingwane yokuxhumana yomuntu obhalisayo (igama, ikheli, ifoni)
4. Chofoza **Register**

Irekhodi le-domain liyadalwa futhi lixhunywe ku-account yekhasimende.
