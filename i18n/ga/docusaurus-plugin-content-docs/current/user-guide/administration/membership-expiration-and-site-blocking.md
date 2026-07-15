---
title: An tairiscint an bhfáine agus an chloisteán an site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Déanachais agus Blocadh Site

Linn téachais seo ainsíonn conas Ultimate Multisite déanann an t-aonacht deánacha, an deireadh trial agus blocadh site ar an chuid chéad. Tá sé ag cur isteach an seachtain deánach deánach ó actív go deiridh, na réiteach a bhfaidh an t-aonacht a cheannach chun an t-aonachtaí a bheith blocaithe, agus conas a fheiceáil ar chuid site a bheith ag cur isteach tar éis a thaispeáint an t-aonacht.

## Seachtain Stáiste An T-aonacht {#membership-status-lifecycle}

Tá aon stádas ag an t-aonacht i Ultimate Multisite:

:::note Tá deánacha leibhéil (Free memberships) ar chuid láifeartha
Ní bhfaidh deánacha leibhéil a bheith blocaithe go dtí an t-aonachta a deiridh. Déanacha leibhéil níl aon fáil ag déanadh go dtí an t-aonacht a deiridh go dtí an t-aonacht a deiridh. Tá siad ag cur isteach ar chuid láifeartha, mar níl siad curte ag cur isteach ar cheileanna deánacha leibhéil má thaispeáint an chláir (administrator) a athrúchann an stádas na hionta nó a bhíonn an custaiméar ag cur iarracht ar chuid eile.
:::

| Stádas | An t-aonacht |
|---|---|
| **Pending** | Ag cur isteach an chéad pléas nó fhorbairt email |
| **Trialing** | Seachtain trial actív, níl aon cheannach a bhailte go dtí an seo |
| **Active** | Bhailte agus curtha ar fáil |
| **On Hold** | Tá pléas athrú ag cur isteach (tá an chláir a chur ar fáil, ag teacht ar cheannach) |
| **Expired** | Déanadh an t-aonachta agus an t-amach deánach gan athrúcháin |
| **Cancelled** | Bhloint go díreach de na custaiméar nó de na chláir |

### Conas a bhíonn Deánacha ag Athrú chun Expired {#how-memberships-transition-to-expired}

