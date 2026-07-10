---
title: Domain Termékek és Árak
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain termékek és árazás {#domain-products-and-pricing}

A domain termékek az, amellyel szabályozza az árazást, a TLD-ket, a WHOIS adatvédelmet és a szolgáltató kiválasztását. Minden domain termék egy standard Multisite Ultimate termék, de hozzáadva egy extra **Domain Beállítások** fület.

## Domain termék létrehozása {#creating-a-domain-product}

1. Navigáljon a **Network Admin › Ultimate Multisite › Products** menüpontra
2. Kattintson az **Add New** gombra
3. Állítsa a termék típust **Domain**-re
4. Konfigurálja a **Domain Beállítások** fület (lásd alább)
5. Mentse

A domain termékek lila **Domain** jelzővel jelennek meg a terméklistában, és a **Domain Termékek** fül segítségével szűrhetőek.

## Domain beállítások fül {#domain-settings-tab}

### Provider (Szolgáltató) {#provider}

Válassza ki, melyik regisztrátor kezeli a regisztrációt e termékhez. Meghatározása a globális **Default provider** beállításban történik a Domain Seller beállításokban.

### Supported TLDs (Támogatott TLD-k) {#supported-tlds}

Ha üresen hagyja, létrehoz egy **összefogó terméket**, amely minden olyan TLD-re érvényes, amelyet más termék nem fogad meg.

Kézi, vesszővel elválasztott listát adjen meg a TLD-król (pl. `.com, .net, .org`), hogy létrehozzon egy **TLD-specifikus terméket**, amely csak ezekre a kiterjesztésekre érvényes.

**Hogyan működik a termék-megfelelődés:** Amikor egy ügyfél keres egy domain-t, az addon a legspecifikusabb megfelelő terméket választja ki. Egy olyan termék, amelynek TLD listájában szerepel a `.com`, előnyben részesül a lépő termékkel szemben. Ha nincs TLD-specifikus termék, amely megfelel, akkor az összefogó termék kerül használatra. Ha nincs termék, a domain keresés nem jelenik meg.

### Markup type (Árazási mód) {#markup-type}

Három mód szabályozza, hogyan számítja ki a kereskedelmi áráját a nagytőlépős költségből:

| Mode (Mód) | How it works (Hogyan működik) |
|---|---|
| **Percentage (Százalék)** | Megad egy százalékot a nagytőlépős költséghez. Egy 20%-os megtakarítás 10 dolláros nagytőlépős domain-ról 12 dollárt ad. |
| **Fixed markup (Rögzített megtakarítás)** | Megad egy rögzített dollárösszeget. Egy 5 dolláros megtakarítás 10 dolláros domain-ról 15 dollárt ad. |
| **Fixed price (Rögzített ár)** | Teljesen figyelmen kívül hagyja a nagytőlépős költséget. Mindig az összeget veszi ki, amit megad. |

### Introductory pricing (Bevezető árazás) {#introductory-pricing}

Engedélyezi, hogy kedvezményes első éves árat kínáljon. Állítsanak be külön **Introductory price**-ot (az 1. éves árát) a rendszeres **Renewal price** (2. évtől) mellett. Az ügyfél mindkét árat látja a checkout során, így tudja, mire számíthat a megújításkor.

### WHOIS privacy (WHOIS adatvédelem) {#whois-privacy}

Kontrollálja, hogy e termékhez regisztrált domain-ek esetén ajánlott-e a WHOIS adatvédelmi védelem.

| Setting (Beállítás) | Behaviour (Viselkedés) |
|---|---|
| **Disabled (Ki van kapcsolva)** | A WHOIS adatvédelem soha nem ajánlott vagy aktiválható. |
| **Always Included (Mindig tartalmazza)** | A WHOIS adatvédelem automatikusan aktiválódik a regisztrációkor ingyen. |
| **Customer Choice (Ügyfél választása)** | Egy jelölőmező jelenik meg a checkout során. Állítsa be a **Privacy price**-ot, ha évi díjat szeretne behajtani, vagy hagyja 0 dollárra, ha ingyen akarja ajánlani. |

A Namecheap esetén a WHOIS adatvédelem WhoisGuard-ot használ (mindig ingyenes). Az OpenSRS esetén az OpenSRS adatvédelmi szolgáltatást használja (nagytőlépős költsége lehet).

---

## TLD import és szinkronizáció {#tld-import-and-sync}

A domain termékek valós idejű nagytőlépős árazást jelenít meg, amelyet a kapcsolódó szolgáltatótól kap. Ehhez szükség van a TLD-k importálására.

- **Manual sync (Manuális szinkronizáció):** Settings › Domain Seller › Sync TLDs (szolgáltató szerint)
- **Automatic sync (Automata szinkronizáció):** Naponta fut egy terjedelembe napraképzett cron-feladat minden konfigurált szolgáltató számára

A szinkronizáció után navigáljon bármely domain termékének Domain Settings fülére, és használja a TLD választót, hogy lássa az elérhető TLD-k listáját és aktuális nagytőlépős áraikat.

---

## Auto-renewal (Automata megújítás) {#auto-renewal}

A domain megújításai az ügyfél tagsági státuszához kötődnek:

- Amikor egy tagság megújul és egy domain van hozzárendelve, a domain megújítás automatikusan sorba kerül
- A megújítási kísérletek az ügyfél aktív fizetési kapuját használják
- A sikertelen megújításokat automatikusan próbálják újra növekvő időtartamú visszállással (exponential backoff)
- E-mail értesítéseket küldnek a sikeres megújításokról, a sikertelenekről és az elkövetkező lejártakról

E-mail sablon ID-k a domain életciklus eseményekhez:

| Event (Esemény) | Template ID |
|---|---|
| Domain registered (Domain regisztrálva) | `domain_registered` |
| Domain renewed (Domain megújítva) | `domain_renewed` |
| Renewal failed (Megújítás sikertelen) | `domain_renewal_failed` |
| Domain expiring soon (Domain hamar lejárt) | `domain_expiring_soon` |

---

## Admin: Manuális domain regisztráció {#admin-manual-domain-registration}

Ha egy ügyfél nevében szeretne regisztrálni egy domain-t anélkül, hogy az át kellene mennie a checkouton:

1. Navigáljon a **Network Admin › Ultimate Multisite › Register Domain** menüpontra
2. Válassza ki az ügyfelet, és adja meg a domain nevét
3. Töltse ki a regisztráló elérhetőségeit (név, cím, telefon)
4. Kattintson a **Register** gombra

A domain rekord létrehozásra kerül, és az ügyfél fiókjához kapcsolódik.
