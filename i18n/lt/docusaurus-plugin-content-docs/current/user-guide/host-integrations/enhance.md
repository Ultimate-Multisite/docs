---
title: Paišykite/Privalomas kontrolės panelio integracijos tobulinimas
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Poprawa Integracji z Panelami Sterowania {#enhance-control-panel-integration}

## Przegląd {#overview}
Enhance to nowoczesny panel sterowania, który oferuje potężne możliwości automatyzacji i zarządzania hostingiem. Ta integracja umożliwia automatyczne synchronizowanie domen oraz zarządzanie certyfikatami SSL między Ultimate Multisite a Enhance Control Panel.

**Powiązane dyskusje:** Sprawdź [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) dla wskazówek społeczności i dodatkowych informacji.

## Funkcje {#features}
- Automatyczne synchronizowanie domen, gdy domeny są mapowane w Ultimate Multisite
- Automatyczne udostępnianie certyfikatów SSL za pomocą LetsEncrypt po rozwiązaniu DNS
- Wsparcie dla poddomen dla sieci działających w trybie poddomeny (subdomain mode)
- Usuwanie domen przy usunięciu mapowań
- Testowanie połączenia w celu sprawdzenia danych API

## Wymagania {#requirements}

### Wymagania systemowe {#system-requirements}
- Panel sterowania Enhance zainstalowany i dostępny
- Instalacja WordPress Multisite hostowana na serwerze Enhance lub połączona z nim
- Serwer WWW Apache (Enhance obecnie obsługuje konfiguracje Apache; LiteSpeed Enterprise jest dostępne w niższej cenie)

### Dostęp do API {#api-access}
Musisz mieć uprawnienia administratora do panelu sterowania Enhance, aby utworzyć tokeny API.

## Uzyskanie poświadczeń API {#getting-your-api-credentials}

### 1. Utwórz token API {#1-create-an-api-token}

1. Zaloguj się do swojego Enhance Control Panel jako administrator
2. Kliknij **Settings** (Ustawienia) w menu nawigacyjnym
3. Przejdź do sekcji **Access Tokens** (Tokeny dostępu)
4. Kliknij **Create Token** (Utwórz token)
5. Nadaj tokenowi opisową nazwę (np. "Ultimate Multisite Integration")
6. Przypisz rolę **System Administrator** (Administrator systemu)
7. Dla daty ważności:
   - Zostaw puste, jeśli chcesz, aby token nigdy się nie wygasa
   - Albo ustaw konkretną datę ważności w celu zapewnienia bezpieczeństwa
8. Kliknij **Create** (Utwórz)

Po utworzeniu po wyświetli się Twój **Access Token** i **Organization ID**. **Zapisz je natychmiast**, ponieważ token zostanie pokazany tylko raz.

### 2. Pobierz swój Organization ID {#2-get-your-organization-id}

Organization ID jest wyświetlany na stronie Access Tokens w niebieskim polu informacyjnym z etykietą „Org ID: {your_id}”.

Organization ID ma format UUID, wyglądający jak: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Możesz również znaleźć Organization ID klienta, wykonując następujące kroki:
1. Przejdź do strony **Customers** (Klienci)
2. Kliknij **Manage customer** (Zarządzaj klientem) dla odpowiedniego klienta
3. Sprawdź adres URL – Organization ID to alfanumeryczne znaki po `/customers/`

### 3. Pobierz swój Server ID {#3-get-your-server-id}

Aby znaleźć swój Server ID (wymagany do operacji domenowych):

1. W Enhance Control Panel przejdź do sekcji **Servers** (Serwery)
2. Kliknij serwer, na którym działa Twoja instalacja WordPressa
3. Server ID (format UUID) będzie widoczny w adresie URL lub szczegółach serwera
4. Alternatywnie możesz użyć API do wypisania list serwerów:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID ma format UUID: `00000000-0000-0000-0000-000000000000`

### 4. Pobierz swój API URL {#4-get-your-api-url}

Twój API URL to adres Twojego Enhance Control Panel z dodanym prefiksem `/api/`:

```
https://your-enhance-panel.com/api/
```

**Ważne:** Wymagany jest ścieżka `/api/`. Typowe błędy to:
- Używanie tylko domeny bez `/api/`
- Używanie HTTP zamiast HTTPS (HTTPS jest wymagane dla bezpieczeństwa)

## Konfiguracja {#configuration}

### Wymagane stałe {#required-constants}

Dodaj poniższe stałe do pliku `wp-config.php`:

// Pengeiku kontrolės panelio integracijos
define('WU_ENHANCE_API_TOKEN', 'jūsų-bearer-tokenas-čia');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'jūsų-serverio-uuid-čia');

