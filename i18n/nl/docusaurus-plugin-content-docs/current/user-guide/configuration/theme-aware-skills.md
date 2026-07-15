---
title: Thema-bewuste vaardigheden
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills

Superdav AI Agent v1.10.0 bevat vier nieuwe ingebouwde, theme-aware skills die automatisch aanpassen aan het actieve WordPress-thema. Deze skills bieden gespecialiseerde begeleiding en functionaliteiten die zijn afgestemd op de architectuur en functies van uw thema.

## Wat zijn Theme-Aware Skills? {#what-are-theme-aware-skills}

Theme-aware skills zijn vooraf geconfigureerde kennisbanken en toolsets die de AI-assistent automatisch selecteert op basis van het WordPress-thema dat momenteel actief is op uw site. Wanneer u van thema wisselt, updaten de beschikbare skills van de assistent automatisch — zonder dat u handmatige configuratie nodig heeft.

Elke skill bevat:

- **Thema-specifieke documentatie** — begeleiding over het gebruiken en aanpassen van het thema
- **Block- en pattern-referenties** — beschikbare blocks, patterns en designopties
- **Aanpassingsvoorbeelden** — codefragmenten en configuratiepatronen voor veelvoorkomende taken
- **Best practices** — aanbevelingen voor de architectuur en workflow van het thema

## Beschikbare Theme-Aware Skills {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Geschikt voor:** Thema's die de block-gebaseerde (Full Site Editing) architectuur van WordPress gebruiken.

De Block Themes skill biedt begeleiding over:

- Het creëren en bewerken van templates met de block editor
- Werken met block patterns en herbruikbare blocks
- Het aanpassen van globale stijlen en theme.json-instellingen
- Het gebruiken van theme blocks en variaties
- Het bouwen van aangepaste block patterns voor uw site

**Automatisch geactiveerd wanneer:** Uw actieve thema een block theme is (ondersteunt de `block-templates` functie).

### Classic Themes {#classic-themes}

**Geschikt voor:** Traditionele WordPress-thema's die PHP-templates en de klassieke editor gebruiken.

De Classic Themes skill biedt begeleiding over:

- Werken met PHP template bestanden en hooks
- Het aanpassen van de thema-uitstraling via de Customizer
- Het gebruiken van widget areas en sidebars
- Het wijzigen van CSS en child theme ontwikkeling
- Het begrijpen van de themahiërarchie en template tags

**Automatisch geactiveerd wanneer:** Uw actieve thema een klassiek (niet-block) thema is.

### Kadence Blocks {#kadence-blocks}

**Geschikt voor:** Sites die het Kadence Blocks plugin gebruiken voor geavanceerd block-gebaseerd design.

De Kadence Blocks skill biedt begeleiding over:

- Het gebruiken van Kadence's geavanceerde block library (Hero, Testimonials, Pricing, etc.)
- Het configureren van Kadence block-instellingen en responsive opties
- Het bouwen van aangepaste lay-outs met Kadence's grid- en containerblocks
- Het integreren van Kadence blocks met uw thema
- Het benutten van Kadence's design system en presets

**Automatisch geactiveerd wanneer:** Het Kadence Blocks plugin actief is op uw site.

### Kadence Theme {#kadence-theme}

**Geschikt voor:** Sites die het Kadence thema gebruiken voor block-gebaseerd design en aanpassing.

De Kadence Theme skill biedt begeleiding over:

- Het aanpassen van het Kadence thema via globale stijlen en theme.json
- Het gebruiken van Kadence's ingebouwde block patterns en templates
- Het configureren van Kadence thema-instellingen en opties
- Het bouwen van aangepaste designs met Kadence's design system
- Het integreren van Kadence met populaire plugins en tools

**Automatisch geactiveerd wanneer:** Het Kadence thema uw actieve thema is.

## Hoe Skills Worden Geselecteerd {#how-skills-are-selected}

De assistent detecteert automatisch uw actieve thema en geïnstalleerde plugins bij elke bericht. Als er een overeenkomstige theme-aware skill beschikbaar is, wordt deze automatisch geladen in de context van de assistent. U hoeft de skills dus niet handmatig in te schakelen of te wisselen.

### Meerdere Skills {#multiple-skills}

Als meerdere skills van toepassing zijn op uw site (bijvoorbeeld als u zowel Kadence Blocks als Kadence Theme actief heeft), heeft de assistent toegang tot alle toepasselijke skills en kan deze begeleiding uit elk ervan halen.

### Thema's Wisselen {#switching-themes}

Wanneer u van uw actieve thema wisselt, updaten de beschikbare skills van de assistent automatisch bij het volgende bericht. Bijvoorbeeld:

1. U gebruikt een block theme met de **Block Themes** skill actief.
2. U schakelt over naar een klassiek thema.
3. Bij uw volgende bericht wordt de **Classic Themes** skill automatisch geladen, en de **Block Themes** skill is niet langer beschikbaar.

## Gebruik van Theme-Aware Skills {#using-theme-aware-skills}

Om een theme-aware skill te benutten, beschrijft u simpelweg wat u wilt doen in de chatinterface. De assistent verwijst dan automatisch naar de geschikte begeleiding van de skill.

### Voorbeeld Prompts {#example-prompts}

**Voor Block Themes:**
> "Maak een hero section met een achtergrondafbeelding en gecentreerde tekst met behulp van block patterns."

**Voor Classic Themes:**
> "Voeg een aangepast widget area toe aan de sidebar met behulp van een child theme."

**Voor Kadence Blocks:**
> "Bouw een testimonials sectie met behulp van de Kadence Testimonials block."

**Voor Kadence Theme:**
> "Pas de header layout en de styling van het navigatiemenu aan."

De assistent geeft thema-specifieke begeleiding en codevoorbeelden die zijn afgestemd op uw actieve thema en plugins.

:::note
Theme-aware skills zijn automatisch beschikbaar in Superdav AI Agent v1.10.0 en later. Er is geen aanvullende setup of configuratie nodig.
:::
