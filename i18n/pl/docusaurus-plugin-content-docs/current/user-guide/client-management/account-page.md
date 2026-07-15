---
title: Strona Account klienta
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Strona Account Twojego klienta (v2)

_**WAŻNA UWAGA: Ten artykuł odnosi się do Ultimate Multisite w wersji 2.x.**_

Gdy klienci subskrybują plan w Twojej sieci, otrzymują dostęp do witryny i jej Dashboard z ważnymi informacjami dotyczącymi ich płatności, członkostw, domen, ograniczeń planu itd...

W tym poradniku przeprowadzimy Cię przez stronę Account klienta i zobaczysz, co Twoi klienci mogą w niej widzieć oraz robić.

## Strona Account {#the-account-page}

Strona Account jest dostępna po kliknięciu **Account** w Dashboard Twojego klienta.

![Menu Account w Dashboard klienta](/img/account-page/account-menu.png)

W suwerennych sieciach dzierżawców Ultimate Multisite v2.13.0 utrzymuje to doświadczenie zarządzania klientem w witrynie głównej. Jeśli klient otworzy działania dotyczące Account, checkout, rozliczeń, faktury, zarządzania witryną, przełączania szablonów lub mapowania domen z suwerennego dzierżawcy, działanie wskazuje z powrotem na panel klienta w witrynie głównej, aby rekordy rozliczeń i członkostw sieci pozostały nadrzędne.

Gdy klient przychodzi z suwerennego dzierżawcy, panel klienta w witrynie głównej może zawierać link powrotny do witryny dzierżawcy. Link powrotny jest wyświetlany tylko wtedy, gdy Ultimate Multisite może zweryfikować cel powrotu jako jedną z witryn klienta, co zapobiega dowolnym przekierowaniom, jednocześnie zachowując przepływ pracy dzierżawcy.

![Przegląd strony konta klienta](/img/account-page/overview.png)

Po kliknięciu klient zobaczy przegląd swojego członkostwa, adresu rozliczeniowego, faktur, domen, ograniczeń witryny, a także będzie mógł zmienić ****szablon witryny** (jeśli jest to dozwolone w Twojej sieci)**.

Może również zmienić członkostwo na inny plan albo kupić inny pakiet lub usługę, którą oferujesz. Przyjrzyjmy się każdej sekcji osobno.

### Przegląd Twojego członkostwa: {#your-membership-overview}

Pierwszy blok tuż pod nazwą witryny Twoich klientów pokazuje przegląd ich obecnego planu oraz usług/pakietów, które zostały z nim zakupione. Blok pokazuje również numer członkostwa, początkową kwotę za nie zapłaconą, ile kosztuje plan oraz każda usługa/pakiet, a także ile razy rozliczono ich za to członkostwo. Mogą też zobaczyć, czy członkostwo jest **Aktywne**, **Wygasłe** lub **Anulowane**.

![Przegląd członkostwa pokazujący plan, kwotę i szczegóły rozliczeń](/img/account-page/membership-card.png)

Tuż pod tym blokiem Twoi klienci mogą zobaczyć bloki **O tej witrynie** i **Limity witryny**. Te bloki pokazują im wszystkie ograniczenia wynikające z ich planu: miejsce na dysku, wpisy, strony, wizyty itd... Te limity można skonfigurować na stronie każdego planu w **Ultimate Multisite > Produkty**.

![Bloki O tej witrynie i Limity witryny pokazujące ograniczenia planu](/img/account-page/site-limits.png)

Po prawej stronie **Twojego członkostwa** klienci mogą kliknąć **Zmień**. Spowoduje to wyświetlenie wszystkich dostępnych planów oraz pakietów/usług. Jeśli wybiorą inny plan, ograniczenia tego planu zastąpią obecne ograniczenia członkostwa — niezależnie od tego, czy przechodzą na niższy, czy wyższy plan.

