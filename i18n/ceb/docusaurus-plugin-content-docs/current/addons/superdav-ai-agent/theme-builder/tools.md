---
title: Mga Himan ug Konpigurasyon
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Mga Himan ug Configuration

Ang Theme Builder naggamit og hugpong sa mga himan aron analisahon, disenyoan, ug tukoron ang imong WordPress site. Sa bersyon 1.16.0, **sd-ai-agent/site-scrape karon usa na ka Tier 1 nga himan**, nga naghimo niini nga magamit pinaagi sa default sa Theme Builder. Ang Superdav AI Agent v1.18.0 nagpaila usab og bulag nga gipang-apod-apod nga Advanced companion package alang sa kasaligang developer workflows; kadtong mga himan dili bahin sa WordPress.org core package ug kinahanglan i-install ug awtorisahon nga bulag.

## Magamit nga mga Himan {#available-tools}

### Tier 1 nga mga Himan (Kanunay nga Magamit) {#tier-1-tools-always-available}

Ang Tier 1 nga mga himan magamit pinaagi sa default sa Theme Builder nga walay bisan unsang dugang nga configuration.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Katuyoan:** Analisahon ang kasamtangang mga website aron makakuha og inspirasyon sa disenyo, istruktura sa sulod, ug functionality.

**Mga Kapabilidad:**

- **Pagsusi sa website** — scrape ug analisahon ang mga website sa kakompetensya o inspirasyon
- **Pagkuha sa disenyo** — ilhon ang mga kolor, fonts, ug mga pattern sa layout
- **Istruktura sa sulod** — sabton ang organisasyon ug hierarchy sa panid
- **Pag-ila sa feature** — ilhon ang mga plugin ug functionality
- **Pagsusi sa performance** — susihon ang katulin sa panid ug optimization
- **Pagsusi sa SEO** — repasohon ang meta tags ug structured data

**Paggamit:**

```
Analisaha ang disenyo sa example.com ug gamita kini isip inspirasyon alang sa akong site.
```

**Unsa ang Iyang Kuhaon:**

- Paleta sa kolor ug paggamit sa kolor
- Typography (fonts ug mga gidak-on)
- Istruktura sa layout ug spacing
- Mga pattern sa nabigasyon
- Organisasyon sa sulod
- Paggamit sa mga hulagway ug media
- Interaktibong mga elemento
- Mobile responsiveness

**Mga Limitasyon:**

- Dili maka-scrape sa password-protected nga mga site
- Nagtahod sa robots.txt ug mga palisiya sa site
- Mahimong dili makakuha sa dynamic nga sulod
- Ang mga site nga bug-at sa JavaScript mahimong adunay limitado nga pagsusi
- Ang dagkong mga site mahimong mas dugay analisahon

### Tier 2 nga mga Himan (Opsyonal) {#tier-2-tools-optional}

Ang Tier 2 nga mga himan magamit kung klarong gi-enable sa Theme Builder settings.

#### Advanced Analytics {#advanced-analytics}

Naghatag og detalyadong performance metrics:

- Mga oras sa page load
- Core Web Vitals
- SEO score
- Accessibility score
- Best practices score

#### Content Optimizer {#content-optimizer}

Nag-analisar ug nagsugyot og mga pagpaayo alang sa:

- Kadaling mabasa
- SEO optimization
- Paggamit sa keyword
- Istruktura sa sulod
- Pagbutang sa call-to-action

### Tier 3 nga mga Himan (Premium) {#tier-3-tools-premium}

Ang Tier 3 nga mga himan nagkinahanglan og dugang nga configuration o premium features.

#### AI Content Generator {#ai-content-generator}

Naghimo og sulod alang sa:

- Mga paghulagway sa produkto
- Mga panid sa serbisyo
- Mga post sa blog
- Mga meta description
- Call-to-action copy

#### Advanced Design Tools {#advanced-design-tools}

Naghatag og advanced nga mga kapabilidad sa disenyo:

- Custom CSS generation
- Paghimo og animation
- Disenyo sa interaktibong elemento
- Advanced color theory
- Typography optimization

### Advanced Companion Tools (Bulag nga Package) {#advanced-companion-tools-separate-package}

Ang Advanced companion package gipang-apod-apod nga bulag gikan sa core nga Superdav AI Agent release. Gituyo kini alang sa kasaligang developer ug site-owner environments diin ang mga administrator klarong nagtugot sa agent nga mogamit og high-impact tooling.

