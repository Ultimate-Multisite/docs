---
title: Vylepšete integraci ovládacího panelu
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Integrace s Enhance Control Panel

## Přehled
Enhance je moderní ovládací panel, který poskytuje výkonné možnosti automatizace a správy hostingu. Tato integrace umožňuje automatickou synchronizaci domén a správu SSL certifikátů mezi Ultimate Multisite a Enhance Control Panel.

**Související diskuze:** Podívejte se na [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265), kde najdete tipy od komunity a další informace.

## Funkce
- Automatická synchronizace domén při jejich mapování v Ultimate Multisite
- Automatické vydávání SSL certifikátů přes LetsEncrypt, jakmile DNS záznam funguje
- Podpora subdomén pro sítě běžící v režimu subdomén
- Odstranění domény při smazání mapování
- Testování připojení pro ověření API přihlašovacích údajů

## Požadavky

### Systémové požadavky
- Nainstalovaný a přístupný Enhance Control Panel
- WordPress Multisite instalace hostovaná na serveru Enhance nebo k němu připojená
- Webový server Apache (Enhance aktuálně podporuje konfigurace Apache; LiteSpeed Enterprise je dostupný za sníženou cenu)

### Přístup k API
Pro vytvoření API tokenů musíte mít administrátorský přístup k Enhance Control Panel.

## Získání API přihlašovacích údajů

### 1. Vytvoření API tokenu

