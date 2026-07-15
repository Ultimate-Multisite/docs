---
title: Otrzymywanie płatności
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Otrzymywanie płatności (v2)

_**WAŻNA UWAGA: Ten artykuł odnosi się do Ultimate Multisite w wersji 2.x.**_

Ultimate Multisite ma wbudowany system członkostwa i rozliczeń. Aby nasz system rozliczeń działał, zintegrowaliśmy najpopularniejsze bramki płatności używane w e-commerce. Domyślne bramki płatności w Ultimate Multisite to _Stripe_ , _PayPal_ oraz płatność ręczna. Możesz także używać _WooCommerce_ , _GoCardless_ i _Payfast_ do otrzymywania płatności, instalując odpowiednie add-ons.

## Podstawowe ustawienia {#basic-settings}

Możesz skonfigurować dowolną z tych bramek płatności w ustawieniach płatności Ultimate Multisite. Znajdziesz je, przechodząc do **Ultimate Multisite menu > Settings > Payments.**

![Strona ustawień płatności w Ultimate Multisite pokazująca panel płatności](/img/config/payments-settings-page.png)

Zanim skonfigurujesz swoją bramkę płatności, zapoznaj się z podstawowymi ustawieniami płatności, które możesz skonfigurować:

**Wymuś automatyczne odno** **wienie:** Dzięki temu płatność będzie automatycznie odnawiana na koniec każdego cyklu rozliczeniowego, w zależności od częstotliwości rozliczeń wybranej przez użytkownika.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 sprawdza, czy aktywna bramka ma wielokrotnego użytku poświadczenie odnowienia przed zapisaniem cyklicznego członkostwa z włączonym automatycznym odnowieniem. Poświadczeniem odnowienia może być subskrypcja bramki, umowa rozliczeniowa, zapisany token vault lub równoważna metoda płatności wielokrotnego użytku. Jeśli bramka zgłosi, że nie istnieje żadne użyteczne poświadczenie, Ultimate Multisite zapisuje członkostwo, ale wyłącza automatyczne odnowienie i rejestruje stan brakującego poświadczenia, aby administrator lub proces wsparcia mógł poprosić klienta o ponowną autoryzację płatności przed datą odnowienia.

Zapobiega to sytuacji, w której członkostwo wygląda na odnawiane automatycznie, gdy bramka może pobierać tylko płatności jednorazowe. Add-ons bramek powinny potwierdzać, że cykliczne realizacje zakupu zapisują poświadczenie wielokrotnego użytku, szczególnie gdy bramka obsługuje zarówno jednorazowe pobranie, jak i tryby płatności vault/subscription.

