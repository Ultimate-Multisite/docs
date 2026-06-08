---
title: Zmiany w Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Zmiany w Captcha

Wersja: 1.5.0 - Wydano 2026-05-22
* Nowość: Ogranicznik liczby żądań typu hard-stop — liczy każde żądanie GET i POST na zabezpieczonych stronach (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) i odpowiada kodem HTTP 429, nagłówkiem `Retry-After` oraz losowym opóźnieniem (tarpit sleep) w zakresie 1–5 sekund (maksymalnie 15 sekund).
* Nowość: Ustawienia `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` pozwalające dostosować okno działania opóźnienia.
* Nowość: Filtr `wu_cap_rate_limit_whitelist_ip` do wyłączenia z limitowania określonych zakresów IP.
* Nowość: Akcja `wu_cap_rate_limit_will_block`, która wyzwala się tuż przed wysłaniem odpowiedzi typu hard-stop.
* Nowość: Wykrywanie adresu IP klienta odporne na podszywanie się. Funkcja `Captcha_Core::get_client_ip()` (źródło prawdy dla kluczy koszyka limitowania żądań, captcha siteverify `remoteip` oraz haszy IP statystyk) teraz wymusza ścisły model zaufania: `REMOTE_ADDR` jest podstawą, `CF-Connecting-IP` jest uwzględniany tylko wtedy, gdy bezpośredni peer znajduje się w bieżącym zakresie IP Cloudflare, a `X-Forwarded-For` jest uwzględniany tylko wtedy, gdy bezpośredni peer znajduje się w liście zaufanych proxy skonfigurowanych w panelu administracyjnym, z przechodzeniem od prawej do lewej, które pomija zaufane/CF skoki, zanim ustali adres IP odwiedzającego.
* Nowość: Ustawienie `cap_trust_cloudflare_headers` (domyślnie WYŁĄCZONE) — możliwość włączenia zaufania do `CF-Connecting-IP` w przypadku działania za Cloudflare. Plugin zawiera pakietowy zrzut CIDR Cloudflare i odświeża go cotygodniowo za pomocą wp-cron, z zapasowym mechanizmem w przypadku niepowodzenia odświeżenia.
* Nowość: Ustawienie `cap_trusted_proxies` — pole tekstowe z CIDR-ami lub surowymi adresami IP (po jednym na linię, dozwolone komentarze `#`) zawierające adresy proxy / load-balancerów, które są na pierwszej linii. Bez tego, `X-Forwarded-For` jest ignorowany nawet wtedy, gdy limitowanie żądań jest włączone.
* Nowość: Automatyczne wykrywanie prawdopodobnego środowiska Cloudflare / proxy przy pierwszym włączeniu, z komunikatem w panelu administracyjnym „Zastosuj wykryte ustawienia”. Plugin nigdy nie nadpisuje zapisanych wartości; jeśli późniejszy ruch sugeruje, że konfiguracja nie odpowiada rzeczywistości (np. Cloudflare zmienił zakresy CIDR, a Twój zakres proxy jest przestarzały), pojawia się nieusuwalny komunikat o niezgodności z zalecaną aktualizacją.
* Poprawiono: Tryb niewidoczny nie obniża już cicho `cap_security_level` do FAST — jest respektowany poziom skonfigurowany przez administratora. Dostępny jest nowy filtr `wu_cap_server_security_level` dla stron, które chcą mieć niestandardową logikę.
* Poprawiono: Licznik statystyk `rate_limits_triggered` zwiększa się teraz przy każdym zablokowaniu, a nie tylko na rzadkiej ścieżce powrotnej po pomyślnym przejściu.
* Poprawiono: `Captcha_Core::get_client_ip()` jest teraz jedynym źródłem prawdy dla przypisania adresu IP odwiedzającego w zakresie limitowania żądań, dostawców captcha (reCAPTCHA + hCaptcha `siteverify`) i statystyk — zamyka wektor podszywania się, w którym bezpośrednie żądania z oryginalnego serwera z fałszywym nagłówkiem `CF-Connecting-IP` mogły zostać przypisane do podszywanego IP zamiast rzeczywistego peer-a.
* Poprawiono: Bramka limitowania żądań dla klasycznego checkoutu WooCommerce wyzwala się teraz na `template_redirect` (priorytet 1) zamiast `woocommerce_before_checkout_form`. Hook na poziomie formularza nigdy nie wyzwala się, gdy koszyk jest pusty, więc ruch typu zalew, który nigdy nie dodawał produktu, omijał limitator.
* Poprawiono: Bramka limitowania żądań dla płatności za zamówienie WooCommerce wyzwala się teraz na `template_redirect` zamiast `woocommerce_before_pay_action`. Ostatni wyzwala się tylko po pomyślnym wykonaniu `wp_verify_nonce('woocommerce-pay')`, co oznacza, że nieautoryzowani atakujący (rzeczywisty model zagrożenia) nigdy nie aktywowali limitatora.
* Poprawiono: Bramka limitowania żądań dla checkoutu WooCommerce Store API (bloków) wyzwala się teraz na `rest_pre_dispatch` zamiast `woocommerce_store_api_checkout_update_order_from_request`. Ostatni wyzwala się tylko po walidacji koszyka i pól rozliczeniowych przez Store API, więc nieautoryzowane boty otrzymały 400 od walidatora i nigdy nie aktywowały limitatora.
* Poprawiono: Bramka limitowania żądań dla inline-login Ultimate Multisite wyzwala się teraz na `wu_ajax_nopriv_wu_inline_login` priorytet 1 (i lustrzany dla zalogowanych) zamiast `wu_before_inline_login`. Ostatni wyzwala się tylko po pomyślnym wykonaniu `check_ajax_referer('wu_checkout')`, więc nieautoryzowane boty bez ważnego noncu `wu_checkout` otrzymały 403 i nigdy nie aktywowały limitatora.
* Poprawiono: `Rate_Limiter::enforce()` teraz stosuje ochronę typu raz na żądanie, kluczowaną przez `surface|ip`, dzięki czemu hooki wyzwalane dwa razy podczas renderowania (zwłaszcza `wu_setup_checkout` w Ultimate Multisite) nie zmniejszają efektywnego progu limitowania żądań.
* Poprawiono: Bramki limitowania żądań nie konsultują już `Captcha_Core::is_whitelisted()` (filtr `wu_captcha_whitelisted`). Ten filtr sygnalizuje „captcha już obsłużony przez inną bramkę” i jest niezależny od ochrony przed zalewem — integracja WooCommerce hakowała go, aby pominąć captcha logowania WordPress, gdy był obecny nonce Woo, co wpłynęło na liczenie żądań i pozwoliło POST-om Woo ominąć limitator. Jedyny bypass, który działa teraz, to specyficzny dla limitowania żądań filtr `wu_cap_rate_limit_whitelist_ip`.

