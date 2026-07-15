---
title: Instellingsverwysing
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Instellingsverwysing

Hierdie bladsy hou instellings dop wat daaglikse administrasie en onlangse gedragsveranderings in Ultimate Multisite beïnvloed.

## Ander opsies {#other-options}

Die **Ander opsies**-area verskyn onder **Ultimate Multisite > Instellings > Aanmelding & Registrasie**.

| Instelling | Beskrywing |
|---|---|
| **Aktiveer Jumper** | Wys die Jumper-snelnavigasiehulpmiddel in die admin-area. Gebruik dit om direk na Ultimate Multisite-skerms, netwerkobjekte en ondersteunde admin-bestemmings te spring. Deaktiveer dit as jy nie wil hê hierdie kortpad moet sigbaar wees nie. |

## Foutrapportering en telemetrie {#error-reporting-and-telemetry}

Die vorige intekeninstelling vir foutrapportering is van die instellingsbladsy verwyder. Anonieme telemetrie is gedeaktiveer en daar is geen UI-skakelaar om dit te aktiveer nie.

As jy interne draaiboeke of skermskote vir die instellingsbladsy onderhou, verwyder verwysings na die ou intekenveld vir foutrapportering sodat administrateurs nie na ’n instelling soek wat nie meer teenwoordig is nie.

## Invoer-/uitvoerinstellings {#importexport-settings}

Die **Invoer/Uitvoer**-instellingsoortjie beskryf watter instellings dit beheer en skakel direk na **Ultimate Multisite > Werfuitvoer** vir werf- en netwerkargiewe. Gebruik die instellingsoortjie vir invoer-/uitvoerkonfigurasie, gebruik **Gereedskap > Uitvoer & Invoer** vir die enkelwerf-uitvoer-/invoerwerkvloei, en gebruik die Werfuitvoer-hulpmiddel wanneer jy ’n volledige Netwerkuitvoer-argief benodig.

## Domain Seller HostAfrica-saldowaarskuwing {#domain-seller-hostafrica-balance-warning}

Wanneer die Domain Seller-addon aan HostAfrica gekoppel is, sien netwerkadministrateurs nou ’n wegklikbare waarskuwing oor lae saldo wanneer die herverkoperrekening se saldo te laag is vir betroubare domeinregistrasie- of hernuwingsverwerking.

Hanteer hierdie kennisgewing as ’n operasionele waarskuwing: vul die HostAfrica-herverkopersaldo aan voordat jy meer betaalde domeinregistrasies aanvaar, keer dan terug na die Domain Seller-instellings of domeinmoniteringskerm om te bevestig dat registrasies en hernuwings normaal kan voortgaan.

## AI-verskafferkoppelaarinstellings {#ai-provider-connector-settings}

AI-verskafferkoppelaarinstellings stel nou slegs die ondersteunde OAuth-rekeningpoele bloot:

| Verskaffer | Opstelvloei |
|---|---|
| **Anthropic Max** | Koppel een of meer Anthropic Max-rekeninge met die OAuth-knoppie. Gebruik die handmatige OAuth-terugvalopsie wanneer ’n sandbox-blaaier nie die herleiding outomaties kan voltooi nie. |
| **OpenAI ChatGPT/Codex** | Koppel ChatGPT-rekeninge deur dieselfde OAuth-poelwerkvloei. Koppelaar-ondersteunde bewerkings kan ChatGPT Codex-hulpmiddeloproepe gebruik nadat die rekening gekoppel is. |
| **Google AI Pro** | Koppel Google AI Pro-rekeninge deur OAuth, verfris dan die koppelaar as die rekeninglys nie onmiddellik opdateer nie. |

Cursor Pro is nie meer ’n ondersteunde verskaffer nie. Verwyder ou interne skermskote, draaiboeke of aanboordstappe wat Cursor Pro-opstelvelde of koppelaarpaaie noem.

Wanneer jy verskafferrekeninge byvoeg of verwyder, voer ’n geldige e-posadres in vir die rekening wat verfris of uitgevee word en stoor die verskafferinstellings voordat jy koppelaar-gesteunde bewerkings toets.
