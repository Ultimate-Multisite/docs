---
title: Wysyłanie e-maili i rozgłoszeń
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Wysyłanie e-maili i wiadomości masowych (v2)

_**WAŻNA INFORMACJA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Ultimate Multisite oferuje funkcję, która pozwala komunikować się z klientami poprzez wysyłanie e-maili do wybranego użytkownika lub grupy użytkowników, a także wyświetlanie powiadomień w ich panelu administracyjnym w celu przekazywania ogłoszeń.

## Dodawanie powiadomień administracyjnych w panelu klientów za pomocą wiadomości masowych

Korzystając z funkcji wiadomości masowych w Ultimate Multisite, możesz dodawać **powiadomienia administracyjne** w panelu administracyjnym podstrony użytkownika.

Jest to niezwykle przydatne, gdy musisz przekazać ogłoszenie dotyczące np. prac konserwacyjnych systemu lub oferty nowych produktów czy usług dla obecnych użytkowników. Tak będzie wyglądać powiadomienie administracyjne w panelu użytkownika:

![Powiadomienie masowe wyświetlone w panelu klienta](/img/admin/broadcasts-list.png)

Aby utworzyć powiadomienie administracyjne, przejdź do panelu administracyjnego sieci i w menu **Ultimate Multisite** znajdziesz opcję **Broadcasts**.

![Menu Broadcasts w panelu administracyjnym Ultimate Multisite](/img/admin/broadcasts-list.png)

Na tej stronie kliknij przycisk **Add Broadcast** u góry.

Otworzy się okno modalne dodawania wiadomości masowej, w którym możesz wybrać typ wiadomości do wysłania.

Wybierz opcję **Message**, a następnie kliknij przycisk **Next Step**.

![Okno dodawania wiadomości masowej z wybranym typem Message](/img/admin/broadcasts-list.png)

W następnym oknie zostaniesz poproszony o wskazanie **Target customer** (docelowego klienta) lub **Target product** (docelowego produktu). Możesz wybrać więcej niż jednego użytkownika lub więcej niż jeden produkt.

Aby wyszukać konto użytkownika lub produkt, zacznij wpisywać słowo kluczowe w polu.

W polu **Message type** możesz wybrać kolor powiadomienia. Pozwoli to podkreślić pilność Twojej wiadomości.

Następnie kliknij **Next Step**.

![Wybór docelowego klienta i produktu dla wiadomości masowej](/img/admin/broadcasts-list.png)

W następnym oknie możesz rozpocząć tworzenie wiadomości, wpisując temat oraz treść, którą chcesz przekazać użytkownikom.

![Edytor tematu i treści wiadomości masowej](/img/admin/broadcasts-list.png)

Po utworzeniu wiadomości kliknij przycisk **Send**.

I to wszystko. Powiadomienie administracyjne powinno natychmiast pojawić się w panelu użytkownika.

## Wysyłanie e-maili do klientów

Korzystając z funkcji wiadomości masowych w Ultimate Multisite, możesz wysyłać e-maile do użytkowników. Masz możliwość wysłania wiadomości tylko do określonych użytkowników lub do grupy użytkowników na podstawie produktu lub planu, który subskrybują.

Aby rozpocząć wysyłkę e-mail, przejdź do panelu administracyjnego sieci i w menu Ultimate Multisite znajdziesz opcję Broadcast.

![Strona Broadcasts w panelu administracyjnym Ultimate Multisite](/img/admin/broadcasts-list.png)

Na tej stronie kliknij przycisk **Add broadcast** u góry.

Otworzy się okno modalne dodawania wiadomości masowej, w którym możesz wybrać typ wiadomości do wysłania. Wybierz opcję **Email**, a następnie kliknij przycisk **Next Step**.

![Okno dodawania wiadomości masowej z wybranym typem Email](/img/admin/broadcasts-list.png)

