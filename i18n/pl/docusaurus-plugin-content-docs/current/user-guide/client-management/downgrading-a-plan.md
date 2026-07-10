---
title: Obniżanie planu
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Obniżanie planu (v2) {#downgrading-a-plan-v2}

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Obniżenie planu lub subskrypcji to częsta czynność, którą Twoi klienci mogą wykonać, jeśli mają ograniczony budżet albo uznali, że nie będą potrzebować wielu zasobów do prowadzenia swojej subwitryny.

## Jak obniżyć plan {#how-to-downgrade-a-plan}

Twoi klienci mogą obniżyć swój plan w dowolnym momencie, logując się do panelu administracyjnego swojej subwitryny i klikając **Zmień** na stronie swojego Account.

![Strona Account klienta z kartą Twoje członkostwo i przyciskiem Zmień](/img/account-page/membership-change-button.png)

Po kliknięciu przycisku **Zmień** użytkownik/klient zostanie przekierowany na stronę checkout, gdzie może wybrać plan, na który chce zmienić swoją subskrypcję.

![Strona opcji obniżenia planu po stronie klienta](/img/account-page/downgrade-picker.png)

W tym przykładzie obniżamy plan z **Premium** do **Free**.

Aby kontynuować, użytkownik musi po prostu kliknąć przycisk **Complete Checkout**. Następnie zostanie przeniesiony z powrotem na stronę Account, gdzie wyświetli się komunikat o oczekującej zmianie membership. Zmiany wejdą w życie w **następnym cyklu rozliczeniowym** klienta.

![Strona Account z banerem oczekującej zmiany membership](/img/account-page/pending-change.png)

### Co się dzieje, gdy użytkownik obniża swój plan {#what-happens-when-a-user-downgrades-their-plan}

Warto zauważyć, że obniżenie planu nie zmienia istniejącej konfiguracji w subwitrynie użytkownika.

Nie zmienia automatycznie szablonu witryny, ponieważ zmiana szablonu witryny całkowicie wymazałaby i zresetowała subwitrynę. Ma to zapobiec niepotrzebnej utracie danych. Zatem miejsce na dysku, motywy, wtyczki itd. pozostaną nienaruszone, z wyjątkiem wpisów.

Rozumiemy, że Twoją główną obawą byłyby limity i kwoty ustawione w ramach każdego planu, ale musimy brać pod uwagę szkody, jakie usunięcie lub zmiana jakiejkolwiek konfiguracji mogłyby wyrządzić subwitrynie użytkownika.

Dla wpisów przekraczających limit ustawiony w planie masz 3 różne opcje: **Zachowaj wpisy bez zmian** *,* **Przenieś wpisy do kosza** *,* lub **Przenieś wpisy do szkicu** *.* Możesz to skonfigurować w ustawieniach Ultimate Multisite.

![Strona Witryny w ustawieniach Network Admin pokazująca opcje zachowania po przekroczeniu limitu wpisów](/img/account-page/settings-sites-post-limit.png)

### Co dzieje się z płatnością {#what-happens-to-the-payment}

W wersji 2.0 nie wymaga to już żadnych korekt płatności w zakresie proporcjonalnego rozliczenia.

Dzieje się tak, ponieważ system poczeka, aż istniejące membership **zakończy swój cykl rozliczeniowy, zanim** nowy plan/membership wejdzie w życie. Nowa kwota rozliczenia za nowe membership zostanie automatycznie zastosowana i pobrana w następnym cyklu rozliczeniowym.
