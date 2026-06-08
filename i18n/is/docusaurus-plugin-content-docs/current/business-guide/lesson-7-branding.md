---
title: 'Læoni 7: Gerðu það þitt'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Læoni 7: Gjera Það Eitt Fyrir Þá

Notendur þín verða aldrei til að þau séu í "eitthva WordPress plugin". Þau ættu að finna sér sem þeir eru nota FitSite – einn staðli byggður fyrir brúna hlutina. Þessi læoni skoðar merking, white-labeling og það að gera platformann að vera eins og vöru.

## Hvar Við Stodum
FitSite hefur nýtt og virknið kaupferli sem fór brúna hlutina í frá val á plani til live síti. Í þessu læoni gerum heildar upplifunann að vera eins og einn samkvæmt, merkt vöru.

## Þín Platform Dómen
Grundvöllur merkingar þín er dómenið. Til FitSite:

- **Hoveddómen**: `fitsite.com` (markaðsvefsitið og hlutverkssjónn nýtingar)
- **Notendudómen**: `studioname.fitsite.com` (subdomænar)
- **Eignadómen**: Notendur á Growth og Pro planum geta mappa eigin dómen

### Uppsetning Dómens
1. Registra þitt platform dómen
2. Leiðu hann til þess að veita þinn hostar
3. Innstilla wildcard DNS (`*.fitsite.com`) fyrir notendudómenna
4. Tryggðu að wildcard SSL sé á hjá

Sjá [Hvernig innstilla dómenmappi](/user-guide/domain-mapping/how-to-configure-domain-mapping) fyrir nánari leiðbeiningar.

## White-Labeling Stjórnunarupplifun
Þegar brúni hlutinn er logga í dashboard sínu, þurfa hann að sjá merkinguna þína, ekki WordPress eða Ultimate Multisite merkinguna.

### Sérstakleg Loggugætur
Sérstaklega ábyrgðu WordPress-loggugætur til að sýna:

- Logo FitSite þínu
- Bakgrunnsmyndir sem passar fyrir brúna hlutina
- Merkingarfargar þín

Brugu [Admin Page Creator](/addons/admin-page-creator) addon eða sérstaka CSS-stillingar til að:

- Erfara WordPress logopóla með því að skipta í það logopóla þitt FitSite
- Skipta á stjórnunarfarhæðinni (admin color scheme) yfir að passa merkið þitt
- Innleiða sérstaka dashboard widget með hraðskliðum og hjálpafyrirtækjum sem eru sérsniðin fyrir trænni

### Sérsniðnar stjórnunarfarhæðir (Custom Admin Pages)

Stjórðu að skapa sérsniðnar farhæðir í stjórnunarfarhæðinni sem sýna mest viðeigandi aðgerðir fyrir eigendur trænna staðnum:

- "Breytinga á körfuskjalsetningunni þinni" (Edit Your Class Schedule)
- "Uppfræðing á profillum trænna" (Update Trainer Profiles)
- "Sjá sérstakandi síðuna þína" (View Your Site)

Þetta minnkar læringaráðferðina með því að setja viðeigandi aðgerðir frammi fyrir þér í stað þess að gömma þær í almennum WordPress menúinn.

## Merking á samskiptum

Hvert tölvupóstur, faktu og tilkynning verður að styrkja merkið þitt.

### System Emails (Tölvupóstur systemanna)

Navið **Ultimate Multisite > Settings > Emails** og skiptu á allstu tölvupóstum systemanna:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Nota merkið þitt og logopóla
- **Language**: Notkun sérsniðna orða fyrir trænni á meðan

Áhrifsvísa tölvupóstur sem þarf að skipta á:

| Email | Almenn útgáfa (Generic Version) | FitSite útgáfa (FitSite Version) |
|-------|---------------------------------|-----------------------------------|
| Welcome | "Þín nýja síða er klára" | "Þín trænasta staðarveitsvitið er live" |
| Payment receipt | "Gjald er notið" | "FitSite skipting gjaldsins er staðfest" |
| Trial ending | "Þinn prófanir er að enda núna" | "Þinn FitSite prófanir endar í 3 daga – halda síðuna þinni live" |

### Faktu (Invoices)

Skiptu á faktu-mallar með:

Logo og merkevarefargar fyrir FitSite
Fyrirfarandi upplýsingar um viðskiptið
Fitnissérstakar vörunennén (ekki algengar plan-íðunennén)

## Nettsíða fyrir viðskiptavini

Hjörðingurinn þinn (`fitsite.com`) þarf markaðsvefsíðu sem sýnir plattforma. Þessi er sjálfstendur af stjórnunarnetverkins Ultimate Multisite – hún er almennmiðilinn fyrir viðskiptið þitt.

Líkvæmar síður:

- **Hovedsida**: Skýr áhrifsvatn fyrir fitnissérstök
- **Viðmót**: Hvað FitSite gerir, á fitnissérstökum hugtökum
- **Príslaun**: Þínir þrír plan og samanburði eiginleika sem eru sérsniðnar fyrir hverja nýtingu
- **Dæmi**: Sýning stóðum byggðar á plattforma
- **Skráning**: Línur til skráningarsíðunni þinni

:::tip Þín markaðsvefsíða getur verið netverkssíða
Skapa markaðsvefsíðuna þína sem síða innan eigin netverkinn. Þetta leyfir þér að stjórna hana frá sama dashboard og sýnir möguleika plattforma þín.
:::

## Sérsniðd domén fyrir viðskiptavini

Fyrir viðskiptavini sem eru á planum sem innihalda sérsniðd domén, skráðu ferlið clarr:

1. Viðskiptavinur skráir eða breytir domén sitt hjá registrar
2. Viðskiptavinur breytir DNS til að vísa til plattforma þín (veita nákvæma skráir)
3. Ultimate Multisite skiptir með domén og SSL

Skapa hjálpstaðila eða innlit í þekkinguferli sérstaklega fyrir þennan ferli, skrifað fyrir ekki tæknilega eigendur fitnissérstökum.

## Netverk FitSite hittil

(Þessi hluti er ekki þýtt ef hann er bara einn heading sem hefur ekki text í honum)

FitSite Network
├── WordPress Multisite (subdomain moda)
├── Ultimate Multisite (innstilt + brándað)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-spécifikt, testarð)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Búnaður til onboarding (næsta læoni)

## Hva Vi Byggðum Þessi Læoni

- **Platform domain og DNS** sett upp fyrir bránda upplifun
- **Bránda admin dashboard** sem er hvítlað með FitSite brándi í öllu
- **Sérstaklega sniðnir samskipti** -- tölvupóstur, faktuir og tilkynningar alltaf á brándi
- **Markaðsvefsíða** sem sýnir FitSite yfir tilgangi fyrir eigendur trænastudstaðra
- **Sérstaklega sniðin vísindaleg skráning** fyrir viðskiptavili sem vilja eiga sína eignarferli

---

**Næstu:** [Læoni 8: Viðskiptavillabúnaður](lesson-8-onboarding) -- við designum upplifunina sem breytur nýja skráningu í virkasta og gladsamni viðskiptavin.
