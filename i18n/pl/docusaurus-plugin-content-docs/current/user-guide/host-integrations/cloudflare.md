---
title: Integracja z Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Integracja z Cloudflare

## Przegląd
Cloudflare to wiodąca sieć dostarczania treści (CDN) i dostawca zabezpieczeń, który pomaga chronić i przyspieszać strony internetowe. Ta integracja umożliwia automatyczne zarządzanie domenami między Ultimate Multisite a Cloudflare, szczególnie w przypadku instalacji multisite opartych na subdomenach.

## Funkcje
- Automatyczne tworzenie subdomen w Cloudflare
- Obsługa subdomen przez proxy
- Zarządzanie rekordami DNS
- Rozszerzone wyświetlanie rekordów DNS w panelu administracyjnym Ultimate Multisite

## Wymagania
Następujące stałe muszą być zdefiniowane w pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instrukcja konfiguracji

### 1. Uzyskaj klucz API Cloudflare

1. Zaloguj się do panelu Cloudflare
2. Przejdź do „My Profile" (kliknij swój adres e-mail w prawym górnym rogu)
3. Wybierz „API Tokens" z menu
4. Utwórz nowy token API z następującymi uprawnieniami:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Skopiuj swój token API

### 2. Uzyskaj Zone ID

1. W panelu Cloudflare wybierz domenę, której chcesz użyć
2. Zone ID jest widoczne w zakładce „Overview", w prawym pasku bocznym pod „API"
3. Skopiuj Zone ID

### 3. Dodaj stałe do wp-config.php

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Włącz integrację

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do zakładki „Domain Mapping"
3. Przewiń w dół do „Host Integrations"
4. Włącz integrację z Cloudflare
5. Kliknij „Save Changes"

## Jak to działa

### Zarządzanie subdomenami

Gdy w instalacji multisite opartej na subdomenach tworzona jest nowa strona:

1. Integracja wysyła żądanie do API Cloudflare, aby dodać rekord CNAME dla subdomeny
2. Subdomena jest domyślnie skonfigurowana do działania przez proxy Cloudflare (można to zmienić za pomocą filtrów)
3. Gdy strona zostanie usunięta, integracja usunie subdomenę z Cloudflare

### Wyświetlanie rekordów DNS

Integracja rozszerza wyświetlanie rekordów DNS w panelu administracyjnym Ultimate Multisite poprzez:

1. Pobieranie rekordów DNS bezpośrednio z Cloudflare
2. Wyświetlanie informacji, czy rekordy są obsługiwane przez proxy
3. Pokazywanie dodatkowych informacji o rekordach DNS

## Ważne uwagi

Zgodnie z ostatnimi aktualizacjami Cloudflare, proxy dla wildcardów jest teraz dostępne dla wszystkich klientów. Oznacza to, że integracja z Cloudflare jest mniej istotna dla instalacji multisite opartych na subdomenach niż kiedyś, ponieważ możesz po prostu skonfigurować rekord DNS typu wildcard w Cloudflare.

## Rozwiązywanie problemów

### Problemy z połączeniem API
- Sprawdź, czy Twój token API jest poprawny i ma wymagane uprawnienia
- Upewnij się, że Zone ID jest prawidłowe
- Sprawdź, czy Twoje konto Cloudflare ma odpowiednie uprawnienia

### Subdomena nie została dodana
- Sprawdź logi Ultimate Multisite pod kątem komunikatów o błędach
- Upewnij się, że subdomena nie została już dodana do Cloudflare
- Sprawdź, czy Twój plan Cloudflare obsługuje liczbę rekordów DNS, które tworzysz

### Problemy z proxy
- Jeśli nie chcesz, aby subdomeny były obsługiwane przez proxy, możesz użyć filtra `wu_cloudflare_should_proxy`
- Niektóre funkcje mogą nie działać poprawnie przy włączonym proxy (np. niektóre funkcje panelu administracyjnego WordPress)
- Rozważ użycie Page Rules w Cloudflare, aby pominąć pamięć podręczną dla stron administracyjnych