Wersja: 1.3.2 - Wydano 2026-01-27
* Poprawiono: Widget Captcha nie renderuje się na formularzach checkout używających Elementora lub innych page builderów.
* Poprawiono: Element niestandardowy `cap-widget` jest usuwany przez sanitację `wp_kses()`.
* Ulepszono: Użycie treści wywoływalnej dla pola captcha w checkout, aby ominąć filtrowanie HTML.
* Ulepszono: Uproszczony JavaScript z mechanizmem zapasowym dla przypadków brzegowych.

Wersja: 1.3.1 - Wydano 2026-01-26
* Poprawiono: Tryb niewidoczny Captcha nie rozwiązuje automatycznie na dynamicznych formularzach checkout Ultimate Multisite.
* Ulepszono: Skrypt checkout Captcha używa MutationObserver do wykrywania dynamicznie ładowanych widgetów.
* Ulepszono: Dodano przechwytywanie przycisku checkout, aby czekać na token przed wysłaniem.

Wersja: 1.3.0 - Wydano 2026-01-27
* Nowość: Integracja checkout WooCommerce Blocks z przechwytywaniem pobierania Store API.
* Nowość: Wsparcie dla niewidocznego captcha w checkout WooCommerce (hCaptcha niewidoczny, reCAPTCHA v2 niewidoczny, v3).
* Nowość: Samodzielna strona ustawień do użycia bez Ultimate Multisite.
* Nowość: Jetpack Autoloader w celu zapobiegania konfliktom zależności.
* Poprawiono: hCaptcha nie renderuje się na dynamicznym checkoutie Ultimate Multisite (zawartość ładowana przez AJAX).
* Poprawiono: Captcha nie odświeża się/resetuje w przypadku błędów walidacji formularza.
* Poprawiono: hCaptcha nie wyświetla się na stronie checkout WooCommerce.
* Poprawiono: Błąd „reCAPTCHA class not found” (dodano bibliotekę PHP google/recaptcha).
* Ulepszono: Wykrywanie błędów za pomocą hooków WordPress, MutationObserver i przechwytywania AJAX.
* Ulepszono: Opisy ustawień zawierają teraz adresy URL dashboard dla kluczy API.

