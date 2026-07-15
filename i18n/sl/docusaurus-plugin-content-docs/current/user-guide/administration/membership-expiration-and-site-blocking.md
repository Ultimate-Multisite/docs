---
title: Rok za članstvo in blokiranje spletnega mesta
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Končanje članstva in blokiranje spletnih strani

Ta vodič pojasnjuje, kako Ultimate Multisite obravnava potek končanja članskih obdobij, konca vprašanj za probne obdobja in blokiranja spletnih strani na fron end. Pokriva celotno življenjsko obdobje članstva od aktivnega do izteklega, nastavitve, ki kontrolirajo, ali so strani blokirane, ter kaj preveriti, če strani ostajajo dostopne po končanju članskega obdobja.

## Življenjsko obdobje statusa članstva {#membership-status-lifecycle}

Vsako članstvo v Ultimate Multisite ima en od naslednjih statusov:

:::note Brezplačna članstva so na doživotno
Brezplačna članstva se ne iztekle samodejno. Ultimate Multisite jih tretira kot doživotni dostop, zato jih ni vključeno v preverjanje končanja obdobja, razen če administrator spremeni njihov status ali prebili stranke na drugo produkt.
:::

| Status | pomen |
|---|---|
| **Pending** (Očakuje) | Očakuje prvi plačilo ali potrdbo e-pošoto |
| **Trialing** (Probno obdobje) | Aktiven probni period, še ni prihranjen plačilo |
| **Active** (Aktivno) | Plačeno in trenutno aktivno |
| **On Hold** (Na odločitvi) | Očakuje se plačilo za obnovo (izdelana račun, čaka plačila) |
| **Expired** (Istekelo) | Prešel je datum končanja in obdobje prilagodljivosti brez obnove |
| **Cancelled** (Prekinjeno) | Eksplicitno prekinjeno strankom ali administratorjem |

### Kako se članstva spremenjajo v iztekle {#how-memberships-transition-to-expired}

