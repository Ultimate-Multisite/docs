---
title: E-mailek és hírlevelek küldése
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# E-mailek és üzenetek küldése (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az Ultimate Multisite rendelkezik egy funkcióval, amellyel kommunikálhatsz ügyfeleidkel: e-mailt küldhetsz egy adott felhasználónak vagy felhasználók egy csoportjának, valamint értesítéseket jeleníthetsz meg az adminisztrációs felületükön, hogy bejelentéseket tehess közzé.

## Adminisztrációs értesítések hozzáadása az ügyfelek vezérlőpultjához

Az Ultimate Multisite broadcast funkciójával **adminisztrációs értesítéseket** adhatsz hozzá a felhasználóid aloldal admin vezérlőpultjához.

Ez rendkívül hasznos, ha bejelentést kell tenned, például rendszerkarbantartásról, vagy új termékeket és szolgáltatásokat szeretnél ajánlani meglévő felhasználóidnak. Így fog kinézni az adminisztrációs értesítés a felhasználó vezérlőpultján.

![Adminisztrációs értesítés az ügyfél vezérlőpultján](/img/admin/broadcasts-list.png)

Adminisztrációs értesítés létrehozásához lépj a hálózati admin vezérlőpultra, és az **Ultimate Multisite** menü alatt megtalálod a **Broadcasts** opciót.

![Broadcasts menü az Ultimate Multisite adminban](/img/admin/broadcasts-list.png)

Ezen az oldalon kattints a felső **Add Broadcast** gombra.

Megjelenik az Add broadcast modális ablak, ahol kiválaszthatod, milyen típusú üzenetet szeretnél küldeni.

Válaszd ki a **Message** opciót, majd kattints a **Next Step** gombra.

![Add broadcast modális ablak a Message típus kiválasztásával](/img/admin/broadcasts-list.png)

A következő ablakban megadhatod a **Target customer** vagy **Target product** értékét. Vedd figyelembe, hogy egynél több felhasználót vagy terméket is kiválaszthatsz.

Felhasználói fiók vagy termék kereséséhez kezdd el beírni a kulcsszót a mezőbe.

A **Message type** mezőben kiválaszthatod az értesítés színét. Ez kiemeli az üzeneted sürgősségét.

Ezután kattints a **Next Step** gombra.

![Célügyfél és termék kiválasztása a broadcast-hoz](/img/admin/broadcasts-list.png)

A következő ablakban megírhatod az üzenetedet: add meg a tárgyat és a tartalmat, amit közölni szeretnél a felhasználókkal.

![Broadcast üzenet tárgya és tartalomszerkesztője](/img/admin/broadcasts-list.png)

Az üzenet elkészítése után kattints a **Send** gombra.

Ennyi az egész. Az adminisztrációs értesítés azonnal megjelenik a felhasználó vezérlőpultján.

## E-mailek küldése az ügyfeleknek

Az Ultimate Multisite broadcast funkciójával e-mailt küldhetsz a felhasználóidnak. Lehetőséged van csak bizonyos felhasználóknak küldeni az e-mailt, vagy megcélozni egy adott felhasználói csoportot aszerint, hogy melyik termékre vagy csomagra vannak előfizetve.

E-mail broadcast indításához lépj a hálózati admin vezérlőpultra, és az Ultimate Multisite menü alatt megtalálod a Broadcast opciót.

![Broadcasts oldal az Ultimate Multisite adminban](/img/admin/broadcasts-list.png)

Ezen az oldalon kattints a felső **Add broadcast** gombra.

Megjelenik az Add broadcast modális ablak, ahol kiválaszthatod, milyen típusú üzenetet szeretnél küldeni. Válaszd ki az **Email** opciót, majd kattints a **Next Step** gombra.

![Add broadcast modális ablak az Email típus kiválasztásával](/img/admin/broadcasts-list.png)

A következő ablakban megadhatod a **Target customer** vagy **Target product** értékét. Vedd figyelembe, hogy egynél több felhasználót vagy terméket is kiválaszthatsz.

