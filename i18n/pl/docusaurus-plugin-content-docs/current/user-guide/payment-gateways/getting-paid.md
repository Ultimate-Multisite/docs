---
title: Otrzymywanie płatności
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Odbieranie płatności (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Ultimate Multisite posiada wbudowany system członkostwa i rozliczeń. Aby nasz system rozliczeń działał prawidłowo, zintegrowaliśmy najczęściej używane bramki płatności w e-commerce. Domyślne bramki płatności w Ultimate Multisite to _Stripe_, _PayPal_ oraz Płatność ręczna. Możesz także korzystać z _WooCommerce_, _GoCardless_ i _Payfast_ do odbierania płatności, instalując odpowiednie dodatki.

## Podstawowe ustawienia

Każdą z tych bramek płatności możesz skonfigurować w ustawieniach płatności Ultimate Multisite. Znajdziesz je, przechodząc do **menu Ultimate Multisite > Ustawienia > Płatności.**

![Strona ustawień płatności w Ultimate Multisite](/img/config/settings-payment-gateways.png)

Zanim skonfigurujesz bramkę płatności, zapoznaj się z podstawowymi ustawieniami płatności:

**Wymuś automatyczne odnawianie:** Ta opcja zapewnia, że płatność będzie automatycznie powtarzana na końcu każdego cyklu rozliczeniowego, w zależności od częstotliwości rozliczeń wybranej przez użytkownika.

![Przełącznik wymuszania automatycznego odnawiania](/img/config/settings-payment-gateways.png)

**Zezwalaj na okres próbny bez metody płatności:** Po włączeniu tej opcji Twój klient nie będzie musiał podawać żadnych danych finansowych podczas procesu rejestracji. Będzie to wymagane dopiero po zakończeniu okresu próbnego.

![Przełącznik zezwalania na okres próbny bez metody płatności](/img/config/settings-payment-gateways.png)

**Wyślij fakturę po potwierdzeniu płatności:** Ta opcja pozwala zdecydować, czy wysyłać fakturę po dokonaniu płatności. Pamiętaj, że użytkownicy mają dostęp do historii płatności w panelu swojej podstrony. Ta opcja nie dotyczy bramki ręcznej.

![Przełącznik wysyłania faktury po potwierdzeniu płatności](/img/config/settings-payment-gateways.png)

**Schemat numeracji faktur:** Tutaj możesz wybrać kod referencyjny płatności lub schemat numeracji sekwencyjnej. Jeśli wybierzesz kod referencyjny płatności dla swoich faktur, nie musisz niczego konfigurować. Jeśli wybierzesz schemat numeracji sekwencyjnej, musisz skonfigurować **następny numer faktury** (ten numer zostanie użyty jako numer następnej faktury wygenerowanej w systemie. Jest zwiększany o jeden za każdym razem, gdy tworzona jest nowa faktura. Możesz go zmienić i zapisać, aby zresetować numer sekwencyjny faktury do określonej wartości) oraz **prefiks numeru faktury.**

![Wybór schematu numeracji faktur](/img/config/settings-payment-gateways.png)

![Ustawienia numeru sekwencyjnego i prefiksu faktury](/img/config/settings-payment-gateways.png)

## Gdzie znaleźć bramki płatności:

Bramki płatności możesz skonfigurować na tej samej stronie (**Ultimate Multisite > Ustawienia > Płatności**). Tuż pod **aktywnymi bramkami płatności** zobaczysz: _Stripe_, _Stripe Checkout_, _PayPal_ i _Ręczna_.

![Lista aktywnych bramek płatności](/img/config/settings-payment-gateways.png)

Dla każdej bramki płatności przygotowaliśmy dedykowany artykuł, który przeprowadzi Cię przez proces konfiguracji. Znajdziesz je pod poniższymi linkami.

**Konfiguracja bramki Stripe**

**Konfiguracja bramki PayPal**

**Konfiguracja płatności ręcznych**

Jeśli chcesz używać _WooCommerce_, _GoCardless_ lub _Payfast_ jako bramki płatności, musisz **zainstalować i skonfigurować odpowiednie dodatki**.

### Jak zainstalować dodatek WooCommerce:

Rozumiemy, że _Stripe_ i _PayPal_ nie są dostępne w niektórych krajach, co ogranicza lub utrudnia użytkownikom Ultimate Multisite efektywne korzystanie z naszej wtyczki. Dlatego stworzyliśmy dodatek integrujący _WooCommerce_ — bardzo popularną wtyczkę e-commerce. Programiści z całego świata stworzyli dodatki integrujące różne bramki płatności z WooCommerce. Wykorzystaliśmy to, aby rozszerzyć liczbę bramek płatności, których możesz używać z systemem rozliczeń Ultimate Multisite.

_**WAŻNE:** Ultimate Multisite: WooCommerce Integration wymaga aktywacji WooCommerce przynajmniej na Twojej głównej stronie._

Najpierw przejdź do strony dodatków. Znajdziesz ją, przechodząc do **Ultimate Multisite > Ustawienia**. Powinieneś zobaczyć tabelę **Dodatki**. Kliknij **Sprawdź nasze dodatki**.

![Strona ustawień z sekcją dodatków](/img/config/settings-general.png)

Po kliknięciu **Sprawdź nasze dodatki** zostaniesz przekierowany na stronę dodatków. Tutaj znajdziesz wszystkie dodatki Ultimate Multisite. Kliknij dodatek **Ultimate Multisite: WooCommerce Integration**.

![Strona dodatków z listą dostępnych dodatków](/img/config/settings-general.png)

Pojawi się okno ze szczegółami dodatku. Po prostu kliknij **Zainstaluj teraz**.

![Okno instalacji dodatku WooCommerce](/img/config/settings-general.png)

Po zakończeniu instalacji zostaniesz przekierowany na stronę wtyczek. Tutaj kliknij **Aktywuj w sieci**, a dodatek WooCommerce zostanie aktywowany w Twojej sieci.

![Aktywacja dodatku WooCommerce w sieci](/img/config/settings-general.png)

Po aktywacji, jeśli nie masz jeszcze zainstalowanej i aktywowanej wtyczki WooCommerce na swojej stronie, otrzymasz przypomnienie.

![Powiadomienie o konieczności aktywacji WooCommerce](/img/config/settings-general.png)

Aby dowiedzieć się więcej o dodatku WooCommerce Integration, **kliknij tutaj**.

### Jak zainstalować dodatek GoCardless:

Kroki instalacji dodatku _GoCardless_ są praktycznie takie same jak w przypadku dodatku _WooCommerce_. Przejdź na stronę dodatków i wybierz dodatek **Ultimate Multisite: GoCardless Gateway**.

![Strona dodatków z listą dostępnych dodatków](/img/config/settings-general.png)

Pojawi się okno dodatku. Kliknij **Zainstaluj teraz**.

![Okno instalacji dodatku GoCardless](/img/config/settings-general.png)

Po zakończeniu instalacji zostaniesz przekierowany na stronę wtyczek. Tutaj kliknij **Aktywuj w sieci**, a dodatek _GoCardless_ zostanie aktywowany w Twojej sieci.

![Aktywacja dodatku GoCardless w sieci](/img/config/settings-general.png)

Aby dowiedzieć się, jak rozpocząć pracę z bramką _GoCardless_, **przeczytaj ten artykuł**.

### Jak zainstalować dodatek Payfast:

Przejdź na stronę dodatków i wybierz dodatek **Ultimate Multisite: Payfast Gateway**.

![Strona dodatków z listą dostępnych dodatków](/img/config/settings-general.png)

Pojawi się okno dodatku. Kliknij **Zainstaluj teraz.**

![Okno instalacji dodatku Payfast](/img/config/settings-general.png)

Po zakończeniu instalacji zostaniesz przekierowany na stronę wtyczek. Tutaj kliknij **Aktywuj w sieci**, a dodatek _Payfast_ zostanie aktywowany w Twojej sieci.

![Aktywacja dodatku Payfast w sieci](/img/config/settings-general.png)
