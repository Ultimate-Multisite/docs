---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Jak używać fragmentów kodu Ultimate Multisite z naszego repozytorium GitHub

W repozytorium GitHub dostępne są fragmenty kodu, o które często proszą użytkownicy Ultimate Multisite. Pozwalają one dodać drobne funkcjonalności, takie jak skrypt Google Analytics na stronach rejestracji czy ukrycie meta boxu w panelu administracyjnym.

W tym artykule pokażemy, jak korzystać z tych fragmentów kodu, a dokładniej — gdzie je umieścić.

Fragmenty kodu znajdziesz pod poniższym linkiem.

https://github.com/next-press/wp-ultimo-snippets/

Kod możesz dodać na dwa sposoby:

  1. W pliku functions.php Twojego motywu.

  2. W katalogu Must-Use Plugins (mu-plugins)

# Jak dodać fragment kodu do pliku functions.php motywu

  1. Zaloguj się do panelu administracyjnego WordPress Network i przejdź do Wygląd > Edytor motywu (zobacz zrzut ekranu poniżej).

  2. Na stronie „Edytuj motywy" upewnij się, że w polu rozwijanym w prawym górnym rogu ekranu masz wybrany aktywny motyw (#3 na zrzucie ekranu poniżej).

  3. Kliknij plik functions.php w sekcji „Pliki motywu", aby go załadować. Przewiń na dół i wklej fragment kodu Ultimate Multisite pobrany z repozytorium GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Jak utworzyć Must-Use Plugins (mu-plugins)

WordPress ma funkcję pozwalającą na ładowanie niestandardowych rozszerzeń — tzw. „Must-Use Plugins", w skrócie „mu-plugins".

Te specjalne wtyczki mu-plugins są ładowane przed wszystkimi innymi zwykłymi wtyczkami i nie można ich dezaktywować. W sieci multisite kod z tych wtyczek będzie ładowany na wszystkich stronach w Twojej instalacji.

1\. Użyj FTP lub SSH, aby uzyskać dostęp do systemu plików Twojej instalacji WordPress.

2\. W katalogu wp-content Twojej instalacji WordPress utwórz nowy katalog o nazwie: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Na swoim komputerze utwórz nowy plik PHP o nazwie wu-snippet.php, używając Notatnika lub dowolnego edytora kodu.

4\. Wklej do pliku fragment kodu Ultimate Multisite pobrany z repozytorium GitHub i zapisz go. Możesz też dodać na początku pliku poniższy kod, aby oznaczyć swoją wtyczkę mu-plugin.