Felhasználói fiók vagy termék kereséséhez kezdd el beírni a kulcsszót a mezőbe.

Miután kiválasztottad a célközönséget, kattints a **Next Step** gombra.

![Célügyfél és termék kiválasztása az e-mail broadcast-hoz](/img/admin/broadcasts-list.png)

A következő ablakban megírhatod az e-mailedet: add meg a tárgyat és a tartalmat, amit el szeretnél küldeni a felhasználóknak.

![E-mail broadcast tárgya és tartalomszerkesztője](/img/admin/broadcasts-list.png)

Az üzenet elkészítése után kattints a **Send** gombra.

Ilyen egyszerű e-mailt küldeni a végfelhasználóidnak a broadcast funkcióval.

## Rendszer e-mailek

Az Ultimate Multisite rendszer e-mailjei azok az **automatikus értesítések**, amelyeket a rendszer küld bizonyos műveletek után, mint például regisztráció, fizetés, domain mapping stb. Ezeket az e-maileket az Ultimate Multisite beállításaiban szerkesztheted vagy módosíthatod. Emellett lehetőséged van a beállítások visszaállítására és meglévő beállítások importálására egy másik Ultimate Multisite telepítésből.

### Visszaállítás és importálás

Az Ultimate Multisite új verziói és a kiegészítők időről időre új e-maileket regisztrálhatnak.

A konfliktusok és egyéb problémák elkerülése érdekében **az új e-mail sablonokat nem adjuk hozzá automatikusan rendszer e-mailként a telepítésedhez**, kivéve, ha azok elengedhetetlenek egy adott funkció megfelelő működéséhez.

A szuperadminok és ügynökök azonban importálhatják ezeket az újonnan regisztrált e-maileket az importáló eszközzel. Ez a folyamat új rendszer e-mailt hoz létre az új e-mail sablon tartalmával és konfigurációjával, lehetővé téve a szuperadminnak, hogy bármilyen módosítást végezzen, vagy megtartsa őket változatlanul.

#### Rendszer e-mailek importálása

Lépj az Ultimate Multisite Settings oldalra, és navigálj az **Emails** fülre.

![Emails fül az Ultimate Multisite beállításokban](/img/config/settings-emails.png)

Ezután az oldalsávon kattints a **Customize System Emails** gombra.

![Customize System Emails gomb az oldalsávon](/img/config/settings-emails.png)

A System Emails oldalon a tetején látni fogod a **Reset & Import** műveletgombot. Erre kattintva megnyílik az importálási és visszaállítási modális ablak.

![Reset and Import műveletgomb a System Emails oldalon](/img/config/settings-emails.png)

Ezután kapcsold be az Import Emails opciót, hogy lásd, mely rendszer e-mailek importálhatók.

![Import Emails opciók az elérhető rendszer e-mailekkel](/img/config/settings-emails.png)

#### Rendszer e-mailek visszaállítása

Előfordulhat, hogy rájössz: az e-mail sablonon végzett módosítások már nem felelnek meg az igényeidnek, és szeretnéd visszaállítani az **alapértelmezett állapotba**.

Ilyen esetekben két lehetőséged van: egyszerűen törölheted a rendszer e-mailt és újra importálhatod (a fenti utasítások szerint) – ez azonban törli a küldési statisztikákat és egyéb adatokat, ezért ez a kevésbé ajánlott módszer.

Vagy használhatod a **Reset & Import eszközt** az e-mail sablon visszaállításához.

E-mail sablon visszaállításához kövesd a fenti lépéseket, amíg el nem éred a Reset & Import eszközt, majd kapcsold be a **Reset** opciót, és válaszd ki azokat az e-maileket, amelyeket vissza szeretnél állítani az alapértelmezett tartalomra.

![Reset opció az e-mail sablonok alapértelmezett állapotba állításához](/img/config/settings-emails.png)
