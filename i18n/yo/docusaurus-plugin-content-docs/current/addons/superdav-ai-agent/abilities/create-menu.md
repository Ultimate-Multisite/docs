---
title: Ṣẹda Mẹnu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Ṣẹda Akojọ aṣayan

Agbara **Ṣẹda Akojọ aṣayan** n ṣẹda awọn akojọ aṣayan ìtọ́sọ́nà WordPress pẹlu atilẹyin fun awọn aami ìtọ́sọ́nà ọtọ̀tọ̀ ti o yàtọ̀ si awọn akọle oju-iwe.

## Akopọ

Agbara yii n fa iṣẹ ṣiṣe boṣewa fun ṣiṣẹda akojọ aṣayan gbooro pẹlu agbara lati ṣalaye paramita `navigation_label`. Eyi jẹ ki o le ṣẹda awọn akojọ aṣayan nibiti aami ti a fi han ninu ìtọ́sọ́nà yàtọ̀ si akọle oju-iwe, ti o funni ni irọrun diẹ sii ninu eto site ati iriri olumulo.

## Awọn Paramita

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Orukọ akojọ aṣayan, fun apẹẹrẹ `Primary Navigation` |
| `location` | string | No | Ipo theme lati fi akojọ aṣayan yii si, fun apẹẹrẹ `primary` |
| `navigation_label` | string | No | Aami lati fi han ninu ìtọ́sọ́nà (ti o yàtọ̀ si akọle oju-iwe) |

## Iye ti a Da Pada

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Aami Ìtọ́sọ́nà la. Akọle Oju-iwe

Paramita `navigation_label` jẹ ki o le ya orukọ akojọ aṣayan inu kuro lọdọ aami ti a fi han si awọn olumulo:

- **`name`** — Idamọ akojọ aṣayan inu ti WordPress n lo (fun apẹẹrẹ, "Primary Navigation")
- **`navigation_label`** — Aami ti a fi han si awọn alejo site ninu ìtọ́sọ́nà (fun apẹẹrẹ, "Main Menu")

Eyi wulo nigba ti:
- Ilana orukọ inu rẹ yàtọ̀ si awọn aami ti awọn olumulo n rii
- O fẹ awọn aami kukuru diẹ sii ninu ìtọ́sọ́nà ju ninu paneli admin lọ
- O nilo lati ṣe atilẹyin fun ọpọlọpọ ede pẹlu gigun aami ti o yàtọ̀
- O n kọ awọn akojọ aṣayan fun awọn agbegbe kan pato tabi awọn ẹgbẹ olumulo

## Awọn Apẹẹrẹ Lilo

### Apẹẹrẹ 1: Akojọ aṣayan Rọrun pẹlu Aami Ìtọ́sọ́nà

**Ìbéèrè:**
```
Ṣẹda akojọ aṣayan ìtọ́sọ́nà akọkọ kan ti a pe ni "Main Navigation" pẹlu aami ìtọ́sọ́nà "Menu".
```

**Abajade:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Apẹẹrẹ 2: Akojọ aṣayan fun Ipo Theme Kan Pataki

**Ìbéèrè:**
```
Ṣẹda akojọ aṣayan footer kan ti a pe ni "Footer Links" pẹlu aami ìtọ́sọ́nà "Quick Links" ki o si fi si ipo footer.
```

**Abajade:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Iṣepọ pẹlu Theme Builder

Nigbati o ba n lo Theme Builder, agbara Ṣẹda Akojọ aṣayan:

1. N ṣe awari awọn ipo akojọ aṣayan theme ti o wa laifọwọyi
2. N ṣẹda awọn akojọ aṣayan pẹlu awọn aami ìtọ́sọ́nà ti o yẹ fun apẹrẹ rẹ
3. N fi awọn akojọ aṣayan si awọn ipo theme to tọ
4. N ṣe atilẹyin fun fifi awọn ohun akojọ aṣayan kun lẹhin ṣiṣẹda

## Awọn Agbara ti o Jọmọ

- **`add_menu_item`** — Fi awọn ohun kun akojọ aṣayan ti o wa tẹlẹ
- **`update_menu`** — Tun akojọ aṣayan lorukọ tabi fi si ipo theme miiran
- **`delete_menu`** — Yọ akojọ aṣayan kuro lati site rẹ

## Awọn Ilana Ti o Dara Julọ

- **Lo awọn aami ìtọ́sọ́nà ti o yege** — jẹ ki awọn aami kuru ati ṣalaye fun awọn olumulo
- **Ba awọn ipo theme mu** — fi awọn akojọ aṣayan si ipo theme to tọ fun ifihan to dara
- **Gbero eto akojọ aṣayan** — pinnu lori ipele akojọ aṣayan rẹ ṣaaju ṣiṣẹda awọn ohun
- **Ṣayẹwo idahun si iwọn iboju** — jẹrisi pe awọn akojọ aṣayan han deede lori awọn ẹrọ alagbeka
- **Ṣe awọn aami ni ibamu si agbegbe ede** — lo awọn aami ìtọ́sọ́nà oriṣiriṣi fun awọn ẹya ede oriṣiriṣi

## Awọn Aropin

- Awọn aami ìtọ́sọ́nà jẹ fun ifihan nikan; `name` inu ni a ṣi n lo fun idamọ WordPress
- Atilẹyin theme yatọ; kii ṣe gbogbo awọn theme ni o ṣe atilẹyin fun gbogbo awọn ipo akojọ aṣayan
- A gbọdọ fi awọn ohun akojọ aṣayan kun lọtọ lẹhin ṣiṣẹda akojọ aṣayan
- Yiyipada aami ìtọ́sọ́nà nilo imudojuiwọn akojọ aṣayan

## Awọn Agbara ti o Jọmọ

- [Ṣẹda Logo SVG](./generate-logo-svg.md) — ṣẹda awọn logo fun header site rẹ
- [Ṣe Afọwọsi Iyatọ Palette](./validate-palette-contrast.md) — rii daju pe awọn eto awọ jẹ irọrun wiwọle
