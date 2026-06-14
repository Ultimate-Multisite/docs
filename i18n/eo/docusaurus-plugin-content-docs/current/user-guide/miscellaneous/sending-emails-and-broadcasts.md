---
title: Dondado de eloj kaj transmetoj
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Envio de Emails kaj Transmisoj (v2)

_**IMPORTAN NOTO: Ĉi tiu artikolo referas al Ultimate Multisite versio 2.x.**_

Ultimate Multisite havas funkcion, kiu permesas al vi komunikui kun viaj klientoj per dondigi emailo al targeta uzanto aŭ grupo de uzantoj kaj ankaŭ dondigi notojn sur ilia admin-dashboard por transmeti anonsojn.

## Adoji admin notojn al la dashboard de viaj klientoj per Transmisojn (Broadcasts)

Kaj uzante la funkcion de transmisoj de Ultimate Multisite, vi povas aĉoti **admin notojn** al la admin-dashboard de via subsite uzanto.

Tio estas tre helpa, se vi bezonas fari anoncon kiel sistemaj manutencoj aŭ oferi novajn produkto aŭ servojn al viaj ekzistantaj uzantoj. Tio estas, kiel la admin noto aparos sur la dashboard de via uzanto.

<!-- Screenshot unavailable: Admin noto transmetita sur la dashboard de klientaj subsite -->

Por komenci admin noton, direte al via retoj admin-dashboard kaj sub la menuko **Ultimate Multisite**, vi trovos la opcion **Broadcasts** (Transmisoj).