Ultimate Multisite vsako uro izvaja zadnje preverjanje, ki išče člansko obdobja, ki bi moralo biti označeno kot iztekle. Ta preverjanje uporablja [Action Scheduler](https://actionscheduler.org/) (ne WP-Cron neposredno) in se izvaja kot načrtovano dejanje `wu_membership_check`.

Preverjanje končanja obdobja ima **vgrajeno obdobje prilagodljivosti od 3 dni**. Članstvo se ne označuje kot `expired`, dokler ni prešel datum `date_expiration` za 3 dni. To daje strankam čas, da dokončajo pozno plačilo pred spremembo statusa.

:::info
Period za odlašanje do isteka trajanja (expiration grace period) je oddaje na zasebno odločitev od postavke Perioda odlašanja bloka sprednje strani (Frontend Block Grace Period). Period za odlašanje upravlja zmanjšanjem **statusov** s aktivnega/na zadržanju na istekle. Period odlašanja bloka sprednje strani upravlja zmanjšanjem, ko se **splet blokira**, po tem ko je status že spremenil.
:::

#### Avtomatsko obnovljive vs. Ne-avtomatsko obnovljive naročnine {#auto-renewing-vs-non-auto-renewing-memberships}

Ta razlika je ključna za razumevanje vedenja isteka trajanja:

- **Ne-avtomatsko obnovljive naročnine** (`auto_renew = false`): Hourly cron job upravlja celoten življenjski cikel – ustvarja plačila za obnovo, preklopi naročnino na zadržanje (on-hold) in sčasoma jo označuje kot istekle, če plačilo ni prejelo.

- **Avtomatsko obnovljive naročnine** (`auto_renew = true`): Preverjanje isteka trajanja v cronu **to popolnoma preskače**. Očekuje se, da je payment gateway (Stripe, PayPal itd.) Ultimate Multisite obvestil preko webhookov, ko ne uspe naročnina ali jo prekine. Če webhook ni prejelo – zaradi napake v konfiguraciji endpointa, izpadnega gatewayja ali če je naročnina prekrita zunaj sistema – lahko naročnina ostane `active` (aktivna) neomejeno čez datum isteka trajanja.

### Kako se končajo probni obdobja (Trials End) {#how-trials-end}

Ko se probno obdobje naročnine konča, sistem:

1. Ustvari odločeno plačilo za obnovo z polnjem količino naročnine
2. Preklopi status naročnine s `trialing` na `on-hold`
3. Pošlje e-pošto za obvestilo o plačilu za obnovo stranki

Ta proces se odvija na isti urski načrt kot redno preverjanje isteka trajanja, vendar **le za ne-avtomatsko obnovljive naročnine**. Za avtomatske probne obdobja upravlja payment gateway preklop z probnega na plačljivo naročnino.

## Blokiranje dostopa sprednje strani {#block-frontend-access}

Po podrazlo, ko se članstvo izbriše ali postane na pauzo, je **omejen samo dashboard wp-admin**. Javna sprednja stran mesta ostaja dostopna za obiskovalce. Če želite tudi blokirati javni dostop, morate vključiti nastavitvo **Block Frontend Access**.

### Konfiguracija nastavitve {#configuring-the-setting}

Navigirajte do **Ultimate Multisite > Settings > Memberships** in vključite **Block Frontend Access**.

![Nastavitve Block Frontend Access prikazuje preklop vključen, obdobje brezplačne dostave od 7 dni in izbiro stran za blokiranje sprednje strani](/img/config/settings-membership-block-frontend.png)

Tukaj je celoten pregled strani z nastavitvami članstva:

![Celota stran z nastavitvami članstva](/img/config/settings-membership-full.png)

Tri povezane nastavitve upravljajo to vedenje:

| Nastavitev | Opis | Podrazlo |
|---|---|---|
| **Block Frontend Access** | Glavni preklopnik. Občutja, ko je vključen, blokira javno sprednje stran omrežnih strani, ko ni več aktivno članstvo. | Off |
| **Frontend Block Grace Period** | Število dni čakanja po deaktivaciji članstva pred blokiranjem. Postavite na `0`, da se blokira takoj. | 0 |
| **Frontend Block Page** | Stranica na glavnem mestu, ki usmerja obiskovalce, ko je stran blokirana. Če ni postavljena, obiskovalci vidijo splošno sporočilo "Stranje ni trenutno na voljo" z povezavo na stran za prijavu admina strani. | None |

### Kaj vidijo obiskovalci, ko je stran blokirana {#what-visitors-see-when-a-site-is-blocked}

Ko je dostop do sprednje strani blokiran, obiskovalci strani bodo:

1. **Usmerjeni** na stran, ki jo ste izbrali v **Frontend Block Page** (če je konfigurirana), ali
2. **Videli predvoljno sporočilo**: "Ta stran ni trenutno na voljo" z povezavo na stran za prijavu admina strani.

Admini strani lahko še vedno prijajo – stran za prijavu nikoli ni blokirana.

### Kaj je blokirano in kdaj {#what-gets-blocked-and-when}

Vedenje blokiranja se odloča na podlagi statusa članstva:

| Status članstva | Predvidno blokirano na frontendu? | Uporabljena je prilagodljiva obdobja? |
|---|---|---|
| Aktivo | Ne | -- |
| Probna (Trialing) | **Ne** (pogledajte opominku below) | -- |
| Na pauzi (On Hold) | Razmerno aktivno – ne blokirano | -- |
| Istečeno (Expired) | **Da**, če je Block Frontend Access vklopljen | Da |
| Odančeno (Cancelled) | **Da**, vedno (ne glede na nastavitve) | **Ne** – takoj blokirano |
| Čakamo (Pending) | Ne blokirano preko preveritve članstva | -- |

:::warning Probna člana ne so blokirani
Če se probni obdobje končajo, članstvo z statusom `trialing` **ne bo** blokirano na frontendu. Pred tem mora prvo prehoditi v drugi status (običajno `on-hold` preko cron joba, nato pa `expired`, če ni plačano). Če vidite probna članstva ki se niso spremenila, preverite razdelek za reševanje težav below.
:::

:::note Odančena članstva preskočijo prilagodljiva obdobja
Odančena članstva so vedno blokirana takoj ko je poteklo datum istechanja, ne glede na to ali je Block Frontend Access vklopljen. Prilagodljivo obdobje blokiranja na frontendu **ne se uporablja** za odančena članstva.
:::

## Reševanje težav: Svoji domovni strani ostajajo dostopne po istehanju {#troubleshooting-sites-remaining-accessible-after-expiration}

Če so domovni strani nadaljnje javno dostopne, ko poteka isteklo članstvo, preverite sledeče stvari v naslednji vrstvi:

### 1. Preverite, da je nastavitva Block Frontend Access vklopljena {#1-verify-the-block-frontend-access-setting-is-enabled}

Idi na **Ultimate Multisite > Settings > Memberships** in potrdite, da je preklicna gumba (toggle) **Block Frontend Access** vklopljen. Ta nastavitva je **po podrazmerju izklopena**, kar pomeni, da so omejeni le `wp-admin` stranjo, ko postane članstvo neaktivno.

### 2. Preverite prilagodljivo obdobje blokiranja na frontendu {#2-check-the-frontend-block-grace-period}

Na istoj nastavi na strani zamenjalnih nastavitev preverite vrednost **Frontend Block Grace Period**. Če je ta postavljeno na 7 dni, na primer, frontend se ne bo blokiral do 7 dni po datumu izteka članstva – tudi če je status članstva že `expired`.

Postavite ga na `0`, če želite takojno blokiranje ko postane članstvo neaktivno.

### 3. Potrdite, da se Status Članstva Obra genuinely spremenil {#3-confirm-the-membership-status-has-actually-changed}

Idi na **Ultimate Multisite > Memberships** in preverite status vplivnega članstva. Če še vedno prikazuje `active` nonostante datuma izteka, je prehod statusa ni nastal. Pogojne vzroki:

- **Članstvo se samavtom obnovi**: Preverite polje `auto_renew` na strani za ureditev članstva. Če je samovna obnova vključena, cron za iztekanje preskoči to članstvo – zali se o ne uspehu plačilne bramke. Preverite svoj dashboard bramke (Stripe, PayPal), da potrdite, da se status naročnine zgodi s tem, kar prikazuje Ultimate Multisite.

- **Cron zadostnik ni deloval**: Predvsem naslednjem koraku.

### 4. Preverite, da Action Scheduler deluje {#4-verify-action-scheduler-is-running}

Ultimate Multisite uporablja Action Scheduler za svoje cron zadotnike. Idi na **Tools > Scheduled Actions** v adminu omrežja in poiščite:

- **`wu_membership_check`** – To bi moralo prikazati kot ponavljajoč se dejanje, ki deluje vsak uro. Če ga manjka, preverjanja članstva ni načrtovano.
- **`wu_async_mark_membership_as_expired`** – To so individualne naloge za označevanje določenih članstev kot iztekle. Če vidite neuspešna dejanja tukaj, lahko vsebujejo sporočila o napaki, ki pojasnajo, zakaj se to zgodi.

Če vidite zadržana ali neuspešne dejanja, boste morda imeli težavo z Action Schedulerjem. Pogojne vzroki:

- **`DISABLE_WP_CRON` je postavljen na `true`** v `wp-config.php`, brez sistem-level cron zamene
- **Nizka trafik na spletni strani** -- WP-Cron se izvršča le ko nekdo obišče spletno stran

Da bi zagotovili zanesljivo izvrševanje crona, nastavi sistemni cron job:

```bash
# Teki vsak 5 minut preko wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Ali preko WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Preverite težave z Gateway Webhookom (Avtomatsko obnavljanje članstev) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Če je članstvo avtomatsko obnavljeno, vendar je pretplava gatewaya bila odstopljena ali ni uspešna, a Ultimate Multisite ga še vedno prikazuje kot `active`:

- **Stripe**: Pojdite na Stripe Dashboard > Customers in preverite status pretplate. Nato preverite, da je webhook endpoint aktiven pod Developers > Webhooks. Endpoint bi moralo biti usmerjeno na vašo stran in prikazati uspešne dostave.
- **PayPal**: Preverite status pretplate v svojem poslovnem računu PayPal in preverite dostavo IPN/webhooka.

Če gateway prikazuje pretplavo kot odstopljeno, vendar Ultimate Multisite ne, je verjetno izgubljena obvestila preko webhooka. Možete ručno spremeniti status članstva v **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Preverite obdobje brezplačne obdelave (Cron nivo) {#6-check-the-expiration-grace-period-cron-level}

Cron preverjanje ima svoje obdobje brezplačne obdelave (standard: 3 dni) pred označevanjem članstva kot izteklega. To je ločeno od obdobja brezplačne obdelave na spletni strani. Celotno čas do blokiranja strani lahko doseže:

**Obdobje brezplačne obdelave (3 dni)** + **Obdobje brezplačne obdelave na spletni strani (vaše nastavitve)** = Celotna zamaka

Na primer, z podrazmebnimi nastavitvami in 7-dnevnim obdobjem za prednjo stran (frontend grace period) lahko dojdemo do tega, da se spletna stran zapravo blokira le po približno 10 dneh po datumu `date_expiration`.

### 7. Ručno iztekanje članstva {#7-manually-expire-a-membership}

Če potrebujete takoj blokirati spletno mesto brez čakanja na ciklus crona, lahko ručno spremenite status članstva:

1. Pojdite do **Ultimate Multisite > Memberships**
2. Kliknite na vplivajoče membership
3. Spremenite status na **Expired** ali **Cancelled**
4. Kliknite na **Save** (Shrani)

Blokiranje prednje strani bo začelo delovati pri naslednji nalopeni strani (z obzirom na obdobje za blokiranje prednje strani za iztekačja članstev, ali takoj za odizvane članstva).

## Povzetek {#summary}

Celotna časovna okvire od datuma iztekanja do blokiranja spletne strani:

```text
date_expiration poteka
       |
       v
  [3-dnevno obdobje za cron grace period]     <-- membership še vedno prikazuje kot aktiv/v pripravljenosti
       |
       v
  Cron označuje membership kot "expired" (iztekano)
       |
       v
  [Frontend Block Grace Period]  <-- konfigurirano v Settings > Memberships
       |
       v
  Prednja stran spletne strani je blokirana
```

Za odizvane membership, pot je kračji:

```text
  Membership cancelled (Članstvo odizvano)
       |
       v
  date_expiration poteka (brez obdobja za grace period)
       |
       v
  Prednja stran spletne strani je takoj blokirana
```

## Referenca za razvijalce {#developer-reference}

Naslednji hooks in filters vam omogočajo prilagoditi vedenje iztekanja in blokiranja:

| Hook/Filter | Opis |
|---|---|
| `wu_membership_grace_period_days` | Filtrira število dni do konca obdobja brezplačne dopuščljivosti pred označevanjem članstva kot iztekle (podrazume: 3) |
| `wu_schedule_membership_check_interval` | Filtrira interval med preveritvami članstva (podrazume: 1 ur) |
| `wu_membership_renewal_days_before_expiring` | Filtrira, koliko dni pred iztekom do ustvarjanja plačila za obnovitev (podrazume: 3) |
| `wu_blocked_site_reactivation_url` | Filtrira za zagotavljanje prilagojene URL povezave za ponovno aktivacijo strani, ko je bila blokirana |
| `wu_membership_is_active` | Filtrira ali se članstvo vrti kot aktivno |
| `wu_membership_expired_check_query_params` | Filtrira parametre zaprta vprašanja uporabljena za najdenje izteklega članstev |
| `wu_membership_trial_check_query_params` | Filtrira parametre zaprta vprašanja uporabljena za najdenje iztekle trialov |
