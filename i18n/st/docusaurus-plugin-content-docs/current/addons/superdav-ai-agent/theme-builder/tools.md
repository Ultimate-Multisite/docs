---
title: Lisebelisoa le Tlhophiso
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Lisebelisoa le Tlhophiso {#tools-and-configuration}

Theme Builder e sebelisa sete ya lisebelisoa ho sekaseka, ho rala, le ho aha sebaka sa hao sa WordPress. Mofuteng wa 1.16.0, **sd-ai-agent/site-scrape jwale ke sesebediswa sa Tier 1**, se etsang hore se fumanehe ka kamehla ho Theme Builder. Superdav AI Agent v1.18.0 hape e hlahisa sephutheloana sa molekane sa Advanced se ajoang ka thoko bakeng sa mekgwa ya mosebetsi ya bahlahisi ba tsheptjwang; lisebelisoa tseo ha se karolo ya sephutheloana sa mantlha sa WordPress.org mme di lokela ho kenngwa le ho dumellwa ka thoko.

## Lisebelisoa tse Fumanehang {#available-tools}

### Lisebelisoa tsa Tier 1 (Di Fumaneha Kamehla) {#tier-1-tools-always-available}

Lisebelisoa tsa Tier 1 di fumaneha ka kamehla ho Theme Builder ntle le tlhophiso efe kapa efe e eketsehileng.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Morero:** Sekaseka diwebosaete tse teng ho ntsha tshusumetso ya moralo, sebopeho sa dikahare, le tshebetso.

**Bokgoni:**

- **Tlhahlobo ya webosaete** — ho scrape le ho sekaseka diwebosaete tsa bahlodisani kapa tsa tshusumetso
- **Ho ntsha moralo** — ho tseba mebala, difont, le dipaterone tsa moralo wa leqephe
- **Sebopeho sa dikahare** — ho utlwisisa tlhophiso ya maqephe le tatellano
- **Ho lemoha dikarolo** — ho tseba plugins le tshebetso
- **Tlhahlobo ya tshebetso** — ho hlahloba lebelo la leqephe le ntlafatso
- **Tlhahlobo ya SEO** — ho lekola meta tags le data e hlophisitsweng

**Tshebediso:**

```
Sekaseka moralo wa example.com mme o o sebedise e le tshusumetso bakeng sa sebaka sa ka.
```

**Seo E se Ntshang:**

- Palete ya mebala le tshebediso ya mebala
- Typography (difont le boholo)
- Sebopeho sa moralo wa leqephe le sebaka pakeng tsa dintho
- Dipaterone tsa tsamaiso
- Tlhophiso ya dikahare
- Tshebediso ya ditshwantsho le media
- Dintho tse sebetsang ka tshebedisano
- Karabelo ho mobile

**Meedi:**

- E ke ke ya scrape dibaka tse sireleditsweng ka phasewete
- E hlompha robots.txt le maano a sebaka
- E ka nna ya se kgone ho hapa dikahare tse fetohang
- Dibaka tse boima ka JavaScript di ka ba le tlhahlobo e lekanyeditsweng
- Dibaka tse kgolo di ka nka nako e telele ho sekasekwa

### Lisebelisoa tsa Tier 2 (Tsa Boikgethelo) {#tier-2-tools-optional}

Lisebelisoa tsa Tier 2 di fumaneha ha di nolofaditswe ka ho hlaka ho di-setting tsa Theme Builder.

#### Advanced Analytics {#advanced-analytics}

E fana ka dimetriki tse qaqileng tsa tshebetso:

- Dinako tsa ho laela maqephe
- Core Web Vitals
- Maduo a SEO
- Maduo a phihlello
- Maduo a mekgwa e metle ka ho fetisisa

#### Content Optimizer {#content-optimizer}

E sekaseka le ho sisinya dintlafatso bakeng sa:

- Ho baleha ha bonolo
- Ntlafatso ya SEO
- Tshebediso ya mantswe a sehlooho
- Sebopeho sa dikahare
- Ho bewa ha call-to-action

### Lisebelisoa tsa Tier 3 (Premium) {#tier-3-tools-premium}

Lisebelisoa tsa Tier 3 di hloka tlhophiso e eketsehileng kapa dikarolo tsa premium.

#### AI Content Generator {#ai-content-generator}

E hlahisa dikahare bakeng sa:

- Ditlhaloso tsa dihlahiswa
- Maqephe a ditshebeletso
- Dingolwa tsa blog
- Ditlhaloso tsa meta
- Mongolo wa call-to-action

#### Advanced Design Tools {#advanced-design-tools}

E fana ka bokgoni bo tsoetseng pele ba moralo:

- Ho hlahisa CSS ya moetlo
- Ho etsa animation
- Moralo wa dintho tse sebetsang ka tshebedisano
- Khopolo e tsoetseng pele ya mebala
- Ntlafatso ya Typography

### Lisebelisoa tsa Molekane wa Advanced (Sephutheloana se Arohaneng) {#advanced-companion-tools-separate-package}

Sephutheloana sa molekane wa Advanced se ajoa ka thoko ho tokollo ya mantlha ya Superdav AI Agent. Se reretswe tikoloho ya bahlahisi ba tsheptjwang le beng ba dibaka moo batsamaisi ba dumellang agent ka ho hlaka ho sebedisa lisebelisoa tse nang le tshusumetso e phahameng.

Bokgoni ba molekane wa Advanced bo ka kenyelletsa:

- **Lisebelisoa tsa filesystem** — ho lekola le ho fetola difaele tse dumelletsweng ditikolohong tse tsheptjwang
- **Lisebelisoa tsa database** — ho botsa kapa ho ntjhafatsa data ya sebaka ha ho dumelletswe ka ho hlaka
- **Lisebelisoa tsa WP-CLI** — ho tsamaisa ditaelo tsa tlhokomelo le tlhahlobo ya WordPress
- **Lisebelisoa tsa REST dispatcher** — ho bitsa REST endpoints tse ngodisitsweng ka mekgwa ya mosebetsi ya dispatch e laolwang
- **Lisebelisoa tsa ho aha plugin** — ho etsa scaffold le ho pheta-pheta hodima khoutu ya plugin
- **Lisebelisoa tsa snapshot tsa Git** — ho bopa snapshots pele ho diketso tse kotsi tsa bahlahisi
- **Lisebelisoa tsa tsamaiso ya basebedisi** — ho thusa ho lekola kapa ho fetola direkoto tsa basebedisi moo ho dumelletsweng
- **Lisebelisoa tsa benchmark** — ho tsamaisa dibenchmark tsa tshebetso kapa bokgoni bakeng sa tlhahlobo ya ntshetsopele

O se ke wa ngola tsena e le lisebelisoa tsa Theme Builder tse fumanehang ka kakaretso bakeng sa ho kenngwa hohle. Di fumaneha feela ha sephutheloana sa molekane wa Advanced se kentsoe, se nolofaditswe, mme se thibetswe ho batsamaisi ba tsheptjwang.

## Tlhophiso ya Lisebelisoa {#tool-configuration}

### Ho Nolofatsa Lisebelisoa {#enabling-tools}

Ho nolofatsa lisebelisoa tse eketsehileng ho Theme Builder:

1. Eya ho **Gratis AI Agent → Settings**
2. Eya ho **Theme Builder → Tools**
3. Bulela/tima lisebelisoa kamoo ho hlokahalang
4. Boloka di-setting

### Ditumello tsa Lisebelisoa {#tool-permissions}

Lisebelisoa tse ding di hloka ditumello:

- **Site scraping** — e hloka phihlello ya inthanete
- **Analytics** — e hloka kopanyo ya Google Analytics
- **Ho hlahisa dikahare** — ho hloka API keys
- **Dikarolo tse tsoetseng pele** — di ka hloka peeletso ya premium
- **Lisebelisoa tsa molekane wa Advanced** — di hloka sephutheloana sa Advanced se ajoang ka thoko le tshepo e hlakileng ya motsamaisi

### API Keys le Dintlha tsa Boitsebiso {#api-keys-and-credentials}

Hlophisa API keys bakeng sa lisebelisoa tse di hlokang:

1. Eya ho **Gratis AI Agent → Settings → API Keys**
2. Kenya dintlha tsa boitsebiso bakeng sa sesebediswa ka seng
3. Leka kgokahano
4. Boloka ka polokeho

### Ho Kenya Sephutheloana sa Molekane wa Advanced {#installing-the-advanced-companion-package}

Sephutheloana sa molekane wa Advanced se lokollwa ka thoko ho ZIP ya mantlha ya WordPress.org. Se kenye feela ho tswa kanaleng ya semmuso ya kabo ya projeke bakeng sa tokollo, ebe o thibela phihlello ho batsamaisi ba tsheptjwang. Lekola dikgoro tsa tumello ya motho le boitshwaro ba git snapshot pele o nolofatsa filesystem, database, WP-CLI, REST dispatcher, sehahi sa plugin, tsamaiso ya basebedisi, kapa lisebelisoa tsa benchmark sebakeng sa tlhahiso.

## Ho Sebedisa sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Tshebediso ya Motheo {#basic-usage}

Kopa Theme Builder ho sekaseka webosaete:

```
Sekaseka moralo wa sebaka sa mohlodisani wa ka ho competitor.com
mme o sisinye dintlafatso tsa moralo bakeng sa sebaka sa ka.
```

### Tlhahlobo e Ikgethileng {#specific-analysis}

Kopa mefuta e ikgethileng ya tlhahlobo:

```
Ntsha palete ya mebala ho example.com mme o e sebedise e le tshusumetso.
```

```
Sekaseka sebopeho sa tsamaiso sa example.com mme o sebedise tlhophiso
e tshwanang sebakeng sa ka.
```

```
Hlahloba karabelo ho mobile ya example.com mme o netefatse hore sebaka sa ka
se arabela ka ho lekana.
```

### Tlhahlobo ya Papiso {#comparison-analysis}

Bapisa dibaka tse ngata:

```
Bapisa meralo ya site1.com le site2.com mme o etse moralo
o kopanyang dintho tse ntle ka ho fetisisa tsa bobedi.
```

## Meedi le Dintlha tse Lokelang ho Nahanwa ka Lisebelisoa {#tool-limitations-and-considerations}

### Ho Lekanyetsa Sekgahla {#rate-limiting}

- Ho scrape ho behiloe moeli oa sekhahla ho thibela ho imeloa ha server
- Likopo tse ngata sebakeng se le seng sa marang-rang li ka fokotsoa
- Libaka tse kholo tsa marang-rang li ka nka nako e telele ho sekasekoa

### Ho Nepahala ha Dikahare {#content-accuracy}

- Dikahare tse fetohang di ka se tshwarwe ka botlalo
- Dikahare tse hlahiswang ke JavaScript di ka ba di sa fella
- Datha ya nako ya nnete e ka nna ya se bonahale
- Dikahare tse ding di ka ba ka mora marako a tefo

### Ditaba tsa Molao le Boitshwaro {#legal-and-ethical-considerations}

- Hlompha robots.txt le maano a sebaka sa marang-rang
- O se ke wa scrape dikahare tse sireleditsweng ka copyright bakeng sa ho di hlahisa hape
- Sebedisa tlhahlobo bakeng sa tshusumetso, eseng ho kopitsa
- Netefatsa hore o na le ditokelo tsa ho sebedisa dikahare tse ntshotsweng
- Latela dipehelo tsa tshebeletso tsa dibaka tsa marang-rang tse sekasekilweng

### Kameho ya Tshebetso {#performance-impact}

- Ho scrape dibaka tse kgolo tsa marang-rang ho ka nka nako
- Ho scrape hangata ka nako e le nngwe ho ka ba butle
- Kgokahano ya netweke e ama lebelo
- Disete tse kgolo tsa datha di ka hloka tshebetso e eketsehileng

## Mekgwa e Molemohadi {#best-practices}

### Ho Sebedisa Tlhahlobo ya Sebaka sa Marang-rang {#using-site-analysis}

1. **Sekaseka dibaka tse ngata tsa marang-rang** — bokella tshusumetso mehloding e mmalwa
2. **Tsepamisa maikutlo sebopehong** — ithute dipaterone tsa peakanyo le tlhophiso
3. **Ntsha mebala** — sebedisa diphalete tsa mebala e le dintlha tsa qalo
4. **Ithute typography** — tseba dikopanyo tsa font tseo o di ratang
5. **Hlahloba navigation** — utlwisisa tlhophiso ya menu

### Ho Scrape ka Boitshwaro {#ethical-scraping}

1. **Hlompha robots.txt** — latela ditataiso tsa sebaka sa marang-rang
2. **O se ke wa kopitsa dikahare** — sebedisa tlhahlobo bakeng sa tshusumetso feela
3. **Netefatsa ditokelo** — etsa bonnete ba hore o ka sebedisa dikahare tse ntshotsweng
4. **Bolela mehlodi** — fa mehlodi ya tshusumetso tlotla
5. **Latela dipehelo** — ikamahanye le dipehelo tsa tshebeletso tsa sebaka sa marang-rang

### Ho Hodisa Katleho ya Sesebediswa {#maximizing-tool-effectiveness}

1. **Toba taba** — kopa mefuta e itseng ya tlhahlobo
2. **Fana ka moelelo** — hlalosa morero wa sebaka sa hao sa marang-rang
3. **Beha ditebello** — hlalosa dipheo tsa hao tsa moralo
4. **Pheta le ho ntlafatsa** — ntlafatsa ho ya ka diphetho
5. **Kopanya disebediswa** — sebedisa disebediswa tse ngata bakeng sa tlhahlobo e akaretsang

## Ho Rarolla Mathata {#troubleshooting}

### Sebaka sa Marang-rang se Hana ho Scrape {#site-wont-scrape}

- Hlahloba hore na sebaka sa marang-rang se fumaneha phatlalatsa
- Netefatsa hore robots.txt e dumella ho scrape
- Leka sebaka se seng sa marang-rang
- Hlahloba kgokahano ya inthanete
- Ikopanye le tshehetso haeba bothata bo tswela pele

### Tlhahlobo e sa Fellang {#incomplete-analysis}

- Sebaka sa marang-rang se ka ba le dikahare tse fetohang
- JavaScript e ka nna ya se hlahiswe ka botlalo
- Dibaka tse kgolo tsa marang-rang di ka felloa ke nako
- Leka ho sekaseka maqephe a itseng ho ena le hoo
- Kopa mefuta e itseng ya tlhahlobo

### Tshebetso e Butle {#slow-performance}

- Dibaka tse kgolo tsa marang-rang di nka nako e telele ho sekasekwa
- Ho scrape hangata ka nako e le nngwe ho butle
- Kgokahano ya netweke e ama lebelo
- Leka nakong eo tshebediso e leng tlase
- Sekaseka dikarolo tse nyane pele

## Ditokomane tse Amanang {#related-documentation}

- [Puisano ya Ho Sibolla](./discovery-interview.md) — bokella tlhahisoleseding ya moralo
- [Tataiso ya Moralo](./design-direction.md) — ntlafatsa moralo wa hao
- [Dimenu tsa Hospitality](./hospitality-menus.md) — etsa maqephe a menu
