---
title: Migracja trybu zewnętrznego
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migracja do Trybu Stron Trzecich

Superdav AI Agent v1.12.0 zmienia sposób obsługi możliwości (abilities) pochodzących ze stron trzecich. **Tryb stron trzecich domyślnie przechodzi w tryb automatyczny (auto)**, co umożliwia integrację z natywnym API Możliwości WordPress na WordPress 7.0+ bez konieczności ręcznej konfiguracji.

## Co się zmieniło? {#what-changed}

### Przed v1.12.0 {#before-v1120}

Możliwości stron trzecich wymagały ręcznej konfiguracji:

- Musiałeś jawnie włączać „tryb stron trzecich”
- Możliwości były ładowane z niestandardowej rejestracji
- Integracja z API Możliwości WordPress była opcjonalna
- Domyślny był tryb dziedziczony (Legacy mode)

### Po v1.12.0 {#after-v1120}

Możliwości stron trzecich działają automatycznie:

- Tryb stron trzecich domyślnie przechodzi w „auto”
- Możliwości integrują się natywnie z API Możliwości WordPress
- Na WordPress 7.0+ nie jest wymagana ręczna konfiguracja
- Tryb dziedziczony (Legacy mode) nadal jest dostępny dla starszych wersji WordPressa

## Kto jest dotknięty? {#who-is-affected}

### Nowe instalacje (WordPress 7.0+) {#new-installations-wordpress-70}

**Nie trzeba podejmować żadnych działań.** Tryb stron trzecich jest automatycznie ustawiony na „auto”, a możliwości działają od razu po instalacji.

### Istniejące instalacje {#existing-installations}

**Twoje ustawienia zostaną zachowane.** Jeśli używałeś:

- **Trybu dziedziczonego (Legacy mode)**: Pozostajesz w trybie dziedziczonym (bez zmian)
- **Ręcznego trybu stron trzecich (Manual third-party mode)**: Pozostajesz w trybie ręcznym (bez zmian)
- **Trybu automatycznego (Auto mode)**: Kontynuujesz pracę w trybie automatycznym (bez zmian)

### Wersje WordPress przed 7.0 {#wordpress-versions-before-70}

**Tryb dziedziczony (Legacy mode) nadal jest dostępny.** Jeśli używasz WordPressa 6.x lub starszej wersji:

- Tryb stron trzecich domyślnie przechodzi w „legacy”
- Możesz ręcznie włączyć tryb stron trzecich, jeśli chcesz
- Aby używać natywnego API Możliwości, zaktualizuj do WordPress 7.0+

## Zrozumienie trybów {#understanding-the-modes}

### Tryb automatyczny (Auto Mode) (Nowy domyślny) {#auto-mode-new-default}

**Tryb automatyczny** wykorzystuje natywną integrację z API Możliwości WordPress:

- Możliwości są rejestrowane za pomocą hooków WordPress
- Pełna kompatybilność z API Możliwości WordPress 7.0+
- Automatyczne wykrywanie możliwości stron trzecich
- Nie wymaga ręcznej konfiguracji

**Kiedy używać**: WordPress 7.0+ z możliwościami stron trzecich

### Tryb ręczny (Manual Mode) {#manual-mode}

**Tryb ręczny** wymaga jawnej konfiguracji:

- Określasz, które możliwości stron trzecich mają być ładowane
- Przydatne do testowania lub selektywnego ładowania możliwości
- Wymaga edycji plików konfiguracyjnych
- Większa kontrola, ale więcej ustawień

**Kiedy używać**: Testowanie, selektywne ładowanie możliwości lub niestandardowe konfiguracje

### Tryb dziedziczony (Legacy Mode) {#legacy-mode}

**Tryb dziedziczony** używa starego systemu możliwości stron trzecich:

- Niestandardowa rejestracja możliwości (nie API Możliwości WordPress)
- Kompatybilny wstecz z starszymi wersjami WordPressa
- Brak natywnej integracji z WordPress
- Przestarzały, ale nadal wspierany

**Kiedy używać**: WordPress 6.x lub starszy, lub gdy potrzebujesz kompatybilności z trybem dziedziczonym