Déanann Ultimate Multisite chura chasaí ar chuid láifeartha **gach uair aon ora** a losnachann an t-aonachtaí a bheith mar expired. Dara chura seo a úsáideann [Action Scheduler](https://actionscheduler.org/) (ní WP-Cron go díreach) agus a thaispeáint ag cur isteach mar an action scheduled `wu_membership_check`.

Tá **amach deánach leibhéil de 3 lá** ag cur isteach ar chuid foirme. Níl deánadh ag cur isteach mar `expired` go dtí 3 lá tar éis a thaispeáint an `date_expiration` na hionta. Is é seo a chur ar fáil do cheileanna amach chun pléas leathúil a deánadh primaiste má tá stádas ag cur isteach.

:::info
An t-amhráid de 3 dláin (grace period) chun an t-amhráid de gráinne (grace period) de Bloc Frontend is sé mhór. An t-amhráid de gráinne a chiallaíonn conas **déimhin an stater** (status changes) ó active/on-hold go expired. An t-amhráid de gráinne de bloc frontend a chiallaíonn conas **bhaile an site blocked** tar éis lá tá an stater atá athrú.
:::

#### Miúcháin a thaispeánann (Auto-Renewing) vs. Miúcháin ní a thaispeánann (Non-Auto-Renewing) {#auto-renewing-vs-non-auto-renewing-memberships}

Is é seo an chuid is mór chun an chéad t-amhráid de gráinne a bheith ag iarraidh:

- **Miúcháin ní a thaispeánann** (`auto_renew = false`): An cron job ar an oíre (hourly) a chiallaíonn an t-amhráid go léir -- tá sé ag cur iarrachtaí breiseanna nua, ag athrú an miúchán go on-hold, agus ag cur éadach go expired mar níl aon cheangailte.

- **Miúcháin a thaispeánann** (`auto_renew = true`): An chuid de chreideamh (cron expiration check) **tá sé anois an t-amhráid seo go léir**. Is é an chéad fáil (payment gateway, víseolas Stripe, PayPal, etc.) ag iarraidh a bheith ag cur iarrachtaí ar Ultimate Multisite tríd webhooks nuair a bhíonn an subscription ag déanamh cinnte nó ag teacht chun cinn. Má níl an webhook ag teacht -- mar gheall ar endpoint ó chomhartha bunaithe (misconfigured), deargadh an fáil, nó mar chóir an subscription ag déanamh cinnte an t-amhráid -- is féidir leis an miúchán a bheith `active` go léir tar éis láidir an t-amhráid de gráinne.

### Conas a thaispeáintear na Triailí (Trials End) {#how-trials-end}

Nuair a dhéanann an triailí de chuid miúcháin triail (trialing membership), an comhthéacs:

1. Cur trí ar fáil iarracht breiseanna nua le cur áit an t-amhráid de subscription go léir
2. Athrú an stater an miúcháin ó `trialing` go `on-hold`
3. Ansaigh email a chur ar fáil do chustadan mar chuid iarracht breiseanna nua

Tá an t-amhráid seo ag déanamh ar an amaran oíre (hourly schedule) mar atá an chéad t-amhráid de gráinne, ach **chúnaithe go léir le miúcháin ní a thaispeánann**. Do triailí a thaispeánann, tá an fáil ag cur iarrachtaí ar an athrú ó trial go subscription a bhuaidh.

## Bloc an Fhothracha (Block Frontend Access) {#block-frontend-access}

Goile, marabhar, nuair a bhfáid, máireamhail é **an t-dashboard wp-admin** an-chúramh beag chun an t-site publaic a bheith ar fáil do chontaitheoirí. Tá an frontend de chuid an t-site ar fáil go deo do chontaitheoirí. Mar éadúil, chun cur isteach ar fáil publaic hefyd, leat a bheith ag cur isteach ar fáil an cur chuig **Block Frontend Access**.

### Cur Chuig an Setting {#configuring-the-setting}

Go raibh tú ag cur isteach ar **Ultimate Multisite > Settings > Memberships** agus cur isteach ar fáil **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Seo an chuid tábhachta de seachtainn setting membership:

| Setting | A chur in iúl | Default |
|---|---|---|
| **Block Frontend Access** | An cur chuig mhór. Nuair a bhíonn sé cur isteach, nílann sé ar fáil an frontend publaic de chuid sites network nuair atá an t-membership gan obair. | Off |
| **Frontend Block Grace Period** | An n-éifeachtais na láanna a bheith ag iarraidh tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeacht

| Status Membership | Bloc Frontend? | Periode Grá? |
|---|---|---|
| Active | Níl | -- |
| Trialing | **Níl** (déan ar nóim seo) | -- |
| On Hold | Déan go leathanach - níl blocáil | -- |
| Expired | **Is**, má tá Block Frontend Access ar | Is |
| Cancelled | **Is**, anois (gach chéad) | **Níl** -- blocáil agad amach |
| Pending | Níl blocála trí chuid cheistíochta membership | -- |

:::warning Níl blocála ar fhoincí Trialing
Nóta: Mar sin níl blocáil ar an frontend mar gheall ar an t-amhránaí trial. Nuair a bhíonn an t-amhránaí trial ag teacht i ardán eile (tiomáid ar `on-hold` trí cron job, agus ansin `expired` má níl curtha amháin), níl blocáil ar an frontend. Má tá tú ag fheiceáil membership trialing atá ag teacht in aisiú, léiri an seachtain de athbhreithniú seo i ardán troubleshooting leathanach seo a bhonraithe.
:::

:::note Níl curtha amháin an t-amhránaí Cancelled ar an periud grá
Nóta: Mar sin níl blocáil ar an t-amhránaí Cancelled mar gheall ar an periud grá. Is blocála gach chéad anois má tá an t-amhránaí atá ag teacht in aisiú, ag éile, níl curtha amháin Block Frontend Access ar. Níl an Periud Grá Blocáil ar an frontend ar an t-amhránaí Cancelled.
:::

## Troubleshooting: Sites a Bhíonn Ag Fhiontú tar éis an Déan {#what-visitors-see-when-a-site-is-blocked}

Má tá siti ag teacht in aisiú tar éis a thaispeán an t-amhránaí, déan an churaí seo i ardán:

### 1. Déan ar an t-amhránaí Block Frontend Access ar fáil {#what-gets-blocked-and-when}

Go dtí **Ultimate Multisite > Settings > Memberships** agus féachaint ar an seachtain de **Block Frontend Access**, léiri go bhfuil sé ar fáil. Is é seo ar fáil **níl curtha amháin ar an t-amhránaí**, rud a bhíonn ag teacht in aisiú má tá an t-amhránaí ag teacht in aisiú.

### 2. Déan ar an Periud Grá Blocáil ar an frontend {#troubleshooting-sites-remaining-accessible-after-expiration}

Ar an chúasán ar chomhchealaí seo, léigh an cur chuig an cur chuig **Frontend Block Grace Period**. Má tá sé setaithe ar 7 lá, dá fáil example, ní bheidh an frontend a bhí blocked go dtí 7 lá tar éis an t-aonachas an chomhchealaí – mar gheall ar an bhfuil an stát an chomhchealaí curte ag `expired` deara.

Setigh é ar `0` má tá tú ag iarraidh blocadh céil féin tar éis a bhfáine an chomhchealaí ináim.

### 3. Féachán an Stáit An Chomhchealaí a Changú Séan {#1-verify-the-block-frontend-access-setting-is-enabled}

Go dtí **Ultimate Multisite > Memberships** agus léigh an stát an chomhchealaí atá ar cheannas. Má tá sé ag tairiscint `active` gan láthairt an t-aonachas, níl mór an cur chuig a thaisrleitneamh. Caipteanna a bhíonn ag éifeachtú:

- **Tá an chomhchealaí ag réamh-réamh (auto-renewing)**: Léigh an fáil ar an áit `auto_renew` ar an cur chuig a bhaineann leat. Má tá auto-renew acu, níl an cron job an t-aonachas seo a bheith ag éifeachtú – tá sé ag iarraidh an chuid deiridh (payment gateway) a chur in iúl faoi ghlú. Léigh ar do dashboard an fáil (Stripe, PayPal) chun stát an chomhchealaí a bheith ag tairiscint leat ag cur iúl leis an stát atá ag Ultimate Multisite.

- **Níl an cron job ag éifeachtú**: Léigh an cur chuig seo a bhaint as an chéad cheangail.

### 4. Féachán an Action Scheduler a Bhéid Ag Éifeachtú {#2-check-the-frontend-block-grace-period}

Tá Action Scheduler a úsáid Ultimate Multisite chun na cron jobs. Go dtí **Tools > Scheduled Actions** i ndá chuid admin netwrí, léigh ar:

- **`wu_membership_check`** -- Is féidir é a bheith ag cur chuig tar éis ag cur chuig ag cur chuig ar chuid an uair. Má tá sé ag cur chuig acu, níl an t-aonachas an chomhchealaí a bhaint as an cur chuig.
- **`wu_async_mark_membership_as_expired`** -- Is é sin tairiscí idirbhúil chun chomhchealaí a bheith ag cur iúl mar expired. Má fheiceáil cur chuig faoi ghlú acu anseo, is féidir leis a bheith ag cur iúl ar an t-aonachas a bhaineann leat ag cur iúl ar an ghlú.

Má fheiceáil cur chuig ag cur isteach nó faoi ghlú, is féidir leat an t-aonachas Action Scheduler a bheith ag cur isteach. Caipteanna a bhíonn ag éifeachtú:

- **Tá `DISABLE_WP_CRON` set ar `true`** i `wp-config.php` gan aon thayú cron le cosúil go mbunachais síos.
- **Traidh fáil ar an site** -- Tá WP-Cron ag dul anseo ach nuair a bhfaigheann duine ar an site.

Le linn an tús a bheith ar chuid cron a bheith ag déanamh ar fáil, déan seachaint cron síos:

```bash
# Déan go dtí 5 minuta le wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Nó le WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Déan ar an tús má tá treoir Gateway Webhook ag déanamh athfháil (Memberships a bheith ag athfháil go dtí) {#3-confirm-the-membership-status-has-actually-changed}

Má tá an chuid athfháil ag athfháil agus má tá an subscription gateway caillte nó cúplaigh, ach tá Ultimate Multisite ag glacadh é mar `active`:

- **Stripe**: Déan cur isteach ar an Stripe Dashboard > Customers agus déan ar an stáit an subscription. Ansin féachanaigh an endpoint webhook go léir under Developers > Webhooks. Is féidir leis an endpoint a bheith ag cur isteach ar do site agus a sh fóill athbhreithniú acu.
- **PayPal**: Féachanaigh an stáit an subscription i do account business PayPal agus déan ar IPN/webhook delivery.

Má tá an gateway ag déanamh an subscription caillte ach níl Ultimate Multisite, is féidir leat an stáit membership a athrú go mhaith i **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Déan ar an tús má tá an t-amachas (Cron Level) ag déanamh fáil {#4-verify-action-scheduler-is-running}

Tá cur chun cinn cron ag cur isteach an t-amachas (default: 3 dínte) primaiste ach a bheith ag déanamh caillt ar chuid membership. Is é seo ag cur isteach ar an t-amachas frontend. An t-amastair go léir a bheith ag déanamh bloc ar an site leat is féidir leis an t-amastair a bheith ag déanamh:

**T-amachas an t-amachas (3 dínte)** + **T-amachas bloc frontend (do chuid setting)** = Taisceán go léir

Mar é go leat, mar é go leat. Agus, leat, agus.

### 7. Anailte an Múirtíocht Manually Expire a Membership {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Má tá tú ag iarraidh blocáil site go dtí an t-am, gan a bheith ag teacht ar an cron cycle, is féidir leat athrú an stát múirtíochta go mbeidh tú anailte:

1. Déan curte go **Ultimate Multisite > Memberships**
2. Cliom ar an múirtíocht atá ag iarraidh
3. Athrú an stát go **Expired** (Anailte) nó **Cancelled** (Ciallaíonn).
4. Cliom ar **Save** (Sábháil).

Beidh blocáil an frontend ag teacht ar an curtha leathanach (ag curtha ar an t-am de bhfáthachas Blocála Frontend do múirtíochta a bheoilte, nó go dtí an am beag leat agat paraisteacha do múirtíochta ciallaite).

## Samhraidh {#6-check-the-expiration-grace-period-cron-level}

An t-am lúthán ó láthairt múirtíochta go blocáil site:

```text
date_expiration pass
       |
       v
  [3-day cron grace period]     <-- tá an múirtíocht ag teacht ar chuid "active/on-hold"
       |
       v
  Cron marann an múirtíocht ag "expired" (anailte)
       |
       v
  [Frontend Block Grace Period]  <-- curtha i Settings > Memberships
       |
       v
  Tá an frontend site blocáilte
```

Do chiallaiteach múirtíochta, tá an cur síneadh curtha:

```text
  Membership cancelled
       |
       v
  date_expiration pass (no grace period)
       |
       v
  Tá an frontend site blocáilte go dtí an t-am
```

## Reference do Déveltarai {#7-manually-expire-a-membership}

Céadfaidh na hook agus na filter a leagan seo a chur ar fáil duit athrú an cur síneadh agus an chuidBlocála:

| Hook/Filter | Ois féachán |
|---|---|
| `wu_membership_grace_period_days` | Féacháin an n-éadrom chruinneacha ar na lá a dhéanamh beag tar éifeachtach ar an t-aonadh (default: 3) |
| `wu_schedule_membership_check_interval` | Féacháin an t-amach ar an t-amach a bhfaidh an chéad chéim chruinneacha ar an t-aonadh (default: 1 uair) |
| `wu_membership_renewal_days_before_expiring` | Féacháin conas éadromchlaíonn lá a dhéanamh beag tar éifeachtach ar an t-aonadh chun pléas nua a chur in áit (default: 3) |
| `wu_blocked_site_reactivation_url` | Féacháin chun cur URL réamhchúrais ar fáil nuair a bhí site blocked |
| `wu_membership_is_active` | Féacháin chun a bheith an t-aonadh ag teacht ar fáil a bheith ag teacht ar fáil |
| `wu_membership_expired_check_query_params` | Féacháin ar na paraméatra query a úsáid chun éadromchlaíonn lá a dhéanamh ar na t-aonadh |
| `wu_membership_trial_check_query_params` | Féacháin ar na paraméatra query a úsáid chun éadromchlaíonn lá a dhéanamh ar na teachtracha |
