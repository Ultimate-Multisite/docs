---
title: Iskraj roka članstva i blokiranje stranice
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Istezak i Blokiranje Sajta

Ovo vodič objašnjava kako Ultimate Multisite obrađuje isteku članstva, kraj probnih razdoblja i blokiranje frontend sajta. Pokriva cijeli životni ciklus članstva od aktivnog do isteka, postavke koje kontroliraju je li sajtovi blokirani i što provjeriti ako su sajtovi ostali dostupni nakon isteka članstva.

## Ciklus Statusa Članstva {#membership-status-lifecycle}

Svako članstvo u Ultimate Multisite ima jedan od sljedećih statusa:

:::note Besplatna članstva su vijekovna
Besplatna članstva se ne isteknu automatski. Ultimate Multisite ih tretira kao pristup na cijeli život, tako da nisu uključena u provjere isteka osim ako administrator ne promijeni njihov status ili ne premjesti klijenta na drugi proizvod.
:::

| Status | Značenje |
|---|---|
| **Pending** (Očekuje) | Čeka prvi plaćanje ili potvrdu putem e-maila |
| **Trialing** (Probno razdoblje) | Aktivno probno razdoblje, još nema prikupljenih plaćanja |
| **Active** (Aktivno) | Plačano i trenutno aktivno |
| **On Hold** (U mirovanju) | Očekuje se plaćanje za obnavljanje (izdana je faktura, čeka se plaćanje) |
| **Expired** (Isteklo) | Prošio je datum isteka i razdoblje odpuštanja bez obnove |
| **Cancelled** (Otkaženo) | Eksplicitno otkazano od strane klijenta ili administratora |

### Kako Članstva Prelažu u Status Isteka {#how-memberships-transition-to-expired}

