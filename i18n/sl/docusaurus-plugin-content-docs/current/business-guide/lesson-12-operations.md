---
title: 'Lekcija 12: Vodenje podjetja'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lekcija 12: Vodenje posla

Platforma ni projekt, ki ga dokončate -- je posel, ki ga vodite. Ta lekcija obravnava vsakodnevno delovanje upravljanja FitSite: podporo, obračunavanje, vzdrževanje in skrb za zadovoljstvo strank.

## Kje smo ostali

FitSite je v živo in stranke se prijavljajo. Zdaj morate delovanje voditi trajnostno.

## Vsakodnevno delovanje

### Spremljanje

To preverjajte vsak dan (ali nastavite opozorila):

- **Uptime**: Ali je platforma dostopna? Uporabite storitev za spremljanje uptime.
- **Nove prijave**: Koliko novih strank se je prijavilo danes?
- **Neuspela plačila**: Ali obstajajo neuspela plačila, ki zahtevajo pozornost?
- **Zahtevki za podporo**: Ali obstajajo neodgovorjena vprašanja strank?

### Podpora strankam

Vaša nišna osredotočenost je tukaj prednost. Ker so vse vaše stranke fitnes studii, boste vedno znova videli ista vprašanja:

**Pogosta vprašanja, ki jih boste prejeli:**

- "Kako posodobim urnik svojih vadb?"
- "Ali lahko spremenim barve svojega spletnega mesta?"
- "Kako dodam novega trenerja na svoje spletno mesto?"
- "Moja domena ne deluje"
- "Kako prekličem/nadgradim svoj paket?"

Svojo bazo znanja (začeto v Lekciji 8) zgradite okoli teh ponavljajočih se vprašanj. Vsak podporni zahtevek, ki bi lahko bil članek v bazi znanja, je signal, da ta članek napišete.

### Ravni podpore

Ko rastete, strukturirajte podporo glede na paket:

| Paket | Raven podpore | Odzivni čas |
|------|--------------|---------------|
| Starter | Baza znanja + e-pošta | 48 ur |
| Growth | E-poštna podpora | 24 ur |
| Pro | Prednostna e-pošta + uvodni klic | 4 ure |

[Support Tickets addon](/addons/support-tickets) lahko pomaga upravljati zahtevke za podporo znotraj platforme.

## Obračunsko poslovanje

### Ponavljajoča se plačila

Ultimate Multisite samodejno upravlja ponavljajoče se obračunavanje prek vašega plačilnega prehoda. Vaša naloga je spremljati:

- **Neuspela plačila**: Hitro ukrepajte. Večina neuspehov so potekle kartice, ne namerne odpovedi.
- **Dunning**: Nastavite samodejno logiko ponovnih poskusov prek svojega plačilnega prehoda (Stripe to dobro obvlada)
- **Zahteve za preklic**: Razumite, zakaj stranke odhajajo. Vsak preklic je povratna informacija.

### Upravljanje članstev

Pojdite na **Ultimate Multisite > Memberships**, da:

- Prikažete vse aktivne naročnine
- Obravnavate zahteve za nadgradnjo in znižanje paketa
- Po potrebi obdelate vračila
- Upravljate poteke preizkusnih obdobij

Za celotno referenco glejte [Upravljanje članstev](/user-guide/administration/managing-memberships).

### Izdajanje računov

Zagotovite, da so računi pravilno ustvarjeni za vsako plačilo. Stranke lahko potrebujejo račune za poročanje o poslovnih stroških. Glejte [Upravljanje plačil in računov](/user-guide/administration/managing-payments-and-invoices).

## Vzdrževanje platforme

### Posodobitve WordPress in pluginov

Kot skrbnik omrežja ste odgovorni za:

- **Posodobitve jedra WordPress**: Pred uporabo v produkciji preizkusite na testnem spletnem mestu
- **Posodobitve pluginov**: Enako -- najprej preizkusite, nato uporabite v celotnem omrežju
- **Posodobitve tem**: Preverite, ali so predloge po posodobitvah tem še vedno videti pravilno
- **Posodobitve Ultimate Multisite**: Spremljajte dnevnik sprememb in pred posodobitvijo preizkusite

