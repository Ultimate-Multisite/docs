---
title: Az Ultimate Multisite telepítése
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Az Ultimate Multisite telepítése

:::note
Ez az útmutató feltételezi, hogy már telepítette és konfigurálta a WordPress Multisitet. Ha szeretné megtudni, hogyan kell ezt megtenni, nézze meg ezt az [útmutatót](https://www.wpbeginner.com/glossary/multisite/) a WP Beginner oldalán.
:::

## A bővítmény telepítése

Az Ultimate Multisite ingyenesen elérhető a [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) oldalon.

A **Hálózati adminisztrációs panelről** lépjen a **Bővítmények → Új bővítmény hozzáadása** menüpontra.

![A Hálózati adminisztrációs panelen az „Új bővítmény hozzáadása” oldal](/img/installation/add-new-plugin.png)

Keresse meg a **„Ultimate Multisite”** kifejezést (idézőjelekkel, hogy pontos találatot kapjon), és ez fog megjelenni az első eredményként. Kattintson a **Most telepítse** gombra.

![A keresési eredmények között megjelenik az Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

A telepítés után kattintson a **Hálózati aktiválás** gombra, hogy aktiválja a bővítményt a teljes hálózatában.

![A bővítmény telepítve, és megjelenik a „Hálózati aktiválás” gomb](/img/installation/plugin-installed.png)

Az aktiválás után automatikusan átirányítja az beállítási varázslóhoz.

![A bővítmény aktiválva, és átirányítás a varázslóhoz](/img/installation/plugin-activated.png)

## Beállítási varázsló

A beállítási varázsló végigvezeti Önt az Ultimate Multisite konfigurálásán, ami körülbelül 10 percet vesz igénybe.

### Üdvözöljük

Kattintson a **Kezdés** gombra a folytatáshoz.

![A beállítási varázsló üdvözlő képernyője](/img/installation/wizard-welcome.png)

### Előtelepítési ellenőrzések

Ez a lépés ellenőrzi a rendszerinformációkat és a WordPress telepítését, hogy megbizonyosodjon arról, hogy megfelelnek-e az Ultimate Multisite követelményeinek. Ha minden rendben van, kattintson a **Menjen a következő lépésre** gombra.

![Az előtelepítési ellenőrzések megjelenítik a rendszerkövetelményeket](/img/installation/wizard-pre-install-checks.png)

:::note Hálózati aktiválás gomb (v2.6.1+)
Ha az Ultimate Multisite telepítve van, de **még nem lett hálózaton aktiválva** – például ha a „Aktiválás” (egyes webhelyhez tartozó) helyett a „Hálózati aktiválás” gombra kattintott a hálózati bővítmények képernyőjén –, akkor az előtelepítési ellenőrzések lépése felismeri ezt, és megjeleníti egy **Hálózati aktiválás** gombot.

A **Hálózati aktiválás** gombra kattintva automatikusan aktiválja a bővítményt a teljes multisite hálózatában. Az aktiválás után a varázsló normál módon folytatódik a telepítési lépéssel. Nem kell elhagynia a varázslót az aktiválási állapot javításához.
:::

### Telepítés

A telepítő létrehozza a szükséges adatbázis-táblákat, és telepíti a `sunrise.php` fájlt, amelyre az Ultimate Multisite-nak szüksége van a működéshez. Kattintson a **Telepítés** gombra a folytatáshoz.

![A telepítési lépés megjeleníti az adatbázis-táblákat és a sunrise.php fájlt](/img/installation/wizard-installation.png)

### Cégadatai

Töltse ki cége adatait, és állítsa be az alapértelmezett pénznemet. Ezeket az információkat a WaaS platformján fogja használni. A kész után kattintson a **Folytatás** gombra.

![A „Cégadatai” konfigurációs lépése](/img/installation/wizard-your-company.png)

### Alapértelmezett tartalom

Ez a lépés lehetővé teszi, hogy telepítsen előre definiált sablonokat, termékeket és más alapvető tartalmakat. Ez egy nagyszerű módja annak, hogy megismerje az Ultimate Multisite funkcióit. Kattintson a **Telepítés** gombra, ha hozzá szeretné adni az alapértelmezett tartalmat, vagy hagyja ki ezt a lépést, ha inkább a semmiből szeretne elindulni.

![Az alapértelmezett tartalom telepítési lépése](/img/installation/wizard-default-content.png)

### Ajánlott bővítmények

Opcionálisan telepítheti az ajánlott kiegészítő bővítményeket. Kattintson a **Telepítés** gombra, ha hozzá szeretné adni őket, vagy hagyja ki, hogy folytathassa.

![Az ajánlott bővítmények lépése](/img/installation/wizard-recommended-plugins.png)

### Kész!

Ennyi! Az Ultimate Multisite telepítése befejeződött. Most már elkezdheti a Website as a Service platform építését a **Hálózati adminisztrációs panelről**.

![A beállítás befejezve – „Kész” képernyő](/img/installation/wizard-ready.png)

![A Hálózati adminisztrációs panelen az Ultimate Multisite aktiválva van](/img/installation/network-dashboard.png)

Megyünk, és szórakozzunk!
