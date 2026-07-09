---
title: Kiadási megjegyzések
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Kiadási megjegyzések

## 2.13.0 verzió — Kiadva: 2026-06-05

- Új: Szuverén bérlői támogatás hozzáadva az ügyfélfiók-, checkout-, számlázási, webhely-, számla-, sablonváltási és domaintérképezési folyamatokhoz, hogy a bérlői hálózatok az ügyfeleket a fő webhelyre irányíthassák vissza a kezelt műveletekhez.
- Új: Megújítási hitelesítőadat-ellenőrzések hozzáadva az ismétlődő tagságokhoz, hogy az átjárók letilthassák az automatikus megújítást, ha hiányzik egy mentett számlázási megállapodás, subscription vagy vault token.
- Új: HMAC által ellenőrzött loopback közzététel hozzáadva a függőben lévő webhelylétrehozáshoz, hogy a checkoutból webhelyre történő kiépítés megbízhatóbb legyen olyan tárhelyeken, ahol a háttérfeladatok késnek.
- Új: Fejlesztői bővítési pontok hozzáadva az SSO URL-ekhez, a checkout-űrlap alapdomainjeihez és az automatikus domainrekord-létrehozáshoz.
- Javítás: Az SSO megbízhatóbb a leképezett domaineken, az anonim broker látogatásoknál, a kijelentkezésnél és a pluginek közötti függőségi ütközéseknél.
- Javítás: A függőben lévő webhelylétrehozás most helyreáll az elavult közzétételi jelzőkből, és elkerüli, hogy az ügyfelek a webhelylétrehozási képernyőn ragadjanak.
- Javítás: A domainrekordok többé nem jönnek létre megosztott checkout-űrlap alapdomainekhez, és a nem használt tárhelyszolgáltatói háttérfeladatok kimaradnak, ha nincs aktív integráció.
- Javítás: A checkout, számlázási cím, jelszó-visszaállítás, e-mail-ellenőrzés, sablonváltás, bemutatók és ügyfél-dashboard szélső esetei többé nem blokkolják a normál ügyfélfolyamatokat.
- Javítás: A broadcast e-mailek most privátként tartják meg a címzetteket, miközben elkerülik az SMTP/plugin végzetes hibákat, amikor a címzettlisták vagy a levélküldési továbbítók hibáznak.
- Javítás: A tagsági megújítások, a lejárati megjelenítés és a fizetésbeszedési szélső esetek most elkerülik az azonnali lejáratokat, összeomlásokat vagy a kötelező fizetések elmulasztását.
- Fejlesztés: A WordPress-kompatibilitás 7.0-ig tesztelve van, a production Vue assetek újraépültek npm-forrásokból, és a Cypress end-to-end lefedettség most több checkout-, beállítási, SSO- és átjárófolyamatot gyakorol.

## 2.12.0 verzió — Kiadva: 2026-05-15

- Új: A Hostinger (hPanel) támogatott tárhelyszolgáltatóként hozzáadva domaintérképezési integrációval
- Új: A Site Exporter most kezeli a hálózati importcsomagokat az egyszerűsített, hálózatszintű webhely-helyreállításhoz
- Javítás: A BCC broadcast e-mailek most undisclosed-recipients fejlécet használnak, hogy megakadályozzák a címzettcímek felfedését
- Javítás: A tagság lejárati dátuma többé nem sérül, amikor nem dátum értékkel mentik
- Javítás: A Stripe tagságfrissítései most helyesen törlik a kedvezményeket az elavult deleteDiscount API hívása nélkül
- Javítás: A domaintérképezett webhelyeken az SSO átirányítások most korlátozva vannak, hogy megakadályozzák a végtelen átirányítási ciklusokat
- Javítás: A beállítási varázsló képválasztó kijelölése most helyesen frissíti az alapul szolgáló adatmodellt
- Javítás: A Site Exporter CLI most megőrzi a helyes alapértelmezett hálózati webhelyválasztást
- Fejlesztés: Az összecsomagolt wp-cli eltávolítva a plugin csomagból, csökkentve a plugin méretét

## 2.11.0 verzió — Kiadva: 2026-05-11

- Új: A webhelyexportok most egy önindító `index.php` fájlt csomagolnak be, így a ZIP külön plugin telepítése nélkül telepíthető egy friss tárhelyre.
- Új: A hálózati export lehetővé teszi az adminisztrátoroknak, hogy az összes alwebhelyet egyetlen archívumba exportálják a Site Export admin oldaláról.
- Új: Az Allow Site Templates csomagkapcsoló most tartalékláncon keresztül van érvényesítve, helyesen korlátozva a sablonok elérhetőségét a csomagkorlátokhoz.
- Új: A checkout-űrlapszerkesztő figyelmeztet, ha egy termék hozzáadása kötelező mező konfigurálása nélkül történik.
- Új: Az Import/Export beállítási fül most egyértelműen leírja a hatókörét, és közvetlenül a Site Export eszközre hivatkozik.

## 2.10.0 verzió — Kiadva: 2026-05-05

