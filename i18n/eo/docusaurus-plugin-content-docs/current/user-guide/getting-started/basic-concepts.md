---
title: Baza konceptoj
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Baze Konceptoj

Por novaj WordPress Multisite utilizanto kaj iu, kiu just komencas uzi Ultimate Multisite, povas esti multaj novaj vortoj kaj frazoj por akcepti en la tempe. Esti lernant ilin estas grava tarea ĉar vi bezonas kompreni la platformon kaj kiel ĝi funkcias kiel totala sistema.

En ĉi tiu artikolo ni provos defini kaj klarigi kelkajn daŭran konceptojn en WordPress. Kelkaj el ili estas pli relevante por uzantoj, aliaj por sviluppantoj, kaj kelkaj por amba.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** estas tip de instalado de WordPress, kiu permesas vi krei kaj administra reton de pluraj sitioj el unuja WordPress dashboardo. Vi povas administra ĉion inkluzive la nombro de sitioj, funkciojn, temojn kaj uzanto-rolojn. Ĝi estas eble administra centaj kaj milaj sitoj.

## Retejo (Network) {#network}

En terminologio de WordPress, multisite reto estas tio, kie pluraj **subsitoj** povas esti administriitaj el unuja dashboardo. Se la kreado de multisite reto diferencas inter alojantoj, la finaj rezultoj tipaŭ ofte estas kelkaj pli da direkтивaj instruoj en la fileco **wp-config.php**, por informi WordPress, ke ĝi funkcias en ĉi tiu specifita modo.

Ekzistas pluraj klare diferencoj inter multisite reto kaj independentej instalita WordPress instalado, kiujn ni breve diskutis.

## Baza Dato (Database) {#database}

Baza dato estas struktura, organigita seto de datumoj. En informatik terminologio, baza dato referas al la programsoftware uzata por stoki kaj organigi datumojn. Pensiĝu pri ĝi kiel kabineto de fileco, kie vi stasis datumojn en diversaj sekcioj nomitaj tabuloj (tables).

WordPress Multisite uzas unan bazan daton kaj ĉiu subsudojo ricevas sin propran tabulojn kun la blog ID en la prefikso. Tial, ĉiam kiam vi instalas reton de instalado kaj kreas subsudojon, vi devas havi ĉi tiuj tabuloj:

_wp_1_options_ - options tablo por primera sub-sitio

_wp_2_options_ - options tablo por segunda sub-sitio

## Proveho de alojamiento (Hosting provider) {#hosting-provider}

Un proveho de alojamiento es una empresa que permite a negocios e individuos poner sus sitios web disponibles a través de la World Wide Web. Los servicios que ofrecen los proveedores de alojamiento web varían, pero generalmente incluyen diseño de sitios web, espacio de almacenamiento en el host y conectividad a Internet.

## Dominio (Domain) {#domain}

