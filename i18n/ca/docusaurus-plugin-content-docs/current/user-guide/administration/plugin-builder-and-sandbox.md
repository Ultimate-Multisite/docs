---
title: Constructor i Sandbox de Plugins
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 presenta el **Plugin Builder & Sandbox System**, un sistema que permet a l'assistència AI generar, activar i gestionar plugins de WordPress a la teva xarxa, tot dins d'un entorn sandbox (de prova) segur i aïllat.

## Resum general

El Plugin Builder permet a l'assistència AI escriure plugins personalitzats de WordPress en resposta a peticions en llenguatge natural. Els plugins generats es validen, es guarden i s'activen dins d'una capa sandbox abans de que afectin a la funcionalitat del lloc en directe.

Els casos d'ús inclouen:

- Generar plugins utilitzadors lleugers sense la intervenció d'un desenvolupador.
- Prototipar funcionalitats que requereixen hooks de WordPress o tipus d'altres tipus de contingut (custom post types).
- Crear scripts d'automatització de curta durada per a operacions per part de grup.

## Generar un plugin amb AI

Per generar un plugin, obre la interfície de xat de Gratis AI Agent i descriu el que necessites. Per exemple:

> "Crea un plugin que afegeixi un avís d'administració personalitzat al dashboard."

L'AI farà:

1. Produir el codi PHP del plugin utilitzant generació de codi estructurada.
2. Validar l'output per detectar errors de sintaxi i patrons insegurs.
3. Guardar el plugin generat a la botiga sandbox.
4. Tornar una confirmació amb loog del plugin i un botó **Activate in Sandbox**.

Pots afinar el resultat fent un seguiment en el mateix fil de conversa abans de l'activació.

## Activació en Sandbox

Activar un plugin generat en el sandbox és diferent d'activarlo a la xarxa en directe. El sandbox:

- Executa el plugin en un entorn WordPress aïllat (wp-env).
- Captura qualsevol error de PHP, advertència o conflicte de hook.
- Reporta el resultat de l'activació al mateix fil de xat.

Per activar un plugin en el sandbox, fes clic al botó **Activate in Sandbox** a la resposta de xat de l'AI, o utilitza el comodín:

```
/activate-plugin <plugin-slug>
```

Un missatge d'estat confirma si l'activació va ser exitosa o fallida. En cas de fallida, el registre d'errors es mostra al fil de xat.

## Gestió de plugins generats

Els plugins generats es llisten a **Gratis AI Agent → Plugin Builder → Manage Plugins**. Des d'aquesta pantalla pots:

| Acció | Descripció |
|---|---|
| **View source** | Revisar el codi PHP complet del plugin. |
| **Re-activate in sandbox** | Re-executar la verificació d'activació del sandbox. |
| **Install on network** | Desplegar el plugin a la xarxa en directe (requereix confirmació manual). |
| **Update** | Proporcionar una nova versió a través de l'AI, substituïnt el codi existent. |
| **Delete** | Eliminar el plugin de la botiga sandbox. Desactiva el plugin de tots els llocs abans. |

:::warning
**Install on network** despliega el plugin generat al teu WordPress multisite en directe. Revisa el codi del plugin abans de continuar. Gratis AI Agent demanarà confirmació abans de completar una instal·lació en directe.
:::

## Instal·lació d'un plugin generat a la xarxa

Quan et sentis satisfet amb un plugin sandbox, pots instal·lar-lo a la xarxa en directe:

1. Navega a **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Fes clic a **Install on Network** al costat del plugin que vols desplegar.
3. Confirma el diàleg. El plugin s'instal·la a `wp-content/plugins/` i s'activa a nivell de xarxa.

Alternativament, utilitza el comodín a la interfície de xat:

```
/install-plugin <plugin-slug>
```

## Actualitzacions de plugins

Per actualitzar un plugin generat, descriu el canvi a l'assistència AI en una nova conversa:

> "Actualitza el plugin dashboard-notice perquè només mostri l'avís als administradors."

L'AI genera una nova versió, que apareix al sandbox juntament amb la versió actual. Tu revises el diferència (diff) i confirmes abans que s'apliqui l'actualització.

## Integració HookScanner

El Plugin Builder utilitza un **HookScanner** integrat per analitzar els hooks i els filtres registrats per cada plugin generat. L'output de HookScanner es mostra a la resposta de xat i inclou:

- Hooks d'acció registrats (llamades `add_action`).
- Hooks de filtre registrats (llamades `add_filter`).
- Quals qualsevol hook trobat en les dependències del plugin (salta els directoris `vendor/` i `node_modules/`).

Això et ajuda a entendre el comportament d'un plugin abans de l'activar.

## Consideracions de seguretat

- Els plugins generats es guarden separat dels plugins instal·lats manualment i no són accessibles a través de la pantalla estàndard de gestió de plugins de WordPress fins que els instal·les explícitament a la xarxa.
- El sandbox utilitza la validació de camins (path validation) per prevenir la navegació per directoris (directory traversal) quan escriu fitxers de plugins.
- Els plugins amb cranes de funció perillosos (per exemple, `eval`, `exec`, `system`) són marcats durant la validació i no s'activaran.
