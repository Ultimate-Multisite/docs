---
title: Whakamutunga o te Whakawhanaungatanga me te Whakaraupoko Aotūroa
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Whakamutunga o Membership me Bloking o Site {#membership-expiration-and-site-blocking}

Ko tēnei whakatairanga ahau e whakamārama ana i te kaha o Ultimate Multisite ki te whakahaere i te whakatutuki o membership, te whawhai o trial, me te whakahokingi (blocking) o site frontend. E whakatakotoria ko te whakatika o te maere o te membership mai active ki expired, ngā whakaritenga e whakatō ana ahau mō ā whaiaro, me te mea hei whakamārama i te mea ka mau te site he tino whakahoki i roto i te wā e whawhai i te membership.

## Whakamutunga o te Status Membership {#membership-status-lifecycle}

He statusi tahi ko he tino nui (status) ana i every membership i Ultimate Multisite:

:::note Ko ngā membership mō te free (whakahaere) he whakatika mai i te ora (lifetime).
Ko ngā membership mō te free ka hoki mai i te ora automatically. E whakaaro Ultimate Multisite i ahau ko he access mō te ora, kia nā te mea ana i te whakamārama o te maere o te membership koe e whakawhiti i tō statusi pei i te administrator ki te whaiora atu ki rite tonu.
:::

| Status | He aha? (Meaning) |
|---|---|
| **Pending** | E pōtiki ana mō te whakamahi wāhi whakaora (first payment) pei i te whakamaoritanga o email |
| **Trialing** | Whakamahi wāhi trial active, he nui ake i te whaiaro e whakatū (no payment collected yet) |
| **Active** | E whaiaro ana me he pai (Paid and current) |
| **On Hold** | He pōtiki ana mō te whakamahinga wāhi whakaora (renewal payment is pending - invoice created, awaiting payment) |
| **Expired** | He whawhai i te rā o te whakatutuki me te wāwhai (grace period) kia ora atu i te whakatū mai i te whakatika (without renewal) |
| **Cancelled** | E whakawhanake ana e te customer pei i te admin (Explicitly cancelled by the customer or admin) |

### He aha te whakatutuki o Membership ki te Expired? {#how-memberships-transition-to-expired}

Ko Ultimate Multisite ka tino pakihi (background check) **every hour** kia whakatipu i ngā membership e tika ana i te whakamārama ahau ko he expired. Ko tēnei pakihi he fa'aahi i [Action Scheduler](https://actionscheduler.org/) (kua kore WP-Cron tekaupehe) me ka whakahaere ai i te scheduled action `wu_membership_check`.

He **wāwhai whakatutuki (grace period) mō 3 rā** e tino pakihi ana i te default. Ka hoki mai he mea he `expired` ko i tētahi rā i whakatutuki i te `date_expiration` i te whakatū mai o ngā 3 rā. Ko te mea, ka pēnei koe ki he customer he wāhi mō te whakatū i te waiata (late payment) mō tō statusi kia whakawhanake atu.

:::info
He whakamārama: He tino āhuatanga tēnei o te pēri (grace period) o 3 rā, he pēri āhua atu i te whakaritenga o te Frontend Block Grace Period e whakatōhia i runga i roto i te whakamārama i runga iho. Ko te pēri o te whakamārama o te pēri (expiration grace period) e whakatau i te wā nō te **whānui i te status** no active/on-hold ki expired. Ko te pēri o te blok frontend e whakatau i te wā nō te **whakawātea te wāhi** (site is blocked) i raro i te whakawhanakea i te status.
:::

#### Membership Non-Auto-Renewing vs. Auto-Renewing {#auto-renewing-vs-non-auto-renewing-memberships}

He tino mō te whakamārama i te whakataunga o te pēri:

- **Membership non-auto-renewing** (`auto_renew = false`): Ko te cron job ora (hourly) e whakahaa i te whānui katoa o te whakatupu -- ia e whakamaoritanga o ngā rāhui whakatupu, ia e whai i te status on-hold, ā, i te awhi, ia e whakamārama ana i te status expired ki te pai a te whakapākeha.

- **Membership auto-renewing** (`auto_renew = true`): Ko te whakaoti o te cron expiration check **e whai i tēnei katoa**. Ko te gateway o te whakapākeha (Stripe, PayPal, etc.) e tika ana ia te whakamōhio ki Ultimate Multisite qua via webhooks i roto i te wā nō te pēri noho (subscription) he pēnei i te whakatū whakawhanakea (misconfigured endpoint), he whakatū whakawhanakea o te gateway, he heke o te rāhui he whai ake i te sistema -- ko te membership e taea te noho `active` i te awhi he nui i te wā i raro i te wā nō te pēri expired.

### He aha ngā Wāhi Whakamārama (Trials) E Whakaritea? {#how-trials-end}

I roto i te wā nō te pēri o te whakatū whakawhanakea (trialing membership), ko te sistema e kore:

1. Whakahaa i te whakapākeha whakatupu (pending renewal payment) me te whānui katoa o te rāhui
2. Whakanui te status o te membership no `trialing` ki `on-hold`
3. Whakarite i heta whakamōhio email o te whakapākeha whakatupu ki te mea e whai ake nei

Ko te whakataunga ko pēnei i te wā ora (hourly schedule) o te whakaoti o te rāhui, engari **ko mō ngā membership non-auto-renewing anake**. Ko te gateway o te whakapākeha e whakahaa i te whakawhanakea noho (transition from trial to paid subscription).

## Whakawātea te Wāhi Frontend {#block-frontend-access}

By default, akorua, i roto i te wā e whakatā koe i te membership (membership) he tino pai, **heke ana ko te wp-admin dashboard anake**. Ko te frontend o te waka (site) he puke ai katoa mō ngā manuhiri. Kei te mea kia whakaatu i te whakatā i te puke hoki mō ngā manuhiri, me tino whakatau i te whakaritenga **Block Frontend Access**.

### Whakamahi te Whakaritenga {#configuring-the-setting}

Pāinga ki **Ultimate Multisite > Settings > Memberships** ā, whakatika ko **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

He whakaahua katoa o te puta mai o te whakataunga membership:

![Membership settings full page](/img/config/settings-membership-full.png)

He takiwai whānui i ngā whakaritenga whai whenu e whakatika i tēnei whakataunga:

| Setting | Whakawāhi | Default |
|---|---|---|
| **Block Frontend Access** | Te toggle nui. I roto i te wā e whakahou ana, he whakaatu ai ko te frontend o ngā waka (sites) o te network he puke mō ngā manuhiri i raro i te mea he pēnei te membership. | Off |
| **Frontend Block Grace Period** | Ngā rā e whakamama ana i te whai ake i te whakatā i te membership mō ngā rā, mō te whakaheke. Whakawhiti ki `0` kia puke i runga i te wā. | 0 |
| **Frontend Block Page** | He puta mai i te waka nui ki te manuhiri ki te whakatika i te mea he puke ko te waka. Ko te mea e pēnei, ngā manuhiri e whakaatu ana he "Site not available" (Waka nei he puke) mō te mea he kāore ia whakatika. | None |

### He aha ngā mea e whakaatu i roto i te puta mai o te waka i puke ai {#what-visitors-see-when-a-site-is-blocked}

I roto i te wā e puke koe i te frontend, ngā manuhiri o te waka (site) e pēnei:

1. **E whakatika** ki te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i te puta mai i

| Status o Whakamahi | Awa e Pākehā (Frontend) Ka Whakarite? | Wā Whakawātea Whakahaere? |
|---|---|---|
| Active (Tūmatauenga) | Kore | -- |
| Trialing (Whakawhiti) | **Kore** (pākeha i roto i te whakamārama i runga i roto) | -- |
| On Hold (Eke i Te Whakamahi) | Eke i te tūmatauenga -- ā, ka whakahirahira ai | -- |
| Expired (Whakawātea) | **Rau**, ko te mea e pēnei i te "Block Frontend Access" ana | Yes |
| Cancelled (Whakamutunga) | **Rau**, i roto i ngaro (nga te whakataki) | **Kore** -- ka whakawārite i runga i runga i runga i te mea e pēnei i te "Block Frontend Access" ana |
| Pending (Eke i Te Whakahaere) | Kore via membership check | -- |

:::warning He aha tēnei: He ngā membership trialing (whakawhiti) ka whai whakamārama.
Ko te mea e pēnei i te "trial period" he whakatutuki, engari ko te membership e hoki ki te status `trialing` **kore** e whakawārite ana i runga i te frontend. Me whakatutuki i te trial akorua (typi `on-hold` via te cron job), ā, i roto i te mea he pēnei i te unpaid (whakahaere ahau), ka hoki ki te status `expired`. Ko te mea e pēnei i te membership trialing kua whakatutuki ahau, kia whakaaro i te chaka whakamohana i runga i roto.
:::

:::note He aha tēnei: Ka whakawārite i ngā membership cancelled (whakamutunga) i roto i te wā whakawātea.
Ka whakawārite i ngā membership cancelled (whakamutunga) i roto i te wā whakawātea, i roto i ngaro i te rā o te whakamutanga, i roto i te mea e pēnei i te "Block Frontend Access" ana. Ko te Wā Whakawātea Block Frontend **kore** ka whakawārite ahau i ngā membership cancelled (whakamutunga).
:::

## Whakamohana: Iroha i Ngā Sites Ka Whakarite Ahau Iroa I Te Whakamutanga {#what-gets-blocked-and-when}

Ko te mea e pēnei i te sites ka whai whakamārama i runga i te whakatutuki o ngā membership ka hoki ki te whakamahinga, he whakawhiti i ngā chaka i roto i te rā i roto:

### 1. Whakawhanaungatanga i te Whakaritenga "Block Frontend Access" {#troubleshooting-sites-remaining-accessible-after-expiration}

Pākehā ki **Ultimate Multisite > Settings > Memberships** ā, whakaae i te toggle **Block Frontend Access** he pēnei i te on. Ko te whakatutuki ko **off by default**, ko te mea e pēnei i te wp-admin ka whakawārite ahau i roto i te wā te membership e hoki ki te status inactive (kore e whakamahia).

### 2. Pākehā i te Wā Whakawātea Block Frontend {#1-verify-the-block-frontend-access-setting-is-enabled}

I te puta no ahau i te whakataki i te whakamahi i te whakaaturanga (settings page) o te samea, he tino nui tō **Frontend Block Grace Period** (Wā o Whakamutunga Bloke Frontend). Ko te mea, ko te mea e pēnei i te whakatū i i 7 rā, ko te frontend ka wāhi i te whakamārama (not blocked) i muri i 7 rā noa i te ra राi o te mana (membership's expiration date) – he tū mai i roto i te mea he hoki ai te status o te membership (even if the membership status is already `expired`).

Whakarite i te mea he `0` i te whakatū i ahau e tino whakaatu ana ko te whakamārama (immediate blocking) i muri i te mea ka whakahou te mana (membership becomes inactive).

### 3. Whakawātea Koa He Whakatutuki i te Status o te Membership {#2-check-the-frontend-block-grace-period}

Pāinga ki **Ultimate Multisite > Memberships** ā, he whakaahua i te status o te membership e hua ai. Ko te mea, ko he tino `active` ahau i roto i te mea kua whā mai te ra राi (despite the expiration date having passed), ko he tino whakatutuki i te whakawhanake status (status transition) ahau. Ngā mōhio nui:

- **He hoki auto-renew**: He whakaahua i te `auto_renew` field i runga i te puta o te membership edit page. Ko te mea, ko he pēnei i te whakahou auto-renew ahau – ko te cron job o te ra राi ka whai i tēnei membership – ko he tino pai ai i te gateway o te pai (payment gateway) ki te hua te whakamārama i te pēto (failure). He whakaahua i te dashboard o te gateway mo te pai (Stripe, PayPal) kia whakatutuki ahau ko te status o te subscription he tino mārama ana i te mea e whakaatu ai Ultimate Multisite.

- **He pēnei i te cron job ka whai**: He whakaahua i te whakamārama i te whakamahinga i te whakamārama (next step).

### 4. Whakawātea Koa He Action Scheduler Ka Whakarite {#3-confirm-the-membership-status-has-actually-changed}

Ko Ultimate Multisite e whakamahi i Action Scheduler mō tōna mga cron jobs. Pāinga ki **Tools > Scheduled Actions** i te network admin ā, he whakaahua i ko:

- **`wu_membership_check`** -- Ko te mea, ko he pēnei i te action e whai mai ana (recurring action) ka whakatika every hour. He tino pai ahau i te mea he pōtiki ai, ko he tino whakamārama i te mea kua whakahou te membership checks.
- **`wu_async_mark_membership_as_expired`** -- Ko ngā mea he mahi (tasks) he tino tika ana ki te whakatutuki i te membership he tino `expired`. He pēnei i te whakaahua ahau i ngā actions e pōtiki, ko he tino pai ai i te hua te whakamārama i te mea he pēto.

Ko he tino pōtiki ahau i ngā actions e pōtiki ahau, he tino pai ahau i te mea he tino pōtiki (stuck) ahau ahau. Ngā mōhio nui:

- **`DISABLE_WP_CRON` he wāhi i `true`** i `wp-config.php` kia ora, ā, he nui te whakamahi cron o te system.
- **Mahi site iti** -- He WP-Cron ana e whakawhanaunga ana ko ka whakatika akorua ko ka hoki mai ko ka pēhea ka pēhea ka waha i te site.

Kia tū i te whakamahi cron mō te whakamahi tino pai, kia whakatika he mahi cron o te system:

```bash
# Whakaaro every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Āwhi i te WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Pāpā i Ngā Whainga Gateway Webhook (Auto-Renewing Memberships) {#4-verify-action-scheduler-is-running}

Ko te membership ana e auto-renew ana me te subscription o te gateway he whakatika, ā, ka pēhea ka pēhea ka pēhea ka hoki mai ko ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka pēhea ka p

Mauri whakamahi i te whakaritenga pēnitanga (default settings) me o pēnitanga 7 rā mo te mōhaka (frontend grace period), he taea ai te whakawhanake i te wāhanga site noho iho (site) i taro 10 rā i runga i te `date_expiration` i taro.

### 7. Whakamutunga Manawa i Hebe (Manually Expire a Membership) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Ko, ko te mea e hiahia ana koe ki te whakatū whakamutu site i runga i te wāhi, i roto i te wahi e hiahia ana koe ki te whakatū whakamutu site i runga i te wāhi, he taea ai te whakawhanake i te mōhaka (frontend block) i taro.

1. Pāinga ki **Ultimate Multisite > Memberships**
2. Whakawatea i te membership e hiahia ana koe
3. Whakatika te status ki **Expired** (Whakamutunga) hena **Cancelled** (Whakaa).
4. Whakawatea i **Save**.

Ko te whakamutu mōhaka (frontend block) e whai tikanga i te whakatū site noho iho (site) i taro (subject to the Frontend Block Grace Period mo ngā membership expired, hena i taro i runga i te cancelled).

## Whakamahinga (Summary) {#6-check-the-expiration-grace-period-cron-level}

Ko te wāhi katoa mai i te rawa whakamutunga ki te whakatū site noho iho (site blocking):

```text
date_expiration passes
       |
       v
  [3-day cron grace period]     <-- membership still shows as active/on-hold
       |
       v
  Cron marks membership as "expired"
       |
       v
  [Frontend Block Grace Period]  <-- configured in Settings > Memberships
       |
       v
  Site frontend is blocked
```

Mo ngā membership e whakaa, ko te whakatika he pōuri:

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## Whakawhanake (Developer Reference) {#7-manually-expire-a-membership}

Ko ngā hooks me filters i tēnei e hiahia ana koe ki te whakaiti i te whakatika whakamutunga me te whakatū mōhaka:

| Hook/Filter | Whakaritenga |
|---|---|
| `wu_membership_grace_period_days` | Whakarite te kāore i nga rā o te wā pō (grace period) mō te membership mea i te whakamārama i te whakatū i te membership he whakahou (default: 3) |
| `wu_schedule_membership_check_interval` | Whakarite te wā o te whakawhiti i nga whakamārama o te membership (default: 1 ora) |
| `wu_membership_renewal_days_before_expiring` | Whakarite te kāore i ngā rā mō te whakahou i te payment i te wae mea i te whakatū i te expiration (default: 3) |
| `wu_blocked_site_reactivation_url` | Whakarite ki te hoatu URL whakamaru whakamua (custom reactivation URL) i te wā e pōwhiri ai te site he kawe. |
| `wu_membership_is_active` | Whakarite mō te mea i te whakaarohia ana he active (whakahou/tūnga). |
| `wu_membership_expired_check_query_params` | Whakarite nga query parameters (ngā whakamārama o te whai) e whakamahia ki te pahi i ngā membership kua whakatū i te expiration. |
| `wu_membership_trial_check_query_params` | Whakarite nga query parameters (ngā whakamārama o te whai) e whakamahia ki te pahi i ngā trial kua whakatū i te expiration. |
