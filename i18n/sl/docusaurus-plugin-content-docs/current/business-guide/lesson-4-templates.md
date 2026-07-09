---
title: 'Lekcija 4: Izdelava nišnih predlog'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lekcija 4: Izdelava nišnih predlog {#lesson-4-building-niche-templates}

Predloge so jedro vaše nišne vrednostne ponudbe. Lastnik fitnes studia, ki se prijavi in vidi spletno mesto, ki že izgleda kot fitnes spletno mesto -- z urniki vadb, profili trenerjev in ustreznimi slikami -- bo veliko verjetneje ostal kot tisti, ki vidi prazno platno.

## Kjer smo končali {#where-we-left-off}

Imamo delujoče omrežje FitSite z nameščenim in konfiguriranim Ultimate Multisite. Zdaj bomo izdelali predloge, zaradi katerih bo FitSite deloval namensko ustvarjen za fitnes podjetja.

## Zakaj so nišne predloge pomembne {#why-niche-templates-matter}

Generične predloge vaše stranke prisilijo, da opravijo težko delo: ugotovijo, katere strani potrebujejo, kakšna struktura vsebine deluje in kako poskrbeti, da bo videti pravilno za njihovo panogo. Nišne predloge odpravijo to trenje.

Lastnik fitnes studia, ki se prijavi v FitSite, bi moral videti:

- Domačo stran, ki izgleda kot spletno mesto fitnes studia
- Že ustvarjene strani za vadbe, urnike, trenerje in cene
- Slike in nadomestno vsebino, ki ustreza njihovi panogi
- Oblikovanje, ki deluje profesionalno in skladno z znamko za fitnes

Vnesejo svoje podatke. Ne začnejo iz nič.

## Načrtovanje vaših predlog {#planning-your-templates}

Pred izdelavo se odločite, katere predloge boste ponudili. Za FitSite bomo ustvarili tri:

### Predloga 1: Studio Essential {#template-1-studio-essential}

Za majhne studie in osebne trenerje.

- **Domača stran** z glavno sliko, poudarki vadb in pozivom k dejanju
- Stran **O nas** z zgodbo in poslanstvom studia
- Stran **Vadbe** z razporeditvijo urnika
- Stran **Trenerji** s karticami profilov
- Stran **Kontakt** z zemljevidom lokacije in obrazcem
- **Čisto, sodobno oblikovanje** z barvno shemo, primerno za fitnes

### Predloga 2: Gym Pro {#template-2-gym-pro}

Za uveljavljene fitnese z več storitvami.

- Vse iz Studio Essential, plus:
- Stran **Članstvo** s tabelo cen
- Stran **Galerija** za fotografije objekta
- Razdelek **Blog** za fitnes nasvete in novice
- Razdelek **Pričevanja** na domači strani
- Možnosti za **bolj izpostavljeno znamčenje**

### Predloga 3: Fitness Chain {#template-3-fitness-chain}

Za poslovanje na več lokacijah.

- Vse iz Gym Pro, plus:
- Stran **Lokacije** z več seznami objektov
- Predloga podstrani **franšiza/lokacija**
- **Centralizirano znamčenje** s podrobnostmi, specifičnimi za lokacijo
- **Imenik osebja** po lokacijah

## Izdelava predložnega spletnega mesta {#building-a-template-site}

V Ultimate Multisite je predloga preprosto WordPress spletno mesto, konfigurirano tako, kot želite, da so videti nova spletna mesta strank. Tukaj je, kako ga ustvarite:

### Korak 1: Ustvarite predložno spletno mesto {#step-1-create-the-template-site}

1. Pomaknite se do **Sites > Add New** v skrbništvu omrežja
2. Ustvarite spletno mesto z imenom `template-studio-essential`
3. To spletno mesto postane vaše delovno platno

### Korak 2: Namestite in konfigurirajte temo {#step-2-install-and-configure-the-theme}

Preklopite na Dashboard predložnega spletnega mesta in:

1. Aktivirajte temo, primerno za fitnes podjetja
2. Konfigurirajte nastavitve teme, barve in tipografijo
3. Nastavite glavo in nogo z navigacijo, primerno za fitnes

:::tip Theme Selection
Choose a theme that is flexible enough to look good for fitness but not so complex that your customers cannot manage it. Themes like Astra, GeneratePress, or Kadence work well because they are lightweight, customizable, and well-supported.
:::

### Korak 3: Ustvarite strani {#step-3-create-the-pages}

Vsako stran izdelajte z:

- **Nadomestno vsebino**, ki se naravno bere za fitnes ("Dobrodošli v [Ime studia]" namesto "Lorem ipsum")
- **Nadomestnimi slikami** z brezplačnih spletnih mest s stock fotografijami, ki prikazujejo fitnes dejavnosti
- **Funkcionalnimi razporeditvami** z uporabo page builderja ali urejevalnika blokov

Kjer je mogoče, naj bo nadomestna vsebina poučna. Namesto generičnega polnilnega besedila napišite vsebino, kot je: "To zamenjajte s kratkim opisom svojega studia in tega, kaj ga dela posebnega. Omenite svojo filozofijo treninga, leta izkušenj ali kaj lahko stranke pričakujejo."

### Korak 4: Konfigurirajte plugine {#step-4-configure-plugins}

Namestite in aktivirajte plugine, ki jih fitnes studii potrebujejo:

- Plugin za rezervacije ali urnike (če je primeren za vaš plan tier)
- Plugin za kontaktni obrazec
- SEO plugin (vnaprej konfiguriran s privzetimi nastavitvami, relevantnimi za fitnes)

### Korak 5: Označite kot predlogo {#step-5-mark-as-template}

1. Pomaknite se do **Ultimate Multisite > Sites**
2. Uredite predložno spletno mesto
3. Omogočite stikalo **Site Template**

Ta postopek ponovite za vsako predlogo, ki jo želite ponuditi.

## Kontrolni seznam kakovosti predloge {#template-quality-checklist}

Preden predlogo omogočite, preverite:

- [ ] Vse strani se pravilno naložijo in izgledajo profesionalno
- [ ] Nadomestna vsebina je koristna in specifična za nišo
- [ ] Slike so primerne in pravilno licencirane
- [ ] Mobilna odzivnost deluje na vseh straneh
- [ ] Navigacija je logična in popolna
- [ ] Kontaktni obrazci delujejo
- [ ] Ni nedelujočih povezav ali manjkajočih sredstev
- [ ] Hitrost nalaganja strani je sprejemljiva

## Omrežje FitSite do zdaj {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## Kaj smo izdelali v tej lekciji {#what-we-built-this-lesson}

- **Tri nišno specifične predloge**, zasnovane za različne velikosti fitnes podjetij
- **Vsebino in slike, primerne za fitnes**, zaradi katerih platforma deluje namensko izdelana
- **Poučno nadomestno vsebino**, ki stranke vodi skozi prilagoditev
- **Kontrolni seznam kakovosti**, ki zagotavlja, da so predloge pripravljene za produkcijo

---

**Naprej:** [Lekcija 5: Oblikovanje vaših planov](lesson-5-plans) -- ustvarili bomo ravni product, ki ustrezajo temu, kako fitnes podjetja dejansko delujejo.
