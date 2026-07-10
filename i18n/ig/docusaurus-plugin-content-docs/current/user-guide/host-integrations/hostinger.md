---
title: Nkwado Hostinger (hPanel) Ụlọ
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integracja z Hostinger (hPanel) {#hostinger-hpanel-integration}

## Zarys {#overview}

Hostinger to popularny dostawca usług hostingu, który ma nowoczesną panelę kontrolną o nazwie hPanel. Integracja Ultimate Multisite Hostinger pozwala na automatyczne synchronizowanie domen między Ultimate Multisite a hPanel Hostinger, co umożliwia Ci automatyczne zarządzanie mapowaniem domen i poddomen bezpośrednio z Twojego panelu WordPressa.

## Funkcje {#features}

- Automatyczne tworzenie dodatkowych domen w hPanel
- Automatyczne tworzenie poddomen w hPanel (dla instalacji multisite na poddomenach)
- Usuwanie domeny, gdy mapowania są usuwane
- Bezproblemowa integracja z API zarządzania domenami hPanel

## Wymagania {#requirements}

Aby użyć integracji Hostinger, potrzebujesz:

1. Konta Hostinger z dostępem do hPanel
2. Token API od Hostinger
3. Poniższe stałe (constants) zdefiniowane w pliku `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'twoj_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'twoj_hostinger_account_id');
```

Opcjonalnie, możesz również zdefiniować:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Domyślny punkt końcowy API
```

## Instrukcje Konfiguracji {#setup-instructions}

### 1. Wygeneruj swój Token API Hostinger {#1-generate-your-hostinger-api-token}

1. Zaloguj się na swoje konto Hostinger i przejdź do hPanel
2. Przejdź do **Ustawienia konta** → **Tokeny API** (Account Settings → API Tokens)
3. Kliknij **Utwórz nowy token** (Create New Token)
4. Nadaj swojemu tokenowi opisową nazwę (np. "Ultimate Multisite")
5. Wybierz niezbędne uprawnienia:
   - Zarządzanie domenami (Domain management)
   - Zarządzanie poddomenami (Subdomain management)
6. Skopiuj wygenerowany token i bezpiecznie go zapisz

### 2. Znajdź swój ID konta {#2-find-your-account-id}

1. W hPanel przejdź do **Ustawienia konta** → **Informacje o koncie** (Account Settings → Account Information)
2. Twój ID konta jest wyświetlany na tej stronie
3. Skopiuj i zapisz ten ID dla następnego kroku

### 3. Dodaj stałe do wp-config.php {#3-add-constants-to-wp-configphp}

Dodaj poniższe stałe do swojego pliku `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ọ bụrụ na aka Hostinger-ụ gị na-anọchi API endpoint ọzọ, ị nwere ike ịgbanwe ya:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Ịgba Ọrụ Integration (Enable the Integration) {#4-enable-the-integration}

1. Na admin WordPress-ụ gị, jọọ n' **Ultimate Multisite > Settings**
2. Jọọ n' tab **Domain Mapping**
3. Jọọ anya n' **Host Integrations**
4. Gbanwe on **Hostinger (hPanel)** integration
5. Click **Save Changes**

## Ọ dị na-ọchịchị (How It Works) {#how-it-works}

### Addon Domains (Domene Addon) {#addon-domains}

N'ị map domain n'Ultimate Multisite:

1. Integration ahụ ga-anọchi request n'API nke Hostinger ka ịchukwu domain ahụ dịka addon domain
2. Domain ahụ ga-arị eziokwu ka ọ ga-anọchi root directory gị
3. Mgbe ị ri domain mapping ahụ off, integration ahụ ga-ri domain addon ahụ off n'hPanel

### Subdomains (Subdomain) {#subdomains}

Ọ bụrụ na ị chọrọ subdomain multisite installations, mgbe ị chụrụ site ọhụrụ:

1. Integration ahụ ga-anọchi part subdomain ahụ n'full domain
2. Ọ ga-anọchi request n'API nke Hostinger ka ịchukwu subdomain ahụ
3. Subdomain ahụ ga-arị eziokwu ka ọ ga-anọchi root directory gị

## Nkwado Ọ dị Mkpa (Important Notes) {#important-notes}

- Integration ahụ na-anọchi Hostinger's REST API ka ọ ga-anọchi aka gị
- API token gị ga-alebu izin ndị dị mkpa maka domain na subdomain management
- Integration ahụ na-agbanwe DNS configuration; domains ga-anọchi anọchi aka Hostinger account gị banyere
- API requests ga-anọchi n'HTTPS nke ọma
- Jiji API token gị ka ọ dị mma ma ị ri e anyịghị ya public

## Ịgụrụ Nkwado (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}

- Check that your API token na ọma na ewu (correct) ma ọ bụ gị dịghị nwere (expired).
- Jere na Account ID gị na ọma.
- Gba n'ụghị na API token gị na-eme ihe ndị dị mkpa maka ịgwara domain (domain management).
- Jere na Hostinger account gị na-agbanwe (active) ma na ọrụ ọma.

### Domain Ndị Agbanyị Na-eji (Domain Not Added) {#domain-not-added}

- Jere na Ultimate Multisite logs ahụ na-eme ihe ndị dị nwere mme (error messages).
- Gba n'ụghị na domain ahụ bụ domain na Hostinger account gị.
- Jere na Hostinger account gị na ọ dịghị nwere oge (limit) maka addon domains.
- Jere na domain ahụ na-eme ihe ndị dị mma (properly pointed) na Hostinger nameservers gị.

### Ihe Na-eme Ndị SSL Certificate (SSL Certificate Issues) {#ssl-certificate-issues}

- Integration ahụ na-eme ihe n'ụghị na ịkwado SSL certificate.
- Hostinger ọ bụrụ na na-agbanwe SSL certificates mgbe ọ dị mma (free SSL certificates) dwara AutoSSL.
- Ị chọrọ ịgwara SSL certificates mgbe ọbụlụ (directly) n'hPanel na **SSL/TLS**.
- Ma ọ bụ, ri dị Let's Encrypt na feature AutoSSL nke Hostinger.

## Dukwa (Support) {#support}

Maka ọrụ ndị ọzọ na integration ahụ na Hostinger, jere:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
