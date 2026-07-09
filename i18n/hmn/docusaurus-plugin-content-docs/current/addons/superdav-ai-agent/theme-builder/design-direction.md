---
title: Kev taw qhia tsim qauv
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Kev Coj Qhia Tsim {#design-direction}

Kauj ruam **Kev Coj Qhia Tsim** cia koj tshuaj xyuas, kho kom zoo, thiab ua kom tiav koj theme qhov kev tsim pom kev ua ntej Theme Builder tsim tawm tag nrho theme.

## Kev Saib Xyuas Dav Dav {#overview}

Tom qab ua tiav Discovery Interview, Theme Builder yuav qhia koj qhov kev coj qhia tsim nrog **desktop thiab mobile preview rendering**. Qhov no cia koj pom meej tias koj qhov kev tsim yuav zoo li cas rau ntau hom khoom siv ua ntej koj txiav txim siab siv theme.

## Cov Ntu Ntawm Kev Coj Qhia Tsim {#design-direction-components}

### 1. Pawg Xim {#1-color-palette}

Koj theme cov xim, suav nrog:

- **Xim tseem ceeb** — xim hom tseem ceeb siv rau pob nyem, links, thiab cov ntsiab uas ua kom pom
- **Xim thib ob** — xim uas phim ntxiv kom muaj ntau hom
- **Xim accent** — xim qhia kom pom rau cov ntsiab tseem ceeb
- **Xim nruab nrab** — xim txho thiab dawb rau keeb kwm thiab ntawv
- **Xim ntawv** — xim ntawv tseem ceeb kom nyeem tau yooj yim

### 2. Hom Ntawv {#2-typography}

Kev xaiv font rau:

- **Font rau headings** — siv rau lub npe nplooj ntawv thiab section headers
- **Font rau body** — siv rau kab lus thiab cov ntsiab lus
- **Qhov loj font** — qhov loj uas teb raws ntau qhov screen sizes
- **Line height** — qhov nrug ntawm kab kom nyeem tau yooj yim
- **Font weights** — hom bold, regular, thiab light

### 3. Layout thiab Spacing {#3-layout-and-spacing}

- **Dav container** — qhov dav tshaj plaws rau cov ntsiab lus
- **Padding thiab margins** — qhov chaw ncig cov ntsiab
- **Grid system** — column layout rau responsive design
- **Component spacing** — qhov nrug ntawm UI elements

### 4. Cov Ntsiab Pom Kev {#4-visual-elements}

- **Button styles** — kev tsim pob nyem primary, secondary, thiab tertiary
- **Card designs** — layout rau content blocks
- **Icons** — hom icon thiab qhov loj
- **Borders thiab shadows** — qhov tob pom kev maj mam
- **Hover effects** — styling rau interactive state

## Preview Rendering {#preview-rendering}

### Desktop Preview {#desktop-preview}

Desktop preview qhia koj qhov kev tsim ntawm qhov dav puv (feem ntau 1200px lossis dav dua):

- Navigation menu puv
- Layout tiav nrog txhua columns
- Typography thiab spacing loj
- Txhua visual elements nyob rau qhov loj puv

### Mobile Preview {#mobile-preview}

Mobile preview qhia koj qhov kev tsim ntawm mobile width (feem ntau 375px):

- Responsive navigation (hamburger menu)
- Layout ib column
- Typography thiab spacing uas kho lawm
- Qhov loj pob nyem uas kov tau yooj yim

### Responsive Breakpoints {#responsive-breakpoints}

Theme Builder render previews ntawm cov breakpoints no:

| Khoom Siv | Dav | Preview |
|--------|-------|---------|
| **Mobile** | 375px | Xov tooj portrait |
| **Tablet** | 768px | Tablet landscape |
| **Desktop** | 1200px | Desktop dav puv |
| **Large Desktop** | 1920px | Zaub ultra-wide |

## Kho Koj Qhov Kev Tsim Kom Zoo {#refining-your-design}

### Ua Kev Kho {#making-adjustments}

Koj kho tau koj qhov kev coj qhia tsim los ntawm:

1. **Kho xim** — hloov txhua xim hauv palette
2. **Hloov fonts** — xaiv typefaces sib txawv
3. **Kho spacing** — kho padding thiab margins
4. **Hloov layout** — hloov container widths thiab grid columns
5. **Kho elements raws li xav tau** — kho button styles, card designs, thiab lwm yam.

### Preview Updates {#preview-updates}

Kev hloov yuav tshwm sim tam sim ntawd:

- Desktop preview hloov tshiab tam sim ntawd
- Mobile preview hloov tshiab tam sim ntawd
- Txhua responsive breakpoints raug hloov tshiab
- Koj hloov tau ntawm previews los xyuas kev hloov

### Kev Saib Sib Piv {#comparison-view}

Sib piv koj qhov kev coj qhia tsim nrog:

- **Kev tsim qub** — saib qhov uas hloov lawm
- **Kev tsim ntawm competitors** — sib piv nrog cov sites uas muab kev tshoov siab
- **Versions yav dhau los** — rov qab mus rau kev coj qhia tsim ua ntej

## Kev Pom Zoo Rau Kev Coj Qhia Tsim {#design-direction-approval}

Thaum koj txaus siab rau koj qhov kev tsim lawm:

1. **Tshuaj xyuas ob preview** — xyuas kom desktop thiab mobile zoo
2. **Xyuas txhua xim** — xyuas kom muaj contrast thiab accessibility
3. **Kuaj typography** — xyuas kom nyeem tau yooj yim ntawm txhua qhov loj
4. **Paub meej layout** — xyuas spacing thiab alignment
5. **Pom zoo kev tsim** — mus txuas ntxiv rau theme generation

## Kauj Ruam Tom Ntej {#next-steps}

Tom qab pom zoo koj qhov kev coj qhia tsim:

1. Theme Builder tsim koj theme tiav
2. Theme raug nruab rau koj WordPress site
3. Koj kho tau ntxiv siv WordPress customizer
4. Mus rau [Hospitality Menus](./hospitality-menus.md) lossis lwm yam features

## Cov Kev Xyaum Zoo Tshaj {#best-practices}

- **Kuaj ntawm khoom siv tiag** — siv xov tooj thiab tablets tiag yog ua tau
- **Xyuas kev nyeem tau** — xyuas kom ntawv nyeem tau yooj yim ntawm txhua qhov loj
- **Xyuas contrast** — siv [Validate Palette Contrast](../abilities/validate-palette-contrast.md) rau accessibility
- **Xav txog performance** — optimize images thiab fonts kom ceev
- **Npaj rau content** — xyuas kom layout ua haujlwm nrog koj cov ntsiab lus tiag

## Kev Daws Teeb Meem {#troubleshooting}

### Preview Tsis Hloov Tshiab {#preview-not-updating}

- Refresh nplooj ntawv
- Tshem browser cache
- Sim browser txawv
- Xyuas internet connection

### Xim Zoo Li Txawv {#colors-look-different}

- Xyuas monitor color settings
- Sim ntawm khoom siv sib txawv
- Xyuas color contrast nrog accessibility tools
- Xav txog color blindness simulators

### Teeb Meem Typography {#typography-issues}

- Xyuas kom font files thauj tau
- Xyuas font size ntawm breakpoints sib txawv
- Kuaj nrog content tiag
- Xav txog line length kom nyeem tau yooj yim

## Ntaub Ntawv Muaj Feem Xyuam {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — sau design information
- [Hospitality Menus](./hospitality-menus.md) — tsim structured menu pages
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — xyuas color accessibility
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — tsim custom logos
