---
title: Integracja z ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integracja z ServerPilot

## Przegląd
ServerPilot to usługa w chmurze do hostowania stron WordPress i innych witryn PHP na serwerach DigitalOcean, Amazon, Google lub dowolnego innego dostawcy. Ta integracja umożliwia automatyczną synchronizację domen i zarządzanie certyfikatami SSL między Ultimate Multisite a ServerPilot.

## Funkcje
- Automatyczna synchronizacja domen
- Zarządzanie certyfikatami SSL z Let's Encrypt
- Automatyczne odnawianie certyfikatów SSL

## Wymagania
Poniższe stałe muszą być zdefiniowane w pliku `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instrukcja konfiguracji

### 1. Uzyskaj dane dostępowe do API ServerPilot

1. Zaloguj się do panelu ServerPilot
2. Przejdź do „Account" > „API"
3. Utwórz nowy klucz API, jeśli jeszcze go nie masz
4. Skopiuj swój Client ID oraz API Key

### 2. Uzyskaj App ID

1. W panelu ServerPilot przejdź do „Apps"
2. Wybierz aplikację, na której hostowany jest Twój WordPress multisite
3. App ID jest widoczne w adresie URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Dodaj stałe do wp-config.php

Dodaj poniższe stałe do pliku `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Włącz integrację

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do zakładki „Domain Mapping"
3. Przewiń w dół do sekcji „Host Integrations"
4. Włącz integrację z ServerPilot
5. Kliknij „Save Changes"

## Jak to działa

### Synchronizacja domen

Gdy domena jest mapowana w Ultimate Multisite:

1. Integracja pobiera aktualną listę domen z ServerPilot
2. Dodaje nową domenę do listy (wraz z wersją www, jeśli dotyczy)
3. Wysyła zaktualizowaną listę do ServerPilot przez API
4. ServerPilot aktualizuje listę domen dla Twojej aplikacji

### Zarządzanie certyfikatami SSL

Po synchronizacji domen:

1. Integracja automatycznie włącza AutoSSL dla Twojej aplikacji
2. ServerPilot zajmuje się wystawieniem i instalacją certyfikatu SSL przy użyciu Let's Encrypt
3. ServerPilot obsługuje również automatyczne odnawianie certyfikatów SSL

## Weryfikacja certyfikatu SSL

Integracja jest skonfigurowana tak, aby zwiększyć liczbę prób weryfikacji certyfikatu SSL dla ServerPilot, ponieważ wystawienie i instalacja certyfikatu może zająć trochę czasu. Domyślnie wykonywanych jest do 5 prób, ale można to zmienić za pomocą filtrów.

## Rozwiązywanie problemów

### Problemy z połączeniem API
- Sprawdź, czy Twój Client ID i API Key są poprawne
- Upewnij się, że App ID jest prawidłowe
- Sprawdź, czy Twoje konto ServerPilot ma odpowiednie uprawnienia

### Problemy z certyfikatem SSL
- ServerPilot wymaga, aby domeny miały prawidłowe rekordy DNS wskazujące na Twój serwer przed wystawieniem certyfikatu SSL
- Jeśli certyfikaty SSL nie są wystawiane, sprawdź, czy Twoje domeny prawidłowo wskazują na adres IP Twojego serwera
- Wystawienie i instalacja certyfikatu SSL przez ServerPilot może zająć trochę czasu (zwykle 5-15 minut)

### Domena nie została dodana
- Sprawdź logi Ultimate Multisite w poszukiwaniu komunikatów o błędach
- Upewnij się, że domena nie została już wcześniej dodana do ServerPilot
- Sprawdź, czy Twój plan ServerPilot obsługuje liczbę domen, które chcesz dodać

### Usuwanie domen
- Obecnie API ServerPilot nie umożliwia usuwania pojedynczych domen
- Gdy mapowanie domeny zostanie usunięte w Ultimate Multisite, integracja zaktualizuje listę domen w ServerPilot, wykluczając usuniętą domenę
