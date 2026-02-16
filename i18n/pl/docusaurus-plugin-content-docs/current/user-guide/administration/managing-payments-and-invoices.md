---
title: Zarządzanie płatnościami i fakturami
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Zarządzanie płatnościami i fakturami

## Ustawienia płatności

Zanim zaczniesz otrzymywać płatności, musisz skonfigurować ustawienia związane z płatnościami. Przejdź do **Ultimate Multisite → Ustawienia** i kliknij zakładkę **Płatności**.

![Zakładka ustawień płatności](/img/admin/settings-payments-top.png)

### Ogólne opcje płatności

W ustawieniach ogólnych możesz skonfigurować:

- **Waluta** — Domyślna waluta używana w transakcjach
- **Pozycja waluty** — Gdzie wyświetla się symbol waluty (przed kwotą lub po niej)

![Ustawienia bramek płatności](/img/admin/settings-payments-options.png)

### Bramki płatności

Ultimate Multisite obsługuje wiele bramek płatności. Każdą z nich możesz włączyć i skonfigurować w zakładce ustawień płatności.

![Konfiguracja bramki płatności](/img/admin/settings-payments-gateways.png)

Dostępne bramki to:

- **Stripe** — Płatności kartą kredytową przez Stripe
- **PayPal** — Płatności PayPal
- **Ręczna** — Do płatności offline lub niestandardowego przetwarzania płatności

Każda bramka ma własną sekcję konfiguracji, gdzie wprowadzasz klucze API i inne ustawienia.

![Dodatkowe ustawienia bramek](/img/admin/settings-payments-gateways-2.png)

### Tryb testowy

Możesz włączyć **Tryb testowy** (Sandbox), aby przetestować integrację płatności przed uruchomieniem na żywo. Gdy tryb testowy jest aktywny, nie będą pobierane żadne prawdziwe opłaty.

## Przeglądanie płatności

Przejdź do strony **Płatności** w sekcji Ultimate Multisite, aby zobaczyć wszystkie transakcje w całej sieci.

![Lista płatności](/img/admin/payments-list.png)

Możesz filtrować płatności według statusu (zrealizowane, oczekujące, nieudane, zwrócone) oraz wyszukiwać konkretne transakcje.

Kliknij płatność, aby zobaczyć jej pełne szczegóły, w tym pozycje, powiązane członkostwo, dane klienta oraz informacje o bramce płatności.

## Faktury

Ultimate Multisite może automatycznie generować faktury dla płatności. Szablon faktury i format numeracji możesz dostosować w ustawieniach płatności.

Opcje personalizacji faktur obejmują:

- **Nazwę i adres firmy** wyświetlane na fakturach
- **Format numeracji faktur** i sekwencję
- **Logo** wyświetlane w nagłówku faktury
- **Własny tekst stopki** na warunki, uwagi lub informacje prawne

Aby dostosować szablon faktury, przejdź do **Ultimate Multisite → Ustawienia → Płatności** i znajdź ustawienia związane z fakturami.
