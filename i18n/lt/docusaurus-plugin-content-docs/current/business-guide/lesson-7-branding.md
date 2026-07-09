---
title: '7 pamoka: Pritaikymas sau'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# 7 pamoka: Pritaikykite tai sau

Jūsų klientai niekada neturėtų jaustis taip, lyg naudotų „kažkokį WordPress plugin“. Jie turėtų jaustis naudojantys FitSite -- jų industrijai sukurtą platformą. Šioje pamokoje aptariamas prekės ženklo pritaikymas, white-label pritaikymas ir tai, kaip platformai suteikti produkto pojūtį.

## Kur sustojome

FitSite turi veikiantį checkout procesą, kuris fitneso studijų savininkus nuveda nuo plano pasirinkimo iki veikiančios svetainės. Dabar pasirūpinsime, kad visa patirtis atrodytų kaip vientisas, prekės ženklu pažymėtas produktas.

## Jūsų platformos domenas

Jūsų prekės ženklo pagrindas yra jūsų domenas. FitSite atveju:

- **Pagrindinis domenas**: `fitsite.com` (jūsų rinkodaros svetainė ir tinklo šaknis)
- **Klientų svetainės**: `studioname.fitsite.com` (subdomenai)
- **Pasirinktiniai domenai**: Growth ir Pro planų klientai gali susieti savo domeną

### Domeno nustatymas

1. Užregistruokite savo platformos domeną
2. Nukreipkite jį į savo prieglobos paslaugų teikėją
3. Sukonfigūruokite wildcard DNS (`*.fitsite.com`) klientų subdomenams
4. Įsitikinkite, kad wildcard SSL yra aktyvus

