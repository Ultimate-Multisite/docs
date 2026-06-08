---
title: Eksport i Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksport i Import

Ultimate Multisite 2.9.0 dodaje narzędzie **Eksportu i Importu** dla pojedynczej witryny w sekcji **Narzędzia > Eksport i Import**. Użyj go, gdy chcesz spakować jedną witrynę WordPress w plik ZIP, przywrócić ten plik ZIP lub przenieść witrynę między kompatybilnymi instalacjami Ultimate Multisite i pojedynczej witryny WordPress.

## Wymagane uprawnienia

Musisz zalogować się jako administrator, który ma dostęp do menu **Narzędzia** w panelu administracyjnym witryny, którą eksportujesz lub importujesz. W przypadku sieci multisite, używaj konta administratora sieci, gdy eksportujesz lub importujesz podstrony za pomocą narzędzi Ultimate Multisite na poziomie sieci.

Pobrane pliki ZIP eksportu są udostępniane przez uwierzytelniony punkt końcowy pobierania, dlatego utrzymuj aktywną sesję administratora do momentu zakończenia pobierania i nie udostępniaj publicznie wygenerowanych adresów URL do pobrania.

## Eksportowanie witryny do pliku ZIP

1. W panelu administracyjnym WordPress dla witryny, którą chcesz skopiować, przejdź do **Narzędzia > Eksport i Import**.
2. Otwórz obszar eksportu i wybierz witrynę, którą chcesz spakować.
3. Wybierz opcjonalną zawartość do włączenia, taką jak pliki załączników, pluginów i motywy, gdy takie opcje są dostępne.
4. Rozpocznij eksport i poczekaj, aż proces się zakończy. Duże witryny mogą wymagać czasu na zakończenie pracy w tle, zanim plik ZIP będzie gotowy.
5. Pobierz gotowy plik ZIP ze spisu eksportów.

Przechowuj plik ZIP w bezpiecznym miejscu. Może on zawierać zawartość witryny, ustawienia, pliki multimedialne oraz wybrane zasoby kodu.

## Co zawiera eksport

Plik ZIP eksportu może zawierać:

- Zawartość bazy danych i konfigurację wybranej witryny.
- Pliki multimedialne załączników, jeśli zostały uwzględnione.
- Pluginy i motywy, jeśli zostały wybrane.
- Metadane importu używane przez narzędzie Eksport i Import, aby odtworzyć witrynę na docelowej instalacji.

Dokładny rozmiar pliku ZIP zależy od ilości multimediów, wybranych pluginów i motywów oraz rozmiaru tabel bazy danych witryny.

## Importowanie witryny z pliku ZIP

1. Przejdź do **Narzędzia > Eksport i Import** na docelowej witrynie WordPress.
2. Otwórz obszar importu i załaduj plik ZIP utworzony przez narzędzie Eksport i Import.
3. Wprowadź adres URL zastępczy, jeśli witryna ma używać nowego adresu, lub zostaw pole puste, aby zachować oryginalny adres URL.
4. Wybierz, czy usunąć załadowany plik ZIP po zakończeniu importu.
5. Kliknij **Rozpocznij import**.
6. Monitoruj oczekujący import, aż się zakończy. Używaj opcji **Anuluj import** tylko wtedy, gdy musisz zatrzymać proces przed jego zakończeniem.
7. Przejrzyj zaimportowaną witrynę, zanim zezwolisz na normalny ruch lub dostęp klientów.

W przypadku instalacji WordPress dla pojedynczej witryny, importowanie pliku ZIP zastępuje obecną witrynę zaimportowaną witryną. Nie jest to narzędzie do łączenia. Przed rozpoczęciem wykonaj pełną kopię zapasową docelowej witryny i unikaj uruchamiania wielu importów dla tej samej witryny jednocześnie.

## Ograniczenia i uwagi dotyczące kompatybilności

- Bardzo duże katalogi załączników lub biblioteki multimediów mogą generować duże pliki ZIP. Przed eksportowaniem lub importowaniem dużych witryn upewnij się co do limitów przesyłania plików PHP, limitów wykonania, miejsca na dysku, pamięci i ustawień przekroczenia czasu serwera.
- Bardzo duże biblioteki multimediów mogą wymagać przeniesienia w okresie niskiego ruchu, podczas konserwacji.
- Docelowa instalacja WordPress powinna działać z kompatybilnymi wersjami WordPress, PHP, Ultimate Multisite, pluginów i motywów.
- Importowanie dla pojedynczej witryny zastępuje docelową witrynę. Nie jest to narzędzie do łączenia.
- Przenoszenie z multisite na pojedynczą witrynę i z pojedynczej witryny na multisite jest obsługiwane tylko wtedy, gdy środowisko docelowe może uruchomić pluginy, motywy, adresy URL i wymagane komponenty Ultimate Multisite eksportowanej witryny.
- Utrzymuj plik ZIP prywatny. Może on zawierać zawartość bazy danych, załączone pliki i szczegóły konfiguracji z eksportowanej witryny.

W przypadku starszych przepływów pracy eksportu na poziomie sieci, zobacz [Eksport witryny](/user-guide/administration/site-export).
