---
title: Ulepsz integrację Panelu sterowania
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Integracja z Panelem Enhance

## Przegląd
Enhance to nowoczesny panel sterowania oferujący zaawansowane możliwości automatyzacji i zarządzania hostingiem. Ta integracja umożliwia automatyczną synchronizację domen i zarządzanie certyfikatami SSL między Ultimate Multisite a Panelem Enhance.

**Powiązana dyskusja:** Zobacz [Dyskusję GitHub #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265), gdzie znajdziesz wskazówki społeczności i dodatkowe informacje.

## Funkcje
- Automatyczna synchronizacja domen przy mapowaniu w Ultimate Multisite
- Automatyczne wydawanie certyfikatów SSL przez LetsEncrypt, gdy DNS zostanie rozwiązany
- Obsługa subdomen dla sieci działających w trybie subdomen
- Usuwanie domen przy usunięciu mapowania
- Testowanie połączenia w celu weryfikacji danych dostępowych API

## Wymagania

### Wymagania systemowe
- Zainstalowany i dostępny Panel Enhance
- Instalacja WordPress Multisite hostowana na serwerze Enhance lub z nim połączona
- Serwer Apache (Enhance obecnie obsługuje konfiguracje Apache; LiteSpeed Enterprise jest dostępny po obniżonej cenie)

### Dostęp do API
Musisz mieć uprawnienia administratora do Panelu Enhance, aby móc tworzyć tokeny API.

## Uzyskiwanie danych dostępowych API

### 1. Utwórz token API

1. Zaloguj się do Panelu Enhance jako administrator
2. Kliknij **Settings** w menu nawigacyjnym
3. Przejdź do **Access Tokens**
4. Kliknij **Create Token**
5. Nadaj tokenowi opisową nazwę (np. „Ultimate Multisite Integration")
6. Przypisz rolę **System Administrator**
7. Dla daty wygaśnięcia:
   - Pozostaw puste, jeśli token ma nigdy nie wygasać
   - Lub ustaw konkretną datę wygaśnięcia dla zwiększenia bezpieczeństwa
8. Kliknij **Create**

Po utworzeniu wyświetli się Twój **Access Token** i **Organization ID**. **Zapisz je natychmiast**, ponieważ token zostanie wyświetlony tylko raz.

### 2. Uzyskaj swoje Organization ID

Organization ID jest wyświetlane na stronie Access Tokens w niebieskim polu informacyjnym oznaczonym jako „Org ID: {twoje_id}".

Organization ID ma format UUID: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Możesz również znaleźć Organization ID klienta w następujący sposób:
1. Przejdź do strony **Customers**
2. Kliknij **Manage customer** przy odpowiednim kliencie
3. Spójrz na URL – Organization ID to znaki alfanumeryczne po `/customers/`

### 3. Uzyskaj swój Server ID

Aby znaleźć Server ID (wymagany do operacji na domenach):

1. W Panelu Enhance przejdź do **Servers**
2. Kliknij na serwer, na którym działa Twoja instalacja WordPress
3. Server ID (w formacie UUID) będzie widoczny w URL lub w szczegółach serwera
4. Alternatywnie możesz użyć API do wylistowania serwerów:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID ma format UUID: `00000000-0000-0000-0000-000000000000`

### 4. Uzyskaj swój URL API

Twój URL API to adres Panelu Enhance z dopisanym `/api/`:

```
https://your-enhance-panel.com/api/
```

**Ważne:** Ścieżka `/api/` jest wymagana. Częste błędy to:
- Używanie samej domeny bez `/api/`
- Używanie HTTP zamiast HTTPS (HTTPS jest wymagany ze względów bezpieczeństwa)

## Konfiguracja

### Wymagane stałe

Dodaj następujące stałe do pliku `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Konfiguracja przez Kreator integracji

1. W panelu administracyjnym WordPress przejdź do **Ultimate Multisite** > **Settings**
2. Przejdź do zakładki **Integrations**
3. Znajdź **Enhance Control Panel Integration** i kliknij **Configuration**
4. Kreator przeprowadzi Cię przez konfigurację:
   - **Krok 1:** Wprowadzenie i przegląd funkcji
   - **Krok 2:** Wprowadź dane dostępowe API (Token, URL API, Server ID)
   - **Krok 3:** Przetestuj połączenie
   - **Krok 4:** Przegląd i aktywacja

Możesz wybrać:
- Automatyczne dodanie stałych do pliku `wp-config.php` przez kreator
- Skopiowanie definicji stałych i dodanie ich ręcznie

## Dodatkowa konfiguracja WordPress

Na podstawie opinii społeczności ([Dyskusja #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) może być konieczne skonfigurowanie tych dodatkowych ustawień:

### Konfiguracja .htaccess

Jeśli masz problemy z mapowaniem domen:
1. Usuń oryginalny plik `.htaccess` od Enhance
2. Zastąp go standardowym plikiem `.htaccess` dla WordPress Multisite

### Stałe dla ciasteczek

Dodaj te stałe do `wp-config.php`, aby zapewnić prawidłową obsługę ciasteczek na mapowanych domenach:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Jak to działa

### Gdy domena jest mapowana

1. Użytkownik mapuje własną domenę w Ultimate Multisite (lub tworzona jest nowa strona w trybie subdomen)
2. Integracja wysyła żądanie POST do API Enhance: `/servers/{server_id}/domains`
3. Enhance dodaje domenę do konfiguracji Twojego serwera
4. Gdy DNS zostanie rozwiązany na Twój serwer, Enhance automatycznie wydaje certyfikat SSL przez LetsEncrypt
5. Domena staje się aktywna z HTTPS

### Gdy domena jest usuwana

1. Mapowanie domeny zostaje usunięte w Ultimate Multisite
2. Integracja odpytuje Enhance, aby znaleźć ID domeny
3. Wysyłane jest żądanie DELETE do: `/servers/{server_id}/domains/{domain_id}`
4. Enhance usuwa domenę z konfiguracji Twojego serwera

### Sprawdzanie DNS i SSL

Ultimate Multisite ma wbudowane sprawdzanie DNS i SSL:
- Możesz skonfigurować interwał sprawdzania w **Domain Mapping Settings** (domyślnie: 300 sekund/5 minut)
- System zweryfikuje propagację DNS przed oznaczeniem domeny jako aktywnej
- Ważność certyfikatu SSL jest sprawdzana automatycznie
- Enhance obsługuje wydawanie SSL automatycznie, więc ręczna konfiguracja SSL nie jest wymagana

## Weryfikacja konfiguracji

### Testowanie połączenia

1. W Kreatorze integracji użyj kroku **Test Connection**
2. Wtyczka spróbuje wylistować domeny na Twoim serwerze
3. Komunikat o powodzeniu potwierdza:
   - Dane dostępowe API są poprawne
   - URL API jest dostępny
   - Server ID jest prawidłowy
   - Uprawnienia są właściwie ustawione

### Po zmapowaniu domeny

1. Zmapuj testową domenę w Ultimate Multisite
2. Sprawdź logi Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Zweryfikuj w Panelu Enhance, że domena została dodana:
   - Przejdź do **Servers** > **Twój serwer** > **Domains**
   - Nowa domena powinna pojawić się na liście
4. Po propagacji DNS zweryfikuj, że SSL został automatycznie wydany

## Rozwiązywanie problemów

### Problemy z połączeniem API

**Błąd: „Failed to connect to Enhance API"**
- Sprawdź, czy `WU_ENHANCE_API_URL` zawiera `/api/` na końcu
- Upewnij się, że używasz HTTPS, a nie HTTP
- Sprawdź, czy Panel Enhance jest dostępny z Twojego serwera WordPress
- Zweryfikuj, czy żadne reguły firewalla nie blokują połączenia

**Błąd: „Enhance API Token not found"**
- Upewnij się, że `WU_ENHANCE_API_TOKEN` jest zdefiniowany w `wp-config.php`
- Sprawdź, czy token nie został usunięty lub nie wygasł w Enhance
- Sprawdź, czy nie ma literówek w wartości tokena

**Błąd: „Server ID is not configured"**
- Zweryfikuj, że `WU_ENHANCE_SERVER_ID` jest zdefiniowany w `wp-config.php`
- Upewnij się, że Server ID ma prawidłowy format UUID
- Potwierdź, że serwer istnieje w Twoim Panelu Enhance

### Domena nie została dodana

**Sprawdź logi:**
1. Przejdź do **Ultimate Multisite** > **Logs**
2. Filtruj według **integration-enhance**
3. Szukaj komunikatów o błędach wskazujących na problem

**Częste przyczyny:**
- Nieprawidłowy format nazwy domeny
- Domena już istnieje w Enhance
- Niewystarczające uprawnienia API (upewnij się, że token ma rolę System Administrator)
- Server ID nie odpowiada faktycznemu serwerowi w Enhance

### Problemy z certyfikatem SSL

**SSL się nie wydaje:**
- Sprawdź, czy DNS wskazuje na adres IP Twojego serwera
- Upewnij się, że domena się rozwiązuje poprawnie: `nslookup twojadomena.com`
- Enhance wymaga rozwiązania DNS przed wydaniem SSL
- Wydanie SSL trwa zazwyczaj 5-10 minut po propagacji DNS
- Sprawdź logi Panelu Enhance w poszukiwaniu błędów związanych z SSL

**Ręczne rozwiązywanie problemów z SSL w Enhance:**
1. Przejdź do **Servers** > **Twój serwer** > **Domains**
2. Znajdź swoją domenę i sprawdź jej status SSL
3. W razie potrzeby możesz ręcznie wywołać wydanie SSL

### Interwał sprawdzania DNS

Jeśli aktywacja domen lub certyfikatów SSL trwa zbyt długo:
1. Przejdź do **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Znajdź ustawienie **DNS Check Interval**
3. Zmniejsz domyślną wartość 300 sekund (minimum: 10 sekund)
4. **Uwaga:** Niższe interwały oznaczają częstsze sprawdzanie, ale większe obciążenie serwera

### Błędy uwierzytelniania

**Błędy HTTP 401/403:**
- Wygeneruj ponownie token API w Enhance
- Sprawdź, czy token ma rolę **System Administrator**
- Upewnij się, że token nie wygasł
- Zweryfikuj, że używasz prawidłowego Organization ID (choć zazwyczaj nie jest wymagany w URL)

### Analiza logów

Włącz szczegółowe logowanie:
```php
// Dodaj do wp-config.php dla rozszerzonego debugowania
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Następnie sprawdź logi w:
- Logi Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Log debugowania WordPress: `wp-content/debug.log`
- Logi Panelu Enhance: Dostępne w interfejsie administracyjnym Enhance

## Dokumentacja API

### Uwierzytelnianie
Wszystkie żądania API używają uwierzytelniania tokenem Bearer:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Najczęściej używane endpointy

**Lista serwerów:**
```
GET /servers
```

**Lista domen na serwerze:**
```
GET /servers/{server_id}/domains
```

**Dodaj domenę:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Usuń domenę:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Pełna dokumentacja API
Kompletna dokumentacja API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Dobre praktyki

### Bezpieczeństwo
- **Nigdy nie commituj tokenów API do repozytorium**
- Przechowuj tokeny w `wp-config.php`, który powinien być wykluczony z Git
- Używaj tokenów z odpowiednimi uprawnieniami (System Administrator dla pełnej integracji)
- Ustawiaj daty wygaśnięcia tokenów w środowiskach produkcyjnych
- Okresowo rotuj tokeny

### Wydajność
- Używaj domyślnego interwału sprawdzania DNS (300 sekund), aby uniknąć nadmiernych wywołań API
- Monitoruj zasoby serwera Enhance przy dużych operacjach na domenach
- Rozważ rozłożenie w czasie dodawania domen, jeśli mapujesz wiele naraz

### Monitorowanie
- Regularnie sprawdzaj logi Ultimate Multisite pod kątem błędów integracji
- Skonfiguruj monitoring nieudanych dodań domen
- Weryfikuj, czy certyfikaty SSL są wydawane poprawnie
- Obserwuj pojemność serwera Enhance i limity domen

## Dodatkowe zasoby

- **Oficjalna dokumentacja Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentacja API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum społeczności Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Dyskusja GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Przewodnik po mapowaniu domen Ultimate Multisite:** Zobacz stronę wiki „How to Configure Domain Mapping v2"

## Wsparcie

Jeśli napotkasz problemy:
1. Sprawdź powyższą sekcję Rozwiązywanie problemów
2. Przejrzyj logi Ultimate Multisite
3. Zajrzyj do [Dyskusji GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Skontaktuj się ze wsparciem Enhance w sprawach dotyczących panelu
5. Utwórz nową dyskusję ze szczegółowymi logami błędów, aby uzyskać pomoc społeczności

## Uwagi

- Ta integracja obsługuje tylko aliasy domen; Enhance zarządza SSL automatycznie
- Integracja obsługuje zarówno niestandardowe mapowania domen, jak i strony oparte na subdomenach
- Automatyczne tworzenie subdomeny www można skonfigurować w ustawieniach Domain Mapping
- Enhance obecnie obsługuje konfiguracje Apache (LiteSpeed Enterprise jest dostępny)
- Usunięcie domeny z Ultimate Multisite spowoduje jej usunięcie z Enhance, ale może nie usunąć od razu powiązanych certyfikatów SSL