**Zezwalaj na okresy próbne bez metody** **płatności:** Po włączeniu tej opcji Twój klient nie będzie musiał dodawać żadnych informacji finansowych podczas procesu rejestracji. Będzie to wymagane dopiero po wygaśnięciu okresu próbnego.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Wyślij fakturę po potwierdzeniu płatności:** Daje to możliwość zdecydowania, czy wysłać fakturę po płatności. Pamiętaj, że użytkownicy będą mieć dostęp do swojej historii płatności w Dashboardzie swojej podwitryny. Ta opcja nie dotyczy bramki ręcznej.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Schemat numerowania faktur:** Tutaj możesz wybrać kod referencyjny płatności albo schemat numerów sekwencyjnych. Jeśli zdecydujesz się używać kodu referencyjnego płatności dla swoich faktur, nie musisz niczego konfigurować. Jeśli zdecydujesz się używać schematu numerów sekwencyjnych, musisz skonfigurować **następny numer faktury** (ten numer zostanie użyty jako numer faktury dla następnej faktury wygenerowanej w systemie. Jest zwiększany o jeden za każdym razem, gdy tworzona jest nowa faktura. Możesz go zmienić i zapisać, aby zresetować sekwencyjny numer faktury do określonej wartości) oraz **prefiks numeru faktury.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Gdzie znaleźć bramki: {#where-to-find-the-gateways}

Możesz skonfigurować bramki płatności na tej samej stronie ( **Ultimate Multisite > Settings > Payments**). Tuż pod **aktywnymi bramkami płatności** zobaczysz: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ i _Manual_.

![Sekcja aktywnych bramek płatności z listą Stripe, Stripe Checkout, PayPal i Manual](/img/config/payments-active-gateways.png)

Mamy osobny artykuł dla każdej bramki płatności, który przeprowadzi Cię przez kroki jej konfiguracji; znajdziesz je pod poniższymi linkami.

Możesz wyświetlać i edytować szczegóły płatności:

![Interfejs edycji płatności](/img/admin/payment-edit.png)

Oto pełny widok strony edycji płatności:

![Pełny interfejs edycji płatności](/img/admin/payment-edit-full.png)

Oto także pełny widok ustawień bramek płatności:

![Pełna strona ustawień bramek płatności](/img/config/settings-payments-gateways-full.png)

**Konfigurowanie bramki Stripe**

**Konfigurowanie bramki PayPal**** **

**Konfigurowanie płatności ręcznych**

Teraz, jeśli chcesz używać _WooCommerce_ , _GoCardless_ lub _Payfast_ jako swojej bramki płatności, musisz **zainstalować i skonfigurować ich add-ons**.

### Jak zainstalować add-on WooCommerce: {#how-to-install-the-woocommerce-add-on}

Rozumiemy, że _Stripe_ i _PayPal_ nie są dostępne w niektórych krajach, co ogranicza lub utrudnia użytkownikom Ultimate Multisite skuteczne korzystanie z naszego pluginu. Dlatego stworzyliśmy add-on integrujący _WooCommerce,_ który jest bardzo popularnym pluginem e-commerce. Programiści na całym świecie stworzyli add-ons integrujące z nim różne bramki płatności. Wykorzystaliśmy to, aby rozszerzyć bramki płatności, których możesz używać z systemem rozliczeń Ultimate Multisite.

_**WAŻNE:** Ultimate Multisite: WooCommerce Integration wymaga, aby WooCommerce był aktywowany przynajmniej na Twojej głównej witrynie._

Najpierw przejdź do strony add-ons. Znajdziesz ją, przechodząc do **Ultimate Multisite > Settings**. Powinna być widoczna tabela **Add-ons**. Kliknij **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Po kliknięciu **Check our Add-ons** zostaniesz przekierowany na stronę add-ons. Tutaj znajdziesz wszystkie add-ons Ultimate Multisite. Kliknij add-on **Ultimate Multisite: WooCommerce Integration**.

![Strona add-ons z listą add-ons Ultimate Multisite, w tym WooCommerce Integration](/img/addons/addons-page.png)

Pojawi się okno ze szczegółami dodatku. Po prostu kliknij **Zainstaluj teraz**.

<!-- Zrzut ekranu niedostępny: okno dialogowe szczegółów dodatku Ultimate Multisite WooCommerce Integration z przyciskiem Zainstaluj teraz -->

Po zakończeniu instalacji nastąpi przekierowanie na stronę wtyczek. Tutaj po prostu kliknij **Włącz w sieci**, a dodatek WooCommerce zostanie włączony w Twojej sieci.

<!-- Zrzut ekranu niedostępny: strona wtyczek z linkiem Włącz w sieci dla dodatku WooCommerce Integration -->

Po jego włączeniu, jeśli nadal nie masz zainstalowanej i włączonej wtyczki WooCommerce na swojej witrynie, otrzymasz przypomnienie.

<!-- Zrzut ekranu niedostępny: powiadomienie administratora przypominające o zainstalowaniu i włączeniu wtyczki WooCommerce -->

Aby przeczytać więcej o dodatku WooCommerce Integration, **kliknij tutaj**.

### Jak zainstalować dodatek GoCardless: {#how-to-install-the-gocardless-add-on}

Kroki instalacji dodatku _GoCardless_ są prawie takie same jak w przypadku dodatku _WooCommerce_. Przejdź na stronę dodatków i wybierz dodatek **Ultimate Multisite: GoCardless Gateway**.

<!-- Zrzut ekranu niedostępny: strona dodatków z wyróżnionym dodatkiem Ultimate Multisite GoCardless Gateway -->

Pojawi się okno dodatku. Kliknij **Zainstaluj teraz**.

<!-- Zrzut ekranu niedostępny: okno dialogowe szczegółów dodatku Ultimate Multisite GoCardless Gateway z przyciskiem Zainstaluj teraz -->

Po zakończeniu instalacji nastąpi przekierowanie na stronę wtyczek. Tutaj po prostu kliknij **Włącz w sieci**, a dodatek _GoCardless_ zostanie włączony w Twojej sieci.

<!-- Zrzut ekranu niedostępny: strona wtyczek z linkiem Włącz w sieci dla dodatku GoCardless Gateway -->

Aby dowiedzieć się, jak rozpocząć korzystanie z bramki _GoCardless_, **przeczytaj ten artykuł**.

### Jak zainstalować dodatek Payfast: {#how-to-install-the-payfast-add-on}

Przejdź na stronę dodatków i wybierz dodatek **Ultimate Multisite: Payfast Gateway**.

<!-- Zrzut ekranu niedostępny: strona dodatków z wyróżnionym dodatkiem Ultimate Multisite Payfast Gateway -->

Pojawi się okno dodatku. Kliknij **Zainstaluj teraz.**

<!-- Zrzut ekranu niedostępny: okno dialogowe szczegółów dodatku Ultimate Multisite Payfast Gateway z przyciskiem Zainstaluj teraz -->

Po zakończeniu instalacji nastąpi przekierowanie na stronę wtyczek. Tutaj po prostu kliknij **Włącz w sieci**, a dodatek _Payfast_ zostanie włączony w Twojej sieci.

<!-- Zrzut ekranu niedostępny: strona wtyczek z linkiem Włącz w sieci dla dodatku Payfast Gateway -->
