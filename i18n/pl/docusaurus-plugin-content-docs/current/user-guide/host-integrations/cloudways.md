---
title: Integracja Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Integracja z Cloudways

## Omówienie
Cloudways to zarządzana platforma hostingowa w chmurze, która umożliwia wdrażanie witryn WordPress na różnych dostawcach chmury, takich jak DigitalOcean, AWS, Google Cloud i innych. Ta integracja pozwala na automatyczną synchronizację domen i zarządzanie certyfikatami SSL między Ultimate Multisite a Cloudways.

## Funkcje
- Automatyczna synchronizacja domen
- Zarządzanie certyfikatami SSL
- Obsługa dodatkowych domen
- Walidacja DNS dla certyfikatów SSL

## Wymagania
W pliku `wp-config.php` musisz zdefiniować następujące stałe:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opcjonalnie możesz również zdefiniować:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instrukcja konfiguracji

### 1. Uzyskaj dane logowania do API Cloudways

1. Zaloguj się do panelu Cloudways
2. Przejdź do „Account" > „API Keys"
3. Wygeneruj klucz API, jeśli jeszcze go nie masz
4. Skopiuj swój e-mail i klucz API

### 2. Uzyskaj identyfikatory serwera i aplikacji

1. W panelu Cloudways przejdź do „Servers"
2. Wybierz serwer, na którym hostowana jest Twoja instalacja WordPress multisite
3. Identyfikator serwera jest widoczny w adresie URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Przejdź do „Applications" i wybierz swoją aplikację WordPress
5. Identyfikator aplikacji jest widoczny w adresie URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Dodaj stałe do wp-config.php

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Jeśli masz dodatkowe domeny, które powinny być zawsze uwzględniane:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Włącz integrację

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do zakładki „Domain Mapping"
3. Przewiń w dół do sekcji „Host Integrations"
4. Włącz integrację z Cloudways
5. Kliknij „Save Changes"

## Jak to działa

### Synchronizacja domen

Gdy domena zostanie zmapowana w Ultimate Multisite:

1. Integracja pobiera wszystkie aktualnie zmapowane domeny
2. Dodaje nową domenę do listy (wraz z wersją www, jeśli dotyczy)
3. Wysyła pełną listę do Cloudways przez API
4. Cloudways aktualizuje aliasy domen dla Twojej aplikacji

Uwaga: API Cloudways wymaga wysyłania pełnej listy domen za każdym razem, a nie tylko dodawania lub usuwania pojedynczych domen.

### Zarządzanie certyfikatami SSL

Po zsynchronizowaniu domen:

1. Integracja sprawdza, które domeny mają prawidłowe rekordy DNS wskazujące na Twój serwer
2. Wysyła żądanie do Cloudways o zainstalowanie certyfikatów SSL Let's Encrypt dla tych domen
3. Cloudways zajmuje się wystawieniem i instalacją certyfikatów SSL

## Dodatkowe domeny

Stała `WU_CLOUDWAYS_EXTRA_DOMAINS` pozwala określić dodatkowe domeny, które powinny być zawsze uwzględniane podczas synchronizacji z Cloudways. Jest to przydatne w przypadku:

- Domen, które nie są zarządzane przez Ultimate Multisite
- Domen wieloznacznych (np. `*.example.com`)
- Domen deweloperskich lub testowych

## Rozwiązywanie problemów

### Problemy z połączeniem API
- Sprawdź, czy Twój e-mail i klucz API są prawidłowe
- Upewnij się, że identyfikatory serwera i aplikacji są poprawne
- Sprawdź, czy Twoje konto Cloudways ma niezbędne uprawnienia

### Problemy z certyfikatami SSL
- Cloudways wymaga, aby domeny miały prawidłowe rekordy DNS wskazujące na Twój serwer przed wystawieniem certyfikatów SSL
- Integracja sprawdza rekordy DNS przed żądaniem certyfikatów SSL
- Jeśli certyfikaty SSL nie są wystawiane, upewnij się, że Twoje domeny prawidłowo wskazują na adres IP Twojego serwera

### Domena nie została dodana
- Sprawdź logi Ultimate Multisite pod kątem komunikatów o błędach
- Upewnij się, że domena nie została już dodana do Cloudways
- Sprawdź, czy Twój plan Cloudways obsługuje liczbę domen, które próbujesz dodać
