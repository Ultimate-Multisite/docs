---
title: Przebieg rejestracji
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Przebieg rejestracji (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Użytkownicy mogą rejestrować się w Twojej sieci na różne sposoby. Mogą użyć Twojego formularza rejestracji lub linku do udostępnienia prowadzącego do wstępnie wybranego planu. Tutaj pokażemy, jak Twoi klienci mogą rejestrować się w Twojej sieci za pomocą dostępnych ścieżek oraz co dzieje się po rejestracji w Twojej sieci.

## Korzystanie z formularza rejestracji: {#using-the-registration-form}

To standardowy proces rejestracji. Tworzysz stronę rejestracji z **formularzem checkout** i będzie to miejsce, do którego Twoi klienci przejdą, aby zarejestrować się w Twojej sieci i subskrybować plan. Możesz mieć wiele stron rejestracji, każdą z innym formularzem rejestracji, jeśli chcesz.

Domyślna strona rejestracji to [_**yourdomain.com/register**_](http://yourdomain.com/register), ale możesz zmienić ją w dowolnym momencie w **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Gdy użytkownik trafi na Twoją stronę rejestracji (zwykle klikając przycisk **Sign in** lub **Buy now**), zobaczy tam Twój formularz rejestracji.

![Formularz rejestracji wyświetlany na stronie rejestracji](/img/frontend/registration-form.png)

Oto przykład formularza checkout, tak jak wygląda we frontendzie:

![Frontendowy formularz rejestracji checkout](/img/config/checkout-frontend-registration.png)

Wystarczy, że wypełnią wszystkie obowiązkowe pola — email, nazwę użytkownika, hasło itd. — oraz zapłacą za plan lub potwierdzą swój adres email, jeśli rejestrują się w darmowym planie albo płatnym planie z okresem próbnym bez informacji o płatności.

Na stronie „Dziękujemy” zobaczą wiadomość informującą ich, czy muszą potwierdzić swój adres email, czy ich witryna jest już aktywowana i mogą zacząć z niej korzystać.

![Strona Dziękujemy po rejestracji](/img/frontend/registration-thank-you.png)

Jeśli wymagane jest potwierdzenie adresu email, będą musieli przejść do swojej skrzynki odbiorczej i kliknąć link weryfikacyjny. Ich witryna nie zostanie aktywowana, jeśli adres email nie zostanie zweryfikowany.

Jeśli zarejestrowali się w płatnym planie lub weryfikacja email nie jest obowiązkowa w Twojej sieci, ich witryna zostanie aktywowana zaraz po checkout i zobaczą link do zalogowania się do swojego dashboardu.

![Witryna aktywowana z linkiem do zalogowania się do dashboardu](/img/frontend/site-activated.png)

## Korzystanie z linku do udostępnienia: {#using-a-shareable-link}

Proces rejestracji za pomocą linku do udostępnienia jest zasadniczo taki sam jak w przypadku formularza rejestracji; jedyna różnica polega na tym, że używając linku do udostępnienia, Twoi klienci mogą mieć wstępnie wybrany produkt lub szablon witryny w formularzu checkout (patrz sekcja Wstępne wybieranie produktów i szablonów za pomocą parametrów URL) albo dodany kod kuponu (patrz sekcja Korzystanie z parametrów URL).

Proces rejestracji będzie taki sam: będą musieli podać imię i nazwisko, nazwę użytkownika, adres email, nazwę i tytuł witryny itd., ale plan lub szablon witryny będzie już dla nich wstępnie wybrany.

### Rejestracja za pomocą płatności ręcznych: {#registering-using-manual-payments}

Jeśli nie chcesz używać PayPal, Stripe ani żadnej innej bramki płatności oferowanej przez Ultimate Multisite lub integracje jego dodatków, możesz użyć płatności ręcznych dla swoich klientów. W ten sposób możesz wygenerować dla nich fakturę do opłacenia w preferowanym przez Ciebie procesorze płatności po tym, jak zarejestrują się w Twojej sieci.

Proces rejestracji będzie dokładnie taki sam jak powyżej, ale na stronie rejestracji Twoi klienci zobaczą wiadomość informującą, że otrzymają email z dalszymi instrukcjami, aby dokończyć płatność.

![Komunikat o płatności ręcznej podczas rejestracji](/img/frontend/registration-manual-notice.png)

A po zakończeniu rejestracji zobaczą instrukcje płatności, które ustawisz (a także otrzymają je emailem).

![Instrukcje płatności pokazane po rejestracji](/img/frontend/registration-payment-instructions.png)

Instrukcje płatności można zmienić w **Ultimate Multisite > Settings > Payments** po włączeniu opcji płatności **Manual**:

![Przełącznik płatności ręcznej z polem instrukcji płatności](/img/config/manual-gateway-settings.png)

Po tym, jak Twoi klienci dokonają płatności ręcznej i prześlą Ci potwierdzenie, musisz **ręcznie potwierdzić płatność**, aby aktywować członkostwo klienta i witrynę.

Aby to zrobić, przejdź do **Ultimate Multisite > Payments** i znajdź płatność klienta. Nadal powinna mieć status **Pending**.

![Lista płatności z oczekującą płatnością ręczną](/img/admin/payments-list.png)

Kliknij numer płatności, a będziesz mógł zmienić jej status na **Completed**.

![Strona szczegółów płatności](/img/admin/payment-edit.png)

![Zmiana statusu płatności na Completed](/img/admin/payment-status-completed.png)

Po zmianie jej statusu na **Completed** powinieneś zobaczyć komunikat **Activate membership**. Włącz tę opcję, aby aktywować członkostwo i witrynę powiązane z tym klientem. Następnie kliknij **Save Payment**.

![Przełącznik aktywacji członkostwa i przycisk Save Payment](/img/admin/payment-activate-membership.png)

Twój klient powinien teraz mieć dostęp do dashboardu i wszystkich funkcji, które subskrybuje.
