---
title: Umiejętność estetyki systemu projektowego
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Estetyka Systemu Projektowego

**Umiejętność Estetyka Systemu Projektowego** to ustrukturyzowane podejście do dopracowania wizualnej tożsamości Twojej witryny. Pomaga Ci podejmować spójne decyzje dotyczące typografii, kolorów, odstępów i tokenów ruchu, które definiują Twój system projektowy.

## Co to jest Estetyka Systemu Projektowego?

Estetyka Systemu Projektowego to ustrukturyzowana umiejętność, która obejmuje:

- **Typografia**: Rodziny czcionek, rozmiary, grubości i wysokości linii
- **Kolor**: Palety podstawowe, drugorzędne, akcentowe i neutralne
- **Odstępy**: Skale paddingu, marginu i gapu
- **Obramowania**: Tokeny promienia i szerokości
- **Cienie**: Tokeny elewacji i głębi
- **Ruch**: Animacje i przejścia

Te decyzje są zapisywane w pliku `theme.json` Twojego motywu, tworząc spójny system wizualny.

## Dlaczego używać Estetyki Systemu Projektowego?

### Spójność

System projektowy zapewnia:

- Że cały tekst używa tej samej skali typograficznej
- Że kolory są używane spójnie na całej witrynie
- Że odstępy podążają przewidywalnym wzorcem
- Że animacje wydają się zunifikowane

### Efektywność

Zamiast podejmować decyzje projektowe strona po stronie, Ty:

- Definiujesz tokeny raz
- Stosujesz je wszędzie
- Aktualizujesz globalnie, zmieniając jedną wartość

### Elastyczność

Możesz:

- Szybko dostosować cały system projektowy
- Eksperymentować z różnymi estetykami
- Utrzymywać spójność marki, jednocześnie się rozwijając

## Aktywacja Umiejętności Estetyka Systemu Projektowego

### Aktywacja ręczna

Możesz uruchomić tę umiejętność w dowolnym momencie, używając:

```
"Pomóż mi dopracować mój system projektowy"
```

lub

```
"Poprawmy estetykę mojej witryny"
```

lub

```
"Poprowadź mnie przez decyzje dotyczące systemu projektowego"
```

### Automatyczne sugestie

Agent może zasugerować użycie tej umiejętności, gdy:

- Poprosisz o zmiany projektowe
- Poprosisz o "nowoczesny" lub "profesjonalny" redesign
- Chcesz poprawić spójność wizualną
- Przygotowujesz się do uruchomienia witryny

## Proces Estetyka Systemu Projektowego

### Krok 1: Typografia

Agent pyta o Twoje preferencje dotyczące czcionek:

```
Jaki jest Twój preferowany styl typograficzny?
- Serif (tradycyjny, elegancki)
- Sans-serif (nowoczesny, czysty)
- Monospace (techniczny, skupiony na kodzie)

Dla czcionki nagłówków:
- Czy chcesz odrębny font do nagłówków, czy użyć tego samego co do tekstu głównego?
- Preferencja: pogrubiony, elegancki, zabawny, minimalistyczny?

Dla czcionki tekstu głównego:
- Czytelność jest kluczowa. Czy wolisz:
  - Większy, bardziej rozstawiony tekst
  - Kompaktowy, wydajny tekst
  - Standardowy rozmiar
```

Następnie agent definiuje:

- **Font nagłówkowy**: Główny font dla tytułów i nagłówków
- **Font tekstu głównego**: Font dla akapitów i tekstu głównego
- **Font monospace**: Font dla kodu i treści technicznych
- **Skala rozmiarów**: Wstępnie zdefiniowane rozmiary (small, base, large, XL itp.)
- **Skala grubości**: Grubości czcionek (regular, medium, bold itp.)
- **Wysokość linii**: Odstęp między liniami dla czytelności

### Krok 2: Paleta kolorów

```
Zdefiniujmy Twoją paletę kolorów.

Kolor podstawowy (kolor marki):
- Obecny: [pokazuje istniejący kolor]
- Zmień na: [wybór koloru lub kod hex]

Kolor drugorzędny (kolor wspierający):
- Obecny: [pokazuje istniejący kolor]
- Zmień na: [wybór koloru lub kod hex]

Kolor akcentowy (podkreślenia i CTA):
- Obecny: [pokazuje istniejący kolor]
- Zmień na: [wybór koloru lub kod hex]

Paleta neutralna (szarości do tekstu, obramowań, tła):
- Jasny: [kolor]
- Średni: [kolor]
- Ciemny: [kolor]
```

Agent tworzy pełną paletę, obejmującą:

- Kolory podstawowy, drugorzędny i akcentowy
- Neutralne szarości (jasny, średni, ciemny)
- Kolory semantyczne (sukces, ostrzeżenie, błąd)
- Stany najazdu (hover) i aktywne

### Krok 3: Odstępy

```
Jak dużo "oddechu" chcesz?

Preferencja skali odstępów:
- Kompaktowy (ciasne, wydajne układy)
- Normalny (zrównoważone odstępy)
- Przestronny (generous whitespace)

Ma to wpływ na:
- Padding wewnątrz przycisków i kart
- Marginy między sekcjami
- Gap między elementami siatki
```

Agent definiuje tokeny odstępów:

- Podstawowa jednostka (zazwyczaj 4px lub 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Konkretne wartości dla paddingu, marginu, gapu

### Krok 4: Obramowania i Cienie

```
Wizyczna głębia i definicja:

Preferencja promienia zaokrąglenia:
- Ostre (bez zaokrągleń)
- Subtelne (mały promień)
- Zaokrąglone (średni promień)
- Bardzo zaokrąglone (duży promień)

Głębokość cienia:
- Płaski (bez cieni)
- Subtelny (delikatne cienie)
- Wyraźny (silne cienie)
```

Agent tworzy:

- Tokeny promienia zaokrąglenia (dla przycisków, kart, pól wprowadzania)
- Tokeny cieni dla różnych poziomów elewacji
- Tokeny szerokości obramowań

### Krok 5: Ruch i Animacja

```
Jak ma się czuć Twoja witryna podczas interakcji?

Preferencja animacji:
- Minimalna (bez animacji)
- Subtelna (delikatne przejścia)
- Zabawna (widoczne animacje)

Konkretne animacje:
- Przejścia stron: fade, slide, czy żadne?
- Hover przycisku: scale, zmiana koloru, czy oba?
- Stany ładowania: spinner, skeleton, czy pasek postępu?
```

Agent definiuje:

- Czas trwania przejść (szybki, normalny, wolny)
- Funkcje wygładzania (ease-in, ease-out, ease-in-out)
- Kluczowe klatki animacji dla powszechnych interakcji

## Stosowanie Estetyki Systemu Projektowego

### Automatyczne zastosowanie

Po ukończeniu umiejętności, agent:

1. Aktualizuje `theme.json` Twojego motywu wszystkimi tokenami
2. Stosuje system projektowy do aktywnego motywu
3. Regeneruje style bloków, aby pasowały do nowego systemu
4. Aktywuje zaktualizowany motyw

### Ręczne zastosowanie

Możesz również edytować `theme.json` bezpośrednio:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Podgląd Systemu Projektowego

### Zapytaj agenta

```
"Pokaż mi mój system projektowy"
```

lub

```
"Jakie są moje obecne tokeny projektowe?"
```

Agent wyświetli Twoją typografię, kolory, odstępy i inne tokeny.

### Podgląd theme.json

Otwórz `/wp-content/themes/[theme-name]/theme.json` w edytorze tekstu, aby zobaczyć surowe definicje tokenów.

## Aktualizacja Systemu Projektowego

### Szybkie aktualizacje

Poproś agenta o konkretne zmiany:

```
"Uczyń kolor podstawowy ciemniejszy"
```

lub

```
"Zwiększ skalę odstępów o 20%"
```

lub

```
"Zmień font nagłówkowy na serif"
```

### Pełny redesign

Ponownie uruchom umiejętność Estetyka Systemu Projektowego:

```
"Chcę przeprojektować cały mój system projektowy"
```

Poprowadzi Cię ponownie przez wszystkie decyzje, zaczynając od Twoich obecnych wartości.

### Częściowe aktualizacje

Aktualizuj konkretne aspekty:

```
"Aktualizuj tylko paletę kolorów, reszta ma pozostać bez zmian"
```

## Najlepsze Praktyki Systemu Projektowego

### Spójność

- Używaj tych samych tokenów wszędzie
- Nie twórz jednorazowych kolorów ani rozmiarów
- Odwołuj się do tokenów, zamiast hardkodować wartości

### Nazewnictwo

Używaj jasnych, semantycznych nazw:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalowalność

Projektuj system, który się skaluje:

- Używaj jednostek względnych (rem, em) zamiast pikseli
- Twórz skale (xs, sm, md, lg, xl) zamiast dowolnych wartości
- Planuj przyszłe dodawania

### Dokumentacja

Dokumentuj swój system projektowy:

- Dlaczego wybrałeś określone kolory
- Kiedy używać każdego tokenu
- Wyjątki i przypadki brzegowe

## Typowe Wzorce Systemu Projektowego

### Nowoczesny Minimalizm

- Typografia sans-serif (Inter, Helvetica)
- Ograniczona paleta kolorów (2-3 kolory)
- Generous spacing
- Subtelne cienie
- Płynne, szybkie animacje

### Ciepły i Przyjazny

- Mieszanka serif i sans-serif
- Ciepła paleta kolorów (pomarańcze, ciepłe szarości)
- Zaokrąglone rogi
- Miękkie cienie
- Zabawne animacje

### Profesjonalny Korporacyjny

- Czysty sans-serif (Roboto, Open Sans)
- Neutralna paleta z kolorem akcentowym
- Ustrukturyzowane odstępy
- Minimalne cienie
- Subtelne przejścia

### Kreatywny i Odważny

- Charakterystyczna typografia
- Odważna paleta kolorów
- Zróżnicowane odstępy
- Mocne cienie
- Widoczne animacje

## Rozwiązywanie Problemów

**Zmiany w systemie projektowym nie są widoczne**
- Wyczyść pamięć podręczną przeglądarki
- Zbuduj ponownie witrynę, jeśli używasz statycznego generatora
- Sprawdź, czy `theme.json` jest poprawnym JSON
- Upewnij się, że motyw jest aktywny

**Kolory wyglądają inaczej na różnych stronach**
- Sprawdź, czy w pluginach nie ma kolidującego CSS
- Upewnij się, że wszystkie strony używają tego samego motywu
- Wyczyść wszelkie pamięci podręczne pluginów cache

**Chcę wrócić do poprzedniego systemu projektowego**
- Zapytaj agenta: "Pokaż mi historię mojego systemu projektowego"
- Ręcznie edytuj `theme.json` do poprzednich wartości
- Ponownie uruchom umiejętność z innymi wyborami

## Następne Kroki

Po zdefiniowaniu systemu projektowego:

1. **Przejrzyj witrynę**: Odwiedź swoją witrynę, aby zobaczyć nowy design
2. **Dopracuj dalej**: Wykonaj korekty, ponownie używając umiejętności
3. **Utwórz szablony**: Buduj niestandardowe szablony bloków, używając swoich tokenów projektowych
4. **Dokumentuj**: Udostępnij swój system projektowy członkom zespołu
