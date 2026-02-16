---
title: Konfiguracja Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Konfiguracja bramki Stripe (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Na stronie ustawień płatności możesz aktywować do czterech metod płatności: Stripe, Stripe Checkout, PayPal i płatność ręczną. W tym artykule pokażemy, jak zintegrować bramkę **Stripe**.

## Włączanie Stripe

Aby włączyć Stripe jako dostępną bramkę płatności w Twojej sieci, przejdź do **Ultimate Multisite > Ustawienia > Płatności** i zaznacz przełącznik obok **Stripe** lub **Stripe Checkout** w sekcji Aktywne bramki płatności.

![Włączanie Stripe w aktywnych bramkach płatności](/img/config/settings-payment-gateways.png)

### Stripe a Stripe Checkout:

**Stripe:** Ta metoda wyświetla pole do wpisania numeru karty kredytowej podczas realizacji zamówienia.

![Wbudowane pole karty kredytowej Stripe podczas realizacji zamówienia](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ta metoda przekierowuje klienta na stronę Stripe Checkout podczas realizacji zamówienia.

![Strona przekierowania Stripe Checkout podczas realizacji zamówienia](/img/config/settings-payment-gateways.png)

Pobieranie kluczy API Stripe

Po włączeniu Stripe jako bramki płatności musisz wypełnić pola **Stripe Publishable Key** oraz **Stripe Secret Key**. Klucze te znajdziesz po zalogowaniu się na swoje konto Stripe.

_**Uwaga:** możesz włączyć **tryb Sandbox**, aby przetestować, czy metoda płatności działa poprawnie._

![Pola kluczy API Stripe i przełącznik trybu Sandbox](/img/config/settings-payment-gateways.png)

W panelu Stripe kliknij **Developers** w prawym górnym rogu, a następnie wybierz **API Keys** z menu po lewej stronie.

![Sekcja Developers w panelu Stripe z opcją API Keys](/img/config/settings-payment-gateways.png)

Możesz korzystać z **danych testowych** (aby sprawdzić, czy integracja działa na Twojej stronie produkcyjnej) lub nie. Aby to zmienić, użyj przełącznika **Viewing test data**.

![Przełącznik Viewing test data w Stripe](/img/config/settings-payment-gateways.png)

Skopiuj wartości **Publishable key** i **Secret key** z kolumny **Token** i wklej je w odpowiednie pola bramki Stripe w Ultimate Multisite. Następnie kliknij **Zapisz zmiany**.

![Wartości klucza publicznego i tajnego w Stripe](/img/config/settings-payment-gateways.png)

![Wklejanie kluczy Stripe w ustawieniach Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Konfiguracja webhooka Stripe

Stripe wysyła zdarzenia webhook, które powiadamiają Ultimate Multisite za każdym razem, gdy na **Twoim koncie Stripe** coś się wydarzy.

Kliknij **Developers**, a następnie wybierz **Webhooks** z menu po lewej stronie. Po prawej stronie kliknij **Add endpoint**.

![Strona Webhooks w Stripe z przyciskiem Add endpoint](/img/config/settings-payment-gateways.png)

Będziesz potrzebować **adresu URL punktu końcowego**. Ultimate Multisite automatycznie generuje ten adres — znajdziesz go w polu **Webhook Listener URL** w sekcji **Bramka Stripe Ultimate Multisite**.

![Pole Webhook Listener URL w ustawieniach bramki Stripe](/img/config/settings-payment-gateways.png)

**Skopiuj** adres URL punktu końcowego i **wklej** go w pole **Endpoint URL** w Stripe.

![Wklejanie adresu URL punktu końcowego podczas konfiguracji webhooka Stripe](/img/config/settings-payment-gateways.png)

Następnie wybierz **zdarzenia**. W tej opcji wystarczy zaznaczyć pole **Select all events** i kliknąć **Add events**. Potem kliknij **Add Endpoint**, aby zapisać zmiany.

![Zaznaczanie wszystkich zdarzeń i dodawanie punktu końcowego Stripe](/img/config/settings-payment-gateways.png)

To wszystko — integracja płatności Stripe jest gotowa!
