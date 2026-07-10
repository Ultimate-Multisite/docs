---
title: Vypršení členství a blokování stránky
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expirace členství a blokování webu {#membership-expiration-and-site-blocking}

Tento průvodce vysvětluje, jak Ultimate Multisite zpracovává expiraci členství, ukončení zkušebních období a blokování webu na frontendu. Pokrývá životní cyklus členství od aktivního stavu po expiraci, nastavení, která určují, zda jsou weby blokovány, a co zkontrolovat, pokud zůstanou weby dostupné i po expiraci členství.

## Životní cyklus stavu členství {#membership-status-lifecycle}

Každé členství v Ultimate Multisite má jeden ze stavů:

:::note Bezplatná členství jsou trvalé
Bezplatná členství neexpirují automaticky. Ultimate Multisite je považuje za trvalý přístup, takže nejsou zahrnuta do kontrol expirace, pokud to administrátor nezmění nebo zákazníka nepřemístí do jiného produktu.
:::

| Stav | Význam |
|---|---|
| **Pending** | Čeká na první platbu nebo ověření e-mailu |
| **Trialing** | Aktuální zkušební období, platba ještě nebyla vybrána |
| **Active** | Zaplaceno a aktuální |
| **On Hold** | Čeká na platbu obnovy (vytvořena faktura, čeká na platbu) |
| **Expired** | Po expiraci a období milosti bez obnovy |
| **Cancelled** | Explicitně zrušeno zákazníkem nebo administrátorem |

### Jak členství přechází do stavu Expired {#how-memberships-transition-to-expired}

Ultimate Multisite provádí kontrolu v pozadí **každou hodinu**, která hledá členství, která by měla být označena jako expirovaná. Tato kontrola používá [Action Scheduler](https://actionscheduler.org/) (ne přímo WP-Cron) a spouští se jako plánovaná akce `wu_membership_check`.

Kontrola expirace má výchozí **vestavěné období milosti 3 dní**. Členství nebude označeno jako `expired`, dokud neuplyne 3 dní od jeho `date_expiration`. To zákazníkům dává čas na vyřízení pozdní platby, než se změní jejich stav.

:::info
Třiήμεové období milosti při expiraci je samostatné od nastavení Frontend Block Grace Period, které je popsáno níže. Období milosti při expiraci určuje, kdy se **stav změní** z aktivního/on-hold na expirovaný. Období milosti při blokování frontendu určuje, kdy je **web blokován**, poté co se stav již změnil.
:::

#### Členství s automatickou vs. bezautomatickou obnovou {#auto-renewing-vs-non-auto-renewing-memberships}

Toto rozlišení je klíčové pro pochopení chování expirace:

- **Členství bez automatické obnovy** (`auto_renew = false`): Hodinová cron úloha zpracuje celý životní cyklus – vytvoří platby za obnovu, převede členství do stavu on-hold a nakonec ho označí jako expirované, pokud není platba přijata.

- **Členství s automatickou obnovou** (`auto_renew = true`): Cron kontrola expirace je **z nich zcela vyloučena**. Očekává se, že platební brána (Stripe, PayPal atd.) upozorní Ultimate Multisite přes webhooks, když se předplatné zruší nebo selže. Pokud webhook není přijat – kvůli špatně nakonfigurovanému endpointu, výpadu brány nebo předplatné zrušenému mimo systém – členství může zůstat `active` neomezeně dlouho i po uplynutí data expirace.

### Jak skončí zkušební období {#how-trials-end}

Když skončí zkušební období členství, systém:

1. Vytvoří platbu za obnovu v čekajícím stavu s plnou částkou předplatného
2. Převede stav členství ze `trialing` na `on-hold`
3. Pošle e-mail s upozorněním na platbu obnovy zákazníkovi

Tento proces běží na stejném hodinách rozvrhu jako pravidelná kontrola expirace, ale **pouze pro členství bez automatické obnovy**. Pro zkušební období s automatickou obnovou se přechod ze zkušebního období na placené předplatné stará platební brána.

## Blokování frontendu {#block-frontend-access}

Výchozí nastavením je, že když členství expiruje nebo se dostane do stavu on hold, **omezen je pouze wp-admin dashboard**. Veřejný frontend webu zůstává pro návštěvníky dostupný. Pokud chcete také zablokovat veřejný přístup, musíte aktivovat nastavení **Block Frontend Access**.

### Konfigurace nastavení {#configuring-the-setting}

Přejděte na **Ultimate Multisite > Settings > Memberships** a aktivujte **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Zde je plný pohled na stránku nastavení členství:

![Membership settings full page](/img/config/settings-membership-full.png)

Tři související nastavení kontrolují toto chování:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Hlavní přepínač. Když je aktivován, blokuje veřejný frontend síťových webů, když není členství aktivní. | Off |
| **Frontend Block Grace Period** | Počet dní, který se počká po neaktivním stavu členství, než bude zablokován. Nastavte na `0` pro okamžité blokování. | 0 |
| **Frontend Block Page** | Stránka na hlavní stránce, na kterou se návštěvníky přesměrují, když je web zablokován. Pokud není nastaveno, návštěvníci uvidí obecnou zprávu „Site not available“. | None |

### Co návštěvníci uvidí, když je web zablokován {#what-visitors-see-when-a-site-is-blocked}

Když je zablokován přístup na frontend, návštěvníci webu buď:

1. **Budou přesměrováni** na stránku, kterou jste vybrali v **Frontend Block Page** (pokud je nakonfigurováno), nebo
2. **Uvidí výchozí zprávu**: „This site is not available at the moment.“ se odkazu na stránku přihlášení pro administrátora webu.

Administrátoři webů stále mohou přihlášovat – stránka přihlášení je nikdy zablokována.

### Co je blokováno a kdy {#what-gets-blocked-and-when}

Chování blokování závisí na stavu členství:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (viz poznámka níže) | -- |
| On Hold | Svářeno jako aktivní – není blokováno | -- |
| Expired | **Ano**, pokud je aktivní Block Frontend Access | Ano |
| Cancelled | **Ano**, vždy (bez ohledu na nastavení) | **Ne** -- blokováno okamžitě |
| Pending | Není blokováno pomocí kontroly členství | -- |

:::warning Členství s zkušebním obdobím nejsou blokována
I když skončilo zkušební období, členství se ve stavu `trialing` **nebude** blokováno na frontendu. Zkušební období musí nejprve přejít do jiného stavu (obvykle `on-hold` pomocí cron úlohy, pak `expired`, pokud není zaplaceno). Pokud vidíte členství ve stavu zkušební období, která se nezměnila, zkontrolujte sekci pro řešení problémů níže.
:::

:::note Členství zrušená omezují období milosti
Členství zrušená jsou vždy blokována, jakmile uplyne datum expirace, bez ohledu na to, zda je aktivní Block Frontend Access. Období milosti při blokování frontendu **neplatí** pro zrušená členství.
:::

## Řešení problémů: Weby zůstávají dostupné po expiraci {#troubleshooting-sites-remaining-accessible-after-expiration}

Pokud zůstávají weby veřejně dostupné po expiraci členství, postupujte podle těchto kontrol v pořadí:

### 1. Ověřte, že je nastavení Block Frontend Access aktivní {#1-verify-the-block-frontend-access-setting-is-enabled}

Přejděte na **Ultimate Multisite > Settings > Memberships** a potvrďte, že přepínač **Block Frontend Access** je zapnutý. Toto nastavení je **výchozí stav vypnutý**, což znamená, že když členství přestane být aktivní, je omezen pouze wp-admin.

### 2. Zkontrolujte Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Na stejné stránce nastavení zkontrolujte hodnotu **Frontend Block Grace Period**. Pokud je nastavena na 7 dní, například, frontend nebude zablokován až po 7 dnech od data expirace členství – i když stav členství je již `expired`.

Nastavte toto na `0`, pokud chcete okamžité blokování po neaktivním stavu členství.

### 3. Potvrďte, že se stav členství skutečně změnil {#3-confirm-the-membership-status-has-actually-changed}

Přejděte na **Ultimate Multisite > Memberships** a zkontrolujte stav dotčeného členství. Pokud stále zobrazuje `active` i přes uplynutí data expirace, přechod stavu neproběhl. Běžné příčiny:

- **Členství je s automatickou obnovou**: Zkontrolujte pole `auto_renew` na stránce úpravy členství. Pokud je automatická obnova povolena, cron úloha o expiraci toto členství přeskočí – spoléhá se na platební bránu, aby o selhání informovala. Zkontrolujte dashboard vaší brány (Stripe, PayPal), abyste potvrdili, že stav předplatného odpovídá tomu, co Ultimate Multisite zobrazuje.

- **Cron úloha nebyla spuštěna**: Podívejte se na další krok.

### 4. Ověřte, že Action Scheduler běží {#4-verify-action-scheduler-is-running}

Ultimate Multisite používá Action Scheduler pro své cron úlohy. Přejděte na **Tools > Scheduled Actions** v administraci sítě a vyhledejte:

- **`wu_membership_check`** – Toto by mělo být opakující se akce spouštěná každou hodinu. Pokud chybí, kontroly členství nejsou plánovány.
- **`wu_async_mark_membership_as_expired`** – Jedná se o jednotlivé úlohy pro označení konkrétních členství jako expirovaná. Pokud vidíte zde selhání akcí, mohou obsahovat zprávy chybějící vysvětlující, proč.

Pokud vidíte zablokované nebo selhávající akce, můžete mít problém s Action Schedulerem. Běžné příčiny:

- **`DISABLE_WP_CRON` je nastaveno na `true`** v `wp-config.php` bez náhradní systémové cron úlohy
- **Nízký provoz webu** – WP-Cron běží pouze, když někdo navštíví web

Pro zajištění spolehlivého spouštění cron úlohy nastavte systémovou cron úlohu:

```bash
# Spouštět každých 5 minut pomocí wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Nebo přes WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Zkontrolujte problémy s webhooky brány (Členství s automatickou obnovou) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Pokud je členství s automatickou obnovou a předplatné brány bylo zrušeno nebo selhalo, ale Ultimate Multisite stále zobrazuje `active`:

- **Stripe**: Přejděte do Stripe Dashboard > Customers a zkontrolujte stav předplatného. Poté ověřte, že endpoint webhook je aktivní pod Developers > Webhooks. Endpoint by měl ukazovat na váš web a zobrazovat úspěšné dodání.
- **PayPal**: Zkontrolujte stav předplatného ve svém účtu PayPal Business a ověřte dodání IPN/webhook.

Pokud brána zobrazuje předplatné jako zrušené, ale Ultimate Multisite ne, pravděpodobně došlo k úbytku webhookové notifikace. Můžete ručně změnit stav členství v **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Zkontrolujte období milosti expirace (Na úrovni cron) {#6-check-the-expiration-grace-period-cron-level}

Cron kontrola má vlastní období milosti (výchozí: 3 dny) před označení členství jako expirované. To je oddělené od období milosti při blokování frontendu. Celkový čas, který uplyne, než je web zablokován, může být:

**Období milosti expirace (3 dny)** + **Období milosti blokování frontendu (vaše nastavení)** = Celková zpoždění

Například, se výchozími nastaveními a 7denním obdobím milosti frontendu, může trvat až 10 dní od `date_expiration`, než je web skutečně zablokován.

### 7. Ruční expirace členství {#7-manually-expire-a-membership}

Pokud potřebujete okamžitě zablokovat web bez čekání na cyklus cron, můžete ručně změnit stav členství:

1. Přejděte na **Ultimate Multisite > Memberships**
2. Klikněte na dotčené členství
3. Změňte stav na **Expired** nebo **Cancelled**
4. Klikněte **Save**

Blokování frontendu nabude účinku při následujícím načtení stránky (podmíněno Obdobím milosti při blokování frontendu pro expirovaná členství, nebo okamžitě pro zrušená členství).

## Shrnutí {#summary}

Celý časový rámec od data expirace k blokování webu:

```text
date_expiration uplyne
       |
       v
  [3-denní období milosti cron]     <-- členství stále zobrazuje aktivní/on-hold
       |
       v
  Cron označí členství jako "expired"
       |
       v
  [Období milosti blokování frontendu]  <-- nakonfigurováno v Settings > Memberships
       |
       v
  Frontend web je zablokován
```

Pro zrušená členství je cesta kratší:

```text
  Členství zrušeno
       |
       v
  date_expiration uplyne (žádné období milosti)
       |
       v
  Frontend web je okamžitě zablokován
```

## Reference pro vývojáře {#developer-reference}

Následující hooky a filtry vám umožňují přizpůsobit chování expirace a blokování:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filtruje počet dní období milosti před označení členství jako expirované (výchozí: 3) |
| `wu_schedule_membership_check_interval` | Filtruje interval mezi kontrolami členství (výchozí: 1 hodina) |
| `wu_membership_renewal_days_before_expiring` | Filtruje, kolik dní před expirací vytvořit platbu za obnovu (výchozí: 3) |
| `wu_blocked_site_reactivation_url` | Filtruje, aby poskytl vlastní URL pro reaktivaci, když je web zablokován |
| `wu_membership_is_active` | Filtruje, zda je členství považováno za aktivní |
| `wu_membership_expired_check_query_params` | Filtruje parametry dotazu používané k nalezení expirovaných členství |
| `wu_membership_trial_check_query_params` | Filtruje parametry dotazu používané k nalezení expirovaných zkušebních období |