![Paĝo de listo de transmisoj en Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Vi ankaŭ povas modifi ekzistantajn transmisojn:

![Interfaco de modifo de transmeto](/img/admin/broadcast-edit.png)

De ĉi tiu paĝo, kliku la butonon **Add Broadcast** (Adoji Transmiso) en la superflan parto.

Tio movi la finestra modal "Add broadcast" kie vi povas elekti tipon transmision, kiun vi volas dondigi.

Aliri kaj selektiuj **Message** (Mesaĝo), tiel kliku la butonon **Next Step** (Proksma Paŝo).

![Modal de adado de transmeto kun la opcio Message elektita](/img/admin/broadcast-add-message.png)

La suivante finestra demandos al vi ili, ĉu vi volas selekti **Target customer** (Targeta klientoj) aŭ **Target product** (Targeta produkto). Notu, ke vi povas selekti pli ol unulan uzanton aŭ pli ol unan produkton.

Peti por cherĉi homa konton aŭ produkton, vi devas komenci skribi la vorton en la kampo.

Sub la kampo **Tipoti la mesaĝtipon** (Message type), vi povas elekti la koloran de la noticio. Tio emfazas urganton de via mesaĝo.

Tamen vi povas kliki sur **Proksma paŝo** (Next Step).

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

La suivante finestra estas tio, kie vi povas komenci komponi vian mesaĝon per la enskribado de la subjekto kaj la entron/mesaĝo kiun vi volas transmeti al la uzantoj.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Post krei vian mesaĝon, vi povas fini per foti la butonon **Deli** (Send).

E tio estas ĉio. La admin noticio devas tuteble aperi sur la dashboard de via uzanto.

## Doni elsendi e-mailajn al via klientoj

Uzu la funkcionon transmetoni e-mailon per Ultimate Multisite, vi povas diri e-mailon al via uzantoj. Vi havas la opcion diri la e-mailon nur al specifaj uzantoj aŭ targeti specifan grupiron de uzantoj bazitajn sur la produkto aŭ planon, kiun ili estas subskribitaj.

Por komenci e-mail transmetado, diru al via retoj admin dashboard kaj sub la menuko Ultimate Multisite, vi trovos la opcion **Transmeti** (Broadcast).

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

De ĉi tiu paĝo, kliku sur la butonon **Aggiģi transmetadon** (Add broadcast) en la superreto.

Tio movi la modalaj finestra "Aggiģi transmetadon" kie vi povas elekti tipon transmetado, kiun vi volas diri. Komenci kun selekto de **E-mail** kaj tiam kliku sur la butonon **Proksma paŝo**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

La suivante finestra demandos al vi ili, ĉu vi volas **Target customer** aŭ **Target product**. Notu, ke vi povas selekti pli ol unu uzanton aŭ pli ol unan produkton.

P-searchi aŭ produkton vi devas komenci skribi la vorton en la kampo.

Unfoje kiom vi elektas vian celan publikon, vi povas kliki sur **Next Step**.

![Selekto de celaj klientoj kaj celita produkto por E-mail transmeto](/img/admin/broadcast-email-targets.png)

La sekva okazo estas tio, kie vi povas komenci komponi vian e-mailajn per skribi la subjekton kaj la enon/mesaĝon, kiun vi volas envi fali al la uzantoj.

<!-- Screenshot unavailable: Redaktilo de subjekto kaj eno de E-mail transmeto pri la stepo de komponado -->

Post krei vian mesaĝon, vi povas kliki sur butonon **Send**.

E tio estas facile envi fali e-mailon al viaj finaj uzantoj uzante la funkcionon transmeto (broadcast).

## Sisteme e-mailoj

Sisteme e-mailoj en Ultimate Multisite estas **automata notifikoj**, kiuj sendas la sistemo post certajn agondojn kiel registriĝon, pagamenton, domeno mapadon, etc. Ti e-mailoj povas esti redaktitaj aŭ modifitita el la ŝanĝoj de Ultimate Multisite. Ili ankaŭ venas kun funkcio, kiu permesas vi redefiniti kaj importi ekzistantajn ŝanĝojn de alia Ultimate Multisite instalado.

### Redefiniti kaj Importi

Nova Ultima Multisite versioj, kiel ankaŭ add-on'oj, povas kaj faros novaj e-mailojn de tempon en tempon.

Por preveni konfliktojn kaj aliajn problemojn, **ni ne aldonos la novajn e-mailajn mallarton kiel Sisteme E-mailojn sur via instalado aŭtomate**, se ili ne estas kritiaj por la ĝusta funkcio de dada specifita funkcio.

Tamen, superadministrajoj kaj aġentoj povas importi ĉi ti novaj registritaj e-mailojn per la instrumenton importisto (importer tool). tiu procezo kreos novan sisteme e-mailon kun la enon kaj la konfiguracion de la nova mallarto de e-mailo, permesante al superadministrado fari kualkie modifacioj ili volas aŭ sekvi ilin kiel estas.

#### Kiel importi sisteme e-mailojn

Altiĝu al viaj Ultima Multisite Settings paĝo kaj diru al la **Emails** tabo.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Tamen, sur la latera baro (sidebar), kliku sur la butonon **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Sur la System Emails paĝo vi vidus la akciobutono **Reset & Import** en la superulo. Klikado sur ti buton devas ofiĉi la modala fenestrion por importado kaj resetado.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Tamen, vi povas ŝanĝi la Import Emails opciojn por vidi kiuj sistemaj emailoj estas valobli por importado.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Reseto de Sistemaj Emailoj

Al diversaj okazoj vi komprenas, ke la ŝanĝoj, kiujn vi fariĝis al iu ajna emaila mallopo (template), ne funkcias pli por vi kaj vi volas resetu ĝin al sia **default estado**.

En tiaj kazoj vi havas du opcion: vi povas simple dili sistemian emailon kaj importi ĝin vidas (utiligante la instruojn above) - tio efikas perdi sendmetrikajn kaj aliajn thingojn, kio faras ĉi ti metodon plej malpreferitan.

Aŭ vi povas uzi la **Reset & Import tool** por resetu ti emailan mallopan.

Por resetu emailan mallopan, vi povas diri la paŝojn above ĝis tio, kie vi atingas la Reset & Import tool, kaj tiam ŝanĝi la opcio **Reset** kaj selekti la emailojn, kiujn vi volas resetu al sia defaultonta enhavo.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
