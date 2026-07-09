---
title: Izakhono ze-Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Izakhono ze Theme Builder: Ukuseka nokuvula imixholo yeebhloko

Superdav AI Agent v1.12.0 yazisa izakhono ezimbini ezinamandla ezikuvumela ukuba uvelise kwaye usasaze imixholo yeebhloko eyenzelwe wena ngqo kujongano lwencoko.

## Isishwankathelo

Izakhono ze **scaffold-block-theme** kunye ne **activate-theme** zivumela ii-agent ukuba:
- Zivelise imixholo yeebhloko epheleleyo, elungele imveliso, esekelwe kwiinkcukacha ozinikezayo
- Zivule ngokuzenzekelayo imixholo kwisayithi yakho ngaphandle kongenelelo olwenziwa ngesandla
- Zenze izazisi ezibonakalayo ezihambelanayo ngezigqibo zoyilo ezikhokelwayo

## Ukuseka Umxholo Webhloko

Isakhono se **scaffold-block-theme** sivelisa umxholo omtsha webhloko we WordPress onesakhiwo somxholo esipheleleyo, kuquka:

- Uqwalaselo lwe `theme.json` olunama-design tokens
- Iifayile zeetemplate zeebhloko zolungelelwaniso oluqhelekileyo
- Izimbo zeebhloko ezenzelwe wena kunye neenguqulelo
- Imethadatha yomxholo kunye nezibhengezo zenkxaso

### Indlela Yokubiza

Kwincoko yakho ne Superdav AI Agent, ungacela ukuveliswa komxholo:

```
"Yenza umxholo webhloko obizwa ngokuba yi 'Modern Agency' oneskimu semibala eluhlaza okwesibhakabhaka nemhlophe,
itypography ye-sans-serif, kunye nolungelelwaniso lobuchule"
```

I-agent iza:
1. Kuqokelela izinto ozikhethayo kuyilo ngencoko
2. Kuvelisa isakhiwo somxholo esipheleleyo
3. Kwenza zonke iifayile zomxholo eziyimfuneko
4. Kulungiselela umxholo ukuba uvulwe

### Isiphumo Esilindelekileyo

Xa isakhono sisebenza ngempumelelo, uza kubona:

- Uqinisekiso lokuba umxholo usekiwe
- Igama lomxholo kunye nendawo
- Isishwankathelo sama-design tokens asetyenzisiweyo (imibala, itypography, izithuba)
- Isimo sokulungela ukuvulwa

Umzekelo wesiphumo:
```
✓ Umxholo "Modern Agency" usekwe ngempumelelo
  Indawo: /wp-content/themes/modern-agency/
  Imibala: Ophambili #0066CC, Owesibini #FFFFFF
  Itypography: Inter (sans-serif)
  Isimo: Ulungele ukuvulwa
```

## Vula Umxholo

Isakhono se **activate-theme** sitshintsha isayithi yakho iye kumxholo webhloko omtsha osekiweyo okanye osele ukhona.

### Indlela Yokubiza

Emva kokuseka umxholo, ungawuvula kwangoko:

```
"Vula umxholo we Modern Agency"
```

Okanye uvule nawuphi na umxholo osele ukhona:

```
"Tshintshela kumxholo we Twentytwentyfour"
```

### Isiphumo Esilindelekileyo

Xa ukuvula kuphumelela:

- Uqinisekiso lomxholo osebenzayo
- Igama lomxholo wangaphambili (njengereferensi)
- I-URL yesayithi apho umxholo ngoku uphilayo
- Nawaphi na amanqaku okuseta akhethekileyo omxholo

Umzekelo wesiphumo:
```
✓ Umxholo uvulwe ngempumelelo
  Umxholo osebenzayo: Modern Agency
  Umxholo wangaphambili: Twentytwentyfour
  Uphilayo apha: https://yoursite.com
  Qaphela: Jonga iphepha lakho lasekhaya ukuze uqinisekise ulungelelwaniso
```

## Ukuhamba komsebenzi: Seka uze Uvule

Ukuhamba komsebenzi okuqhelekileyo kudibanisa zombini izakhono:

1. **Cela ukuveliswa komxholo**: "Yenza umxholo webhloko wephepha lam lokufikela le-SaaS"
2. **I-agent iseka umxholo**: Ivelisa iifayile kunye nama-design tokens
3. **Phonononga uze uphucule**: Xoxa ngotshintsho loyilo ukuba luyafuneka
4. **Vula**: "Vula umxholo ngoku"
5. **Qinisekisa**: Ndwendwela isayithi yakho ukuze uqinisekise ukuba uyilo olutsha luphilayo

## Ama-Design Tokens kunye Nokwenza Ngokwezifiso

Imixholo esekiweyo isebenzisa ama-design tokens e WordPress (nge `theme.json`) kwezi zinto:

- **Imibala**: Iphalethi ephambili, eyesibini, egxininisayo, engathathi hlangothi
- **Itypography**: Iintsapho zeefonti, ubukhulu, ubunzima, ukuphakama kwemigca
- **Izithuba**: Izikali ze-padding, margin, gap
- **Imida**: Ama-tokens eradius nobubanzi
- **Izithunzi**: Amanqanaba okuphakama

La ma-tokens abekwe embindini kwi `theme.json`, nto leyo eyenza kube lula ukulungisa yonke inkqubo yakho yoyilo kwifayile enye.

## Imida kunye Namanqaku

- Imixholo isekelwa kwi `/wp-content/themes/` kwaye kufuneka ilandele imigaqo yokubiza amagama ye WordPress
- Ukuvula kufuna iimvume ezifanelekileyo kwisayithi yakho ye WordPress
- Ikhowudi ye PHP eyenzelwe wena kwimixholo incinci; sebenzisa izongezo kwimisebenzi entsonkothileyo
- Imixholo yeebhloko isebenza kakuhle kakhulu nge WordPress 5.9 nangaphezulu

## Ukusombulula Iingxaki

**Umxholo awubonakali emva kokusekwa**
- Qinisekisa ukuba uvimba womxholo ukhona kwaye uneemvume ezifanelekileyo
- Jonga ukuba `theme.json` yi-JSON esebenzayo
- Qinisekisa ukuba igama lomxholo alingqubani nemixholo esele ikhona

**Ukuvula kuyasilela**
- Qinisekisa ukuba uneemvume zomlawuli
- Jonga ukuba uvimba womxholo uyafundeka yi WordPress
- Phonononga iilogi zeempazamo ze WordPress ukuze ufumane iinkcukacha

**Ama-design tokens awasebenzi**
- Qinisekisa ukuba isintaksi se `theme.json` sichanekile
- Coca naziphi na izongezo ze-caching
- Jonga ukuba inguqulelo yakho ye WordPress iyawaxhasa ama-tokens owasebenzisayo

## Amanyathelo Alandelayo

Emva kokuvula umxholo wakho, unga:
- Sebenzisa **isakhono se-Design System Aesthetics** ukuphucula itypography, imibala, kunye nezithuba
- Yenza ngokwezifiso izimbo zeebhloko nganye nge WordPress block editor
- Yongeza i-CSS eyenzelwe wena kwifayile ye `style.css` yomxholo
- Yenza iitemplate zeebhloko ezenzelwe wena zeentlobo ezithile zamaphepha
