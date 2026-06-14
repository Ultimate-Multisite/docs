---
title: Potok vvoja za Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Potok za vdrožanje Theme Builderja

Superdav AI Agent v1.12.0 predstavlja usmerjen **potek za vdrožanje Theme Builderja**, ki vam pomaga ustvariti prilagodljiv temo blokov, med vašo začetno nastavitvijo. To zamenja staro način Site Builderja s bolj fleksibilnim pristopom, ki ga pomaga agent.

## Kaj je Potek za vdrožanje Theme Builderja?

Potek za vdrožanje Theme Builderja je interaktiv wizard za nastavitve, ki:

- Vas vodi skozi odločanja o dizajnu (barve, tipografija, raspored)
- Uločuje vaše preferencije glede vizualne identitete vašega spletnega mesta
- Generira prilagodljiv blok temo, ki je prilagojena vašim potrebam
- Avtomatsko aktivira temu ob dokončanju

Potek je močan **Setup Assistant agent**, ki postavlja pojasbljiva vprašanja in postopno gradi vašo temu.

## Začetek z Potkom za vdrožanje Theme Builderja

### Nastavitve pri prvi uporabi (First-Run Setup)

Ko prvič zagotovite Superdav AI Agent na novem WordPress nastavitvi, boste videli:

```
Dobši do Superdav AI Agent!

Kaj želite storiti?
1. Ustvariti prilagodljivo temu (Theme Builder)
2. Uporabiti obstojno temu
3. Za zdaj preskočiti nastavitve
```

Izberite **"Ustvari prilagodljivo temu"**, da vstopite v potek za vdrožanje Theme Builderja.

### Ručna aktivacija (Manual Activation)

Potek za vdrožanje Theme Builderja lahko začnete tudi v katerem koli času, če zahtevate:

```
"Začniti potek za vdrožanje Theme Builderja"
```

ali

```
"Pomagaj mi ustvariti prilagodljivo temu"
```

## Koraki potka

### Korak 1: Izbira načina (Mode Selection)

Setup Assistant agent postavlja vprašanje glede vaše prednosti:

```
Kako želite graditi svojo temu?
- Usmerjen (Vprašam in vam jo zgradim)
- Praktičen (Pokažem možnosti in vi se odločite)
```

**Usmerjen način** je priporočljiv za večino uporabnikov; agent predlaga dizajnerske predloge na podlagi vaše industrije in ciljev.

### Korak 2: Specifikacija spletnega mesta (Site Specification)

Boste vprašani glede vašega spletnega mesta:

- **Cilj spletne strani**: E-commerce, blog, portfolio, SaaS in obliki.
- **Cilna pubsubenca**: Kdo so je vaši obiskovalci?
- **Barve blagovne znamke**: Primarna in sekundarna barva (ali "nisem prepričljiv")
- **Ton**: Profesionalen, kreativ, igral, minimalen itd.

Tisto informacije shranjuje v vašo **site_brief** memorijo, ki jo agenti bodo uporabili v prihodnjih seansah.

### Korak 3: Odločitve o Design Systemu

Agent vas vodi skozi izbiro design tokenov:

- **Tipografija**: Tip fonta (serif, sans-serif, monospace) in razmerje velikosti
- **Paleta barv**: Primarna, sekundarna, akcentna in neutralna barva
- **Razmaki**: Kompakti, normalni ali prostori lay-out
- **Animacija**: Animacije in prehod (če želite)

### Korak 4: Generiranje Teme

Agent Setup Assistant vam ustvari custom block theme z naslednjimi elementami:

- `theme.json` ki vsebuje vse vaše design tokenove
- Block template za pogoste lay-out (homepage, blog, kontakt)
- Custom blok stili, ki se usklajujejo z vašim design systemom
- Metadata teme in deklaracije podpore WordPressa

### Korak 5: Aktivacija in Preverjanje

Tema se samodeaktivira, in boste videli:

