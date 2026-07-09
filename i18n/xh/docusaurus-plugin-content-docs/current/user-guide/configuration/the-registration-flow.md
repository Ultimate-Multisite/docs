---
title: Inkqubo yoBhaliso
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Ukuhamba Kobhaliso (v2) {#the-registration-flow-v2}

_**INQAKU ELIBALULEKILEYO: Eli nqaku libhekisa ku-Ultimate Multisite version 2.x.**_

Abasebenzisi banokubhalisa ngeendlela ezahlukeneyo kwinethiwekhi yakho. Banokusebenzisa ifomu yakho yobhaliso okanye ikhonkco ekwabelwana ngalo kwisicwangciso esikhethwe kwangaphambili. Apha siza kukubonisa indlela abathengi bakho abanokubhalisa ngayo kwinethiwekhi yakho besebenzisa iindlela ezikhoyo nokuba kwenzeka ntoni emva kokuba bebhalisile kwinethiwekhi yakho.

## Ukusebenzisa Ifomu Yobhaliso: {#using-the-registration-form}

Le yinkqubo yobhaliso eqhelekileyo. Udala iphepha lobhaliso eline-**ifomu ye-checkout** kwaye oku kuya kuba yindawo apho abathengi bakho baya kuya khona ukuze babhalise kwinethiwekhi yakho baze babhalisele isicwangciso. Ungaba namaphepha amaninzi obhaliso, ngalinye linefomu yobhaliso eyahlukileyo ukuba uyafuna.

Iphepha elingagqibekanga lobhaliso ngu-[_**yourdomain.com/register**_](http://yourdomain.com/register), kodwa ungakutshintsha oku nangaliphi na ixesha ku-**Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Emva kokuba umsebenzisi efikile kwiphepha lakho lobhaliso (ngesiqhelo ecofa iqhosha elithi **Sign in** okanye **Buy now**), baya kuyibona ifomu yakho yobhaliso apho.

![Ifomu yobhaliso eboniswe kwiphepha lobhaliso](/img/frontend/registration-form.png)

Nanku umzekelo wefomu ye-checkout njengoko ibonakala kwi-frontend:

![Ifomu yobhaliso ye-checkout ye-frontend](/img/config/checkout-frontend-registration.png)

Konke ekufuneka bekwenzile kukugcwalisa zonke iindawo ezinyanzelekileyo - i-imeyile, igama lomsebenzisi, igama lokugqithisa, njl... - baze bahlawulele isicwangciso okanye baqinisekise idilesi yabo ye-imeyile ukuba babhalisela isicwangciso sasimahla okanye isicwangciso esihlawulelwayo esinexesha lovavanyo ngaphandle kolwazi lwentlawulo.

Kwiphepha elithi "Enkosi", baya kubona umyalezo obaxelela ukuba kufuneka baqinisekise idilesi yabo ye-imeyile okanye ukuba iwebhusayithi yabo sele ivuliwe kwaye banokuqalisa ukuyisebenzisa.

![Iphepha elithi Enkosi emva kobhaliso](/img/frontend/registration-thank-you.png)

Ukuba ukuqinisekiswa kwedilesi ye-imeyile kuyafuneka, kuya kufuneka baye kwibhokisi yabo ye-imeyile baze bacofe ikhonkco lokuqinisekisa. Iwebhusayithi yabo ayizukuvulwa ukuba idilesi yabo ye-imeyile ayiqinisekiswanga.

Ukuba babhalise kwisicwangciso esihlawulelwayo okanye ukuqinisekiswa kwe-imeyile akunyanzelwanga kwinethiwekhi yakho, iwebhusayithi yabo iya kuvulwa kanye emva kwe-checkout kwaye baya kuboniswa ikhonkco lokungena kwi-dashboard yabo.

![Isayithi ivuliwe inekhonkco lokungena kwi-dashboard](/img/frontend/site-activated.png)

## Ukusebenzisa Ikhonkco Ekwabelwana Ngalo: {#using-a-shareable-link}

Inkqubo yokubhalisa usebenzisa ikhonkco ekwabelwana ngalo ifana ngokusisiseko nefomu yobhaliso, umahluko kuphela kukuba xa besebenzisa ikhonkco ekwabelwana ngalo, abathengi bakho banokuba nemveliso okanye itemplate yewebhusayithi ekhethwe kwangaphambili kwifomu ye-checkout (jonga icandelo elithi Ukukhetha iimveliso neetemplate kwangaphambili ngeeparameter ze-URL) okanye mhlawumbi ikhowudi yekhuphoni eyongeziweyo (jonga icandelo elithi Ukusebenzisa iiParameter ze-URL).

Inkqubo yobhaliso iya kufana: kuya kufuneka bagcwalise igama labo, igama lomsebenzisi, idilesi ye-imeyile, igama lewebhusayithi nesihloko, njl... kodwa isicwangciso okanye itemplate yesayithi iya kuba sele ikhethwe kwangaphambili kubo.

### Ukubhalisa Usebenzisa Iintlawulo Zezandla: {#registering-using-manual-payments}

Ukuba awufuni ukusebenzisa i-PayPal, Stripe okanye nayiphi na enye i-gateway yentlawulo enikelwa yi-Ultimate Multisite okanye ukudityaniswa kwayo kwe-add-on, ungasebenzisa iintlawulo zezandla kubathengi bakho. Ngale ndlela, unokubenzela i-invoice ukuze bayihlawule kwiprosesa yentlawulo oyikhethayo emva kokuba bebhalisile kwinethiwekhi yakho.

Inkqubo yobhaliso iya kufana kanye nale ingasentla, kodwa kwiphepha lobhaliso abathengi bakho baya kubona umyalezo ochaza ukuba baya kufumana i-imeyile enemiyalelo engakumbi yokugqibezela intlawulo.

![Umyalezo wentlawulo yezandla ngexesha lobhaliso](/img/frontend/registration-manual-notice.png)

Kwaye emva kokuba ubhaliso lugqityiwe, baya kubona imiyalelo yentlawulo oyimisileyo (kwaye baya kuyifumana nakwi-imeyile yabo).

![Imiyalelo yentlawulo eboniswe emva kobhaliso](/img/frontend/registration-payment-instructions.png)

Imiyalelo yentlawulo ingatshintshwa ku-**Ultimate Multisite > Settings > Payments** emva kokuvula ukhetho lwentlawulo lwe-**Manual**:

![Iswitshi yentlawulo yezandla enendawo yemiyalelo yentlawulo](/img/config/manual-gateway-settings.png)

Emva kokuba abathengi bakho begqibe intlawulo yezandla baze bakuthumelele uqinisekiso, kufuneka **uqinisekise intlawulo ngesandla** ukuze uvule ubulungu bomthengi kunye newebhusayithi.

Ukwenza oku, yiya ku-**Ultimate Multisite > Payments** uze ufumane intlawulo yomthengi. Kufuneka isabonisa isimo se-**Pending**.

![Uluhlu lweentlawulo olunentlawulo yezandla esalindileyo](/img/admin/payments-list.png)

Cofa kwinombolo yentlawulo kwaye uya kukwazi ukutshintsha isimo sayo sibe **Completed**.

![Iphepha leenkcukacha zentlawulo](/img/admin/payment-edit.png)

![Ukutshintsha isimo sentlawulo sibe Completed](/img/admin/payment-status-completed.png)

Emva kokutshintsha isimo sayo sibe **Completed** , kufuneka ubone umyalezo othi **Activate membership**. Vula olu khetho **on** ukuze uvule ubulungu kunye newebhusayithi enxulumene nalo mthengi. Emva koko, cofa ku-**Save Payment**.

![Iswitshi ethi Activate membership kunye neqhosha elithi Save Payment](/img/admin/payment-activate-membership.png)

Umthengi wakho ngoku kufanele akwazi ukufikelela kwi-dashboard kunye nazo zonke iimpawu abazibhalisele.
