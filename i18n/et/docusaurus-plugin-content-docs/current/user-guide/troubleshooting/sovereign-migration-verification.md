---
title: Võimendliku migratsiooni kinnitamine
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migratsiooni Kontrollimine

Ultimate Multisite: Multi-Tenancy 1.2.0 sisaldab WP-CLI kontrolli käskeid suvereensete leasute migratsioonide jaoks. Kasutage neid, kui leasute migratsioon, SSO külastamine või eraldatud install ei käitu ootud tasemel.

## Käskud, mida tuleb käivitada {#commands-to-run}

Juhita kontrollimise käskust võrku WordPress-installist:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Kasutage leasute ID, mida migreerite. Esimene käsk kontrollib, et leasut ei sõltu enam vanema võrku-sisse oleva andmestikust. Teine käsk kinnitab, et suvereensete push tööriistad saab töötada ja tühjendada.

## Tavaliselt esinevad probleemid {#common-failures}

### Andmebaasi lubaed ei pea samaneda hostiga {#database-grants-do-not-match-the-host}

Kui kontrollimine näitab lubaed või writer-useri vigu, kontrollige konfiguratsiooni andmebaashostit. `localhost`, `127.0.0.1` ja kontseinik servise nimi on erinevad MySQL lubaete hostid. Pärustage leasute hosti sidumist või andmebaasi lubaed ja käivitage kontrollimine uuesti.

### Bedrock- või lokaalsete installide ei saa ühendust {#bedrock-or-local-installs-cannot-connect}

Bedrock ja lokaalsed soketinstallid võivad andmebaasi näidata `localhost`iks, samas kui runtime ühendub normaliseeritud aadressiga. Versioon 1.2.0 normaliseerib sama masina host-stringe, kuid kasutamata hosti ületused võivad edelleen konfliktida andmebaasi lubaeteaga.

### Asünkroonilise push-juurde ei tühjendada (drain) {#async-push-queue-does-not-drain}

Kui `verify-sovereign-push` ei lõpeta, kontrollige Action Scheduleri või konfiguratsiooni asünkroonilise runneri. Pärast vigu töötavate tööde puhastamist tegege ainult pärast seda, kui olete kinnitanud, et need on turvalised uuesti proovimiseks või kõrvaldamiseks.

### Leasute kasutajate arv on väär {#tenant-user-count-is-wrong}

Migratsiooni tuleks luua kasutaja leasut jaoks. Kui odavat installitud kasutajat puudub, käivitage kasutaja loomise sammega uuesti enne SSO-l proovimist.

### SSO külastamine on eiskotanud {#sso-visit-is-rejected}

Väljakohanele (stateless) ühenduse automaatne sissejuhtimine nõuab, et ühendaja domeen, origin pin, tokeni tarkus, nonce ja lühenemiseajal peaksid kokkuma. Kontrollige, kas ühendaja URL on õige ja proovige sissejuhatamist kohe pärast SSO-viisi genereerimist.

## Kui tuleb uuesti proovida {#when-to-retry}

Proovige kinnitust iga infrastruktuuri muutuse pärast. Ära muuda tootmise liiklust, eemaldage lähtedata või eemaldage migratsioonikühendid enne, kui kõik kinnituskontrollid on läbisu.
