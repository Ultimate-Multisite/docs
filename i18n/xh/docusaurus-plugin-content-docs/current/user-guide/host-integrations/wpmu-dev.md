---
title: Udibaniso lwe-WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Udibaniso lwe-WPMU DEV

## Isishwankathelo
I-WPMU DEV liqonga elibanzi le-WordPress elinikezela ngokusingatha, iiplugin, kunye neenkonzo zeesayithi ze-WordPress. Olu dibaniso luvumela ungqamaniso oluzenzekelayo lwedomeyini kunye nolawulo lwesatifikethi se-SSL phakathi kwe-Ultimate Multisite kunye nokusingathwa kwe-WPMU DEV.

## Iimpawu
- Ungqamaniso oluzenzekelayo lwedomeyini
- Ulawulo lwesatifikethi se-SSL
- Iinzame ezandisiweyo zokuqinisekisa isatifikethi se-SSL

## Iimfuno
Udibaniso luzibhaqa ngokuzenzekelayo ukuba usingathwe kwi-WPMU DEV kwaye lusebenzisa i-API eyakhelwe ngaphakathi. Akukho lulungiselelo longezelelweyo lufunekayo ukuba usingathwe kwi-WPMU DEV.

Udibaniso lujonga ubukho be-constant `WPMUDEV_HOSTING_SITE_ID`, echazwa ngokuzenzekelayo xa kusingathwa kwi-WPMU DEV.

## Imiyalelo Yokuseta

### 1. Qinisekisa Ukusingathwa kwe-WPMU DEV

Ukuba usingathwe kwi-WPMU DEV, ii-constants eziyimfuneko kufuneka sele zichaziwe. Qinisekisa ukuba:

1. I-constant `WPMUDEV_HOSTING_SITE_ID` ichaziwe kwimeko-bume yakho
2. Unobulungu obusebenzayo be-WPMU DEV obunofikelelo lwe-API

### 2. Vula Udibaniso

1. Kwi-admin yakho ye-WordPress, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrola ezantsi uye ku-"Host Integrations"
4. Vula udibaniso lwe-WPMU DEV
5. Cofa "Save Changes"

## Isebenza Njani

### Ungqamaniso Lwedomeyini

Xa idomeyini imaphwe kwi-Ultimate Multisite:

1. Udibaniso lusebenzisa i-WPMU DEV API ukongeza idomeyini kwi-akhawunti yakho yokusingatha
2. Longeza ngokuzenzekelayo nenguqulelo ye-www yedomeyini
3. I-WPMU DEV ijongana nolungiselelo lwedomeyini kunye nokukhutshwa kwesatifikethi se-SSL

### Ulawulo Lwesatifikethi se-SSL

Udibaniso lulungiselelwe ukwandisa inani leenzame zokuqinisekisa isatifikethi se-SSL sokusingathwa kwe-WPMU DEV, kuba kunokuthatha ixesha ukuba izatifikethi ze-SSL zikhutshwe kwaye zifakwe. Ngokungagqibekanga, luya kuzama ukuya kumaxesha ali-10 ukuqinisekisa isatifikethi se-SSL, xa kuthelekiswa neenzame eziqhelekileyo ezi-5.

## Amanqaku Abalulekileyo

### Ukususwa Kwedomeyini

Okwangoku, i-WPMU DEV API ayiboneleli ngendlela yokususa iidomeyini. Xa ukumaphwa kwedomeyini kususiwe kwi-Ultimate Multisite, idomeyini iya kuhlala kwi-akhawunti yakho yokusingatha ye-WPMU DEV. Kuya kufuneka uyisuse ngesandla kwi-dashboard yokusingatha ye-WPMU DEV ukuba kuyimfuneko.

### Uqinisekiso lwe-API

Udibaniso lusebenzisa iqhosha le-WPMU DEV API eligcinwe kwidatabase yakho ye-WordPress njengokhetho lwe-`wpmudev_apikey`. Oku kusetwa ngokuzenzekelayo xa uqhagamshela isayithi yakho kwi-WPMU DEV.

## Ukusombulula Iingxaki

### Imiba yoQhagamshelo lwe-API
- Qinisekisa ukuba isayithi yakho iqhagamshelwe ngokufanelekileyo kwi-WPMU DEV
- Jonga ukuba ukhetho lwe-`wpmudev_apikey` lusetiwe kwidatabase yakho ye-WordPress
- Qinisekisa ukuba ubulungu bakho be-WPMU DEV buyasebenza

### Imiba yeSatifikethi se-SSL
- I-WPMU DEV ingathatha ixesha ukukhupha izatifikethi ze-SSL (ngokuqhelekileyo imizuzu emi-5-15)
- Udibaniso lulungiselelwe ukujonga ukuya kumaxesha ali-10 izatifikethi ze-SSL
- Ukuba izatifikethi ze-SSL zisengakhutshwa emva kweenzame ezininzi, qhagamshelana nenkxaso ye-WPMU DEV

### Idomeyini Ayizange Yongezwe
- Jonga iilog ze-Ultimate Multisite ukuze ubone nayiphi na imiyalezo yempazamo
- Qinisekisa ukuba idomeyini ayikongezwanga sele kwi-WPMU DEV
- Qinisekisa ukuba isicwangciso sakho sokusingatha se-WPMU DEV sixhasa inani leedomeyini ozongezayo