1. Přihlaste se do Enhance Control Panel jako administrátor
2. Klikněte na **Settings** v navigačním menu
3. Přejděte na **Access Tokens**
4. Klikněte na **Create Token**
5. Pojmenujte token popisným názvem (např. „Ultimate Multisite Integration")
6. Přiřaďte roli **System Administrator**
7. Pro datum expirace:
   - Ponechte prázdné, pokud chcete, aby token nikdy nevypršel
   - Nebo nastavte konkrétní datum expirace z bezpečnostních důvodů
8. Klikněte na **Create**

Po vytvoření se zobrazí váš **Access Token** a **Organization ID**. **Okamžitě si je uložte**, protože token se zobrazí pouze jednou.

### 2. Zjištění Organization ID

Organization ID je zobrazeno na stránce Access Tokens v modrém informačním poli s označením „Org ID: {vaše_id}".

Organization ID je ve formátu UUID: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Organization ID zákazníka můžete také zjistit takto:
1. Přejděte na stránku **Customers**
2. Klikněte na **Manage customer** u příslušného zákazníka
3. Podívejte se na URL – Organization ID jsou alfanumerické znaky za `/customers/`

### 3. Zjištění Server ID

Pro zjištění Server ID (potřebného pro operace s doménami):

1. V Enhance Control Panel přejděte na **Servers**
2. Klikněte na server, kde běží vaše WordPress instalace
3. Server ID (ve formátu UUID) bude viditelné v URL nebo v detailech serveru
4. Alternativně můžete použít API pro výpis serverů:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID má formát UUID: `00000000-0000-0000-0000-000000000000`

### 4. Zjištění URL API

URL vašeho API je URL vašeho Enhance Control Panel s přidanou cestou `/api/`:

```
https://your-enhance-panel.com/api/
```

**Důležité:** Cesta `/api/` je povinná. Časté chyby zahrnují:
- Použití pouze domény bez `/api/`
- Použití HTTP místo HTTPS (HTTPS je vyžadováno z bezpečnostních důvodů)

## Konfigurace

### Povinné konstanty

Přidejte následující konstanty do souboru `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Nastavení pomocí průvodce integrací

1. V administraci WordPressu přejděte na **Ultimate Multisite** > **Settings**
2. Přejděte na kartu **Integrations**
3. Najděte **Enhance Control Panel Integration** a klikněte na **Configuration**
4. Průvodce vás provede nastavením:
   - **Krok 1:** Úvod a přehled funkcí
   - **Krok 2:** Zadání API přihlašovacích údajů (Token, URL API, Server ID)
   - **Krok 3:** Test připojení
   - **Krok 4:** Kontrola a aktivace

Můžete si vybrat:
- Nechat průvodce automaticky vložit konstanty do souboru `wp-config.php`
- Zkopírovat definice konstant a přidat je ručně

## Další konfigurace WordPressu

Na základě zpětné vazby od komunity ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) může být potřeba nakonfigurovat tato další nastavení:

### Konfigurace .htaccess

Pokud máte problémy s mapováním domén:
1. Smažte původní Enhance soubor `.htaccess`
2. Nahraďte ho standardním WordPress Multisite souborem `.htaccess`

### Konstanty pro cookies

Přidejte tyto konstanty do `wp-config.php` pro správné zpracování cookies napříč mapovanými doménami:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Jak to funguje

### Při mapování domény

1. Uživatel namapuje vlastní doménu v Ultimate Multisite (nebo je vytvořen nový web v režimu subdomén)
2. Integrace odešle POST požadavek na API Enhance: `/servers/{server_id}/domains`
3. Enhance přidá doménu do konfigurace vašeho serveru
4. Když DNS směřuje na váš server, Enhance automaticky vydá SSL certifikát přes LetsEncrypt
5. Doména se stane aktivní s HTTPS

### Při odstranění domény

1. Mapování domény je smazáno v Ultimate Multisite
2. Integrace se dotáže Enhance na ID domény
3. Je odeslán DELETE požadavek na: `/servers/{server_id}/domains/{domain_id}`
4. Enhance odstraní doménu z konfigurace vašeho serveru

### Kontrola DNS a SSL

Ultimate Multisite obsahuje vestavěnou kontrolu DNS a SSL:
- Interval kontroly můžete nastavit v **Domain Mapping Settings** (výchozí: 300 sekund/5 minut)
- Systém ověří propagaci DNS před označením domény jako aktivní
- Platnost SSL certifikátu se kontroluje automaticky
- Enhance zajišťuje vydávání SSL automaticky, takže ruční konfigurace SSL není potřeba

## Ověření nastavení

### Test připojení

1. V průvodci integrací použijte krok **Test Connection**
2. Plugin se pokusí vypsat domény na vašem serveru
3. Zpráva o úspěchu potvrdí:
   - API přihlašovací údaje jsou správné
   - URL API je přístupná
   - Server ID je platné
   - Oprávnění jsou správně nastavena

### Po namapování domény

1. Namapujte testovací doménu v Ultimate Multisite
2. Zkontrolujte logy Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Ověřte v Enhance Control Panel, že doména byla přidána:
   - Přejděte na **Servers** > **Váš server** > **Domains**
   - Nová doména by se měla objevit v seznamu
4. Jakmile se DNS zpropaguje, ověřte, že SSL certifikát byl automaticky vydán

## Řešení problémů

### Problémy s připojením k API

**Chyba: „Failed to connect to Enhance API"**
- Ověřte, že `WU_ENHANCE_API_URL` obsahuje na konci `/api/`
- Ujistěte se, že používáte HTTPS, ne HTTP
- Zkontrolujte, že Enhance panel je přístupný z vašeho WordPress serveru
- Ověřte, že žádná pravidla firewallu neblokují připojení

**Chyba: „Enhance API Token not found"**
- Ujistěte se, že `WU_ENHANCE_API_TOKEN` je definován v `wp-config.php`
- Ověřte, že token nebyl smazán nebo nevypršel v Enhance
- Zkontrolujte překlepy v hodnotě tokenu

**Chyba: „Server ID is not configured"**
- Ověřte, že `WU_ENHANCE_SERVER_ID` je definován v `wp-config.php`
- Ujistěte se, že Server ID má platný formát UUID
- Potvrďte, že server existuje ve vašem Enhance panelu

### Doména nebyla přidána

**Zkontrolujte logy:**
1. Přejděte na **Ultimate Multisite** > **Logs**
2. Filtrujte podle **integration-enhance**
3. Hledejte chybové zprávy popisující problém

**Časté příčiny:**
- Neplatný formát názvu domény
- Doména již v Enhance existuje
- Nedostatečná oprávnění API (ujistěte se, že token má roli System Administrator)
- Server ID neodpovídá skutečnému serveru v Enhance

### Problémy s SSL certifikátem

**SSL se nevydává:**
- Ověřte, že DNS směřuje na IP adresu vašeho serveru
- Zkontrolujte, že doména správně funguje: `nslookup vasedomena.cz`
- Enhance vyžaduje funkční DNS před vydáním SSL
- Vydání SSL obvykle trvá 5–10 minut po propagaci DNS
- Zkontrolujte logy Enhance Control Panel pro chyby specifické pro SSL

**Ruční řešení problémů s SSL v Enhance:**
1. Přejděte na **Servers** > **Váš server** > **Domains**
2. Najděte svou doménu a zkontrolujte její stav SSL
3. V případě potřeby můžete ručně spustit vydání SSL

### Interval kontroly DNS

Pokud aktivace domén nebo SSL certifikátů trvá příliš dlouho:
1. Přejděte na **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Najděte nastavení **DNS Check Interval**
3. Upravte výchozí hodnotu 300 sekund na nižší (minimum: 10 sekund)
4. **Poznámka:** Nižší intervaly znamenají častější kontroly, ale vyšší zatížení serveru

### Chyby autentizace

**Chyby HTTP 401/403:**
- Vygenerujte nový API token v Enhance
- Ověřte, že token má roli **System Administrator**
- Zkontrolujte, že token nevypršel
- Ujistěte se, že používáte správné Organization ID (i když obvykle není v URL vyžadováno)

### Analýza logů

Povolte podrobné logování:
```php
// Přidejte do wp-config.php pro rozšířené ladění
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Poté zkontrolujte logy na:
- Logy Ultimate Multisite: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Logy Enhance panelu: Dostupné v administračním rozhraní Enhance

## Reference API

### Autentizace
Všechny API požadavky používají Bearer token autentizaci:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Běžně používané endpointy

**Výpis serverů:**
```
GET /servers
```

**Výpis domén na serveru:**
```
GET /servers/{server_id}/domains
```

**Přidání domény:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Smazání domény:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Kompletní dokumentace API
Úplná dokumentace API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Osvědčené postupy

### Bezpečnost
- **Nikdy neukládejte API tokeny do verzovacího systému**
- Uchovávejte tokeny v `wp-config.php`, který by měl být vyloučen z Gitu
- Používejte tokeny s odpovídajícími oprávněními (System Administrator pro plnou integraci)
- Nastavte datum expirace tokenů pro produkční prostředí
- Pravidelně obměňujte tokeny

### Výkon
- Používejte výchozí interval kontroly DNS (300 sekund) pro zamezení nadměrného množství API volání
- Sledujte prostředky Enhance serveru při provádění rozsáhlých operací s doménami
- Zvažte postupné přidávání domén, pokud mapujete mnoho domén najednou

### Monitoring
- Pravidelně kontrolujte logy Ultimate Multisite kvůli chybám integrace
- Nastavte monitoring pro neúspěšná přidání domén
- Ověřujte, že SSL certifikáty se správně vydávají
- Sledujte kapacitu Enhance serveru a limity domén

## Další zdroje

- **Oficiální dokumentace Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentace API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Komunitní fórum Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub diskuze:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Průvodce mapováním domén Ultimate Multisite:** Viz wiki stránka „How to Configure Domain Mapping v2"

## Podpora

Pokud narazíte na problémy:
1. Prostudujte sekci Řešení problémů výše
2. Prohlédněte logy Ultimate Multisite
3. Podívejte se do [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktujte podporu Enhance pro problémy specifické pro panel
5. Vytvořte novou diskuzi s podrobnými chybovými logy pro pomoc od komunity

## Poznámky

- Tato integrace zpracovává pouze aliasy domén; Enhance spravuje SSL automaticky
- Integrace podporuje jak vlastní mapování domén, tak weby založené na subdoménách
- Automatické vytváření www subdomény lze konfigurovat v nastavení Domain Mapping
- Enhance aktuálně podporuje konfigurace Apache (LiteSpeed Enterprise je k dispozici)
- Odstranění domény z Ultimate Multisite odstraní doménu z Enhance, ale nemusí okamžitě smazat přidružené SSL certifikáty
