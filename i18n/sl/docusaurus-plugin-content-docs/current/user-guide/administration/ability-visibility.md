---
title: Možnost vidljivosti
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Vidljivost sposobnosti (Ability Visibility)

Superdav AI Agent v1.12.0 uvaja nadzorne funkcije **Vidljivost sposobnosti** (Ability Visibility), ki upravljajo, katera površine (surfaces) vsak sposobnost razkrije. To omogoča administratorjem, da uskladijo, kakšne sposobnosti agentov so na voljo preko REST API-ja, MCP serverjev, WooCommerce integracij in drugih spletnih grenzij.

## Kaj je Vidljivost sposobnosti?

Vidljivost sposobnosti je sistem dovoljenja, ki upravlja:

- **Kaj sposobnosti** so na voljo za agente
- **Kje so razložene** (REST API, MCP, WooCommerce itd.)
- **Kdo jih lahko uporabi** (preko seznamov dovoljenosti partnerjev)
- **Kako so klasificirane** (prepoznane vs. neprepoznane)

Vsaka sposobnost ima stopnjo vidljivosti, ki določa njeno dostopnost na različnih površinah.

## Stopnje vidljivosti

### Javna (Public)

**Javne sposobnosti** so na voljo vseh:

- REST API endpointih
- MCP serverjev
- WooCommerce integracij
- Chat grenzijah
- Vseh uporabniških rol (z ustreznimi dovoljenjami)

Primer: `scaffold-block-theme`, `activate-theme`, `send-email`

### Notranja (Internal)

**Notranje sposobnosti** so na voljo le v vašem WordPress instaliranju:

- Chat grenzijah
- Admin panelih
- Samo pri prijavljenih uporabnikih
- Ne so razložene preko REST API-ja ali zunanjih integracij

Primer: `manage-settings`, `view-analytics`, `export-data`

### Partnerje (Partner)

**Sposobnosti partnerjev** so na voljo le za seznamov dovoljenosti partnerjev:

- Zahtevajo eksplicitno vpisano v seznam dovoljenosti partnerja
- Na voljo preko REST API-ja z partnerji podatki za prijavo
- Na voljo preko MCP z partnerjo avtentično identifikacijo
- Ne so na voljo za običajne uporabnike

Primer: `bulk-import-users`, `modify-billing`, `access-analytics`

### Uporabljene (Disabled)

**Uporabljene sposobnosti** ne so na voljo kaj in kje:

- Ne so razložene preko no kam sistemskih grenzij
- Ne so na voljo v čatu
- Ne so na voljo v admin panelih
- Uporabno za zastareje ali eksperimentalne sposobnosti

## Upravljanje vidljivostjo sposobnosti

### Dostop do nastavitve vidljivosti sposobnosti

1. Pojdite v **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Kliknite na tab **Abilities** (Sposobnosti)
3. Tam boste videli seznam vseh nameščenih sposobnosti z njihovimi ravni vidljivosti.

### Ogledovanje podrobnosti sposobnosti

Kliknite na kakršno koli sposobnost, da vidite:

- **Name**: Identifikator sposobnosti
- **Description**: Kaj sposobnost naredi
- **Current visibility** (Trenutna vidljivost): Public (Omemljeno), Internal (Notranja), Partner (Partner) ali Disabled (Ustavljena)
- **Partner allow-list** (Spis dovoljenih partnerjev): Kateri partnerji lahko dostopajo (če je vidljivost Partner)
- **Last updated** (Poslednje spremembe): Kdaj je bila vidljivost zadnjič spremenjena
- **Status**: Prepoznavan ali Unclassified (Nezučen)

### Sprememba ravni vidljivosti

Da bi spremenili vidljivost sposobnosti:

1. Kliknite na sposobnost v seznamu
2. Izberite novo ravnjo vidljivosti iz spiska z ročnim izbiro (dropdown)
3. Če izberete "Partner", dodajte identifikator partnerja v spis dovoljenih partnerjev (allow-list)
4. Kliknite na **Save** (Shrani)

