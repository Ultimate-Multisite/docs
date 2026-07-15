---
title: WP Engine integracija
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integracja z WP Engine

## Przegląd {#overview}
WP Engine to premium platform hostingu WordPress zarządzanego, która zapewnia zoptymalizowane wydajność, bezpieczeństwo i skalowalność dla stron WordPress. Ta integracja umożliwia automatyczne synchronizowanie domen między Ultimate Multisite a WP Engine.

## Funkcje {#features}
- Automatyczne synchronizowanie domen
- Wsparcie dla poddomen w instalacjach multisite
- Bezproblemowa integracja z istniejącymi systemami WP Engine

## Wymagania {#requirements}
Integracja automatycznie wykrywa, czy hostujesz się na WP Engine, i używa wbudowanego API WP Engine. Nie jest wymagana dodatkowa konfiguracja, jeśli plugin WP Engine jest aktywny i poprawnie skonfigurowany.

Jednak jeśli potrzebujesz ręcznie skonfigurować integrację, możesz zdefiniować jedną z tych stałych w pliku `wp-config.php`:

```php
define('WPE_APIKEY', 'twoja_api_key'); // Preferowana metoda
// LUB
define('WPE_API', 'twoja_api_key'); // Alternatywna metoda
```

## Instrukcje konfiguracji {#setup-instructions}

### 1. Weryfikacja wtyczki WP Engine {#1-verify-wp-engine-plugin}

Jeśli hostujesz się na WP Engine, wtyczka WP Engine powinna już być zainstalowana i aktywowana. Upewnij się, że:

1. Wtyczka WP Engine jest aktywna
2. Istnieje plik `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. Włączenie integracji {#2-enable-the-integration}

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Ustawienia (Settings)
2. Przejdź do zakładki "Domain Mapping"
3. Przewiń w dół do sekcji "Host Integrations"
4. Włącz integrację WP Engine
5. Kliknij "Save Changes"

## Jak to działa {#how-it-works}

### Synchronizacja domen {#domain-syncing}

Kiedy domena jest mapowana w Ultimate Multisite:

1. Integracja używa API WP Engine, aby dodać domenę do Twojej instalacji WP Engine
2. WP Engine zajmuje się konfiguracją domeny i wydawaniem certyfikatów SSL
3. Gdy usuniesz mapowanie domeny, integracja usunie domenę z WP Engine

### Wsparcie dla poddomen {#subdomain-support}

Subdomén multisite įdiegimo atveju:

1. Integracija pridėja kiekvieną subdomenį prie WP Engine, kai kurio naujas svetainis sukuriamas.
2. WP Engine tvarko subdominio konfigūraciją.
3. Kai svetainis yra ištrintas, integracija pašalina subdomenį nuo WP Engine.

## Svarbiaji pranešimai {#important-notes}

### Wildcard domenai {#wildcard-domains}

Subdomėnių multisite įdiegimo atveju rekomenduojame susisiekti su WP Engine pagalba ir pateikti prašymą apie wildcard domeno konfigūraciją. Tai leidžia visiems subdomenui veikti automatiškai, ne reikėdami jokių vienodai pridėti.

### SSL sertifikatai {#ssl-certificates}

WP Engine automatizuotai tvarko SSL sertifikatų išdavimą ir atnaujinimą visoms domenams, kurios pridėtos per šią integraciją. Jokių papildomų konfigūracijos nenaudojama.

## Problemos atšalinimas {#troubleshooting}

### API ryšio problemos {#api-connection-issues}
- Patikrinkite, ar WP Engine plugin veikia ir tinkamai konfigūruotas.
- Jei jūsų mano API klaidą manuliai nurodėte, patikrinkite, ar ji yra teisinga.
- Susisiekitės su WP Engine pagalba, jei turite problemų su API.

### Domenas nepridėtas {#domain-not-added}
- Patikrinkite Ultimate Multisite logus (logs) už kokių nors klaidos pranešimų.
- Patikrinkite, ar domenas jau nėra pridėtas prie WP Engine.
- Užtikrinkite, kad jūsų WP Engine planas palaiko pridėtam domenų skaičių.

### Subdominio problemas {#subdomain-issues}
- Jei subdomeniai ne veikia, susisiekitės su WP Engine pagalba ir pateikite prašymą apie wildcard domeno konfigūraciją.
- Patikrinkite, ar jūsų DNS nustatymai teisingai konfigūruoti pagrindinei domenui ir subdomenams.
