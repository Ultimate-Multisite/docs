---
title: Adókezelés
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Adókezelés

Az Ultimate Multisite rendelkezik egy, a core pluginunkba beépített adóbeszedési modullal, így ha forgalmi adót kell beszedned a csomagjaid, csomagajánlataid és szolgáltatásaid után, ezt könnyedén megteheted bármilyen add-on telepítése nélkül.

Az Európában található vállalatok számára kínálunk egy **add-on**-t, amely eszközöket és funkciókat ad hozzá az áfamegfelelés jobb **támogatásához**.

Az Ultimate Multisite nem nyújt be és nem fizet be adókat a nevedben a kormánynak; mi egyszerűen abban segítünk, hogy a tranzakció időpontjában beszedhesd a megfelelő adókat. **Az adókat továbbra is neked kell befizetned.**

## Adóbeszedés engedélyezése {#enabling-tax-collection}

Az adóbeszedés alapértelmezés szerint nincs engedélyezve. Az engedélyezéséhez menj az **Ultimate Multisite > Settings > Taxes** menüpontra, és kapcsold be az Enable Taxes beállítást.

![Enable Taxes kapcsoló az Tax beállítások oldalának tetején](/img/config/settings-taxes-enable.png)

Íme az adóbeállítások oldal teljes nézete:

![Az Tax beállítások teljes oldala](/img/config/settings-taxes-full.png)

Az egyes termékek adóbeállításait is megtekintheted:

![Termékek adóbeállításai](/img/config/settings-taxes.png)

### Adó kizárva vs. adóval együtt {#tax-excluded-vs-tax-included}

Alapértelmezés szerint minden termékárad adó nélkül értendő, ami azt jelenti, hogy az adók **nincsenek benne** a termék árában. Ha megállapítjuk, hogy egy ügyfélnek adót kell fizetnie egy adott vásárlás után, az adókat az részösszegen **felül** adjuk hozzá.

Ha szeretnéd, hogy az adók benne legyenek a termék árában, ezt az **Inclusive Tax** beállítás engedélyezésével teheted meg.

![Inclusive Tax kapcsoló sora az Enable Taxes beállítás alatt](/img/config/settings-taxes-inclusive.png)

Ne felejtsd el **menteni** a módosításaidat.

###

## Adókulcsok létrehozása {#creating-tax-rates}

Miután engedélyezted az adóbeszedést, létre kell hoznod adókulcsokat bizonyos helyekhez az adókulcs-szerkesztőnk használatával.

A szerkesztőt az Tax beállítások oldal oldalsávján található **Manage Tax Rates** gombra kattintva érheted el.

![Manage Tax Rates hivatkozás az Tax Rates panelen a beállítások oldalon](/img/config/settings-taxes-manage-rates.png)

Az adókulcs-szerkesztő oldalon új adókulcsokat adhatsz hozzá az **Add new Row** gombra kattintva.

![Adókulcs-szerkesztő táblázat Add new Row gombbal a tetején](/img/config/tax-rates-editor.png)

Minden adókulcsnak meg kell adnod egy **címet** (számlákon használva). Ezután kiválaszthatod az **országot** (kötelező), az **államot/megyét,** és a **várost** (mindkettő opcionális), ahol ezt az adót felszámítjuk. Végül add meg az **adókulcsot százalékban**.

### Adókategóriák {#tax-categories}

Több adókategóriát is létrehozhatsz, hogy különböző terméktípusokhoz különböző adókulcsokat adj hozzá.

Kattints az **Add new Tax Category** lehetőségre, majd írd be a kategória nevét, és nyomd meg a **Create** gombot.

![Add new Tax Category gomb az adókulcs-szerkesztő tetején](/img/config/tax-categories-add.png)

![Tax Category Name beviteli mező a kategória létrehozása modális ablakban](/img/config/tax-categories-create-modal.png)

A kategóriák böngészéséhez kattints a **Switch** gombra, és válaszd ki azt a kategóriát, amelyhez új adókat szeretnél hozzáadni.

![Switch legördülő gomb az adókategóriák közötti váltáshoz](/img/config/tax-categories-switch.png)

![Adókategória-választó legördülő menü az elérhető kategóriákkal](/img/config/tax-categories-select.png)

Egy adott termék adókategóriáját a **Product edit page** megnyitásával, majd a Taxes fülre lépve állíthatod be.

![Termék adók füle adókategóriával és adóköteles kapcsolóval](/img/config/product-taxes.png)

Ugyanezen a képernyőn kikapcsolhatod az **Is Taxable?** kapcsolót, hogy jelezd az Ultimate Multisite számára, hogy az adott termék után ne szedjen be adót.

## Európai áfatámogatás {#european-vat-support}

Ahogy korábban említettük, elérhető egy add-on az EU-ban lévő ügyfelek számára, akiknek az európai áfaszabályozás miatt további követelményeknek kell megfelelniük.

Áfaeszközeink néhány fontos dologban segítenek:

  * EU-s áfakulcsok egyszerű betöltése;

  * Áfaszám bekérése és ellenőrzése – valamint fordított adózás áfamentes szervezetek számára (például érvényes áfaszámmal rendelkező vállalatok);

Az add-on telepítéséhez menj az **Ultimate Multisite > Settings** menüpontra, majd kattints az oldalsáv **Check our Add-ons** hivatkozására.

![Settings oldal oldalsávja Check our Add-ons hivatkozással](/img/config/settings-taxes-addons-link.png)

Átirányítunk az add-onok oldalára. Ott megkeresheted az **Ultimate Multisite VAT add-on**-t, és telepítheted.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Ezután menj a **Network Admin > Plugins** menüpontra, és aktiváld az add-on-t a teljes hálózaton.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ha visszatérsz a **Tax Settings tab**-ra, új elérhető beállításokat fogsz látni. Kapcsold be az **Enable VAT Support** opciót az új áfaeszközök engedélyezéséhez. Ne felejtsd el **menteni** a beállításaidat!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Áfakulcsok lekérése {#pulling-on-vat-tax-rates}

Az integrációnk által hozzáadott egyik eszköz az EU-tagállamok adókulcsainak betöltési lehetősége. Ezt az EU-s áfatámogatás engedélyezése után az adókulcs-szerkesztő oldal felkeresésével lehet megtenni.

Az oldal alján látni fogod az áfa-lekérési beállításokat. Egy kulcstípus kiválasztása és az **Update EU VAT Rates** gombra kattintás lekéri és automatikusan kitölti a táblázatot az egyes EU-tagállamok adókulcsaival. Ezután már csak mentened kell.

![Update EU VAT Rates gomb az adókulcs-szerkesztő alján](/img/config/tax-rates-vat-pull.png)

A lekérés után az értékeket is szerkesztheted. Ehhez egyszerűen szerkeszd a szükséges táblázatsort, majd kattints az új értékek mentésére.

### Áfaellenőrzés {#vat-validation}

Amikor az áfatámogatás engedélyezve van, az Ultimate Multisite egy további mezőt ad hozzá a pénztárűrlaphoz, a számlázási cím mező alá. A mező csak az EU-ban található ügyfelek számára jelenik meg.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Az Ultimate Multisite ezután ellenőrzi az adószámot, és ha érvényesnek bizonyul, a fordított adózás mechanizmusa kerül alkalmazásra, és az adókulcs 0%-ra lesz állítva az adott rendelésnél.
