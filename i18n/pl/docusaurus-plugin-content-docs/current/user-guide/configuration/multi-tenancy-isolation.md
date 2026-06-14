---
title: Izolacja wielodostępna
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolacja wielodostępna (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 wspiera izolację baz danych i systemu plików na poziomie poddomen dla suwerennych najemców. Dzięki temu dane najemcy pozostają oddzielne, zachowując jednocześnie zarządzanie siecią, fakturowanie i administrację.

## Strategia izolacji

Używaj izolacji suwerennej dla klientów, którzy wymagają silniejszego oddzielenia danych, dedywalnego miejsca na systemie plików lub osobnej granicy hosta.

Każdy suwerenny najemca powinien posiadać:

- Dedykowaną bazę danych najemcy lub strategię prefiksu bazy danych zatwierdzoną dla hosta.
- Dedykowany korzeń systemu plików najemcy.
- Wpis w rejestrze najemców, który mapuje stronę na jej bazę danych, główną ścieżkę, nazwę hosta i model izolacji.
- Wynik weryfikacji migracji przed uznaniem najemcy za aktywny (live).

## Powiązanie z hostem bazy danych (Database host binding)

W wersji 1.2.0 zmieniono domyślne zachowanie powiązania hosta na tej samej maszynie dla instalacji suwerennych. Wartości takie jak `localhost` są normalizowane tak, aby Bedrock, FrankenPHP i instalacje WordPress w kontenerach mogły udzielać i weryfikować uprawnienia względem stringu hosta MySQL, który faktycznie widzi.

Przy konfiguracji najemcy suwerennego:

1. Ustaw host bazy danych na wartość wymaganą przez runtime najemcy.
2. Używaj `localhost` dla lokalnych instalacji socketowych, gdy host oczekuje połączeń lokalnych.
3. Używaj `127.0.0.1` lub nazwy hosta usługi tylko wtedy, gdy serwer bazy danych udziela uprawnień temu hostowi.
4. Uruchom weryfikację migracji po zmianie powiązania hosta.

Jeśli raporty weryfikacji wskazują na niepowodzenia przy udzielaniu uprawnień, porównaj uprawnienia użytkownika w bazie danych najemcy z skonfigurowanym powiązaniem hosta. Użytkownik nadany dla `user@localhost` jest inny niż `user@127.0.0.1` lub `user@%`.

## Korzeń systemu plików (Filesystem root)

Korzeń najemcy powinien być stabilny po restartach i wdrożeniach. Unikaj tymczasowych ścieżek montowania. W instalacjach typu Bedrock upewnij się, że korzeń najemcy wskazuje katalog główny WordPressa oczekiwany przez bootstrap najemcy, a nie tylko katalog projektu.

## Kolejność provisioningu (przygotowywania)

Dla nowych najemców suwerennych używaj tej kolejności:

1. Utwórz wpis w rejestrze najemców.
2. Utwórz bazę danych i użytkownika bazy danych dla najemcy.
3. Przygotuj schemat najemcy (bootstrap).
4. Przydziel użytkowników najemcy.
5. Skonfiguruj ścieżki systemu plików najemcy.
6. Uruchom weryfikację migracji.
7. Przełącz routing lub DNS po pomyślnej weryfikacji.

Ta kolejność zapobiega tym, że częściowo izolowane najemcy otrzymają ruch zanim baza danych, użytkownicy i system plików będą gotowe.

## Przepływy zarządzania klientami suwerennymi

Ultimate Multisite v2.13.0 utrzymuje działania zarządzania klientami na głównym site, gdy tryb suwerenny jest włączony. Najemca może nadal działać jako izolowana instalacja WordPressa, ale czynności widoczne dla klienta, które zależą od rozliczeń sieciowych, członkostwa lub danych wspólnego konta, powinny przekierowywać klienta z powrotem na główny site zamiast próbować zakończyć działanie w czasie działania najemcy.

Przepływ głównego site dotyczy:

- Zmian planów i finalizacji zamówień (checkout).
- Przeglądu konta i działań dotyczących profilu klienta.
- Aktualizacji adresów rozliczeniowych i ekranów zarządzania płatnościami.
- Widoków faktur i historii płatności.
- Działań zarządzania stroną, takich jak dodawanie lub usuwanie stron.
- Przełączania szablonów (template switching).
- Mapowania domen oraz zmian domeny głównej.

Kiedy klient rozpoczyna jedną z tych akcji w ramach niezależnego (sovereign) tytulara, Ultimate Multisite tworzy odpowiadurą adres URL dla głównej witryny i zachowuje źródłowy tytularz jako cel powrotu, gdy jest to bezpieczne. Pozwala to klientom sfinalizować zarządzaną akcję względem rekordów sieciowych, a następnie wrócić do kontekstu tytularza bez duplikowania stanu rozliczeń czy członkostwa w bazie danych tytulara niezależnego.

Dla operatorów praktyczna zasada brzmi: utrzymuj strony związane z rozliczeniami, kontem, finalizacją zamówienia (checkout), fakturą, szablonami i zarządzaniem domeną na głównej stronie dla sieci tytularnych. Pulpity tytularne mogą linkować do tych stron, ale główna strona pozostaje źródłem prawdy dla danej akcji.
