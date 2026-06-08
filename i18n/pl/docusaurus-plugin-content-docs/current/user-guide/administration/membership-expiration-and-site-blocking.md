---
title: Wygaśnięcie członkostwa i blokowanie strony
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Wygaśnięcie członkostwa i blokowanie strony

Ten przewodnik wyjaśnia, jak Ultimate Multisite obsługuje wygaśnięcie członkostwa, zakończenie okresów próbnych oraz blokowanie strony na froncie. Omówione zostaną cykl życia członkostwa – od aktywnego do wygaśniętego – ustawienia kontrolujące, czy strony są blokowane, oraz co sprawdzić, jeśli strony pozostają dostępne po wygaśnięciu członkostwa.

## Cykl życia statusu członkostwa

Każde członkostwo w Ultimate Multisite ma jeden ze statusów:

:::note Członkostwa darmowe są na czas nieokreślony
Członkostwa darmowe nie wygasają automatycznie. Ultimate Multisite traktuje je jako dostęp na czas nieokreślony, dlatego nie są uwzględniane w sprawdzeniach wygaśnięcia, chyba że administrator zmieni ich status lub przeniesie klienta do innego produktu.
:::

| Status | Znaczenie |
|---|---|
| **Pending** | Oczekuje na pierwszą płatność lub weryfikację e-mail |
| **Trialing** | Aktywny okres próbny, nie pobrano jeszcze opłaty |
| **Active** | Opłacone i aktualne |
| **On Hold** | Oczekuje na płatność odnowienia (wygenerowano fakturę, oczekuje na płatność) |
| **Expired** | Minął termin wygaśnięcia i okres łaski bez odnowienia |
| **Cancelled** | Wyraźnie anulowane przez klienta lub administratora |

### Jak członkostwa przechodzą w stan wygaśnięcia

