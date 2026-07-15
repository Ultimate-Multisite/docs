---
title: Automatyczne wyszukiwanie i zamiana w szablonach witryn
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatyczne wyszukiwanie i zastępowanie w szablonach witryn (v2)

_**Ten poradnik wymaga WP UItimo w wersji 2.x.**_

Jedną z najpotężniejszych funkcji Ultimate Multisite jest możliwość dodawania dowolnego tekstu, koloru oraz pól wyboru do formularza rejestracji. Gdy już przechwycimy te dane, możemy ich użyć do wstępnego wypełnienia treści w określonych częściach wybranego szablonu witryny. Następnie, gdy nowa witryna zostanie opublikowana, Ultimate Multisite zastąpi symbole zastępcze rzeczywistymi informacjami wprowadzonymi podczas rejestracji.

Na przykład możesz tworzyć swoje witryny szablonowe z symbolami zastępczymi. Symbole zastępcze należy dodać w podwójnych nawiasach klamrowych — {{placeholder_name}}.

Następnie możesz po prostu dodać pasujące pole rejestracji, aby przechwycić te dane

Twój klient będzie wtedy mógł wypełnić to pole podczas rejestracji.

Ultimate Multisite automatycznie zastąpi symbole zastępcze danymi podanymi przez klienta.

## **Rozwiązanie problemu „szablonu pełnego symboli zastępczych”** {#solving-the-template-full-of-placeholders-problem}

To wszystko jest świetne, ale napotykamy nieprzyjemny problem: nasze szablony witryn — które mogą być odwiedzane przez naszych klientów — są teraz pełne brzydkich symboli zastępczych, które niewiele mówią.

Aby to rozwiązać, oferujemy opcję ustawienia fikcyjnych wartości dla symboli zastępczych i używamy tych wartości do wyszukiwania oraz zastępowania ich zawartości w witrynach szablonowych, gdy odwiedzają je Twoi klienci.

Dostęp do edytora symboli zastępczych szablonu możesz uzyskać, przechodząc do **Ultimate Multisite > Settings > Sites**, przewijając do obszaru Site Template Options, a następnie klikając link **Edit Placeholders**.

![Obszar Site Template Options na stronie ustawień Sites](/img/config/settings-sites-templates-section.png)

To przeniesie Cię do edytora treści symboli zastępczych, w którym możesz dodać symbole zastępcze i ich odpowiednią treść.

![Punkt wejścia do edytora symboli zastępczych szablonu](/img/config/settings-sites-templates-section.png)
