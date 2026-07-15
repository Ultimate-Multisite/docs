---
title: Plugin Builder eta Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introducea **Plugin Builder & Sandbox System**, ze leletzen AI assistantu WordPress plugins sortu, aktibatu eta erregulatu iruzteko network-an — guztiz segurua, izolatu sandbox erabiliz.

## Deskuntzua {#overview}

Ze Plugin Builder-ek leletzen AI assistantu iradokizun natural language-an WordPress plugins sortzeko gaitasuna du. Sortutako pluginsak bidez ikustea da, datu-gordetan ematen da eta aktibatu egiten da sandbox layeraren belurra ere, orrekiko situailean erabiliz lehen da bere eragiketa direla live site funtzioari.

Erabiltzeko aukerak hauek dira:

- Desarrolladorren inguruko ez dagoen lightweight utility plugins sortzea.
- WordPress hooks edo custom post types behar dituzten funtunaldeak prototipatu.
- Batch operazioetara iruzteko laburrak automation scripts sortzea.

## AI bidez Plugin Sortzea {#generating-a-plugin-via-ai}

Plugin sortzeko, Gratis AI Agent chat interface-a ireki eta zer behar duzu esaltzea. Adibidez:

> "Dashboardan custom admin notice bat ematen plugin sortu."

AI-ak hauek egin dezake:

1. Estruktura gisa kode sortuta PHP plugin codea emate.
2. Sintaks error eta moldak seguru ez dagoen jakinarazpenetan bidez ikustea.
3. Sortutako pluginaren sandbox storean saldunea ematu.
4. Plugin slug-a eta **Activate in Sandbox** botoia ematen bidez konfirmazio bat itzultzea.

Aktibatu aurretik, beste jarduerak egin dezakezu horrek aldatzeko eskatzen da.

## Sandbox Aktibazioa {#sandbox-activation}

Sandboxan sortutako plugin bat aktibatu ez da bere live networkan aktibatu. Sandbox-ak:

- Pluginaren WordPress erabilera izolatu (wp-env)an jarraitzen du.
- PHP errorrak, adierazpenak edo hook conflict-ek capture egiten du.
- Aktibazioaren rezultata chat interfacean itzultzea ematen du.

Plugin bat sandboxan aktibatu dezakezu, AI chat erantzunaren **Activate in Sandbox** botoia klikizitu, edo slash commanda erabiliz:

```
/activate-plugin <plugin-slug>
```

Estatuaren mezu bat adierazten du, zer aktivazioa onartu nahi duela edo ez duela. Ez onartu dela, error loga da chat thread-an erakusten da.

## Generatutako Plugin-ek Eskaintzea (Managing Generated Plugins) {#managing-generated-plugins}

Generatutako plugin-ek listatzen da **Gratis AI Agent → Plugin Builder → Manage Plugins**-ean. Horrekik ez duzu:

| Akitu | Deskribapena |
|---|---|
| **View source** | Plugin PHP kodearen guztia begiratu. |
| **Re-activate in sandbox** | Sandbox aktivazioa prueba daude jartzea. |
| **Install on network** | Plugin-a network-an (live) eskatzea (manual konformitatea behar da). |
| **Update** | AI-tik daura berria bertsio bat emate, beste kodea aldatzen duela. |
| **Delete** | Plugin-a sandbox store-atik hartzea. Lehenik, guztietan desaktivatzen da. |

:::warning
**Install on network** plugin-a live WordPress multisite-an (network) eskatzen da. Aurrera jartelako plugin kodea begiratu. Gratis AI Agent-ek live instalazioa amaitzen aurretik konformitatea gerratu duela ematen du.
:::

## Plugin-a Network-an Eskaintzea (Installing a Generated Plugin on the Network) {#installing-a-generated-plugin-on-the-network}

Sandbox-an plugin bat onartu duenean, live network-an eskatzen dituzte:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins**-era jarraitu.
2. Eskuuko **Install on Network**-a plugin-aren atzean klikatu.
3. Dialoga konformatu. Plugin-a `wp-content/plugins/` eta network-an aktibatu da.

Alternatiboa, chat interface-aren slash command-a erabilizite:

```
/install-plugin <plugin-slug>
```

## Plugin Updateak (Plugin Updates) {#plugin-updates}

Generatutako plugin bat update egin nahi duenean, berria jarduerarekin AI asistentiaren daura aldatu dena:

> "Update the dashboard-notice plugin to only show the notice to administrators." (Dashboard-notiz plugin-a administrazioak iragaztean ikusikoaren mezu bat lekuan ematen duela updateatu.)

AI-ek berria bertsio bat generatzen du, eta hori sandbox-an oraindian dagoen bertsioarekin pareatu da. Diff-a begiratu eta update-a aplikatatu aurretik konformatu duela.

## HookScanner Integrazioa {#hookscanner-integration}

Plugin Builder-ek, generatu plugin guztiek ezarritutako hooks eta filters-ek analisia egin dezake **HookScanner** bat integratuta. HookScanner-ren outputa chat erantzunekoan erakusten da eta hauek barne dago:

- Akitutako aksio hooks (`add_action` ankezpenak).
- Akitutako filter hooks (`add_filter` ankezpenak).
- Plugin-ek arautze (dependencies) artean aurkitutako hook-ak (skips `vendor/` eta `node_modules/` direktoriot).

Hau laguntzen duzu plugin bat aktibatu munduan aurretik bere beteera jakretara.

## Segurantzaren Pertabilitateak {#security-considerations}

- Generatu plugin-ek manuel instalatutako plugin-ekatik errepiketa da eta standard WordPress plugin management screen-eko ez dago erabiliz, zehatz instalatzen duzu networkan.
- Sandbox-ek direktoriak yazpen prozesuaren (path validation) erabiliz, plugin file-ek yazpen aurrera egiten duen problemaa prevenitzatzen du.
- Peligrosko funtzio ankezpenak dituzten plugin-ek (`eval`, `exec`, `system` osatzen diren) validazioan markatu dira eta aktibatu ez dira.
