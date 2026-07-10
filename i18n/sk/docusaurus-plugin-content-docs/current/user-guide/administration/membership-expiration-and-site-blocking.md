---
title: Vypadnutie členstva a blokovanie webu
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Vypadok členstva a blokovanie stránky {#membership-expiration-and-site-blocking}

Toto smernica vysvetľuje, ako Ultimate Multisite rieši vyprázdnenie členstva, ukončenie skúšobných okresov a blokovanie frontendovej stránky. Pokrýva životný cyklus členstva od aktívneho do vyprázdaného, nastavenia, ktoré kontrolujú, či sú stránky blokované, a čo skontrolovať, ak sa po uplynutí termínu členstva stránky stále dá prístup.

## Životný cyklus stavu členstva {#membership-status-lifecycle}

Každé členstvo v Ultimate Multisite má jeden z nasledujúcich stavov:

:::note Súčasťou sú lifetime (trvalé) bezplatné členstvá
Bezplatné členstvá sa automaticky nevyprázdnajú. Ultimate Multisite ich považuje za trvalý prístup, takže nie sú zahrnuté v kontrolách vyprázdnenia, ak ich stav nezmení admin alebo zákazníka presunie na iný produkt.
:::

| Stav | Značka |
|---|---|
| **Pending** (Očakáva) | Čaká prvú platbu alebo potvrdenie e-mailom |
| **Trialing** (Skúšobný okres) | Aktívny skúšobný okres, ešte nebolo prijaté žiadne platby |
| **Active** (Aktívny) | Platené a aktuálne |
| **On Hold** (V priebehu odovzdania) | Očakáva platbu za obnovenie (vytvorená faktúra, čaká na platbu) |
| **Expired** (Vyprázdnený) | Prešlo dátum vyprázdnenia a okres milosti bez obnovenia |
| **Cancelled** (Zrušený) | Výrazne zrušený zákazníkom alebo adminom |

### Ako sa členstva prechádzajú do stavu Expired {#how-memberships-transition-to-expired}

Ultimate Multisite vykonáva kontrolu v pozadí **každú hodinu**, ktorá hľadá členstva, ktoré by mali byť označené ako vyprázdané. Táto kontrola používa [Action Scheduler](https://actionscheduler.org/) (nie priamo WP-Cron) a beží ako zaplatená akcia `wu_membership_check`.

Kontrola vyprázdnenia má **vbudovaný okres milosti 3 dni** v pôvodnom nastavení. Členstvo nebude označené ako `expired`, kým neuplyne 3 dni po pretečení dátumu `date_expiration`. To dá zákazníkom čas na dokončenie pozvačnej platby, než sa ich stav zmení.

:::info
Tretorček na vyprázdnenie (grace period) je oddelený od nastavenia tretierček pre blokovanie frontendového bloku, ktoré je popísané nižšie. Tretierček na vyprázdnenie ovplyvňuje moment, kedy sa **stav zmení** z aktívneho/on-hold na vyprázdnený (expired). Tretierček pre frontendový blok ovplyvňuje moment, kedy sa **sit je zablokované**, ak sa stav už zmenil.
:::

#### Automatické obnoviteľné vs. Neautomatické automatické obnoviteľné členstvá {#auto-renewing-vs-non-auto-renewing-memberships}

Toto rozdiely sú dôležité na pochopenie správania vyprázdnenia:

- **Neautomatické automatické obnoviteľné členstvá** (`auto_renew = false`): Hodnotový cron job (cron job) sa postará o celý životný cyklus – vytvorí platby na obnovu, presunie členstvo do stavu on-hold a nakoniec ho označí ako vyprázdnený, ak platbu neobdrží.

- **Automatické automatické obnoviteľné členstvá** (`auto_renew = true`): Cronová kontrola expirácie **tento proces úplne preskúma**. Očakáva sa, že platobný brán (Stripe, PayPal atď.) upozorní Ultimate Multisite cez webhooks, ak sa predplatné neúspešne zmení alebo bol zrušený. Ak webhook nie je prijato – kvôli chybnemu nastaveniu endpointu, výpadku brány alebo zrušení predplatného mimo systému – členstvo môže zostať `active` (aktívne) bez definovania dátumu vyprázdnenia dlho, aj po jeho preteku.

### Ako sa ukončia skúšobné obdobia (Trials End) {#how-trials-end}

Keď skončí skúšobné obdobie členstva s triálom, systém:

1. Vytvorí odložený platbu na obnovu s plným výročným minimom
2. Presunie stav členstva z `trialing` do `on-hold`
3. Odošle e-mail o upozornení na platbu na obnovu zákazníkovi

Tento proces sa vykonáva na tom istom hodinovom rozvrhu ako pravidelná kontrola expirácie, ale **len pre neautomatické automatické obnoviteľné členstvá**. Pre automatické triály si platobný brán postará presun z triálu na platené predplatné.

## Blokovanie prístupu k frontendovi {#block-frontend-access}

Po výpadku členstva alebo jeho zastavenia sa v podobe, **je obmedzený iba dashboard wp-admin**. V externom (veľmi) predprave site je prístup pre návštevníkov stále plný. Ak chcete tiež blokovať prístup pre verejnosť, musíte zapnúť nastavenie **Block Frontend Access** (Blokovanie prístupu k predprave).

### Konfigurácia nastavenia {#configuring-the-setting}

Prejdite do **Ultimate Multisite > Settings > Memberships** a zapnite **Block Frontend Access**.

![Nastavenie Block Frontend Access zobrazujúce zapnutý prepínač, okres 7 dní a výber stránky blokovania predprave](/img/config/settings-membership-block-frontend.png)

Tu je kompletný prehľad stránky nastavení členstva:

![Kompletná stránka nastavení členstva](/img/config/settings-membership-full.png)

Tento chov prepočtu kontrolujú tri súvisiace nastavenia:

| Nastavenie | Popis | Počiatok |
|---|---|---|
| **Block Frontend Access** | Hlavný prepínač. Ak je zapnutý, blokuje verejný predprave site v sieti, keď jeho členstvo už nie je aktívne. | Vypnuté |
| **Frontend Block Grace Period** | Počet dní, po ktorých sa počka po neaktívnom členstve, než sa začne blokovanie. Nastavenie na `0` blokuje okamžite. | 0 |
| **Frontend Block Page** | Stránka na hlavnej site, na ktorú návštevníkov presmerujeme, keď je site zablokované. Ak nie je nastavená, návštevníci vidia všeobecnú správu "Toto site nie je momentálne prístupné" s odkazom na prihlasovacie stránku pre admin site. | Žiadne |

### Čo vidia návštevníci, keď je site zablokované {#what-visitors-see-when-a-site-is-blocked}

Keď je prístup k predprave blokovaný, návštevníci site buď:

1. **Presmerovaní** na stránku, ktorú ste si vybrali v **Frontend Block Page** (ak je nastavená), alebo
2. **Vidia štandardnú správu**: "Toto site nie je momentálne prístupné" s odkazom na prihlasovacie stránku pre admin site.

Admini site môžu stále prihlásiť -- prihlasovacia stránka nikdy nie je blokovaná.

### Čo je blokované a kedy {#what-gets-blocked-and-when}

Chovanie blokovania závisí od stavu členstva:

| Stav členského stavu | Blokovanie frontendu? | Aplikovaná zľava na časový period? |
|---|---|---|
| Aktívny | Nie | -- |
| Testovací okres | **Nie** (vidieť poznámku nižšie) | -- |
| Na pauze | Vzťahuje sa ako aktívny – nie blokovaný | -- |
| Vypadnutý | **Áno**, ak je Blokovanie prístupu k frontendu zapnuté | Áno |
| Zrušený | **Áno**, vždy (bez ohľadu na nastavenia) | **Nie** – okamžite blokovaný |
| Očakávanie | Nie blokovaný skontrolovaním členstva | -- |

:::warning Členské stavy v testovacím období nie sú blokované
Hoci sa okres testovacích obdobia ukončil, členstvo so stavom `trialing` **nie bude** na frontende blokované. Testovací okres musí najprv prejsť do iného stavu (obvykle `on-hold` pomocou cron úlohy, potom `expired`, ak nie je platený). Ak vidíte členstvá v testovacím období, ktoré sa neprešli do iného stavu, skontrolujte sekciu s riešením problémov nižšie.
:::

:::note Zrušené členstvá prechádzajú zľavou na časový period
Zrušené členstvá sú vždy blokované, ak je prebylo dátum skončenia, bez ohľadu na to, či je Blokovanie prístupu k frontendu zapnuté. Zľava na časový period Blokovania frontendu **sa nestrahuje** pre zrušené členstvá.
:::

## Riešenie problémov: Sitá zostávajúce prístupné po skončení okresu {#troubleshooting-sites-remaining-accessible-after-expiration}

Ak sitá zostávajú prístupné verejnej obiete po skončení okresu, postupujte podľa týchto kontrol v tomto poradí:

### 1. Overte, že nastavenie Blokovanie prístupu k frontendu je zapnuté {#1-verify-the-block-frontend-access-setting-is-enabled}

Prejdite do **Ultimate Multisite > Settings > Memberships** a potvrďte, že vypínač **Block Frontend Access** je zapnutý. Toto nastavenie je **v pôvodnom stave vypnuté**, čo znamená, že pri neaktívnom členstve sú obmedzené len wp-admin.

### 2. Skontrolujte zľavu na časový period Blokovania frontendu {#2-check-the-frontend-block-grace-period}

Na v rovnakom nastavení si prejdite na hodnotu **Frontend Block Grace Period**. Ak je to nastavené na 7 dní, napríklad, frontend nebude blokovaný až po uplynutí 7 dní od termínu expirácie členstva – aj keď je stav členstva už `expired`.

Nastavte toto na `0`, ak chcete okamžité blokovanie po neaktívnom stanovení členstva.

### 3. Potvrďte, že stav členstva sa skutočne zmenil {#3-confirm-the-membership-status-has-actually-changed}

Prejdite do **Ultimate Multisite > Memberships** a prekontrolujte stav ovplyvneného členstva. Ak zobrazuje `active` aj po uplynutí dátumu expirácie, prechod stavu sa nestracil. Bežné príčiny sú:

- **Členstvo sa automaticky obnovuje**: Prekontrolujte pole `auto_renew` na stránke úpravy členstva. Ak je automatické obnovenie zapnuté, cron job expirácie preskúma toto členstvo – spolieha sa na gateway platobných brán (Stripe, PayPal) na nahlásenie neúspechu. Prekontrolujte svoj dashboard brány (Stripe, PayPal), aby ste potvrdili, či je stav predplatného v súlade s tým, čo zobrazuje Ultimate Multisite.

- **Cron job sa nebehal**: Vidíte to v nasledujúcej kroku.

### 4. Overte, že Action Scheduler beží {#4-verify-action-scheduler-is-running}

Ultimate Multisite používa Action Scheduler na svoje cron joby. Prejdite do **Tools > Scheduled Actions** v admin sieti a hľadajte:

- **`wu_membership_check`** – Toto by malo zobraziť ako opakujúci sa akcia, ktorá sa vykonáva každú hodinu. Ak je chýba, spracovanie členstiev sa neplánuje.
- **`wu_async_mark_membership_as_expired`** – Toto sú jednotlivé úlohy na označenie konkrétnych členstiev ako expirovaných. Ak vidíte tu chybných akcií, môžu obsahovať chybové správy vysvetľujúce, prečo sa stalo chyba.

Ak vidíte zastavené alebo neúspešné akcie, máte možnosť problém s Action Scheduler. Bežné príčiny sú:

- **`DISABLE_WP_CRON` je v `wp-config.php` nastavené na `true` bez systémového cronom zastúpenia**
- **Nízky návštevnosť stránky** -- WP-Cron sa spustí len, keď si niekto navštívi stránku

Aby ste zabezpečili spoľahlé vykonávanie cronu, nastavte si systémový cron job:

```bash
# Spustiť každých 5 minút via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Alebo via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Skontrolujte problémy s Gateway Webhookom (Automatické obnovovanie členstiev) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Ak sa členstvo automaticky obnovuje, ale podạpka gatewayu je zrušená alebo neúspešne prebehla, a Ultimate Multisite stále zobrazuje stav ako `active`:

- **Stripe**: Prejdite do Dashboard Stripe > Customers a skontrolujte stav predplatného. Potom overte, či je webhookový endpoint aktív pod Developers > Webhooks. Endpoint by mal poukať na vašu stránku a ukazoval úspešné doručenia.
- **PayPal**: Skontrolujte stav predplatného v účte PayPal pre biznis. a overte doručenie IPN/webhooku.

Ak gateway zobrazuje predplatné ako zrušené, ale Ultimate Multisite nie, je pravdepodobné, že si webhookovú notifikáciu utratili. Môžete manuálne zmeniť stav členstva v **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Skontrolujte okres milosti pre vyprázdnenie (Úroveň Cronu) {#6-check-the-expiration-grace-period-cron-level}

Cron kontrola má vlastný okres milosti (štandardne: 3 dni) pred označenie členstva ako vyprázdneného. Toto je oddelené od okresu milosti blokovania v predprieči (frontend). Celkový čas pred blokovaním stránky môže byť:

**Okres milosti pre vyprázdnenie (3 dni)** + **Okres milosti blokovania v predprieči (vaše nastavenie)** = Celková zpoždod

Na príklade, pri štandardných nastaveniach a 7-dňovnom dočasnom období na prednej časti (frontend grace period) môže trvať až 10 dní po `date_expiration`, než sa webová stránka skutočne zablokuje.

### 7. Manuálne ukončiť členstvo {#7-manually-expire-a-membership}

Ak potrebujete okamžite zablokovať webovú stránku bez toho, aby ste čakali na cyklus cronu, môžete manuálne zmeniť stav členstva:

1. Prejdite do **Ultimate Multisite > Memberships**
2. Kliknite na ovplyvnené členstvo
3. Zmeniať stav na **Expired** (Ukončené) alebo **Cancelled** (Zrušené)
4. Kliknite na **Save** (Uložiť)

Blok na prednej časti sa uplatní pri nasledujúcom načítaní stránky (podľa dočasného obdobia blokovania pre ukončené členstvá, alebo okamžite pri zrušených členstvách).

## Zhrnutie {#summary}

Celá časová osa od dátumu ukončenia pôsobnosti k zablokovaniu webovej stránky:

```text
prechádza date_expiration
       |
       v
  [3-dňové dočasné obdobie cronu]     <-- členstvo sa stále zobrazuje ako aktívne/na priebehu
       |
       v
  Cron označí členstvo ako "expired" (ukončené)
       |
       v
  [Dočasné obdobie blokovania prednej časti]  <-- nastavené v Settings > Memberships
       |
       v
  Frontend webovej stránky je zablokovaný
```

Pre zrušená členstvá je cesta kratšia:

```text
  Členstvo zrušenie
       |
       v
  prechádza date_expiration (bez dočasného obdobia)
       |
       v
  Frontend webovej stránky je okamžite zablokovaný
```

## Referencia pre vývojárov {#developer-reference}

Nasledujúce hooks a filters vám umožňujú prispôsobiť správanie ukončenia pôsobnosti a blokovania:

| Hook/Filter | Popis |
|---|---|
| `wu_membership_grace_period_days` | Filtruje počet dní do konca okresu bezplného (grace period) pred označenie členstva ako vyprtané (définitiel: 3) |
| `wu_schedule_membership_check_interval` | Filtruje interval medzi kontrolou členstva (définitiel: 1 hodina) |
| `wu_membership_renewal_days_before_expiring` | Filtruje, kolko dní pred uplynutím sa vytvorí platba na obnovenie (définitiel: 3) |
| `wu_blocked_site_reactivation_url` | Filtruje pre poskytnutie prispôsobeného URL pre ponovenie po zablokovaní webu |
| `wu_membership_is_active` | Filtruje, či je členstvo považované za aktívne |
| `wu_membership_expired_check_query_params` | Filtruje parametre dotazu používané na nájdenie vyprtaných členstiev |
| `wu_membership_trial_check_query_params` | Filtruje parametre dotazu používané na nájdenie vyprtaných skúšobných okresov (trials) |
