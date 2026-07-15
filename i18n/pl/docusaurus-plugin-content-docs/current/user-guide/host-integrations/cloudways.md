---
title: Integracja z Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integracja Cloudways

## Przegląd {#overview}
Cloudways to zarządzana platforma hostingu w chmurze, która pozwala wdrażać strony WordPress u różnych dostawców chmury, takich jak DigitalOcean, AWS, Google Cloud i inni. Ta integracja umożliwia automatyczną synchronizację domen i zarządzanie certyfikatami SSL między Ultimate Multisite a Cloudways.

## Funkcje {#features}
- Automatyczna synchronizacja domen
- Zarządzanie certyfikatami SSL
- Obsługa dodatkowych domen
- Walidacja DNS dla certyfikatów SSL

## Wymagania {#requirements}
Następujące stałe muszą być zdefiniowane w pliku `wp-config.php`:

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

## Instrukcje konfiguracji {#setup-instructions}

### 1. Uzyskaj dane uwierzytelniające API Cloudways {#1-get-your-cloudways-api-credentials}

1. Zaloguj się do swojego Cloudways dashboard
2. Przejdź do "Account" > "API Keys"
3. Wygeneruj klucz API, jeśli jeszcze go nie masz
4. Skopiuj swój e-mail i klucz API

### 2. Uzyskaj identyfikatory serwera i aplikacji {#2-get-your-server-and-application-ids}

