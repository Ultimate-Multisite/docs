---
title: Integracja Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integracja Cloudflare {#cloudflare-integration}

## Przegląd {#overview}
Cloudflare to wiodąca sieć dostarczania treści (CDN) i dostawca zabezpieczeń, który pomaga chronić i przyspieszać strony internetowe. Ta integracja umożliwia automatyczne zarządzanie domenami między Ultimate Multisite a Cloudflare, szczególnie w przypadku instalacji multisite z subdomenami.

## Funkcje {#features}
- Automatyczne tworzenie subdomen w Cloudflare
- Obsługa subdomen z proxy
- Zarządzanie rekordami DNS
- Ulepszone wyświetlanie rekordów DNS w panelu administracyjnym Ultimate Multisite

## Wymagania {#requirements}
Następujące stałe muszą być zdefiniowane w pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instrukcje konfiguracji {#setup-instructions}

### 1. Uzyskaj swój Cloudflare API Key {#1-get-your-cloudflare-api-key}

1. Zaloguj się do swojego Dashboard Cloudflare
2. Przejdź do „My Profile” (kliknij swój adres e-mail w prawym górnym rogu)
3. Wybierz „API Tokens” z menu
4. Utwórz nowy token API z następującymi uprawnieniami:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Skopiuj swój token API

### 2. Uzyskaj swój Zone ID {#2-get-your-zone-id}

1. W swoim Dashboard Cloudflare wybierz domenę, której chcesz użyć
2. Zone ID jest widoczny na karcie „Overview”, na prawym pasku bocznym w sekcji „API”
3. Skopiuj Zone ID

### 3. Dodaj stałe do wp-config.php {#3-add-constants-to-wp-configphp}

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Włącz integrację {#4-enable-the-integration}

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do karty „Domain Mapping”
3. Przewiń w dół do „Host Integrations”
4. Włącz integrację Cloudflare
5. Kliknij „Save Changes”

## Jak to działa {#how-it-works}

### Zarządzanie subdomenami {#subdomain-management}

Gdy w instalacji multisite z subdomenami tworzona jest nowa strona:

1. Integracja wysyła żądanie do API Cloudflare, aby dodać rekord CNAME dla subdomeny
2. Subdomena jest domyślnie konfigurowana tak, aby działała przez proxy Cloudflare (można to zmienić za pomocą filtrów)
3. Gdy strona zostanie usunięta, integracja usunie subdomenę z Cloudflare

### Wyświetlanie rekordów DNS {#dns-record-display}

Integracja ulepsza wyświetlanie rekordów DNS w panelu administracyjnym Ultimate Multisite poprzez:

1. Pobieranie rekordów DNS bezpośrednio z Cloudflare
2. Wyświetlanie, czy rekordy są proxy, czy nie
3. Pokazywanie dodatkowych informacji o rekordach DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (wcześniej nazywane „Cloudflare for SaaS”) to funkcja Cloudflare, która pozwala Twoim klientom używać własnych domen z SSL w Twojej sieci multisite. Jest to zalecane podejście dla instalacji multisite z mapowanymi domenami, które używają Cloudflare, ponieważ Cloudflare automatycznie zarządza wydawaniem i odnawianiem certyfikatów SSL dla każdej domeny niestandardowej.

### Czym różni się od standardowej integracji Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standardowa integracja | Cloudflare Custom Hostnames |
|---|---|---|
| **Cel** | Automatycznie tworzy rekordy DNS dla subdomen | Umożliwia używanie niestandardowych (mapowanych) domen z SSL zarządzanym przez Cloudflare |
| **Najlepsze dla** | Multisite z subdomenami | Multisite z mapowanymi domenami |
| **SSL** | Obsługiwane osobno | Zarządzane automatycznie przez Cloudflare |

### Konfigurowanie Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. W swoim Dashboard Cloudflare otwórz strefę dla swojej głównej domeny.
2. Przejdź do **SSL/TLS > Custom Hostnames**.
3. Dodaj fallback origin wskazujący adres IP lub nazwę hosta Twojego serwera.
4. Dla każdej domeny klienta zmapowanej w Ultimate Multisite dodaj wpis Custom Hostname w Cloudflare. Możesz zautomatyzować ten krok za pomocą API Cloudflare.
5. Cloudflare automatycznie wydaje i odnawia certyfikaty TLS dla każdej niestandardowej nazwy hosta, gdy DNS klienta zostanie skierowany na Twoją sieć.

Pełną dokumentację API znajdziesz w [dokumentacji Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Aktualizacja terminologii
Od Ultimate Multisite v2.6.1 ta funkcja jest określana jako **Cloudflare Custom Hostnames** we wszystkich ustawieniach i etykietach pluginu. Wcześniejsze wersje używały nazwy „Cloudflare for SaaS”, która jest nazwą bazowego produktu Cloudflare.
:::

## Ważne uwagi {#important-notes}

Po ostatnich aktualizacjach Cloudflare proxy dla wildcard jest teraz dostępne dla wszystkich klientów. Oznacza to, że standardowa integracja DNS Cloudflare jest mniej krytyczna dla instalacji multisite z subdomenami niż kiedyś, ponieważ możesz po prostu skonfigurować rekord DNS wildcard w Cloudflare.

## Rozwiązywanie problemów {#troubleshooting}

### Problemy z połączeniem API {#api-connection-issues}
- Sprawdź, czy Twój token API jest poprawny i ma niezbędne uprawnienia
- Sprawdź, czy Twój Zone ID jest poprawny
- Upewnij się, że Twoje konto Cloudflare ma niezbędne uprawnienia

### Subdomena nie została dodana {#subdomain-not-added}
- Sprawdź logi Ultimate Multisite pod kątem komunikatów o błędach
- Sprawdź, czy subdomena nie jest już dodana do Cloudflare
- Upewnij się, że Twój plan Cloudflare obsługuje liczbę rekordów DNS, które tworzysz

### Problemy z proxy {#proxying-issues}
- Jeśli nie chcesz, aby subdomeny były proxy, możesz użyć filtra `wu_cloudflare_should_proxy`
- Niektóre funkcje mogą nie działać poprawnie przy proxy (np. niektóre funkcje panelu administracyjnego WordPress)
- Rozważ użycie Page Rules Cloudflare, aby ominąć pamięć podręczną dla stron administracyjnych
