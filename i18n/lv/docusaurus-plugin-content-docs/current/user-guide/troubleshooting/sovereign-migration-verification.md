---
title: Sovereīnas migrācijas apstiprināšana
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migrācijas apstiprinājums

Ultimate Multisite: Multi-Tenancy 1.2.0 ietver WP-CLI apstiprinājuma komandas sovereīnu īpašnieku migrācijām. Izmantojiet tos, ja tenantas migrācija, SSO apmeklējums vai izolēta instalācija neiztur esošo uzvedību.

## Komandas izveide {#commands-to-run}

Veiciet apstiprinājumu no tīkla WordPress instalācijas:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Izmantojiet tenantas ID, kas migrējas. Pirmais komanda pārbauda, ka tenantam vairs nav nepieciešams vecāka tīkla dati. Otra komanda apstiprina, vai sovereīnu push darbi var apstrādāt un izpūsti (drain).

## Parasti radītie kļūdas {#common-failures}

### Databāzes atļaujas nepiemēro hosta {#database-grants-do-not-match-the-host}

Ja apstiprinājums ziņo atļauju vai rakstnieka lietotāju kļūtas, pārbaudiet konfiguriētu databāzes hosti. `localhost`, `127.0.0.1` un kontaineru pakalpojuma nosaukumi ir dažādi MySQL atļauju hosti. Atjauninājiet tenantas hosta savienojumu vai databāzes atļaujas, pēc tam veiciet apstiprinājumu vēlreiz.

### Bedrock vai vietējās instalācijas nevar savienojties {#bedrock-or-local-installs-cannot-connect}

Bedrock un vietējo soket instalācijas var ziņot par datubāzi kā `localhost`, kamēr runtime savienojas ar normalizētu adresi. Versija 1.2.0 normalizē vienas mašīnas hosta ķēdes, bet personizētās hosta pārslēgšanas vēl var konfliktēt ar databāzes atļaujas.

### Asincrona push saraksta neizpūst (drain) {#async-push-queue-does-not-drain}

Ja `verify-sovereign-push` nebeidzties, pārbaudiet Action Scheduler vai konfiguriētu asincrono runnieku. Tīrīt neizturēju darbus tikai pēc tam, kad esat noteikusi, ka tie ir droši atjaunināmi vai var būt izslēgti.

### Tenantas lietotāju skaits ir nepareizs {#tenant-user-count-is-wrong}

Migrācija jāprovisionē lietotāji sovereīnam tenantam. Ja nepiemērots instalācijas lietotājs nav pieejams, veiciet lietotāja provisionēšanas šo solutēm pirms atjaunināt SSO.

### SSO apmeklējums tiek atปฏิเสigts {#sso-visit-is-rejected}

Stateless tenant autologin prasa, lai tās domēna, origin pin, token mērķis, nonce un laiks uzliekšanos atstātāji būtu atbilstīgi. Pārbaudiet, vai tenantas URL adrese ir pareiza un lūdzu, mēģini iekopēšanu veiciet nestrādīgi pēc SSO apmeklējuma izveidošanas.

## Kad atkārtot {#when-to-retry}
Atjauninājiet pielikumus pēc katras infrastruktūras izmaiņas. Neizveidiet produktcijas trafiku, neizdziet avotu datus vai nepieņem migrācijas atbilstības informāciju, līdz visas pārbaudes sistēmas ir veiksmīgi pabeigtas.
