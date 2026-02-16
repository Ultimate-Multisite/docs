---
title: Konfiguracja płatności ręcznych
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Konfigurowanie płatności manualnych (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Płatności manualne pozwalają oferować alternatywne metody płatności, gdy **Stripe** lub **PayPal** nie są dostępne dla Twoich użytkowników. Może to być przelew bankowy lub dowolna inna metoda płatności dostępna lokalnie dla Twoich użytkowników.

## Jak włączyć płatności manualne

Konfiguracja płatności manualnych jest bardzo prosta. Wystarczy włączyć tę opcję w bramkach płatności i dodać szczegółowe instrukcje, jak użytkownik powinien dokonać płatności.

Najpierw przejdź do **Ultimate Multisite > Settings > Payments**. W sekcji **Payment Gateways** włącz opcję **Manual**. Pojawi się pole **Payment Instructions**.

Wpisz w tym polu informacje potrzebne klientowi do dokonania płatności. Możesz podać np. dane swojego konta bankowego oraz adres e-mail, na który klient może wysłać potwierdzenie płatności.

![Przełącznik bramki płatności manualnych i pole instrukcji płatności](/img/config/settings-payment-gateways.png)

Po skonfigurowaniu kliknij **Save Settings** i gotowe. Gdy użytkownicy zarejestrują się w Twojej sieci, zobaczą komunikat informujący, że otrzymają instrukcje dotyczące finalizacji zakupu.

![Komunikat o płatności manualnej wyświetlany podczas rejestracji](/img/config/settings-payment-gateways.png)

Otrzymają również wiadomość na stronie **Thank You** z Twoimi instrukcjami płatności.

![Strona Thank You z instrukcjami płatności](/img/config/settings-payment-gateways.png)

## Potwierdzanie płatności manualnych

Aby potwierdzić płatność manualną, przejdź do menu **Payments** na pasku bocznym. Znajdziesz tam wszystkie płatności w Twojej sieci wraz ze szczegółami, w tym ich **status**. Płatność manualna zawsze będzie miała status **Pending**, dopóki ręcznie go nie zmienisz.

![Lista płatności z oczekującą płatnością manualną](/img/admin/payments-list.png)

Wejdź na stronę płatności, klikając **kod referencyjny**. Na tej stronie znajdziesz wszystkie szczegóły oczekującej płatności, takie jak identyfikator referencyjny, produkty, znaczniki czasowe i inne informacje.

![Strona szczegółów płatności z kodem referencyjnym i produktami](/img/admin/payments-list.png)

W prawej kolumnie możesz zmienić status płatności. Zmiana na **Completed** i włączenie opcji **Activate Membership** aktywuje stronę klienta oraz jego członkostwo.

![Zmiana statusu płatności na Completed z przełącznikiem Activate Membership](/img/admin/payments-list.png)
