---
title: Sposobnosti Theme Buildera
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Zdolosti Theme Builderja: Scaffold in Aktivacija Block Tem {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 predstavlja dve močnim zmožnosti, ki vam omogočajo generiranje in uporabo prilagojenih block tem neposredno iz čata.

## Povzetek {#overview}

Zdolosti **scaffold-block-theme** in **activate-theme** omogočajo agentom:
- Generiranje popolnih, pripravljenih na produkcijo block tem na podlagi vaših specifikacij
- Avtomatsko aktivacijo tem na vašem spletnem mestu brez ručne intervencije
- Ustvarjanje skladne vizualne identitete s vodilnim oblikovanjem

## Scaffold Block Theme {#scaffold-block-theme}

Zdolost **scaffold-block-theme** generira nov WordPress block tem z popolno strukturo teme, ki vključuje:

- konfiguracijo `theme.json` z design tokeni
- template datoteke za blokove za pogoste layoute
- prilagojene stile in variacije blokov
- metadata teme in deklaracije podpornih funkcij

### Kako povzročiti (Invoke) {#how-to-invoke}

V svojem čatu z Superdav AI Agentom lahko zahtevate generiranje teme:

```
"Ustvari block temu imenovanega 'Modern Agency' z modnim plošcem in belo barvno sklepanjem,
sans-serif tipografijo in profesionalnim layoutem"
```

Agent bo:
1. Zbrala vaše oblikovalske predvidevanja skozi pogovor
2. Generirala popolno strukturo teme
3. Ustvarila vse potrebne datoteke teme
4. Priprečila temu za aktivacijo

### Očekivani izhod {#expected-output}

Ko se zmožnost uspešno izvrši, boste videli:

- Potrdbo, da je tema bila scaffoldirana
- Ime in lokacija teme
- Povzetek uporabljenih design tokenov (barve, tipografija, razspace)
- Status pripravljen na aktivacijo

Primer izhoda:
```
✓ Tema "Modern Agency" uspešno scaffoldirana
  Lokacija: /wp-content/themes/modern-agency/
  Barve: Primarna #0066CC, Sekundarna #FFFFFF
  Tipografija: Inter (sans-serif)
  Status: pripravljena na aktivacijo
```

## Aktivacija Teme {#activate-theme}

Sposob na uporabo **activate-theme** vam omogoča, da preklopite svojo spletno stran na novo ustvarjen blok teme ali obstoječo.

### Kako uporabiti {#how-to-invoke-1}

Po ustvaritvi teme lahko takoj aktivirate:

```
"Aktiviraj temu Modern Agency"
```

Ali aktivirajte kakršno koli obstoječo temu:

```
"Preklopi na temu Twentytwentyfour"
```

### Očekivani izhod {#expected-output-1}

Ko uspe aktivacija:

- Potrditev aktivirane teme
- Ime stare teme (za referenco)
- URL spletne strani, kjer je tema zdaj v živo
- Kakršne koli opombe specifične za temu

Primer izhoda:
```
✓ Tema uspešno aktivirana
  Aktivirana tema: Modern Agency
  Prejšnja tema: Twentytwentyfour
  Živa na: https://yoursite.com
  Opomba: Preverite vašo domačo stran, da bi se upevali v nove izgled
```

## Postopek: Ustvarjaj in aktiviraj (Scaffold and Activate) {#workflow-scaffold-and-activate}

Tipičen postopek kombinuje obe možnosti:

1. **Zahtevanje generiranja teme**: "Ustvari blok temu za mojo stran za pridelavo SaaS"
2. **Agent ustvari temu**: Generira datoteke in design tokene (design tokens)
3. **Preverjanje in izboljšanje**: Razmislite o spremembah v dizajnu, če je potrebno
4. **Aktivacija**: "Aktiviraj temo zdaj"
5. **Preverjanje**: Obiščite svojo stran, da bi potrdili, da je novi izgled živo

## Design Tokens in prilagodljivost (Customization) {#design-tokens-and-customization}

Ustvarjene teme uporabljajo WordPress design tokene (preko `theme.json`) za:

- **Barve**: Primarna, sekundarna, akcentna, neutralna paleta
- **Tipografija**: Fonti, velikosti, težave (weights), višine vrstic (line heights)
- **Razmaki**: Padding, margin, razmerja gapov
- **Obranki**: Tokeni za radius in širino

Ti tokeni so centralizirani v `theme.json`, kar omogoča enostavno prilagajanje celotnega dizajna sistema s ene datoteke.

## Omejitve in opombe {#limitations-and-notes}

Teme so se ustvarjajo v `/wp-content/themes/` in morajo slediti konvencije imenovanja WordPressa
Aktivacija zahteva primerna dovoljenja na vašem WordPress spletni strani
Splošna PHP kode v temah je minimalna; uporabljajte pluginove za složene funkcije
Blok teme najbolje deluje z WordPressom 5.9 in novjim

## Reševanje težav {#troubleshooting}

**Tema se ne pojavlja po ustvarjanju (scaffolding)**
- Preverite, da obstaja direktorij teme in ima primerna dovoljenja
- Preverite, da je `theme.json` validen JSON
- Upe asegurarse, da ime teme ni v konfliktu z obstoječimi temi

**Aktivacija ne uspeva**
- Potrdite, da imate administratorstva
- Preverite, da je direktorij teme dostopen za WordPress
- Pregledajte WordPress log napak za podrobnosti

**Design tokens se ne uporablja**
- Preverite, da je sintaksa `theme.json` pravilna
- Obrišite kakršne koli pluginove za caching
- Preverite, da vaša verzija WordPressa podpira tokene, ki jih uporabljate

## Naslednji koraki {#next-steps}

Po aktivaciji vaše teme lahko:
- Uporabite **Design System Aesthetics skill** za izboljšanje tipografije, barv in razspacevanja
- Personalizirajte individualne stile blokov prek WordPressa block editorja
- Dodajte prilagojen CSS v datoteko `style.css` teme
- Ustvarite prilagojene šablone blokov za specifične tipove strani
