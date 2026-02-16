---
title: Az Ultimate Multisite telepítése
sidebar_position: 12
_i18n_hash: 400c7f9fc01ce3a8275a1710ef7e903a
---
# Az Ultimate Multisite telepítése

:::note
Ez az útmutató feltételezi, hogy a WordPress Multisite már telepítve van és megfelelően be van állítva. Ha még nincs, a WP Beginner [ebben az útmutatóban](https://www.wpbeginner.com/glossary/multisite/) részletesen bemutatja a folyamatot.
:::

## A plugin telepítése

Az Ultimate Multisite ingyenesen elérhető a [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) oldalon.

A **Hálózati adminisztrációs vezérlőpultban** navigálj a **Bővítmények → Új bővítmény** menüpontra.

![Hálózati adminisztráció – Új bővítmény oldal](/img/installation/add-new-plugin.png)

Keress rá az **"Ultimate Multisite"** kifejezésre (idézőjelekkel a pontos egyezéshez), és az első találatként fog megjelenni. Kattints a **Telepítés most** gombra.

![Keresési találatok az Ultimate Multisite bővítménnyel](/img/installation/search-ultimate-multisite.png)

A telepítés után kattints a **Hálózati aktiválás** gombra, hogy a plugin a teljes hálózaton aktívvá váljon.

![Telepített plugin a Hálózati aktiválás gombbal](/img/installation/plugin-installed.png)

Az aktiválás után automatikusan átirányítunk a Beállítási varázslóhoz.

![Plugin aktiválva, átirányítás a varázslóhoz](/img/installation/plugin-activated.png)

## Beállítási varázsló

A Beállítási varázsló végigvezet az Ultimate Multisite konfigurálásán, ami körülbelül 10 percet vesz igénybe.

### Üdvözlő képernyő

Kattints az **Első lépések** gombra a kezdéshez.

![Beállítási varázsló üdvözlő képernyő](/img/installation/wizard-welcome.png)

### Telepítés előtti ellenőrzések

Ez a lépés ellenőrzi a rendszerinformációkat és a WordPress-telepítést, hogy megfelel-e az Ultimate Multisite követelményeinek. Ha minden rendben van, kattints a **Tovább a következő lépésre** gombra.

![Telepítés előtti ellenőrzések a rendszerkövetelményekkel](/img/installation/wizard-pre-install-checks.png)

### Telepítés

A telepítő létrehozza a szükséges adatbázis-táblákat és telepíti a `sunrise.php` fájlt, amelyre az Ultimate Multisite működéséhez szükség van. Kattints a **Telepítés** gombra a folytatáshoz.

![Telepítési lépés az adatbázis-táblákkal és a sunrise.php fájllal](/img/installation/wizard-installation.png)

### Céged adatai

Add meg a céged adatait és állítsd be az alapértelmezett pénznemet. Ezek az információk a WaaS platformod egészén megjelennek majd. Ha kész, kattints a **Folytatás** gombra.

![Cégadatok konfigurálása](/img/installation/wizard-your-company.png)

### Alapértelmezett tartalmak

Ebben a lépésben előre elkészített sablonokat, termékeket és egyéb kezdő tartalmakat telepíthetsz. Ez remek módja annak, hogy megismerkedj az Ultimate Multisite funkcióival. Kattints a **Telepítés** gombra az alapértelmezett tartalmak hozzáadásához, vagy hagyd ki ezt a lépést, ha inkább a nulláról szeretnél indulni.

![Alapértelmezett tartalmak telepítése](/img/installation/wizard-default-content.png)

### Ajánlott bővítmények

Opcionálisan telepíthetsz ajánlott kiegészítő bővítményeket. Kattints a **Telepítés** gombra a hozzáadásukhoz, vagy ugorj tovább a folytatáshoz.

![Ajánlott bővítmények lépés](/img/installation/wizard-recommended-plugins.png)

### Kész!

Ennyi az egész! Az Ultimate Multisite telepítése befejeződött. Mostantól elkezdheted építeni a Website as a Service platformodat a **Hálózati adminisztrációs vezérlőpultból**.

![Telepítés befejezve – Kész képernyő](/img/installation/wizard-ready.png)

![Hálózati adminisztrációs vezérlőpult aktív Ultimate Multisite-tal](/img/installation/network-dashboard.png)

Hajrá, fedezd fel és jó szórakozást!
