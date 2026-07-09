---
title: Mamorona Menio
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Mamorona Menio

Ny fahaiza-manao **Mamorona Menio** dia mamorona menio fitetezana WordPress miaraka amin'ny fanohanana mari-pamantarana fitetezana miavaka misaraka amin'ny lohatenin'ny pejy.

## Topimaso

Ity fahaiza-manao ity dia manitatra ny fiasan'ny famoronana menio mahazatra amin'ny alalan'ny fahafahana mamaritra masontsivana `navigation_label`. Izany dia mamela anao hamorona menio izay tsy mitovy amin'ny lohatenin'ny pejy ny mari-pamantarana aseho amin'ny fitetezana, ka manome fahafaha-manao bebe kokoa amin'ny firafitry ny site sy ny traikefan'ny mpampiasa.

## Masontsivana

| Masontsivana | Karazana | Takiana | Famaritana |
|-----------|------|----------|-------------|
| `name` | string | Eny | Anaran'ny menio, oh. `Primary Navigation` |
| `location` | string | Tsia | Toerana theme hanendrena ity menio ity, oh. `primary` |
| `navigation_label` | string | Tsia | Mari-pamantarana haseho amin'ny fitetezana (miavaka amin'ny lohatenin'ny pejy) |

## Sanda Averina

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Mari-pamantarana Fitetezana vs Lohatenin'ny Pejy

Ny masontsivana `navigation_label` dia mamela anao hanasaraka ny anaran'ny menio anatiny amin'ny mari-pamantarana aseho amin'ny mpampiasa:

- **`name`** — Famantarana menio anatiny ampiasain'ny WordPress (oh., "Primary Navigation")
- **`navigation_label`** — Ny mari-pamantarana aseho amin'ireo mpitsidika site ao amin'ny fitetezana (oh., "Main Menu")

Ilaina izany rehefa:
- Tsy mitovy amin'ny mari-pamantarana hitan'ny mpampiasa ny fomba fanomezanao anarana anatiny
- Tianao ho fohy kokoa ny mari-pamantarana ao amin'ny fitetezana noho ny ao amin'ny takelaka admin
- Mila manohana fiteny maro misy halavan'ny mari-pamantarana samihafa ianao
- Manorina menio ho an'ny faritra na vondrona mpampiasa manokana ianao

## Ohatra Fampiasana

### Ohatra 1: Menio Tsotra miaraka amin'ny Mari-pamantarana Fitetezana

**Prompt:**
```
Mamorona menio fitetezana voalohany antsoina hoe "Main Navigation" miaraka amin'ny mari-pamantarana fitetezana "Menu".
```

**Vokatra:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Ohatra 2: Menio ho an'ny Toerana Theme Manokana

**Prompt:**
```
Mamorona menio footer antsoina hoe "Footer Links" miaraka amin'ny mari-pamantarana fitetezana "Quick Links" ary tendreo amin'ny toerana footer izany.
```

**Vokatra:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Fampidirana amin'ny Theme Builder

Rehefa mampiasa Theme Builder, ny fahaiza-manao Mamorona Menio dia:

1. Mamantatra ho azy ireo toerana menio theme misy
2. Mamorona menio miaraka amin'ny mari-pamantarana fitetezana mifanaraka amin'ny endrikao
3. Manendry menio amin'ireo toerana theme marina
4. Manohana ny fanampiana singa menio aorian'ny famoronana

## Fahaiza-manao Mifandraika

- **`add_menu_item`** — Manampy singa amin'ny menio efa misy
- **`update_menu`** — Manova anaran'ny menio na manendry azy indray amin'ny toerana theme
- **`delete_menu`** — Manala menio amin'ny site-nao

## Fanao Tsara Indrindra

- **Mampiasà mari-pamantarana fitetezana mazava** — ataovy fohy sy mamaritra tsara ho an'ny mpampiasa ny mari-pamantarana
- **Ampifanaraho amin'ny toerana theme** — tendreo amin'ny toerana theme marina ny menio mba hiseho tsara
- **Omano ny firafitry ny menio** — farito mialoha ny ambaratongan'ny menio alohan'ny hamoronana singa
- **Andramo ny fahaiza-mamaly habe** — hamarino fa miseho tsara amin'ny fitaovana finday ny menio
- **Ataovy mifanaraka amin'ny fiteny eo an-toerana ny mari-pamantarana** — mampiasà mari-pamantarana fitetezana samihafa ho an'ny dikan-teny amin'ny fiteny samihafa

## Fetra

- Ho an'ny fampisehoana ihany ny mari-pamantarana fitetezana; ny `name` anatiny dia mbola ampiasaina amin'ny famantarana WordPress
- Miovaova ny fanohanan'ny theme; tsy ny theme rehetra no manohana ny toerana menio rehetra
- Tsy maintsy ampiana misaraka ny singa menio aorian'ny famoronana menio
- Mitaky fanavaozana ny menio ny fanovana mari-pamantarana fitetezana

## Fahaiza-manao Mifandraika

- [Mamorona Logo SVG](./generate-logo-svg.md) — mamorona logo ho an'ny lohatenin'ny site-nao
- [Manamarina ny Fifanoheran'ny Palette](./validate-palette-contrast.md) — miantoka drafitra loko azo idirana
