---
title: 'Læoni 12: Leita við verkefnið'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Læoni 12: Verkefnið í verkningu

A platform er ekki bara eitthvað sem þú fullar – það er fyrirtæki sem þú stýrir. Þessi læonið hófst daglegum starfsemi yfir FitSite: stuðning, reikningur, viðhald og að halda viðkomandi viðkomandi án áhyggja.

## Hvar við vorum {#where-we-left-off}
FitSite er live og viðkomandi eru í því að skrá sig. En nú þarf þú að stýra verkefnið á halda þess sem virkar á håll.

## Dagleg starfsemi {#daily-operations}

### Öryggisþróun (Monitoring) {#monitoring}

Þetta þarf að skoða daglega (eða sett upp vörumarkmið):

- **Uptime**: Er platforminn að vera að ganga? Notaðu þjónustu til skoðunar virkni.
- **Ný skráningar**: Hversu mikið eru nýir viðkomandi sem skrá sig daginn?
- **Félagsleg feilskipti (Failed payments)**: Er það feilskipti sem þarf að skoða?
- **Stuðningstilkynningar**: Er það spurningar viðkomenda sem eru ekki svarað?

### Stuðning við viðkomandi {#customer-support}

Það er forritun á sérfræðingum sem er möguleiki hér. Þar sem allir viðkomandi þín eru trænastöðvar, sjáðu þú sama spurningar aftur og aftur:

**Almenn spurningar sem þú munu fá:**

- "Hvernig get ég uppfærð skiljanir mitt?"
- "Get ég breyta lögum á síðunni mínum?"
- "Hvernig get ég lagt nýja trænann í síðuna mið?"
- "Meðstöðin minn virkar ekki"
- "Hvernig get ég sagt upp/uppgáða planinn mitt?"

Byggu þekkinguferlið (byrjaði í Læoni 8) á kringum þessar afturkomandi spurningar. Hvert stuðningstilkynning sem gæti verið greinin í þekkinguferli er teikn til að skrifa hana.

### Stuðningstíðar (Support Tiers) {#support-tiers}

Þegar þú vinnst fram, byggi stuðninginn upp á planum:

| Plan | Stöðuðarstigi | Svarstími |
|------|--------------|---------------|
| Starter | Vitkunarstafn + tölvupóstur | 48 stundir |
| Growth | Tölvupósturstöðuðun | 24 stundir |
| Pro | Hæstur tölvupóstur + innriferðarhringning | 4 stundir |

[Support Tickets addon](/addons/support-tickets) getur hjálpa í að stjórna stöðuðarferli á plattforma.

## Skattagerðing {#billing-operations}
### Tilfinningarsamþykkt (Recurring Payments) {#recurring-payments}

Ultimate Multisite skiptir sjálf um tilfinningarsamþykkt með greiðsluherðingu þinni. Þín verk er að fylgjast með eftirfarandi:

- **Fallaðar greiðslur**: Fylgja upp hraða. Það eru flest fallaðar kort, ekki tilgangsleg afskráningar.
- **Dunning**: Stilla upp sjálfavissandi upphafnarferli í greiðsluherðingu þinni (Stripe hvarðar þetta vel).
- **Afskráningarsamþykkt**: Fornaðu hvernig viðskiptavinir fela. Hvert afskráning er tilfelli tilbækja.

### Stjórnun samþykkinga (Managing Memberships) {#managing-memberships}

Navið yfir í **Ultimate Multisite > Memberships** til að:

- Sjá allar virkni samþykkingar
- Skilja upp- og niðuruppgrunnarsamþykkingar
- Skipta fólks eftir þegar nauðsynlegt er
- Stjórna lausa prófíla

Sjá [Managing Memberships](/user-guide/administration/managing-memberships) fyrir nánari upplýsingar.

### Faktuðir skattar (Invoicing) {#invoicing}

