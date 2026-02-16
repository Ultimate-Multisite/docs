---
title: Fragmenty kodu
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Fragmenty kodu dla wersji v2

Fragmenty kodu w **WordPress** służą do wykonywania określonych działań, które w przeciwnym razie wymagałyby osobnej, mniejszej wtyczki. Takie fragmenty kodu umieszcza się w jednym z plików rdzenia WordPressa lub motywu (zazwyczaj w pliku functions.php Twojego motywu) lub można ich używać jako wtyczki MU.

W tym artykule pokażemy trzy fragmenty kodu, których można używać z **Ultimate Multisite v2**:

  * [**Zmiana pozycji elementu menu Konto**](#changing-the-position-of-the-account-menu-item)

  * [**Jak sprawdzić, czy użytkownik jest w danym planie i/lub ma aktywną subskrypcję**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Rozwiązywanie problemów CORS z ikonami fontowymi w mapowanych domenach**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Zmiana pozycji elementu menu Konto

Aby zmienić pozycję elementu menu Konto w kokpicie Twojego klienta, wystarczy dodać poniższy fragment kodu do pliku functions.php aktywnego motywu Twojej głównej witryny. Możesz też umieścić ten fragment w jednej ze swoich wtyczek mu-plugins lub własnych wtyczek.

add_filter('wu_my_account_menu_position', function() { return 10; // Dostosuj tę wartość, aby umieścić menu w wybranej pozycji.

## Jak sprawdzić, czy użytkownik jest w danym planie i/lub ma aktywną subskrypcję

Jako administrator sieci możesz potrzebować tworzyć własne funkcje, które będą wykonywać podstawowe działania lub udostępniać usługę/funkcję wybranej grupie subskrybentów lub użytkowników końcowych, w zależności od statusu ich subskrypcji i planu, który subskrybują.

Te natywne funkcje Ultimate Multisite Ci w tym pomogą.

Aby sprawdzić, czy użytkownik jest członkiem danego planu, możesz użyć funkcji:

wu_has_plan($user_id, $plan_id)

Aby sprawdzić, czy subskrypcja jest aktywna, możesz użyć funkcji:

wu_is_active_subscriber($user_id)

Poniżej znajduje się przykładowy fragment kodu, który sprawdza, czy bieżący użytkownik jest w określonym planie (_Plan o ID 50_) oraz czy subskrypcja użytkownika jest aktywna.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // UŻYTKOWNIK JEST CZŁONKIEM PLANU I JEGO SUBSKRYPCJA JEST AKTYWNA, WYKONAJ DZIAŁANIA} else { // UŻYTKOWNIK NIE JEST CZŁONKIEM PLANU -- LUB -- JEGO SUBSKRYPCJA NIE JEST AKTYWNA, WYKONAJ INNE DZIAŁANIA} // end if;

Pamiętaj, że _**wu_has_plan**_ wymaga "ID Planu", aby działać poprawnie.

Aby uzyskać ID planu, przejdź do **Ultimate Multisite > Produkty**. ID każdego produktu będzie wyświetlone po prawej stronie tabeli.

Pamiętaj, że użytkownicy mogą subskrybować tylko **Plan**, nie Pakiet ani Usługę, ponieważ są one jedynie dodatkami do **Planu**.

![Lista produktów pokazująca ID planów](/img/admin/products-list.png)

## Rozwiązywanie problemów CORS z ikonami fontowymi w mapowanych domenach
## Rozwiązywanie problemów CORS z ikonami fontowymi w mapowanych domenach

Po mapowaniu domeny do podwitryny możesz zauważyć, że witryna ma problemy z ładowaniem niestandardowych fontów. Jest to spowodowane blokadą cross-origin w ustawieniach Twojego serwera.

Ponieważ pliki fontów są prawie zawsze ładowane bezpośrednio z CSS, nasza wtyczka do mapowania domen nie jest w stanie przepisać adresów URL, aby używały mapowanej domeny zamiast oryginalnej, więc aby rozwiązać ten problem, musisz zmodyfikować pliki konfiguracyjne serwera.

Poniżej znajdują się fragmenty kodu rozwiązujące problem dla Apache i NGINX. Te zmiany wymagają zaawansowanej wiedzy o plikach konfiguracyjnych serwera (pliki .htaccess i pliki konfiguracyjne NGINX). Jeśli nie czujesz się komfortowo, wprowadzając te zmiany samodzielnie, wyślij tę stronę do zespołu wsparcia Twojego dostawcy hostingu, prosząc o pomoc.

### Apache

W swoim pliku .htaccess dodaj:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

W pliku konfiguracyjnym serwera (lokalizacja różni się w zależności od serwera) dodaj:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
