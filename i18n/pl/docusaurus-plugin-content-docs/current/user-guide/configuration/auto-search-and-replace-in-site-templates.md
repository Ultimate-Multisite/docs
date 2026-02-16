---
title: Automatyczne wyszukiwanie i zamiana w szablonach witryn
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Automatyczne wyszukiwanie i zamienianie w szablonach stron (v2)

_**Ten poradnik wymaga WP UItimo w wersji 2.x.**_

Jedną z najpotężniejszych funkcji Ultimate Multisite jest możliwość dodawania dowolnych pól tekstowych, kolorów i pól wyboru do formularza rejestracji. Po zebraniu tych danych możemy ich użyć do wstępnego wypełnienia treści w wybranych częściach szablonu strony. Następnie, gdy nowa strona zostanie opublikowana, Ultimate Multisite automatycznie zastąpi symbole zastępcze rzeczywistymi informacjami podanymi podczas rejestracji.

Na przykład możesz przygotować swoje szablony stron z symbolami zastępczymi. Symbole zastępcze należy dodawać w podwójnych nawiasach klamrowych - {{nazwa_symbolu}}.

Następnie wystarczy dodać odpowiednie pole rejestracji, aby zebrać te dane.

Twój klient będzie mógł wypełnić to pole podczas rejestracji.

Ultimate Multisite automatycznie zastąpi symbole zastępcze danymi podanymi przez klienta.

## **Rozwiązanie problemu „szablonu pełnego symboli zastępczych"**

To wszystko świetnie, ale pojawia się pewien nieestetyczny problem: teraz nasze szablony stron - które mogą odwiedzać nasi klienci - są pełne brzydkich symboli zastępczych, które niewiele mówią.

Aby to rozwiązać, oferujemy możliwość ustawienia tymczasowych wartości dla symboli zastępczych. Używamy tych wartości do wyszukiwania i zamieniania ich zawartości w szablonach stron, gdy odwiedzają je Twoi klienci.

Dostęp do edytora symboli zastępczych w szablonach uzyskasz przechodząc do **Ultimate Multisite > Ustawienia > Strony**, a następnie klikając link Edytuj symbole zastępcze na pasku bocznym.

![Link Edytuj symbole zastępcze na pasku bocznym ustawień Stron](/img/config/settings-sites.png)

Przeniesie Cię to do edytora zawartości symboli zastępczych, gdzie możesz dodawać symbole zastępcze i ich odpowiednie wartości.

![Edytor zawartości symboli zastępczych z nazwami i wartościami symboli](/img/config/settings-sites.png)
