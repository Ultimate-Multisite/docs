---
title: Tema buvimo galimybės
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Możliwości Theme Builder: Szkieletowanie i Aktywacja Tematów Blokowych

Superdav AI Agent v1.12.0 wprowadza dwie potężne możliwości, które pozwalają generować i wdrażać niestandardowe tematy blokowe bezpośrednio z interfejsu czatu.

## Przegląd {#overview}

Możliwości **scaffold-block-theme** (szkieletowanie tematu blokowego) i **activate-theme** (aktywacja tematu) pozwalają agentom na:
- Generowanie kompletnych, gotowych do produkcji tematów blokowych na podstawie Twoich wymagań
- Automatyczną aktywację tematów na Twojej stronie bez ręcznej ingerencji
- Tworzenie spójnej tożsamości wizualnej dzięki wspólnym decyzjom projektowym

## Szkieletowanie Tematu Blokowego (Scaffold Block Theme) {#scaffold-block-theme}

Możliwość **scaffold-block-theme** generuje nowy temat blokowy WordPress z pełną strukturą tematu, w tym:

- konfigurację `theme.json` z tokenami projektowymi
- pliki szablonów bloków dla powszechnych układów
- niestandardowe style i warianty bloków
- metadane tematu i deklaracje wsparcia

### Jak użyć {#how-to-invoke}

W czacie z Superdav AI Agent możesz poprosić o generowanie tematu:

```
"Stwórz temat blokowy o nazwie 'Modern Agency' z paletą kolorów niebieskiego i białego,
typografią bezszeryfową oraz profesjonalnym układem"
```

Agent zrobi to:
1. Zbada Twoje preferencje projektowe poprzez rozmowę
2. Wygeneruje pełną strukturę tematu
3. Utworzy wszystkie niezbędne pliki tematu
4. Przygotuje temat do aktywacji

### Oczekiwany wynik {#expected-output}

Gdy możliwość wykonana zostanie pomyślnie, zobaczysz:

- Potwierdzenie, że temat został szkieletowany
- Nazwę i lokalizację tematu
- Podsumowanie zastosowanych tokenów projektowych (kolory, typografia, odstępy)
- Status gotowości do aktywacji

Przykład wyniku:
```
✓ Temat "Modern Agency" pomyślnie szkieletowany
  Lokalizacja: /wp-content/themes/modern-agency/
  Kolory: Główny #0066CC, Drugorzędny #FFFFFF
  Typografia: Inter (bezszeryfowa)
  Status: Gotowy do aktywacji
```

## Aktywacja Tematu (Activate Theme) {#activate-theme}

Funkcija **activate-theme** leina jūsų svetainę naujai sukurto arba esamą blokową temą.

### Kaip ją įjungti {#how-to-invoke-1}

Po to, kai sukurtę temą pateikote (scaffolding), galite ją aktyvuoti iš karto:

```
"Aktyvuoti Modern Agency temą"
```

Arba aktyvuoti bet kuriuo esamą temą:

```
"Pakeisti į Twentytwentyfour temą"
```

### Tikėtinas rezultatas {#expected-output-1}

Kai aktyvavimas sėkmingai vyks:

- Aktyvumo patvirtinimas, kura tema yra aktyvi
- Ankstesnio temo pavadinimas (rekomendavimui)
- Svetainės URL, kurioje tema dabar veikia
- Bet kokios tema specifikos nurodytos nustatymų atsižvelgimo

Pavyzdys rezultato:
```
✓ Tema sėkmingai aktyvuota
  Aktyvi tema: Modern Agency
  Ankstesnio tema: Twentytwentyfour
  Veikia: https://yoursite.com
  Pastaba: Patikrinkite naują dizainąje puslapyje, kad patvirtintumėte

- Temai yra įdiegta /wp-content/themes/ ir turi atitikt WordPress pavadinimo konvencijas
- Aktyvavimas reikalauja tinkamos įsipareigojimų jūsų WordPress svetainėje

- Theme'ai (temai) geriausiai veikia su WordPress 5.9 ir vėliau laukiamais versijomis

## Problemos atšalinimas

**Tema nepasirodė po įdiegimo**
- Patikrinkite, ar tema katalogas egzistuoja ir turi tinkamos įsipareigojimų
- Patikrinkite, ar `theme.json` yra galiojantis JSON formatas
- Įsitikinkite, kad tema pavadinimas nekonfliktuoja su jau esančiais temomis

**Aktyvavimas nepasirenka**
- Patvirtinkite, kad turite administratorius įsipareigojimus
- Patikrinkite, ar WordPress gali skaityti temo katalogą
- Peržiūrėkite WordPress klaidos logus (error logs) gauti daugiau informacijos

**Design tokens neįviešinasi**
- Patikrinkite, ar `theme.json` sintaksis yra tinkamas
- Laukiame visų caching pluginų (cache plugins)
- Patikrinkite, ar jūsų WordPress versija palaiko naudojamus tokenus

## Ką daryti toliau

Po temos aktyvavimo galite:
- Naudoti **Design System Aesthetics** įgūdžių, kad tobulintumėte tipografiją, spalvas ir atrypus
- Prisitaikyti individualių blokų stilius per WordPress blokų redaktorią
- Įdėti pritaikytą CSS į temos `style.css` failą
- Sukurti pritaikytus blokų šablonus specifinėms puslpių tipams
