---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 stel die **Plugin Builder & Sandbox System** bekend, wat die AI-assistent toelaat om WordPress-plugins op jou netwerk te genereer, te aktiveer en te bestuur — alles deur middel van 'n veilige, geïsoleerde sandbox-omgewing.

## Oorsig

Die Plugin Builder laat die AI-assistent toe om aangepaste WordPress-plugins te skryf in reaksie op natuurlike taalversoeke. Ge genereerde plugins word gevalideer, gestoor en geaktiveer binne 'n sandbox-laag voordat hulle ooit die werklike werf-funksionaliteit beïnvloed.

Gebruiksvlakke sluit in:

- Die genereer van ligte nutsplugins sonder ontwikkelaarbetrokkenheid.
- Die prototyping van funksies wat WordPress hooks of aangepaste posgipes vereis.
- Die skep van kort-lewende outomatisering-skripte vir partiewerkings.

## Genereer 'n Plugin via AI

Om 'n plugin te genereer, maak die Gratis AI Agent-klets-koppelvlak oop en beskryf wat jy benodig. Byvoorbeeld:

> "Skep 'n plugin wat 'n aangepaste admin-kennisgewing op die dashboard byvoeg."

Die AI sal:

1. Die plugin PHP-kode produseer deur gestruktureerde kode-generering.
2. Die uitvoer valider vir sintaksfoute en onveilige patrone.
3. Die gegenereerde plugin in die sandbox-winkel stoor.
4. 'n Bevestiging teruggee met die plugin-slug en 'n **Activate in Sandbox**-knoppie.

Jy kan die resultaat verfyn deur in dieselfde gesprekdraad op te volg voordat jy aktiveer.

## Sandbox-Aktivering

Die aktiveer van 'n gegenereerde plugin in die sandbox verskil van die aktiveer daarvan op die werklike netwerk. Die sandbox:

- Loop die plugin in 'n geïsoleerde WordPress-omgewing (wp-env).
- Vang enige PHP-foute, waarskuwings of hook-konflikte.
- Verslaan die aktiveringresultaat terug in die klets-koppelvlak.

Om 'n plugin in die sandbox te aktiveer, klik op die **Activate in Sandbox**-knoppie in die AI-kletsantwoord, of gebruik die slas-bevel:

```
/activate-plugin <plugin-slug>
```

'n Statusboodskap bevestig of die aktivering geslaag het of misluk het. By mislukking word die fout-log in die kletsdraad vertoon.

## Bestuur van Ge genereerde Plugins

Gegenereerde plugins word gelys in **Gratis AI Agent → Plugin Builder → Manage Plugins**. Van hierdie skerm kan jy:

| Aksie | Beskrywing |
|---|---|
| **View source** | Hersien die volledige plugin PHP-kode. |
| **Re-activate in sandbox** | Voer die sandbox-aktiveringkontrole op. |
| **Install on network** | Ontplooi die plugin na die werklike netwerk (vereis handmatige bevestiging). |
| **Update** | Verskaf 'n nuwe weergawe via die AI, wat die bestaande kode vervang. |
| **Delete** | Verwyder die plugin uit die sandbox-winkel. Deaktiveer dit eers van alle werwe. |

:::warning
**Install on network** ontplooi die gegenereerde plugin na jou werklike WordPress multisite. Hersien die plugin-kode voordat jy voortgaan. Gratis AI Agent sal om bevestiging vra voordat 'n werklike installasie voltooi word.
:::

## Installeer 'n Ge genereerde Plugin op die Netwerk

Wanneer jy tevrede is met 'n sandboks-plugin, kan jy dit op die werklike netwerk installeer:

1. Gaan na **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klik op **Install on Network** langs die plugin wat jy wil ontplooi.
3. Bevestig die dialoog. Die plugin word geïnstalleer na `wp-content/plugins/` en netwerk-geaktiveer.

Alternatief, gebruik die slas-bevel in die klets-koppelvlak:

```
/install-plugin <plugin-slug>
```

## Plugin Opdaterings

Om 'n gegenereerde plugin op te dateer, beskryf die verandering aan die AI-assistent in 'n nuwe gesprek:

> "Update die dashboard-notice plugin om die kennisgewing slegs aan administrateurs te wys."

Die AI genereer 'n nuwe weergawe, wat in die sandbox saam met die huidige weergawe verskyn. Jy hersien die diff en bevestig voordat die opdatering toegepas word.

## HookScanner Integrasie

Die Plugin Builder gebruik 'n geïntegreerde **HookScanner** om die hooks en filters te ontleed wat deur elke gegenereerde plugin geregistreer word. HookScanner-uitvoer word in die kletsantwoord getoon en sluit in:

- Aksie-hooks wat geregistreer is (`add_action` oproepe).
- Filter-hooks wat geregistreer is (`add_filter` oproepe).
- Enige hooks gevind in plugin-afhanklikhede (skiet `vendor/` en `node_modules/` directories oor).

Dit help jou om 'n plugin se gedrag te verstaan voordat jy dit aktiveer.

## Sekuriteitsoorwegings

- Ge genereerde plugins word apart gestoor van handmatig geïnstalleerde plugins en is nie beskikbaar via die standaard WordPress plugin-bestuurskerm totdat jy dit uitdruklik op die netwerk installeer nie.
- Die sandbox gebruik padvalidering om omgang met gidsverkenning te voorkom wanneer plugin-lêre geskryf word.
- Plugins met gevaarlike funksieoproepe (bv. `eval`, `exec`, `system`) word gedurende validasie gemerk en sal nie geaktiveer word nie.
