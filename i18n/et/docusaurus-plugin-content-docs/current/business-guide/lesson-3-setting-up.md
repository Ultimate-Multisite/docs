---
title: 'Õppetund 3: Võrgu seadistamine'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Õppetund 3: Oma võrgustiku seadistamine

Aeg ehitada. Selles õppetunnis installid Ultimate Multisite ja seadistad FitSite võrgustiku aluse. Iga siinne otsus tehakse fitnessinišši silmas pidades.

## Kuhu me pooleli jäime {#where-we-left-off}

Valisime oma nišiks fitnessistuudiod ja valideerisime võimaluse. Nüüd muudame selle idee toimivaks platvormiks.

## Majutuse valimine {#choosing-your-hosting}

Sinu majutusvalik on nišiplatvormi puhul olulisem kui üksiku veebisaidi puhul. Sa ei majuta ühte saiti -- sa majutad võrgustikku, mis kasvab kümnete või sadade saitideni.

### Mida otsida {#what-to-look-for}

- **WordPress Multisite tugi**: Mitte kõik majutajad ei saa multisite’iga hästi hakkama
- **Wildcard SSL**: Alamdomeenipõhiste võrgustike jaoks hädavajalik
- **Skaleeritavad ressursid**: Sul on vaja kasvuruumi ilma migreerimata
- **Ultimate Multisite integratsioon**: Automaatne domeenide vastendamine ja SSL säästab märkimisväärselt operatiivset tööd

### Soovitatav lähenemine {#recommended-approach}

Vali majutaja loendist [Ühilduvad teenusepakkujad](/user-guide/host-integrations/closte). Neid on testitud Ultimate Multisite’iga ning need pakuvad integratsioone, mida vajad domeenide vastendamiseks ja SSL-automaatikaks.

FitSite’i jaoks kasutame alamdomeeni konfiguratsiooni. See tähendab, et klientide saidid kuvatakse alguses kujul `studioname.fitsite.com`, enne kui nad soovi korral oma domeeni külge seovad.

## WordPress Multisite’i installimine {#installing-wordpress-multisite}

Kui sul ei ole veel WordPress Multisite installatsiooni:

1. Installi WordPress oma majutusteenuse pakkuja juures
2. Järgi juhendit [Kuidas installida WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Vali küsimise korral **alamdomeeni** konfiguratsioon

:::tip Miks alamdomeenid?
Alamdomeenid annavad igale kliendisaidile oma eraldi aadressi (`studio.fitsite.com`), mitte tee (`fitsite.com/studio`). See on sinu klientide jaoks professionaalsem ja väldib püsiviidete konflikte. Üksikasjaliku võrdluse leiad jaotisest [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## Ultimate Multisite’i installimine {#installing-ultimate-multisite}

Järgi juhendit [Ultimate Multisite’i installimine](/user-guide/getting-started/installing-ultimate-multisite), et:

1. Laadida plugin üles ja aktiveerida see kogu võrgustikus
2. Käivitada [seadistusviisard](/user-guide/getting-started/multisite-setup-wizard)

Seadistusviisardi ajal pea silmas FitSite’i nišši:

- **Valuuta**: Määra valuutaks see, mida sinu fitnessistuudio kliendid kasutavad
- **Ettevõtte nimi**: "FitSite" (või sinu valitud brändinimi)
- **Ettevõtte logo**: Laadi üles oma brändi logo -- see kuvatakse arvetel ja e-kirjades

## Fitnessiniši jaoks seadistamine {#configuring-for-the-fitness-niche}

Kui Ultimate Multisite on installitud, tee järgmised nišipõhised konfiguratsioonivalikud:

### Üldsätted {#general-settings}

Liigu jaotisse **Ultimate Multisite > Settings** ja seadista:

- **Saidi nimi**: FitSite
- **Vaikeroll**: Administrator -- fitnessistuudio omanikel on vaja täielikku kontrolli oma saidi sisu üle
- **Registreerimine**: Luba kasutajate registreerimine, et stuudio omanikud saaksid ise liituda

### E-posti konfiguratsioon {#email-configuration}

Sinu süsteemi e-kirjad peaksid rääkima sinu niši keeles. Liigu jaotisse **Ultimate Multisite > Settings > Emails** ja kohanda:

- Asenda üldine "your new site" sõnastus fitnessispetsiifilise sõnumiga
- Tervituskirja teema näide: "Sinu fitnessistuudio veebisait on valmis"
- Tervituskirja sisu näide: Viita nende stuudiole, tundidele ja sellele, kuidas oma fitnessisaidiga alustada

Täiustame neid veel 8. õppetunnis (kliendi sisseelamine), kuid tooni paika seadmine juba nüüd tagab, et isegi varased testregistreerumised tunduvad nišipõhised.

### Domeeni konfiguratsioon {#domain-configuration}

Kui kasutad ühilduvat majutusteenuse pakkujat, seadista domeenide vastendamine nüüd:

1. Liigu jaotisse **Ultimate Multisite > Settings > Domain Mapping**
2. Järgi oma konkreetse majutaja integratsioonijuhendit
3. Testi, et uued alamsaidid saaksid SSL-i automaatselt

See tagab, et kui järgmises õppetunnis hakkame malle ja testsaite looma, toimib kõik algusest lõpuni.

## FitSite’i võrgustik seni {#the-fitsite-network-so-far}

Selle õppetunni lõpuks on sul olemas järgmine:

```
FitSite’i võrgustik
├── WordPress Multisite (alamdomeeni režiim)
├── Ultimate Multisite (installitud ja seadistatud)
├── Majutus wildcard SSL-iga
├── Domeenide vastendamine seadistatud
├── Nišipõhised e-posti mallid (esialgsed)
└── Valmis saidimallideks (järgmine õppetund)
```

## Mida me selles õppetunnis ehitasime {#what-we-built-this-lesson}

- **Toimiv WordPress Multisite** installatsioon alamdomeeni režiimis
- **Ultimate Multisite installitud** ja seadistatud FitSite’i brändinguga
- **Majutus ja SSL** seadistatud kasvava võrgustiku jaoks
- **Domeenide vastendamine** seadistatud sinu majutusteenuse pakkuja jaoks
- **Nišipõhine e-posti toon** paika pandud esimesest päevast alates

---

**Järgmine:** [Õppetund 4: Nišimallide loomine](lesson-4-templates) -- loome saidimallid, mida fitnessistuudio omanikud päriselt kasutada tahavad.
