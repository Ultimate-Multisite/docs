---
title: Ekipasyon Membwa ak Blokaj Sit
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Fini vwa Membership ak Blokaj Site

Ki gidans sa a eksplike kijan Ultimate Multisite jere fini membership, fini trial, ak blokaj site anndan (frontend). Li kouvri tout sik la yon membership de aktif rive fini, konfigirasyon ki kontwole si sit yo bloke, e sa ou dwe gade lè sit yo rete aksede apre membership fini.

## Sik Sik Stat Membership

Chak membership nan Ultimate Multisite gen youn nan etap sa yo:

:::note Membership gratis se pou tout tan (lifetime)
Membership gratis pa fini otomatikman. Ultimate Multisite tret yo kòm yon aksè pou tout tan, kidonk yo pa enkli nan verifikasyon fini ankò ou admin chanje status yo oswa deplase kliyan an lòt pwodwi.
:::

| Status | Signifikasyon |
|---|---|
| **Pending** | Ap tann premye paman oswa verifikasyon imèl |
| **Trialing** | Peryòd trial aktif, pa gen okenn paman kouvri pou kont li |
| **Active** | Paman epi kouran |
| **On Hold** | Paman paman renouvèl la (faktura te kreye, ap tann paman) |
| **Expired** | Pase dat fini ak peryòd gras san chanje renouvèl |
| **Cancelled** | Eksplisitman kanle pa kliyan oswa admin la |

### Kijan Membership yo Transisyon nan Expired

