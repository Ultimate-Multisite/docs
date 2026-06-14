---
title: Operacije suverenog najmaka
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operacije suverenog najmesta (Sovereign Tenant Operations)

Ultimate Multisite verzija 1.2.0 dodaje operativne alate za suverene najmove: subsajte koji rade sa sopstvenom bazom podataka, root sistemom fajlova i kontekstom rutiranja, dok ostaju vidljivi mrežnom administratoru.

Koristite ovu stranicu kada upravljate izolovanom korisničkom lokacijom (customer site), prebacivanjem na udaljene lokacije ili migracijama koje premeštaju standardni subsajt u suvernu infrastrukturu.

## Šta se menja za administratora

- **Stateless autologin najmesta** — Mrežni administratori mogu posetiti suverenom najmestu bez oslanjanja na dugotrajno stanje zajedničke sesije. SSO token je svršen (purpose-scoped), vezan za izvor (origin-pinned), zaštićen od ponavljanja (replay-protected) i ograničen na kratak vremenski period isteka.
- **Suverenom svesna rutiranje** — Stare izolovane mreže i suverene najmove rešavaju se putem istog putanja rutera sajta, što smanjuje razlike pri pokretanju (bootstrap differences) između starih i novih izolovanih instalacija.
- **Provera stanja migracije** — Provera migracije proverava dodeljivanje korisnika, dozvole za pisanje baze podataka, status ispuštanja redova (queue drain status) i nepostojanje starih tabela pre nego što se najmeće tretira kao kompletno.
- **Sigurnije uklanjanje** — Uklanjanje suverenog najmesta sada čisto uklanja kredencijale najmesta tako da obrisani najmovi ne ostavljaju zastarele pristup bazi podataka.

## Posetnja suverenom najmestu (Visiting a sovereign tenant)

1. Otvorite **Network Admin > Ultimate Multisite > Sites**.
2. Izaberite suvereni najmeće.
3. Koristite opciju **Visit (SSO)** kada je dostupna umesto kopiranja lozinki ili kreiranja privremenih admin naloga.

Proces posete stvara kratkotrajni token za prijavu za to najmeće i beleži SSO događaj u audit trail-u najmesta. Ako dugme ne uspe, proverite da li domen najmesta rešava na očekivanu instalaciju i da li najmeće može da dođe do mrežnog SSO endpointa.

## Provera operacija za udaljene lokacije (Remote-site operations checklist)

Pre nego što promenite suvereno ili udaljeno najmeće, potvrdite:

Домен најмчи (tenant domain) указује на хост који поседује файлосистему најмча.
Хост базе података за најмчу (tenant database host) уसुграђен је са конфигурацираним повезањем хоста за ту инсталацију.
Команде верификације миграције пролазе за најмчу.
Кватори миграције асинхроно су осумљени (drained) пре него што се ураде промене DNS-а или својства власништва.
Корисник администратор најмче је конфигурисан током миграције и може да се улогира кроз SSO.

## Бдење суверенних најмча (Deleting sovereign tenants)

Бдење суверинног најмче је деструктивно. Прво потврдите статус бекапа и извођења података, а zatim га удалите са екрана управљања сајтом. Процес деактивације 1.2.0 уклања квиленсе за базу података најмче као део чишћења, али администратори треба да провере да ли су хост-базе података корисници и фолде потпуно потпуни када се користе спољне панели за хостинг.

:::warning
Не удаљајте суверенно најмче dok миграцио верификација још увек ради или dok асинхронски пуш задаци стоје у квестима (queued). Чекајте да се верификација потпуно заврши како деактивација не удаљава квиленсе које су потребне за родеће задатке.
:::
