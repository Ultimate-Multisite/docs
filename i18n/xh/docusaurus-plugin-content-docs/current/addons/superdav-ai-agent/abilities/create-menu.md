---
title: Yenza Imenyu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Yila iMenyu

Isakhono se-**Yila iMenyu** siyila iimenyu zokukhangela ze-WordPress ngenkxaso yeeleyibhile zokukhangela ezahlukileyo ezingafaniyo nezihloko zamaphepha.

## Isishwankathelo

Esi sakhono sandisa ukusebenza okuqhelekileyo kokuyila imenyu ngesakhono sokuchaza ipharamitha ethi `navigation_label`. Oku kukuvumela ukuba uyile iimenyu apho ileyibhile eboniswa ekukhangeleni yahlukile kwisihloko sephepha, nto leyo enika ukuguquguquka ngakumbi kulwakhiwo lwesayithi namava omsebenzisi.

## Iipharamitha

| Ipharamitha | Uhlobo | Iyafuneka | Inkcazelo |
|-----------|------|----------|-------------|
| `name` | string | Ewe | Igama lemenyu, umz. `Primary Navigation` |
| `location` | string | Hayi | Indawo ye-theme yokwabela le menyu kuyo, umz. `primary` |
| `navigation_label` | string | Hayi | Ileyibhile eza kuboniswa ekukhangeleni (eyahlukileyo kwisihloko sephepha) |

## Ixabiso Elibuyiswayo

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Ileyibhile Yokukhangela xa ithelekiswa neSihloko Sephepha

Ipharamitha ethi `navigation_label` ikuvumela ukuba wahlule igama lemenyu langaphakathi kwileyibhile eboniswa kubasebenzisi:

- **`name`** — Isazisi semenyu sangaphakathi esisetyenziswa yi-WordPress (umz., "Primary Navigation")
- **`navigation_label`** — Ileyibhile eboniswa kubatyeleli besayithi ekukhangeleni (umz., "Main Menu")

Oku kuluncedo xa:
- Indlela yakho yangaphakathi yokunika amagama yahlukile kwiileyibhile ezibonwa ngabasebenzisi
- Ufuna iileyibhile ezimfutshane ekukhangeleni kunezo zikwiphaneli yolawulo
- Kufuneka uxhase iilwimi ezininzi ezinobude beeleyibhile obahlukeneyo
- Wakha iimenyu zemimandla ethile okanye amaqela abasebenzisi athile

## Imizekelo Yokusetyenziswa

### Umzekelo 1: Imenyu Elula eneLeyibhile Yokukhangela

**Isicelo:**
```
Yila imenyu yokukhangela ephambili ebizwa ngokuba yi-"Main Navigation" enoleyibhile yokukhangela ethi "Menu".
```

**Isiphumo:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Umzekelo 2: Imenyu Yendawo ethile ye-Theme

**Isicelo:**
```
Yila imenyu yefooter ebizwa ngokuba yi-"Footer Links" enoleyibhile yokukhangela ethi "Quick Links" uze uyabele kwindawo yefooter.
```

**Isiphumo:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Umdibaniso ne-Theme Builder

Xa usebenzisa i-Theme Builder, isakhono se-Yila iMenyu:

1. Sifumanisa ngokuzenzekelayo iindawo zemenyu ze-theme ezikhoyo
2. Siyila iimenyu ezineeleyibhile zokukhangela ezifanelekileyo kuyilo lwakho
3. Sabela iimenyu kwiindawo ezichanekileyo ze-theme
4. Sixhasa ukongeza izinto zemenyu emva kokuyilwa

## Izakhono Ezihambelanayo

- **`add_menu_item`** — Yongeza izinto kwimenyu esele ikhona
- **`update_menu`** — Phinda unike imenyu igama okanye uyabele kwakhona kwindawo ye-theme
- **`delete_menu`** — Susa imenyu kwisayithi yakho

## Ezona Ndlela Zilungileyo

- **Sebenzisa iileyibhile zokukhangela ezicacileyo** — gcina iileyibhile zifutshane kwaye zichaza kakuhle kubasebenzisi
- **Tshatisa iindawo ze-theme** — yabela iimenyu kwindawo echanekileyo ye-theme ukuze ziboniswe ngokufanelekileyo
- **Cwangcisa ulwakhiwo lwemenyu** — gqiba ngehierarchy yemenyu yakho ngaphambi kokudala izinto
- **Vavanya ukusabela** — qinisekisa ukuba iimenyu ziboniswa ngokuchanekileyo kwizixhobo eziphathwayo
- **Lungiselela iileyibhile ngokolwimi** — sebenzisa iileyibhile zokukhangela ezahlukeneyo kwiinguqulelo zeelwimi ezahlukeneyo

## Imida

- Iileyibhile zokukhangela zezokubonisa kuphela; i-`name` yangaphakathi isasetyenziswa ekuchongeni kwe-WordPress
- Inkxaso ye-theme iyahluka; ayizizo zonke ii-theme ezixhasa zonke iindawo zemenyu
- Izinto zemenyu kufuneka zongezwe ngokwahlukeneyo emva kokuyilwa kwemenyu
- Ukutshintsha ileyibhile yokukhangela kufuna ukuhlaziya imenyu

## Izakhono Ezihambelanayo

- [Yenza iLogo SVG](./generate-logo-svg.md) — yila iilogo zeheader yesayithi yakho
- [Qinisekisa Umahluko wePalette](./validate-palette-contrast.md) — qinisekisa izikimu zemibala ezifikeleleka lula
