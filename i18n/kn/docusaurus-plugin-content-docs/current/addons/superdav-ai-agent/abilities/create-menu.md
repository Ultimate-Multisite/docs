---
title: ಮೆನು ರಚಿಸಿ
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# ಮೆನುವನ್ನು ರಚಿಸಿ {#create-menu}

**Create Menu** ಸಾಮರ್ಥ್ಯವು WordPress ನ್ಯಾವಿಗೇಷನ್ ಮೆನುವನ್ನು ರಚಿಸುತ್ತದೆ. ಇದರಲ್ಲಿ page titles ಗಿಂತ ಭಿನ್ನವಾದ (distinct) navigation labels ಅನ್ನು ಬಳಸಲು ಬೆಂಬಲವಿದೆ.

## ಅವಲೋಕನ {#overview}

ಈ ಸಾಮರ್ಥ್ಯವು standard ಮೆನುವನ್ನು ರಚಿಸುವ functionality ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ. ಇದರಲ್ಲಿ `navigation_label` ಎಂಬ parameter ಅನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸುವ ಸಾಮರ್ಥ್ಯವಿದೆ. ಇದರಿಂದ ನೀವು ಅಂತಹ ಮೆನುವನ್ನು ರಚಿಸಬಹುದು, ಅಲ್ಲಿ ನ್ಯಾವಿಗೇಷನ್‌ನಲ್ಲಿ ತೋರಿಸುವ label, page title ಗಿಂತ ಭಿನ್ನವಾಗಿರುತ್ತದೆ. ಇದು ನಿಮ್ಮ site structure ಮತ್ತು user experience ಗೆ ಹೆಚ್ಚಿನ flexibility ನೀಡುತ್ತದೆ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | ಮೆನುವಿನ ಹೆಸರು, ಉದಾಹರಣೆಗೆ `Primary Navigation` |
| `location` | string | No | ಈ ಮೆನುವನ್ನು ನಿಯೋಜಿಸಲು ಥೀಮ್ location, ಉದಾಹರಣೆಗೆ `primary` |
| `navigation_label` | string | No | ನ್ಯಾವಿಗೇಷನ್‌ನಲ್ಲಿ ತೋರಿಸಬೇಕಾದ label (page title ಗಿಂತ ಭಿನ್ನ) |

## ಮರಳಿ ನೀಡುವ ಮೌಲ್ಯ {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## ನ್ಯಾವಿಗೇಷನ್ ಲೇಬಲ್ vs page title {#navigation-label-vs-page-title}

`navigation_label` parameter ಅನ್ನು ಬಳಸುವುದರಿಂದ, ನೀವು internal menu name ಅನ್ನು ಬಳಕೆದಾರರಿಗೆ ತೋರಿಸುವ label ನಿಂದ ಪ್ರತ್ಯೇಕಿಸಬಹುದು:

- **`name`** — WordPress ಬಳಸುವ internal ಮೆನುವಿನ ಗುರುತಿನ ಸಂಖ್ಯೆ (ಉದಾಹರಣೆಗೆ, "Primary Navigation")
- **`navigation_label`** — ನ್ಯಾವಿಗೇಷನ್‌ನಲ್ಲಿ site ಸಂದರ್ಶಕರಿಗೆ ತೋರಿಸುವ label (ಉದಾಹರಣೆಗೆ, "Main Menu")

ಇದು ಈ ಸಂದರ್ಭಗಳಲ್ಲಿ ಉಪಯುಕ್ತವಾಗಿದೆ:
- ನಿಮ್ಮ internal naming convention, ಬಳಕೆದಾರರಿಗೆ ಕಾಣುವ label ಗಿಂತ ಭಿನ್ನವಾಗಿದ್ದರೆ
- ನೀವು admin panel ನಲ್ಲಿ ಇರುವ label ಗಿಂತ ನ್ಯಾವಿಗೇಷನ್‌ನಲ್ಲಿ ಚಿಕ್ಕ label ಬೇಕಿದ್ದರೆ
- ವಿಭಿನ್ನ label ಉದ್ದಗಳೊಂದಿಗೆ ಅನೇಕ ಭಾಷೆಗಳನ್ನು ಬೆಂಬಲಿಸಬೇಕಿದ್ದರೆ
- ನಿರ್ದಿಷ್ಟ ಪ್ರದೇಶಗಳು ಅಥವಾ ಬಳಕೆದಾರ ಗುಂಪುಗಳಿಗಾಗಿ ನೀವು ಮೆನುವನ್ನು ನಿರ್ಮಿಸುತ್ತಿದ್ದರೆ

## ಬಳಕೆಯ ಉದಾಹರಣೆಗಳು {#usage-examples}

### ಉದಾಹರಣೆ 1: ನ್ಯಾವಿಗೇಷನ್ ಲೇಬಲ್‌ನೊಂದಿಗೆ ಸರಳ ಮೆನುವನ್ನು ರಚಿಸುವುದು {#example-1-simple-menu-with-navigation-label}

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

### ಉದಾಹರಣೆ 2: ನಿರ್ದಿಷ್ಟ ಥೀಮ್ location ಗಾಗಿ ಮೆನುವನ್ನು ರಚಿಸುವುದು {#example-2-menu-for-specific-theme-location}

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

