---
title: Ukuhlanganiswa kwe-WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Ukuhlanganiswa kwe-WPMU DEV

## Uhlolojikelele
I-WPMU DEV iyinkundla ebanzi ye-WordPress enikeza ukusingathwa, ama-plugin, nezinsizakalo zamasayithi e-WordPress. Lokhu kuhlanganiswa kuvumela ukuvumelanisa izizinda ngokuzenzakalelayo nokuphathwa kwezitifiketi ze-SSL phakathi kwe-Ultimate Multisite nokusingathwa kwe-WPMU DEV.

## Izici
- Ukuvumelanisa izizinda ngokuzenzakalelayo
- Ukuphathwa kwezitifiketi ze-SSL
- Imizamo eyengeziwe yokuqinisekisa isitifiketi se-SSL

## Izimfuneko
Ukuhlanganiswa kuthola ngokuzenzakalelayo uma usingathwa ku-WPMU DEV bese kusebenzisa i-API eyakhelwe ngaphakathi. Akudingeki ukulungiselela okwengeziwe uma usingathwa ku-WPMU DEV.

Ukuhlanganiswa kuhlola ukuba khona kwe-constant ethi `WPMUDEV_HOSTING_SITE_ID`, echazwa ngokuzenzakalelayo lapho usingathwa ku-WPMU DEV.

## Imiyalelo Yokusetha

### 1. Qinisekisa Ukusingathwa kwe-WPMU DEV

Uma usingathwa ku-WPMU DEV, ama-constant adingekayo kufanele asechaziwe kakade. Qinisekisa ukuthi:

1. I-constant ethi `WPMUDEV_HOSTING_SITE_ID` ichaziwe endaweni yakho
2. Unobulungu be-WPMU DEV obusebenzayo obunokufinyelela ku-API

### 2. Nika Ukuhlanganiswa Amandla

1. Ku-admin yakho ye-WordPress, iya ku-Ultimate Multisite > Settings
2. Zulazulela kuthebhu ethi "Domain Mapping"
3. Skrolela phansi ku-"Host Integrations"
4. Nika ukuhlanganiswa kwe-WPMU DEV amandla
5. Chofoza "Save Changes"

## Kusebenza Kanjani

### Ukuvumelanisa Izizinda

Lapho isizinda sixhunywa ku-Ultimate Multisite:

1. Ukuhlanganiswa kusebenzisa i-WPMU DEV API ukwengeza isizinda ku-account yakho yokusingathwa
2. Kuphinde kwengeze ngokuzenzakalelayo inguqulo ye-www yesizinda
3. I-WPMU DEV iphatha ukulungiselelwa kwesizinda nokukhishwa kwesitifiketi se-SSL

### Ukuphathwa Kwezitifiketi ze-SSL

Ukuhlanganiswa kulungiselelwe ukwandisa inani lemizamo yokuqinisekisa isitifiketi se-SSL ekusingathweni kwe-WPMU DEV, njengoba kungathatha isikhathi esithile ukuthi izitifiketi ze-SSL zikhishwe futhi zifakwe. Ngokuzenzakalelayo, kuzozama kuze kube izikhathi eziyi-10 ukuqinisekisa isitifiketi se-SSL, uma kuqhathaniswa nemizamo ejwayelekile emi-5.

## Amanothi Abalulekile

### Ukususwa Kwesizinda

Okwamanje, i-WPMU DEV API ayinikezi indlela yokususa izizinda. Lapho ukuxhunywa kwesizinda kususwa ku-Ultimate Multisite, isizinda sizohlala ku-account yakho yokusingathwa ye-WPMU DEV. Kuzodingeka usisuse mathupha ku-dashboard yokusingathwa ye-WPMU DEV uma kudingeka.

### Ukuqinisekiswa kwe-API

Ukuhlanganiswa kusebenzisa ukhiye we-WPMU DEV API ogcinwe ku-database yakho ye-WordPress njengenketho ethi `wpmudev_apikey`. Lokhu kusethwa ngokuzenzakalelayo lapho uxhuma isayithi lakho ku-WPMU DEV.

## Ukuxazulula Izinkinga

### Izinkinga Zokuxhumeka kwe-API
- Qinisekisa ukuthi isayithi lakho lixhumeke kahle ku-WPMU DEV
- Hlola ukuthi inketho ethi `wpmudev_apikey` isethiwe ku-database yakho ye-WordPress
- Qinisekisa ukuthi ubulungu bakho be-WPMU DEV buyasebenza

### Izinkinga Zesitifiketi se-SSL
- I-WPMU DEV ingase ithathe isikhathi esithile ukukhipha izitifiketi ze-SSL (ngokuvamile imizuzu emi-5-15)
- Ukuhlanganiswa kulungiselelwe ukuhlola kuze kube izikhathi eziyi-10 izitifiketi ze-SSL
- Uma izitifiketi ze-SSL zisengakhishwa ngemva kwemizamo eminingi, xhumana nosekelo lwe-WPMU DEV

### Isizinda Asengezwanga
- Hlola ama-log e-Ultimate Multisite ukuze ubone noma yimiphi imilayezo yephutha
- Qinisekisa ukuthi isizinda asikangezwa kakade ku-WPMU DEV
- Qinisekisa ukuthi uhlelo lwakho lokusingathwa lwe-WPMU DEV lusekela inani lezizinda ozenezayo
