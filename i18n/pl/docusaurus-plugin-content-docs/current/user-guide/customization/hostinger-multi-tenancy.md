---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-tenancy Hostinger {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 wprowadza funkcjonalność multi-tenancy Hostinger, dzięki której hostowane domeny mogą uczestniczyć w procesie tworzenia suwerennych tenantów obok istniejącej integracji mapowania domen Hostinger.

Użyj tej funkcji, gdy zarządzasz domenami tenantów i izolowaną infrastrukturą tenantów za pomocą hPanel Hostinger.

## Uwagi dotyczące konfiguracji {#setup-notes}

1. Skonfiguruj podstawową integrację Hostinger w sekcji **Ultimate Multisite > Settings > Host Integrations**.
2. Upewnij się, że token API Hostinger może zarządzać docelową domeną lub poddomeną.
3. Włącz dodatek Multi-Tenancy.
4. Skonfiguruj strategię izolacji tenantów przed publikacją danego tenant'a.
5. Uruchom przepływ weryfikacji migracji przed skierowaniem ruchu produkcyjnego do tenant'a.

Funkcjonalność Hostinger wykorzystuje współdzielone połączenie Hostinger dla operacji po stronie hosta. DNS nadal musi wskazywać na właściwe konto Hostinger, a limity kont hPanel nadal obowiązują.

## Zmiany specyficzne dla funkcjonalności {#capability-specific-changes}

- Można tworzyć suwerenne tenancy z operacjami domen uwzględniającymi kontekst hosta.
- Wartości hostów baz danych na tej samej maszynie są normalizowane przed weryfikacją uprawnień.
- Tenanci zarządzane przez Hostinger powinny używać wartości hosta bazy danych widocznej w hPanel, chyba że środowisko WordPress wymaga lokalnego nadpisania.
- Wizyty SSO opierają się na rozwiązaniu domeny tenant'a do hostowanego przez Hostinger tenant'a.

## Rozwiązywanie problemów z tenantami Hostinger {#troubleshooting-hostinger-tenants}

- Jeśli instalacja tenant'a się nie powiedzie, sprawdź, czy domena jest już przypisana do konta Hostinger.
- Jeśli weryfikacja bazy danych zawiedzie, porównaj nazwy użytkowników baz danych, nazw baz danych i powiązania hosta z hPanel.
- Jeśli **Visit (SSO)** zawodzi, potwierdź, że DNS i SSL są aktywne dla domeny tenant'a.
- Jeśli usunięcie (teardown) zostawia zasoby hosta bezpowrotnie, usuń wszelkie pozostałe bazy danych, użytkowników lub foldery z hPanel po potwierdzeniu kopii zapasowych.