Ultimate Multisite uruchamia **sprawdzenie w tle co godzinę**, które szuka członkostw, które powinny zostać oznaczone jako wygaśnione. Sprawdzenie to wykorzystuje [Action Scheduler](https://actionscheduler.org/) (nie bezpośrednio WP-Cron) i działa jako zaplanowana akcja `wu_membership_check`.

Sprawdzenie wygaśnięcia ma domyślnie **wbudowany okres łaski wynoszący 3 dni**. Członkostwo nie zostanie oznaczone jako `expired` dopóki nie minie 3 dni od jego `date_expiration`. Daje to klientom czas na uregulowanie zaległej płatności, zanim zmieni się ich status.

:::info
3-dniowy okres łaski wygaśnięcia jest oddzielny od ustawienia Okresu Łaski Blokowania Frontendu, opisanego poniżej. Okres łaski wygaśnięcia kontroluje, kiedy **status zmienia się** z aktywnego/wstrzymanego na wygaśnięty. Okres łaski blokowania frontendu kontroluje, kiedy **strona jest blokowana**, po tym jak status już się zmienił.
:::

#### Członkostwa z automatycznym odnawianiem vs. bez automatycznego odnawiania

To rozróżnienie jest kluczowe dla zrozumienia zachowania wygaśnięcia:

- **Członkostwa bez automatycznego odnawiania** (`auto_renew = false`): Godzinowy cron obsługuje cały cykl życia – tworzy płatności odnowienia, zmienia status członkostwa na wstrzymany, a ostatecznie oznacza je jako wygaśnione, jeśli nie zostanie otrzymana płatność.

- **Członkostwa z automatycznym odnawianiem** (`auto_renew = true`): Sprawdzenie wygaśnięcia cron **całkowicie je pomija**. Oczekuje się, że bramka płatnicza (Stripe, PayPal itp.) powiadomi Ultimate Multisite za pomocą webhooków, gdy subskrypcja ulegnie awarii lub zostanie anulowana. Jeśli webhook nie zostanie otrzymany – z powodu źle skonfigurowanego endpointu, awarii bramki płatniczej lub subskrypcji anulowanej poza systemem – członkostwo może pozostać `active` w nieskończoność, nawet po upływie daty wygaśnięcia.

### Jak kończą się okresy próbne

Kiedy okres próbny członkostwa dobiega końca, system:

1. Tworzy oczekującą płatność odnowienia na pełną kwotę subskrypcji
2. Zmienia status członkostwa z `trialing` na `on-hold`
3. Wysyła e-mail z powiadomieniem o płatności odnowienia do klienta

Ten proces działa w tym samym harmonogramie godzinowym co regularne sprawdzenie wygaśnięcia, ale **tylko dla członkostw bez automatycznego odnawiania**. W przypadku prób z automatycznym odnawianiem, bramka płatnicza obsługuje przejście z okresu próbnego na płatną subskrypcję.

## Blokowanie dostępu do frontendu

Domyślnie, gdy członkostwo wygaśnie lub zostanie wstrzymane, **ograniczony jest tylko dashboard wp-admin**. Publiczny frontend strony pozostaje dostępny dla odwiedzających. Aby również zablokować dostęp publiczny, należy włączyć ustawienie **Block Frontend Access**.

### Konfigurowanie ustawienia

Przejdź do **Ultimate Multisite > Settings > Memberships** i włącz **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Oto pełny widok strony ustawień członkostwa:

![Membership settings full page](/img/config/settings-membership-full.png)

Trzy powiązane ustawienia kontrolują to zachowanie:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Główny przełącznik. Gdy jest włączony, blokuje publiczny frontend stron sieciowych, gdy członkostwo nie jest już aktywne. | Off |
| **Frontend Block Grace Period** | Liczba dni oczekiwania po nieaktywności członkostwa przed zablokowaniem. Ustawienie na `0` blokuje natychmiast. | 0 |
| **Frontend Block Page** | Strona na głównej witrynie, do której przekierowuje odwiedzających, gdy strona jest zablokowana. Jeśli nie jest ustawiona, odwiedzający widzą ogólny komunikat „Site not available”. | None |

### Co widzą odwiedzający, gdy strona jest zablokowana

Gdy dostęp do frontendu jest zablokowany, odwiedzający stronę mogą:

1. **Zostać przekierowani** na stronę wybraną w **Frontend Block Page** (jeśli jest skonfigurowana), lub
2. **Zobaczyć domyślny komunikat**: „This site is not available at the moment.” z linkiem do strony logowania dla administratora strony.

Administratorzy stron nadal mogą się logować – strona logowania nigdy nie jest blokowana.

### Co i kiedy jest blokowane

Zachowanie blokowania zależy od statusu członkostwa:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (patrz uwaga poniżej) | -- |
| On Hold | Uważane za aktywne – nie blokowane | -- |
| Expired | **Yes**, jeśli Block Frontend Access jest włączony | Yes |
| Cancelled | **Yes**, zawsze (niezależnie od ustawień) | **No** -- blokowane natychmiast |
| Pending | Nie blokowane przez sprawdzenie członkostwa | -- |

:::warning Członkostwa próbne nie są blokowane
Nawet jeśli okres próbny się zakończył, członkostwo ze statusem `trialing` **nie** zostanie zablokowane na froncie. Najpierw okres próbny musi przejść do innego statusu (zazwyczaj `on-hold` za pomocą crona, a następnie `expired`, jeśli nie ma płatności). Jeśli widzisz członkostwa próbne, które nie przeszły statusu, sprawdź sekcję rozwiązywania problemów poniżej.
:::

:::note Członkostwa anulowane omijają okres łaski
Członkostwa anulowane są zawsze blokowane po upływie daty wygaśnięcia, niezależnie od tego, czy Block Frontend Access jest włączony. Okres łaski blokowania frontendu **nie** ma zastosowania do anulowanych członkostw.
:::

## Rozwiązywanie problemów: Strony pozostające dostępne po wygaśnięciu

Jeśli strony pozostają publicznie dostępne po wygaśnięciu członkostwa, przejdź przez następujące sprawdzenia po kolei:

### 1. Sprawdź, czy ustawienie Block Frontend Access jest włączone

Przejdź do **Ultimate Multisite > Settings > Memberships** i upewnij się, że przełącznik **Block Frontend Access** jest włączony. Ustawienie to jest **domyślnie wyłączone**, co oznacza, że gdy członkostwo staje się nieaktywne, ograniczony jest tylko wp-admin.

### 2. Sprawdź Okres Łaski Blokowania Frontendu

Na tej samej stronie ustawień sprawdź wartość **Frontend Block Grace Period**. Jeśli jest ustawione na 7 dni, na frontend nie zostanie zablokowane aż 7 dni po dacie wygaśnięcia członkostwa – nawet jeśli status członkostwa jest już `expired`.

Ustaw to na `0`, jeśli chcesz natychmiastowe blokowanie po nieaktywności członkostwa.

### 3. Potwierdź, że status członkostwa faktycznie się zmienił

Przejdź do **Ultimate Multisite > Memberships** i sprawdź status dotkniętego członkostwa. Jeśli nadal wyświetla `active` pomimo upływu daty wygaśnięcia, przejście statusu nie nastąpiło. Typowe przyczyny:

- **Członkostwo ma automatyczne odnawianie**: Sprawdź pole `auto_renew` na stronie edycji członkostwa. Jeśli automatyczne odnawianie jest włączone, cron wygaśnięcia pomija to członkostwo – polega na bramce płatniczej, aby zgłosiła niepowodzenie. Sprawdź dashboard bramki płatniczej (Stripe, PayPal), aby potwierdzić, że status subskrypcji zgadza się ze statusem wyświetlanym w Ultimate Multisite.

- **Cron nie uruchomił się**: Zobacz następny krok.

### 4. Sprawdź, czy Action Scheduler działa

Ultimate Multisite używa Action Scheduler do swoich zadań cron. Przejdź do **Tools > Scheduled Actions** w panelu administracyjnym sieci i poszukaj:

- **`wu_membership_check`** – Powinno pojawić się jako powtarzająca się akcja uruchamiana co godzinę. Jeśli jej brakuje, sprawdzenia członkostwa nie są planowane.
- **`wu_async_mark_membership_as_expired`** – To są pojedyncze zadania oznaczające konkretne członkostwa jako wygaśnione. Jeśli widzisz nieudane akcje, mogą zawierać komunikaty o błędach wyjaśniające, dlaczego tak się stało.

Jeśli widzisz zawieszone lub nieudane akcje, możesz mieć problem z Action Scheduler. Typowe przyczyny:

- **`DISABLE_WP_CRON` jest ustawione na `true`** w `wp-config.php` bez zastępczego crona na poziomie systemu
- **Niski ruch na stronie** – WP-Cron uruchamia się tylko wtedy, gdy ktoś odwiedza stronę

Aby zapewnić niezawodne wykonywanie crona, skonfiguruj zadanie cron na poziomie systemu:

```bash
# Uruchamiaj co 5 minut za pomocą wget
*/5 * * * * wget -q -O /dev/null "https://twoj-adres-sieci.com/wp-cron.php?doing_wp_cron"

# Lub za pomocą WP-CLI
*/5 * * * * cd /ścieżka/do/wordpress && wp cron event run --due-now --url=https://twoj-adres-sieci.com
```

### 5. Sprawdź problemy z webhookami bramki płatniczej (Członkostwa z automatycznym odnawianiem)

Jeśli członkostwo ma automatyczne odnawianie, a subskrypcja bramki została anulowana lub uległa awarii, ale Ultimate Multisite nadal wyświetla je jako `active`:

- **Stripe**: Przejdź do Dashboardu Stripe > Customers i sprawdź status subskrypcji. Następnie zweryfikuj, czy endpoint webhook jest aktywny w sekcji Developers > Webhooks. Endpoint powinien wskazywać na Twoją stronę i pokazywać udane dostawy.
- **PayPal**: Sprawdź status subskrypcji w swoim koncie biznesowym PayPal i zweryfikuj dostawę IPN/webhook.

Jeśli bramka pokazuje, że subskrypcja została anulowana, ale Ultimate Multisite nie, prawdopodobnie zgłoszenie webhook zostało utracone. Możesz ręcznie zmienić status członkostwa w **Ultimate Multisite > Memberships > [Edytuj Członkostwo]**.

### 6. Sprawdź Okres Łaski Wygaśnięcia (Poziom Cron)

Sprawdzenie cron ma własny okres łaski (domyślnie: 3 dni) przed oznaczeniem członkostwa jako wygaśnione. Jest to oddzielne od okresu łaski blokowania frontendu. Całkowity czas przed zablokowaniem strony może wynosić:

**Okres łaski wygaśnięcia (3 dni)** + **Okres łaski blokowania frontendu (Twoje ustawienie)** = Całkowity opóźnienie

Na przykład, przy domyślnych ustawieniach i 7-dniowym okresie łaski frontendu, może to potrwać nawet 10 dni od `date_expiration`, zanim strona zostanie faktycznie zablokowana.

### 7. Ręczne wygaśnienie członkostwa

Jeśli chcesz natychmiast zablokować stronę, nie czekając na cykl cron, możesz ręcznie zmienić status członkostwa:

1. Przejdź do **Ultimate Multisite > Memberships**
2. Kliknij na dotknięte członkostwo
3. Zmień status na **Expired** lub **Cancelled**
4. Kliknij **Save**

Blokowanie frontendu wejdzie w życie przy następnym ładowaniu strony (z zastrzeżeniem Okresu Łaski Blokowania Frontendu dla wygaśnionych członkostw lub natychmiast dla anulowanych).

## Podsumowanie

Pełny harmonogram od daty wygaśnięcia do zablokowania strony:

```text
date_expiration mija
       |
       v
  [3-dniowy okres łaski cron]     <-- członkostwo nadal wyświetla się jako aktywne/wstrzymane
       |
       v
  Cron oznacza członkostwo jako "expired"
       |
       v
  [Okres Łaski Blokowania Frontendu]  <-- skonfigurowany w Settings > Memberships
       |
       v
  Frontend strony jest blokowany
```

Dla anulowanych członkostw ścieżka jest krótsza:

```text
  Członkostwo anulowane
       |
       v
  date_expiration mija (bez okresu łaski)
       |
       v
  Frontend strony jest blokowany natychmiast
```

## Odniesienie dla deweloperów

Poniższe hooki i filtry pozwalają dostosować zachowanie wygaśniania i blokowania:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filtruje liczbę dni okresu łaski przed oznaczeniem członkostwa jako wygaśnione (domyślnie: 3) |
| `wu_schedule_membership_check_interval` | Filtruje interwał między sprawdzeniami członkostwa (domyślnie: 1 godzina) |
| `wu_membership_renewal_days_before_expiring` | Filtruje, ile dni przed wygaśnięciem należy utworzyć płatność odnowienia (domyślnie: 3) |
| `wu_blocked_site_reactivation_url` | Filtruje, aby dostarczyć niestandardowy URL reaktywacji, gdy strona jest zablokowana |
| `wu_membership_is_active` | Filtruje, czy członkostwo jest uważane za aktywne |
| `wu_membership_expired_check_query_params` | Filtruje parametry zapytania używane do znajdowania wygaśnionych członkostw |
| `wu_membership_trial_check_query_params` | Filtruje parametry zapytania używane do znajdowania wygaśnionych okresów próbnych |
