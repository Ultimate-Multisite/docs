---
title: Dala Imenyu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Dala Imenyu

Ikhono le-**Dala Imenyu** lidala amamenyu okuzulazula e-WordPress ngokusekela amalebula okuzulazula ahlukile ahlukene nezihloko zamakhasi.

## Uhlolojikelele {#overview}

Leli khono landisa ukusebenza okuvamile kokudala imenyu ngekhono lokucacisa ipharamitha ethi `navigation_label`. Lokhu kukuvumela ukudala amamenyu lapho ilebula eboniswa ekuzulazuleni ihlukile esihlokweni sekhasi, kunikeze ukuguquguquka okwengeziwe esakhiweni sesayithi nasolwazini lomsebenzisi.

## Amapharamitha {#parameters}

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|-----------|------|----------|-------------|
| `name` | string | Yebo | Igama lemenyu, isb. `Primary Navigation` |
| `location` | string | Cha | Indawo ye-theme ozokwabela kuyo le menyu, isb. `primary` |
| `navigation_label` | string | Cha | Ilebula ezoboniswa ekuzulazuleni (ehlukile esihlokweni sekhasi) |

## Inani Elibuyiswayo {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Ilebula Yokuzulazula uma iqhathaniswa Nesihloko Sekhasi {#navigation-label-vs-page-title}

Ipharamitha ethi `navigation_label` ikuvumela ukuthi uhlukanise igama lemenyu langaphakathi kulebula eboniswa kubasebenzisi:

- **`name`** — Isihlonzi semenyu sangaphakathi esisetshenziswa yi-WordPress (isb., "Primary Navigation")
- **`navigation_label`** — Ilebula eboniswa kubavakashi besayithi ekuzulazuleni (isb., "Main Menu")

Lokhu kuyasiza lapho:
- Indlela yakho yangaphakathi yokuqamba amagama ihlukile kumalebula abonwa abasebenzisi
- Ufuna amalebula amafushane ekuzulazuleni kunasephanelini lokuphatha
- Udinga ukusekela izilimi eziningi ezinobude obuhlukile bamalebula
- Wakha amamenyu ezifunda ezithile noma amaqembu abasebenzisi

## Izibonelo Zokusetshenziswa {#usage-examples}

### Isibonelo 1: Imenyu Elula eneLebula Yokuzulazula {#example-1-simple-menu-with-navigation-label}

**Umyalo:**
```
Dala imenyu yokuzulazula eyinhloko ebizwa ngokuthi "Main Navigation" enelebula yokuzulazula ethi "Menu".
```

**Umphumela:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Isibonelo 2: Imenyu Yendawo Ethile Ye-Theme {#example-2-menu-for-specific-theme-location}

**Umyalo:**
```
Dala imenyu ye-footer ebizwa ngokuthi "Footer Links" enelebula yokuzulazula ethi "Quick Links" futhi uyabele endaweni ye-footer.
```

**Umphumela:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Ukuhlanganiswa ne-Theme Builder {#integration-with-theme-builder}

Lapho usebenzisa i-Theme Builder, ikhono le-Dala Imenyu:

1. Lithola ngokuzenzakalelayo izindawo zemenyu ze-theme ezitholakalayo
2. Lakha amamenyu anamalelebula okuzulazula afanele umklamo wakho
3. Labele amamenyu ezindaweni ezifanele ze-theme
4. Lisekela ukwengeza izinto zemenyu ngemva kokudala

## Amakhono Ahlobene {#related-abilities}

- **`add_menu_item`** — Engeza izinto kumenyu ekhona
- **`update_menu`** — Qamba kabusha imenyu noma uyabele kabusha endaweni ye-theme
- **`delete_menu`** — Susa imenyu kusayithi lakho

## Izindlela Ezinhle Kakhulu {#best-practices}

- **Sebenzisa amalebula okuzulazula acacile** — gcina amalebula emfushane futhi achazayo kubasebenzisi
- **Qondanisa izindawo ze-theme** — yabela amamenyu endaweni efanele ye-theme ukuze aboniswe kahle
- **Hlela isakhiwo semenyu** — nquma isikhundla semenyu yakho ngaphambi kokudala izinto
- **Hlola ukuhambisana nezikrini** — qinisekisa ukuthi amamenyu aboniswa kahle kumadivayisi eselula
- **Yenza amalebula abe awasendaweni** — sebenzisa amalebula okuzulazula ahlukile ezinguqulweni zezilimi ezihlukile

## Imikhawulo {#limitations}

- Amalebula okuzulazula awokubonisa kuphela; `name` yangaphakathi isasetshenziswa ekuhlonzeni kwe-WordPress
- Ukusekelwa kwe-theme kuyahluka; akuwona wonke ama-theme asekela zonke izindawo zemenyu
- Izinto zemenyu kufanele zengezwe ngokuhlukile ngemva kokudala imenyu
- Ukushintsha ilebula yokuzulazula kudinga ukubuyekeza imenyu

## Amakhono Ahlobene {#related-abilities-1}

- [Khiqiza i-Logo SVG](./generate-logo-svg.md) — dala ama-logo we-header yesayithi lakho
- [Qinisekisa Ukuqhathanisa Kwe-Palette](./validate-palette-contrast.md) — qinisekisa izikimu zemibala ezifinyeleleka kalula
