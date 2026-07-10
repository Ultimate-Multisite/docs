---
title: Beállítás és szolgáltató konfigurációja
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Beállítás és szolgáltatói konfiguráció {#domain-seller-setup-and-provider-configuration}

A Domain Seller addon egy vezetett beállítási varázslót tartalmaz, amely végigvezet minden szükséges lépésen. Ez az oldal a varázsló folyamatát, valamint a szolgáltatók későbbi konfigurálását vagy újrakonfigurálását ismerteti.

## Követelmények {#requirements}

- **Multisite Ultimate** v2.4.12 vagy újabb, hálózati szinten aktiválva
- **PHP** 7.4+
- API hitelesítő adatok legalább egy támogatott regisztrátorhoz

## Első futtatásos beállítási varázsló {#first-run-setup-wizard}

A beállítási varázsló automatikusan elindul, amikor először hálózati szinten aktiválod a plugin-t. Bármikor elérhető innen is: **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### 1. lépés — Szolgáltató kiválasztása {#step-1--choose-a-provider}

Válaszd ki a regisztrátort, amelyhez csatlakozni szeretnél. Támogatott lehetőségek:

| Szolgáltató | DNS-kezelés | WHOIS-adatvédelem |
|---|---|---|
| OpenSRS | Igen | Igen |
| Namecheap | Nem | Igen (WhoisGuard, ingyenes) |
| HostAfrica | Igen | Igen (azonosítóvédelem) |
| Openprovider | Igen | Igen |
| Hostinger | Az alap Hostinger doménleképezésen keresztül hosztolt doménekhez | Igen |
| GoDaddy | Nem | Nem |
| ResellerClub | Igen | Nem |
| NameSilo | Nem | Nem |
| Enom | Igen | Nem |

### 2. lépés — Hitelesítő adatok megadása {#step-2--enter-credentials}

Minden szolgáltatónál eltérő hitelesítési mezők vannak:

**OpenSRS** — Felhasználónév és privát kulcs (az OpenSRS Reseller Control Panelből)

**Namecheap** — Felhasználónév és API-kulcs (innen: Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint és hitelesítő adatok a HostAfrica viszonteladói modulból. Jelenleg nincs külön dokumentált sandbox endpoint; éles regisztrációk futtatása előtt biztonságos, csak olvasási ellenőrzésekkel tesztelj.

**Openprovider** — Felhasználónév és jelszó engedélyezett API-hozzáféréssel. Az opcionális sandbox mód az Openprovider sandbox API-t használja, és egy opcionális alapértelmezett ügyfélazonosító újra felhasználható a regisztrációkhoz.

**Hostinger** — A megosztott Hostinger hPanel API token az alap Hostinger integrációból. Ugyanez a token működteti az alap doménleképezést és a Domain Seller regisztrációs műveleteit.

**GoDaddy** — API-kulcs és titok (innen: developer.godaddy.com)

**ResellerClub** — Viszonteladói azonosító és API-kulcs (a ResellerClub vezérlőpultból)

**NameSilo** — API-kulcs (innen: namesilo.com › Account › API Manager)

**Enom** — Account ID és API token

Jelöld be a **Sandbox mód** lehetőséget, ahol elérhető, hogy az élesítés előtt a szolgáltató tesztkörnyezetében tesztelhess.

### 3. lépés — Kapcsolat tesztelése {#step-3--test-the-connection}

Kattints a **Kapcsolat tesztelése** gombra. A varázsló egy könnyű API-hívást küld a hitelesítő adatok és a kapcsolódás ellenőrzésére. A folytatás előtt javítsd ki az esetleges hitelesítési problémákat.

### 4. lépés — TLD-k importálása {#step-4--import-tlds}

Kattints a **TLD-k importálása** gombra az összes elérhető TLD és nagykereskedelmi ár lekéréséhez a csatlakoztatott szolgáltatótól. Ez feltölti a doméntermékek által használt TLD-listát. Az importálás 30–60 másodpercet is igénybe vehet nagy TLD-katalógussal rendelkező szolgáltatóknál.

A TLD-k automatikusan is újraszinkronizálódnak naponta egyszer egy ütemezett cron feladaton keresztül.

### 5. lépés — Doméntermék létrehozása {#step-5--create-a-domain-product}

A varázsló létrehoz egy alapértelmezett, mindenre kiterjedő doménterméket 10%-os felárral. Ezt a terméket azonnal szerkesztheted, vagy kihagyhatod, és manuálisan hozhatsz létre termékeket itt: **Ultimate Multisite › Products**.

A teljes termékkonfigurációs útmutatóért lásd: [Doméntermékek és árazás](./domain-products).

---

## Szolgáltató újrakonfigurálása {#reconfiguring-a-provider}

Lépj ide: **Network Admin › Ultimate Multisite › Settings › Domain Seller** (vagy kattints a **Settings** elemre a plugin-listában).

A beállítási oldal tartalma:

- **Doménértékesítés engedélyezése** — a teljes funkció be-/kikapcsolása
- **Alapértelmezett szolgáltató** — a doménkeresésekhez és új termékekhez használt szolgáltató
- **Keresésenkénti maximális TLD-szám** — hány TLD-t ellenőrizzen, amikor egy ügyfél keres; a magasabb értékek több lehetőséget mutatnak, de lassabbak
- **Elérhetőségi gyorsítótár időtartama** — mennyi ideig gyorsítótárazza az elérhetőségi és árazási eredményeket; az alacsonyabb értékek pontosabbak, de növelik az API-hívások számát
- **Doméntermékek kezelése** — gyorshivatkozás a termékek listájára
- **Szolgáltatók konfigurálása** — megnyitja az Integrációs varázslót szolgáltatók hozzáadásához vagy újrakonfigurálásához

### Második szolgáltató hozzáadása {#adding-a-second-provider}

Kattints a **Szolgáltatók konfigurálása** elemre, és futtasd újra a varázslót az új regisztrátorhoz. Egyszerre több szolgáltató is konfigurálható. Rendelj minden doménterméket egy adott szolgáltatóhoz, vagy hagyd az alapértelmezetten.

### TLD-k manuális szinkronizálása {#syncing-tlds-manually}

A beállítási oldalon kattints a **TLD-k szinkronizálása** elemre bármely konfigurált szolgáltató mellett a legfrissebb árazás lekéréséhez. Ez hasznos, miután egy szolgáltató frissíti a nagykereskedelmi árakat vagy új TLD-ket ad hozzá.

---

## Naplók {#logs}

Minden szolgáltató a saját naplócsatornájába ír. A naplók itt tekinthetők meg: **Network Admin › Ultimate Multisite › Logs**:

| Naplócsatorna | Tartalom |
|---|---|
| `domain-seller-registration` | Minden regisztrációs kísérlet (sikeres és sikertelen) |
| `domain-seller-renewal` | Megújítási feladat eredményei |
| `domain-seller-opensrs` | Nyers OpenSRS API-tevékenység |
| `domain-seller-namecheap` | Nyers Namecheap API-tevékenység |
| `domain-seller-hostafrica` | Nyers HostAfrica API-tevékenység |
| `domain-seller-openprovider` | Nyers Openprovider API-tevékenység |
| `domain-seller-hostinger` | Nyers Hostinger API-tevékenység |
| `domain-seller-godaddy` | Nyers GoDaddy API-tevékenység |
| `domain-seller-resellerclub` | Nyers ResellerClub API-tevékenység |
| `domain-seller-namesilo` | Nyers NameSilo API-tevékenység |
| `domain-seller-enom` | Nyers Enom API-tevékenység |

---

## Szolgáltatói képességekkel kapcsolatos megjegyzések {#provider-capability-notes}

Nem minden regisztrátori API teszi elérhetővé ugyanazokat a műveleteket. Az addon a nem támogatott műveleteket egyértelmű, adminisztrátornak szóló hibákkal jelzi a csendes sikertelenség helyett.

- **HostAfrica** támogatja a legszélesebb élő viszonteladói munkafolyamatot, beleértve a keresést, a TLD/árazás szinkronizálását, a regisztrációt, a megújítást, az átvitelt, a nameserver-frissítéseket, a DNS rekordokat, az EPP-kódokat, a registrar lockot és az ID protectiont.
- **Openprovider** támogatja a viszonteladói áras TLD-szinkronizálást, a regisztrációt, a megújítást, az átvitelt, a nameserver-frissítéseket, a DNS-zónákat, az EPP-kódokat, a registrar lockot és a WHOIS privacyt. Egy rövid élettartamú bearer tokennel hitelesít, amelyet az addon automatikusan frissít.
- **Hostinger** támogatja az elérhetőségi keresést, a regisztrációt, a portfólió-lekérdezést, a nameserver-frissítéseket, a registrar lockot és a WHOIS privacyt a megosztott hPanel API tokenen keresztül. A Hostinger nyilvános Domains API-ja nem teszi elérhetővé a viszonteladói/nagykereskedelmi árazást, a bejövő átvitelt, az explicit megújítást vagy az EPP-kód lekérését; a megújítások csak automatikus megújításként működnek.
