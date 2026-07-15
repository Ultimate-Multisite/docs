---
title: ALV-muutosloki
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT-muutosloki

Versio 1.0.7 - Julkaistu 2026-02-03

* Korjaus: Saksalaiset (DE) VAT-numerot eivät läpäisseet validointia VIES SOAP -palvelun MS_MAX_CONCURRENT_REQ-virheiden vuoksi. Vaihdettiin vanhasta SOAP API:sta viralliseen EU VIES REST API:in luotettavampaa validointia varten.
* Korjaus: VAT-numerot hyväksytään nyt, kun VIES-palvelu on tilapäisesti poissa käytöstä, sen sijaan että ne hylättäisiin virheellisesti. Lokimerkintä luodaan myöhempää tarkistusta varten.
* Korjaus: VAT/Tax ID -kenttä näkyy nyt kaikille maille, ei vain EU-jäsenille. EU:n ulkopuoliset tax ID:t (esim. Sveitsin CHE-numerot) tallennetaan laskun näyttämistä varten ilman VIES-validointia.
* Korjaus: VAT-etuliitteen haku Kreikalle (GR), Monacolle (MC) ja Mansaarelle (IM) oli rikki virheellisen taulukon hakulogiikan vuoksi.
* Parannus: Poistettiin tarpeeton wp-cli-bundle-kehitysriippuvuus, joka saattoi aiheuttaa vakavia virheitä, kun sitä käytettiin Site Exporter -lisäosan rinnalla.
* Parannus: Lisättiin kattava yksikkötestisarja (53 testiä).

Versio 1.0.6 - Julkaistu 2026-01-25

* Korjaus: Kotimaisista B2B-tapahtumista veloitetaan nyt VAT oikein. EU:n VAT-sääntöjen mukaan käännetty verovelvollisuus koskee vain rajat ylittäviä B2B-tapahtumia, ei tilanteita, joissa asiakkaan maa vastaa yrityksen maata.

Versio 1.0.5 - Julkaistu 2026-01-22

* Korjaus: Addon ei latautunut tai toiminut oikein.
* Muutos: Vaihdettiin VAT-kantatietojen lähde euvatrates.com-sivustosta ibericode/vat-rates-repositoryyn luotettavampien ja aktiivisesti ylläpidettyjen tietojen vuoksi.
* Korjaus: Korjattiin super_reduced_rates-asetusarvon kirjoitusvirhe.
* Parannus: Lisättiin null-tarkistukset maakoodin käsittelyyn virheiden estämiseksi.
* Muutos: Poistettiin mukana toimitetut käännöstiedostot automaattisten päivitysten hyväksi Traduttore-palvelun kautta.

Versio: 1.0.3 - Julkaistu 2025-09-28

* Nimeä etuliite uudelleen muotoon ultimate-multisite; päivitä text domain; version korotus.

Versio 1.0.0-beta.4 - 2021-09-24

* Lisätty: suodatin wp_ultimo_skip_network_active_check mu-plugins-pohjaisia asennuksia varten;

Versio 1.0.0 - 05/08/2021 - Ensimmäinen julkaisu
