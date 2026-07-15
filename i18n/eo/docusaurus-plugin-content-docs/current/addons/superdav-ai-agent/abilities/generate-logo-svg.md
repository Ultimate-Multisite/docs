---
title: Generi SVG de emblemo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generi Logo SVG

La kapablo **Generi Logo SVG** permesas al Theme Builder krei kaj enkorpigi proprajn emblemajn SVG-ojn rekte en vian WordPress-ejon kun aŭtomata nomspac-sekura purigado.

## Superrigardo {#overview}

Ĉi tiu kapablo generas skaleblajn vektorajn grafikaĵojn (SVG) por emblemoj surbaze de la markodirekto kaj dezajnaj preferoj de via retejo. La generitaj SVG-oj estas aŭtomate purigataj por certigi, ke ili estas sekuraj por uzo en WordPress, konservante vidan integrecon.

## Parametroj {#parameters}

| Parametro | Tipo | Bezonata | Priskribo |
|-----------|------|----------|-------------|
| `site_name` | string | Jes | La nomo de la retejo por kiu generi la emblemon |
| `style` | string | Jes | La dezajna stilo (ekz., "moderna", "klasika", "minimumisma", "ludema") |
| `colors` | array | Ne | Tabelo de deksesumaj kolorkodoj uzotaj en la emblemo (ekz., `["#678233", "#ffffff"]`) |
| `width` | number | Ne | SVG-larĝo en pikseloj (defaŭlte: 200) |
| `height` | number | Ne | SVG-alto en pikseloj (defaŭlte: 200) |
| `include_text` | boolean | Ne | Ĉu inkluzivi la retejan nomon kiel tekston en la emblemo (defaŭlte: true) |

## Eliga Formato {#output-format}

La kapablo redonas SVG-ĉenon kun la jena strukturo:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Konduto de SVG-Purigado {#svg-sanitisation-behaviour}

La generitaj SVG-oj spertas aŭtomatan nomspac-sekuran purigadon por:

- **Forigi nesekurajn atributojn** — forprenas eventotraktilojn, skriptojn kaj eble danĝerajn atributojn
- **Konservi nomspacojn** — konservas SVG-nomspacojn (xmlns, xlink) por ĝusta bildigo
- **Validigi strukturon** — certigas, ke la SVG konformas al W3C-normoj
- **Kodigo de entoj** — ĝuste eskapas specialajn signojn en teksta enhavo
- **Forigi eksterajn referencojn** — forprenas eksterajn stilfoliojn kaj bildajn referencojn

Ĉi tio certigas, ke la SVG estas sekura por enkorpigi rekte en WordPress sen postuli aldonan purigadon.

## Uzekzemplo {#usage-example}

**Invito:**
```
Generu modernan emblemon por mia teknologia noventrepreno nomata "CloudSync" uzante bluajn kaj blankajn kolorojn.
```

**Rezulto:**
La kapablo kreas SVG-emblemon kiu:
- Inkluzivas la retejan nomon "CloudSync"
- Uzas la specifitan bluan kaj blankan kolorskemon
- Sekvas modernajn dezajnajn principojn
- Estas aŭtomate purigita kaj preta por uzo

## Integriĝo kun Theme Builder {#integration-with-theme-builder}

Kiam oni uzas la elekton de dezajna direkto de Theme Builder, la kapablo Generi Logo SVG:

1. Analizas vian dezajnan direkton kaj kolorpaletron
2. Generas propran SVG-emblemon kongruan kun viaj preferoj
3. Aŭtomate enkorpigas la emblemon en la kapan/markan areon de via retejo
4. Konservas la SVG kiel propran emblemon en WordPress-aŭdvidaĵoj

## Plej Bonaj Praktikoj {#best-practices}

- **Donu klarajn stilajn preferojn** — priskribu la dezajnan stilon, kiun vi volas (moderna, klasika, ludema, ktp.)
- **Specifu kolorojn** — inkluzivu viajn markokolorojn por konsekvenco
- **Testu bildigon** — kontrolu, ke la emblemo montriĝas ĝuste tra malsamaj ekranaj grandecoj
- **Plue personecigu** — uzu la ilojn de WordPress por emblema personigo por ĝustigi grandecon kaj lokigon

## Limigoj {#limitations}

- SVG-emblemoj estas generitaj kiel statikaj grafikaĵoj (ne animaciitaj)
- Kompleksaj emblemoj kun multaj elementoj povas postuli manan rafinadon
- Propraj tiparoj ne estas subtenataj; teksto uzas sistemajn tiparojn
- Tre grandaj aŭ tre malgrandaj dimensioj povas influi kvaliton

## Rilataj Kapabloj {#related-abilities}

- [Validigi Paletran Kontraston](./validate-palette-contrast.md) — kontroli kolorkontraston por alirebleco
- [Krei Menuon](./create-menu.md) — krei navigadajn menuojn por via retejo
