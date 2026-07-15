---
title: Zana na Usanidi
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Zana na Usanidi

Theme Builder hutumia seti ya zana kuchanganua, kubuni, na kujenga tovuti yako ya WordPress. Katika toleo 1.16.0, **sd-ai-agent/site-scrape sasa ni zana ya Tier 1**, hivyo inapatikana kwa chaguo-msingi katika Theme Builder. Superdav AI Agent v1.18.0 pia inaleta kifurushi cha Advanced companion kinachosambazwa kando kwa mtiririko wa kazi wa wasanidi wanaoaminika; zana hizo si sehemu ya kifurushi cha msingi cha WordPress.org na lazima zisakinishwe na kuidhinishwa kando.

## Zana Zinazopatikana {#available-tools}

### Zana za Tier 1 (Zinapatikana Kila Wakati) {#tier-1-tools-always-available}

Zana za Tier 1 zinapatikana kwa chaguo-msingi katika Theme Builder bila usanidi wowote wa ziada.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Madhumuni:** Kuchanganua tovuti zilizopo ili kutoa msukumo wa muundo, muundo wa maudhui, na utendaji.

**Uwezo:**

- **Uchambuzi wa tovuti** — kukusanya na kuchanganua tovuti za washindani au za msukumo
- **Utoaji wa muundo** — kutambua rangi, fonti, na mifumo ya mpangilio
- **Muundo wa maudhui** — kuelewa mpangilio wa kurasa na ngazi zake
- **Utambuzi wa vipengele** — kutambua plugin na utendaji
- **Uchambuzi wa utendaji** — kukagua kasi ya ukurasa na uboreshaji
- **Uchambuzi wa SEO** — kukagua meta tags na data iliyopangwa

**Matumizi:**

```
Changanua muundo wa example.com na uutumie kama msukumo kwa tovuti yangu.
```

**Inachotoa:**

- Paleti ya rangi na matumizi ya rangi
- Tipografia (fonti na ukubwa)
- Muundo wa mpangilio na nafasi
- Mifumo ya urambazaji
- Mpangilio wa maudhui
- Matumizi ya picha na media
- Vipengele shirikishi
- Uwitikio wa simu za mkononi

**Vikwazo:**

- Haiwezi kukusanya tovuti zinazolindwa kwa nenosiri
- Inaheshimu robots.txt na sera za tovuti
- Huenda isikamate maudhui yanayobadilika
- Tovuti zinazotegemea sana JavaScript zinaweza kuwa na uchambuzi mdogo
- Tovuti kubwa zinaweza kuchukua muda mrefu zaidi kuchanganuliwa

### Zana za Tier 2 (Hiari) {#tier-2-tools-optional}

Zana za Tier 2 zinapatikana zinapowezeshwa wazi katika mipangilio ya Theme Builder.

#### Advanced Analytics {#advanced-analytics}

Hutoa vipimo vya kina vya utendaji:

- Nyakati za upakiaji wa ukurasa
- Core Web Vitals
- Alama ya SEO
- Alama ya ufikivu
- Alama ya mbinu bora

#### Content Optimizer {#content-optimizer}

Huchanganua na kupendekeza maboresho kwa:

- Usomekaji
- Uboreshaji wa SEO
- Matumizi ya maneno muhimu
- Muundo wa maudhui
- Uwekaji wa wito wa kuchukua hatua

### Zana za Tier 3 (Premium) {#tier-3-tools-premium}

Zana za Tier 3 zinahitaji usanidi wa ziada au vipengele vya premium.

#### AI Content Generator {#ai-content-generator}

Huzalisha maudhui kwa:

- Maelezo ya bidhaa
- Kurasa za huduma
- Machapisho ya blogu
- Meta descriptions
- Nakala ya wito wa kuchukua hatua

#### Advanced Design Tools {#advanced-design-tools}

Hutoa uwezo wa juu wa muundo:

- Uzalishaji wa CSS maalum
- Uundaji wa uhuishaji
- Muundo wa kipengele shirikishi
- Nadharia ya juu ya rangi
- Uboreshaji wa tipografia

### Zana za Advanced Companion (Kifurushi Tofauti) {#advanced-companion-tools-separate-package}

Kifurushi cha Advanced companion husambazwa kando na toleo la msingi la Superdav AI Agent. Kimekusudiwa kwa mazingira ya wasanidi na wamiliki wa tovuti wanaoaminika ambapo wasimamizi huruhusu wazi agent kutumia zana zenye athari kubwa.

