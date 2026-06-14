---
title: Viðferðarlausn og staðblokka
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Lauðning og Stöðuviðboðir

Þessi leiðferð útskýrir hvernig Ultimate Multisite skiptir með lfundum lauðningum, prófíli-endurheimtunum og blokknum vísindamanna á frumgangurinn. Hún dektar heildar livslífi lauðnings frá aktivum til lausa, innstæðingarnar sem stýra því hvort staðir sé blokkað, og hvað þarf að skoða þegar staðir eru framkvæmt eftir að lauðningur hefur laust.

## Livslífi Lauðningsstöðu

Hvert lauðning í Ultimate Multisite hefur einn af tengdum stöðum:

:::note Frie lauðningar eru á öllífa
Frie lauðningar eru ekki sjálfsviðandi. Ultimate Multisite sést þau sem öllífa aðgengni, svo þeir verða ekki innskiptir í skoðun lausa nema stjórnari breyti stöðu þeirra eða hvíli viðskiptavininn á annarra vörkunar.
:::

| Stöð | Meining |
|---|---|
| **Pending** (Vant) | Vant fyrsta betalningu eða tölvupóstvarfyrirfarð |
| **Trialing** (Prófa) | Aktiv prófíli, engin betalning hefur verið tekinn |
| **Active** (Aktiv) | Betald og á gangi |
| **On Hold** (Á haldi) | Samkvæði fyrir uppfærslu er pending (faktura skráð, vant betalningu) |
| **Expired** (Laust) | Fyrirða lausa tímann og gráttilýsingar án uppfærslu |
| **Cancelled** (Hætta) | Ákveðinn af viðskiptavinum eða stjórnari |

### Hvernig Lauðningar Skipta í Lausa Stað

