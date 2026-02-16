---
title: Integracja z Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Integracja Ultimate Multisite z Zapier

W jednym z artykułów omówiliśmy [Webhooki](webhooks.md) i sposoby ich wykorzystania do integracji z zewnętrznymi aplikacjami.

Korzystanie z webhooków jest dość skomplikowane, ponieważ wymaga zaawansowanej wiedzy programistycznej i umiejętności przechwytywania danych (payload). **Zapier** pozwala Ci ominąć te trudności.

Zapier oferuje integrację z ponad 5000 aplikacji, co znacznie ułatwia komunikację między różnymi systemami.

Możesz tworzyć **Triggery** (wyzwalacze), które będą uruchamiane w odpowiedzi na zdarzenia w Twojej sieci (np. utworzenie konta wywołuje zdarzenie account_create), lub generować **Akcje** w swojej sieci w reakcji na zewnętrzne zdarzenia (np. utworzenie nowego członkostwa w sieci Ultimate Multisite).

Jest to możliwe dzięki temu, że **triggery i akcje Ultimate Multisite w Zapier** są obsługiwane przez [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Jak zacząć

Najpierw wyszukaj Ultimate Multisite na liście aplikacji Zapier. Możesz też kliknąć [ten link](https://zapier.com/apps/wp-ultimo/integrations).

Przejdź do swojego dashboardu i kliknij przycisk **+** **Create Zap** na lewym pasku bocznym, aby skonfigurować nowy Zap.

![Dashboard Zapier z przyciskiem Create Zap](/img/admin/webhooks-list.png)

Zostaniesz przekierowany na stronę tworzenia Zapa.

W polu wyszukiwania wpisz „wp ultimo". Kliknij, aby wybrać wersję **Beta**.

![Wyszukiwanie WP Ultimo na liście aplikacji Zapier](/img/admin/webhooks-list.png)

Po wybraniu naszej aplikacji wybierz dostępne zdarzenie: **New Ultimate Multisite Event**.

![Wybieranie triggera New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Teraz musimy dać Zapierowi dostęp do **Twojej sieci**. Kliknięcie **Sign in** otworzy nowe okno wymagające podania **danych API**.

![Okno logowania Zapier z prośbą o dane API](/img/admin/webhooks-list.png)

Przejdź do panelu administracyjnego sieci i nawiguj do **Ultimate Multisite > Settings** > **API & Webhooks**, a następnie znajdź sekcję API Settings.

Zaznacz opcję **Enable API** — jest ona wymagana do działania tego połączenia.

![Ustawienia API z opcją Enable API w Ultimate Multisite](/img/admin/webhooks-list.png)

Użyj ikony **Copy to Clipboard** przy polach API Key i API Secret, a następnie wklej te wartości na ekranie integracji.

W polu URL wpisz pełny adres URL swojej sieci, łącznie z protokołem (HTTP lub HTTPS).

![Ekran integracji Zapier z polami API Key, Secret i URL](/img/admin/webhooks-list.png)

Kliknij przycisk **Yes, Continue**, aby przejść do następnego kroku. Jeśli wszystko pójdzie dobrze, zobaczysz swoje nowo połączone konto! Kliknij **Continue**, aby utworzyć nowy trigger.

## Jak utworzyć nowy Trigger

Teraz, gdy Twoje konto jest połączone, możesz zobaczyć dostępne zdarzenia. Na potrzeby tego poradnika wybierzmy zdarzenie **payment_received**.

![Wybieranie zdarzenia payment_received w triggerze Zapier](/img/admin/webhooks-list.png)

Po wybraniu zdarzenia i kliknięciu **continue** pojawi się **krok testowy**.

![Krok testowy triggera w Zapier](/img/admin/webhooks-list.png)

Na tym etapie Zapier sprawdzi, czy Twój Zap może **pobrać dane (payload) odpowiadające temu zdarzeniu**. Przy przyszłych zdarzeniach tego samego typu informacje o takiej samej strukturze będą wysyłane.

![Test triggera Zapier zakończony pomyślnie z danymi payload](/img/admin/webhooks-list.png)

W naszym poradniku test **zakończył się pomyślnie** i zwrócił przykładowe dane. Te przykładowe informacje będą przydatne podczas tworzenia akcji. Twój trigger jest teraz utworzony i gotowy do połączenia z innymi aplikacjami.

## Jak tworzyć Akcje

Akcje wykorzystują informacje z innych triggerów do tworzenia nowych wpisów w Twojej sieci.

W **kroku tworzenia akcji** wybierz Ultimate Multisite **Beta** oraz opcję **Create Items on Ultimate Multisite**.

![Tworzenie akcji z opcją Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

W następnym kroku utworzysz nowe uwierzytelnianie, tak jak to zrobiliśmy w sekcji **Jak zacząć**, lub wybierzesz już utworzone uwierzytelnianie. W tym poradniku wybierzemy wcześniej utworzone uwierzytelnianie.

![Wybieranie uwierzytelniania dla akcji Zapier](/img/admin/webhooks-list.png)

### Konfiguracja Akcji

To jest **główny krok akcji** i tutaj rzeczy wyglądają nieco inaczej. Pierwszą informacją, którą wybierzesz, jest **Item** (element). Item to **model danych** w Twojej sieci, taki jak **Customers, Payments, Sites, Emails** i inne.

![Wybieranie typu elementu dla akcji Zapier](/img/admin/webhooks-list.png)

Po wybraniu elementu formularz **przeorganizuje się, aby wyświetlić wymagane i opcjonalne pola** dla wybranego elementu.

Na przykład po wybraniu elementu **Customer** pola formularza pokażą wszystko, co jest niezbędne do wypełnienia, aby utworzyć nowego klienta w sieci.

![Pola elementu Customer w konfiguracji akcji Zapier](/img/admin/webhooks-list.png)

Po wypełnieniu wszystkich pól oznaczonych jako **required** (wymagane) i kliknięciu continue, ostatni ekran pokaże Ci wypełnione pola oraz pola, które pozostały niewypełnione.

![Test akcji Zapier pokazujący wypełnione i niewypełnione pola](/img/admin/webhooks-list.png)

Gdy test zakończy się pomyślnie, Twoja akcja jest skonfigurowana. Warto również sprawdzić w swojej sieci, czy element został utworzony podczas testu akcji.
