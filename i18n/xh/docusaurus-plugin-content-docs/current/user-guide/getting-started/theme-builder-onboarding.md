---
title: Inkqubo yokuqalisa ye-Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Inkqubo Yokungeniswa ye-Theme Builder

Superdav AI Agent v1.12.0 izisa inkqubo ekhokelwayo **yokungeniswa ye-Theme Builder** ekunceda wenze umxholo weebhloko olungiselelwe wena ngexesha loseto lwakho lokuqala. Oku kuthatha indawo yemowudi endala ye-Site Builder ngendlela ebhetyebhetye ngakumbi, encediswa yi-agent.

## Yintoni Inkqubo Yokungeniswa ye-Theme Builder?

Inkqubo yokungeniswa ye-Theme Builder yi-wizard yoseto esebenzisanayo ethi:

- Ikukhokele kwizigqibo zoyilo (imibala, uchwethezo, ulungelelwaniso)
- Iqokelele izinto ozikhethayo ngobuwena obubonakalayo besayithi yakho
- Ivelise umxholo weebhloko olungiselelwe iimfuno zakho
- Iwenze usebenze ngokuzenzekelayo umxholo xa kugqityiwe

Le nkqubo ixhaswa ngu-**Setup Assistant agent**, obuza imibuzo yokucacisa aze akhe umxholo wakho kancinci-kancinci.

## Ukuqalisa Ukungeniswa kwe-Theme Builder

### Useto Lokuqala

Xa uqala ukuvula Superdav AI Agent kufakelo olutsha lwe-WordPress, uza kubona:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Khetha **"Build a custom theme"** ukuze ungene kwinkqubo yokungeniswa ye-Theme Builder.

### Ukuvulwa Ngesandla

Ungaqalisa nokungeniswa kwe-Theme Builder nangaliphi na ixesha ngokucela:

```
"Start the Theme Builder onboarding"
```

okanye

```
"Help me create a custom theme"
```

## Amanyathelo Okungeniswa

### Inyathelo 1: Ukukhetha Imowudi

I-Setup Assistant agent ibuza ngokukhetha kwakho:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Imowudi ekhokelwayo** iyacetyiswa kubasebenzisi abaninzi; i-agent yenza iingcebiso zoyilo ngokusekelwe kushishino lwakho neenjongo zakho.

### Inyathelo 2: Inkcazelo Yesayithi

Uza kubuzwa ngesayithi yakho:

- **Injongo yesayithi**: Urhwebo lwe-intanethi, ibhlog, ipotifoliyo, SaaS, njl.
- **Abaphulaphuli ekujoliswe kubo**: Ngoobani iindwendwe zakho?
- **Imibala yophawu**: Imibala ephambili neyesibini (okanye "Andiqinisekanga")
- **Ithoni**: Yobungcali, yoyilo, edlalayo, encinci, njl.

Olu lwazi lugcinwa kwinkumbulo yakho ye-**site_brief**, ethi ii-agent zibhekisele kuyo kwiiseshoni ezizayo.

### Inyathelo 3: Izigqibo zeNkqubo Yoyilo

I-agent ikukhokelela kukhetho lweetokeni zoyilo:

- **Uchwethezo**: Usapho lwefonti (serif, sans-serif, monospace) nesikali sobukhulu
- **Iphalethi yemibala**: Imibala ephambili, yesibini, yokugxininisa, nengathathi cala
- **Izithuba**: Ulungelelwaniso oluxineneyo, oluqhelekileyo, okanye olunendawo eninzi
- **Intshukumo**: Oopopayi neenguqulelo (ukuba ziyafuneka)

### Inyathelo 4: Ukuveliswa Komxholo

I-Setup Assistant agent yakha isiseko somxholo wakho weebhloko olungiselelwe wena nge:

- `theme.json` equlethe zonke iitokeni zakho zoyilo
- Iitemplate zeebhloko zolungelelwaniso oluqhelekileyo (iphepha lasekhaya, ibhlog, uqhagamshelwano)
- Izitayile zeebhloko ezilungiselelweyo ezihambelana nenkqubo yakho yoyilo
- Imetadata yomxholo neenkcazelo zenkxaso ye-WordPress

### Inyathelo 5: Ukuvulwa Nokuqinisekisa

Umxholo uvulwa ngokuzenzekelayo, kwaye uza kubona:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Emva koko ungandwendwela isayithi yakho ukuqinisekisa ukuba umxholo ubonakala ngokuchanekileyo.

## Inkcazelo Yesayithi neNkumbulo ye-site_brief

