---
title: Zarejestruj punkt końcowy API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Punkt końcowy API /register Ultimate Multisite

W tym samouczku dowiesz się, jak używać punktu końcowego API /register Ultimate Multisite, aby utworzyć cały proces onboardingu dla nowego klienta w swojej sieci, oraz jak zrobić to za pomocą Zapier.

Punkt końcowy używa metody POST i jest wywoływany przez URL _**https://yoursite.com/wp-json/wu/v2/register**_. W tym wywołaniu w Twojej sieci zostaną wykonane 4 procesy:

  * Zostanie utworzony nowy użytkownik WordPress albo zostanie on zidentyfikowany przez ID użytkownika.

  * Zostanie utworzony nowy klient w Ultimate Multisite albo zostanie on zidentyfikowany przez ID klienta.

  * Zostanie utworzona nowa witryna w sieci WordPress.

  * Na końcu zostanie utworzone nowe członkostwo w Ultimate Multisite.

Do tego procesu będą potrzebne Twoje dane uwierzytelniające API. Aby je uzyskać, przejdź do panelu administratora sieci, wybierz **Ultimate Multisite > Ustawienia** > **API i Webhooki,** i znajdź sekcję ustawień API.

![Sekcja ustawień API w Ultimate Multisite](/img/config/settings-api.png)

Oto pełny widok strony ustawień API:

![Pełna strona ustawień API](/img/config/settings-api-full.png)

Wybierz **Włącz API** i pobierz swoje dane uwierzytelniające API.

Teraz przyjrzyjmy się punktowi końcowemu, a następnie utwórzmy akcję rejestracji w Zapier.

## Parametry treści punktu końcowego {#endpoint-body-parameters}

Przyjrzyjmy się minimalnym informacjom, które musimy wysłać do punktu końcowego. Na końcu tego artykułu znajdziesz pełne wywołanie.

### Klient {#customer}

Są to informacje niezbędne w procesie tworzenia użytkownika oraz klienta Ultimate Multisite:

"customer_id" : integer

Możliwe jest wysłanie ID klienta utworzonego w Twojej sieci. Jeśli nie zostanie przesłany, poniższe informacje zostaną użyte do utworzenia nowego klienta i nowego użytkownika WordPress. ID użytkownika można również wysłać w taki sam sposób jak ID klienta.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Członkostwo** {#membership}

Jedyną informacją, której potrzebujemy wewnątrz tego obiektu, jest status członkostwa.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkty** {#products}

Produkty są przekazywane jako tablica z 1 lub większą liczbą ID produktów z Twojej sieci. Uwaga: ten punkt końcowy nie tworzy produktów. Sprawdź dokumentację Ultimate Multisite, aby lepiej zrozumieć punkt końcowy tworzenia produktu.

**"products" : [1,2],**

### Płatność {#payment}

Podobnie jak w przypadku członkostwa, potrzebujemy tylko statusu.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Witryna {#site}

Aby domknąć treść, potrzebujemy URL i tytułu witryny, oba wewnątrz obiektu Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Zwrotem z punktu końcowego rejestracji będzie tablica z informacjami o nowo utworzonym członkostwie.

## Tworzenie akcji w Zapier {#creating-an-action-in-zapier}

Wraz z wprowadzeniem tego nowego i bardziej rozbudowanego punktu końcowego tworzenia konta uzyskasz również dostęp do nowej akcji w Zapier.

Czy wiesz, jak korzystać ze wszystkiego, co oferuje nowa wersja Zapier, i czerpać z tego korzyści? Dowiedz się więcej tutaj. (link?)

### Tworzenie akcji {#creating-an-action}

Aby lepiej zilustrować, jak używać punktu końcowego rejestracji z Zapier, utwórzmy integrację z Google Forms. Za każdym razem, gdy ten formularz zostanie wypełniony, a informacje zapisane w arkuszu odpowiedzi formularza, w sieci Ultimate Multisite zostanie utworzone nowe członkostwo.

W Google Forms utwórz formularz z minimalnymi polami potrzebnymi do utworzenia nowego członkostwa w sieci.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Teraz w Zapier utwórz nowy Zap i połącz formularz utworzony w Google za pośrednictwem arkusza kalkulacyjnego, w którym zapisywane są dane.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Gotowe! Formularz Google Forms jest połączony z Zapier i gotowy do integracji z siecią. Teraz przejdźmy do akcji, która będzie wynikiem wyzwalacza uruchamianego przez Google Forms za każdym razem, gdy formularz zostanie wypełniony.

Znajdź nową aplikację Ultimate Multisite i wybierz ją. Dla tego rodzaju Zap wybierz opcję Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Po tym pierwszym kroku wybierz Account, które zostanie połączone z tym Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

To najbardziej wrażliwa część całego procesu. Musimy dopasować pola pochodzące z Google Forms do minimalnych pól wymaganych przez punkt końcowy rejestracji, jak pokazano w poprzedniej sekcji tego artykułu.

W tym przykładzie musimy skonfigurować tylko nazwę użytkownika, email, hasło, nazwę i URL witryny. Reszta pozostaje wstępnie określona, aby wszystkie członkostwa wygenerowane przez ten Google Forms miały ten sam wzorzec produktu i statusu.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Po skonfigurowaniu informacji przejdź do końcowego testu. Na ostatnim ekranie możesz zobaczyć wszystkie pola, które zostaną wysłane do punktu końcowego, odpowiadające im informacje oraz pola, które zostaną wysłane jako puste.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Przetestuj swój nowy Zap — powinien zakończyć się powodzeniem. Jeśli wystąpi jakikolwiek błąd, sprawdź wszystkie pola i upewnij się, że są wysyłane poprawnie. Ponieważ informacji jest dużo, niektóre rzeczy mogą umknąć uwadze.

### Pełne parametry punktu końcowego {#complete-endpoint-parameters}

Oto pełne wywołanie oraz wszystkie możliwe pola, które można wysłać.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
