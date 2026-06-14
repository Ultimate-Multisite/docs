---
title: Sovereign migracijos patikrinimas
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migracijos patikra

Ultimate Multisite: Multi-Tenancy 1.2.0 įdalo WP-CLI patikrinimo komandos yra naudojami su suverenu įdalo migracijomis. Naudokite juos, jei įdalo migracija, SSO vizitas arba izoliuotas instalacija ne veikia kaip tikėtina.

## Komandos veikimas

Atlikite patikrinimą iš tinklo WordPress instalacijos:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Naudokite įdalo ID, kurį migruojate. Pirmoji komanda patikrina, kad įdalas ne priklauso daugiau įstaigų duomenų. Antroji komanda patikrina, ar suverenios push užduotys gali apdoroti ir išleisti (drain).

## Dažnai surkinanties problemos

### Bazos nurodymai nepatinka hostui

Jei patikrinimas rodo nurodymų arba writer-user klaidas, patikrinkite konfigūruotą bazos hostį. `localhost`, `127.0.0.1` ir kontainerio paslaugos vardai yra skirtai MySQL nurodymai (grant hosts). Atnaujinkite įdalo host binding arba bazos nurodymus, tada patikrinkite vėl.

### Bedrock ar lokalios instalacijos negali sujungti

Bedrock ir lokalios socket instalacijos gali rodomai bazę kaip `localhost`, o laikinas (runtime) sujungiasi per normalizuotą adresą. Versija 1.2.0 normalizuojasi viename įrenginyje esančių host stringus, bet pritaikyti kustomos host override's vis dar gali susidaryti su bazos nurodymais.

### Asinkrinis push sąrašas negali išleisti (drain)

Jei `verify-sovereign-push` nepasirikuoja, patikrinkite Action Scheduler arba konfigūruotą asinkrinį dirbininką (async runner). Laukiame klaidos užduotis tik po to, kai patvirtinate, kad jos yra saugos atlikti ar išvalyti.

### Įdalo vartotojų skaičius netinkamas

Migracija turėtų nustatyti vartotojus suvereinam įdalui. Jei reikalingas instalacijos vartotojas yra trūksta, patikrinkite vartotojų nustatymo etapą prieš vėl bandant SSO.

### SSO vizitas atskeiama

Stateless tenant autologin reikalauja, kad skaičiai turėtų būti identiški: domainas tenanto, origin pinas, tokeno tikslas (purpose), nonce ir eksipiruoja laikas. Patikrinkite, ar tenanto URL yra teisingas ir kad prisijungimas vyks netolika nuo to, kai generuojama SSO vizita.

## Kada atsisiųsti

Atlikite patikrinimą po kiekvieno infrastruktūros pakeitimo. Nešaliu saugumo duomenų (source data) ar išlaikyklių (migration credentials), nepasijunkite į produktinę trafą ir neįrengiate, kol visi patikrinimų žingsniai bus sėkmingai atlikti.