:::warning Nikoli ne posodabljajte v produkciji brez testiranja
Pokvarjena posodobitev vpliva na vsako spletno mesto stranke v vašem omrežju. Posodobitve vedno najprej preizkusite na testni kopiji svojega omrežja.
:::

### Varnost

- Vso programsko opremo ohranjajte posodobljeno
- Uporabljajte močna gesla in dvostopenjsko avtentikacijo za skrbniške račune
- Spremljajte sumljivo dejavnost
- Imejte načrt za varnostne incidente

### Zmogljivost

Ko vaše omrežje raste, spremljajte:

- **Časi nalaganja strani**: Ali so spletna mesta strank hitra?
- **Poraba strežniških virov**: CPU, pomnilnik, prostor na disku
- **Zmogljivost podatkovne baze**: Velika omrežja sčasoma potrebujejo optimizacijo podatkovne baze

Razmislite o uvedbi predpomnjenja (predpomnilnik strani, predpomnilnik objektov) in CDN, če tega še niste storili. [Integracija Cloudflare](/user-guide/host-integrations/cloudflare) poskrbi za velik del tega.

## Upravljanje življenjskega cikla strank

### Zmanjševanje odliva

Odliv je odstotek strank, ki vsak mesec prekličejo naročnino. Za naročniški posel je zmanjševanje odliva enako pomembno kot pridobivanje novih strank.

**Pogosti razlogi, zakaj stranke fitnes studiev odhajajo:**

- Niso uspele ugotoviti, kako uporabljati platformo → izboljšajte uvajanje
- Spletno mesto ni bilo videti dovolj dobro → izboljšajte predloge
- Niso videle vrednosti → izboljšajte funkcije ali komunikacijo
- Našle so cenejšo alternativo → okrepite svojo nišno vrednost
- Njihov posel se je zaprl → neizogibno, vendar to spremljajte ločeno

### Spodbujanje nadgradenj

Stranke na Starter, ki so uspešne, je treba spodbujati k nadgradnji:

- Ko dosežejo omejitve paketa (spletna mesta, prostor za shranjevanje), prikažite pozive za nadgradnjo
- Pošljite ciljno usmerjena e-poštna sporočila, ki poudarjajo funkcije paketa Growth, od katerih bi imele korist
- Predstavite, kaj so zgradile stranke Growth/Pro

### Kampanje za ponovno pridobitev

Ko stranka prekliče:

1. Vprašajte zakaj (izhodna anketa ali e-pošta)
2. Če je mogoče, naslovite njeno skrb
3. Ponudite popust za vrnitev (30–60 dni po preklicu)

## Tedenske in mesečne rutine

### Tedensko

- Preglejte nove prijave in preklice
- Odgovorite na vse odprte podporne zahtevke
- Preverite zmogljivost platforme in uptime
- Preglejte vsa neuspela plačila

### Mesečno

- Analizirajte ključne metrike (MRR, odliv, nove stranke, nadgradnje)
- Uporabite posodobitve WordPress in pluginov (po testu na testnem okolju)
- Preglejte in posodobite bazo znanja na podlagi vzorcev podpore
- Strankam pošljite novičnik ali posodobitev (nove funkcije, nasveti, novice iz fitnes industrije)

### Četrtletno

- Preglejte cene glede na konkurente in povratne informacije strank
- Ocenite zasnove predlog -- ali potrebujejo osvežitev?
- Ocenite zmogljivost gostovanja -- ali morate povečati obseg?
- Preglejte in izboljšajte uvajanje na podlagi podatkov o aktivaciji

## Kaj smo zgradili v tej lekciji

- **Dnevne rutine spremljanja** za razpoložljivost, prijave, plačila in podporo
- **Stopničasta struktura podpore**, usklajena z ravnmi paketov
- **Obračunske operacije**, vključno z izterjavo in obravnavo odpovedi
- **Postopki vzdrževanja** za posodobitve, varnost in zmogljivost
- **Strategije za zmanjšanje odliva**, specifične za fitnes nišo
- **Tedenske, mesečne in četrtletne operativne rutine**

---

**Naprej:** [Lekcija 13: Širitev](lesson-13-growth) -- rast FitSite iz majhne operacije v pravo podjetje.
