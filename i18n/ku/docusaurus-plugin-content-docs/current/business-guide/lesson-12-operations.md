---
title: 'Ders 12: Rêvebirina Karsaziyê'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Ders 12: Meşandina Karsaziyê

Platform ne projeyek e ku tu bi dawî dikî -- ew karsaziyek e ku tu dimeşînî. Ev ders karên rojane yên birêvebirina FitSite vedigire: piştgirî, billing, parastin, û razîkirina xerîdaran.

## Em Li Ku Ma Bûn {#where-we-left-off}

FitSite zindî ye û xerîdar xwe tomar dikin. Niha divê tu karê xwe bi awayekî domdar bimeşînî.

## Karên Rojane {#daily-operations}

### Şopandin {#monitoring}

Van tiştan rojane kontrol bike (an jî hişyariyan saz bike):

- **Uptime**: Ma platform dikare were gihîştin? Xizmeteke uptime monitoring bikar bîne.
- **Tomarbûnên nû**: Îro çend xerîdarên nû xwe tomar kirin?
- **Pereyên têkçûyî**: Ma têkçûnên pereyan hene ku pêdivî bi baldarî hene?
- **Daxwazên piştgiriyê**: Ma pirsên xerîdaran hene ku hê nehatine bersivandin?

### Piştgiriya Xerîdaran {#customer-support}

Baldariya te ya li ser nişê li vir avantaj e. Ji ber ku hemû xerîdarên te stûdyoyên fitness in, tu dê heman pirsan gelek caran bibînî:

**Pirsên hevpar ku dê ji te bên:**

- "Ez çawa bernameya dersên xwe nû dikim?"
- "Ez dikarim rengên malpera xwe biguherînim?"
- "Ez çawa rahênerekî nû li malpera xwe zêde dikim?"
- "Domain-a min naxebite"
- "Ez çawa plan-a xwe betal dikim/an bilind dikim?"

Bingeha zanînê ya xwe (ku di Ders 8 de dest pê kir) li ser van pirsên dubare ava bike. Her support ticket ku dikaribû bibe gotareke bingeha zanînê, nîşan e ku divê tu wê gotarê binivîsî.

### Astanên Piştgiriyê {#support-tiers}

Dema tu mezin dibî, piştgiriyê li gorî plan saz bike:

| Plan | Asta Piştgiriyê | Dema Bersivê |
|------|--------------|---------------|
| Starter | Bingeha zanînê + email | 48 demjimêr |
| Growth | Piştgiriya email | 24 demjimêr |
| Pro | Email-a pêşîn + bangeke onboarding | 4 demjimêr |

[Support Tickets addon](/addons/support-tickets) dikare alîkariyê bike ku daxwazên piştgiriyê di nav platform de bên birêvebirin.

## Karên Billing {#billing-operations}

### Pereyên Dubare {#recurring-payments}

Ultimate Multisite billing-a dubare bi awayekî otomatîk bi rêya payment gateway-a te dimeşîne. Karê te ev e ku van tiştan bişopînî:

- **Pereyên têkçûyî**: Zû bişopîne. Piraniya têkçûnan kartên qediyayî ne, ne betalkirinên bi niyet.
- **Dunning**: Mantiqa hewildana dubare ya otomatîk bi rêya payment gateway-a xwe saz bike (Stripe vê baş dike)
- **Daxwazên betalkirinê**: Fêm bike çima xerîdar diçin. Her betalkirin feedback e.

### Birêvebirina Memberships {#managing-memberships}

Biçe **Ultimate Multisite > Memberships** ji bo:

- Hemû subscription-ên çalak bibînî
- Daxwazên upgrade û downgrade birêve bibî
- Dema pêwîst be refunds pêk bînî
- Qediyana trial-an birêve bibî

Ji bo referansa tevahî, [Birêvebirina Memberships](/user-guide/administration/managing-memberships) bibîne.

### Fature {#invoicing}

Piştrast bike ku ji bo her pereyekî fature rast çêdibin. Xerîdar dikarin ji bo raporkirina mesrefên karsaziyê fatureyan bixwazin. [Birêvebirina Pere û Fatureyan](/user-guide/administration/managing-payments-and-invoices) bibîne.

## Parastina Platformê {#platform-maintenance}

### Nûkirinên WordPress û Plugin {#wordpress-and-plugin-updates}

Wek rêveberê torê, tu berpirsiyar î ji bo:

- **Nûkirinên bingeha WordPress**: Berî sepandina li production, li ser malperek staging test bike
- **Nûkirinên plugin**: Heman tişt -- pêşî test bike, paşê li ser tevahiya torê bisepîne
- **Nûkirinên theme**: Piştrast bike ku templates piştî nûkirinên theme hê jî rast xuya dikin
- **Nûkirinên Ultimate Multisite**: Changelog bişopîne û berî nûkirinê test bike

