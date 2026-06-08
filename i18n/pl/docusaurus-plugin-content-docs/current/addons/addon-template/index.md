---
title: Szablon dodatku
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Szablon Addonu

{{ADDON_DESCRIPTION}}

## Wymagania

- WordPress 5.3 lub nowszy
- PHP 7.4 lub nowszy
- Wtyczka Ultimate Multisite (aktywna)

## Instalacja

1. Prześlij pliki addonu do katalogu `/wp-content/plugins/`
2. Aktywuj wtyczkę w menu „Plugins” w WordPressie
3. Skonfiguruj ustawienia addonu w panelu administracyjnym sieci (network admin)

## Rozwój

### Konfiguracja

```bash
# Instalacja zależności
composer install
npm install

# Uruchomienie testów
npm run test

# Sprawdzenie zgodności ze standardami kodu
vendor/bin/phpcs
vendor/bin/phpstan

# Naprawienie problemów ze stylem kodu
vendor/bin/phpcbf

# Budowanie dla środowiska produkcyjnego
npm run build
```

### Struktura Projektu

```
ultimate-multisite-addon-template/
├── inc/                          # Klasy PHP i pliki do włączenia
│   ├── class-multisite-ultimate-updater.php  # Obsługa aktualizacji
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Główna funkcjonalność
├── tests/                        # Testy jednostkowe
│   ├── bootstrap.php            # Bootstrap testów
│   ├── class-*-base.php         # Klasa bazowa testów
│   └── class-*-test.php         # Przypadki testowe
├── views/                       # Pliki szablonów
├── assets/                      # Zasoby statyczne
│   ├── css/                     # Arkusze stylów
│   ├── js/                      # Pliki JavaScript
│   └── images/                  # Obrazy
├── lang/                        # Pliki językowe
├── composer.json                # Zależności PHP
├── package.json                 # Zależności Node.js
├── phpunit.xml.dist             # Konfiguracja PHPUnit
├── .phpcs.xml.dist              # Konfiguracja standardów kodu
└── rector.php                   # Zasady modernizacji kodu
```

### Testowanie

Addon zawiera kompleksowy framework testowy:

- **Testy jednostkowe (Unit Tests)**: Testy oparte na PHPUnit z zestawem testowym WordPressa
- **Klasa bazowa testów (Base Test Class)**: Dostarcza metody pomocnicze dla powszechnych scenariuszy testowych
- **Pokrycie testami (Test Coverage)**: Skonfigurowane do śledzenia pokrycia kodu
- **Testowanie Multisite**: Testy uruchamiane w środowisku multisite

### Standardy Kodu

- **Standardy Kodowania WordPressa**: Egzekwowane za pomocą PHPCS
- **Kompatybilność z PHP 7.4+**: Wspierane nowoczesne funkcje PHP
- **Analiza Statyczna**: Integracja PHPStan do sprawdzania typów
- **Modernizacja Kodu**: Zasady Rector dla ulepszeń PHP

### System Budowania (Build System)

- **Przetwarzanie Zasobów (Asset Processing)**: Minifikacja plików CSS/JS
- **Tłumaczenie (Translation)**: Generowanie plików POT
- **Pakowanie (Packaging)**: Tworzenie archiwum do dystrybucji
- **Tryb Rozwojowy (Development Mode)**: Nie-minifikowane zasoby do debugowania

## Konfiguracja

Addon obsługuje różne opcje konfiguracyjne, dostępne przez interfejs panelu administracyjnego sieci (network admin).

## Akcje i Filtry (Hooks and Filters)

### Akcje (Actions)

- `ultimate-multisite-addon-template_init` - Wywoływana po inicjalizacji addonu
- `ultimate-multisite-addon-template_loaded` - Wywoływana po załadowaniu wszystkich plików addonu

### Filtry (Filters)

- `ultimate-multisite-addon-template_settings` - Modyfikacja ustawień addonu
- `ultimate-multisite-addon-template_enabled` - Nadpisanie statusu włączania/wyłączania addonu

## Licencja

Addon jest licencjonowany na podstawie GPL v3 lub nowszej.

## Wsparcie

W celu uzyskania wsparcia i dokumentacji odwiedź [MultisiteUltimate.com](https://multisiteultimate.com)
## Historia zmian (Changelog)

- Wersja 1.0.1 (2025-09-28): zmiana prefiksu na ultimate-multisite; aktualizacja domeny tekstu; zwiększenie wersji.


- Wersja  (2025-09-28): zmiana prefiksu na ultimate-multisite; aktualizacja domeny tekstu; zwiększenie wersji.
