---
title: Beállítás és szolgáltató konfiguráció
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Beállítás és szolgáltató konfiguráció

A Domain Seller addon egy útmutató beállítási varázslóval érkezik, amely minden szükséges lépésen keresztül vezeti felhasználót. Ez az oldal a varázsló folyamatát és azt, hogyan lehet vagy újra lehet konfigurálni a szolgáltatókat.

## Feltételek

- **Multisite Ultimate** v2.4.12 vagy magasabb verzió, hálózat szinten aktiválva
- **PHP** 7.4+
- API hitelesítő adatok legalább egy támogatott regisztrátorhoz

## Első alkalommal történő beállítási varázsló

A beállítási varázsló automatikusan indul el, amikor először hálózat szinten aktiválja a plugin-t. Ügyeljen rá, hogy bármikor elérhető az **Network Admin › Ultimate Multisite › Domain Seller Setup** menüpont alatt.

### 1. lépés — Szolgáltató kiválasztása

Válassza ki azt a regisztrátort, amelyet szeretne csatlakoztatni. Támogatott opciók:

| Provider | DNS kezelése | WHOIS adatvédelem |
|---|---|---|
| OpenSRS | Igen | Igen |
| Namecheap | Nem | Igen (WhoisGuard, ingyenes) |
| GoDaddy | Nem | Nem |
| ResellerClub | Igen | Nem |
| NameSilo | Nem | Nem |
| Enom | Igen | Nem |

### 2. lépés — Hitelesítő adatok megadása

Minden szolgáltató más hitelesítő adathordozó mezőket használ:

**OpenSRS** — Felhasználónév és magán kulcs (az OpenSRS Reseller Control Panel-ből)

**Namecheap** — Felhasználónév és API kulcs (Account › Tools › API Access-ből)

**GoDaddy** — API kulcs és titkos kulcs (developer.godaddy.com-ról)

**ResellerClub** — Reseller ID és API kulcs (a ResellerClub irányítópaddal)

**NameSilo** — API kulcs (namesilo.com › Account › API Manager-ből)

**Enom** — Account ID és API token

Ellenőrizze a **Sandbox mode** opciót, ahol elérhető, hogy a tényleges használat előtt tesztelhesse a szolgáltató tesztkörnyezetén.

### 3. lépés — Kapcsolat tesztelése

Kattintson a **Test Connection** gombra. A varázsló egy könnyű API hívást küld ki a hitelesítő adatok és a kapcsolat ellenőrzése érdekében. Kérjük, javítsa az összes hitelesítő adatproblémát, mielőtt tovább halad.

### 4. lépés — TLD-k importálása

Kattintson az **Import TLDs** gombra, hogy elvegye az összes elérhető TLD-t és a nagykereskedelmi árakat a csatlakoztatott szolgáltatótól. Ez kitölti a domain termékek által használt TLD listát. Az importálás 30–60 másodperces időt igényel nagy TLD katalógussal rendelkező szolgáltatóknál.

A TLD-k naponta egyszer szinkronizálódnak automatikusan egy ütemezett cron job segítségével.

### 5. lépés — Domain termék létrehozása

A varázsló alapértelmezett, minden lehetséges domain-t fogó (catch-all) terméket hoz létre 10%-os áfelázzal. Ezt a terméket azonnal szerkeszítheti, vagy átugorhatja, és manuálisan hoz létre termékeket az **Ultimate Multisite › Products** alatt.

Látogasson el a [Domain Products and Pricing](./domain-products) oldalra a teljes termékkonfigurációs útmutatóért.

---

## Szolgáltató újrakonfigurálása

Gyerje az **Network Admin › Ultimate Multisite › Settings › Domain Seller** menüpontra (vagy kattintson az **Settings** gombra a plugin listában).

Az beállítások oldala tartalmazza:

- **Enable domain selling** — kikapcsolja/kapcsolja be az egész funkciót
- **Default provider** — a domain keresésekhez és az új termékekhez használt szolgáltató
- **Max TLDs per search** — hány TLD-t ellenőrizhet a vásárló keresésekor; magasabb értékek több opciót mutatnak, de lassabbak
- **Availability cache duration** — hány ideig tárolja az elérhetőség és az árak eredményeit; alacsonyabb értékek pontosabbak, de növelik az API hívásokat
- **Manage domain products** — gyorslink a Products listához
- **Configure providers** — megnyitja az Integration Wizard-t a szolgáltatók hozzáadásához vagy újrakonfigurálásához

### Második szolgáltató hozzáadása

Kattintson az **Configure providers** gombra, és futtassa újra a varázslót a új regisztrátor számára. Több szolgáltatót is lehet egyszerre konfigurálni. Az egyes domain termékeket egy konkrét szolgáltatóhoz rendelheti, vagy az alapértelmezetthez hagyhatja.

### TLD-k kézi szinkronizálása

Az beállítások oldalán kattintson a **Sync TLDs** gombra bármely konfigurált szolgáltató mellett, hogy elvegye az legfrissebb árakat. Ez hasznos, ha egy szolgáltató frissíti a nagykereskedelmi árait, vagy hozzáad új TLD-ket.

---

## Naplózás (Logs)

Minden szolgáltató saját naplókanalba ír. A naplókat az **Network Admin › Ultimate Multisite › Logs** alatt tekintheti meg:

| Log channel | Tartalom |
|---|---|
| `domain-seller-registration` | Minden regisztrációs kísérlet (sikeres és sikertelen) |
| `domain-seller-renewal` | Forتمادulási munkák eredményei |
| `domain-seller-opensrs` | Nyeres OpenSRS API tevékenysége |
| `domain-seller-namecheap` | Nyeres Namecheap API tevékenysége |
| `domain-seller-godaddy` | Nyeres GoDaddy API tevékenysége |
| `domain-seller-resellerclub` | Nyeres ResellerClub API tevékenysége |
| `domain-seller-namesilo` | Nyeres NameSilo API tevékenysége |
| `domain-seller-enom` | Nyeres Enom API tevékenysége |
