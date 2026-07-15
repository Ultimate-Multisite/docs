---
title: Nkwado WPMU DEV Integration
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integracja z WPMU DEV

## Przegląd {#overview}
WPMU DEV to kompleksowa platforma WordPress, która oferuje hosting, wtyczki i usługi dla stron WordPress. Ta integracja umożliwia automatyczne synchronizowanie domen oraz zarządzanie certyfikatami SSL między Ultimate Multisite a hostingiem WPMU DEV.

## Funkcje {#features}
- Automatyczne synchronizowanie domen
- Zarządzanie certyfikatami SSL
- Rozszerzone próby weryfikacji certyfikatu SSL

## Wymagania {#requirements}
Integracja automatycznie wykrywa, czy hostujesz na WPMU DEV i używa wbudowanego API. Jeśli hostujesz na WPMU DEV, nie potrzebujesz dodatkowej konfiguracji.

Integracja sprawdza obecność stałej `WPMUDEV_HOSTING_SITE_ID`, która jest automatycznie definiowana podczas hostowania na WPMU DEV.

## Instrukcje Konfiguracji {#setup-instructions}

### 1. Zweryfikuj Hosting WPMU DEV {#1-verify-wpmu-dev-hosting}

Jeśli hostujesz na WPMU DEV, niezbędne stałe powinny już być zdefiniowane. Sprawdź, czy:

1. Stała `WPMUDEV_HOSTING_SITE_ID` jest zdefiniowana w Twoim środowisku
2. Masz aktywne członkostwo WPMU DEV z dostępem do API

### 2. Włącz Integrację {#2-enable-the-integration}

1. W panelu administracyjnym WordPress, przejdź do Ultimate Multisite > Ustawienia (Settings)
2. Przejdź do zakładki "Domain Mapping"
3. Przewiń w dół do sekcji "Host Integrations"
4. Włącz integrację WPMU DEV
5. Kliknij "Save Changes"

## Jak to Działa {#how-it-works}

### Synchronizacja Domeny {#domain-syncing}

Kiedy domena jest mapowana w Ultimate Multisite:

1. Integracja używa API WPMU DEV, aby dodać domenę do Twojego konta hostingowego
2. Automatycznie dodaje również wersję www domeny
3. WPMU DEV zajmuje się konfiguracją domeny i wydawaniem certyfikatów SSL

### Zarządzanie Certyfikatami SSL {#ssl-certificate-management}

Integration na-configure mba chọr ịkwado nkwado verification SSL certificate nke ukwuu maka hosting WPMU DEV, karị m ga-agba ihe dị n'ụlọ ọrụ SSL certificates ma nwere ike ịdị akụkọ. By default, ọ ga-chọta n'ikpeazụ 10 lilo maka verification SSL certificate, karị m ga-agba nke ahụ n'ikpeazụ 5 dị kawaida.

## Nkwado Ewu {#important-notes}

### Gbu Domain {#domain-removal}

Ọ bụ na WPMU DEV API a dịghị ọrụ ịgbu domain. Mgbe ị gbu domain mapping n'Ultimate Multisite, domain ahụ ga-enwe n'aka hosting WPMU DEV nke gị. Ọ bụ ngwaa ị chọta ya ọ bụrụ na ewu maka ịgbu ya n'dashboard hosting WPMU DEV.

### Authentication API {#api-authentication}

Integration a na-agba key API WPMU DEV ahụ nke dị n'WordPress database dị ka option `wpmudev_apikey`. Ọ ga-enwe nke ọma mgbe ị na-agbanye site gị na WPMU DEV.

## Nchekwa Nkwado (Troubleshooting) {#troubleshooting}

### Ihe Na-eme Connection API {#api-connection-issues}
- Jiji na site gị na-eme connection n'WPMU DEV nke ọma
- Jiji na option `wpmudev_apikey` dị n'WordPress database gị
- Jiji na membership WPMU DEV gị na-enwe

### Ihe Na-eme SSL Certificate {#ssl-certificate-issues}
- WPMU DEV ga-agba ssl certificates mgbe a na-akụkọ (n'ụbọchị 5-15)
- Integration a na-configure ịchekwa n'ikpeazụ 10 lilo maka ssl certificates
- Mgbe SSL certificates dịghị enwe anọ n'ikpeazụ ọtụtụ lilo, jiji na support WPMU DEV

### Domain Ndị Na-eme {#domain-not-added}
- Jiji logs Ultimate Multisite maka ihe ndị dị nkwado
- Jiji na domain ahụ dịghị enwe anọ n'WPMU DEV
- Jiji na hosting plan WPMU DEV gị na-agba onye domain ị chọta ịgba ya
