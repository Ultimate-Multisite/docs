---
title: Gostinski meniji
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Gostinski meniji

Funkcija **Gostinski meniji** omogoča Theme Builder, da ustvari in vgradi strukturirane strani menijev hrane in pijače neposredno v vaše WordPress spletno mesto.

## Pregled {#overview}

Theme Builder lahko zdaj ustvari profesionalne, strukturirane strani menijev za gostinska podjetja, vključno z restavracijami, kavarnami, bari in catering storitvami. Ti meniji so popolnoma integrirani v zasnovo vašega spletnega mesta ter jih je mogoče preprosto posodabljati in upravljati.

## Podprte vrste gostinstva {#supported-hospitality-types}

- **Restavracije** — meniji za postreženo gostinsko ponudbo
- **Kavarne** — meniji kave in lahkih jedi
- **Bari in saloni** — meniji pijač in predjedi
- **Pekarne** — meniji peciva in kruha
- **Catering storitve** — možnosti menijev za dogodke
- **Food trucki** — meniji mobilne ponudbe hrane
- **Pivovarne in vinske kleti** — meniji pijač z opisi

## Struktura menija {#menu-structure}

### Kategorije menija {#menu-categories}

Meniji so organizirani v kategorije:

- **Predjedi** — začetne jedi in manjši krožniki
- **Glavne jedi** — glavne jedi
- **Priloge** — priloge in zelenjava
- **Sladice** — sladki priboljški
- **Pijače** — pijače (alkoholne in brezalkoholne)
- **Posebne ponudbe** — dnevne ali sezonske posebne ponudbe

### Oblika elementa menija {#menu-item-format}

