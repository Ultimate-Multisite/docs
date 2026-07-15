---
title: Integracja z Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integracja z Hostinger (hPanel)

## Przegląd {#overview}

Hostinger to popularny dostawca usług hostingowych, który oferuje nowoczesne panel zarządzania o nazwie hPanel. Integracja Ultimate Multisite z Hostinger umożliwia automatyczną synchronizację domen między Ultimate Multisite a hPanel Hostinger, dzięki czemu możesz automatycznie zarządzać mapowaniem domen i poddomenami bezpośrednio z panelu administracyjnego WordPress.

## Funkcje {#features}

- Automatyczne tworzenie domen dodatkowych (addon domain) w hPanel
- Automatyczne tworzenie poddomen w hPanel (dla instalacji multisite z poddomenami)
- Usuwanie domen, gdy mapowania zostaną usunięte
- Bezproblemowa integracja z API zarządzania domenami hPanel

## Wymagania {#requirements}

Aby używać integracji Hostinger, potrzebujesz:

1. Konta Hostinger z dostępem do hPanel
2. Tokenu API z Hostinger
3. Zdefiniowania następujących stałych w pliku `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opcjonalnie możesz również zdefiniować:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Domyślny endpoint API
```

## Instrukcje konfiguracji {#setup-instructions}

### 1. Wygeneruj token API Hostinger {#1-generate-your-hostinger-api-token}

1. Zaloguj się na swoje konto Hostinger i przejdź do hPanel.
2. Przejdź do **Account Settings** → **API Tokens**.
3. Kliknij **Create New Token**.
4. Nadaj tokenowi opisową nazwę (np. "Ultimate Multisite").
5. Wybierz niezbędne uprawnienia:
   - Zarządzanie domenami
   - Zarządzanie poddomenami
6. Skopiuj wygenerowany token i przechowuj go bezpiecznie.

### 2. Znajdź swój ID konta {#2-find-your-account-id}

1. W hPanel przejdź do **Account Settings** → **Account Information**.
2. Twój ID konta jest wyświetlony na tej stronie.
3. Skopiuj i zapisz ten ID na potrzeby następnego kroku.

### 3. Dodaj stałe do wp-config.php {#3-add-constants-to-wp-configphp}

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Jeśli Twoje konto Hostinger używa innego endpointu API, możesz go dostosować:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Włącz integrację {#4-enable-the-integration}

1. W panelu administracyjnym WordPress przejdź do **Ultimate Multisite > Settings**.
2. Przejdź do zakładki **Domain Mapping**.
3. Przewiń do **Host Integrations**.
4. Włącz integrację **Hostinger (hPanel)**.
5. Kliknij **Save Changes**.

## Jak to działa {#how-it-works}

### Domeny dodatkowe (Addon Domains) {#addon-domains}

Gdy mapujesz domenę w Ultimate Multisite:

1. Integracja wysyła żądanie do API Hostinger, aby dodać domenę jako domenę dodatkową.
2. Domena jest skonfigurowana tak, aby wskazywać na Twój katalog główny.
3. Gdy mapowanie domeny zostanie usunięte, integracja automatycznie usuwa domenę dodatkową z hPanel.

### Poddomeny (Subdomains) {#subdomains}

W przypadku instalacji multisite z poddomenami, gdy tworzony jest nowy site:

1. Integracja wyodrębnia część poddomeny z pełnej nazwy domeny.
2. Wysyła żądanie do API Hostinger, aby dodać poddomenę.
3. Poddomena jest skonfigurowana tak, aby wskazywać na Twój katalog główny.

## Ważne uwagi {#important-notes}

- Integracja używa REST API Hostinger do komunikacji z Twoim kontem.
- Twój token API musi posiadać niezbędne uprawnienia do zarządzania domenami i poddomenami.
- Integracja nie zajmuje się konfiguracją DNS; domeny muszą być już skierowane na Twoje konto Hostinger.
- Żądania API są realizowane bezpiecznie przez HTTPS.
- Zachowaj bezpieczeństwo swojego tokenu API i nigdy nie udostępniaj go publicznie.

## Rozwiązywanie problemów {#troubleshooting}

### Problemy z połączeniem API {#api-connection-issues}

- Sprawdź, czy Twój token API jest poprawny i czy nie wygasł.
- Upewnij się, że ID konta jest poprawne.
- Zweryfikuj, czy Twój token API ma niezbędne uprawnienia do zarządzania domenami.
- Upewnij się, że Twoje konto Hostinger jest aktywne i w dobrym stanie.

### Domena nie została dodana {#domain-not-added}

- Sprawdź w logach Ultimate Multisite, czy nie ma żadnych komunikatów o błędach.
- Zweryfikuj, czy domena nie została już dodana do Twojego konta Hostinger.
- Upewnij się, że Twoje konto Hostinger nie osiągnęło limitu domen dodatkowych.
- Potwierdź, że domena jest prawidłowo skierowana na serwery nazw Hostinger.

### Problemy z certyfikatami SSL {#ssl-certificate-issues}

- Integracja nie zajmuje się wydawaniem certyfikatów SSL.
- Hostinger zazwyczaj zapewnia darmowe certyfikaty SSL za pośrednictwem AutoSSL.
- Możesz zarządzać certyfikatami SSL bezpośrednio w hPanel w sekcji **SSL/TLS**.
- Alternatywnie, użyj Let's Encrypt z funkcją AutoSSL Hostinger.

## Wsparcie {#support}

Jeśli potrzebujesz dodatkowej pomocy z integracją Hostinger, zapoznaj się z:

- [Dokumentacją API Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Dokumentacją Ultimate Multisite](/)
- [Wsparciem Ultimate Multisite](https://ultimatemultisite.com/support)
