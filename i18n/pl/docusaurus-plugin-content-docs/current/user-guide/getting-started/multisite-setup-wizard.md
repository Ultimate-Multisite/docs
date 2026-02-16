---
title: Kreator konfiguracji Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Kreator konfiguracji Multisite

Ultimate Multisite zawiera wbudowany kreator, który automatycznie przekształca standardową instalację WordPress w sieć WordPress Multisite. Dzięki temu nie trzeba ręcznie edytować pliku `wp-config.php` ani uruchamiać poleceń bazodanowych.

:::tip
Jeśli Twoja instalacja WordPress już działa jako sieć Multisite, możesz pominąć ten krok. Kreator pojawia się tylko wtedy, gdy funkcja Multisite nie jest jeszcze włączona.
:::

## Kiedy pojawia się kreator?

Gdy aktywujesz Ultimate Multisite na standardowej instalacji WordPress (bez Multisite), wtyczka wykrywa, że Multisite nie jest włączony i automatycznie przekierowuje Cię do Kreatora konfiguracji Multisite zamiast do zwykłego kreatora ustawień.

Możesz też przejść do niego bezpośrednio: **WP Admin > Ultimate Multisite > Multisite Setup**.

## Wymagania wstępne

Przed uruchomieniem kreatora upewnij się, że:

- Masz **dostęp administratora** do swojej instalacji WordPress
- Plik `wp-config.php` na Twoim serwerze jest **zapisywalny** przez serwer WWW
- Masz **aktualną kopię zapasową** plików i bazy danych

:::warning
Kreator modyfikuje plik `wp-config.php` i tworzy nowe tabele w bazie danych. Zawsze wykonaj kopię zapasową przed kontynuowaniem.
:::

## Krok 1: Powitanie

Pierwszy ekran wyjaśnia, czym jest WordPress Multisite i co zrobi kreator:

- Włączy funkcję Multisite w konfiguracji WordPress
- Utworzy niezbędne tabele sieciowe w bazie danych
- Doda wymagane stałe multisite do pliku `wp-config.php`
- Aktywuje Ultimate Multisite na poziomie całej sieci

![Kreator konfiguracji Multisite - Ekran powitalny](/img/installation/multisite-wizard/wizard-welcome.png)

Kliknij **Continue**, aby przejść dalej.

## Krok 2: Konfiguracja sieci

W tym kroku konfigurujesz ustawienia swojej sieci.

### Struktura stron

Wybierz sposób organizacji stron w Twojej sieci:

- **Subdomeny** (Zalecane) — Każda strona otrzymuje własną subdomenę, np. `site1.twojadomena.com`
- **Podkatalogi** — Strony są tworzone jako ścieżki, np. `twojadomena.com/site1`

:::note
Jeśli wybierzesz subdomeny, musisz skonfigurować **wildcard DNS** oraz **certyfikat SSL z obsługą wildcard** dla swojej domeny. Większość zarządzanych hostingów WordPress obsługuje to automatycznie. Zobacz [Ultimate Multisite 101](./ultimate-multisite-101), aby poznać szczegółowe porównanie.
:::

### Nazwa sieci

Wpisz nazwę swojej sieci. Domyślnie jest to tytuł Twojej obecnej strony z dopiskiem „Network". Możesz to zmienić później w ustawieniach sieci.

### E-mail administratora sieci

Adres e-mail używany do powiadomień związanych z administracją sieci. Domyślnie jest to adres e-mail aktualnie zalogowanego użytkownika.

![Kreator konfiguracji Multisite - Konfiguracja sieci](/img/installation/multisite-wizard/wizard-network-configuration.png)

Po wypełnieniu pól kliknij **Continue**, aby przejść dalej.

## Krok 3: Instalacja

Kliknij przycisk **Install**, aby rozpocząć. Kreator wykonuje pięć zautomatyzowanych kroków w określonej kolejności, pokazując postęp każdego z nich w czasie rzeczywistym:

