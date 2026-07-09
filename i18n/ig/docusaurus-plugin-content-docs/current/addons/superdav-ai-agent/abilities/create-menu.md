---
title: Mepụta Nchịkọta Nhọrọ
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Mepụta Menu

Ikike **Mepụta Menu** na-emepụta menu njemgharị WordPress nwere nkwado maka akara njemgharị dị iche iche nke kewapụrụ na aha ibe.

## Nchịkọta

Ikike a na-agbatị ọrụ imepụta menu ọkọlọtọ site n'ikike ịkọwa paramita `navigation_label`. Nke a na-enye gị ohere ịmepụta menu ebe akara a na-egosi na njemgharị dị iche na aha ibe, na-enye mgbanwe ka ukwuu n'ụdị saịtị na ahụmịhe onye ọrụ.

## Paramita

| Paramita | Ụdị | Achọrọ | Nkọwa |
|-----------|------|----------|-------------|
| `name` | string | Ee | Aha menu, dịka `Primary Navigation` |
| `location` | string | Mba | Ebe theme a ga-ekenye menu a, dịka `primary` |
| `navigation_label` | string | Mba | Akara a ga-egosi na njemgharị (dị iche na aha ibe) |

## Uru Alọghachi

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Akara Njemgharị megide Aha Ibe

Paramita `navigation_label` na-enye gị ohere ikewa aha menu dị n'ime na akara a na-egosi ndị ọrụ:

- **`name`** — Ihe njirimara menu dị n'ime nke WordPress na-eji (dịka, "Primary Navigation")
- **`navigation_label`** — Akara a na-egosi ndị ọbịa saịtị na njemgharị (dịka, "Main Menu")

Nke a bara uru mgbe:
- Usoro ịkpọ aha gị dị n'ime dị iche na akara ndị ọrụ na-ahụ
- Ị chọrọ akara dị mkpụmkpụ na njemgharị karịa nke dị na panel nchịkwa
- Ịkwesịrị ịkwado ọtụtụ asụsụ nwere ogologo akara dị iche
- Ị na-ewu menu maka mpaghara ma ọ bụ otu ndị ọrụ pụrụ iche

## Ihe Nlereanya Ojiji

### Ihe Nlereanya 1: Menu Dị Mfe nwere Akara Njemgharị

**Prompt:**
```
Mepụta menu njemgharị bụ isi a na-akpọ "Main Navigation" nwere akara njemgharị "Menu".
```

**Nsonaazụ:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Ihe Nlereanya 2: Menu maka Ebe Theme Pụrụ Iche

**Prompt:**
```
Mepụta menu footer a na-akpọ "Footer Links" nwere akara njemgharị "Quick Links" ma kenye ya na ebe footer.
```

**Nsonaazụ:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Mmekọrịta na Theme Builder

Mgbe ị na-eji Theme Builder, ikike Mepụta Menu:

1. Na-achọpụta ebe menu theme dị na-akpaghị aka
2. Na-emepụta menu nwere akara njemgharị kwesịrị ekwesị maka imewe gị
3. Na-ekenye menu na ebe theme ziri ezi
4. Na-akwado itinye ihe menu mgbe e mechara ya

## Ikike Ndị Metụtara

- **`add_menu_item`** — Tinye ihe na menu dị adị
- **`update_menu`** — Gbanwee aha menu ma ọ bụ kenye ya ọzọ na ebe theme
- **`delete_menu`** — Wepụ menu na saịtị gị

## Omume Kachasị Mma

- **Jiri akara njemgharị doro anya** — mee ka akara dị mkpụmkpụ ma kọwaa nke ọma maka ndị ọrụ
- **Dakọtara ebe theme** — kenye menu na ebe theme ziri ezi ka egosipụta ya nke ọma
- **Hazie usoro menu** — kpebie nhazi ọkwa menu gị tupu ịmepụta ihe
- **Nwalee nzaghachi** — nyochaa na menu na-egosi nke ọma na ngwaọrụ mkpanaka
- **Mee akara ka ọ dabara mpaghara** — jiri akara njemgharị dị iche maka ụdị asụsụ dị iche

## Mmachi

- Akara njemgharị bụ naanị maka ngosipụta; a ka na-eji `name` dị n'ime maka njirimara WordPress
- Nkwado theme na-adị iche; ọ bụghị theme niile na-akwado ebe menu niile
- A ga-etinyerịrị ihe menu iche mgbe emechara menu
- Ịgbanwe akara njemgharị chọrọ imelite menu

## Ikike Ndị Metụtara

- [Mepụta Logo SVG](./generate-logo-svg.md) — mepụta logo maka header saịtị gị
- [Nyochaa Ọdịiche Palette](./validate-palette-contrast.md) — hụ na atụmatụ agba dị mfe ịnweta
