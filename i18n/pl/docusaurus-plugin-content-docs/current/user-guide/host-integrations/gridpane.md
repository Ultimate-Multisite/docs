---
title: Integracja z GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integracja z GridPane

## Omówienie
GridPane to specjalistyczny panel zarządzania hostingiem WordPress stworzony z myślą o profesjonalistach. Ta integracja umożliwia automatyczną synchronizację domen i zarządzanie certyfikatami SSL między Ultimate Multisite a GridPane.

## Funkcje
- Automatyczna synchronizacja domen
- Zarządzanie certyfikatami SSL
- Automatyczna konfiguracja stałej SUNRISE

## Wymagania
W pliku `wp-config.php` musisz zdefiniować następujące stałe:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Instrukcja konfiguracji

### 1. Uzyskanie danych dostępowych do API GridPane

1. Zaloguj się do panelu GridPane
2. Przejdź do „Settings" > „API"
3. Wygeneruj klucz API, jeśli jeszcze go nie masz
4. Skopiuj swój klucz API

### 2. Uzyskanie identyfikatorów serwera i strony

1. W panelu GridPane przejdź do „Servers"
2. Wybierz serwer, na którym hostowana jest Twoja instalacja WordPress Multisite
3. Zanotuj Server ID (widoczny w adresie URL lub na stronie szczegółów serwera)
4. Przejdź do „Sites" i wybierz swoją stronę WordPress
5. Zanotuj Site ID (widoczny w adresie URL lub na stronie szczegółów witryny)

### 3. Dodanie stałych do wp-config.php

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Włączenie integracji

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do zakładki „Domain Mapping"
3. Przewiń w dół do sekcji „Host Integrations"
4. Włącz integrację z GridPane
5. Kliknij „Save Changes"

## Jak to działa

Gdy domena zostaje zmapowana w Ultimate Multisite:

1. Integracja wysyła żądanie do API GridPane, aby dodać domenę do Twojej witryny
2. GridPane automatycznie obsługuje wystawianie certyfikatów SSL
3. Gdy mapowanie domeny zostanie usunięte, integracja usunie domenę z GridPane

Integracja automatycznie obsługuje również stałą SUNRISE w pliku wp-config.php, która jest niezbędna do prawidłowego działania mapowania domen.

## Zarządzanie stałą SUNRISE

Unikalną cechą integracji z GridPane jest automatyczne przywracanie stałej SUNRISE w pliku wp-config.php, co zapobiega konfliktom z własnym systemem mapowania domen GridPane. Dzięki temu oba systemy mogą współpracować bez problemów.

## Rozwiązywanie problemów

### Problemy z połączeniem API
- Sprawdź, czy klucz API jest poprawny
- Upewnij się, że identyfikatory serwera i witryny są prawidłowe
- Zweryfikuj, czy Twoje konto GridPane ma odpowiednie uprawnienia

### Problemy z certyfikatami SSL
- Wystawienie certyfikatów SSL przez GridPane może zająć trochę czasu
- Sprawdź, czy Twoje domeny prawidłowo wskazują na adres IP serwera
- Zweryfikuj ustawienia SSL dla swojej witryny w GridPane

### Domena nie została dodana
- Sprawdź logi Ultimate Multisite w poszukiwaniu komunikatów o błędach
- Upewnij się, że domena nie jest już dodana do GridPane
- Zweryfikuj, czy rekordy DNS dla Twojej domeny są prawidłowo skonfigurowane
