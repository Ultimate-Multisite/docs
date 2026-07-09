---
title: Referentie voor instellingen
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Instellingenreferentie

Deze pagina houdt instellingen bij die van invloed zijn op dagelijkse administratie en recente gedragswijzigingen in Ultimate Multisite.

## Overige opties

Het gebied **Overige opties** verschijnt onder **Ultimate Multisite > Settings > Login & Registration**.

| Instelling | Beschrijving |
|---|---|
| **Jumper inschakelen** | Toont de snelle navigatietool Jumper in het beheergebied. Gebruik deze om direct naar Ultimate Multisite-schermen, netwerkobjecten en ondersteunde beheerbestemmingen te springen. Schakel deze uit als je niet wilt dat deze snelkoppeling zichtbaar is. |

## Foutrapportage en telemetrie

De vorige opt-in-instelling voor foutrapportage is verwijderd van de instellingenpagina. Anonieme telemetrie is uitgeschakeld en er is geen UI-schakelaar om deze in te schakelen.

Als je interne draaiboeken of screenshots voor de instellingenpagina onderhoudt, verwijder dan verwijzingen naar het oude opt-in-veld voor foutrapportage zodat beheerders niet zoeken naar een instelling die niet langer aanwezig is.

## Import-/exportinstellingen

Het tabblad **Import/Export**-instellingen beschrijft welke instellingen het beheert en linkt direct naar **Ultimate Multisite > Site Export** voor site- en netwerkarchieven. Gebruik het instellingentabblad voor import-/exportconfiguratie, gebruik **Tools > Export & Import** voor de export-/importworkflow voor één site, en gebruik de Site Export-tool wanneer je een volledig Network Export-archief nodig hebt.

## Waarschuwing voor Domain Seller HostAfrica-saldo

Wanneer de Domain Seller addon is verbonden met HostAfrica, zien netwerkbeheerders nu een wegklikbare waarschuwing voor laag saldo wanneer het saldo van het reselleraccount te laag is voor betrouwbare domeinregistratie- of verlengingsverwerking.

Behandel deze melding als een operationele waarschuwing: vul het HostAfrica-resellersaldo aan voordat je meer betaalde domeinregistraties accepteert, en keer daarna terug naar de Domain Seller-instellingen of het domeinmonitoringscherm om te bevestigen dat registraties en verlengingen normaal kunnen doorgaan.

## Instellingen voor AI-providerconnector

Instellingen voor AI-providerconnectoren tonen nu alleen de ondersteunde OAuth-accountpools:

| Provider | Setup-flow |
|---|---|
| **Anthropic Max** | Verbind een of meer Anthropic Max-accounts met de OAuth-knop. Gebruik de handmatige OAuth-terugvaloptie wanneer een gesandboxte browser de omleiding niet automatisch kan voltooien. |
| **OpenAI ChatGPT/Codex** | Verbind ChatGPT-accounts via dezelfde OAuth-poolworkflow. Door de connector ondersteunde bewerkingen kunnen ChatGPT Codex-toolaanroepen gebruiken nadat het account is verbonden. |
| **Google AI Pro** | Verbind Google AI Pro-accounts via OAuth en vernieuw daarna de connector als de accountlijst niet onmiddellijk wordt bijgewerkt. |

Cursor Pro is niet langer een ondersteunde provider. Verwijder oude interne screenshots, draaiboeken of onboardingstappen die Cursor Pro-instellingsvelden of connectorpaden vermelden.

Voer bij het toevoegen of verwijderen van provideraccounts een geldig e-mailadres in voor het account dat wordt vernieuwd of verwijderd en sla de providerinstellingen op voordat je door de connector ondersteunde bewerkingen test.