Uwezo wa Advanced companion unaweza kujumuisha:

- **Zana za mfumo wa faili** — kukagua na kurekebisha faili zilizoidhinishwa katika mazingira yanayoaminika
- **Zana za database** — kuuliza au kusasisha data ya tovuti inapoidinishwa wazi
- **Zana za WP-CLI** — kuendesha amri za matengenezo na ukaguzi wa WordPress
- **Zana za REST dispatcher** — kuita endpoints za REST zilizosajiliwa kupitia mitiririko ya dispatch inayodhibitiwa
- **Zana za kujenga plugin** — kuanzisha muundo na kuboresha code ya plugin kwa kurudia
- **Zana za Git snapshot** — kuunda snapshots kabla ya operesheni hatari za wasanidi
- **Zana za usimamizi wa watumiaji** — kusaidia kukagua au kurekebisha rekodi za watumiaji panaporuhusiwa
- **Zana za benchmark** — kuendesha benchmarks za utendaji au uwezo kwa ukaguzi wa maendeleo

Usiziandike kama zana za Theme Builder zinazopatikana kwa ujumla kwa kila usakinishaji. Zinapatikana tu wakati kifurushi cha Advanced companion kimesakinishwa, kuwezeshwa, na kuzuiliwa kwa wasimamizi wanaoaminika.

## Usanidi wa Zana {#tool-configuration}

### Kuwezesha Zana {#enabling-tools}

Ili kuwezesha zana za ziada katika Theme Builder:

1. Nenda kwenye **Gratis AI Agent → Settings**
2. Nenda kwenye **Theme Builder → Tools**
3. Washa/zima zana kadiri inavyohitajika
4. Hifadhi mipangilio

### Ruhusa za Zana {#tool-permissions}

Baadhi ya zana zinahitaji ruhusa:

- **Ukusanyaji wa tovuti** — unahitaji ufikiaji wa intaneti
- **Analytics** — inahitaji muunganisho wa Google Analytics
- **Uzalishaji wa maudhui** — unahitaji API keys
- **Vipengele vya juu** — vinaweza kuhitaji premium subscription
- **Zana za Advanced companion** — zinahitaji kifurushi cha Advanced kinachosambazwa kando na uaminifu wa wazi wa msimamizi

### API Keys na Vitambulisho {#api-keys-and-credentials}

Sanidi API keys kwa zana zinazozihitaji:

1. Nenda kwenye **Gratis AI Agent → Settings → API Keys**
2. Weka vitambulisho kwa kila zana
3. Jaribu muunganisho
4. Hifadhi kwa usalama

### Kusakinisha Kifurushi cha Advanced Companion {#installing-the-advanced-companion-package}

Kifurushi cha Advanced companion hutolewa kando na ZIP ya msingi ya WordPress.org. Kisakinishe tu kutoka kwenye njia rasmi ya usambazaji ya mradi kwa toleo husika, kisha zuia ufikiaji kwa wasimamizi wanaoaminika. Kagua milango ya idhini ya binadamu na tabia ya git snapshot kabla ya kuwezesha zana za mfumo wa faili, database, WP-CLI, REST dispatcher, kujenga plugin, usimamizi wa watumiaji, au benchmark kwenye tovuti ya uzalishaji.

## Kutumia sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Matumizi ya Msingi {#basic-usage}

Mwombe Theme Builder ichanganue tovuti:

```
Changanua muundo wa tovuti ya mshindani wangu katika competitor.com
na pendekeza maboresho ya muundo kwa tovuti yangu.
```

### Uchambuzi Maalum {#specific-analysis}

Omba aina maalum za uchambuzi:

```
Toa paleti ya rangi kutoka example.com na uitumie kama msukumo.
```

```
Changanua muundo wa urambazaji wa example.com na tumia mpangilio
unaofanana kwenye tovuti yangu.
```

```
Kagua uwitikio wa simu za mkononi wa example.com na hakikisha tovuti yangu
inaitikia kwa kiwango sawa.
```

### Uchambuzi wa Ulinganisho {#comparison-analysis}

Linganisha tovuti nyingi:

```
Linganisha miundo ya site1.com na site2.com na unda muundo
unaounganisha vipengele bora vya zote mbili.
```

## Vikwazo na Mambo ya Kuzingatia ya Zana {#tool-limitations-and-considerations}

