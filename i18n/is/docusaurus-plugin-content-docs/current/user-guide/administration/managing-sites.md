---
title: Styring við vefsíður
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Stjórnun Sajta

Sajtar (eða subsajt) eru kjarninn í verkefni WaaS þíns. Ultimate Multisite hefur 3 öryggistypar sajta:

- **Kjörðu eigandi** — Sajtar sem tilheyra sérstökum viðskiptavinum
- **Sajta mallar (Site Templates)** — Fyrirbestíll sajtar sem viðskiptavinir geta valdið sem byrjunspunkt
- **Hovedsajt** — Innri nýtingasajtinn þinn

## Sjá Sajtar {#viewing-sites}

Navigera yfir í **Ultimate Multisite → Sites** til að sjá allar subsajtar í netinu þínu. Hvert sajtur er merkt með öryggistypi og þú getur skoðað eftir All Sites, Customer-Owned (Kjörðu eigandi), Templates (Mallar) eða Pending (Enn ekki sett).

![Sites list page](/img/admin/sites-list.png)

## Að Búa Til Nýs Sajta {#adding-a-new-site}

Klikka á knappa **Add Site** (Búa til sajta) til að skapa nýja sajta. Þú þarft að veita:

- **Site Title** — Nafn nýja sajtar
- **Site URL** — Domen/stígur fyrir sajtan
- **Site Type** — Hvarð er það kjörðu eigandi, mallur eða almenn sajtur

Notkun **Copy Site** (Kopya Sajt) leyfir þér að skapa nýja sajta upp á grundvelli eingildum tilstaða sajta. Þegar þetta er sett í ljós geturð valdið hvaru mallar sem byrjunspunkt. Hugsaðu að **Copy Media on Duplication** (Kopya miðla á duplikat) sé sett í ljós til að innihalda miðlafilein.

## Stjórnun Til Fyrst Sett Sajta {#managing-an-existing-site}

Klikka á **Manage** (Stjórna) á sem sem margt sajtar til að opna **Edit Site** (Búa til endurskoða sajta). Hér finnur þú:

### Grundlagshlut {#basic-information}
Nafn sajtarinn, öryggistypi, sajta ID og skýring. Þú sjáttur einnig mappa domen, tengd lánningu og viðskiptavinarsaka sem eigir sajtan.

### Sajta Valkostir {#site-options}
Stjórna fjarskiptingum og taktvæðum sajtarinn:

- **Visit limits** — Máxima fjöldi heimsóða á sajtan
- **User account limits** — Takmörkunar fyrir viðkomandi hlutverkann notanda
- **Disk space** — Skráningstakmörkun fyrir sajtan
- **Custom domain** — Skilja domen mappað fyrir þennan sajtan
- **Plugin and theme visibility** — Stjórna hvaða pluginir og temar eru sýnleg, hýrt eða fyrirfyrst sett

By default, følgja steytur á síðum þar sem er settir takmarkanir á lánningstíðni. Settir takmarkanir á síðu-nivó will override membership settings.

### Samningar (Associations) {#associations}

Undir síðu-einingunum finnur þú upplýsingar um:

- **Mapped domains** sem eru tengd síðu
- **Membership** sem síða er undir
- **Customer account** sem er tengd síðu

### Hópur á hún (Right Sidebar) {#right-sidebar}

Á hödri á hún getur þú:

- **Enable/disable the site** með skipti-tölvubúnaðarknapp
- **Change the site type** eða mæla eigarnafyllingu úr againn
- **Set a site image/thumbnail** (sem sýnist á fyrir framan síðuna fyrir site templates)
- **Delete the site** sem er varðveitt