Jeśli natomiast Twoi klienci zdecydują się kupić pakiety lub usługi dla tego obecnego członkostwa — takie jak większa przestrzeń dyskowa lub liczba wizyt — obecne członkostwo nie zostanie zmienione, a jedynie nowe pakiety zostaną do niego dodane.

Pamiętaj, że kodów kuponów nie można dodawać na tej stronie zmiany członkostwa. Jeśli klient użył kodu kuponu przy pierwszym zakupie członkostwa, kod zostanie również zastosowany do tego nowego członkostwa.

### Aktualizacja adresu rozliczeniowego: {#updating-the-billing-address}

Na stronie Account Twoi klienci mogą również zaktualizować swój adres rozliczeniowy. Wystarczy, że klikną **Aktualizuj** obok _Adres rozliczeniowy_.

![Sekcja adresu rozliczeniowego z przyciskiem Aktualizuj](/img/account-page/billing-address.png)

Klientowi pojawi się nowe okno. Wystarczy, że wypełni nowy adres i kliknie _Zapisz zmiany_.

![Formularz aktualizacji adresu rozliczeniowego](/img/account-page/billing-address-form.png)

### Zmiana szablonu witryny: {#changing-the-site-template}

Aby umożliwić klientom zmianę szablonów ich witryn, musisz przejść do **Ultimate Multisite > Ustawienia > Witryny** i włączyć opcję **Zezwalaj na przełączanie szablonów**.

Ponadto w **Ultimate Multisite > Produkty** wybierz swoje plany i przejdź do karty **Szablony witryn**. Upewnij się, że opcja **Zezwalaj na szablony witryn** jest włączona, a w **Trybie wyboru szablonu witryny** wybrana jest opcja **Wybierz dostępne szablony witryn**.

![Karta szablonów witryn produktu z trybem wyboru szablonu](/img/config/product-site-templates.png)

Będziesz widzieć wszystkie dostępne szablony witryn w swojej witrynie. Wybierz, które z nich chcesz udostępnić, a które mają nie być dostępne dla klientów subskrybujących ten plan. Pamiętaj, że te opcje wpływają również na formularz checkout, więc każdy szablon oznaczony jako **Niedostępny** nie pojawi się na stronie rejestracji dla tego planu.

Teraz Twoi klienci mogą kliknąć **Zmień szablon witryny** na swojej stronie Account.

![Przycisk Zmień szablon witryny na stronie Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 pokazuje przeprojektowany panel przełączania szablonów. Panel zaczyna się od **karty bieżącego szablonu**, dzięki czemu klienci mogą zobaczyć, który szablon jest aktywny, zanim wybiorą zamiennik.

Stała siatka dostępnych szablonów witryn pozostaje widoczna, gdy klienci przeglądają swoje opcje. Pomaga im to porównać szablony dozwolone dla ich planu bez tracenia z oczu obecnego wyboru.

![Lista dostępnych szablonów witryn dla planu](/img/config/site-templates-list.png)

Po wybraniu szablonu, na który chcą przejść, zostaną poproszeni o potwierdzenie zmiany.

![Okno dialogowe potwierdzenia przełączenia szablonu witryny](/img/account-page/template-switch-confirm.png)

Po włączeniu potwierdzenia i kliknięciu **Przetwórz przełączenie** nowy szablon witryny zostanie użyty w witrynie Twojego klienta.

Klienci mogą również użyć opcji **Reset current template** z tego panelu, gdy muszą zresetować witrynę z powrotem do aktualnie przypisanego szablonu. Podobnie jak przełączenie na inny szablon, zresetowanie szablonu może nadpisać zawartość witryny, więc klienci powinni potwierdzać tę akcję tylko wtedy, gdy rozumieją działanie resetowania.

### Dodawanie własnych domen: {#adding-custom-domains}

Twoi klienci będą również mieli możliwość dodania własnej domeny dla tego planu na stronie swojego Account. Aby umożliwić klientom korzystanie z własnych domen, przejdź do **Ultimate Multisite > Settings >** **Domain Mapping**.

Włącz opcję **Enable Domain Mapping**. Pozwoli to Twoim klientom korzystać z własnych domen na poziomie sieci.

Nie zapomnij również sprawdzić, czy mapowanie domen jest włączone dla danego produktu — ponieważ możesz ograniczyć produkt tak, aby nie pozwalał klientom korzystać z własnych domen.

Przejdź do **Ultimate Multisite > Products**. Wybierz plan według własnego uznania i przejdź do karty **Custom Domains**. Włącz opcję **Allow Custom Domains**.

![Karta Custom Domains z przełącznikiem Allow Custom Domains](/img/config/product-custom-domains.png)

Pozwoli to wszystkim klientom subskrybującym ten konkretny plan korzystać z własnych domen. Teraz na stronie Account Twoi klienci mogą dodać własną domenę, klikając **Add Domain**.

![Przycisk Add Domain na stronie Account](/img/account-page/add-domain-button.png)

Pierwsze okno, które się otworzy, pokaże klientom komunikat z instrukcją, jak zaktualizować rekordy DNS, aby ta własna domena działała w Twojej sieci.

![Instrukcje DNS wyświetlane podczas dodawania własnej domeny](/img/account-page/add-domain-dns.png)

Ten komunikat można edytować (przez Ciebie) w **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Ustawienie Add New Domain Instructions w Domain Mapping](/img/config/settings-domain-mapping.png)

