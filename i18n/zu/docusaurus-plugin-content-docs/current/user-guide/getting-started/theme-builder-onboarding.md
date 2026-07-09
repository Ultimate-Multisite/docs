---
title: Ukugeleza Kokuqalisa kwe-Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Ukugeleza Kokwamukeliswa kwe-Theme Builder {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 yethula ukugeleza okuqondisiwe **kokwamukeliswa kwe-Theme Builder** okukusiza ukuthi udale theme yangokwezifiso yamabhulokhi ngesikhathi sokusetha kwakho kokuqala. Lokhu kuthatha indawo yemodi endala ye-Site Builder ngendlela eguquguqukayo kakhudlwana, esizwa yi-agent.

## Kuyini Ukugeleza Kokwamukeliswa kwe-Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Ukugeleza kokwamukeliswa kwe-Theme Builder kuyiwizadi yokusetha esebenzisanayo ethi:

- Ikuqondise ezinqumweni zokuklama (imibala, typography, layout)
- Iqoqe okuncamelayo kobunikazi obubonakalayo besayithi lakho
- Ikhiqize theme yangokwezifiso yamabhulokhi ehambisana nezidingo zakho
- Isebenzise theme ngokuzenzakalelayo lapho kuqediwe

Ukugeleza kunikwa amandla yi-**Setup Assistant agent**, ebuza imibuzo ecacisayo futhi yakhe theme yakho kancane kancane.

## Ukuqala Ukwamukeliswa kwe-Theme Builder {#starting-the-theme-builder-onboarding}

### Ukusetha Kokusebenza Kokuqala {#first-run-setup}

Lapho uqala ukwethula Superdav AI Agent ekufakweni okusha kwe-WordPress, uzobona:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Khetha **"Build a custom theme"** ukuze ungene ekugelezeni kokwamukeliswa kwe-Theme Builder.

### Ukwenza Kusebenze Mathupha {#manual-activation}

Ungaqala futhi ukwamukeliswa kwe-Theme Builder noma nini ngokucela:

```
"Start the Theme Builder onboarding"
```

noma

```
"Help me create a custom theme"
```

## Izinyathelo Zokwamukeliswa {#the-onboarding-steps}

### Isinyathelo 1: Ukukhetha Imodi {#step-1-mode-selection}

I-Setup Assistant agent ibuza mayelana nokuncamelayo kwakho:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Imodi eqondisiwe** iyanconywa kubasebenzisi abaningi; i-agent yenza izincomo zokuklama ngokusekelwe embonini nasezinhlosweni zakho.

### Isinyathelo 2: Ukucaciswa Kwesayithi {#step-2-site-specification}

Uzobuzwa mayelana nesayithi lakho:

- **Inhloso yesayithi**: E-commerce, blog, portfolio, SaaS, njll.
- **Izethameli eziqondiwe**: Obani izivakashi zakho?
- **Imibala yomkhiqizo**: Imibala eyinhloko neyesibili (noma "Angiqiniseki")
- **Ithoni**: Eyobungcweti, enobuciko, edlalayo, encane, njll.

Lolu lwazi lugcinwa kumemori yakho ye-**site_brief**, ama-agent ayibhekisela kuyo kumaseshini azayo.

### Isinyathelo 3: Izinqumo Zohlelo Lokuklama {#step-3-design-system-decisions}

I-agent ikuqondisa ekukhetheni ama-design token:

- **Typography**: Umndeni wefonti (serif, sans-serif, monospace) nesikali sosayizi
- **Iphalethi yemibala**: Imibala eyinhloko, eyesibili, egqamile, nengathathi hlangothi
- **Izikhala**: Ama-layout aminyene, avamile, noma abanzi
- **Ukunyakaza**: Ama-animation nama-transition (uma kufiswa)

### Isinyathelo 4: Ukukhiqizwa kwe-Theme {#step-4-theme-generation}

I-Setup Assistant agent yakha uhlaka lwe-theme yakho yangokwezifiso yamabhulokhi ngo:

- `theme.json` equkethe wonke ama-design token akho
- Ama-template amabhulokhi ama-layout avamile (ikhasi lasekhaya, blog, oxhumana naye)
- Izitayela zamabhulokhi zangokwezifiso ezihambisana nohlelo lwakho lokuklama
- Imininingwane ye-theme nezimemezelo zosekelo lwe-WordPress

### Isinyathelo 5: Ukwenza Kusebenze Nokuqinisekisa {#step-5-activation-and-verification}

I-theme yenziwa isebenze ngokuzenzakalelayo, futhi uzobona:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Ungabe usuvakashela isayithi lakho ukuze uqinisekise ukuthi theme ibonakala kahle.

## Ukucaciswa Kwesayithi Nememori ye-site_brief {#site-specification-and-sitebrief-memory}

Ngesikhathi sokwamukeliswa, i-agent iqopha ukucaciswa kwesayithi lakho esigabeni sememori se-**site_brief**. Lokhu kufaka:

- Inhloso nezinjongo zesayithi
- Izethameli eziqondiwe
- Imibala yomkhiqizo nethoni
- Okuncamelayo kokuklama
- Isakhiwo sokuqukethwe

### Kungani site_brief Ibalulekile {#why-sitebrief-matters}

Kumaseshini azayo, ama-agent abhekisela ku-site_brief yakho ukuze:

- Agcine ukufana kokuklama kuzo zonke izinguquko
- Aphakamise izici ezihambisana nenhloso yesayithi lakho
- Anikeze izincomo eziqonda umongo
- Agweme ukuphinda imibuzo yokusetha

### Ukubuka I-site_brief Yakho {#viewing-your-sitebrief}

Ungabuza i-agent:

```
"Show me my site brief"
```

noma

```
"What do you know about my site?"
```

I-agent izobonisa ukucaciswa kwesayithi lakho okugcinwe.

## Ukwenza Ngokwezifiso Ngemva Kokwamukeliswa {#customizing-after-onboarding}

Ngemva kokuba ukwamukeliswa kwe-Theme Builder kuqediwe, ungakwazi:

### Sebenzisa Ikhono le-Design System Aesthetics {#use-the-design-system-aesthetics-skill}

Cela ukucwenga komklamo:

```
"Refine the typography to be more modern"
```

noma

```
"Adjust the color palette to be warmer"
```

**Ikhono le-Design System Aesthetics** likuqondisa ezibuyekezweni zokuklama eziqondiwe.

### Hlela theme.json Ngokuqondile {#edit-themejson-directly}

Kubasebenzisi abathuthukile, hlela `/wp-content/themes/[theme-name]/theme.json` ukuze ulungise:

- Ama-token emibala
- Izikali ze-typography
- Amanani ezikhala
- Izincazelo zemingcele nezithunzi

### Dala Ama-template Amabhulokhi Angokwezifiso {#create-custom-block-templates}

Sebenzisa umhleli wamabhulokhi we-WordPress ukuze udale ama-template angokwezifiso we:

- Ama-layout ekhasi lasekhaya
- Amakhasi okuthunyelwe kwe-blog
- Amakhasi emikhiqizo
- Amafomu okuxhumana

## Ukuqhathanisa: Ukwamukeliswa Okudala vs. Okusha {#comparison-old-vs-new-onboarding}

| Isici | Site Builder (Endala) | Theme Builder (Entsha) |
|---------|----------------------|-------------------|
| Indlela yokusetha | Ifomu elisekelwe kuyiwizadi | Ingxoxo eqondiswa yi-agent |
| Ukukhiqizwa kwe-theme | Ama-template anomkhawulo | Ukwakha uhlaka ngokwezifiso |
| Ama-design token | Ukufaka mathupha | Izinqumo eziqondisiwe |
| Ukuguquguquka | Izinketho ezingaguquki | Kungenziwa ngokwezifiso |
| Izibuyekezo zesikhathi esizayo | Akubhekiselwa kukho | Kugcinwe ku-site_brief |

## Ukuxazulula Izinkinga {#troubleshooting}

**Ukugeleza kokwamukeliswa akuqedanga**
- Qala kabusha ukugeleza: "Start the Theme Builder onboarding"
- Hlola ukuthi ukufakwa kwakho kwe-WordPress kusesikhathini
- Qinisekisa ukuthi i-Setup Assistant agent inikwe amandla

**I-site_brief yami ayisetshenziswa**
- Qinisekisa ukuthi i-agent inokufinyelela kumemori
- Cela i-agent ukuthi "recall my site brief"
- Hlola ukuthi imemori inikwe amandla kuzilungiselelo zakho

**I-theme ekhiqiziwe ayihambisani nokuncamelayo kwami**
- Sebenzisa ikhono le-Design System Aesthetics ukuyicwenga
- Cela i-agent ukuthi "regenerate the theme with [specific changes]"
- Hlela theme.json ngokuqondile ukuze ulawule ngokunembile

## Izinyathelo Ezilandelayo {#next-steps}

Ngemva kokuqeda ukwamukeliswa kwe-Theme Builder:

1. **Qinisekisa isayithi lakho**: Vakashela isayithi lakho ukuze ubone theme entsha
2. **Cwenga umklamo**: Sebenzisa ikhono le-Design System Aesthetics ukuze wenze izilungiso
3. **Engeza okuqukethwe**: Qala ukwakha okuqukethwe kwesayithi lakho
4. **Hlola amakhono**: Funda ngamanye amakhono ama-agent afana ne-scaffold-block-theme ne-activate-theme
