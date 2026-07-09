---
title: Dnevnik promjena PDV-a
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Dnevnik promjena VAT-a {#vat-changelog}

Version 1.0.7 - Objavljeno 2026-02-03

* Popravak: Brojevi VAT-a za Njemačku (DE) nisu prolazili validaciju zbog grešaka VIES SOAP servisa MS_MAX_CONCURRENT_REQ. Prešli smo sa starog SOAP API-ja na zvanični EU VIES REST API radi pouzdanije validacije.
* Popravak: Brojevi VAT-a sada se prihvaćaju kada je VIES servis privremeno nedostupan, umjesto da se pogrešno odbijaju. Kreiran je unos u log za kasniji pregled.
* Popravak: Polje za VAT/Poreski ID sada je vidljivo za sve zemlje, a ne samo za članice EU. Poreski ID-ji izvan EU (npr. švicarski CHE brojevi) pohranjuju se za prikaz na fakturi bez VIES validacije.
* Popravak: Pronalaženje prefiksa VAT-a za Grčku (GR), Monako (MC) i Otok Man (IM) bilo je pokvareno zbog pogrešne logike pretraživanja nizova (array lookup).
* Unapređenje: Uklonjena je nepotrebna wp-cli-bundle dev zavisnost koja je mogla uzrokovati fatalne greške kada se koristi uz Site Exporter Addon.
* Unapređenje: Dodat je sveobuhvatni set unit testova (53 testa).

Version 1.0.6 - Objavljeno 2026-01-25

* Popravak: Unutrašnje B2B transakcije sada pravilno naplaćuju VAT. Prema pravilima EU VAT-a, obrnuto naplaćivanje (reverse charge) vrijedi samo za prekogranične B2B transakcije, a ne kada se zemlja klijenta poklapa sa zemljom kompanije.

Version 1.0.5 - Objavljeno 2026-01-22

* Popravak: Addon nije učitavao ili radio ispravno.
* Promjena: Izvor podataka o stopama VAT-a prebačen je sa euvatrates.com na ibericode/vat-rates repozitorijum radi pouzdanijih i aktivno održavanih podataka.
* Popravak: Ispravljena je tipografska greška u vrijednosti opcije super_reduced_rates.
* Unapređenje: Dodane su provjere null vrijednosti za rukovanje kodovima zemalja kako bi se spriječile greške.
* Promjena: Uklonjeni su ugrađeni fajlovi sa prijevodima, umjesto automatskih ažuriranja putem Traduttore-a.

Version: 1.0.3 - Objavljeno 2025-09-28

* Preimenovan je prefiks na ultimate-multisite; ažuriran je tekstualni domen; povećana je verzija.

Version 1.0.0-beta.4 - 2021-09-24

* Dodato: filter wp_ultimo_skip_network_active_check za postavke bazirane na mu-pluginima;

Version 1.0.0 - 05/08/2021 - Početno izdanje
