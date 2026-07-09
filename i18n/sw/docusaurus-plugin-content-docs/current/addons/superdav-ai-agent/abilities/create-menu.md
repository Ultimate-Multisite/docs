---
title: Tengeneza Menyu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Kuunda Menyu {#create-menu}

Uwezo wa **Kuunda Menyu** unaunda menyu za uelekezaji za WordPress huku ukitoa uwezo wa kuweka viashiria vya uelekezaji tofauti na vichwa vya kurasa.

## Muhtasari {#overview}

Uwezo huu unapanua utendaji wa kawaida wa kuunda menyu kwa kuongeza uwezo wa kubainisha thamani ya `navigation_label`. Hii inakuwezesha kuunda menyu ambapo kiashiria kinachoonekana kwenye uelekezaji kinatofautiana na kichwa cha ukurasa, hivyo kutoa ushirikishaji zaidi katika muundo wa tovuti na uzoefu wa mtumiaji.

## Parameters {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Jina la menyu, mfano: `Primary Navigation` |
| `location` | string | No | Mahali pa menyu kwenye mada (Theme location) pa kuweka menyu hii, mfano: `primary` |
| `navigation_label` | string | No | Kiashiria cha kuonyeshwa kwenye uelekezaji (kinatofautiana na kichwa cha ukurasa) |

## Thamani Inayorejeshwa {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Kiashiria cha Uelekezaji dhidi ya Kichwa cha Ukurasa {#navigation-label-vs-page-title}

Thamani ya `navigation_label` inakuwezesha kutenganisha jina la ndani la menyu kutoka kwa kiashiria kinachoonyeshwa kwa watumiaji:

- **`name`** — Kitambulisho cha ndani cha menyu kinachotumika na WordPress (mfano, "Primary Navigation")
- **`navigation_label`** — Kiashiria kinachoonyeshwa kwa wageni wa tovuti kwenye uelekezaji (mfano, "Main Menu")

Hii ni muhimu wakati:
- Mfumo wako wa kutaja majina ndani unatofautiana na viashiria vinavyoonekana na mtumiaji
- Unataka viashiria vifupi kwenye uelekezaji kuliko kwenye sehemu ya admin
- Unahitaji kusaidia lugha nyingi zenye urefu tofauti wa viashiria
- Unajenga menyu kwa ajili ya maeneo au vikundi maalum vya watumiaji

## Mifano ya Matumizi {#usage-examples}

### Mfano 1: Menyu Rahisi na Kiashiria cha Uelekezaji {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Mfano 2: Menyu kwa Mahali Maalum la Mada {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Uunganishaji na Theme Builder {#integration-with-theme-builder}

Unapotumia Theme Builder, uwezo wa Kuunda Menyu:

1. Unatambua kiotomatiki maeneo ya menyu yanayopatikana kwenye mada
2. Huunda menyu zenye viashiria vya uelekezaji vinavyofaa kwa muundo wako
3. Huweka menyu kwenye maeneo sahihi ya mada
4. Unasaidia kuongeza vitu vya menyu baada ya kuunda

## Uwezo Zinazohusiana {#related-abilities}

- **`add_menu_item`** — Ongeza vitu kwenye menyu iliyopo
- **`update_menu`** — Badilisha jina la menyu au uipe kwenye eneo la mada
- **`delete_menu`** — Ondoa menyu kutoka kwenye tovuti yako

## Mazoea Bora {#best-practices}

- **Tumia viashiria vya uelekezaji wazi** — weka viashiria vifupi na vinavyoeleweka kwa watumiaji
- **Linganisha maeneo ya mada** — weka menyu kwenye eneo sahihi la mada ili kuonyeshwa vizuri
- **Panga muundo wa menyu** — amua ngazi ya menyu yako kabla ya kuunda vitu
- **Jaribu uwezo wa kujibu (Responsiveness)** — angalia kwamba menyu zinaonekana vizuri kwenye vifaa vya simu
- **Tumia viashiria tofauti kwa lugha tofauti** — tumia viashiria tofauti vya uelekezaji kwa matoleo tofauti ya lugha

## Mapungufu {#limitations}

- Viashiria vya uelekezaji ni vya kuonyesha tu; `name` ya ndani bado inatumika kwa utambulisho wa WordPress
- Usaidizi wa mada unabadilika; siyo mada zote zinazosaidia maeneo yote ya menyu
- Vitu vya menyu lazima viongezwe kivyake baada ya kuunda menyu
- Kubadilisha kiashiria cha uelekezaji kunahitaji kusasisha menyu

## Uwezo Zinazohusiana {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — unda nembo kwa kichwa cha tovuti yako
- [Validate Palette Contrast](./validate-palette-contrast.md) — hakikisha michanganuo ya rangi ni rahisi kuonekana