### Upunguzaji wa Kiwango {#rate-limiting}

- Scraping imewekewa kikomo cha kasi ili kuzuia mzigo kupita kiasi kwenye seva
- Maombi mengi kwa site ileile yanaweza kupunguzwa kasi
- Site kubwa zinaweza kuchukua muda mrefu zaidi kuchanganuliwa

### Usahihi wa Maudhui {#content-accuracy}

- Maudhui yanayobadilika yanaweza yasinaswe kikamilifu
- Maudhui yanayoonyeshwa na JavaScript yanaweza kuwa hayajakamilika
- Data ya wakati halisi inaweza isionekane
- Baadhi ya maudhui yanaweza kuwa nyuma ya malipo

### Mambo ya Kisheria na Kimaadili {#legal-and-ethical-considerations}

- Heshimu robots.txt na sera za site
- Usifanye scraping ya maudhui yenye hakimiliki kwa ajili ya kuyarudufu
- Tumia uchanganuzi kwa msukumo, si kunakili
- Hakikisha una haki za kutumia maudhui yaliyotolewa
- Fuata masharti ya huduma ya site zilizochanganuliwa

### Athari kwa Utendaji {#performance-impact}

- Scraping ya site kubwa inaweza kuchukua muda
- Scraping nyingi za wakati mmoja zinaweza kuwa polepole zaidi
- Muunganisho wa mtandao huathiri kasi
- Seti kubwa za data zinaweza kuhitaji uchakataji zaidi

## Mbinu Bora {#best-practices}

### Kutumia Uchanganuzi wa Site {#using-site-analysis}

1. **Changanua site nyingi** — kusanya msukumo kutoka vyanzo kadhaa
2. **Lenga muundo** — jifunze mifumo ya mpangilio na upangaji
3. **Toa rangi** — tumia paleti za rangi kama sehemu za kuanzia
4. **Jifunze typography** — tambua michanganyiko ya font unayoipenda
5. **Pitia urambazaji** — elewa upangaji wa menyu

### Scraping ya Kimaadili {#ethical-scraping}

1. **Heshimu robots.txt** — fuata miongozo ya site
2. **Usinakili maudhui** — tumia uchanganuzi kwa msukumo pekee
3. **Hakiki haki** — hakikisha unaweza kutumia maudhui yaliyotolewa
4. **Taja vyanzo** — toa sifa kwa vyanzo vya msukumo
5. **Fuata masharti** — zingatia masharti ya huduma ya site

### Kuongeza Ufanisi wa Zana {#maximizing-tool-effectiveness}

1. **Kuwa mahususi** — omba aina mahususi za uchanganuzi
2. **Toa muktadha** — eleza madhumuni ya site yako
3. **Weka matarajio** — eleza malengo yako ya muundo
4. **Rudia na boresha** — boresha kulingana na matokeo
5. **Changanya zana** — tumia zana nyingi kwa uchanganuzi wa kina

## Utatuzi wa Matatizo {#troubleshooting}

### Site Haitafanyiwa Scraping {#site-wont-scrape}

- Angalia kama site inapatikana hadharani
- Hakikisha robots.txt inaruhusu scraping
- Jaribu site nyingine
- Angalia muunganisho wa intaneti
- Wasiliana na usaidizi ikiwa tatizo litaendelea

### Uchanganuzi Usio Kamili {#incomplete-analysis}

- Site inaweza kuwa na maudhui yanayobadilika
- JavaScript inaweza isiwasilishwe kikamilifu
- Site kubwa zinaweza kuisha muda
- Jaribu kuchanganua kurasa mahususi badala yake
- Omba aina mahususi za uchanganuzi

### Utendaji wa Polepole {#slow-performance}

- Site kubwa huchukua muda mrefu zaidi kuchanganuliwa
- Scraping nyingi za wakati mmoja huwa polepole zaidi
- Muunganisho wa mtandao huathiri kasi
- Jaribu wakati wa saa zisizo na matumizi mengi
- Changanua sehemu ndogo kwanza

## Nyaraka Zinazohusiana {#related-documentation}

- [Mahojiano ya Ugunduzi](./discovery-interview.md) — kusanya taarifa za muundo
- [Mwelekeo wa Muundo](./design-direction.md) — boresha muundo wako
- [Menyu za Ukarimu](./hospitality-menus.md) — unda kurasa za menyu
