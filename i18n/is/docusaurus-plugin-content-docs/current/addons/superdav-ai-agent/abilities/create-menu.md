---
title: Búa til valmynd
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Búa til valmynd

Getan **Búa til valmynd** býr til WordPress-leiðsagnarvalmyndir með stuðningi við aðskilin leiðsagnarmerki sem eru ólík síðutitlum.

## Yfirlit

Þessi geta útvíkkar staðlaða virkni til að búa til valmyndir með möguleikanum á að tilgreina `navigation_label` færibreytu. Þetta gerir þér kleift að búa til valmyndir þar sem merkið sem birtist í leiðsögn er annað en síðutitillinn, sem veitir meiri sveigjanleika í uppbyggingu vefs og notendaupplifun.

## Færibreytur

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|-----------|------|----------|-------------|
| `name` | string | Já | Heiti valmyndar, t.d. `Primary Navigation` |
| `location` | string | Nei | Staðsetning í þema sem á að úthluta þessari valmynd á, t.d. `primary` |
| `navigation_label` | string | Nei | Merki sem á að birta í leiðsögn (aðskilið frá síðutitli) |

## Skilagildi

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Leiðsagnarmerki á móti síðutitli

`navigation_label` færibreytan gerir þér kleift að aðskilja innra heiti valmyndar frá merkinu sem birtist notendum:

- **`name`** — Innra auðkenni valmyndar sem WordPress notar (t.d. „Primary Navigation“)
- **`navigation_label`** — Merkið sem birtist gestum vefsins í leiðsögninni (t.d. „Main Menu“)

Þetta er gagnlegt þegar:
- Innri nafnavenja þín er ólík merkjum sem notendur sjá
- Þú vilt styttri merki í leiðsögn en í stjórnborðinu
- Þú þarft að styðja mörg tungumál með mismunandi lengd merkja
- Þú ert að byggja valmyndir fyrir tiltekin svæði eða notendahópa

## Notkunardæmi

### Dæmi 1: Einföld valmynd með leiðsagnarmerki

**Fyrirmæli:**
```
Búðu til aðalleiðsagnarvalmynd sem heitir „Main Navigation“ með leiðsagnarmerkinu „Menu“.
```

**Niðurstaða:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Dæmi 2: Valmynd fyrir tiltekna þemastaðsetningu

**Fyrirmæli:**
```
Búðu til fótvalmynd sem heitir „Footer Links“ með leiðsagnarmerkinu „Quick Links“ og úthlutaðu henni á fótstaðsetninguna.
```

**Niðurstaða:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Samþætting við Theme Builder

Þegar Theme Builder er notaður mun getan Búa til valmynd:

1. Greina sjálfkrafa tiltækar valmyndastaðsetningar þema
2. Búa til valmyndir með viðeigandi leiðsagnarmerkjum fyrir hönnunina þína
3. Úthluta valmyndum á réttar þemastaðsetningar
4. Styðja að valmyndaratriðum sé bætt við eftir stofnun

## Tengdar getu

- **`add_menu_item`** — Bæta atriðum við fyrirliggjandi valmynd
- **`update_menu`** — Endurnefna valmynd eða úthluta henni aftur á þemastaðsetningu
- **`delete_menu`** — Fjarlægja valmynd af vefnum þínum

## Bestu starfsvenjur

- **Notaðu skýr leiðsagnarmerki** — hafðu merki hnitmiðuð og lýsandi fyrir notendur
- **Passaðu við þemastaðsetningar** — úthlutaðu valmyndum á rétta þemastaðsetningu fyrir rétta birtingu
- **Skipuleggðu uppbyggingu valmyndar** — ákveddu stigveldi valmyndarinnar áður en atriði eru búin til
- **Prófaðu svörunarhæfni** — staðfestu að valmyndir birtist rétt á farsímum
- **Staðfærðu merki** — notaðu mismunandi leiðsagnarmerki fyrir mismunandi tungumálaútgáfur

## Takmarkanir

- Leiðsagnarmerki eru aðeins til birtingar; innra `name` er enn notað til auðkenningar í WordPress
- Stuðningur þema er breytilegur; ekki öll þemu styðja allar valmyndastaðsetningar
- Bæta þarf valmyndaratriðum við sérstaklega eftir að valmynd er búin til
- Breyting á leiðsagnarmerki krefst þess að valmyndin sé uppfærð

## Tengdar getu

- [Búa til SVG-merki](./generate-logo-svg.md) — búa til merki fyrir haus vefsins þíns
- [Staðfesta birtuskil litaspjalds](./validate-palette-contrast.md) — tryggja aðgengileg litasamsetning
