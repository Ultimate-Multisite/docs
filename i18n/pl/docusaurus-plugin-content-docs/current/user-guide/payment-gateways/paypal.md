---
title: Konfiguracja PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Konfiguracja bramki PayPal (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Na stronie ustawień płatności możesz aktywować do czterech metod płatności: Stripe, Stripe Checkout, PayPal oraz płatność ręczną. W tym artykule pokażemy, jak zintegrować **PayPal**.

Podobnie jak Stripe, PayPal jest powszechnie używany do płatności online, szczególnie na stronach WordPress. Ten artykuł przeprowadzi Cię przez proces konfiguracji PayPal jako metody płatności dostępnej w Twojej sieci.

Pamiętaj, że do uzyskania danych API potrzebnych do tej integracji musisz posiadać **konto PayPal Business**.

## Włączanie PayPal w Twojej sieci

Aby włączyć PayPal jako dostępną metodę płatności w Twojej sieci, przejdź do **Ultimate Multisite > Ustawienia > Płatności** i zaznacz pole obok PayPal.

![Włączanie PayPal w aktywnych bramkach płatności](/img/config/settings-payment-gateways.png)

## Uzyskiwanie danych API PayPal

Po włączeniu PayPal jako bramki płatności musisz wypełnić pola: **Nazwa użytkownika** API PayPal, **Hasło** API PayPal oraz **Podpis** API PayPal.

Możesz je uzyskać, logując się na swoje konto PayPal [Live](https://www.paypal.com/home) lub [Sandbox](https://www.sandbox.paypal.com/home).

(Pamiętaj, że możesz użyć **trybu sandbox**, aby przetestować płatności i sprawdzić, czy bramka jest poprawnie skonfigurowana. Wystarczy włączyć odpowiednią opcję.)

![Pola danych API PayPal i przełącznik trybu sandbox](/img/config/settings-payment-gateways.png)

Aby uzyskać dane API Signature lub Certificate dla swojego konta PayPal:

  1. Przejdź do [Ustawień konta](https://www.paypal.com/businessmanage/account/accountAccess).

  2. W sekcji **Dostęp do API** kliknij **Aktualizuj**.  
![Ustawienia konta PayPal z sekcją dostępu do API](/img/config/settings-payment-gateways.png)

  3. W sekcji **Integracja NVP/SOAP API (Classic)** kliknij **Zarządzaj danymi API**.  
![Integracja NVP/SOAP API PayPal – Zarządzaj danymi API](/img/config/settings-payment-gateways.png)

     * Jeśli wcześniej wygenerowałeś już API Signature lub Certificate, zostaniesz przekierowany na stronę, gdzie znajdziesz swoje dane.

     * _**Uwaga:** Jeśli pojawi się prośba o weryfikację konta PayPal, postępuj zgodnie z instrukcjami na ekranie._

  4. Wybierz _jedną_ z poniższych opcji, a następnie kliknij **Zgadzam się i wyślij**.

     * **Żądaj API Signature** – Wybierz, aby korzystać z uwierzytelniania przez API Signature.

     * **Żądaj API Certificate** – Wybierz, aby korzystać z uwierzytelniania przez API Certificate.

  5. PayPal wygeneruje Twoje dane API w następujący sposób:  
![Wygenerowane dane API PayPal](/img/config/settings-payment-gateways.png)

     * **Dane API Signature** obejmują nazwę użytkownika API, hasło API oraz podpis, które nie wygasają. Te wartości są domyślnie ukryte ze względów bezpieczeństwa. Kliknij **Pokaż/Ukryj**, aby je wyświetlić lub ukryć. Po zakończeniu kliknij **Gotowe**.

     * **Dane API Certificate** obejmują nazwę użytkownika API, hasło API oraz certyfikat, który wygasa automatycznie po trzech latach. Kliknij **Pobierz certyfikat**, aby zapisać certyfikat API na swoim komputerze.

To wszystko – integracja płatności PayPal jest gotowa!

Jeśli masz pytania dotyczące ustawień PayPal, możesz zajrzeć do [Centrum pomocy](https://www.paypal.com/br/smarthelp/home) PayPal.