Ang Advanced companion capabilities mahimong maglakip sa:

- **Filesystem tools** — susihon ug usbon ang giaprobahang mga file sa kasaligang environments
- **Database tools** — mangutana o mag-update sa site data kung klarong awtorisado
- **WP-CLI tools** — mopadagan og WordPress maintenance ug inspection commands
- **REST dispatcher tools** — motawag sa narehistrong REST endpoints pinaagi sa kontroladong dispatch workflows
- **Plugin builder tools** — mag-scaffold ug mag-iterate sa plugin code
- **Git snapshot tools** — maghimo og snapshots sa dili pa ang delikadong developer operations
- **User-management tools** — motabang sa pagrepaso o pag-adjust sa user records kung gitugotan
- **Benchmark tools** — mopadagan og performance o capability benchmarks alang sa development review

Ayaw i-dokumento kini isip kasagarang magamit nga Theme Builder tools alang sa matag installation. Magamit lang kini kung ang Advanced companion package na-install, na-enable, ug gilimitahan sa kasaligang mga administrator.

## Configuration sa Himan {#tool-configuration}

### Pag-enable sa mga Himan {#enabling-tools}

Aron i-enable ang dugang nga mga himan sa Theme Builder:

1. Moadto sa **Gratis AI Agent → Settings**
2. Adto sa **Theme Builder → Tools**
3. I-toggle ang mga himan on/off sumala sa gikinahanglan
4. I-save ang settings

### Mga Pahintulot sa Himan {#tool-permissions}

Ang pipila ka mga himan nagkinahanglan og mga pahintulot:

- **Site scraping** — nagkinahanglan og internet access
- **Analytics** — nagkinahanglan og Google Analytics integration
- **Content generation** — nagkinahanglan og API keys
- **Advanced features** — mahimong nagkinahanglan og premium subscription
- **Advanced companion tools** — nagkinahanglan sa bulag nga gipang-apod-apod nga Advanced package ug klarong pagsalig sa administrator

### API Keys ug Credentials {#api-keys-and-credentials}

I-configure ang API keys alang sa mga himan nga nagkinahanglan niini:

1. Adto sa **Gratis AI Agent → Settings → API Keys**
2. Isulod ang credentials alang sa matag himan
3. Sulayi ang connection
4. I-save nga luwas

### Pag-install sa Advanced Companion Package {#installing-the-advanced-companion-package}

Ang Advanced companion package gi-release nga bulag gikan sa WordPress.org core ZIP. I-install lang kini gikan sa opisyal nga project distribution channel alang sa release, dayon limitahi ang access ngadto sa kasaligang mga administrator. Repasohon ang human approval gates ug git snapshot behaviour sa dili pa i-enable ang filesystem, database, WP-CLI, REST dispatcher, plugin builder, user-management, o benchmark tools sa production site.

## Paggamit sa sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Batakang Paggamit {#basic-usage}

Hangyoa ang Theme Builder nga analisahon ang usa ka website:

```
Analisaha ang disenyo sa site sa akong kakompetensya sa competitor.com
ug isugyot ang mga pagpaayo sa disenyo alang sa akong site.
```

### Piho nga Pagsusi {#specific-analysis}

Mangayo og piho nga mga matang sa pagsusi:

```
Kuhaa ang paleta sa kolor gikan sa example.com ug gamita kini isip inspirasyon.
```

```
Analisaha ang istruktura sa nabigasyon sa example.com ug i-apply ang susamang
organisasyon sa akong site.
```

```
Susihon ang mobile responsiveness sa example.com ug siguroa nga ang akong site
parehas ka responsive.
```

### Pagtandi nga Pagsusi {#comparison-analysis}

Itandi ang daghang mga site:

```
Itandi ang mga disenyo sa site1.com ug site2.com ug paghimo og disenyo
nga naghiusa sa labing maayong mga elemento sa duha.
```

## Mga Limitasyon ug Konsiderasyon sa Himan {#tool-limitations-and-considerations}

### Rate Limiting {#rate-limiting}

- Ang pag-scrape gilimitahan ang rate aron malikayan ang sobra nga karga sa server
- Ang daghang hangyo sa parehas nga websayt mahimong pahinayan
- Ang dagkong websayt mahimong mas dugay tukion

