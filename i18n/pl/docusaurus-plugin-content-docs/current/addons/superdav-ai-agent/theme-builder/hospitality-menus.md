---
title: Menu restauracyjne
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu Gastronomiczne {#hospitality-menus}

Funkcja **Menu Gastronomiczne** pozwala Theme Builderowi generować i osadzać ustrukturyzowane strony menu potraw i napojów bezpośrednio na Twojej witrynie WordPress.

## Przegląd {#overview}

Theme Builder może teraz tworzyć profesjonalne, ustrukturyzowane strony menu dla biznesów gastronomicznych, takich jak restauracje, kawiarnie, bary i firmy cateringowe. Te menu są w pełni zintegrowane z designem Twojej witryny i można je łatwo aktualizować oraz zarządzać.

## Obsługiwane Typy Gastronomiczne {#supported-hospitality-types}

- **Restauracje** — menu pełnej obsługi obiadowej
- **Kawiarnie** — menu kawy i lekkich przekąsek
- **Bary i Lounge** — menu napojów i przystawek
- **Piekarnie** — menu ciast i pieczywa
- **Usługi Cateringowe** — opcje menu na wydarzenia
- **Food Trucki** — menu usług gastronomicznych mobilnych
- **Browary i Winnice** — menu napojów z opisami

## Struktura Menu {#menu-structure}

### Kategorie Menu {#menu-categories}

Menu są zorganizowane w kategorie:

- **Przystawki** — dania na początek i małe talerzyki
- **Dania Główne** — dania główne
- **Dodatki** — towarzyszące dania i warzywa
- **Desery** — słodkości
- **Napoje** — napoje (alkoholowe i bezalkoholowe)
- **Specjały** — codzienne lub sezonowe specjały

### Format Pozycji Menu {#menu-item-format}

Każda pozycja menu zawiera:

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

#### Pola Pozycji {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nazwa dania lub napoju |
| `description` | string | Szczegółowy opis pozycji |
| `price` | string | Cena (sformatowana z walutą) |
| `dietary_info` | array | Atrybuty dietetyczne (Wege, Bezglutenowe itp.) |
| `allergens` | array | Typowe alergeny (Orzechy, Skrajnie, itp.) |
| `availability` | string | Kiedy dostępne (Codziennie, Sezonowo itp.) |

## Tworzenie Menu Gastronomicznych {#creating-hospitality-menus}

### Krok 1: Podaj Informacje o Menu {#step-1-provide-menu-information}

Opowiedz Theme Builderowi o swoim menu:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Krok 2: Theme Builder Generuje Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Tworzy ustrukturyzowaną stronę menu
2. Projektuje ją tak, aby pasowała do motywu Twojej witryny
3. Organizuje pozycje w kategorie
4. Formatuje ceny i opisy
5. Dodaje informacje o diecie i alergenach

### Krok 3: Przegląd i Dostosowanie {#step-3-review-and-customize}

Możesz:

1. Edytować pozycje menu i ceny
2. Dodawać lub usuwać kategorie
3. Zmieniać kolejność pozycji w ramach kategorii
4. Aktualizować opisy i informacje dietetyczne
5. Dostosowywać styl i układ

## Opcje Wyświetlania Menu {#menu-display-options}

### Pełna Strona Menu {#full-menu-page}

Dedykowana strona wyświetlająca całe menu:

- Zorganizowane według kategorii
- Możliwe wyszukiwanie i filtrowanie
- Układ przyjazny dla druku
- Projekt responsywny na urządzenia mobilne

### Widget Menu {#menu-widget}

Osadź sekcje menu na innych stronach:

- Polecane pozycje na stronie głównej
- Codzienne specjały w bocznym pasku
- Menu napojów na stronie baru
- Prezentacja deserów w stopce

### PDF Menu {#menu-pdf}

Generuj pobieralne menu w formacie PDF:

- Profesjonalne formatowanie
- Jakość gotowa do druku
- Zawiera zdjęcia i opisy
- Łatwe do udostępniania i wysyłania e-mailem

## Informacje o Diecie i Alergenach {#dietary-and-allergen-information}

### Atrybuty Dietetyczne {#dietary-attributes}

Oznacz pozycje informacjami o diecie:

- **Vegan** — bez produktów zwierzęcych
- **Vegetarian** — bez mięsa
- **Gluten-Free** — bezpieczne dla osób z celiakią
- **Dairy-Free** — bez produktów mlecznych
- **Nut-Free** — bez orzechów drzewnych i orzeszków ziemnych
- **Low-Carb** — zredukowane węglowodany
- **High-Protein** — bogate w białko

### Ostrzeżenia o Alergenach {#allergen-warnings}

Zawrzyj informacje o typowych alergenach:

- **Nuts** — orzechy drzewne i orzeszki ziemne
- **Shellfish** — skorupiaki i mięczaki
- **Fish** — wszystkie gatunki ryb
- **Dairy** — mleko i produkty mleczne
- **Eggs** — jajka kurzyce
- **Soy** — produkty sojowe
- **Gluten** — pszenica i zboża zawierające gluten
- **Sesame** — sezam i olej sezamowy

## Zarządzanie Menu {#menu-management}

### Aktualizacja Cen {#updating-prices}

Łatwo aktualizuj ceny w menu:

1. Przejdź do strony menu
2. Kliknij „Edytuj Menu”
3. Zaktualizuj ceny pozycji
4. Zapisz zmiany
5. Zmiany pojawią się natychmiast na Twojej witrynie

### Dodawanie Sezonowych Pozycji {#adding-seasonal-items}

Twórz sezonowe warianty menu:

1. Utwórz nową wersję menu
2. Dodaj sezonowe pozycje
3. Oznacz pozycje jako „Sezonowe”
4. Zaplanuj daty dostępności
5. Automatycznie wyświetl podczas sezonu

### Zarządzanie Specjałami {#managing-specials}

Wyświetl codzienne lub tygodniowe specjały:

1. Utwórz kategorię „Specjały”
2. Dodaj pozycje z datami dostępności
3. Podświetl specjały na stronie głównej
4. Aktualizuj codziennie lub tygodniowo
5. Archiwizuj stare specjały

## Integracja z Theme Builderem {#integration-with-theme-builder}

Podczas używania Theme Builder dla stron gastronomicznych:

1. **Automatic menu detection** — identyfikuje, czy prowadzisz biznes gastronomiczny
2. **Menu page creation** — generuje profesjonalne strony menu
3. **Design matching** — menu pasują do motywu Twojej witryny
4. **Mobile optimization** — menu wyświetlają się pięknie na telefonach
5. **SEO optimization** — menu są przyjazne dla wyszukiwarek

## Najlepsze Praktyki {#best-practices}

### Design Menu {#menu-design}

- **Jasna organizacja** — logiczna struktura kategorii
- **Czytelne opisy** — apetyczne i informacyjne
- **Spójne ceny** — jasna waluta i formatowanie
- **Profesjonalne zdjęcia** — wysokiej jakości zdjęcia potraw
- **Biała przestrzeń** — nie przeładowuj strony

### Treść {#content}

- **Dokładne opisy** — opisuj pozycje precyzyjnie
- **Podkreślanie specjałów** — spraw, by specjały się wyróżniały
- **Włączenie alergenów** — zawsze wymieniaj alergeny
- **Regularne aktualizacje** — utrzymuj aktualne ceny i pozycje
- **Używanie apetycznego języka** — spraw, by pozycje brzmiały pysznie

### Dostępność {#accessibility}

- **Czytelne czcionki** — używaj wyraźnych, czytelnych krojów pisma
- **Wystarczający kontrast** — upewnij się, że tekst jest czytelny
- **Etykiety dietetyczne** — wyraźnie oznacz opcje dietetyczne
- **Ostrzeżenia o alergenach** — widocznie wyświetl alergeny
- **Przyjazne dla urządzeń mobilnych** — testuj na wszystkich urządzeniach

## Przykłady {#examples}

### Struktura Menu Restauracji {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Struktura Menu Kawiarni {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Powiązane Funkcje {#related-features}

- [Create Menu](../abilities/create-menu.md) — tworzenie menu nawigacyjnych
- [Design Direction](./design-direction.md) — dostosowanie designu Twojej witryny
- [Discovery Interview](./discovery-interview.md) — planowanie struktury witryny
