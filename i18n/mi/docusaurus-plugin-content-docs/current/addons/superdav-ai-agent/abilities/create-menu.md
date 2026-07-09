---
title: Waihanga Tahua
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Waihanga Tahua

Ka waihanga te āheinga **Waihanga Tahua** i ngā tahua whakatere WordPress me te tautoko mō ngā tapanga whakatere motuhake e rerekē ana i ngā taitara whārangi.

## Tirohanga Whānui

Ka whakawhānui tēnei āheinga i te taumahinga waihanga tahua paerewa mā te āhei ki te tautuhi i tētahi tawhā `navigation_label`. Mā konei ka taea e koe te waihanga tahua e rerekē ai te tapanga e whakaaturia ana i te whakatere i te taitara whārangi, kia nui ake ai te hangore o te hanganga pae me te wheako kaiwhakamahi.

## Ngā Tawhā

| Tawhā | Momo | Hiahiatia | Whakaahuatanga |
|-----------|------|----------|-------------|
| `name` | string | Āe | Ingoa tahua, hei tauira `Primary Navigation` |
| `location` | string | Kāo | Tauwāhi kaupapa hei tautapa i tēnei tahua ki reira, hei tauira `primary` |
| `navigation_label` | string | Kāo | Tapanga hei whakaatu i te whakatere (motuhake i te taitara whārangi) |

## Uara Whakahoki

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Tapanga Whakatere ki te Taitara Whārangi

Mā te tawhā `navigation_label` ka taea e koe te wehe i te ingoa tahua ā-roto i te tapanga e whakaaturia ana ki ngā kaiwhakamahi:

- **`name`** — Kaitautuhi tahua ā-roto e whakamahia ana e WordPress (hei tauira, "Primary Navigation")
- **`navigation_label`** — Te tapanga e whakaaturia ana ki ngā manuhiri pae i te whakatere (hei tauira, "Main Menu")

He whaihua tēnei ina:
- He rerekē tō tikanga whakaingoa ā-roto i ngā tapanga e kitea ana e te kaiwhakamahi
- E hiahia ana koe ki ngā tapanga poto ake i te whakatere i ērā kei te paewhiri whakahaere
- Me tautoko koe i ngā reo maha me ngā roa tapanga rerekē
- Kei te hanga koe i ngā tahua mō ngā rohe motuhake, mō ngā rōpū kaiwhakamahi rānei

## Ngā Tauira Whakamahi

### Tauira 1: Tahua Māmā me te Tapanga Whakatere

**Tohuaki:**
```
Waihangatia tētahi tahua whakatere matua ko "Main Navigation" te ingoa, me te tapanga whakatere "Menu".
```

**Hua:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Tauira 2: Tahua mō tētahi Tauwāhi Kaupapa Motuhake

**Tohuaki:**
```
Waihangatia tētahi tahua hiku ko "Footer Links" te ingoa, me te tapanga whakatere "Quick Links", ā, tautapahia ki te tauwāhi hiku.
```

**Hua:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Tuitui ki Theme Builder

Ina whakamahi i Theme Builder, ko te āheinga Waihanga Tahua ka:

1. Kite aunoa i ngā tauwāhi tahua kaupapa e wātea ana
2. Waihanga tahua me ngā tapanga whakatere e tika ana mō tō hoahoa
3. Tautapa i ngā tahua ki ngā tauwāhi kaupapa tika
4. Tautoko i te tāpiri tūemi tahua i muri i te waihangatanga

## Ngā Āheinga E Hāngai Ana

- **`add_menu_item`** — Tāpiri tūemi ki tētahi tahua e tīariari ana
- **`update_menu`** — Whakaingoa anō i tētahi tahua, tautapa anō rānei ki tētahi tauwāhi kaupapa
- **`delete_menu`** — Tango i tētahi tahua i tō pae

## Ngā Tikanga Pai

- **Whakamahia ngā tapanga whakatere mārama** — kia poto, kia whakamārama hoki ngā tapanga mō ngā kaiwhakamahi
- **Whakaōritea ngā tauwāhi kaupapa** — tautapa i ngā tahua ki te tauwāhi kaupapa tika kia whakaatu tika ai
- **Whakamaheretia te hanganga tahua** — whakatauria tō arowhai tahua i mua i te waihanga tūemi
- **Whakamātauria te urupare** — manatoko ka whakaatu tika ngā tahua ki ngā pūrere pūkoro
- **Whakakāinga reo i ngā tapanga** — whakamahia ngā tapanga whakatere rerekē mō ngā putanga reo rerekē

## Ngā Herenga

- He whakaaturanga-anake ngā tapanga whakatere; ka whakamahia tonutia te `name` ā-roto mō te tautuhinga WordPress
- He rerekē te tautoko kaupapa; kāore ngā kaupapa katoa e tautoko i ngā tauwāhi tahua katoa
- Me tāpiri motuhake ngā tūemi tahua i muri i te waihanga tahua
- Ki te huri i tētahi tapanga whakatere, me whakahōu te tahua

## Ngā Āheinga E Hāngai Ana

- [Hanga Logo SVG](./generate-logo-svg.md) — waihanga tohu mō te pane o tō pae
- [Whakamana Rerekētanga Papatae](./validate-palette-contrast.md) — whakarite kia wātea ngā kaupapa tae
