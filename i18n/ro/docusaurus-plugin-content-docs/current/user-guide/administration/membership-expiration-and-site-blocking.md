---
title: Expiriunea Membraterii și Blocarea Site-ului
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expirarea Abonamentelor și Blocarea Site-ului

Acest ghid explică modul în care Ultimate Multisite gestionează expirarea abonamentelor, terminarea perioadelor de probă și blocarea site-ului la nivel de *frontend*. Acoperă ciclul de viață al unui abonament, de la activ la expirat, setările care controlează dacă site-urile sunt blocate și ce trebuie verificat atunci când site-urile rămân accesibile după expirarea unui abonament.

## Ciclul de Viață al Statusului Abonamentului

Fiecare abonament în Ultimate Multisite are unul dintre următoarele statusuri:

:::note Abonamentele gratuite sunt de viață
Abonamentele gratuite nu expiră automat. Ultimate Multisite le tratează ca acces de viață, așa că nu sunt incluse în verificările de expirare, cu excepția cazului în care un administrator își schimbă statusul sau mut clientul într-un alt produs.
:::

| Status | Semnificație |
|---|---|
| **Pending** | Așteaptă prima plată sau verificarea prin e-mail |
| **Trialing** | Perioada de probă activă, nu s-a colectat încă nicio plată |
| **Active** | Plătit și curent |
| **On Hold** | Așteaptă plata de reînnoire (factură creată, așteaptă plata) |
| **Expired** | A depășit data de expirare și perioada de grație fără reînnoire |
| **Cancelled** | Anulat explicit de client sau de administrator |

### Cum Trează Abonamentele în Statusul Expirat

