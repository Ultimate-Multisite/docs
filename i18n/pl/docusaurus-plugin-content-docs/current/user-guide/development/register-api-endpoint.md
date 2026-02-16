---
title: Zarejestruj punkt końcowy API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Punkt końcowy API Register w Ultimate Multisite

W tym poradniku dowiesz się, jak używać punktu końcowego /register API w Ultimate Multisite, aby stworzyć kompletny proces onboardingu dla nowego klienta w Twojej sieci, a także jak zrobić to za pomocą Zapier.

Punkt końcowy wykorzystuje metodę POST i jest wywoływany pod adresem _**https://twojastrona.com/wp-json/wu/v2/register**_. Podczas tego wywołania w Twojej sieci zostaną wykonane 4 procesy:

  * Zostanie utworzony nowy użytkownik WordPress lub nastąpi jego identyfikacja na podstawie ID użytkownika.

  * Zostanie utworzony nowy Klient w Ultimate Multisite lub nastąpi jego identyfikacja na podstawie ID klienta.

  * Zostanie utworzona nowa strona w sieci WordPress.

  * Na koniec zostanie utworzone nowe Członkostwo w Ultimate Multisite.

Do tego procesu potrzebne będą Twoje dane uwierzytelniające API. Aby je uzyskać, przejdź do panelu administracyjnego sieci, nawiguj do **Ultimate Multisite > Ustawienia** > **API i Webhooki** i znajdź sekcję Ustawienia API.

![Sekcja Ustawienia API w Ultimate Multisite](/img/config/settings-api.png)  
Zaznacz opcję **Włącz API** i pobierz swoje dane uwierzytelniające API.

Teraz przyjrzyjmy się punktowi końcowemu, a następnie utworzymy akcję rejestracji w Zapier.

## Parametry body punktu końcowego

Zobaczmy przegląd minimalnych informacji, które musimy wysłać do punktu końcowego. Na końcu tego artykułu znajdziesz pełne wywołanie.

### Klient

Oto informacje niezbędne do procesu tworzenia Użytkownika i Klienta Ultimate Multisite:

"customer_id" : integer

Można wysłać ID klienta utworzonego w Twojej sieci. Jeśli nie zostanie przesłane, poniższe informacje zostaną użyte do utworzenia nowego klienta i nowego użytkownika WordPress. ID użytkownika można również wysłać w taki sam sposób jak ID klienta.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Członkostwo**

Jedyną informacją, którą musimy umieścić w tym obiekcie, jest Status Członkostwa.

"membership" { "status" : "string", // jedna z wartości: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkty**

Produkty są przekazywane jako tablica zawierająca 1 lub więcej ID produktów z Twojej sieci. Uwaga — ten punkt końcowy nie tworzy produktów. Sprawdź dokumentację Ultimate Multisite, aby lepiej zrozumieć punkt końcowy tworzenia produktów.

**"products" : [1,2],**

### Płatność

Podobnie jak w przypadku Członkostwa, potrzebujemy tylko statusu.

**"payment" { "status" : "string", // jedna z wartości: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Strona

Na zakończenie body potrzebujemy adresu URL i Tytułu strony — oba wewnątrz obiektu Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Odpowiedź z punktu końcowego register będzie tablicą z informacjami o nowo utworzonym członkostwie.

## Tworzenie akcji w Zapier

Wraz z wprowadzeniem tego nowego i bardziej rozbudowanego punktu końcowego tworzenia kont, uzyskasz również dostęp do nowej akcji w Zapier.

Czy wiesz, jak korzystać i czerpać korzyści ze wszystkiego, co oferuje nowa wersja Zapier? Dowiedz się więcej tutaj. (link?)

### Tworzenie akcji

Aby lepiej zilustrować, jak używać punktu końcowego rejestracji z Zapier, stwórzmy integrację z Google Forms. Za każdym razem, gdy ten formularz zostanie wypełniony, a informacje zapisane w arkuszu odpowiedzi formularza, w sieci Ultimate Multisite zostanie utworzone nowe członkostwo.

W Google Forms utwórz formularz z minimalnymi polami niezbędnymi do utworzenia nowego członkostwa w sieci.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Teraz w Zapier utwórz nowy Zap i połącz utworzony formularz Google przez arkusz kalkulacyjny, w którym zapisywane są dane.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Gotowe! Formularz Google Forms jest połączony z Zapier i gotowy do integracji z siecią. Przejdźmy teraz do Akcji, która będzie wynikiem Wyzwalacza uruchamianego przez Google Forms przy każdym wypełnieniu formularza.

Znajdź nową aplikację Ultimate Multisite i wybierz ją. Dla tego typu Zapa wybierz opcję Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Po tym pierwszym kroku wybierz konto, które będzie połączone z tym Zapem.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

To najbardziej wrażliwa część całego procesu. Musimy dopasować pola z Google Forms do minimalnych pól wymaganych przez punkt końcowy register, jak pokazano w poprzedniej sekcji tego artykułu.

W tym przykładzie musimy skonfigurować tylko nazwę użytkownika, email, hasło, nazwę i adres URL strony. Reszta jest wstępnie określona, tak aby wszystkie członkostwa generowane przez ten formularz Google Forms miały ten sam wzorzec produktu i statusu.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Po skonfigurowaniu informacji przejdź do końcowego testu. Na ostatnim ekranie możesz zobaczyć wszystkie pola, które zostaną wysłane do punktu końcowego, ich odpowiednie informacje oraz pola, które zostaną wysłane puste.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Przetestuj swój nowy Zap — powinien zakończyć się pomyślnie. Jeśli wystąpi jakikolwiek błąd, sprawdź wszystkie pola i czy są wysyłane poprawnie. Ponieważ jest dużo informacji, niektóre rzeczy mogą zostać przeoczone.

### Kompletne parametry punktu końcowego

Oto pełne wywołanie i wszystkie możliwe pola, które można wysłać.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // jedna z wartości: "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // jedna z wartości: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