```
✓ Vaša custom tema je zdaj na voljo!
  Ime teme: [Vaše Ime Spleta] Theme
  Barve: [Primarna] / [Sekundarna]
  Tipografija: [Font Family]

  Obiščite svoj spletni prostor, da vidite novo design.
```

Potem lahko obiščete svoj spletni prostor in preverite, da tema prikazuje pravilno.

## Specifikacija spleta in memorija site_brief

Med onboardingom agent zbere specifikacijo vašega spleta v kategoriji **site_brief** memorije. To vključuje:

- Cilj in cilje spleta
- Cilna pubsubenca
- Barve in ton blagovne znamke
- Prednosti dizajna
- Strukturo vsebine

### Zakaj je site_brief pomemben

V prihodnjih seansah agenti bodo uporabili vaš **site_brief** za:

Ohranite konzistentno dizajn pri spremembah
Predlagajte funkcije, ki so usklajene z namenom vaše strani
Prvenite predloge na podlagi konteksta

### Pregled vašega site_briefa

Lahko vprašate agentu:

```
"Show me my site brief"
```

ali

```
"What do you know about my site?"
```

Agent vam bo prikazal vaše shranjene specifikacije strani.

## Uporaba po onboarding-u (naročanje)

Po dokončanem onboarding-u Theme Builder lahko:

### Uporabite veščino Design System Aesthetics

Zahtevajte spremembe dizajna:

```
"Refine the typography to be more modern"
```

ali

```
"Adjust the color palette to be warmer"
```

Veščina **Design System Aesthetics** vas vodi skozi ciljane spremembe dizajna.

### Direktno uredite theme.json

Za napredne uporabnike, uredite datoteko `/wp-content/themes/[theme-name]/theme.json`, da prilagodite:

- Color tokens (barvne tokene)
- Typography scales (skale tipografije)
- Spacing values (vrednosti razdalje)
- Border and shadow definitions (določanja obramb in senčenja)

### Ustvarite custom Block Templates

Uporabite WordPress block editor za ustvarjanje prilagojen templatev za:

- Homepage layouts (rasporedi za domačo stran)
- Blog post pages (stranke blog postov)
- Product pages (stranke izdelkov)
- Contact forms (oblike za stik)

## Primerjava: Stari vs. Novi onboarding

| Funkcija | Site Builder (Starostno) | Theme Builder (Novi) |
|---------|----------------------|-------------------|
| Metoda nastavitve | Vodič na podlagi obrazca | Razgovor, ki vodi agent |
| Generiranje teme | Omejena templatev | Prilagodljivo osnovna struktura |
| Design tokens | Ručno vnositve | Vodične odločitve |
| Fleksibilnost | Fiksne možnosti | Prilagodljiva |
| Prihodnje posodobitve | Ni omenjene | Shranjene v site_briefu |

## Reševanje težav (Troubleshooting)

**Onboarding flow ni dokončan**
- Restartirajte potek: "Start the Theme Builder onboarding"
- Preverite, da je vaše WordPress instalacijo na zadnjem delu
- Preverite, da je agent Setup Assistant vklopljen

**Moj `site_brief` ni se uporablja**
- Preverite, da je agentu dostop do memorije
- Vprašajte agenta: "spomni mi moj site brief"
- Preverite, da je memorija v vaših nastavitvah vključena

**Generiran teme ni v skladu z moimi predlogi**
- Uporabite sposobnost Design System Aesthetics za izboljšanje
- Vprašajte agenta: "regeneriraj temo z [določene spremembe]"
- Uredite `theme.json` neposredno za natančen nadzor

## Naslednji koraki

Po dokončanju onboardinga Theme Builderja:

1. **Preverite svoj spletni strani**: Vstopite na svoj spletni strani, da vidite novo temo
2. **Izboljšajte dizajn**: Uporabite sposobnost Design System Aesthetics za prilagoditve
3. **Dodajte vsebino**: Začnite graditi vsebino vašega spletnega mesta
4. **Iskorabite sposobnosti**: Naučite se o drugih sposobnostih agenta, kot so `scaffold-block-theme` in `activate-theme`
