---
title: Zouti ak Konfigirasyon
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Zouti ak Konfigirasyon {#tools-and-configuration}

Theme Builder itilize yon seri zouti pou analize, konsevwa, epi konstwi sit WordPress ou. Nan vèsyon 1.16.0, **sd-ai-agent/site-scrape se kounye a yon zouti Tier 1**, sa ki fè li disponib pa defo nan Theme Builder. Superdav AI Agent v1.18.0 entwodui tou yon pake konpayon Advanced ki distribye apa pou workflow devlopè ou fè konfyans; zouti sa yo pa fè pati pake debaz WordPress.org la epi yo dwe enstale ak otorize apa.

## Zouti ki Disponib {#available-tools}

### Zouti Tier 1 (Toujou Disponib) {#tier-1-tools-always-available}

Zouti Tier 1 yo disponib pa defo nan Theme Builder san okenn konfigirasyon anplis.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Objektif:** Analize sit entènèt ki egziste deja pou ekstrè enspirasyon konsepsyon, estrikti kontni, ak fonksyonalite.

**Kapasite:**

- **Analiz sit entènèt** — rale epi analize sit entènèt konpetitè oswa enspirasyon
- **Ekstraksyon konsepsyon** — idantifye koulè, polis, ak modèl aranjman
- **Estrikti kontni** — konprann òganizasyon paj ak yerachi
- **Deteksyon karakteristik** — idantifye plugin ak fonksyonalite
- **Analiz pèfòmans** — verifye vitès paj ak optimize
- **Analiz SEO** — revize meta tags ak done estriktire

**Itilizasyon:**

```
Analize konsepsyon example.com epi sèvi avè l kòm enspirasyon pou sit mwen an.
```

**Sa Li Ekstrè:**

- Palèt koulè ak itilizasyon koulè
- Tipografi (polis ak gwosè)
- Estrikti aranjman ak espasman
- Modèl navigasyon
- Òganizasyon kontni
- Itilizasyon imaj ak medya
- Eleman entèaktif
- Adaptabilite mobil

**Limitasyon:**

- Pa ka rale sit ki pwoteje ak modpas
- Respekte robots.txt ak règleman sit yo
- Ka pa kaptire kontni dinamik
- Sit ki chaje anpil ak JavaScript ka gen analiz limite
- Gwo sit ka pran plis tan pou analize

### Zouti Tier 2 (Opsyonèl) {#tier-2-tools-optional}

Zouti Tier 2 yo disponib lè yo aktive yo klèman nan paramèt Theme Builder.

#### Analitik Avanse {#advanced-analytics}

Bay metrik pèfòmans detaye:

- Tan chajman paj
- Core Web Vitals
- Nòt SEO
- Nòt aksèbilite
- Nòt meyè pratik

#### Optimizè Kontni {#content-optimizer}

Analize epi sijere amelyorasyon pou:

- Lizibilite
- Optimizasyon SEO
- Itilizasyon mo kle
- Estrikti kontni
- Plasman apèl-a-aksyon

### Zouti Tier 3 (Premium) {#tier-3-tools-premium}

Zouti Tier 3 yo mande konfigirasyon anplis oswa karakteristik premium.

#### Jeneratè Kontni AI {#ai-content-generator}

Jenere kontni pou:

- Deskripsyon pwodwi
- Paj sèvis
- Atik blog
- Meta deskripsyon
- Tèks apèl-a-aksyon

#### Zouti Konsepsyon Avanse {#advanced-design-tools}

Bay kapasite konsepsyon avanse:

- Jenerasyon CSS pèsonalize
- Kreyasyon animasyon
- Konsepsyon eleman entèaktif
- Teyori koulè avanse
- Optimizasyon tipografi

### Zouti Konpayon Advanced (Pake Apa) {#advanced-companion-tools-separate-package}

Pake konpayon Advanced la distribye apa de piblikasyon debaz Superdav AI Agent la. Li fèt pou anviwònman devlopè ak pwopriyetè sit ou fè konfyans kote administratè yo pèmèt agent lan klèman itilize zouti ki gen gwo enpak.

Kapasite konpayon Advanced yo ka gen ladan:

- **Zouti sistèm fichye** — enspekte epi modifye fichye ki apwouve nan anviwònman ou fè konfyans
- **Zouti bazdone** — fè rechèch oswa mete ajou done sit lè sa otorize klèman
- **Zouti WP-CLI** — kouri kòmand antretyen ak enspeksyon WordPress
- **Zouti dispatchè REST** — rele endpoint REST ki anrejistre atravè workflow dispatch kontwole
- **Zouti konstriktè plugin** — kreye baz epi iterasyon sou kòd plugin
- **Zouti snapshot Git** — kreye snapshot anvan operasyon devlopè ki riske
- **Zouti jesyon itilizatè** — ede revize oswa ajiste dosye itilizatè kote yo pèmèt sa
- **Zouti benchmark** — kouri benchmark pèfòmans oswa kapasite pou revizyon devlopman

Pa dokimante sa yo kòm zouti Theme Builder ki disponib an jeneral pou chak enstalasyon. Yo disponib sèlman lè pake konpayon Advanced la enstale, aktive, epi limite pou administratè ou fè konfyans.

## Konfigirasyon Zouti {#tool-configuration}

### Aktive Zouti {#enabling-tools}

Pou aktive zouti anplis nan Theme Builder:

1. Navige ale nan **Gratis AI Agent → Settings**
2. Ale nan **Theme Builder → Tools**
3. Aktive/dezaktive zouti yo selon bezwen
4. Sove paramèt yo

### Pèmisyon Zouti {#tool-permissions}

Kèk zouti mande pèmisyon:

- **Rale sit** — mande aksè entènèt
- **Analitik** — mande entegrasyon Google Analytics
- **Jenerasyon kontni** — mande kle API
- **Karakteristik avanse** — ka mande abònman premium
- **Zouti konpayon Advanced** — mande pake Advanced ki distribye apa a ak konfyans administratè klè

### Kle API ak Idantifyan {#api-keys-and-credentials}

Konfigire kle API pou zouti ki mande yo:

1. Ale nan **Gratis AI Agent → Settings → API Keys**
2. Antre idantifyan pou chak zouti
3. Teste koneksyon an
4. Sove an sekirite

### Enstale Pake Konpayon Advanced la {#installing-the-advanced-companion-package}

Pake konpayon Advanced la pibliye apa de ZIP debaz WordPress.org la. Enstale li sèlman soti nan chanèl distribisyon ofisyèl pwojè a pou piblikasyon an, epi limite aksè pou administratè ou fè konfyans. Revize baryè apwobasyon imen ak konpòtman snapshot git anvan ou aktive zouti sistèm fichye, bazdone, WP-CLI, dispatchè REST, konstriktè plugin, jesyon itilizatè, oswa benchmark sou yon sit pwodiksyon.

## Itilize sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Itilizasyon Debaz {#basic-usage}

Mande Theme Builder pou analize yon sit entènèt:

```
Analize konsepsyon sit konpetitè mwen an nan competitor.com
epi sijere amelyorasyon konsepsyon pou sit mwen an.
```

### Analiz Espesifik {#specific-analysis}

Mande kalite analiz espesifik:

```
Ekstrè palèt koulè a nan example.com epi sèvi avè l kòm enspirasyon.
```

```
Analize estrikti navigasyon example.com epi aplike yon òganizasyon
ki sanble sou sit mwen an.
```

```
Verifye adaptabilite mobil example.com epi asire sit mwen an
egalman adapte.
```

### Analiz Konparezon {#comparison-analysis}

Konpare plizyè sit:

```
Konpare konsepsyon site1.com ak site2.com epi kreye yon konsepsyon
ki konbine pi bon eleman nan toude.
```

## Limitasyon ak Konsiderasyon Zouti {#tool-limitations-and-considerations}

### Limitasyon To {#rate-limiting}

- Scraping gen limit sou vitès pou anpeche sèvè a twò chaje
- Plizyè demann sou menm sit la ka ralanti
- Gwo sit yo ka pran plis tan pou analize

### Presizyon kontni {#content-accuracy}

- Kontni dinamik ka pa kaptire nèt
- Kontni JavaScript rann ka pa konplè
- Done an tan reyèl ka pa parèt
- Gen kèk kontni ki ka dèyè paywall

### Konsiderasyon legal ak etik {#legal-and-ethical-considerations}

- Respekte robots.txt ak règleman sit la
- Pa scrape kontni ki gen copyright pou repwodiksyon
- Sèvi ak analiz pou enspirasyon, pa pou kopye
- Verifye ou gen dwa pou itilize kontni ki ekstrè
- Swiv kondisyon sèvis sit yo analize yo

### Enpak sou pèfòmans {#performance-impact}

- Scraping gwo sit yo ka pran tan
- Plizyè scrape an menm tan ka pi dousman
- Koneksyon rezo afekte vitès
- Gwo ansanm done ka mande plis pwosesis

## Pi bon pratik {#best-practices}

### Itilizasyon analiz sit {#using-site-analysis}

1. **Analize plizyè sit** — ranmase enspirasyon nan plizyè sous
2. **Konsantre sou estrikti** — aprann modèl aranjman ak òganizasyon
3. **Ekstrè koulè** — itilize palèt koulè kòm pwen depa
4. **Etidye tipografi** — idantifye konbinezon polis ou renmen
5. **Revize navigasyon** — konprann òganizasyon meni

### Scraping etik {#ethical-scraping}

1. **Respekte robots.txt** — swiv gid sit la
2. **Pa kopye kontni** — itilize analiz sèlman pou enspirasyon
3. **Verifye dwa** — asire ou ka itilize kontni ki ekstrè
4. **Atribye sous** — bay sous enspirasyon yo kredi
5. **Swiv kondisyon** — konfòme w ak kondisyon sèvis sit la

### Maksimize efikasite zouti a {#maximizing-tool-effectiveness}

1. **Fè li espesifik** — mande kalite analiz espesifik
2. **Bay kontèks** — eksplike objektif sit ou a
3. **Fikse atant** — dekri objektif konsepsyon ou yo
4. **Repete amelyorasyon** — rafine selon rezilta yo
5. **Konbine zouti** — itilize plizyè zouti pou analiz konplè

## Depanaj {#troubleshooting}

### Sit la pa vle scrape {#site-wont-scrape}

- Tcheke si sit la aksesib piblikman
- Verifye robots.txt pèmèt scraping
- Eseye yon lòt sit
- Tcheke koneksyon entènèt
- Kontakte sipò si pwoblèm nan kontinye

### Analiz enkonplè {#incomplete-analysis}

- Sit la ka gen kontni dinamik
- JavaScript ka pa rann nèt
- Gwo sit yo ka rive nan limit tan
- Eseye analize paj espesifik pito
- Mande kalite analiz espesifik

### Pèfòmans ralanti {#slow-performance}

- Gwo sit yo pran plis tan pou analize
- Plizyè scrape an menm tan pi dousman
- Koneksyon rezo afekte vitès
- Eseye pandan lè ki pa gen twòp aktivite
- Analize pi piti seksyon an premye

## Dokimantasyon ki gen rapò {#related-documentation}

- [Entèvyou dekouvèt](./discovery-interview.md) — ranmase enfòmasyon konsepsyon
- [Direksyon konsepsyon](./design-direction.md) — rafine konsepsyon ou
- [Meni ospitalite](./hospitality-menus.md) — kreye paj meni
