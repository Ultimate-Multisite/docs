---
title: Przepływ rejestracji
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Proces rejestracji (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Użytkownicy mogą rejestrować się w Twojej sieci na różne sposoby. Mogą skorzystać z formularza rejestracyjnego lub z linku do udostępnienia z wcześniej wybranym planem. Tutaj pokażemy Ci, jak Twoi klienci mogą zarejestrować się w Twojej sieci, korzystając z dostępnych ścieżek, oraz co dzieje się po zakończeniu rejestracji.

## Korzystanie z formularza rejestracyjnego:

To standardowy proces rejestracji. Tworzysz stronę rejestracyjną z **formularzem zamówienia** i to właśnie tam Twoi klienci będą się rejestrować w sieci i wybierać plan subskrypcji. Możesz mieć wiele stron rejestracyjnych, każdą z innym formularzem rejestracyjnym.

Domyślna strona rejestracji to [_**twojadomena.com/register**_](http://yourdomain.com/register), ale możesz to zmienić w dowolnym momencie w **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Gdy użytkownik trafi na Twoją stronę rejestracyjną (zwykle klikając przycisk **Zaloguj się** lub **Kup teraz**), zobaczy tam formularz rejestracyjny.

![Formularz rejestracyjny wyświetlony na stronie rejestracji](/img/config/checkout-forms-list.png)

Wystarczy, że wypełni wszystkie wymagane pola — adres e-mail, nazwę użytkownika, hasło itp. — i opłaci plan lub potwierdzi adres e-mail, jeśli rejestruje się na darmowy plan albo plan płatny z okresem próbnym bez podawania danych płatniczych.

Na stronie „Dziękujemy" użytkownik zobaczy komunikat informujący, czy musi potwierdzić adres e-mail, czy jego strona jest już aktywna i może z niej korzystać.

![Strona „Dziękujemy" po rejestracji](/img/config/checkout-form-editor.png)

Jeśli wymagane jest potwierdzenie adresu e-mail, użytkownik musi przejść do swojej skrzynki pocztowej i kliknąć link weryfikacyjny. Strona nie zostanie aktywowana, dopóki adres e-mail nie zostanie zweryfikowany.

Jeśli użytkownik zarejestrował się na plan płatny lub weryfikacja e-mail nie jest obowiązkowa w Twojej sieci, jego strona zostanie aktywowana od razu po zakończeniu procesu zakupu i wyświetli się link do zalogowania się do panelu.

![Strona aktywowana z linkiem do zalogowania się do panelu](/img/config/checkout-form-editor.png)

## Korzystanie z linku do udostępnienia:

Proces rejestracji za pomocą linku do udostępnienia jest praktycznie taki sam jak przy użyciu formularza rejestracyjnego. Jedyna różnica polega na tym, że dzięki linkowi do udostępnienia Twoi klienci mogą mieć wcześniej wybrany produkt lub szablon strony w formularzu zamówienia (zobacz sekcję „Wstępny wybór produktów i szablonów przez parametry URL") lub dodany kod rabatowy (zobacz sekcję „Używanie parametrów URL").

Sam proces rejestracji będzie taki sam: użytkownicy będą musieli podać imię i nazwisko, nazwę użytkownika, adres e-mail, nazwę i tytuł strony itp., ale plan lub szablon strony będzie już dla nich wybrany.

### Rejestracja z płatnościami ręcznymi:

Jeśli nie chcesz korzystać z PayPal, Stripe ani żadnej innej bramki płatności oferowanej przez Ultimate Multisite lub jego integracje, możesz używać płatności ręcznych. W ten sposób możesz wygenerować fakturę dla klientów do opłacenia w preferowanym przez Ciebie systemie płatności po ich rejestracji w sieci.

Proces rejestracji będzie dokładnie taki sam jak powyżej, ale na stronie rejestracyjnej Twoi klienci zobaczą komunikat informujący, że otrzymają e-mail z dalszymi instrukcjami dotyczącymi realizacji płatności.

![Komunikat o płatności ręcznej podczas rejestracji](/img/config/settings-payment-gateways.png)

Po zakończeniu rejestracji zobaczą instrukcje płatności, które ustawiłeś (otrzymają je również na e-mail).

![Instrukcje płatności wyświetlone po rejestracji](/img/config/settings-payment-gateways.png)

Instrukcje płatności możesz zmienić w **Ultimate Multisite > Settings > Payments** po włączeniu opcji płatności **Manual**:

![Przełącznik płatności ręcznej z polem instrukcji płatności](/img/config/settings-payment-gateways.png)

Po dokonaniu płatności ręcznej przez klienta i przesłaniu Ci potwierdzenia, musisz **ręcznie potwierdzić płatność**, aby aktywować członkostwo i stronę klienta.

Aby to zrobić, przejdź do **Ultimate Multisite > Payments** i znajdź płatność klienta. Powinna nadal mieć status **Pending**.

![Lista płatności z oczekującą płatnością ręczną](/img/admin/payments-list.png)

Kliknij numer płatności, a będziesz mógł zmienić jej status na **Completed**.

![Strona szczegółów płatności](/img/admin/payments-list.png)

![Zmiana statusu płatności na Completed](/img/admin/payments-list.png)

Po zmianie statusu na **Completed** powinieneś zobaczyć komunikat **Activate membership**. Włącz tę opcję, aby aktywować członkostwo i stronę powiązaną z tym klientem. Następnie kliknij **Save Payment**.

![Przełącznik aktywacji członkostwa i przycisk Save Payment](/img/admin/payments-list.png)

Twój klient powinien teraz mieć dostęp do panelu i wszystkich funkcji, które wykupił w ramach subskrypcji.
