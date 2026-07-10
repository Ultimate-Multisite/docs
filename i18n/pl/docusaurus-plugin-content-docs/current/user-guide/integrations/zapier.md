---
title: Integracja Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integracja Ultimate Multisite z Zapier {#integrating-ultimate-multisite-with-zapier}

W jednym z artykułów omówiliśmy [Webhooks](webhooks.md) oraz to, jak można ich używać do integracji z aplikacjami firm trzecich.

Korzystanie z webhooków jest dość skomplikowane, ponieważ wymaga zaawansowanej wiedzy z zakresu kodowania i przechwytywania payloadów. Użycie **Zapier** pozwala to obejść.

Zapier integruje się z ponad 5000 aplikacji, co ułatwia komunikację między różnymi aplikacjami.

Możesz tworzyć **wyzwalacze**, które zostaną uruchomione, gdy w Twojej sieci wystąpią zdarzenia (np. zostanie utworzone konto i uruchomi zdarzenie account_create), albo generować **akcje** w swojej sieci w reakcji na zdarzenia zewnętrzne (np. utworzyć nowe członkostwo konta w Twojej sieci Ultimate Multisite).

Jest to możliwe, ponieważ **wyzwalacze Ultimate Multisite Zapier** i akcje są obsługiwane przez [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Jak zacząć {#how-to-start}

Najpierw wyszukaj Ultimate Multisite na liście aplikacji Zapier. Alternatywnie możesz kliknąć [ten link](https://zapier.com/apps/wp-ultimo/integrations).

Przejdź do swojego Dashboard i naciśnij przycisk **+** **Utwórz Zap** na lewym pasku bocznym, aby skonfigurować nowy Zap.

![Dashboard Zapier z przyciskiem Utwórz Zap](/img/admin/webhooks-list.png)

Zostaniesz przekierowany na stronę tworzenia Zap.

W polu wyszukiwania wpisz „wp ultimo”. Kliknij, aby wybrać opcję wersji **Beta**.

![Wyszukiwanie WP Ultimo na liście aplikacji Zapier](/img/admin/webhooks-list.png)

Po wybraniu naszej aplikacji wybierz dostępne zdarzenie: **Nowe zdarzenie Ultimate Multisite**.

![Wybieranie wyzwalacza Nowe zdarzenie Ultimate Multisite](/img/admin/webhooks-list.png)

Teraz musimy dać Zapier dostęp do **Twojej sieci**. Kliknięcie **Zaloguj się** otworzy nowe okno wymagające **danych uwierzytelniających API**.

![Komunikat logowania Zapier z prośbą o dane uwierzytelniające API](/img/admin/webhooks-list.png)

Przejdź do panelu administratora swojej sieci i przejdź do **Ultimate Multisite > Settings** > **API i Webhooks**, a następnie znajdź sekcję ustawień API.

Wybierz opcję **Włącz API**, ponieważ jest ona wymagana, aby to połączenie działało.

![Ustawienia API i Webhooks z opcjami ustawień API oraz Włącz API](/img/admin/settings-api-webhooks.png)

Użyj ikony **Kopiuj do schowka** przy polach API Key i API Secret, a następnie wklej te wartości na ekranie integracji.

W polu URL podaj pełny URL swojej sieci, wraz z protokołem (HTTP lub HTTPS).

![Ekran integracji Zapier z polami API Key, Secret i URL](/img/admin/webhooks-list.png)

Kliknij przycisk **Tak, kontynuuj**, aby przejść do następnego kroku. Jeśli wszystko zadziała, zobaczysz swoje nowe połączone konto! Kliknij **Kontynuuj**, aby utworzyć nowy wyzwalacz.

## Jak utworzyć nowy wyzwalacz {#how-to-create-a-new-trigger}

Teraz, gdy Twoje konto jest połączone, możesz zobaczyć dostępne zdarzenia. W tym samouczku wybierzmy zdarzenie **payment_received**.

![Wybieranie zdarzenia payment_received w wyzwalaczu Zapier](/img/admin/webhooks-list.png)

Po wybraniu zdarzenia i kliknięciu **kontynuuj** pojawi się **krok testowy**.

![Krok testowy Zapier dla wyzwalacza](/img/admin/webhooks-list.png)

Na tym etapie Zapier sprawdzi, czy Twój Zap może **pobrać konkretny payload dla tego zdarzenia**. Przy przyszłych zdarzeniach tego samego typu zostaną wysłane informacje o tej samej strukturze.

![Test wyzwalacza Zapier zakończony pomyślnie z payloadem](/img/admin/webhooks-list.png)

W naszym samouczku test został **zakończony pomyślnie** i zwrócił przykładowe informacje payloadu. Te przykładowe informacje będą przydatne jako wskazówka podczas tworzenia akcji. Twój wyzwalacz jest teraz utworzony i gotowy do połączenia z innymi aplikacjami.

## Jak tworzyć akcje {#how-to-create-actions}

Akcje używają informacji z innych wyzwalaczy do tworzenia nowych wpisów w Twojej sieci.

W **kroku tworzenia akcji** wybierzesz Ultimate Multisite **Beta** oraz opcję **Utwórz elementy w Ultimate Multisite**.

![Tworzenie akcji z opcją Utwórz elementy w Ultimate Multisite](/img/admin/webhooks-list.png)

W następnym kroku utworzysz uwierzytelnienie, tak jak zrobiliśmy to w sekcji **Jak zacząć**, albo wybierzesz już utworzone uwierzytelnienie. W tym samouczku wybierzemy to samo uwierzytelnienie utworzone wcześniej.

![Wybieranie uwierzytelnienia dla akcji Zapier](/img/admin/webhooks-list.png)

### Konfigurowanie akcji {#setting-up-the-action}

To jest **główny krok akcji** i tutaj sprawy wyglądają nieco inaczej. Pierwszą informacją, którą wybierzesz, jest **Element**. Element to **model informacji** Twojej sieci, taki jak **Klienci, Płatności, Witryny, E-maile** i inne.

![Wybieranie typu Element dla akcji Zapier](/img/admin/webhooks-list.png)

Po wybraniu elementu formularz **przearanżuje się, aby pokazać wymagane i opcjonalne pola** dla wybranego elementu.

Na przykład po wybraniu elementu **Klient** pola formularza pokażą wszystko, co jest konieczne do wypełnienia, aby utworzyć nowego klienta w sieci.

![Pola elementu Klient w konfiguracji akcji Zapier](/img/admin/webhooks-list.png)

Po wypełnieniu wszystkich pól oznaczonych jako **wymagane** i kliknięciu kontynuuj ostatni ekran pokaże wypełnione pola oraz pola, które pozostały niewypełnione.

![Test akcji Zapier pokazujący wypełnione i niewypełnione pola](/img/admin/webhooks-list.png)

Gdy tylko test zakończy się pomyślnie, Twoja akcja jest skonfigurowana. Ważne jest również, aby sprawdzić w swojej sieci, czy element został utworzony podczas testu Twojej akcji.
