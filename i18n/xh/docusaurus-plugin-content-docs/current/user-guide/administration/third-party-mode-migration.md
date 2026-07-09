---
title: Ufuduko lweMowudi yeQela lesiThathu
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Ukufuduswa kweNdlela yeQela Lesithathu

Superdav AI Agent v1.12.0 itshintsha indlela izakhono zamaqela esithathu eziphathwa ngayo. **Indlela yeqela lesithathu ngoku imiselwe ngokungagqibekanga ku-auto**, ivumela udibaniso lwendalo lwe-WordPress Abilities API kwi-WordPress 7.0+ ngaphandle koqwalaselo ngesandla.

## Yintoni Etshintshileyo?

### Ngaphambi kwe-v1.12.0

Izakhono zamaqela esithathu bezifuna uqwalaselo ngesandla:

- Bekufuneka uvule ngokucacileyo "indlela yeqela lesithathu"
- Izakhono bezilayishwa zisuka kwirejistri yesiko
- Udibaniso ne-WordPress Abilities API belukhethwa
- Indlela yelifa yayiyeyona imiselwe ngokungagqibekanga

### Emva kwe-v1.12.0

Izakhono zamaqela esithathu zisebenza ngokuzenzekelayo:

- Indlela yeqela lesithathu imiselwe ngokungagqibekanga ku-"auto"
- Izakhono zidibana ngokwendalo ne-WordPress Abilities API
- Akukho qwalaselo ngesandla lufunekayo kwi-WordPress 7.0+
- Indlela yelifa isafumaneka kwiinguqulelo ezindala ze-WordPress

## Ngubani Ochaphazelekayo?

### Ufakelo Olutsha (WordPress 7.0+)

**Akukho manyathelo afunekayo.** Indlela yeqela lesithathu isetwa ngokuzenzekelayo ku-"auto", kwaye izakhono zisebenza kwangoko ngaphandle koqwalaselo olongezelelweyo.

### Ufakelo Olukhoyo

**Iisetingi zakho ziyagcinwa.** Ukuba ubusebenzisa:

- **Indlela yelifa**: Uhlala kwindlela yelifa (akukho tshintsho)
- **Indlela yeqela lesithathu ngesandla**: Uhlala kwindlela yesandla (akukho tshintsho)
- **Indlela ye-auto**: Uyaqhubeka nendlela ye-auto (akukho tshintsho)

### Iinguqulelo ze-WordPress Ngaphambi kwe-7.0

**Indlela yelifa isafumaneka.** Ukuba uku-WordPress 6.x okanye ngaphambili:

- Indlela yeqela lesithathu imiselwe ngokungagqibekanga ku-"legacy"
- Ungavula ngesandla indlela yeqela lesithathu ukuba uyafuna
- Nyusela kwi-WordPress 7.0+ ukuze usebenzise i-Abilities API yendalo

## Ukuqonda Iindlela

### Indlela ye-Auto (Entsha Emiselwe Ngokungagqibekanga)

**Indlela ye-auto** isebenzisa udibaniso lwendalo lwe-WordPress Abilities API:

- Izakhono zibhaliswa ngee-hook ze-WordPress
- Ukuhambelana okupheleleyo ne-WordPress 7.0+ Abilities API
- Ukufunyanwa ngokuzenzekelayo kwezakhono zamaqela esithathu
- Akukho qwalaselo ngesandla lufunekayo

**Xa isetyenziswa**: WordPress 7.0+ enezakhono zamaqela esithathu

### Indlela Yesandla

**Indlela yesandla** ifuna uqwalaselo olucacileyo:

- Ucacisa ukuba zeziphi izakhono zamaqela esithathu ezimele zilayishwe
- Iluncedo kuvavanyo okanye ekulayisheni izakhono ezikhethiweyo
- Ifuna ukuhlela iifayile zoqwalaselo
- Ulawulo olungakumbi, kodwa ukuseta okungakumbi

**Xa isetyenziswa**: Uvavanyo, ukulayishwa kwezakhono ezikhethiweyo, okanye uqwalaselo lwesiko

### Indlela Yelifa

**Indlela yelifa** isebenzisa inkqubo endala yezakhono zamaqela esithathu:

- Irejistri yesakhono yesiko (hayi WordPress Abilities API)
- Iyahambelana ngasemva neenguqulelo ezindala ze-WordPress
- Akukho dityaniso lendalo ne-WordPress
- Iphelelwa lixesha kodwa isaxhaswa

