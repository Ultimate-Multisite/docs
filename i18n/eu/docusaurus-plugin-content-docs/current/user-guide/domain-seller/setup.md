---
title: Konfigurazioa eta Provedoraren Konfigurazioa
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Konfigurazioa eta Provedioraren Konfigurazioa

Domain Seller addon-ek guided setup wizard bat joaten da, zehazki behar dituen guztietan iruditzen du. Lehiakoa (wizard) ereduaren bilakidetza eta ondoren provedioriak konfigurat edo irekitu (reconfigure) gabe dena.

## Erreguntzak

- **Multisite Ultimate** v2.4.12 edo handiagoa, network-activated
- **PHP** 7.4+
- Lehenaketa bat suportatutako registrar batko API credentials

## Lehenan iruditzen setup wizard (First-run setup wizard)

Setup wizard-ek plugin-a lehen aldiz network-activate egiten duenean automatic lan egiten du. Horrek **Network Admin › Ultimate Multisite › Domain Seller Setup** daiteke gabe testuingilean.

### Irudi 1 — Provedior bat aukeratu

Jartzen duwan registrarak konektatzea. Aukera suportatuak:

| Provedior | DNS management (DNS-a maneho) | WHOIS privacy (WHOIS gizaldia) |
|---|---|---|
| OpenSRS | Bai | Bai |
| Namecheap | Ez | Bai (WhoisGuard, gizarteko) |
| HostAfrica | Bai | Bai (ID proteksio) |
| Openprovider | Bai | Bai |
| Hostinger | Hostinger domain-ek core-a mapatzea bidez hostatutako domainak dira | Bai |
| GoDaddy | Ez | Ez |
| ResellerClub | Bai | Ez |
| NameSilo | Ez | Ez |
| Enom | Bai | Ez |

### Irudi 2 — Credenciales eratu

Provedior guztiek aukera handiagoak dituzte:

**OpenSRS** — Username eta private key (OpenSRS Reseller Control Panel-ek bat da)

**Namecheap** — Username eta API key (Account › Tools › API Access-ek bat da)

**HostAfrica** — Domains Reseller API endpoint eta credentials HostAfrica reseller module-eko. Lehenik, sandbox endpoint ez dago dokumentatu; gerbia ireki behar baino lehen testu erregularis edo lekua (read-only) kontrolak egin duzu.

**Openprovider** — Username eta password API access-ek aktibatu dituzte. Sandbox modua opcional da Openprovider sandbox API erabiltzen du, eta default customer handle bat opcional da erregularisburuak irekitzeko gisa jartzen daiteke.

**Hostinger** — Hostinger-renagoa API token sharedu hPanel core integrazioaren. Beste token horrek erabiltzen da domain pertsonalizazio eta Domain Seller registro operazioetan.

**GoDaddy** — API key eta secret (developer.godaddy.com-etik)

**ResellerClub** — Reseller ID eta API key (ResellerClub kontrol panelu-tik)

**NameSilo** — API key (namesilo.com › Account › API Manager-tik)

**Enom** — Account ID eta API token

Eskatu **Sandbox mode** da dagoenean, provideraren test envidorra aurretik probarak egin dezakezu iraupiz lehenago erabiltzeko.

### Irrenditua 3 — Konektazioa probatu

Klikatu **Test Connection**-an. Ezpotu eta konektazioa jartzen jakinarazteko API eskerra garrantzitsu bat bidaltzen du. Kontratu-gaindutako problemaak konponduzu, jarraitzea.

### Irrenditua 4 — TLDs importatu

Klikatu **Import TLDs**-an, provider konektatuta dagoen arteko TLDs guztietan eta wholesale prezioetan aurkitzen duzu. Horrek domain produkzioak erabiltzen TLD listaren iruditzen du. Handi TLD katalogoak duten provideretarako importua 30–60 segundua aldatu dezake.

TLDs-ek eguneratzen da automatikoki egun bat lehenago, cron job bat bidez.

### Irrenditua 5 — Domain produkzioa sortu

Ezpotu sortzen du default domain produkzio bat, 10% markup (prezio handiagoa) hartuz. Horrek hemen editatu daiteke lan egin edo **Ultimate Multisite › Products**-aren ondorioz manuel produkzioak sortu dezake.

Produkzioen eskaintza guztia egindako gure gida-ren [Domain Products and Pricing](./domain-products)-an ikusi.

