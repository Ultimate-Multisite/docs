---
title: Kugara kweMupfudzi
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operations dzavo dze Tenant Sovereign

Ultimate Multisite: Multi-Tenancy 1.2.0 inenge kuita zvinore dzakakwana kuti tenant sovereigns (subsites) zvinhu zviri kuenda ne database yavo, filesystem root yayo, uye routing context yacho, sezvo chinoratidzorwa nemunhu anobatsira we network.

Gadzirisa iwe iye kana uchitenda kuratidza sites dzakakwana dze vagare, kuratidza kuita handoff kwe-remote sites, kana migrations dziri kuita kuti subsite yakachena yave kuenda mu infrastructure ya sovereign.

## Zvinotevera kune administrators {#what-changes-for-administrators}

- **Autologin ye tenant inosina state (Stateless)** — Administrators we network vanogona kuenda pane tenant sovereign asi havanogona kuenda ne session state inosina kuenda zvakanyanya. SSO token inowanikwa pfungwa yakakosha, inopangwa kune chiri chacho, inopangwa kuti isingere, uye inopangwa kuti inenge inotevera mberi (expiry window) yakachena.
- **Routing inosimbisa sovereign** — Networks dzakachena dzakare uye tenant sovereigns dzinoreva zvinhu zvakasiyana pane site router path, izvi zvinokurudzirwa kuenda nekuita bootstrap differences pakati pezvi chakare nepekuita new isolated installs.
- **Verified migration state** — Kuratidza migrations kunoita checks dziri dzinoratidzorira provisioning ye user, permissions dzemakuru ekubatsira database (database writer), status ye queue drain, uye kutanga kwelegacy table panguva tenant inogone kuwedzera kuti iwe yakanaka.
- **Safer teardown** — Kuratidza kubvisa (teardown) kwakanaka kunosvika kuteerera credentials dzemtenant zvakachena kuti tenants dzakavimbwa hazvazova neaccess dzinogona kuenda panguva tenant inobviswa.

## Kuti unenge ukanga tenant sovereign {#visiting-a-sovereign-tenant}

1. Open **Network Admin > Ultimate Multisite > Sites**.
2. Select tenant sovereign.
3. Use **Visit (SSO)** kana kune chokwadi chinowanikwa pane kuratidza passwords kana kuita admin accounts dzinobva.

Flow ye Visit inogona kuita short-lived login token yekutenant uye inoreka SSO event mu audit trail ya tenant. Kana button inotevera, ndiriro kuti domain ye tenant inoreva iweya (expected install) uye kuti tenant inogone kuenda pane endpoint ye SSO ya network.

## Checklist yekuti unenge ukanga remote-site operations {#remote-site-operations-checklist}

Panguva unenge ukanga tenant sovereign kana remote site, ndiri kune zvinoita:

Domain ya mwana (tenant domain) inonyanya ku host anonyanyawo wemafutsiro (filesystem).
Host we-database ye mwana inonyanyawo nebindi yakagadzirwa kwa install iye.
Commands dze verification dze migration dzakabva kwemwana dzichipasa.
Async migration queues dzachivwa pfungwa zvisina kuenda DNS kana kubvawe wenyane (ownership).
Admin user we mwana wakapfumbwa nguva ye migration uye anogona kuenda kupfuura SSO.

## Kufamba kuifamba mwana we sovereign (sovereign tenants) {#deleting-sovereign-tenants}

Kufamba kuifamba mwana we sovereign kunoita zvinokanganisa. Funga kutaura nezve backup uye export pfungwa, ndipo chero kufamba kuifamba kupfuura kubvawe wenyane (teardown) munzvimbo yechinjika chekuchengetedza (site management screen). Flow ya 1.2.0 inakuteka nebindi dze database dzemwana nguva ye cleanup, asi administrators vanofanira kuona kuti users we database uye folders dze host dzine zvinonyanyawo dzakavamba dzichaka kana vachishandisa hosting panels dzine mwana.

:::warning
Usanogone kufamba kuifamba mwana we sovereign kana verification dze migration inenge inotarisirwa kana jobs dziri kuenda async. Tarisira kuti verification itai kuti teardown isina kupa credentials dzine zvakakosha kubvawe pama jobs dzakatarisirwa.
:::