### Naudojimo pagalba integracijos vaizdo (Wizard) per naują įrengimą {#setup-via-integration-wizard}

1. Jūsų WordPress admin panel'yje eikite į **Ultimate Multisite** > **Settings**.
2. Eikite į languotą **Integrations**.
3. Raskite **Enhance Control Panel Integration** ir paspauskite **Configuration**.
4. Vaizdo pagalba pabaigo jums:
   - **Žingsnis 1:** Pradedinis vaizduoti ir funkcijos peržiūra
   - **Žingsnis 2:** Įveskite savo API kredencijas (Tokenas, API URL, Serverio ID)
   - **Žingsnis 3:** Patikrinkite ryšį
   - **Žingsnis 4:** Peržiūrėkite ir aktyvuokite

Jūs galite pasirinkti:
- Leistite vaizdo pagalbai automatiškai įdėti konstantas į jūsų `wp-config.php` failą
- Kopijuoti konstanto definicijas ir pridėti juos manuai

## Papilio WordPress konfigūracija {#additional-wordpress-configuration}

Pagrindinių vartotojų atsiliepimų (diskusija #265) pagrindu, jums gali reikėti nustatyti šiuos papildomus nustatymus:

### .htaccess Konfigūracija {#htaccess-configuration}

Jei susirinksite problemų su domenų mapavimu:
1. Ištruskite originalų Enhance `.htaccess` failą
2. Pakeiskite jį standartiniu WordPress Multisite `.htaccess` failu

### Cookie konstantas {#cookie-constants}

Pridėkite šiuos konstantas į `wp-config.php`, kad užtikrintumėte tinkamą cookie valdymą mapavtų domenų metu:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kaip tai veikia {#how-it-works}

### Kai domenas yra mapuotas {#when-a-domain-is-mapped}

1. Użytkownik mapuje domenę niestandardową w Ultimate Multisite (lub tworzony jest nowa strona w trybie poddomeny)
2. Integracja wysyła żądanie POST do API Enhance: `/servers/{server_id}/domains`
3. Enhance dodaje domenę do konfiguracji Twojego serwera
4. Kiedy DNS rozwiąże się na Twój serwer, Enhance automatycznie udostępnia certyfikat SSL za pomocą LetsEncrypt
5. Domena staje się aktywna z HTTPS

### Kiedy domena jest usuwana {#when-a-domain-is-removed}

1. Usunięcie mapowania domeny w Ultimate Multisite
2. Integracja pyta Enhance o znalezienie ID domeny
3. Wysyłane jest żądanie DELETE do: `/servers/{server_id}/domains/{domain_id}`
4. Enhance usuwa domenę z konfiguracji Twojego serwera

### Sprawdzanie DNS i SSL {#dns-and-ssl-checking}

Ultimate Multisite zawiera wbudowane sprawdzanie DNS i SSL:
- Możesz skonfigurować interwał sprawdzania w **Ustawieniach mapowania domeny** (domyślne: 300 sekund/5 minut)
- System zweryfikuje propagację DNS przed oznaczaniem domeny jako aktywnej
- Ważność certyfikatu SSL jest sprawdzana automatycznie
- Enhance zajmuje się udostępnianiem SSL automatycznie, więc ręczna konfiguracja SSL nie jest wymagana

## Weryfikacja ustawień {#verifying-setup}

### Testowanie połączenia {#test-the-connection}

1. W Magiku Integracji użyj kroku **Test Connection** (Test Połączenia)
2. Plugin spróbuje wypisać domeny na Twoim serwerze
3. Wiadomość o sukcesie potwierdzi:
   - Dane uwierzytelniające API są poprawne
   - Adres URL API jest dostępny
   - ID serwera jest ważne
   - Uprawnienia są poprawnie ustawione

### Po mapowaniu domeny {#after-mapping-a-domain}

1. Mapuj domenę testową w Ultimate Multisite
2. Sprawdź logi Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Zweryfikuj w Enhance Control Panel, czy domena została dodana:
   - Przejdź do **Servers** > **Twój Serwer** > **Domains**
   - Nowa domena powinna pojawić się w liście
4. Po propagacji DNS zweryfikuj automatyczne udostępnienie SSL

## Troubleshooting {#troubleshooting}

### API Susijimai {#api-connection-issues}

**Klaida: "Failed to connect to Enhance API" (Nenodei sujungti prie Enhance API)**
- Patikrinkite, ar `WU_ENHANCE_API_URL` pabaigo `/api/`.
- Įsitikinkite, kad naudojate HTTPS, o ne HTTP.
- Patikrinkite, ar panelis Enhance yra pasiekiamas iš jūsų WordPress serverio.
- Patikrinkite, ar nėra firewall taisyklėmis, blokojančių sujungimą.

**Klaida: "Enhance API Token not found" (Enhance API token negalasis rasti)**
- Įsitikinkite, kad `WU_ENHANCE_API_TOKEN` yra nurodytas `wp-config.php`.
- Patikrinkite, ar token nėra ištrintas ar pasibaigęs Enhance sistema.
- Patikrinkite, ar nėra klaidos tokeno vertinimo metu.

**Klaida: "Server ID is not configured" (Server ID nėra nurodytas)**
- Įsitikinkite, kad `WU_ENHANCE_SERVER_ID` yra nurodytas `wp-config.php`.
- Patikrinkite, ar Server ID yra galiojamos UUID formatą.
- Patikrinkite, ar šis serveriui egzistuoja jūsų Enhance panelis.

### Domeno Nenaudotas (Domain Not Added) {#domain-not-added}

**Patikrinkite logus:**
1. Eikite į **Ultimate Multisite** > **Logs**.
2. Filtruokite pagal **integration-enhance**.
3. Paieškite klaidos pranešimus, signalizuojant problemą.

**Paprastai suvardžiami priežastys:**
- Nevalidus domenų vardų formatas.
- Domenas jau egzistuoja Enhance sistemoje.
- Nedafėtybos API įgaliai (patikrinkite, ar tokenui yra System Administrator vaidmuo).
- Serverio ID neatsižmina su iš tikrųjų serveriu Enhance.

### SSL Sertifikato Problemos {#ssl-certificate-issues}

**SSL neįrengiamas:**
- Patikrinkite, ar DNS pateikia jūsų serverio IP adresą.
- Patikrinkite, ar domenai laipsniame būdo atsiranda: `nslookup yourdomain.com`.
- Enhance reikalauja, kad DNS laipsnis būtų atsiųstas prieš tai, kol galės įrengti SSL sertifikatą.
- SSL įrengimas tipicamente trunka 5–10 minučių po DNS propagavimo.
- Patikrinkite Enhance Control Panel logus su specifinėmis klaidais susijusiomis su SSL.

**Manual SSL susijimo problema (troubleshooting) Enhance sistemaje:**
1. Eikite į **Servers** > **Your Server** > **Domains**.
2. Raskirkite savo domeną ir patikrinkite jo SSL statusą.
3. Jei reikia, galite nustarti SSL įrengimą privalomai.

### DNS Patikrinimo Intervalas {#dns-check-interval}

Jei domenai ar SSL sertifikatai vėliau nei reikalinga aktyvuoti:
1. Eikite į **Ultimate Multisite** > **Settings** > **Domain Mapping**.
2. Ieškokite nustatymą **DNS Check Interval**.
3. Pasirinkite nustatymą iš pradinio 300 sekundžių į mažesnę reikšmę (minimalus: 10 sekundžių).
4. **Paminėjimas:** Mažesnės intervalai reiškia dažnes patikrinimus, bet didesnį serverio apdailą.

### Autentifikacijos klaidos {#authentication-errors}

**HTTP 401/403 klaidos:**
- Regeneruokite savo API tokeną Enhance'yje.
- Patikrinkite, ar tokenas turi **System Administrator** vaidmenį.
- Patikrinkite, ar tokenas nepersėjo.
- Užtikrinkite, kad naudojate tinkamą Organizacijos ID (nors tai tipicamente nėra reikalinga URL adresui).

### Log analizė {#log-analysis}

Įjunkite detalius logai:
```php
// Įdėkite į wp-config.php geriausiai keisti
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Tada patikrinkite logus šiuose vietoose:
- Ultimate Multisite logai: **Ultimate Multisite** > **Logs**.
- WordPress debug logas: `wp-content/debug.log`.
- Enhance panel logai: Išvengiami Enhance admin sąsajos peržiūroje.

## API Referencijos {#api-reference}

### Autentifikacija {#authentication}
Visos API prašymai naudoja Bearer token autentifikaciją:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Dažniai naudojami endpointai {#common-endpoints-used}

**Skelbti serverius:**
```
GET /servers
```

**Skelbti domenus viename serverioje:**
```
GET /servers/{server_id}/domains
```

**Pridėti domeną:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Ištrinti domeną:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Pilna API dokumentacija {#full-api-documentation}
Pilna API dokumentacija: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Geriaus praktikos {#best-practices}

### Sauga {#security}
- **Nukite API tokeną į versijos kontrolį**
- Saugokite tokenus `wp-config.php` daryje, kuris turi būti išskirtas Git'e
- Naudokite tokenus su tinkamais įgaliais (System Administrator visai integraciniam naudojimui)
- Nustatykite tokenų gyviejo sąlygas produktacinioje aplinkoje
- Per periodą rotuokite tokenus

### Naudojumas {#performance}
- Naudokite standartinį DNS patikrinimo intervalą (300 sekundžių), kad išvengtumėte perlikų API pakuotinių
- Stabdžiai serverio resursus, jei atlikote didelį domenų operacijas
- Galite laikyti domenų pridėjimo laiko, jei vienu metu mapuojate daug domenų

### Stabdžiai {#monitoring}
- Reguliariai patikrinkite Ultimate Multisite logus integracijos klaidos
- Nustatykite stabdžių domenų pridėjimo operacijoms
- Patikrinkite, ar SSL sertifikatai tinkamai įdiegiami
- Stabdžiai serverio pajėgumą ir domenų ribas

## Papildomi resursai {#additional-resources}

- **Enhance oficialus dokumentacija:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API dokumentacija:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance bendruomenės forumas:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub diskusija:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite domenų mapavimo gidas:** Paskutinis wiki puslapis "Kaip nustatyti domenų mapavimą v2"

## Pastabos {#support}

Jei susirinksite problemų:
1. Patikrinkite viršaus Stabdžių sekciją
2. Peržiūrėkite Ultimate Multisite logus
3. Konsultuokite [GitHub diskusijas](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Susisnuokite su Enhance sauga panelio specifinių problemų dėl panelio
5. Kurkite naują diskusiją su detaliomis klaidos logais bendruomenės pagalba

Ši integracija palaiko tik domenų aliasus; Enhance automatiškai valdo SSL sertifikatus.
Integracija palaiko tiek pritaikytą domenų netyrinimą, tiek svetainius pagal subdomenų bazę.
Automatinio www subdominio kūrimai galima nustatyti Domenų netyrinimo (Domain Mapping) nustatyjimu.
Enhance šiuo metu palaiko Apache konfigūruojimus (prieinoma LiteSpeed Enterprise).
Domeno pašalinimas iš Ultimate Multisite pašalys domeną iš Enhance, bet susiję SSL sertifikatai gali nebus ištrinti tiesiogiai.
