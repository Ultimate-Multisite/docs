---
title: Operasyon sa Sovereign Tenant
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operasyon sa Sovereign Tenant

Ultimate Multisite: Multi-Tenancy 1.2.0 nagdadagdag og mga tool para sa operasyon sa sovereign tenants: subsites nga nag-run uban sa ilang kaugalingong database, filesystem root, ug routing context samtang magpabilin nga makita gikan sa network admin.

Gamita kini nga pahina kung nagdumala ka og isolated customer sites, remote-site handoffs, o migrations nga nagbalhin sa usa ka standard subsite ngadto sa sovereign infrastructure.

## Unsa'y mga kausaban para sa mga administrator {#what-changes-for-administrators}

- **Stateless tenant autologin** — Ang mga network admin makadto sa usa ka sovereign tenant bisan wala magdepende sa dugay nga shared session state. Ang SSO token kay purpose-scoped, origin-pinned, replay-protected, ug limitado sa mubo nga expiry window.
- **Sovereign-aware routing** — Ang mga legacy isolated networks ug sovereign tenants nag-resolve pinaagi sa parehas nga site router path, nga nagpamenos sa mga kalainan sa bootstrap tali sa daan ug bag-ong isolated installs.
- **Verified migration state** — Ang pag-verify sa migration nag-check sa user provisioning, database writer permissions, queue drain status, ug kawad-on sa legacy table sa dili pa itandi ang usa ka tenant nga kompleto na.
- **Safer teardown** — Ang sovereign teardown karon mokuha og malinis nga mga tenant credentials aron ang gi-delete nga tenants dili mag-iwan og stale database access.

## Pagbisita sa usa ka sovereign tenant {#visiting-a-sovereign-tenant}

1. Ablihi ang **Network Admin > Ultimate Multisite > Sites**.
2. Pilia ang sovereign tenant.
3. Gamita ang **Visit (SSO)** kung available imbes nga kopyahon ang mga password o maghimo og temporary admin accounts.

Ang visit flow naghimo og usa ka short-lived login token para sa tenant nga kana ug nagrekord sa SSO event sa tenant audit trail. Kung mapakyas ang button, siguroha nga ang domain sa tenant nag-resolve sa gipaabot nga install ug nga ang tenant makab-reach sa network-side SSO endpoint.

## Remote-site operations checklist {#remote-site-operations-checklist}

Sa dili pa mag-usab og sovereign o remote tenant, kumpirmahi:

Ang domain sa tenant nagtudlo (points) sa host nga nagpanag-iya sa filesystem sa tenant.
Ang database host sa tenant nag-match sa configured host binding para sa instalasyong ato.
Ang mga migration verification commands nagpass para sa tenant.
Ang async migration queues ma-drain una sa paghimo og DNS o ownership changes.
Ang admin user sa tenant gi-provision panahon sa migration ug makasulod pinaagi sa SSO.

## Pag-delete sa sovereign tenants {#deleting-sovereign-tenants}

Ang pag-delete sa usa ka sovereign tenant kay destructive (makapahugno). Siguraduhon una ang status sa backup ug export, unya i-delete kini gikan sa site management screen. Ang 1.2.0 teardown flow nagkuha sa tenant database credentials isip bahin sa cleanup, apan kinahanglan pa gihimo sa mga administrator nga masiguro nga wala na ang host-level database users ug folders kung naggamit og external hosting panels.

:::warning
Ayaw pag-delete sa usa ka sovereign tenant samtang nagpadayon pa ang migration verification o samtang nag-queue ang async push jobs. Paghulat sa pagkompleto sa verification aron dili ma-remove sa teardown ang mga credentials nga gikinahanglan sa pending jobs.
