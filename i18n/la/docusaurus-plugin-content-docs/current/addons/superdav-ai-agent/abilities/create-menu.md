---
title: Crea tabulam electionum
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menu Creare

Facultas **Menu Creare** indices navigationis WordPress creat cum subsidio inscriptionum navigationis distinctarum a titulis paginarum separatarum.

## Conspectus

Haec facultas functionem ordinariam creandi indices extendit facultate parametri `navigation_label` specificandi. Hoc tibi permittit indices creare ubi inscriptio in navigatione ostensa a titulo paginae differt, maiorem flexibilitatem in structura situs et experientia usoris praebens.

## Parametri

| Parameter | Typus | Necessarius | Descriptio |
|-----------|------|----------|-------------|
| `name` | string | Ita | Nomen indicis, e.g. `Primary Navigation` |
| `location` | string | Non | Locus thematis cui hic index assignetur, e.g. `primary` |
| `navigation_label` | string | Non | Inscriptio in navigatione ostendenda (distincta a titulo paginae) |

## Valor Redditus

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Inscriptio Navigationis contra Titulum Paginae

Parameter `navigation_label` tibi permittit nomen internum indicis ab inscriptione usoribus ostensa separare:

- **`name`** — Identifier internus indicis a WordPress adhibitus (e.g., "Navigatio Principalis")
- **`navigation_label`** — Inscriptio visitatoribus situs in navigatione ostensa (e.g., "Menu Principale")

Hoc utile est cum:
- Conventio tua interna nominandi ab inscriptionibus usoribus apparentibus differt
- Inscriptiones breviores in navigatione quam in tabula administratoria vis
- Plures linguas cum longitudinibus inscriptionum diversis sustinere debes
- Indices pro regionibus specificis aut coetibus usorum aedificas

## Exempla Usus

### Exemplum 1: Index Simplex cum Inscriptione Navigationis

**Promptum:**
```
Crea indicem navigationis principalem nomine "Navigatio Principalis" cum inscriptione navigationis "Menu".
```

**Effectus:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Exemplum 2: Index pro Loco Thematis Specifico

**Promptum:**
```
Crea indicem pedis nomine "Vincula Pedis" cum inscriptione navigationis "Vincula Celeria" et assigna eum loco pedis.
```

**Effectus:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integratio cum Theme Builder

Cum Theme Builder uteris, facultas Menu Creare:

1. Automatice locos indicum thematis praesto deprehendit
2. Indices cum inscriptionibus navigationis aptis consilio tuo creat
3. Indices locis thematis rectis assignat
4. Additamentum elementorum indicis post creationem sustinet

## Facultates Relatae

- **`add_menu_item`** — Elementa ad indicem exsistentem adde
- **`update_menu`** — Indicem renomina aut eum loco thematis iterum assigna
- **`delete_menu`** — Indicem e situ tuo remove

## Optimae Rationes

- **Utere inscriptionibus navigationis claris** — inscriptiones concisas et descriptivas usoribus serva
- **Locos thematis congrue** — indices loco thematis recto assigna ad ostensionem propriam
- **Structuram indicis dispone** — de hierarchia indicis tui ante elementa creanda decerne
- **Responsivitatem proba** — verifica indices recte in apparatibus mobilibus ostendi
- **Inscriptiones localiza** — utere inscriptionibus navigationis diversis pro versionibus linguarum diversis

## Limitationes

- Inscriptiones navigationis tantum ad ostensionem valent; internum `name` adhuc ad identificationem WordPress adhibetur
- Subsidium thematis variat; non omnia themata omnes locos indicum sustinent
- Elementa indicis separatim post creationem indicis addenda sunt
- Mutatio inscriptionis navigationis requirit indicem renovare

## Facultates Relatae

- [Logo SVG Generare](./generate-logo-svg.md) — crea logotypa pro capite situs tui
- [Contrarium Palette Validare](./validate-palette-contrast.md) — curare ut schemata colorum accessibilia sint
