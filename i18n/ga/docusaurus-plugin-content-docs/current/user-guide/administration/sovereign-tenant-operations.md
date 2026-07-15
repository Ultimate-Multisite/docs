---
title: Oibríochtaí Tainiste Chomhánach
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Oparnaíocht Tenant Sovereigne

Ultimate Multisite: Multi-Tenancy 1.2.0 níos addaí toolacha oparnaíocht do tenant sovereignty: subsites a bhfaillíonn siad le deabhás (database) agus root filesystem agus context ruthú (routing context) is do chuid, ag cur isteach ó chuid admin netearc.

Use an cur leat seo nuair a bhfuil tú ag cur rialacha ar site-a chuid, ábhairí remote-site, nó migréidí a bhíonn ag cur isteach subsite stáitair into infrastructure sovereignty.

## Cad é tharrfhéanteacha do adminístraiteoirí {#what-changes-for-administrators}

- **Autologin tenant tástailt** — Is féidir leis an admin netearc cur isteach ar tenant sovereignty gan ardán seisiún shaol-bhuaile. Tá an token SSO ag cur isteach ar chuid a bhfuil sé ag cur isteach, ag cur isteach ar an áit atá ag cur isteach (origin-pinned), ag cur isteach ar an réiteach (replay-protected), agus ag cur leat ar amach beag.
- **Ruthú ag cur isteach sovereignty** — Tá na netearcaí aisialta a bhfaillíonn agus na tenant sovereignty a chur isteach tríd an chuid rathú site, ag cur leat difríocht iarrachta (bootstrap differences) ó chuid ula agus nua.
- **Stáit migréid a bhaint ar fáil** — Tá cur rialacha migréid a bheith ag cur isteach, ag cur isteach ar chuid a chur isteach, ag cur isteach ar an stáit deabhás (database writer permissions), ag cur isteach ar an stáit drain queue, agus ag cur isteach ar an t-aonáil table ula before a bhaint ar tenant mar leat.
- **Teoradh níos séalaí** — Tá teoradh sovereignty ag cur isteach an t-aonála chuid tástailt go léir sin chun tenant credentials a shlúint go réidh, mar ní féidir leis na tenant a bhaint ar fáil cur iontaí deabhás (database access) stáitair stale a bheith ar fáil.

## Taispeán ar tenant sovereignty {#visiting-a-sovereign-tenant}

1. Lán **Network Admin > Ultimate Multisite > Sites**.
2. Déan chun an tenant sovereignty.
3. Use **Visit (SSO)** nuair atá ar fáil ina mbíonn tú ag cur iontaí (passwords) nó a chur ar aisí contaí admin stáitair.

Bíonn an t-aispeán a chur isteach ag cur token login beag-bhuaile do tenant sin agus tá an seimhiú SSO ag cur isteach i an teoirchláir audit chuid. Má bhíonn an nútinn ag fáil, léiri go bhfuil an domain chuid ag cur isteach ar an stáit a bhí ag cur isteach agus go bhfuil an tenant ag cur isteach ar an endpoint SSO de chéad.

## Cur leat oparnaíocht remote-site {#remote-site-operations-checklist}

Before a bheith ag cur iontaí (tenants) sovereignty nó remote, féachaint ar:

An domán an t-tenant (tenant domain) téann go dtí an host atá seois féin an fáil agus an fáil de bhfáine (filesystem).
Taispeántas an db (database host) a bhíonn ag cur múintear leat ar an chuid binding atá curtha.
Tá na rathacha de mhaighreacha (migration verification commands) ag teacht go dtí do tenant.
Bíonn liúinach asga (async migration queues) ag déanamh cinnte go dtí gnáthadh (DNS) nó thabhairt oiriúnach (ownership changes).
Bhaid an úsáid admin an t-tenant curtha ar fáil tríd na mhaighreacha agus is féidir leis a logáil innithe tríd SSO.

## Déanamh an t-tenant sovereignty (sovereign tenants) {#deleting-sovereign-tenants}

Is é an t-tenant sovereignty déantarach (destructive). Cén fáth, féach ar an stáit de bhfáine (backup) agus de chuid export leathanach ar an chéad, agus ansin déan sé ó scríbhinn rialta (site management screen). Tá an cur chuimhneachas 1.2.0 ag teacht go dtí na cur chuimhneachas db (database credentials) mar chuid de bhfáine, ach is féidir leis na admin a bheith ag cur chuimhneachas úsáid db agus fólfán (folders) ar an host féin a bheith ag cur chuimhneachas go dtí nuair a bhíonn panelatacha féin ar fáil.

:::warning
Ná déan sé ó chuid tenant sovereignty mar a bhíonn rathacha de mhaighreacha ag teacht nó mar a bhíonn jobs push asga ag cur isteach. Déan cinnte go dtí an t-verification a thaispeánadh chun na cur chuimhneachas a bheith ag cur chuimhneachas a bhaine le jobs atá ag cur isteach a déanamh.
:::
