---
title: Uzliekšanās termiņš un vietnes bloku
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Uzstāvēšanu un vietnes bloku

Šis ceļvedis iepina, kā Ultimate Multisite strādā ar pieejamības beigām, izmēģinājumu beigām un frontenda vietņu bloku. Tas apraksta pieejamības ciklu no aktīva līdz beigtajam, iestatījumus, kas kontrolē, vai vietnes ir bloku, un to pārbaudes, ko jāveic, ja vietnes paliek pieejamas pēc pieejamības beigām.

## Pieejamības statusa cikls

Katras Ultimate Multisite pieejamības ir viens no šādiem statusi:

:::note Bezmaksas pieejamības ir mūža
Bezmaksas pieejamības automātiski nebeidzas. Ultimate Multisite tos uzskata kā mūža piekļuvi, tāpēc tie nav ietverta beigām pārbaudes, ja administrator neizveic to statusu vai pārvietoj klientu uz citu produktu.
:::

| Statuss | Nozīme |
|---|---|
| **Pending** (Gatava) | Gaida pirmo maksājumu vai e-pasta apstiprināšanu |
| **Trialing** (Izmēģinājums) | Aktīva izmēģinājuma perioda, vēl nekāks nepieņemts maksājums |
| **Active** (Aktīva) | Apmaksāta un pašreizējā |
| **On Hold** (Piekļaujiet) | Atjauninājuma maksājums gaida (sēmu izveidots, gaida maksājumu) |
| **Expired** (Beigusi) | Pārsniegusi beigām un piedohas periodu bez atjauninājuma |
| **Cancelled** (Atceltīts) | Izplūsties ekspluatāti no klientam vai administratoram |

### Kā pieejamības pārejas uz beigumu notiek

