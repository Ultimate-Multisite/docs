---
title: Podstawowe pojęcia
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Podstawowe pojęcia

Dla nowego użytkownika WordPress Multisite i osoby, która dopiero zaczyna korzystać z Ultimate Multisite, na początku może pojawić się wiele nowych słów i zwrotów do przyswojenia. Ich poznanie jest ważnym zadaniem, ponieważ pomoże Ci zrozumieć platformę i sposób jej działania jako całości.

W tym artykule postaramy się zdefiniować i wyjaśnić niektóre kluczowe pojęcia w WordPress. Część z nich jest bardziej istotna dla użytkowników, inne dla programistów, a jeszcze inne dla obu grup.

## WordPress Multisite

WordPress **Multisite** to typ instalacji WordPress, który pozwala tworzyć i zarządzać siecią wielu stron internetowych z poziomu jednego panelu WordPress. Możesz zarządzać wszystkim, w tym liczbą stron, funkcjami, motywami i rolami użytkowników. Możliwe jest zarządzanie setkami, a nawet tysiącami stron.

## Sieć

W terminologii WordPress sieć multisite to miejsce, w którym wiele **podstron** może być zarządzanych z jednego panelu. Chociaż tworzenie sieci multisite różni się w zależności od dostawcy hostingu, efektem końcowym jest zwykle kilka dodatkowych dyrektyw w pliku **wp-config.php**, które informują WordPress, że działa w tym konkretnym trybie.

Istnieje szereg wyraźnych różnic między siecią multisite a samodzielną instalacją WordPress, które pokrótce omówimy.

## Baza danych

Baza danych to uporządkowany, zorganizowany zbiór danych. W terminologii informatycznej baza danych odnosi się do oprogramowania służącego do przechowywania i organizowania danych. Pomyśl o niej jak o szafce na dokumenty, w której przechowujesz dane w różnych sekcjach zwanych tabelami.

WordPress Multisite wykorzystuje jedną bazę danych, a każda podstrona otrzymuje własne tabele z identyfikatorem bloga w prefiksie. Gdy więc zainstalujesz sieć i utworzysz podstronę, powinieneś mieć następujące tabele:

_wp_1_options_ \- tabela opcji dla pierwszej podstrony

_wp_2_options_ \- tabela opcji dla drugiej podstrony

## Dostawca hostingu

Dostawca hostingu to firma, która umożliwia przedsiębiorstwom i osobom prywatnym udostępnianie ich stron internetowych w sieci World Wide Web. Usługi oferowane przez dostawców hostingu różnią się między sobą, ale zazwyczaj obejmują projektowanie stron, przestrzeń dyskową na serwerze oraz łączność z Internetem.

## Domena

