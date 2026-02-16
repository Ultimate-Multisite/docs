---
title: Zarejestruj konto przez Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Wydarzenie: Rejestracja konta przez Zapier

W artykule [Integracja Ultimate Multisite z Zapier](zapier.md) omówiliśmy, jak używać Zapier do wykonywania różnych akcji w Ultimate Multisite na podstawie wyzwalaczy i zdarzeń. W tym artykule pokażemy, jak zintegrować aplikacje zewnętrzne. Wykorzystamy Google Sheets jako źródło danych i wyślemy informacje do Ultimate Multisite, aby zarejestrować konto.

Na początek musisz utworzyć **Google Sheet** na swoim Google Drive. Upewnij się, że odpowiednio nazwiesz każdą kolumnę, aby później łatwo przypisać dane do właściwych pól.

![Google Sheet z kolumnami zawierającymi dane klienta](/img/admin/webhooks-list.png)Po utworzeniu arkusza Google możesz zalogować się do swojego konta Zapier i rozpocząć tworzenie zapa.

![Panel Zapier do tworzenia nowego zapa](/img/admin/webhooks-list.png)W polu wyszukiwania **„App event"** wybierz **„Google Sheets"**

![Wybieranie Google Sheets jako zdarzenia aplikacji](/img/admin/webhooks-list.png)

Następnie w polu „**Event**" wybierz „**New spreadsheet row**" i kliknij „**Continue**"

![Wybieranie zdarzenia New spreadsheet row w Zapier](/img/admin/webhooks-list.png)W kolejnym kroku zostaniesz poproszony o wybranie **konta Google**, na którym zapisany jest **Google Sheet**. Upewnij się, że wybrane jest właściwe konto Google.

![Wybieranie konta Google dla arkusza Google Sheet](/img/admin/webhooks-list.png)

W sekcji **„Set up trigger"** musisz wybrać i określić arkusz kalkulacyjny Google oraz konkretny arkusz roboczy, z którego będą pobierane dane. Wypełnij te pola i kliknij „**Continue**"

![Konfiguracja wyzwalacza z wyborem arkusza kalkulacyjnego i arkusza roboczego](/img/admin/webhooks-list.png)Następnie przetestuj wyzwalacz, aby upewnić się, że arkusz Google jest prawidłowo połączony.

![Krok testowania wyzwalacza w Zapier](/img/admin/webhooks-list.png)Jeśli test zakończy się pomyślnie, zobaczysz wynik z wartościami z Twojego arkusza. Kliknij „**Continue**", aby przejść dalej.

![Pomyślny test wyzwalacza pokazujący wartości z arkusza](/img/admin/webhooks-list.png)Kolejny krok to skonfigurowanie drugiej akcji, która utworzy lub zarejestruje konto w Ultimate Multisite. W polu wyszukiwania wybierz „**Ultimate Multisite(2.0.2)**"

![Wybieranie Ultimate Multisite jako aplikacji akcji](/img/admin/webhooks-list.png)

W polu „**Event**" wybierz „**Register an Account in Ultimate Multisite**", a następnie kliknij przycisk „**Continue**".

![Zdarzenie akcji Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)W sekcji „**Set up an action**" zobaczysz różne pola dostępne dla danych klienta, członkostw, produktów itp. Możesz przypisać wartości z arkusza Google do odpowiednich pól, tak jak pokazano na poniższym zrzucie ekranu.

![Mapowanie wartości z Google Sheet do pól Ultimate Multisite](/img/admin/webhooks-list.png)

Po przypisaniu wartości możesz przetestować akcję.

![Testowanie akcji rejestracji konta w Zapier](/img/admin/webhooks-list.png)
