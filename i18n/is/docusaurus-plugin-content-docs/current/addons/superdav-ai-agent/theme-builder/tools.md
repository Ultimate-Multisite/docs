---
title: Verkfæri og stillingar
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Verkfæri og stillingar

Theme Builder notar sett af verkfærum til að greina, hanna og byggja WordPress vefinn þinn. Í útgáfu 1.16.0 er **sd-ai-agent/site-scrape nú Tier 1 verkfæri**, sem gerir það sjálfgefið aðgengilegt í Theme Builder. Superdav AI Agent v1.18.0 kynnir einnig Advanced fylgipakka sem er dreift sérstaklega fyrir traust vinnuferli þróunaraðila; þessi verkfæri eru ekki hluti af WordPress.org kjarnapakkanum og þarf að setja þau upp og heimila sérstaklega.

## Tiltæk verkfæri

### Tier 1 verkfæri (alltaf tiltæk)

Tier 1 verkfæri eru sjálfgefið tiltæk í Theme Builder án nokkurra viðbótarstillinga.

#### sd-ai-agent/site-scrape

**Tilgangur:** Greina fyrirliggjandi vefsíður til að sækja hönnunarinnblástur, efnisuppbyggingu og virkni.

**Geta:**

- **Vefsíðugreining** — skrapa og greina samkeppnis- eða innblástursvefsíður
- **Hönnunarútdráttur** — greina liti, leturgerðir og uppsetningarmynstur
- **Efnisuppbygging** — skilja skipulag og stigveldi síðna
- **Eiginleikagreining** — greina plugin og virkni
- **Frammistöðugreining** — athuga síðuhraða og bestun
- **SEO-greining** — fara yfir meta-merki og skipulögð gögn

**Notkun:**

```
Greindu hönnunina á example.com og notaðu hana sem innblástur fyrir vefinn minn.
```

**Það sem það dregur út:**

- Litapalletta og litanotkun
- Leturfræði (leturgerðir og stærðir)
- Uppsetningarbygging og bil
- Leiðsögumynstur
- Efnisskipulag
- Myndir og notkun miðla
- Gagnvirkir þættir
- Svörun í farsímum

**Takmarkanir:**

- Getur ekki skrapað vefi sem eru varðir með lykilorði
- Virðir robots.txt og stefnur vefs
- Kann að ná ekki kviku efni
- Vefir sem reiða sig mikið á JavaScript kunna að hafa takmarkaða greiningu
- Stórir vefir kunna að taka lengri tíma í greiningu

### Tier 2 verkfæri (valkvæð)

Tier 2 verkfæri eru tiltæk þegar þau eru sérstaklega virkjuð í stillingum Theme Builder.

#### Ítarleg greining

Veitir ítarleg frammistöðumæligildi:

- Hleðslutímar síðu
- Core Web Vitals
- SEO-einkunn
- Aðgengiseinkunn
- Einkunn fyrir bestu venjur

#### Efnisbestir

Greinir og leggur til umbætur fyrir:

- Læsileika
- SEO-bestun
- Notkun leitarorða
- Efnisuppbyggingu
- Staðsetningu ákalls til aðgerðar

### Tier 3 verkfæri (Premium)

Tier 3 verkfæri krefjast viðbótarstillinga eða premium eiginleika.

#### AI efnisframleiðandi

Býr til efni fyrir:

- Vörulýsingar
- Þjónustusíður
- Bloggfærslur
- Meta-lýsingar
- Texta fyrir ákall til aðgerðar

#### Ítarleg hönnunarverkfæri

Veitir ítarlega hönnunargetu:

- Sérsniðna CSS-framleiðslu
- Gerð hreyfinga
- Hönnun gagnvirkra þátta
- Ítarlega litafræði
- Bestun leturfræði

### Advanced fylgiverkfæri (sérstakur pakki)

Advanced fylgipakkanum er dreift sérstaklega frá kjarnaútgáfu Superdav AI Agent. Hann er ætlaður traustum umhverfum þróunaraðila og eigenda vefs þar sem stjórnendur leyfa umboðsmanninum sérstaklega að nota áhrifamikil verkfæri.

