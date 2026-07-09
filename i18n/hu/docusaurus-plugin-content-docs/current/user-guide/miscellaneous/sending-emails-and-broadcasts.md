---
title: E-mailek és körlevelek küldése
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# E-mailek és Broadcasts küldése (v2) {#sending-emails-and-broadcasts-v2}

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az Ultimate Multisite olyan funkcióval érkezik, amely lehetővé teszi, hogy kommunikálj az ügyfeleiddel úgy, hogy e-mailt küldesz egy célzott felhasználónak vagy felhasználói csoportnak, valamint értesítéseket küldesz az admin dashboardjukra bejelentések közvetítéséhez

## Admin értesítések hozzáadása az ügyfeleid dashboardjához Broadcasts segítségével {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Az Ultimate Multisite broadcast funkciójával **admin értesítéseket** adhatsz hozzá a felhasználód aloldalának admin dashboardjához.

Ez rendkívül hasznos, ha olyan bejelentést kell tenned, mint a rendszerkarbantartás, vagy új termékek vagy szolgáltatások ajánlása a meglévő felhasználóidnak. Így fog kinézni az admin értesítés a felhasználód dashboardján.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Admin értesítés indításához lépj a hálózati admin dashboardra, és az **Ultimate Multisite** menü alatt megtalálod a **Broadcasts** lehetőséget.

![Broadcasts listaoldal az Ultimate Multisite adminban](/img/admin/broadcasts-list.png)

A meglévő broadcasts elemeket is szerkesztheted:

![Broadcast szerkesztőfelület](/img/admin/broadcast-edit.png)

Ezen az oldalon kattints felül az **Add Broadcast** gombra.

Ekkor megjelenik az Add broadcast modális ablak, ahol kiválaszthatod, milyen típusú broadcastot szeretnél küldeni.

Válaszd a **Message** lehetőséget, majd kattints a **Next Step** gombra.

![Add broadcast modális ablak a Message opció kiválasztásával](/img/admin/broadcast-add-message.png)

A következő ablak a **Target customer** vagy a **Target product** megadását kéri. Vedd figyelembe, hogy egynél több felhasználót vagy egynél több terméket is kiválaszthatsz.

Felhasználói fiók vagy termék kereséséhez el kell kezdened beírni a kulcsszót a mezőbe.

A **Message type** mező alatt kiválaszthatod az értesítés színét. Ez kiemeli az üzeneted sürgősségét.

Ezután kattinthatsz a **Next Step** gombra.

![Célügyfelek, céltermék és üzenettípus mezők egy Message broadcasthoz](/img/admin/broadcast-message-targets.png)

A következő ablakban kezdheted el megírni az üzenetedet úgy, hogy megadod a tárgyat és a felhasználóknak broadcastolni kívánt tartalmat/üzenetet.

![Broadcast üzenet tárgy- és tartalomszerkesztője a szerkesztési lépésben](/img/admin/broadcast-edit.png)

Az üzeneted létrehozása után megnyomhatod a **Send** gombot.

És ennyi. Az admin értesítésnek azonnal meg kell jelennie a felhasználód dashboardján.

## E-mailek küldése az ügyfeleidnek {#send-emails-to-your-customers}

Az Ultimate Multisite broadcast funkciójával e-mailt küldhetsz a felhasználóidnak. Lehetőséged van arra, hogy az e-mailt csak meghatározott felhasználóknak küldd el, vagy egy konkrét felhasználói csoportot célozz meg az alapján, hogy melyik termékre vagy planra vannak előfizetve.

E-mail broadcast indításához lépj a hálózati admin dashboardra, és az Ultimate Multisite menü alatt megtalálod a Broadcast lehetőséget.

![Broadcasts listaoldal, amely egy e-mail broadcast kiindulópontjaként használható](/img/admin/broadcasts-list.png)

Ezen az oldalon kattints felül az **Add broadcast** gombra.

Ekkor megjelenik az Add broadcast modális ablak, ahol kiválaszthatod, milyen típusú broadcastot szeretnél küldeni. Válaszd az **Email** lehetőséget, majd kattints a **Next Step** gombra.

![Add broadcast modális ablak az Email opció kiválasztásával](/img/admin/broadcast-add-email.png)

