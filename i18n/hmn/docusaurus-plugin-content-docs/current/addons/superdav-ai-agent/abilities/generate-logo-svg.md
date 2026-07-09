---
title: Tsim Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Tsim Logo SVG {#generate-logo-svg}

Lub peev xwm **Tsim Logo SVG** tso cai rau Theme Builder tsim thiab ntxig cov logo SVG uas kho raws koj xav tau ncaj qha rau hauv koj lub WordPress site nrog kev sanitisation uas nyab xeeb rau namespace yam tsis siv tes.

## Kev piav qhia dav dav {#overview}

Lub peev xwm no tsim cov logo duab vector uas nthuav tau (SVG) raws li koj lub site txoj kev coj ua branding thiab koj cov kev nyiam tsim qauv. Cov SVG uas tsim tawm yuav raug sanitise yam tsis siv tes kom ntseeg tau tias lawv nyab xeeb siv hauv WordPress thaum tseem khaws tau qhov zoo nkauj qub.

## Cov Parameter {#parameters}

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|-----------|------|----------|-------------|
| `site_name` | string | Yog | Lub npe ntawm lub site uas yuav tsim lub logo rau |
| `style` | string | Yog | Hom qauv tsim (piv txwv, "modern", "classic", "minimalist", "playful") |
| `colors` | array | Tsis yog | Array ntawm cov hex color codes siv hauv lub logo (piv txwv, `["#678233", "#ffffff"]`) |
| `width` | number | Tsis yog | Qhov dav ntawm SVG hauv pixels (default: 200) |
| `height` | number | Tsis yog | Qhov siab ntawm SVG hauv pixels (default: 200) |
| `include_text` | boolean | Tsis yog | Seb puas suav lub npe site ua ntawv hauv lub logo (default: true) |

## Hom Output {#output-format}

Lub peev xwm no xa rov qab ib txoj SVG string nrog tus qauv hauv qab no:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Kev Coj Ua Sanitisation rau SVG {#svg-sanitisation-behaviour}

Cov SVG uas tsim tawm yuav dhau kev sanitisation uas nyab xeeb rau namespace yam tsis siv tes kom:

- **Tshem cov attribute uas tsis nyab xeeb** — tshem event handlers, scripts, thiab cov attribute uas tej zaum yuav phom sij
- **Khaws namespaces** — khaws SVG namespaces (xmlns, xlink) kom render tau raug
- **Tshawb xyuas tus qauv** — xyuas kom SVG ua raws W3C standards
- **Encode entities** — escape cov cim tshwj xeeb hauv cov ntsiab lus ntawv kom raug
- **Tshem external references** — tshem external stylesheets thiab image references

Qhov no ua kom SVG nyab xeeb rau kev embed ncaj qha hauv WordPress yam tsis tas yuav sanitise ntxiv.

## Piv Txwv Kev Siv {#usage-example}

**Prompt:**
```
Tsim ib lub logo modern rau kuv lub tech startup hu ua "CloudSync" siv xim xiav thiab xim dawb.
```

**Result:**
Lub peev xwm tsim ib lub logo SVG uas:
- Muab lub npe site "CloudSync" tso nrog
- Siv cov xim xiav thiab dawb uas tau qhia
- Ua raws cov ntsiab cai tsim qauv modern
- Raug sanitise yam tsis siv tes thiab npaj siv tau lawm

## Kev Sib Txuas nrog Theme Builder {#integration-with-theme-builder}

Thaum siv Theme Builder qhov kev xaiv design-direction, lub peev xwm Tsim Logo SVG yuav:

1. Tshawb xyuas koj txoj kev coj tsim qauv thiab color palette
2. Tsim ib lub logo SVG tshwj xeeb uas phim koj cov kev nyiam
3. Ntxig lub logo rau hauv koj lub site qhov header/branding area yam tsis siv tes
4. Khaws SVG ua custom logo hauv WordPress media

## Cov Kev Xyaum Zoo Tshaj {#best-practices}

- **Muab cov kev nyiam style kom meej** — piav qhia hom qauv tsim uas koj xav tau (modern, classic, playful, thiab lwm yam)
- **Qhia cov xim** — suav koj cov brand colors kom zoo ib yam
- **Kuaj rendering** — xyuas kom lub logo tshwm raug thoob ntau qhov screen sizes
- **Kho ntxiv** — siv WordPress cov cuab yeej logo customization los kho qhov loj thiab qhov chaw tso

## Cov Kev Txwv {#limitations}

- Cov logo SVG raug tsim ua duab static (tsis animated)
- Cov logo nyuaj uas muaj ntau yam element tej zaum yuav xav tau kev kho ntxiv siv tes
- Tsis txhawb custom fonts; cov ntawv siv system fonts
- Qhov loj heev los sis me heev tej zaum yuav cuam tshuam rau qhov zoo

## Cov Peev Xwm Uas Cuam Tshuam {#related-abilities}

- [Tshawb Xyuas Palette Contrast](./validate-palette-contrast.md) — xyuas color contrast rau accessibility
- [Tsim Menu](./create-menu.md) — tsim navigation menus rau koj lub site
