---
title: Teema ehitamise võimalused
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Teemaehundlikud võimalused: Bloki teemide rakendamine ja aktiveerimine

Superdav AI Agent v1.12.0 sisaldab kaks võimasid võimalust, mis võimaldavad teil luua ja lahendada oma isiklikud blokteemad otse chati paigutuse kaudu.

## Üldkoppe

**scaffold-block-theme** ja **activate-theme** võimalused võimaldavad agentide:
- Luua täielikult valmis, tootmiks sobiva blokteemad teie spetsifikatsioonide põhjal
- Aktiveerida teemad oma veebileil automaatselt ilma manuaalset seadistustel
- Luua ühise visuaalse identiteedi juhendatud disainide otsuste abil

## Bloki teema rakendamine (Scaffold Block Theme)

**scaffold-block-theme** võimalus luuab uue WordPress blokteema, mis sisaldab täieliku teemastruktuuri, sealhulgas:

- `theme.json` konfiguratsioon disainitokenidega
- Bloki mallifailid levinud laadimisviiside jaoks
- Kasutatud blokkide stiilid ja variantid
- Teema metadand ja toetuse deklaratsioonid

### Kuidas kasutada

Chatist Superdav AI Agentiga saate teema loomise küsimuse esitada:

```
"Luua blokteema nimega 'Modern Agency' sinise ja valge värvides, sans-serif tipograafia ja professionaalset levinud laadimisviisega"
```

Agent teeb järgmised asjad:
1. Kogu disainipreemendide kogumine suunatud ülesannete kaudu
2. Täieliku teemastruktuuri loomine
3. Kõik vajalikud teema failide valmistamine
4. Teema aktiveerimiseks valmis valmistamine

### Ootatud väljund

Kui võimalus edastatakse õnnestult, näete järgmine:

- Teema rakendatud olevat kinnitus
- Teema nimi ja asukoht
- Rakendatud disainitokenide kokkuvõte (värvid, tipograafia, vahetused)
- Valmis aktiveerimiseks oleva staatuse näide

Näide väljund:
```
✓ Teema "Modern Agency" rakendatud õnnestult
  Asukoht: /wp-content/themes/modern-agency/
  Värvid: Põhikinnitine #0066CC, Sekundäärne #FFFFFF
  Tipograafia: Inter (sans-serif)
  Staatuse: Valmis aktiveerimiseks
```

## Teema aktiveerimine (Activate Theme)

**activate-theme** võimaldab siit oma veebilehte ühel uuest loodud või olemasoleva blokteema üle lülitada.

### Kuidas kasutada

Teema loodud pärast seda, kui teema on loodud, saate seda kohe aktiveerida:

```
"Aktiveeri Modern Agency teema"
```

Või aktiivige mis taht mis taema olemasoleva teema:

```
"Lülita Twentytwentyfour teema'le"
```

### Ootatud väljund

Kui aktiveerimine õnnestub:

- Aktiivse teema kinnitus
- Esimene teema nimi (viidendamiseks)
- Veebilehe URL, kus teema on nüüd aktiivne
- Teema spetsiifilised seadistamise märkused

Näide väljund:
```
✓ Teema aktiveeritud õnnestuslikult
  Aktiivne teema: Modern Agency
  Esimene teema: Twentytwentyfour
  Aktiivne siht: https://yoursite.com
  Märk: Kontrollige oma etuplaati, et kinnitada uut disain
```

## Lähtevahe: Loo ja aktiveeri

Tüüpiline töövoori koosneb mõlemast võimalust:

1. **Teema loomise küsimus:** "Loo blokteema minu SaaS-lehel jaoks"
2. **Agent loodi teema:** Loob failid ja disainitokenid
3. **Vaadikus ja hiankav:** Arutage disaini muutustest, kui vajalik
4. **Aktiveeri:** "Aktiveeri teema nüüd"
5. **Kontrolli:** Kanda oma veebilehele külastamiseks kinnitada uue disaini olemasolu

## Disainitokenid ja kohandamine

Loodud teemad kasutavad WordPressi disainitokenide (via `theme.json`) järgi:

- **Värvid**: Põhine, sekundäärne, aktsent, neutraalselt palet
- **Tipografia**: Fontide family, suurused, raskused, ühesõnnikud
- **Vahetusväälid**: Padding, margin, gap skale
- **Raamised**: Radius ja laade tokenid
- **Varjuid**: Elevatsioonitasud

Need tokenid on keskkondselt `theme.json`-is, mis muudab kogu disainisüsteemi seadistamist ühest failist lihtsaks.

## Piirangud ja märkused

- Temad onnistub `/wp-content/themes/`-kataloogi ja peab alustada WordPressi nimekirjaga.
- Aktiveerim nõuab sobiva lubundite WordPressi juures.
- Tema PHP koodiga on minimaalne; keeruliste funktsioonide jaoks kasutage pluginid.
- Block themad töötavad kõige paremini WordPressi versioonist 5.9 ja hiljem.

## Probleemide lahendamine

**Tema ei ilmune pärast alustamist**
- Kontrollige, kas tema direktorium on olemas ja sellel on õigused lubundid.
- Kontrollige, et `theme.json` on valide JSON.
- Veenduge, et tema nimi ei konflikti ole oleva teematega.

**Aktiveerimine ebaõnnestub**
- Lõpetage kontroll, et teil on administraatori lubundid.
- Kontrollige, kas WordPress saab lugeda tema direktoriumist.
- Vaadake WordPressi vigaotsinguid detailide saamiseks.

**Disaini tokenid ei kasutama**
- Veenduge, et `theme.json` sintaks on õige.
- Püristage kõik kaudutamise pluginid.
- Kontrollige, kas teie WordPress versioon toetab kasutatavaid tokenid.

## Järgmine sammud

Tema aktiveerimise pärast saate:
- Kasutada **Design System Aesthetics** oskust tipograafia, värvid ja vahelused hiankavaks.
- Muutada üksiklikud blocki stiile WordPressi block editori abil.
- Lisada oma CSS tema `style.css` failiesse.
- Luua oma blokke teemadega eritippide jaoks.
