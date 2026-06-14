---
title: Taisgadh a' chluainn agus blocadh site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Cuimhneachadh air a' chluarach agus air a' chluarach an site

Tha an t-amlas seo a' gluasad a bhith a' chluarachadh amlas, deuchainn a' chluarach, agus a' chluarachadh an site. Tha e a' gabhail air an seachdaine an amlas a' tòiseachadh de 'active' gu 'expired', na stiùirithe a tha a' gabhail air an chluarachadhaidh a bhith a' chluarach, agus cè a tha a' gabhail air a bhith ag obair air an site air faighinn an amlas.

## Cuimhneachadh air a' chluarachadh amlas

Tha amlas air a chluarachadach ann i ungllaidh Ultimate Multisite:

:::note Tha amlas fadaich (lifetime)
Nì amlas fadaich a tha a' tòiseachadh gu mòr. Tha amlas fadaich a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha e a' gabhail air a bhith a' chluarachadh air faighinn an amlas gu mòr, mar a tha

:::info
Sealltair de sgilean (grace period) de 3 diugh chan eil a' chothromh le sealltair de sgilean de bloc an t-frontend a chluas air a dhèanamh aige. A' chothromh de sgilean a chothromh gu sàmhach an **stàt a tharrach** de active/on-hold go expired. A' chothromh de sgilean de bloc a chothromh gu sàmhach an **site a chluas** an uair a tharrach an stàt a tharrach.
:::

#### Membriospa a tharrach (Auto-Renewing) vs. A tharrach (Non-Auto-Renewing)

Tha an t-eachd seo cruinn airson a bhith a' tuilleadh air an sealltair de sgilean:

- **Membriospa a tharrach (non-auto-renewing)** (`auto_renew = false`): Tha an cron job a' chluas a' gabhail an tàimeoir gu latha - tha e a' creachadh fhaisg de uile an t-am, a' chlàradh an meibris air on-hold, agus a' chlàradh e gu sàmhach as fheàrr mar expired thuair a tharrach an fhaisg.

- **Membriospa a tharrach (auto_renew = true)**: Tha an t-eachd de sgilean cron a' chluas **a' ghlìothadh gu sàmhach**. Tha an fhaisg de chàrach (Stripe, PayPal, etc.) a' tuilleadh air Ultimate Multisite gu webhooks nuair a tharrach an t-uisge (subscription) no tha e a' chluas. Mar a tha an webhook a' tòiseachadh a' tòiseachadh – mar a tha an endpoint a' chluas gu sàmhach, mar a tha an fhaisg a' chluas, no mar a tha an uisge a' chluas an t-am - leum nas fhaighinn an meibris air `active` gu sàmhach air a tharrach an t-am.

### Ciamar a tharrach na triail (How Trials End)

Nuair a tharrach an t-am de riaghladh triail, tha an siostam:

1. A' creachadh fhaisg a' chluas le fhaisg uisge gu latha air an t-uisge gu latha.
2. A' chlàradh an stàt de membership de `trialing` go `on-hold`.
3. A' sgaidh an email de fhaisg a tharrach air an custaimer.

Tha an seòrsa seo a' tòiseachadh air an amhair cron job a' chluas gu latha mar an tàimeoir de sgilean a' chluas, ach **dùirchd air na meibrispa a tharrach (auto-renewing)**. Tha an fhaisg de chàrach a' chluas a' tuilleadh air an t-uisge de triail gu fhaisg a' chluas.

## Bloc an t-frontend a chluas

Dè an t-seall, gu nà, nuair a thàir an t-suidhe (membership) air a tha a' sgaidh air, **taich a tha dìreach an wp-admin dashboard a' sgaidh**. Tha an fhuartail (frontend) den site a' sgaidh air a' tha a' sgaidh. Mar sin, chun a bhith a' sgaidh an t-suidhe public, muscha thu a' sgaidh an setadh **Block Frontend Access**.

### A' sgaidh an setadh

Tuisgeadh gu **Ultimate Multisite > Settings > Memberships** agus tha thu a' sgaidh **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Seo e bhreith air an t-seall den sealladh setadh an t-suidhe:

![Membership settings full page](/img/config/settings-membership-full.png)

Tha tònaichean setadh beag a' sgaidh an fhaighinn seo:

| Setadh | Aonns | Fhuartail |
|---|---|---|
| **Block Frontend Access** | An tònaich mòr. Nuair a tha e a' sgaidh, a' sgaidh an fhuartail public den sitean na h-nàth air nuair a tha an t-suidhe air a' sgaidh. | Off |
| **Frontend Block Grace Period** | Ambeidh tairgse (grace period) de chùiriche gu faic a' sgaidh a' mbeadh an t-suidhe air a' sgaidh a' mbeadh. Setadh go `0` chun a' sgaidh agad gu leòr. | 0 |
| **Frontend Block Page** | Sealladh ar an site mhath airson a' chluichinn (redirect) do chluichean air gu cunntas nuair tha site a' sgaidh. Mar a tha e ann, tha chluichean a' fheuchainn meil a' chluichinn "Tha an site seo a' sgaidh" le lìn airson an t-suidhe admin. | None |

