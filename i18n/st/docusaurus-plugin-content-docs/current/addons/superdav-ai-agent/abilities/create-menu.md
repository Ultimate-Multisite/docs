---
title: Theha Lenane
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Etsa Lenane

Bokhoni ba **Etsa Lenane** bo etsa manane a tsamaiso a WordPress ka tšehetso bakeng sa dileibole tsa tsamaiso tse arohaneng le dihlooho tsa maqephe.

## Kakaretso

Bokhoni bona bo atolosa tshebetso e tlwaelehileng ya ho etsa lenane ka bokhoni ba ho hlakisa paramethara ya `navigation_label`. Sena se o dumella ho etsa manane moo leibole e bontshwang tsamaisong e fapaneng le sehlooho sa leqephe, se fanang ka ho tenyetseha ho hoholo sebopehong sa sebaka le boiphihlelong ba mosebedisi.

## Diparamethara

| Paramethara | Mofuta | E a hlokahala | Tlhaloso |
|-----------|------|----------|-------------|
| `name` | string | Ee | Lebitso la lenane, mohl. `Primary Navigation` |
| `location` | string | Che | Sebaka sa moralo seo lenane lena le abelwang ho sona, mohl. `primary` |
| `navigation_label` | string | Che | Leibole e bontshwang tsamaisong (e fapaneng le sehlooho sa leqephe) |

## Boleng bo Khutlisitsweng

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Leibole ya Tsamaiso kgahlanong le Sehlooho sa Leqephe

Paramethara ya `navigation_label` e o dumella ho arola lebitso la lenane la kahare ho leibole e bontshwang basebedisi:

- **`name`** — Sesupi sa lenane sa kahare se sebediswang ke WordPress (mohl., "Tsamaiso ya Motheo")
- **`navigation_label`** — Leibole e bontshwang baeti ba sebaka tsamaisong (mohl., "Lenane le Leholo")

Sena se molemo ha:
- Mokgwa wa hao wa ho reha mabitso ka hare o fapana le dileibole tse bonwang ke basebedisi
- O batla dileibole tse kgutshwane tsamaisong ho feta phanele ya admin
- O hloka ho tshehetsa dipuo tse ngata tse nang le bolelele bo fapaneng ba dileibole
- O haha manane bakeng sa dibaka tse itseng kapa dihlopha tsa basebedisi

## Mehlala ya Tshebediso

### Mohlala wa 1: Lenane le Bonolo le nang le Leibole ya Tsamaiso

**Tlhahiso:**
```
Etsa lenane la tsamaiso ya motheo le bitswang "Tsamaiso e Kgolo" le leibole ya tsamaiso "Lenane".
```

**Sephetho:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Mohlala wa 2: Lenane bakeng sa Sebaka se Itseng sa Moralo

**Tlhahiso:**
```
Etsa lenane la maoto le bitswang "Dihokelo tsa Maoto" le leibole ya tsamaiso "Dihokelo tse Potlakileng" mme o le abele sebaka sa maoto.
```

**Sephetho:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Kopanyo le Theme Builder

Ha o sebedisa Theme Builder, bokhoni ba Etsa Lenane bo:

1. Fumana ka boiketsetso dibaka tse fumanehang tsa manane a moralo
2. Etsa manane a nang le dileibole tse loketseng tsa tsamaiso bakeng sa moralo wa hao
3. Abela manane dibakeng tse nepahetseng tsa moralo
4. Tshehetsa ho eketsa dintho tsa lenane ka mora ho etswa

## Bokgoni bo Amanang

- **`add_menu_item`** — Eketsa dintho lenaneng le seng le le teng
- **`update_menu`** — Reha lenane hape kapa o le abele hape sebakeng sa moralo
- **`delete_menu`** — Tlosa lenane sebakeng sa hao

## Mekgwa e Metle ka ho Fetisisa

- **Sebedisa dileibole tsa tsamaiso tse hlakileng** — boloka dileibole di le kgutshwane ebile di hlalosa bakeng sa basebedisi
- **Tsamaisana le dibaka tsa moralo** — abela manane sebakeng se nepahetseng sa moralo bakeng sa pontsho e loketseng
- **Rera sebopeho sa lenane** — etsa qeto ka tatelano ya lenane la hao pele o etsa dintho
- **Lekola karabelo** — netefatsa hore manane a bontshwa ka nepo disebedisweng tsa selefouno
- **Etsa dileibole tsa lehae** — sebedisa dileibole tse fapaneng tsa tsamaiso bakeng sa mefuta e fapaneng ya dipuo

## Meedi

- Dileibole tsa tsamaiso ke tsa pontsho feela; `name` ya kahare e ntse e sebediswa bakeng sa boitsebahatso ba WordPress
- Tshehetso ya moralo ya fapana; ha se meralo yohle e tshehetsang dibaka tsohle tsa manane
- Dintho tsa lenane di tlameha ho eketswa ka thoko ka mora hore lenane le etswe
- Ho fetola leibole ya tsamaiso ho hloka ho ntjhafatsa lenane

## Bokgoni bo Amanang

- [Hlahisa Logo SVG](./generate-logo-svg.md) — etsa dilogo bakeng sa hlooho ya sebaka sa hao
- [Netefatsa Phapang ya Palette](./validate-palette-contrast.md) — netefatsa meralo ya mebala e fihlellehang
