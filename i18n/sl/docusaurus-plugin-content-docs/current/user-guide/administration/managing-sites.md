---
title: Upravljanje spletnih strani
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Upravljanje strani

Strani (ali subsitji) so srce vaše WaaS poslovne. Ultimate Multisite ima 3 vrste stran:

- **Lastniki strankov** — Strani pripadajo določenim strankam
- **Šabloni stran** — Preddefinirane strani, ki jih lahko lastniki izberejo kot začetno stanje
- **Glavna stran** — Vaša primarna omrežna stran

## Ogled strani

Navigirajte na **Ultimate Multisite → Sites**, da vidite vse subsitje v svojem omrežju. Vsaka stran je označena po vrsti in lahko filtrirate po Vseh strankah, Lastnikih strankov, Šabloni ali Očekujejo.

![Sites list page](/img/admin/sites-list.png)

## Dodavanje nove strani

Kliknite na gumb **Add Site** (Dodaj stran), da ustvarite novo stran. Boste morali navesti:

- **Site Title** (Naslov strani) — Ime nove strani
- **Site URL** (URL strani) — Domen/pot za stran
- **Site Type** (Vrsta strani) — Da je to stran lastnika, šablon ali običajna stran

Opcija **Copy Site** (Kopiraj stran) vam omogoča ustvariti novu stran na podlagi že obstoječega šablona. Ko je vključena, lahko izberete, katerega šablone uporabiti kot začetek. Preverite, da je vključena opcija **Copy Media on Duplication** (Kopiraj medije pri duplikaciji), da so vključeni datoteke medijev.

## Upravljanje obstoječih strani

Kliknite na **Manage** (Upravljaj) na katero koli strani, da odprete stran **Edit Site** (Uredi stran). Tukaj boste našli:

### Osnovne informacije

Ime strani, vrsta, ID strani in opis. Vidite tudi mapiran domen, povezane članstvo in račun lastnika strani.

### Opcje strani

Konfigurišajte možnosti in omejitve strani:

- **Visit limits** (Omejitve obiskov) — Maksimalna številka obiskov strani
- **User account limits** (Omejitve računa uporabnikov) — Omejitve za vsako vlogo uporabnika
- **Disk space** (Prostrenje na disku) — Količina prostora za stran
- **Custom domain** (Domen na prilagoženo) — Omogočite mapiranje domen za to stran
- **Plugin and theme visibility** (Vidljivost pluginov in tem) — Kontrolirajte, kakšne pluginove in teme so vidne, skrita ali predaktivirana

Po podrazmerju sledijo domovni strani omejitvam, ki so postavljeni na ravni članstva. Postavitev omej na ravni strani bo nadpisala nastavitve za članstvo.

### Asocijacije

Pod opcijami za stran boste našli informacije o:

- **Asociranih domenah** z stranjo
- **Članstvu**, pod katerim je stran
- **Stranki uporabnika**, povezane s stranjo

### Desna navigacijska palica (Right Sidebar)

Na desni strani lahko:

- **Vključite/vklapite stran** z gumbom za preklop
- **Preimenujete tip strani** ali ponovno dodelite lastništvo
- **Določite sliko/minijaturo strani** (ki se prikazuje na sprednji strani za templat strani)
- **Stranjo obrišete** trajnostno

:::warning
Obrišanje strani je neobratno. Stranja in vse njena vsebina bodo trajnostno odstranjene.
:::
