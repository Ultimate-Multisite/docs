---
title: Ukuthuthela kuModi Yezinkampani Zangaphandle
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Ukuthuthelwa kwe-Third-Party Mode

Superdav AI Agent v1.12.0 ishintsha indlela amakhono ezinkampani zangaphandle aphathwa ngayo. **Third-party mode manje ngokuzenzakalelayo iba ku-auto**, ivumela ukuhlanganiswa kwendabuko kwe-WordPress Abilities API ku-WordPress 7.0+ ngaphandle kokumisa mathupha.

## Yini Eshintshile?

### Ngaphambi kwe-v1.12.0

Amakhono ezinkampani zangaphandle ayedinga ukumiswa mathupha:

- Bekufanele uvule ngokusobala "third-party mode"
- Amakhono ayelayishwa kusuka kurejista yangokwezifiso
- Ukuhlanganiswa ne-WordPress Abilities API kwakungokuzithandela
- Legacy mode kwakuyikho okuzenzakalelayo

### Ngemuva kwe-v1.12.0

Amakhono ezinkampani zangaphandle asebenza ngokuzenzakalelayo:

- Third-party mode iba ngokuzenzakalelayo ku-"auto"
- Amakhono ahlanganiswa ngokwendabuko ne-WordPress Abilities API
- Akukho ukumisa mathupha okudingekayo ku-WordPress 7.0+
- Legacy mode isatholakala ezinguqulweni ezindala ze-WordPress

## Ubani Othintekayo?

### Ukufakwa Okusha (WordPress 7.0+)

**Akukho senzo esidingekayo.** Third-party mode isethwa ngokuzenzakalelayo ku-"auto", futhi amakhono asebenza ngaphandle kokumiswa okwengeziwe.

### Ukufakwa Okukhona

**Izilungiselelo zakho ziyagcinwa.** Uma ubusebenzisa:

- **Legacy mode**: Uhlala ku-legacy mode (akukho shintsho)
- **Manual third-party mode**: Uhlala kumodi yokwenza mathupha (akukho shintsho)
- **Auto mode**: Uqhubeka ne-auto mode (akukho shintsho)

### Izinhlobo ze-WordPress Ngaphambi kuka-7.0

**Legacy mode isatholakala.** Uma uku-WordPress 6.x noma ngaphambili:

- Third-party mode iba ngokuzenzakalelayo ku-"legacy"
- Ungavula mathupha third-party mode uma ufisa
- Thuthukela ku-WordPress 7.0+ ukuze usebenzise i-Abilities API yendabuko

## Ukuqonda Amamodi

### Auto Mode (Okuzenzakalelayo Okusha)

**Auto mode** isebenzisa ukuhlanganiswa kwendabuko kwe-WordPress Abilities API:

- Amakhono abhaliswa nge-WordPress hooks
- Ukuhambisana okuphelele ne-WordPress 7.0+ Abilities API
- Ukutholwa okuzenzakalelayo kwamakhono ezinkampani zangaphandle
- Akukho ukumisa mathupha okudingekayo

**Kufanele isetshenziswe nini**: WordPress 7.0+ enamakhono ezinkampani zangaphandle

### Manual Mode

**Manual mode** idinga ukumiswa okusobala:

- Ucacisa ukuthi yimaphi amakhono ezinkampani zangaphandle azolayishwa
- Iwusizo ekuhloleni noma ekulayisheni amakhono akhethiwe
- Idinga ukuhlela amafayela okumisa
- Ukulawula okwengeziwe, kodwa ukumisa okwengeziwe

**Kufanele isetshenziswe nini**: Ukuhlola, ukulayisha amakhono akhethiwe, noma ukumiswa kwangokwezifiso

### Legacy Mode

**Legacy mode** isebenzisa uhlelo oludala lwamakhono ezinkampani zangaphandle:

- Irejista yamakhono yangokwezifiso (hhayi i-WordPress Abilities API)
- Ihambisana emuva nezinhlobo ezindala ze-WordPress
- Akukho ukuhlanganiswa kwendabuko kwe-WordPress
- Isiphelelwe yisikhathi kodwa isasekelwa