Išsamias instrukcijas rasite [Kaip sukonfigūruoti domenų susiejimą](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## Admin patirties white-label pritaikymas

Kai fitneso studijos savininkas prisijungia prie savo svetainės Dashboard, jis turėtų matyti jūsų prekės ženklą, o ne WordPress ar Ultimate Multisite prekės ženklą.

### Pasirinktinis prisijungimo puslapis

Pritaikykite WordPress prisijungimo puslapį, kad jame būtų rodoma:

- Jūsų FitSite logotipas
- Fitnesui tinkami fono vaizdai
- Jūsų prekės ženklo spalvos

### Dashboard prekės ženklo pritaikymas

Naudokite [Admin Page Creator](/addons/admin-page-creator) priedą arba pasirinktinį CSS, kad:

- Pakeistumėte WordPress logotipą savo FitSite logotipu
- Pritaikytumėte administravimo spalvų schemą prie savo prekės ženklo
- Pridėtumėte pasirinktinį Dashboard valdiklį su fitnesui skirtais greitaisiais saitais ir pagalbos ištekliais

### Pasirinktiniai administravimo puslapiai

Apsvarstykite galimybę sukurti pasirinktinius administravimo puslapius, kurie iškeltų aktualiausius veiksmus fitneso studijų savininkams:

- „Redaguokite savo užsiėmimų tvarkaraštį“
- „Atnaujinkite trenerių profilius“
- „Peržiūrėkite savo svetainę“

Tai sumažina mokymosi kreivę, nes nišai aktualūs veiksmai pateikiami aiškiai ir matomai, o ne paslepiami standartiniame WordPress meniu.

## Jūsų komunikacijos prekės ženklo pritaikymas

Kiekvienas el. laiškas, sąskaita faktūra ir pranešimas turėtų stiprinti jūsų prekės ženklą.

### Sisteminiai el. laiškai

Eikite į **Ultimate Multisite > Settings > Emails** ir pritaikykite visus sisteminius el. laiškus:

- **Siuntėjo vardas**: FitSite
- **Siuntėjo el. paštas**: hello@fitsite.com
- **El. laiškų šablonai**: Naudokite savo prekės ženklo spalvas ir logotipą
- **Kalba**: Visur pritaikyta fitneso tematikai

Svarbiausi el. laiškai, kuriuos reikia pritaikyti:

| El. laiškas | Bendrinė versija | FitSite versija |
|-------|----------------|-----------------|
| Pasveikinimas | „Jūsų nauja svetainė paruošta“ | „Jūsų fitneso studijos svetainė veikia“ |
| Mokėjimo kvitas | „Mokėjimas gautas“ | „FitSite prenumeratos mokėjimas patvirtintas“ |
| Bandomojo laikotarpio pabaiga | „Jūsų bandomasis laikotarpis netrukus baigsis“ | „Jūsų FitSite bandomasis laikotarpis baigsis po 3 dienų -- išlaikykite savo studijos svetainę veikiančią“ |

### Sąskaitos faktūros

Pritaikykite sąskaitų faktūrų šablonus naudodami:

- Jūsų FitSite logotipą ir prekės ženklo spalvas
- Jūsų verslo duomenis
- Fitnesui pritaikytus produktų pavadinimus (ne bendrinius planų ID)

## Klientams skirta svetainė

Jūsų pagrindiniam domenui (`fitsite.com`) reikia rinkodaros svetainės, kuri parduoda platformą. Tai atskira nuo Ultimate Multisite tinklo administravimo dalies -- tai viešas jūsų verslo veidas.

Svarbiausi puslapiai:

- **Pagrindinis puslapis**: Aiškus vertės pasiūlymas fitneso verslams
- **Funkcijos**: Ką FitSite daro, kalbant fitneso terminais
- **Kainodara**: Jūsų trys planai su nišai pritaikytais funkcijų palyginimais
- **Pavyzdžiai**: Parodykite platformoje sukurtas svetaines
- **Registracija**: Nuorodos į jūsų checkout formą

:::tip Jūsų rinkodaros svetainė gali būti tinklo svetainė
Sukurkite savo rinkodaros svetainę kaip svetainę savo tinkle. Tai leidžia ją valdyti iš to paties Dashboard ir parodo jūsų pačių platformos galimybes.
:::

## Pasirinktinis domenas klientams

Klientams, kurių planuose įtraukti pasirinktiniai domenai, aiškiai dokumentuokite procesą:

1. Klientas užregistruoja arba perkelia savo domeną pas registratorių
2. Klientas atnaujina DNS, kad nukreiptų į jūsų platformą (pateikite tikslius įrašus)
3. Ultimate Multisite tvarko domeno susiejimą ir SSL

Sukurkite pagalbos straipsnį arba žinių bazės įrašą būtent šiam procesui, parašytą netechniniams fitneso studijų savininkams.

## FitSite tinklas iki šiol

```
FitSite tinklas
├── WordPress Multisite (subdomenų režimas)
├── Ultimate Multisite (sukonfigūruotas + pritaikytas prekės ženklui)
├── Platformos domenas (fitsite.com + wildcard SSL)
├── Svetainių šablonai (Studio Essential, Gym Pro, Fitness Chain)
├── Produktai (Starter, Growth, Pro + Order Bumps)
├── Checkout procesas (pritaikytas nišai, ištestuotas)
├── Prekės ženklo pritaikymas
│   ├── Pasirinktinis prisijungimo puslapis
│   ├── Prekės ženklu pritaikytas administravimo Dashboard
│   ├── Nišai pritaikyti sisteminiai el. laiškai
│   ├── Prekės ženklu pritaikytos sąskaitos faktūros
│   └── Rinkodaros svetainė fitsite.com
└── Paruošta onboarding procesui (kita pamoka)
```

## Ką sukūrėme šioje pamokoje

- **Platformos domenas ir DNS** sukonfigūruoti prekės ženklu pažymėtai patirčiai
- **White-label administravimo dalis** su FitSite prekės ženklu visur
- **Pritaikyta komunikacija** -- el. laiškai, sąskaitos faktūros ir pranešimai atitinka prekės ženklą
- **Rinkodaros svetainė**, kuri parduoda FitSite fitneso studijų savininkams
- **Pasirinktinių domenų dokumentacija** klientams, kurie nori savo domeno

---

**Toliau:** [8 pamoka: Klientų onboarding](lesson-8-onboarding) -- sukursime patirtį, kuri naują registraciją paverčia aktyviu ir patenkintu klientu.
