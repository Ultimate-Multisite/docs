---
title: Soevereine Migrasie-stroombaan
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Soevereine Migrasiewerkstroom

Ultimate Multisite: Multi-Tenancy 1.2.0 voeg migrasiebevestigingspoortjies by vir die oorskryf van 'n standaard subsite na soevereine huurderinfrastruktuur by.

## Voordat jy begin

Bevest dat jy het:

- 'n Huidige bladsy-backup van die bronsite.
- Die Multi-Tenancy addon aktief is.
- Die bestemming huurderdatabasis, lêersisteem wortel en domein gereed is.
- 'n Database-hoosterbinding wat ooreenstem met die bestemmingomgewing.
- Toegang om WP-CLI commando's vir die netwerk uit te voer.

## Aanbeveel gerigte werkstroom

1. Berei die bestemming huurderdatabasis en lêersisteem voor.
2. Registreer of opdateer die huurder-isoleringinstellings.
3. Voer die huurdermigrasie uit.
4. Stel of bevestig huurder gebruikers.
5. Ontlaai asynk migrasiejobs.
6. Voer die soevereine migrasiebevestiging uit.
7. Besoek die huurder met SSO.
8. Skakel DNS of roer netwerk slegs nadat bevestiging suksesvol gepas het.

## Bevestigingspoorte

Die bevestigingswerkstroom toets die migrasie vanuit verskeie hoeke:

- Die huurder-skema bestaan en kan deur die huurderdatabasis skryf word.
- Die geconfigureerde databasis-hooster het geldige toestemminge.
- Huurder gebruikers is teenwoordig en stem ooreen met die verwagte aantal soevereine installasiegebruikers.
- Die asynk push-rieël kan suksesvol ontlaai.
- Ou netwerk-syd data-padstrukture is nie meer nodig vir die soevereine huurder nie.

Behandel bevestigingsfoute as blokkerende faktore voor die lansering. Herstel die gemelde databasis-, gebruiker-, riël of roerprobleem, en voer dan weer die bevestiging uit voordat jy die huurder aan kliënte blootstel.

## Eerste produksiebesoek

Nadat bevestiging suksesvol gepas het, gebruik **Besluit (SSO)** vanaf die bladsybestuur-skerm vir die eerste administrasiebesoek. Dit bevestig huurderroering, SSO token-handhabings, oorsprongpinnings en huurder-syd gebruiker-provisioning in een gecontroleerde stap.
