---
title: Expiration de l'adhésion et blocage du site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expiration des adhésions et blocage du site

Ce guide explique comment Ultimate Multisite gère l'expiration des adhésions, la fin des périodes d'essai et le blocage du site sur le frontend. Il couvre le cycle de vie d'une adhésion, de l'état actif à l'état expiré, les paramètres qui contrôlent si les sites sont bloqués, et ce qu'il faut vérifier lorsque les sites restent accessibles après l'expiration d'une adhésion.

## Cycle de vie du statut de l'adhésion

Chaque adhésion dans Ultimate Multisite possède l'un des statuts suivants :

:::note Les adhésions gratuites sont à vie
Les adhésions gratuites n'expirent pas automatiquement. Ultimate Multisite les considère comme un accès à vie, elles ne sont donc pas incluses dans les vérifications d'expiration, sauf si un administrateur change leur statut ou déplace le client vers un autre produit.
:::

| Statut | Signification |
|---|---|
| **Pending** | En attente du premier paiement ou de la vérification par e-mail |
| **Trialing** | Période d'essai active, aucun paiement n'a encore été collecté |
| **Active** | Payant et à jour |
| **On Hold** | Le paiement de renouvellement est en attente (facture créée, en attente de paiement) |
| **Expired** | Passé la date d'expiration et la période de grâce sans renouvellement |
| **Cancelled** | Annulé explicitement par le client ou l'administrateur |

### Comment les adhésions passent à l'état expiré