Ngexesha lokungeniswa, i-agent iqokelela inkcazelo yesayithi yakho kudidi lwenkumbulo lwe-**site_brief**. Oku kuquka:

- Injongo yesayithi neenjongo
- Abaphulaphuli ekujoliswe kubo
- Imibala yophawu nethoni
- Izinto ezikhethwayo kuyilo
- Ulwakhiwo lomxholo

### Kutheni i-site_brief Ibalulekile

Kwiiseshoni ezizayo, ii-agent zibhekisela kwi-site_brief yakho ukuze:

- Zigcine ukuhambelana koyilo kuzo zonke iinguqu
- Zicebise iimpawu ezihambelana nenjongo yesayithi yakho
- Zinike iingcebiso eziqonda umxholo
- Ziphephe ukuphinda imibuzo yoseto

### Ukujonga i-site_brief Yakho

Ungabuza i-agent:

```
"Show me my site brief"
```

okanye

```
"What do you know about my site?"
```

I-agent iya kubonisa inkcazelo yesayithi egciniweyo.

## Ukwenza Ngokwezifiso Emva Kokungeniswa

Emva kokuba ukungeniswa kwe-Theme Builder kugqityiwe, unga:

### Sebenzisa Isakhono se-Design System Aesthetics

Cela ukuphuculwa koyilo:

```
"Refine the typography to be more modern"
```

okanye

```
"Adjust the color palette to be warmer"
```

**Isakhono se-Design System Aesthetics** sikukhokelela kuhlaziyo loyilo olujoliswe ngqo.

### Hlela theme.json Ngokuthe Ngqo

Kubasebenzisi abaphambili, hlela `/wp-content/themes/[theme-name]/theme.json` ukuze ulungise:

- Iitokeni zemibala
- Izikali zochwethezo
- Amaxabiso ezithuba
- Iinkcazelo zemida nezithunzi

### Yenza Iitemplate Zeebhloko Ezilungiselelweyo

Sebenzisa umhleli weebhloko we-WordPress ukwenza iitemplate ezilungiselelweyo ze:

- Ulungelelwaniso lwephepha lasekhaya
- Amaphepha ezithuba zebhlog
- Amaphepha eemveliso
- Iifomu zoqhagamshelwano

## Uthelekiso: Ukungeniswa Okudala vs. Okutsha

| Uphawu | Site Builder (Endala) | Theme Builder (Entsha) |
|---------|----------------------|-------------------|
| Indlela yoseto | Ifomu esekelwe kwi-wizard | Incoko ekhokelwa yi-agent |
| Ukuveliswa komxholo | Iitemplate ezilinganiselweyo | Ukwakhiwa kwesiseko okulungiselelweyo |
| Iitokeni zoyilo | Ungeniso ngesandla | Izigqibo ezikhokelwayo |
| Ukubhetyebhetye | Iinketho ezimiselweyo | Kuyalungiseka |
| Uhlaziyo lwexesha elizayo | Akubhekiselwanga kulo | Kugcinwe kwi-site_brief |

## Ukusombulula Iingxaki

**Inkqubo yokungeniswa ayigqitywanga**
- Qalisa kwakhona inkqubo: "Start the Theme Builder onboarding"
- Jonga ukuba ufakelo lwakho lwe-WordPress luhlaziyiwe
- Qinisekisa ukuba i-Setup Assistant agent ivuliwe

**I-site_brief yam ayisetyenziswa**
- Qinisekisa ukuba i-agent inokufikelela kwinkumbulo
- Cela i-agent ukuba "recall my site brief"
- Jonga ukuba inkumbulo ivuliwe kuseto lwakho

**Umxholo ovelisiweyo awuhambelani nezinto endizikhethayo**
- Sebenzisa isakhono se-Design System Aesthetics ukuwuphucula
- Cela i-agent ukuba "regenerate the theme with [specific changes]"
- Hlela theme.json ngokuthe ngqo ukuze ube nolawulo oluchanileyo

## Amanyathelo Alandelayo

Emva kokugqiba ukungeniswa kwe-Theme Builder:

1. **Qinisekisa isayithi yakho**: Ndwendwela isayithi yakho ukuze ubone umxholo omtsha
2. **Phucula uyilo**: Sebenzisa isakhono se-Design System Aesthetics kulungiso
3. **Yongeza umxholo**: Qalisa ukwakha umxholo wesayithi yakho
4. **Phonononga izakhono**: Funda ngezinye izakhono ze-agent ezifana ne-scaffold-block-theme ne-activate-theme
