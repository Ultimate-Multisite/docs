---
title: Ŝanĝoprotokolo de AVI
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Ŝanĝoprotokolo {#vat-changelog}

Versio 1.0.7 - Eldonita je 2026-02-03

* Riparo: Germanaj (DE) VAT-numeroj malsukcesis validigon pro eraroj MS_MAX_CONCURRENT_REQ de la VIES SOAP-servo. Ŝanĝite de la malnova SOAP API al la oficiala EU VIES REST API por pli fidinda validigo.
* Riparo: VAT-numeroj nun estas akceptataj kiam la VIES-servo estas provizore nedisponebla, anstataŭ esti malĝuste malakceptataj. Protokola enskribo estas kreita por posta revizio.
* Riparo: VAT/Tax ID-kampo nun estas videbla por ĉiuj landoj, ne nur EU-membroj. Ne-EU-impostaj ID-oj (ekz. svisaj CHE-numeroj) estas konservataj por faktura montrado sen VIES-validigo.
* Riparo: VAT-prefiksa serĉo por Grekio (GR), Monako (MC), kaj Maninsulo (IM) estis rompita pro malĝusta tabelserĉa logiko.
* Plibonigo: Forigita nenecesa wp-cli-bundle programada dependeco, kiu povus kaŭzi fatalajn erarojn kiam uzata kune kun la Site Exporter-aldonaĵo.
* Plibonigo: Aldonita ampleksa unuo-testa aro (53 testoj).

Versio 1.0.6 - Eldonita je 2026-01-25

* Riparo: Enlandaj B2B-transakcioj nun ĝuste ŝargas VAT. Laŭ EU VAT-reguloj, inversa ŝarĝo validas nur por translimaj B2B-transakcioj, ne kiam la lando de la kliento kongruas kun la lando de la kompanio.

Versio 1.0.5 - Eldonita je 2026-01-22

* Riparo: Aldonaĵo ne ŝargiĝis aŭ funkciis ĝuste.
* Ŝanĝo: Ŝanĝita VAT-tarifa datumfonto de euvatrates.com al la ibericode/vat-rates-deponejo por pli fidindaj kaj aktive prizorgataj datumoj.
* Riparo: Korektita tajperaro en la valoro de la opcio super_reduced_rates.
* Plibonigo: Aldonitaj null-kontroloj por traktado de landokodoj por preventi erarojn.
* Ŝanĝo: Forigitaj pakitaj tradukdosieroj favore al aŭtomataj ĝisdatigoj per Traduttore.

Versio: 1.0.3 - Eldonita je 2025-09-28

* Alinomita prefikso al ultimate-multisite; ĝisdatigita tekstodomajno; versia plialtigo.

Versio 1.0.0-beta.4 - 2021-09-24

* Aldonita: filtrilo wp_ultimo_skip_network_active_check por agordoj bazitaj sur mu-plugins;

Versio 1.0.0 - 05/08/2021 - Komenca Eldono