Vsak element menija vključuje:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Polja elementa {#item-fields}

| Polje | Vrsta | Opis |
|-------|------|-------------|
| `name` | string | Ime jedi ali pijače |
| `description` | string | Podroben opis elementa |
| `price` | string | Cena (oblikovana z valuto) |
| `dietary_info` | array | Prehranske lastnosti (vegansko, brez glutena itd.) |
| `allergens` | array | Pogosti alergeni (oreščki, školjke itd.) |
| `availability` | string | Kdaj je na voljo (dnevno, sezonsko itd.) |

## Ustvarjanje gostinskih menijev {#creating-hospitality-menus}

### 1. korak: Navedite informacije o meniju {#step-1-provide-menu-information}

Povejte Theme Builder o svojem meniju:

```
Ustvari restavracijski meni za mojo italijansko restavracijo s predjedmi,
testeninskimi jedmi, glavnimi jedmi in sladicami. Vključi cene in opise.
```

### 2. korak: Theme Builder ustvari meni {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Ustvari strukturirano stran menija
2. Jo oblikuje tako, da se ujema s temo vašega spletnega mesta
3. Elemente organizira v kategorije
4. Oblikuje cene in opise
5. Doda prehranske informacije in informacije o alergenih

### 3. korak: Preglejte in prilagodite {#step-3-review-and-customize}

Lahko:

1. Uredite elemente menija in cene
2. Dodate ali odstranite kategorije
3. Preuredite elemente znotraj kategorij
4. Posodobite opise in prehranske informacije
5. Prilagodite slog in postavitev

## Možnosti prikaza menija {#menu-display-options}

### Celotna stran menija {#full-menu-page}

Namenska stran, ki prikazuje vaš celoten meni:

- Organizirano po kategorijah
- Z možnostjo iskanja in filtriranja
- Postavitev, prijazna za tiskanje
- Mobilno odzivna zasnova

### Gradnik menija {#menu-widget}

Vdelajte odseke menija na druge strani:

- Izpostavljeni elementi na domači strani
- Dnevne posebne ponudbe v stranski vrstici
- Meni pijač na strani bara
- Predstavitev sladic v nogi

### Meni PDF {#menu-pdf}

Ustvarite prenosljiv PDF meni:

- Profesionalno oblikovanje
- Kakovost, pripravljena za tisk
- Vključuje slike in opise
- Preprosto za deljenje in pošiljanje po e-pošti

## Prehranske informacije in informacije o alergenih {#dietary-and-allergen-information}

### Prehranske lastnosti {#dietary-attributes}

Označite elemente s prehranskimi informacijami:

- **Vegansko** — brez živalskih izdelkov
- **Vegetarijansko** — brez mesa
- **Brez glutena** — varno za celiakijo
- **Brez mlečnih izdelkov** — brez mlečnih izdelkov
- **Brez oreščkov** — brez drevesnih oreščkov ali arašidov
- **Z nizko vsebnostjo ogljikovih hidratov** — zmanjšana količina ogljikovih hidratov
- **Z visoko vsebnostjo beljakovin** — bogato z beljakovinami

### Opozorila o alergenih {#allergen-warnings}

Vključite pogoste alergene:

- **Oreščki** — drevesni oreščki in arašidi
- **Školjke** — raki in mehkužci
- **Ribe** — vse vrste rib
- **Mlečni izdelki** — mleko in mlečni izdelki
- **Jajca** — kokošja jajca
- **Soja** — sojini izdelki
- **Gluten** — pšenica in žita, ki vsebujejo gluten
- **Sezam** — sezamova semena in olje

## Upravljanje menija {#menu-management}

### Posodabljanje cen {#updating-prices}

Preprosto posodobite cene v meniju:

1. Pomaknite se na stran menija
2. Kliknite "Uredi meni"
3. Posodobite cene elementov
4. Shranite spremembe
5. Spremembe se takoj prikažejo na vašem spletnem mestu

### Dodajanje sezonskih elementov {#adding-seasonal-items}

Ustvarite sezonske različice menija:

1. Ustvarite novo različico menija
2. Dodajte sezonske elemente
3. Označite elemente kot "Sezonsko"
4. Načrtujte datume razpoložljivosti
5. Samodejno prikažite med sezono

### Upravljanje posebnih ponudb {#managing-specials}

Prikažite dnevne ali tedenske posebne ponudbe:

1. Ustvarite kategorijo "Posebne ponudbe"
2. Dodajte elemente z datumi razpoložljivosti
3. Izpostavite posebne ponudbe na domači strani
4. Posodabljajte dnevno ali tedensko
5. Arhivirajte stare posebne ponudbe

## Integracija s Theme Builder {#integration-with-theme-builder}

Pri uporabi Theme Builder za gostinska spletna mesta:

1. **Samodejno zaznavanje menija** — prepozna, ali ste podjetje s hrano/pijačo
2. **Ustvarjanje strani menija** — ustvari profesionalne strani menijev
3. **Ujemanje zasnove** — meniji se ujemajo s temo vašega spletnega mesta
4. **Mobilna optimizacija** — meniji se lepo prikazujejo na telefonih
5. **SEO optimizacija** — meniji so prijazni iskalnikom

## Najboljše prakse {#best-practices}

### Oblikovanje menija {#menu-design}

- **Jasna organizacija** — logična struktura kategorij
- **Berljivi opisi** — vabljivi in informativni
- **Dosledno oblikovanje cen** — jasna valuta in oblikovanje
- **Profesionalne fotografije** — visokokakovostne slike hrane
- **Prazen prostor** — ne prenatrpajte strani

### Vsebina {#content}

- **Natančni opisi** — natančno opišite elemente
- **Izpostavite posebne ponudbe** — naj posebne ponudbe izstopajo
- **Vključite alergene** — vedno navedite alergene
- **Redno posodabljajte** — ohranjajte cene in elemente aktualne
- **Uporabite vabljiv jezik** — naj elementi zvenijo okusno

### Dostopnost {#accessibility}

- **Berljive pisave** — uporabljajte jasne, čitljive pisave
- **Zadosten kontrast** — zagotovite, da je besedilo berljivo
- **Prehranske oznake** — jasno označite prehranske možnosti
- **Opozorila o alergenih** — alergene prikažite na vidnem mestu
- **Prijazno mobilnim napravam** — preizkusite na vseh napravah

## Primeri {#examples}

### Struktura restavracijskega menija {#restaurant-menu-structure}

```
Predjedi
├── Bruschetta al Pomodoro
├── Ocvrti lignji
└── Solata Caprese

Testeninske jedi
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Glavne jedi
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Sladice
├── Tiramisu
├── Panna Cotta
└── Izbor gelata
```

### Struktura menija kavarne {#cafe-menu-structure}

```
Kava
├── Espresso
├── Cappuccino
└── Latte

Pecivo
├── Rogljički
├── Mafini
└── Scones

Sendviči
├── Panini Caprese
├── Club sendvič z dimljenim puranom
└── Vegetarijanski wrap
```

## Povezane funkcije {#related-features}

- [Ustvari meni](../abilities/create-menu.md) — ustvarite navigacijske menije
- [Oblikovalska usmeritev](./design-direction.md) — prilagodite zasnovo svojega spletnega mesta
- [Raziskovalni intervju](./discovery-interview.md) — načrtujte strukturo svojega spletnega mesta
