---
title: Cruthaigh Roghchlár
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Cruthaigh Roghchlár

Cruthaíonn cumas **Cruthaigh Roghchlár** roghchláir nascleanúna WordPress le tacaíocht do lipéid nascleanúna ar leith atá scartha ó theidil leathanach.

## Forbhreathnú

Leathnaíonn an cumas seo feidhmiúlacht chaighdeánach chruthú roghchláir leis an gcumas paraiméadar `navigation_label` a shonrú. Ligeann sé seo duit roghchláir a chruthú ina bhfuil an lipéad a thaispeántar sa nascleanúint difriúil ó theideal an leathanaigh, rud a sholáthraíonn níos mó solúbthachta i struchtúr an tsuímh agus in eispéireas an úsáideora.

## Paraiméadair

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|-----------|------|----------|-------------|
| `name` | string | Tá | Ainm roghchláir, m.sh. `Primary Navigation` |
| `location` | string | Níl | Suíomh téama le sannadh don roghchlár seo, m.sh. `primary` |
| `navigation_label` | string | Níl | Lipéad le taispeáint sa nascleanúint (ar leith ó theideal an leathanaigh) |

## Luach Fillte

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Lipéad Nascleanúna vs Teideal Leathanaigh

Ligeann an paraiméadar `navigation_label` duit an t-ainm roghchláir inmheánach a scaradh ón lipéad a thaispeántar d’úsáideoirí:

- **`name`** — Aitheantóir roghchláir inmheánach a úsáideann WordPress (m.sh., "Primary Navigation")
- **`navigation_label`** — An lipéad a thaispeántar do chuairteoirí an tsuímh sa nascleanúint (m.sh., "Main Menu")

Tá sé seo úsáideach nuair:
- Tá do choinbhinsiún ainmniúcháin inmheánach difriúil ó lipéid atá dírithe ar úsáideoirí
- Teastaíonn lipéid níos giorra uait sa nascleanúint ná sa phainéal riaracháin
- Ní mór duit tacú le teangacha iolracha le faid lipéad éagsúla
- Tá tú ag tógáil roghchlár do réigiúin shonracha nó do ghrúpaí úsáideoirí

## Samplaí Úsáide

### Sampla 1: Roghchlár Simplí le Lipéad Nascleanúna

**Leid:**
```
Cruthaigh roghchlár príomh-nascleanúna darb ainm "Main Navigation" leis an lipéad nascleanúna "Menu".
```

**Toradh:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Sampla 2: Roghchlár do Shuíomh Téama Sonrach

**Leid:**
```
Cruthaigh roghchlár buntáisc darb ainm "Footer Links" leis an lipéad nascleanúna "Quick Links" agus sann é don suíomh buntáisc.
```

**Toradh:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Comhtháthú le Theme Builder

Agus Theme Builder á úsáid, déanann cumas Cruthaigh Roghchlár:

1. Suímh roghchláir téama atá ar fáil a bhrath go huathoibríoch
2. Roghchláir a chruthú le lipéid nascleanúna oiriúnacha do do dhearadh
3. Roghchláir a shannadh do na suímh téama chearta
4. Tacú le míreanna roghchláir a chur leis tar éis cruthaithe

## Cumais Ghaolmhara

- **`add_menu_item`** — Cuir míreanna le roghchlár atá ann cheana
- **`update_menu`** — Athainmnigh roghchlár nó sann arís é do shuíomh téama
- **`delete_menu`** — Bain roghchlár de do shuíomh

## Dea-Chleachtais

- **Úsáid lipéid nascleanúna shoiléire** — coinnigh lipéid gonta agus tuairisciúil d’úsáideoirí
- **Meaitseáil suímh téama** — sann roghchláir don suíomh téama ceart chun iad a thaispeáint i gceart
- **Pleanáil struchtúr an roghchláir** — cinntigh ordlathas do roghchláir sula gcruthaíonn tú míreanna
- **Tástáil freagrúlachta** — deimhnigh go dtaispeántar roghchláir i gceart ar ghléasanna soghluaiste
- **Logánaigh lipéid** — úsáid lipéid nascleanúna éagsúla do leaganacha teanga éagsúla

## Teorainneacha

- Is le taispeáint amháin iad lipéid nascleanúna; úsáidtear an `name` inmheánach fós le haghaidh aitheantais WordPress
- Athraíonn tacaíocht téama; ní thacaíonn gach téama le gach suíomh roghchláir
- Ní mór míreanna roghchláir a chur leis ar leithligh tar éis roghchlár a chruthú
- Teastaíonn nuashonrú an roghchláir chun lipéad nascleanúna a athrú

## Cumais Ghaolmhara

- [Gin Logo SVG](./generate-logo-svg.md) — cruthaigh lógónna do cheanntásc do shuímh
- [Bailíochtaigh Codarsnacht Pailéid](./validate-palette-contrast.md) — cinntigh scéimeanna dathanna inrochtana
