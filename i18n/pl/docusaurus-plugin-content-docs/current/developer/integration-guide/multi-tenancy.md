---
title: Integracja wielodzierżawowości
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integracja wielodzierżawności

Ultimate Multisite: Multi-Tenancy 1.2.0 zmienia kilka punktów styku integracji dla suwerennych dzierżawców, weryfikacji migracji i automatyzacji cyklu życia dzierżawcy.

## Przepływ inicjalizacji dzierżawcy {#tenant-bootstrap-flow}

Integracje, które tworzą lub modyfikują dzierżawców, powinny przestrzegać tej kolejności:

1. Ustal rekord rejestru dzierżawcy i model izolacji.
2. Utwórz lub zweryfikuj mechanizm zapisu bazy danych dzierżawcy.
3. Zainicjalizuj schemat dzierżawcy.
4. Przydziel użytkowników dzierżawcy.
5. Zarejestruj routing dzierżawcy i ścieżki systemu plików.
6. Uruchom weryfikację migracji przed udostępnieniem dzierżawcy.

Nie zakładaj, że suwerenny dzierżawca może ponownie użyć połączenia z bazą danych sieci. Używaj rejestru dzierżawców i abstrakcji mechanizmu zapisu dostarczanych przez dodatek.

## Hooki SSO i REST {#sso-and-rest-hooks}

Bezstanowe automatyczne logowanie dzierżawcy używa krótkotrwałych tokenów z deklaracją celu, ochroną przed ponownym użyciem JTI, limitem wygaśnięcia i przypięciem pochodzenia. Integracje, które dodają przyciski logowania lub linki zdalnego zarządzania, powinny generować wizyty dzierżawcy przez obsługiwany przepływ SSO zamiast bezpośrednio konstruować adresy URL logowania dzierżawcy.

Zdarzenia audytu API po stronie sieci i codzienne podsumowania są dostępne dla bram suwerennych dzierżawców. Używaj tych logów podczas debugowania systemów zewnętrznych, które wywołują endpointy cyklu życia dzierżawcy.

## Adresy URL działań klienta suwerennego {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 kieruje działania klientów suwerennych dzierżawców z powrotem do głównej witryny dla przepływów Account, checkout, rozliczeń, faktur, witryny, przełączania szablonów i mapowania domen. Integracje, które renderują linki zarządzania po stronie dzierżawcy, powinny kierować te działania do panelu klienta głównej witryny i uwzględniać zweryfikowany cel powrotu, gdy użytkownik powinien mieć możliwość powrotu do dzierżawcy po ukończeniu działania.

Użyj podstawowego opakowania SSO dla międzydomenowych linków zarządzania:

```php
$url = wu_with_sso($main_site_customer_url);
```

Wygenerowany adres URL pozostaje filtrowalny przez `wu_sso_url`, który otrzymuje adres URL SSO, bieżącego użytkownika, identyfikator docelowej witryny i kontekst przekierowania. Dodatki mogą użyć tego filtra, aby dodać kontekst specyficzny dla dostawcy lub zastąpić adres URL brokera, zachowując walidację tokenów Ultimate Multisite.

Nie duplikuj stanu członkostwa, faktur, adresu rozliczeniowego, szablonu ani zarządzania domeną wewnątrz suwerennego dzierżawcy. Traktuj dashboard dzierżawcy jako program uruchamiający, a panel klienta głównej witryny jako system referencyjny dla zarządzanych działań.

## Weryfikacja migracji {#migration-verification}

Po tym, jak migracja lub integracja cyklu życia zmieni dane dzierżawcy, uruchom bramki weryfikacyjne:

- `wp tenant verify-no-legacy --site=<site-id>` potwierdza, że dzierżawca nie zależy już od starszych ścieżek po stronie sieci.
- `wp tenant verify-sovereign-push --site=<site-id>` potwierdza, że suwerenne zadania push mogą być przetwarzane i opróżniane.

Integracje powinny traktować nieudaną weryfikację jako blokadę wdrożenia i unikać oznaczania dzierżawcy jako aktywnego, dopóki błąd nie zostanie rozwiązany.

## Usuwanie dzierżawcy {#tenant-deletion}

Przepływy usuwania powinny wywoływać ścieżkę demontażu dodatku, aby poświadczenia bazy danych dzierżawcy zostały wyczyszczone. Integracje zewnętrzne mogą usuwać zasoby dostawcy po pomyślnym zakończeniu demontażu, ale nie powinny usuwać baz danych ani folderów hosta, gdy weryfikacja lub asynchroniczne zadania push nadal działają.

## Przestarzały router bazy danych {#deprecated-database-router}

Starszy `Database_Router` został zastąpiony atrapą wycofania. Nowe integracje powinny ustalać dzierżawców przez aktualne API routera witryny i rejestru dzierżawców, zamiast polegać na starej klasie routera.
