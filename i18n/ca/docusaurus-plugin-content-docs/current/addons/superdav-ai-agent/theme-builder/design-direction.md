---
title: Direcció de disseny
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Direcció de Disseny {#design-direction}

El pas de la **Direcció de Disseny** et permet revisar, refinar i finalitzar el disseny visual del teu tema abans que Theme Builder generi el tema complet.

## Resum {#overview}

Després d'acabar amb l'Entrevista de Descobriment, Theme Builder t'apresenta la direcció del teu disseny amb **previsualització en desktop i mòbil**. Això et permet veure exactament com tindrà la teva màquina visual en diferents dispositius abans d'comprometir-te amb el tema.

## Components de Direcció de Disseny {#design-direction-components}

### 1. Paleta de Colors {#1-color-palette}

El esquema de colors del teu tema, inclou:

- **Color primari** — color principal de la marca que es utilitza per botons, enllaços i accents
- **Color secundari** — color complementari per a aportar varietat
- **Color d'accent** — color destacat per a elements importants
- **Colors neutrals** — grises i blancs per als fons i el text
- **Color de text** — color de text principal per a la legibilitat

### 2. Tipografia {#2-typography}

Seleccions de fonts per:

- **Font de títol (Heading font)** — utilitzada per els títols de pàgina i les ceps de secció
- **Font del corps (Body font)** — utilitzada per al text dels paragrafes i el contingut
- **Sizes de font** — mida responsiva per a diferents dimensions d'écran
- **Altura de línea (Line height)** — espai entre línies per a la legibilitat
- **Pes de font (Font weights)** — variacions negre, regular i lleuger

### 3. Disposició i Espaciament {#3-layout-and-spacing}

- **Amplitud del contèiner** — amplat max per al contingut
- **Padding i margins** — espai al voltant dels elements
- **Sistema de grilla (Grid system)** — disposició de colones per a disseny responsiv
- **Espai entre components** — distància entre els elements d'interfície de l'usuari (UI)

### 4. Elements Visuals {#4-visual-elements}

- **Estils de botons** — dissenys de botons primari, secundari i terciari
- **Dissenys de cards** — disposicions per a blocs de contingut
- **Il·lustracions (Icons)** — estil i mida d'il·lustració
- **Bordes i ombres** — profunditat visual subtil
- **Efectes al passar el mouse (Hover effects)** — estilització de l'estat interactiu

## Previsualització del Render {#preview-rendering}

### Previsualització per a Desktop {#desktop-preview}

La previsualització per a desktop mostra el teu disseny amb màxima amplatza (normalment 1200px o més):

- Menú de navegació complet
- Disposició completa amb totes les col·lectives
- Tipografia i espaciament grans
- Tots els elements visuals en mida completa

### Previsualització per a Mobile {#mobile-preview}

La previsualització per a mobile mostra el teu disseny al format mòbil (normalment 375px):

- Navegació responsiva (menú hamburger)
- Disposició de una sola columna
- Tipografia i espaciament ajustats
- Mires de botons amenedades per a toques

### Punts de ruptura responsius (Responsive Breakpoints) {#responsive-breakpoints}

El Theme Builder rendera les previsualitzacions en aquests punts de ruptura:

| Dispositiv | Amplatza | Previsualització |
|--------|-------|---------|
| **Mobile** | 375px | Telèfon vertical |
| **Tablet** | 768px | Tablet paisatge |
| **Desktop** | 1200px | Desktop de màxima amplatza |
| **Large Desktop** | 1920px | Pantalla ultra-ampla |

## Refinant el teu disseny {#refining-your-design}

### Fes Ajustaments {#making-adjustments}

 Pots refinar la direcció del teu disseny fent servir:

1. **Ajustar colors** — canvia qualsevol color de la paleta
2. **Canviar fonts** — selecciona tipografies diferents
3. **Modificar espaciament** — ajusta el padding i els margins
4. **Actualitzar disposició** — canvia amplatzes dels conteneurs i col·lectives de la grilla (grid columns)
5. **Personalitzar elements** — modifica estils de botons, dissenys de cards, etc.

### Actualitzacions de previsualització {#preview-updates}

Les modificacions es reflecten en temps real:

- La previsualització de desktop s'actualitza immediatament
- La previsualització mòbil s'actualitza immediatament
- S'actualitzen tots els breakpoints responsius
- Pots passar entre les previsualitzacions per verificar els canvis

### Vista de Comparació {#comparison-view}

Compara la teva direcció de disseny amb:

- **Disseny original** — ve que ho ha canviat
- **Dissenyos dels competidors** — compara amb llocs d'inspiració
- **Versions anteriors** — torna a direccions de disseny més antigues

## Aprovació de la Direcció de Disseny {#design-direction-approval}

Una vegada estiguis satisfet amb el teu disseny:

1. **Revisa les dues previsualitzacions** — verifica que desktop i mòbil tenen una bona aparença
2. **Comprova tots els colors** — assegura't del contrast i l'accessibilitat
3. **Prova la tipografia** — verifica la legibilitat a totes les talles
4. **Confirma el pla** — comprueba el espaciament i l'alineació
5. **Aprova el disseny** — procedeix a la generació del tema

## Pròximos Passos {#next-steps}

Després d'aprovar la teva direcció de disseny:

1. El Theme Builder genera el teu tema complet
2. El tema es instala al teu site WordPress
3. Pots personalitzar més utilitzant el customizer de WordPress
4. Procedeix a [Hospitality Menus](./hospitality-menus.md) o altres funcions

## Bones Pràctiques {#best-practices}

- **Prova en dispositius reals** — utilitza telefons i tabletes reals si és possible
- **Comprova la legibilitat** — assegura't que el text sigui llegible a totes les talles
- **Verifica el contrast** — utilitza [Validate Palette Contrast](../abilities/validate-palette-contrast.md) per l'accessibilitat
- **Considera el rendiment** — optimitza les imatges i fonts per la velocitat
- **Planifica el contingut** — assegura't que el pla funciona amb el teu contingut real

## Solucionar Problemas {#troubleshooting}

### La vista previa no se actualiza {#preview-not-updating}

- Actualitza la pàgina (Refresh the page).
- Cleia la cache del navegador (Clear browser cache).
- Prova amb un navegadore diferent (Try a different browser).
- Comprova la connexió a internet (Check internet connection).

### Els colors semblen diferents {#colors-look-different}

- Comprova les configuracions de color del monitor (Check monitor color settings).
- Prova amb dispositius diferents (Try on different devices).
- Verifica el contrast de color amb eines d'accessibilitat (Verify color contrast with accessibility tools).
- Considera simuladors de ceguera al color (Consider color blindness simulators).

### Problemes de tipografia {#typography-issues}

- Comprova que els fitxers de font estan carregats (Verify font files are loading).
- Comprova el size de la font en diferents breakpoints (Check font size at different breakpoints).
- Testa amb contingut real (Test with actual content).
- Considera la longitud de la línia per a la legibilitat (Consider line length for readability).

## Documentació Relacionada {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — recopila informació de disseny
- [Hospitality Menus](./hospitality-menus.md) — crea pàgines de menús estructurades
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — comprueba l'accessibilitat del color
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — crea logos personalitzats
