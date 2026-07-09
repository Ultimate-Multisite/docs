---
title: Mga Tool at Konfigurasyon
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Mga Tool at Configuration {#tools-and-configuration}

Gumagamit ang Theme Builder ng isang hanay ng mga tool para suriin, idisenyo, at buuin ang iyong WordPress site. Sa bersyon 1.16.0, **sd-ai-agent/site-scrape ay isa na ngayong Tier 1 tool**, kaya available ito bilang default sa Theme Builder. Ipinapakilala rin ng Superdav AI Agent v1.18.0 ang hiwalay na ipinamamahaging Advanced companion package para sa mga pinagkakatiwalaang workflow ng developer; ang mga tool na iyon ay hindi bahagi ng WordPress.org core package at dapat i-install at pahintulutan nang hiwalay.

## Mga Available na Tool {#available-tools}

### Tier 1 Tools (Laging Available) {#tier-1-tools-always-available}

Available bilang default ang Tier 1 tools sa Theme Builder nang walang anumang karagdagang configuration.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Layunin:** Suriin ang mga umiiral na website para kumuha ng inspirasyon sa disenyo, estruktura ng nilalaman, at functionality.

**Mga Kakayahan:**

- **Pagsusuri ng website** — i-scrape at suriin ang mga website ng kakumpitensya o inspirasyon
- **Pagkuha ng disenyo** — tukuyin ang mga kulay, font, at pattern ng layout
- **Estruktura ng nilalaman** — unawain ang organisasyon at hierarchy ng pahina
- **Pagtukoy ng feature** — tukuyin ang mga plugin at functionality
- **Pagsusuri ng performance** — suriin ang bilis ng pahina at optimization
- **Pagsusuri ng SEO** — repasuhin ang mga meta tag at structured data

**Paggamit:**

```
Suriin ang disenyo ng example.com at gamitin ito bilang inspirasyon para sa aking site.
```

**Ano ang Kinukuha Nito:**

- Color palette at paggamit ng kulay
- Typography (mga font at laki)
- Estruktura ng layout at spacing
- Mga pattern ng nabigasyon
- Organisasyon ng nilalaman
- Paggamit ng mga larawan at media
- Mga interactive na elemento
- Mobile responsiveness

**Mga Limitasyon:**

- Hindi makakapag-scrape ng mga site na protektado ng password
- Iginagalang ang robots.txt at mga patakaran ng site
- Maaaring hindi makuha ang dynamic na nilalaman
- Maaaring limitado ang pagsusuri sa mga site na mabigat sa JavaScript
- Maaaring mas matagal suriin ang malalaking site

### Tier 2 Tools (Opsyonal) {#tier-2-tools-optional}

Available ang Tier 2 tools kapag tahasang naka-enable sa mga setting ng Theme Builder.

#### Advanced Analytics {#advanced-analytics}

Nagbibigay ng detalyadong mga sukatan ng performance:

- Mga oras ng pag-load ng pahina
- Core Web Vitals
- SEO score
- Accessibility score
- Best practices score

#### Content Optimizer {#content-optimizer}

Sinusuri at nagmumungkahi ng mga pagpapabuti para sa:

- Kadaling basahin
- SEO optimization
- Paggamit ng keyword
- Estruktura ng nilalaman
- Paglalagay ng call-to-action

### Tier 3 Tools (Premium) {#tier-3-tools-premium}

Nangangailangan ang Tier 3 tools ng karagdagang configuration o mga premium na feature.

#### AI Content Generator {#ai-content-generator}

Gumagawa ng nilalaman para sa:

- Mga paglalarawan ng produkto
- Mga pahina ng serbisyo
- Mga blog post
- Mga meta description
- Call-to-action copy

#### Advanced Design Tools {#advanced-design-tools}

Nagbibigay ng mga advanced na kakayahan sa disenyo:

- Pagbuo ng custom CSS
- Paglikha ng animation
- Disenyo ng interactive na elemento
- Advanced na teorya ng kulay
- Typography optimization

### Advanced Companion Tools (Hiwalay na Package) {#advanced-companion-tools-separate-package}

Ang Advanced companion package ay ipinamamahagi nang hiwalay mula sa core na release ng Superdav AI Agent. Nilalayon ito para sa mga pinagkakatiwalaang kapaligiran ng developer at may-ari ng site kung saan tahasang pinapayagan ng mga administrator ang agent na gumamit ng tooling na may malaking epekto.

Maaaring kasama sa mga kakayahan ng Advanced companion ang:

- **Mga filesystem tool** — inspeksyunin at baguhin ang mga aprubadong file sa mga pinagkakatiwalaang kapaligiran
- **Mga database tool** — mag-query o mag-update ng data ng site kapag tahasang pinahintulutan
- **Mga WP-CLI tool** — magpatakbo ng mga command sa maintenance at inspeksyon ng WordPress
- **Mga REST dispatcher tool** — tumawag ng mga nakarehistrong REST endpoint sa pamamagitan ng mga kontroladong dispatch workflow
- **Mga plugin builder tool** — gumawa ng scaffold at mag-iterate sa plugin code
- **Mga Git snapshot tool** — gumawa ng mga snapshot bago ang mapanganib na mga operasyon ng developer
- **Mga user-management tool** — tumulong magrepaso o mag-adjust ng mga tala ng user kung saan pinahihintulutan
- **Mga benchmark tool** — magpatakbo ng mga benchmark ng performance o kakayahan para sa pagsusuri sa development

Huwag idokumento ang mga ito bilang pangkalahatang available na Theme Builder tools para sa bawat installation. Available lamang ang mga ito kapag naka-install at naka-enable ang Advanced companion package, at limitado sa mga pinagkakatiwalaang administrator.

## Configuration ng Tool {#tool-configuration}

### Pag-enable ng Mga Tool {#enabling-tools}

Para i-enable ang karagdagang mga tool sa Theme Builder:

1. Pumunta sa **Gratis AI Agent → Settings**
2. Pumunta sa **Theme Builder → Tools**
3. I-toggle ang mga tool on/off ayon sa kailangan
4. I-save ang mga setting

### Mga Pahintulot ng Tool {#tool-permissions}

Nangangailangan ng mga pahintulot ang ilang tool:

- **Pag-scrape ng site** — nangangailangan ng internet access
- **Analytics** — nangangailangan ng Google Analytics integration
- **Pagbuo ng nilalaman** — nangangailangan ng mga API key
- **Mga advanced na feature** — maaaring mangailangan ng premium subscription
- **Advanced companion tools** — nangangailangan ng hiwalay na ipinamamahaging Advanced package at tahasang tiwala ng administrator

### Mga API Key at Credential {#api-keys-and-credentials}

I-configure ang mga API key para sa mga tool na nangangailangan ng mga ito:

1. Pumunta sa **Gratis AI Agent → Settings → API Keys**
2. Ilagay ang mga credential para sa bawat tool
3. Subukan ang koneksyon
4. I-save nang secure

### Pag-install ng Advanced Companion Package {#installing-the-advanced-companion-package}

Ang Advanced companion package ay inilalabas nang hiwalay mula sa WordPress.org core ZIP. I-install lamang ito mula sa opisyal na channel ng pamamahagi ng proyekto para sa release, pagkatapos ay limitahan ang access sa mga pinagkakatiwalaang administrator. Repasuhin ang mga gate ng pag-apruba ng tao at asal ng git snapshot bago i-enable ang filesystem, database, WP-CLI, REST dispatcher, plugin builder, user-management, o benchmark tools sa isang production site.

## Paggamit ng sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Pangunahing Paggamit {#basic-usage}

Hilingin sa Theme Builder na suriin ang isang website:

```
Suriin ang disenyo ng site ng aking kakumpitensya sa competitor.com
at magmungkahi ng mga pagpapabuti sa disenyo para sa aking site.
```

### Partikular na Pagsusuri {#specific-analysis}

Humiling ng partikular na mga uri ng pagsusuri:

```
Kunin ang color palette mula sa example.com at gamitin ito bilang inspirasyon.
```

```
Suriin ang estruktura ng nabigasyon ng example.com at ilapat ang katulad na
organisasyon sa aking site.
```

```
Suriin ang mobile responsiveness ng example.com at tiyaking ang aking site
ay kasing-responsive.
```

### Paghahambing na Pagsusuri {#comparison-analysis}

Ihambing ang maraming site:

```
Ihambing ang mga disenyo ng site1.com at site2.com at gumawa ng disenyo
na pinagsasama ang pinakamahuhusay na elemento ng dalawa.
```

## Mga Limitasyon at Pagsasaalang-alang ng Tool {#tool-limitations-and-considerations}

### Rate Limiting {#rate-limiting}

- Nililimitahan ang rate ng scraping upang maiwasan ang sobrang load sa server
- Maaaring i-throttle ang maraming request sa parehong site
- Maaaring mas matagal suriin ang malalaking site

### Katumpakan ng Nilalaman {#content-accuracy}

- Maaaring hindi ganap na makuha ang dynamic content
- Maaaring hindi kumpleto ang JavaScript-rendered content
- Maaaring hindi maipakita ang real-time na datos
- Maaaring nasa likod ng mga paywall ang ilang nilalaman

### Legal at Etikal na Pagsasaalang-alang {#legal-and-ethical-considerations}

- Igalang ang robots.txt at mga patakaran ng site
- Huwag mag-scrape ng copyrighted content para sa reproduksyon
- Gamitin ang pagsusuri para sa inspirasyon, hindi pagkopya
- Tiyaking may karapatan kang gamitin ang na-extract na nilalaman
- Sundin ang terms of service ng mga sinuring site

### Epekto sa Performance {#performance-impact}

- Maaaring tumagal ang scraping ng malalaking site
- Maaaring mas mabagal ang maraming sabay-sabay na scrape
- Nakaaapekto ang koneksyon sa network sa bilis
- Maaaring mangailangan ng mas maraming pagproseso ang malalaking dataset

## Pinakamahuhusay na Gawain {#best-practices}

### Paggamit ng Pagsusuri ng Site {#using-site-analysis}

1. **Suriin ang maraming site** — mangalap ng inspirasyon mula sa ilang pinagmulan
2. **Magpokus sa estruktura** — alamin ang mga pattern ng layout at organisasyon
3. **Kunin ang mga kulay** — gamitin ang mga color palette bilang panimulang punto
4. **Pag-aralan ang typography** — tukuyin ang mga kombinasyon ng font na gusto mo
5. **Suriin ang navigation** — unawain ang organisasyon ng menu

### Etikal na Scraping {#ethical-scraping}

1. **Igalang ang robots.txt** — sundin ang mga alituntunin ng site
2. **Huwag kopyahin ang nilalaman** — gamitin lamang ang pagsusuri bilang inspirasyon
3. **Tiyakin ang mga karapatan** — tiyaking magagamit mo ang na-extract na nilalaman
4. **Banggitin ang mga pinagmulan** — bigyan ng kredito ang mga pinagmulan ng inspirasyon
5. **Sundin ang mga tuntunin** — sumunod sa terms of service ng site

### Pagpapalaki ng Bisa ng Tool {#maximizing-tool-effectiveness}

1. **Maging espesipiko** — humiling ng espesipikong mga uri ng pagsusuri
2. **Magbigay ng konteksto** — ipaliwanag ang layunin ng iyong site
3. **Itakda ang mga inaasahan** — ilarawan ang iyong mga layunin sa disenyo
4. **Ulit-ulitin** — pinuhin batay sa mga resulta
5. **Pagsamahin ang mga tool** — gumamit ng maraming tool para sa komprehensibong pagsusuri

## Pag-troubleshoot {#troubleshooting}

### Hindi Ma-scrape ang Site {#site-wont-scrape}

- Suriin kung ang site ay naa-access ng publiko
- Tiyaking pinapayagan ng robots.txt ang scraping
- Subukan ang ibang site
- Suriin ang koneksyon sa internet
- Makipag-ugnayan sa support kung magpapatuloy ang isyu

### Hindi Kumpletong Pagsusuri {#incomplete-analysis}

- Maaaring may dynamic content ang site
- Maaaring hindi ganap na ma-render ang JavaScript
- Maaaring mag-timeout ang malalaking site
- Subukang suriin na lang ang espesipikong mga page
- Humiling ng espesipikong mga uri ng pagsusuri

### Mabagal na Performance {#slow-performance}

- Mas matagal suriin ang malalaking site
- Mas mabagal ang maraming sabay-sabay na scrape
- Nakaaapekto ang koneksyon sa network sa bilis
- Subukan sa mga oras na hindi peak
- Suriin muna ang mas maliliit na seksyon

## Kaugnay na Dokumentasyon {#related-documentation}

- [Panayam sa Pagtuklas](./discovery-interview.md) — mangalap ng impormasyon sa disenyo
- [Direksyon ng Disenyo](./design-direction.md) — pinuhin ang iyong disenyo
- [Mga Menu ng Hospitality](./hospitality-menus.md) — gumawa ng mga pahina ng menu
