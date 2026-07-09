---
title: Ukubonakala kwesakhono
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ukubonakala Kobuchule

Superdav AI Agent v1.12.0 izisa izilawuli ze-**Ukubonakala Kobuchule** ezilawula ukuba yeyiphi imiphezulu ebonisa ubuchule ngamnye. Oku kuvumela abalawuli ukuba balungise ngokuchanekileyo ukuba zeziphi izakhono ze-agent ezifumanekayo nge-REST APIs, iiseva ze-MCP, ukudityaniswa kwe-WooCommerce, kunye nezinye iindlela zokunxibelelana.

## Yintoni Ukubonakala Kobuchule?

Ukubonakala Kobuchule yinkqubo yeemvume elawula:

- **Bubuphi ubuchule** obufumanekayo kwii-agent
- **Apho buboniswa khona** (REST API, MCP, WooCommerce, njl.)
- **Ngubani onokubufikelela** (ngeelisti zokuvunyelwa zamaqabane)
- **Buhlelwa njani** (buqatshelwe okanye abuhlelwanga)

Ubuchule ngabunye buphethe inqanaba lokubonakala elimisela ukufumaneka kwabo kwimiphezulu eyahlukeneyo.

## Amanqanaba Okubonakala

### Esidlangalaleni

**Ubuchule besidlangalaleni** bufumaneka kuyo yonke indawo:

- Ii-endpoint ze-REST API
- Iiseva ze-MCP
- Ukudityaniswa kwe-WooCommerce
- Iindlela zonxibelelwano zengxoxo
- Zonke iindima zabasebenzisi (ngeemvume ezifanelekileyo)

Umzekelo: `scaffold-block-theme`, `activate-theme`, `send-email`

### Ngaphakathi

**Ubuchule bangaphakathi** bufumaneka kuphela ngaphakathi kofakelo lwakho lwe-WordPress:

- Iindlela zonxibelelwano zengxoxo
- Iiphaneli zolawulo
- Abasebenzisi abangene ngemvume kuphela
- Abuboniswa nge-REST API okanye ukudityaniswa kwangaphandle

Umzekelo: `manage-settings`, `view-analytics`, `export-data`

### Iqabane

**Ubuchule bamaqabane** bufumaneka kuphela kumaqabane akuluhlu oluvunyelweyo:

- Bufuna ungeniso olucacileyo kuluhlu lokuvunyelwa kweqabane
- Bufumaneka nge-REST API usebenzisa iziqinisekiso zeqabane
- Bufumaneka nge-MCP usebenzisa uqinisekiso lweqabane
- Abufumaneki kubasebenzisi abaqhelekileyo

Umzekelo: `bulk-import-users`, `modify-billing`, `access-analytics`

### Ikhubazekile

**Ubuchule obukhubazekileyo** abufumaneki naphi na:

- Abuboniswa nangawuphi na umphezulu
- Abufumaneki kwingxoxo
- Abufumaneki kwiiphaneli zolawulo
- Buluncedo kubuchule obuphelelwe lixesha okanye obusavavanywa

## Ukulawula Ukubonakala Kobuchule

### Ukufikelela Kuseto Lokubonakala Kobuchule

1. Yiya ku-**Ulawulo lwe-WordPress** → **Superdav AI Agent** → **Iisetingi**
2. Cofa ithebhu ethi **Ubuchule**
3. Uza kubona uluhlu lwabo bonke ubuchule obufakiweyo kunye namanqanaba abo okubonakala

### Ukujonga Iinkcukacha Zobuchule

Cofa kubuchule nabuphi na ukuze ubone:

- **Igama**: Isichongi sobuchule
- **Inkcazelo**: Okwenziwa bubuchule
- **Ukubonakala kwangoku**: Esidlangalaleni, Ngaphakathi, Iqabane, okanye Ikhubazekile
- **Uluhlu lokuvunyelwa kweqabane**: Ngawaphi amaqabane anokufikelela (ukuba ukubonakala kuku-Iqabane)
- **Igqityelwe ukuhlaziywa**: Xa ukubonakala kwagqityelwa ukutshintshwa
- **Isimo**: Buqatshelwe okanye Abuhlelwanga

### Ukutshintsha Amanqanaba Okubonakala

Ukutshintsha ukubonakala kobuchule:

1. Cofa ubuchule kuluhlu
2. Khetha inqanaba elitsha lokubonakala kwi-dropdown
3. Ukuba ukhetha "Iqabane", yongeza izichongi zamaqabane kuluhlu lokuvunyelwa
4. Cofa **Gcina**

Umzekelo:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Imisebenzi Yesininzi

Ukutshintsha ukubonakala kobuchule obuninzi:

1. Khangela iibhokisi ezisecaleni kobuchule
2. Khetha inqanaba elitsha lokubonakala kwi-dropdown yesenzo sesininzi
3. Cofa **Sebenzisa**

## Uluhlu Lokuvunyelwa Kweqabane

**Uluhlu lokuvunyelwa kweqabane** lulawula ukuba ngawaphi amaqabane angaphandle anokufikelela kubuchule benqanaba le-Iqabane.

### Ukongeza Amaqabane

1. Yiya ku-**Superdav AI Agent** → **Iisetingi** → **Amaqabane**
2. Cofa **Yongeza Iqabane**
3. Faka isichongi seqabane (ngokuqhelekileyo API key okanye i-ID yombutho)
4. Ngokuzikhethela yongeza igama leqabane kunye nenkcazelo
5. Cofa **Gcina**

### Ukwabela Amaqabane Ubuchule

Emva kokongeza iqabane:

1. Yiya kwithebhu ethi **Ubuchule**
2. Fumana ubuchule obunokubonakala kwe-Iqabane
3. Cofa ukuze uhlele
4. Kwicandelo elithi "Uluhlu lokuvunyelwa kweqabane", khangela iibhokisi zamaqabane ekufuneka abe nokufikelela
5. Cofa **Gcina**

### Ukurhoxisa Ukufikelela Kweqabane

Ukususa ukufikelela kweqabane:

1. Hlela ubuchule
2. Sukukhangela ibhokisi yeqabane kuluhlu lokuvunyelwa
3. Cofa **Gcina**

Iqabane liya kuphulukana nokufikelela kobo buchule kwangoko.

## Ubuchule Obungahlelwanga

Xa ufaka ubuchule bomntu wesithathu i-Superdav AI Agent engabuqapheliyo, buphawulwa njenge-**Abuhlelwanga**.

### Isaziso Solawulo Sobuchule Obungahlelwanga

Uza kubona isaziso solawulo:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Ukuphonononga Ubuchule Obungahlelwanga

1. Cofa **Phonononga Ubuchule** kwisaziso
2. Kubuchule ngabunye obungahlelwanga, uza kubona:
   - Igama lobuchule kunye nenkcazelo
   - Umthombo (yeyiphi plugin/addon ebufakileyo)
   - Inqanaba lokubonakala elicetyisiweyo
   - Uvavanyo lokhuseleko

3. Khetha inqanaba lokubonakala:
   - **Esidlangalaleni**: Thembela kubuchule; bubonise kuyo yonke indawo
   - **Ngaphakathi**: Buthintele kusetyenziso lwangaphakathi kuphela
   - **Iqabane**: Buthintele kumaqabane athile
   - **Ikhubazekile**: Musa ukusebenzisa obu buchule

4. Cofa **Hlela** ukuze ugcine isigqibo sakho

### Kutheni Uhlele Ubuchule Obungahlelwanga?

Ukuhlela ubuchule:

- **Kuphucula ukhuseleko**: Uvuma ngokucacileyo into eboniswayo
- **Kuthintela iingozi**: Ubuchule obungahlelwanga bukhubazekile ngokungagqibekanga
- **Kuvumela iimpawu**: Nje ukuba buhlelwe, ubuchule buyafumaneka
- **Kubhala izigqibo**: Ukhetho lwakho lugcinwa kwiingxelo ngenjongo yophicotho

## Ukubonakala Kwimiphezulu Eyahlukeneyo

### REST API

**Ubuchule besidlangalaleni** bufumaneka ngee-endpoint ze-REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Ubuchule bangaphakathi nobamaqabane** abufumaneki nge-REST API.

### Iiseva ze-MCP

**Ubuchule besidlangalaleni** bufumaneka nge-MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Ubuchule bangaphakathi** abuboniswa nge-MCP.

**Ubuchule bamaqabane** bufumaneka kuphela ngeziqinisekiso zeqabane.

### Ukudityaniswa kwe-WooCommerce

**Ubuchule besidlangalaleni** obunxulumene ne-WooCommerce bufumaneka:

- Ulawulo lwemveliso
- Ukuqhutywa kwee-odolo
- Unxibelelwano lwabathengi