Ultimate Multisite provodi pozadinsku provjeru **svakog sata** koja traži članstva koja bi trebala biti označena kao istekle. Ova provjera koristi [Action Scheduler](https://actionscheduler.org/) (ne direktno WP-Cron) i pokreće se kao planirana akcija `wu_membership_check`.

Provjera isteka ima **ugrađeno razdoblje odpuštanja od 3 dana** po podrazumevanom. Članstvo neće biti označeno kao `expired` tek nakon 3 dana promašaja datuma isteka (`date_expiration`). Ovo daje klijentima vrijeme da dovrše kasno plaćanje prije nego što se njihov status promijeni.

:::info
Period od 3 dana za odlazak roka (grace period) je odvojena od postavke Perioda odlazaka roka za Frontend Block opisanih niže. Period odlazaka roka kontrolira kada se **status mijenja** s aktivnog/on-hold na istekao. Period odlazaka roka za frontend blok kontrolira kada se **sajt blokira** nakon što je status već promijenjen.
:::

#### Otpuštajuće vs. Neotpuštajuće Članstva (Auto-Renewing vs. Non-Auto-Renewing Memberships) {#auto-renewing-vs-non-auto-renewing-memberships}

Ova razlika ključna je za razumijevanje ponašanja roka trajanja:

- **Neotpuštajuća članstva** (`auto_renew = false`): Hourly cron job obrađuje cijeli životni ciklus -- kreira plaćanja za obnavljanje, prelazi članstvo u on-hold stanje i na kraju ga označava kao istekao ako se plaćanje ne primi.

- **Otpuštajuća članstva** (`auto_renew = true`): Cron provjera roka trajanja **ovdje potpuno preskače**. Očekuje se da će gateway za plaćanja (Stripe, PayPal itd.) Ultimate Multisite obavijestiti putem webhooks kada pretplata ne uspije ili bude otkazana. Ako webhook nije primljen -- zbog pogrešno konfiguriranog endpointa, prekida gateway-a ili otkazivanja pretplate izvan sustava -- članstvo može ostati `active` beskonačno čak i nakon što prođe datum isteka roka trajanja.

### Kako se Krajaju Probne Razdoblja (How Trials End) {#how-trials-end}

Kada istekne probno razdoblje za određeno članstvo, sustav:

1. Kreira čekajuće plaćanje za obnavljanje s punom vrijednošću pretplate
2. Prelazi status članstva s `trialing` na `on-hold`
3. Skuplja e-mail obavijest o plaćanju za obnavljanje pošlje kupcu

Ovaj proces se izvršava na istoj satnoj rasporedu kao i redovna provjera roka trajanja, ali **samo za neotpuštajuća članstva**. Za otpuštajuća probna razdoblja, gateway za plaćanja upravlja prelaskom iz probnog u plaćeni pretplatnički status.

## Blokiranje Pristupa Frontend-u (Block Frontend Access) {#block-frontend-access}

Po podrazumevanjem, kada se članstvo isteče ili uđe u pauzu, **ograničen je samo wp-admin dashboard**. Javni dio sajta ostaje dostupan posjetiteljima. Da biste blokirali i javni pristup, morate omogućiti postavku **Block Frontend Access** (Blokiranje pristupa frontend-u).

### Konfiguriranje Postavke {#configuring-the-setting}

Idite na **Ultimate Multisite > Settings > Memberships** i uključite **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Evo kompletnog pregleda stranice postavki članstva:

![Membership settings full page](/img/config/settings-membership-full.png)

Tri povezana postavke kontroliraju ovo ponašanje:

| Postavka | Opis | Podrazumevano |
|---|---|---|
| **Block Frontend Access** (Blokiranje pristupa frontend-u) | Glavni prekidač. Kada bude uključen, blokira javni dio mreže sajtova kada prestane biti aktivno članstvo. | Ispošljeno |
| **Frontend Block Grace Period** (Period odpuštanja frontend-a prije blokiranja) | Broj dana čekanja nakon što se članstvo neaktivira prije blokiranja. Postavite na `0` da se blokira odmah. | 0 |
| **Frontend Block Page** (Stranica za blokiranje frontend-a) | Stranica na glavnom sajtu na koju će posjetitelji biti preusmjereni kada se sajt blokira. Ako nije postavljeno, posjetitelji vide generičku poruku "Sajt trenutno nije dostupan" s linkom na stranicu za prijavu admina sajta. | Nema |

### Što Posjetitelji Vidi Kada Se Sajt Blokira {#what-visitors-see-when-a-site-is-blocked}

Kada je pristup frontend-u blokiran, posjetitelji sajta će ili:

1. **Biti preusmjereni** na stranicu koju ste odabrali u **Frontend Block Page** (ako je postavljeno), ili
2. **Vidjeti podrazumevanu poruku**: "Ovaj sajt trenutno nije dostupan" s linkom na stranicu za prijavu admina sajta.

Admini sajta i dalje mogu prijaviti se – stranica za prijavu nikada nije blokirana.

### Što Se Blokira i Kada {#what-gets-blocked-and-when}

Ponašanje blokiranja ovisi o statusu članstva:

| Status članstva | Blokirano na frontend? | Primijenjen period odpuštanja? |
|---|---|---|
| Aktivo | Ne | -- |
| Probno korištenje | **Ne** (pogledajte napomenu ispod) | -- |
| U mirovanju | Razmatra se aktivno -- ne blokirano | -- |
| Istečeno | **Da**, ako je Blokiranje pristupa frontend-u uključeno | Da |
| Otkazano | **Da**, uvijek (bez obzira na postavke) | **Ne** -- odmah blokirano |
| Očekuje se | Ne blokirano putem provjere članstva | -- |

:::warning Članstva u probnom razdoblju nisu blokirana
Čak i ako je probni period završen, članstvo s statusom `trialing` **ne** će biti blokirano na frontend-u. Probno korištenje mora prvo preći u drugi status (obično `on-hold` putem cron joba, a zatim `expired` ako nije plaćeno). Ako vidite članstva u probnom razdoblju koja se nisu prebacila, provjerite odjeljak za rješavanje problema ispod.
:::

:::note Otkazana članstva preskaču period odpuštanja
Otkazana članstva su uvijek blokirana nakon što prođe datum isteka, bez obzira na to je li opcija Blokiranje pristupa frontend-u uključena. Period odpuštanja za blokiranje pristupa frontend-u **ne** se primjenjuje na otkazana članstva.
:::

## Rješavanje problema: Site ostaju dostupni nakon isteka roka {#troubleshooting-sites-remaining-accessible-after-expiration}

Ako su saiti ostali javno dostupni nakon što istekne članstvo, provjerite sljedeće korake u ovom redoslijedu:

### 1. Provjerite da je postavka Blokiranje pristupa frontend-u uključena {#1-verify-the-block-frontend-access-setting-is-enabled}

Idite na **Ultimate Multisite > Settings > Memberships** i potvrdite da je prekidač **Block Frontend Access** uključen. Ova postavka je **po podrazumevanjenu vrijednosti isključena**, što znači da se ograničava samo pristup wp-adminu kada članstvo postane neaktivno.

### 2. Provjerite Period odpuštanja za blokiranje pristupa frontend-u {#2-check-the-frontend-block-grace-period}

Na istojoj stranici postavki provjerite vrijednost **Frontend Block Grace Period**. Ako je postavljeno na 7 dana, na primjer, frontend se neće blokirati do 7 dana nakon isteka roka trajanja članstva – čak i ako je status članstva već `expired`.

Postavite ga na `0` ako želite trenutno blokiranje nakon što postane neaktivno.

### 3. Potvrdite da se Status Članstva Zapravo Promijeni {#3-confirm-the-membership-status-has-actually-changed}

Idite u **Ultimate Multisite > Memberships** i provjerite status pogođenog članstva. Ako on i dalje prikazuje `active` uprkos tome što je datum isteka prošao, tranzicija statusa se nije dogodila. Često uzroci su:

- **Članstvo se automatski obnavlja**: Provjerite polje `auto_renew` na stranici za uređivanje članstva. Ako je auto-obnovi omogućeno, cron koji se bavi istekom roka trajanja preskoči ovo članstvo – on ovisi o gatewayu za plaćanje da prijavi neuspjeh. Provjerite svoj gateway dashboard (Stripe, PayPal) kako biste potvrdili da li status pretplate odgovara onome što Ultimate Multisite prikazuje.

- **Cron zadatak se nije pokrenuo**: Pogledajte sljedeći korak.

### 4. Provjerite da Li se Action Scheduler Pokreće {#4-verify-action-scheduler-is-running}

Ultimate Multisite koristi Action Scheduler za svoje cron zadatke. Idite u **Tools > Scheduled Actions** u network adminu i potražite:

- **`wu_membership_check`** -- Ovo bi trebalo prikazati kao ponavljajući zadatak koji se pokreće svakog sata. Ako nedostaje, provjere članstva se ne planiraju.
- **`wu_async_mark_membership_as_expired`** -- Ovo su pojedinačni zadaci za označavanje specifičnih članstava kao istečenih. Ako vidite neuspješne zadatke ovdje, oni mogu sadržavati poruke o greškama koje objašnjavaju zašto se nešto nije dogodilo.

Ako vidite zastočene ili neuspješne zadatke, možda imate problem s Action Schedulerom. Česti uzroci su:

- **`DISABLE_WP_CRON` je postavljen na `true`** u `wp-config.php` bez zamjene sistemskim cronom
- **Niska prometna saobraćajna mjesta stranice** -- WP-Cron se pokreće samo kada neko posjeti stranicu

Da biste osigurali pouzdano izvršavanje cron zadataka, postavite sistemski cron posao:

```bash
# Pokrenite svakih 5 minuta putem wget-a
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Ili putem WP-CLI-ja
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Provjerite probleme s Gateway Webhookovima (Automatsko obnavljanje članstva) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Ako je članstvo automatski obnavljeno, a pretplata gatewaya je otkazana ili nije uspješno prošla, ali Ultimate Multisite ga i dalje prikazuje kao `active` (aktivno):

- **Stripe**: Idite na Stripe Dashboard > Customers i provjerite status pretplate. Zatim provjerite da li je webhook endpoint aktivan pod Developers > Webhooks. Endpoint bi trebao pokazivati vašu stranicu i prikazati uspješne isporuke.
- **PayPal**: Provjerite status pretplate u svom poslovnom računu PayPal-a i provjerite isporuku IPN/webhook-a.

Ako gateway pokazuje da je pretplata otkazana, a Ultimate Multisite to ne prikazuje, vjerojatno se obavijest putem webhook-a izgubila. Možete ručno promijeniti status članstva u **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Provjerite razdoblje milosti za isteku (Cron nivo) {#6-check-the-expiration-grace-period-cron-level}

Cron provjera ima svoje razdoblje milosti (podrazumevano: 3 dana) prije označavanja članstva kao istekao. Ovo je odvojeno od razdoblja milosti blokiranja na frontend-u. Ukupno vrijeme prije nego što se stranica blokira može biti:

**Razdoblje milosti za istek (3 dana)** + **Razdoblje milosti blokiranja na frontend-u (vaše podešavanje)** = Ukupno odlaganje

Na primjer, s podrazmjelnim postavkama i 7-dnevnim vremenskim popustom za frontend, može proći do 10 dana nakon `date_expiration` prije nego što se stranica zapravo blokira.

### 7. Ručno istekli članstvo {#7-manually-expire-a-membership}

Ako trebate odmah blokirati stranicu bez čekanja na ciklus crona, možete ručno promijeniti status članstva:

1. Idite na **Ultimate Multisite > Memberships**
2. Kliknite na pogođeno membership
3. Promijenite status na **Expired** (Istečeno) ili **Cancelled** (Otkaženo)
4. Kliknite na **Save** (Spremi)

Blokada na frontend će stupiti na snagu pri sljedećem učitavanju stranice (ovisno o vremenskom popustu za blokadu frontenda za istekle članstva, ili odmah za otkazana članstva).

## Sažetak {#summary}

Pun vremenski okvir od datuma isteka do blokade stranice:

```text
date_expiration prođe
       |
       v
  [3-dnevni cron popust]     <-- membership se i dalje prikazuje kao aktivno/u pripravnosti
       |
       v
  Cron označava membership kao "expired" (istečeno)
       |
       v
  [Vremenski popust za blokadu frontenda] <-- konfigurirano u Settings > Memberships
       |
       v
  Frontend stranica je blokirana
```

Za otkazana članstva, put je kraći:

```text
  Membership cancelled (Članstvo otkazano)
       |
       v
  date_expiration prođe (bez popusta)
       |
       v
  Frontend stranica je odmah blokirana
```

## Referenca za developere {#developer-reference}

Slijedi hookovi i filteri omogućuju vam prilagođavanje ponašanja isteka i blokade:

| Hook/Filter | Opis |
|---|---|
| `wu_membership_grace_period_days` | Filtrira broj dana grace perioda prije označavanja članstva kao isteknut (podrazumevano: 3) |
| `wu_schedule_membership_check_interval` | Filtrira razmak između provjere članstava (podrazumevano: 1 sat) |
| `wu_membership_renewal_days_before_expiring` | Filtrira koliko dana prije isteka da se kreira plaćanje za obnavljanje (podrazumevano: 3) |
| `wu_blocked_site_reactivation_url` | Filtrira kako bi se osigura prilagođena URL-a za ponovno aktiviranje kada je stranica blokirana |
| `wu_membership_is_active` | Filtrira da li je članstvo smatrano aktivno |
| `wu_membership_expired_check_query_params` | Filtrira query parametre koji se koriste za pronalaženje isteknutih članstava |
| `wu_membership_trial_check_query_params` | Filtrira query parametre koji se koriste za pronalaženje isteknutih probnih razdoblja |
