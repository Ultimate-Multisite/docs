---
title: Strona Konta Klienta
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Strona konta Twojego klienta (wersja 2)

_**WAŻNA UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x.**_

Kiedy klienci wykupują subskrypcję planu w Twojej sieci, otrzymują dostęp do strony internetowej oraz panelu z ważnymi informacjami dotyczącymi płatności, członkostw, domen, limitów planu itd.

W tym poradniku przeprowadzimy Cię przez stronę konta klienta i pokażemy, co Twoi klienci mogą na niej zobaczyć i zrobić.

## Strona konta

Strona konta jest dostępna po kliknięciu **Account** w panelu klienta.

![Menu Account w panelu klienta](/img/admin/dashboard.png)

![Przegląd strony konta klienta](/img/admin/dashboard.png)

Po kliknięciu klient zobaczy przegląd swojego członkostwa, adres rozliczeniowy, faktury, domeny, limity strony, a także będzie mógł zmienić **Szablon strony** (jeśli jest to dozwolone w Twojej sieci).

Klienci mogą również zmienić członkostwo na inny plan lub kupić dodatkowy pakiet lub usługę, którą oferujesz. Przyjrzyjmy się każdej sekcji osobno.

### Przegląd Twojego członkostwa:

Pierwszy blok tuż pod nazwą strony klienta pokazuje przegląd aktualnego planu oraz usług/pakietów zakupionych wraz z nim. Blok zawiera również numer członkostwa, początkową kwotę zapłaconą za nie, koszt planu i ewentualnych usług/pakietów oraz ile razy klient został obciążony za to członkostwo. Klient może także sprawdzić, czy członkostwo jest **Aktywne**, **Wygasłe** czy **Anulowane**.

![Przegląd członkostwa pokazujący plan, kwotę i szczegóły rozliczeń](/img/admin/memberships-list.png)

Tuż pod tym blokiem klienci widzą bloki **About This Site** oraz **Site Limits**. Pokazują one wszystkie ograniczenia związane z ich planem: przestrzeń dyskową, wpisy, strony, odwiedziny itd. Te limity można skonfigurować na stronie każdego planu w **Ultimate Multisite > Products**.

![Bloki About This Site i Site Limits pokazujące ograniczenia planu](/img/admin/dashboard.png)

Po prawej stronie sekcji **Your Membership** klienci mogą kliknąć **Change**. Wyświetli to wszystkie dostępne plany i pakiety/usługi. Jeśli wybiorą inny plan, zaczną obowiązywać limity nowego planu zamiast obecnych limitów członkostwa — niezależnie od tego, czy to obniżenie czy podwyższenie planu.

Jeśli natomiast klienci zdecydują się kupić pakiety lub usługi do obecnego członkostwa — np. więcej przestrzeni dyskowej lub odwiedzin — obecne członkostwo nie zostanie zmienione, a jedynie nowe pakiety zostaną do niego dodane.

Pamiętaj, że kodów rabatowych nie można dodawać na stronie zmiany członkostwa. Jeśli klient użył kodu rabatowego przy pierwszym zakupie członkostwa, kod ten zostanie również zastosowany do nowego członkostwa.

### Aktualizacja adresu rozliczeniowego:

Na stronie konta klienci mogą również zaktualizować swój adres rozliczeniowy. Wystarczy kliknąć **Update** obok _Billing Address_.

![Sekcja Billing Address z przyciskiem Update](/img/admin/customers-list.png)

Klientowi wyświetli się nowe okno. Wystarczy, że wpisze nowy adres i kliknie _Save Changes_.

![Formularz aktualizacji adresu rozliczeniowego](/img/admin/customers-list.png)

### Zmiana szablonu strony:

Aby umożliwić klientom zmianę szablonów stron, przejdź do **Ultimate Multisite > Settings > Sites** i włącz opcję **Allow Template Switching**.

Dodatkowo w **Ultimate Multisite > Products** wybierz swoje plany i przejdź do zakładki **Site Templates**. Upewnij się, że opcja **Allow Site Templates** jest włączona, a w **Site Template Selection Mode** wybrana jest opcja **Choose Available Site Templates**.

![Zakładka Site Templates produktu z trybem wyboru szablonu](/img/config/product-site-templates.png)

Zobaczysz wszystkie dostępne szablony stron w Twojej witrynie. Wybierz, które chcesz udostępnić, a które mają być niedostępne dla klientów subskrybujących ten plan. Pamiętaj, że te opcje wpływają również na formularz zamówienia, więc każdy szablon oznaczony jako **Not Available** nie pojawi się na stronie rejestracji dla tego planu.

