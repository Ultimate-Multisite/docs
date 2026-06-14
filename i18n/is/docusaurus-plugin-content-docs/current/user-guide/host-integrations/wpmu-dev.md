---
title: WPMU DEV samstarf
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Samning við WPMU DEV

## Áhersla
WPMU DEV er nánast fullskalinn WordPress plattaforma sem býður upp á staðfesting (hosting), plugin-a og þjónustur fyrir WordPress vísítöf. Þessi samning gerir mögulega sjálfsviðandi samningu á domænum og stjórnun SSL-tækja milli Ultimate Multisite og WPMU DEV staðfestingar.

## Stöðvar
- Sjálfsviðandi samningur á domænum
- Stjórnun SSL-tækja
- Aðgerðir til viðbótum í staðfestingu SSL-tækja

## Kreftingar
Samningurinn finnur sjálfan sem þú erst staðsettur á WPMU DEV og notar innbyggð API. Þarf ekki nauðsynlegt að hafa nánast nokkrar viðbótara uppsetningu ef þú erst staðsettur á WPMU DEV.

Samningurinn skamar eftir tilfinningu `WPMUDEV_HOSTING_SITE_ID`, sem er sjálfsviðandi sett í gang þegar þú erst staðsettur á WPMU DEV.

## Uppsetningurstefnur

### 1. Staða WPMU DEV staðfestingar
Ef þú erst staðsettur á WPMU DEV, þurfa nauðsynlegar konstantir að vera settar upp. Staðfesti að:

1. Konstantinn `WPMUDEV_HOSTING_SITE_ID` sé sett í umhverfi þínu
2. Þú hefur aktivt medlemmi WPMU DEV með API aðgangi

### 2. Skynna samningann
1. Í WordPress admin-stjórnunni, gæf til Ultimate Multisite > Settings
2. Navigera yfir í flugvinnu "Domain Mapping" (Samningur á domænum)
3. Skoli niður í "Host Integrations" (Staðfestingar staðfestingars)
4. Skynna samningann WPMU DEV
5. Klikka á "Save Changes" (Sjálfsviðandi breytingar)

## Hvernig það virkar

### Samningur á domænum
Þegar domæni er sett upp í Ultimate Multisite:

1. Notar samningurinn WPMU DEV API til að bæta domanum við staðfestingarsnútra þín
2. Það bætir sjálf www-version dománnar í gang
3. WPMU DEV skiptir með domænum og gerir SSL-tækjum upp

### Stjórnun SSL-tækja

Inngangur er sett upp til að auka fjölda prófanir fyrir SSL-certifíkat fyrir WPMU DEV hostingu, þar sem það getur taka nokkinn tíma fyrir að SSL-certifíkat sé útboðin og installað. Í grunnstöfunni reynir það upp til 10 prófanir fyrir SSL-certifíkat, samanborið við standard 5 prófanir.

## Mikilvægar athugasemdir

### Fjarlagning domæna (Domain Removal)

Notkun WPMU DEV API hefur ekki nú ábyrgð til að fjarlaga domæna. Þegar doménmyndun er fjarlagdur í Ultimate Multisite, verður domænið framkvæmt í reikningnum þínum hjá WPMU DEV hostingu. Þú þarft að fjarlaga það mannvætis frá WPMU DEV hosting dashboard-inum ef það er nauðsynlegt.

### API Aðferðing (API Authentication)

Inngangurinn notar WPMU DEV API key sem er geymt í WordPress databaseins sem `wpmudev_apikey` option. Þetta er sjálft sett upp þegar þú tengist sínum vísitalinn við WPMU DEV.

## Feilanáttsetning (Troubleshooting)

### Vafinn á API tengingu
- Staðfesti að síður þín sé rétt tengd WPMU DEV
- Skennu að `wpmudev_apikey` optionin sé sett í WordPress databaseins þínum
- Staðfesti að WPMU DEV membership þitt sé aktivt

### Vafinn á SSL-certifíkata
- WPMU DEV getur taka nokkinn tíma fyrir útboði SSL-certifíkata (almennt 5-15 mínútur)
- Inngangurinn er sett upp til að prófa upp til 10 sinnum fyrir SSL-certifíkat
- Ef SSL-certifíkata eru enn ekki útboðin eftir fleiri prófanir, tengst WPMU DEV stuðningi

### Domén er ekki viðbúinn
- Skennu Ultimate Multisite logs fyrir nánari villum
- Staðfesti að domænið sé ekki þegar viðbúið í WPMU DEV
- Staðfesti að hostingplaninn þinn hjá WPMU DEV stuðlar til fjölda domána sem þú bætir við
