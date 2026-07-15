---
title: Ukusetha Izinkokhelo Mathupha
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Ukusetha Izinkokhelo Ezenziwa Ngesandla (v2)

_**INOTHI ELIBALULEKILE: Lesi sihloko sibhekisela ku-Ultimate Multisite inguqulo 2.x.**_

Izinkokhelo ezenziwa ngesandla ziyindlela yokukunikeza ezinye izindlela zokukhokha uma **Stripe** noma **PayPal** ingatholakali kubasebenzisi bakho. Kungaba ukudlulisa imali ngocingo noma ebhange, noma enye indlela yokukhokha etholakala kubasebenzisi bakho endaweni yabo.

## Indlela yokunika amandla Izinkokhelo Ezenziwa Ngesandla {#how-to-enable-manual-payments}

Ukusetha inkokhelo eyenziwa ngesandla kulula kakhulu. Udinga nje ukuyinika amandla ngaphansi kwamasango okukhokha bese ufaka imiyalelo enemininingwane yokuthi umsebenzisi kufanele ayithumele kanjani inkokhelo.

Okokuqala, iya ku-**Ultimate Multisite > Settings > Payments**. Ngezansi kwe-**Payment Gateways** , vula i-**Manual**. Uzobona ukuthi ibhokisi le-**Payment Instructions** lizovela kuwe.

Engeza kuleli bhokisi ulwazi ikhasimende lakho elizoludinga ukuze lenze inkokhelo. Kungaba imininingwane ye-akhawunti yakho yasebhange kanye ne-imeyili yakho ukuze ikhasimende likuthumelele isiqinisekiso senkokhelo, ngokwesibonelo.

![Ukuguqula isango lenkokhelo eyenziwa ngesandla nendawo yombhalo ye-Payment Instructions](/img/config/manual-gateway-expanded.png)

Nasi isixhumi esibonakalayo sezilungiselelo zesango elenziwa ngesandla:

![Izilungiselelo zesango elenziwa ngesandla](/img/config/manual-gateway-settings.png)

Ngemva kokulisetha, vele uchofoze ku-**Save Settings** bese sekuphelile. Lapho abasebenzisi bebhalisa kunethiwekhi yakho, bazobona umlayezo obatshela ukuthi bazothola imiyalelo yakho yokuqedela ukuthenga.

![Umlayezo wokuqinisekisa ukubhalisa otshela umsebenzisi ukuthi uzothola imiyalelo yokukhokha](/img/frontend/registration-manual-notice.png)

Futhi bazothola nomlayezo ekhasini lakho le-**Thank You** elinemiyalelo yakho yokukhokha.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Ukuqinisekisa izinkokhelo ezenziwa ngesandla {#confirming-manual-payments}

Ukuze uqinisekise inkokhelo eyenziwa ngesandla, iya kumenyu ye-**Payments** kubha engakwesokunxele. Lapho ungabona zonke izinkokhelo kunethiwekhi yakho nemininingwane yazo, kuhlanganise ne-**status** yazo. Inkokhelo eyenziwa ngesandla izohlala ine-**Pending** status kuze kube yilapho uyishintsha ngesandla.

![Uhlu lwezinkokhelo olubonisa inkokhelo eyenziwa ngesandla esalindile](/img/admin/payments-list.png)

Ngena ekhasini lenkokhelo ngokuchofoza **reference code**. Kuleli khasi unayo yonke imininingwane yenkokhelo esalindile, njenge-ID yereferensi, imikhiqizo, izitembu zesikhathi nokunye.

![Ikhasi lemininingwane yenkokhelo elibonisa ikhodi yereferensi, imikhiqizo, nezibalo eziphelele](/img/admin/payment-edit.png)

Kukholomu engakwesokudla, ungashintsha isimo senkokhelo. Ukuyishintsha ibe ngu-**Completed** kanye **nokuguqula inketho ye-Activate Membership** kuzonika amandla isayithi lekhasimende lakho futhi ubulungu balo buzosebenza.

![Ikhasi lokuhlela inkokhelo eline-Status emiswe ku-Completed kanye nesiguquli se-Activate Membership](/img/admin/payment-activate-membership.png)
