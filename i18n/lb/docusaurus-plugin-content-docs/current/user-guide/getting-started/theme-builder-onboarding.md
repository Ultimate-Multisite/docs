---
title: Onboarding-Flow vom Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 füeiert en gefüehrt **Theme Builder onboarding flow** i, wo dir hilft, e eigene block-theme während dinere erschte Irichtig z'erstelle. Das ersetzt de alte Site Builder Modus dur en flexiblere, agent-unterstützte Aasatz.

## Was isch de Theme Builder Onboarding Flow?

De Theme Builder onboarding flow isch en interaktive Setup Wizard, wo:

- Dir dur Designentschede führt (Farbe, Typografie, Layout)
- Dini visuelle Identitätspräferenze vo dinere Site ufzeichnet
- E eigene block-theme generiert, wo genau uf dini Bedürfnis passt
- S'Theme automatisch aktiviert, wenns fertig isch

De Flow wird dur de **Setup Assistant agent** aagtriibe, wo klärendi Froge stellt und dis Theme Stück für Stück baut.

## Start vom Theme Builder Onboarding

### Ersti Irichtig (First-Run Setup)

Wenn du Superdav AI Agent zum erschte Mal ufere neui WordPress-Installation startisch, gsehsch du:

```
Willkomme bi Superdav AI Agent!

Was wetsch du mache?
1. E eigene Theme baue (Theme Builder)
2. Es bestehends Theme bruche
3. D'Irichtig für jetz überspringe
```

Wähl **"Eigene Theme baue"** us, um de Theme Builder onboarding flow z'starte.

### Manuell Aktivierä

Du chasch de Theme Builder onboarding au zu jedere Ziit starte, indem du afragisch:

```
"Start the Theme Builder onboarding"
```

oder

```
"Help me create a custom theme"
```

## D Onboarding Schritt

### Schritt 1: Moduswahl (Mode Selection)

De Setup Assistant agent frogt nach dinere Präferenz:

```
Wie wetsch du dis Theme baue?
- Gefüehrt (Ich stell Froge und bau's für dich)
- Hands-on (Ich zeig dir Optionne und du entscheidisch)
```

**Gefüehrti Modus** isch empfohle für die meiste Benutzer; de Agent macht Designempfehlige basierend uf dinere Branche und dine Ziel.

### Schritt 2: Site-Spezifikation (Site Specification)

Dir wird nach dinere Site frogt:

- **Sitezweck**: E-Commerce, Blog, Portfolio, SaaS usw.
- **Zielgruppe**: Wer sind dini Bsuecher?
- **Markenfarben**: Primär- und Sekundärfarben (oder "Ich bin mir unsicher")
- **Ton**: Professionell, kreativ, verspielt, minimalistisch usw.

Dës Informatione werded in dim **site_brief** Gedächtnis gspeicheret, wo d'Agenten i zukünftige Sitzige referenziere.

### Schritt 3: Design System Entscheidigä

De Agent führt dich dur d'Wahl vo Design Tokens (Design-Element) dure:

- **Typografie**: Schriftfamilie (serif, sans-serif, monospace) und Grössi-Skala
- **Farbpalette**: Primär-, Sekundär-, Akzent- und neutrale Farbe
- **Abstand (Spacing)**: Kompakt, normal oder grosszügig Layouts
- **Bewegig (Motion)**: Animatione und Übergäng (falls gwünscht)

### Schritt 4: Theme Generierig

De Setup Assistant Agent baut din benutzerdefinierten Block Theme mit:

- `theme.json` enthaltend alli dini Design Tokens
- Block-Vorlage für üblich Layouts (Homepage, Blog, Kontakt)
- Benutzerdefinierti Block-Stile, wo zu dim Design System passe
- Theme-Metadate und WordPress-Unterstützigserklärige

### Schritt 5: Aktivierig und Überprüefig

De Theme wird automatisch aktiviert, und du gsehsch folgendes:

```
✓ Din benutzerdefinierte Theme isch jetzt live!
  Theme Name: [Din Site Name] Theme
  Farbe: [Primär] / [Sekundär]
  Typografie: [Schriftfamilie]

  Besuech din Site, um s'neui Design z'gseh.
```

Du chasch denn dini Site bsueche, um z'überprüefe, ob de Theme korrekt aazigt wird.

## Site-Spezifikation und site_brief Gedächtnis

Während em Onboarding fangt de Agent d'Spezifikation vo dinere Site i ere **site_brief** Gedächtniskategorie uf. Dës umfasst:

- Sitezweck und Ziel
- Zielgruppe
- Markenfarben und Ton
- Designvorzogeber
- Inhaltsstruktur

### Warum site_brief wichtig isch

In zukünftige Sitzige referenziere d'Agenten din site_brief, um:

### Iri Dir Ihrem Site-Brief aafange

Sie chönne de Agent froge:

```
"Zeig mir mini Site-Brief"
```

oder

```
"Was weiss du über mini Site?"
```

De Agent zeigt dir dini gspeicherte Site-Spezifikation aa.

## Customizing Nach em Onboarding

Nachdem d'Onboarding vom Theme Builder fertig isch, chasch du:

### D'Design System Aesthetics Skill bruche

Bitte um Designverbesserige:

```
"D'Typografie modernisiere"
```

oder

```
"D'Farbpalette wärmer mache"
```

D'**Design System Aesthetics skill** führt dich dur gezielti Design-Updates.

### theme.json Direkt bearbeite

Für fortgschritteni Benutzer chasch du `/wp-content/themes/[theme-name]/theme.json` bearbeite, um z'passe:

- Color tokens
- Typography scales
- Spacing values
- Border und shadow Definitionen

### Custom Block Templates erstelle

Bruche de WordPress block editor, um benutzerdefinierti Vorlage für:

- Homepage Layouts
- Blog Post Pages
- Produktseiten
- Kontaktformulare z'erstelle

## Verglich: Alt vs. Neu Onboarding

| Merkmal | Site Builder (Alt) | Theme Builder (Neu) |
|---|---|---|
| Setup Methode | Wizard-basierti Formular | Agent-gfüehrti Konversation |
| Theme Generierig | Begrenzte Vorlage | Custom Scaffolding |
| Design Tokens | Manuelle Eingabe | Gfüehrti Entscheidigä |
| Flexibilität | Feschti Optionä | Anpassbar |
| Zuekunft Updates | Nicht referenziert | In site_brief gspeichert |

## Fehlerbehebung

**De Onboarding-Flow isch nöd fertig worde**
- Flow neu starte: "Start the Theme Builder onboarding"
- Prüef, ob dini WordPress Installation aktuell isch
- Überprüef, ob de Setup Assistant Agent aktiviert isch

**Mini Site-Brief wird nöd brucht**
- Prüef, ob de Agent Zuegang zu em Gedächtnis het
- Frog de Agent, "mi mini Site-Brief abzuroumn" (recall my site brief)
- Check, ob s'Gedächtnis in dine Iistellige aktiviert isch

**De generierti Theme passt nöd zu mine Vorzoge**
- Bruuch d'Fähigkeit Design System Aesthetics, um de Theme z'verbessere
- Frog de Agent, "de Theme mit [spezifische Änderige] neu z'generiere" (regenerate the theme with [specific changes])
- Edit di `theme.json` direkt für präzisi Kontroll

## Nächsti Schritt

Nachdem du s'Theme Builder Onboarding fertig hesch:

1. **Verifizier dini Site**: Besuech dini Site, um s'neui Theme z'gseh
2. **Design verfeinere**: Bruuch d'Fähigkeit Design System Aesthetics für Anpassige
3. **Inhalt dezuefüege**: Fang a, de Inhalt vo dinere Site ufzbaue
4. **Fähigkeite erkunde**: Lerne meh über anderi Agent-Fähigkeite wie `scaffold-block-theme` und `activate-theme`
