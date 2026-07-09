---
title: Integracja CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integracja z CyberPanel {#cyberpanel-integration}

Ten przewodnik wyjaśnia, jak skonfigurować integrację Ultimate Multisite z CyberPanel, aby domeny przypisane do Twojej sieci były automatycznie dodawane (i usuwane) jako wirtualne hosty w CyberPanel, z opcjonalnym automatycznym provisionowaniem SSL za pomocą Let's Encrypt.

## Co to robi {#what-it-does}

*   Gdy domena zostanie przypisana w Ultimate Multisite, integracja wywołuje API CyberPanel, aby utworzyć wirtualny host dla tej domeny.
*   Gdy przypisanie domeny zostanie usunięte, integracja wywołuje API w celu usunięcia odpowiadającego mu wirtualnego hosta.
*   Jeśli automatyczny SSL jest włączony, integracja natychmiast wyzwala wydanie certyfikatu Let's Encrypt po utworzeniu wirtualnego hosta.
*   Opcjonalnie dodaje/usuwa alias `www.` w zależności od ustawienia „Auto-create www subdomain” w ustawieniach Domain Mapping.

## Wymagania wstępne {#prerequisites}

*   Działająca instancja CyberPanel (zalecana wersja 2.3 lub nowsza), dostępna z Twojego serwera WordPress.
*   Istniejąca witryna w CyberPanel, która już obsługuje główny katalog Twojej sieci WordPress. Integracja dołącza nowe wirtualne hosty do tego serwera.
*   Włączony dostęp do API CyberPanel. Uwierzytelnianie odbywa się za pomocą nazwy użytkownika i hasła administratora CyberPanel.
*   Twoje rekordy DNS dla przypisanych domen muszą już wskazywać na adres IP Twojego serwera, zanim automatyczny SSL będzie mógł wydać ważny certyfikat.

## Wymagania {#requirements}

W pliku `wp-config.php` muszą być zdefiniowane następujące stałe:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcjonalnie możesz również zdefiniować:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Domyślnie: true — wydawanie SSL Let's Encrypt po utworzeniu domeny
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Domyślnie: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Używane do kontaktu przy certyfikatach SSL
```

## Instrukcje konfiguracji {#setup-instructions}

### 1. Włączenie API CyberPanel {#1-enable-the-cyberpanel-api}

1. Zaloguj się do pulpitu nawigacyjnego CyberPanel jako administrator.
2. Przejdź do **Security** > **SSL** i upewnij się, że SSL jest aktywne na samym interfejsie CyberPanel (jest to wymagane do bezpiecznych wywołań API).
3. API CyberPanel jest domyślnie dostępne pod adresem `https://your-server-ip:8090/api/`. Nie są potrzebne dodatkowe kroki, aby je włączyć — jest ono włączone domyślnie dla użytkowników administratorów.

### 2. Dodanie stałych do wp-config.php {#2-add-constants-to-wp-configphp}

Dodaj następujące stałe do pliku `wp-config.php` przed linią `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Aby włączyć automatyczny SSL (zalecane):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Włączenie integracji {#3-enable-the-integration}

1. W panelu administracyjnym sieci WordPress przejdź do **Ultimate Multisite** > **Settings**.
2. Przejdź do zakładki **Domain Mapping**.
3. Przewiń w dół do **Host Integrations**.
4. Włącz integrację **CyberPanel**.
5. Kliknij **Save Changes**.

### 4. Weryfikacja łączności {#4-verify-connectivity}

Użyj wbudowanego testu połączenia w kreatorze ustawień:

1. Przejdź do **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Kliknij **Test Connection**.
3. Pojawi się komunikat o sukcesie, potwierdzający, że plugin może się połączyć z API CyberPanel i poprawnie uwierzytelnić.

## Jak to działa {#how-it-works}

### Domain Mapping {#domain-mapping}

Gdy domena zostanie przypisana w Ultimate Multisite:

1. Integracja wysyła żądanie `POST` do `/api/createWebsite` na host CyberPanel.
2. CyberPanel tworzy nowy wirtualny host dla domeny w ramach skonfigurowanego pakietu.
3. Katalog główny jest ustawiany tak, aby wskazywał na katalog główny sieci WordPress.
4. Gdy przypisanie domeny zostanie usunięte, integracja wywołuje `/api/deleteWebsite`, aby usunąć wirtualny host.

### Auto-SSL {#auto-ssl}

Gdy `WU_CYBERPANEL_AUTO_SSL` ma wartość `true`:

1. Po utworzeniu wirtualnego hosta, integracja wywołuje `/api/issueSSL` dla domeny.
2. CyberPanel żąda certyfikatu Let's Encrypt, używając wyzwania ACME HTTP-01.
3. Certyfikat jest automatycznie odnawiany przez CyberPanel przed wygaśnięciem.

> **Ważne:** DNS musi być w pełni propagowany do adresu IP Twojego serwera, zanim Let's Encrypt będzie mógł zweryfikować domenę. Jeśli wydanie SSL nie powiedzie się natychmiast po przypisaniu, poczekaj na propagację DNS i ponownie wyzwól SSL z pulpitu nawigacyjnego CyberPanel w sekcji **SSL** > **Manage SSL**.

### Poddomena www {#www-subdomain}

Jeśli **Auto-create www subdomain** jest włączone w ustawieniach Domain Mapping, integracja tworzy również alias wirtualnego hosta dla `www.<domena>` i, gdy automatyczny SSL jest włączony, wydaje certyfikat obejmujący zarówno adres główny (apex), jak i www.

### Przekierowania e-mail {#email-forwarders}

Gdy dodatek [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) jest aktywny, CyberPanel może również zapewniać przekierowania e-mail dla klientów. Przekierowania kierują wiadomości z adresu domeny do innej skrzynki odbiorczej bez tworzenia pełnej skrzynki pocztowej, co jest przydatne dla aliasów takich jak `info@customer-domain.test` lub `support@customer-domain.test`.

Przed włączeniem przekierowań dla klientów:

1. Upewnij się, że stałe CyberPanel wymienione powyżej są skonfigurowane i test połączenia się powiódł.
2. Włącz dostawcę e-mail CyberPanel w ustawieniach dodatku Emails.
3. Upewnij się, że domena klienta istnieje już w CyberPanel, zanim utworzysz przekierowanie.
4. Utwórz testowe przekierowanie i wyślij przez nie wiadomość, zanim udostępnisz tę funkcję na planach produkcyjnych.

Jeśli utworzenie przekierowania się nie powiedzie, najpierw sprawdź logi aktywności Ultimate Multisite, a następnie upewnij się w CyberPanel, że domena źródłowa istnieje i że użytkownik API ma uprawnienia do zarządzania e-mailami.

## Odniesienie do konfiguracji {#configuration-reference}

| Stała | Wymagane | Domyślne | Opis |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Tak | — | Pełny URL do Twojej instancji CyberPanel, włączając port, np. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Tak | — | Nazwa użytkownika administratora CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Tak | — | Hasło administratora CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Tak | `Default` | Pakiet hostingu CyberPanel, który ma być przypisany do nowych wirtualnych hostów |
| `WU_CYBERPANEL_AUTO_SSL` | Nie | `true` | Wydawanie certyfikatu SSL Let's Encrypt po utworzeniu domeny |
| `WU_CYBERPANEL_PHP_VERSION` | Nie | `PHP 8.2` | Wersja PHP dla nowych wirtualnych hostów (musi odpowiadać wersji zainstalowanej w CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nie | — | Adres e-mail kontaktowy do rejestracji certyfikatów SSL |

## Ważne uwagi {#important-notes}

*   API CyberPanel używa uwierzytelniania tokenami opartymi na sesjach. Integracja automatycznie obsługuje pozyskiwanie tokenów przy każdym wywołaniu API.
*   Twoje konto administratora CyberPanel musi mieć uprawnienia do tworzenia i usuwania witryn.
*   CyberPanel domyślnie działa na porcie `8090`. Jeśli Twój serwer używa zapory sieciowej (firewall), upewnij się, że ten port jest dostępny z serwera aplikacji WordPress.
*   Integracja nie zarządza rekordami DNS. Musisz wskazać DNS domeny na adres IP swojego serwera, zanim przypiszesz domenę w Ultimate Multisite.
*   Jeśli używasz OpenLiteSpeed (OLS), po zmianach w wirtualnych hostach automatycznie wyzwala się łagodne ponowne uruchomienie (graceful restart). Nie jest wymagana żadna interwencja ręczna.

## Rozwiązywanie problemów {#troubleshooting}

### Połączenie API odrzucone (Connection Refused) {#api-connection-refused}

*   Sprawdź, czy port `8090` jest otwarty w zapora sieciowa Twojego serwera.
*   Upewnij się, że wartość `WU_CYBERPANEL_HOST` zawiera poprawny protokół (`https://`) i port.
*   Sprawdź, czy certyfikat SSL w CyberPanel jest ważny; certyfikaty samo-podpisane mogą powodować błędy weryfikacji TLS. Ustaw `WU_CYBERPANEL_VERIFY_SSL` na `false` tylko w zaufanym środowisku prywatnej sieci.

### Błędy uwierzytelniania (Authentication Errors) {#authentication-errors}

*   Potwierdź, że Twoje `WU_CYBERPANEL_USERNAME` i `WU_CYBERPANEL_PASSWORD` są poprawne, logując się bezpośrednio do CyberPanel.
*   CyberPanel blokuje konta po wielokrotnych nieudanych próbach logowania. Sprawdź **Security** > **Brute Force Monitor** w CyberPanel, jeśli wystąpią blokady.

### Domena nie została utworzona (Domain Not Created) {#domain-not-created}

*   Sprawdź log aktywności Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) w poszukiwaniu komunikatów o błędach API.
*   Upewnij się, że pakiet określony w `WU_CYBERPANEL_PACKAGE` istnieje w CyberPanel (**Packages** > **List Packages**).
*   Upewnij się, że domena nie jest już zarejestrowana jako witryna w CyberPanel — próba utworzenia duplikującej się witryny zwróci błąd.

### Certyfikat SSL nie został wydany (SSL Certificate Not Issued) {#ssl-certificate-not-issued}

*   Potwierdź, że DNS w pełni się rozprzestrzenił (propagated): `dig +short your-domain.com` powinno zwrócić adres IP Twojego serwera.
*   Let's Encrypt narzuca limity wydawania. Jeśli niedawno wydałeś kilka certyfikatów dla tej samej domeny, poczekaj przed ponowną próbą.
*   Sprawdź logi SSL w CyberPanel w sekcji **Logs** > **Error Logs**, aby uzyskać szczegóły dotyczące błędów wydawania certyfikatów.
*   Jako rozwiązanie awaryjne możesz wydać SSL ręcznie z CyberPanel: **SSL** > **Manage SSL** > wybierz domenę > **Issue SSL**.

## Odniesienia {#references}

- Dokumentacja API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Zarządzanie SSL w CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Limity wydawania Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
