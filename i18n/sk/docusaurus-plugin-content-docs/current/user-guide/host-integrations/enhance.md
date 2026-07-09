---
title: Vylepšenie integrácie s kontrolným panelom
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Vylepšenie integrácie s Control Panel {#enhance-control-panel-integration}

## Úvod {#overview}
Enhance je moderná kontrolná panela, ktorá poskytuje výkonné možnosti automatizácie a správy hostingu. Táto integrácia umožňuje automatické synchronizovanie domén a správu SSL certifikátov medzi Ultimate Multisite a Enhance Control Panel.

**Spojené diskusie:** Pre tipy od komunity a ďalšie informácie si pozrite [GitHub Diskúsiu #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265).

## Funkcionality {#features}
- Automatické synchronizovanie domén, keď sú mapované v Ultimate Multisite
- Automatické poskytovanie SSL certifikátov pomocou LetsEncrypt pri riešení DNS
- Podporuka poddomenenov pre siete pracujúce v režime poddomenenov
- Odstránenie domény pri odstránení mapovania
- Testovanie pripojenia na overenie API credentialov

## Požiadavky {#requirements}

### Systémové požiadavky {#system-requirements}
- Enhance Control Panel nainštalovaná a prístupná
- Inštalácia WordPress Multisite hostovaná na servere Enhance alebo pripojená k nemu
- Webový server Apache (Enhance podporuje konfigurácie Apache; LiteSpeed Enterprise je k dispozícii za znížene cenu)

### Prístup k API {#api-access}
Musíte mať administratívny prístup k Enhance Control Panel, aby ste mohli vytvoriť API tokeny.

## Vytvorenie vašich API credentialov {#getting-your-api-credentials}

### 1. Vytvorenie API tokenu {#1-create-an-api-token}

1. Prihláste sa do vášho Enhance Control Panel ako admin
2. Kliknite na **Settings** (Nastavenia) v navigačnom menu
3. Prejdite na sekciu **Access Tokens** (Prístupové tokeny)
4. Kliknite na **Create Token** (Vytvoriť token)
5. Dajte tokenu popisné meno (napr. "Ultimate Multisite Integrácia")
6. Pridajte si úlohu **System Administrator** (Systémový admin)
7. Pre dátum vyprsenia:
   - Nechajte prázdne, ak chcete, aby token nikdy nepadel
   - Alebo nastavte konkrétny dátum vyprsenia pre účely bezpečnosti
8. Kliknite na **Create** (Vytvoriť)

Po vytvorení sa vám zobrazia váš **Access Token** a **Organization ID**. **Uložte ich okamžite**, pretože token sa zobrazí len raz.

### 2. Získať váš Organization ID {#2-get-your-organization-id}

Organization ID sa zobrazuje na stránke Access Tokens v modlom informačnom bloku označenom "Org ID: {your_id}".

Organization ID je UUID formátovaný takto: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Organizational ID si môžete nájsť aj pomocou nasledujúcich krokov:
1. Prejdite na stránku **Customers** (Klienci)
2. Kliknite na **Manage customer** (Správa klienta) pre relevantného klienta
3. Pozrite sa na URL - Organization ID je alfanumerické znaky po `/customers/`

### 3. Získať váš Server ID {#3-get-your-server-id}

Aby ste našli svoj Server ID (ktorý je potrebný pre operácie domény):

1. V Enhance Control Panel prejdite do sekcie **Servers** (Server).
2. Kliknite na server, kde sa nainštaloval váš WordPress.
3. Server ID (formát UUID) bude viditeľný v URL alebo v podrobnosti o serveri.
4. Alternatívne môžete použiť API na zoznam serverov:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID je formátovaný takto UUID: `00000000-0000-0000-0000-000000000000`

### 4. Získať váš API URL {#4-get-your-api-url}

Váš API URL je URL vášho Enhance Control Panel s pridaným `/api/`:

```
https://your-enhance-panel.com/api/
```

**Dôležité:** Požiadavka na cestu `/api/` je povinná. Často sa robia chyby, napríklad:
- Používanie len domény bez `/api/`
- Používanie HTTP namiesto HTTPS (HTTPS je potrebný pre bezpečnosť)

## Konfigurácia {#configuration}

### Požiadavky na konštanty {#required-constants}

Pridajte nasledujúce konstanty do vášho súboru `wp-config.php`:

// Zlepšenie integrácie s Control Panelom
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Nastavenie pomocou integrácie (Integration Wizard) {#setup-via-integration-wizard}

1. V admin panel WordPress prejdite do **Ultimate Multisite** > **Settings**
2. Prejdite na záložku **Integrations**
3. Nájdite **Enhance Control Panel Integration** a kliknite na **Configuration**
4. Wizard vás krok za krokom poprowadí pri nastavení:
   - **Krok 1:** Úvod a prehľad funkcií
   - **Krok 2:** Vstup svojich API údajov (Token, API URL, Server ID)
   - **Krok 3:** Testovanie spojenia
   - **Krok 4:** Prehliadka a aktivácia

Môžete si vybrať:
- Nech wizard automaticky vloží kon constanty do vášho súboru `wp-config.php`
- Skopírovať definície constant a pridať ich manuálne

## Dodatočné nastavenia WordPressu {#additional-wordpress-configuration}

Na základe sprievodných dosad ([Diskúzia #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) budete môcť potrebovať nasaditi tieto doplnkové nastavenia:

### Konfigurácia súboru .htaccess {#htaccess-configuration}

Ak máte problémy s mapovaním domén:
1. Odstránte pôvodný súbor Enhance `.htaccess`
2. Nahradíte ho štandardným súborom Multisite WordPress `.htaccess`

### Cookie constanty {#cookie-constants}

Pridajte tieto constanty do `wp-config.php`, aby ste zabezpečili správnu obsluhu cookie pre mapované domény:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Ako to funguje {#how-it-works}

### Keď je doména mapovaná {#when-a-domain-is-mapped}

1. Používateľ mapuje prispôsobený doménu v Ultimate Multisite (alebo je vytvorená nová stránka v režime poddomény)
2. Integrácia pošle POST požiadavku na API Enhance: `/servers/{server_id}/domains`
3. Enhance pridá doménu k vašej serverovej konfiguračnej
4. Keď DNS sa rozpočíta na vašu serverovú, Enhance automaticky poskytne SSL certifikát pomocou LetsEncrypt
5. Doména sa stane aktívnou s HTTPS

### Keď je doména odstránená {#when-a-domain-is-removed}

1. Odstránite mapovanie domény v Ultimate Multisite
2. Integrácia požiada Enhance o nájdenie ID domény
3. Pošle si DELETE požiadavku na: `/servers/{server_id}/domains/{domain_id}`
4. Enhance odstráni doménu z vašej serverovej konfiguračnej

### Kontrola DNS a SSL {#dns-and-ssl-checking}

Ultimate Multisite obsahuje vbudovanú kontrolu DNS a SSL:
- Môžete nastaviť interval kontroly v **Domain Mapping Settings** (predvolene: 300 sekúnd/5 minút)
- Systém overí propagáciu DNS, než doména označí ako aktívna
- Platnosť SSL certifikátu je automaticky kontrolovaná
- Enhance si postará o poskytnutie SSL automaticky, takže manuálna konfigurácia SSL nie je potrebná

## Overenie nastavenia {#verifying-setup}

### Testovanie spojenia {#test-the-connection}

1. V Wizard integrácie použite krok **Test Connection** (Testovanie spojenia)
2. Príponka sa pokúša zobraziť domény na vašej serverovej
3. Úspešné správy potvrdia:
   - API hesla sú správne
   - URL API je prístupný
   - Server ID je platný
   - Povolenia sú správne nastavené

### Po mapovaní domény {#after-mapping-a-domain}

1. Mapujte testovú doménu v Ultimate Multisite
2. Prejdite do logov Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Potvrďte v Enhance Control Panel, že doména bola pridaná:
   - Prejdite na **Servers** > **Your Server** > **Domains**
   - Nová doména by sa mala objaviť v zozname
4. Keď sa DNS rozpočíta, overte automatické poskytnutie SSL

## Troubleshooting {#troubleshooting}

### Problémy s API pripojením {#api-connection-issues}

**Chyba: "Neúspešne sa pripojenie k Enhance API"**
- Skontrolujte, či `WU_ENHANCE_API_URL` končí `/api/`
- Uistite sa, že používate HTTPS, nie HTTP
- Skontrolujte, či je panel Enhance prístupný z vášho WordPress servera
- Overtečte si, či žiadne firewall pravidlá neblokujú pripojenie

**Chyba: "Token API Enhance nenalezen"**
- Uistite sa, že `WU_ENHANCE_API_TOKEN` je definovaný v súbore `wp-config.php`
- Overtečte si, či token nie bol odstránený alebo neplatný v Enhance
- Skontrolujte chyby v hodnotách tokenu

**Chyba: "Server ID nie je skonfigurovaný"**
- Uistite sa, že `WU_ENHANCE_SERVER_ID` je definovaný v súbore `wp-config.php`
- Overtečte si, či Server ID má platný formát UUID
- Potvrďte, že server existuje v paneli Enhance

### Doména nie je pridaná {#domain-not-added}

**Skontrolujte logy:**
1. Prejdite do **Ultimate Multisite** > **Logs**
2. Filtrujte podľa **integration-enhance**
3. Hľadajte chybové správy, ktoré naznačujú problém

**Často gặpé príčiny:**
- Neplatný formát názvu domény
- Doména už existuje v Enhance
- Nedostatečné API povolenia (uistite sa, že token má úlohu System Administrator)
- Server ID neodpovedá reálnemu serveru v Enhance

### Problémy so SSL certifikátom {#ssl-certificate-issues}

**SSL nie je generovaný:**
- Uistite sa, že DNS ukazuje na IP adresu vášho servera
- Skontrolujte, či doména správne rieši: `nslookup yourdomain.com`
- Enhance vyžaduje, aby DNS riešil doménu, než môže certifikát SSL generovať
- Generovanie SSL trvá typicky 5–10 minút po propagácii DNS
- Skontrolujte logy panela Enhance Control Panel na špecifické chyby súvisiace so SSL

**Manuálne riešenie problémov so SSL v Enhancie:**
1. Prejdite do **Servers** > **Your Server** > **Domains**
2. Nájdite svoju doménu a skontrolujte jej stav SSL
3. Ak je potrebné, môžete manuálne spustiť generovanie SSL

Akcia domén alebo SSL certifikátov sa aktivujú príliš dlho?
1. Prejdite do **Ultimate Multisite** > **Settings** > **Domain Mapping**.
2. Nájdite nastavenie **DNS Check Interval**.
3. Zmenite ho z počiatku 300 sekúnd na nižšiu hodnotu (minimálna: 10 sekúnd).
4. **Poznámka:** Nižšie intervaly znamenajú częstejšie kontroly, ale vyššie obťažujú server.

### Chyby pri autentifikácii {#dns-check-interval}

**Chybové kódy HTTP 401/403:**
- Vytvorte si nový API token v Enhance.
- Overte, že token má prístup **System Administrator**.
- Skontrolujte, či token neprecál.
- Uistite sa, že používate správny Organization ID (hoci ho zvyčajne nie je potrebný v URL).

### Analýza logov {#authentication-errors}

Vклюčte podrobné logovanie:
```php
// Pridajte do wp-config.php pre lepšiu odhadcu
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Potom skontrolujte logy na:
- Logy Ultimate Multisite: **Ultimate Multisite** > **Logs**.
- WordPress debug log: `wp-content/debug.log`.
- Logy panela Enhance: Dostupné v admin rozhraní Enhance.

## API referenčné odkazy {#log-analysis}

### Autentifikácia {#api-reference}
Všetky API požiadavky používajú autentifikáciu na základe Bearer tokenu:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Bežné endpointy {#authentication}

**Zoznam serverov:**
```
GET /servers
```

**Zoznam domén na servere:**
```
GET /servers/{server_id}/domains
```

**Pridanie domény:**
```
POST /servers/{server_id}/domains
Telo: {"domain": "example.com"}
```

**Odstránenie domény:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Plné API dokumentácie {#common-endpoints-used}
Plná dokumentácia API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Najlepšie praxe {#full-api-documentation}

### Bezpečnosť {#best-practices}
- **Nikdy nekomitajte API tokeny do version controlu**
- Ukladajte tokeny v `wp-config.php`, ktorý by mal byť vylúčený z Gitu
- Používajte tokeny s príslušnými prístupovými právami (System Administrator pre plnú integráciu)
- Nastavte dátumy platnosti tokenov pre produkčné prostredia
- Periodicky rotujte tokeny

### Výkonnosť {#security}
- Používajte štandardnú časť čerpania DNS skenovania (300 sekúnd), aby ste unikli nadmerným volaniyam API
- Monitorujte zdroje serveru Enhance pri vykonávaní veľkoplošných operácií na doménách
- Predvažujte, či nebudete domény pridávať naraz, ak mapujete veľa domén naraz

### Monitorovanie {#performance}
- Pravidelne kontrolujte logy Ultimate Multisite na chyby integrácie
- Nastavte monitorovanie pre neúspešné pridávania domén
- Overte, či sa SSL certifikáty správne konfigurujú
- Observujte kapacitu serveru Enhance a limity domén

## Dodatkové zdroje {#monitoring}

- **Oficiálna dokumentácia Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentácia API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Fórum Enhance Community:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub diskusie:** [Issue #265 - Tip pre integráciu Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Prívodca mapovania domén Ultimate Multisite:** Vidi wiki stránku "Ako skonfigurovať mapovanie domén v2"

## Podpora {#additional-resources}

Ak gặpáte problémy:
1. Prejdite k sekcii Troubleshooting vyššie
2. Prejdite logy Ultimate Multisite
3. Odoberte si referenciu z [GitHub diskusí](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktujte podporu Enhance pre problémy špecifické pre panel
5. Vytvorte novú diskusiu s podrobnými logmi chýb pre pomoc od komunity

## Poznámky {#support}

Toto integruje len alias domén. Enhance automaticky spravuje SSL.
Integračný modul podporuje ako prispôsobené mapovanie domén aj webové stránky na poddoménach.
Automatické vytváranie poddomén `www` je možné nakonfigurovať v nastaveniach Mapovania domén (Domain Mapping).
Enhance podporuje aktuálne konfigurácie Apache (dostupné LiteSpeed Enterprise).
Odstránenie domény z Ultimate Multisite odstráni doménu z Enhance, ale nemusí okamžite siahnuť a vymazať spojené SSL certifikáty.