1. W swoim Cloudways dashboard przejdź do "Servers"
2. Wybierz serwer, na którym hostowana jest twoja multisite WordPress
3. Server ID jest widoczny w adresie URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Przejdź do "Applications" i wybierz swoją aplikację WordPress
5. App ID jest widoczny w adresie URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Dodaj stałe do wp-config.php {#3-add-constants-to-wp-configphp}

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Jeśli masz dodatkowe **zewnętrzne** domeny (poza swoją siecią multisite), które zawsze powinny być utrzymywane na liście aliasów Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Nie dodawaj wildcard własnej sieci
**Nie** dodawaj `*.your-network.com` (ani żadnego wzorca subdomeny własnej sieci) do
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Zobacz [Ważne — pułapka SSL wildcard](#important--wildcard-ssl-pitfall)
poniżej, aby dowiedzieć się, dlaczego uniemożliwia to wydawanie certyfikatów SSL dla poszczególnych tenantów.
:::

### 4. Włącz integrację {#4-enable-the-integration}

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do karty "Domain Mapping"
3. Przewiń w dół do "Host Integrations"
4. Włącz integrację Cloudways
5. Kliknij "Save Changes"

## Jak to działa {#how-it-works}

### Synchronizacja domen {#domain-syncing}

Gdy domena jest mapowana w Ultimate Multisite:

1. Integracja pobiera wszystkie aktualnie zmapowane domeny
2. Dodaje nową domenę do listy (wraz z wersją www, jeśli ma zastosowanie)
3. Wysyła pełną listę do Cloudways przez API
4. Cloudways aktualizuje aliasy domen dla twojej aplikacji

Uwaga: Cloudways API wymaga każdorazowo wysyłania pełnej listy domen, a nie tylko dodawania lub usuwania pojedynczych domen.

### Zarządzanie certyfikatami SSL {#ssl-certificate-management}

Po zsynchronizowaniu domen:

1. Integracja sprawdza, które domeny mają prawidłowe rekordy DNS wskazujące na twój serwer
2. Wysyła żądanie do Cloudways, aby zainstalować certyfikaty SSL Let's Encrypt dla tych domen
3. Cloudways obsługuje wydanie i instalację certyfikatów SSL

Integracja zawsze żąda **standardowych** (nie-wildcard) certyfikatów Let's Encrypt od
Cloudways. Jeśli wzorzec wildcard zostanie podany w `WU_CLOUDWAYS_EXTRA_DOMAINS`, początkowe
`*.` zostaje usunięte przed żądaniem SSL — sam wildcard nigdy nie jest instalowany przez tę
integrację. Aby użyć certyfikatu wildcard w Cloudways, trzeba zainstalować go
ręcznie, ale zrobienie tego blokuje wydawanie Let's Encrypt dla poszczególnych domen dla zmapowanych domen niestandardowych
(zobacz pułapkę poniżej).

## Dodatkowe domeny {#extra-domains}

Stała `WU_CLOUDWAYS_EXTRA_DOMAINS` pozwala określić dodatkowe **zewnętrzne**
domeny, które zawsze powinny być utrzymywane na liście aliasów aplikacji Cloudways. Użyj jej dla:

- Domen zewnętrznych, które nie są zarządzane przez Ultimate Multisite (np. osobna strona marketingowa współdzieląca tę samą aplikację Cloudways)
- Domen zaparkowanych lub stagingowych, które chcesz utrzymywać na liście aliasów aplikacji

**Nie** używaj tej stałej dla wildcard subdomen własnej sieci
(np. `*.your-network.com`). Zobacz poniżej pułapkę SSL wildcard.

## Ważne — pułapka SSL wildcard {#important--wildcard-ssl-pitfall}

Częstym błędem podczas korzystania z domyślnej konfiguracji Cloudways jest dodanie wildcard, takiego jak
`*.your-network.com`, do `WU_CLOUDWAYS_EXTRA_DOMAINS`, albo ręczna instalacja certyfikatu SSL wildcard Cloudways
dla tego wildcard.

**Jeśli to zrobisz, Cloudways odmówi wydania certyfikatów Let's Encrypt dla
niestandardowych domen poszczególnych tenantów, które mapuje Ultimate Multisite.** Cloudways zastępuje aktywny
certyfikat SSL w aplikacji za każdym razem, a istniejący wcześniej certyfikat wildcard w
aplikacji blokuje wydawanie Let's Encrypt dla poszczególnych domen, na którym polega integracja.

### Zalecana konfiguracja SSL Cloudways dla sieci Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. W karcie **SSL Certificate** aplikacji Cloudways zainstaluj **standardowy
   certyfikat Let's Encrypt** obejmujący tylko `your-network.com` i `www.your-network.com`
   — **nie** wildcard.
2. **Nie** umieszczaj `*.your-network.com` (ani żadnego wzorca subdomeny własnej sieci) w
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Zarezerwuj tę stałą wyłącznie dla domen **zewnętrznych**.
3. Utwórz wildcard subdomen dla poszczególnych tenantów wyłącznie na poziomie **DNS** (rekord `A` dla
   `*.your-network.com` wskazujący na adres IP twojego serwera Cloudways), aby podstrony się rozwiązywały. SSL
   dla poszczególnych zmapowanych domen niestandardowych jest następnie wydawany automatycznie przez integrację
   za pośrednictwem Let's Encrypt.

Jeśli niestandardowe domeny Twoich dzierżawców utknęły bez SSL, sprawdź kartę SSL w Cloudways. Jeśli jest tam aktywny certyfikat wildcard, usuń go, ponownie wydaj standardowy certyfikat Let's Encrypt tylko dla głównej domeny sieci i usuń wszystkie wpisy wildcard z `WU_CLOUDWAYS_EXTRA_DOMAINS`. Następnie ponownie uruchom mapowanie domeny (lub poczekaj na następne), a integracja znów zacznie wystawiać certyfikaty dla poszczególnych domen.

## Rozwiązywanie problemów {#troubleshooting}

### Problemy z połączeniem API {#api-connection-issues}
- Sprawdź, czy Twój adres e-mail i klucz API są poprawne
- Sprawdź, czy identyfikatory serwera i aplikacji są poprawne
- Upewnij się, że Twoje konto Cloudways ma niezbędne uprawnienia

### Problemy z certyfikatem SSL {#ssl-certificate-issues}
- Cloudways wymaga, aby domeny miały prawidłowe rekordy DNS wskazujące na Twój serwer przed wystawieniem certyfikatów SSL
- Integracja sprawdza rekordy DNS przed zażądaniem certyfikatów SSL
- Jeśli certyfikaty SSL nie są wystawiane, sprawdź, czy Twoje domeny prawidłowo wskazują adres IP Twojego serwera
- **Niestandardowe domeny poszczególnych dzierżawców utknęły bez SSL?** Sprawdź kartę SSL Certificate aplikacji Cloudways. Jeśli aktywny jest certyfikat wildcard (zainstalowany ręcznie lub obejmujący `*.your-network.com`), Cloudways nie wystawi certyfikatów Let's Encrypt dla indywidualnie mapowanych domen niestandardowych. Zastąp go standardowym certyfikatem Let's Encrypt obejmującym tylko główną domenę sieci (`your-network.com`, `www.your-network.com`) i usuń wszystkie wpisy wildcard z `WU_CLOUDWAYS_EXTRA_DOMAINS`. Następnie ponownie uruchom mapowanie domeny (lub poczekaj na następne), a integracja zażąda certyfikatów dla poszczególnych domen.

### Domena nie została dodana {#domain-not-added}
- Sprawdź logi Ultimate Multisite pod kątem ewentualnych komunikatów o błędach
- Sprawdź, czy domena nie została już dodana do Cloudways
- Upewnij się, że Twój plan Cloudways obsługuje liczbę domen, które dodajesz
