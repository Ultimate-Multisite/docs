---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

A Gratis AI Agent v1.5.0 bevezet egy **Plugin Builder & Sandbox Systemet**, amely lehetővé teszi az AI asszisztens számára, hogy a hálózatán (network) generálja, aktiválja és kezelje a WordPress plugin-eit – mindezt egy biztonságos, elszigetelt sandbox környezetben.

## Overview {#overview}

A Plugin Builder lehetővé teszi az AI asszisztens számára, hogy természetes nyelvi kérésekre reagálva készítsen egyedi WordPress plugin-eket. A generált plugin-eket validáljuk, tároljuk és egy sandbox rétegben aktiváljuk, mielőtt bármilyen élő oldal funkcióját érintkeznék.

A felhasználási esetek include:

- Könnyű utility plugin-ek generálása fejlesztői beavatkozás nélkül.
- Funkciók prototípusa, amelyek WordPress hook-okat vagy egyedi post típusokat igényelnek.
- Rövid élettartamú automatizációs script-ek létrehozása toplu műveletekhez.

## Generating a Plugin via AI {#generating-a-plugin-via-ai}

Egy plugin generálásához nyissa meg a Gratis AI Agent chat felületét, és írja le, mi kell. Például:

> "Create a plugin that adds a custom admin notice on the dashboard."

Az AI:

1.  Strukturált kódgenerálás segítségével előállítja a plugin PHP kódját.
2.  Validálja az eredményt a szintaktikai hiba és a biztonságos minták szempontjából.
3.  Mentő a generált plugin-et a sandbox tárolóba.
4.  Egy megerősítő üzeneteket ad vissza a plugin slug-jával és egy **Activate in Sandbox** gombbal.

A találatot az aktiválás előtt tovább finomíthatja ugyanazon a konverzió szálban.

## Sandbox Activation {#sandbox-activation}

Egy generált plugin sandbox-ban történő aktiválása eltér a live hálózatban történő aktiválásától. A sandbox:

- Egy elszigetelt WordPress környezetben (wp-env) futtatja a plugin-et.
- Megfogja az összes PHP hibát, figyelmeztetést vagy hook konfliktust.
- A sandbox aktiválási eredményét visszaadja a chat felületen.

Egy plugin aktiválásához a sandbox-ban, kattintson az AI chat válaszában található **Activate in Sandbox** gombra, vagy használja a következő slash parancsot:

```
/activate-plugin <plugin-slug>
```

Egy státusz üzenet megerősíti, hogy az aktiválás sikeres volt-e vagy sikertelen. Sikertelen esetben az hiba naplója megjelenik a chat szálban.

## Managing Generated Plugins {#managing-generated-plugins}

A generált plugin-ek a **Gratis AI Agent → Plugin Builder → Manage Plugins** alatt találhatók. Ekránról a következőket teheti:

| Action | Description |
|---|---|
| **View source** | Megtekinti a teljes plugin PHP kódját. |
| **Re-activate in sandbox** | Újra futtatja a sandbox aktivációs ellenőrzést. |
| **Install on network** | Kihelyezi a plugin-et az élő hálózatra (manuális megerősítést igényel). |
| **Update** | Új verziót biztosít az AI segítségével, ezzel helyettesítve az aktuális kódot. |
| **Delete** | Eltávolítja a plugin-et a sandbox tárolóból. Először deaktiválja az összes oldaltól. |

:::warning
**Install on network** kihelyezi a generált plugin-et az élő WordPress multisite-ra. Kérjük, ellenőrizze a plugin kódot, mielőtt elindul. A Gratis AI Agent megerősítést kér az élő telepítés előtt.
:::

## Installing a Generated Plugin on the Network {#installing-a-generated-plugin-on-the-network}

Ha elégedett egy sandbox-ban futó plugin-től, kihelyezheti az élő hálózatra:

1.  Menjen a **Gratis AI Agent → Plugin Builder → Manage Plugins** oldalra.
2.  Kattintson az **Install on Network** gombra a kihelyezendő plugin mellett.
3.  Megerősítse a diaoptikai ablakot. A plugin a `wp-content/plugins/` könyvtárba települ és hálózat-aktiválásra kerül.

Alternatívaként használhatja a slash parancsot a chat felületen:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

Egy generált plugin frissítéséhez az AI asszisztenshez egy új konverzióban írja le a változtatást:

> "Update the dashboard-notice plugin to only show the notice to administrators."

Az AI generál egy új verziót, amely a sandboxban megjelenik az aktuális verzió mellett. Ön ellenőrzi a különbséget (diff) és megerősíti, mielőtt az frissítés alkalmazandó lenne.

## HookScanner Integration {#hookscanner-integration}

A Plugin Builder egy integrált **HookScanner**-t használ a generált plugin-ek által regisztrált hook-ok és filter-ek elemzéséhez. A HookScanner kimenete a chat válaszában látható, és tartalmazza:

- Regisztrált action hook-okat (`add_action` hívások).
- Regisztrált filter hook-okat (`add_filter` hívások).
- Bármilyen hook-ot, amit a plugin függőségeiben talált (elkerüli a `vendor/` és `node_modules/` könyvtárakat).

Ez segít megérteni egy plugin viselkedését, még mielőtt aktiválja.

## Security Considerations {#security-considerations}

- A generált plugin-ek külön tárolódnak a kézi telepítésen keresztül történő plugin-ektől, és nem érhetők el a standard WordPress plugin kezelő felületén, amíg explicit módon nem telepíti őket a hálózatra.
- A sandbox path validation-t használ a könyvtár traversálás elkerülésére a plugin fájlok írásakor.
- A veszélyes függvényhívásokkal (pl. `eval`, `exec`, `system`) rendelkező plugin-eket a validáció során jelöli ki, és nem aktiválhatók.
