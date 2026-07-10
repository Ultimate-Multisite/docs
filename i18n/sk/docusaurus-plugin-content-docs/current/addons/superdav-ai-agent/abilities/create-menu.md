---
title: Vytvoriť menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Vytvoriť menu {#create-menu}

Schopnosť **Vytvoriť menu** vytvára navigačné menu WordPress s podporou odlišných navigačných štítkov oddelených od názvov stránok.

## Prehľad {#overview}

Táto schopnosť rozširuje štandardnú funkcionalitu vytvárania menu o možnosť zadať parameter `navigation_label`. To vám umožňuje vytvárať menu, v ktorých sa štítok zobrazený v navigácii líši od názvu stránky, čím poskytuje väčšiu flexibilitu v štruktúre webu a používateľskej skúsenosti.

## Parametre {#parameters}

| Parameter | Typ | Povinné | Popis |
|-----------|------|----------|-------------|
| `name` | string | Áno | Názov menu, napr. `Primary Navigation` |
| `location` | string | Nie | Umiestnenie témy, ku ktorému sa má toto menu priradiť, napr. `primary` |
| `navigation_label` | string | Nie | Štítok na zobrazenie v navigácii (odlišný od názvu stránky) |

## Návratová hodnota {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigačný štítok vs. názov stránky {#navigation-label-vs-page-title}

Parameter `navigation_label` vám umožňuje oddeliť interný názov menu od štítka zobrazeného používateľom:

- **`name`** — Interný identifikátor menu používaný WordPress (napr. „Primary Navigation“)
- **`navigation_label`** — Štítok zobrazený návštevníkom webu v navigácii (napr. „Main Menu“)

Je to užitočné, keď:
- Vaša interná konvencia pomenovania sa líši od štítkov viditeľných pre používateľov
- Chcete mať v navigácii kratšie štítky než v administračnom paneli
- Potrebujete podporovať viacero jazykov s rôznymi dĺžkami štítkov
- Vytvárate menu pre konkrétne regióny alebo skupiny používateľov

## Príklady použitia {#usage-examples}

### Príklad 1: Jednoduché menu s navigačným štítkom {#example-1-simple-menu-with-navigation-label}

**Výzva:**
```
Vytvorte primárne navigačné menu s názvom „Main Navigation“ s navigačným štítkom „Menu“.
```

**Výsledok:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Príklad 2: Menu pre konkrétne umiestnenie témy {#example-2-menu-for-specific-theme-location}

**Výzva:**
```
Vytvorte menu pätičky s názvom „Footer Links“ s navigačným štítkom „Quick Links“ a priraďte ho k umiestneniu pätičky.
```

**Výsledok:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrácia s Theme Builder {#integration-with-theme-builder}

Pri používaní Theme Builder schopnosť Vytvoriť menu:

1. Automaticky deteguje dostupné umiestnenia menu témy
2. Vytvára menu s vhodnými navigačnými štítkami pre váš dizajn
3. Priraďuje menu k správnym umiestneniam témy
4. Podporuje pridávanie položiek menu po vytvorení

## Súvisiace schopnosti {#related-abilities}

- **`add_menu_item`** — Pridajte položky do existujúceho menu
- **`update_menu`** — Premenujte menu alebo ho znova priraďte k umiestneniu témy
- **`delete_menu`** — Odstráňte menu zo svojho webu

## Osvedčené postupy {#best-practices}

- **Používajte jasné navigačné štítky** — udržujte štítky stručné a opisné pre používateľov
- **Zlaďte umiestnenia témy** — priraďte menu k správnemu umiestneniu témy pre správne zobrazenie
- **Naplánujte štruktúru menu** — rozhodnite sa o hierarchii svojho menu pred vytváraním položiek
- **Otestujte responzívnosť** — overte, že sa menu správne zobrazuje na mobilných zariadeniach
- **Lokalizujte štítky** — používajte rôzne navigačné štítky pre rôzne jazykové verzie

## Obmedzenia {#limitations}

- Navigačné štítky slúžia iba na zobrazenie; interný `name` sa stále používa na identifikáciu vo WordPress
- Podpora tém sa líši; nie všetky témy podporujú všetky umiestnenia menu
- Položky menu musia byť pridané samostatne po vytvorení menu
- Zmena navigačného štítka vyžaduje aktualizáciu menu

## Súvisiace schopnosti {#related-abilities-1}

- [Generovať logo SVG](./generate-logo-svg.md) — vytvorte logá pre hlavičku svojho webu
- [Overiť kontrast palety](./validate-palette-contrast.md) — zabezpečte prístupné farebné schémy
