---
title: Istek članstva i blokiranje sajta
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Istek članstva i blokiranje stranice

Ovaj vodič objašnjava kako Ultimate Multisite upravlja istekom članstva, završetkom probnog perioda i blokiranjem stranice na prednjoj strani (frontend). Pokriva životni ciklus članstva, od aktivnog do isteka, postavke koje kontrolišu da li su stranice blokirane, i šta provjeriti kada su stranice i dalje dostupne nakon isteka članstva.

## Životni ciklus statusa članstva

Svako članstvo u Ultimate Multisite ima jedan od sljedećih statusa:

:::note Slobodno članstvo je trajno
Slobodna članstva ne istežu automatski. Ultimate Multisite ih tretira kao trajni pristup, pa nisu uključena u provjere isteka, osim ako administrator ne promijeni njihov status ili ne premjesti klijenta na drugi proizvod.
:::

| Status | Značenje |
|---|---|
| **Pending** | Čeka prvi plaćanje ili verifikaciju putem e-pošte |
| **Trialing** | Aktivan probni period, još nije naplaćeno plaćanje |
| **Active** | Plaćeno i važeće |
| **On Hold** | Čeka plaćanje obnove (kreiran je račun, čeka se plaćanje) |
| **Expired** | Prošlo je datum isteka i period gracioznosti bez obnove |
| **Cancelled** | Eksplicitno otkazano od strane klijenta ili administratora |

### Kako članstva prelaze u status "Expired"

