---
title: Obniżenie Planu
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Obniżenie planu (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Obniżenie planu lub subskrypcji to częsta czynność wykonywana przez klientów, którzy mają ograniczony budżet lub zdecydowali, że nie będą potrzebować wielu zasobów do prowadzenia swojej podstrony.

## Jak obniżyć plan

Twoi klienci mogą obniżyć swój plan w dowolnym momencie, logując się do panelu administracyjnego swojej podstrony i klikając przycisk **Zmień** na stronie konta.

![Strona konta z przyciskiem Zmień pod sekcją członkostwa](/img/admin/memberships-list.png)

Po kliknięciu przycisku **Zmień** użytkownik/klient zostanie przekierowany na stronę płatności, gdzie może wybrać plan, na który chce zmienić swoją subskrypcję.

![Strona płatności pokazująca opcje planów do obniżenia](/img/admin/memberships-list.png)

W tym przykładzie obniżamy plan z **Premium** do **Free**.

Aby kontynuować, użytkownik musi tylko kliknąć przycisk **Complete Checkout**. Zostanie wtedy przekierowany z powrotem na stronę konta, gdzie zobaczy komunikat o oczekującej zmianie członkostwa. Zmiany wejdą w życie w **następnym cyklu rozliczeniowym** klienta.

![Strona konta pokazująca komunikat o oczekującej zmianie członkostwa](/img/admin/memberships-list.png)

### Co się dzieje, gdy użytkownik obniży plan

Warto wiedzieć, że obniżenie planu nie zmienia istniejącej konfiguracji podstrony użytkownika.

Nie powoduje automatycznej zmiany szablonu strony, ponieważ zmiana szablonu całkowicie wymazałaby i zresetowała podstronę. Ma to na celu uniknięcie niepotrzebnej utraty danych. Przestrzeń dyskowa, motywy, wtyczki itp. pozostają nienaruszone — z wyjątkiem wpisów.

Rozumiemy, że Twoim głównym zmartwieniem mogą być limity i przydziały ustawione dla każdego planu, ale musimy wziąć pod uwagę szkody, jakie mogłoby wyrządzić usunięcie lub zmiana konfiguracji podstrony użytkownika.

W przypadku wpisów przekraczających limit ustawiony w planie masz do wyboru 3 różne opcje: **Pozostaw wpisy bez zmian**, **Przenieś wpisy do kosza** lub **Przenieś wpisy do wersji roboczych**. Możesz to skonfigurować w ustawieniach Ultimate Multisite.

![Opcje przekroczenia limitu wpisów w ustawieniach Ultimate Multisite](/img/config/settings-sites.png)

### Co dzieje się z płatnością

W wersji 2.0 nie są już wymagane żadne korekty płatności związane z proporcjonalnym rozliczeniem.

Dzieje się tak, ponieważ system czeka, aż obecne członkostwo **zakończy swój cykl rozliczeniowy**, zanim nowy plan/członkostwo wejdzie w życie. Nowa kwota rozliczenia za nowe członkostwo zostanie automatycznie zastosowana i pobrana w następnym cyklu rozliczeniowym.
