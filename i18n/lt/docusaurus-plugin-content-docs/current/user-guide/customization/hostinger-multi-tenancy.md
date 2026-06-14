---
title: Hostinger Multitenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 pridėja Hostinger multi-tenancy funkciją, leidžiančią išlaikyti įrenginius dalyvauti su suvereninės skaitmeninės infrastruktūros (tenant) nustatymais kartu su esamais Hostinger domenų mapavimo integracijomis.

Naudokite šią funkciją, kai tenant domenus ir izoliuotas tenant infrastruktūra valdomos per Hostinger hPanel.

## Įdiegimo atsitikimo žanai

1. Konfigūruokite pagrindinę Hostinger integraciją per **Ultimate Multisite > Settings > Host Integrations**.
2. Patikrinkite, ar Hostinger API token gali valdyti tikslų domeną arba subdomainą.
3. Įjunkite Multi-Tenancy addon.
4. Konfigūruokite tenantizacijos strategiją prieš publikuodami tenantą.
5. Atlikite migracijos patikrinimo procesą prieš siuntant produktinę trafą į tenantą.

Hostinger funkcija naudoja bendrą Hostingerę ryšį host-sidoros veiksmų atlikimui. DNS vis dar turi viršyti į tinkamą Hostingerio paskyrą, ir apribojimai hPanel paskyros vis dar gelten.

## Funkcijos specifiniai keitimai

- Suvereniniai tenantai gali būti sukurti su host-aware domenų veiksmis.
- Same-machine bazos host stringai normalizuojami prieš suteikant patvirtinimą.
- Hostingeri valdomi tenantai turėtų naudoti bazos host vertę, kuri rodoma hPanel'e, jei WordPress runtime ne reikalauja vietinio perpasenkimo (override).
- SSO vizitas priklauso nuo to, kad tenantas domenų adresas viršytų į Hostingerio hostu sukurtyjantą tenantą.

## Hostinger tenantų problemų vykdymas

- Jei instalacija tenantos nepasirenka, patikrinkite, ar domenas jau priklausas su Hostingerio paskyra.
- Jei bazos patvirtinimas nepasirenka, padykite taikomybą tenantos DB vartotojo vardą, bazos pavadinimu ir host bindingu per hPanel.
- Jei **Visit (SSO)** nepasirenka, patikrinkite, ar DNS ir SSL yra aktyvūs tenantos domenui.
- Jei išlaikoma nustatymai palieka host resursus uždaryti, išjunkite visus likus bazas, vartotojus arba katalogus per hPanel po to, kai patvirtinate rezervacijas (backups).
