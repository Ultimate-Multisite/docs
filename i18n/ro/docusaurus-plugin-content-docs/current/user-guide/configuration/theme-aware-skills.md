---
title: Abilități Specifice Temei
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Competențe Conștiente de Temă

Superdav AI Agent v1.10.0 include patru noi competențe tematice încorporate care se adaptează automat la tema WordPress activă. Aceste competențe oferă ghiduri și capacități specializate, adaptate arhitecturii și funcționalităților temei dumneavoastră.

## Ce sunt Competențele Conștiente de Temă? {#what-are-theme-aware-skills}

Competențele conștiente de temă sunt baze de cunoștințe și seturi de instrumente preconfigurate pe care asistentul AI le selectează automat, în funcție de tema WordPress activă pe site-ul dumneavoastră. Când schimbați tema, competențele disponibile ale asistentului se actualizează automat — nu este necesară nicio configurare manuală.

Fiecare competență include:

- **Documentație specifică temei** — ghiduri despre cum să folosiți și să personalizați tema
- **Referințe de blocuri și pattern-uri** — blocuri, pattern-uri și opțiuni de design disponibile
- **Exemple de personalizare** — fragmente de cod și pattern-uri de configurare pentru sarcini comune
- **Cele mai bune practici** — recomandări pentru arhitectura și fluxul de lucru al temei

## Competențe Conștiente de Temă Disponibile {#available-theme-aware-skills}

### Block Themes (Temele bazate pe blocuri) {#block-themes}

**Se aplică:** Temelor care folosesc arhitectura bazată pe blocuri (Full Site Editing) a WordPress.

Competența Block Themes oferă ghiduri despre:

- Crearea și editarea template-urilor folosind editorul de blocuri
- Lucrul cu pattern-uri de blocuri și blocuri reutilizabile
- Personalizarea stilurilor globale și setările theme.json
- Utilizarea blocurilor și variațiilor tematice
- Construirea de pattern-uri de blocuri personalizate pentru site-ul dumneavoastră

**Activată automat când:** Tema activă este o temă bazată pe blocuri (suportă funcționalitatea `block-templates`).

### Classic Themes (Temele clasice) {#classic-themes}

**Se aplică:** Temelor WordPress tradiționale care folosesc fișiere PHP și editorul clasic.

Competența Classic Themes oferă ghiduri despre:

- Lucrul cu fișierele template PHP și hook-urile
- Personalizarea aspectului temei prin Customizer
- Utilizarea zonelor de widget și a sidebar-urilor
- Modificarea CSS și dezvoltarea cu teme copil (child theme)
- Înțelegerea ierarhiei temei și a tag-urilor de template

**Activată automat când:** Tema activă este o temă clasică (non-block).

### Kadence Blocks {#kadence-blocks}

**Se aplică:** Site-urilor care folosesc plugin-ul Kadence Blocks pentru design avansat bazat pe blocuri.

Competența Kadence Blocks oferă ghiduri despre:

- Utilizarea bibliotecii avansate de blocuri Kadence (Hero, Testimonials, Pricing, etc.)
- Configurarea setărilor blocului Kadence și a opțiunilor responsive
- Construirea de layout-uri personalizate cu blocurile de grilă și container ale Kadence
- Integrarea blocurilor Kadence cu tema dumneavoastră
- Exploatarea sistemului de design și a preset-urilor Kadence

**Activată automat când:** Plugin-ul Kadence Blocks este activ pe site-ul dumneavoastră.

### Kadence Theme {#kadence-theme}

**Se aplică:** Site-urilor care folosesc tema Kadence pentru design și personalizare bazate pe blocuri.

Competența Kadence Theme oferă ghiduri despre:

- Personalizarea temei Kadence prin stiluri globale și theme.json
- Utilizarea pattern-urilor și template-urilor încorporate ale Kadence
- Configurarea setărilor și opțiunilor temei Kadence
- Construirea de design-uri personalizate cu sistemul de design Kadence
- Integrarea Kadence cu plugin-uri și instrumente populare

**Activată automat când:** Tema activă este tema Kadence.

## Cum sunt Selectate Competențele {#how-skills-are-selected}

Asistentul detectează automat tema activă și plugin-urile instalate la fiecare mesaj. Dacă există o competență conștientă de temă potrivită, aceasta este încărcată automat în contextul asistentului. Nu este necesar să activați sau să schimbați manual competențele.

### Multiple Skills (Competențe multiple) {#multiple-skills}

Dacă mai multe competențe se aplică site-ului dumneavoastră (de exemplu, dacă aveți active atât Kadence Blocks, cât și Kadence Theme), asistentul are acces la toate competențele aplicabile și poate face referire la ghidurile din fiecare.

### Switching Themes (Schimbarea temei) {#switching-themes}

Când vă schimbați tema activă, competențele disponibile ale asistentului se actualizează automat la următorul mesaj. De exemplu:

1. Folosiți o temă bazată pe blocuri cu competența **Block Themes** activă.
2. Vă schimbați la o temă clasică.
3. La următorul mesaj, competența **Classic Themes** este încărcată automat, iar competența **Block Themes** nu mai este disponibilă.

## Utilizarea Competențelor Conștiente de Temă {#using-theme-aware-skills}

Pentru a folosi o competență conștientă de temă, descrieți pur și simplu ce doriți să faceți în interfața de chat. Asistentul va face referire automat la ghidul competenței adecvate.

### Exemple de Prompt-uri {#example-prompts}

**Pentru Block Themes:**
> "Create a hero section with a background image and centered text using block patterns."

**Pentru Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme."

**Pentru Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block."

**Pentru Kadence Theme:**
> "Customize the header layout and navigation menu styling."

Asistentul va oferi ghiduri specifice temei și exemple de cod adaptate temei și plugin-urilor dumneavoastră active.

:::note
Competențele conștiente de temă sunt disponibile automat în Superdav AI Agent v1.10.0 și versiunile ulterioare. Nu este necesară nicio configurare sau setare suplimentară.
:::
