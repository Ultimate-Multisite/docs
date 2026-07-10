---
title: 'Læoni 3: Uppsetning netanna þín'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Læoni 3: Uppsetning Netkunna {#lesson-3-setting-up-your-network}

Tíminn er komið að byggja. Í þessum læoni munurðu installa Ultimate Multisite og sett upp grunnstökka netkunna FitSite. Hvert hugmynd sem kemur fram hér er byggt á fagsviði fitness.

## Hvar Við Stod {#where-we-left-off}
Við vælim dýlið fitness studios sem fagsviði okkar og staðfyrðum möguleika það. Í dag breytum við þennan hugmynd í nánast virkni.

## Val á Staðsetningu (Hosting) {#choosing-your-hosting}

Val á staðsetningu er mikilvægari fyrir fagsviði netkunna en fyrir eina eins og einn vísitalinn. Þú ert ekki að staðsetja eina síðu – þú staðsetjar netkunna sem mun vexa í 10, 100 eða fleiri síðum.

### Hvað Skal Við Leita eftir {#what-to-look-for}
- **WordPress Multisite stuðningur**: Ekki allsstaðsetningar hability multisite vel
- **Wildcard SSL**: Nauðsynlegt fyrir netkunna sem nota subdomainar
- **Skálandi vinnuforgjufa (Scalable resources)**: Þú þarft gott vinnuforgjuf til að vexa án þess að þurfa migra
- **Ultimate Multisite samstarf**: Sjálfavinnandi mappa dómvögu og SSL sparar mikilvæg framkvæmdarferli

### Aðskilt Stjórnun (Recommended Approach) {#recommended-approach}
Valdu staðsetningu frá lista [Compatible Providers](/user-guide/host-integrations/closte). Þessar eru teynst testar með Ultimate Multisite og veita samstarf sem þú þarft fyrir mappa dómvögu og SSL sjálfvirkni.

Fyrir FitSite munum við nota subdomainar uppsetningu. Þetta þýðir að viðskiptavarmilandi síðurnar munu fyrst sýnast sem `studioname.fitsite.com` áður en þeir valfræðlega mappa eigin dómvögu.

## Uppsetning WordPress Multisite {#installing-wordpress-multisite}
Ef þú hefur ekki enn uppsetning WordPress Multisite:

1. Installera WordPress á vefþjálfargildið þitt
2. Fylgja [Hvernig nota WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) leiðbeininguna
3. Veldu **subdomain** uppsetningu þegar það spyrst

:::tip Hvað er Subdomains?
Subdomains gefa hvert viðskiptavarmannssíti sínu eiga sín einstaka heiti (`studio.fitsite.com`) í stað þess að vera einn með sti (`fitsite.com/studio`). Þetta er meira faglegt fyrir viðskiptavarmenn þínu og undanberir ótvæknir á permalinks. Sjá [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) fyrir nánari samanburð.
:::

## Innstillingar Ultimate Multisite {#installing-ultimate-multisite}

Fylgja [Hvernig nota Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) leiðbeininguna til:

1. Upplýsinga og aktíva plugin netið heildar
2. Kjarnast uppsetningu [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Á meðan þú er í kjarnast uppsetningunni, haldaðu FitSite nítandi í huga:

- **Valutvísi**: Setið á valutvísi sem viðskiptavarmenn þín fitness studio nota
- **Fyrirtækjennenni**: "FitSite" (eða valinn merki þinn)
- **Fyrirtækjilógan**: Upplýsinga og sendileiðar merksins þíns – þetta sýnist á faktu og tölvupósti

## Innstillingar fyrir Fitness Níshinn {#configuring-for-the-fitness-niche}

Þegar Ultimate Multisite er sett upp, gerðu eftirfarandi val um nítandi:

### Almenn innstillingar {#general-settings}

Gera ferð í **Ultimate Multisite > Settings** og innstillingar:

- **Nafn á viðskiptaheimili**: FitSite
- **Heimildarhæð:** Administrator – eigendur fitnessstúdíða þurfa fullan kontroll yfir innihald sínu.
- **Skráning:** Skráning nota fyrir notendur er aktivert svo stúdíðar eigendur geti skráð sig sjálfur.

### Tölvupóstforþáttir (Email Configuration) {#email-configuration}

Tölvupóstur sem þín kerfi sender á, þurfa að tala hvern sem er sérhæfð í nýtingu. Hraudi yfir til **Ultimate Multisite > Settings > Emails** og séðu að þið geti breyta:

- Skildu algengt orða eins og "þú ert nýtt sviði" með hugmyndum sem eru sérhæfðar í fitness.
- Dæmi fyrir viðskiptahöfundun (subject): "Sjónvarpið þitt fitnessstúdíðar er klára"
- Dæmi fyrir texta í tölvupóstinum: Viðskipti um stúdíðann, klássanum og hvernig byrja með fitness sínum.

Við munum finna þessar aðilur betri í Læoni 8 (Customer Onboarding), en að setja toninn núna tryggir að sjaldan fyrsta skráningu sé sérhæfð.

### Domænin (Domain Configuration) {#domain-configuration}

Ef þú notar host sem er tæknilega viðeigandi, set upp domæninátingu núna:

1. Hraudi yfir til **Ultimate Multisite > Settings > Domain Mapping**
2. Fylgja leiðbeiningum fyrir þennan sérstaka host
3. Prófa að sjálfshópana (subsites) fái SSL-skjald á hvaða hátt sem er.

Þetta tryggir að þegar við byrjum á að skapa temblönd og prófan staðir í næstu læoni, sé allt virkandi endanlegt.

## Netverk FitSite hittil {#the-fitsite-network-so-far}

Í stuttu máli eftir þessu læoni er það hvað þú hefur:

FitSite Network
├── WordPress Multisite (subdomain moda)
├── Ultimate Multisite (installið og sett upp)
├── Hosting með wildcard SSL
├── Domain mapping sett upp
├── Niche-spesífar tölvupóstamallir (byrjun)
└── Búnaður fyrir vísitalmabúnað (næsta læoni)

## Hva við byggðum í þessari læoni {#what-we-built-this-lesson}

- **Viðvirk WordPress Multisite** sett upp á subdomain moda
- **Ultimate Multisite sett upp** og sett upp með FitSite merki
- **Hosting og SSL** sett upp fyrir vaxa nýtingarnetið
- **Domain mapping** sett upp fyrir hostingþjónustufaraðilinn þinn
- **Niche-spesífur tölvupóstaljandi** sett upp frá dagana

---

**Næsta:** [Læoni 4: Byggja niche-mallar](lesson-4-templates) -- við byggjum vísitalmabúnað sem eigendur fitnessstúdíða vilja að nota.