### Katukma sa Kontento {#content-accuracy}

- Ang dynamic nga kontento mahimong dili hingpit nga makuha
- Ang kontento nga gi-render sa JavaScript mahimong dili kompleto
- Ang real-time nga datos mahimong dili mapakita
- Ang ubang kontento mahimong anaa sa luyo sa mga paywall

### Legal ug Etikal nga mga Konsiderasyon {#legal-and-ethical-considerations}

- Tahora ang robots.txt ug mga polisiya sa websayt
- Ayaw pag-scrape og copyrighted nga kontento para kopyahon
- Gamita ang pagtuki para sa inspirasyon, dili sa pagkopya
- Siguroa nga naa kay mga katungod sa paggamit sa nakuha nga kontento
- Sunda ang terms of service sa mga gituki nga websayt

### Epekto sa Performance {#performance-impact}

- Ang pag-scrape sa dagkong websayt mahimong mogugol og panahon
- Ang daghang dungan nga mga scrape mahimong mas hinay
- Ang koneksyon sa network makaapekto sa katulin
- Ang dagkong dataset mahimong manginahanglan og dugang nga pagproseso

## Labing Maayong mga Praktis {#best-practices}

### Paggamit sa Pagtuki sa Websayt {#using-site-analysis}

1. **Tukia ang daghang websayt** — pangolekta og inspirasyon gikan sa daghang tinubdan
2. **Pagpokus sa estruktura** — kat-uni ang mga pattern sa layout ug organisasyon
3. **Kuhaa ang mga kolor** — gamita ang mga color palette isip sinugdanan
4. **Tun-i ang typography** — ilha ang mga kombinasyon sa font nga imong ganahan
5. **Ribyuha ang navigation** — sabta ang organisasyon sa menu

### Etikal nga Pag-scrape {#ethical-scraping}

1. **Tahora ang robots.txt** — sunda ang mga giya sa websayt
2. **Ayaw kopyaha ang kontento** — gamita ang pagtuki para sa inspirasyon lamang
3. **Siguroa ang mga katungod** — siguroa nga magamit nimo ang nakuha nga kontento
4. **I-attribute ang mga tinubdan** — hatagi og kredito ang mga tinubdan sa inspirasyon
5. **Sunda ang mga termino** — tumanon ang terms of service sa websayt

### Pagpataas sa Ka-epektibo sa Himan {#maximizing-tool-effectiveness}

1. **Pagka-espesipiko** — pangayo og espesipikong mga klase sa pagtuki
2. **Paghatag og konteksto** — ipasabot ang katuyoan sa imong websayt
3. **Pagbutang og mga gipaabot** — ihulagway ang imong mga tumong sa disenyo
4. **Pag-usab-usab** — pauswaga base sa mga resulta
5. **Pagsagol sa mga himan** — gamita ang daghang himan para sa komprehensibong pagtuki

## Pagsulbad sa Problema {#troubleshooting}

### Dili Ma-scrape ang Websayt {#site-wont-scrape}

- Susiha kung ang websayt ma-access sa publiko
- Siguroa nga ang robots.txt nagtugot sa pag-scrape
- Sulayi ang laing websayt
- Susiha ang koneksyon sa internet
- Kontaka ang suporta kung magpadayon ang isyu

### Dili Kompletong Pagtuki {#incomplete-analysis}

- Ang websayt mahimong adunay dynamic nga kontento
- Ang JavaScript mahimong dili hingpit nga ma-render
- Ang dagkong websayt mahimong mo-timeout
- Sulayi hinuon ang pagtuki sa espesipikong mga panid
- Pangayo og espesipikong mga klase sa pagtuki

### Hinay nga Performance {#slow-performance}

- Ang dagkong websayt mas dugay tukion
- Ang daghang dungan nga mga scrape mas hinay
- Ang koneksyon sa network makaapekto sa katulin
- Sulayi sa mga oras nga dili daghan ang mogamit
- Tukia una ang mas gagmay nga mga seksyon

## May Kalabotang Dokumentasyon {#related-documentation}

- [Interbyu sa Pagdiskobre](./discovery-interview.md) — pangolekta og impormasyon sa disenyo
- [Direksyon sa Disenyo](./design-direction.md) — pauswaga ang imong disenyo
- [Mga Menu sa Pag-abiabi](./hospitality-menus.md) — paghimo og mga panid sa menu
