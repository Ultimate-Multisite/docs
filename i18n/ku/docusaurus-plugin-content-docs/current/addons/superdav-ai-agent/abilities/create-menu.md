---
title: Menuyê çêbike
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Pêşek Çêbike

Şiyana **Pêşek Çêbike** pêşekên rêveberiyê yên WordPress çêdike û piştgirî dide nîşanên rêveberiyê yên cuda ji sernavên rûpelan.

## Nêrîna Giştî {#overview}

Ev şiyan karîna standard a çêkirina pêşekê bi karîna diyarkirina parametreya `navigation_label` dirêj dike. Ev dihêle tu pêşekan çêbikî ku nîşana ku di rêveberiyê de tê nîşandan ji sernavê rûpelê cuda be, û di avahiya malperê û ezmûna bikarhêner de zêdetir nermî dide.

## Parametre {#parameters}

| Parametre | Cure | Pêwîst | Danasîn |
|-----------|------|----------|-------------|
| `name` | string | Erê | Navê pêşekê, wekî `Primary Navigation` |
| `location` | string | Na | Cihê theme ku ev pêşek jê re were veqetandin, wekî `primary` |
| `navigation_label` | string | Na | Nîşana ku di rêveberiyê de tê nîşandan (cuda ji sernavê rûpelê) |

## Nirxa Vegerê {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Nîşana Rêveberiyê li hember Sernavê Rûpelê {#navigation-label-vs-page-title}

Parametreya `navigation_label` dihêle tu navê hundirîn ê pêşekê ji nîşana ku ji bikarhêneran re tê nîşandan veqetînî:

- **`name`** — Nasnameya hundirîn a pêşekê ku WordPress bi kar tîne (wekî "Rêveberiya Sereke")
- **`navigation_label`** — Nîşana ku di rêveberiyê de ji mêvanên malperê re tê nîşandan (wekî "Pêşeka Sereke")

Ev kêrhatî ye dema ku:
- Rêbaza te ya navkirina hundirîn ji nîşanên ku ji bikarhêneran re xuya dibin cuda be
- Tu di rêveberiyê de nîşanên kurtir dixwazî ji panelê rêveberiyê
- Pêwîst e tu piştgirî bidî gelek zimanan bi dirêjahiyên nîşanên cuda
- Tu ji bo herêmên taybet an komên bikarhêneran pêşekan ava dikî

## Mînakên Bikaranînê {#usage-examples}

### Mînak 1: Pêşeka Hêsan bi Nîşana Rêveberiyê {#example-1-simple-menu-with-navigation-label}

**Daxwaz:**
```
Pêşekeke rêveberiya sereke bi navê "Rêveberiya Sereke" û bi nîşana rêveberiyê "Pêşek" çêbike.
```

**Encam:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Mînak 2: Pêşek ji bo Cihê Theme Taybet {#example-2-menu-for-specific-theme-location}

**Daxwaz:**
```
Pêşekeke footer bi navê "Girêdanên Footer" û bi nîşana rêveberiyê "Girêdanên Bilez" çêbike û wê bide cihê footer.
```

**Encam:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Yekbûn bi Theme Builder re {#integration-with-theme-builder}

Dema Theme Builder tê bikaranîn, şiyana Pêşek Çêbike:

1. Cihên pêşeka theme yên berdest bixweber nas dike
2. Ji bo sêwirana te pêşekan bi nîşanên rêveberiyê yên guncaw çêdike
3. Pêşekan dide cihên rast ên theme
4. Piştgirî dide zêdekirina hêmanên pêşekê piştî çêkirinê

## Şiyanên Têkildar {#related-abilities}

- **`add_menu_item`** — Hêmanan li pêşekeke heyî zêde bike
- **`update_menu`** — Navê pêşekê biguherîne an wê ji nû ve bide cihekî theme
- **`delete_menu`** — Pêşekekê ji malpera xwe rake

## Rêbazên Herî Baş {#best-practices}

- **Nîşanên rêveberiyê yên zelal bi kar bîne** — nîşanan ji bo bikarhêneran kurt û raveker bihêle
- **Cihên theme hevaheng bike** — pêşekan bide cihê rast ê theme da ku rast bên nîşandan
- **Avahiya pêşekê plan bike** — berî çêkirina hêmanan, hiyerarşiya pêşeka xwe biryar bike
- **Bersivdayîbûnê biceribîne** — piştrast bike ku pêşek li ser amûrên mobîl rast tê nîşandan
- **Nîşanan herêmî bike** — ji bo guhertoyên zimanên cuda nîşanên rêveberiyê yên cuda bi kar bîne

## Sînorkirin {#limitations}

- Nîşanên rêveberiyê tenê ji bo nîşandanê ne; `name`-a hundirîn hîn jî ji bo nasandina WordPress tê bikaranîn
- Piştgiriya theme diguhere; hemû themes piştgirî nadin hemû cihên pêşekê
- Pêwîst e hêmanên pêşekê piştî çêkirina pêşekê cuda bên zêdekirin
- Guhertina nîşaneke rêveberiyê pêdivî bi rojanekirina pêşekê heye

## Şiyanên Têkildar {#related-abilities-1}

- [Logo SVG Çêbike](./generate-logo-svg.md) — ji bo serê malpera xwe logo çêbike
- [Kontrasta Paletê Erê Bike](./validate-palette-contrast.md) — piştrast bike ku nexşeyên rengan gihîştinbar in
