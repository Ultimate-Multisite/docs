---
title: Exporteren & Importeren
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exporteren & Importeren {#export--import}

Ultimate Multisite 2.9.0 voegt een **Exporteren & Importeren**-tool voor een enkele site toe onder **Tools > Export & Import**. Gebruik dit wanneer u één WordPress-site wilt verpakken als ZIP-bestand, dat ZIP-bestand wilt herstellen, of een site wilt verplaatsen tussen compatibele Ultimate Multisite- en enkele-site WordPress-installaties.

## Vereiste rechten {#required-permissions}

U moet inloggen als een administrator die toegang heeft tot het WordPress **Tools**-menu op de site die geëxporteerd of geïmporteerd moet worden. Op een multisite-netwerk gebruikt u een netwerkadministratoraccount wanneer u subsites exporteert of importeert via de netwerk-niveau Ultimate Multisite-tools.

Export-ZIP-downloads worden via een geauthenticeerd downloadendpoint geleverd, dus houd de admin-sessie actief totdat de download is voltooid en deel de gegenereerde download-URL's niet openbaar.

## Een site exporteren naar een ZIP {#exporting-a-site-to-a-zip}

1. Ga in het WordPress-admin van de site die u wilt kopiëren naar **Tools > Export & Import**.
2. Open het exportgedeelte en kies de site die u wilt verpakken.
3. Selecteer de optionele inhoud die u wilt opnemen, zoals uploads, plugins en themes, wanneer deze opties beschikbaar zijn.
4. Start de export en wacht tot het proces is voltooid. Grote sites kunnen achter de schermen moeten voltooien voordat de ZIP klaar is.
5. Download de voltooide ZIP uit de exportlijst.

Bewaar de ZIP op een veilige locatie. Het kan site-inhoud, instellingen, mediabestanden en geselecteerde code-assets bevatten.

## Wat de export bevat {#what-the-export-includes}

Een export-ZIP kan bevatten:

- De database-inhoud en configuratie van de geselecteerde site.
- Geüploade mediabestanden wanneer uploads zijn opgenomen.
- Plugins en themes wanneer deze opties zijn geselecteerd.
- Importmetadata die door de Export & Import-tool wordt gebruikt om de site op de doelinstallatie opnieuw op te bouwen.

De exacte grootte van de ZIP hangt af van de hoeveelheid media, de geselecteerde plugins en themes, en de grootte van de database-tabellen van de site.

## Een site importeren vanuit een ZIP {#importing-a-site-from-a-zip}

1. Ga naar **Tools > Export & Import** op de doel-WordPress-site.
2. Open het importgedeelte en upload de ZIP die is gemaakt met de Export & Import-tool.
3. Voer een vervangings-URL in als de site een nieuw adres moet gebruiken, of laat het veld leeg om de oorspronkelijke URL te behouden.
4. Kies of u de geüploade ZIP wilt verwijderen nadat de import is voltooid.
5. Klik op **Begin Import**.
6. Monitor de lopende import totdat deze is voltooid. Gebruik **Cancel Import** alleen als u het proces wilt stoppen voordat het is voltooid.
7. Controleer de geïmporteerde site voordat u normaal verkeer of klanttoegang toestaat.

Op een enkele-site WordPress-installatie vervangt het importeren van een ZIP de huidige site door de geïmporteerde site. Maak eerst een volledige back-up van de doel-site voordat u begint, en vermijd het starten van meerdere importen voor dezelfde site tegelijkertijd.

## Beperkingen en compatibiliteitsopmerkingen {#limitations-and-compatibility-notes}

- Zeer grote uploads-mappen of mediabibliotheken kunnen grote ZIP-bestanden opleveren. Controleer de PHP uploadlimieten, uitvoeringslimieten, schijfruimte, geheugen en servertimeout-instellingen voordat u grote sites exporteert of importeert.
- Zeer grote mediabibliotheken moeten mogelijk tijdens een laag-verkeer onderhoudsvenster worden verplaatst.
- De doel-WordPress-installatie moet compatibele versies van WordPress, PHP, Ultimate Multisite, plugins en themes draaien.
- Een single-site import vervangt de doel-site. Het is geen merge-tool.
- Verplaatsingen van multisite naar single-site en single-site naar multisite worden alleen ondersteund wanneer de doelomgeving de plugins, themes, URLs en vereiste Ultimate Multisite-componenten van de geëxporteerde site kan draaien.
- Houd de ZIP privé. Het kan database-inhoud, geüploade bestanden en configuratiedetails van de geëxporteerde site bevatten.

Voor oudere netwerk-niveau exportworkflows, zie [Site Export](/user-guide/administration/site-export).