W następnym oknie zostaniesz poproszony o wskazanie **Target customer** (docelowego klienta) lub **Target product** (docelowego produktu). Możesz wybrać więcej niż jednego użytkownika lub więcej niż jeden produkt.

Aby wyszukać konto użytkownika lub produkt, zacznij wpisywać słowo kluczowe w polu.

Po wybraniu grupy docelowej kliknij **Next Step**.

![Wybór docelowego klienta i produktu dla wysyłki e-mail](/img/admin/broadcasts-list.png)

W następnym oknie możesz rozpocząć tworzenie e-maila, wpisując temat oraz treść wiadomości, którą chcesz wysłać do użytkowników.

![Edytor tematu i treści wysyłki e-mail](/img/admin/broadcasts-list.png)

Po utworzeniu wiadomości kliknij przycisk **Send**.

I tak łatwo można wysłać e-mail do użytkowników końcowych za pomocą funkcji wiadomości masowych.

## E-maile systemowe

E-maile systemowe w Ultimate Multisite to **automatyczne powiadomienia** wysyłane przez system po określonych działaniach, takich jak rejestracja, płatność, mapowanie domeny itp. Te e-maile można edytować i modyfikować w ustawieniach Ultimate Multisite. Dostępna jest również funkcja pozwalająca na resetowanie i importowanie istniejących ustawień z innej instalacji Ultimate Multisite.

### Resetowanie i importowanie

Nowe wersje Ultimate Multisite oraz dodatki mogą i będą od czasu do czasu rejestrować nowe e-maile.

Aby uniknąć konfliktów i innych problemów, **nie dodajemy automatycznie nowych szablonów e-mail jako e-maili systemowych w Twojej instalacji**, chyba że są one kluczowe dla prawidłowego działania danej funkcji.

Jednak superadministratorzy i agenci mogą importować nowo zarejestrowane e-maile za pomocą narzędzia importu. Ten proces utworzy nowy e-mail systemowy z zawartością i konfiguracją nowego szablonu, umożliwiając superadministratorowi wprowadzenie dowolnych modyfikacji lub pozostawienie ich bez zmian.

#### Jak importować e-maile systemowe

Przejdź do strony ustawień Ultimate Multisite i wybierz zakładkę **Emails**.

![Zakładka Emails w ustawieniach Ultimate Multisite](/img/config/settings-emails.png)

Następnie na pasku bocznym kliknij przycisk **Customize System Emails**.

![Przycisk Customize System Emails na pasku bocznym](/img/config/settings-emails.png)

Na stronie System Emails zobaczysz przycisk akcji **Reset & Import** u góry. Kliknięcie tego przycisku otworzy okno modalne importu i resetowania.

![Przycisk akcji Reset and Import na stronie System Emails](/img/config/settings-emails.png)

Następnie możesz rozwinąć opcje Import Emails, aby zobaczyć, które e-maile systemowe są dostępne do zaimportowania.

![Opcje Import Emails pokazujące dostępne e-maile systemowe](/img/config/settings-emails.png)

#### Resetowanie e-maili systemowych

Czasami okazuje się, że wprowadzone zmiany w danym szablonie e-mail już Ci nie odpowiadają i chciałbyś przywrócić go do **stanu domyślnego**.

W takich przypadkach masz dwie możliwości: możesz po prostu usunąć e-mail systemowy i zaimportować go ponownie (korzystając z powyższych instrukcji) — spowoduje to jednak usunięcie statystyk wysyłki i innych danych, co czyni tę metodę mniej preferowaną.

Możesz też użyć narzędzia **Reset & Import**, aby zresetować dany szablon e-mail.

Aby zresetować szablon e-mail, wykonaj powyższe kroki aż do otwarcia narzędzia Reset & Import, a następnie włącz opcję **Reset** i wybierz e-maile, które chcesz przywrócić do domyślnej zawartości.

![Opcja Reset przywracająca szablony e-mail do ustawień domyślnych](/img/config/settings-emails.png)
