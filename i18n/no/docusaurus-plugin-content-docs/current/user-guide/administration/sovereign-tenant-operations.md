---
title: Suveren leietakerdrift
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operasjoner for suverene leietakere

Ultimate Multisite: Multi-Tenancy 1.2.0 legger til verktøy for drift av suverene leietakere: subsites som kjører med sin egen database, filsystemrot og rutingkontekst, samtidig som de er synlige for nettverksadministratoren.

Bruk denne siden når du administrerer isolerte kundesider, fjernsite-overleveringer eller migreringer som flytter en standard subsite inn i suveren infrastruktur.

## Hva endres for administratorer

- **Stateless tenant autologin** — Nettverksadministratorer kan besøke en suveren leietaker uten å stole på langvarig delt sesjonsstatus. SSO-tokenet er tidsbegrenset, kildebundet, replay-beskyttet og begrenset til et kort utløpstidspunkt.
- **Sovereign-aware routing** — Eldre isolerte nettverk og suverene leietakere løser gjennom samme rutepath som nettstedet, noe som reduserer forskjeller i oppstart mellom gamle og nye isolerte installasjoner.
- **Verified migration state** — Migrasjonsverifisering sjekker brukerprovisjonering, skriverettigheter for databasen, status på køtømming (queue drain) og fravær av eldre tabeller før en leietaker behandles som ferdig.
- **Safer teardown** — Suveren nedstengning fjerner nå leietakerdetaljer rent slik at slettede leietakere ikke etterlater seg utdatert databaseaksess.

## Besøk på en suveren leietaker

1. Åpne **Network Admin > Ultimate Multisite > Sites**.
2. Velg den suverene leietakeren.
3. Bruk **Visit (SSO)** når det er tilgjengelig i stedet for å kopiere passord eller opprette midlertidige administrator-kontoer.

Besøkeflyten lager en kortvarig påloggings-token for den leietakeren og registrerer SSO-hendelsen i leietakers revisjonsspor (audit trail). Hvis knappen feiler, sjekk at domenet til leietakeren løser opp til den forventede installasjonen og at leietakeren kan nå nettverks-SSO-endepunktet.

## Sjekkliste for fjernsiteoperasjoner

Før du endrer en suveren eller fjernleietaker, bekreft:

Leie-domenet peker til verten som eier leiet filesystemet.
Leie-databasenheten matcher den konfigurerte host bindingen for den installasjonen.
Migrasjonsverifiseringskommandoene lykkes for leien.
Asynkrone migrasjonskø tømmes før DNS- eller eierskapsendringer gjøres.
Leieadministratoren ble provisionert under migreringen og kan logge inn via SSO.

## Slette suverene leier

Sletting av en suveren leie er destruktivt. Bekreft først sikkerhetskopierings- og eksportstatus, og slett deretter fra administrasjonsskjermen for nettstedet. Teardown-flyten i versjon 1.2.0 fjerner leiedatabasetilgang som en del av opprydningen, men administratorer bør likevel verifisere at hostnivå databasebrukere og mapper er borte når man bruker eksterne hostingpaneler.

:::warning
Ikke slett en suveren leie mens migrasjonsverifisering fortsatt kjører eller mens asynkrone push-jobber står i kø. Vent til verifiseringen er fullført slik at teardown ikke fjerner legitimasjon som trengs av ventende jobber.
:::
