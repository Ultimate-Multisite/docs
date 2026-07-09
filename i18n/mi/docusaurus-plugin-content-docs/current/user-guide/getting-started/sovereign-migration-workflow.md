---
title: Whakaaro Whakamāori o te Whakamāori o te Whakamāori
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow Migrāte Sovereign {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 nui whakamārama (verification gates) mō te whakawhanake i te subsite standard ki te infrastructure o te tenant sovereign.

## Iha koe i te whaiārahi {#before-you-start}

Kia tino mārama ana ko he tino whakahou (backup) o te site hou mo te wārie.
- He backup hou o te site hou.
- He Multi-Tenancy addon e pēnei.
- He database tenant, root filesystem, me domain o te wārie whai tika.
- He binding o host database e pēnei ana ki te mōhiamo (environment) whai tika.
- Whakawhiti access ki te run WP-CLI commands mo te network.

## Te whaiārahi e tino whakamārama ana {#recommended-workflow}

1. Prepare te database tenant me te filesystem.
2. Register au te whakaritenga o te whakahere (isolation settings).
3. Run te whakawhanake i te tenant migration.
4. Provision au te user o te tenant, he tino whakamārama ana.
5. Drain au ngā mahi async migration.
6. Run te whakamaumahara i te migration sovereign.
7. Whakawhanainga te tenant me SSO.
8. Switch DNS or routing anō i te wā e whakatika ai te whakamamaumahara (verification) pēnei ana.

## Ngā nui o te tino whakamārama (Verification gates) {#verification-gates}

Ko te whaiārahi whakamārama he tino whakamārama i te whakawhanake migration mai ngā wāhi maha:

- Ko te schema o te tenant e pai ana me te taea te whakawhitanga e te database writer o te tenant.
- Ko te host database e whakahere ana e pai ana.
- Ko ngā user o te tenant e pēnei ana me te whakapapa (count) o te install user sovereign e kaha ai.
- Ko te async push queue e taea te drain i te pai.
- Ko ngā data paths o te network legacy e hiahia ana ki te tenant sovereign, he noho ana.

Kia whakaaro i ngā pēto whakamārama (verification failures) ko pēto whakatika i te whakatū (blockers). Whakatika te wakamārama database, user, queue, or routing e pēnei ana, ā, run te tino whakamārama anō mō te mea koe e whakawhanainga te tenant ki ngā customer.

## Te whakawhanaungatanga hou i te whakatū (First production visit) {#first-production-visit}

I te wā e pēnei ana ko he tino whakamārama (verification) e pai, whakamahi **Visit (SSO)** mai te screen management o te site mo te wāhanga admin hou. Ko te whakaatu ana ko he routing o te tenant, te whakatau token SSO, te origin pinning, me te provision user o te tenant i te pēti whakatika (controlled step) i te wā.
