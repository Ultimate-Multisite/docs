---
title: Soevereine Migrasie Verifikasie
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migrasie Verifikasie

Ultimate Multisite: Multi-Tenancy 1.2.0 bevat WP-CLI verifikasiekommando's vir soevereine huurdersmigrasies. Gebruik dit wanneer 'n huurdermigrasie, SSO-besoek of geïsoleerde installasie nie soos verwag word funksioneer nie.

## Kommando's om uit te voer

Voer verifikasie vanaf die netwerk WordPress-installasie uit:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gebruik die site ID vir die huurder wat jy migreer. Die eerste kommando controleer of die huurder nie meer op ou netwerkdata afhanklik is nie. Die tweede kommando verifieer of soevereine push jobs kan verwerk en leegmaak (drain).

## Algemene mislukking

### Database-toestomme stem nie ooreen nie met die hoes
As die verifikasie graan- of skrywer-gebruiker-foute rapporteer, controle dan die geconfigureerde database-hoes. `localhost`, `127.0.0.1` en 'n container-diensnaam is verskillende MySQL graan-hoese. Maak die huurder-hoesbinding of die database-toestomme op datum op, en voer dan die verifikasie weer uit.

### Bedrock of lokale installasies kan nie verbind nie
Bedrock- en lokale soketinstallasies rapporteer dalk databasis as `localhost` terwyl die runtime deur 'n genormaliseerde adres verbind. Versie 1.2.0 normaliseer dieselfde masjienhoesreks, maar aangepaste hoes-oortredings kan steeds konflik hê met database-toestomme.

### Asynkruis-push-rangskooie word nie leeggemaak nie
As `verify-sovereign-push` nie klaar is nie, controle dan Action Scheduler of die geconfigureerde asynkruis-runner. Wis mislukte jobs slegs nadat jy bevestig het dat dit veilig is om te probeer herhaal of weg te gooi.

### Huurdergebruikersgetal is verkeerd
Die migrasie moet gebruikers vir die soevereine huurder provisioneer. As die verwagte installasie-gebruiker ontbreek, voer dan die gebruiker-provisioneringsstap weer uit voordat jy SSO probeer herhaal.

### SSO-besoek word afgewys

Die statelike gemelding vir self-aanmelding vereis dat die domein van die tenant, die origin pin, die token doel en die nonce ooreenstem. Bevestig dat die URL van die tenant korrek is en dat die aanmelding kort daarna poging gemaak word nadat die SSO-besoek gegenereer is.

## Wanneer om te herhaal

Herhaal die verifikasie na elke infrastruktuurverandering. Verander nie produksietraffic, verwissel nie brondata, of verwyder nie migrasiegevoelighede totdat alle verifikasiekontrole slaag.