### Tha cè a fheuchainn gu sgaidh nuair tha site a' sgaidh air

Nuair a tha an fhuartail (frontend) a' sgaidh, bi chluichean den site a' bheachd:

1. **Tha iad a' chluichinn** do an sealladh a tha thu a' sgaidh anns **Frontend Block Page** (mar a tha e ann), mar a tha
2. **Tha iad a fheuchainn meil de chùiriche**: "Tha an site seo a' sgaidh" le lìn do chluichinn admin an site.

Is eadar, tha chluichean a' faighinn gu cunntas -- tha an sealladh chluichinn ann a' sgaidh gu leòr.

### Tha cè a sgaidh agus nuair

Tha fhaighinn a' sgaidh ag iarraidh air a bhith a' sgaidh an t-suidhe:

| Stàtùs a Membri | Frontend Bloced? | Períod Grace Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (leide an nota air a tha a tha) | -- |
| On Hold | Bhaidhe sin a' chunn beannach -- chaidh e a' chunn beannach | -- |
| Expired | **Yes**, os seir Block Frontend Access ar fhaighinn | Yes |
| Cancelled | **Yes**, daoine a tha a tha (air gu bheil am fhaighinn) | **No** -- chaidh e a' chunn beannach agad air an t-àite |
| Pending | Chaidh e a' chunn beannach gu sgaidh a' chunn beannach | -- |

