---
title: Czym jest WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Czym jest WordPress Multisite?

WordPress posiada wbudowaną funkcję o nazwie „Multisite", która sięga swoimi korzeniami 2010 roku, kiedy ukazał się WordPress 3.0. Od tego czasu przeszła wiele zmian – dodawano nowe funkcje i wzmacniano bezpieczeństwo.

Najprościej rzecz ujmując, WordPress Multisite można przedstawić tak: Uniwersytet korzysta z jednej instalacji WordPressa, ale każdy wydział prowadzi własną stronę.

## 

## Czym dokładnie jest WordPress Multisite?

Multisite to funkcja WordPressa, która pozwala wielu stronom korzystać z jednej instalacji WordPressa. Po aktywacji multisite oryginalna strona WordPress zostaje przekształcona tak, by obsługiwać to, co zazwyczaj nazywamy **siecią stron**.

Taka sieć współdzieli system plików (co oznacza, że **pluginy i motywy również są współdzielone**), bazę danych, pliki rdzenia WordPressa, wp-config.php itd.

Oznacza to, że aktualizacje WordPressa, motywów i pluginów trzeba wykonać tylko raz dla wszystkich stron w sieci, ponieważ korzystają one z tych samych plików.

To jedna z głównych zalet multisite – możesz zwiększać liczbę zarządzanych stron, a ilość zadań potrzebnych do ich utrzymania pozostaje taka sama.

## 

## Subdomena czy podkatalog?

WordPress Multisite może działać w dwóch trybach – musisz wybrać jeden z nich podczas przekształcania zwykłej instalacji WordPressa w multisite:

