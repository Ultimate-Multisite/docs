---
title: Umuco w'Abanyamwuga b'Ubutumwa
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Umuhuko wa Tenant w'Umuhaka (Sovereign Tenant Operations)

Ultimate Multisite: Multi-Tenancy 1.2.0 yagira zindi zindi zindi zikoreshwa mu gukora ibikorwa by'ubunyangamugambi b'umuhaka (sovereign tenants): subsites zitera ku ntego ya database, filesystem root, no routing context zikoresha ariko zishobora kuvugwa n'abanyamwuga b'urugero.

Gukoresha uyu ukuri iyo ugiye gukora ibikorwa by'ubunyangamugambi b'umuhaka (sovereign tenants) cyangwa uburyo bw'ibyo bishobora kubyara mu gihe cyo gutera umusaruro w'umutera (migrations) ubutumwa bwo gukoresha subsite mu gihugu cy'ubunyangamugambi.

## Icyo kigira guhinduka ku mufa (administrators) {#what-changes-for-administrators}

- **Autologin y'umutera usaba umusaruro (Stateless tenant autologin)** — Abanyamwuga b'urugero bashobora gukoresha tenant w'umuhaka kandi nta kuyibanda ku uburyo bw'umusaruro bwa mbere. SSO token yari itandukanye n'uburyo bwo gukoresha, yari itandukanye n'uko umutera yashobora kubyara, yari itandukanye n'uko umutera usaba umusaruro (SSO) uburyo bw'umutera w'ibyo byishobora kubyara cyane.

- **Routing yakoresheje umuhaka (Sovereign-aware routing)** — Icyemezo cy'ubunyangamugambi b'abantu bafite uburenganzira bwa mbere n'umuhaka yashobora gukoresha uburyo bw'umutera bwa site router, ibyo byagira guhinduka mu gihe cyo gutera umusaruro ku mufa (bootstrap differences) hagati y'ibindi ngufi zikoreshwa mbere n'izya.

- **Uburyo bw'ubunyangamugambi bwa mbere (Verified migration state)** — Icyemezo cy'ubunyangamugambi byumva ibyo: uburyo bwo gukora umutera, uburyo bwo gukoresha database writer permissions, ubwoko bw'ibyo byashobora kubyara mu queue (queue drain status), no kwitondera ibintu by'ibindi ngufi zikoreshwa mbere cyane iyo tenant yari itandukanye n'uko ari inyandiko.

- **Gukora umutera w'ubunyangamugambi bwa mbere (Safer teardown)** — Gukora umutera w'umuhaka (sovereign teardown) uburyo bwo gukoresha umusaruro bw'umuhaka mu buryo bwiza, bikaba ibintu by'ubunyangamugambi bwa mbere bituma tenant yashobye kubyara database access itandukanye.

## Gukoresha tenant w'umuhaka (Visiting a sovereign tenant) {#visiting-a-sovereign-tenant}

1. Furu **Network Admin > Ultimate Multisite > Sites**.
2. Shobora tenant w'umuhaka.
3. Gukoresha **Visit (SSO)** iyo ari hari, ngo umutera uburyo bwo gukora umusaruro (copying passwords) cyangwa gukora admin accounts zikoreshwa mu gihe cyo gutera umusaruro.

Uburyo bw'ubwumva bwa "visit" bukuraho token y'umutera itandukanye n'uko ari inyandiko, kandi bikaba ibintu by'umutera usaba umusaruro (SSO event) bigirwa mu gice cy'umutera w'ubunyangamugambi bwa tenant. Iyo ubutumwa butera umutera bukuraho, shobora kumenya ko domain ya tenant yari itandukanye n'uko byashobye kubyara kandi ko tenant yashobora gutanga endpoint bwa SSO mu gihe cyo gukoresha umutera w'urugero.

## Icyemezo cyo gukora ibikorwa ku site (Remote-site operations checklist) {#remote-site-operations-checklist}

Mbere yo gushyira mu mategeko tenant w'umuhaka cyangwa remote tenant, shobora kumenya:

- Domain ya ko y'umva (points) ku host uyuho umutera ubwoko bw'ubwoko bwa tenant.
- Host ya database ya tenant itandukanye na uburyo wakoze ubutumvikana (host binding) kuri iyo install.
- Amagambo yo gukoresha amagambo y'amajyayo (migration verification commands) yashobora gutunganya ku tenant.
- Icyemezo cy'amaqueue ya migration itandukanye (Async migration queues) yituma imbere mbere yuko twumva DNS cyangwa ububasha bwa tenant.
- Umuntu w'ubwoko bw'amadinanzira (tenant admin user) yashoboye gukoresha mu gihe cyo gukora migration kandi ashobora kwiga ku SSO.

## Gukoresha amadinanzira y'umutera (Deleting sovereign tenants) {#deleting-sovereign-tenants}

Gukoresha umutera w'umutera (sovereign tenant) ni ikintu gikomeye kuko bikorera ibyo byose. Umeza gukora backup no gukoresha (export status) mbere, nyuma yego ugagiza ku site management screen. Icyemezo cyo 1.2.0 cyumva amakuru ya database ya tenant nk'uko twitera ibyo twishobora gutunganya, ariko abajyane bashobora gukoresha uburyo bwa hosting buhuza (external hosting panels) kandi bakwumva ko umuntu w'ubwoko bw'amadinanzira n'amashyirahamwe y'database yashobye gutunganya.

:::warning
Nta kugagiza umutera w'umutera (sovereign tenant) mu gihe cyo gukora migration verification cyangwa mu gihe cyo kwituma amajyayo itandukanye (async push jobs). Ntawe, ugira umwaka ku gukemura ibyo byose. Wumva ko uburyo bwa teardown bukoresha amakuru y'database atagomba gutunganya mu gihe cyo gukora ibyo twishobye gutunganya (pending jobs).
:::
