---
title: Öryggisþjónustu leigandans
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Drifing við sjálfstæðan leita (Sovereign Tenant Operations)

Ultimate Multisite: Multi-Tenancy 1.2.0 hefur lagt í bót verkfæri fyrir sjálfstæða leita (sovereign tenants): subsíti sem renna með sínum eiga upplýsingatabu, grunnstjörnu myndun (filesystem root) og leiðurstöðu viðskiptaflokksins (routing context), en eru framkvæmdar fyrir netkunarstjórnann.

Brugðu þessa síðu þegar þú ert að stjórna sjálfstædum viðskiptavillum, fjarska-leita (remote-site handoffs) eða migraðum sem hreyfa staðla subsíti í sjálfstæðan uppbyggingu.

## Hvað breytist fyrir stjórnendur?

- **Stateless tenant autologin** — Netkunarstjórnarar geta heimsókað sjálfstæða leita án þess að þurfa að nota langvarandi sama samhengi (shared session state). SSO token er sérsniðið fyrir þennan notkun, viðfangandi upprunalegt punktum (origin-pinned), vernd fyrir uppspiluppréttingar (replay-protected) og takmarkstilt til stuttar lausa tíma.
- **Sovereign-aware routing** — Gamli, sjálfstæð netverk og sjálfstæð leita lösa sig með sama leiðurstöðu á staðnum fyrir uppsetningu (site router path), sem minnkar þásetningu milli gamla og nýr sjálfstæða uppsetningar.
- **Verified migration state** — Verifiseringar við migrað (migration verification checks) skila eftir notendur, réttindi fyrir skripta upplýsingatabu (database writer permissions), stöðu af flutningum í kø (queue drain status) og fraværni gamla tábla áður en leitið blir færð fyrir að vera fullkomlega uppsetzt.
- **Safer teardown** — Teardown sjálfstæða leita fjölfráðar nú fjölfráðar hreint, svo að sýnandi leiti ekki laukið með óþarfsemi í upplýsingatabu (stale database access).

## Heimsóking sjálfstæðs leita

1. Opna **Network Admin > Ultimate Multisite > Sites**.
2. Veldu sjálfstæða leita.
3. Notaðu **Visit (SSO)** þegar það er mögulegt í stað þess að upplýpa lykilabókum eða skapa tímabundiðar stjórnendakonto.

Heimsókingurinn skapar stuttbundið innlogingstoken fyrir þennan leita og skráir SSO hændingu í auditi leita. Ef knúkurinn ekki virki, skoðaðu að leitandi doménin leiða til viðeigandi uppsetningarsjónar og að leiti geti að komast á netkunarstjórnans SSO endipöntun (endpoint).

## Teiknlist fyrir fjarska-leita (Remote-site operations checklist)

Fyrir að breyta sjálfstæðum eða fjarska-leitu, staðfesti:

Domænin fyrir leigandann (tenant domain) er settur á host sem eigir leigandafylkinginn (filesystem).
Hosturinn fyrir leigandadatabasa samsvarar við innreiðsluhostuna (host binding) sem var sett upp fyrir þennan install.
Verfið fyrir migrað (migration verification commands) er ánnt fyrir leigann.
Asynkrar migraðs kjöllur (async migration queues) eru tømt áður en breytingar í DNS eða eigardómum (ownership changes) eru gerð.
Leigandafærslumaðurinn (tenant admin user) var sett upp á meðan migraði og getur logga inn með SSO.

## Leikning leigandafylkinga (Deleting sovereign tenants)

Leikning leigandafylkingar er að sýna því að það eyðist data. Staða bakkupu og exportinn verður að staðfest á fyrsta stigi, síðan fjerni leigann frá skráningarskjans (site management screen). Flókið 1.2.0 fyrir teikningu fjernir leigandadatabasa skilaboð sem hluti af hreinsunarferlinu, en þarf stjórnendur að staðfesta að host-stigi database users og fólk (folders) séu burt þegar þeir nota yfirburðar host-panel.

:::warning
Þú ert ekki leit á leigandafylking sem migraði er enn í gang eða en asynkrar push jobs eru kjöllur. Vitið það fyrir að staðfesta migraði ferlið hefur verið færdur, svo teikningin sé ekki að fjerna skilaboð sem eru nauðsynleg fyrir kjöllur sem eru í gang.
:::
