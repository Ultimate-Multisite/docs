---
title: "Ho Felisoa ha Setho le Ho Thibela Sebaka sa Wepe"
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---

# Ho Felisoa ha Setho le Ho Thibela Sebaka sa Wepe {#membership-expiration-and-site-blocking}

Tataiso ena e hlalosa kamoo Ultimate Multisite e sebetsanang le ho fela ha setho, ho fela ha nako ea teko, le ho thibela frontend ea sebaka sa wepe. E akaretsa tsela eo setho se fetohang ka eona ho tloha ho `active` ho ea ho `expired`, litlhophiso tse laolang hore na libaka li thibeloa kapa che, le seo u lokelang ho se hlahloba ha sebaka se ntse se fumaneha le hoja setho se se se felile.

## Mokhoa oa ho Fetoha ha Boemo ba Setho {#membership-status-lifecycle}

Setho ka seng sa Ultimate Multisite se na le e 'ngoe ea maemo ana:

:::note Litshebeletso tsa mahala ke tsa bophelo bohle
Litshebeletso tsa mahala ha li fele ka boona. Ultimate Multisite e li nka e le phihlello ea bophelo bohle, kahoo ha li kenngoe tlhahlobong ea ho fela, ntle le haeba mookameli a fetola boemo ba tsona kapa a fetisetsa moreki sehlahisoa se seng.
:::

| Boemo | Mohlalosi |
|---|---|
| **Pending** | E emetse tefo ea pele kapa netefatso ea lengolo-tsoibila |
| **Trialing** | Nako ea teko e ntse e sebetsa, ha ho so bokelloe tefo |
| **Active** | E lefiloe ebile e ntse e sebetsa |
| **On Hold** | Tefo ea ho nchafatsoa e emetse (invoice e entsoe, e ntse e letetsoa tefo) |
| **Expired** | E feta letsatsi la ho fela le nako ea mohau ntle le tefo |
| **Cancelled** | E tlositsoe ka boomo ke moreki kapa mookameli |

### Kamoo Setho se Fetohetseng ho Expired {#how-memberships-transition-to-expired}

