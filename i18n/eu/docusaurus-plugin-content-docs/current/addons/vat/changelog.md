---
title: BEZaren aldaketa-erregistroa
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# BEZaren aldaketen erregistroa {#vat-changelog}

1.0.7 bertsioa - 2026-02-03an argitaratua

* Konponketa: Alemaniako (DE) BEZ zenbakiek balidazioan huts egiten zuten VIES SOAP zerbitzuaren MS_MAX_CONCURRENT_REQ erroreen ondorioz. SOAP API zaharretik EBko VIES REST API ofizialera aldatu da, balidazio fidagarriagoa lortzeko.
* Konponketa: BEZ zenbakiak orain onartzen dira VIES zerbitzua aldi baterako erabilgarri ez dagoenean, oker baztertu beharrean. Erregistro-sarrera bat sortzen da gero berrikusteko.
* Konponketa: BEZ/Zerga ID eremua orain herrialde guztietarako ikusgai dago, ez soilik EBko kideentzat. EBtik kanpoko zerga IDak (adibidez, Suitzako CHE zenbakiak) fakturan erakusteko gordetzen dira, VIES balidaziorik gabe.
* Konponketa: Greziarako (GR), Monakorako (MC) eta Man uhartearako (IM) BEZ aurrizkiaren bilaketak huts egiten zuen array bilaketa-logika okerraren ondorioz.
* Hobekuntza: Beharrezkoa ez zen wp-cli-bundle garapen-mendekotasuna kendu da, Site Exporter gehigarriarekin batera erabiltzean errore larriak sor zitzakeena.
* Hobekuntza: Unit test multzo osoa gehitu da (53 proba).

1.0.6 bertsioa - 2026-01-25ean argitaratua

* Konponketa: Etxe barruko B2B transakzioek orain BEZa behar bezala kobratzen dute. EBko BEZ arauen arabera, alderantzizko karga mugaz gaindiko B2B transakzioei bakarrik aplikatzen zaie, ez bezeroaren herrialdea enpresaren herrialdearekin bat datorrenean.

1.0.5 bertsioa - 2026-01-22an argitaratua

* Konponketa: Addon ez zen behar bezala kargatzen edo funtzionatzen.
* Aldaketa: BEZ tasen datu-iturria euvatrates.com-etik ibericode/vat-rates biltegira aldatu da, datu fidagarriagoak eta aktiboki mantenduak izateko.
* Konponketa: super_reduced_rates aukeraren balioan zegoen idazketa-akatsa zuzendu da.
* Hobekuntza: Herrialde-kodeen kudeaketan null egiaztapenak gehitu dira, erroreak saihesteko.
* Aldaketa: Sartutako itzulpen-fitxategiak kendu dira, Traduttore bidezko eguneratze automatikoen alde.

Bertsioa: 1.0.3 - 2025-09-28an argitaratua

* ultimate-multisite aurrizkira berrizendatu; testu-domeinua eguneratu; bertsioa igo.

1.0.0-beta.4 bertsioa - 2021-09-24

* Gehitua: mu-plugins oinarritutako konfigurazioetarako wp_ultimo_skip_network_active_check iragazkia;

1.0.0 bertsioa - 2021-08-05 - Hasierako argitalpena
