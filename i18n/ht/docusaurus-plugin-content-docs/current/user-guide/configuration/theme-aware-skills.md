---
title: Konesans ki konpayi ak tem
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Compétences Sensibles au Thème {#theme-aware-skills}

La Superdav AI Agent v1.10.0 déploie quatre nouvelles compétences intégrées sensibles au thème qui s'adaptent automatiquement à votre thème WordPress actif. Ces compétences offrent des conseils et des capacités spécialisées adaptées à l'architecture et aux fonctionnalités de votre thème.

## Qu'est-ce que les Compétences Sensibles au Thème ? {#what-are-theme-aware-skills}

Les compétences sensibles au thème sont des bases de connaissances et des ensembles d'outils préconfigurés que l'assistant IA sélectionne automatiquement en fonction du thème WordPress actuellement actif sur votre site. Lorsque vous changez de thème, les compétences disponibles de l'assistant se mettent à jour automatiquement — pas besoin de configuration manuelle.

Chaque compétence comprend :

- **Documentation spécifique au thème** — des conseils sur l'utilisation et la personnalisation du thème
- **Références aux blocs et modèles (patterns)** — les blocs, modèles et options de conception disponibles
- **Exemples de personnalisation** — extraits de code et schémas de configuration pour les tâches courantes
- **Meilleures pratiques** — recommandations pour l'architecture et le flux de travail du thème

## Compétences Sensibles au Thème Disponibles {#available-theme-aware-skills}

### Thèmes Basés sur les Blocs (Block Themes) {#block-themes}

**S'applique à :** Les thèmes qui utilisent l'architecture basée sur les blocs WordPress (Full Site Editing).

La compétence Block Themes fournit des conseils sur :

- La création et la modification de modèles en utilisant l'éditeur de blocs
- Le travail avec les modèles de blocs et les blocs réutilisables
- La personnalisation des styles globaux et des paramètres theme.json
- L'utilisation des blocs et variations de thème
- La construction de modèles de blocs personnalisés pour votre site

**Activée automatiquement lorsque :** Votre thème actif est un thème basé sur les blocs (supporte la fonctionnalité `block-templates`).

### Thèmes Classiques (Classic Themes) {#classic-themes}

**S'applique à :** Les thèmes WordPress traditionnels qui utilisent des modèles PHP et l'éditeur classique.

La compétence Classic Themes fournit des conseils sur :

Travay ak fichye template PHP ak hook yo
Kustomize aparansaj thèm ou atravè Customizer la
Itilize zòn widget ak sidebar
Modify CSS ak devlopman child theme
Konprann iyerihie thèm ak tag template

**Aktive otomatikman lè:** Thèm aktif ou se yon thèm klasik (non-block).

### Kadence Blocks {#kadence-blocks}

**Aplike pou:** Sit ki itilize plugin Kadence Blocks pou konsepsyon avanse baze sou blok.

Sktil Kadence Blocks la bay gid sou:

- Itilizasyon bibliyotè blok avanse Kadence a (Hero, Testimonials, Pricing, elatriye)
- Konfigire tout opsyon ak responsive yo pou blok Kadence
- Bati layout koutim ak blok grid ak container Kadence a
- Entegre blok Kadence ak thèm ou an
- Sèvi ak sistèm konsepsyon ak preset Kadence a

**Aktive otomatikman lè:** Plugin Kadence Blocks la aktif sou sit ou.

### Kadence Theme {#kadence-theme}

**Aplike pou:** Sit ki itilize thèm Kadence pou konsepsyon baze sou blok ak kustomizasyon.

Sktil Kadence Theme la bay gid sou:

- Kustomize thèm Kadence a atravè style global ak theme.json
- Itilizasyon patèn ak template blok inite Kadence a
- Konfigire tout opsyon ak rann Kadence a
- Bati konsepsyon koutim ak sistèm konsepsyon Kadence a
- Entegre Kadence ak plugin ak zouti popilè yo

**Aktive otomatikman lè:** Thèm Kadence la se thèm aktif ou.

## Kijan Sktil Yo Chwazi {#how-skills-are-selected}

Asistan an otomatikman detekte thèm aktif ou ak plugin ki enstale sou chak mesaj. Si yon skil ki konpayi ak thèm a disponib, li pral telechaje nan kontèks asistan an otomatikman. Ou pa bezwen aktive oswa chanje skil yo menm.

### Plizyè Sktil {#multiple-skills}

Si anpil konpetans ak sit ou a (pa egzanp, si ou gen Kadence Blocks ak Kadence Theme aktif), asistan an gen aksè nan tout konpetans ki aplikab epi li ka referans gwovan gidans soti chak.

### Chanje Tema {#switching-themes}

Lè ou chanje tema ki aktif la, konpetans asistan yo disponib otomatikman monte pou mesaj ankò a. Pa egzanp:

1. Ou ap itilize yon tema blòk ak konpetans **Block Themes** active.
2. Ou chanje nan yon tema klasik.
3. Nan mesaj ou answit la, konpetans **Classic Themes** yo pral telechaje otomatikman, epi konpetans **Block Themes** pa gen disponib ankò.

## Itilize Konpetans ki Konpayi ak Tema a (Theme-Aware Skills) {#using-theme-aware-skills}

Pou itilize yon konpetans ki konpayi ak tema a, senpleman dekri sa ou vle fè nan entèfas chat la. Asistan an ap referans gidans konpetans ki apwopriye otomatikman.

### Egzanp Prompt yo {#example-prompts}

**Pou Block Themes:**
> "Kreye yon seksyon hero ak yon imaj fon ak tèks santre itilize modèl blòk."

**Pou Classic Themes:**
> "Ajoute yon zòn widget koutim nan sidebar a itilize yon child theme."

**Pou Kadence Blocks:**
> "Bati yon seksyon testimonial itilize blòk Kadence Testimonials la."

**Pou Kadence Theme:**
> "Koutimize layout en-tèt ak estil menu navigasyon an."

Asistan an ap bay gidans espesifik pou tema a epi egzanp kòd ki adapte nan tema ak plugin ou yo aktif.

:::note
Konpetans ki konpayi ak tema a disponib otomatikman nan Superdav AI Agent v1.10.0 ak dènye vèsyon yo. Pa gen okenn etap preparasyon oswa konfigirasyon ki bezwen.
:::
