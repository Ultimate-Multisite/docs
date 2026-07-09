---
title: 'Isifundo 12: Ukuqhuba ishishini'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Isifundo 12: Ukuqhuba Ishishini {#lesson-12-running-the-business}

Iqonga ayisiyo projekthi oyigqibayo -- lishishini oliqhubayo. Esi sifundo sigubungela imisebenzi yemihla ngemihla yokulawula i-FitSite: inkxaso, ukuhlawulisa, ulondolozo, nokugcina abathengi bonwabile.

## Apho Besiyeke Khona {#where-we-left-off}

I-FitSite iyasebenza kwaye abathengi bayabhalisa. Ngoku kufuneka uqhube umsebenzi ngendlela ezinzileyo.

## Imisebenzi Yemihla Ngemihla {#daily-operations}

### Ukubeka Esweni {#monitoring}

Jonga oku yonke imihla (okanye usete izilumkiso):

- **Uptime**: Ingaba iqonga liyafikeleleka? Sebenzisa inkonzo yokubeka esweni i-uptime.
- **Ubhaliso olutsha**: Bangaphi abathengi abatsha ababhalisileyo namhlanje?
- **Iintlawulo ezingaphumelelanga**: Ingaba kukho ukusilela kweentlawulo okufuna ingqalelo?
- **Izicelo zenkxaso**: Ingaba kukho imibuzo yabathengi engaphendulwanga?

### Inkxaso Yabathengi {#customer-support}

Ugxininiso lwakho kwicandelo elithile luyinzuzo apha. Kuba bonke abathengi bakho zizitudiyo zokomelela komzimba, uza kubona imibuzo efanayo iphinda-phindwa:

**Imibuzo eqhelekileyo oza kuyifumana:**

- "Ndiyihlaziya njani ishedyuli yeeklasi zam?"
- "Ndingayitshintsha imibala yesayithi yam?"
- "Ndimongeza njani umqeqeshi omtsha kwisayithi yam?"
- "I-domain yam ayisebenzi"
- "Ndiyirhoxisa/ndiyiphucula njani iplan yam?"

Yakha isiseko sakho solwazi (esiqaliswe kwiSifundo 8) ujolise kule mibuzo ephindaphindekayo. Yonke itikiti yenkxaso ebingaba linqaku lesiseko solwazi luphawu lokuba ubhale elo nqaku.

### Amanqanaba Enkxaso {#support-tiers}

Njengoko ukhula, cwangcisa inkxaso ngokweplan:

| Iplan | Inqanaba Lenkxaso | Ixesha Lokuphendula |
|------|--------------|---------------|
| Starter | Isiseko solwazi + i-imeyile | iiyure ezingama-48 |
| Growth | Inkxaso nge-imeyile | iiyure ezingama-24 |
| Pro | I-imeyile ephambili + umnxeba wokungenisa | iiyure ezi-4 |

I-[Support Tickets addon](/addons/support-tickets) inokunceda ukulawula izicelo zenkxaso ngaphakathi eqongeni.

## Imisebenzi Yokuhlawulisa {#billing-operations}

### Iintlawulo Eziphindaphindayo {#recurring-payments}

Ultimate Multisite ilawula ukuhlawulisa okuphindaphindayo ngokuzenzekelayo nge-payment gateway yakho. Umsebenzi wakho kukubeka esweni oku:

- **Iintlawulo ezingaphumelelanga**: Landela ngokukhawuleza. Uninzi lokusilela lubangelwa ziikhadi eziphelelwe lixesha, hayi ukurhoxisa ngabom.
- **Dunning**: Seta ingqiqo yokuzama kwakhona ngokuzenzekelayo nge-payment gateway yakho (Stripe iyenza kakuhle le nto)
- **Izicelo zokurhoxisa**: Qonda ukuba kutheni abathengi bemka. Ukurhoxisa ngakunye yingxelo.

### Ukulawula Ubulungu {#managing-memberships}

Yiya ku-**Ultimate Multisite > Memberships** ukuze:

- Ujonge zonke ii-subscriptions ezisebenzayo
- Uphathe izicelo zokuphucula nokwehlisa
- Uqhubekise iimbuyiselo-mali xa kuyimfuneko
- Ulawule ukuphela kweetrials

Bona [Ukulawula Ubulungu](/user-guide/administration/managing-memberships) ukuze ufumane isalathiso esipheleleyo.

### Ukwenza Ii-invoice {#invoicing}

Qinisekisa ukuba ii-invoice zenziwa ngokuchanekileyo kwintlawulo nganye. Abathengi banokufuna ii-invoice zokunika ingxelo ngeendleko zeshishini. Bona [Ukulawula Iintlawulo kunye Nee-invoice](/user-guide/administration/managing-payments-and-invoices).

## Ulondolozo Lweqonga {#platform-maintenance}

### Uhlaziyo lwe-WordPress kunye Nee-Plugin {#wordpress-and-plugin-updates}

Njengomlawuli wenethiwekhi, unoxanduva loku:

- **Uhlaziyo lwe-core ye-WordPress**: Vavanya kwisayithi ye-staging phambi kokulusebenzisa kwi-production
- **Uhlaziyo lwee-plugin**: Ngokufanayo -- vavanya kuqala, emva koko ulusebenzise kuyo yonke inethiwekhi
- **Uhlaziyo lwe-theme**: Qinisekisa ukuba iitemplate zisabonakala zichanekile emva kohlaziyo lwe-theme
- **Uhlaziyo lwe-Ultimate Multisite**: Landela i-changelog kwaye uvavanye phambi kokuhlaziya

:::warning Ungaze Uhlaziye kwi-Production Ngaphandle Kokuvavanya
Uhlaziyo olophukileyo luchaphazela isayithi nganye yomthengi kwinethiwekhi yakho. Soloko uvavanya uhlaziyo kwikopi ye-staging yenethiwekhi yakho kuqala.
:::

### Ukhuseleko {#security}

- Gcina yonke isoftware ihlaziyiwe
- Sebenzisa amagama ayimfihlo omeleleyo kunye nokuqinisekiswa ngamanyathelo amabini kwii-accounts ze-admin
- Beka esweni umsebenzi okrokrelekayo
- Yiba neplan yeziganeko zokhuseleko

### Ukusebenza {#performance}

Njengoko inethiwekhi yakho ikhula, beka esweni:

- **Amaxesha okulayisha iphepha**: Ingaba iisayithi zabathengi ziyakhawuleza?
- **Ukusetyenziswa kwezixhobo zeseva**: CPU, inkumbulo, indawo yediski
- **Ukusebenza kwe-database**: Iinethiwekhi ezinkulu zifuna ukulungiswa kwe-database ekuhambeni kwexesha

Cinga ngokusebenzisa i-caching (page cache, object cache) kunye ne-CDN ukuba awukayenzi. I-[Cloudflare integration](/user-guide/host-integrations/cloudflare) ilawula inxalenye enkulu yale nto.

## Ulawulo Lomjikelo Wobomi Bomthengi {#customer-lifecycle-management}

### Ukunciphisa Ukurhoxa {#reducing-churn}

Ukurhoxa yipesenti yabathengi abarhoxisayo nyanga nganye. Kwishishini le-subscription, ukunciphisa ukurhoxa kubaluleke njengokufumana abathengi abatsha.

**Izizathu eziqhelekileyo zokuba abathengi bezitudiyo zokomelela komzimba barhoxe:**

- Abakwazanga ukuqonda indlela yokusebenzisa iqonga → phucula ukungeniswa
- Isayithi ayikhange ibonakale ilungile ngokwaneleyo → phucula iitemplate
- Abakhange babone xabiso → phucula iimpawu okanye unxibelelwano
- Bafumene enye indlela enexabiso eliphantsi → qinisa ixabiso lakho lecandelo elikhethekileyo
- Ishishini labo lavalwa → akunakuthintelwa, kodwa kulandele ngokwahlukeneyo oku

### Ukukhuthaza Ukuphucula {#encouraging-upgrades}

Abathengi abaku-Starter abaphumelelayo kufuneka bakhuthazwe ukuba baphucule:

- Xa befikelela kwimida yeplan (iisayithi, ugcino), bonisa izikhumbuzi zokuphucula
- Thumela ii-imeyile ezijolise kubo ezibonisa iimpawu ze-Growth plan abanokuzuza kuzo
- Bonisa oko abathengi be-Growth/Pro bakwakhileyo

### Amaphulo Okubuyisa Abathengi {#win-back-campaigns}

Xa umthengi erhoxisa:

1. Buza ukuba kutheni (uphando lokuphuma okanye i-imeyile)
2. Phendula inkxalabo yakhe ukuba kunokwenzeka
3. Nikeza isaphulelo sokubuya (iintsuku ezingama-30-60 emva kokurhoxisa)

## Imikhwa Yeveki Nenyanga {#weekly-and-monthly-routines}

### Ngeveki {#weekly}

- Hlola ubhaliso olutsha kunye nokurhoxisa
- Phendula zonke iitikiti zenkxaso ezivulekileyo
- Jonga ukusebenza kweqonga kunye ne-uptime
- Hlola naziphi na iintlawulo ezingaphumelelanga

### Ngenyanga {#monthly}

- Hlalutya iimetriki eziphambili (MRR, ukurhoxa, abathengi abatsha, ukuphucula)
- Sebenzisa uhlaziyo lwe-WordPress kunye nee-plugin (emva kovavanyo lwe-staging)
- Hlola kwaye uhlaziye isiseko solwazi ngokusekelwe kwiipateni zenkxaso
- Thumela i-newsletter okanye uhlaziyo kubathengi (iimpawu ezintsha, iingcebiso, iindaba zeshishini lokomelela komzimba)

### Ngekota {#quarterly}

- Hlola amaxabiso xa kuthelekiswa nabakhuphisana nabo kunye nengxelo yabathengi
- Vavanya uyilo lweetemplate -- ingaba zifuna ukuvuselelwa?
- Vavanya amandla okusingatha -- ingaba kufuneka wandise?
- Hlola kwaye uphucule ukungeniswa ngokusekelwe kwidatha yokuvula

## Esikwakhileyo Kwesi Sifundo {#what-we-built-this-lesson}

- **Imikhwa yokubeka esweni yemihla ngemihla** ye-uptime, ubhaliso, iintlawulo, kunye nenkxaso
- **Ulwakhiwo lwenkxaso olunamanqanaba** oluhambelana namanqanaba eeplan
- **Imisebenzi yokuhlawulisa** kubandakanya i-dunning kunye nokuphatha ukurhoxisa
- **Iinkqubo zolondolozo** zohlaziyo, ukhuseleko, kunye nokusebenza
- **Amacebo okunciphisa ukurhoxa** akhethekileyo kwicandelo lokomelela komzimba
- **Imikhwa yokusebenza yeveki, yenyanga, neyekota**

---

**Okulandelayo:** [Isifundo 13: Ukwandisa](lesson-13-growth) -- ukukhulisa i-FitSite ukusuka kumsebenzi omncinci uye kwishishini lokwenene.
