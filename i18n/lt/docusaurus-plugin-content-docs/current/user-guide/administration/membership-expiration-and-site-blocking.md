---
title: Membriškumo Apsaukimo ir Sistemos Blokavimas
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Abėgimo laikas ir svetainės blokavimas {#membership-expiration-and-site-blocking}

Šis poradnik paaiškinas, kaip Ultimate Multisite tvarko prenumeratų pabaigos, mokymų pabaigos ir svetaini blokavimo. Jis apima prenumeratos gyvybę nuo aktyvios iki pabaigta, nustatymus, kurie kontrolia, ar svetainės bus užblokuotos, ir ką reikia patikrinti, jei svetainės vis dar yra prieiga po prenumeratos pabaigos.

## Prenumeratos statusų gyvybos ciklas {#membership-status-lifecycle}

Kiekvienai Ultimate Multisite prenumeratai turi vieną iš šių būstatus:

:::note Nemokamos prenumeratos yra laiko laikas
Nemokamos prenumeratos neibaigiasi automatiškai. Ultimate Multisite traktuoja juos kaip laiko laiko prieiga, todėl jie nėra įtraukti į pabaigos patikrinimus, jei administratoris nepasirengia jų statuso pakeisti arba pateiks klientą į kitą produktą.
:::

| Status | Pranešimas |
|---|---|
| **Pending** (Tikrinamas) | Laikykime pirmosios mokėjimo ar el. pašto patvirtinimo |
| **Trialing** (Bandymas) | Aktyviai laikotinas bandymo laikotarpis, mokėjimo dar neapima |
| **Active** (Aktyvus) | Mokėtas ir aktualus |
| **On Hold** (Laikykime) | Atnaujinimo mokėjimas laukia (išsiųsta paskola, laukiam mokėjimo) |
| **Expired** (Pabaigta) | Pasirinkęs pabaigos datą ir grane periodą be atnaujinimo |
| **Cancelled** (Atšalintas) | Apie esmiai atšalintas klientu arba administratoriumi |

### Kaip prenumeratos pereina į pabaigos būseną {#how-memberships-transition-to-expired}

Ultimate Multisite kas valandą atlieka bakalių patikrinimą, ieškant prenumeratas, kurios turėtų būti pažymtos kaip pabaigta. Šis patikrinimas naudoja [Action Scheduler](https://actionscheduler.org/) (ne tiesiog WP-Cron) ir vyksta kaip planuojama veiksmo akcija `wu_membership_check`.

Pabaigos patikrinimui nurodytas **įtrauktas 3 dienos grane periodas** pagal numatą. Prenumerata bus pažymta kaip `expired` tik po 3 dienų, kai pasirašys jos `date_expiration`. Tai suteikia klientams laikotarpį atlikti vėlavimą mokėjimo, kol jų statusas pakeis.

:::info
Trikščio laiko išteklis (3 dienos) yra atskiras nuo nustatymo „Frontend Block Grace Period“. Trikščio laiko išteklis nurodo, kada **status keičiasi** iš aktyvų/laikojimo į neaktyvus. Frontend bloku laikotarpis nurodo, kada **sutiklis bus užblokuotas**, po to kai status jau keičiasi.
:::

#### Automatiniai ir Neautomatiniai Abonentų Pasirinkimai {#auto-renewing-vs-non-auto-renewing-memberships}

Ši skirtumas yra labai svarbus suprantui išteklio veikimo:

- **Neautomatiniai abonentai** (`auto_renew = false`): Valstybės cron job atlieka visą ciklo – jis sukuria atnaujinimo mokėjimų, pereina abonentą į laikotarpį laiko (on-hold) ir vėliau žymi jį užtenėliu, jei mokėjimas neatsiryžiasi.

- **Automatiniai abonentai** (`auto_renew = true`): Cron išteklio kontrolės **visai šiuos procesus praleidžia**. Mokėjimo portalas (Stripe, PayPal ir kt.) turi pranešti Ultimate Multisite per webhooks, jei abonementas nepasirenka arba atsisakytas. Jei webhookas neatsiryžiasi – dėl neteisingai nustatytos slaptoji punkto, portalų saugos problemų ar jei abonentas atsisakė už sistemą – abonentas gali likti `active` (aktyvus) nepaprastai ilgai, net po terminui išteklio.

### Kaip baigiasi Bandymosi Periodai (Trials) {#how-trials-end}

Kai bandymo periodas abonentui pasibaiga, sistema:

1. Sukuria laukiam atnaujinimo mokėjimą su visais abonementų sumomis
2. Pereina abonentų statusą iš `trialing` į `on-hold`
3. Siųsta el. laišką pranešimą apie atnaujinimo mokėjimą klientui

Šis procesas vyksta per tą pačia valandines (hourly) laiką kaip ir reguliariajios išteklio kontrolės, bet **tiksliai neautomatiniais abonentais**. Automatiniai bandymosi periodai mokėjimo portalas atsakingas už pereinamą nuo bandymo į mokamą abonementą.

## Blokuoti Frontend Aksesą {#block-frontend-access}

Paprastai, kai nurodoma, kai nustatyto, kadamas **tik wp-admin dashboardi bus yra restrigotas**, kai nuskaitas arba įjungtas laisvai. Svetas viešasis puslapis visada liksta prieinamas vizitatoriams. Jei norite blokuoti ir viešą prieigą, turite įjungti nustatymą **Block Frontend Access**.

### Nustatymai {#configuring-the-setting}

Navedinkite į **Ultimate Multisite > Settings > Memberships** ir įjunkite **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Štai visas puslapio naujienos nustatymų puslapis:

![Membership settings full page](/img/config/settings-membership-full.png)

Tris susiję nustatymai kontrolia šį veiksmą:

| Nustatymas | Aprašymas | Defautinis |
|---|---|---|
| **Block Frontend Access** | Pagrindinis mygtukas. Kai jis įjungtas, blokuoja tinklo vietų viešą puslapį, kai jų nuskaitas nebus aktyvus. | Išjungtas |
| **Frontend Block Grace Period** | Dienų skaičius, kurio laukimo reikia po to, kai nuskaitimas bus neaktyvus, prieš blokavimą. Nustatykite į `0`, kad blokavimas būtų atliktas iš karto. | 0 |
| **Frontend Block Page** | Puslapis pagrindiniame svetainėje, kurios per dirbtinius (redirekciją) vizitatorius, kai svetainė bus blokota. Jei tai nenumatytas, vizitatoriui pasirodys bendras pranešimas „Svetainė šiuo metu neprieinoma“ su nuorodą į adminų įtrybimo puslapį. | Nėra |

### Kas atrodo vizitatoriui, kai svetainė blokuojama {#what-visitors-see-when-a-site-is-blocked}

Kai viešai prieiga bus blokota, vizitatoriui svetaine pasirodys:

1. **Redi

| Status Członkostwa | Czy Blokowanie Frontendu? | Czy Zastosowano Okres Łagodzący? |
|---|---|---|
| Aktywne | Nie | -- |
| Testowe (Trialing) | **Nie** (patrz uwaga poniżej) | -- |
| W Zawieszeniu (On Hold) | Rozważane jako aktywne -- nie blokowane | -- |
| Wygaśnięte (Expired) | **Tak**, jeśli Blokowanie Dostępu do Frontendu jest włączone | Tak |
| Anulowane (Cancelled) | **Tak**, zawsze (niezależnie od ustawień) | **Nie** -- natychmiast zablokowane |
| Oczekujące (Pending) | Nie blokowane przez sprawdzenie członkostwa | -- |

:::warning Członkostwa testowe nie są blokowane
Nawet jeśli okres próbny się zakończy, członkostwo o statusie `trialing` **nie** zostanie zablokowane na froncie. Przed przejściem do innego statusu (zazwyczaj `on-hold` za pomocą zadania crona, a następnie `expired`, jeśli nie ma płatności) okres próbny musi najpierw przejść do innego statusu. Jeśli widzisz członkostwa testowe, które się nie zmieniły, sprawdź sekcję rozwiązywania problemów poniżej.
:::

:::note Członkostwa anulowane pomijają okres łagodzący
Członkostwa anulowane są zawsze blokowane po upływie daty ważności, niezależnie od tego, czy Blokowanie Dostępu do Frontendu jest włączone. Okres Łagodzący Blokowania Dostępu do Frontendu **nie** dotyczy członkostw anulowanych.
:::

## Rozwiązywanie problemów: Strony pozostają dostępne po wygaśnięciu {#what-gets-blocked-and-when}

Jeśli strony nadal są publicznie dostępne po wygaśnięciu członkostwa, wykonaj poniższe sprawdzenia w kolejności:

### 1. Zweryfikuj, czy ustawienie Blokowanie Dostępu do Frontendu jest włączone {#troubleshooting-sites-remaining-accessible-after-expiration}

Przejdź do **Ultimate Multisite > Settings > Memberships** i upewnij się, że przełącznik **Block Frontend Access** jest włączony. To ustawienie jest **wyłączone domyślnie**, co oznacza, że tylko wpis admin (`wp-admin`) jest ograniczany, gdy członkostwo staje się nieaktywne.

### 2. Sprawdź Okres Łagodzący Blokowania Dostępu do Frontendu {#1-verify-the-block-frontend-access-setting-is-enabled}

Na tą samą stronie ustawień sprawdź wartość **Frontend Block Grace Period**. Jei ją ustawite į 7 dienas, pavyzdžiui, frontend bus blokotas ne iki 7 dienos po nuskaitimo termino – net jei status prenumeratos jau yra `expired`.

Nustatykite ją į `0`, jei norite išankstinio blokavimo po to, kai prenumerata tampa neaktyvi.

### 3. Patvirtinkite, kad Status Prenumeratos Tikrai Pakeistaus {#2-check-the-frontend-block-grace-period}

Eikite į **Ultimate Multisite > Memberships** ir patikrinkite jūsų prenumeratos statusą. Jei jis vis dar rodo `active`, nors terminas nuskaitimo jau pasibaigęs, statusas neįvyko pakeisti. Dažnai sujungti priežastys:

- **Prenumerata automatiškai atnaujina**: Patikrinkite laukelį `auto_renew` prenumeratos redaguojimo puslapyje. Jei automatinis atnaujinimas yra įjungtas, cronas nuskaitinimas pamina šią prenumeratą – ji pasižymi priklausomybe nuo mokėjimo platformos pranešimo apie neįvykę sutartį. Patikrinkite savo platformos (Stripe, PayPal) dashboardą, kad patvirtintumėte, ar prenumeratos statusas atitinka tai, ką rodo Ultimate Multisite.

- **Cronas nepatikslė**: Prieš to žinokite kitą žingsnį.

### 4. Patikrinkite, ar Darbo Planavimo Skriptas (Action Scheduler) Veikia {#3-confirm-the-membership-status-has-actually-changed}

Ultimate Multisite naudo Action Scheduler cronų darbu. Eikite į **Tools > Scheduled Actions** tinklo administratoriumi ir ieškokite:

- **`wu_membership_check`** – Tai turi rodomas kaip periodiškas darbas, kuris vyksta kiekvieną valandą. Jei jis nėra rodomas, prenumeratos patikrinimai neplanuojami.
- **`wu_async_mark_membership_as_expired`** – Tai individualūs užduotys, skirtos nuskaitinti specifines prenumeratas kaip pasibaigę. Jei čia pamatote neįvykę darbus, jie gali turėti klaidos pranešimus, kuriuose pateikta informacija apie tai, kodėl jie neįvyko.

Jei pamatote užduotis, kurios yra užtrintos arba neįvyko, galite turėti Action Scheduler problemą. Dažnai sujungti priežastys:

- **`DISABLE_WP_CRON` nustaičios `true`** `wp-config.php` daryje, jei nėra sistemos laiko cron keleto pakeitimo
- **Niska svetainės trafikas** -- WP-Cron veikia tik tada, kai kas kažkadais kartą apsilankia į svetainę

Kad užtikrintumėte patikimą cron veikimą, nustatykite sistemos laiko cron darbą:

```bash
# Veiks kiekvieną 5 minučių wget naudojant -q ir išsaugodami į /dev/null
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Arba WP-CLI per:
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Patikrinkite Gateway Webhook problemų (Automatiniai atnaujinami nuskaitos) {#4-verify-action-scheduler-is-running}

Jei nuskaita automatiškai atnaujinasi, o gateway prenumerata yra atšalinta arba nesėkminga, bet Ultimate Multisite vis dar rodo ją kaip `active`:

- **Stripe**: Eikite į Stripe Dashboard > Customers ir patikrinkite prenumeratos statusą. Tada patikrinkite, ar webhook endpoint veikia nustatymuose Developers > Webhooks. Endpoint turi rodyti jūsų svetainę ir veikti sėkmingai.
- **PayPal**: Patikrinkite prenumeratos statusą savo PayPal verslo paskyroje ir patikrinkite IPN/webhook siuntimą.

Jei gateway rodo, kad prenumerata yra atšalinta, o Ultimate Multisite tai nenaudoja, webhook pranešimas buvo tikėtai prarastas. Jūs galite rankiniu būdu pakeisti nuskaitos statusąje **Ultimate Multisite > Memberships > [Redaguoti nuskaitą]**.

### 6. Patikrinkite Gedimo laikotarpį (Cron lygio) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Cron patikrinimui yra savo gedimo laikotarpis (pagal: 3 dienas), prieš pažymėjimą kaip pasibaigęs. Tai yra atskirtas nuo gedimo laikotarpio svetainės vidinio bloko. Totalinis laikas iki kai svetainė bus blokota gali būti:

**Gedimo laikotarpis (3 dienas)** + **Vidinio bloko gedimo laikotarpis (jūsų nustatymas)** = Totalinis uždarymo laikas

Pavyzdžiui, su naudojant standartines nustatymų ir 7 dienos naujienos laikotarpį (grace period) prieš svetainė išvirtina, gali užtruti iki 10 dienų po `date_expiration`, kol svetainė iš tikrųjų bus blokuota.

### 7. Manuliai išvirtinti nuskaitą (Membership) {#6-check-the-expiration-grace-period-cron-level}

Jei jums reikia iš karto blokuoti svetainę be laukimo cron ciklą, galite manuliai pakeisti nuskaitos statusą:

1. Eikite į **Ultimate Multisite > Memberships**
2. Paspauskite ant suvestos nuskaitos (membership)
3. Pakeiskite statusą į **Expired** arba **Cancelled**
4. Paspauskite **Save**

Frontend blokuotas efektyvus tik naujo puslapio atsisiuntimo metu (sujei pritaikoma Frontend Block Grace Period išvirtintams nuskaitoms, arba iš karto, jei nuskaita yra atšaukiama).

## Apibendrinimas {#7-manually-expire-a-membership}

Visas laikas nuo išvirtinimo datamos iki svetainės blokuojimo:

```text
date_expiration pasirašys
       |
       v
  [3-dienų cron naujienos laikotarpis]     <-- nuskaita vis dar rodoma kaip aktyvi/laikytis
       |
       v
  Cron pažymi nuskaitą kaip "expired" (išvirtinta)
       |
       v
  [Frontend Block Grace Period]  <-- nustatytas nustatymais > Memberships
       |
       v
  Svetainės frontend blokuojama
```

Atšaukiamos nuskaitos pusė yra trumpesnė:

```text
  Membership cancelled (Nuskaita atšaukta)
       |
       v
  date_expiration pasirašys (be naujienos laikotarpio)
       |
       v
  Svetainės frontend blokuojama iš karto
```

## Programstorių referavimas {#summary}

Šie hooks ir filters leidžia jums pritaikyti išvirtimo ir blokuojimo veiksmus:

| Hook/Filter | Aprašymas |
|---|---|
| `wu_membership_grace_period_days` | Filtruoja grąžtes laikotarpio dienas, prieš žymėdami nuskaitę membership (reikalavimas: 3) |
| `wu_schedule_membership_check_interval` | Filtruoja intervalą tarp membership patikrinimų (reikalavimas: 1 valanda) |
| `wu_membership_renewal_days_before_expiring` | Filtruoja, kiek dienas prieš pasibaigimą reikia nurodyti naujo mokėjimo atnaujinimui (reikalavimas: 3) |
| `wu_blocked_site_reactivation_url` | Filtruoja, kad pateiktumėte pritaikytą URL adresą atnaujinimui, kai svetainė yra blokuota |
| `wu_membership_is_active` | Filtruoja, ar membership laikomas aktyviai |
| `wu_membership_expired_check_query_params` | Filtruoja skripto parametrus, naudojamus ieškoti pasibaigę laikinųjų membership |
| `wu_membership_trial_check_query_params` | Filtruoja skripto parametrus, naudojamus ieškoti pasibaigę laikinių (trial) periodų
