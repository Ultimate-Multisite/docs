---
title: Obilazak administratorskog panela
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Obilazak Admin panela

Ultimate Multisite nastoji biti što jednostavniji i samorazumljiviji, ali uz ovako moćan alat može pomoći vođeni obilazak. Prođimo kroz admin stranice kako biste se lakše snašli.

## Dashboard {#dashboard}

Ultimate Multisite **Dashboard** prikazuje osnovne izvještaje i analitiku, uključujući prihode, aktivnosti stranica, rast članstva, broj posjetilaca i geografske podatke.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Evo punog prikaza dashboarda:

![Ultimate Multisite Dashboard puna stranica](/img/admin/um-dashboard-full.png)

I donji dio dashboarda:

![Ultimate Multisite Dashboard donji dio](/img/admin/um-dashboard-bottom.png)

Evo također punog prikaza mrežnog dashboarda:

![Network Dashboard puna stranica](/img/admin/network-dashboard-full-page.png)

## Obrasci za checkout {#checkout-forms}

**Obrasci za checkout** daju vam fleksibilnost da kreirate prilagođene stranice za registraciju. Možete prilagoditi polja, umetnuti prilagođene klase i skripte, te ograničiti pristup na osnovu zemlje ili lokacije posjetioca.

![Lista obrazaca za checkout](/img/admin/checkout-forms-list.png)

## Proizvodi {#products}

Odjeljak **Proizvodi** je mjesto gdje kreirate različite planove, pakete i usluge za svoju mrežu. Definišite cijene, učestalosti naplate, te ograničenja i kvote na nivou proizvoda.

![Lista proizvoda](/img/admin/products-list.png)

## Članstva {#memberships}

Stranica **Članstva** prikazuje sve pretplate u vašoj mreži. Pregledajte i uredite detalje pretplate, uključujući planove, proizvode, iznose i učestalosti naplate, historiju plaćanja i vremenske oznake.

![Lista članstava](/img/admin/memberships-list.png)

## Plaćanja {#payments}

Stranica **Plaćanja** pruža brz pregled historije plaćanja kroz cijelu vašu mrežu, s detaljnim informacijama o transakcijama, uključujući konkretne proizvode i iznose.

![Lista plaćanja](/img/admin/payments-list.png)

## Kupci {#customers}

Stranica **Kupci** prikazuje sve članove registrovane u vašoj mreži s osnovnim informacijama o korisniku, uključujući ime, email adresu, posljednju prijavu i link "switch to" za prijavu na njihovu podstranicu.

![Lista kupaca](/img/admin/customers-list.png)

## Stranice {#sites}

Stranica **Stranice** navodi sve podstranice u vašoj mreži, uključujući predloške stranica i stranice u vlasništvu kupaca. Jednostavno upravljajte mapiranim domenama, ograničenjima i kvotama, pluginima i temama, te sličicama stranica.

![Lista stranica](/img/admin/sites-list.png)

## Domene {#domains}

Stranica **Domene** posvećena je prilagođenim domenama mapiranim na podstranice. Kao super admin, možete ručno dodati ili mapirati prilagođena imena domena i pregledati DNS zapise i logove.

![Lista domena](/img/admin/domains-list.png)

## Kodovi za popust {#discount-codes}

**Kodovi za popust** omogućavaju vam da kreirate kuponske kodove za ponudu popusta svojim krajnjim korisnicima. Navedite vrijednost popusta i ciljajte konkretne korisnike ili grupe.

![Lista kodova za popust](/img/admin/discount-codes-list.png)

## Objave {#broadcasts}

**Objave** su alat za objavljivanje najava ili slanje privatnih poruka korisnicima vaših podstranica. Ciljajte konkretne grupe korisnika na osnovu plana ili proizvoda na koji su pretplaćeni.

![Lista objava](/img/admin/broadcasts-list.png)

## Postavke {#settings}

Stranica **Postavke** je mjesto gdje konfigurišete Ultimate Multisite — postavke registracije, plaćanja, API i webhookove, mapiranje domena i druge integracije.

Postavke AI konektora navode trenutno podržane skupove OAuth provajdera: Anthropic Max, OpenAI ChatGPT/Codex i Google AI Pro. Svaka kartica provajdera omogućava super adminima da povežu račune, osvježe sačuvane račune, uklone račune po emailu i koriste ručnu OAuth rezervnu opciju kada sandbox okruženje blokira preusmjeravanje preglednika. Opcije postavljanja Cursor Pro uklonjene su iz admin panela.

ChatGPT/Codex računi podržavaju korištenje alata zasnovano na konektoru tamo gdje operacija dopušta alate, tako da admin radni tokovi koji zavise od operacija podržanih konektorom mogu koristiti Codex ponašanje alata nakon što se OpenAI račun poveže.

![Stranica postavki](/img/admin/settings-general.png)

Evo punog prikaza stranice općih postavki:

![Opće postavke puna stranica](/img/admin/settings-general-full.png)

I stranica postavki emailova:

![Postavke emailova puna stranica](/img/admin/settings-emails-full.png)

I stranica postavki plaćanja:

![Postavke plaćanja puna stranica](/img/admin/settings-payments-full.png)

I donji dio postavki plaćanja:

![Postavke plaćanja donji dio](/img/admin/settings-payments-bottom.png)

I stranica postavki stranica:

![Postavke stranica puna stranica](/img/admin/settings-sites-full.png)

## Događaji {#events}

Stranica **Događaji** vodi evidenciju svih događaja i logova u vašoj mreži. Prati aktivnosti poput promjena plana, registracija i drugih kretanja — korisno za nadzor vašeg multisitea.

![Lista događaja](/img/admin/events-list.png)

## Webhookovi {#webhooks}

**Webhookovi** vam omogućavaju da dostavite podatke drugoj aplikaciji. Korisno za slanje podataka iz Ultimate Multisite na platforme poput Zapiera.

![Lista webhookova](/img/admin/webhooks-list.png)
