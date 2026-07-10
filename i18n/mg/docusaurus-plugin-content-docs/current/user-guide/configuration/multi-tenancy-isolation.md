---
title: Fisana ho an'ny Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Fandriana (Isolation) ho an-teny {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 dia manome fizarana database sy filesystem isaky ny mpanjifa izay mitaky fizarana data lalina kokoa, toerana fitahirizana filesystem manokana, na faritra host hafa. Izany dia miantoka fa mijanona ho misaraka ny data an'ny mpanjifa (tenant) ianao, fa mitazona ny fanomezana rafitra tambajotra (network-level provisioning), ny fandoavam-bola (billing), ary ny fitantanana.

## Fandrindrana ny fizarana (Isolation strategy) {#isolation-strategy}

Ampiasao ny fizarana lalina (sovereign isolation) ho an'ireo mpanjifa izay mitaky fizarana data matanjaka kokoa, toerana fitahirizana filesystem manokana, na faritra host hafa.

Ny mpanjifa isam-paritra dia tokony hanana:

- Database manokana ho an'ny mpanjifa na paikady prefix database izay nankatoavin'ny host.
- Root filesystem manokana ho an'ny mpanjifa.
- Fandefasana (registry entry) ho an'ny mpanjifa izay mifandray ny toerana misy azy amin'ny database, lalana fototra (root path), hostname, ary modely fizarana (isolation model).
- vokatra fanamarinana fifindrana (migration verification result) alohan'ny hampiasana azy ho azo antoka.

## Fandefasana host database (Database host binding) {#database-host-binding}

Ny dikan-teny 1.2.0 dia manova ny fomba fandefasana default ho an'ny "same-machine host binding" ho an'ny fametrahana sovereign. Ny sandan'ny toerana misy (same-machine values) toy ny `localhost` dia voamarina mba ahafahan'ny Bedrock, FrankenPHP, ary WordPress izay eo amin'ny container afaka manome sy manamarina ny zo (permissions) mifototra amin'ny string host izay tena dinihina ny MySQL.

Rehefa mametraka mpanjifa sovereign ianao:

1. Ataovy hoe database host ilay sandana ilain'ny runtime an'ilay mpanjifa.
2. Ampiasao ny `localhost` ho an'ireo fametrahana socket eo amin'ny toerana misy raha toa ka mitady fifandraisana eo an-toerana (local connections) ny host.
3. Ampiasao ny `127.0.0.1` na hostname manokana ho an'ny serivisy fotsiny rehefa manome zo ny server database ilay host.
4. Ampianaro fanamarinana fifindrana (migration verification) aorian'ny fanovana ny fandefasana host.

Raha mampiseho tsy fahampian'ny fanamarinana (verification reports grant failures), dia apetraho ny fizarana zo an'ilay user ao amin'ny DB an'ilay mpanjifa sy ny fandefasanao host. Ny mpampiasa azo ho an'ny `user@localhost` dia hafa noho ny `user@127.0.0.1` na `user@%`.

## Root filesystem (Filesystem root) {#filesystem-root}

Ny fototra (root) an'ny mpanofa dia tokony ho azo antoka rehefa miova fametrahana na manomboka indray. Aza mampiasa lalana fampidirana (mount paths) an-tsokosoko. Ho an'ny fametrahana toy ny Bedrock, avereno fa ny fototra an'ny mpanofa dia mitondra ny web root an'i WordPress izay andrasana avy amin'ny bootstrap an'ny mpanofa, ary tsy ny fototra iantsoana (project root) ihany.

## Fandaharana fandrindrana (Provisioning order) {#provisioning-order}

Ho an'ny mpanofa vaovao manan-kery (sovereign tenants), dia ampiasao ity filaharan-drafitra ity:

1. Atao ny fidirana ao amin'ny tenant registry entry.
2. Atao ny database sy ny mpampiasa database ho an'ny tenant.
3. Atao ny bootstrap an'ny schema an'ny tenant.
4. Atao ireo mpampiasa an'ny tenant.
5. Atao ny fomba fampidirana (filesystem paths) an'ny tenant.
6. Atao ny fanamarinana ny migration.
7. Atao ny fanovana ny routing na DNS rehefa lasa azo antoka ny fanamarinana.

Ity filaharan-drafitra ity dia miantoka fa tsy handray fifandraisana (traffic) ireo mpanofa voafetra an-tsokosoko alohan'ny ho vonona ny mpanoratra database, ny mpampiasa ary ny rafitry ny fampidirana.

## Fandaharana fitantanana mpanjifa manan-kery (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ny Ultimate Multisite v2.13.0 dia mitazona ireo asa fitantanana mpanjifa eo amin'ny tranokala lehibe rehefa voafidy ny mode sovereign. Mbola afaka miasa ho WordPress install voafetra an-tsokosoko ny tenant, saingy ireo asa mifandraika amin'ny fampahafantarana ny mpanjifa izay miankina amin'ny fandoavam-bola an-tserasera (network billing), fidirana (membership), na angona an'ny kaonty iombonana dia tokony hamerina ny mpanjifa any amin'ny tranokala lehibe fa tsy miezaka vita ilay asa ao anatin'ny runtime an'ny tenant.

Ny fandaharana an'ny tranokala lehibe dia manaraka ireo zavatra ireo:

- Fanovana checkout sy ny plan.
- Fijerena ny kaonty sy ny asa momba ny mpanjifa (customer profile actions).
- Fanavaozana adiresin'ny fandoavam-bola sy ny efijery fitantanana ny fandoavam-bola (payment-management screens).
- Fijerena ny taratasy (invoice) sy ny tantaran'ny fandoavam-bola.
- Asa fitantanana ny tranokala toy ny fanampiana toerana (adding sites) na ny famafana toerana (deleting a site).
- Fanovana template.
- Fametrahana domain (domain mapping) sy ny fanovana primary-domain.

Rehefa ny mpanjifa manomboka iray amin'ireo asa ireo avy amin'ny tenant iombonana (sovereign tenant), dia mamorona ny URL an'ny tetikasa lehibe (main-site) ilay Ultimate Multisite ary mitazona ny tenant voalohany ho toerana hiverenana rehefa azo atao izany. Izany dia ahafahan'ny mpanjifa manaraka ny asa vitany amin'ireo tabilao an'ny tambajotra (network records), ary miverina amin'ny toe-javatra tenant nefa tsy mamerina ny fandraisana vola na ny sata (membership state) ao amin'ny database iombonana.

Ho an'ireo mpandrindra (operators), ny fitsipika azo ampiharina dia: avela ho azo jerena ireo pejy momba ny fandraisana vola (billing), ny kaonty (account), ny famakiana ny fividianana (checkout), ny faktiora (invoice), ny template, ary ny fitantanana domena (domain-management) eo amin'ny tetikasa lehibe ho an'ireo tambajotra iombonana. Afaka mifandray ireo pejy ireo ny dashboard an'ny tenant, fa ny tetikasa lehibe no mbola toerana marina (source of truth) ho an'ilay asa.
