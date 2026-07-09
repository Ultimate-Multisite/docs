---
title: Plan de lafado
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Plan de la planajni (v2) {#downgrading-a-plan-v2}

_**IMPORTANTE NOTA: Ĉi tiu artikolo referas al Ultimate Multisite versio 2.x.**_

Downgrade de plan aŭ subskribo estas grava akcio, kiun viaj klientoj povas fari, se ili havas limitan budgeton aŭ decidas, ke ili ne bezonas multaj resurs por gordi sian subsite.

## Kiel downgradigi planon {#how-to-downgrade-a-plan}

Viaj klientoj povas downgrade sian planon kiamporti per logi-in al sia subsite admin dashboard kaj kliki **Change** (Mangi) sub sia konto paĝo.

![Konto paĝo kun Via Membriado karto kaj Change butono](/img/account-page/membership-change-button.png)

Post kiam oni klikas la butonon **Change**, la uzanto/kliento estas redirekti al la checkout paĝo, kie ili povas elekti la planon, kiun ili volas ŝanĝi sian subskribon al.

![Paĝo de opcio downgrade de planaj en la kliento lado](/img/account-page/downgrade-picker.png)

En ĉi tiu ekzemplo ni downgradigas la planon de **Premium** al **Free**.

Por procedi, uzanto nur bezonas kliki la butonon **Complete Checkout** (Finalizi Pagadon). Tiam ĝi revendi li al la konto paĝo, montrante mesaĝon pri la pendanta ŝanĝo por la membriado. La ŝanĝoj efektivasĝos sur la **proksima fakturaj ciro**.

![Konto paĝo montrante banner pri pendanta ŝanĝo de membriado](/img/account-page/pending-change.png)

### Kion okazas, kiam uzanto downgradigas sian planon {#what-happens-when-a-user-downgrades-their-plan}

Ĝi estas grava noti, ke downgrade de la planon ne ŝanĝas la ekzistantan konfiguracion en la subsite de la uzanto.

Ĝi ne ŝanĝas aŭtomate la site template, ĉar ŝanĝi la site template komplete efase kaj redefinis la subsite. Tio estas por eviti neproksime perdo de datumoj. Tial diskaj espacios, temoj, pluginoj kaj aliaj elementoj restas integritaj, se ne postaj (posts).

Komprenas ni, ke via'n ĉefa zorgo estas la limitoj kaj kvotoj, kiujn vi statutos sub ĉiu plan, sed ni devas konsideri la damaĝon, kiun tio faros al la subsite de la uzanto, se vi lenĝu aŭ ŝanĝi iu el ĝiaj konfiguracioj.

Por postoj superantaj la limojn setitita en la plan, vi havas 3 malsamajn opcion: **Kepli la postojn kiel ili estas** *,* **Movi la postojn al la kastoj** *,* aŭ **Movi la postojn al la bueco** *.* Vi povas konfigurigi tion sub Ultimate Multisite settings.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Kion okazas kun la pago {#what-happens-to-the-payment}

En versio 2.0, ĝi ne bezonas pliaj ajustoj pri proration en la pago.

Tio ĉar la sistema esperas, ke la ekzista membereco **kompleti sian fakturajn ciklon antaŭ** ke la nova plan/membereco komencu. La nova faktura montro por la nova membereco estas aŭtomate aplikiita kaj fakturiita sur la suivante faktura ciklo.