---

## Providera irrenditua (Reconfiguring a provider)

**Network Admin › Ultimate Multisite › Settings › Domain Seller** (edo plugin listan **Settings**-an klikatu).

Ezpotuaren lapurikoak arautzen du:

- **Domainakizkuntzaren aktibitzen** — horrek funtzionalitatea on/off egin dezakezu.
- **Provedior gipuztua (Default provider)** — domainak bilatzen eta produktu berriak eratu behar diren provedioria.
- **Bilbideko TLD-ak maximuma kopurua** — kliantzak bilatzen testegi egiten duenean, zerko TLD-ak ikusteko daude; handiagoak adierazten daudien opsioak gehiago duena baina ahaztu eta litzaten da.
- **Disponibilizazio cachearen edukiak** — disponibildate eta prezio horrek cache egin behar diren eragiketa; txikiagoak addiagoa duena baina API ankezpenak handiago egiten dira.
- **Domain produktu zehatzeko administrazioa (Manage domain products)** — Produktu listaren gai linkua.
- **Provediorak konfiguratzea (Configure providers)** — Provediorak gehiago emateko edo irudiak eratu desgaituak (Integration Wizard) irekitzen duena.

### Ikusteko leku bat gehiago ematzea

**Configure providers** klik egin eta berri registratori artean funtzionalitatea berriro jarri. Ezin daiko da provediorak batzuen ondo konfiguratutako edo bestelakoa berez. Domain produktu zehatza batzuak zehatzeko provediori emate duzu, edo default-ean lekututa jarri dezakezu.

### TLD-ak manuaz sinkronatzea

Erregistroaren (settings) lapian, konfiguratutako provedior batren ondoren **Sync TLDs** klik egin eta prezio horrek berriro hartzeko. Hau garrantzitsia da provedior bat berri wholesale prezioak update egiten du edo berri TLD-ak ematen duenean.

---

## Logak (Logs)

Provediorak bere kanalen loguean iragartzen ditu. Logak ikusteko da **Network Admin › Ultimate Multisite › Logs** menuaren ondoren:

| Canal log | Kontenua |
|---|---|
| `domain-seller-registration` | FormDataiarenak (mezu eta ezberdintasun) guztietan (boiketa eta ezberdintasuna) |
| `domain-seller-renewal` | Berriztapena job-aren erresultatua |
| `domain-seller-opensrs` | OpenSRS API-aren oharra gureak |
| `domain-seller-namecheap` | Namecheap API-aren oharra gureak |
| `domain-seller-hostafrica` | HostAfrica API-aren oharra gureak |
| `domain-seller-openprovider` | Openprovider API-aren oharra gureak |
| `domain-seller-hostinger` | Hostinger API-aren oharra gureak |
| `domain-seller-godaddy` | GoDaddy API-aren oharra gureak |
| `domain-seller-resellerclub` | ResellerClub API-aren oharra gureak |
| `domain-seller-namesilo` | NameSilo API-aren oharra gureak |
| `domain-seller-enom` | Enom API-aren oharra gureak |

---

## Provedoraren kapabilidadeko noturia

Registrar API guztiek ezberdineten operazioak ematen dira. Addon-ek ez duendu operazioak eta zehat admin-eko erantzunak ematen dute, ez hasi egiten eta hile egiten.

- **HostAfrica** lehenren beste workflow garrantzitsuena ematen du, horrek identifikazioa (lookup), TLD/prezio sinkronizazioa, registro, berriztapena, transfermentzea, nameserver updateak, DNS recordak, EPP kodeak, registrar lock-ea eta ID proteksioak barne.
- **Openprovider** reseller-prezioan TLD sinkronizazioa, registro, berriztapena, transfermentzak, nameserver updateak, DNS zonaak, EPP kodeak, registrar lock-ea eta WHOIS gizaldia ematen du. Horrek laburrian iragitzitako bearer token batekin autentikatu da, eta addon-ek hori automatikoki berri egiten du.
- **Hostinger** hileera aurkitzea (availability search), registro, portfolio identifikazioa, nameserver updateak, registrar lock-ea eta WHOIS gizaldia ematen du shared hPanel API token batekin. Hostinger-ren public Domains API-ak reseller/wholesale prezioak, transfermentu iribidea, berriztapena eragiketa edo EPP-kodea hartzea ez ematen; berriztapenak automatikoki berri egiten dira.
