---
title: Integracja z RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integracja z RunCloud

## Wstęp
RunCloud to platforma do zarządzania serwerami w chmurze, która umożliwia łatwe wdrażanie i zarządzanie aplikacjami webowymi na własnych serwerach. Ta integracja pozwala na automatyczną synchronizację domen i zarządzanie certyfikatami SSL między Ultimate Multisite a RunCloud.

## Funkcje
- Automatyczna synchronizacja domen
- Zarządzanie certyfikatami SSL
- Usuwanie domen po usunięciu mapowań

## Wymagania
Poniższe stałe muszą być zdefiniowane w pliku `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Instrukcja konfiguracji

### 1. Pobierz dane dostępowe do API RunCloud

1. Zaloguj się do panelu RunCloud
2. Przejdź do „User Profile" (kliknij zdjęcie profilowe w prawym górnym rogu)
3. Wybierz „API" z menu
4. Kliknij „Generate API Key", jeśli jeszcze go nie masz
5. Skopiuj swój API Key i API Secret

### 2. Pobierz ID serwera i aplikacji

1. W panelu RunCloud przejdź do „Servers"
2. Wybierz serwer, na którym jest zainstalowany WordPress Multisite
3. ID serwera jest widoczne w adresie URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Przejdź do „Web Applications" i wybierz swoją aplikację WordPress
5. ID aplikacji jest widoczne w adresie URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Dodaj stałe do wp-config.php

Dodaj poniższe stałe do pliku `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Włącz integrację

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do zakładki „Domain Mapping"
3. Przewiń w dół do sekcji „Host Integrations"
4. Włącz integrację z RunCloud
5. Kliknij „Save Changes"

## Jak to działa

Gdy domena jest mapowana w Ultimate Multisite:

1. Integracja wysyła żądanie do API RunCloud, aby dodać domenę do Twojej aplikacji
2. Jeśli domena zostanie pomyślnie dodana, integracja automatycznie wdroży certyfikaty SSL
3. Gdy mapowanie domeny zostanie usunięte, integracja usunie domenę z RunCloud

W przypadku instalacji subdomenowych integracja automatycznie obsłuży tworzenie subdomen w RunCloud, gdy nowe strony zostaną dodane do sieci.

## Rozwiązywanie problemów

### Problemy z połączeniem API
- Sprawdź, czy dane dostępowe do API są poprawne
- Upewnij się, że ID serwera i aplikacji są prawidłowe
- Sprawdź, czy Twoje konto RunCloud ma odpowiednie uprawnienia

### Problemy z certyfikatami SSL
- RunCloud może potrzebować trochę czasu na wydanie certyfikatów SSL
- Upewnij się, że Twoje domeny prawidłowo wskazują na adres IP serwera
- Sprawdź ustawienia SSL w RunCloud dla swojej aplikacji

### Domena nie została dodana
- Sprawdź logi Ultimate Multisite pod kątem komunikatów o błędach
- Upewnij się, że domena nie jest już dodana w RunCloud
- Sprawdź, czy Twój plan RunCloud obsługuje wiele domen
