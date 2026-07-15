---
title: Integracja WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integracja z WPMU DEV

## Opis {#overview}
WPMU DEV to kompleksowa platforma WordPress oferująca hosting, wtyczki i usługi dla stron WordPress. Ta integracja umożliwia automatyczną synchronizację domen i zarządzanie certyfikatami SSL między Ultimate Multisite a hostingiem WPMU DEV.

## Funkcje {#features}
- Automatyczna synchronizacja domen
- Zarządzanie certyfikatami SSL
- Zwiększona liczba prób weryfikacji certyfikatów SSL

## Wymagania {#requirements}
Integracja automatycznie wykrywa, czy korzystasz z hostingu WPMU DEV i używa wbudowanego API. Jeśli hostujesz na WPMU DEV, nie jest wymagana żadna dodatkowa konfiguracja.

Integracja sprawdza obecność stałej `WPMUDEV_HOSTING_SITE_ID`, która jest automatycznie definiowana podczas hostingu na WPMU DEV.

## Instrukcja konfiguracji {#setup-instructions}

### 1. Sprawdź hosting WPMU DEV {#1-verify-wpmu-dev-hosting}

Jeśli korzystasz z hostingu WPMU DEV, niezbędne stałe powinny być już zdefiniowane. Upewnij się, że:

1. Stała `WPMUDEV_HOSTING_SITE_ID` jest zdefiniowana w Twoim środowisku
2. Masz aktywne członkostwo WPMU DEV z dostępem do API

### 2. Włącz integrację {#2-enable-the-integration}

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Ustawienia
2. Przejdź do zakładki „Mapowanie domen"
3. Przewiń w dół do sekcji „Integracje hostingowe"
4. Włącz integrację z WPMU DEV
5. Kliknij „Zapisz zmiany"

## Jak to działa {#how-it-works}

### Synchronizacja domen {#domain-syncing}

Gdy domena zostaje zmapowana w Ultimate Multisite:

1. Integracja używa API WPMU DEV, aby dodać domenę do Twojego konta hostingowego
2. Automatycznie dodawana jest również wersja domeny z www
3. WPMU DEV zajmuje się konfiguracją domeny i wystawieniem certyfikatu SSL

### Zarządzanie certyfikatami SSL {#ssl-certificate-management}

Integracja jest skonfigurowana tak, aby zwiększyć liczbę prób weryfikacji certyfikatów SSL dla hostingu WPMU DEV, ponieważ wystawienie i instalacja certyfikatów SSL może zająć trochę czasu. Domyślnie podejmowanych jest do 10 prób weryfikacji certyfikatu SSL, w porównaniu ze standardowymi 5 próbami.

## Ważne informacje {#important-notes}

### Usuwanie domen {#domain-removal}

Obecnie API WPMU DEV nie oferuje możliwości usuwania domen. Gdy mapowanie domeny zostanie usunięte w Ultimate Multisite, domena pozostanie na Twoim koncie hostingowym WPMU DEV. W razie potrzeby musisz ją ręcznie usunąć z panelu hostingowego WPMU DEV.

### Uwierzytelnianie API {#api-authentication}

Integracja korzysta z klucza API WPMU DEV, który jest przechowywany w bazie danych WordPress jako opcja `wpmudev_apikey`. Jest on automatycznie ustawiany podczas łączenia strony z WPMU DEV.

## Rozwiązywanie problemów {#troubleshooting}

### Problemy z połączeniem API {#api-connection-issues}
- Sprawdź, czy Twoja strona jest prawidłowo połączona z WPMU DEV
- Upewnij się, że opcja `wpmudev_apikey` jest ustawiona w bazie danych WordPress
- Sprawdź, czy Twoje członkostwo WPMU DEV jest aktywne

### Problemy z certyfikatami SSL {#ssl-certificate-issues}
- Wystawienie certyfikatów SSL przez WPMU DEV może zająć trochę czasu (zwykle 5-15 minut)
- Integracja jest skonfigurowana tak, aby sprawdzać certyfikaty SSL do 10 razy
- Jeśli certyfikaty SSL nadal nie są wystawiane po wielu próbach, skontaktuj się ze wsparciem WPMU DEV

### Domena nie została dodana {#domain-not-added}
- Sprawdź logi Ultimate Multisite pod kątem komunikatów o błędach
- Upewnij się, że domena nie jest już dodana w WPMU DEV
- Sprawdź, czy Twój plan hostingowy WPMU DEV obsługuje liczbę domen, które chcesz dodać