![Kreator konfiguracji Multisite - Instalacja w toku](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Krok | Opis |
|------|------|
| **Enable Multisite** | Dodaje stałą `WP_ALLOW_MULTISITE` do pliku `wp-config.php` |
| **Create Network** | Tworzy tabele bazy danych multisite (`wp_site`, `wp_sitemeta`, `wp_blogs` itd.) i wypełnia je konfiguracją Twojej sieci |
| **Update Configuration** | Dodaje końcowe stałe multisite do pliku `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` itd.) |
| **Fix Cookies** | Sprawdza poprawność adresu URL strony w metadanych sieci, aby zapobiec problemom z uwierzytelnianiem po aktywacji |
| **Network Activate Plugin** | Aktywuje Ultimate Multisite na poziomie sieci, aby działał we wszystkich stronach |

Każdy krok wyświetla jeden z następujących statusów:

- **Pending** — Oczekuje na przetworzenie
- **Installing...** — Aktualnie w trakcie realizacji
- **Success!** — Zakończony pomyślnie
- **Komunikat błędu** — Wystąpił błąd (komunikat opisze problem)

Po pomyślnym zakończeniu wszystkich kroków zobaczysz zielony status „Success!" przy każdej pozycji:

![Kreator konfiguracji Multisite - Instalacja zakończona](/img/installation/multisite-wizard/wizard-installation-complete.png)

Kreator automatycznie przejdzie do ekranu zakończenia.

## Krok 4: Zakończenie

Po zakończeniu instalacji zobaczysz komunikat o sukcesie potwierdzający, że WordPress Multisite został włączony.

![Kreator konfiguracji Multisite - Konfiguracja zakończona](/img/installation/multisite-wizard/wizard-complete.png)

Możesz teraz kontynuować z kreatorem ustawień Ultimate Multisite, aby skonfigurować swoją platformę WaaS (dane firmy, domyślna zawartość, bramki płatności itp.).

:::note
Po zakończeniu instalacji multisite Twoja przeglądarka przekieruje Cię przez nowo włączony panel administracyjny sieci. Może być konieczne ponowne zalogowanie, ponieważ ciasteczka uwierzytelniające są aktualizowane dla środowiska multisite.
:::

## Ręczna konfiguracja jako alternatywa

Jeśli kreator nie może zapisać do pliku `wp-config.php` (z powodu uprawnień do plików lub ograniczeń serwera), wyświetli dokładny kod, który musisz dodać ręcznie:

1. **Stałe wp-config.php**, które należy dodać powyżej linii `/* That's all, stop editing! */`
2. **Reguły przekierowań .htaccess** odpowiednie dla wybranej struktury stron (subdomeny lub podkatalogi)

Po wprowadzeniu ręcznych zmian odśwież stronę, a kreator wykryje, że multisite jest już aktywny.

## Rozwiązywanie problemów

### Kreator informuje, że wp-config.php nie jest zapisywalny

Proces serwera WWW potrzebuje uprawnień do zapisu w pliku `wp-config.php`. Możesz:

- Tymczasowo zmienić uprawnienia pliku na `644` lub `666`
- Skorzystać z instrukcji ręcznej konfiguracji wyświetlonych przez kreator
- Poprosić dostawcę hostingu o pomoc

### Strony nie są dostępne po konfiguracji (subdomeny)

Jeśli wybrałeś strukturę subdomen, musisz skonfigurować **wildcard DNS** dla swojej domeny. Dodaj rekord DNS:

```
Type: A (or CNAME)
Host: *
Value: [adres IP Twojego serwera]
```

Skontaktuj się z dostawcą hostingu, jeśli nie wiesz, jak to skonfigurować.

### Problemy z uwierzytelnianiem po konfiguracji

Jeśli zostałeś wylogowany lub występują błędy ciasteczek po konfiguracji multisite:

1. Wyczyść ciasteczka przeglądarki dla tej strony
2. Zaloguj się ponownie pod adresem `twojadomena.com/wp-login.php`
3. Jeśli problem nie ustępuje, sprawdź, czy w pliku `wp-config.php` stała `COOKIE_DOMAIN` nie jest ustawiona na `false` — to znany problem w instalacjach multisite z subdomenami

### Jeden z kroków zakończył się błędem podczas instalacji

Jeśli jeden z kroków instalacji wyświetla błąd:

1. Zanotuj wyświetlony komunikat błędu
2. Wróć do kroku konfiguracji i spróbuj ponownie
3. Jeśli błąd się powtarza, sprawdź log błędów PHP na swoim serwerze, aby uzyskać więcej szczegółów
4. Kroki, które zostały już ukończone, będą pominięte przy kolejnych uruchomieniach (instalator jest idempotentny)