Un nombre de dominio es una dirección que la gente usa para visitar tu sitio. Le dice al navegador dónde buscar tu sitio. Al igual que una dirección de calle, un dominio es cómo la gente visita tu sitio web en línea. Y, como tener un letrero delante de tu tienda. Si deseas visitar nuestro sitio web, tendrás que escribir nuestra dirección web en la barra de direcciones de tu navegador, que es [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com), donde [**ultimatemultisite.com**](http://ultimatemultisite.com) es el nombre del dominio.

## Subdominio (Subdomain) {#subdomain}

Un subdominio es un tipo de jerarquía de sitio web bajo el dominio principal, pero en lugar de usar carpetas para organizar el contenido en un sitio web, es como si tuviera su propio sitio web. Se presenta como [**https://site1.domain.com/**](https://site1.domain.com/), donde _site1_ es el nombre del subdominio y [_domain.com_](http://domain.com) es el dominio principal.

## Subdirectorio (Subdirectory) {#subdirectory}

Un subdirectorio es un tipo de jerarquía de sitio web bajo un dominio raíz que usa carpetas para organizar el contenido en un sitio web. Un subdirectorio es lo mismo que una subcarpeta y los nombres se pueden usar indistintamente. Se presenta como [**https://domain.com/site1**](https://domain.com/site1), donde _site1_ es el nombre del subdirectorio y [_domain.com_](http://domain.com) es el dominio principal.

## Subsitio (Subsite) {#subsite}

Subsite estas infaŭlo sita, kiun vi kreas sur parto de la Multisite retoj. Li povas esti **subdomajno** aŭ **subdirektorio**, dependante de kiel via WordPress Multisite instalacio estas konfigurita.

## Super Admin {#super-admin}

WordPress Super Admin estas uzanto-rola kun plenej kapablitaj por administra ĉiuj subsitajn sur la Multisite retoj. Por Multisite uzantoj, ĝi estas la **suprema nivelo de aliro**, kiun vi povas doni al via WordPress instalacio.

## Plugin {#plugin}

En ĝenera sentido, plugin estas seti kodoj, kiuj aĉas pli da funkcio al via WordPress sita. Ĝi povas esti iliaŭ simple ŝanĝi la log-in logon aŭ komplekse aĉi e-komercon. _Woocommerce_ kaj _Contact Form_ estas ekzemploj de plugino.

Sur WordPress Multisite, pluginoj povas esti instalitaj nur de la administradurbo de la retoj per Super Admino. Subsite Administrajnoj povas aktivi kaj deaktivigi pluginojn nur dentro sia subsito.

## Themes {#themes}

WordPress tema estas grupo filoj (_grafikoj, estilo-sheet'oj kaj kodoj_), kiuj dicas la ĝeneralan aparadon de la sita. Ĝi donas ĉiujn la front-end stilajn elementojn kiel fontstilojn, paĝlayoutan strukturon, kolorojn, etc.

Simile kiel pluginoj, temoj en WordPress Multisite povas esti instalitaj nur de Super Admino kaj aktivi sur la nivelo de subsito de subsite administrantoj.

## Site Template {#site-template}

**Site Template** estas bazaj sita (boilerplate site), kiun vi povas uzi kiel bazon pri kreado novaj sitaj en via retoj.

Tio signifas, ke vi povas krei bazan siton, aktivi diversajn pluginojn, stabi pli aktivan temon kaj personaligi ĝin kiel vi ŝatis. Tiam, kiam via kliento kreas novan konton, aldatne oni ricevas defaultan WordPress-siton sen signifaj laŭvortaj en ĝi, sed ili ricevas kopion de via baza sitio kun ĉiuj personaligoj kaj enhavo déjà instalita.

## Domain Mapping {#domain-mapping}

**Domeno-mappado** kun WordPress estas maniero redirekti por uzanto de la adres de la ĉezo al la ĝusta hospito, per la adres de la ĉezo. En WordPress Multisite, subsitoj estas kreitaj uzante ili subdirektaron aŭ subdomaineron. Kion domeno-mappado faras? Ĝi permesas al subsitej uzui supernivelan domenon kiel [**joesbikeshop.com**](http://joesbikeshop.com) por ŝanĝi sian adreson de la sitio por ŝuti pli profesia.

## SSL {#ssl}

SSL signifas **Secure Sockets Layer**. Ĝi estas digitala certikato, kiu autentikas la identecon de la ĉezo kaj permesas enkriptitan konekton. Anĝis ĝi estas uzata kiel la standardteknologio por sekuri la internetan konekton kaj protekti ĉiuj sensajn datumojn, kiuj estas senditaj inter du sistemoj, prevenante criminalojn legi kaj modifiian kualkie informojn transiritajn, inkluzive potenclan personajn detalojn. Modernaj brauzeroj postulas SSL, kio faras ĝin esencian pri la kreado kaj la funkcio de ĉezo.

## Media {#media}

Media estas imagenoj, aŭdoj, videj kaj aliaj fajiloj kiuj faras la ĉezon.

Reteaj sitoj partaj unu bazan databazon en WordPress Multisite; ili konservas apartajn jarojn sur la sistemfajsistema por media fajiloj.

La standarda lokiĝo de WordPress (wp-content/uploads) restas; tial ĝia jaroj estas ŝanĝita por reflekti la unikan ID de la retejo. Konsekvence media fajiloj por una retejo aparas kiel wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks estas la daŭraj URL-oj de via individua blogpostita aŭ paĝo en via sito. Permalinks ankaŭ nomas **belaj linkoj**. Per default, WordPress URL-oj uzas la formaton de la skribiĉa strongo, kiu ŝajnas simile al ĉi tio:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite estas WordPress-plug-in, elproducitita por WordPress Multisite instaloj, kiu transformas vian WordPress instalon en premium retoj de sitaĵoj – similaj [WordPress.com](https://WordPress.com) – per permiti klientoj krei sitaĵojn per mensia, kvartala aŭ anualan pagoj (vi povas ankaŭ krei Frec planojn).

## Checkout Form {#checkout-form}

Checkout Form estas unuopa aŭ plurstepa ordoformo, kiu implikas la kreon de sub-sitaĵo, aĉetas (membership) kaj uzantaj kontoj per registron de Ultimate Multisite. Ĝi konsistas el diversaj kampoj kaj pagaj formoj, kiujn uzanto devas envipli en la registriĝo.

## Webhook {#webhook}

Webhook (tam nomita web callback aŭ HTTP push API) estas maniero, per kiu aplikeco povas doni al aliaj aplikoj reala informon. Webhook transmetas datum al aliaj aplikoj kiam ĝi okazas, signifante vi ricevas datum intercedanto.

**Ultimate Multisite webhooks** ŝtopas infinitajn posibilitojn, permesante retoj administratoroj fari ĉiuj tipo de malgravaj sed utile integriĝoj, speciale se ili uzata kun servoj kiel _Zapier_ kaj IFTTT_.

## Events {#events}

Event estas akcio, kiu okazas rezulto de la uzanto aŭ alia vorto, kiel kliko per muŝo. Ultimate Multisite konservas registron de ĉiuj eventoj kaj logoj, kiuj okazas en vian tutan reton. Ĝi monitoras diversajn aktivajn aguantojn en via multisitaĵo, kiel ŝanĝoj de planoj.
