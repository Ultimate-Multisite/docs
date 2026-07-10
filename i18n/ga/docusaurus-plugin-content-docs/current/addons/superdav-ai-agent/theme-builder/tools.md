---
title: Uirlisí agus Cumraíocht
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Uirlisí agus Cumraíocht {#tools-and-configuration}

Úsáideann Theme Builder tacar uirlisí chun do shuíomh WordPress a anailísiú, a dhearadh, agus a thógáil. I leagan 1.16.0, **sd-ai-agent/site-scrape is now a Tier 1 tool**, rud a fhágann go bhfuil sé ar fáil de réir réamhshocraithe in Theme Builder. Tugann Superdav AI Agent v1.18.0 isteach freisin pacáiste compánach Advanced a dháiltear ar leithligh le haghaidh sreafaí oibre forbróra iontaofa; níl na huirlisí sin mar chuid de phacáiste lárnach WordPress.org agus ní mór iad a shuiteáil agus a údarú ar leithligh.

## Uirlisí atá ar Fáil {#available-tools}

### Uirlisí Tier 1 (Ar Fáil i gCónaí) {#tier-1-tools-always-available}

Tá uirlisí Tier 1 ar fáil de réir réamhshocraithe in Theme Builder gan aon chumraíocht bhreise.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Cuspóir:** Suíomhanna gréasáin atá ann cheana a anailísiú chun inspioráid dearaidh, struchtúr ábhair, agus feidhmiúlacht a bhaint amach.

**Cumais:**

- **Anailís suíomh gréasáin** — suíomhanna gréasáin iomaitheoirí nó inspioráide a scríobadh agus a anailísiú
- **Eastóscadh dearaidh** — dathanna, clónna, agus patrúin leagain amach a aithint
- **Struchtúr ábhair** — eagar leathanaigh agus ordlathas a thuiscint
- **Brath gnéithe** — plugins agus feidhmiúlacht a aithint
- **Anailís feidhmíochta** — luas leathanaigh agus barrfheabhsú a sheiceáil
- **Anailís SEO** — meta tags agus sonraí struchtúrtha a athbhreithniú

**Úsáid:**

```
Déan anailís ar dhearadh example.com agus úsáid é mar inspioráid do mo shuíomh.
```

**An Rud a Bhaineann Sé Amach:**

- Pailéad dathanna agus úsáid dathanna
- Clóghrafaíocht (clónna agus méideanna)
- Struchtúr leagain amach agus spásáil
- Patrúin nascleanúna
- Eagar ábhair
- Íomhánna agus úsáid meán
- Eilimintí idirghníomhacha
- Freagrúlacht mhóibíleach

**Teorainneacha:**

- Ní féidir suíomhanna cosanta le pasfhocal a scríobadh
- Urramaíonn sé robots.txt agus beartais suímh
- D’fhéadfadh sé nach ngabhfadh sé ábhar dinimiciúil
- D’fhéadfadh anailís theoranta a bheith ar shuíomhanna a bhfuil go leor JavaScript iontu
- D’fhéadfadh sé níos faide a ghlacadh suíomhanna móra a anailísiú

### Uirlisí Tier 2 (Roghnach) {#tier-2-tools-optional}

Tá uirlisí Tier 2 ar fáil nuair a chumasaítear go sainráite iad i socruithe Theme Builder.

#### Ard-Anailísíocht {#advanced-analytics}

Soláthraíonn sí méadrachtaí feidhmíochta mionsonraithe:

- Amanna lódála leathanaigh
- Core Web Vitals
- Scór SEO
- Scór inrochtaineachta
- Scór dea-chleachtas

#### Barrfheabhsóir Ábhair {#content-optimizer}

Déanann sé anailís agus molann sé feabhsuithe do:

- Inléiteacht
- Barrfheabhsú SEO
- Úsáid eochairfhocal
- Struchtúr ábhair
- Suíomh glao chun gnímh

### Uirlisí Tier 3 (Premium) {#tier-3-tools-premium}

Teastaíonn cumraíocht bhreise nó gnéithe premium ó uirlisí Tier 3.

#### Gineadóir Ábhair AI {#ai-content-generator}

Gineann sé ábhar do:

- Cur síos ar tháirgí
- Leathanaigh seirbhíse
- Postálacha blag
- Meta descriptions
- Cóip ghlao chun gnímh

#### Arduirlisí Dearaidh {#advanced-design-tools}

Soláthraíonn siad ardchumais dearaidh:

- Giniúint CSS saincheaptha
- Cruthú beochana
- Dearadh eilimintí idirghníomhacha
- Ardteoiric dathanna
- Barrfheabhsú clóghrafaíochta

### Arduirlisí Compánacha (Pacáiste ar Leith) {#advanced-companion-tools-separate-package}

Dáiltear an pacáiste compánach Advanced ar leithligh ón eisiúint lárnach Superdav AI Agent. Tá sé beartaithe do thimpeallachtaí forbróra agus úinéara suímh iontaofa ina gceadaíonn riarthóirí go sainráite don agent uirlisiú ardtionchair a úsáid.

Is féidir le cumais chompánacha Advanced a bheith san áireamh:

- **Uirlisí córais comhad** — comhaid cheadaithe i dtimpeallachtaí iontaofa a iniúchadh agus a mhodhnú
- **Uirlisí bunachair sonraí** — sonraí suímh a cheistiú nó a nuashonrú nuair atá údarú sainráite ann
- **Uirlisí WP-CLI** — orduithe cothabhála agus iniúchta WordPress a rith
- **Uirlisí seoltóra REST** — glaoch ar chríochphointí REST cláraithe trí shreafaí oibre seolta rialaithe
- **Uirlisí tógálaí plugin** — cnámharlach a chruthú agus atriall a dhéanamh ar chód plugin
- **Uirlisí seatanna Git** — seatanna a chruthú roimh oibríochtaí forbróra rioscacha
- **Uirlisí bainistíochta úsáideoirí** — cabhrú le taifid úsáideoirí a athbhreithniú nó a choigeartú nuair a cheadaítear é
- **Uirlisí tagarmharcála** — tagarmharcanna feidhmíochta nó cumais a rith le haghaidh athbhreithniú forbartha

Ná doiciméadaigh iad seo mar uirlisí Theme Builder atá ar fáil go ginearálta do gach suiteáil. Níl siad ar fáil ach amháin nuair atá an pacáiste compánach Advanced suiteáilte, cumasaithe, agus srianta do riarthóirí iontaofa.

## Cumraíocht Uirlisí {#tool-configuration}

### Uirlisí a Chumasú {#enabling-tools}

Chun uirlisí breise a chumasú in Theme Builder:

1. Téigh chuig **Gratis AI Agent → Settings**
2. Téigh chuig **Theme Builder → Tools**
3. Cuir uirlisí ar siúl/as de réir mar is gá
4. Sábháil socruithe

### Ceadanna Uirlisí {#tool-permissions}

Teastaíonn ceadanna ó roinnt uirlisí:

- **Scríobadh suímh** — teastaíonn rochtain idirlín
- **Anailísíocht** — teastaíonn comhtháthú Google Analytics
- **Giniúint ábhair** — teastaíonn API keys
- **Ardghnéithe** — d’fhéadfadh síntiús premium a bheith ag teastáil
- **Arduirlisí compánacha** — teastaíonn an pacáiste Advanced a dháiltear ar leithligh agus muinín shainráite riarthóra

### API Keys agus Dintiúir {#api-keys-and-credentials}

Cumraigh API keys d’uirlisí a dteastaíonn siad uathu:

1. Téigh chuig **Gratis AI Agent → Settings → API Keys**
2. Cuir isteach dintiúir do gach uirlis
3. Tástáil nasc
4. Sábháil go slán

### An Pacáiste Compánach Advanced a Shuiteáil {#installing-the-advanced-companion-package}

Eisítear an pacáiste compánach Advanced ar leithligh ón ZIP lárnach WordPress.org. Suiteáil é amháin ó chainéal dáilte oifigiúil an tionscadail don eisiúint, ansin cuir srian ar rochtain do riarthóirí iontaofa. Athbhreithnigh geataí faofa daonna agus iompar seatanna git sula gcumasaíonn tú uirlisí córais comhad, bunachair sonraí, WP-CLI, seoltóra REST, tógálaí plugin, bainistíochta úsáideoirí, nó tagarmharcála ar shuíomh táirgthe.

## sd-ai-agent/site-scrape a Úsáid {#using-sd-ai-agentsite-scrape}

### Úsáid Bhunúsach {#basic-usage}

Iarr ar Theme Builder suíomh gréasáin a anailísiú:

```
Déan anailís ar dhearadh shuíomh m’iomaitheora ag competitor.com
agus mol feabhsuithe dearaidh do mo shuíomh.
```

### Anailís Shonrach {#specific-analysis}

Iarr cineálacha sonracha anailíse:

```
Bain amach an pailéad dathanna ó example.com agus úsáid é mar inspioráid.
```

```
Déan anailís ar struchtúr nascleanúna example.com agus cuir eagar
cosúil leis i bhfeidhm ar mo shuíomh.
```

```
Seiceáil freagrúlacht mhóibíleach example.com agus cinntigh go bhfuil mo shuíomh
chomh freagrúil céanna.
```

### Anailís Chomparáide {#comparison-analysis}

Déan comparáid idir suíomhanna iolracha:

```
Déan comparáid idir dearaí site1.com agus site2.com agus cruthaigh dearadh
a chomhcheanglaíonn na heilimintí is fearr den dá cheann.
```

## Teorainneacha agus Breithnithe Uirlisí {#tool-limitations-and-considerations}

### Teorannú Ráta {#rate-limiting}

- Tá teorainn ráta ar scríobadh chun ró-ualach freastalaí a chosc
- D’fhéadfaí iarratais iolracha chuig an suíomh céanna a mhoilliú
- D’fhéadfadh suíomhanna móra níos mó ama a thógáil le hanailísiú

### Cruinneas Ábhair {#content-accuracy}

- B’fhéidir nach ngabhfar ábhar dinimiciúil go hiomlán
- D’fhéadfadh ábhar rindreáilte le JavaScript a bheith neamhiomlán
- B’fhéidir nach léireofar sonraí fíor-ama
- D’fhéadfadh roinnt ábhair a bheith taobh thiar de bhallaí íocaíochta

### Breithnithe Dlíthiúla agus Eiticiúla {#legal-and-ethical-considerations}

- Tabhair meas ar robots.txt agus ar bheartais an tsuímh
- Ná scríob ábhar faoi chóipcheart lena atáirgeadh
- Úsáid an anailís mar inspioráid, ní le cóipeáil
- Deimhnigh go bhfuil cearta agat an t-ábhar eastósctha a úsáid
- Lean téarmaí seirbhíse na suíomhanna a ndearnadh anailís orthu

### Tionchar ar Fheidhmíocht {#performance-impact}

- D’fhéadfadh scríobadh suíomhanna móra am a thógáil
- D’fhéadfadh scríobaí comhuaineacha iolracha a bheith níos moille
- Bíonn tionchar ag nascacht líonra ar luas
- D’fhéadfadh níos mó próiseála a bheith ag teastáil ó thacair mhóra sonraí

## Dea-Chleachtais {#best-practices}

### Anailís Suímh a Úsáid {#using-site-analysis}

1. **Déan anailís ar shuíomhanna iolracha** — bailigh inspioráid ó roinnt foinsí
2. **Dírigh ar struchtúr** — foghlaim patrúin leagain amach agus eagraíochta
3. **Eastósctha dathanna** — úsáid pailéid dathanna mar phointí tosaigh
4. **Déan staidéar ar chlóghrafaíocht** — aithin teaglamaí clónna a thaitníonn leat
5. **Athbhreithnigh nascleanúint** — tuig eagrú roghchláir

### Scríobadh Eiticiúil {#ethical-scraping}

1. **Tabhair meas ar robots.txt** — lean treoirlínte an tsuímh
2. **Ná cóipeáil ábhar** — úsáid an anailís mar inspioráid amháin
3. **Deimhnigh cearta** — cinntigh gur féidir leat an t-ábhar eastósctha a úsáid
4. **Luaigh foinsí** — tabhair creidiúint d’fhoinsí inspioráide
5. **Lean téarmaí** — cloí le téarmaí seirbhíse an tsuímh

### Éifeachtacht na hUirlise a Uasmhéadú {#maximizing-tool-effectiveness}

1. **Bí sonrach** — iarr cineálacha sonracha anailíse
2. **Cuir comhthéacs ar fáil** — mínigh cuspóir do shuímh
3. **Socraigh ionchais** — déan cur síos ar do spriocanna dearaidh
4. **Déan atriall** — mionchoigeartaigh bunaithe ar thorthaí
5. **Comhcheangail uirlisí** — úsáid uirlisí iolracha le haghaidh anailíse cuimsithí

## Fabhtcheartú {#troubleshooting}

### Ní Scríobfaidh an Suíomh {#site-wont-scrape}

- Seiceáil an bhfuil an suíomh inrochtana go poiblí
- Deimhnigh go gceadaíonn robots.txt scríobadh
- Bain triail as suíomh eile
- Seiceáil an nasc idirlín
- Déan teagmháil le tacaíocht má leanann an fhadhb ar aghaidh

### Anailís Neamhiomlán {#incomplete-analysis}

- D’fhéadfadh ábhar dinimiciúil a bheith ag an suíomh
- B’fhéidir nach mbeidh JavaScript rindreáilte go hiomlán
- D’fhéadfadh suíomhanna móra dul thar am
- Bain triail as leathanaigh shonracha a anailísiú ina ionad
- Iarr cineálacha sonracha anailíse

### Feidhmíocht Mhall {#slow-performance}

- Tógann suíomhanna móra níos mó ama le hanailísiú
- Bíonn scríobaí comhuaineacha iolracha níos moille
- Bíonn tionchar ag nascacht líonra ar luas
- Bain triail as le linn uaireanta nach bhfuil buaicéileamh ann
- Déan anailís ar rannáin níos lú ar dtús

## Doiciméadú Gaolmhar {#related-documentation}

- [Agallamh Fionnachtana](./discovery-interview.md) — bailigh faisnéis dearaidh
- [Treo Dearaidh](./design-direction.md) — mionchoigeartaigh do dhearadh
- [Roghchláir Fáilteachais](./hospitality-menus.md) — cruthaigh leathanaigh roghchláir
