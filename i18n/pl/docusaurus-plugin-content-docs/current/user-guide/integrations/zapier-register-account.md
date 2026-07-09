---
title: Zarejestruj Account za pomocą Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Zdarzenie: Rejestracja Account przez Zapier {#event-register-an-account-via-zapier}

W artykule [Integrating Ultimate Multisite z Zapier](zapier.md) omówiliśmy, jak używać Zapier do wykonywania różnych działań w Ultimate Multisite na podstawie wyzwalaczy i zdarzeń. W tym artykule pokażemy, jak możesz zintegrować aplikacje firm trzecich. Użyjemy Google Sheets jako źródła danych i wyślemy informacje do Ultimate Multisite, aby zarejestrować Account.

Przed połączeniem Zapier przejdź do **Ultimate Multisite > Settings > API & Webhooks** i potwierdź, że API jest włączone. Skopiuj API Key i API Secret z tego ekranu, gdy Zapier poprosi o dane uwierzytelniające Account Ultimate Multisite.

![Ustawienia API i Webhooks z opcjami API Key, API Secret oraz Enable API](/img/admin/settings-api-webhooks.png)

Najpierw musisz utworzyć **Google Sheet** na swoim Google Drive. Upewnij się, że poprawnie zdefiniujesz każdą kolumnę, aby później łatwo zmapować dane.

Po utworzeniu Google sheet możesz zalogować się do swojego Account Zapier i rozpocząć tworzenie zapa.

W polu wyszukiwania dla **"App event"** wybierz **"Google Sheets"**


Następnie w polu "**Event** " wybierz "**New spreadsheet row** " i kliknij "**Continue** "

W kolejnym kroku zostaniesz poproszony o wybranie **Google Account**, na którym zapisany jest **Google Sheet**. Upewnij się więc, że wskazano właściwe google account.


W sekcji **"Set up trigger** " musisz wybrać i wskazać arkusz kalkulacyjny Google oraz arkusz roboczy, których użyjesz i z których będą pochodzić dane. Po prostu wypełnij te pola i kliknij "**Continue** "

Następnie należy "**test your trigger** ", aby upewnić się, że Twój google sheet jest poprawnie połączony.

Jeśli test zakończy się powodzeniem, zobaczysz wynik pokazujący niektóre wartości z Twoich arkuszy kalkulacyjnych. Kliknij "**Continue** ", aby kontynuować.

Kolejnym krokiem jest skonfigurowanie drugiej akcji, która utworzy lub zarejestruje Account w Ultimate Multisite. W polu wyszukiwania wybierz "**Ultimate Multisite(2.0.2)** "


W polu "**Event** " wybierz "**Register an Account in Ultimate Multisite** ", a następnie kliknij przycisk "**Continue** ".

W sekcji "**Set up an action** " zobaczysz różne pola dostępne dla danych klienta, członkostw, produktów itp. Możesz zmapować wartości z google sheet i przypisać je do odpowiedniego pola, w którym powinny zostać wypełnione, jak pokazano na zrzucie ekranu poniżej.


Po zmapowaniu wartości możesz przetestować akcję.