Ultimate Multisite rulează o verificare în fundal **în fiecare oră** care caută abonamentele care ar trebui marcate ca expirate. Această verificare folosește [Action Scheduler](https://actionscheduler.org/) (nu WP-Cron direct) și rulează ca acțiunea programată `wu_membership_check`.

Verificarea de expirare are o **perioadă de grație încorporată de 3 zile** ca implicit. Un abonament nu va fi marcat ca `expired` până când au trecut 3 zile de la `date_expiration`. Acest lucru oferă clienților timp să finalizeze o plată întârziată înainte ca statusul lor să se modifice.

:::info
Perioada de grație de 3 zile pentru expirare este separată de setarea Perioada de Grație pentru Blocarea Frontend-ului, descrisă mai jos. Perioada de grație pentru expirare controlează când **statusul se schimbă** de la activ/în așteptare la expirat. Perioada de grație pentru blocarea frontend-ului controlează când **site-ul este blocat** după ce statusul a schimbat deja.
:::

#### Abonamentele cu Reînnoire Automată vs. Cele fără Reînnoire Automată

Această distincție este crucială pentru înțelegerea comportamentului de expirare:

- **Abonamentele fără reînnoire automată** (`auto_renew = false`): Job-ul cron orar gestionează întregul ciclu de viață — creează plăți de reînnoire, trezează abonamentul în statusul *on-hold* și, în cele din urmă, îl marchează ca expirat dacă nu se primește plată.

- **Abonamentele cu reînnoire automată** (`auto_renew = true`): Verificarea cron de expirare **sărită complet peste acestea**. Se așteaptă ca gateway-ul de plată (Stripe, PayPal etc.) să notifice Ultimate Multisite prin *webhooks* atunci când o abonament eșuează sau este anulat. Dacă webhook-ul nu este primit — din cauza unui *endpoint* configurat greșit, a unei întreruperi a gateway-ului sau a unui abonament anulat în afara sistemului — abonamentul poate rămâne `active` la infinit, chiar și după ce trece data de expirare.

### Cum Termină Probele

Când perioada de probă a unui abonament *trialing* se termină, sistemul:

1. Creează o plată de reînnoire în așteptare cu suma integrală a abonamentului.
2. Trezează statusul abonamentului de la `trialing` la `on-hold`.
3. Trimite un e-mail de notificare pentru plata de reînnoire clientului.

Acest proces rulează pe același program orar ca și verificarea regulată de expirare, dar **doar pentru abonamentele fără reînnoire automată**. Pentru probele cu reînnoire automată, gateway-ul de plată gestionează trecerea de la probă la abonament plătit.

## Blocarea Accesului Frontend

În mod implicit, atunci când un abonament expiră sau trece în statusul *on hold*, **este restricționat doar dashboard-ul wp-admin**. Frontend-ul public al site-ului rămâne accesibil vizitatorilor. Pentru a bloca și accesul public, trebuie să activați setarea **Block Frontend Access**.

### Configurarea Setării

Navigați la **Ultimate Multisite > Settings > Memberships** și activați **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Iată o vedere completă a paginii de setări pentru abonamente:

![Membership settings full page](/img/config/settings-membership-full.png)

Treita setări legate controlează acest comportament:

| Setare | Descriere | Implicit |
|---|---|---|
| **Block Frontend Access** | Comutator principal. Când este activat, blochează frontend-ul public al site-urilor de rețea atunci când abonamentul nu mai este activ. | Oprit |
| **Frontend Block Grace Period** | Numărul de zile de așteptare după ce abonamentul devine inactiv înainte de blocare. Setați la `0` pentru blocare imediată. | 0 |
| **Frontend Block Page** | O pagină de pe site-ul principal către care sunt redirecționați vizitatorii atunci când un site este blocat. Dacă nu este setată, vizitatorii văd un mesaj generic de tip "Site-ul nu este disponibil". | Niciunul |

### Ce Ved Vizitatorii Când un Site Este Blocat

Când accesul frontend este blocat, vizitatorii site-ului vor:

1. **Fi redirecționați** către pagina pe care ați selectat-o în **Frontend Block Page** (dacă este configurată), sau
2. **A vedea un mesaj implicit**: "This site is not available at the moment." (Acest site nu este disponibil în acest moment.) cu un link către pagina de *login* pentru administratorul site-ului.

Administratorii site-urilor pot accesa totuși pagina de *login* — pagina de *login* nu este niciodată blocată.

### Ce Se Blochează și Când

Comportamentul de blocare depinde de statusul abonamentului:

| Statusul Abonamentului | Blocat Frontend-ul? | Perioada de Grație Aplicată? |
|---|---|---|
| Active | Nu | -- |
| Trialing | **Nu** (vezi nota de mai jos) | -- |
| On Hold | Considerat activ -- nu este blocat | -- |
| Expired | **Da**, dacă Block Frontend Access este activat | Da |
| Cancelled | **Da**, întotdeauna (indiferent de setare) | **Nu** -- blocat imediat |
| Pending | Nu este blocat prin verificarea abonamentului | -- |

:::warning Abonamentele Trialing nu sunt blocate
Chiar dacă perioada de probă a expirat, un abonament cu statusul `trialing` **nu** va fi blocat pe frontend. Proba trebuie mai întâi să treacă la un alt status (tipic `on-hold` prin job-ul cron, apoi `expired` dacă nu este plătit). Dacă vedeți abonamente *trialing* care nu au trecut de status, verificați secțiunea de *troubleshooting* de mai jos.
:::

:::note Abonamentele Cancelled ocolește perioada de grație
Abonamentele *cancelled* sunt întotdeauna blocate odată ce a trecut data de expirare, indiferent dacă Block Frontend Access este activat. Perioada de grație pentru blocarea frontend-ului **nu** se aplică abonamentelor *cancelled*.
:::

## Depanare: Site-uri care Rămân Accesibile După Expirare

Dacă site-urile rămân accesibile public după expirarea unui abonament, urmați aceste verificări în ordine:

### 1. Verificați dacă Setarea Block Frontend Access Este Activată

Mergeți la **Ultimate Multisite > Settings > Memberships** și confirmați că comutatorul **Block Frontend Access** este activat. Această setare este **oprișă implicit**, ceea ce înseamnă că doar wp-admin este restricționat atunci când un abonament devine inactiv.

### 2. Verificați Perioada de Grație pentru Blocarea Frontend-ului

Pe aceeași pagină de setări, verificați valoarea **Frontend Block Grace Period**. Dacă aceasta este setată la 7 zile, de exemplu, frontend-ul nu va fi blocat până după 7 zile de la data de expirare a abonamentului — chiar dacă statusul abonamentului este deja `expired`.

Setați acest lucru la `0` dacă doriți blocare imediată după ce abonamentul devine inactiv.

### 3. Confirmați că Statusul Abonamentului S-a Schimbat Efectiv

Mergeți la **Ultimate Multisite > Memberships** și verificați statusul abonamentului afectat. Dacă arată încă `active` deși a trecut data de expirare, tranziția de status nu a avut loc. Cauze comune:

- **Abonamentul este cu reînnoire automată**: Verificați câmpul `auto_renew` pe pagina de editare a abonamentului. Dacă reînnoirea automată este activată, cron-ul de expirare sări peste acest abonament — el se bazează pe gateway-ul de plată pentru a raporta eșecul. Verificați dashboard-ul gateway-ului (Stripe, PayPal) pentru a confirma că statusul abonamentului se potrivește cu ceea ce arată Ultimate Multisite.

- **Job-ul cron nu a rulat**: Vedeți următorul pas.

### 4. Verificați dacă Action Scheduler Rulează

Ultimate Multisite folosește Action Scheduler pentru job-urile sale cron. Mergeți la **Tools > Scheduled Actions** în admin-ul de rețea și căutați:

- **`wu_membership_check`** — Acesta ar trebui să apară ca o acțiune recursivă care rulează în fiecare oră. Dacă lipsește, verificările de abonament nu sunt programate.
- **`wu_async_mark_membership_as_expired`** — Acestea sunt sarcini individuale pentru a marca abonamentele ca expirate. Dacă vedeți acțiuni eșuate aici, acestea pot conține mesaje de eroare care explică de ce.

Dacă vedeți acțiuni blocate sau eșuate, s-ar putea să aveți o problemă cu Action Scheduler. Cauze comune:

- **`DISABLE_WP_CRON` este setat la `true`** în `wp-config.php` fără un înlocuitor cron la nivel de sistem
- **Trafic scăzut pe site** — WP-Cron rulează doar când cineva vizitează site-ul

Pentru a asigura o execuție cron fiabilă, setați un job cron la nivel de sistem:

```bash
# Rulează în fiecare 5 minute via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Sau via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Verificați Problemele Webhook-urilor Gateway-ului (Abonamente cu Reînnoire Automată)

Dacă abonamentul este cu reînnoire automată și abonamentul gateway-ului a fost anulat sau a eșuat, dar Ultimate Multisite îl arată încă ca `active`:

- **Stripe**: Mergeți la Stripe Dashboard > Customers și verificați statusul abonamentului. Apoi verificați dacă *endpoint*-ul webhook este activ sub Developers > Webhooks. *Endpoint*-ul ar trebui să indice site-ul dumneavoastră și să arate livrări reușite.
- **PayPal**: Verificați statusul abonamentului în contul dumneavoastră de afaceri PayPal și verificați livrarea IPN/webhook.

Dacă gateway-ul arată abonamentul ca fiind anulat, dar Ultimate Multisite nu, notificarea webhook a fost probabil pierdută. Puteți schimba manual statusul abonamentului în **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Verificați Perioada de Grație a Expirării (Nivel Cron)

Verificarea cron are propria sa perioadă de grație (implicit: 3 zile) înainte de a marca un abonament ca expirat. Aceasta este separată de perioada de grație pentru blocarea frontend-ului. Timpul total înainte ca un site să fie blocat poate fi:

**Perioada de grație pentru expirare (3 zile)** + **Perioada de grație pentru blocarea frontend-ului (setarea dumneavoastră)** = Întârziere totală

De exemplu, cu setările implicite și o perioadă de grație frontend de 7 zile, poate dura până la 10 zile după `date_expiration` înainte ca site-ul să fie blocat efectiv.

### 7. Expirarea Manuală a unui Abonament

Dacă trebuie să blocați imediat un site fără a aștepta ciclul cron, puteți schimba manual statusul abonamentului:

1. Mergeți la **Ultimate Multisite > Memberships**
2. Faceți clic pe abonamentul afectat
3. Schimbați statusul în **Expired** sau **Cancelled**
4. Faceți clic pe **Save**

Blocarea frontend-ului va intra în vigoare la următoarea încărcare a paginii (sub rezerva Perioadei de Grație pentru Blocarea Frontend-ului pentru abonamentele expirate, sau imediat pentru cele *cancelled*).

## Rezumat

Linia de timp completă de la data de expirare până la blocarea site-ului:

```text
date_expiration trece
       |
       v
  [Perioada de grație cron de 3 zile]     <-- abonamentul arată încă ca activ/în așteptare
       |
       v
  Cron marchează abonamentul ca "expired"
       |
       v
  [Perioada de Grație pentru Blocarea Frontend-ului]  <-- configurată în Settings > Memberships
       |
       v
  Frontend-ul site-ului este blocat
```

Pentru abonamentele *cancelled*, calea este mai scurtă:

```text
  Abonamentul este anulat
       |
       v
  date_expiration trece (fără perioadă de grație)
       |
       v
  Frontend-ul site-ului este blocat imediat
```

## Referință pentru Dezvoltatori

Următoarele *hook*-uri și filtre vă permit să personalizați comportamentul de expirare și blocare:

| Hook/Filter | Descriere |
|---|---|
| `wu_membership_grace_period_days` | Filtrează numărul de zile de perioadă de grație înainte de a marca un abonament ca expirat (implicit: 3) |
| `wu_schedule_membership_check_interval` | Filtrează intervalul dintre verificările de abonament (implicit: 1 oră) |
| `wu_membership_renewal_days_before_expiring` | Filtrează câte zile înainte de expirare pentru a crea o plată de reînnoire (implicit: 3) |
| `wu_blocked_site_reactivation_url` | Filtrează pentru a oferi un URL de reactivare personalizat atunci când un site este blocat |
| `wu_membership_is_active` | Filtrează dacă un abonament este considerat activ |
| `wu_membership_expired_check_query_params` | Filtrează parametrii de interogare folosiți pentru a găsi abonamentele expirate |
| `wu_membership_trial_check_query_params` | Filtrează parametrii de interogare folosiți pentru a găsi probele expirate |
