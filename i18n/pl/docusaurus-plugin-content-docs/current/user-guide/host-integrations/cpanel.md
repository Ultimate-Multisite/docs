---
title: Integracja z cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integracja z cPanel

## Przegląd
cPanel to jeden z najpopularniejszych paneli zarządzania hostingiem, używany przez wielu dostawców hostingu współdzielonego i dedykowanego. Ta integracja umożliwia automatyczną synchronizację domen między Ultimate Multisite a cPanel, pozwalając na automatyczne dodawanie aliasów domen i subdomen do Twojego konta cPanel.

## Funkcje
- Automatyczne tworzenie addon domain w cPanel
- Automatyczne tworzenie subdomen w cPanel (dla instalacji multisite opartych na subdomenach)
- Usuwanie domen po skasowaniu mapowań

## Wymagania
Następujące stałe muszą być zdefiniowane w pliku `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcjonalnie możesz również zdefiniować:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Instrukcja konfiguracji

### 1. Uzyskaj dane logowania do cPanel

1. Pobierz nazwę użytkownika i hasło do cPanel od swojego dostawcy hostingu
2. Ustal adres hosta cPanel (zazwyczaj `cpanel.twojadomena.com` lub `twojadomena.com:2083`)

### 2. Dodaj stałe do wp-config.php

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcjonalnie możesz dostosować port i katalog główny:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Włącz integrację

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Ustawienia
2. Przejdź do zakładki „Mapowanie domen"
3. Przewiń w dół do sekcji „Integracje z hostingiem"
4. Włącz integrację z cPanel
5. Kliknij „Zapisz zmiany"

## Jak to działa

### Addon domain

Gdy domena zostaje zmapowana w Ultimate Multisite:

1. Integracja wysyła żądanie do API cPanel, aby dodać domenę jako addon domain
2. Domena jest konfigurowana tak, aby wskazywała na Twój katalog główny
3. Po usunięciu mapowania domeny integracja usunie addon domain z cPanel

### Subdomeny

W przypadku instalacji multisite opartych na subdomenach, gdy tworzona jest nowa strona:

1. Integracja wyodrębnia część subdomeny z pełnej nazwy domeny
2. Wysyła żądanie do API cPanel, aby dodać subdomenę
3. Subdomena jest konfigurowana tak, aby wskazywała na Twój katalog główny

## Ważne informacje

- Integracja wykorzystuje API2 cPanel do komunikacji z Twoim kontem cPanel
- Twoje konto cPanel musi mieć uprawnienia do dodawania addon domain i subdomen
- Niektórzy dostawcy hostingu mogą ograniczać liczbę addon domain lub subdomen, które możesz utworzyć
- Integracja nie obsługuje konfiguracji DNS; nadal musisz skierować swoje domeny na adres IP serwera

## Rozwiązywanie problemów

### Problemy z połączeniem API
- Sprawdź, czy nazwa użytkownika i hasło do cPanel są poprawne
- Upewnij się, że adres hosta cPanel jest prawidłowy i dostępny
- Zweryfikuj, czy Twoje konto cPanel ma niezbędne uprawnienia
- Spróbuj użyć pełnego adresu URL dla hosta (np. `https://cpanel.twojadomena.com`)

### Domena nie została dodana
- Sprawdź logi Ultimate Multisite w poszukiwaniu komunikatów o błędach
- Upewnij się, że domena nie jest już dodana w cPanel
- Zweryfikuj, czy Twoje konto cPanel nie osiągnęło limitu addon domain lub subdomen

### Problemy z certyfikatem SSL
- Integracja nie obsługuje wystawiania certyfikatów SSL
- Musisz użyć narzędzi SSL/TLS w cPanel lub funkcji AutoSSL, aby wydać certyfikaty SSL dla swoich domen
- Alternatywnie możesz skorzystać z usługi takiej jak Let's Encrypt w połączeniu z funkcją AutoSSL w cPanel