:::warning Qet Di Production De Bê Test Nû Nekin
Nûkirineke xerab bandorê li her malpera xerîdarê li ser tora te dike. Her dem pêşî nûkirinan li ser kopiyeke staging ya tora xwe test bike.
:::

### Ewlehî {#security}

- Hemû software-ê nû bihêle
- Ji bo Account-ên admin şîfreyên bihêz û erêkirina du-faktorî bikar bîne
- Çalakiyên gumanbar bişopîne
- Ji bo bûyerên ewlehiyê planek hebe

### Performans {#performance}

Dema tora te mezin dibe, van tiştan bişopîne:

- **Demên barkirina rûpelê**: Ma malperên xerîdaran bilez in?
- **Bikaranîna çavkaniyên serverê**: CPU, bîr, cihê diskê
- **Performansa database**: Torên mezin bi demê re pêdivî bi başkirina database hene

Heke hê te nekiriye, li ser sepandina caching (page cache, object cache) û CDN-ê bifikire. [Cloudflare integration](/user-guide/host-integrations/cloudflare) gelek ji vê karê dimeşîne.

## Birêvebirina Çerxa Jiyana Xerîdar {#customer-lifecycle-management}

### Kêmkirina Churn {#reducing-churn}

Churn rêjeya xerîdaran e ku her meh betal dikin. Ji bo karsaziyeke subscription, kêmkirina churn qasî bidestxistina xerîdarên nû girîng e.

**Sedemên hevpar ku xerîdarên stûdyoyên fitness churn dikin:**

- Wan nikarî fêm bikin platform çawa tê bikaranîn → onboarding baştir bike
- Malper têra xwe baş nediyar bû → templates baştir bike
- Wan nirx nedît → taybetmendiyan an ragihandinê baştir bike
- Wan alternatîfek erzanîtir dît → nirxa nişê ya xwe xurt bike
- Karsaziya wan girtî bû → neçar e, lê vê cuda bişopîne

### Teşwîqkirina Upgrade-an {#encouraging-upgrades}

Xerîdarên li ser Starter ku serkeftî ne divê werin teşwîqkirin ku upgrade bikin:

- Dema ew digihîjin sînorên plan-ê (malper, hilanîn), daxwazên upgrade nîşan bide
- Email-ên armanckirî bişîne ku taybetmendiyên plan-a Growth yên ji wan re sûdmend ronî dikin
- Nîşan bide ku xerîdarên Growth/Pro çi ava kirine

### Kampanyayên Vegerandinê {#win-back-campaigns}

Dema xerîdarek betal dike:

1. Bipirse çima (lêkolîna derketinê an email)
2. Heke gengaz be, xemê wan çareser bike
3. Ji bo vegerê daxistineke pêşkêş bike (30-60 roj piştî betalkirinê)

## Rûtînên Hefteyî û Mehane {#weekly-and-monthly-routines}

### Hefteyî {#weekly}

- Tomarbûnên nû û betalkirinan binirxîne
- Bersiva hemû support ticket-ên vekirî bide
- Performansa platformê û uptime kontrol bike
- Her pereya têkçûyî binirxîne

### Mehane {#monthly}

- Metrîkên girîng analîz bike (MRR, churn, xerîdarên nû, upgrade)
- Nûkirinên WordPress û plugin bisepîne (piştî testa staging)
- Li gorî şêwazên piştgiriyê bingeha zanînê binirxîne û nû bike
- Newsletter an nûkirinek ji xerîdaran re bişîne (taybetmendiyên nû, şîret, nûçeyên pîşesaziya fitness)

### Sêmehane {#quarterly}

- Nirxan li hember hevrikan û feedback-a xerîdaran binirxîne
- Sêwiranên template binirxîne -- ma pêdivî bi nûkirinê hene?
- Kapasîteya hosting binirxîne -- ma pêdivî ye ku tu mezin bikî?
- Li gorî daneyên çalakbûnê onboarding binirxîne û baştir bike

## Me Di Vê Dersê De Çi Ava Kir {#what-we-built-this-lesson}

- **Rûtînên çavdêriya rojane** ji bo uptime, tomarkirin, dayîn û piştgirî
- **Avahiyek piştgiriyê ya astkirî** ku bi astên plan re tê lihevkirin
- **Xebatên fatûrekirinê** di nav de şopandina dayînên dereng û birêvebirina betalkirinê
- **Rêbazên parastinê** ji bo nûkirin, ewlehî û performans
- **Stratejiyên kêmkirina berdanê** taybet ji bo warê fitness
- **Rûtînên karûbarê heftane, mehane û sêmehane**

---

**Piştre:** [Ders 13: Mezinbûn](lesson-13-growth) -- mezinandina FitSite ji xebateke biçûk ber bi karsaziyeke rastîn.
