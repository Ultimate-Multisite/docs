---
title: 'Ders 13: Berfirehkirin'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Ders 13: Mezin Kirin {#lesson-13-scaling-up}

Tu platformek dixebite bi xerîdarên ku pere didin hene. Ev ders rave dike ka çawa ji xebateke biçûk ber bi karsaziyeke domdar ve mezin bibî -- mezin kirina binesaziyê, otomatîkkirina xebatan, û zêdekirina dahata ji her xerîdarî.

## Li Ku Ma Bûn {#where-we-left-off}

FitSite zindî ye, xerîdar xwe tomar dikin, û tu xebatên rojane dimeşînî. Niha em li ser mezinbûnê disekinin.

## Hejmarên Xwe Bizane {#know-your-numbers}

Berî mezin kirinê, bizane li ku derê yî:

### Pîvanên Girîng {#key-metrics}

- **MRR (Dahata Mehane ya Dubare)**: Hemû dahata mehane ya abonetiyan
- **Hejmara xerîdaran**: Hemû aboneyên çalak
- **ARPU (Dahata Navîn ji Her Bikarhênerî)**: MRR parvekirî bi hejmara xerîdaran
- **Rêjeya devjêberdanê**: Rêjeya xerîdarên ku her meh betal dikin
- **LTV (Nirxa Temenê Xerîdarî)**: Dahata navîn ji her xerîdarî di tevahiya abonetiyê de
- **CAC (Mesrefa Bidestxistina Xerîdarî)**: Mesrefa navîn ji bo bidestxistina yek xerîdarî

### Mînak: FitSite bi 50 Xerîdaran {#example-fitsite-at-50-customers}

| Pîvan | Nirx |
|--------|-------|
| Xerîdar | 50 (30 Starter, 15 Growth, 5 Pro) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 zêdekirinên fermanê) |
| ARPU | $89/meh |
| Devjêberdana mehane | 4% (2 betalkirin/meh) |
| LTV | $89 x 25 meh = $2,225 |

Ev hejmar nîşan didin ku divê tu li ser çi bisekinî. Devjêberdan zêde ye? Parastina xerîdaran çêtir bike. ARPU kêm e? Bilindkirinên planê teşwîq bike. CAC zêde ye? Kanalên bidestxistinê baştir bike.

## Mezin Kirina Binesaziyê {#scaling-infrastructure}

### Kengî Mezin Bike {#when-to-scale}

Hostingê mezin bike dema ku:

- Demên barkirina rûpelan bi awayekî eşkere zêde dibin
- CPU an bîra serverê bi rêkûpêk ji 70% bikaranînê derbas dibe
- Tu nêzî 100+ malperên çalak dibî
- Gilîyên xerîdaran derbarê lezê de zêde dibin

### Çawa Mezin Bike {#how-to-scale}

- **Mezin kirina vertical**: Derbasî serverekî mezintir bibe (CPU û RAM zêdetir)
- **Qatên cache**: Redis/Memcached ji bo cache ya objectan zêde bike, û page caching ji bo naveroka static
- **CDN**: Heke tu hê Cloudflare an tiştekî wek wê bikar nayînî, ji bo assetên static CDNek zêde bike
- **Başkirina database**: Gava tor mezin dibe, queryên database hêdî dibin. Tableyan baştir bike, indexan zêde bike, serverekî database yê cuda bifikire.
- **Karên cuda bike**: Hilanîna medyayê bibêre object storage (S3-compatible), emailê radestî xizmeteke emaila transactional bike

### Koçberiya Hostingê {#hosting-migration}

Heke hosta te ya niha êdî nikare zêdetir mezin bibe, koçberiyekê plan bike:

1. Jîngeha nû saz bike
2. Bi kopiyek ji tora xwe baş test bike
3. Koçberiyê di demên trafîka kêm de plan bike
4. Berê TTL ya kêm bi DNSê re nû bike
5. Piştî koçberiyê piştrast bike ku her tişt dixebite

## Otomatîkkirina Xebatan {#automating-operations}

Dema tu mezin dibî, prosesên bi destan dibin asteng. Tiştên ku dikarî otomatîk bike:

### Webhooks û Zapier {#webhooks-and-zapier}

[Webhooks](/user-guide/integrations/webhooks) an [Zapier](/user-guide/integrations/zapier) bikar bîne da ku van otomatîk bikî:

- **Agahdarkirinên tomarkirina nû** → kanala Slack an CRM
- **Hişyariyên betalkirinê** → rêzeya emailên vegerandina xerîdarî dest pê bike
- **Têkçûnên dayînê** → di amûra şopandina te de hişyar bike
- **Bilindkirinên planê** → emaila pîrozbahiyê bi rêbernameya taybetmendiyên nû

### Otomatîkkirina Emailê {#email-automation}

