---
title: Operazioak Tenantsoaren Soberen
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operazioak

Ultimate Multisite: Multi-Tenancy 1.2.0-ek has soilikoki (sovereign) tenentak dira: database, filesystem root eta routing context bere oneskin jarraitzen duten subsites; baina network administurari iragatik erabil dauden jakin dituzte.

Standard subsite bat infrastrukturak soveinak (sovereign) iraditzen duen migrazio edo remote-site handoff-ek gerta denean, hori erabiltu behar da.

## Administurari zer aldatzen da

- **Stateless tenant autologin** — Network adminak jakin dituzte tenentera bisitatzea ez dago lunga zuzen saldoa (session state) eskatzen. SSO tokena objektu-spazioa (purpose-scoped), orogenearen artean batena (origin-pinned), iraditzen diren errepenean (replay-protected) eta laburren edukiari (short expiry window) limitatuta dago.
- **Sovereign-aware routing** — Networkak eskaintzen dituzten eski networkak eta tenentak ezberdin instalazio artean bootstrap erreguntzak azaltzen denean, beste bat eta bestearen arteko erlainpenak araua (same site router path) baten batean konpondu dira.
- **Verified migration state** — Tenentera "konpletu" tratatzen badu, migrazioa bidezko egikaritzeko kontrolak erabiltzen da: erabiltzailearen provisionamendua, database writer permietua, queue drain status eta erlainpen batzuk ez dagoela.
- **Safer teardown** — Tenentak desilitzeko (teardown) prozesuak tenentaren kredentzialak laburki eliminatzen du, gertatzen den desilitutako tenentak database-ko zuzen akses ez laguntzen ez du.

## Sovereign tenentera bisitatzea

1. **Network Admin > Ultimate Multisite > Sites** iragatu.
2. Tenentera aukeratu.
3. Kredentzialak kopioatzea edo temporales admin kontuak sortzea lehenik, erabiliz beste SSO (SSO) funtzioa.

Bisitatzen diren erreguntzak tenentera laburren edukiari (short-lived login token) ematen du eta SSO gertaia audit trailaren (audit trail) irekitzten du. Botonak ez dutenean, tenentaren domainak instalazio esperatuta dagoen bat ere konpondu dauden eta tenentak network-ko SSO endpoint-era erabili ditzake zergatik ikustea.

## Remote-site operazioa kontrola (checklist)

Sovereign edo remote tenentera aldatu baino lehen, confirmatu:

- Domain-arenak hostiari erabilizten jarduera da, zein irudiari (filesystem) tenant-ek (tenant) eskatzen ari den.
- Tenant-ek database host-ea horrekin konfiguratutako host binding-arekin bat du.
- Migrazio bidezko jatorpen komandak tenant-ek bitazten da.
- DNS edo ondoriozko (ownership) hasierak egin baino lehen, async migration queues hauek drainatzen dira.
- Tenant admin user-a migrazioaren parte batean provisionatu da eta SSO bidez logiara sartu dezake.

## Sovereign tenant-ek hartzea

Sovereign tenant bat hartzea destruktibo da. Lehenik backup-aren eta export-aren estatusak erkideatu, gaurik site management screen-etik hartu behar da. 1.2.0 teardown flow-a tenant database credentials hauek aztertzen du cleanup-aren parte batean, baina administrazioak host-level database users eta folder-ek ez dagoela jartzen dituzenean (external hosting panels erabiltzen duenean) konprobatu behar dute.

:::warning
Migrazio bidezko jatorpen probak jarraitzen ari den edo async push jobs hauek hasi daitezkeen testuinguruan, sovereign tenant bat ez hartu. Probak amaitzen aurretik jartzen dutelako job-ek beharrezko credentials hauek aztertzen ez duenean, teardown ez egin behar da.
:::
