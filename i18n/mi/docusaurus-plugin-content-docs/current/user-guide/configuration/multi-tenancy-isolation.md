---
title: Whakawātea Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Whakamahi Whakawāhi (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 e hoki i te whakatika database me te filesystem mō ngā tenant e tino tangata (sovereign tenants). Ko tēnei e pēnei i te whaiaro ai i ngā data o te tenant i roto i te whero, i roto i te whaiaro ana i te whakamahi whānui o te wāhi wāhi (network-level provisioning), te whero, me te whakahaere.

## Whakamahara Whakawāhi (Isolation strategy) {#isolation-strategy}

Whai i te whakamahi whakawāhi tangata (sovereign isolation) mō ngā mea e hiahia ana i te whero māhinaki data mō teitei, whare wāhi filesystem e tino tangata, aua te whare wāhi (host boundary) e tino tangata.

Me heke i te koreau o te tenant e hiahia ana i:

- Database e tino tangata me te strategy prefix database e pēnei i te host.
- Root path filesystem e tino tangata mō te tenant.
- Entry registry o te tenant e whakatika te site ki te database, root path, hostname, me te model whakawāhi (isolation model).
- Result whakamārama migration (migration verification) mō te tenant i roto i te wā e whakaarohia ana i te mea he tino tangata.

## Whakamahara Host Database (Database host binding) {#database-host-binding}

Version 1.2.0 e hoki i te whakatika default o te host binding mō ngā install sovereign. Ko ngā wāhi wāhi e tino tangata e pēnei i `localhost` e whakahou ai ana ko Bedrock, FrankenPHP, me containerized WordPress e taea ai te whero me te whakamārama i ngā whānau (permissions) mō te string o host e tino hiahia ai te MySQL.

I roto i te whakauru i te tenant e tino tangata:

1. Whakatika te database host ki te wāhi wāhi e hiahia ana i te runtime o te tenant.
2. Whai i `localhost` mō ngā install local socket i ngā wā e whai whakaaro ai te host i ngā koneksi local.
3. Whai i `127.0.0.1` heine i te hostname o te service i te wā e hiahia ana te database server i ngā whānau (privileges) ki te host tuina.
4. Whakawārama migration verification i runga i te whakawhiti i te host binding.

Ko te tino tangata o te whakamārama (verification reports) e pēnei i ngā pēto o database tenant me te host binding e whakatika ana. He pēnei te user granted mō `user@localhost` ki heke i `user@127.0.0.1` aua i `user@%`.

## Root Filesystem (Filesystem root) {#filesystem-root}

Mea te root o te tenant me te tika ana i roto i ngā whakaorero (restarts) me ngā whakamōhaka (deployments). Whakarite i te whakatūpā (mount paths) mō te wakamutunga. Mo install e hāpai atu ana i te Bedrock, kia kore te root o te tenant ipotopito ki te web root o te WordPress e whakaritea e te bootstrap o te tenant anō, akorua i te root o te project anake.

## Pūramatanga o te rārangi (Provisioning order) {#provisioning-order}

Mo mga tenant hou o te mana (sovereign tenants), whakamahi tēnei urangai:

1. Whakawātea te entry o te registry o te tenant.
2. Whakawātea te database o te tenant me te user o te database.
3. Whakarite i te schema o te tenant.
4. Whakarite i ngā user o te tenant.
5. Whakarite i ngā wāhi o te filesystem o te tenant.
6. Whakawātea te whakamārama o te migration (migration verification).
7. Whakaorero i te routing (routing) ana koe i te DNS i arahi i te whakamaoritanga (verification) i whakatika.

Ko tēnei urangai e whakatika i ngā tenant e hāpai atu ana i te whakamahi (traffic) i raro i te whakahoki, i roto i te wā ko ka hiahia ai te writer o te database, ngā user, me te filesystem.

## Whakaritenga o te whakatau o te mea whai mana (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 e whakatika ngā mahi o te whakamaoritanga o te mea whai mana ki te wāhi nui (main site) i roto i te mode sovereign. He taea ahau te run atu ko install WordPress e ipotopito, engari ngā mahi mō te whai me te whai whakaaro o te mea whai mana (customer-facing actions) e ipotopito ki te billing o te wāhi, membership, akorua i te wāhi nui i te whakamaoritanga ana i te whakamahinga (runtime) o te tenant.

Ko te flow o te wāhi nui e ipotopito ki:

- Whakaritenga o te checkout me ngā whakarigari (plan changes).
- Whakawhiti o te overview o te account me ngā mahi o te profile o te mea whai mana.
- Whakamutunga o te wāhi o te billing me ngā sēnā o te whakahaere o te payment.
- Ngā whakaari (views) o invoice me te iti o te payment-history.
- Ngā mahi o te whakamaoritanga o te wāhi engari e hoki i te site, ahakoa te whero ana ngā site ki te whero ana.
- Whakaritenga o te template switching.
- Whakamutunga o te domain mapping me ngā whakarigari o te primary-domain.

Iroha ki a koe!

Iroha i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau i te mea ka pūrākau