Ultimate Multisite fer með bakgrunnsskoðun **hvert tíma** sem leitar eftir lauðningum sem þurfa að vera merkt lausa. Þessi skoðun notar [Action Scheduler](https://actionscheduler.org/) (ekki WP-Cron beint) og rennir sem `wu_membership_check` scheduled action.

Lausar skoðun hefur **innbyggd gráttilýsing á 3 dögum** annars. Lauðningur verður ekki merkt sem `expired` þar sem 3 daga hafa farið eftir því að `date_expiration` hans hafi farið. Þetta gefur viðskiptavinum tíma til að fullfærast seint betalningu áður en stöðunin breytist.

:::info
Þessi 3-dagars úldurferðarjan (expiration grace period) er sjálfstandandi frá innstillingunni fyrir gráðferðina fyrir frontend block. Úldurferðarjan styrkir það hvort **status breytist** frá active/on-hold til expired. Gráðferðin fyrir frontend block styrkir það hvort **sítanum er blokkað** eftir að status hefur breytt sig.
:::

#### Sjálfuppfærandi og sjálfuppfærandi lánningarskapningar (Memberships)

Þessi skilningur er mikilvægur til að skilja hvernig úldurferðarjan virkar:

- **Sjálfuppfærandi lánningarskapningar** (`auto_renew = false`): Á tíðarinn (cron job) á hverjum tíma skiptir þetta með öllu lífi – það skapar uppfærunarbetalningar, breytur lánningarskapninguna yfir í on-hold og markar hana að lokum sem expired ef betalning er ekki komin.

- **Sjálfuppfærandi lánningarskapningar** (`auto_renew = true`): Tíðarinn fyrir úldurferðarjan **skiptir þessum heilt**. Betalningshlutana (Stripe, PayPal osakan) er ekki ennæn ábyrgt að kynna Ultimate Multisite um breytingu með webhooks ef skráning fellur eða blir kanselldu. Ef webhookurinn ekki kemur fram – vegna óréttan uppsetningu endpunktsins, sjálfuppfærandi hluta í netinu, eða kansellingu lánningarskapningar utan kerfið – getur lánningarskapningin halda sig `active` óendanlega lengi eftir að úldurferðarjan hefur orðið fyrir.

### Hvernig prófanir (Trials) stendja

Þegar prófaniránningarskapning er íslátt, gerir kerfið:

1. Uppfærunarbetalning sem er pending með fulla lánningarskapningarmjána
2. Breytur status lánningarskapningar yfir í `on-hold`
3. Sendur tölvupóst um uppfærunarbetalningu til viðskiptavininn

Þessi ferli rennir á sama tíðar sem regluleg úldurferðarjan, en **að bara fyrir lánningarskapningar sem eru ekki sjálfuppfærandi**. Fyrir sjálfuppfærandi prófanir hvarf betalningshlutinn í breytingu frá prófan til betaldra lánningarskapningar.

## Blokka frontend aðgang

Al það er sett á við, þegar lánningur (membership) er lausað eða er í hvellu, **er aðeins wp-admin dashboardinn sem er hægt að lesa**. Almenn fyrir miðlitssíðuna er framkvæmt til fólks. Til að stengja aðgang fyrir almenna gjöfendum þarf að aktíva innstillinguna **Block Frontend Access** (Stenging fyrir fyrirfront).

### Innstilling af innstillingunni

Gangi í **Ultimate Multisite > Settings > Memberships** og aktivaðu **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Hér er fullt sýn á síðunni fyrir innstillingar lánningar:

![Membership settings full page](/img/config/settings-membership-full.png)

Þrír tengd innstillingar stýra þessum hámarksháttum:

| Innstilling | Áskipti | Standardverdi |
|---|---|---|
| **Block Frontend Access** | Hérstur bryti. Þegar það er aktívað, stengir það fyrir almennum gjöfendum fyrir fyrirfront miðlitssíða þegar lánningurinn er ekki lengur á hjarta. | Off |
| **Frontend Block Grace Period** | Niðurstaða í dagana sem skal bíða eftir því að lánningurinn sé ekki lengur á hjarta áður en stengingin skipt er aktivað. Setið sett til `0` til að stengja strax. | 0 |
| **Frontend Block Page** | Síða á hlutina á hlutlitssíðuna sem skal leiða gjöfendum í þann síðu sem er sett eftir því að síða sé stengd. Ef ekki er sett, sjá gjöfendur almenna texta "Síða er ekki til við núti" með linki til innskráningarsíðun fyrir miðlitssíðustjórnann. | None |

### Hvað gjöfendur sjá þegar síða er stengd

Þegar aðgangur fyrir fyrirfront er stengður, sjá gjöfendur á síðuna eða:

1. **Sjónar í leiðferð** til síðunnar sem þú settir í **Frontend Block Page** (ef hún er sett), eða
2. **Sjá almenna texta**: "Þessi síða er ekki til við núti" með linki til innskráningarsíðun fyrir miðlitssíðustjórann.

Síðustjórnar geta enn að innskrá sig – innskráningarsíðan er aldrei stengd.

### Hva er stengt og hvornar

Hámarkshátturinn ástæður er eftir lánningastöðu:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Nei | -- |
| Trialing | **Nei** (sjá sjá athuga athvarfi) | -- |
| On Hold | Vissatað er það aktivt – ekki hönnuð | -- |
| Expired | **Já**, ef Block Frontend Access er á | Já |
| Cancelled | **Já**, alltaf (í óháan afsetningum) | **Nei** -- blokkið strax |
| Pending | Ekki blokkið með membership skekkju | -- |

:::warning Trialing memberships eru ekki blokkraðir
Þegar prófanirímið hefur endað, verður membership með `trialing` staðsetningu **ekki** blokkrað á front endi. Prófaniríminn þarf fyrst að skipta staðsetningu í annar stað (til dæmis `on-hold` með cron job), svo ef ekki er betalður, verður það `expired`. Ef þú ert að sjá membership sem eru ekki skipti stað setningu, skoðaðu vinnuferli fyrir lausn áframurendi hér.
:::

:::note Afsetningar (Cancelled memberships) umgåsna gráðarímið
Afsetningar blokkið strax þegar lausa efni er orðið í gang, óháð því hvort Block Frontend Access sé á. Gráðarímið fyrir front endi **skiptir ekki** afsetningum.
:::

## Launansaftur: Síður sem eru framkvæmdar aðgengilegar eftir lausa efni

Ef síður eru framkvæmdar aðgengilegar eftir það sem membership er laust, skoðaðu þessar skref í þessu forgangsordni:

### 1. Staða Block Frontend Access-setningu
Gangi yfir **Ultimate Multisite > Settings > Memberships** og staðfesti að htagg `Block Frontend Access` sé á. Þessi setning er **off by default**, það sem þýðir að only wp-admin sé hægt að komast í það þegar membership er ekki aktivt.

### 2. Staða Block Frontend Grace Period

Á sama innstillingar sýnnuðu **Frontend Block Grace Period** gildið. Ef þetta er settur á 7 daga, t.d., mun frontend ekki verið hönnuð af óhjákvæmilegum fyrir þegar 7 daga hafa orðið eftir að litið er á lausa tímabil með lánum – sjávar það, sjá um það þótt staða lausins sé `expired`.

Setjum þetta á `0` ef þú vilt strax hönnuð af óhjákvæmilegum fyrir þegar lausinn verður inaktivur.

### 3. Staða lausins er í raunni breytt?

Gangi yfir í **Ultimate Multisite > Memberships** og skoða staðann á þeim lausin sem er hugsanlega á við. Ef hann sýnir `active` þrátt fyrir að lausa tímabili hafi orðið eftir, hefur breytingar staðar ekki sköpt. Almenn afirrar ástæður:

- **Lausinn er sjálfskiljanlegur**: Skoðaðu `auto_renew` fältið á breytingasíðun lausins. Ef sjálfskiljanlegur er á, hoppar croninn fyrir lausin þess – hann er að lita á betalingsvegið til að áminna um brotni. Skoðaðu dashboard-ann þitt (Stripe, PayPal) til að staðfesta hvort staða reikningunar passar við það sem Ultimate Multisite sýnir.

- **Croninn hefur ekki runni**: Sjá næstu skref.

### 4. Staða Action Scheduler er í gangi?

Ultimate Multisite notar Action Scheduler fyrir cron jobs sína. Gangi yfir í **Tools > Scheduled Actions** í nettverkstökum og leitaðu eftir:

- **`wu_membership_check`** -- Þetta þarf að sjá út sem uppspretta áfærðar ferli hver tíma. Ef það er glámt, eru staðarferli lausins ekki sköpt.
- **`wu_async_mark_membership_as_expired`** -- Þetta eru einstaklingarferli til að merka sérstök lausin sem `expired`. Ef þú sjá ferli sem hafa falið eða falið, gæti þeir innihalda villumótökun sem sýna hvernig.

Ef þú sjá ferli sem eru fanga eða falið, gæti það verið því að þú hafi vanda í Action Scheduler. Almenn afirrar ástæður:

- **`DISABLE_WP_CRON` er settur `true`** í `wp-config.php` án þess að hafa nánast sama kerfisleg cron samþættingar
- **Lítil sítiþráttur** -- WP-Cron körrrunnar bara þegar fólk hefur heimsókn á síti

Til að tryggja að cron körrrunni sé vöruleg, sett upp kerfisleg cron job:

```bash
# Körrunn hvert 5. mínútu með wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Eða með WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Skennslu á vöndum við Gateway Webhook (Auto-Renewing Memberships)

Ef er lánið sjálfsvinnandi og skráningin í gateway er aflokkurð eða felið, en Ultimate Multisite sýnir það enn sem `active`:

- **Stripe**: Gangi yfir Stripe Dashboard > Customers og skoða skráningastöðu. Þá staðfesti að webhook endpoint sé vöruleg undir Developers > Webhooks. Endpoint-inn þarf að stjórna til sítið og sýna árangursríð delivery.
- **PayPal**: Skennslu skráningastöðu í fjármálaskjölum PayPal og staðfesti IPN/webhook delivery.

Ef gateway sýnir skráninguna sem aflokkurð en Ultimate Multisite ekki, var webhookilýsingin átt fyrir falið. Þú getur mannvætið skráningastöðu í **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Skennslu á gríðstíma fyrir lauxið (Cron Level)

Cron skennslan hefur eigin gríðstíma (eða default: 3 daga) áður en skráning er merkt sem aflokkurð. Þetta er sjálft án þess að hafa samband við gríðstíma fyrir framhjá front-end blokkinn. Niðurstaða fyrir það hvar síti getur verið:

**Gríðstími fyrir lauxið (3 daga)** + **Gríðstími fyrir blokk á front-end (þú setur)** = Samtals afleiðing

Til dæmis, með almennum settum og 7-dagakiljan fyrir front end, gæti það tatt upp ilmsar dagana eftir `date_expiration` áður en er hlutverk síðvar eftir.

### 7. Manually Expire a Membership (Manuallyykka samþykki)

Ef þú þarft að stengja síðvar eða hlutverk sett strax án þess að bíða á cron cyklann, geturðu breytt samþykkiástandið mannvætið sjálf:

1. Gangi í **Ultimate Multisite > Memberships**
2. Klikka á áhrifsvælt samþykkið
3. Breyt samþykkiástandi til **Expired** (Lykkt) eða **Cancelled** (Stengd)
4. Klikka á **Save** (Spara)

Front end stengingin mun virka á næstu síðuuppfærslu (að eftir því er fyrir kilon fyrir front end, eða strax ef samþykkið er stengt).

## Samantekt

Fulli tímamótum frá dagsetningu lauknisdagins til stenging síðvar:

```text
date_expiration fer fram
       |
       v
  [3-dagakiljan kilon fyrir samþykki]     <-- samþykkið sýnist enn aktivt/á haldi
       |
       v
  Cron markar samþykkið sem "expired" (lauknandi)
       |
       v
  [Frontend Block Grace Period]  <-- sett í Settings > Memberships
       |
       v
  Front end síðvar er stengd
```

Fyrir samþykki sem eru stengð, er leiðin farið fyrir:

```text
  Samþykki er stengður
       |
       v
  date_expiration fer fram (engin kilon)
       |
       v
  Front end síðvar er stengd strax
```

## Developer Reference (Vefirbók fyrir þróunarframkvæmdar)

Fylgja eftir eru hook-ir og filters sem leyfa þér að breyta hámarka og áhrifum stengingar:

| Hook/Filter | Skjalði |
|---|---|
| `wu_membership_grace_period_days` | Skilja (filtera) fjölda dags í gráðabreytingu áður en lánning er merkt sem laga út (default: 3) |
| `wu_schedule_membership_check_interval` | Skilja (filtera) tidsintervalinn milli skráningar fyrir lánning (default: 1 stund) |
| `wu_membership_renewal_days_before_expiring` | Skilja (filtera) hversu daga áður en laga er laga út til að skapa betalningu fyrir uppfærslu (default: 3) |
| `wu_blocked_site_reactivation_url` | Skilja (filtera) til að veita sérstaklega skráningarsíðu við afturskráning þegar staður er hönnuð (blocked) |
| `wu_membership_is_active` | Skilja (filtera) hvort lánning sé haldið sem aktivt |
| `wu_membership_expired_check_query_params` | Skilja (filtera) viðskiptaþáttir sem eru notað til að finna laga sem eru laga út |
| `wu_membership_trial_check_query_params` | Skilja (filtera) viðskiptaþáttir sem eru notað til að finna lánning sem eru prófanir og laga út