**Kufanele isetshenziswe nini**: WordPress 6.x noma ngaphambili, noma lapho udinga ukuhambisana ne-legacy

## Ukuhlola Imodi Yakho Yamanje

### Ngephaneli Yokuphatha

1. Iya ku-**WordPress Admin** → **Superdav AI Agent** → **Izilungiselelo**
2. Bheka isilungiselelo se-**Third-Party Mode**
3. Uzobona imodi yakho yamanje nezinketho zokuyishintsha

### Ngekhodi

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## Ukushintsha Imodi Yakho

### Shintshela ku-Auto Mode

Uma uku-WordPress 7.0+ futhi ufuna ukusebenzisa i-auto mode:

1. Iya ku-**Superdav AI Agent** → **Izilungiselelo**
2. Thola **Third-Party Mode**
3. Khetha **Auto (WordPress Abilities API)**
4. Chofoza **Londoloza**

Superdav AI Agent izothola futhi ibhalise ngokuzenzakalelayo amakhono ezinkampani zangaphandle.

### Shintshela ku-Manual Mode

Uma ufuna ukulawula mathupha ukuthi yimaphi amakhono alayishwayo:

1. Iya ku-**Superdav AI Agent** → **Izilungiselelo**
2. Thola **Third-Party Mode**
3. Khetha **Manual**
4. Chofoza **Londoloza**
5. Hlela ifayela lakho lokumisa ukuze ucacise ukuthi yimaphi amakhono azolayishwa

### Shintshela ku-Legacy Mode

Uma udinga ukuhambisana ne-legacy:

1. Iya ku-**Superdav AI Agent** → **Izilungiselelo**
2. Thola **Third-Party Mode**
3. Khetha **Legacy**
4. Chofoza **Londoloza**

## Izinzuzo ze-Auto Mode

### Ukutholwa Okuzenzakalelayo

Amakhono atholwa ngokuzenzakalelayo kusuka ku:

- Ama-plugin afakiwe
- I-theme esebenzayo
- Ama-plugin okufanele asetshenziswe
- Ama-plugin e-drop-in

Akukho ukubhalisa mathupha okudingekayo.

### Ukuhlanganiswa Kwendabuko

Amakhono ahlanganiswa ne-WordPress Abilities API:

- Kuyahambisana nomongo we-WordPress
- Kusebenza ne-WordPress admin
- Kuhambisana namanye ama-plugin asebenzisa i-Abilities API
- Kulungele ikusasa njengoba WordPress ithuthuka

### Ukuphatha Okwenziwe Lula

- Akukho mafayela okumisa okufanele ahlelwe
- Akukho ukubhaliswa kwamakhono mathupha
- Izilawuli Zokubonakala Kwamakhono zisebenza ngokuzenzakalelayo
- Izaziso zomphathi zikuxwayisa ngamakhono angahlukaniswanga

### Ukusebenza Okungcono

- Amakhono agcinwa ku-cache
- Alayishwa kancane lapho edingeka
- Alungiselelwe i-WordPress 7.0+

## Indlela Yokuthuthela

### Uma Uku-WordPress 6.x

1. **Thuthukela ku-WordPress 7.0+** (uma usulungile)
2. **Buyekeza i-Superdav AI Agent** ibe ku-v1.12.0+
3. **Shintsha third-party mode ibe yi-Auto** (ngokuzithandela; legacy mode isasebenza)
4. **Buyekeza ukubonakala kwamakhono** ukuze uqinisekise izilawuli ezifanele zokufinyelela

### Uma Uku-WordPress 7.0+

1. **Buyekeza i-Superdav AI Agent** ibe ku-v1.12.0+
2. **Qinisekisa ukuthi third-party mode isethwe ku-Auto** (kufanele kube njalo ngokuzenzakalelayo)
3. **Buyekeza ukubonakala kwamakhono** ukuze uqinisekise izilawuli ezifanele zokufinyelela
4. **Hlola amakhono ezinkampani zangaphandle** ukuze uqinisekise ukuthi ayasebenza

## Ukuxazulula Izinkinga

### Amakhono awalayishi ku-auto mode