Nazwa domeny to adres, którego ludzie używają, aby odwiedzić Twoją stronę. Informuje przeglądarkę, gdzie szukać Twojej witryny. Podobnie jak adres ulicy, domena jest sposobem, w jaki ludzie odwiedzają Twoją stronę w Internecie. To tak jak szyld przed Twoim sklepem. Jeśli chcesz odwiedzić naszą stronę, musisz wpisać nasz adres internetowy w pasku adresu przeglądarki, czyli [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com)_,_ gdzie [**ultimatemultisite.com**](http://ultimatemultisite.com) jest nazwą domeny.

## Subdomena

Subdomena to rodzaj hierarchii strony internetowej pod główną domeną, ale zamiast używać folderów do organizowania treści na stronie, otrzymuje jakby własną witrynę. Prezentowana jest jako [**https://site1.domain.com/**](https://site1.domain.com/), gdzie _site1_ to nazwa subdomeny, a [_domain.com_](http://domain.com) to domena główna.

## Podkatalog

Podkatalog to rodzaj hierarchii strony internetowej pod domeną główną, który wykorzystuje foldery do organizowania treści na stronie. Podkatalog jest tym samym co podfolder i nazwy te mogą być używane zamiennie. Prezentowany jest jako [**https://domain.com/site1**](https://domain.com/site1), gdzie _site1_ to nazwa podkatalogu, a [_domain.com_](http://domain.com) to domena główna.

## Podstrona

Podstrona to strona podrzędna, którą tworzysz w sieci Multisite. Może być **subdomeną** lub **podkatalogiem** w zależności od tego, jak skonfigurowana jest Twoja instalacja WordPress Multisite.

## Super Admin

WordPress Super Admin to rola użytkownika z pełnymi uprawnieniami do zarządzania wszystkimi podstronami w sieci Multisite. Dla użytkowników Multisite jest to **najwyższy poziom dostępu**, jaki możesz przyznać w swojej instalacji WordPress.

## Plugin

Ogólnie rzecz biorąc, plugin to zestaw kodu, który dodaje dodatkową funkcjonalność do Twojej strony WordPress. Może to być coś tak prostego jak zmiana logo logowania lub tak złożonego jak dodanie funkcji e-commerce. _Woocommerce i Contact Form_ to przykłady pluginów.

W WordPress Multisite pluginy mogą być instalowane wyłącznie z panelu administracyjnego sieci przez Super Admina. Administratorzy podstron mogą jedynie aktywować i dezaktywować pluginy w ramach swojej podstrony.

## Motywy

Motyw WordPress to zbiór plików (_grafiki, arkusze stylów i kod_), który określa ogólny wygląd strony. Zapewnia całą stylizację front-endu, taką jak style czcionek, układ strony, kolory itp.

Podobnie jak pluginy, motywy w WordPress Multisite mogą być instalowane wyłącznie przez Super Admina i mogą być aktywowane na poziomie podstrony przez administratorów podstron.

## Szablon strony

**Szablon strony** to wzorcowa strona, która może być używana jako baza podczas tworzenia nowych stron w Twojej sieci.

Oznacza to, że możesz utworzyć bazową stronę, aktywować różne pluginy, ustawić aktywny motyw i dostosować ją w dowolny sposób. Następnie, gdy Twój klient utworzy nowe konto, zamiast otrzymać domyślną stronę WordPress bez żadnej znaczącej zawartości, otrzyma kopię Twojej bazowej strony ze wszystkimi dostosowaniami i treściami już na miejscu.

## Mapowanie domen

**Mapowanie domen** w WordPress to sposób przekierowywania użytkowników do właściwego hosta poprzez adres strony internetowej. W WordPress Multisite podstrony są tworzone przy użyciu podkatalogu lub subdomeny. Mapowanie domen pozwala użytkownikom podstron używać domeny najwyższego poziomu, takiej jak [**joesbikeshop.com**](http://joesbikeshop.com), aby adres ich strony wyglądał bardziej profesjonalnie.

## SSL

SSL to skrót od **Secure Sockets Layer** (warstwa bezpiecznych gniazd). Jest to certyfikat cyfrowy, który uwierzytelnia tożsamość strony internetowej i umożliwia szyfrowane połączenie. Obecnie jest używany jako standardowa technologia do utrzymywania bezpiecznego połączenia internetowego i ochrony wszelkich wrażliwych danych przesyłanych między dwoma systemami, uniemożliwiając przestępcom odczytywanie i modyfikowanie przesyłanych informacji, w tym potencjalnych danych osobowych. Nowoczesne przeglądarki wymagają SSL, co czyni go niezbędnym podczas tworzenia i prowadzenia strony internetowej.

## Media

Media to obrazy, pliki audio, wideo i inne pliki, które tworzą stronę internetową.

Strony sieciowe współdzielą jedną bazę danych w WordPress Multisite, ale utrzymują oddzielne ścieżki w systemie plików dla plików multimedialnych.

Standardowa lokalizacja WordPress (wp-content/uploads) pozostaje bez zmian; jednak jej ścieżka jest modyfikowana, aby odzwierciedlać unikalny identyfikator strony sieciowej. W rezultacie pliki multimedialne dla strony sieciowej pojawiają się jako wp-contents/uploads/site/[id].

## Bezpośrednie odnośniki

Bezpośrednie odnośniki to stałe adresy URL Twoich pojedynczych wpisów na blogu lub stron w obrębie Twojej witryny. Bezpośrednie odnośniki są również nazywane **przyjazne linki**. Domyślnie adresy URL WordPress używają formatu ciągu zapytania, który wygląda mniej więcej tak:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite to plugin WordPress, stworzony dla instalacji WordPress Multisite, który przekształca Twoją instalację WordPress w premium sieć stron – jak [WordPress.com](https://WordPress.com) – umożliwiając klientom tworzenie stron za miesięczne, kwartalne lub roczne opłaty (możesz również tworzyć darmowe plany).

## Formularz zamówienia

Formularz zamówienia to jedno- lub wieloetapowy formularz, który obejmuje tworzenie podstrony, członkostwa i kont użytkowników poprzez rejestrację Ultimate Multisite. Składa się z różnych pól i formularzy płatności, które użytkownik musi wypełnić podczas procesu rejestracji.

## Webhook

Webhook (nazywany również web callback lub HTTP push API) to sposób, w jaki aplikacja może dostarczać innym aplikacjom informacje w czasie rzeczywistym. Webhook dostarcza dane do innych aplikacji w momencie ich wystąpienia, co oznacza, że otrzymujesz dane natychmiast.

**Webhooki Ultimate Multisite** otwierają nieskończone możliwości, pozwalając administratorom sieci na wszelkiego rodzaju szalone, ale użyteczne integracje, szczególnie w połączeniu z usługami takimi jak _Zapier i IFTTT_.

## Zdarzenia

Zdarzenie to akcja, która występuje w wyniku działania użytkownika lub innego źródła, takiego jak kliknięcie myszą. Ultimate Multisite prowadzi rejestr wszystkich zdarzeń i logów, które mają miejsce w całej Twojej sieci. Śledzi różne aktywności zachodzące w Twojej sieci multisite, takie jak zmiany planów.