Ultimate Multisite fè yon verifikasyon an arka (background check) **chak èdtan** ki ap chèche membership ki dwe mete kòm fini. Verifikasyon sa a itilize [Action Scheduler](https://actionscheduler.org/) (pa WP-Cron dirèkteman) epi li mache kòm aksyon planifye `wu_membership_check`.

Verifikasyon fini gen yon **peryòd gras inite 3 jou** pa default. Yon membership p ap mete kòm `expired` apre 3 jou ki pase dat `date_expiration` li anvan li renouvle. Sa bay kliyan tan pou yo fini yon paman latè anvan status yo chanje.

:::info
Période de grâce d'expiration de 3 jours separe de la configuration Période de grâce du Bloc Frontend décrite ci-dessous. La période de grâce d'expiration contrôle quand le **statut change** de actif/en attente à expiré. La période de grâce du bloc frontend contrôle quand le **site est bloqué** après que le statut ait déjà changé.
:::

#### Abonnements qui se renouvellent automatiquement vs. ceux qui ne se renouvellent pas automatiquement

Cette distinction est cruciale pour comprendre le comportement d'expiration :

- **Abonnements qui ne se renouvellent pas automatiquement** (`auto_renew = false`) : Le job cron horaire gère tout le cycle de vie -- il crée les paiements de renouvellement, passe l'abonnement en statut en attente (on-hold), et finit par le marquer comme expiré si le paiement n'est pas reçu.

- **Abonnements qui se renouvellent automatiquement** (`auto_renew = true`) : La vérification d'expiration du cron **ignore complètement ceux-ci**. On s'attend à ce que la passerelle de paiement (Stripe, PayPal, etc.) notifie Ultimate Multisite via des webhooks lorsque l'abonnement échoue ou est annulé. Si le webhook n'est pas reçu -- en raison d'un point de terminaison mal configuré, d'une panne de passerelle, ou d'une annulation d'abonnement en dehors du système -- l'abonnement peut rester `active` indéfiniment même après la date d'expiration.

### Comment les Essais se terminent

Lorsque la période d'essai d'un abonnement d'essai se termine, le système :

1. Crée un paiement de renouvellement en attente avec le montant total de l'abonnement
2. Passe le statut de l'abonnement de `trialing` à `on-hold`
3. Envoie un e-mail de notification de paiement de renouvellement au client

Ce processus s'exécute sur le même calendrier horaire que la vérification d'expiration régulière, mais **uniquement pour les abonnements qui ne se renouvellent pas automatiquement**. Pour les essais qui se renouvellent automatiquement, la passerelle de paiement gère la transition de l'essai à l'abonnement payant.

## Bloquer l'accès Frontend

Par defo, quand un abonnement expire ou est mis en pause, **seul le tableau de bord wp-admin est restreint**. Le site public reste accessible aux visiteurs. Pour bloquer l'accès public aussi, vous devez activer le réglage **Block Frontend Access**.

### Configurer le Réglage

Allez dans **Ultimate Multisite > Settings > Memberships** et activez **Block Frontend Access**.

![Paramètres Block Frontend Access montrant l'interrupteur activé, une période de grâce de 7 jours et la sélection d'une Page de Blocage Frontend](/img/config/settings-membership-block-frontend.png)

Voici une vue complète de la page des paramètres d'abonnement :

![Page complète des paramètres d'abonnement](/img/config/settings-membership-full.png)

Trois réglages liés contrôlent ce comportement :

| Réglage | Description | Défaut |
|---|---|---|
| **Block Frontend Access** | Interrupteur principal. Lorsqu'il est activé, il bloque le frontend public des sites du réseau quand leur abonnement n'est plus actif. | Off |
| **Frontend Block Grace Period** | Nombre de jours à attendre après que l'abonnement devienne inactif avant de bloquer. Réglez sur `0` pour bloquer immédiatement. | 0 |
| **Frontend Block Page** | Une page sur le site principal vers laquelle les visiteurs seront redirigés lorsqu'un site est bloqué. Si ce n'est pas défini, les visiteurs verront un message générique "Site non disponible" avec un lien vers la page de connexion pour l'administrateur du site. | Aucun |

### Ce que les Visiteurs Voient Quand un Site Est Bloqué

Quand l'accès au frontend est bloqué, les visiteurs du site vont soit :

1. **Être redirigés** vers la page que vous avez sélectionnée dans **Frontend Block Page** (si configurée), ou
2. **Voir un message par défaut**: "Ce site n'est pas disponible pour le moment." avec un lien vers la page de connexion pour l'administrateur du site.

Les administrateurs de site peuvent toujours se connecter -- la page de connexion n'est jamais bloquée.

### Ce Qui Est Bloqué et Quand

Le comportement de blocage dépend du statut de l'abonnement :

| Statut Membre | Frontend Bloqué? | Période de Grâce Appliquée? |
|---|---|---|
| Actif | Non | -- |
| Essai (Trialing) | **Non** (voir note ci-dessous) | -- |
| En Pause (On Hold) | Considéré comme actif -- non bloqué | -- |
| Expiré | **Oui**, si le Bloc d'Accès Frontend est activé | Oui |
| Annulé | **Oui**, toujours (peu importe les paramètres) | **Non** -- bloqué immédiatement |
| En Attente (Pending) | Non bloqué via la vérification de l'adhésion | -- |

:::warning Les adhésions en essai ne sont pas bloquées
Même si une période d'essai est terminée, une adhésion avec le statut `trialing` ne sera **pas** bloquée sur le frontend. L'essai doit d'abord passer à un autre statut (généralement `on-hold` via le cron job, puis `expired` si non payé). Si vous voyez des adhésions en essai qui n'ont pas changé de statut, vérifiez la section dépannage ci-dessous.
:::

:::note Les adhésions annulées contournent la période de grâce
Les adhésions annulées sont toujours bloquées une fois la date d'expiration passée, peu importe si le Bloc d'Accès Frontend est activé. La Période de Grâce du Bloc Frontend ne s'applique **pas** aux adhésions annulées.
:::

## Dépannage : Sites Restant Accessibles Après Expiration

Si les sites restent accessibles au public après l'expiration d'une adhésion, suivez ces vérifications dans cet ordre :

### 1. Vérifiez que le paramètre Bloc d'Accès Frontend est activé

Allez dans **Ultimate Multisite > Settings > Memberships** et confirmez que l'interrupteur **Block Frontend Access** est activé. Ce réglage est **désactivé par défaut**, ce qui signifie que seul wp-admin est restreint lorsque l'adhésion devient inactive.

### 2. Vérifiez la Période de Grâce du Bloc Frontend

Nan menm nan menm sou menm paj konfigirasyon an, chèche valè **Frontend Block Grace Period**. Si sa se set pou 7 jou, pa frontend la ap bloke sèlman apre 7 jou apre dat ekspirasyon manmness la -- menm si status manmness la deja `expired`.

Set sa a sou `0` si ou vle bloke imedyat apre manmness la vin inaktif.

### 3. Konfime ke Status Manmness La Deja Chanje

Ale nan **Ultimate Multisite > Memberships** epi chèche status manmness ki afekte a. Si li toujou montre `active` men ke dat ekspirasyon an pase, transisyon status la pa fèt. Kòz komen:

- **Manmness la ap re-renew otomatikman**: Chèche fye `auto_renew` sou paj edite manmness la. Si auto-renew aktif, cron ekspirasyon ap pase manmness sa a -- li depann sou gateway pamanman pou raporte efektivite a. Chèche dashboard gateway ou an (Stripe, PayPal) pou konfime ke status abònman an koresponn ak sa Ultimate Multisite montre.

- **Cron job la pa fini esè**: Wè etap ankò.

### 4. Verifyke Action Scheduler La Ap Fè Travay

Ultimate Multisite itilize Action Scheduler pou cron jobs li yo. Ale nan **Tools > Scheduled Actions** nan admin rezo a epi chèche:

- **`wu_membership_check`** -- Sa dwe parèt kòm yon aksyon ki ap fèt chak èdtan. Si li manke, verifikasyon manmness yo pa ap planifye.
- **`wu_async_mark_membership_as_expired`** -- Sa yo se travay endividyèl pou mete manmness espesifik yo kòm ekspiré. Si ou wè aksyon ki echwe la isit, yo ka gen mesaj erè ki eksplike poukisa yo.

Si ou wè aksyon ki bloke oswa ki echwe, ou ka gen pwoblèm ak Action Scheduler. Kòz komen:

- **`DISABLE_WP_CRON` est réglé sur `true`** nan `wp-config.php` san yon rezèv cron nivo sistèm
- **Traffic sit ki ba** -- WP-Cron sèlman kouri lè gen moun ki vizite sit la

Pou asire ke cron ap mache byen, mete yon job cron sistèm:

```bash
# Kouri chak 5 min atravè wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Oswa atravè WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Kontwe pou pwoblèm Gateway Webhook (Auto-Renewing Memberships)

Si manm la ap re-renou otomatikman epi abònman gateway la te sispann oswa li te échouer, men Ultimate Multisite toujou montre li kòm `active`:

- **Stripe**: Ale nan Stripe Dashboard > Customers epi kontwe status abònman an. Apre sa, verifye ke webhook endpoint la aktif sous Developers > Webhooks. Endpoint la dwe pointerye sit ou a epi montre livrezon siksè yo.
- **PayPal**: Kontwe status abònman an nan kont biznis PayPal ou a epi verifye livrezon IPN/webhook la.

Si gateway la montre abònman an kòm sispann men Ultimate Multisite pa, notifikasyon webhook la te pèt. Ou ka chanje status manm la manmanman nan **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Kontwe Peryòd Grace de Expiration (Nivo Cron)

Kontwò cron an gen li pwòp peryòd grace (default: 3 jou) anvan li mete yon manm kòm expire. Sa se sepandan ak peryòd grace blòk frontend la. Total tan anvan sit la bloke ka ye:

**Peryòd grace de expiration (3 jou)** + **Peryòd grace blòk frontend la (ajisteman ou a)** = Retard total

Pou egzanp, avèk paramèt default ak yon peryòd gras 7 jou pou frontend la, sa ka pran jounen 10 apre `date_expiration` anvan sit la bloke vreman.

### 7. Mete Fini Manmanm (Membership) Avè Kòman

Si ou bezwen bloke yon sit imedyatman san ou pa tann sik cron la, ou ka chanje status manmanm la menm:

1. Ale nan **Ultimate Multisite > Memberships**
2. Klike sou manmanm ki afekte a
3. Chanje status la an **Expired** (Fini) oswa **Cancelled** (Sispann)
4. Klike sou **Save** (Ensakse)

Blokaj frontend la ap mache nan ankò chwazi paj la (sa depann sou Peryòd Gras Blokaj Frontend pou manmanm ki fini, oswa imedyatman pou manmanm ki sispann).

## Rezime

Tout liy tan anvan dat fini rive bloke sit la:

```text
date_expiration pase
       |
       v
  [Peryòd gras 3 jou cron]     <-- manmanm ap montre kòm aktif/nan atansyon
       |
       v
  Cron mete manmanm an "expired" (fini)
       |
       v
  [Peryòd gras Blokaj Frontend]  <-- configure nan Settings > Memberships
       |
       v
  Frontend sit la bloke
```

Pou manmanm ki sispann, wout la pi kout:

```text
  Manmanm sispann
       |
       v
  date_expiration pase (pa gen okenn peryòd gras)
       |
       v
  Frontend sit la bloke imedyatman
```

## Referans Dev

Hook ak filter ki anba a pèmèt ou personalize konpòtman fini ak blokaj la:

| Hook/Filter | Deskripsyon |
|---|---|
| `wu_membership_grace_period_days` | Filtre kantite jou grace period anvan yon manmman yo mete yon manmman kòm fini (default: 3) |
| `wu_schedule_membership_check_interval` | Filtre entèvò ki ant verifikasyon manmman yo (default: 1 èdtan) |
| `wu_membership_renewal_days_before_expiring` | Filtre kantite jou anvan fini pou kreye yon paman renouvèl (default: 3) |
| `wu_blocked_site_reactivation_url` | Filtre pou bay yon URL reaktivasyon koutim lè yon sit bloke |
| `wu_membership_is_active` | Filtre pou wè si yon manmman konsidere kòm aktif |
| `wu_membership_expired_check_query_params` | Filtre sou paramèt kesyon ki itilize pou jwenn manmman ki fini |
| `wu_membership_trial_check_query_params` | Filtre sou paramèt kesyon ki itilize pou jwenn trial ki fini |
