---
title: Jak skonfigurować mapowanie domen
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Jak skonfigurować mapowanie domen (wersja 2)

_**WAŻNA INFORMACJA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Jedną z najpotężniejszych funkcji sieci premium jest możliwość oferowania klientom podpięcia własnej domeny najwyższego poziomu do ich stron. W końcu co wygląda bardziej profesjonalnie: [_**sklep-rowerowy-janka.twoja-siec.com**_](http://joesbikeshop.yournetwork.com) czy [_**sklep-rowerowy-janka.com**_](http://joesbikeshop.com)? Właśnie dlatego Ultimate Multisite ma tę funkcję wbudowaną — bez potrzeby korzystania z wtyczek innych producentów.

## Czym jest mapowanie domen?

Jak sama nazwa wskazuje, mapowanie domen to funkcja Ultimate Multisite pozwalająca przyjąć żądanie dla niestandardowej domeny i przekierować je do odpowiedniej strony w sieci, do której ta domena jest przypisana.

### Jak skonfigurować mapowanie domen w sieci Ultimate Multisite

Mapowanie domen wymaga pewnej konfiguracji z Twojej strony. Na szczęście Ultimate Multisite automatyzuje najtrudniejszą pracę, dzięki czemu łatwo spełnisz wszystkie wymagania.

Podczas instalacji Ultimate Multisite kreator automatycznie skopiuje i zainstaluje plik **sunrise.php** do wyznaczonego folderu. **Kreator nie pozwoli Ci przejść dalej, dopóki ten krok nie zostanie ukończony**.

![Kreator instalacji Ultimate Multisite z krokiem sunrise.php](/img/config/settings-domain-mapping.png)

Oznacza to, że gdy kreator instalacji Ultimate Multisite zakończy konfigurację Twojej sieci, możesz od razu zacząć mapować własne domeny.

Pamiętaj, że mapowanie domen w Ultimate Multisite nie jest obowiązkowe. Masz możliwość korzystania z natywnej funkcji mapowania domen WordPress Multisite lub dowolnego innego rozwiązania do mapowania domen.

Jeśli potrzebujesz wyłączyć mapowanie domen Ultimate Multisite, aby użyć innych rozwiązań, możesz to zrobić w **Ultimate Multisite > Settings > Domain Mapping**.

![Ustawienia mapowania domen z przełącznikiem włączania](/img/config/settings-domain-mapping.png)

Tuż pod tą opcją znajdziesz również opcję **Force Admin Redirect**. Pozwala ona kontrolować, czy Twoi klienci będą mogli uzyskać dostęp do swojego panelu administracyjnego zarówno przez własną domenę, jak i subdomenę, czy tylko przez jedną z nich.

Jeśli wybierzesz **Force redirect to mapped domain**, Twoi klienci będą mogli uzyskać dostęp do swojego panelu administracyjnego tylko przez własne domeny.

Opcja **Force redirect to network domain** działa dokładnie odwrotnie — Twoi klienci będą mogli uzyskać dostęp do swoich paneli administracyjnych tylko przez subdomenę, nawet jeśli próbują się zalogować przez własną domenę.

Natomiast opcja **Allow access to the admin by both mapped domain domain and network domain** pozwala im na dostęp do paneli administracyjnych zarówno przez subdomenę, jak i własną domenę.

![Opcje Force Admin Redirect dla mapowania domen](/img/config/settings-domain-mapping.png)

Istnieją dwa sposoby mapowania własnej domeny. Pierwszy to mapowanie nazwy domeny z panelu administracyjnego sieci jako super admin, a drugi to mapowanie przez panel administracyjny podstrony na stronie konta.

Zanim jednak zaczniesz mapować własną domenę do jednej z podstron w Twojej sieci, musisz upewnić się, że **ustawienia DNS** nazwy domeny są prawidłowo skonfigurowane.

### 

### Upewnienie się, że ustawienia DNS domeny są prawidłowo skonfigurowane

Aby mapowanie zadziałało, musisz upewnić się, że domena, którą planujesz zmapować, wskazuje na adres IP Twojej sieci. Zwróć uwagę, że potrzebujesz adresu IP sieci — czyli adresu IP domeny, na której zainstalowany jest Ultimate Multisite — a nie adresu IP niestandardowej domeny, którą chcesz zmapować. Do wyszukania adresu IP konkretnej domeny polecamy na przykład [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Aby prawidłowo zmapować domenę, musisz dodać **rekord A** w konfiguracji **DNS** wskazujący na ten **adres IP**. Zarządzanie DNS znacznie się różni między poszczególnymi rejestratorami domen, ale w internecie znajdziesz wiele poradników na ten temat, wyszukując „_Tworzenie rekordu A w XXXX_", gdzie XXXX to Twój rejestrator domen (np. „_Tworzenie rekordu A w GoDaddy_").

Jeśli masz problemy z uruchomieniem tej funkcji, **skontaktuj się z pomocą techniczną swojego rejestratora domen** — pomogą Ci z tą częścią.

Jeśli planujesz pozwolić swoim klientom na mapowanie własnych domen, będą musieli wykonać tę część pracy samodzielnie. Jeśli nie będą w stanie utworzyć rekordu A, skieruj ich do systemu pomocy ich rejestratora.

### Mapowanie własnej nazwy domeny jako Super Admin

Gdy jesteś zalogowany jako super admin w swojej sieci, możesz łatwo dodawać i zarządzać własnymi nazwami domen, przechodząc do **Ultimate Multisite > Domains**.

![Strona z listą domen w Ultimate Multisite](/img/admin/domains-list.png)

Na tej stronie możesz kliknąć przycisk **Add Domain** na górze, co wyświetli okno modalne, w którym możesz ustawić i wypełnić **własną nazwę domeny**, **podstronę**, do której chcesz przypisać własną nazwę domeny, oraz zdecydować, czy chcesz ustawić ją jako **domenę główną**, czy nie (pamiętaj, że możesz zmapować **wiele nazw domen do jednej podstrony**).

![Okno modalne dodawania domeny z polami nazwy domeny i strony](/img/admin/domains-list.png)

Po wypełnieniu wszystkich informacji możesz kliknąć przycisk **Add Existing Domain** na dole.

To rozpocznie proces weryfikacji i pobierania informacji DNS niestandardowej domeny. Na dole strony zobaczysz również dziennik, dzięki któremu możesz śledzić przebieg procesu. Ten proces może potrwać kilka minut.

**Stage** (czyli status) powinien zmienić się z **Checking DNS** na **Ready**, jeśli wszystko jest prawidłowo skonfigurowane.

![Zmiana etapu domeny z Checking DNS na Ready](/img/admin/domains-list.png)

![Domena ze statusem Ready na liście domen](/img/admin/domains-list.png)

Jeśli klikniesz na nazwę domeny, zobaczysz kilka opcji. Przyjrzyjmy się im szybko:

![Strona szczegółów domeny z opcjami stage, site, active i SSL](/img/admin/domains-list.png)

**Stage:** To etap, na którym znajduje się domena. Gdy po raz pierwszy dodasz domenę, prawdopodobnie będzie w etapie **Checking DNS**. Proces sprawdzi wpisy DNS i potwierdzi, że są prawidłowe. Następnie domena przejdzie do etapu **Checking SSL**. Ultimate Multisite sprawdzi, czy domena ma SSL, czy nie, i sklasyfikuje Twoją domenę jako **Ready** lub **Ready (without SSL)**.

**Site:** Subdomena powiązana z tą domeną. Zmapowana domena będzie wyświetlać zawartość tej konkretnej strony.

**Active:** Możesz włączyć lub wyłączyć tę opcję, aby aktywować lub dezaktywować domenę.

**Is Primary Domain?:** Twoi klienci mogą mieć więcej niż jedną zmapowaną domenę dla każdej strony. Użyj tej opcji, aby wybrać, czy to jest domena główna dla danej strony.

**Is Secure?:** Mimo że Ultimate Multisite sprawdza, czy domena ma certyfikat SSL przed jej włączeniem, możesz ręcznie wybrać, czy domena ma być ładowana z certyfikatem SSL, czy bez. Pamiętaj, że jeśli strona nie ma certyfikatu SSL, a spróbujesz wymusić jej ładowanie z SSL, może to powodować błędy.

### Mapowanie własnej nazwy domeny jako użytkownik podstrony

Administratorzy podstron mogą również mapować własne nazwy domen ze swojego panelu administracyjnego podstrony.

Najpierw musisz upewnić się, że włączysz tę opcję w ustawieniach **Domain mapping**. Zobacz zrzut ekranu poniżej.

![Ustawienia mapowania domen pozwalające użytkownikom podstron mapować domeny](/img/config/settings-domain-mapping.png)

Możesz również ustawić lub skonfigurować tę opcję na poziomie **planu** lub w opcjach produktu w **Ultimate Multisite > Products**.

![Opcja własnych domen produktu w ustawieniach produktu](/img/config/settings-domain-mapping.png)

Gdy którakolwiek z tych opcji jest włączona i użytkownik podstrony ma pozwolenie na mapowanie własnych nazw domen, powinien zobaczyć metabox pod stroną **Account** o nazwie **Domains**.

![Metabox Domains na stronie konta podstrony](/img/admin/domains-list.png)

Użytkownik może kliknąć przycisk **Add Domain**, co wyświetli okno modalne z instrukcjami.

![Okno modalne dodawania domeny z instrukcjami DNS dla użytkowników podstron](/img/admin/domains-list.png)

Użytkownik może następnie kliknąć **Next Step** i przejść do dodania własnej nazwy domeny. Może również wybrać, czy będzie to domena główna, czy nie.

![Pole dodawania własnej nazwy domeny z opcją domeny głównej](/img/admin/domains-list.png)

![Kliknij Add Domain, aby rozpocząć weryfikację DNS](/img/admin/domains-list.png)Kliknięcie **Add Domain** rozpocznie proces weryfikacji i pobierania informacji DNS niestandardowej domeny.

### O synchronizacji domen

Synchronizacja domen to proces, w którym Ultimate Multisite dodaje własną nazwę domeny do Twojego konta hostingowego jako domenę dodatkową, **aby mapowanie domen działało**.

Synchronizacja domen odbywa się automatycznie, jeśli Twój dostawca hostingu ma integrację z funkcją mapowania domen Ultimate Multisite. Obecnie są to dostawcy: _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ i _Cpanel._

Musisz aktywować tę integrację w ustawieniach Ultimate Multisite w zakładce **Integration**.

![Zakładka Integration w ustawieniach Ultimate Multisite](/img/config/settings-domain-mapping.png)

![Ustawienia integracji z dostawcą hostingu dla synchronizacji domen](/img/config/settings-domain-mapping.png)

_Pamiętaj, że jeśli Twój dostawca hostingu nie jest jednym z wymienionych powyżej, **będziesz musiał ręcznie zsynchronizować lub dodać nazwę domeny** do swojego konta hostingowego._
