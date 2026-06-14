---
title: Tema-atsižvelgiant į įgūdžius
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Temas atsižiau

Superdav AI Agent v1.10.0 įdaro naujas, automatiškai pritaikomi tema-atsižiavimo (theme-aware) įtraukimai, kurie automatine būdinga jūsų aktyviai naudojamajam WordPress temui. Šie įtraukimai suteikia specializuotą pagalbos ir galimybes, kurios yra atitinka jūsų temas architektūrą ir funkcijas.

## Kas tai yra tema-atsižiavimo įtraukimai?

Tema-atsižiavimo įtraukimai – tai pre-konfigūruoti žiniamos bazės ir įrankių rinkiniai, kuriuos AI asistentas automatiškai pasirinkia, atsižvelgiant į aktyviai naudojamą WordPress temą jūsų svetainėje. Kai keičiate temas, asistento turimos įtraukimai automatiškai atnaujinasi – nenaudojami manulys konfigūracijos.

Kiek kiekvienas įtraukimas apima:

- **Tema-specifiną dokumentaciją** – pagalbos naudojant ir personalizuoti temą
- **Blokų ir šablonų (pattern) referencijas** – turimos blokai, šablonavimo variantai ir dizaino pasirinkimai
- **Personalizavimo pavyzdžius** – kodą fragmentus ir konfigūracijos šablonus dažniems uždupstams
- **Geriausias praktikos** – rekomendacijos apie temas architektūrą ir veiklos procesą

## Naudojami tema-atsižiavimo įtraukimai

### Blokų temai (Block Themes)

**Taikiama:** Temoms, kurios naudo WordPress blokų pagrindu (Full Site Editing).

Blokų temų įtraukimas suteikia pagalbos:

- Įdaryti ir redaguoti šablonus naudojant blokų redaktorią
- Veikdamos su blokais ir šablonavimo variantais (patterns)
- Personalizuoti globalius stilius ir `theme.json` nustatymus
- Naudojami temines blokais ir jų variantais
- Įdaryti personalizuotus blokų šablonus jūsų svetainiai

**Automatiniai aktyvuojami, kai:** Jūsų aktyviai naudojama tema yra blokų tema (palaikoma `block-templates` funkcija).

### Klasikiniai temai (Classic Themes)

**Taikiama:** Tradicinė WordPress temoms, kurios naudo PHP šablonus ir klasikinį redaktorių.

Klasikinio temų įtraukimas suteikia pagalbos:

* Darbo PHP šablonų ir hook'ų sujungimu
* Tema apvaizdo personalizavimas per Customizerį
* Widget sąryklės ir puslapio skelbimai (sidebars)
* CSS modifikavimas ir child theme development
* Temų hierarchijos ir šablonų tagų suprantimas

**Automatiniai aktyvi:** Jūsų aktyviai naudojama klasikinis (ne blokas) tema.

### Kadence Blocks

**Taikiama:** Svetai, kuriuose naudojamas Kadence Blocks plokaliui pagamintas dizainui.

Kadence Blocks įgūdžius pateikia nurodymus apie:

- Kadencės pažangios blokų bibliotekos naudojimą (Hero, Testimonialai, Kaina ir kit.).
- Kadence blokų nustatymų ir atsakybių konfigūravimą.
- Pridana naujus dizainus su Kadencės gridu ir container blokais.
- Kadence blokų integruotą savo tema.
- Kadencės dizaino sistemos ir predefinertų nustatymų naudojimą.

**Automatiniai aktyvi:** Kadence Blocks plokaliui yra jūsų svetainėje.

### Kadence Tema

**Taikiama:** Svetai, kuriuose naudojama Kadence tema blokaliui pagamintas dizainui ir personalizavimui.

Kadence Theme įgūdžiai pateikia nurodymus apie:

- Kadencės temos personalizavimą per globalius stilius ir theme.json.
- Kadencės įtraukiamus blokų šablonų ir šablonų naudojimą.
- Kadence temos nustatymų ir jūsų pasirinkimų konfigūravimą.
- Naujų dizainų kūrimą su Kadencės dizaino sistema.
- Kadencės integruotą populiariausiu plokaliui ir įrankiais.

**Automatiniai aktyvi:** Kadence tema yra jūsų aktyviai naudojama tema.

## Kaip pasirinkti įgūdžius

Asistentu automatiškai pritikia jūsų aktyviai naudojamą temą ir įrengtus plokalius kiekviename žinutėje. Jei yra sujungęs šablonų sąmoningas įgūdžius, jis automatiškai įkeliama asistento kontekste. Jūs ne needete nustatyti ar pakeisti įgūdžių rankiniu būdu.

### Dažnai naudojami įgūdžiai

Jei jūsų svetainėje taikoma vienu metu keletas įgūdžių (pvz., jei turite aktyvūs tiek Kadence Blocks, tiek Kadence Theme), asistentas turės prieigą visoms pritaikytoms įgūdžiams ir gali suparatyti nurodytus nurodyklėmis iš kiekvieno.

### Tema keitimas

Kai pakeičiate aktyvivą temą, asistento prieinami įgūdžiai automatiškai atnaujinasi kitame pranešime. Pavyzdžiui:

1. Jūs naudojate blokų temą su aktyvuoju įgūdžiu **Block Themes**.
2. Pakeičiate į klasikinę temą.
3. Kitame pranešime į automatiškai įkeliama įgoda **Classic Themes**, o įgoda **Block Themes** nebus daugiau tersedia.

## Temų prieinamų įgūdžių naudojimas

Kad naudoti temai prieinamą įgūdį, viskas, ką norite padaryti, pateiktu čate. Asistentas automatiškai suparats tinkamą nurodyklę atitinkamajam įgūdžiai.

### Pavyzdys nurodyklėms

**Block Themes:**
> "Sukurti hero sekciją su galono vaizdu aktyvumo vaizdu ir centrinčiu tekstu naudojant blokų šaltinius."

**Classic Themes:**
> "Pridėti pritaikytą widget'ų vietą į bokštelį naudojant child theme."

**Kadence Blocks:**
> "Sukurti atsakymų sekciją naudojant Kadence Testimonials bloką."

**Kadence Theme:**
> "Prispausti galono schemą ir navigacijos meniu stilių."

Asistentas pateiks temai pritaikytus nurodyklas ir kodą pavyzdžius, skirtus jūsų aktyvai aktyviam temui ir įplokams.

:::note
Temai prieinami įgūdžiai yra automatiškai tersedia Superdav AI Agent v1.10.0 ir vėliau. Jokių papildomų nustatymų ar konfigūracijos ne reikalaujama.
:::
