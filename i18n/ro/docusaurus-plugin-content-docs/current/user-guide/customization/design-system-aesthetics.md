---
title: Abilități în Estetica Sistemului de Design
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Skill de Estetică a Sistemului de Design

**Skill-ul de Estetică a Sistemului de Design** este o metodă ghidată pentru rafinarea identității vizuale a site-ului tău. Te ajută să iei decizii consistente privind tipografia, culoarea, spațierea și elementele de mișcare (motion tokens) care definesc sistemul tău de design.

## Ce este Estetica Sistemului de Design?

Estetica Sistemului de Design este o competență structurată care acoperă:

- **Tipografia**: Familiile de fonturi, dimensiunile, greutățile și înălțimile de linie
- **Culori**: Paletele de culori primare, secundare, accent și neutre
- **Spațiere**: Scale de padding, margin și gap
- **Borduri**: Token-uri de rază și lățime
- **Umbre**: Token-uri de elevație și adâncime
- **Mișcare (Motion)**: Animații și tranziții

Aceste decizii sunt înregistrate în fișierul `theme.json` al temei tale, creând un sistem vizual coeziv.

## De ce să folosești Estetica Sistemului de Design?

### Consistență

Un sistem de design asigură că:

- Toți textul folosește aceeași scală de tipografie
- Culorile sunt folosite în mod consistent pe tot site-ul
- Spațierea urmează un model predictibil
- Animațiile par unificate

### Eficiență

În loc să iei decizii de design pagină cu pagină, tu:

- Definești token-uri o singură dată
- Le aplici oriunde
- Le actualizezi global schimbând o singură valoare

### Flexibilitate

Poți:

- Ajusta întregul sistem de design rapid
- Experimenta cu estetici diferite
- Menține consistența mărcii în timp ce evoluezi

## Declanșarea Skill-ului de Estetică a Sistemului de Design

### Activare Manuală

Poți iniția skill-ul în orice moment:

```
"Help me refine my design system"
```

sau

```
"Let's improve my site's aesthetics"
```

sau

```
"Guide me through design system decisions"
```

### Sugestii Automate

Agentii pot sugera utilizarea skill-ului atunci când:

- Cer modificări de design
- Soliciți o re-creare "modernă" sau "profesionistă"
- Doriți să îmbunătățiți consistența vizuală
- Vă pregătiți să lansezi site-ul

## Procesul de Estetică a Sistemului de Design

### Pasul 1: Tipografia

Agentul te întreabă despre alegerile tale de fonturi:

```
What's your preferred typography style?
- Serif (traditional, elegant)
- Sans-serif (modern, clean)
- Monospace (technical, code-focused)

For your heading font:
- Do you want a distinct heading font, or use the same as body text?
- Preference: bold, elegant, playful, minimal?

For your body font:
- Readability is key. Do you prefer:
  - Larger, more spacious text
  - Compact, efficient text
  - Standard sizing
```

Apoi, agentul definește:

- **Fontul pentru titluri (Heading font)**: Fontul principal pentru titluri și anteturi
- **Fontul pentru corp (Body font)**: Fontul pentru paragrafe și textul principal
- **Fontul monospace**: Fontul pentru cod și conținut tehnic
- **Scala de dimensiuni (Size scale)**: Dimensiuni predefinite (small, base, large, XL, etc.)
- **Scala de greutăți (Weight scale)**: Greutățile fonturilor (regular, medium, bold, etc.)
- **Înălțimea de linie (Line height)**: Spațierea dintre linii pentru o citire mai ușoară

### Pasul 2: Paleta de Culori

```
Let's define your color palette.

Primary color (your brand color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Secondary color (supporting color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Accent color (highlights and CTAs):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Neutral palette (grays for text, borders, backgrounds):
- Light: [color]
- Medium: [color]
- Dark: [color]
```

Agentul creează o paletă completă care include:

- Culori primare, secundare și accent
- Griuri neutre (deschis, mediu, închis)
- Culori semantice (success, warning, error)
- Stări de hover și active

### Pasul 3: Spațiere

```
How much breathing room do you want?

Spacing scale preference:
- Compact (tight, efficient layouts)
- Normal (balanced spacing)
- Spacious (generous whitespace)

This affects:
- Padding inside buttons and cards
- Margins between sections
- Gap between grid items
```

Agentul definește token-uri de spațiere:

- Unitatea de bază (de obicei 4px sau 8px)
- Scala: xs, sm, md, lg, xl, 2xl
- Valorile specifice pentru padding, margin, gap

### Pasul 4: Borduri și Umbre

```
Visual depth and definition:

Border radius preference:
- Sharp (no rounding)
- Subtle (small radius)
- Rounded (medium radius)
- Very rounded (large radius)

Shadow depth:
- Flat (no shadows)
- Subtle (light shadows)
- Pronounced (strong shadows)
```