Ultimate Multisite pokreće provjeru u pozadini **svakih sat vremena** koja traži članstva koja bi trebala biti označena kao isteka. Ova provjera koristi [Action Scheduler](https://actionscheduler.org/) (nije direktno WP-Cron) i pokreće se kao zakazani akciono izvršenje `wu_membership_check`.

Provjera isteka ima **ugrađeni period gracioznosti od 3 dana** po defaultu. Članstvo neće biti označeno kao `expired` sve dok ne prođe 3 dana od njegovog `date_expiration`. Ovo daje klijentima vremena da izvrše kašnjenje plaćanja prije nego što se njihov status promijeni.

:::info
Period gracioznosti isteka od 3 dana je odvojen od postavke Period gracioznosti blokiranja prednje strane (Frontend Block Grace Period) opisane niže. Period gracioznosti isteka kontroliše kada se **status promijeni** sa aktivnog/na čekanju na istekao. Period gracioznosti blokiranja prednje strane kontroliše kada se **stranica blokira** nakon što se status već promijenio.
:::

#### Članstva koja se automatski obnavljaju naspram onih koja se ne obnavljaju automatski

Ova razlika je ključna za razumijevanje ponašanja isteka:

- **Članstva koja se ne obnavljaju automatski** (`auto_renew = false`): Satni cron zadatak upravlja cijelim životnim ciklusom — kreira plaćanja obnove, prebacuje članstvo na status "on-hold", i na kraju ga označava kao istekao ako plaćanje nije primljeno.

- **Članstva koja se obnavljaju automatski** (`auto_renew = true`): Cron provjera isteka **ih potpuno preskače**. Pretpostavlja se da će gateway za plaćanje (Stripe, PayPal, itd.) obavijestiti Ultimate Multisite putem webhook-a kada pretplata ne uspije ili se otkaže. Ako webhook nije primljen — zbog pogrešno konfigurisanog endpointa, prekida gatewaya ili pretplate otkazane izvan sistema — članstvo može ostati `active` beskonačno, čak i nakon što prođe datum isteka.

### Kako probni periodi isteknu

Kada probni period članstva istekne, sistem:

1. Kreira plaćanje obnove u statusu čekanja sa punim iznosom pretplate
2. Prebacuje status članstva sa `trialing` na `on-hold`
3. Pošalje e-mail obavijest o plaćanju obnove klijentu

Ovaj proces se pokreće na istom satnom rasporedu kao i redovna provjera isteka, ali **samo za članstva koja se ne obnavljaju automatski**. Za probne periode koji se automatski obnavljaju, gateway za plaćanje upravlja prebacivanjem sa probnog na plaćenu pretplatu.

## Blokiranje pristupa prednjoj strani

Po defaultu, kada članstvo istekne ili pređe u status "on hold", **ograničen je samo wp-admin dashboard**. Javna prednja strana stranice ostaje dostupna posjetiteljima. Da biste takođe blokirali javni pristup, morate omogućiti postavku **Block Frontend Access**.

### Konfigurisanje postavke

Idite na **Ultimate Multisite > Settings > Memberships** i omogućite **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Evo pregleda cijele stranice postavki članstva:

![Membership settings full page](/img/config/settings-membership-full.png)

Tri povezane postavke kontrolišu ovo ponašanje:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Glavni prekidač. Kada je omogućen, blokira javnu prednju stranu mrežnih stranica kada članstvo više nije aktivno. | Off |
| **Frontend Block Grace Period** | Broj dana čekanja nakon što članstvo postane neaktivno prije blokiranja. Postavite na `0` za trenutno blokiranje. | 0 |
| **Frontend Block Page** | Stranica na glavnoj stranici na koju se posjetitelje preusmjerava kada je stranica blokirana. Ako nije postavljena, posjetitelji vide opštu poruku "Site not available". | None |

### Šta posjetitelji vide kada je stranica blokirana

Kada je pristup prednjoj strani blokiran, posjetitelji stranice će ili:

1. **Biti preusmjereni** na stranicu koju ste odabrali u **Frontend Block Page** (ako je konfigurisano), ili
2. **Vidjeti poruku po defaultu**: "This site is not available at the moment." sa linkom na stranicu za prijavu za administratora stranice.

Administratori stranica i dalje mogu prijaviti — stranica za prijavu nikada nije blokirana.

### Šta se blokira i kada

Ponašanje blokiranja zavisi od statusa članstva:

| Membership Status | Frontend Blokiran? | Period gracioznosti primjenjen? |
|---|---|---|
| Active | Ne | -- |
| Trialing | **Ne** (vidjeti napomenu ispod) | -- |
| On Hold | Smatra se aktivnim — nije blokirano | -- |
| Expired | **Da**, ako je Block Frontend Access uključen | Da |
| Cancelled | **Da**, uvijek (bez obzira na postavku) | **Ne** -- blokirano odmah |
| Pending | Nije blokirano putem provjere članstva | -- |

:::warning Članstva u probnom periodu nisu blokirana
Čak i ako je probni period istekao, članstvo sa statusom `trialing` **neće** biti blokirano na prednjoj strani. Prvo mora proći u drugi status (obično `on-hold` putem cron zadatka, a zatim `expired` ako nije plaćeno). Ako vidite članstva u probnom periodu koja nisu prešla status, provjerite sekciju za rješavanje problema ispod.
:::

:::note Članstva koja su otkazana zaobilaze period gracioznosti
Članstva koja su otkazana uvijek su blokirana nakon što prođe datum isteka, bez obzira na to da li je Block Frontend Access omogućen. Period gracioznosti blokiranja prednje strane **ne** vrijedi za otkazana članstva.
:::

## Rješavanje problema: Stranice koje ostaju dostupne nakon isteka

Ako stranice ostaju javno dostupne nakon isteka članstva, prođite kroz ove provjere po redu:

### 1. Provjerite da li je postavka Block Frontend Access omogućena

Idite na **Ultimate Multisite > Settings > Memberships** i potvrdite da je prekidač **Block Frontend Access** uključen. Ova postavka je **po defaultu isključena**, što znači da je ograničen samo wp-admin kada članstvo postane neaktivno.

### 2. Provjerite Period gracioznosti blokiranja prednje strane

Na istoj stranici postavki, provjerite vrijednost **Frontend Block Grace Period**. Ako je postavljeno na 7 dana, na primjer, prednja strana neće biti blokirana sve dok ne prođe 7 dana od datuma isteka članstva — čak i ako je status članstva već `expired`.

Postavite ovo na `0` ako želite trenutno blokiranje nakon što članstvo postane neaktivno.

### 3. Potvrdite da se status članstva zaista promijenio

Idite na **Ultimate Multisite > Memberships** i provjerite status pogođenog članstva. Ako i dalje pokazuje `active` uprkos isteku datuma, tranzicija statusa nije uspjela. Uobičajeni uzroci:

- **Članstvo se automatski obnavlja**: Provjerite polje `auto_renew` na stranici uređivanja članstva. Ako je automatsko obnavljanje omogućeno, cron zadatak za istek preskače ovo članstvo — oslanja se na gateway za plaćanje da izvještava o neuspjehu. Provjerite svoj gateway dashboard (Stripe, PayPal) kako biste potvrdili da li status pretplate odgovara onome što Ultimate Multisite pokazuje.

- **Cron zadatak nije pokrenut**: Pogledajte sljedeći korak.

### 4. Provjerite da li Action Scheduler radi

Ultimate Multisite koristi Action Scheduler za svoje cron zadatke. Idite na **Tools > Scheduled Actions** u network adminu i potražite:

- **`wu_membership_check`** — Ovo bi trebalo da se pojavi kao ponavljajući zadatak koji radi svakog sata. Ako nedostaje, provjere članstva se ne zakazuju.
- **`wu_async_mark_membership_as_expired`** — Ovo su pojedinačni zadaci za označavanje specifičnih članstava kao isteka. Ako vidite neuspješne akcije ovdje, mogu sadržavati poruke o greškama koje objašnjavaju zašto.

Ako vidite zaglavljene ili neuspješne akcije, možda imate problem sa Action Schedulerom. Uobičajeni uzroci:

- **`DISABLE_WP_CRON` je postavljeno na `true`** u `wp-config.php` bez zamjene crona na nivou sistema
- **Niski promet na stranici** — WP-Cron radi samo kada neko posjeti stranicu

Da biste osigurali pouzdan izvršavanje crona, postavite sistem cron zadatak:

```bash
# Pokreće se svakih 5 minuta putem wget-a
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Ili putem WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Provjerite probleme sa webhook-ovima gatewaya (Članstva koja se automatski obnavljaju)

Ako članstvo automatski obnavlja i pretplata gatewaya je otkazana ili nije uspjela, ali Ultimate Multisite i dalje pokazuje da je `active`:

- **Stripe**: Idite na Stripe Dashboard > Customers i provjerite status pretplate. Zatim provjerite da li je endpoint webhooka aktivan pod Developers > Webhooks. Endpoint bi trebao ukazivati na vašu stranicu i pokazivati uspješne dostave.
- **PayPal**: Provjerite status pretplate u vašem PayPal poslovnom računu i provjerite dostavu IPN/webhook.

Ako gateway pokazuje da je pretplata otkazana, ali Ultimate Multisite ne, vjerovatno je webhook obavijest izgubljena. Možete ručno promijeniti status članstva na **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Provjerite period gracioznosti isteka (Nivo crona)

Cron provjera ima svoj period gracioznosti (default: 3 dana) prije označavanja članstva kao istekao. Ovo je odvojeno od perioda gracioznosti blokiranja prednje strane. Ukupno vrijeme prije nego što stranica bude blokirana može biti:

**Period gracioznosti isteka (3 dana)** + **Period gracioznosti blokiranja prednje strane (vaša postavka)** = Ukupno kašnjenje

Na primjer, sa defaultnim postavkama i periodom gracioznosti prednje strane od 7 dana, može proći do 10 dana nakon `date_expiration` prije nego što stranica bude zaista blokirana.

### 7. Ručno istegnite članstvo

Ako trebate odmah blokirati stranicu bez čekanja na ciklus crona, možete ručno promijeniti status članstva:

1. Idite na **Ultimate Multisite > Memberships**
2. Kliknite na pogođeno članstvo
3. Promijenite status na **Expired** ili **Cancelled**
4. Kliknite **Save**

Blokiranje prednje strane će stupiti na snagu pri sljedećem učitavanju stranice (u zavisnosti od Perioda gracioznosti blokiranja prednje strane za isteka članstva, ili odmah za otkazana članstva).

## Sažetak

Puni vremenski okvir od datuma isteka do blokiranja stranice:

```text
date_expiration prođe
       |
       v
  [3-dnevni period gracioznosti crona]     <-- članstvo i dalje pokazuje kao aktivno/na čekanju
       |
       v
  Cron označava članstvo kao "expired"
       |
       v
  [Period gracioznosti blokiranja prednje strane]  <-- konfigurisano u Settings > Memberships
       |
       v
  Prednja strana stranice je blokirana
```

Za otkazana članstva, putanja je kraća:

```text
  Članstvo je otkazano
       |
       v
  date_expiration prođe (bez perioda gracioznosti)
       |
       v
  Prednja strana stranice je odmah blokirana
```

## Referenca za programere

Sljedeći hook-ovi i filteri omogućavaju vam da prilagodite ponašanje isteka i blokiranja:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filtrira broj dana perioda gracioznosti prije označavanja članstva kao istekao (default: 3) |
| `wu_schedule_membership_check_interval` | Filtrira interval između provjera članstva (default: 1 sat) |
| `wu_membership_renewal_days_before_expiring` | Filtrira koliko dana prije isteka za kreiranje plaćanja obnove (default: 3) |
| `wu_blocked_site_reactivation_url` | Filtrira kako bi se pružio prilagođeni URL za ponovno aktiviranje kada je stranica blokirana |
| `wu_membership_is_active` | Filtrira da li se članstvo smatra aktivnim |
| `wu_membership_expired_check_query_params` | Filtrira query parametre korištene za pronalaženje isteka članstava |
| `wu_membership_trial_check_query_params` | Filtrira query parametre korištene za pronalaženje isteka probnih perioda |