- Új: PayPal vezetett beállítási varázsló kézi hitelesítőadat-megadáshoz OAuth jelzőkapuval a zökkenőmentes átjárókonfigurációhoz.
- Új: A sablonváltási ügyfélpanel újratervezve aktuális sablon kártyával, tartós ráccsal és **Aktuális sablon visszaállítása** gombbal.
- Javítás: A sablonváltás többé nem akasztja meg a UI-t AJAX-hiba esetén.
- Javítás: A sablonváltási jogosultsági állapotok védve lettek a jogosulatlan hozzáféréssel szemben.
- Javítás: A webhely-felülírási bemenetek mentés előtt érvényesítve.
- Javítás: A számlázási cím bekérése most megjelenik, amikor a cím üres.
- Javítás: A PHP 8.1 null-to-string elavulási értesítései megoldva.
- Javítás: A Currents lustán betöltve az init hook előtt az időzítési problémák megelőzésére.
- Javítás: A szűrt SSO útvonal minden bejelentkezési folyamatban tiszteletben van tartva.
- Javítás: Az üres webhelyazonossági beállítások mentéskor megőrződnek.

## 2.9.0 verzió — Kiadva: 2026-04-30

- Új: Egywebhelyes export és import hozzáadva az **Eszközök > Export és import** alatt.
- Javítás: Az export ZIP-fájlok most hitelesített letöltési endpointon keresztül kerülnek kiszolgálásra.
- Javítás: Az SQL-injekciós kockázat és a lekérdezési problémák a függő export/import lekérdezésekben javítva.
- Javítás: A függőben lévő webhely nem kerül közzétételre, amikor az admin manuálisan ellenőrzi az ügyfél e-mailjét.
- Javítás: Az árva pending_site rekordok törlődnek, amikor a tagság hiányzik.
- Javítás: A beállítási navigáció kitöltése és a keresési horgony navigáció javítva.
- Javítás: A függőben lévő webhelyek most elsőként jelennek meg az All Sites nézetben.
- Javítás: Screenshot szolgáltató (mShots) User-Agent header hozzáadva a 403 hibák megelőzésére.
- Javítás: Az import cron ütemezés körkörös függősége megoldva.
- Javítás: A bemutatóazonosítók aláhúzásjelekké normalizálva a felhasználói beállításkulcsokban.
- Fejlesztés: A jobb kompatibilitás érdekében most ZipArchive használatos az Alchemy/Zippy helyett.

## 2.8.0 verzió — Kiadva: 2026-04-29

- Új: Enable Jumper kapcsoló hozzáadva az Other Options beállítási UI-hoz.
- Új: Status oszlop hozzáadva a checkout űrlapok listatáblájához.
- Új: Addon sunrise fájlbetöltő egyéni MU plugin sunrise bővítményekhez.
- Javítva: Hibajelentési opt-in beállítás eltávolítva a beállítások oldaláról.
- Javítás: Köszönőoldali webhelykártya — a kép most korlátozott méretű, és a linkek megfelelően vannak stílusozva.
- Javítás: A képernyőkép-szolgáltató thum.io-ról WordPress.com mShots-ra váltott.
- Javítás: Az Enable Registration és Default Role most helyes alapértelmezéseket állít be friss telepítéskor.
- Javítás: A `get_site_url()` többé nem ad vissza üreset, ha a domain portot tartalmaz.
- Javítás: A klónozott médiafájlok most megfelelően másolódnak, amikor a `copy_media` beállítás üres volt.
- Javítás: Az objektum-gyorsítótár megfelelően érvénytelenítésre kerül a hálózati aktiválású sitemeta írás után.
- Javítás: Az egyéni domain automatikusan elsődlegessé léptetődik elő DNS-ellenőrzéskor 3 részből álló domaineknél.
- Javítás: A függőben lévő tagság törlésre kerül, amikor a lejárt fizetés megtisztításra kerül.
- Javítás: A jelszóerősség-ellenőrző újrakötése az inline bejelentkezési prompt elutasítása után.
- Javítás: Végtelen oldal-újratöltés megszüntetve a köszönőoldalon, amikor a webhely már létrejött.
- Javítás: A WP core regisztrációs opció szinkronizálva plugin aktiváláskor és a beállítások mentésekor.
- Javítás: Null lejárati védelem hozzáadva a `calculate_expiration` függvényben a PHP 8.4 kompatibilitás érdekében.
- Javítás: Az ismétlődő regisztrációk blokkolva, amikor az ügyfélnek már van aktív tagsága.
- Javítás: Null ellenőrzés hozzáadva a `date_expiration` mezőhöz checkout során.
- Javítás: Webhely-létrehozás megerősítve — korlátozások, tagság kikövetkeztetése, domain előléptetése.
- Javítás: Előtelepítési ellenőrzés állapotcímkéje javítva NOT Activated értékre, amikor az ellenőrzés sikertelen.
- Javítás: Checkout domain használata az e-mail-ellenőrzési URL-ekhez.
- Javítás: Automatikus bejelentkezés checkout után, amikor nincs jelszómező.
- Javítás: Az ingyenes tagságok többé nem járnak le — élethosszig tartóként kezelve.
- Javítás: Az e-mail-ellenőrzési kapu visszatartja a webhely közzétételét, amíg az ügyfél nem ellenőrzi az e-mail-címét.
- Javítás: SES v2 API endpoint alapútvonala és identity útvonala javítva.
- Javítás: A `wu_inline_login_error` hook kibocsátása a beküldés előtti catch blokkban.
