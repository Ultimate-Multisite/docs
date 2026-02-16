---
title: Migracja z V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migracja z wersji V1

## Ultimate Multisite przeszedł z oryginalnej rodziny wydań 1.x na rodzinę wydań 2.x.

Ultimate Multisite w wersji 2.0 i nowszych to całkowicie przepisany kod, co oznacza, że stara i nowa wersja mają ze sobą bardzo niewiele wspólnego. Z tego powodu podczas aktualizacji z 1.x do 2.x Twoje dane będą musiały zostać przeniesione do formatu zrozumiałego dla nowych wersji.

Na szczęście Ultimate Multisite 2.0+ **ma wbudowany migrator**, który potrafi wykryć dane ze starej wersji i przekonwertować je do nowego formatu. Migracja odbywa się podczas **Kreatora konfiguracji** w wersji 2.0+.

W tej lekcji dowiesz się, jak działa migrator, co zrobić w przypadku błędów i jak rozwiązywać problemy, które mogą pojawić się podczas tego procesu.

_**WAŻNE: Zanim rozpoczniesz aktualizację z wersji 1.x do 2.0, koniecznie wykonaj kopię zapasową bazy danych swojej witryny**_

## Pierwsze kroki

Pierwszym krokiem jest pobranie pliku .zip wtyczki i zainstalowanie wersji 2.0 w panelu administratora sieci.

Po [zainstalowaniu i aktywowaniu wersji 2.0](../getting-started/installing-ultimate-multisite.md) system automatycznie wykryje, że Twoja sieć Multisite działa na starszej wersji, i wyświetli komunikat na górze strony wtyczki.

_**UWAGA:** Jeśli masz zainstalowany Ultimate Multisite 1.x w swojej sieci Multisite, pojawi się opcja zastąpienia wtyczki właśnie pobraną wersją. Kliknij **Replace current with uploaded** (Zastąp bieżącą przesłaną wersją)._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Na następnej stronie zobaczysz, jakie starsze dodatki masz zainstalowane wraz z wersją 1.x. Znajdziesz tam informacje, czy używana wersja jest kompatybilna z wersją 2.0, czy też po migracji musisz zainstalować zaktualizowaną wersję dodatku.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Gdy będziesz gotowy, kliknij przycisk **Visit the Installer to finish the upgrade** (Przejdź do instalatora, aby dokończyć aktualizację).

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Zostaniesz przeniesiony na stronę kreatora instalacji z komunikatami powitalnymi. Wystarczy kliknąć **Get Started** (Rozpocznij), aby przejść dalej.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Po kliknięciu **Get Started** zostaniesz przekierowany do sekcji sprawdzania wymagań wstępnych. Zobaczysz tu informacje o swoim systemie i instalacji WordPress oraz informację, czy spełnia ona **wymagania Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Następnie musisz wprowadzić klucz licencyjny Ultimate Multisite i aktywować wtyczkę. Dzięki temu wszystkie funkcje, w tym dodatki, będą dostępne na Twojej witrynie.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Po wprowadzeniu klucza kliknij **Agree & Activate** (Zgadzam się i aktywuj).

Po aktywacji licencji możesz rozpocząć właściwą instalację, klikając **Install** (Zainstaluj) na następnej stronie. Spowoduje to automatyczne utworzenie plików i bazy danych niezbędnych do działania wersji 2.0.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Teraz czas na migrację

Migrator ma wbudowane zabezpieczenie, które sprawdza całą Twoją sieć multisite, aby upewnić się, że wszystkie dane Ultimate Multisite można przenieść bez problemów. Kliknij przycisk **Run Check** (Uruchom sprawdzanie), aby rozpocząć proces.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Po zakończeniu sprawdzania możliwe są dwa wyniki: **z błędem** lub **bez błędu**.

### Z błędem

Jeśli pojawi się komunikat o błędzie, musisz skontaktować się z naszym zespołem pomocy technicznej, aby pomógł Ci go naprawić. Pamiętaj, aby **dołączyć dziennik błędów** podczas tworzenia zgłoszenia. Możesz pobrać dziennik lub kliknąć link „contact our support team" (skontaktuj się z zespołem pomocy). Otworzy się widget pomocy po prawej stronie ekranu z wstępnie wypełnionymi polami, w tym dziennikiem błędów w opisie.

_**Ponieważ system wykrył błąd, nie będziesz mógł kontynuować migracji do wersji 2.0. Możesz wtedy przywrócić wersję 1.x i dalej używać swojej sieci do czasu naprawienia błędu.**_

### Bez błędu

Jeśli system nie znajdzie żadnych błędów, zobaczysz komunikat o powodzeniu i przycisk **Migrate** (Migruj) na dole strony, który pozwoli Ci kontynuować migrację. Na tej stronie zostaniesz przypomniany o utworzeniu kopii zapasowej bazy danych przed kontynuowaniem — gorąco to zalecamy. Kliknij **Migrate**, jeśli masz już kopię zapasową.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

I to wszystko!

Możesz kontynuować konfigurację w kreatorze, aby zaktualizować logo i inne elementy swojej sieci, lub od razu zacząć przeglądać menu Ultimate Multisite w wersji 2.0 i jego nowy interfejs. Śmiało — odkrywaj nowe możliwości!
