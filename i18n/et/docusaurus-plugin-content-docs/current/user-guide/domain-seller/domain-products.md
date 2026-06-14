---
title: Domeenid tooted ja hinnad
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Dome produktsioonid ja hinnad

Dome produktsioonid on see, kuidas sa kontrollitad hinnatust, TLD-dokumente (top-level domain), WHOIS privaatsust ja pakutaja valimist. Iga dome produktsioon on standardne Multisite Ultimate toode lisaks **Domain Settings** tabile.

## Dome produktsiooni loomine

1. Minenda **Network Admin › Ultimate Multisite › Products** sekkoni.
2. Klõpsake **Add New** (Uus lisamine).
3. Seeta toote tüüp **Domain**.
4. Konfigureerige **Domain Settings** tab (vaata all).
5. Salvesta.

Dome produktsioonid ilmub toote loendis purpurise **Domain** badgeiga ja neid saab suunata kasutades **Domain Products** tabit.

## Domain settings tab

### Pakutaja

Vali, milline registratsija registreerimise vastutab sellele tootelle. Oletuks on globaalne **Default provider**, mis on seostatud Domain Seller -seadistustega.

### Toetatud TLD-dokumentid (Supported TLDs)

Jätke tühja, kui luua **catch-all product** (kõik vastav toode), mis kasutab kõik need TLD-dokumentid, mida teine toode ei vasta.

Sisesta kommaga eraldatud loend TLD-dokumentidest (nt `.com, .net, .org`) luua **TLD-spesifiline toode**, mis kasutab ainult neid lõppega.

**Kuidas toote vastamine toimib:** Kui klient otsib dome'i, lisamoodus valib kõige spetsiifsemalt vastavat toote. Toode, mille TLD-loendis on `.com`, on prioriteetiks catch-all tootile. Kui ei vasta mitte mingil TLD-spesifilisel tootega, kasutatakse catch-allit. Kui toote pole olemas, dome otsing ei näita.

### Märkimise tüüp (Markup type)

Kolm režiimi kontrollivad, kuidas teie etalepriisi lasketakse wholesale hinnast:

| Režiim | Kuidas see toimib |
|---|---|
| **Protsent** | Lisab protsenti wholesale hinnale. 20% märkimine $10 wholesale dome'ile annab $12. |
| **Fiks hinnakord (Fixed markup)** | Lisab fikseeritud dollari väärtuse. $5 märkimine $10 dome'ile annab $15. |
| **Fiks hinnakord (Fixed price)** | Igagi ignoreerib wholesale hinnaga. Lõpulemiseks esitab alati teie sisestatud summa. |

### Sissejuhatav hindaostamine (Introductory pricing)

Käivitamine disklaussitud esimese aasta hinnaga. Asetage eraldi **Sissejuhatuspris** (aasta 1 pris) seoses regulaarse **Uudiseerimisprisega** (aasta 2 ja pärast seda). Klient näeb mõlemad hinnad ostukorvuse ajal, et teada, mida uusimisel ootuda.

### WHOIS privaatsus

Kontrollib, kas domeenide jaoks selle toote abil pakutakse WHOIS privaatsus kaitse.

| Asetus | Käitumine |
|---|---|
| **Välistatud** | WHOIS privaatsust ei pakuteta ega aktiveerita. |
| **Alati kaasatud** | WHOIS privaatsus aktiveeritakse automaatselt registreimise ajal ilma tasumaata. |
| **Klientide valik** | Ostukorvuse ajal ilmub tiks. Asetage **Privaatsuspris** ühe aasta eest, või jätke seda $0-l, et pakkuda seda tasuta. |

Namecheap kasutab WHOIS privaatsust WhoisGuardiga (alati tasuta). OpenSRS kasutab OpenSRS privaatsus teenust (võib olla wholesale'i korral maksul).

---

## TLD import ja synkronimine

Domeenide tooted näitavad reaaliaikseid wholesale hinnakujutusi, mida on põlvestatud ühendatud tarjoja poolt. Selleks tuleb TLD-id imporda.

- **Manuaalne synkronimine:** Asetused › Domeeni müüja › Synkronige TLD-id (juhtis järgi)
- **Automaatiline synkronimine:** Käivitub iga päev ajastatud croni töö abil kõikide konfiguratsiooniga tarjendajad poolt.

Synkronimise pärast siiruda domeeniprodukti Dome Settings tabile ja kasutada TLD valikut, et näha saadaval olevad TLD-id ning nende praegused wholesale hinnad.

---

## Automaatiline uuendamine

Domeenide uudiseerimised on seotud kliendi li membershipi olekust:

- Kui membership uusub ja domeen on seotud, käivitakse domeeni uudiseerimine automaatselt
- Uudiseerimise proovivõtted kasutavad kliendi aktiivset maksukontrolli
- Ebaõnnestunud uudiseerimised proovivõetakse automaatselt ütlema (exponential backoff)
- E-posti teavitusi saadakse õnnestatud uudiseerimisega, ebaõnnestumist ja tuleva lõppamisel

| Sündmus | Template ID |
|---|---|
| Domeen registreeritud | `domain_registered` |
| Domeeni uuendatud | `domain_renewed` |
| Uuendumine ebaõnnestus | `domain_renewal_failed` |
| Domeen on lähedal lükkumise ajast | `domain_expiring_soon` |

---

## Administratsioon: Manuaalne domeeni registreimine

Domeeni tegelikuna klienta nimel registreima, ilma et klient läbi ostukogud (checkout) minna:

1. Minenda **Network Admin › Ultimate Multisite › Register Domain**
2. Valige klient ja sisestage domeeni nimi
3. Täytke registriitja kontaktandmeid (nimi, aadress, telefon)
4. Klõpsake **Register**

Domeeni registreerimikord luuakse ja seotakse klienta kontole.