## ಥೀಮ್ ಬಿಲ್ಡರ್‌ನೊಂದಿಗೆ ಏಕೀಕರಣ {#integration-with-theme-builder}

Theme Builder ಅನ್ನು ಬಳಸುವಾಗ, Create Menu ಸಾಮರ್ಥ್ಯವು:

1. ಲಭ್ಯವಿರುವ ಥೀಮ್ ಮೆನುವಿನ location ಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ
2. ನಿಮ್ಮ design ಗಾಗಿ ಸೂಕ್ತ ನ್ಯಾವಿಗೇಷನ್ ಲೇಬಲ್‌ಗಳೊಂದಿಗೆ ಮೆನುವನ್ನು ರಚಿಸುತ್ತದೆ
3. ಮೆನುವನ್ನು ಸರಿಯಾದ ಥೀಮ್ location ಗಳಿಗೆ ನಿಯೋಜಿಸುತ್ತದೆ
4. ರಚಿಸಿದ ನಂತರ ಮೆನುವಿನ ಐಟಂಗಳನ್ನು ಸೇರಿಸಲು ಬೆಂಬಲ ನೀಡುತ್ತದೆ

## ಸಂಬಂಧಿತ ಸಾಮರ್ಥ್ಯಗಳು {#related-abilities}

- **`add_menu_item`** — ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಮೆನುವಿಗೆ ಐಟಂಗಳನ್ನು ಸೇರಿಸಿ
- **`update_menu`** — ಮೆನುವಿನ ಹೆಸರನ್ನು ಬದಲಾಯಿಸಿ ಅಥವಾ ಅದನ್ನು ಥೀಮ್ location ಗೆ ಮರು-ನಿಯೋಜಿಸಿ
- **`delete_menu`** — ನಿಮ್ಮ site ನಿಂದ ಮೆನುವನ್ನು ತೆಗೆದುಹಾಕಿ

## ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು {#best-practices}

- **ಸ್ಪಷ್ಟ ನ್ಯಾವಿಗೇಷನ್ ಲೇಬಲ್‌ಗಳನ್ನು ಬಳಸಿ** — ಬಳಕೆದಾರರಿಗೆ label ಅನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಮತ್ತು ವಿವರಣಾತ್ಮಕವಾಗಿ ಇರಿಸಿ
- **ಥೀಮ್ location ಗಳಿಗೆ ಹೊಂದಿಸಿ** — ಸರಿಯಾದ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮೆನುವನ್ನು ಸರಿಯಾದ ಥೀಮ್ location ಗೆ ನಿಯೋಜಿಸಿ
- **ಮೆನುವಿನ structure ಅನ್ನು ಯೋಜಿಸಿ** — ಐಟಂಗಳನ್ನು ರಚಿಸುವ ಮೊದಲು ನಿಮ್ಮ ಮೆನುವಿನ hierarchy ಬಗ್ಗೆ ನಿರ್ಧರಿಸಿ
- **responsiveness ಅನ್ನು ಪರೀಕ್ಷಿಸಿ** — ಮೊಬೈಲ್ ಸಾಧನಗಳಲ್ಲಿ ಮೆನುವು ಸರಿಯಾಗಿ ಪ್ರದರ್ಶನಗೊಳ್ಳುತ್ತಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- **label ಗಳನ್ನು ಸ್ಥಳೀಯಗೊಳಿಸಿ** — ವಿಭಿನ್ನ ಭಾಷಾ ಆವೃತ್ತಿಗಳಿಗಾಗಿ ವಿಭಿನ್ನ ನ್ಯಾವಿಗೇಷನ್ ಲೇಬಲ್‌ಗಳನ್ನು ಬಳಸಿ

## ಮಿತಿಗಳು {#limitations}

- ನ್ಯಾವಿಗೇಷನ್ ಲೇಬಲ್‌ಗಳು ಕೇವಲ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ; WordPress ಗುರುತಿನ համար internal `name` ಅನ್ನು ಇನ್ನೂ ಬಳಸಲಾಗುತ್ತದೆ
- ಥೀಮ್ ಬೆಂಬಲ ಬದಲಾಗುತ್ತದೆ; ಎಲ್ಲಾ ಥೀಮ್‌ಗಳು ಎಲ್ಲಾ ಮೆನುವಿನ location ಗಳನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ
- ಮೆನುವಿನ ಐಟಂಗಳನ್ನು ರಚಿಸಿದ ನಂತರ ಪ್ರತ್ಯೇಕವಾಗಿ ಸೇರಿಸಬೇಕು
- ನ್ಯಾವಿಗೇಷನ್ ಲೇಬಲ್ ಬದಲಾಯಿಸಲು ಮೆನುವನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡಬೇಕಾಗುತ್ತದೆ

## ಸಂಬಂಧಿತ ಸಾಮರ್ಥ್ಯಗಳು {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — ನಿಮ್ಮ site header ಗಾಗಿ ಲೋಗೋಗಳನ್ನು ರಚಿಸಿ
- [Validate Palette Contrast](./validate-palette-contrast.md) — ಪ್ರವೇಶಿಸುವ ಬಣ್ಣ ಯೋಜನೆಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
