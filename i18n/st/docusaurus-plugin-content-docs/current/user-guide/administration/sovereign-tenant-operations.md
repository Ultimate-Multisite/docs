---
title: Hoetsoalo la Mofuta a Tlhaloso
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operations tsa Sovereign Tenant

Ultimate Multisite: Multi-Tenancy 1.2.0 e ntse le litlhahlo tsa boitshwaro (sovereign tenants) di dira tsebo ea ho operatea: subsites tse di ba le database, root ya filesystem, le context ea routing ea ho ruta ka tsela ea bona, mme di tla ba le ho bonahang ho ntle ha e le admin ea rnete.

Use page ena ha u le ho dirisa ho manage sites tsa bohlokoa (isolated customer sites), ho fana ka site-ho tse di fetang ka remote-site handoffs, kapa migrations tse di fetang standard subsite ka infrastructure ea sovereign.

## Eng a fetileng ba admin {#what-changes-for-administrators}

- **Stateless tenant autologin** — Network admins ba ka leba tenant e ntle ha ba tlameha ho ba le session state e ntle e ntse e tsamaea. SSO token e le le tsela e ntle, e le le le lehle (origin-pinned), e le e le le lehle (replay-protected), le e le le lehle ka mofuta o le le lehle (short expiry window).
- **Sovereign-aware routing** — Networks tsa ho ba le tse bao tsa bohlokoa le subsites di fetang ka tsela ea router ea site e le e le le lehle, e ntse e le e le le lehle (bootstrap differences) ho a fana ka botshelo ba ba le ba le le lehle.
- **Verified migration state** — Ho tsamaea haholo tsa migration di reka ho tseba ho ntsa mo provisioning ea user, mofuta oa database writer, status ea queue drain, le tsela e ntle ea table ya legacy ha tenant a tla ba le ba le lehle.
- **Safer teardown** — Ho tsamaea (teardown) ka sovereign ha se fetang ho ntsa credentials tsa tenant ka mofuta o le le lehle, hore subsites tse di fetang ha di tla leba access ea database e ntse e ntle.

## Ho leba tenant a sovereign {#visiting-a-sovereign-tenant}

1. Abala **Network Admin > Ultimate Multisite > Sites**.
2. Select tenant ea sovereign.
3. Use **Visit (SSO)** ha u le ho ba le, ha u le ho kopora passwords kapa ho fetola admin accounts tse di fetang.

Flow ea ho leba e tla fana ka token ea login e ntle e ntse e tsamaea ha tenant le e tla reka event ea SSO mo audit trail ea tenant. Ha se a ba le button, u le ho tsamaea hore domain ea tenant e le e le lehle (expected install) le hore tenant e ka leba endpoint ea SSO ea rnete.

## Checklist ea ho operatea remote-site {#remote-site-operations-checklist}

Ha u fetang tenant e sovereign kapa remote, reka:

- Domain ya tlhahlobo (tenant domain) e fana ka host e ntse efeleka le sefapiso sa filesystem sa tenant.
- Host sa database sa tenant se fetoga le sefapiso sa binding se fetogile ho ntlha ea installation.
- Mehlompho ea verification ea migration a tšoa ho ba leboho (pass) ho tenant.
- Async migration queues e fana ka ho fihla (drain) haholo fa o batla ho feta DNS kapa melao ea mosebetsi oa sefapiso (ownership).
- Mofuta oa admin sa tenant o fetoga ka molaetsa oa migration le a ka ba leba ka SSO.

## Ho faka (Deleting) tenants e le sovereign {#deleting-sovereign-tenants}

Ho faka tenant e le sovereign ho faka lina tsela ea ho faka (destructive). Hlalosa pele, hlalosa tsamaea ea backup le export, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo-holo, haholo
