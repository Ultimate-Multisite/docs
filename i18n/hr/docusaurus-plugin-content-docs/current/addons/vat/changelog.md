---
title: Dnevnik promjena PDV-a
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT dnevnik promjena {#vat-changelog}

Verzija 1.0.7 - Objavljeno 2026-02-03

* Ispravak: Njemački (DE) VAT brojevi nisu prolazili provjeru valjanosti zbog pogrešaka MS_MAX_CONCURRENT_REQ VIES SOAP usluge. Prebačeno je sa zastarjelog SOAP API-ja na službeni EU VIES REST API radi pouzdanije provjere valjanosti.
* Ispravak: VAT brojevi sada se prihvaćaju kada je VIES usluga privremeno nedostupna, umjesto da budu pogrešno odbijeni. Unos u zapisnik stvara se za kasniji pregled.
* Ispravak: Polje VAT/Tax ID sada je vidljivo za sve zemlje, ne samo za članice EU-a. Porezni ID-ovi izvan EU-a (npr. švicarski CHE brojevi) pohranjuju se za prikaz na računu bez VIES provjere valjanosti.
* Ispravak: Dohvaćanje VAT prefiksa za Grčku (GR), Monako (MC) i Otok Man (IM) nije radilo zbog neispravne logike pretraživanja polja.
* Poboljšanje: Uklonjena je nepotrebna razvojna ovisnost wp-cli-bundle koja je mogla uzrokovati fatalne pogreške kada se upotrebljavala uz dodatak za izvoz web-mjesta.
* Poboljšanje: Dodan je sveobuhvatan skup unit testova (53 testa).

Verzija 1.0.6 - Objavljeno 2026-01-25

* Ispravak: Domaće B2B transakcije sada ispravno naplaćuju VAT. Prema EU pravilima o VAT-u, reverse charge primjenjuje se samo na prekogranične B2B transakcije, ne kada se zemlja kupca podudara sa zemljom tvrtke.

Verzija 1.0.5 - Objavljeno 2026-01-22

* Ispravak: Dodatak se nije učitavao ili nije ispravno radio.
* Promjena: Izvor podataka o VAT stopama prebačen je s euvatrates.com na repozitorij ibericode/vat-rates radi pouzdanijih i aktivno održavanih podataka.
* Ispravak: Ispravljena je tipografska pogreška u vrijednosti opcije super_reduced_rates.
* Poboljšanje: Dodane su provjere za null pri rukovanju kodom zemlje kako bi se spriječile pogreške.
* Promjena: Uklonjene su uključene datoteke prijevoda u korist automatskih ažuriranja putem Traduttore.

Verzija: 1.0.3 - Objavljeno 2025-09-28

* Preimenovan prefiks u ultimate-multisite; ažurirana text domena; povećana verzija.

Verzija 1.0.0-beta.4 - 2021-09-24

* Dodano: filtar wp_ultimo_skip_network_active_check za postave temeljene na mu-plugins;

Verzija 1.0.0 - 05/08/2021 - Početno izdanje
