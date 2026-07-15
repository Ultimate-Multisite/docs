---
title: Verificarea Migrării Suverane
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verificarea Migrației Soveraine

Ultimate Multisite: Multi-Tenancy 1.2.0 include comenzi de verificare WP-CLI pentru migrațiile tenantului soberan. Folosiți aceste comenzi atunci când o migrare a unui tenant, o vizită SSO sau o instalare izolată nu se comportă conform așteptărilor.

## Comenzi de executat {#commands-to-run}

Executați verificarea din instalarea WordPress pe rețea:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Folosiți ID-ul site-ului al tenantului pe care îl migrați. Prima comandă verifică faptul că tenantul nu mai depinde de date legacy din partea rețelei. A doua comandă verifică dacă joburile de push soberane pot procesa și evacua (drain).

## Erori comune {#common-failures}

### Grant-urile bazei de date nu se potrivesc cu host-ul {#database-grants-do-not-match-the-host}

Dacă verificarea raportează eșecuri la grant-uri sau writer-user, verificați host-ul configurat al bazei de date. `localhost`, `127.0.0.1` și numele serviciului container sunt host-uri MySQL diferite pentru grant-uri. Actualizați legarea tenantului către host sau grant-urile bazei de date, apoi reexecutați verificarea.

### Instalările Bedrock sau locale nu pot conecta {#bedrock-or-local-installs-cannot-connect}

Instalările Bedrock și socket locale pot raporta baza de date ca fiind `localhost` în timp ce runtime-ul se conectează prin o adresă normalizată. Versiunea 1.2.0 normalizează șirurile de host pentru aceeași mașină, dar supraîncetările (override) ale host-ului personalizate pot încă să facă conflict cu grant-urile bazei de date.

### Coada asincronă de push nu se evacuează (drain) {#async-push-queue-does-not-drain}

Dacă `verify-sovereign-push` nu se termină, verificați Action Scheduler sau runner-ul asincron configurat. Curățați joburile eșuate doar după ce confirmați că sunt sigure pentru a fi reîncărcate sau aruncate în discertare (discard).

### Numărul de utilizatori al tenantului este greșit {#tenant-user-count-is-wrong}

Migrarea trebuie să provisioneze utilizatori pentru tenantul soberan. Dacă utilizatorul instalat așteptat lipsește, reexecutați pasul de provisionare a utilizatorilor înainte de a reîncerca SSO.

### Vizita SSO este respinsă {#sso-visit-is-rejected}

Autologarea pentru un client fără stare (stateless tenant autologin) necesită ca domeniul clientului, PIN-ul de origine (origin pin), scopul token-ului (token purpose), nonce-ul și data expirării să se potrivească. Confirmă că URL-ul clientului este corect și încearcă autentificarea imediat după ce generezi vizita SSO.

## Când să reîncepi încercarea {#when-to-retry}

Reîncepe verificarea după fiecare modificare a infrastructurii. Nu schimba traficul de producție, nu șterge datele sursă și nu scoate credentialele de migrare până când toate verificările sunt reușite.
