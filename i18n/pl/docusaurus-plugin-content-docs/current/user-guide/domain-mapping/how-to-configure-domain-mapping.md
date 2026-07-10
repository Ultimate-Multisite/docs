---
title: Jak skonfigurować mapowanie domen
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Jak skonfigurować mapowanie domen (v2) {#how-to-configure-domain-mapping-v2}

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Jedną z najpotężniejszych funkcji sieci premium jest możliwość zaoferowania naszym klientom opcji podłączenia domeny najwyższego poziomu do ich witryn. W końcu co wygląda bardziej profesjonalnie: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) czy [_**joesbikeshop.com**_](http://joesbikeshop.com)? Właśnie dlatego Ultimate Multisite oferuje tę funkcję wbudowaną, bez potrzeby używania pluginów firm trzecich.

## Czym jest mapowanie domen? {#whats-domain-mapping}

Jak sama nazwa wskazuje, mapowanie domen to możliwość oferowana przez Ultimate Multisite, która pozwala przyjąć żądanie dotyczące niestandardowej domeny i zmapować je do odpowiedniej witryny w sieci, do której ta konkretna domena jest przypisana.

### Jak skonfigurować mapowanie domen w swojej sieci Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Mapowanie domen wymaga z Twojej strony pewnej konfiguracji, aby działało. Na szczęście Ultimate Multisite automatyzuje za Ciebie trudną część pracy, dzięki czemu możesz łatwo spełnić wymagania.

Podczas instalacji Ultimate Multisite kreator automatycznie skopiuje i zainstaluje **sunrise.php** w wyznaczonym folderze. **Kreator nie pozwoli Ci przejść dalej, dopóki ten krok nie zostanie ukończony**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Oznacza to, że gdy kreator instalacji Ultimate Multisite zakończy konfigurowanie Twojej sieci, możesz od razu rozpocząć mapowanie niestandardowej domeny.

Pamiętaj, że mapowanie domen w Ultimate Multisite nie jest obowiązkowe. Masz możliwość użycia natywnej funkcji mapowania domen WordPress Multisite albo dowolnego innego rozwiązania do mapowania domen.

Jeśli musisz wyłączyć mapowanie domen Ultimate Multisite, aby zrobić miejsce dla innych rozwiązań mapowania domen, możesz wyłączyć tę funkcję w **Ultimate Multisite > Ustawienia > Mapowanie domen**.

![Strona ustawień Mapowania domen pokazująca przekierowanie administratora, komunikat mapowania i opcje DNS](/img/config/domain-mapping-settings.png)

Tuż pod tą opcją możesz również zobaczyć opcję **Wymuś przekierowanie administratora**. Ta opcja pozwala kontrolować, czy Twoi klienci będą mogli uzyskać dostęp do swojego panelu administratora zarówno w swojej niestandardowej domenie, jak i subdomenie, czy tylko w jednej z nich.

Jeśli wybierzesz **Wymuś przekierowanie do zmapowanej domeny** , Twoi klienci będą mogli uzyskać dostęp do swojego panelu administratora tylko w swoich niestandardowych domenach.

Opcja **Wymuś przekierowanie do** **domeny sieciowej** zrobi dokładnie odwrotnie — Twoi klienci będą mogli uzyskać dostęp do swoich paneli tylko w swojej subdomenie, nawet jeśli będą próbować zalogować się w swoich niestandardowych domenach.

A opcja **Zezwól na dostęp do panelu administratora zarówno przez zmapowaną domenę, jak i domenę sieciową** pozwala im uzyskać dostęp do paneli administratora zarówno w subdomenie, jak i niestandardowej domenie.

![Rozwinięta lista Przekierowanie administratora pokazująca trzy opcje przekierowania](/img/config/domain-mapping-redirect-options.png)

Istnieją dwa sposoby zmapowania niestandardowej domeny. Pierwszy polega na mapowaniu nazwy domeny z panelu administratora sieci jako super administrator, a drugi przez panel administratora podwitryny na stronie konta.

Zanim jednak zaczniesz mapować niestandardową domenę do jednej z podwitryn w swojej sieci, musisz upewnić się, że **ustawienia DNS** nazwy domeny są poprawnie skonfigurowane.

###

### Upewnienie się, że ustawienia DNS domeny są poprawnie skonfigurowane {#making-sure-the-domain-dns-settings-are-properly-configured}

Aby mapowanie działało, musisz upewnić się, że domena, którą planujesz zmapować, wskazuje adres IP Twojej sieci. Pamiętaj, że potrzebujesz adresu IP sieci — adresu IP domeny, na której zainstalowany jest Ultimate Multisite — a nie adresu IP niestandardowej domeny, którą chcesz zmapować. Aby wyszukać adres IP konkretnej domeny, sugerujemy skorzystanie na przykład z [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Aby poprawnie zmapować domenę, musisz dodać **A RECORD** w swojej konfiguracji **DNS**, wskazujący ten **adres IP**. Zarządzanie DNS bardzo różni się u poszczególnych rejestratorów domen, ale w internecie jest wiele poradników na ten temat, jeśli wyszukasz „ _Creating A Record on XXXX_ ”, gdzie XXXX to Twój rejestrator domen (np.: „ _Creating A Record on_ _GoDaddy_ ”).

Jeśli masz problem z uruchomieniem tego, **skontaktuj się z pomocą techniczną swojego rejestratora domen**, a będą mogli pomóc Ci w tej części.

Jeśli planujesz pozwolić swoim klientom mapować własne domeny, będą musieli wykonać tę część pracy samodzielnie. Skieruj ich do systemu pomocy technicznej ich rejestratora, jeśli nie będą w stanie utworzyć A Record.

### Mapowanie niestandardowej nazwy domeny jako Super Admin {#mapping-custom-domain-name-as-super-admin}

Gdy jesteś zalogowany jako super administrator w swojej sieci, możesz łatwo dodawać niestandardowe nazwy domen i zarządzać nimi, przechodząc do **Ultimate Multisite > Domeny**.

![Strona listy Domen w Ultimate Multisite](/img/admin/domains-list.png)

Na tej stronie możesz kliknąć przycisk **Dodaj domenę** u góry, co otworzy okno modalne, w którym możesz ustawić i wypełnić **niestandardową nazwę domeny** , **podwitrynę**, do której chcesz zastosować niestandardową nazwę domeny, oraz zdecydować, czy chcesz ustawić ją jako **główną nazwę domeny**, czy nie (pamiętaj, że możesz zmapować **wiele nazw domen do jednej podwitryny**).

![Okno modalne Dodaj domenę z nazwą domeny, wyborem witryny i przełącznikiem domeny głównej](/img/admin/domain-add-modal.png)

Po wprowadzeniu wszystkich informacji możesz kliknąć przycisk **Dodaj istniejącą domenę** na dole.

Rozpocznie to proces weryfikowania i pobierania informacji DNS niestandardowej domeny. Na dole strony zobaczysz również dziennik, w którym możesz śledzić przebieg procesu. Ukończenie tego procesu może potrwać kilka minut.

Ultimate Multisite v2.13.0 automatycznie tworzy również wewnętrzny rekord domeny, gdy nowa witryna jest tworzona na hoście, który powinien być traktowany jako domena przypisana do konkretnej witryny. Jeśli host jest główną domeną sieci albo jedną ze współdzielonych domen bazowych formularza realizacji zakupu skonfigurowanych w polu **Site URL**, automatyczny rekord mapowanej domeny jest pomijany, aby ta współdzielona domena bazowa pozostała dostępna dla każdej witryny, która jej używa.

Gdy klient zarejestruje nową domenę przez Domain Seller v1.3.0 lub nowszy, Ultimate Multisite domyślnie automatycznie mapuje zarejestrowaną domenę na witrynę klienta w sieci. Administratorzy nie muszą już dodawać osobnego rekordu mapowanej domeny po udanej rejestracji, chyba że chcą dostosować opcje takie jak flaga domeny głównej, stan aktywacji lub obsługa SSL.

**Etap** lub status powinien zmienić się z **Sprawdzanie DNS** na **Gotowe**, jeśli wszystko jest prawidłowo skonfigurowane.

<!-- Zrzut ekranu niedostępny: wiersz domeny pokazujący etap Sprawdzanie DNS na liście domen -->

<!-- Zrzut ekranu niedostępny: wiersz domeny pokazujący etap Gotowe z zielonym wskaźnikiem statusu -->

Jeśli klikniesz nazwę domeny, zobaczysz w niej kilka opcji. Przyjrzyjmy się im krótko:

![Strona szczegółów domeny z przełącznikami etapu, witryny, aktywności, domeny głównej i SSL](/img/admin/domain-edit.png)

**Etap:** To etap, na którym znajduje się domena. Gdy po raz pierwszy dodasz domenę, prawdopodobnie będzie ona na etapie **Sprawdzanie DNS**. Proces sprawdzi wpisy DNS i potwierdzi, że są poprawne. Następnie domena zostanie przeniesiona do etapu **Sprawdzanie SSL**. Ultimate Multisite sprawdzi, czy domena ma SSL, i zaklasyfikuje Twoją domenę jako **Gotowe** lub **Gotowe (bez SSL)**.

**Witryna:** Subdomena powiązana z tą domeną. Mapowana domena będzie wyświetlać treść tej konkretnej witryny.

**Aktywna:** Możesz włączyć lub wyłączyć tę opcję, aby aktywować albo dezaktywować domenę.

**Czy to domena główna?:** Twoi klienci mogą mieć więcej niż jedną mapowaną domenę dla każdej witryny. Użyj tej opcji, aby wybrać, czy jest to domena główna dla konkretnej witryny.

**Czy jest bezpieczna?:** Mimo że Ultimate Multisite sprawdza, czy domena ma certyfikat SSL przed jej włączeniem, możesz ręcznie wybrać, czy domena ma być ładowana z certyfikatem SSL, czy bez niego. Pamiętaj, że jeśli witryna nie ma certyfikatu SSL, a spróbujesz wymusić jej ładowanie z SSL, może to spowodować błędy.

### Mapowanie niestandardowej nazwy domeny jako użytkownik podwitryny {#mapping-custom-domain-name-as-subsite-user}

Administratorzy podwitryn mogą także mapować niestandardowe nazwy domen z panelu administracyjnego swojej podwitryny.

Najpierw upewnij się, że włączysz tę opcję w ustawieniach **mapowania domen**. Zobacz zrzut ekranu poniżej.

<!-- Zrzut ekranu niedostępny: ustawienia mapowania domen pozwalające użytkownikom podwitryn mapować domeny za pomocą przełącznika Customer DNS Management -->

Możesz także ustawić lub skonfigurować tę opcję na poziomie **planu** albo w opcjach produktu w **Ultimate Multisite > Produkty**.

![Sekcja domen niestandardowych na stronie edycji produktu](/img/config/product-custom-domains.png)

Gdy którakolwiek z tych opcji jest włączona, a użytkownik podwitryny ma pozwolenie na mapowanie niestandardowych nazw domen, powinien zobaczyć metaboks o nazwie **Domeny** na stronie **Account**.

<!-- Zrzut ekranu niedostępny: metaboks Domeny na stronie Account podwitryny z przyciskiem Dodaj domenę -->

Użytkownik może kliknąć przycisk **Dodaj domenę**, co otworzy okno modalne z instrukcjami.

<!-- Zrzut ekranu niedostępny: modal Dodaj domenę pokazujący instrukcje dotyczące rekordu DNS A dla użytkowników podwitryn -->

Następnie użytkownik może kliknąć **Następny krok** i przejść do dodawania niestandardowej nazwy domeny. Może także wybrać, czy będzie to domena główna.

<!-- Zrzut ekranu niedostępny: formularz Dodaj domenę z polem niestandardowej nazwy domeny i przełącznikiem domeny głównej -->

<!-- Zrzut ekranu niedostępny: krok potwierdzenia Dodaj domenę, który uruchamia weryfikację DNS -->

Kliknięcie **Dodaj domenę** rozpocznie proces weryfikacji i pobierania informacji DNS niestandardowej domeny.

### O synchronizacji domen {#about-domain-syncing}

Synchronizacja domen to proces, w którym Ultimate Multisite dodaje niestandardową nazwę domeny do Twojego konta hostingowego jako domenę dodatkową **aby mapowanie domen działało**.

Synchronizacja domen odbywa się automatycznie, jeśli Twój dostawca hostingu ma integrację z funkcją mapowania domen Ultimate Multisite. Obecnie tymi dostawcami hostingu są _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ i _Cpanel._

Gdy integracja z dostawcą hostingu jest aktywna, Ultimate Multisite może również dodać do kolejki zadanie utworzenia DNS lub subdomeny po stronie dostawcy dla nowo utworzonych witryn. Jeśli żadna integracja nie nasłuchuje tego zadania, zadanie w tle jest pomijane, aby uniknąć wpisów w kolejce, które niczego nie wykonują. Sprawdzanie DNS i SSL dla mapowanych domen nadal odbywa się przez standardowy proces etapów domeny.

Musisz aktywować tę integrację w ustawieniach Ultimate Multisite na karcie **Integracja**.

![Karta Integracje w ustawieniach Ultimate Multisite pokazująca dostawców hostingu](/img/config/integrations-tab.png)

<!-- Zrzut ekranu niedostępny: linki Konfiguracja dostawców hostingu na karcie ustawień Integracje -->

_Pamiętaj, że jeśli Twój dostawca hostingu nie jest jednym z dostawców wymienionych powyżej, **musisz ręcznie zsynchronizować lub dodać nazwę domeny** do swojego konta hostingowego._