Wersja: 1.2.2 - Wydano 2026-01-24
* Poprawiono: Captcha nie wyświetla się na elemencie formularza Ultimate Multisite Login Form (niezgodność nazwy filtra formularza).
* Poprawiono: HTML widgetu Captcha jest usuwany przez sanitację `wp_kses()`.
* Poprawiono: Selektory JavaScript nie znajdują formularzy z ukośnikami w identyfikatorach elementów.
* Dodano: Hook filtra `wu_kses_allowed_html` dla classaddons, aby rozszerzyć dozwolone tagi HTML.
* Usunięto: Pliki JavaScript z martwym kodem zastąpione skryptami specyficznymi dla dostawcy.

Wersja: 1.2.1 - Wydano 2026-01-23

* Poprawiono: Walidacja tokena Captcha zawodzi w środowiskach multisite (teraz używa transientów na poziomie sieci).
* Poprawiono: Captcha renderuje się teraz spójnie dla wszystkich użytkowników, niezależnie od statusu logowania.
* Poprawiono: Niezgodność między renderowaniem a walidacją captcha, która powodowała błędy checkoutu.

Wersja: 1.2.0 - Wydano 2026-01-21

* Nowość: Cap Captcha - self-hosted proof-of-work captcha, domyślnie włączony po aktywacji.
* Nowość: Ochrona zero-konfiguracyjna — aktywuj addon i jesteś natychmiast chroniony.
* Nowość: Architektura wielokształtnego dostawcy captcha (Polymorphic) dla łatwej rozszerzalności.
* Nowość: Ochrona checkout WooCommerce Store API przed atakami testowania kart.
* Nowość: Dashboard śledzenia statystyk pokazujący wyzwania, weryfikacje i zablokowane ataki.
* Nowość: Wstępne ustawienia poziomu bezpieczeństwa (Fast, Medium, Max) dla trudności Cap Captcha.
* Nowość: Klasy bazowe dla dostawców reCAPTCHA i hCaptcha.
* Ulepszono: Przeprojektowany kod źródłowy na modułowe klasy dostawców.
* Ulepszono: Lepsza separacja odpowiedzialności dzięki dedykowanej klasie menedżera.
* Poprawiono: Ulepszenia bezpieczeństwa dla sanitacji zmiennej $_SERVER.
* Poprawiono: Konfiguracja testów PHPUnit dla konwencji nazewnictwa WordPress.

Wersja: 1.0.1 - Wydano 2025-09-28

* Zmieniono prefiks na ultimate-multisite; zaktualizowano domena tekstu; zwiększono numer wersji.
