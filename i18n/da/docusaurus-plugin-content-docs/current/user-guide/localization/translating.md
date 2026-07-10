---
title: Oversættelse af Ultimate Multisite
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# Oversættelse af Ultimate Multisite {#translating-ultimate-multisite}

Ultimate Multisite er udviklet på engelsk, men plugin'et kan fuldt oversættes, og vi ønsker aktivt velkommen til bidrag med oversættelser.

## Kerne-plugin Oversættelser {#core-plugin-translations}

Kerne-Ultimate Multisite plugin oversættes via den officielle **WordPress.org oversættelsesplatform**:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

Dette er det standard WordPress fællesskabssystem til oversættelser. Når oversættelser når en tilstrækkelig godkendelsestærskel, bliver de automatisk distribueret til alle Ultimate Multisite brugere gennem WordPress plugin opdateringer.

**Vi har brug for din hjælp!** Hvis du taler et sprog andet end engelsk, så overvej at bidrage med oversættelser. Selv at oversætte et par strenge hjælper. For at komme i gang:

1. Besøg [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)
2. Vælg dit sprog
3. Klik på "Contribute Translation" (Bidrag med oversættelse)
4. Du skal bruge en gratis WordPress.org konto

Hvis du gerne vil blive redaktør for oversættelser til dit sprog (evne til at godkende oversættelser), så kontakt via [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions).

## Addon Oversættelser {#addon-translations}

Addon plugins oversættes separat på:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

Addon-oversættelserne er i øjeblikket AI-genererede som udgangspunkt. De dækker alle understøttede sprog, men kan indeholde kluntet formulering eller unøjagtigheder. Vi ønsker menneskelige oversættere velkommen til at gennemgå dem og foreslå forbedringer for at gøre dem mere naturlige og præcise.

## Lokale Oversættelser {#local-translations}

Hvis du foretrækker at lave oversættelser lokalt til dit eget projekt i stedet for at bidrage upstream, er der to muligheder:

### Brug af Poedit {#using-poedit}

Du kan bruge desktop-applikationen **[Poedit](https://poedit.net)** til at oversætte `.pot` filen:

1. Download Poedit fra [poedit.net](https://poedit.net)
2. Åbn den `.pot` fil fra `wp-content/plugins/ultimate-multisite/lang/`
3. Oversæt strengene i Poedit-grænsefladen
4. Gem -- Poedit genererer `.po` og `.mo` filer
5. Placer de resulterende filer i `lang`-mappen

### Brug af Loco Translate {#using-loco-translate}

WordPress pluginet **[Loco Translate](https://wordpress.org/plugins/loco-translate/)** lader dig oversætte direkte fra adminpanelet uden brug af desktop-værktøjer. Det håndterer oprettelse og kompilering af oversættelsesfiler for dig.
