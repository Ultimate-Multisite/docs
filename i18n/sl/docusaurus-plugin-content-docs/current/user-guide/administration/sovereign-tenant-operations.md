---
title: Operacije sovrenskega najemnika
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operacije z močnim najemodajalci (Sovereign Tenant Operations)

Ultimate Multisite 1.2.0 dodaja operativne alate za najemodajalce s suverenimi najemodajalci: subsite ki delujejo z lastno bazo podatkov, root sistemom datoteka in kontekstom usmerjanja (routinga), omogočeno pa so vidni za administratoro mreže.

Uporabite to stran pri upravljanju izoliranih strankarskih strani, prenosih na oddaljene strani ali migracijah, ki premikajo standardno subsite v suveren infrastrukturo.

## Kaj se spremeni za administratorje {#what-changes-for-administrators}

- **Stateless tenant autologin** — Administratorji mreže lahko obiščejo suvernega najemodajalca brez oslanjanja na dolgo trajno delujoče stanje sesije. SSO token je namenjen specifičnemu kontekstu, pripisuje se izvoru (origin), zaščiten proti ponavljanju in omejen na kratko časovno obdobje poteka.
- **Sovereign-aware routing** — Starostne izolirane mreže in suvereni najemodajalci se rešujejo preko iste poti usmerjanja strani, kar zmanjšuje razlike pri začetni konfiguraciji med starimi in novimi izoliranimi instalacijami.
- **Verified migration state** — Preverjanje migracije preverja dostavljajo uporabnike, dovoljenja za pisanje baze podatkov, stanje izpraznje kolejke (queue drain status) in odсуšitev starih tabel pred tem, ko se najemodajalec tretira kot popoln.
- **Safer teardown** — Odstranka suvernega najemodajalca odstranjuje zdaj čisto podatke o identiteti najemodajalca, tako da obdelani najemodajalci ne pustijo zaostalih dostopov do baze podatkov.

## Obiščanje suvernega najemodajalca {#visiting-a-sovereign-tenant}

1. Odprite **Network Admin > Ultimate Multisite > Sites**.
2. Izberite suvernega najemodajalca.
3. Uporabite možnost **Visit (SSO)**, če je na voljo, namesto da kopirate pisave ali ustvarjate privremene administratorske račune.

Potek obiskovanja ustvari kratkotrajni token za prijavu za to najemodajalco in ga zapisuje v audit trail najemodajalca (tenant audit trail). Če se gumb ne uspe, preverite, da domen najemodajalca rešuje na pričakovano instalacijo in da lahko najemodajalec doseže SSO endpoint strani mreže.

## Preverjanje operacij za oddaljene strani {#remote-site-operations-checklist}

Pred temeljitvijo spremembe suvernega ali oddaljenega najemodajalca, potrdite:

- Domen najemca se uporablja na hostu, ki lasti sistem daten najemca.
- Host baze dat enajemca se poda na konfiguriran binding hosta za to instalacijo.
- Komande za preverjanje migracije uspešno delujejo za najemca.
- Asinkroni vrstice za migracijo so prazni pred opravljanjem sprememb na DNS ali lastništvo.
- Administrator baze dat enajemca je bil pripravljen med migracijo in lahko vstopi preko SSO.

## Obrišanje suverenih najemcev (sovereign tenants) {#deleting-sovereign-tenants}

Obrišanje suverenega najemca je destruktivno. Pred tem potrdite stanje rezervne kopije in izvoza, nato ga obrišite z zaslone za upravljanje spota (site management screen). Potok dekompozicije 1.2.0 odstranjuje podatke baze dat enajemca kot del čiščenja, vendar morajo administratorji vedno preveriti, da so odidli tudi uporabniki baze dat in foldri na ravni hosta, če uporabljate zunanje panele za hosting.

:::warning
Ne obrišate suverenega najemca, medtem ko je preverjanje migracije še v teku ali med tem, ko so vrstice asinkroni pushov (async push jobs) v vrsti. Čakajte, da se preverjanje dokonča, da dekompozicija ne odstrani podatkov potrebne za odločene zadetke.
:::
