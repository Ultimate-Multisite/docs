---
title: Teema-tundlikud oskused
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Teema-tundiseid oskused

Superdav AI Agent v1.10.0 on väljaanevad nelja uue teema-tundiseid oskusi, mis automatiliselt kohanuvad teie aktiivse WordPress teema järgi. Need oskused pakuvad spetsialise juhendamist ja võimalusi, mis on suunatud teie teema arhitektuurile ja funktsioonidele.

## Mis on teema-tundised oskused? {#what-are-theme-aware-skills}

Teema-tundised oskused on ettevaatlikult konfigurieritud teavetud baasid ja tööriistakomplektid, mida AI abikogus valib automaatselt seotud WordPressi teema järgi. Kui muutate teemasid, abikoguse saadaval olevad oskused uuenduvad automaatselt – manuaalset konfiguratsiooni vajutamist ei ole.

Iga oskus sisaldab:

- **Teemase dokumentatsioon** — juhend teema kasutamise ja kohandamine kohta
- **Blokke ja mallide viidid** — saadaval olevad blokid, mallid ja disainivälivad
- **Kohandamise näidud** — koodikogud ja konfiguratsioonimallid levinud ülesannete jaoks
- **Parimad praktiikad** — soovitatud ettepanekud teema arhitektuurile ja töövoogile

## Saadaval olevad teema-tundised oskused {#available-theme-aware-skills}

### Blokteemad (Block Themes) {#block-themes}

**Kohapõhine:** Teemad, mis kasutavad WordPressi blokkide põhinevat (Full Site Editing) arhitektuuri.

Blokteema-oskuse pakub juhendamist:

- Mallide luomise ja redigeerimise tegemisel blokkiredaktoriga
- Blokid ja üleskasutavate mallide kasutamisega
- Globaalse stiilide ja theme.json seadistuste kohandamine
- Teema-blokkidega ja variantidega töötamise kohta
- Kui luute oma veebile jaoks teema-mallid

**Automatiliselt aktiveeritakse, kui:** Teie aktiivne teema on blokteema (toetab `block-templates` funktsiooni).

### Klassikud teemad (Classic Themes) {#classic-themes}

**Kohapõhine:** Traditsioonilised WordPress teemad, mis kasutavad PHP mallide ja klassikat.

Klassikute teemad oskus pakub juhendamist:

* PHP šabloni ja hookidega töötamine
* Teema väljanuluse muutmine Customizeri abil
* Widget-alad ja sivubari kasutamine
* CSS muutmise ja lapsiteema arendamine
* Teema hierarhia ja šabloni tagide mõistmine

**Automaatiliselt aktiveerub, kui:** Kui teie aktiivne teema on klassiline (non-block) teema.

### Kadence Blocks {#kadence-blocks}

**Kohaldatakse:** Sille sille veebilele, mis kasutab Kadence Blocks pluginu arendatud blokipõhise disaini jaoks.

Kadence Blocks oskus annab juhendi:

* Kadence'i arendatud blokukütüpla kasutamisest (Hero, Testimendused, Hindamine jne.)
* Kadence blockide seadistamise ja vastuvõtva valikute konfiguratsioonist
* Kadence gridi ja container-blockidega oma disainide loomis
* Kadence blockide integreerimise teemaaga
* Kadence'i disainisüsteemi ja presetide kasutamisest

**Automaatiliselt aktiveerub, kui:** Kui Kadence Blocks plugin on teie veebil eelnõul.

### Kadence Teema {#kadence-theme}

**Kohaldatakse:** Sille sille veebilele, mis kasutab Kadence teema blokipõhise disaini ja arendamise jaoks.

Kadence Theme oskus annab juhendi:

* Kadence teema seadistamise Custom global style'idega ja theme.json abil
* Kadence'i sissejuhatud blokpatroonide ja šabloni kasutamisega
* Kadence teema seadiste ja valikute konfiguratsiooniga
* Kadence disainisüsteemi abil oma disainide loomisega
* Kadence integreerimise populaarsete pluginate ja tööriistadega

**Automaatiliselt aktiveerub, kui:** Kui Kadence teema on teie aktiivne teema.

## Kuidas oskusi valitakse {#how-skills-are-selected}

Assistent tuvastab automaatselt teie aktiivse teema ja installitud pluginid iga sõnumiga. Kui on saadaval vastav teemaga teada võtav oskus, see laaditakse automaatselt assistenti konteksti. Te ei pea oskusi manuaaliselt aktiveerida või ümber teha.

### Mitudoskused {#multiple-skills}

Kui on võimalik, et teie veebilehel erinevaid oskusi kasutata (näiteks kui teil on aktiivsed nii Kadence Blocks kui ka Kadence Theme), ja assistent saab kasutada kõiki sobivaid oskusi ja viituda juhistustest mõlemast.

### Teemade vahetamine {#switching-themes}

Kui muutate aktiivset teema, muutus assistenti saadaval olevad oskused automaatselt järgmises sõnumi jooksul. Näiteks:

1. Kasutates teema-blokke ja **Block Themes** oskus on aktiivne.
2. Muutate klassilise teemale.
3. Järgmisel sõnumis laaditakse automaatselt **Classic Themes** oskus, ja **Block Themes** oskus ei ole enam saadaval.

## Teemast sõltuvate oskuste kasutamine {#using-theme-aware-skills}

Teemast sõltuva oskuse kasutamiseks kirjeldage lihtsalt, mida soovite teha keskse interface'is. Assistent viitub automaatselt sobiva oskuse juhendustega.

### Näidud küsimused {#example-prompts}

**Block Themes jaoks:**
> "Loo hero-osakond taustpildiga ja keskel olevate tekstidega blokkipaatide abil."

**Klassilise teema jaoks:**
> "Lisa kasutamata widgeti ala sivubariile alikteemaga."

**Kadence Blocks jaoks:**
> "Loo testimise osakaudu Kadence Testimonials blokki kasutades."

**Kadence Theme jaoks:**
> "Muuda headeri paigutust ja navigatsioonimenu stiili."

Assistent annab teemast sõltuva juhendid ja koodinäidused, mis on kohandatud teie aktiivse teema ja pluginidele.

:::note
Teemast sõltuvad oskused on automaatselt saadaval Superdav AI Agent v1.10.0 ja hilisemates versioonides. Lisajärgset seadistamist või konfiguratsiooni ei vaja.
:::
