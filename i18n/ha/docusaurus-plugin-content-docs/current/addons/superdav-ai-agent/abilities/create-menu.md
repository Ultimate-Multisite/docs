---
title: Ƙirƙiri Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Ƙirƙiri Menu {#create-menu}

Ƙwarewar **Ƙirƙiri Menu** tana ƙirƙirar menus na kewaya na WordPress tare da goyon baya ga alamun kewaya daban waɗanda suka bambanta da taken shafi.

## Bayani Gabaɗaya {#overview}

Wannan ƙwarewa tana faɗaɗa aikin ƙirƙirar menu na yau da kullum da ikon ƙayyade ma'aunin `navigation_label`. Wannan yana ba ka damar ƙirƙirar menus inda alamar da ake nunawa a kewaya ta bambanta da taken shafi, yana ba da ƙarin sassauci a tsarin site da ƙwarewar mai amfani.

## Ma'aunai {#parameters}

| Ma'auni | Nau'i | Ana buƙata | Bayani |
|-----------|------|----------|-------------|
| `name` | string | Ee | Sunan menu, misali `Primary Navigation` |
| `location` | string | A'a | Wurin theme da za a sanya wannan menu, misali `primary` |
| `navigation_label` | string | A'a | Alamar da za a nuna a kewaya (ta bambanta da taken shafi) |

## Ƙimar Dawowa {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Alamar Kewaya da Taken Shafi {#navigation-label-vs-page-title}

Ma'aunin `navigation_label` yana ba ka damar raba sunan menu na ciki daga alamar da ake nunawa ga masu amfani:

- **`name`** — Mai gano menu na ciki da WordPress ke amfani da shi (misali, "Primary Navigation")
- **`navigation_label`** — Alamar da ake nunawa ga masu ziyartar site a cikin kewaya (misali, "Main Menu")

Wannan yana da amfani idan:
- Tsarin sanya sunaye na cikin gida ya bambanta da alamun da masu amfani ke gani
- Kana son alamomi gajeru a kewaya fiye da a panel na gudanarwa
- Kana buƙatar tallafa wa harsuna da yawa masu tsawon alamomi daban-daban
- Kana gina menus don takamaiman yankuna ko ƙungiyoyin masu amfani

## Misalan Amfani {#usage-examples}

### Misali 1: Menu Mai Sauƙi tare da Alamar Kewaya {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Ƙirƙiri menu na primary navigation mai suna "Main Navigation" tare da alamar kewaya "Menu".
```

**Sakamako:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Misali 2: Menu don Takamaiman Wurin Theme {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Ƙirƙiri menu na footer mai suna "Footer Links" tare da alamar kewaya "Quick Links" kuma sanya shi zuwa wurin footer.
```

**Sakamako:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Haɗawa da Theme Builder {#integration-with-theme-builder}

Lokacin amfani da Theme Builder, ƙwarewar Ƙirƙiri Menu tana:

1. Gane wuraren menu na theme da ake da su ta atomatik
2. Ƙirƙirar menus tare da alamun kewaya masu dacewa da ƙirarka
3. Sanya menus zuwa wuraren theme da suka dace
4. Tallafa ƙara abubuwan menu bayan ƙirƙira

## Ƙwarewa Masu Alaƙa {#related-abilities}

- **`add_menu_item`** — Ƙara abubuwa zuwa menu da ke akwai
- **`update_menu`** — Sake suna menu ko sake sanya shi zuwa wurin theme
- **`delete_menu`** — Cire menu daga site ɗinka

## Mafi Kyawun Ayyuka {#best-practices}

- **Yi amfani da alamun kewaya masu bayyana** — ka riƙe alamomi a takaice kuma masu bayani ga masu amfani
- **Daidaita wuraren theme** — sanya menus zuwa wurin theme da ya dace don nunawa yadda ya kamata
- **Tsara tsarin menu** — yanke shawara kan tsarin matakan menu ɗinka kafin ƙirƙirar abubuwa
- **Gwada daidaituwa** — tabbatar menus suna bayyana daidai a na'urorin hannu
- **Fassara alamomi** — yi amfani da alamun kewaya daban don nau'ikan harshe daban

## Iyakoki {#limitations}

- Alamun kewaya na nuni ne kawai; har yanzu ana amfani da `name` na ciki don ganewar WordPress
- Goyon bayan theme yana bambanta; ba duk themes ke tallafa wa duk wuraren menu ba
- Dole ne a ƙara abubuwan menu daban bayan ƙirƙirar menu
- Canza alamar kewaya yana buƙatar sabunta menu

## Ƙwarewa Masu Alaƙa {#related-abilities-1}

- [Ƙirƙiri Logo SVG](./generate-logo-svg.md) — ƙirƙiri logos don header na site ɗinka
- [Tabbatar da Bambancin Palette](./validate-palette-contrast.md) — tabbatar da tsare-tsaren launi masu sauƙin isa
