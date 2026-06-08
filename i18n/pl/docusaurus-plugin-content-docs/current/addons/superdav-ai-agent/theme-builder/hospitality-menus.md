---
title: Menu restauracyjne
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu Gastronomiczne

Funkcja **Menu Gastronomiczne** pozwala Theme Builderowi generować i osadzać ustrukturyzowane strony menu potraw i napojów bezpośrednio na Twojej witrynie WordPress.

## Przegląd

Theme Builder może teraz tworzyć profesjonalne, ustrukturyzowane strony menu dla biznesów gastronomicznych, takich jak restauracje, kawiarnie, bary i firmy cateringowe. Te menu są w pełni zintegrowane z designem Twojej witryny i można je łatwo aktualizować oraz zarządzać.

## Obsługiwane Typy Gastronomiczne

- **Restauracje** — menu pełnej obsługi obiadowej
- **Kawiarnie** — menu kawy i lekkich przekąsek
- **Bary i Lounge** — menu napojów i przystawek
- **Piekarnie** — menu ciast i pieczywa
- **Usługi Cateringowe** — opcje menu na wydarzenia
- **Food Trucki** — menu usług gastronomicznych mobilnych
- **Browary i Winnice** — menu napojów z opisami

## Struktura Menu

### Kategorie Menu

Menu są zorganizowane w kategorie:

- **Przystawki** — dania na początek i małe talerzyki
- **Dania Główne** — dania główne
- **Dodatki** — towarzyszące dania i warzywa
- **Desery** — słodkości
- **Napoje** — napoje (alkoholowe i bezalkoholowe)
- **Specjały** — codzienne lub sezonowe specjały

### Format Pozycji Menu

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

#### Pola Pozycji

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nazwa dania lub napoju |
| `description` | string | Szczegółowy opis pozycji |
| `price` | string | Cena (sformatowana z walutą) |
| `dietary_info` | array | Atrybuty dietetyczne (Wege, Bezglutenowe itp.) |
| `allergens` | array | Typowe alergeny (Orzechy, Skrajnie, itp.) |
| `availability` | string | Kiedy dostępne (Codziennie, Sezonowo itp.) |

## Tworzenie Menu Gastronomicznych

### Krok 1: Podaj Informacje o Menu

Opowiedz Theme Builderowi o swoim menu:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Krok 2: Theme Builder Generuje Menu

Theme Builder:

1. Tworzy ustrukturyzowaną stronę menu
2. Projektuje ją tak, aby pasowała do motywu Twojej witryny
3. Organizuje pozycje w kategorie
4. Formatuje ceny i opisy
5. Dodaje informacje o diecie i alergenach

### Krok 3: Przegląd i Dostosowanie

Możesz:

1. Edytować pozycje menu i ceny
2. Dodawać lub usuwać kategorie
3. Zmieniać kolejność pozycji w ramach kategorii
4. Aktualizować opisy i informacje dietetyczne
5. Dostosowywać styl i układ

## Opcje Wyświetlania Menu

### Pełna Strona Menu

Dedykowana strona wyświetlająca całe menu:

- Zorganizowane według kategorii
- Możliwe wyszukiwanie i filtrowanie
- Układ przyjazny dla druku
- Projekt responsywny na urządzenia mobilne

### Widget Menu

Osadź sekcje menu na innych stronach:

- Polecane pozycje na stronie głównej
- Codzienne specjały w bocznym pasku
- Menu napojów na stronie baru
- Prezentacja deserów w stopce

### PDF Menu

Generuj pobieralne menu w formacie PDF:

- Profesjonalne formatowanie
- Jakość gotowa do druku
- Zawiera zdjęcia i opisy
- Łatwe do udostępniania i wysyłania e-mailem

## Informacje o Diecie i Alergenach

### Atrybuty Dietetyczne

Oznacz pozycje informacjami o diecie:

- **Vegan** — bez produktów zwierzęcych
- **Vegetarian** — bez mięsa
- **Gluten-Free** — bezpieczne dla osób z celiakią
- **Dairy-Free** — bez produktów mlecznych
- **Nut-Free** — bez orzechów drzewnych i orzeszków ziemnych
- **Low-Carb** — zredukowane węglowodany
- **High-Protein** — bogate w białko

### Ostrzeżenia o Alergenach

Zawrzyj informacje o typowych alergenach:

- **Nuts** — orzechy drzewne i orzeszki ziemne
- **Shellfish** — skorupiaki i mięczaki
- **Fish** — wszystkie gatunki ryb
- **Dairy** — mleko i produkty mleczne
- **Eggs** — jajka kurzyce
- **Soy** — produkty sojowe
- **Gluten** — pszenica i zboża zawierające gluten
- **Sesame** — sezam i olej sezamowy

## Zarządzanie Menu

### Aktualizacja Cen

Łatwo aktualizuj ceny w menu:

1. Przejdź do strony menu
2. Kliknij „Edytuj Menu”
3. Zaktualizuj ceny pozycji
4. Zapisz zmiany
5. Zmiany pojawią się natychmiast na Twojej witrynie

### Dodawanie Sezonowych Pozycji

Twórz sezonowe warianty menu:

1. Utwórz nową wersję menu
2. Dodaj sezonowe pozycje
3. Oznacz pozycje jako „Sezonowe”
4. Zaplanuj daty dostępności
5. Automatycznie wyświetl podczas sezonu

### Zarządzanie Specjałami

Wyświetl codzienne lub tygodniowe specjały:

1. Utwórz kategorię „Specjały”
2. Dodaj pozycje z datami dostępności
3. Podświetl specjały na stronie głównej
4. Aktualizuj codziennie lub tygodniowo
5. Archiwizuj stare specjały

## Integracja z Theme Builderem

Podczas używania Theme Builder dla stron gastronomicznych:

1. **Automatic menu detection** — identyfikuje, czy prowadzisz biznes gastronomiczny
2. **Menu page creation** — generuje profesjonalne strony menu
3. **Design matching** — menu pasują do motywu Twojej witryny
4. **Mobile optimization** — menu wyświetlają się pięknie na telefonach
5. **SEO optimization** — menu są przyjazne dla wyszukiwarek

## Najlepsze Praktyki

### Design Menu

- **Jasna organizacja** — logiczna struktura kategorii
- **Czytelne opisy** — apetyczne i informacyjne
- **Spójne ceny** — jasna waluta i formatowanie
- **Profesjonalne zdjęcia** — wysokiej jakości zdjęcia potraw
- **Biała przestrzeń** — nie przeładowuj strony

### Treść

- **Dokładne opisy** — opisuj pozycje precyzyjnie
- **Podkreślanie specjałów** — spraw, by specjały się wyróżniały
- **Włączenie alergenów** — zawsze wymieniaj alergeny
- **Regularne aktualizacje** — utrzymuj aktualne ceny i pozycje
- **Używanie apetycznego języka** — spraw, by pozycje brzmiały pysznie

### Dostępność

- **Czytelne czcionki** — używaj wyraźnych, czytelnych krojów pisma
- **Wystarczający kontrast** — upewnij się, że tekst jest czytelny
- **Etykiety dietetyczne** — wyraźnie oznacz opcje dietetyczne
- **Ostrzeżenia o alergenach** — widocznie wyświetl alergeny
- **Przyjazne dla urządzeń mobilnych** — testuj na wszystkich urządzeniach

## Przykłady

### Struktura Menu Restauracji

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

### Struktura Menu Kawiarni

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

## Powiązane Funkcje

- [Create Menu](../abilities/create-menu.md) — tworzenie menu nawigacyjnych
- [Design Direction](./design-direction.md) — dostosowanie designu Twojej witryny
- [Discovery Interview](./discovery-interview.md) — planowanie struktury witryny
