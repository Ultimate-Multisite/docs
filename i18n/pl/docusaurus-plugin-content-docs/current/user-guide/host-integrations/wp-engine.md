---
title: Integracja z WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integracja z WP Engine

## Przegląd
WP Engine to premium zarządzana platforma hostingowa dla WordPress, która zapewnia zoptymalizowaną wydajność, bezpieczeństwo i skalowalność dla stron WordPress. Ta integracja umożliwia automatyczną synchronizację domen między Ultimate Multisite a WP Engine.

## Funkcje
- Automatyczna synchronizacja domen
- Obsługa subdomen dla instalacji multisite
- Płynna integracja z istniejącymi systemami WP Engine

## Wymagania
Integracja automatycznie wykrywa, czy hostujesz na WP Engine i korzysta z wbudowanego API WP Engine. Jeśli plugin WP Engine jest aktywny i poprawnie skonfigurowany, żadna dodatkowa konfiguracja nie jest wymagana.

Jeśli jednak musisz ręcznie skonfigurować integrację, możesz zdefiniować jedną z tych stałych w pliku `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferowana metoda
// LUB
define('WPE_API', 'your_api_key'); // Alternatywna metoda
```

## Instrukcja konfiguracji

### 1. Sprawdź plugin WP Engine

Jeśli hostujesz na WP Engine, plugin WP Engine powinien być już zainstalowany i aktywowany. Upewnij się, że:

1. Plugin WP Engine jest aktywny
2. Plik `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` istnieje

### 2. Włącz integrację

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do zakładki "Domain Mapping"
3. Przewiń w dół do sekcji "Host Integrations"
4. Włącz integrację z WP Engine
5. Kliknij "Save Changes"

## Jak to działa

### Synchronizacja domen

Gdy domena jest mapowana w Ultimate Multisite:

1. Integracja używa API WP Engine, aby dodać domenę do Twojej instalacji WP Engine
2. WP Engine obsługuje konfigurację domeny i wystawianie certyfikatu SSL
3. Gdy mapowanie domeny zostanie usunięte, integracja usunie domenę z WP Engine

### Obsługa subdomen

W przypadku instalacji multisite z subdomenami:

1. Integracja dodaje każdą subdomenę do WP Engine, gdy tworzona jest nowa strona
2. WP Engine obsługuje konfigurację subdomeny
3. Gdy strona zostanie usunięta, integracja usunie subdomenę z WP Engine

## Ważne informacje

### Domeny wildcard

W przypadku instalacji multisite z subdomenami zaleca się skontaktowanie z pomocą techniczną WP Engine w celu uzyskania konfiguracji domeny wildcard. Pozwala to na automatyczne działanie wszystkich subdomen bez konieczności dodawania każdej z osobna.

### Certyfikaty SSL

WP Engine automatycznie obsługuje wystawianie i odnawianie certyfikatów SSL dla wszystkich domen dodanych przez tę integrację. Żadna dodatkowa konfiguracja nie jest wymagana.

## Rozwiązywanie problemów

### Problemy z połączeniem API
- Sprawdź, czy plugin WP Engine jest aktywny i poprawnie skonfigurowany
- Jeśli ręcznie zdefiniowałeś klucz API, upewnij się, że jest poprawny
- Skontaktuj się z pomocą techniczną WP Engine, jeśli masz problemy z API

### Domena nie została dodana
- Sprawdź logi Ultimate Multisite w poszukiwaniu komunikatów o błędach
- Upewnij się, że domena nie jest już dodana do WP Engine
- Sprawdź, czy Twój plan WP Engine obsługuje liczbę domen, które chcesz dodać

### Problemy z subdomenami
- Jeśli subdomeny nie działają, skontaktuj się z pomocą techniczną WP Engine, aby poprosić o konfigurację domeny wildcard
- Sprawdź, czy ustawienia DNS są poprawnie skonfigurowane dla domeny głównej i subdomen
