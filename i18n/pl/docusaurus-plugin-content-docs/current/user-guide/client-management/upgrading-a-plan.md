---
title: Ulepszanie planu
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Zmiana planu na wyższy (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Twoi klienci mogą zmienić swoje plany na wyższe w dowolnym momencie. Mogą zmienić plan na inny albo kupić dowolne dodatkowe usługi lub pakiety, które oferujesz w swojej sieci.

W tym poradniku omówimy, jak mogą zmienić swój plan na wyższy i co dzieje się po procesie zmiany.

Aby zmienić swój plan na wyższy, Twoi klienci powinni przejść do swojego Dashboard i otworzyć stronę **Account**.

![Dashboard podwitryny klienta z widocznym linkiem menu Account](/img/account-page/account-menu.png)

Na stronie Account zobaczą swoje bieżące członkostwo oraz powiązany z nim plan. Aby zmienić plan na inny, muszą kliknąć **Change** w prawym górnym rogu sekcji **Your Membership**.

![Strona Account z kartą Your Membership i przyciskiem Change](/img/account-page/membership-change-button.png)

Zostaną przekierowani do formularza checkout, w którym zostaną wyświetlone wszystkie dostępne plany.

Będą również mogli zobaczyć **usługi i pakiety dostępne dla ich bieżącego planu**, na wypadek gdyby chcieli kupić tylko konkretną usługę lub pakiet (np. nieograniczone wizyty albo miejsce na dysku w naszym przykładzie), a nie zmieniać planu na wyższy.

![Selektor zmiany na wyższy plan pokazujący dostępne plany i pakiety po stronie klienta](/img/account-page/upgrade-picker.png)

Po wybraniu produktu, który chcą kupić, zobaczą, ile muszą zapłacić teraz — bez uwzględniania istniejącego kredytu — oraz ile zostanie im naliczone w następnym terminie rozliczenia.

Zazwyczaj, jeśli produkt jest innym planem, a płatność ma zostać dokonana między opłatami za członkostwo, otrzymają kredyt za kwotę zapłaconą w pierwszym planie.

![Podsumowanie płatności za zmianę na wyższy plan pokazujące zastosowany kredyt i kwotę następnego rozliczenia](/img/account-page/upgrade-summary.png)

Jeśli wybiorą plan lub pakiet, który nie zmieni niczego w bieżącej subskrypcji, zobaczą komunikat wyjaśniający tę sytuację.

![Powiadomienie, gdy wybrany plan nie zmienia subskrypcji](/img/account-page/upgrade-no-change.png)

Po zakończeniu checkout nowy produkt/nowe produkty zostaną dodane do konta Twoich klientów, a wszystkie limity lub funkcje nowego produktu/nowych produktów zostaną natychmiast do niego dodane: wizyty, miejsce na dysku, wpisy itd...

##

##

## Ścieżki zmiany na wyższy i niższy plan {#upgrade-and-downgrade-paths}

W każdym z Twoich produktów znajdziesz kartę **Up & Downgrades**. Pierwsza opcja na tej karcie to pole o nazwie **Plan Group**.

**Grupy planów** pozwalają poinformować Ultimate Multisite, że określone plany należą do tej samej „rodziny”, a więc powinny być używane do tworzenia opcji ścieżek zmiany na wyższy/niższy plan.

![Edycja produktu, karta Up and Downgrades z polem Plan Group](/img/config/product-upgrades-plan-group.png)

Na przykład masz dostępne: **Free plan**, **Basic Plan** i **Premium Plan**. Chcesz, aby użytkownicy subskrybujący **Free Plan** mogli zmienić plan tylko na **Premium Plan** i nie chcesz, aby widzieli „Basic Plan” jako opcję zmiany na wyższy plan. Wystarczy przypisać tę samą nazwę grupy planów zarówno dla planów Free, jak i Premium, jak pokazano na zrzutach ekranu poniżej.

![Strona produktu Free Plan z przypisaną grupą planów High End](/img/config/product-upgrades-free.png)

![Strona produktu Premium Plan z przypisaną grupą planów High End](/img/config/product-upgrades-premium.png)

Powinno to poinformować Ultimate Multisite, że w sieci istnieje „rodzina” planów o nazwie **High End**. Przy oferowaniu zmian na wyższy lub niższy plan jako opcja dla użytkownika będą prezentowane tylko plany z tej samej rodziny.
