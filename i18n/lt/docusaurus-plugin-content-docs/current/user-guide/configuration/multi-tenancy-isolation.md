---
title: Multitenantui izoliacija
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolavimas tarpukų (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 palaiko bazos duomenų ir sistemos failų izolinavimą po subsite'ui, suteikiant suverbiai klientams. Tai užtikrina, kad klientų duomenys būtų atskirti, priedendo同时 tinklo lygio paslaugų, paskirstymo ir administravimo.

## Izolinavimo strategija

Naudokite suverbiają izolinavimą klientams, kuriems reikalinga stipresnė duomenų atskirstymas, skirtas sistemos failų saugumas ar atskiltas hosto granija.

Kiekiam suverbiai klientui turėtų būti:

- Skirta bazos duomenų baiga arba bazos prefikso strategija, apžvalgiama hostu.
- Skirtas subsite'ui sistemos failų šakų (filesystem) ryšys.
- Subsite'o registras įrašas, kuris nurodo subsite'ą su jo bazės duomenimis, šakų pakuotės (root path), hostname ir izolinavimo modeliu.
- Migracijos patvirtinimo rezultatas prieš tai, kol subsite'as bus veikti.

## Bazos hosto ryšymas (Database host binding)

Versija 1.2.0 keičia pagrindinį „tinkamas į vieną mašiną“ hosto ryšymo elgesį suverbiai instalacijoms. Viename mašinoje reikšmiai, pabaigiamai `localhost`, yra normalizuojami taip, kad Bedrock, FrankenPHP ir kontainerizuoti WordPress instalacijos galėtų suteikti ir patvirtinti įgaliojimus prieš hosto stringą MySQL iš tikrai matomą.

Kai konfigūruojate suverbiają klientą:

1. Nustatykite bazos hostą į tą vertę, kuri reikalinga subsite'o veikimo laiku (runtime).
2. Naudokite `localhost` lokalio sąlygų instalacijose, kai hostas tikisi lokalių ryšimų.
3. Naudokite `127.0.0.1` arba paslaugos hostname tik tada, jei bazos serveras suteikia teisę į tą hostą.
4. Atlikkite migracijos patvirtinimą po hosto ryšimo pakeitimo.

Jei patvirtinimas rodo teisingumo klaidas (grant failures), padykite subsite'o DB vartotojų įgaliojimus su konfigūruotu hosto ryšimu. Vartotojas, kuriam suteikiama įgaliojimas `user@localhost`, yra skirtas `user@127.0.0.1` arba `user@%`.

## Sistemos failų šaka (Filesystem root)

Taikantė rootis turi būti stabilus per restartą ir deploy'as. Jei galite, vengite naudojami temporinius mount paths. Bedrock stiliai instalacijose patikrinkite, kad tenant rootis nurodytų į WordPress web root, kurį tikisi tenant bootstrapui, o ne tik į projektų rootį.

## Įrengimo tvarkos kampaņa (Provisioning order)

Nauji suvereniniai klientai naudojant šią tvarką:

1. Sukurti registracijos įrašą tenant'ui.
2. Sukurti tenant'o duomenų bazę ir duomenų bazės vartotoją.
3. Bootstrapuoti tenant'o schemą (schema).
4. Įrengti tenant'us vartotojus.
5. Konfigūruoti tenant'o fizines sistemos (filesystem) žymėles.
6. Atlikti migracijos patikrinimą.
7. Pasirinkti routingu arba DNS po to, kai patikrinimas sėkmingai pabaigo.

Ši tvarka užtikrina, kad neįtraukties tenantai negaudėtų trafiko, kol duomenų bazės rašytojas, vartotojai ir fizinė sistema bus pasirengę.

## Suvereniniai klientų valdymas (Sovereign customer management flows)

Ultimate Multisite v2.13.0, kai įjungtas suvereninis režimas, laiko klientų valdymą vykdo ant pagrindinio svetainės. Tenantas vis tiek gali veikti kaip izoliuotas WordPress instalacija, bet klientams skirtos veiksmos, kurios priklauso nuo tinklo paskirstymo (billing), nuskaitų ar bendro skaitmenų duomenų, turėtų atsiliekti į pagrindinę svetainę, o ne binti veiksmą tiesiogiai mobinimo laiku.

Pagrindinė svetainės tvarka taikoma:

- Užsakymams ir planų pakeitimams.
- Skaitmenini vaizdams ir klientų profilio veiksmoms.
- Skaitmeninių adresų atnaujinimams ir mokėjimo valdymui (payment-management) skrinoms.
- Apie rodymai bei mokėjimo istorijos vaizdai.
- Svetainės valdymo veiksmoms, tokioms kaip naujų svetaini pridėjimas ar svetainės ištrinkimas.
- Šablonų pakeitimams (Template switching).
- Domeno nurodymams ir pagrindinio domeno pakeitimams.

Kai vartotojas pradeda vieną iš šiais veiksmų suvereninio tenanto, Ultimate Multisite kuria atitinkamą pagrindinio svetainės URL adresą ir išlaiko šaltinį tenantą kaip grąžtesnį vietą, kai tai yra saugiai galima. Tai leidžia vartotojams atlikti valdytą veiksmą prieš tinklo duomenis, o tada grinti į tenanto kontekstą be duplikuojimo paskirties ar narys būsenos suvereninio duomenų bazėje.

Operatoriui praktiškas žagas yra: išlaikykite pagrindinėje svetaine (main site) pasirinktas paskyros, atsakymo, užsakymo, paskilos, šabloono ir domenų valdymas puslapis suvereniniais tinklaiems. Tenanto dashboardai gali susisiekti su jais, bet pagrindinė svetainė visada yra veiksmų šaltinis tikslui.