Ultimate Multisite e tsamaisa tlhahlobo e etsahalang **hora e 'ngoe le e 'ngoe** e shebang litshebeletso tse lokelang ho tšoauoa e le `expired`. Tlhahlobo ena e sebelisa [Action Scheduler](https://actionscheduler.org/) (eseng WP-Cron ka kotloloho) mme e tsamaisoa e le ketso e hlophisitsoeng `wu_membership_check`.

Tlhahlobo ea ho fela e na le **nako ea mohau ea matsatsi a 3** ka boiketsetso. Setho se ke ke sa tšoauoa e le `expired` ho fihlela matsatsi a 3 ka mor’a hore `date_expiration` e fete. Sena se fa bareki nako ea ho qeta tefo e liehileng pele boemo bo fetoha.

:::info
Nako ea mohau ea matsatsi a 3 e arohane le `Frontend Block Grace Period` e hlalositsoeng ka tlase. Nako ea mohau ea pele e laola hore na boemo bo fetoha neng ho tloha ho active/on-hold ho ea ho expired. Frontend block grace period e laola hore na **sebaka seo sa wepe** se koalloa neng kamora hore boemo bo se bo fetohe.
:::

#### Litshebeletso tsa Ho nchafatsoa ka boikhethelo vs tse sa nchafatsoang ka boikhethelo {#auto-renewing-vs-non-auto-renewing-memberships}

Phapang ena e bohlokoa ho utloisisa boits'oaro ba ho fela:

- **Litshebeletso tse sa inchafatseng ka bo tsona** (`auto_renew = false`): mosebetsi o etsahalang ka hora o laola tsela eohle -- o etsa litefo tsa nchafatso, o fetola setho ho `on-hold`, ebe qetellong o se tšoaea e le `expired` haeba tefo e sa amoheloe.
- **Litshebeletso tse inchafatsang ka bo tsona** (`auto_renew = true`): tlhahlobo ea hora ea ho fela **e li tlohela ka ho feletseng**. Gateway ea tefo (Stripe, PayPal, jj.) e lokela ho tsebisa Ultimate Multisite ka webhook ha subscription e hloleha kapa e hlakoloa. Ha webhook e sa fihle (ha endpoint e sa hlophisoa hantle, gateway e e-na le bothata, kapa subscription e hlakotsoe kantle ho sistimi), setho se ka sala `active` ka nako e telele leha letsatsi la ho fela le se le fetile.

### Kamoo Nako ea Teko e Felang {#how-trials-end}

Ha setho se le `trialing` 'me nako ea sona ea teko e fela, sistimi e:

1. E theha tefo ea nchafatso e emetse ka palo e felletseng
2. E fetola boemo ba setho ho tloha `trialing` ho `on-hold`
3. E romela lengolo-tsoibila la tefo ea nchafatso ho moreki

Ts'ebetso ena e matha ka kemiso e tšoanang ea hora le tlhahlobo ea ho fela e tloaelehileng, empa **e sebetsa feela ho litshebeletso tse sa inchafatseng ka bo tsona**. Bakeng sa litshebeletso tse inchafatsang ka bo tsona, gateway ea tefo e laola phetoho ho tloha tekong ho ea ho subscription e lefuoang.

## Ho thibela phihlello ea Frontend {#block-frontend-access}

Ka boiketsetso, ha setho se felile kapa se le `on-hold`, **dashboard ea wp-admin feela e thibeloa**. Frontend ea sebaka sa wepe e ntse e fumaneha ho baeti. Ho thibela le phihlello ea sechaba, o lokela ho kenya tshebetsong kgetho ea **Block Frontend Access**.

### Ho Hlophisa Kgetho ena {#configuring-the-setting}

Eya ho **Ultimate Multisite > Settings > Memberships** ebe o kenya tshebetsong **Block Frontend Access**.

![Mefuta ea Settings ya Block Frontend Access e bonts'a toggle e buletsoeng, nako ea mohau ea matsatsi a 7, le khetho ya Frontend Block Page](/img/config/settings-membership-block-frontend.png)

Mona ke pono e felletseng ya leqephe la litlhophiso tsa membership:

![Leqephe le felletseng la litlhophiso tsa membership](/img/config/settings-membership-full.png)

Litlhophiso tsena tse tharo tse amanang li laola boits’oaro bona:

| Kgetho | Tlhaloso | Boikhethelo |
|---|---|---|
| **Block Frontend Access** | Togola e kholo. Ha e buletsoe, e thibela frontend ea libaka tsa netweke ha membership ea tsona e se e sa sebetse. | Off |
| **Frontend Block Grace Period** | Palo ea matsatsi a ho ema pele ho thibeloa kamora hore membership e se hlole e sebetsa. Beha `0` ho thibela hang-hang. | 0 |
| **Frontend Block Page** | Leqephe la sebaka se seholo sa main site leo baeti ba tla romelloa ho lona ha sebaka se koetsoe. Ha e sa beoa, baeti ba bona molaetsa o ka sehloohong: "Site not available". | None |

### Seo Baeti ba se Bonang ha Sebaka se Koetsoe {#what-visitors-see-when-a-site-is-blocked}

Ha frontend e koetsoe, baeti ba sebakeng ba tla fumana ho hong ho latelang:

1. **Ba fetisetsoa leqepheng** leo o le khethileng ho **Frontend Block Page** (haeba le kentsoe), kapa
2. **Ba bona molaetsa o tloaelehileng**: "This site is not available at the moment." o nang le khokahanyo ho leqephe la login bakeng sa mookameli oa sebaka.

Balaoli ba sebaka ba ntse ba ka kena -- leqephe la login ha le koaloe.

### Ke eng e Thibetsweng le ka Nako efe {#what-gets-blocked-and-when}

Boits’oaro ba thibelo bo itšetleha ka boemo ba setho:

| Boemo ba Setho | Na Frontend e Koaletsoe? | Na Nako ea Mohau ea Sebelisoa? |
|---|---|---|
| Active | Che | -- |
| Trialing | **Che** (bona tlhokomeliso ka tlase) | -- |
| On Hold | E nkoa e ntse e sebetsa -- ha e thibeloe | -- |
| Expired | **Ee**, haeba `Block Frontend Access` e buletsoe | Ee |
| Cancelled | **Ee**, kamehla (eseng ho latela kgetho) | **Che** -- thibelo hang-hang |
| Pending | Ha e thibeloe ke tlhahlobo ea setho | -- |

:::warning Litshebeletso tsa Trialing ha li koalletsoe
Leha nako ea teko e se e feta, setho se nang le boemo `trialing` **se ke ke** sa thibeloa ho frontend. Trialing e tlameha pele e fetohe boemong bo bong (hangata `on-hold` ka cron, ebe `expired` haeba ho sa lefshwe). Haeba u fumana litshebeletso tsa trialing tse sa fetoheng, sheba karolo ea ho rarolla mathata e ka tlase.
:::

:::note Litshebeletso tse Cancelled li feta nako ea mohau
Litshebeletso tse Cancelled li koetsoe kamehla hang ha letsatsi la ho fela le feta, ho sa tsotellehe hore `Block Frontend Access` e buletse kapa che. Nako ea mohau ea Frontend Block ha e sebelisoe bakeng sa litshebeletso tse Cancelled.
:::

## Ho Rarolla Mathata: Sebaka se ntse se fumaneha ka mor’a ho fela ha setho {#troubleshooting-sites-remaining-accessible-after-expiration}

Ha sebaka se ntse se fumaneha phatlalatsa leha setho se se se felile, latela mehato ena ka tatellano:

### 1. Netefatsa hore kgetho ea Block Frontend Access e kentsoe {#1-verify-the-block-frontend-access-setting-is-enabled}

Eya ho **Ultimate Multisite > Settings > Memberships** mme u netefatse hore toggle ea **Block Frontend Access** e buletsoe. Ka boiketsetso, tlhophiso ena e **off**, ho bolelang hore ke wp-admin feela e thibeloang ha setho se se hlole se sebetsa.

### 2. Lekola Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Ho leqephe leo le tšoanang, hlahloba boleng ba **Frontend Block Grace Period**. Haeba e behiloe ho matsatsi a 7, joalo ka mohlala, frontend ha e koaloe hang ha setho se felile -- e nka matsatsi a 7 kamora letsatsi la ho fela, leha boemo bo se bo `expired`.

Beha sena ho `0` haeba u batla hore thibelo e etsahale hanghang ha membership e se e sa sebetse.

### 3. Netefatsa hore Boemo ba Setho bo Fetohile Kannete {#3-confirm-the-membership-status-has-actually-changed}

Eya ho **Ultimate Multisite > Memberships** ebe u hlahloba boemo ba setho se amehang. Haeba bo ntse bo bontša `active` leha letsatsi la ho fela le se le fetile, phetoho ea boemo ha e so etsahale. Mabaka a tloaelehileng:

- **Setho se inchafatsa ka bohona**: Hlahloba sebaka sa `auto_renew` ho leqephe la ho hlophisa setho. Ha auto-renew e buletsoe, cron ea ho fela e tlohela setho sena -- e itšetleha ka payment gateway ho tlaleha ho hloleha. Sheba dashboard ea gateway (Stripe, PayPal) ho netefatsa hore boemo ba subscription bo tsamaellana le seo Ultimate Multisite se bo bonts'ang.
- **Cron job ha e so sebetse**: Bona mohato o latelang.

### 4. Netefatsa hore Action Scheduler e sebetsa {#4-verify-action-scheduler-is-running}

Ultimate Multisite e sebelisa Action Scheduler bakeng sa cron jobs tsa eona. Eya ho **Tools > Scheduled Actions** ho network admin ebe u hlahloba:

- **`wu_membership_check`** -- e lokela ho hlaha e le ketso e ntseng e phetoa e etsahalang kamehla ka hora. Ha e le sieo, tlhahlobo ea litshebeletso ha e hlophisoe.
- **`wu_async_mark_membership_as_expired`** -- tsena ke mesebetsi e ikemetseng ho tšoaea litshebeletso tse itseng e le expired. Ha u bona mesebetsi e hlolehileng mona, mohlomong li na le litaba tsa phoso tse hlalosang lebaka.

Ha u bona mesebetsi e emisitsweng kapa e hlolehileng, ho ka ba le bothata ba Action Scheduler. Mabaka a tloaelehileng:

- **`DISABLE_WP_CRON` e behiloe ho `true`** ho `wp-config.php` ntle le cron ea tsamaiso e nkang sebaka
- **Phihlello e tlase ea site** -- WP-Cron e sebetsa ha motho a etela sebaka

Ho netefatsa hore cron e sebetsa ka nepo, hlophisa cron ea tsamaiso:

```bash
# Matha metsotso e meng le e meng e 5 ka wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Kapa ka WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Hlahloba mathata a webhook a gateway (litshebeletso tse auto-renewing) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Ha setho se le auto-renewing 'me subscription ea gateway e hlakotsoe kapa e hlolehile, empa Ultimate Multisite e ntse e bontša `active`:

- **Stripe**: Eya ho Stripe Dashboard > Customers ebe o hlahloba boemo ba subscription. Ebe u netefatsa tlas'a Developers > Webhooks hore webhook endpoint e sebetsa, e lebisitsoe ho site sa hau, mme e bontša deliveries tse atlehileng.
- **PayPal**: Hlahloba boemo ba subscription accounteng ea hau ea PayPal Business mme u netefatse IPN/webhook delivery.

Haeba gateway e bontša subscription e hlakotsoe empa Ultimate Multisite e se e sa e bontše, temoso ea webhook e ka be e lahlehile. O ka fetola boemo ba setho ka letsoho ho **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Hlahloba Grace Period ea ho fela (Boemong ba Cron) {#6-check-the-expiration-grace-period-cron-level}

Cron check e na le nako ea eona ea mohau ka boiketsetso (ka boiketsetso: matsatsi a 3) pele e tšoaea setho e le expired. Sena se arohane le Frontend Block Grace Period. Nako e felletseng pele sebaka se koaloe e ka ba:

**Grace period ya ho fela (matsatsi a 3)** + **Frontend Block Grace Period (kgetho ea hau)** = tieho e felletseng

Mohlala, haeba u na le maemo a tloaelehileng le frontend block grace period ea matsatsi a 7, ho ka nka matsatsi a 10 ka mor’a `date_expiration` pele sebaka sa wepe se thibeloa.

### 7. Fetola setho ka letsoho {#7-manually-expire-a-membership}

Haeba u hloka ho koalla sebaka ka potlako ntle le ho emela potoloho ea cron, u ka fetola boemo ba setho ka letsoho:

1. Eya ho **Ultimate Multisite > Memberships**
2. Tobetsa setho se amehang
3. Fetola boemo ho **Expired** kapa **Cancelled**
4. Tobetsa **Save**

Thibelo ea frontend e tla sebetsa ha leqephe le hlahisoa hape (e ka latela Frontend Block Grace Period bakeng sa expired, kapa hanghang bakeng sa cancelled).

## Kakaretso {#summary}

Mokhoa o felletseng ho tloha ho letsatsi la ho fela ho ea ho koalo ea sebaka:

```text
date_expiration e feta
       |
       v
   [nako ea mohau ea cron ea matsatsi a 3]     <-- setho se ntse se bontša active/on-hold
       |
       v
Cron e tšoaea membership e le "expired"
       |
       v
   [Frontend Block Grace Period]  <-- e hlophisitsoe ho Settings > Memberships
       |
       v
Sebaka sa wepe se koaloa
```

Bakeng sa litshebeletso tse Cancelled, tsela e khutšoanyane:

```text
   Setho se hlakotsoe
        |
        v
   date_expiration e feta (ha ho nako ea mohau)
        |
        v
   Frontend e koaloa hanghang
```

## Referense ea Moqapi {#developer-reference}

Litaelo le lifilters tse latelang li u thusa ho fetola boits'oaro ba ho fela le ho koaloa:

| Hook/Filter | Tlhaloso |
|---|---|
| `wu_membership_grace_period_days` | Filter palo ea matsatsi a mohau pele setho se ngoloa e le expired (boikhethelo: 3) |
| `wu_schedule_membership_check_interval` | Filter tekanyo ea nako lipakeng tsa liphetoho tsa ho hlahloba setho (boikhethelo: hora e 1) |
| `wu_membership_renewal_days_before_expiring` | Filter matsatsi a kae pele ho ho fela ho bopa tefelo ea nchafatso (boikhethelo: matsatsi a 3) |
| `wu_blocked_site_reactivation_url` | Filter ho fana ka URL e khethehileng ea ho tsosolosa ha sebaka se koetsoe |
| `wu_membership_is_active` | Filter hore na setho se nkoa se sebetsa |
| `wu_membership_expired_check_query_params` | Filter li-parameter tsa query tse sebelisitsoeng ho fumana litshebeletso tse felileng |
| `wu_membership_trial_check_query_params` | Filter li-parameter tsa query tse sebelisitsoeng ho fumana litshebeletso tse qetang nako ea trial |