Agentul creează:

- Token-uri de rază a bordurilor (pentru butoane, carduri, input-uri)
- Token-uri de umbre pentru nivelurile de elevație
- Token-uri de lățime a bordurilor

### Pasul 5: Mișcare și Animație

```
How should your site feel when interactive?

Animation preference:
- Minimal (no animations)
- Subtle (gentle transitions)
- Playful (noticeable animations)

Specific animations:
- Page transitions: fade, slide, or none?
- Button hover: scale, color change, or both?
- Loading states: spinner, skeleton, or progress bar?
```

Agentul definește:

- Duratele tranzițiilor (rapid, normal, lent)
- Funcțiile de easing (ease-in, ease-out, ease-in-out)
- Keyframe-uri de animație pentru interacțiunile comune

## Aplicarea Esteticii Sistemului de Design

### Aplicare Automată

După ce finalizezi skill-ul, agentul:

1. Actualizează `theme.json` în tema ta cu toate token-urile
2. Aplică sistemul de design temei active
3. Regeneră stilurile blocurilor pentru a se potrivi noului sistem
4. Activează tema actualizată

### Aplicare Manuală

Poți edita și tu direct `theme.json`:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Vizualizarea Sistemului Tău de Design

### Roagă Agentul

```
"Show me my design system"
```

sau

```
"What are my current design tokens?"
```

Agentul îți va afișa tipografia, culorile, spațierea și alte token-uri.

### Vizualizarea theme.json

Deschide `/wp-content/themes/[theme-name]/theme.json` într-un editor de text pentru a vedea definițiile brute ale token-urilor.

## Actualizarea Sistemului Tău de Design

### Actualizări Rapide

Roagă agentul pentru modificări specifice:

```
"Make the primary color darker"
```

sau

```
"Increase the spacing scale by 20%"
```

sau

```
"Change the heading font to a serif"
```

### Re-design Complet

Rulează din nou skill-ul de Estetică a Sistemului de Design:

```
"Let's redesign my entire design system"
```

Acest lucru te va ghida din nou prin toate deciziile, începând cu valorile tale actuale.

### Actualizări Parțiale

Actualizează aspecte specifice:

```
"Just update the color palette, keep everything else"
```

## Cele Mai Bune Practici pentru Sistemul de Design

### Consistență

- Folosește aceleași token-uri oriunde
- Nu crea culori sau dimensiuni de o singură utilizare
- Referințează token-urile în loc să codifici valorile în mod rigid

### Nomenclatură

Folosește nume clare, semantice:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Scalabilitate

Proiectează sistemul tău pentru a scala:

- Folosește unități relative (rem, em) în loc de pixeli
- Creează scale (xs, sm, md, lg, xl) în loc de valori arbitrare
- Planifică adăugiri viitoare

### Documentare

Documentează sistemul tău de design:

- De ce ai ales anumite culori
- Când să folosești fiecare token
- Excepții și cazuri de margine

## Modele Comune de Sistem de Design

### Minimalist Modern

- Tipografie sans-serif (Inter, Helvetica)
- Paletă de culori limitată (2-3 culori)
- Spațiere generoasă
- Umbre subtile
- Animații fluide și rapide

### Cald și Prietenos

- Amestec de serif și sans-serif
- Paletă de culori calde (portocale, griuri calde)
- Colțuri rotunjite
- Umbre blânde
- Animații jucăușe

### Corporativ Profesional

- Sans-serif curat (Roboto, Open Sans)
- Paletă neutre cu o culoare accent
- Spațiere structurată
- Umbre minimale
- Tranziții subtile

### Creativ și Audacious

- Tipografie distinctivă
- Paletă de culori îndrăzneață
- Spațiere variată
- Umbre puternice
- Animații vizibile

## Depanare

**Modificările mele de design nu sunt vizibile**
- Șterge cache-ul browserului
- Reconstruiește site-ul dacă folosești un generator static
- Verifică că `theme.json` este un JSON valid
- Verifică dacă tema este activă

**Culorile arată diferit pe pagini diferite**
- Verifică CSS-ul conflictual în plugin-uri
- Verifică dacă toate paginile folosesc aceeași temă
- Șterge orice plugin de caching

**Vreau să revin la un sistem de design anterior**
- Roagă agentul: "Show me my design system history"
- Editează manual `theme.json` pentru valorile anterioare
- Rulează skill-ul cu alegeri diferite

## Pași Următori

După ce ai definit sistemul tău de design:

1. **Revizuiește site-ul**: Vizitează site-ul pentru a vedea noul design
2. **Rafinează mai departe**: Efectuează ajustări folosind din nou skill-ul
3. **Creează șabloane**: Construiește șabloane de blocuri personalizate folosind token-urile de design
4. **Documentează**: Distribuie sistemul tău de design membrilor echipei
