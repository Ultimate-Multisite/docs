---
title: Ukumisela iiNtlawulo ezenziwa ngesandla
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Ukumisela Iintlawulo Zezandla (v2)

_**INQAKU ELIBALULEKILEYO: Eli nqaku libhekisa kwi-Ultimate Multisite version 2.x.**_

Iintlawulo zezandla yindlela yokukunika ithuba lokubonelela ngezinye iindlela zentlawulo ukuba **Stripe** okanye **PayPal** ayifumaneki kubasebenzisi bakho. Inokuba yi-wire transfer okanye ugqithiselo lwebhanki, okanye nayiphi na enye indlela yentlawulo efumanekayo kubasebenzisi bakho ekuhlaleni.

## Indlela yokuvula Iintlawulo Zezandla {#how-to-enable-manual-payments}

Ukumisela intlawulo yezandla kulula kakhulu. Kufuneka nje uyivule phantsi kwee-gateway zentlawulo uze ufake imiyalelo eneenkcukacha yokuba umsebenzisi kufuneka ayithumele njani intlawulo.

Okokuqala, yiya ku-**Ultimate Multisite > Settings > Payments**. Ngaphantsi kwe-**Payment Gateways** , vula **Manual**. Uya kubona ukuba ibhokisi ye-**Payment Instructions** iza kuvela kuwe.

Yongeza kule bhokisi ulwazi umthengi wakho aza kulufuna ukuze enze intlawulo. Inokuba ziinkcukacha ze-akhawunti yakho yebhanki kunye ne-imeyile yakho ukuze umthengi akuthumelele isiqinisekiso sentlawulo, umzekelo.

![Ukutshintsha i-gateway yentlawulo yezandla kunye nendawo yokubhala ye-Payment Instructions](/img/config/manual-gateway-expanded.png)

Nanku ujongano lweesetingi ze-gateway yezandla:

![Iisetingi ze-gateway yezandla](/img/config/manual-gateway-settings.png)

Emva kokuyimisa, cofa nje ku-**Save Settings** kwaye kugqityiwe. Xa abasebenzisi bebhalisa kwinethiwekhi yakho, baya kubona umyalezo obaxelela ukuba baza kufumana imiyalelo yakho yokugqibezela ukuthenga.

![Umyalezo wokuqinisekisa ubhaliso oxelela umsebenzisi ukuba uza kufumana imiyalelo yentlawulo](/img/frontend/registration-manual-notice.png)

Kwaye baya kufumana nomyalezo kwiphepha lakho le-**Thank You** onemiyalelo yakho yentlawulo.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Ukuqinisekisa iintlawulo zezandla {#confirming-manual-payments}

Ukuqinisekisa intlawulo yezandla, yiya kwimenyu ye-**Payments** kwibar yasekhohlo. Apho ungabona zonke iintlawulo kwinethiwekhi yakho kunye neenkcukacha zazo, kuquka **status** yazo. Intlawulo yezandla iya kuhlala ine-**Pending** status de uyitshintshe ngesandla.

![Uluhlu lweentlawulo olubonisa intlawulo yezandla esalindileyo](/img/admin/payments-list.png)

Ngena kwiphepha lentlawulo ngokucofa **reference code**. Kweli phepha unazo zonke iinkcukacha zentlawulo esalindileyo, ezifana ne-reference ID, iimveliso, amaxesha, nokunye.

![Iphepha leenkcukacha zentlawulo elibonisa reference code, iimveliso, kunye neetotali](/img/admin/payment-edit.png)

Kwikholamu yasekunene, ungatshintsha status yentlawulo. Ukuyitshintsha ibe yi-**Completed** kunye **nokutshintsha i-Activate Membership** option kuya kuvula isayithi yomthengi wakho kwaye ubulungu bakhe buya kusebenza.

![Iphepha lokuhlela intlawulo eline-Status esetiwe ku-Completed kunye ne-toggle ye-Activate Membership](/img/admin/payment-activate-membership.png)
