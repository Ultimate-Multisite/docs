---
title: 'Õppetund 12: Ettevõtte juhtimine'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Õppetund 12: Ettevõtte juhtimine

Platvorm ei ole projekt, mille sa lõpetad -- see on ettevõte, mida sa juhid. See õppetund käsitleb FitSite’i haldamise igapäevaseid toiminguid: tuge, arveldamist, hooldust ja klientide rahulolu hoidmist.

## Kuhu pooleli jäime

FitSite on avalik ja kliendid registreeruvad. Nüüd pead tegevust jätkusuutlikult juhtima.

## Igapäevased toimingud

### Jälgimine

Kontrolli neid iga päev (või seadista teavitused):

- **Tööaeg**: Kas platvorm on kättesaadav? Kasuta tööaja jälgimise teenust.
- **Uued registreerumised**: Kui palju uusi kliente täna registreerus?
- **Ebaõnnestunud maksed**: Kas on makse ebaõnnestumisi, mis vajavad tähelepanu?
- **Tugipäringud**: Kas on vastamata kliendiküsimusi?

### Klienditugi

Sinu nišifookus on siin eelis. Kuna kõik sinu kliendid on fitnessistuudiod, näed samu küsimusi korduvalt:

**Levinud küsimused, mida sa saad:**

- "Kuidas ma oma tunniplaani uuendan?"
- "Kas ma saan oma saidi värve muuta?"
- "Kuidas ma lisan oma saidile uue treeneri?"
- "Minu domeen ei tööta"
- "Kuidas ma oma paketi tühistan/uuendan?"

Ehita oma teadmistebaas (alustatud õppetunnis 8) nende korduvate küsimuste ümber. Iga tugipilet, millest oleks saanud teadmistebaasi artikkel, on signaal see artikkel kirjutada.

### Toe tasemed

Kasvades struktureeri tugi paketi järgi:

| Pakett | Toe tase | Vastamisaeg |
|------|--------------|---------------|
| Starter | Teadmistebaas + e-post | 48 tundi |
| Growth | E-posti tugi | 24 tundi |
| Pro | Prioriteetne e-post + sisseelamiskõne | 4 tundi |

[Support Tickets lisamoodul](/addons/support-tickets) aitab hallata tugipäringuid platvormi sees.

## Arveldamise toimingud

### Korduvad maksed

Ultimate Multisite haldab korduvat arveldamist automaatselt sinu makselüüsi kaudu. Sinu ülesanne on jälgida:

- **Ebaõnnestunud maksed**: Võta kiiresti ühendust. Enamik ebaõnnestumisi on aegunud kaardid, mitte tahtlikud tühistamised.
- **Võlgnevuste käsitlemine**: Seadista oma makselüüsi kaudu automaatne uuesti proovimise loogika (Stripe saab sellega hästi hakkama)
- **Tühistamistaotlused**: Mõista, miks kliendid lahkuvad. Iga tühistamine on tagasiside.

### Liikmesuste haldamine

Liigu jaotisse **Ultimate Multisite > Liikmesused**, et:

- Vaadata kõiki aktiivseid tellimusi
- Käsitleda uuendamise ja madalamale paketile liikumise taotlusi
- Töötleda tagasimakseid, kui see on vajalik
- Hallata prooviperioodide aegumisi

Täieliku viite leiad jaotisest [Liikmesuste haldamine](/user-guide/administration/managing-memberships).

### Arved

Veendu, et arved luuakse iga makse jaoks õigesti. Klientidel võib olla arveid vaja ettevõtluskulude aruandluseks. Vaata [Maksete ja arvete haldamine](/user-guide/administration/managing-payments-and-invoices).

## Platvormi hooldus

### WordPressi ja pluginate uuendused

Võrgu administraatorina vastutad sa järgmise eest:

- **WordPressi tuuma uuendused**: Testi enne tootmiskeskkonnas rakendamist staging-saidil
- **Pluginate uuendused**: Sama -- testi esmalt, seejärel rakenda kogu võrgus
- **Teema uuendused**: Kontrolli, et mallid näeksid pärast teema uuendusi ikka õiged välja
- **Ultimate Multisite uuendused**: Jälgi muudatuste logi ja testi enne uuendamist

