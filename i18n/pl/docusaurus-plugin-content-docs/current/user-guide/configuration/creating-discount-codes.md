---
title: Tworzenie kodów rabatowych
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Tworzenie kodów rabatowych (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Dzięki Ultimate Multisite możesz tworzyć kody rabatowe, aby dawać swoim klientom rabaty na ich subskrypcje. A ich tworzenie jest proste!

## Tworzenie i edytowanie kodów rabatowych

Aby utworzyć lub edytować kod rabatowy, przejdź do **Ultimate Multisite > Kody rabatowe**.

![Lista kodów rabatowych — pusty stan przed utworzeniem jakichkolwiek kodów](/img/config/discount-codes-empty.png)

Tam znajdziesz listę kodów rabatowych, które już utworzyłeś.

Możesz kliknąć **Dodaj kod** **rabatowy**, aby utworzyć nowy kupon, albo edytować istniejące, najeżdżając na nie kursorem i klikając **Edytuj**.

![Lista kodów rabatowych z akcjami po najechaniu pokazującymi linki Edytuj i Usuń](/img/config/discount-codes-list-hover.png)

![Przycisk Dodaj kod rabatowy w nagłówku strony](/img/config/discount-codes-add-button.png)

Zostaniesz przekierowany na stronę, na której utworzysz lub edytujesz swój kod kuponu. W tym przykładzie utworzymy nowy.

![Strona edycji kodu rabatowego ze wszystkimi widocznymi sekcjami](/img/config/discount-code-edit.png)

Przyjrzyjmy się dostępnym tutaj ustawieniom:

**Wpisz kod rabatowy:** To po prostu nazwa Twojego kodu rabatowego. To nie jest kod, którego Twoi klienci będą musieli użyć w formularzu realizacji zakupu.

**Opis:** Tutaj możesz krótko opisać, do czego służy ten kupon.

![Pola nazwy i opisu kodu rabatowego u góry strony edycji](/img/config/discount-code-description.png)

Możesz także zobaczyć kod rabatowy jako aktywny lub nieaktywny:

![Aktywny status kodu rabatowego](/img/config/discount-code-active.png)

**Kod kuponu:** Tutaj definiujesz kod, który Twoi klienci będą musieli wpisać podczas realizacji zakupu.

![Pole kodu kuponu, w którym klienci wpisują kod podczas realizacji zakupu](/img/config/discount-code-coupon-field.png)

**Rabat:** Tutaj możesz ustawić dla swojego kodu rabatowego albo **procent**, albo **stałą kwotę** pieniędzy.

![Ustawienie kwoty rabatu z listą rozwijaną procentu lub stałej kwoty](/img/config/discount-code-amount.png)

**Zastosuj do odnowień:** Jeśli ta opcja jest wyłączona, ten kod rabatowy zostanie zastosowany tylko do **pierwszej płatności**. Wszystkie pozostałe płatności nie będą miały rabatu. Jeśli ta opcja jest włączona, kod rabatowy będzie ważny dla wszystkich przyszłych płatności.

**Rabat opłaty konfiguracyjnej:** Jeśli ta opcja jest wyłączona, kod kuponu **nie przyzna żadnego rabatu na opłatę konfiguracyjną** zamówienia. Jeśli ta opcja jest włączona, możesz ustawić rabat (procentowy lub o stałej kwocie), który ten kod kuponu zastosuje do opłaty konfiguracyjnej Twoich planów.

![Opcje przełączania zastosowania do odnowień i rabatu opłaty konfiguracyjnej](/img/config/discount-code-renewals.png)

**Aktywny:** Ręcznie aktywuj lub dezaktywuj ten kod kuponu.

![Przełącznik Aktywny do ręcznego włączania lub wyłączania kodu rabatowego](/img/config/discount-code-active.png)

W sekcji **Opcje zaawansowane** mamy następujące ustawienia:

![Opcje zaawansowane kodu rabatowego](/img/config/discount-code-advanced.png)

**Ogranicz użycia:**

  * **Użycia:** Tutaj możesz zobaczyć, ile razy kod rabatowy został użyty.

  * **Maksymalna liczba użyć:** To ograniczy liczbę razy, przez jaką użytkownicy mogą użyć tego kodu rabatowego. Na przykład, jeśli wpiszesz tutaj 10, kupon będzie można użyć tylko 10 razy. Po osiągnięciu tego limitu kodu kuponu nie będzie już można użyć.

![Ustawienie ograniczenia użyć z bieżącą liczbą użyć i polem maksymalnej liczby użyć](/img/config/discount-code-limit-uses.png)

**Daty rozpoczęcia i wygaśnięcia:** Tutaj będziesz mieć możliwość dodania daty rozpoczęcia i/lub daty wygaśnięcia do swojego kuponu.

![Pola daty rozpoczęcia i wygaśnięcia do planowania kodu rabatowego](/img/config/discount-code-dates.png)

**Ogranicz produkty:** Jeśli włączysz **Wybierz produkty**, zostaną Ci pokazane wszystkie Twoje produkty. Będziesz mieć możliwość ręcznego wybrania (przez włączanie lub wyłączanie), który produkt może akceptować ten kod kuponu. Produkty, które są tutaj wyłączone, nie pokażą żadnej zmiany, jeśli Twoi klienci spróbują użyć wobec nich tego kodu kuponu.

![Sekcja ograniczenia produktów z przełącznikami dla poszczególnych produktów](/img/config/discount-code-limit-products.png)

Po skonfigurowaniu wszystkich tych opcji kliknij **Zapisz kod rabatowy**, aby zapisać swój kupon — i gotowe!

![Przycisk Zapisz kod rabatowy u dołu strony edycji](/img/config/discount-code-save.png)

Kupon jest teraz na Twojej liście i stamtąd możesz kliknąć, aby go **edytować lub usunąć**.

![Wiersz kodu rabatowego na liście z akcjami Edytuj i Usuń po najechaniu](/img/config/discount-codes-list-hover.png)

###

### Używanie parametrów URL:

Jeśli chcesz dostosować swoje tabele cenowe albo zbudować ładną stronę z kodem kuponu dla swojej witryny i chcesz automatycznie zastosować kod rabatowy do formularza realizacji zakupu, możesz to zrobić za pomocą parametrów URL.

Najpierw musisz uzyskać link do udostępniania dla swojego planu. Aby to zrobić, przejdź do **Ultimate Multisite > Produkty** i wybierz plan.

Kliknij przycisk **Kliknij, aby skopiować link do udostępniania**. Otrzymasz link do udostępniania do tego konkretnego planu. W naszym przypadku podany link do udostępniania to [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Strona produktu z przyciskiem linku do udostępniania](/img/config/products-list.png)

Aby zastosować swój kod rabatowy do tego konkretnego planu, po prostu dodaj parametr **?discount_code=XXX** do URL. Gdzie **XXX** to kod kuponu.

W naszym przykładzie zastosujemy kod kuponu **50OFF** do tego konkretnego produktu.

URL dla tego konkretnego planu z zastosowanym kodem rabatowym 50OFF będzie wyglądał tak: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
