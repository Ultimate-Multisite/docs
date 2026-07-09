---
title: Konfigurowanie płatności ręcznych
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Konfigurowanie płatności ręcznych (v2) {#setting-up-manual-payments-v2}

_**WAŻNA UWAGA: Ten artykuł odnosi się do Ultimate Multisite w wersji 2.x.**_

Płatności ręczne to sposób na zaoferowanie innych metod płatności, jeśli **Stripe** lub **PayPal** nie są dostępne dla Twoich użytkowników. Może to być przelew tradycyjny lub bankowy albo dowolna inna metoda płatności dostępna lokalnie dla Twoich użytkowników.

## Jak włączyć płatności ręczne {#how-to-enable-manual-payments}

Konfiguracja płatności ręcznej jest bardzo prosta. Wystarczy włączyć ją w bramkach płatności i wpisać szczegółowe instrukcje dotyczące tego, jak użytkownik powinien wysłać płatność.

Najpierw przejdź do **Ultimate Multisite > Settings > Payments**. Poniżej **Payment Gateways** włącz przełącznik **Manual**. Zobaczysz, że pojawi się pole **Payment Instructions**.

Dodaj w tym polu informacje, których Twój klient będzie potrzebować, aby dokonać płatności. Mogą to być na przykład dane Twojego konta bankowego oraz Twój adres e-mail, aby klient mógł wysłać Ci potwierdzenie płatności.

![Przełącznik bramki płatności ręcznej z obszarem tekstowym Payment Instructions](/img/config/manual-gateway-expanded.png)

Oto interfejs ustawień bramki ręcznej:

![Ustawienia bramki ręcznej](/img/config/manual-gateway-settings.png)

Po skonfigurowaniu wystarczy kliknąć **Save Settings** i gotowe. Gdy użytkownicy zarejestrują się w Twojej sieci, zobaczą wiadomość informującą, że otrzymają Twoje instrukcje dotyczące dokończenia zakupu.

![Komunikat potwierdzenia rejestracji informujący użytkownika, że otrzyma instrukcje płatności](/img/frontend/registration-manual-notice.png)

Otrzymają również wiadomość na Twojej stronie **Thank You** z instrukcjami płatności.

<!-- Screenshot unavailable: Strona Thank You pokazująca instrukcje płatności po checkout -->

## Potwierdzanie płatności ręcznych {#confirming-manual-payments}

Aby potwierdzić płatność ręczną, przejdź do menu **Payments** na lewym pasku. Tam możesz zobaczyć wszystkie płatności w swojej sieci oraz ich szczegóły, w tym ich **status**. Płatność ręczna zawsze będzie mieć status **Pending**, dopóki nie zmienisz go ręcznie.

![Lista płatności pokazująca oczekującą płatność ręczną](/img/admin/payments-list.png)

Wejdź na stronę płatności, klikając **kod referencyjny**. Na tej stronie masz wszystkie szczegóły oczekującej płatności, takie jak identyfikator referencyjny, produkty, znaczniki czasu i więcej.

![Strona szczegółów płatności pokazująca kod referencyjny, produkty i sumy](/img/admin/payment-edit.png)

W prawej kolumnie możesz zmienić status płatności. Zmiana go na **Completed** i **włączenie opcji Activate Membership** aktywuje stronę Twojego klienta, a jego członkostwo będzie aktywne.

![Strona edycji płatności ze statusem ustawionym na Completed i przełącznikiem Activate Membership](/img/admin/payment-activate-membership.png)