**Ubuchule bangaphakathi** abuboniswa kwi-WooCommerce.

### Indlela Yonxibelelwano Yengxoxo

**Bonke ubuchule** (Esidlangalaleni, Ngaphakathi, Iqabane) bufumaneka kwingxoxo, ngokuxhomekeke kwiimvume zomsebenzisi:

- Abalawuli babona bonke ubuchule
- Abasebenzisi abaqhelekileyo babona kuphela ubuchule besidlangalaleni
- Amaqabane abona ubuchule besidlangalaleni + ubuchule bamaqabane (ukuba akuluhlu oluvunyelweyo)

## Iindlela Ezilungileyo Zokhuseleko

### Umgaqo Wamalungelo Amancinci

- Seta ubuchule kwinqanaba lokubonakala elona lithintelayo kodwa lisavumela ukusetyenziswa kwabo
- Sebenzisa ukubonakala kwe-Iqabane kwimisebenzi ebuthathaka
- Khubaza ubuchule ongabusebenzisiyo

### Uphicotho Rhoqo

- Phonononga ukubonakala kobuchule nyanga zonke
- Khangela ubuchule obungahlelwanga
- Susa ukufikelela kumaqabane angasasetyenziswayo

### Ukugcinwa Kweengxelo Nokubeka Esweni

- Beka esweni ukuba bubuphi ubuchule obusetyenziswa kakhulu
- Landela iipatheni zokufikelela zamaqabane
- Lumkisa xa kusetyenziswa ubuchule ngendlela engaqhelekanga

### Ubuchule Bomntu Wesithathu

- Phonononga ubuchule bomntu wesithathu phambi kokubuvumela
- Buhlele ngokucacileyo
- Qala ngokubonakala kwangaphakathi okanye kwe-Iqabane
- Bunyusele esidlangalaleni kuphela emva kokubuvavanya

## Ukusombulula Iingxaki

**Ubuchule abubonakali kuluhlu**
- Qinisekisa ukuba ubuchule bufakiwe kwaye buyasebenza
- Khangela ukuba i-plugin/addon ivuliwe
- Hlaziya iphepha

**Andikwazi ukutshintsha ukubonakala kobuchule**
- Qinisekisa ukuba uneemvume zomlawuli
- Khangela ukuba ubuchule abutshixwanga yi-plugin
- Zama ukukhubaza ii-plugin ezingqubanayo

**Iqabane alikwazi ukufikelela kubuchule**
- Qinisekisa ukuba iqabane likuluhlu lokuvunyelwa
- Khangela ukuba ukubonakala kobuchule kusetelwe ku-Iqabane
- Qinisekisa ukuba iziqinisekiso zeqabane zichanekile
- Khangela iilog ze-API ngeempazamo zoqinisekiso

**Ubuchule obungahlelwanga buqhubeka buvela**
- Buphonononge kwaye buhlele kwisaziso solawulo
- Khangela ukuba ukuhlelwa kwakho kugciniwe
- Qinisekisa ukuba i-plugin ebonelela ngobuchule ihlaziyiwe

## Ukufuduka Ukusuka Kwimo Yakudala

Ukuba uphucula ukusuka kuguqulelo oludala lwe-Superdav AI Agent:

- Bonke ubuchule obukhoyo buhlelwa ngokuzenzekelayo njenge-Esidlangalaleni
- Phonononga kwaye ulungelelanise ukubonakala njengoko kufuneka
- Akukho senzo sifunekayo ngaphandle kokuba ufuna ukuthintela ukufikelela

Bona **Ukufuduka Kwimo Yomntu Wesithathu** ukuze ufumane iinkcukacha ezingakumbi ngotshintsho oluya kudityaniso lwemveli lwe-Abilities API.

## Amanyathelo Alandelayo

Emva kokumisela ukubonakala kobuchule:

1. **Phonononga ubuchule bakho**: Phicotha bonke ubuchule obufakiweyo
2. **Hlela ubuchule obungahlelwanga**: Phendula kwizaziso zolawulo
3. **Seta amaqabane**: Yongeza amaqabane ukuba usebenzisa ukubonakala kwe-Iqabane
4. **Beka esweni ukusetyenziswa**: Landela ukuba bubuphi ubuchule obusetyenziswa kakhulu
5. **Bhala izigqibo**: Gcina amanqaku okuba kutheni ukhethe inqanaba lokubonakala ngalinye