Geta Advanced fylgipakkans getur falið í sér:

- **Skráakerfisverkfæri** — skoða og breyta samþykktum skrám í traustum umhverfum
- **Gagnagrunnsverkfæri** — fyrirspyrja eða uppfæra gögn vefs þegar það er sérstaklega heimilað
- **WP-CLI verkfæri** — keyra WordPress viðhalds- og skoðunarskipanir
- **REST dispatcherverkfæri** — kalla á skráða REST endpointa í gegnum stýrð dispatch-vinnuferli
- **Plugin smíðaverkfæri** — setja upp grunn og ítra á plugin-kóða
- **Git skyndimyndaverkfæri** — búa til skyndimyndir fyrir áhættusamar aðgerðir þróunaraðila
- **Notendastjórnunarverkfæri** — hjálpa til við að yfirfara eða laga notendafærslur þar sem það er leyft
- **Viðmiðunarprófaverkfæri** — keyra frammistöðu- eða getuviðmiðunarpróf fyrir þróunaryfirferð

Ekki skjalfesta þessi sem almennt tiltæk Theme Builder verkfæri fyrir hverja uppsetningu. Þau eru aðeins tiltæk þegar Advanced fylgipakkinn er uppsettur, virkjaður og takmarkaður við trausta stjórnendur.

## Stilling verkfæra

### Að virkja verkfæri

Til að virkja viðbótarverkfæri í Theme Builder:

1. Farðu í **Gratis AI Agent → Settings**
2. Farðu í **Theme Builder → Tools**
3. Kveiktu/slökktu á verkfærum eftir þörfum
4. Vistaðu stillingar

### Heimildir verkfæra

Sum verkfæri krefjast heimilda:

- **Vefskrap** — krefst internetaðgangs
- **Greining** — krefst Google Analytics samþættingar
- **Efnisframleiðsla** — krefst API-lykla
- **Ítarlegir eiginleikar** — kunna að krefjast premium áskriftar
- **Advanced fylgiverkfæri** — krefjast Advanced pakkans sem er dreift sérstaklega og skýrs trausts stjórnanda

### API-lyklar og auðkenni

Stilltu API-lykla fyrir verkfæri sem krefjast þeirra:

1. Farðu í **Gratis AI Agent → Settings → API Keys**
2. Sláðu inn auðkenni fyrir hvert verkfæri
3. Prófaðu tengingu
4. Vistaðu á öruggan hátt

### Uppsetning Advanced fylgipakkans

Advanced fylgipakkinn er gefinn út sérstaklega frá WordPress.org kjarna-ZIP. Settu hann aðeins upp frá opinberri dreifileið verkefnisins fyrir útgáfuna og takmarkaðu síðan aðgang við trausta stjórnendur. Farðu yfir samþykkishlið manna og hegðun git skyndimynda áður en þú virkjar skráakerfis-, gagnagrunns-, WP-CLI-, REST dispatcher-, plugin smíða-, notendastjórnunar- eða viðmiðunarprófaverkfæri á framleiðsluvef.

## Notkun sd-ai-agent/site-scrape

### Grunnnotkun

Biddu Theme Builder um að greina vefsíðu:

```
Greindu hönnunina á vef samkeppnisaðila míns á competitor.com
og leggðu til hönnunarbætur fyrir vefinn minn.
```

### Sértæk greining

Biddu um tilteknar gerðir greiningar:

```
Dragðu út litapallettuna frá example.com og notaðu hana sem innblástur.
```

```
Greindu leiðsöguuppbyggingu example.com og beittu svipuðu
skipulagi á vefinn minn.
```

```
Athugaðu svörun example.com í farsímum og tryggðu að vefurinn minn
sé jafn vel svarandi.
```

### Samanburðargreining

Berðu saman marga vefi:

```
Berðu saman hönnun site1.com og site2.com og búðu til hönnun
sem sameinar bestu þætti beggja.
```

