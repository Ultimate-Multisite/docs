---
title: Tworzenie Kodów Rabatowych
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Tworzenie kodów rabatowych (wersja 2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Dzięki Ultimate Multisite możesz tworzyć kody rabatowe, aby oferować swoim klientom zniżki na subskrypcje. A ich tworzenie jest naprawdę proste!

## Tworzenie i edytowanie kodów rabatowych

Aby utworzyć lub edytować kod rabatowy, przejdź do **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Znajdziesz tam listę wszystkich kodów rabatowych, które już utworzyłeś.

Możesz kliknąć **Add Discount** **Code**, aby utworzyć nowy kupon, lub najechać kursorem na istniejący kod i kliknąć **Edit**, aby go edytować.

![Lista kodów rabatowych z opcjami po najechaniu kursorem](/img/config/discount-codes-list.png)

![Przycisk Add Discount Code](/img/config/discount-codes-list.png)

Zostaniesz przekierowany na stronę, gdzie możesz utworzyć lub edytować kod rabatowy. W tym przykładzie utworzymy nowy.

![Strona edycji kodu rabatowego](/img/config/discount-codes-list.png)

Przyjrzyjmy się dostępnym ustawieniom:

**Enter Discount Code:** To po prostu nazwa Twojego kodu rabatowego. Nie jest to kod, który klienci będą wpisywać w formularzu zamówienia.

**Description:** Tutaj możesz krótko opisać, do czego służy ten kupon.

![Pola nazwy i opisu kodu rabatowego](/img/config/discount-codes-list.png)

**Coupon code:** Tutaj określasz kod, który klienci będą musieli wpisać podczas składania zamówienia.

![Pole kodu kuponu](/img/config/discount-codes-list.png)

**Discount:** Tutaj możesz ustawić **wartość procentową** lub **stałą kwotę** zniżki dla swojego kodu rabatowego.

![Ustawienie rabatu procentowego lub kwotowego](/img/config/discount-codes-list.png)

**Apply to renewals:** Jeśli ta opcja jest wyłączona, kod rabatowy będzie stosowany tylko do **pierwszej płatności**. Wszystkie kolejne płatności nie będą objęte zniżką. Jeśli ta opcja jest włączona, kod rabatowy będzie obowiązywał przy wszystkich przyszłych płatnościach.

**Setup fee discount:** Jeśli ta opcja jest wyłączona, kod kuponu **nie obniży opłaty początkowej** zamówienia. Jeśli ta opcja jest włączona, możesz ustawić zniżkę (procentową lub kwotową), którą kupon zastosuje do opłaty początkowej Twoich planów.

![Opcje Apply to renewals i Setup fee discount](/img/config/discount-codes-list.png)

**Active:** Ręcznie aktywuj lub dezaktywuj ten kod rabatowy.

![Przełącznik aktywacji kodu rabatowego](/img/config/discount-codes-list.png)

W sekcji **Advanced Optio** **ns** znajdziesz następujące ustawienia:

**Limit uses:**

  * **Uses:** Tutaj możesz sprawdzić, ile razy kod rabatowy został już użyty.

  * **Max uses:** To ustawienie ogranicza liczbę użyć kodu rabatowego. Na przykład, jeśli wpiszesz 10, kupon będzie można wykorzystać tylko 10 razy. Po osiągnięciu tego limitu kod nie będzie już działał.

![Ustawienie limitu użyć z polami Uses i Max uses](/img/config/discount-codes-list.png)

**Start & expiration dates:** Tutaj możesz ustawić datę rozpoczęcia i/lub datę wygaśnięcia kuponu.

![Pola daty rozpoczęcia i wygaśnięcia](/img/config/discount-codes-list.png)

**Limit products:** Jeśli włączysz opcję **Select products**, wyświetlą się wszystkie Twoje produkty. Możesz ręcznie wybrać (włączając lub wyłączając), które produkty będą akceptować ten kod rabatowy. Produkty, które są tutaj wyłączone, nie zmienią ceny, nawet jeśli klienci spróbują użyć na nich tego kodu.

![Przełączniki wyboru produktów dla limitu](/img/config/discount-codes-list.png)

Po skonfigurowaniu wszystkich opcji kliknij **Save Discount Code**, aby zapisać kupon — i gotowe!

![Przycisk Save Discount Code](/img/config/discount-codes-list.png)

Kupon pojawi się na Twojej liście, skąd możesz go **edytować lub usunąć**.

![Kod rabatowy na liście z opcjami edycji i usunięcia](/img/config/discount-codes-list.png)

### 

### Używanie parametrów URL:

Jeśli chcesz dostosować swoje tabele cenowe lub stworzyć atrakcyjną stronę z kodami rabatowymi na swojej witrynie i automatycznie zastosować kod rabatowy w formularzu zamówienia, możesz to zrobić za pomocą parametrów URL.

Najpierw musisz pobrać link do udostępnienia dla swojego planu. Aby to zrobić, przejdź do **Ultimate Multisite > Products** i wybierz plan.

Kliknij przycisk **Click to Copy Shareable Link**. Otrzymasz link do udostępnienia tego konkretnego planu. W naszym przypadku link wyglądał tak: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Strona produktu z przyciskiem linku do udostępnienia](/img/config/products-list.png)

Aby zastosować kod rabatowy do tego konkretnego planu, po prostu dodaj parametr **?discount_code=XXX** do adresu URL, gdzie **XXX** to kod kuponu.

W naszym przykładzie zastosujemy kod rabatowy **50OFF** do tego konkretnego produktu.

Adres URL dla tego planu z zastosowanym kodem rabatowym 50OFF będzie wyglądał następująco: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
