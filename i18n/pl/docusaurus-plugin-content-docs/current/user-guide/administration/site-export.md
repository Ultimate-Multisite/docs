---
title: Eksport strony
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Eksport witryny

Strona administracyjna **Eksport witryny** (Site Export) pozwala administratorom sieci pakować jedną witrynę lub całą sieć w plik ZIP do pobrania, co jest przydatne do migracji, tworzenia kopii zapasowych lub przekazywania projektu.

## Eksportowanie jednej witryny {#exporting-one-site}

Przejdź do **Ultimate Multisite > Site Export** i wybierz **Generate new Site Export** (Wygeneruj nowy eksport witryny). Wybierz podwitrynę, którą chcesz wyeksportować, a następnie zdecyduj, czy archiwum ma zawierać pliki z sekcji „Media” (uploads), plugins i themes.

Po zakończeniu eksportu pobierz plik ZIP z listy **Existing Exports** (Istniejące eksporty). Pliki ZIP eksportu zawierają teraz samoobsługowy plik `index.php` oraz `readme.txt`, dzięki czemu archiwum można przesłać na świeżo zainstalowany host i uruchomić bez wcześniejszej instalacji oddzielnego pluginu do importu.

## Eksportowanie całej sieci {#exporting-the-whole-network}

Użyj opcji **Network Export** (Eksport sieci) na stronie Site Export, gdy potrzebujesz jednego archiwum zawierającego wszystkie podwitryny w sieci. Jest to przydatne przed migracjami hostingu, ćwiczeniami z odzyskiwania po awarii lub odbudową środowiska staging, gdzie każda podstrona musi być przeniesiona razem.

Ponieważ eksport sieci może być znacznie większy niż eksport pojedynczej witryny, wykonaj go w okresie niskiego ruchu i upewnij się, że docelowe miejsce przechowywania ma wystarczająco miejsca wolnego na pliki z sekcji „Media”, plugins, themes i generowane pliki ZIP.

### Pakiety importu sieci (Network Import Bundles) {#network-import-bundles}

Od wersji Ultimate Multisite 2.12.0, Site Exporter może generować **pakiety importu sieci** (network import bundles) — specjalistyczne archiwa zaprojektowane do płynnego przywracania wielu witryn w ramach sieci. Pakiet importu sieci zawiera wszystkie niezbędne pliki i metadane do przywrócenia wielu witryn na nowo zainstalowanej sieci.

#### Generowanie pakietu importu sieci {#generating-a-network-import-bundle}

1. Przejdź do **Ultimate Multisite > Site Export**
2. Kliknij **Generate new Network Export** (Wygeneruj nowy eksport sieci)
3. Wybierz **Network Import Bundle** jako typ eksportu
4. Wybierz, czy ma zawierać pliki z sekcji „Media”, plugins i themes
5. Kliknij **Generate** (Wygeneruj)
6. Pobierz pakiet ZIP z listy **Existing Exports** (Istniejące eksporty)

#### Przywracanie z pakietu importu sieci {#restoring-from-a-network-import-bundle}

Aby przywrócić witryny z pakietu importu sieci:

1. Zainstaluj Ultimate Multisite na docelowym hoście
2. Uzupełnij kreator ustawiania multisite
3. Przejdź do **Ultimate Multisite > Site Export** na nowej sieci
4. Kliknij **Import Network Bundle** (Importuj pakiet sieci)
5. Prześlij plik ZIP pakietu importu sieci
6. Postępuj zgodnie z instrukcjami importu wyświetlanymi na ekranie
7. Proces importu przywróci wszystkie witryny, ich treści i konfiguracje

Pakiety importu sieci zachowują:
- Treść witryny (posty, strony, custom post types)
- Ustawienia i opcje witryny
- Role użytkowników i uprawnienia
- Plugins i themes (jeśli są zawarte w pakiecie)
- Pliki z sekcji „Media” (jeśli są zawarte w pakiecie)
- Niestandardowe tabele i dane w bazie danych

## Instalowanie samoobsługowego pliku ZIP eksportu {#installing-a-self-booting-export-zip}

Aby przywrócić samoobsługowy plik ZIP na świeżo zainstalowanym hoście:

1. Prześlij zawartość wyeksportowanego pliku ZIP do głównego katalogu witryny (web root).
2. Otwórz przesłany plik `index.php` w przeglądarce.
3. Postępuj zgodnie z instrukcjami instalatora wyświetlanymi na ekranie z pakietu eksportu.
4. Zapoznaj się z plikiem `readme.txt` zawartym w pakiecie, aby sprawdzić uwagi dotyczące eksportu, zanim usuniesz pliki tymczasowe.

Szczegółowe informacje dotyczące instalacji i importu dla danego addonu znajdziesz w dokumentacji addonu [Site Exporter addon documentation](/addons/site-exporter).

Dla narzędzia do pojedynczej witryny dodanego w Ultimate Multisite 2.9.0, zobacz [Export & Import](/user-guide/administration/export-import).
