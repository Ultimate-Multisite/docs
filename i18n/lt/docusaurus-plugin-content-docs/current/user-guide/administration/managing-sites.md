---
title: Sidorinti svetainis
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Domenų valdymas {#managing-sites}

Domenai (arba subdomeniai) yra jūsų WaaS bizneso pagrindas. Ultimate Multisite turi 3 domenų tipus:

- **Klientui prieldinami** — Domenai, skirti specifikiniais klientais
- **Domenų šablonavimo modeliai (Site Templates)** — Predefined domenos, kurias klientai gali pasirinkti kaip prad진į punktą
- **Pagrindinis domenas (Main Site)** — Jūsų pagrindinis tinklo domenas

## Domenų peržiūra {#viewing-sites}

Navigruokite į **Ultimate Multisite → Sites**, kad pamatytumėte visus subdomenas jūsų tinklu. Kiekvienas domenasis yra pažymėtas tipu ir galite filtruoti pagal Visus domenus, Klientui prieldinami, Šablonavimo modeliai ar Pending (Nenaudotas).

![Sites list page](/img/admin/sites-list.png)

## Naujo domeno pridėjimas {#adding-a-new-site}

Spauskite mygtuką **Add Site** (Pridėti domeną), kad sukurtumėte naują domeną. Jums reikės pateikti:

- **Domenos pavadinimą (Site Title)** — Naujo domeno pavadinimą
- **Domenos adresą (Site URL)** — Domeną/kelio žymę domenei
- **Domenos tipą (Site Type)** — Ar tai klientų domenasis, šablonavimo modelis ar įprastas domenasis

**Copy Site** (Kopijuoti domeną) opsinija leidžia sukurti naują domeną pagal esamą domenos šablonavimo modelį. Jei ji bus įjungta, galite pasirinkti, kurį modelį naudoti kaip prad진į punktą. Įsitikinkite, kad **Copy Media on Duplication** (Kopijuoti mediją duplikuojant) yra įjungta, kad įtrauktų medijos failus.

## Esamų domeno valdymas {#managing-an-existing-site}

Spauskite **Manage** (Valdyti) klaidą bet kuriame domeną, kad atidarytumėte puslapį **Edit Site** (Redaguoti domeną). Teisime jūsų:

### Pagrindinė informacija {#basic-information}

Domenos pavadinimas, tipas, domenos ID ir aprašymas. Jums pateiksimi bus ir mapuotas domenas, susijusi narys ir klientų paskyra, kuri turi šį domeną.

### Domenos opsijos {#site-options}

Konfigūruokite domeno galimybes ir ribas:

- **Domenos vizito ribos (Visit limits)** — Maksimalus domeno vizitų skaičius
- **Vartotojų paskyros ribos (User account limits)** — Ribos per vartotojo vaidmenį
- **Disko erlis (Disk space)** — Saugojimo kvota domenei
- **Pridendinis domenas (Custom domain)** — Įjunkite domenų mapavimą šiam domenui
- **Plug-in ir temo matomybė (Plugin and theme visibility)** — Kontroliuokite, kurie plug-inai ir temai yra matomi, slapti ar pre-aktyvuoti

Padarba, svetai laikosi nustatytomis apdailos lygiais. Nustatant apdalius lygis svetui, jūs perpasijate apdailos nustatymus.

### Susijimai {#associations}

Po svetainų nustatyjimu jūs pamatys informaciją apie:

- **Mapeotas domenai**, susiję su svetainiu
- **Apdailos lygis**, kuriam svetainis priklauso
- **Klientų paskyra**, susijusi su svetainiu

### Dešinė pusė (Right Sidebar) {#right-sidebar}

Dešinėje pusėje galite:

- **Įjungti/išjungti svetainį** naudojant mygtuką
- **Pakeisti svetino tipą** arba atsidaryti eigumą
- **Nustatyti svetinos vaizdą/miniaturę** (paskutini pusėje, jei turite svetainų šablonus)
- **Permanenčiai ištrinti svetainį**

:::warning
Svetino ištrinkimas yra neatvirkštas. Svetas ir visame jo turiniu bus permanentiškai pašalinti.
:::