:::warning Tha meibbratach a tha a tha (Trialing memberships) chaidh a' chunn beannach
Air dùil gu bheil am fhaighinn a' chunn beannach, seachda an t-àite a tha 'trialing', **chaidh e a' chunn beannach** air an frontend. Tha e cheann a tha a tha a tha a' chunn beannach a' chunn beannach gu sgaidh (typically 'on-hold' via the cron job, a tha a tha a tha a' chunn beannach air an t-àite). Mar a tha thu a' chunn beannach a tha a tha a tha a' chunn beannach a tha a tha a tha a' chunn beannach.

:::note Tha meibbratach a tha (Cancelled memberships) chaidh e a' chunn beannach agad air an t-àite
Tha meibbratach a tha a tha a tha a tha a' chunn beannach a tha a tha a tha a' chunn beannach. Chaidh e a' chunn beannach agad air an t-àite gu sgaidh (regardless of whether Block Frontend Access is enabled). Tha an períod grace a tha a tha a tha a tha a' chunn beannach a tha a tha a tha a' chunn beannach.
:::

## Troubleshooting: Sites Remaining Accessible After Expiration

Tha sitean a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a tha a

Ar thu na pàipean a' chlàradhach, leathainn an **Frontend Block Grace Period** (Tairm Ghràdhach airson Blocadh Frontend). Mar eisimpleir, má tha seo a' tòiseachadh air 7 daina, níl feuchd an frontend a bhith wedi' sealltain gu h-aon daina an uair a thar a' chlàradh an t-saoghal (membership) a tha a' tòiseachadh. Sealltain seo gu sònraichte, ri dùil mar a tha stat an t-saoghal air a bhith beag.

Rinn anseo seo air `0` má thuair a tha thu a' tòiseachadh air blocadh agad agad air an t-saoghal gun eil e air a bhith beag.

### 3. Bhaigh a' chlàradh stat an t-saoghal a' tòiseachadh gu fìr

Rinn air **Ultimate Multisite > Memberships** agus cheannach stat an t-saoghal a tha a' tòiseachadh. Má tha e ag tòiseachadh gu `active` air a tha eair a thar a' chlàradh, tha an t-saoghal a' tòiseachadh chan eil fhaighinn. Tha e cheannach a' tòiseachadh:

- **Tha an t-saoghal a' tòiseachadh air a' chlàradh (auto-renewing)**: Cheannach an `auto_renew` ar pàipean a' tòiseachadh an t-saoghal. Má tha auto-renew a' tòiseachadh, tha an cronaichean (cron) airson an t-saoghal seo a' tòiseachadh – tha e ag iarraidh a bhith a' tòiseachadh air an t-saoghal a tha a' tòiseachadh. Cheannach an dashboard pàirtich (Stripe, PayPal) a' tòiseachadh airson a bhith a' tòiseachadh gu sònraichte mar a tha eair a thòiseachadh.

- **Tha an cronaichean (cron job) a' tòiseachadh chan eil**: Cheannach an t-sealladh a' tòiseachadh.

### 4. Bhaigh a' chlàradh Action Scheduler a' tòiseachadh

Tha Ultimate Multisite a' tòiseachadh air Action Scheduler airson na cronaichean (cron jobs) sin. Rinn air **Tools > Scheduled Actions** anns an admin de nàthair agus cheannach air:

- **`wu_membership_check`** -- Tha seo ag tòiseachadh gu fìr mar a' chlàradh a' tòiseachadh gu àirdeann. Má tha e a' tòiseachadh, tha an t-saoghal a' tòiseachadh chan eil a' tòiseachadh air a bhith beag.
- **`wu_async_mark_membership_as_expired`** -- Tha na h-aon-dèilean sin ag tòiseachadh airson a bhith a' tòiseachadh an t-saoghal a' tòiseachadh gu sònraichte. Má tha thu a' tòiseachadh air a' chlàradh fòrlaidh (failed actions) an sin, eadar-dèilean chan eil a' tòiseachadh airson a bhith a' tòiseachadh a' tòiseachadh.

Má tha thu a' tòiseachadh air a' chlàradh a' tòiseachadh gu fìr (stuck or failed actions), eadar-dèilean chan eil a' tòiseachadh airson a bhith a' tòiseachadh. Tha na h-aon-dèilean sin ag tòiseachadh:

- **`DISABLE_WP_CRON` is set to `true`** in `wp-config.php` without a system-level cron replacement
- **Traidh le fhaisg an site (Low site traffic)** -- WP-Cron guir no thaichd gu robh a bhith a' chluin a thaithid an site

Chan eil e cheannach a bhith ag obair cron gu mòr, rinnseall an cron job de dhòchas:

```bash
# Obair gu 5 minit a' chluin le wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Mar a tha e gu WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Comharrachadh fiosrachadh air coimhead Gateway Webhook (Auto-Renewing Memberships)

Mar a tha an fhaisg ag obair gu robh e a' chluin a thaithid agus mar a tha an coimhead gateway wedi' sgeuladh, ach tha an Ultimate Multisite ag obair gu robh e a' chluin `active`:

- **Stripe**: Comharrach gu Dashboard Stripe > Customers agus comharrach air a bhith a' chluin status. An uair a tha thuair a' chluin (webhook endpoint) ag obair, comharrach air a bhith ag obair an Developer > Webhooks. Fad a tha e ag tighinn air do site agus a' chluin a' chluin fhaighinn.
- **PayPal**: Comharrach air a bhith a' chluin status anns a gcurta business PayPal agus comharrach air a bhith a' chluin IPN/webhook.

Mar a tha an gateway ag obair gu robh e a' chluin wedi' sgeuladh ach chaidh an Ultimate Multisite a' chluin, bha an fiosrachadh webhook a' chluin. Is e cheannach a bhith ag atharrachadh status an fhaisg gu mheansrach anns **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Comharrachadh an t-amadh a tha air a' sgeuladh (Cron Level)

Tha an comharrachadh cron ag obair gu robh e a' chluin a thaithid (default: 3 dachaigh) a dimint a bhith a' chluin. Tha seo a' tairt air a bhith a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chluin a' chlu

Am Beispiel, mit de default settings und ere 7-tägige vorende grace period für d'frontend, chönnt es bis zu 10 täg nach `date_expiration` dure, bevor d'site würkli blockiert wird.

### 7. Manuell Ablauf e Mitgliad (Membership)

Wenn du d'site sofort blockiere muesch und nöd uf de cron cycle warte chasch, chasch d'mitgliadsstatus manuell ändere:

1. Gang zu **Ultimate Multisite > Memberships**
2. Klick uf s'betroffeni mitgliad
3. Ändere de status uf **Expired** oder **Cancelled**
4. Klick uf **Save**

D'frontend-block wird bi em nöchste page load in Kraft trete (abhängig vo de Frontend Block Grace Period für abgelaufeni mitgliads, oder sofort für abgstellti mitgliads).

## Zämmefassig

De ganz Ablauf vo de ablaufdatum bis zur site-blockierig:

```text
date_expiration verbi
       |
       v
  [3-tägigi cron grace period]     <-- s'mitgliad zeigt no als aktiv/on-hold a
       |
       v
  Cron markiert s'mitgliad als "expired"
       |
       v
  [Frontend Block Grace Period]  <-- konfiguriert i Settings > Memberships
       |
       v
  D'frontend vo de site wird blockiert
```

Für abgstellti mitgliads isch de Wäg kürzer:

```text
  Mitgliad abgstellt
       |
       v
  date_expiration verbi (kei grace period)
       |
       v
  D'frontend vo de site wird sofort blockiert
```

## Entwickler-Referenz

Die folgendi hooks und filters lach dir zue, d'ablauf und d'blockierigsverhalte z'passiere:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | A' chlàradh an nù-dhinean grace period a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàrad
