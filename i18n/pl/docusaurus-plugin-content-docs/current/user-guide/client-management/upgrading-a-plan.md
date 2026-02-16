---
title: Aktualizacja Planu
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Zmiana planu na wyższy (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Twoi klienci mogą w dowolnym momencie zmienić plan na wyższy. Mogą przejść na inny plan lub dokupić dodatkowe usługi czy pakiety, które oferujesz w swojej sieci.

W tym poradniku omówimy, jak klienci mogą zmienić swój plan na wyższy i co dzieje się po zakończeniu tego procesu.

Aby zmienić plan na wyższy, klient powinien zalogować się do swojego panelu i przejść do strony **Konto**.

![Panel klienta z linkiem do strony Konto](/img/admin/memberships-list.png)

Na stronie Konto wyświetli się aktualne członkostwo klienta wraz z przypisanym planem. Aby przejść na inny plan, należy kliknąć **Zmień** w prawym górnym rogu sekcji **Twoje Członkostwo**.

![Sekcja Twoje Członkostwo z przyciskiem Zmień](/img/admin/memberships-list.png)

Klient zostanie przekierowany do formularza zamówienia, w którym wyświetlą się wszystkie dostępne plany.

Zobaczy również **usługi i pakiety dostępne dla aktualnego planu** – na wypadek, gdyby chciał dokupić tylko konkretną usługę lub pakiet (np. nieograniczoną liczbę odwiedzin czy przestrzeń dyskową, jak w naszym przykładzie), a nie zmieniać samego planu.

![Formularz zamówienia z dostępnymi planami i pakietami](/img/admin/memberships-list.png)

Po wybraniu produktu do zakupu klient zobaczy, ile musi zapłacić teraz – bez uwzględnienia istniejącego kredytu – oraz ile zostanie pobrane w następnym terminie rozliczeniowym.

Zazwyczaj, jeśli wybrany produkt to inny plan, a płatność następuje między okresami rozliczeniowymi, klient otrzyma kredyt za kwotę zapłaconą w ramach pierwszego planu.

![Podsumowanie płatności przy zmianie planu z kredytem i kwotą następnego rozliczenia](/img/admin/memberships-list.png)

Jeśli klient wybierze plan lub pakiet, który niczego nie zmieni w obecnej subskrypcji, wyświetli się odpowiedni komunikat z wyjaśnieniem.

![Komunikat gdy wybrany plan nie zmienia subskrypcji](/img/admin/memberships-list.png)

Po zakończeniu zamówienia nowe produkty zostaną dodane do konta klienta, a wszystkie limity i funkcje nowych produktów zaczną obowiązywać natychmiast: odwiedziny, przestrzeń dyskowa, wpisy itd.

## 

## 

## Ścieżki zmiany planu w górę i w dół

W każdym produkcie znajdziesz zakładkę **Zmiany planów**. Pierwszą opcją w tej zakładce jest pole **Grupa planów**.

**Grupy planów** pozwalają poinformować Ultimate Multisite, że określone plany należą do tej samej „rodziny" i powinny być wykorzystywane do tworzenia opcji zmiany planu w górę lub w dół.

![Zakładka Zmiany planów z polem Grupa planów](/img/config/product-upgrades.png)

Na przykład masz dostępne: **Plan Darmowy**, **Plan Podstawowy** i **Plan Premium**. Chcesz, aby użytkownicy z **Planem Darmowym** mogli przejść tylko na **Plan Premium** i nie widzieli „Planu Podstawowego" jako opcji zmiany. Wystarczy, że przypiszesz tę samą nazwę grupy planów do Planu Darmowego i Premium, jak pokazano na poniższych zrzutach ekranu.

![Plan Darmowy z przypisaną grupą planów High End](/img/config/product-upgrades.png)

![Plan Premium z przypisaną grupą planów High End](/img/config/product-upgrades.png)

Dzięki temu Ultimate Multisite będzie wiedzieć, że w sieci istnieje „rodzina" planów o nazwie **High End**. Przy oferowaniu zmian planu w górę lub w dół użytkownikowi zostaną przedstawione tylko plany z tej samej rodziny.
