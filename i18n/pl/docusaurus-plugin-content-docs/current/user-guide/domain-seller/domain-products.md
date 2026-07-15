---
title: Produkty domenowe i ceny
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produkty domenowe i ceny

Produkty domenowe pozwalają kontrolować ceny, TLD-e, prywatność WHOIS oraz wybór dostawcy. Każdy produkt domenowy to standardowy produkt Multisite Ultimate z dodatkową zakładką **Domain Settings**.

## Tworzenie produktu domenowego {#creating-a-domain-product}

1. Przejdź do **Network Admin › Ultimate Multisite › Products**
2. Kliknij **Add New**
3. Ustaw typ produktu na **Domain**
4. Skonfiguruj zakładkę **Domain Settings** (patrz poniżej)
5. Zapisz

Produkty domenowe pojawiają się z fioletową odznaką **Domain** w liście produktów i można je filtrować za pomocą zakładki **Domain Products**.

## Zakładka ustawień domenowych {#domain-settings-tab}

### Provider {#provider}

Wybierz rejestratora, który zajmie się rejestracją dla tego produktu. Domyślnie ustawiony jest globalny **Default provider** w ustawieniach Domain Seller.

### Supported TLDs {#supported-tlds}

Pozostaw puste, aby utworzyć **produkt ogólny (catch-all product)**, który będzie obowiązywał dla wszystkich TLD-ów, które nie pasują do innego produktu.

Wprowadź listę TLD-ów oddzieloną przecinkami (np. `.com, .net, .org`), aby utworzyć **produkt specyficzny dla TLD** (TLD-specific product), który będzie obowiązywał tylko dla tych rozszerzeń.

**Jak działa dopasowywanie produktów:** Gdy klient wyszukuje domenę, wtyczka wybiera najbardziej pasujący i specyficzny produkt. Produkt z `.com` w liście TLD ma pierwszeństwo przed produktem ogólnym. Jeśli żaden produkt specyficzny dla TLD nie pasuje, używany jest produkt ogólny. Jeśli nie ma żadnych produktów, wyszukiwanie domeny nie zostanie wyświetlone.

### Markup type {#markup-type}

Trzy tryby kontrolują, jak obliczana jest cena detaliczna na podstawie kosztu hurtowego:

| Tryb | Jak to działa |
|---|---|
| **Percentage** | Dodaje procent do kosztu hurtowego. 20% narzut na domenę o koszcie hurtowym 10 $ daje 12 $. |
| **Fixed markup** | Dodaje stałą kwotę w dolarach. 5 $ narzutu na domenę o koszcie hurtowym 10 $ daje 15 $. |
| **Fixed price** | Całkowicie ignoruje koszt hurtowy. Zawsze pobiera kwotę, którą wpiszesz. |

### Introductory pricing {#introductory-pricing}

Włącz, aby oferować zniżoną cenę za pierwszy rok. Ustaw oddzielną **Introductory price** (cenę za pierwszy rok) obok regularnej **Renewal price** (cena za rok 2 i kolejne). Klient widzi obie ceny podczas finalizacji zakupu, więc wie, czego się spodziewać przy odnowieniu.

### WHOIS privacy {#whois-privacy}

Kontroluje, czy ochrona prywatności WHOIS jest oferowana dla domen rejestrowanych za pomocą tego produktu.

| Ustawienie | Zachowanie |
|---|---|
| **Disabled** | Prywatność WHOIS nigdy nie jest oferowana ani włączana. |
| **Always Included** | Prywatność WHOIS jest automatycznie włączana przy rejestracji bez dodatkowych opłat. |
| **Customer Choice** | Podczas finalizacji zakupu pojawia się pole wyboru. Ustaw **Privacy price**, aby pobierać opłatę za rok, lub zostaw je na 0 $, aby oferować to za darmo. |

Dla Namecheap prywatność WHOIS wykorzystuje WhoisGuard (zawsze bezpłatne). Dla OpenSRS wykorzystuje usługę prywatności OpenSRS (może wiązać się z kosztem hurtowym).

---

## Import i synchronizacja TLD {#tld-import-and-sync}

Produkty domenowe wyświetlają ceny hurtowe w czasie rzeczywistym pobrane od podłączonego dostawcy. Aby to działało, TLD-e muszą zostać zaimportowane.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Działa codziennie za pomocą zaplanowanego zadania cron dla wszystkich skonfigurowanych dostawców

Po synchronizacji przejdź do zakładki Ustawienia domenowe dowolnego produktu domenowego i użyj wyboru TLD, aby zobaczyć dostępne TLD-e wraz z ich aktualnymi cenami hurtowymi.

---

## Automatyczne odnawianie {#auto-renewal}

Odnawianie domen jest powiązane ze statusem członkostwa klienta:

- Kiedy członkostwo się odnawia i domena jest powiązana, odnowienie domeny jest automatycznie dodawane do kolejki.
- Próby odnowienia używają aktywnej bramki płatniczej klienta.
- Nieudane odnowienia są automatycznie ponawiane z wykładniczym wycofaniem (exponential backoff).
- Powiadomienia e-mail są wysyłane w przypadku pomyślnego odnowienia, niepowodzeń i zbliżających się wygaśnięć.

Identyfikatory szablonów e-mail dla zdarzeń cyklu życia domeny:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Administrator: Ręczna rejestracja domeny {#admin-manual-domain-registration}

Aby zarejestrować domenę w imieniu klienta, bez konieczności przechodzenia przez proces finalizacji zakupu:

1. Przejdź do **Network Admin › Ultimate Multisite › Register Domain**
2. Wybierz klienta i wprowadź nazwę domeny
3. Wypełnij dane kontaktowe rejestratora (imię, adres, telefon)
4. Kliknij **Register**

Rekord domeny zostanie utworzony i powiązany z kontem klienta.
