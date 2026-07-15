---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Pierwsze spojrzenie na Webhooks (v2)

_**UWAGA: Pamiętaj, że ta funkcja lub artykuł jest przeznaczony dla zaawansowanych użytkowników.**_

**Webhook** to sposób, w jaki aplikacja lub oprogramowanie takie jak Ultimate Multisite może dostarczać innym aplikacjom informacje w czasie rzeczywistym. Webhook dostarcza dane lub payloady do innych aplikacji w momencie, gdy to się dzieje, co oznacza, że **otrzymujesz dane natychmiast.**

Jest to pomocne, jeśli musisz zintegrować lub przekazać określone dane z Ultimate Multisite do innego CRM lub systemu za każdym razem, gdy zostanie wyzwolone zdarzenie. Na przykład musisz wysłać imię i adres e-mail użytkownika na listę mailingową za każdym razem, gdy tworzone jest nowe konto użytkownika.

## Jak utworzyć webhook {#how-to-create-a-webhook}

Aby utworzyć webhook, przejdź do panelu administratora sieci. Kliknij **Ultimate Multisite > Webhooks > Add New Webhook.**

![Pusta strona listy Webhooks z przyciskiem Add New Webhook](/img/admin/webhooks-list-empty.png)

Następnie możesz edytować konfigurację webhooka:

![Formularz Add New Webhook z polami Name, Event i URL](/img/admin/webhook-add-modal.png)

Podczas tworzenia nowego webhooka zostaniesz poproszony o informacje takie jak **Name, URL** i **Event**. Możesz użyć dowolnej nazwy dla swojego webhooka. Najważniejsze pola to URL i Event.

![Interfejs edycji webhooka pokazujący pole URL i podgląd payloadu](/img/admin/webhook-url-field.png)

URL to **endpoint lub miejsce docelowe**, do którego Ultimate Multisite wyśle **payload lub dane**. To jest aplikacja, która odbierze dane.

Zapier to najczęstsze rozwiązanie, którego użytkownik używa, aby ułatwić integrację z aplikacją zewnętrzną. Bez platformy takiej jak Zapier trzeba będzie ręcznie utworzyć niestandardową funkcję, która przechwyci dane i je przetworzy. Zobacz ten artykuł o tym, **jak używać webhooka Ultimate Multisite z Zapier.**

W tym artykule przyjrzymy się podstawowej koncepcji działania webhooka oraz zdarzeniom dostępnym w Ultimate Multisite. Będziemy używać zewnętrznej witryny o nazwie [requestbin.com](https://requestbin.com/). Ta witryna pozwoli nam utworzyć endpoint i przechwycić payload bez pisania żadnego kodu. _**Zastrzeżenie: jedyne, co zrobi, to pokaże nam, że dane zostały odebrane.**_ Nie będzie żadnego przetwarzania ani żadnego rodzaju działania wykonanego na payloadzie.

Przejdź do [requestbin.com](https://requestbin.com/) i kliknij Create Request Bin.

Po kliknięciu tego przycisku zostaniesz poproszony o zalogowanie się, jeśli masz już konto, lub o rejestrację. Jeśli masz już konto, zostaniesz przeniesiony bezpośrednio do ich dashboardu. W ich dashboardzie od razu zobaczysz endpoint lub URL, którego możesz użyć podczas tworzenia webhooka Ultimate Multisite.

Skopiuj URL i wróć do Ultimate Multisite. Umieść endpoint w polu URL i wybierz zdarzenie z listy rozwijanej. W tym przykładzie wybierzemy **Payment Received**.

To zdarzenie jest wyzwalane za każdym razem, gdy użytkownik dokonuje płatności. Wszystkie dostępne zdarzenia, ich opisy i payloady są wymienione na dole strony. Kliknij przycisk **Add New Webhook**, aby zapisać webhook.

![Lista rozwijana zdarzeń webhooka z wybranym Payment Received](/img/admin/webhook-event-picker.png)

Możemy teraz wysłać zdarzenie testowe do endpointu, aby sprawdzić, czy utworzony przez nas webhook działa. Możemy to zrobić, klikając **Send Test Event** pod utworzonym webhookiem.

![Lista Webhooks pokazująca jeden skonfigurowany webhook i akcję Send Test](/img/admin/webhooks-list-populated.png)

To pokazuje okno potwierdzenia informujące, że test zakończył się powodzeniem.

![Wynik zdarzenia testowego webhooka po wysłaniu testowego payloadu](/img/admin/webhook-test-result.png)

Teraz, jeśli wrócimy do witryny _Requestbin_, zobaczymy, że payload został odebrany i zawiera pewne dane testowe.

To jest podstawowa zasada działania webhooka i endpointów. Jeśli chcesz utworzyć niestandardowy endpoint, musisz utworzyć niestandardową funkcję do przetwarzania danych, które otrzymujesz z Ultimate Multisite.
