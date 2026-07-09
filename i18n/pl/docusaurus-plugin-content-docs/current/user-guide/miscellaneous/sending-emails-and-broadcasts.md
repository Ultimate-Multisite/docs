---
title: Wysyłanie e-maili i komunikatów
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Wysyłanie e-maili i broadcastów (v2)

_**WAŻNA UWAGA: Ten artykuł odnosi się do Ultimate Multisite w wersji 2.x.**_

Ultimate Multisite zawiera funkcję, która pozwoli Ci komunikować się z klientami poprzez wysyłanie e-maila do wybranego użytkownika lub grupy użytkowników, a także wysyłanie powiadomień na ich Dashboard administratora w celu rozgłaszania ogłoszeń

## Dodawanie powiadomień administratora do Dashboard klientów za pomocą broadcastów

Korzystając z funkcji broadcastów Ultimate Multisite, możesz dodać **powiadomienia administratora** do Dashboard administratora podwitryny użytkownika.

Jest to niezwykle pomocne, jeśli musisz przekazać ogłoszenie, takie jak konserwacja systemu, albo zaoferować nowe produkty lub usługi istniejącym użytkownikom. Tak powiadomienie administratora będzie wyglądać na Dashboard użytkownika.

<!-- Zrzut ekranu niedostępny: Broadcast powiadomienia administratora pokazany na Dashboard podwitryny klienta -->

Aby rozpocząć powiadomienie administratora, przejdź do Dashboard administratora sieci, a w menu **Ultimate Multisite** znajdziesz opcję **Broadcasts**.

![Strona listy Broadcasts w panelu administratora Ultimate Multisite](/img/admin/broadcasts-list.png)

Możesz także edytować istniejące broadcasty:

![Interfejs edycji broadcastu](/img/admin/broadcast-edit.png)

Na tej stronie kliknij przycisk **Add Broadcast** u góry.

Spowoduje to otwarcie okna modalnego dodawania broadcastu, w którym możesz wybrać, jaki typ broadcastu chcesz wysłać.

Wybierz **Message**, a następnie kliknij przycisk **Next Step**.

![Okno modalne dodawania broadcastu z wybraną opcją Message](/img/admin/broadcast-add-message.png)

Następne okno poprosi Cię o wskazanie **Target customer** lub **Target product**. Pamiętaj, że możesz wybrać więcej niż jednego użytkownika lub więcej niż jeden produkt.

Aby wyszukać konto użytkownika albo produkt, musisz zacząć wpisywać słowo kluczowe w polu.

W polu **Message type** możesz wybrać kolor powiadomienia. Podkreśli to pilność Twojej wiadomości.

Następnie możesz kliknąć **Next Step**.

![Pola Target customers, Target product i Message type dla broadcastu Message](/img/admin/broadcast-message-targets.png)

Następne okno to miejsce, w którym możesz zacząć tworzyć wiadomość, wpisując temat oraz treść/wiadomość, którą chcesz rozgłosić użytkownikom.

![Temat wiadomości broadcastu i edytor treści w kroku tworzenia](/img/admin/broadcast-edit.png)

Po utworzeniu wiadomości możesz nacisnąć przycisk **Send**.

I to wszystko. Powiadomienie administratora powinno natychmiast pojawić się na Dashboard użytkownika.

## Wysyłanie e-maili do klientów

Korzystając z funkcji broadcastów Ultimate Multisite, możesz wysłać e-mail do swoich użytkowników. Masz możliwość wysłania e-maila tylko do określonych użytkowników albo skierowania go do konkretnej grupy użytkowników na podstawie produktu lub planu, w ramach którego mają subskrypcję.

Aby rozpocząć broadcast e-mailowy, przejdź do Dashboard administratora sieci, a w menu Ultimate Multisite znajdziesz opcję Broadcast.

![Strona listy Broadcasts używana jako punkt wyjścia dla broadcastu e-mailowego](/img/admin/broadcasts-list.png)

Na tej stronie kliknij przycisk **Add broadcast** u góry.

Spowoduje to otwarcie okna modalnego dodawania broadcastu, w którym możesz wybrać, jaki typ broadcastu chcesz wysłać. Wybierz **Email**, a następnie kliknij przycisk **Next Step**.