Ultimate Multisite exécute une vérification en arrière-plan **toutes les heures** pour rechercher les adhésions qui devraient être marquées comme expirées. Cette vérification utilise [Action Scheduler](https://actionscheduler.org/) (et non WP-Cron directement) et s'exécute sous forme d'action planifiée `wu_membership_check`.

La vérification d'expiration dispose par défaut d'une **période de grâce intégrée de 3 jours**. Une adhésion ne sera pas marquée comme `expired` tant que 3 jours ne se sont pas écoulés après le passage de sa `date_expiration`. Cela donne aux clients le temps d'effectuer un paiement tardif avant que leur statut ne change.

:::info
La période de grâce d'expiration de 3 jours est distincte du paramètre de période de grâce de blocage du frontend décrit ci-dessous. La période de grâce d'expiration contrôle quand le **statut change** de actif/en attente à expiré. La période de grâce de blocage du frontend contrôle quand le **site est bloqué** après que le statut ait déjà changé.
:::

#### Adhésions auto-renouvelables vs. non auto-renouvelables

Cette distinction est essentielle pour comprendre le comportement d'expiration :

- **Adhésions non auto-renouvelables** (`auto_renew = false`) : La tâche planifiée horaire gère le cycle de vie complet — elle crée les paiements de renouvellement, passe l'adhésion à l'état en attente, et la marque finalement comme expirée si le paiement n'est pas reçu.

- **Adhésions auto-renouvelables** (`auto_renew = true`) : La vérification d'expiration planifiée **ignore ces adhésions**. Le fournisseur de paiement (Stripe, PayPal, etc.) est censé notifier Ultimate Multisite via des webhooks lorsqu'un abonnement échoue ou est annulé. Si le webhook n'est pas reçu — en raison d'un point de terminaison mal configuré, d'une panne du fournisseur ou d'un abonnement annulé en dehors du système — l'adhésion peut rester `active` indéfiniment même après la date d'expiration.

### Comment les périodes d'essai se terminent

Lorsqu'une période d'essai d'adhésion se termine, le système :

1. Crée un paiement de renouvellement en attente avec le montant total de l'abonnement.
2. Passe le statut de l'adhésion de `trialing` à `on-hold`.
3. Envoie un e-mail de notification de paiement de renouvellement au client.

Ce processus s'exécute sur le même calendrier horaire que la vérification d'expiration régulière, mais **uniquement pour les adhésions non auto-renouvelables**. Pour les essais auto-renouvelables, le fournisseur de paiement gère la transition de l'essai à l'abonnement payant.

## Bloquer l'accès au frontend

Par défaut, lorsqu'une adhésion expire ou passe en attente, **seul le tableau de bord wp-admin est restreint**. Le frontend public du site reste accessible aux visiteurs. Pour bloquer également l'accès public, vous devez activer le paramètre **Block Frontend Access** (Bloquer l'accès au frontend).

### Configuration du paramètre

Accédez à **Ultimate Multisite > Settings > Memberships** et activez **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Voici une vue complète de la page des paramètres d'adhésion :

![Membership settings full page](/img/config/settings-membership-full.png)

Trois paramètres connexes contrôlent ce comportement :

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Interrupteur principal. Lorsqu'il est activé, il bloque le frontend public des sites du réseau lorsque leur adhésion n'est plus active. | Off |
| **Frontend Block Grace Period** | Nombre de jours à attendre après que l'adhésion soit inactive avant de bloquer. Définir sur `0` pour bloquer immédiatement. | 0 |
| **Frontend Block Page** | Une page sur le site principal à laquelle rediriger les visiteurs lorsqu'un site est bloqué. Si non défini, les visiteurs verront un message générique "Site not available". | None |

### Ce que voient les visiteurs lorsqu'un site est bloqué

Lorsque l'accès au frontend est bloqué, les visiteurs du site verront soit :

1. **Être redirigés** vers la page que vous avez sélectionnée dans **Frontend Block Page** (si configuré), ou
2. **Voir un message par défaut** : "This site is not available at the moment." avec un lien vers la page de connexion de l'administrateur du site.

Les administrateurs de site peuvent toujours se connecter — la page de connexion n'est jamais bloquée.

### Ce qui est bloqué et quand

Le comportement de blocage dépend du statut de l'adhésion :

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Non | -- |
| Trialing | **Non** (voir note ci-dessous) | -- |
| On Hold | Considéré comme actif -- non bloqué | -- |
| Expired | **Oui**, si Block Frontend Access est activé | Oui |
| Cancelled | **Oui**, toujours (indépendamment du paramètre) | **Non** -- bloqué immédiatement |
| Pending | Non bloqué via la vérification d'adhésion | -- |

:::warning Les adhésions en période d'essai ne sont pas bloquées
Même si une période d'essai a pris fin, une adhésion avec le statut `trialing` ne sera **pas** bloquée sur le frontend. L'essai doit d'abord passer à un autre statut (généralement `on-hold` via la tâche planifiée, puis `expired` si non payé). Si vous voyez des adhésions en période d'essai qui n'ont pas changé de statut, consultez la section de dépannage ci-dessous.
:::

:::note Les adhésions annulées contournent la période de grâce
Les adhésions annulées sont toujours bloquées une fois que la date d'expiration est passée, peu importe si Block Frontend Access est activé. La Frontend Block Grace Period ne s'applique **pas** aux adhésions annulées.
:::

## Dépannage : Sites restant accessibles après expiration

Si les sites restent accessibles au public après l'expiration d'une adhésion, suivez ces vérifications dans l'ordre :

### 1. Vérifier que le paramètre Block Frontend Access est activé

Allez à **Ultimate Multisite > Settings > Memberships** et confirmez que l'interrupteur **Block Frontend Access** est activé. Ce paramètre est **désactivé par défaut**, ce qui signifie que seul wp-admin est restreint lorsqu'une adhésion devient inactive.

### 2. Vérifier la Frontend Block Grace Period

Sur la même page de paramètres, vérifiez la valeur de **Frontend Block Grace Period**. Si elle est définie à 7 jours, par exemple, le frontend ne sera pas bloqué avant 7 jours après la date d'expiration de l'adhésion — même si le statut de l'adhésion est déjà `expired`.

Définissez-le sur `0` si vous souhaitez un blocage immédiat après que l'adhésion soit inactive.

### 3. Confirmer que le statut de l'adhésion a réellement changé

Allez à **Ultimate Multisite > Memberships** et vérifiez le statut de l'adhésion concernée. Si elle affiche toujours `active` malgré le passage de la date d'expiration, la transition de statut n'a pas eu lieu. Causes courantes :

- **L'adhésion est auto-renouvelable** : Vérifiez le champ `auto_renew` sur la page d'édition de l'adhésion. Si l'auto-renouvellement est activé, la tâche planifiée d'expiration ignore cette adhésion — elle dépend du fournisseur de paiement pour signaler l'échec. Vérifiez le tableau de bord de votre fournisseur (Stripe, PayPal) pour confirmer que le statut de l'abonnement correspond à ce qu'Ultimate Multisite affiche.

- **La tâche planifiée n'a pas été exécutée** : Voir l'étape suivante.

### 4. Vérifier qu'Action Scheduler fonctionne

Ultimate Multisite utilise Action Scheduler pour ses tâches planifiées. Allez dans **Tools > Scheduled Actions** dans l'administration du réseau et recherchez :

- **`wu_membership_check`** -- Cela devrait apparaître comme une action récurrente s'exécutant toutes les heures. S'il est manquant, les vérifications d'adhésion ne sont pas planifiées.
- **`wu_async_mark_membership_as_expired`** -- Ce sont des tâches individuelles pour marquer des adhésions spécifiques comme expirées. Si vous voyez des actions échouées ici, elles peuvent contenir des messages d'erreur expliquant pourquoi.

Si vous voyez des actions bloquées ou échouées, vous pourriez avoir un problème avec Action Scheduler. Causes courantes :

- **`DISABLE_WP_CRON` est défini sur `true`** dans `wp-config.php` sans remplacement de cron au niveau du système
- **Faible trafic sur le site** -- WP-Cron ne s'exécute que lorsqu'un utilisateur visite le site

Pour garantir une exécution fiable du cron, configurez une tâche cron système :

```bash
# Exécuter toutes les 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://votre-url-réseau.com/wp-cron.php?doing_wp_cron"

# Ou via WP-CLI
*/5 * * * * cd /chemin/vers/wordpress && wp cron event run --due-now --url=https://votre-url-réseau.com
```

### 5. Vérifier les problèmes de Webhook du fournisseur (Adhésions auto-renouvelables)

Si l'adhésion est auto-renouvelable et que l'abonnement du fournisseur a été annulé ou a échoué, mais qu'Ultimate Multisite l'affiche toujours comme `active` :

- **Stripe** : Allez dans le tableau de bord Stripe > Customers et vérifiez le statut de l'abonnement. Vérifiez ensuite que le point de terminaison webhook est actif sous Developers > Webhooks. Le point de terminaison doit pointer vers votre site et montrer des livraisons réussies.
- **PayPal** : Vérifiez le statut de l'abonnement dans votre compte professionnel PayPal et vérifiez la livraison IPN/webhook.

Si le fournisseur montre l'abonnement comme annulé mais qu'Ultimate Multisite ne le fait pas, la notification webhook a probablement été perdue. Vous pouvez changer manuellement le statut de l'adhésion dans **Ultimate Multisite > Memberships > [Modifier l'adhésion]**.

### 6. Vérifier la période de grâce d'expiration (Niveau Cron)

La vérification cron dispose de sa propre période de grâce (par défaut : 3 jours) avant de marquer une adhésion comme expirée. Ceci est distinct de la période de grâce de blocage du frontend. Le temps total avant que le site ne soit bloqué peut être :

**Période de grâce d'expiration (3 jours)** + **Période de grâce de blocage du frontend (votre paramètre)** = Délai total

Par exemple, avec les paramètres par défaut et une période de grâce de blocage de 7 jours, il peut falloir jusqu'à 10 jours après la `date_expiration` avant que le site ne soit réellement bloqué.

### 7. Expirer manuellement une adhésion

Si vous devez bloquer immédiatement un site sans attendre le cycle cron, vous pouvez changer manuellement le statut de l'adhésion :

1. Allez à **Ultimate Multisite > Memberships**
2. Cliquez sur l'adhésion concernée
3. Changez le statut à **Expired** (Expiré) ou **Cancelled** (Annulé)
4. Cliquez sur **Save** (Enregistrer)

Le blocage du frontend prendra effet au prochain chargement de page (sous réserve de la période de grâce de blocage du frontend pour les adhésions expirées, ou immédiatement pour les adhésions annulées).

## Résumé

La chronologie complète de la date d'expiration au blocage du site :

```text
date_expiration passe
       |
       v
  [Période de grâce cron de 3 jours]     <-- l'adhésion affiche toujours actif/en attente
       |
       v
  Le cron marque l'adhésion comme "expired"
       |
       v
  [Période de grâce de blocage du frontend]  <-- configuré dans Settings > Memberships
       |
       v
  Le frontend du site est bloqué
```

Pour les adhésions annulées, le chemin est plus court :

```text
  Adhésion annulée
       |
       v
  date_expiration passe (aucune période de grâce)
       |
       v
  Le frontend du site est bloqué immédiatement
```

## Référence développeur

Les hooks et filtres suivants vous permettent de personnaliser le comportement d'expiration et de blocage :

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filtre le nombre de jours de période de grâce avant de marquer une adhésion comme expirée (par défaut : 3) |
| `wu_schedule_membership_check_interval` | Filtre l'intervalle entre les vérifications d'adhésion (par défaut : 1 heure) |
| `wu_membership_renewal_days_before_expiring` | Filtre le nombre de jours avant l'expiration pour créer un paiement de renouvellement (par défaut : 3) |
| `wu_blocked_site_reactivation_url` | Filtre pour fournir une URL de réactivation personnalisée lorsqu'un site est bloqué |
| `wu_membership_is_active` | Filtre pour déterminer si une adhésion est considérée comme active |
| `wu_membership_expired_check_query_params` | Filtre les paramètres de requête utilisés pour trouver les adhésions expirées |
| `wu_membership_trial_check_query_params` | Filtre les paramètres de requête utilisés pour trouver les essais expirés |