:::warning Ära kunagi uuenda tootmiskeskkonnas ilma testimata
Katkine uuendus mõjutab iga kliendisaiti sinu võrgus. Testi uuendusi alati esmalt oma võrgu staging-koopial.
:::

### Turvalisus

- Hoia kogu tarkvara ajakohasena
- Kasuta administraatorikontode jaoks tugevaid paroole ja kahefaktorilist autentimist
- Jälgi kahtlast tegevust
- Oma turvaintsidentide jaoks plaan

### Jõudlus

Kui sinu võrk kasvab, jälgi:

- **Lehtede laadimisajad**: Kas kliendisaitid on kiired?
- **Serveri ressursikasutus**: CPU, mälu, kettaruum
- **Andmebaasi jõudlus**: Suured võrgud vajavad aja jooksul andmebaasi optimeerimist

Kaalu vahemällu salvestamise (lehevahemälu, objektivahemälu) ja CDN-i kasutuselevõttu, kui sa ei ole seda juba teinud. [Cloudflare integratsioon](/user-guide/host-integrations/cloudflare) haldab suurt osa sellest.

## Kliendi elutsükli haldamine

### Lahkumismäära vähendamine

Lahkumismäär on klientide protsent, kes iga kuu tühistavad. Tellimusäri puhul on lahkumismäära vähendamine sama oluline kui uute klientide hankimine.

**Levinud põhjused, miks fitnessistuudio kliendid lahkuvad:**

- Nad ei saanud aru, kuidas platvormi kasutada → paranda sisseelamist
- Sait ei näinud piisavalt hea välja → paranda malle
- Nad ei näinud väärtust → paranda funktsioone või suhtlust
- Nad leidsid odavama alternatiivi → tugevda oma nišiväärtust
- Nende ettevõte suleti → vältimatu, kuid jälgi seda eraldi

### Uuendamise soodustamine

Starteri kliendid, kellel läheb hästi, tuleks julgustada paketti uuendama:

- Kui nad jõuavad paketi piiranguteni (saidid, salvestusruum), näita uuendamise viipasid
- Saada sihitud e-kirju, mis tõstavad esile Growth paketi funktsioone, millest neil oleks kasu
- Näita, mida Growth/Pro kliendid on loonud

### Tagasivõitmise kampaaniad

Kui klient tühistab:

1. Küsi miks (lahkumisküsitlus või e-kiri)
2. Käsitle nende muret, kui võimalik
3. Paku tagasitulekuks allahindlust (30–60 päeva pärast tühistamist)

## Iganädalased ja igakuised rutiinid

### Iganädalaselt

- Vaata üle uued registreerumised ja tühistamised
- Vasta kõigile avatud tugipiletitele
- Kontrolli platvormi jõudlust ja tööaega
- Vaata üle kõik ebaõnnestunud maksed

### Igakuiselt

- Analüüsi peamisi mõõdikuid (MRR, lahkumismäär, uued kliendid, paketiuuendused)
- Rakenda WordPressi ja pluginate uuendused (pärast staging-testi)
- Vaata üle ja uuenda teadmistebaasi tugimustrite põhjal
- Saada klientidele uudiskiri või uuendus (uued funktsioonid, nõuanded, fitnessivaldkonna uudised)

### Kvartaalselt

- Vaata hinnastust üle konkurentide ja klienditagasiside põhjal
- Hinda mallide kujundusi -- kas need vajavad värskendamist?
- Hinda majutuse võimsust -- kas pead skaleerima?
- Vaata üle ja paranda sisseelamist aktiveerimisandmete põhjal

## Mida me selles õppetunnis ehitasime

- **Igapäevased seirerutiinid** tööaja, registreerumiste, maksete ja toe jaoks
- **Mitmetasemeline tugistruktuur**, mis vastab pakettide tasemetele
- **Arveldustoimingud**, sealhulgas maksemeeldetuletuste ja tühistamiste käsitlemine
- **Hooldusprotseduurid** uuenduste, turvalisuse ja jõudluse jaoks
- **Lahkumismäära vähendamise strateegiad**, mis on omased fitness-nišile
- **Iganädalased, igakuised ja kvartaalsed operatiivsed rutiinid**

---

**Järgmine:** [Õppetund 13: Suurendamine](lesson-13-growth) -- FitSite’i kasvatamine väikesest ettevõtmisest tõeliseks äriks.
