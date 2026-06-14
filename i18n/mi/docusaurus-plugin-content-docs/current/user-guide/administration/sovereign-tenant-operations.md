---
title: Pākehā Whakawāhi Operatika Aotūroa
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Pātai Operatāinga Tenant Sovereign (Tenant Operations)

Ultimate Multisite: Multi-Tenancy 1.2.0 nui ana tūnga whakamahi mō tenant souverain: subsites (sub-sites) e maha i roto i te database, root filesystem, me te context routing o loro, engari e taea ai te whakaahua i ngā admin o te wāhi whenua (network admin).

Whai te puta mai i tēnei manawa i roto i te whakamaoritanga o ngā wāhi whānui o te mea, he tino whakamahi ana i a koe i roto i te whakahaere o ngā wāhi whānui o te mea e whai ake nei: ngā sites o te mea e whai tūnga i roto i te whenua (isolated customer sites), ngā whakaawe o te wāhi whānui (remote-site handoffs), he tino whakawhiti (migrations) e whai i te whakamahi o te onua souverain (sovereign infrastructure).

## He aha ngā pēnei whakahaupūatanga mō ngā admin

- **Autologin tenant e kore utu (Stateless)** — E taea ai ki ngā admin o te whenua te pito i te tenant souverain i roto i te whenua, i roto i te whakamahi i te token SSO (Single Sign-On) i runga i te wāhi, i roto i te whaiaro, e kore ana i te whaiaro i session state mō te wae paku. Ko te token SSO he tino whaiaro mō te wā, he tino whaiaro mō te wāpuna (origin-pinned), he tino whakamahi mō te whakaora (replay-protected), me he tino whaiaro mō te wāwhiri paku.
- **Routing e whai i te māramatanga souverain** — Ngā whenua whānui e kore utu (legacy isolated networks) me ngā tenant souverain e whai ana i te onua router path, e whai ake i te whakamahi o te site router path, e whai ake i te pēteranga mō te whakaputa (bootstrap differences) i waenga i ngā install old me new.
- **Tātai tūnga migration e whakahaupū** — Ko te tātai tūnga migration e whakaoti i te whakamahi o te user provisioning, ngā whānui writer database, te status o queue drain, me te pōtiki o ngā table legacy (legacy table absence) mō te whakatū tenant he tino whakahaupū.
- **Te whakatū tūnga e ātaahua** — Ko te whakatū tūnga souverain e whakatū i ngā credentials o te tenant i runga i te ahua paku, ko te mea e kore ai ngā tenants e whakatū ana e whai ake ana i te access database e hāpai.

## Pito i te tenant souverain

1. Whakawhiti ki **Network Admin > Ultimate Multisite > Sites**.
2. Whakarite i te tenant souverain.
3. Whai i **Visit (SSO)** ko e taea anō i te whakatū i ngā password he tino whaiaro, he pēnei me te whakahou i admin accounts mō wāpaku.

Ko te flow o te visit e whakatū token login paku mō tēnei tenant he kore ana i te wae paku, ko e whakataki i te SSO event i te audit trail o te tenant. Ko te pēteranga e pēnei i te button e pēfu, he tino whakamārama ki te domain o te tenant e whai ana i te install e whai ake ana me te mea e taea ai te tenant te hihiko ki te endpoint SSO o te wāhi whenua (network-side).

## Whakawhiti operatāinga mō te wāhi whānui (Remote-site operations checklist)

I roto i te whakawhiti i te tenant souverain he tino whaiaro, he pēnei me te whakaae:

- A domain o te whānau (tenant) i whakawhiti ki te host e tino mōhiamo ai i te filesystem o te whānau.
- He tino mārama te host database o te whānau ki te binding host e whakahirahiraaakea mo tēnei install.
- Ka pēhita ngā command whakamārama migration mō te whānau.
- Ka whakawāke (drain) ngā async migration queues i roto i te mea ka whakawhiti i DNS ahau i te whakawhiti o te whenua (ownership).
- He tino āwhina te user admin o te whānau ki te whakamahinga i te SSO i runga i te migration.

## Whakamutunga o ngā tenant souverain (sovereign tenants)

He tino haere mai te whakamutu i tō tenant souverain. Kia mārama akorua i te status o te backup me te export mo te mea, ā, kua whakatika i te whakatūatanga (delete) i runga i te skrin o te site management. Ka whakakawāke (teardown) o te 1.2.0 flow ka whakatika i ngā credentials o te database o te whānau ahua i te whakamohana, engari me whakamārama ngā administrator ki te whakapumahi ana ko he wāhi o te cleanup i te whakamahinga o external hosting panels mo host-level database users me folders.

:::warning
I taha i te migration verification ka pēhita koe i te async push jobs. Whakarongo ki te whakatama (verification) kia whakatika ahau i te teardown, kia nā te credentials e tika ana mō ngā jobs e hiahia.
