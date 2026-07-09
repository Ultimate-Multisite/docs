---
title: '6. õppetund: Registreerumiskogemus'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Õppetund 6: Registreerumiskogemus

Maksmise voog on koht, kus huvist saab tulu. Segane või üldine registreerumisprotsess kaotab kliente. Nišipõhine voog, mis räägib nende keeles ja tundub pingutuseta, konverteerib nad klientideks.

## Kuhu me pooleli jäime

FitSite’il on mallid ja plaanid seadistatud. Nüüd ehitame registreerumis- ja maksmiskogemuse, mis muudab fitnessistuudiote omanikud maksvateks klientideks.

## Registreerumisvoo mõistmine

Ultimate Multisite’i maksmise vormid on täielikult kohandatavad mitmesammulised vormid. FitSite’i jaoks tahame voogu, mis:

1. Tundub, nagu see oleks loodud fitnessiettevõtetele
2. Kogub ainult vajaliku
3. Viib kliendi toimiva saidini nii kiiresti kui võimalik

Täieliku tehnilise viite leiad jaotisest [Registreerumisvoog](/user-guide/configuration/the-registration-flow).

## FitSite’i maksmise kujundamine

Liigu jaotisse **Ultimate Multisite > Maksmise vormid** ja loo uus vorm.

### Samm 1: Plaani valik

Esimene asi, mida fitnessistuudio omanik näeb, peaksid olema plaanid, esitatud neile arusaadavas keeles.

- Lisa väli **Hinnatabel**
- Seadista see näitama kõiki kolme FitSite’i plaani
- Plaanide kirjeldused, mille kirjutasid õppetunnis 5, kuvatakse siin -- veendu, et need räägiksid fitnessiettevõtte vajadustest, mitte tehnilistest funktsioonidest

:::tip Nišikeel on oluline
"1 GB salvestusruumi" ei tähenda jõusaali omanikule midagi. "Kõik, mida vajad professionaalse stuudio veebisaidi jaoks" tähendab kõike. Kirjuta plaanide kirjeldused oma kliendi keeles.
:::

### Samm 2: Malli valik

Pärast plaani valimist valib klient oma algusmalli.

- Lisa väli **Malli valik**
- Saadaolevad mallid filtreeritakse nende valitud plaani järgi (seadistatud õppetunnis 5)
- Igal mallil peaks olema eelvaatepilt, mis näitab fitnessipõhist disaini

### Samm 3: Accounti loomine

Hoia see minimaalne. Kogu ainult:

- E-posti aadress
- Parool
- Stuudio/ettevõtte nimi (sellest saab nende saidi nimi)

Ära küsi registreerumisel teavet, mida sul vaja ei ole. Iga lisaväli vähendab konversioone.

### Samm 4: Saidi seadistamine

- **Saidi pealkiri**: eeltäida stuudio nimega, mis sisestati sammus 3
- **Saidi URL**: genereeri automaatselt stuudio nimest (nt `ironworks.fitsite.com`)

### Samm 5: Makse

- Lisa väli **Makse**
- Seadista oma makselüüs ([Stripe](/user-guide/payment-gateways/stripe) on tellimuste arveldamiseks soovitatav)
- Kui lõid õppetunnis 5 lisapakkumisi, lisa enne maksesammu väli **Lisapakkumine**

### Samm 6: Kinnitus

- Kohanda kinnitussõnumit fitnessipõhise keelega
- Näide: "Sinu fitnessistuudio veebisaiti luuakse. Sind suunatakse mõne sekundi pärast sinu uuele saidile."

## Perioodi valiku lüliti lisamine

Kui seadistasid oma plaanides hinnavariatsioonid (kuu- vs aastapõhine), lisa maksmise vormile väli **Perioodi valik**, et kliendid saaksid arveldusperioodide vahel lülitada. Juhised leiad jaotisest [Maksmise vormid](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Makse seadistamine

Kui sa ei ole veel makselüüsi seadistanud:

1. Liigu jaotisse **Ultimate Multisite > Seaded > Makselüüsid**
2. Järgi [Stripe’i seadistusjuhendit](/user-guide/payment-gateways/stripe) või oma eelistatud makselüüsi juhendit
3. Testi täielikku maksmise voogu testmaksega

Üksikasjad selle kohta, kuidas maksed sinu accountile liiguvad, leiad jaotisest [Tasude saamine](/user-guide/payment-gateways/getting-paid).

## Voo testimine

Enne edasi liikumist tee täielik testregistreerumine:

1. Ava maksmise vorm inkognito/privaatses brauseriaknas
2. Vali plaan
3. Vali mall
4. Loo account
5. Lõpeta makse (kasuta testrežiimi)
6. Kontrolli, et sait oleks loodud õige malliga

Kontrolli, et:

- [ ] Plaanide kirjeldused on selged ja nišipõhised
- [ ] Mallide eelvaated näitavad fitnessile sobivaid kujundusi
- [ ] Saidi URL genereeritakse stuudio nimest õigesti
- [ ] Makse töödeldakse edukalt
- [ ] Klient jõuab toimivale saidile valitud malliga
- [ ] Kinnituse e-kirjad kasutavad fitnessipõhist keelt

## FitSite’i võrgustik seni

```
FitSite’i võrgustik
├── WordPress Multisite (alamdomeeni režiim)
├── Ultimate Multisite (seadistatud)
├── Majutus wildcard SSL-i + domeeni kaardistamisega
├── Saidi mallid (Studio Essential, Gym Pro, Fitness Chain)
├── Tooted (Starter, Growth, Pro + lisapakkumised)
├── Maksmise voog
│   ├── Plaani valik nišipõhiste kirjeldustega
│   ├── Malli valik fitnessi eelvaadetega
│   ├── Minimaalne accounti loomine
│   ├── Makse Stripe’i kaudu
│   └── Fitnessipõhine kinnitus
└── Valmis brändimiseks (järgmine õppetund)
```

## Mida me selles õppetunnis ehitasime

- **Mitmesammuline maksmise vorm**, mis on kohandatud fitnessistuudiote omanikele
- **Nišipõhine keel** kogu registreerumisvoos
- **Minimaalne hõõrdumine** -- ainult hädavajalikud väljad, kiire tee toimiva saidini
- **Makseintegratsioon** koos testkinnitusega
- **Testitud terviklik voog** plaani valikust toimiva saidini

---

**Järgmine:** [Õppetund 7: Muuda see enda omaks](lesson-7-branding) -- white-label’ime platvormi ja kehtestame FitSite’i brändina.
