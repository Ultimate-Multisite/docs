---
title: Konfigurowanie PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Konfigurowanie bramki PayPal (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Na naszej stronie ustawień płatności możesz aktywować do czterech metod płatności: Stripe, Stripe Checkout, PayPal i Ręczna. W tym artykule zobaczymy, jak zintegrować się z **PayPal**.

Podobnie jak Stripe, PayPal jest szeroko używany do płatności online, zwłaszcza na stronach WordPress. Ten artykuł pokaże Ci, jak używać PayPal jako metody płatności dostępnej w Twojej sieci.

Pamiętaj, że musisz mieć **konto PayPal Business**, aby uzyskać dane uwierzytelniające API potrzebne do tej integracji.

## Włączanie PayPal w Twojej sieci {#enabling-paypal-on-your-network}

Aby włączyć PayPal jako dostępną metodę płatności w Twojej sieci, przejdź do karty **Ultimate Multisite > Ustawienia > Płatności** i zaznacz pole obok PayPal.

![Włączanie PayPal w aktywnych bramkach płatności](/img/config/settings-payment-gateways.png)

## Korzystanie z prowadzonego kreatora konfiguracji {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 dodaje prowadzony kreator konfiguracji PayPal do ustawień bramki płatności. Po włączeniu PayPal użyj kreatora w **Ultimate Multisite > Ustawienia > Płatności**, aby wybrać, jak chcesz połączyć bramkę, i potwierdzić, które dane uwierzytelniające są nadal potrzebne przed zapisaniem.

Kreator obsługuje dwie ścieżki konfiguracji:

* **Ręczne wprowadzanie danych uwierzytelniających**: Użyj tej ścieżki, gdy masz już dane uwierzytelniające PayPal API, gdy konfiguracja OAuth nie jest dostępna dla Twojego konta albo gdy wolisz samodzielnie skopiować dane uwierzytelniające z PayPal. Wprowadź API Username, API Password i API Signature w polach PayPal, a następnie zapisz ustawienia płatności.
* **Brama połączenia OAuth**: Użyj tej ścieżki tylko wtedy, gdy opcja OAuth jest dostępna i włączona dla Twojej instalacji. Kreator pokazuje przepływ OAuth za flagą funkcji, więc sieci bez tej flagi nadal używają pól ręcznego wprowadzania danych uwierzytelniających.

Jeśli nie widzisz opcji OAuth w kreatorze, wykonaj poniższy przepływ ręcznego wprowadzania danych uwierzytelniających. Bramka działa z tymi samymi danymi uwierzytelniającymi PayPal Business API co poprzednie wydania Ultimate Multisite 2.x.

## Uzyskiwanie danych uwierzytelniających PayPal API {#getting-the-paypal-api-credentials}

Gdy PayPal zostanie włączony jako bramka płatności, musisz wypełnić pola PayPal API **Username**, PayPal API **Password** i PayPal API **Signature**.

Możesz je uzyskać, logując się na swoje konto PayPal [Live](https://www.paypal.com/home) lub [Sandbox](https://www.sandbox.paypal.com/home).

(Pamiętaj, że możesz użyć **trybu sandbox**, aby przetestować płatności i sprawdzić, czy bramka jest poprawnie skonfigurowana. Wystarczy włączyć odpowiednią sekcję.)

![Pola danych uwierzytelniających PayPal API i przełącznik trybu sandbox](/img/config/settings-payment-gateways.png)

Aby poprosić o dane uwierzytelniające API Signature lub Certificate dla swojego konta PayPal:

  1. Przejdź do [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. W sekcji **Dostęp API** kliknij **Aktualizuj**.
![PayPal Account Settings z sekcją dostępu API](/img/config/settings-payment-gateways.png)

  3. W obszarze **Integracja NVP/SOAP API (Classic)** kliknij **Zarządzaj danymi uwierzytelniającymi API**.
![Integracja PayPal NVP/SOAP API — Zarządzaj danymi uwierzytelniającymi API](/img/config/settings-payment-gateways.png)

     * Jeśli masz już wygenerowany API Signature lub Certificate, zostaniesz przekierowany na stronę, na której znajdziesz swoje dane uwierzytelniające.

     * _**Uwaga:** Jeśli zostaniesz poproszony o zweryfikowanie swojego konta PayPal, postępuj zgodnie z instrukcjami wyświetlanymi na ekranie._

  4. Wybierz _jedną_ z poniższych opcji, a następnie kliknij **Zgadzam się i wyślij**.

     * **Poproś o API Signature** – Wybierz do uwierzytelniania API Signature.

     * **Poproś o API Certificate** – Wybierz do uwierzytelniania API Certificate.

  5. PayPal generuje Twoje dane uwierzytelniające API w następujący sposób:
![Wygenerowane dane uwierzytelniające PayPal API](/img/config/settings-payment-gateways.png)

     * **Dane uwierzytelniające API Signature** obejmują API Username, API Password i Signature, który nie wygasa. Te wartości są domyślnie ukryte dla zwiększenia bezpieczeństwa. Kliknij **Pokaż/Ukryj**, aby je włączać i wyłączać. Po zakończeniu kliknij **Gotowe**.

     * **Dane uwierzytelniające API Certificate** obejmują API Username, API Password i Certificate, który automatycznie wygasa po trzech latach. Kliknij **Pobierz Certificate**, aby zapisać API Certificate na swoim komputerze.

To wszystko, Twoja integracja płatności PayPal jest ukończona!

Jeśli masz jakiekolwiek pytania dotyczące ustawień PayPal, możesz skorzystać z [Centrum pomocy](https://www.paypal.com/br/smarthelp/home) PayPal.