![Okno modalne dodawania broadcastu z wybraną opcją Email](/img/admin/broadcast-add-email.png)

Następne okno poprosi Cię o wskazanie **Target customer** lub **Target produc** t. Pamiętaj, że możesz wybrać więcej niż jednego użytkownika lub więcej niż jeden produkt.

Aby wyszukać konto użytkownika albo produkt, musisz zacząć wpisywać słowo kluczowe w polu.

Po wybraniu docelowych odbiorców możesz kliknąć **Next Step**.

![Wybór Target customers i Target product dla broadcastu Email](/img/admin/broadcast-email-targets.png)

Następne okno to miejsce, w którym możesz zacząć tworzyć e-mail, wpisując temat oraz treść/wiadomość, którą chcesz wysłać użytkownikom.

<!-- Zrzut ekranu niedostępny: Temat broadcastu e-mailowego i edytor treści w kroku tworzenia -->

Po utworzeniu wiadomości możesz nacisnąć przycisk **Send**.

I właśnie tak łatwo można wysłać e-mail do użytkowników końcowych, korzystając z funkcji broadcastów.

## E-maile systemowe

E-maile systemowe w Ultimate Multisite to **automatyczne powiadomienia** wysyłane przez system po określonych działaniach, takich jak rejestracja, płatność, mapowanie domeny itp. Te e-maile można edytować lub modyfikować w ustawieniach Ultimate Multisite. Funkcja ta pozwala również zresetować i zaimportować istniejące ustawienia z innej instalacji Ultimate Multisite.

### Resetowanie i importowanie

Nowe wersje Ultimate Multisite, a także dodatki, mogą i będą od czasu do czasu rejestrować nowe e-maile.

Aby zapobiec konfliktom i innym problemom, **nie dodamy automatycznie nowych szablonów e-maili jako e-maili systemowych w Twojej instalacji** , chyba że są one kluczowe dla poprawnego działania danej funkcji.

Jednak superadministratorzy i agenci mogą importować te nowo zarejestrowane e-maile za pomocą narzędzia importera. Ten proces utworzy nowy e-mail systemowy z treścią i konfiguracją nowego szablonu e-maila, umożliwiając superadministratorowi wprowadzenie dowolnych modyfikacji lub pozostawienie go bez zmian.

#### Jak importować e-maile systemowe

Przejdź do strony ustawień Ultimate Multisite i przejdź do karty **Emails**.

![Karta Emails w ustawieniach Ultimate Multisite pokazująca sekcję System Emails](/img/config/settings-emails-tab.png)

Następnie na pasku bocznym kliknij przycisk **Customize System Emails**.

<!-- Zrzut ekranu niedostępny: Przycisk Customize System Emails w panelu bocznym System Emails -->

Na stronie System Emails zobaczysz u góry przycisk akcji **Reset & Import**. Kliknięcie tego przycisku powinno otworzyć okno modalne importu i resetowania.

![Przycisk akcji Reset lub Import na stronie administratora System Emails](/img/admin/system-emails-reset-import.png)

Następnie możesz przełączyć opcje Import Emails, aby zobaczyć, które e-maile systemowe są dostępne do zaimportowania.

<!-- Screenshot unavailable: modal Reset and Import z rozwiniętymi opcjami Import Emails -->

#### Resetowanie systemowych e-maili

Innym razem możesz uznać, że zmiany wprowadzone w danym szablonie e-maila już Ci nie odpowiadają i chcesz przywrócić go do **stanu domyślnego**.

W takich przypadkach masz dwie opcje: możesz po prostu usunąć systemowy e-mail i zaimportować go ponownie (korzystając z instrukcji powyżej) — co wymaże metryki wysyłki i inne rzeczy, przez co ta metoda jest najmniej zalecana.

Możesz też użyć narzędzia **Reset & Import**, aby zresetować ten szablon e-maila.

Aby zresetować szablon e-maila, możesz wykonać powyższe kroki, aż dotrzesz do narzędzia Reset & Import, a następnie przełączyć opcję **Reset** i wybrać e-maile, które chcesz przywrócić do ich domyślnej treści.

<!-- Screenshot unavailable: modal Reset and Import z rozwiniętymi opcjami Reset Emails -->