Teraz Twoi klienci mogą kliknąć **Change Site Template** na swojej stronie konta.

![Przycisk Change Site Template na stronie konta](/img/admin/dashboard.png)  
Klientowi wyświetli się lista wszystkich dostępnych szablonów stron dla tego planu.

![Lista dostępnych szablonów stron dla planu](/img/config/site-templates-list.png)

Po wybraniu szablonu, na który chcą zmienić, zostaną poproszeni o potwierdzenie zmiany.

![Okno potwierdzenia zmiany szablonu strony](/img/admin/dashboard.png)

Po zaznaczeniu potwierdzenia i kliknięciu **Process Switch** nowy szablon strony zostanie zastosowany na stronie klienta.

### Dodawanie własnych domen:

Klienci będą mieli również możliwość dodania własnej domeny dla tego planu na swojej stronie konta. Aby umożliwić klientom korzystanie z własnych domen, przejdź do **Ultimate Multisite > Settings > Domain Mapping**.

Włącz opcję **Enable Domain Mapping**. Pozwoli to klientom używać własnych domen na poziomie całej sieci.

Nie zapomnij również sprawdzić, czy mapowanie domen jest włączone dla poszczególnych produktów — ponieważ możesz ograniczyć produkt tak, aby nie pozwalał klientom na używanie własnych domen.

Przejdź do **Ultimate Multisite > Products**. Wybierz wybrany plan i przejdź do zakładki **Custom Domains**. Włącz opcję **Allow Custom Domains**.

![Zakładka Custom Domains z przełącznikiem Allow Custom Domains](/img/config/product-custom-domains.png)

Pozwoli to wszystkim klientom subskrybującym ten konkretny plan na używanie własnych domen. Teraz na stronie konta klienci mogą dodać własną domenę, klikając **Add Domain**.

![Przycisk Add Domain na stronie konta](/img/admin/domains-list.png)

Pierwsze okno, które się otworzy, pokaże klientom komunikat z instrukcjami, jak zaktualizować rekordy DNS, aby ta własna domena działała w Twojej sieci.

![Instrukcje DNS wyświetlane przy dodawaniu własnej domeny](/img/admin/domains-list.png)

Ten komunikat możesz edytować w **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Ustawienie Add New Domain Instructions w Domain Mapping](/img/config/settings-domain-mapping.png)

Po kliknięciu **Next Step** klienci mogą dodać nazwę swojej własnej domeny i wybrać, czy ta domena ma być domeną główną. Pamiętaj, że klienci mogą używać więcej niż jednej własnej domeny dla swoich stron, więc mogą wybrać, która z nich będzie główna.

![Pole nazwy własnej domeny z opcją domeny głównej](/img/admin/domains-list.png)

Po kliknięciu **Add Domain** domena zostanie dodana do konta klienta. Teraz wystarczy, że klient zmieni rekordy DNS tej własnej domeny u swojego rejestratora domen.

### Zmiana hasła:

W panelu konta klienci mogą również zmienić hasło, klikając **Change Password**.

![Przycisk Change Password na stronie konta](/img/admin/dashboard.png)

Wyświetli się nowe okno, w którym klienci będą musieli wpisać obecne hasło, a następnie nowe hasło, którego chcą używać.

![Formularz zmiany hasła z polami na obecne i nowe hasło](/img/admin/dashboard.png)

### Strefa zagrożenia:

Mamy również dwie opcje wyświetlane w sekcji **Danger Zone**: **Delete Site** i **Delete Account**. Obie znajdują się w strefie zagrożenia, ponieważ te działania są nieodwracalne. Jeśli klienci usuną swoją stronę lub konto, nie będą mogli ich odzyskać.

![Strefa Danger Zone z opcjami Delete Site i Delete Account](/img/admin/dashboard.png)

Jeśli klienci klikną którąkolwiek z tych opcji, wyświetli im się okno, w którym będą musieli zaznaczyć opcję usunięcia strony lub konta i zostaną ostrzeżeni, że tego działania nie można cofnąć.

![Okno potwierdzenia usunięcia strony](/img/admin/dashboard.png)

![Okno potwierdzenia usunięcia konta](/img/admin/dashboard.png)

Jeśli usuną swoją stronę, ich konto i członkostwo pozostaną nienaruszone. Stracą jedynie całą zawartość swojej strony. Jeśli usuną swoje konto, wszystkie strony, członkostwa i informacje związane z tym kontem zostaną utracone.
