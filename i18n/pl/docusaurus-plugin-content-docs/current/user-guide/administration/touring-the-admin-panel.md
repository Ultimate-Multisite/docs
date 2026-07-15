---
title: Przegląd panelu administracyjnego
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Zwiedzanie panelu administracyjnego

Ultimate Multisite ma być tak prosty i zrozumiały, jak to możliwe, ale przy tak potężnym narzędziu pomocne może być oprowadzenie. Przejdźmy przez strony administracyjne, aby pomóc Ci się zorientować.

## Dashboard {#dashboard}

Ultimate Multisite **Dashboard** pokazuje podstawowe raporty i analitykę, w tym przychody, aktywności witryn, wzrost członkostw, liczbę odwiedzających oraz dane geograficzne.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Oto pełny widok dashboardu:

![Pełna strona Ultimate Multisite Dashboard](/img/admin/um-dashboard-full.png)

Oraz dolna sekcja dashboardu:

![Dolna sekcja Ultimate Multisite Dashboard](/img/admin/um-dashboard-bottom.png)

Oto także pełny widok dashboardu sieci:

![Pełna strona Network Dashboard](/img/admin/network-dashboard-full-page.png)

## Formularze checkout {#checkout-forms}

**Formularze checkout** zapewniają elastyczność tworzenia niestandardowych stron rejestracji. Możesz dostosowywać pola, wstawiać niestandardowe klasy i skrypty oraz ograniczać dostęp na podstawie kraju lub lokalizacji odwiedzającego.

![Lista formularzy checkout](/img/admin/checkout-forms-list.png)

## Produkty {#products}

Sekcja **Produkty** to miejsce, w którym tworzysz różne plany, pakiety i usługi dla swojej sieci. Definiuj ceny, częstotliwości rozliczeń oraz limity i przydziały na poziomie produktu.

![Lista produktów](/img/admin/products-list.png)

## Członkostwa {#memberships}

Strona **Członkostwa** pokazuje wszystkie subskrypcje w Twojej sieci. Przeglądaj i edytuj szczegóły subskrypcji, w tym plany, produkty, kwoty i częstotliwości rozliczeń, historię płatności oraz znaczniki czasu.

![Lista członkostw](/img/admin/memberships-list.png)

## Płatności {#payments}

Strona **Płatności** zapewnia szybki wgląd w historię płatności w całej Twojej sieci, ze szczegółowymi informacjami o transakcjach, w tym konkretnych produktach i kwotach.

![Lista płatności](/img/admin/payments-list.png)

## Klienci {#customers}

Strona **Klienci** pokazuje wszystkich członków zarejestrowanych w Twojej sieci wraz z podstawowymi informacjami o użytkowniku, takimi jak imię i nazwisko, adres e-mail, ostatnie logowanie oraz link „przełącz na” do logowania się do ich podwitryny.

![Lista klientów](/img/admin/customers-list.png)

## Witryny {#sites}

Strona **Witryny** zawiera listę wszystkich podwitryn w Twojej sieci, w tym szablony witryn i witryny należące do klientów. Łatwo zarządzaj zmapowanymi domenami, limitami i przydziałami, pluginami i motywami oraz miniaturami witryn.

![Lista witryn](/img/admin/sites-list.png)

## Domeny {#domains}

Strona **Domeny** jest poświęcona niestandardowym domenom zmapowanym do podwitryn. Jako super admin możesz ręcznie dodawać lub mapować niestandardowe nazwy domen oraz przeglądać rekordy DNS i logi.

![Lista domen](/img/admin/domains-list.png)

## Kody rabatowe {#discount-codes}

**Kody rabatowe** pozwalają tworzyć kody kuponów, aby oferować zniżki użytkownikom końcowym. Określ wartość zniżki i kieruj ją do konkretnych użytkowników lub grup.

![Lista kodów rabatowych](/img/admin/discount-codes-list.png)

## Komunikaty {#broadcasts}

**Komunikaty** to narzędzie do publikowania ogłoszeń lub wysyłania prywatnych wiadomości do użytkowników Twoich podwitryn. Kieruj je do określonych grup użytkowników na podstawie planu lub produktu, który subskrybują.

![Lista komunikatów](/img/admin/broadcasts-list.png)

## Settings {#settings}

Strona **Settings** to miejsce, w którym konfigurujesz Ultimate Multisite — ustawienia rejestracji, płatności, API i webhooki, mapowanie domen oraz inne integracje.

Ustawienia konektora AI wymieniają obecnie obsługiwane pule dostawców OAuth: Anthropic Max, OpenAI ChatGPT/Codex oraz Google AI Pro. Każda karta dostawcy pozwala super adminom łączyć konta, odświeżać zapisane konta, usuwać konta według adresu e-mail oraz używać ręcznego awaryjnego OAuth, gdy środowisko sandbox blokuje przekierowanie przeglądarki. Opcje konfiguracji Cursor Pro zostały usunięte z panelu administracyjnego.

Konta ChatGPT/Codex obsługują użycie narzędzi wspierane przez konektor tam, gdzie operacja dopuszcza narzędzia, więc administracyjne przepływy pracy zależne od operacji obsługiwanych przez konektor mogą używać zachowania narzędzi Codex po połączeniu konta OpenAI.

![Strona Settings](/img/admin/settings-general.png)

Oto pełny widok strony ustawień ogólnych:

![Pełna strona ustawień ogólnych](/img/admin/settings-general-full.png)

A strona ustawień e-maili:

![Pełna strona ustawień e-maili](/img/admin/settings-emails-full.png)

A strona ustawień płatności:

![Pełna strona ustawień płatności](/img/admin/settings-payments-full.png)

A dolna sekcja ustawień płatności:

![Dolna sekcja ustawień płatności](/img/admin/settings-payments-bottom.png)

A strona ustawień witryn:

![Pełna strona ustawień witryn](/img/admin/settings-sites-full.png)

## Zdarzenia {#events}

Strona **Zdarzenia** przechowuje zapis wszystkich zdarzeń i logów w Twojej sieci. Śledzi aktywności takie jak zmiany planów, rejestracje i inne działania — przydatne do monitorowania Twojego multisite.

![Lista zdarzeń](/img/admin/events-list.png)

## Webhooki {#webhooks}

**Webhooki** pozwalają dostarczać dane do innej aplikacji. Przydatne do wysyłania danych z Ultimate Multisite do platform takich jak Zapier.

![Lista webhooków](/img/admin/webhooks-list.png)
