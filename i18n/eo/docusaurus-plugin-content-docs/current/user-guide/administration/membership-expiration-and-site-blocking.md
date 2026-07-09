---
title: Membara expirado kaj sita blokado
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Membroj la Ekspirado kaj Blokado de Sitaj {#membership-expiration-and-site-blocking}

Ĉi tiu gvidado klarigas, kiel Ultimate Multisite maneĝas ekspiradon de membraj, fini de provoj (trial endings) kaj blokadon de frontaj sitaj. Ĝi mastrumas la ciklon de membrajo de aktiva al ekspirita, la ŝanĝon, kiuj kontrolas ĉu sitaj estas blokitaj, kaj kion diri, kiam sitaj restas aksesaj post la ekspirado de membrajo.

## Ciklo de Status Membrajo {#membership-status-lifecycle}

Ĉi tiu ĉiuj membraj en Ultimate Multisite havas unu el la seguenti statusoj:

:::note Libera membraj estas per ĉiamvivo
Liberaj membraj ne ekspiras aŭtomate. Ultimate Multisite traktas ilin kiel ĉiamvivaj aliro, tiel ili ne inkluzivas en kontrolon de ekspirado, maloki administristro ŝanĝas ilian statuson aŭ movas la klienton al alia produkto.
:::

| Statuso | Signifo |
|---|---|
| **Pending** (Aventu) | Awaitanta unan pagamenton aŭ e-mailverifikadon |
| **Trialing** (Provado) | Aktiva provadoperiodo, neniu pagumento akiritita ĝis nun |
| **Active** (Aktiva) | Pagita kaj aktuala |
| **On Hold** (En Paŭzo) | Renovado de pagumento estas pendentita (faktura kreita, awaiting pagamenton) |
| **Expired** (Ekspirita) | Passis la ekspiradon daton kaj la periodon de graco sen renovado |
| **Cancelled** (Anulita) | Ekspliciite anulita de la klienton aŭ administristro |

### Kiel Membraj Transiti al Ekspirita {#how-memberships-transition-to-expired}

Ultimate Multisite faras bazan kontrolon **ĉiuj ora** por ŝaŭi membrajn, kiuj devus esti marcit kiel ekspiritaj. Ĉi tiu kontrola funkcio uzas [Action Scheduler](https://actionscheduler.org/) (ne direkte WP-Cron) kaj funkcias kiel la programita akcio `wu_membership_check`.

La kontrola ekspirado havas **inplivitan periodon de graco de 3 tajtablaj** per defolo. Membrajo ne wird marcit kiel `expired` ĝis 3 tajtablaj post kiam ĝia `date_expiration` pasas. Tio donas klientoj tempon por plenumi tardan pagamenton antaŭ ol ilia status ŝanĝiĝas.

:::info
La 3-dias expiracia gracia estas aparta de la configuracio del Período Gracia del Bloque Frontend descrita abajo. El período gracia de expiracia controla cuándo la **status ŝanĝas** de activa/en-hold a expirata. La período gracia del bloque frontend kontrolas cuándo la **sitio estas blokita** post kiam la status już ŝanĝiĝis.
:::

#### Membriado Sen Auto-Renovado vs. Sen Auto-Renovado {#auto-renewing-vs-non-auto-renewing-memberships}

Ĉi tiu diferenco estas kritika por kompreni la funkcion de expiracia:

- **Membriado sen auto-renovado** (`auto_renew = false`): La horla cron job maneĝas la plenan ciklajn vivo -- ĝi kreas pagojn de renovado, transiti la membriadon al en-hold kaj ĉiam markas ĝin kiel expirata se moneco ne ricevas.

- **Membriado auto-renovada** (`auto_renew = true`): La kontrola ŝekado de cron expiracia **skiptas ĉi tiuj komplete**. La pagamentporta (Stripe, PayPal, etc.) esperas informi Ultimate Multisite per webhooks, kiam subskribcio ne funkcias aŭ estas kancelita. Se la webhook ne ricevas -- pro malkonfigurita punkto finaj de linko, interrupo de porta, aŭ subskribcio kancelita ekster la sistemo -- la membriado povas resti `active` indefinita tempo post kiam la expiracia dato pasas.

### Kiel Testoj Finiras {#how-trials-end}

Kiam la testperiodo de membriado triala finiras, la sistema:

1. Kreas pendingan pagon de renovado kun la plena subskribcia monton
2. Transiti la status de la membriado de `trialing` al `on-hold`
3. Sendas e-mailon de notigo de renovada pago al klienton

Ĉi tiu proceso funkcias sur la sama horla jadwal kiel la regula kontrola expiracia, sed **nur por membriado sen auto-renovado**. Por auto-renovadaj testoj, la pagamentporta maneĝas la transiron de testaj al pagita subskribcio.

## Blokado de Aliro al Frontend {#block-frontend-access}

Par defaŭlta, kiam miempartia (membership) expireras aŭ iras en paŭzo, **tam nur wp-admin dashboard estas restriĉita**. La publika antaŭa parto de la sita restas akcesebla al vizitaroj. Por bloki ankaŭ publikan akceson, vi devas aktivi la ŝancon **Block Frontend Access** (Bloki Antaŭan Parton).

### Konfigurado de la ŝanco {#configuring-the-setting}

Navigu al **Ultimate Multisite > Settings > Memberships** kaj aktivi **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Jen kompleta vidigo de la paĝo de miempartia ŝanĝoj:

![Membership settings full page](/img/config/settings-membership-full.png)

Trinkaj ili rilatas ŝanĝoj kontrolas ĉi tiun vivon:

| Setting | Deskribo | Default |
|---|---|---|
| **Block Frontend Access** | La ĉefa ŝanĝo (toggle). Kiam aktiva, blokas la publikan antaŭparton de la retoj sitoj, kiam ilia miempartio ne plu estas aktiva. | Off |
| **Frontend Block Grace Period** | La nubaj tagoj, kiujn vi esperi post tio, kiam la miempartio ne estas aktiva, antaŭ blokado. Setu al `0` por bloki tate. | 0 |
| **Frontend Block Page** | Paĝo sur la ĉefa sita, al kiu vizitaroj redirektas, kiam un sitio estas blokita. Se ĝi ne estas setita, vizitaroj vidas ĝeneran mesaĝon "Sitio ne estas disponibile en tiu momento" kun linko al la log-in paĝo por la admino de la sitio. | None |

### Kion Vizitaroj Vidas, Kiam Un Sitio Estas Blokita {#what-visitors-see-when-a-site-is-blocked}

Kiam antaŭa parto estas blokita, vizitaroj al la sitio ĉu:

1. **Redirektita** al la paĝo, kiun vi elektis en **Frontend Block Page** (se ĝi estas setita), aŭ
2. **Vidas defaultan mesaĝon**: "Ĉi tiu sitio ne estas disponibile en tiu momento" kun linko al la log-in paĝo por la admino de la sitio.

Adminoj de la sitio povas pliboni -- la log-in paĝo ne estas blokita.

### Kion Blokas kaj Kiam {#what-gets-blocked-and-when}

La blokita vivo dependas de la status de la miempartio:

| Status de Membro | Frontend Bloke? | Perio de Graçia Aplicada? |
|---|---|---|
| Aktiva | Ne | -- |
| Trialing | **Ne** (veja la notă mai jos) | -- |
| On Hold | Konsiderata aktiva -- ne blokeata | -- |
| Expired | **Oui**, se blokare Accès Frontend este activată | Oui |
| Cancelled | **Oui**, întotdeauna (indiferent de setări) | **Nu** -- blocat imediat |
| Pending | Nu este blocat prin verificare a membrii | -- |

:::warning Membrii Trialing nu sunt blocați
Chiar dacă perioada de trial s-a încheiat, un membru cu statut `trialing` **nu** va fi blocat pe frontend. Perioada de trial trebuie mai întâi să treacă la alt statut (de obicei `on-hold` prin jobul cron) și apoi la `expired` dacă nu a fost plătit. Dacă vedeți membrii trialing care nu au trecut la un alt statut, verificați secțiunea de soluționare a problemelor de mai jos.
:::

:::note Membrii Cancelled ignoră perioada de grație
Membrii canceli sunt întotdeauna blocați odată ce data expirării a trecut, indiferent dacă Accès Frontend Block este activat. Perioada de Grație pentru Blocarea Frontend **nu** se aplică membrilor canceli.
:::

## Soluționare a Problemelor: Site-uri care rămân accesibile după expirare {#troubleshooting-sites-remaining-accessible-after-expiration}

Dacă site-urile rămân accesibile public după expirarea unui membru, urmați aceste verificări în această ordine:

### 1. Verificați că Setarea Block Frontend Access este activată {#1-verify-the-block-frontend-access-setting-is-enabled}

Mergeți la **Ultimate Multisite > Settings > Memberships** și confirmați că comutatorul **Block Frontend Access** este pornit (on). Această setare este **dezactivată prin default**, ceea ce înseamnă că doar wp-admin este restricționat atunci când un membru devine inactiv.

### 2. Verificați Perioada de Grație pentru Blocarea Frontend {#2-check-the-frontend-block-grace-period}

Sur la sama page de paramètres, vérifiez la valeur **Frontend Block Grace Period**. Si celle-ci est réglée sur 7 jours, par exemple, le frontend ne sera pas bloqué avant 7 jours après la date d'expiration de l'adhésion -- même si le statut de l'adhésion est déjà `expired`.

Réglez cette valeur à `0` si vous souhaitez un blocage immédiat après que l'adhésion devienne inactive.

### 3. Confirmer que le Statut de l'Adhésion a Réellement Changé {#3-confirm-the-membership-status-has-actually-changed}

Allez dans **Ultimate Multisite > Memberships** et vérifiez le statut de l'adhésion concernée. Si elle affiche toujours `active` même après la date d'expiration, la transition de statut n'a pas eu lieu. Causes courantes :

- **L'adhésion se renouvelle automatiquement**: Vérifiez le champ `auto_renew` sur la page de modification de l'adhésion. Si le renouvellement automatique est activé, le cron d'expiration ignore cette adhésion -- il dépend de la passerelle de paiement pour signaler l'échec. Consultez votre tableau de bord de passerelle (Stripe, PayPal) pour confirmer que le statut de l'abonnement correspond à celui affiché par Ultimate Multisite.

- **Le job cron n'a pas été exécuté**: Voir l'étape suivante.

### 4. Vérifier que Action Scheduler Fonctionne {#4-verify-action-scheduler-is-running}

Ultimate Multisite utilise Action Scheduler pour ses jobs cron. Allez dans **Tools > Scheduled Actions** dans l'administration du réseau et recherchez :

- **`wu_membership_check`** -- Ceci devrait apparaître comme un job récurrent s'exécutant toutes les heures. S'il est manquant, les vérifications d'adhésion ne sont pas planifiées.
- **`wu_async_mark_membership_as_expired`** -- Ce sont des tâches individuelles pour marquer certaines adhésions comme expirées. Si vous voyez des actions échouées ici, elles peuvent contenir des messages d'erreur expliquant pourquoi.

Si vous voyez des actions bloquées ou échouées, vous pourriez avoir un problème avec Action Scheduler. Causes courantes :

- **`DISABLE_WP_CRON` estas setata al `true`** en `wp-config.php` sen substituo de cron nivel sistemo
- **Baja trafikaj de sita** -- WP-Cron funkcias nur kiam iu vizitas la siton

Por certigi fiabla ekzekucadon de cron, konfigura job cron sistemo:

```bash
# Funkcia ĉiu 5 minutoj per wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Aŭ per WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Kontrolu por Problemo de Gateway Webhook (Auto-renova Membrajn) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Se la membrajnia auto-renovas kaj la gateway subskribcio estis cancelita aŭ ne funkcias, sed Ultimate Multisite tutplene montras ĝin kiel `active`:

- **Stripe**: Altiĝu al Stripe Dashboard > Customers kaj kontrolu la statuson de la subskribcio. Tiam verifias ke la webhook endpoint estas aktiva sub Developers > Webhooks. La endpoint devas pointedigi al via sita kaj montri sukcesajn transmigrojn.
- **PayPal**: Kontrolu la statuson de la subskribcio en via PayPal bizneskonto kaj verifias la IPN/webhook transmigron.

Se la gateway montras la subskribcion kiel cancelita sed Ultimate Multisite ne montras tiel, la webhook notifikado probable perdis. Vi povas manuveble ŝanĝi la statuson de la membrajnio en **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Kontrolu la Graces Periodo de Ekspirio (Nivel Cron) {#6-check-the-expiration-grace-period-cron-level}

La cron kontrolas sin propra graces periodo (default: 3 tajtaboj) antaŭ markigi la membrajn kiel ekspirita. Tio estas separe de la graces periodo de la frontend bloko. La totala tempo antaŭ tio ke sita blokas povas esti:

**Graces periodo de ekspirio (3 tajtaboj)** + **Graces periodo de frontend bloko (via via konfiguracio)** = Totala tardo

### 7. Manually Expire a Membership {#7-manually-expire-a-membership}

Se vi bezon necese blokigi la siton senone esperi la cron cycle, vi povas manuele ŝanĝi la staton de la membereco:

1. Alti **Ultimate Multisite > Memberships** aliri.
2. Kliku sur la afectita membereco.
3. Ŝanĝu la staton al **Expired** (Espirita) aŭ **Cancelled** (Anulita).
4. Kliku sur **Save** (Salva).

La blokado de la frontend tutegeta efiki pri la suivante paĝo (sub la Grace Period de Blokado de Frontend por memberekaj membrerekaj expiritaj, aŭ tutegeta por anulitaj membrerekaj).

## Rezumo {#summary}

La plena temp-linio de la dato de expirado ĝis blokado de la sita frontend:

```text
date_expiration pasas
       |
       v
  [3-diaj cron grace period]     <-- membereco tutuegeta ŝanĝi kiel aktiva/en hodolo
       |
       v
  Cron markas membrerecon kiel "expired" (Espirita)
       |
       v
  [Frontend Block Grace Period]  <-- konfigurita en Settings > Memberships
       |
       v
  Sita frontend estas blokita
```

Por anulitaj membrerekaj, la vojo estas pli korta:

```text
  Membership cancelled (Membereco anulita)
       |
       v
  date_expiration pasas (sen grace period)
       |
       v
  Sita frontend estas blokita tutuegeta
```

## Developer Reference {#developer-reference}

La sekvaj hooks kaj filters permesas al vi personaligi la komporton de expirado kaj blokado:

| Hook/Filter | Deskripsio |
|---|---|
| `wu_membership_grace_period_days` | Filtru la nomero tajpaj de perioda grasi antaŭ markado de membresco kiel expirata (default: 3) |
| `wu_schedule_membership_check_interval` | Filtru intervalon entre kontroloj de membresco (default: 1 ora) |
| `wu_membership_renewal_days_before_expiring` | Filtru ki daŭroj antaŭ expirado por krei pagaj de renovado (default: 3) |
| `wu_blocked_site_reactivation_url` | Filtru por doni URL de reactivado personalan, kiam site estas blokita |
| `wu_membership_is_active` | Filtru ĉu membresco konsideretas aktiva |
| `wu_membership_expired_check_query_params` | Filtru la parametroj de la petita uzata por trovi expiratingajn membrescojn |
| `wu_membership_trial_check_query_params` | Filtru la parametroj de la petita uzata por trovi expiratingajn provojn