Ultimate Multisite veic bakšķerba pārbaudi **katru stundu**, meklot pieejamības, kas jāmarkē kā beigtas. Šī pārbaude izmanto [Action Scheduler](https://actionscheduler.org/) (ne tieši WP-Cron) un veic kā iestatīto bakšķerba darbību `wu_membership_check`.

Beigām pārbaudai ir **iņemtā piedohas perioda, kas ir 3 dienas** pēc defaultu. Pieejamība nebeidzas kā `expired`, līdz pārsniedz 3 dienas no tā, kad notiek `date_expiration`. Tas dod klientiem laiku pabeigtēt vēlāk maksājumu pirms to statusa mainīšanās.

:::info
3 dienas izpildīšanas laika atlaides perioda (expiration grace period) ir atšķirīga no "Frontend Block Grace Period" iestatījuma, kas aprakstīts zemāk. Izpildīšanas laika atlaides periods norāda, kad **statuss mainās** no aktīva/on-hold uz izpildītu (expired). Frontend bloka izpildīšanas laika atlaides periods norāda, kad **situs tiek bloķēts**, pēc tam kad statuss jau ir mainīts.
:::

#### Automātiskas atjaunojamās vs. Neautomātiskās atjaunojamās piegriezumi (Memberships)

Šis atšķirība ir ļoti svarīga, lai saprastu izpildīšanas uzvedību:

- **Neautomātiskās atjaunojamās piegriezumi** (`auto_renew = false`): Stundu cron darbinājs pārvaldī gan visu dzīves ciklu — tas veido atjaunojuma maksājumus, pārvērš piegriešumu stāvokli uz on-hold un galvenokārt norāda to par izpildītu, ja maksājums nav saņemts.

- **Automātiskās atjaunojamās piegriezumi** (`auto_renew = true`): Cron izpildīšanas pārbaudes **to pilnībā pārskat**. Maksājuma portāls (Stripe, PayPal un tams) tiek gaidīts, ka informēs Ultimate Multisite ar webhookiem, ja abonentāks neizglīt vai atjaunojums ir atcelt. Ja webhooku nav saņemts — piemēram, dēļ nepareizi konfiguriētās punkta (endpoint), portāla traucējumiem vai abonements atcelties sistēmā ārpus sistēmas — piegriešums var palikt `active` nepārtraukti, pat pēc tam, kad izpildīšanas datums ir pārsniegts.

### Kā beidzast mēģinājumi (Trials End)

Kad mēģinājuma piegriešuma laiks beidzās, sistēma:

1. Veido nepieciešamu atjaunojuma maksājumu ar pilnu abonentācijas summu
2. Pārvērš piegriešuma stāvokli no `trialing` uz `on-hold`
3. Sūta e-pasta paziņojumu par atjaunojuma maksājumu klientam

Šis proces ir tas pats stundu grafiks kā regulāra izpildīšanas pārbaude, bet **tikai neautomātiskajiem piegriešumiem**. Automātiskajiem mēģinājumiem maksājuma portāls pārvalda pāreju no mēģinājuma uz maksājamo abonentojumu.

## Bloķēt frontend piekļuvi

Parasti, kad robežas, kad tiesams vai atgriežas uz pauzi, **tā ir ierobežots tikai wp-admin dashboard**. Vietas publiska frontsejs paliek pieejama apmeklētājiem. Lai arī blokētu publisko piekļuvi, jums jāpaliek aktīvs iestatījums **Block Frontend Access**.

### Iestatījumu konfigurēšana

Navigējieties uz **Ultimate Multisite > Settings > Memberships** un ieslauto **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Šeit ir pilna skats uz membersipju iestatījumu lapu:

![Membership settings full page](/img/config/settings-membership-full.png)

Trīs saistītie iestatījumi kontrolē šo uzvedību:

| Iestatījums | Apraksts | Default |
|---|---|---|
| **Block Frontend Access** | Galvenais ieslauto (toggle). Ja tas ir ieslauto, blokē publisko frontseju tīkla vietnēm, kad tās membersipijs nav aktīvs. | Off |
| **Frontend Block Grace Period** | Dienu skaits, kas jāgaida pēc tam, kad membersipijs kļūst neaktīvs, pirms blokēšanas. Iestatīts uz `0`, lai blokētu neatgriežoties. | 0 |
| **Frontend Block Page** | Lapa galvenajā vietnē, kur apmeklētāji tiek novirzīti, ja vietne ir blokēta. Ja tā nav iestatīta, apmeklētāji redz vienkāršu ziņojumu "Šī vietne pašlaik nav pieejama" ar saiti uz admina iekļuve lapu. | None |

### Ko apmeklētāji redz, kad vietne tiek blokēta

Kad frontseja piekļuve ir blokēta, apmeklētāji vietnē:

1. **Tiek novirzīti** uz lapu, ko jūs izvēltie **Frontend Block Page** (ja tas ir iestatīts), vai
2. **Redz defaultu ziņojumu**: "Šī vietne pašlaik nav pieejama" ar saiti uz admina iekļuve lapu.

Vietnes administratori var joprojām iekļūt -- iekļuve lapas neblokēta nekad.

### Ko blokē un kad

Blokēšanas uzvedība ir atkarīga no membersipja statusa:

| Uzņēmējdarbības statuss | Priekšpuses bloku blokēts? | Grāšanas periods piemērots? |
|---|---|---|
| Aktīvs | Ne | -- |
| Pārbaudes laikā (Trialing) | **Ne** (skatīt apakšējai paziņojumam) | -- |
| Piekļuve atstāta (On Hold) | Tskatīts par aktīvu – neblokēts | -- |
| Pamatotas laiks beidzies (Expired) | **Jā**, ja ir ieslēgta "Block Frontend Access" | Jā |
| Atceltas (Cancelled) | **Jā**, vienmēr (neskatot iestatījumus) | **Ne** – blokēts neatkarīgi no iestatījumiem |
| Piekļuve gaidās (Pending) | Neblokēts ar pieejamības pārbaudiem | -- |

:::warning Pārbaudes laika (Trialing) uzņēmējdarbības neblokē
Pat ja, lai arī pārsniegusi pārbaudes periodu, uzņēmējdarbība ar statusu `trialing` **nebloķē** priekšpusē. Priekšpuses jāveidarbība pirms pāreiz tostaties citam statusam (parasti `on-hold` crona darba veidarbī, pēc tam `expired`, ja neesniedz maksājumus). Ja redzat uzņēmējdarbības ar pārbaudes laiku, kas nav pāreiztosties, pārbaudiet šo problēmu likumu apakšējā sadaļā.
:::

:::note Atceltas uzņēmējdarbības nepieciešamība grāšanas periodu
Atceltas uzņēmējdarbības vienmēr blokētas, kad beidzies laiks, neatkarīgi no tā, vai "Block Frontend Access" ir ieslēgts. Priekšpuses bloku blokēšanas grāšanas periods **nepiemērots** atceltajām uzņēmējdarbībām.
:::

## Problēmu likums: Uzņēmumi paliek pieejami pēc laika beigām

Ja uzņēmumi paliek publiski pieejami pēc uzņēmējdarbības laika beigām, veiciet šos pārbaudes virzienus šādi:

### 1. Pārbaudiet, vai ir ieslēgta "Block Frontend Access" iestatījums

Dodieties uz **Ultimate Multisite > Settings > Memberships** un apstipriniet, ka "Block Frontend Access" izvēlne ir ieslēgta. Šis iestatījums pēc defaulta ir **izslēgts**, kas nozīmē, ka ierobežots tikai `wp-admin`, kad uzņēmējdarbība kļūst neaktīva.

### 2. Pārbaudiet priekšpuses bloku blokēšanas grāšanas periodu

Pātuviem esošajā iestatījumu lapā pārbaudiet **Frontend Block Grace Period** vērtību. Ja to ir noteikts 7 dienas, piemēram, frontend neбуs blokušts līdz 7 dienām pēc majstības pēkšas beigām – pat ja majstības statuss jau ir `expired`.

Iestatījiet to uz `0`, ja vēlaties pilnīgu blokušanu pirms majstības inaktīvo kļūst.

### 3. Apstipriniet, ka Majstības Statuss Patiešām Mainās

Dodieties uz **Ultimate Multisite > Memberships** un pārbaudiet ietekmējamo majstības statusu. Ja tas joprojām redz `active`, lai gan pēkšas beigām ir pārcēgas, statusa pāreja nav notikusi. Kopas kāpēc:

- **Majstība automātiski atjaunojas**: Pārbaudiet `auto_renew` lauku majstības rediģēšanas lapā. Ja automātiskais atjauninājums ir ieslēgts, cron, kas pārvaldī autoatjauninājumus, pārskat šo majstību – tas atkarība ir no maksājuma portāla ziņojumu par neizveidību. Pārbaudiet savu portāla dashboard (Stripe, PayPal), lai apstiprinātu, vai abonentācijas statuss atbilst tiem, ko redz Ultimate Multisite.

- **Cron darbs nav veikts**: Redz to nākamajā solvē.

### 4. Apstipriniet, ka Action Scheduler Darba

Ultimate Multisite izmanto Action Scheduler cron darbiem. Dodieties uz **Tools > Scheduled Actions** tīkla adminā un meklējiet:

- **`wu_membership_check`** – Tas jāredz kā atkārtots darbs, kas veic darbu katru stundu. Ja tas nav redzams, majstību pārbaudes nav grafiku noteiktas.
- **`wu_async_mark_membership_as_expired`** – Šie ir individuāli darbi, kas norāda konkrētām majstībām par beigšanu. Ja redzat neizveidotus darbību šeit, tās var ietvert kļūdu ziņojumus, kas izskaidro, kāpēc tas nav veikts.

Ja redzat bloķētas vai neizveidotas darbus, jums var būt Action Scheduler problēma. Kopas kāpēc:

- **`DISABLE_WP_CRON` ir pogies `true`** `wp-config.php`-failā, bez sistēmas līmeņa cron atstākuma.
- **Zemais vietnes trafika** -- WP-Cron darbojas tikai tad, kad kāds vīzita vietnei

Lai nodrošinātu drošu cron veikšanu, izveidi sistēmas cron darbu:

```bash
# Veikt katru 5 minūtes ar wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Vai WP-CLI ar
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Pārbaudiet Gateway Webhook problēmas (Automātiskās atjaunojamās piešķirības)

Ja piešķirība automātiski atjaunojas, bet gatewaya abonentāks ir atbalsts vai neizveidots, tomēr Ultimate Multisite to redz kā `active`:

- **Stripe**: Dodieties uz Stripe Dashboard > Customers un pārbaudiet abonentācijas statusu. Tad novēršiet uzmanību webhooka endpointa aktīvībai Developers > Webhooks sadaļā. Endpointa jāpazīst vietnei, un tas jāredz veiksmīgi piegādāti.
- **PayPal**: Pārbaudiet abonentācijas statusu savā PayPal biznesa kontā un novēršiet uzmanību IPN/webhook piegādātāšanai.

Ja gateway redz abonentāks kā atbalsts, bet Ultimate Multisite neredz, webhooka paziņojums ir iespējams zaudēts. Jūs varat manuāli mainīt abonentācijas statusu **Ultimate Multisite > Memberships > [Redi abonentāku]**.

### 6. Pārbaudiet izpētes laika periodu (Cron līmenis)

Cron pārbaude savu izpētes laika periodu (default: 3 dienas), pirms piešķirību atzīmē kā izpētītu. Tas ir atšķirīgi no frontenda bloka izpētes laika perioda. Kopējais laiks, kas var bloķēt vietni, ir:

**Izpētes laika perioda (3 dienas)** + **Frontenda bloka izpētes laika perioda (jūsu iestatījums)** = Kopējais aizkavējums

Piemēram, ar defaultām iestatījumiem un 7 dienu priekšlaicīgu laiku (grace period) frontendā, tas var aizņemt līdz 10 dienām pēc `date_expiration`, pirms vietne patiešām būs blokuta.

### 7. Maniski pārtiksēt piešķirumu (Membership)

Ja jums ir nepieciešams nekavējoties blokuja vietni, negaidot cron cikla, varat maniski izveidot piešķiruma statuss:

1. Dodieties uz **Ultimate Multisite > Memberships**
2. Nospressiet attiecīgu piešķirumu
3. Mainiet statusu uz **Expired** (Pārtiksēts) vai **Cancelled** (Atceltais)
4. Nospressiet **Save** (Saglabāt)

Frontendā blokušana ietekmē vietni no nākamās lapas atjaunināšanas laikā (atkarīgs no Frontend Block Grace Period piešķirumiem pārtiksētiem, vai nekavējoties, ja tie ir atcelti).

## Kopsavilkums

Pilna laika sērija no patiksēšanas datuma līdz vietnes blokušanai:

```text
date_expiration pārsniedz
       |
       v
  [3 dienu cron priekšlaicīgs laiks]     <-- piešķirums joprojām redzams kā aktīvs/pārzudēts
       |
       v
  Cron atzīmē piešķirumu kā "expired" (pārtiksēts)
       |
       v
  [Frontend Block Grace Period]  <-- konfiguriēts iestatījumos > Memberships
       |
       v
  Vietnes frontend tiek blokuts
```

Atceltajiem piešķirumiem ceļš ir īsāks:

```text
  Piešķirums atcelt
       |
       v
  date_expiration pārsniedz (bez priekšlaicīgā laika)
       |
       v
  Vietnes frontend tiek blokuts nekavējoties
```

## Izdevēju referance

Sejauku hooks un filteri ļauj jums pielāgot patiksēšanas un blokušanas uzvedību:

| Hook/Filter | Apraksturē |
|---|---|
| `wu_membership_grace_period_days` | Filtrē grāmatu laiku (grāmatu laika dienas), kas jāievēro pirms, kad sastāvniecams tiek atbalsts kā pēkšais (default: 3) |
| `wu_schedule_membership_check_interval` | Filtrē laiku starpu sastāvienu pārbaudes laikā (default: 1 stunda) |
| `wu_membership_renewal_days_before_expiring` | Filtrē, cik dienas pirms samazinās laiks, kas jāizveido atjauninājuma maksājums (default: 3) |
| `wu_blocked_site_reactivation_url` | Filtrē, lai sniegtu pielāgotu atkārtotas aktivizācijas URL, kad vietne ir bloķēta |
| `wu_membership_is_active` | Filtrē, vai sastāvniecams tiek uzskatīts kā aktīvs |
| `wu_membership_expired_check_query_params` | Filtrē zapytājumu parametrus, kas izmantojami atbalsta laiku (expired) sastāvjiem meklēt |
| `wu_membership_trial_check_query_params` | Filtrē zapytājumu parametrus, kas izmantojami atbalsta periodu (trial) sastāvjiem meklēt |