- Qinisekisa ukuthi uku-WordPress 7.0+
- Hlola ukuthi third-party mode isethwe ku-"Auto"
- Qinisekisa ukuthi i-plugin enikeza ikhono iyasebenza
- Hlola amalogi amaphutha e-WordPress ukuze ubone amaphutha okubhalisa

### Ngifuna ukugcina legacy mode

- Iya ku-**Izilungiselelo** → **Third-Party Mode**
- Khetha **Legacy**
- Chofoza **Londoloza**
- Legacy mode izoqhubeka nokusebenza

### Amakhono ami angokwezifiso awaveli

- Qinisekisa ukuthi abhaliswe nge-WordPress hooks
- Hlola ukuthi asebenzisa i-Abilities API ngendlela efanele
- Buyekeza amalogi amaphutha e-WordPress
- Sebenzisa ikhasi lomphathi le-**Ukubonakala Kwamakhono** ukuze ubone wonke amakhono abhalisiwe

### Ngithola izaziso "zekhono elingahlukaniswanga"

- Lokhu kujwayelekile kumakhono amasha ezinkampani zangaphandle
- Wabuyekeze futhi uwahlukanise esazisweni somphathi
- Bheka **Ukubonakala Kwamakhono** ukuze uthole imininingwane ngokuhlukanisa

## Ukuhambisana Emuva

### Ukumiswa Okukhona

Uma unokumiswa kwamakhono ezinkampani zangaphandle okukhona:

- **Legacy mode**: Ukumiswa kwakho kuyaqhubeka nokusebenza
- **Manual mode**: Ukumiswa kwakho kuyaqhubeka nokusebenza
- **Auto mode**: Ukumiswa kwakho akunakwa (auto mode iyathatha)

Ukuze ugcine ukumiswa kwakho kwangokwezifiso, hlala ku-Manual noma ku-Legacy mode.

### Umugqa Wesikhathi Wokuphelelwa Yisikhathi

- **v1.12.0**: Legacy kanye ne-Manual modes zisasekelwa ngokugcwele
- **v1.13.0+**: Legacy mode ingase ibonise izaziso zokuphelelwa yisikhathi
- **v2.0.0**: Legacy mode ingase isuswe (TBD)

## Imikhuba Engcono Kakhulu

### Kokufakwa Okusha

- Sebenzisa i-Auto mode (yiyo ezenzakalelayo)
- Vumela Superdav AI Agent ithole amakhono ngokuzenzakalelayo
- Sebenzisa Ukubonakala Kwamakhono ukuze ulawule ukufinyelela

### Kokufakwa Okukhona

- Thuthukela ku-WordPress 7.0+ uma kungenzeka
- Shintshela ku-Auto mode ukuze ukuphatha kube lula
- Buyekeza futhi uhlukanise amakhono usebenzisa Ukubonakala Kwamakhono

### Kumakhono Angokwezifiso

- Bhalisa amakhono nge-WordPress hooks (Abilities API)
- Gwema amarejista wamakhono angokwezifiso
- Hlola ku-WordPress 7.0+ nge-Auto mode

## Izinyathelo Ezilandelayo

1. **Hlola inguqulo yakho ye-WordPress**: Qinisekisa ukuthi uku-7.0+ ukuze usebenzise i-Auto mode
2. **Buyekeza third-party mode yakho**: Iya ku-Izilungiselelo bese uhlola imodi yakho yamanje
3. **Buyekeza uma kudingeka**: Shintshela ku-Auto mode uma uku-WordPress 7.0+
4. **Hlukanisa amakhono**: Buyekeza futhi uhlukanise noma yimaphi amakhono angahlukaniswanga
5. **Hlola**: Qinisekisa ukuthi amakhono akho ezinkampani zangaphandle asebenza kahle

## Izihloko Ezihlobene

- **Ukubonakala Kwamakhono**: Lawula ukuthi yimaphi amakhono avezwa kuphi
- **WordPress Abilities API**: Funda ngokubhaliswa kwamakhono kwendabuko kwe-WordPress
- **Ukuthuthukiswa Kwamakhono Ezinkampani Zangaphandle**: Dala amakhono asebenza ne-Auto mode