Primer:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Masne operacije

Da bi spremenili vidljivost za več sposobnosti:

1. Odmeka poliklopke ob sposobnostih
2. Izberite novo ravnjo vidljivosti iz spiska za masno dejanje (bulk action)
3. Kliknite na **Apply** (Pripravi)

## Spis dovoljenih partnerjev (Partner Allow-List)

**Spis dovoljenih partnerjev** upravlja, kateri zunjski partnerji lahko dostopajo do sposobnosti ravni Partner.

### Dodajanje partnerjev

1. Pojdite v **Superdav AI Agent** → **Settings** → **Partners**
2. Kliknite na **Add Partner** (Dodaj partner)
3. Vnesite identifikator partnerja (običajno API ključ ali ID organizacije)
4. Opcionalno dodajte ime in opis partnerja
5. Kliknite na **Save** (Shrani)

### Načrtovanje sposobnosti za partnerje

Po dodajanju partnerja:

1. Idi vložite na karto **Abilities** (Možnosti)
2. Poiščite moč z vidljivostjo za Partnerje
3. Kliknite, da jo uredite
4. V razdelku "Partner allow-list" (spis dovoljenih partnerjev) označite poliki za partnerje, ki bi morali imeti dostop
5. Kliknite na **Save** (Shrani)

### Ukinjanje dostopa partnerja

Da biste odstranili dostop partnerja:

1. Uredite moč
2. Odmeka polik za partnerja v seznamu dovoljenih
3. Kliknite na **Save** (Shrani)

Partner bo takoj izgubil dostop do te moči.

## Neklassificirane moči

Ko instalirate tretjo stranko moč, ki jo Superdav AI Agent ne prepozna, je označena kot **Unclassified** (Neklassificirana).

### Obvestilo za admina o neklassificiranih močih

Boč bo prikazalo obvestilo za admina:

```
⚠️ Odkrivene neklassificirane moči

Slednje moči so bile instalirane, vendar niso prepoznane:
- custom-import-tool
- external-api-wrapper

Te moči lahko predstavljajo varnostne ali kompatibilne tveganja.
Prosimo, pregledajte in klasifikirajte jih.

[Pregledati moči] [Odmekati]
```

### Pregled neklassificiranih močih

1. Kliknite na **Review Abilities** (Pregledati moči) v obvestilu
2. Za vsako neklassificirano moč boste videli:
   - Ime in opis moči
   - Vir (kateri plugin/dodatek jo je instaliral)
   - Predlagani stopnjenost vidljivosti
   - Ocenje varnosti

3. Izberite stopnjenost vidljivosti:
   - **Public** (Javno): Verjetno na moč; razložite jo vseh prostorov
   - **Internal** (Notranji): Omejite uporabo samo za notranjo uporabo
   - **Partner**: Omejite dostop na določene partnerje
   - **Disabled** (Ukinjeno): Ne uporabljajte te moči

4. Kliknite na **Classify** (Klasifikiraj), da shranite svojo odločitev

### Zakaj klasificirati neklassificirane moči?

Klasifikacija moči:

- **Uboljša varnost**: Izreczeno dovolite, kaj je razloženo
- **Preprečuje nesreče**: Neklassificirane moči so po podrazmerju ukinjene
- **Omogoča funkcije**: Ko sta klasificirana, moč postane na voljo
- **Dokumentira odločitve**: Vaša izbira je zapisana za revizijsko namene

## Vidljivost na različnih površinah

### REST API

**Javne sposobnosti** so na voljo preko REST endpointov:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Notranje in partner sposobnosti** ne so na voljo preko REST API.

### MCP Serverji

**Javne sposobnosti** so na voljo preko MCP:

```
MCP Server: Superdav AI Agent
Dostopne sposobnosti:
- scaffold-block-theme
- activate-theme
- send-email
```