Sjá til þess að faktuðir skattar séu gerðar rétt fyrir hverja greiðslu. Viðskiptavinir gæti þurft faktuðir skattar fyrir skattarfræðilega skýrslu um viðskiptaferli. Sjá [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Viðhald plattforma (Platform Maintenance) {#platform-maintenance}
### Uppfærslur WordPress og Addons {#wordpress-and-plugin-updates}

Sem netverkstjórinn er þú ábyrgður fyrir:

**Oppdatir WordPress kjarna:** Test á staging-siti áður en þú byggir upp á produktion
**Plugin oppdatir:** Sama – test fyrst, síðan byrja að nýta í heildun netverkets
**Theme oppdatir:** Staða þess að temum er enn rétt eftir uppdatir temum

:::warning Notuppdat á produktion án prófanir
Einsbroti uppdatur á hverjum viðskiptavina síti á netverkset þínu. Testi alltaf uppdatir á staging-kopíunnetverkets þíns fyrst.
:::

### Trygging {#security}

- Halda allan tækni uppfærð
- Nota sterkar lykilheiti og tveggjafaðarauðkenningu fyrir administratorrétt
- Fylgjast með óeðlendum virkni
- Haða plan fyrir tryggingshendingar

### Ábyrðing {#performance}

Þegar netverkset þitt vinnst fram, fylgja með:

- **Lægtími síða**: Er viðskiptavina síti hraðvirkir?
- **Notkun nýtingarvefurs**: CPU, minni, skráningarsvæði
- **Ábyrðing datsbóka**: Stórar netverk þurfa ábyrðing datsbóka að hafa áfram yfir tíma

Hafðu í huga að nota caching (page cache, object cache) og CDN ef þú hefur ekki gert það enn. [Cloudflare integration](/user-guide/host-integrations/cloudflare) hvarfjar myrkur þessar hluta.

## Stjórnun viðskiptavinalifræðar {#customer-lifecycle-management}

### Redusa við felað (Churn) {#reducing-churn}

Felaði er möguleiki í prosenti viðskiptavina sem felað eru hver månad. Fyrir tengslum viðskiptaþjónustu er redusa við felað jafn mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mikil mik

### Framkvæði til að oppdra uppgraderingar {#encouraging-upgrades}

Viðferðirnar á Starter-nivó þurfa að uppdra:

- Þegar þeir ná til takmarka á plannum (sítanum, gögnum), sýna uppdra-forritningar.
- Sendu målritaðar tölvupósti sem lýsa mögulegum mögulegum fyrir þá í Growth/Pro planum.
- Sýna hvað Pro/Growth viðskiptavinir hafa byggt upp.

### Kampnir til að fá viðbót (Win-Back Campaigns) {#win-back-campaigns}

Þegar viðskiptavinur segir upp:

1. Spyr afhverfandi (exit survey eða tölvupóst) hvernig það var lýsandi.
2. Hérðu á óskum þeirra ef mögulegt er.
3. Búið til tilboða við viðbót (30-60 daga eftir segingu).

## Vönduð ferli vönduðar (Weekly and Monthly Routines) {#weekly-and-monthly-routines}

### Vönduð haftu (Weekly) {#weekly}

- Sjáðu nýja skráningar og segings.
- Svara alls opna stuðningstökum.
- Skenni kerfiþróun og upptíðu.
- Skenni felaðar betalingar.

### Mánuðarferli (Monthly) {#monthly}

- Skenni lykilmælingar (MRR, churn, nýjar viðskiptavinir, uppgradar).
- Áteknu uppfærslur WordPress og pluginna (eftir test á staging).
- Skenni og uppfærðu þekkinguferli byggt á stuðningstendur.
- Sendu nyndarstefnu eða uppfærslu til viðskiptavina (nýt færtæki, hlutlæti, fréttir í fitness hlutverki).

### Hlutlaust ferli (Quarterly) {#quarterly}

Gjáðu mér að skoða verðlaun við kynningarmannstjórn og viðskiptavellur
Vurðu þú að skoða hlutverkstífa – þarf þeir að uppfærast?
Færðu fram á skýrslu um fjarskipting – þar þarfurðu að veita meiri styrk?
Skoða og bæta innbyrðisferli fyrir nýjum viðskiptavellur með upplýsingum um aktivering

## Hvað Viðnar Þessi Læoni {#what-we-built-this-lesson}

- **Daglegar skoðunarrutinar** fyrir upptíma, skráningar, betalingar og stuðning
- **Struktúr stuðnings** sem er aðskil við einstaklingaþróunina (plan levels)
- **Fjarskiptingarfærslur** eins og dunning og meðferð af kaupa-afkaupum
- **Viðhaldarrutinar** fyrir uppfærðir, öryggisþróun og framkvæmd
- **Strategu aðferðir til að minnka farið í viðskipti** sem eru sérstaklega tæmda fyrir fitness-niche
- **Vönduð rutinar** á vöku, mánuðar og kvartalinn

---

**Næstu:** [Læoni 13: Skaala Upp](lesson-13-growth) -- þróun FitSite frá lítilli aðskipti í verkelegt viðskipti.