**Subdomena:** np.: [site.domain.com](http://site.domain.com)

…lub

**Podkatalog:** np.: [yourdomain.com/site](http://yourdomain.com/site)

Każdy tryb ma swoje zalety i wady, które warto rozważyć przed podjęciem decyzji.

Jedno jest ważne: kiedy już zdecydujesz, zmiana sieci z podkatalogu na subdomenę lub odwrotnie jest naprawdę trudna – szczególnie jeśli masz już utworzonych kilka stron.

Zanim podejmiesz decyzję, weź pod uwagę kilka kwestii:

**Tryb podkatalogu** jest najprostszy pod względem konfiguracji i utrzymania. Wszystkie strony są po prostu ścieżkami dodanymi do głównej domeny (np. [yourdomain.com/subsite](http://yourdomain.com/subsite)). W rezultacie potrzebujesz tylko **jednego certyfikatu SSL** dla głównej domeny, który obejmie całą sieć.

Jednocześnie ze względu na strukturę URL Google i większość innych wyszukiwarek potraktuje wszystkie podstrony w sieci opartej na podkatalogach jako jedną dużą witrynę. W efekcie treści dodawane przez użytkowników końcowych mogą wpływać na pozycjonowanie SEO Twojej strony głównej. Skala tego wpływu jest dyskusyjna i można nawet argumentować, że takie rozwiązanie bywa korzystne dla SEO.

**Tryb subdomeny** jest nieco bardziej skomplikowany w konfiguracji, ale jego struktura URL (np. [subsite.yournetwork.com](http://subsite.yournetwork.com)) jest ogólnie postrzegana jako „bardziej profesjonalna".

Jednym z głównych wyzwań przy konfiguracji trybu subdomen jest pokrycie SSL (HTTPS) dla całej sieci. Przeglądarki traktują subdomeny jako odrębne jednostki. W rezultacie potrzebujesz osobnego certyfikatu SSL dla każdej subdomeny w sieci lub specjalnego certyfikatu o nazwie **Wildcard SSL**. W ostatnich latach dostawcy hostingu i panele zarządzania znacznie usprawnili obsługę SSL – niektórzy oferują certyfikaty wildcard jednym kliknięciem, co zmniejsza różnicę w złożoności konfiguracji między oboma trybami.

W przeciwieństwie do trybu podkatalogów, podstrony w sieci opartej na subdomenach są traktowane przez wyszukiwarki jako osobne witryny. Oznacza to, że treści obecne na jednej podstronie w ogóle nie wpływają na pozycjonowanie SEO innych podstron.

## Super Admin

Standardowe instalacje WordPressa pozwalają dodawać nieograniczoną liczbę użytkowników i przypisywać im różne role z różnymi uprawnieniami.

W WordPress Multisite pojawia się nowy typ użytkownika: **super admin** – oraz nowy panel administracyjny: **panel administracyjny sieci**.

Jak sama nazwa wskazuje, super admin ma „supermoce" nad siecią – może zarządzać wszystkimi podstronami, pluginami, motywami, wszystkim!

Po przekształceniu instalacji WordPress w multisite, oryginalny administrator zostaje automatycznie awansowany na super admina.

Pluginy i motywy mogą być instalowane lub usuwane wyłącznie z panelu administracyjnego sieci przez super adminów. Administratorzy podstron mogą następnie aktywować lub dezaktywować te pluginy lub motywy, chyba że super admin aktywuje plugin na poziomie sieci – wówczas jest on aktywny dla wszystkich podstron przez cały czas.

_Uwaga: jak widzisz, zaproszenie kogoś do sieci i nadanie mu statusu super admina daje temu użytkownikowi pełną kontrolę nad siecią. Inni super adminowie mogą nawet odebrać Ci status super admina, skutecznie blokując dostęp do Twojego własnego panelu administracyjnego sieci. Aby klienci Ultimate Multisite mogli szczegółowo kontrolować, co mogą robić dodatkowi super adminowie, oferujemy dodatek o nazwie Support Agents. Ten dodatek pozwala utworzyć jeszcze inny typ użytkownika – agenta – z tylko takimi uprawnieniami, jakie są mu potrzebne do wykonywania zadań w sieci._

## Co jest współdzielone między podstronami, a co nie

Jak wspomnieliśmy wcześniej, jedną z głównych zalet WordPress Multisite jest to, że wszystkie podstrony współdzielą te same konfiguracje, pliki rdzenia, motywy, pluginy, pliki WordPressa itd.

Są jednak elementy, które są ładnie rozdzielone dla każdej podstrony.

\- Na przykład każda podstrona ma własny folder z przesłanymi plikami. W rezultacie pliki przesłane przez użytkowników jednej podstrony nie są dostępne na innej.

\- Każda podstrona ma własny panel administracyjny i może aktywować lub dezaktywować pluginy lub motywy, chyba że zostały aktywowane na poziomie sieci przez super admina.

\- Większość tabel bazy danych jest tworzona dla każdej podstrony, co oznacza, że wpisy, komentarze, strony, ustawienia i inne elementy są przypisane do konkretnej podstrony.

## Zarządzanie użytkownikami w WordPress Multisite

Delikatnym tematem w WordPress Multisite jest zarządzanie użytkownikami. Tabela użytkowników WordPress jest jedną z nielicznych współdzielonych między wszystkimi podstronami.

Takie rozwiązanie może powodować pewne problemy w zależności od tego, co planujesz zbudować w swojej sieci. Poniższy przykład ilustruje najpoważniejszy z nich.

Wyobraź sobie następujący scenariusz:

Tworzysz sieć WordPress Multisite i zaczynasz oferować podstrony za miesięczną opłatą osobom, które chcą mieć sklep internetowy.

Zdobywasz pierwszego płacącego klienta – Jana. Tworzysz dla niego stronę w swojej sieci, instalujesz wszystkie niezbędne pluginy, a następnie tworzysz konto użytkownika, żeby mógł zarządzać swoim sklepem.

Potem pojawia się druga klientka – Alicja. Robisz to samo dla niej i teraz ona również ma sklep w Twojej sieci.

Jan i Alicja są oboje Twoimi klientami, ale nie znają się nawzajem. Co więcej, jeśli jeden z nich odwiedzi sklep drugiego, nie ma możliwości, żeby się dowiedzieć, że ten sklep jest hostowany w tej samej sieci stron.

Pewnego dnia Jan potrzebuje kupić nową parę butów i znajduje idealne w sklepie Alicji. Kiedy próbuje sfinalizować zakup, otrzymuje komunikat o błędzie „adres email jest już używany", co jest dziwne, bo Jan jest w 100% pewny, że odwiedza stronę Alicji po raz pierwszy.

Stało się tak, ponieważ konto Jana jest współdzielone w całej sieci – gdy próbuje utworzyć konto, żeby zrealizować zakup w sklepie Alicji, WordPress wykrywa, że użytkownik z tym samym adresem email już istnieje i wyświetla błąd.

_Uwaga: zdajemy sobie sprawę, jak problematyczne to może być w zależności od Twojego przypadku użycia, dlatego Ultimate Multisite ma opcję, która omija standardowe sprawdzanie istniejących użytkowników, pozwalając tworzyć wiele kont z tym samym adresem email. Każde konto jest przypisane do podstrony, więc ryzyko kolizji jest minimalne. W powyższym przykładzie Jan nie otrzymałby komunikatu o błędzie i mógłby bez problemu kupić te buty. Ta opcja nazywa się Włącz wiele kont i można ją aktywować w Ultimate Multisite → Ustawienia → Logowanie i rejestracja._

Mimo że tabela użytkowników jest współdzielona, użytkownicy mogą być dodawani i usuwani z podstron przez administratorów podstron lub super admina, a nawet mogą mieć różne role na różnych podstronach.

## Kwestie wydajności

WordPress Multisite jest naprawdę potężny pod względem liczby stron, które może obsługiwać. Świadczy o tym fakt, że [WordPress.com](https://WordPress.com), Edublogs i Campuspress to usługi oparte na multisite, z których każda hostuje tysiące stron.

Chociaż teoretycznie nie ma maksymalnej liczby stron, które możesz hostować na jednej instalacji WordPress Multisite, w praktyce liczba stron, które możesz zadowalająco obsługiwać, może się znacznie różnić w zależności od wielu czynników: jak dynamiczne są strony, jakie pluginy są dostępne dla podstron itd.

Ogólna zasada jest taka: im prostsza sieć, tym lepiej. Preferowanie stron, gdzie treść nie jest zbyt dynamiczna (co czyni je świetnymi kandydatami do agresywnych strategii cache'owania) i utrzymywanie jak najmniejszej liczby pluginów (im mniej aktywnych pluginów, tym lepiej) może drastycznie zwiększyć liczbę podstron, które możesz hostować.

Najlepsze jest to, że ponieważ to wciąż WordPress, te same narzędzia, które już znasz i lubisz do poprawy wydajności, będą działać również w sieci multisite.

Głównym wąskim gardłem dla multisite jest baza danych, ale jeśli wszystko inne jest poprawnie skonfigurowane, może minąć kilka tysięcy stron, zanim będziesz musiał się tym martwić. Nawet wtedy istnieją rozwiązania, które można stopniowo wdrażać (jak na przykład sharding bazy danych).
