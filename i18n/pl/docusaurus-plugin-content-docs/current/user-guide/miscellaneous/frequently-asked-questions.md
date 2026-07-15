---
title: Często zadawane pytania
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Najczęściej zadawane pytania

Oto lista **najczęściej zadawanych pytań**, które często pojawiają się podczas zgłoszeń do pomocy technicznej.

  * **Czym jest Ultimate Multisite?**

Ultimate Multisite to plugin do WordPressa, stworzony z myślą o instalacjach WordPress multisite, który przekształca Twoją instalację WordPressa w profesjonalną sieć stron – podobną do [WordPress.com](https://WordPress.com) – umożliwiając klientom tworzenie stron w ramach miesięcznych, kwartalnych lub rocznych opłat (możesz także tworzyć darmowe plany).

  * **Czy Ultimate Multisite będzie działać bez Multisite?**

Nie. Ultimate Multisite wymaga WordPress multisite w wariancie podkatalogu lub subdomeny.

  * **Jakie są wymagania dla Ultimate Multisite?**

Ultimate Multisite wymaga:

**Wersja WordPress**: v5.3+ (Zalecana: najnowsza stabilna wersja)  
**Wersja PHP**: 7.4.x (Wsparcie dla > 8.0 wkrótce)  
**Wersja MySQL**: v5+ (Zalecana: wersja 5.6, jeśli u Twojego dostawcy hostingu nie jest dostępna wersja 8.0)

_Multisite (subdomena lub podkatalog) musi być również aktywowany._ [Jak zainstalować WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Czy Ultimate Multisite będzie działać z Multisite z podkatalogami?**

Tak. Ultimate Multisite obsługuje zarówno instalacje z podkatalogami, jak i instalacje z subdomenami.

  * **Czy Ultimate Multisite będzie działać z Multisite z subdomenami?**

Tak. Ultimate Multisite obsługuje zarówno instalacje z podkatalogami, jak i instalacje z subdomenami.

  * **Czy mogę używać Ultimate Multisite do ograniczania, które pluginy i motywy mogą używać użytkownicy?**

Tak. Dzięki Ultimate Multisite możesz wybrać, które pluginy i motywy są dostępne dla każdego planu w Twojej sieci.

  * **Czy mogę używać Ultimate Multisite do ograniczania liczby wpisów, które użytkownik może utworzyć na swojej stronie?**

Tak. Dzięki Ultimate Multisite możesz ustalić limity wpisów dla **każdego dostępnego typu wpisu** w Twojej sieci. Możesz także ograniczyć liczbę użytkowników, których administrator może zaprosić, **ilość miejsca na dysku** i wiele więcej.

  * **Czy Ultimate Multisite obsługuje szablony stron?**

Tak. Dzięki Ultimate Multisite możesz tworzyć dowolną liczbę szablonów stron. Szablony stron to nie motywy – są to zwykłe strony w Twojej sieci. Możesz aktywować pluginy, motywy i dostosować szablon strony w dowolny sposób. Jeśli użytkownik wybierze dany szablon, jego strona zostanie utworzona jako kopia tego szablonu, ze wszystkimi wprowadzonymi dostosowaniami.

Możesz także przypisać konkretny szablon do planu. Dzięki temu każdy użytkownik, który zarejestruje się w danym planie, będzie miał swoją stronę utworzoną jako duplikat tego szablonu strony.

  * **Czy Ultimate Multisite integruje się z WooCommerce?**

Tak!

Jeśli chcesz, aby użytkownicy Twojej sieci mieli dostęp do WooCommerce i mogli zakładać sklepy – jest to możliwe dzięki Ultimate Multisite. Możesz nawet ograniczyć liczbę produktów, które Twoi klienci będą mogli utworzyć w każdym poziomie planu.

Jeśli chodzi o płatności za subskrypcje w Ultimate Multisite, możesz użyć dodatku [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/), aby umożliwić klientom Ultimate Multisite płatności przez bramki płatności WooCommerce na Twojej głównej stronie. W ten sposób możesz korzystać z ogromnej biblioteki bramek płatności stworzonych dla WooCommerce i używać ich do rozliczeń z klientami Ultimate Multisite.

  * **Czy istnieje sposób na migrację subskrypcji z WPMUDEV Pro Sites?**

Tak, Ultimate Multisite oferuje teraz [przydatne narzędzie do migracji](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) Twojej sieci Pro Sites.

  * **Dlaczego zakładka „Dozwolone pluginy" jest pusta na stronie edycji planu?**

Ultimate Multisite pozwala zezwalać lub blokować dostęp tylko do pluginów, które nie są aktywowane na poziomie sieci. Gdy plugin jest aktywowany na poziomie sieci, ze swojej natury będzie domyślnie ładowany na każdej stronie w Twojej sieci.

Jeśli nie widzisz żadnych pluginów na zakładce „Dozwolone pluginy", sprawdź, czy żądany plugin jest aktywowany na poziomie sieci, czy nie.

  * **Czy mogę użyć własnego projektu tabeli cenowej?**

Tak. Od wersji 1.4.0 Ultimate Multisite obsługuje nadpisywanie szablonów.

  * **Czy Ultimate Multisite działa z WP Engine?**

Tak. Ultimate Multisite zawsze był obsługiwany przez WP Engine, ale uruchomienie mapowania domen wymagało dodatkowych ręcznych kroków ze strony administratora (dodanie domeny do panelu WP Engine). **Od wersji 1.6.0 nie jest to już konieczne.** Ultimate Multisite integruje się bezpośrednio z API WP Engine i domeny są automatycznie dodawane do panelu po zmapowaniu.

  * **Którego dostawcę hostingu polecacie?**

Ultimate Multisite powinien działać z każdym dostawcą hostingu. Jedyna różnica polega na tym, że niektórzy dostawcy, tacy jak Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane i [Runcloud.io](http://Runcloud.io), mają ściślejszą integrację z funkcjami mapowania domen, więc działają od razu po instalacji. W przypadku innych hostingów może być konieczne ręczne skonfigurowanie mapowania domen.