**Xa isetyenziswa**: WordPress 6.x okanye ngaphambili, okanye xa ufuna ukuhambelana nelifa

## Ukujonga Indlela Yakho Yangoku

### NgePhaneli Yolawulo

1. Yiya ku-**WordPress Ulawulo** → **Superdav AI Agent** → **Iisetingi**
2. Khangela isetingi ye-**Ndlela yeQela Lesithathu**
3. Uza kubona indlela yakho yangoku kunye nokhetho lokuyitshintsha

### NgeKhowudi

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## Ukutshintsha Indlela Yakho

### Tshintshela kwiNdlela ye-Auto

Ukuba uku-WordPress 7.0+ kwaye ufuna ukusebenzisa indlela ye-auto:

1. Yiya ku-**Superdav AI Agent** → **Iisetingi**
2. Fumana **Indlela yeQela Lesithathu**
3. Khetha **Auto (WordPress Abilities API)**
4. Cofa **Gcina**

Superdav AI Agent iya kufumana kwaye ibhalise ngokuzenzekelayo izakhono zamaqela esithathu.

### Tshintshela kwiNdlela Yesandla

Ukuba ufuna ukulawula ngesandla ukuba zeziphi izakhono ezilayishwayo:

1. Yiya ku-**Superdav AI Agent** → **Iisetingi**
2. Fumana **Indlela yeQela Lesithathu**
3. Khetha **Ngesandla**
4. Cofa **Gcina**
5. Hlela ifayile yakho yoqwalaselo ukuze ucacise ukuba zeziphi izakhono ezimele zilayishwe

### Tshintshela kwiNdlela Yelifa

Ukuba ufuna ukuhambelana nelifa:

1. Yiya ku-**Superdav AI Agent** → **Iisetingi**
2. Fumana **Indlela yeQela Lesithathu**
3. Khetha **Ilifa**
4. Cofa **Gcina**

## Iinzuzo zeNdlela ye-Auto

### Ukufunyanwa Ngokuzenzekelayo

Izakhono zifunyanwa ngokuzenzekelayo zisuka ku:

- Iiplugin ezifakiweyo
- Theme esebenzayo
- Iiplugin ezimele zisetyenziswe
- Iiplugin ze-drop-in

Akukho bhaliso ngesandla lufunekayo.

### Udibaniso Lwendalo

Izakhono zidibana ne-WordPress Abilities API:

- Iyahambelana nomongo we-WordPress
- Isebenza nolawulo lwe-WordPress
- Iyahambelana nezinye iiplugin ezisebenzisa i-Abilities API
- Ikhuselwe kwikamva njengoko WordPress ikhula

### Ulawulo Olwenziwe Lula

- Akukho fayile zoqwalaselo zokuhlela
- Akukho bhaliso lwesakhono ngesandla
- Ulawulo lwe-Ability Visibility lusebenza ngokuzenzekelayo
- Izaziso zolawulo ziyakulumkisa ngezakhono ezingahlelwanga

### Ukusebenza Okungcono

- Izakhono zigcinwa kwi-cache
- Zilayishwa ngokucotha xa zifunwa
- Zilungiselelwe i-WordPress 7.0+

## Indlela Yokufuduka

### Ukuba uku-WordPress 6.x

1. **Nyusela kwi-WordPress 7.0+** (xa sele ulungile)
2. **Hlaziya Superdav AI Agent** ukuya ku-v1.12.0+
3. **Tshintsha indlela yeqela lesithathu iye ku-Auto** (ukhetho; indlela yelifa isasebenza)
4. **Hlola ukubonakala kwezakhono** ukuqinisekisa ulawulo olufanelekileyo lokufikelela

### Ukuba uku-WordPress 7.0+

1. **Hlaziya Superdav AI Agent** ukuya ku-v1.12.0+
2. **Qinisekisa ukuba indlela yeqela lesithathu isetelwe ku-Auto** (imele ibe njalo ngokungagqibekanga)
3. **Hlola ukubonakala kwezakhono** ukuqinisekisa ulawulo olufanelekileyo lokufikelela
4. **Vavanya izakhono zamaqela esithathu** ukuqinisekisa ukuba ziyasebenza

## Ukusombulula Iingxaki

### Izakhono azilayishi kwindlela ye-auto

- Qinisekisa ukuba uku-WordPress 7.0+
- Jonga ukuba indlela yeqela lesithathu isetelwe ku-"Auto"
- Qinisekisa ukuba iplugin enikezela ngesakhono iyasebenza
- Jonga iilog zempazamo ze-WordPress ukuze ubone iimpazamo zobhaliso

### Ndifuna ukugcina indlela yelifa

- Yiya ku-**Iisetingi** → **Indlela yeQela Lesithathu**
- Khetha **Ilifa**
- Cofa **Gcina**
- Indlela yelifa iya kuqhubeka isebenza

### Izakhono zam zesiko azibonakali

- Qinisekisa ukuba zibhaliswe ngee-hook ze-WordPress
- Jonga ukuba zisebenzisa i-Abilities API ngokuchanekileyo
- Hlola iilog zempazamo ze-WordPress
- Sebenzisa iphepha lolawulo le-**Ability Visibility** ukuze ubone zonke izakhono ezibhalisiweyo

### Ndifumana izaziso ze-"sakhono esingahlelwanga"

- Oku kuqhelekile kwizakhono ezintsha zamaqela esithathu
- Zihlole kwaye uzihlele kwisaziso solawulo
- Bona **Ability Visibility** ukuze ufumane iinkcukacha ngohlelo

## Ukuhambelana Ngasemva

### Uqwalaselo Olukhoyo

Ukuba unalo uqwalaselo olukhoyo lwezakhono zamaqela esithathu:

- **Imowudi yelifa**: Uqwalaselo lwakho luyaqhubeka lusebenza
- **Imowudi yesandla**: Uqwalaselo lwakho luyaqhubeka lusebenza
- **Imowudi ezenzekelayo**: Uqwalaselo lwakho aluhoywa (imowudi ezenzekelayo iyaluthatha ulawulo)

Ukugcina uqwalaselo lwakho olulungiselelweyo, hlala kwimowudi yesandla okanye yelifa.

### Umgca wexesha wokuyekiswa

- **v1.12.0**: Iimowudi zelifa nezesandla zisaxhaswa ngokupheleleyo
- **v1.13.0+**: Imowudi yelifa inokubonisa izaziso zokuyekiswa
- **v2.0.0**: Imowudi yelifa inokususwa (kuza kugqitywa)

## Ezona ndlela zilungileyo

### Kufakelo olutsha

- Sebenzisa imowudi ezenzekelayo (yiyo engagqibekanga)
- Vumela Superdav AI Agent ifumane izakhono ngokuzenzekelayo
- Sebenzisa ukubonakala kwezakhono ukulawula ukufikelela

### Kufakelo olukhoyo

- Nyusela ku-WordPress 7.0+ xa kunokwenzeka
- Tshintshela kwimowudi ezenzekelayo ukuze ulawulo lube lula
- Phonononga uze uhlele izakhono usebenzisa ukubonakala kwezakhono

### Kwizakhono ezilungiselelweyo

- Bhalisa izakhono ngee-hooks ze-WordPress (Abilities API)
- Kuphephe iirejistri zezakhono ezilungiselelweyo
- Vavanya ku-WordPress 7.0+ ngemowudi ezenzekelayo

## Amanyathelo alandelayo

1. **Jonga inguqulelo yakho ye-WordPress**: Qinisekisa ukuba uku-7.0+ ukuze usebenzise imowudi ezenzekelayo
2. **Phonononga imowudi yakho yomntu wesithathu**: Yiya kwi-Settings uze ujonge imowudi yakho yangoku
3. **Hlaziya ukuba kuyimfuneko**: Tshintshela kwimowudi ezenzekelayo ukuba uku-WordPress 7.0+
4. **Hlela izakhono**: Phonononga uze uhlele naziphi na izakhono ezingekahlelwa
5. **Vavanya**: Qinisekisa ukuba izakhono zakho zomntu wesithathu zisebenza ngokuchanekileyo

## Izihloko ezinxulumene noko

- **Ukubonakala kwezakhono**: Lawula ukuba zeziphi izakhono ezivezwa phi
- **WordPress Abilities API**: Funda ngobhaliso lwezakhono lwendalo lwe-WordPress
- **Uphuhliso lwezakhono zomntu wesithathu**: Yila izakhono ezisebenza ngemowudi ezenzekelayo