**Notranje sposobnosti** ne so razložene preko MCP.

**Partner sposobnosti** so na voljo le z partnerskimi podatki.

### WooCommerce Integracija

**Javne sposobnosti**, povezane z WooCommerce, so na voljo:

- Upravljanje izdelkov
- Obrabljallna naročil
- Komunikacija z strankami

**Notranje sposobnosti** ne so razložene za WooCommerce.

### Chat Interfejs

**Vse sposobnosti** (javne, notranje, partnerske) so na voljo v čatu, odvisno od dovoljenj uporabnika:

- Administratorji vidijo vse sposobnosti
- Uporabniki z rednim dostopom vidijo le javne sposobnosti
- Partnerji vidijo javne + partnerske sposobnosti (če so na seznamu)

## Najboljše prakse varnosti

### Princip najmanjšega privilegija

- Dajte sposobnost najbolj omejene vidljivosti, ki jo še vedno omogoča uporabo.
- Uporabite partnersko vidljivost za občutljive operacije.
- Oprečite sposobnosti, ki jih ne uporabljate.

### Redni pregledi

- Pregledajte vidljivost sposobnosti vsak mesec
- Preverite nesklasificirane sposobnosti
- Odstranite dostop za neuporabljene partnerje

### Obiskovanje in nadzor (Logging and Monitoring)

- Nadzirajte, kakšne sposobnosti se uporabljajo najbolj
- Predvajajte vzorce dostopa partnerjev
- Opozorite na nenadno uporabo sposobnosti

### Tretji strani sposobnosti

- Pregledajte tretje strani sposobnosti pred vključitvijo
- Eksplicitno jih klasifikirajte
- Začnite z notranjo ali partnersko vidljivostjo
- Promovirajte na javno le po preverjanju

## Reševanje težav

**Možnost ni prikazana na seznamu**
- Preverite da je možnost instalirana in aktivna
- Preverite, da je plugin/addon vklopljen
- Obnovite stran

**Ne morem spremeniti vidljivosti možnosti**
- Preverite, da imate administrator prednosti
- Preverite, da ni možnost zaključena s strani nekega plugin-a
- Poskusite deaktivirati konfliktne plugin-e

**Partner ne more dostopati do možnosti**
- Preverite, da je partner na seznamu dovoljenih (allow-list)
- Preverite, da je vidljivost možnosti postavljena na Partner
- Potrdite, da so podatki partnerja pravilni
- Preverite API log za napake pri avtorizaciji

**Neusklasificirane možnosti se nadaljujejo pojavljati**
- Pregledajte in klasifikirajte jih v admin noticah
- Preverite, da je vaša klasifikacija shranjena
- Preverite, da je plugin, ki zagotavlja možnost, na zadnjem delu

## Migracija iz starega načina (Legacy Mode)

Če se osredotočate na nadgradjo starej versioni Superdav AI Agent:

- Vse obstoječe možnosti so avtomatsko klasificirane kot Public
- Pregledajte in prilagodite vidljivost, če je potrebno
- Ni potreben nobeno dejanje, razen če želite omejit dostop

Za več podrobnosti o prehodu na integracijo API za nativne Možnosti se ogledajte v **Migraciji v načinu tretjih strank (Third-Party Mode Migration)**.

## Naslednji koraki

Po konfiguraciji vidljivosti možnosti:

1. **Pregledajte svoje možnosti**: Auditujte vse instalirane možnosti
2. **Klasifikirajte neusklasificirane možnosti**: Odgovorite na admin notice
3. **Ustavite partnerje**: Dodajte partnerje, če uporabljate vidljivost Partner
4. **Spregledujte uporabo**: Predvideni, kakšne možnosti se uporabljajo najbolj
5. **Dokumentirajte odločanja**: Ohranite opombe o tem, zakaj ste izbrali vsako stopnjo vidljivosti
