---
title: '3 pamoka: jūsų tinklo nustatymas'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# 3 pamoka: tinklo nustatymas

Laikas kurti. Šioje pamokoje įdiegsite Ultimate Multisite ir sukonfigūruosite FitSite tinklo pagrindą. Kiekvienas sprendimas čia priimamas galvojant apie fitneso nišą.

## Kur sustojome {#where-we-left-off}

Pasirinkome fitneso studijas kaip savo nišą ir patvirtinome galimybę. Dabar šią idėją paversime veikiančia platforma.

## Prieglobos pasirinkimas {#choosing-your-hosting}

Nišinei platformai prieglobos pasirinkimas svarbesnis nei vienai svetainei. Jūs talpinate ne vieną svetainę -- jūs talpinate tinklą, kuris augs iki dešimčių ar šimtų svetainių.

### Į ką atkreipti dėmesį {#what-to-look-for}

- **WordPress Multisite palaikymas**: ne visi prieglobos teikėjai gerai tvarkosi su multisite
- **Wildcard SSL**: būtina subdomenais pagrįstiems tinklams
- **Plečiami ištekliai**: jums reikia vietos augti be migravimo
- **Ultimate Multisite integracija**: automatizuotas domenų susiejimas ir SSL sutaupo daug operacinio darbo

### Rekomenduojamas būdas {#recommended-approach}

Pasirinkite prieglobos teikėją iš [suderinamų teikėjų](/user-guide/host-integrations/closte) sąrašo. Jie buvo išbandyti su Ultimate Multisite ir suteikia integracijas, kurių reikia domenų susiejimui ir SSL automatizavimui.

FitSite naudosime subdomenų konfigūraciją. Tai reiškia, kad klientų svetainės iš pradžių bus rodomos kaip `studioname.fitsite.com`, kol jie pasirinktinai susies savo domeną.

## WordPress Multisite diegimas {#installing-wordpress-multisite}

Jei dar neturite WordPress Multisite diegimo:

1. Įdiekite WordPress savo prieglobos teikėjo aplinkoje
2. Vadovaukitės [Kaip įdiegti WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) vadovu
3. Pasirinkite **subdomeno** konfigūraciją, kai būsite paraginti

:::tip Kodėl subdomenai?
Subdomenai kiekvienai kliento svetainei suteikia atskirą adresą (`studio.fitsite.com`), o ne kelią (`fitsite.com/studio`). Tai atrodo profesionaliau jūsų klientams ir padeda išvengti nuolatinių nuorodų konfliktų. Išsamų palyginimą rasite [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## Ultimate Multisite diegimas {#installing-ultimate-multisite}

Vadovaukitės [Ultimate Multisite diegimas](/user-guide/getting-started/installing-ultimate-multisite) vadovu, kad:

1. Įkeltumėte ir aktyvuotumėte įskiepį visame tinkle
2. Paleistumėte [sąrankos vedlį](/user-guide/getting-started/multisite-setup-wizard)

Sąrankos vedlio metu turėkite omenyje FitSite nišą:

- **Valiuta**: nustatykite valiutą, kurią naudoja jūsų fitneso studijų klientai
- **Įmonės pavadinimas**: „FitSite“ (arba jūsų pasirinktas prekės ženklo pavadinimas)
- **Įmonės logotipas**: įkelkite savo prekės ženklo logotipą -- jis rodomas sąskaitose faktūrose ir el. laiškuose

## Konfigūravimas fitneso nišai {#configuring-for-the-fitness-niche}

Įdiegę Ultimate Multisite, atlikite šiuos nišai pritaikytus konfigūracijos pasirinkimus:

### Bendrieji nustatymai {#general-settings}

Eikite į **Ultimate Multisite > Settings** ir sukonfigūruokite:

- **Svetainės pavadinimas**: FitSite
- **Numatytasis vaidmuo**: administratorius -- fitneso studijų savininkams reikia visiškos savo svetainės turinio kontrolės
- **Registracija**: įjunkite naudotojų registraciją, kad studijų savininkai galėtų užsiregistruoti patys

### El. pašto konfigūracija {#email-configuration}

Jūsų sistemos el. laiškai turėtų kalbėti jūsų nišos kalba. Eikite į **Ultimate Multisite > Settings > Emails** ir pritaikykite:

- Pakeiskite bendrinę „jūsų nauja svetainė“ kalbą fitnesui pritaikyta žinute
- Pavyzdinė pasveikinimo tema: „Jūsų fitneso studijos svetainė paruošta“
- Pavyzdinis pasveikinimo tekstas: paminėkite jų studiją, užsiėmimus ir pirmuosius žingsnius su jų fitneso svetaine

Tai dar patobulinsime 8 pamokoje (klientų įvedimas), tačiau tono nustatymas dabar užtikrina, kad net ankstyvos bandomosios registracijos jaustųsi pritaikytos nišai.

### Domeno konfigūracija {#domain-configuration}

Jei naudojate suderinamą prieglobos teikėją, dabar sukonfigūruokite domenų susiejimą:

1. Eikite į **Ultimate Multisite > Settings > Domain Mapping**
2. Vadovaukitės integracijos vadovu, skirtu jūsų konkrečiam prieglobos teikėjui
3. Patikrinkite, ar naujos posvetainės automatiškai gauna SSL

Tai užtikrina, kad kai kitoje pamokoje pradėsime kurti šablonus ir bandomąsias svetaines, viskas veiks nuo pradžios iki pabaigos.

## FitSite tinklas iki šiol {#the-fitsite-network-so-far}

Šios pamokos pabaigoje turite štai ką:

```
FitSite tinklas
├── WordPress Multisite (subdomenų režimas)
├── Ultimate Multisite (įdiegta ir sukonfigūruota)
├── Priegloba su wildcard SSL
├── Domenų susiejimas sukonfigūruotas
├── Nišai pritaikyti el. laiškų šablonai (pradiniai)
└── Paruošta svetainių šablonams (kita pamoka)
```

## Ką sukūrėme šioje pamokoje {#what-we-built-this-lesson}

- **Veikiantį WordPress Multisite** diegimą subdomenų režimu
- **Įdiegtą Ultimate Multisite** ir sukonfigūruotą su FitSite prekės ženklu
- **Prieglobą ir SSL**, paruoštus augančiam tinklui
- **Domenų susiejimą**, sukonfigūruotą jūsų prieglobos teikėjui
- **Nišai pritaikytą el. laiškų toną**, nustatytą nuo pirmos dienos

---

**Toliau:** [4 pamoka: nišinių šablonų kūrimas](lesson-4-templates) -- sukursime svetainių šablonus, kuriuos fitneso studijų savininkai iš tikrųjų norės naudoti.
