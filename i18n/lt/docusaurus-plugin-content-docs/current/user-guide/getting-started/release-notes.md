---
title: Atnaujinimo zapisai
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Atnaujimo atvejiniai {#release-notes}

## Versija 2.13.0 — Išvedė 2026-06-05 {#version-2130--released-on-2026-06-05}

* Nauja: Prideta suverinio tenanto (sovereign-tenant) palaikymas klientų paskyrimams, kasinimo procesui, paskarbui, svetainėms, įtrybuiems ir domenų netyrinimui, kad tenanto tinklai galėtų atvežti klientus grįžti į pagrindinį svetainę valdyti veiksmus.
* Nauja: Prideta atnaujinimų kredencijų patikrinimas ilgalaikiais prenumeratomis, kad gateway'ai galėtų išjungti automatiną atnaujinimą, jei trūksta išsaugoto paskarbų, prenumeratos ar vault tokeno.
* Nauja: Prideta HMAC-patikrintas loopback publikavimas pending svetainėms kūrimui, kad įtrybuiams įrengimui būtų patikimesnis, jei background jobai vėliau vyksta.
* Nauja: Prideti programstorių išplėšmimo punktus SSO URL-s, kasinimo formos pagrindinių domenų ir automatinio domenų registravimo kūrimui.
* Taikymas (Fix): SSO dabar yra patikimesnis tarp netyrinimų domenų, anonimininių broker vizitų, log out'o ir pluginų konfliktų.
* Taikymas (Fix): Pending svetainės kūrimas dabar atnaujina iš senų publikavimo flagų ir vengia, kad klientai būtų užblaudžiami svetainės kūrimo ekrane.
* Taikymas (Fix): Domenų registravimo nenaudojami pagrindinių kasinimo formos domenams nebus kurti, o ne naudojami host-provider background jobai bus praleisti, jei nėra aktyvios integracijos.
* Taikymas (Fix): Kasinimas, paskarbės adresas, slapukų atnaujinimas, el. pašto patikrinimas, šaltinių keitimas, to ir klientų panelių išskirtiniai atvejai nebus blokoti normalių klientų veiksmų.
* Taikymas (Fix): Skaitmeninės el. laiškų siuntimai dabar laikosi privumui, palaikydami SMTP/plugin kritinius klaidas, jei trūksta vartotojų sąrašų ar el. pašto transporto.
* Taikymas (Fix): Prenumeratų atnaujinimai, galiojimo rodyklos ir mokėjimo laikinai atvejai dabar vengia tiesioginės galiojimo, kritinių klaidos arba neprivalomųjų mokėjimų prarandimo.
* Geriabai: WordPress sujungimas testuojamas iki 7.0 versijos, produktinis Vue asetas atnaujinama iš npm šaltinių, o Cypress end-to-end apimtis dabar daugiau apima kasinimo, įtrybimo, SSO ir gateway veiksmus.

## Versija 2.12.0 — Išvedė 2026-05-15 {#version-2120--released-on-2026-05-15}

- Naujas: Prideguote Hostinger (hPanel) kaip palaikytą hostinga paslaugų tiekėją su domenų netyrinimu integracija.
- Naujas: Site Exporter dabar tvarko tinklo importavimo paketus, o tai leidžia be problemų atnaujinti visą svetainę.
- Korekcija: BCC skelbimų el. laiškams dabar naudojamas neapskirtas "undisclosed-recipients" headeris, kad būtų užblaudžytos gautuvų adresai.
- Korekcija: Abonentų pabaigos data nebus korumpuota, jei ją išsaugote su nedatų vertine.
- Korekcija: Stripe abonentų atnaujinimai dabar teisingai valina nuonuojimus be naudojimo perkirto "deleteDiscount" API.
- Korekcija: SSO rediriktoriai domenų netyrinimu turėtų būti apriboti, kad būtų išvengta nebeendamas rediriktorių ciklas.
- Korekcija: Įdiegimo žvaigždutės pasirinkimas dabar teisingai atnaujina pagrindinį duomenų modelį.
- Korekcija: Site Exporter CLI dabar išlaiko tinkamos pagrindinės netyros svetainės pasirinkimo.
- Pagrindinė įgamtas: Iš plugin paketą pašalytas grupavimas wp-cli, o tai padeda sumažinti plugino dydį.

## Versija 2.11.0 — Išvedė 2026-05-11 {#version-2110--released-on-2026-05-11}

- Naujas: Site exportai dabar grupuoja savarankiškai įkrovamą `index.php` failą, o tai leidžia įdiegti ZIP failą naujam hostui be papildomos plugino įdiegimo.
- Naujas: Tinklo eksportas leidžia administratoriams išsaugoti visus subsvetainis svetainis vienoje arhivuoje tiesiogiai iš Site Export admin puslapio.
- Naujas: Leistama "Site Templates" plono pasirinkimas dabar privaloma per pagrindinį variantą, teisingai apribojant šablonų pasidalinimo laiko planų ribų.
- Naujas: Skelbimų formos redaktoriuje perspėja, jei pridėta produktas be nustatytam reikalamu laiku.
- Naujas: Import/Export nustatyjimo sąrašo poslaidos dabar aiškiai apibūdina savo ribas ir tiesiogiai susiję su Site Export įrankiu.

## Versija 2.10.0 — Išvedė 2026-05-05 {#version-2100--released-on-2026-05-05}

Nowości: Nowy kreator konfiguracji z PayPal dla ręcznego wprowadzania danych uwierzytelniających z bramką OAuth, zapewniający płynną konfigurację bramki.
Nowości: Panel klienta po przełączeniu szablonu przeprojektowany za pomocą karty current-template, stałej siatki i przycisku **Reset current template**.
Naprawy: Przełączanie szablonów nie blokuje już interfejsu w przypadku błędu AJAX.
Naprawy: Stany uprawnień przełączania szablonów są zabezpieczone przed nieautoryzowanym dostępem.
Naprawy: Wprowadzane dane nadpisywania strony są walidowane przed zapisaniem.
Naprawy: Prompt adresu rozliczeniowego wyświetlany jest teraz, gdy adres jest pusty.
Naprawy: Rozwiązano komunikaty o nieaktualności deprecjacji null-to-string w PHP 8.1.
Naprawy: Bieżące ładowanie na żądanie (lazy-loaded) odbywa się przed hook init, aby zapobiec problemom z synchronizacją czasową.
Naprawy: Ścieżka SSO filtrowana jest respektowana we wszystkich przepływach logowania.
Naprawy: Opcje tożsamości strony bez zawartości są zachowywane po zapisaniu.

## Wersja 2.9.0 — Wydana 30.04.2026 {#version-290--released-on-2026-04-30}

Nowości: Dodano eksport i import pojedynczej strony w sekcji **Narzędzia > Eksport i import**.
Naprawy: Pliki ZIP są teraz serwowane za pośrednictwem uwierzytelnionego punktu pobierania.
Naprawy: Naprawiono ryzyko wstrzyknięcia SQL oraz problemy z zapytaniami w oczekujących operacjach eksportowania/importowania.
Naprawy: Strona nie jest publikowana, gdy administrator ręcznie weryfikuje e-mail klienta.
Naprawy: Usuwane są opuszczone rekordy pending_site, gdy brakuje członkostwa.
Naprawy: Naprawiono odstępy w nawigacji panelu ustawień oraz kotwicę wyszukiwania.
Naprawy: Strony oczekujące wyświetlane są teraz jako pierwsze w widoku Wszystkie strony.
Naprawy: Dodano nagłówek User-Agent dla dostawcy zrzutów ekranu (mShots), aby zapobiec błędom 403.
Naprawy: Rozwiązano cykliczną zależność crona importu.
Naprawy: ID turysty są normalizowane do podkreśleń w kluczach ustawień użytkownika.
Poprawki: Zamiast Alchemy/Zippy używany jest teraz ZipArchive dla lepszej kompatybilności.

## Wersja 2.8.0 — Wydana 29.04.2026 {#version-280--released-on-2026-04-29}

* Nauja: Įjungti Jumper (skaitmenis) mygtuką pridėtas į UI nustatymų „Kiti pasirinkimai“ sekciją.
* Nauja: Prideta status kolona į puslapio užsakymo formų sąrašą.
* Nauja: Prideta Addon sunrise failų įkrovimo funkcija pritaikytoms MU-plugin sunrise pakeitimams.
* Geriesta: Išjungta nustatymas įjungti klaidos pranešimą puslapyje nustatymų puslapyje.
* Taikoma: Ačiū mygtuko puslapio kortelė – vaizdas dabar yra su apribojimu ir nuorodos stilizuoti teisingai.
* Taikoma: Screenshot'o tiekėjas pakeistas iš thum.io į WordPress.com mShots.
* Taikoma: Registracijos ir pagrindinės vaidmenys įjungimas dabar nustato tinkamus pagrindinius parametrus naujame įdaryme.
* Taikoma: `get_site_url()` dabar negrąžina vidurio, kai domenui yra portai.
* Taikoma: Medijos failų klonavimas dabar teisingai atliekamas, kai nustatymas `copy_media` yra tuščias.
* Taikoma: Objekto kešimo (Object cache) nevalidu teisingai po sitemap naujimo aktyvavimo.
* Taikoma: Personalizuotas domenas automatiškai įjungiam kaip pagrindinis priverstų DNS patvirtinimo metu 3 dalis domenams.
* Taikoma: Pastabos nustatymai atsisveikiami, kai pasibaigus laipsnis yra išvalomas (išvėrinta) mokėjimas.
* Taikoma: Slapado stiprumo kontrolė atnaujina po puslaidos įvaizdo (inline login prompt) uždarymo.
* Taikoma: Nebebeidžios puslapio atsisiųsinimo naujinimo funkcija sustota mygtuko mygtuku, kai puslapis jau yra sukurtas.
* Taikoma: WP core registracijos opsinimas sinigruojamas priverstų įdarymo aktyvavimu ir nustatymų saug modu.
* Taikoma: Prideta nulioji laipsnis (Null expiration guard) `calculate_expiration` funkcijoms PHP 8.4 tinkamumo tikslais.
* Taikoma: Duplikatūs registracijos puslapiai blokuojami, jei klientas jau turi aktyvų nustatyto bazę.
* Taikoma: Prideta nulioji kontrolė `date_expiration` puslapyje užsakymo metu.
* Taikoma: Puslapis įrengimas stiprinamas – apribojimai, nustatymų inferavimas ir domeno priverstumas.
* Taikoma: Pre-install patikrinimo statusas etiketė koreguota į "NEAKTIVUOTA", kai patikrinimas nepasirenka.
* Taikoma: Užsakymo domenai naudojami el. pašto patvirtinimo nuorodoms.
* Taikoma: Automatinis įėjimas po užsakymą, jei nėra slapado laukimo.
* Taikoma: Nemokamos bazos negrąžina – traktuojamos kaip laipsnis (lifetime).

Priešvarai: El. pašto atstyti (verification gate) užstręsta, kol klientas nepatvirtina savo el. pašto adresą, o ne.
Priešvarai: SES v2 API endpoint base path ir identitetų laisvumo (identity route) keliamos.
Priešvarai: `wu_inline_login_error` hook išsiųstas pre-submit uždarymo blokje.
