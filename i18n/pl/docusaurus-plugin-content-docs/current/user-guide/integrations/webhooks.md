---
title: Webhooki
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Pierwsze spojrzenie na webhooki (v2)

_**UWAGA: Ta funkcja i artykuł są przeznaczone dla zaawansowanych użytkowników.**_

**Webhook** to sposób, w jaki aplikacja lub oprogramowanie takie jak Ultimate Multisite może przekazywać innym aplikacjom informacje w czasie rzeczywistym. Webhook dostarcza dane do innych aplikacji natychmiast po ich wystąpieniu, co oznacza, że **otrzymujesz dane od razu.**

Jest to przydatne, gdy potrzebujesz zintegrować lub przekazać określone dane z Ultimate Multisite do innego systemu CRM lub innej aplikacji za każdym razem, gdy zostanie wywołane jakieś zdarzenie. Na przykład, gdy chcesz wysłać imię i adres e-mail użytkownika do listy mailingowej za każdym razem, gdy zostanie utworzone nowe konto użytkownika.

## Jak utworzyć webhook

Aby utworzyć webhook, przejdź do panelu administracyjnego sieci. Kliknij **Ultimate Multisite > Webhooks > Add New Webhook.**

![Strona z listą webhooków i przyciskiem Add New Webhook](/img/admin/webhooks-list.png)

Podczas tworzenia nowego webhooka zostaniesz poproszony o podanie informacji takich jak **Name, URL** i **Event**. Możesz użyć dowolnej nazwy dla swojego webhooka. Najważniejszymi polami są URL i Event.

![Formularz nowego webhooka z polami Name, URL i Event](/img/admin/webhooks-list.png)

URL to **punkt końcowy lub miejsce docelowe**, do którego Ultimate Multisite będzie wysyłać **payload, czyli dane**. To jest aplikacja, która otrzyma dane.

Zapier to najczęściej używane rozwiązanie, które ułatwia integrację z aplikacjami zewnętrznymi. Bez platformy takiej jak Zapier, będziesz musiał ręcznie stworzyć własną funkcję, która przechwyci dane i je przetworzy. Zobacz ten artykuł o tym, **jak używać webhooka Ultimate Multisite z Zapier.**

W tym artykule przyjrzymy się podstawowej koncepcji działania webhooka oraz zdarzeniom dostępnym w Ultimate Multisite. Będziemy korzystać z zewnętrznej strony [requestbin.com](https://requestbin.com/). Ta strona pozwoli nam utworzyć punkt końcowy i przechwycić payload bez pisania kodu. _**Uwaga: jedyne co zrobimy, to zobaczymy, że dane zostały odebrane.**_ Nie będzie żadnego przetwarzania ani żadnych innych działań wykonanych na payloadzie.

Przejdź na stronę [requestbin.com](https://requestbin.com/) i kliknij Create Request Bin.

![Strona RequestBin z przyciskiem Create Request Bin](/img/admin/webhooks-list.png)

Po kliknięciu tego przycisku zostaniesz poproszony o zalogowanie się, jeśli masz już konto, lub o rejestrację. Jeśli masz już konto, zostaniesz przekierowany bezpośrednio do panelu. W panelu od razu zobaczysz punkt końcowy lub URL, którego możesz użyć do utworzenia webhooka Ultimate Multisite.

![Panel RequestBin pokazujący URL punktu końcowego](/img/admin/webhooks-list.png)

Skopiuj URL i wróć do Ultimate Multisite. Wklej punkt końcowy w polu URL i wybierz zdarzenie z listy rozwijanej. W tym przykładzie wybierzemy **Payment Received**.

To zdarzenie jest wywoływane za każdym razem, gdy użytkownik dokonuje płatności. Wszystkie dostępne zdarzenia, ich opisy i payloady są wymienione na dole strony. Kliknij przycisk **Add New Webhook**, aby zapisać webhook.

![Webhook skonfigurowany ze zdarzeniem Payment Received](/img/admin/webhooks-list.png)

Teraz możemy wysłać testowe zdarzenie do punktu końcowego, aby sprawdzić, czy utworzony webhook działa. Możemy to zrobić, klikając **Send Test Event** pod utworzonym webhookiem.

![Opcja Send Test Event pod webhookiem](/img/admin/webhooks-list.png)

Pojawi się okno potwierdzenia informujące, że test zakończył się pomyślnie.

![Potwierdzenie pomyślnego testu webhooka](/img/admin/webhooks-list.png)

Teraz, jeśli wrócimy na stronę _Requestbin_, zobaczymy, że payload został odebrany i zawiera dane testowe.

![RequestBin pokazujący odebrane dane z payloadu webhooka](/img/admin/webhooks-list.png)

To jest podstawowa zasada działania webhooków i punktów końcowych. Jeśli chcesz utworzyć własny punkt końcowy, będziesz musiał stworzyć własną funkcję do przetwarzania danych otrzymanych z Ultimate Multisite.