## Takmarkanir og atriði verkfæra

### Hraðatakmörkun

- Scraping er hraðatakmarkað til að koma í veg fyrir ofálag á netþjóni
- Margar beiðnir til sama vefsvæðis kunna að vera takmarkaðar
- Stór vefsvæði geta tekið lengri tíma að greina

### Nákvæmni efnis

- Kvik efni kann að nást ekki að fullu
- Efni sem JavaScript birtir kann að vera ófullkomið
- Rauntímagögn kunna að endurspeglast ekki
- Sumt efni kann að vera á bak við greiðsluveggi

### Lagaleg og siðferðileg atriði

- Virðið robots.txt og stefnur vefsvæðis
- Ekki scrape-a höfundarréttarvarið efni til endurbirtingar
- Notið greiningu til innblásturs, ekki afritunar
- Staðfestið að þið hafið rétt til að nota útdregið efni
- Fylgið þjónustuskilmálum greindra vefsvæða

### Áhrif á afköst

- Scraping á stórum vefsvæðum getur tekið tíma
- Margar samtímis scraping-aðgerðir geta verið hægari
- Nettenging hefur áhrif á hraða
- Stór gagnasöfn kunna að krefjast meiri vinnslu

## Bestu starfsvenjur

### Notkun greiningar á vefsvæði

1. **Greindu mörg vefsvæði** — safnaðu innblæstri frá nokkrum heimildum
2. **Einbeittu þér að uppbyggingu** — lærðu mynstur í útliti og skipulagi
3. **Dragðu út liti** — notaðu litaspjöld sem upphafspunkta
4. **Rannsakaðu leturfræði** — greindu letursamsetningar sem þér líkar
5. **Farðu yfir leiðarkerfi** — skildu skipulag valmynda

### Siðferðilegt scraping

1. **Virðið robots.txt** — fylgið leiðbeiningum vefsvæðis
2. **Ekki afrita efni** — notið greiningu eingöngu til innblásturs
3. **Staðfestið réttindi** — tryggið að þið megið nota útdregið efni
4. **Tilgreinið heimildir** — gefið innblástursheimildum kredit
5. **Fylgið skilmálum** — farið eftir þjónustuskilmálum vefsvæðis

### Hámarka virkni tóla

1. **Vertu nákvæm/ur** — óskaðu eftir tilteknum gerðum greiningar
2. **Veittu samhengi** — útskýrðu tilgang vefsvæðisins þíns
3. **Settu væntingar** — lýstu hönnunarmarkmiðum þínum
4. **Ítraðu** — fínstilltu út frá niðurstöðum
5. **Sameinaðu verkfæri** — notaðu mörg verkfæri fyrir heildstæða greiningu

## Úrræðaleit

### Ekki tekst að scrape-a vefsvæði

- Athugaðu hvort vefsvæðið sé aðgengilegt almenningi
- Staðfestu að robots.txt leyfi scraping
- Prófaðu annað vefsvæði
- Athugaðu nettengingu
- Hafðu samband við þjónustuver ef vandamálið heldur áfram

### Ófullkomin greining

- Vefsvæði kann að hafa kvikt efni
- JavaScript kann að vera ekki að fullu birt
- Stór vefsvæði kunna að renna út á tíma
- Reyndu að greina tilteknar síður í staðinn
- Óskaðu eftir tilteknum gerðum greiningar

### Hæg afköst

- Stór vefsvæði taka lengri tíma að greina
- Margar samtímis scraping-aðgerðir eru hægari
- Nettenging hefur áhrif á hraða
- Prófaðu utan álagstíma
- Greindu minni hluta fyrst

## Tengd skjölun

- [Uppgötvunarviðtal](./discovery-interview.md) — safnaðu hönnunarupplýsingum
- [Hönnunarstefna](./design-direction.md) — fínpússaðu hönnunina þína
- [Veitingavalmyndir](./hospitality-menus.md) — búðu til valmyndasíður