Oto pełny widok strony ustawień mapowania domen:

![Pełna strona ustawień mapowania domen](/img/config/settings-domain-mapping-full.png)

Po kliknięciu **Next Step** Twoi klienci mogą dodać nazwę swojej własnej domeny i wybrać, czy ta własna domena będzie główną. Pamiętaj, że Twoi klienci mogą używać więcej niż jednej własnej domeny dla swoich witryn, więc mogą wybrać, która z nich będzie główna.

![Wpisywanie nazwy własnej domeny z opcją domeny głównej](/img/account-page/add-domain-primary.png)

Po kliknięciu **Add Domain** domena zostanie dodana do konta Twojego klienta. Teraz muszą jedynie zmienić rekordy DNS tej własnej domeny u swojego rejestratora domen.

### Zmiana hasła: {#changing-password}

W Dashboard konta Twoi klienci mogą również zmienić swoje hasło, klikając **Change Password**.

![Przycisk Change Password na stronie konta](/img/account-page/change-password-button.png)

Spowoduje to wyświetlenie nowego okna, w którym Twoi klienci będą musieli wpisać swoje obecne hasło, a następnie nowe hasło, którego chcą używać.

![Formularz zmiany hasła z polami obecnego i nowego hasła](/img/account-page/change-password-form.png)

### Strefa niebezpieczna: {#danger-zone}

Mamy również dwie opcje, które są wyświetlane w części **Danger Zone**: **Delete Site** i **Delete Account**. Obie znajdują się w części Danger Zone, ponieważ te dwie akcje są nieodwracalne. Jeśli Twoi klienci usuną swoją witrynę lub swoje konto, nie będą mogli ich odzyskać.

![Danger Zone z opcjami Delete Site i Delete Account](/img/account-page/danger-zone.png)

Jeśli Twoi klienci klikną którąkolwiek z tych dwóch opcji, zostanie im wyświetlone okno, w którym będą musieli włączyć opcję usunięcia witryny lub konta i zostaną ostrzeżeni, że tej akcji nie można cofnąć.

![Okno dialogowe potwierdzenia Delete Site](/img/account-page/delete-site-confirm.png)

![Okno dialogowe potwierdzenia Delete Account](/img/account-page/delete-account-confirm.png)

Jeśli usuną swoją witrynę, ich konto i membership pozostaną nienaruszone. Stracą jedynie całą zawartość swojej witryny. Jeśli usuną swoje konto, wszystkie witryny, memberships i informacje dotyczące tego konta zostaną utracone.
