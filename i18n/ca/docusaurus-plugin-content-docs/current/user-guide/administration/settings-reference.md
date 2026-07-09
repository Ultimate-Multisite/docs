---
title: Referència de configuració
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referència de configuració

Aquesta pàgina fa el seguiment de la configuració que afecta l’administració del dia a dia i els canvis recents de comportament a Ultimate Multisite.

## Altres opcions

L’àrea **Altres opcions** apareix a **Ultimate Multisite > Settings > Login & Registration**.

| Configuració | Descripció |
|---|---|
| **Activa Jumper** | Mostra l’eina de navegació ràpida Jumper a l’àrea d’administració. Utilitzeu-la per anar directament a les pantalles d’Ultimate Multisite, als objectes de xarxa i a les destinacions d’administració compatibles. Desactiveu-la si no voleu que aquesta drecera sigui visible. |

## Informes d’errors i telemetria

La configuració anterior d’acceptació d’informes d’errors s’ha eliminat de la pàgina de configuració. La telemetria anònima està desactivada i no hi ha cap commutador d’UI per activar-la.

Si manteniu guies internes o captures de pantalla per a la pàgina de configuració, elimineu les referències a l’antic camp d’acceptació d’informes d’errors perquè els administradors no busquin una configuració que ja no hi és.

## Configuració d’importació/exportació

La pestanya de configuració **Import/Export** descriu quines configuracions controla i enllaça directament amb **Ultimate Multisite > Site Export** per als arxius de lloc i de xarxa. Utilitzeu la pestanya de configuració per a la configuració d’importació/exportació, utilitzeu **Tools > Export & Import** per al flux de treball d’exportació/importació d’un sol lloc, i utilitzeu l’eina Site Export quan necessiteu un arxiu complet de Network Export.

## Avís de saldo de Domain Seller HostAfrica

Quan l’addon Domain Seller està connectat a HostAfrica, els administradors de xarxa ara veuen un avís descartable de saldo baix quan el saldo del compte de revenedor és massa baix per a un processament fiable del registre o la renovació de dominis.

Tracteu aquest avís com un avís operatiu: recarregueu el saldo de revenedor de HostAfrica abans d’acceptar més registres de domini de pagament i, després, torneu a la configuració de Domain Seller o a la pantalla de monitoratge de dominis per confirmar que els registres i les renovacions poden continuar amb normalitat.

## Configuració dels connectors de proveïdors d’AI

La configuració dels connectors de proveïdors d’AI ara només exposa els pools de comptes OAuth compatibles:

| Proveïdor | Flux de configuració |
|---|---|
| **Anthropic Max** | Connecteu un o més comptes Anthropic Max amb el botó OAuth. Utilitzeu l’alternativa manual OAuth quan un navegador en entorn sandbox no pugui completar la redirecció automàticament. |
| **OpenAI ChatGPT/Codex** | Connecteu comptes ChatGPT mitjançant el mateix flux de treball de pool OAuth. Les operacions compatibles amb el connector poden utilitzar crides d’eines ChatGPT Codex després que el compte estigui connectat. |
| **Google AI Pro** | Connecteu comptes Google AI Pro mitjançant OAuth i, després, actualitzeu el connector si la llista de comptes no s’actualitza immediatament. |

Cursor Pro ja no és un proveïdor compatible. Elimineu captures de pantalla internes antigues, guies o passos d’incorporació que mencionin camps de configuració de Cursor Pro o camins de connector.

Quan afegiu o elimineu comptes de proveïdor, introduïu una adreça electrònica vàlida per al compte que s’està actualitzant o suprimint i deseu la configuració del proveïdor abans de provar operacions recolzades pel connector.