## Sprawdzanie bieżącego trybu {#checking-your-current-mode}

### Poprzez panel administracyjny {#via-admin-panel}

1. Przejdź do **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Znajdź ustawienie **Third-Party Mode**
3. Zobaczysz swój bieżący tryb oraz opcje zmiany

### Poprzez kod {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', lub 'legacy'
```

## Zmiana trybu {#changing-your-mode}

### Przełączenie na Tryb automatyczny (Auto Mode) {#switch-to-auto-mode}

Jeśli używasz WordPressa 7.0+ i chcesz używać trybu automatycznego:

1. Przejdź do **Superdav AI Agent** → **Settings**
2. Znajdź **Third-Party Mode**
3. Wybierz **Auto (WordPress Abilities API)**
4. Kliknij **Save**

Superdav AI Agent automatycznie wykryje i zarejestruje możliwości stron trzecich.

### Przełączenie na Tryb ręczny (Manual Mode) {#switch-to-manual-mode}

Jeśli chcesz ręcznie kontrolować, które możliwości mają być ładowane:

1. Przejdź do **Superdav AI Agent** → **Settings**
2. Znajdź **Third-Party Mode**
3. Wybierz **Manual**
4. Kliknij **Save**
5. Edytuj plik konfiguracyjny, aby określić, które możliwości mają być ładowane

### Przełączenie na Tryb dziedziczony (Legacy Mode) {#switch-to-legacy-mode}

Jeśli potrzebujesz kompatybilności z trybem dziedziczonym:

1. Przejdź do **Superdav AI Agent** → **Settings**
2. Znajdź **Third-Party Mode**
3. Wybierz **Legacy**
4. Kliknij **Save**

## Korzyści z Trybu automatycznego (Auto Mode) {#benefits-of-auto-mode}

### Automatyczne wykrywanie {#automatic-discovery}

Możliwości są automatycznie wykrywane z:

- Zainstalowanych pluginów
- Aktywnego motywu
- Pluginów must-use
- Pluginów drop-in

Nie jest wymagana ręczna rejestracja.

### Natywna integracja {#native-integration}

Możliwości integrują się z API Możliwości WordPress:

- Spójne z rdzeniem WordPress
- Działa z panelem administracyjnym WordPress
- Kompatybilne z innymi pluginami używającymi API Możliwości
- Przyszłościowe, gdy WordPress się rozwija

### Uproszczone zarządzanie {#simplified-management}

- Nie trzeba edytować plików konfiguracyjnych
- Brak ręcznej rejestracji możliwości
- Kontrolki widoczności możliwości działają automatycznie
- Powiadomienia w panelu administracyjnym informują o nieklasyfikowanych możliwościach

### Lepsza wydajność {#better-performance}

- Możliwości są cachowane
- Ładowane leniwie (lazy-loaded) na żądanie
- Zoptymalizowane dla WordPress 7.0+

## Ścieżka migracji {#migration-path}

### Jeśli używasz WordPressa 6.x {#if-youre-on-wordpress-6x}

1. **Zaktualizuj do WordPress 7.0+** (kiedy będziesz gotowy)
2. **Zaktualizuj Superdav AI Agent** do wersji v1.12.0+
3. **Zmień tryb stron trzecich na Auto** (opcjonalnie; tryb legacy nadal działa)
4. **Przejrzyj widoczność możliwości**, aby upewnić się, że kontrole dostępu są prawidłowe

### Jeśli używasz WordPressa 7.0+ {#if-youre-on-wordpress-70}

1. **Zaktualizuj Superdav AI Agent** do wersji v1.12.0+
2. **Zweryfikuj, czy tryb stron trzecich jest ustawiony na Auto** (powinien być domyślnie)
3. **Przejrzyj widoczność możliwości**, aby upewnić się, że kontrole dostępu są prawidłowe
4. **Testuj możliwości stron trzecich**, aby potwierdzić ich działanie

## Rozwiązywanie problemów {#troubleshooting}

### Możliwości nie ładują się w trybie auto {#abilities-arent-loading-in-auto-mode}

- Zweryfikuj, czy używasz WordPressa 7.0+
- Sprawdź, czy tryb stron trzecich jest ustawiony na „Auto”
- Zweryfikuj, czy plugin dostarczający możliwość jest aktywny
- Sprawdź logi błędów WordPressa pod kątem błędów rejestracji

### Chcę zachować tryb dziedziczony (Legacy mode) {#i-want-to-keep-legacy-mode}

- Przejdź do **Settings** → **Third-Party Mode**
- Wybierz **Legacy**
- Kliknij **Save**
- Tryb dziedziczony będzie nadal działał

### Moje niestandardowe możliwości nie są widoczne {#my-custom-abilities-arent-showing}

- Zweryfikuj, czy są one rejestrowane za pomocą hooków WordPress
- Sprawdź, czy poprawnie implementują API Możliwości
- Przejrzyj logi błędów WordPressa
- Użyj strony administracyjnej **Ability Visibility**, aby zobaczyć wszystkie zarejestrowane możliwości

### Otrzymuję powiadomienia o „nieklasyfikowanej możliwości” {#im-getting-unclassified-ability-notices}

- Jest to normalne dla nowych możliwości stron trzecich
- Przejrzyj i sklasyfikuj je w powiadomieniu administracyjnym
- Aby uzyskać szczegóły dotyczące klasyfikacji, sprawdź **Ability Visibility**

## Kompatybilność wsteczna {#backward-compatibility}

### Istniejące konfiguracje {#existing-configurations}

Jeśli masz istniejące konfiguracje możliwości stron trzecich:

- **Tryb dziedziczony (Legacy mode)**: Twoja konfiguracja nadal działa
- **Tryb ręczny (Manual mode)**: Twoja konfiguracja nadal działa
- **Tryb automatyczny (Auto mode)**: Twoja konfiguracja jest ignorowana (przejmuje kontrolę tryb auto)

Aby zachować swoją niestandardową konfigurację, pozostań w trybie ręcznym lub dziedziczonym.

### Harmonogram wycofania wsparcia (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Tryby dziedziczony i ręczny nadal w pełni wspierane
- **v1.13.0+**: Tryb dziedziczony może wyświetlać powiadomienia o wycofaniu wsparcia
- **v2.0.0**: Tryb dziedziczony może zostać usunięty (do ogłoszenia)

## Najlepsze praktyki {#best-practices}

### Dla nowych instalacji {#for-new-installations}

- Używaj trybu automatycznego (jest domyślny)
- Pozwól Superdav AI Agent na automatyczne wykrywanie możliwości
- Używaj Ability Visibility do kontrolowania dostępu

### Dla istniejących instalacji {#for-existing-installations}

- Aktualizuj do WordPress 7.0+, gdy jest to możliwe
- Przełącz się na tryb automatyczny dla uproszczonego zarządzania
- Przejrzyj i sklasyfikuj możliwości za pomocą Ability Visibility

### Dla niestandardowych możliwości {#for-custom-abilities}

- Rejestruj możliwości za pomocą hooków WordPress (Abilities API)
- Unikaj niestandardowych rejestracji możliwości
- Testuj na WordPress 7.0+ z trybem automatycznym

## Następne kroki {#next-steps}

1. **Sprawdź wersję WordPressa**: Upewnij się, że używasz wersji 7.0+ dla trybu automatycznego
2. **Przejrzyj tryb stron trzecich**: Przejdź do Settings i sprawdź swój bieżący tryb
3. **Aktualizuj w razie potrzeby**: Przełącz się na tryb automatyczny, jeśli używasz WordPressa 7.0+
4. **Klasyfikuj możliwości**: Przejrzyj i sklasyfikuj wszelkie nieklasyfikowane możliwości
5. **Testuj**: Zweryfikuj, czy Twoje możliwości stron trzecich działają poprawnie

## Powiązane tematy {#related-topics}

- **Ability Visibility**: Kontroluj, które możliwości są dostępne i gdzie
- **WordPress Abilities API**: Dowiedz się o natywnym rejestrowaniu możliwości WordPress
- **Third-Party Ability Development**: Twórz możliwości działające z trybem automatycznym