Ji emailên destan derbasî rêzeyên otomatîk bibe:

- Rêzeya destpêkirinê (di Ders 8 de jixwe hatibû çêkirin)
- Rêzeya dîsa-çalak kirinê ji bo xerîdarên neçalak
- Teşwîqên bilindkirinê dema xerîdar nêzî sînorên planê dibin
- Bîranînên nûkirinê ji bo aboneyên salane

### Otomatîkkirina Piştgiriyê {#support-automation}

- **Bersivên amade** ji bo pirsên hevpar
- **Bersivên xweber** ku wergirtina ticketên piştgiriyê pejirandin
- **Pêşniyarên bingeha zanînê** dema xerîdar ticketên li gorî gotarên heyî dişînin

## Zêdekirina Dahatê {#increasing-revenue}

Mezinbûn ne tenê derbarê xerîdarên zêdetir de ye. Ew her weha derbarê dahata zêdetir ji her xerîdarî de ye.

### Firotina Zêde ji Xerîdarên Heyî re {#upselling-existing-customers}

- **Bilindkirinên planê**: Kampanyayên armancdar ku taybetmendiyên Growth/Pro ji xerîdarên Starter re nîşan didin
- **Zêdekirinên fermanê**: Hilberên add-on bi emailê ji xerîdarên heyî re pêşve bibe
- **Guhertina salane**: Ji xerîdarên mehane re daxistinê pêşkêş bike da ku derbasî fatûreya salane bibin

### Çavkaniyên Nû yên Dahatê {#new-revenue-streams}

- **Sazkirina ji te re amade**: Pereyeke bilind bistîne ji bo sazkirin û kesanekirina malpera xerîdarî ji bo wan
- **Xizmetên sêwirana taybet**: Li ser şablonê xebata sêwirana taybet pêşkêş bike
- **Danişînên perwerdeyê**: Rêberiyên yek-bi-yek yên bi pere ji bo xerîdarên ku alîkariya bi destan dixwazin
- **Pluginên premium**: Pluginên premium yên taybet bi nicheê wek add-onên bi pere pêşkêş bike (mînak, widgetekî rezervasyona polên fitnessê)

### Bilindkirina Bihayan {#raising-prices}

Dema platforma te gihîştîrtir dibe û nirx zêde dike:

- Xerîdarên heyî li bihaya wan a niha biparêze
- Ji bo tomarkirinên nû bihayan bilind bike
- Zêdebûnê bi taybetmendî û başkirinên nû re rewa bike

## Avakirina Tîmekê {#building-a-team}

Di demekê de, tu nikarî her tiştî bi tenê bikî. Karmendên pêşîn ên hevpar:

1. **Kesê piştgiriyê**: Pirsên rojane yên xerîdaran çareser dike (destpêkê part-time)
2. **Afirînerê naverokê**: Gotarên bingeha zanînê, nivîsên blogê, û naveroka marketingê dinivîse
3. **Sêwiraner**: Şablonan baştir dike û yên nû diafirîne

Pêwîst nake tu karmend hebin. Contractor û freelancer ji bo karsaziya platformê baş dixebitin.

## Astengekên Mezinbûnê {#growth-milestones}

| Astengek | MRR ya Nêzîk | Fokus |
|-----------|-----------------|-------|
| 0-25 xerîdar | $0-$2,500 | Lihevhatina hilber û bazarê, têkiliyên rasterast |
| 25-100 xerîdar | $2,500-$10,000 | Pergalîkirina xebatan, marketinga naverokê |
| 100-250 xerîdar | $10,000-$25,000 | Piştgiriyê bistîne, conversion baştir bike, hostingê mezin bike |
| 250-500 xerîdar | $25,000-$50,000 | Avakirina tîmê, çavkaniyên nû yên dahatê, taybetmendiyên premium |
| 500+ xerîdar | $50,000+ | Gihîştina platformê, nicheên nêzîk, derketina mimkun |

## Di Vê Dersê de Me Çi Avakir {#what-we-built-this-lesson}

- **Çarçoveyeke pîvanan** ji bo têgihîştina tenduristiya karsaziyê
- **Plana mezin kirina binesaziyê** ji bo mezinbûn ji dehan malperan ber bi sedekan malperan
- **Stratejiyên otomatîkkirinê** ji bo piştgirî, email, û xebatan
- **Taktîkên mezinbûna dahatê** li derveyî tenê bidestxistina xerîdarên nû
- **Rêberiya avakirina tîmê** ji bo dema ku tu ji xebata tenê mezintir dibî
- **Astengekên mezinbûnê** bi qadên fokusê ji bo her qonaxê

---

**Piştre:** [Ders 14: Piştî Vê Çi Tê](lesson-14-whats-next) -- berfirehkirin li derveyî nichea te ya yekem.