A következő ablak a **Target customer** vagy a **Target produc** t megadását kéri. Vedd figyelembe, hogy egynél több felhasználót vagy egynél több terméket is kiválaszthatsz.

Felhasználói fiók vagy termék kereséséhez el kell kezdened beírni a kulcsszót a mezőbe.

Miután kiválasztottad a célközönségedet, kattinthatsz a **Next Step** gombra.

![Célügyfelek és céltermék kiválasztása egy Email broadcasthoz](/img/admin/broadcast-email-targets.png)

A következő ablakban kezdheted el megírni az e-mailedet úgy, hogy megadod a tárgyat és a felhasználóknak elküldeni kívánt tartalmat/üzenetet.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Az üzeneted létrehozása után megnyomhatod a **Send** gombot.

És ilyen egyszerű e-mailt küldeni a végfelhasználóidnak a broadcast funkció használatával.

## Rendszer e-mailek {#system-emails}

Az Ultimate Multisite rendszer e-mailjei azok az **automatikus értesítések**, amelyeket a rendszer küld bizonyos műveletek után, például regisztráció, fizetés, domain-leképezés stb. Ezek az e-mailek szerkeszthetők vagy módosíthatók az Ultimate Multisite beállításaiból. Emellett olyan funkcióval is rendelkezik, amely lehetővé teszi a meglévő beállítások visszaállítását és importálását egy másik Ultimate Multisite telepítésből.

### Visszaállítás és importálás {#resetting--importing}

Az új Ultimate Multisite verziók, valamint a kiegészítők időről időre új e-maileket regisztrálhatnak és regisztrálni is fognak.

Az ütközések és más problémák elkerülése érdekében **nem adjuk hozzá automatikusan az új e-mail sablonokat System Emails elemként a telepítésedhez** , kivéve, ha létfontosságúak egy adott funkció helyes működéséhez.

A super adminok és ügynökök azonban importálhatják ezeket az újonnan regisztrált e-maileket az importáló eszközzel. Ez a folyamat új rendszer e-mailt hoz létre az új e-mail sablon tartalmával és konfigurációjával, lehetővé téve a super admin számára, hogy elvégezze a kívánt módosításokat, vagy változatlanul megtartsa őket.

#### Rendszer e-mailek importálása {#how-to-import-system-emails}

Lépj az Ultimate Multisite Settings oldaladra, és menj az **Emails** fülre.

![Emails fül az Ultimate Multisite beállításaiban, a System Emails szakasz megjelenítésével](/img/config/settings-emails-tab.png)

Ezután az oldalsávon kattints a **Customize System Emails** gombra.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

A System Emails oldalon felül látni fogod a **Reset & Import** műveletgombot. Erre a gombra kattintva meg kell nyílnia az importálási és visszaállítási modális ablaknak.

![Reset vagy Import műveletgomb a System Emails admin oldalon](/img/admin/system-emails-reset-import.png)

Ezután bekapcsolhatod az Import Emails opciókat, hogy lásd, mely rendszer e-mailek importálhatók.

<!-- Képernyőkép nem érhető el: Visszaállítás és importálás modális ablak kibontott E-mailek importálása beállításokkal -->

#### Rendszer e-mailek visszaállítása {#reseting-system-emails}

Máskor előfordulhat, hogy rájössz: az adott e-mail sablonon végzett módosítások már nem megfelelőek számodra, és szeretnéd visszaállítani az **alapértelmezett állapotára**.

Ilyen esetekben két lehetőséged van: egyszerűen törölheted a rendszer e-mailt, majd újra importálhatod (a fenti utasításokkal) – ez azonban törli a küldési mutatókat és egyéb adatokat, ezért ez a módszer a legkevésbé ajánlott.

Vagy használhatod a **Visszaállítás és importálás eszközt** az e-mail sablon visszaállításához.

E-mail sablon visszaállításához kövesd a fenti lépéseket, amíg el nem éred a Visszaállítás és importálás eszközt, majd kapcsold be a **Visszaállítás** lehetőséget, és válaszd ki azokat az e-maileket, amelyeket vissza szeretnél állítani az alapértelmezett tartalmukra.

<!-- Képernyőkép nem érhető el: Visszaállítás és importálás modális ablak kibontott E-mailek visszaállítása beállításokkal -->
