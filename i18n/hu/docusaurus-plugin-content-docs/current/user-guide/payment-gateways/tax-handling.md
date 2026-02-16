---
title: Adókezelés
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Adókezelés

Az Ultimate Multisite alapcsomagjában beépített adókezelő modul található, így ha forgalmi adót szeretnél beszedni a csomagjaid és szolgáltatásaid után, azt egyszerűen megteheted bármilyen kiegészítő telepítése nélkül.

Az Európában működő cégek számára kínálunk egy **kiegészítőt**, amely további eszközöket és funkciókat biztosít az **áfakötelezettségek** teljesítéséhez.

Az Ultimate Multisite nem nyújt be adóbevallást és nem fizeti be helyetted az adókat a hatóságoknak; csupán segít a megfelelő adók beszedésében a tranzakció időpontjában. **Az adókat továbbra is neked kell bevallanod és befizetned.**

## Az adóbeszedés engedélyezése

Az adóbeszedés alapértelmezetten nincs bekapcsolva. Az engedélyezéshez menj az **Ultimate Multisite > Settings > Taxes** menüpontra, és kapcsold be az Enable Taxes beállítást.

![Enable Taxes kapcsoló az adóbeállításokban](/img/config/settings-taxes.png)

### Adó nélküli és adóval együttes ár

Alapértelmezetten minden termékár nettó, vagyis az adó **nincs benne** a termék árában. Ha megállapítjuk, hogy egy vásárlónak adót kell fizetnie az adott vásárlás után, az adót a részösszeghez **hozzáadjuk**.

Ha szeretnéd, hogy az árak már tartalmazzák az adót, ezt az **Inclusive Tax** beállítás bekapcsolásával teheted meg.

![Inclusive Tax beállítás kapcsolója](/img/config/settings-taxes.png)

Ne felejtsd el **menteni** a módosításokat.

### 

## Adókulcsok létrehozása

Az adóbeszedés engedélyezése után létre kell hoznod adókulcsokat az egyes helyszínekhez az adókulcs-szerkesztőnkben.

A szerkesztőt a **Manage Tax Rates** gombra kattintva éred el, amely az adóbeállítások oldal oldalsávjában található.

![Manage Tax Rates gomb az oldalsávban](/img/config/settings-taxes.png)

Az adókulcs-szerkesztő oldalon az **Add new Row** gombra kattintva adhatsz hozzá új adókulcsokat.

![Adókulcs-szerkesztő az Add new Row gombbal](/img/config/settings-taxes.png)

Minden adókulcsnak adj egy **címet** (ez jelenik meg a számlákon). Ezután válaszd ki az **országot** (kötelező), az **államot/megyét** és a **várost** (mindkettő opcionális), ahol ez az adó érvényes. Végül add meg az **adókulcsot százalékban**.

### Adókategóriák

Több adókategóriát is létrehozhatsz, hogy különböző termékekhez különböző adókulcsokat rendelj.

Kattints az **Add new Tax Category** gombra, írd be a kategória nevét, majd nyomd meg a **Create** gombot.

![Add new Tax Category gomb](/img/config/settings-taxes.png)

![Új adókategória létrehozása](/img/config/settings-taxes.png)

A kategóriák közötti váltáshoz kattints a **Switch** gombra, majd válaszd ki azt a kategóriát, amelyikhez új adókat szeretnél hozzáadni.

![Váltás az adókategóriák között](/img/config/settings-taxes.png)

![Adókategória kiválasztása megtekintéshez](/img/config/settings-taxes.png)

Egy adott termékhez a **termékszerkesztő oldalon** állíthatod be az adókategóriát a Taxes fülre lépve.

![Termék Taxes füle adókategóriával és adókötelesség kapcsolóval](/img/config/product-taxes.png)

Ugyanezen a képernyőn kikapcsolhatod az **Is Taxable?** kapcsolót, ha azt szeretnéd, hogy az Ultimate Multisite ne szedjen be adót az adott termék után.

## Európai áfatámogatás

Ahogy korábban említettük, az EU-ban működő ügyfelek számára kínálunk egy kiegészítőt, amely segít megfelelni az európai áfaszabályozás további követelményeinek.

Az áfaeszközeink néhány fontos dologban segítenek:

  * EU-s áfakulcsok egyszerű betöltése;

  * Adószám gyűjtése és ellenőrzése – valamint fordított adózás az áfamentes szervezetek számára (például érvényes adószámmal rendelkező cégek);

A kiegészítő telepítéséhez menj az **Ultimate Multisite > Settings** menüpontra, majd kattints a **Check our Add-ons** linkre az oldalsávban.

![Beállítások oldal a kiegészítők oldalsáv linkkel](/img/config/settings-taxes.png)

Átirányítunk a kiegészítők oldalára. Itt keresd meg az **Ultimate Multisite VAT add-on** kiegészítőt és telepítsd.

![VAT kiegészítő a kiegészítők oldalán](/img/config/settings-taxes.png)

![VAT kiegészítő telepítési párbeszédablak](/img/config/settings-taxes.png)

Ezután menj a **Network Admin > Plugins** menüpontra, és aktiváld a kiegészítőt hálózatszinten.

![VAT kiegészítő hálózati aktiválása](/img/config/settings-taxes.png)

Ha visszamész az **adóbeállítások fülre**, új opciókat fogsz látni. Kapcsold be az **Enable VAT Support** opciót az új áfaeszközök engedélyezéséhez. Ne felejtsd el **menteni** a beállításokat!

![Enable VAT Support kapcsoló az adóbeállításokban](/img/config/settings-taxes.png)

### Áfakulcsok lekérése

Az integráció egyik eszköze lehetővé teszi az EU tagállamok áfakulcsainak betöltését. Ezt az adókulcs-szerkesztő oldalon teheted meg, miután engedélyezted az EU áfatámogatást.

Az oldal alján találod az áfalekérési opciókat. Válassz egy kulcstípust, és kattints az **Update EU VAT Rates** gombra – ezzel automatikusan betöltődnek és kitöltődnek a táblázatban az egyes EU tagállamok áfakulcsai. Ezután már csak mentened kell.

### ![Áfalekérési opciók az Update EU VAT Rates gombbal](/img/config/settings-taxes.png)

A lekért értékeket utólag is szerkesztheted. Ehhez egyszerűen módosítsd a kívánt sort a táblázatban, majd kattints a mentésre.

### Adószám-ellenőrzés

Ha az áfatámogatás engedélyezve van, az Ultimate Multisite egy további mezőt jelenít meg a pénztár oldalon, a számlázási cím mező alatt. Ez a mező csak az EU-ban található vásárlók számára látható.

![Adószám mező a pénztár oldalon](/img/config/settings-taxes.png)

Az Ultimate Multisite ellenőrzi az adószámot, és ha az érvényes, a fordított adózás mechanizmusa lép életbe, így a rendelés adókulcsa 0%-ra csökken.
