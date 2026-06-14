---
title: Vietas būvētāja kontaktformuli
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformulāri vietnes izveidojēji

Superdav AI Agent v1.10.0 dod iespēju veidot kontaktformulārus tieši no čata interfeisa, izmantojot Site Builder agenti. Tas ļauj jums pievienot pilnīgi funkcionalus kontaktformulārus jebkuraj lapai bez atdalīšanās no čata.

## Īssvaras apkopojums

Site Builder kontaktformulāra iespēja (`create_contact_form`) automātiski atrod savu instalēto formulārā pluginu un veido kontaktformulāru izmantojot šī pluginu vietējās iespējas. Atbalstītie formulāra pluginu ir:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistents automātiski izvēlas labāko pieejamo formulāra pluginu savā vietnē un generē kontaktformulāru, kas piemērots šim pluginam.

## Kontaktformulāra veidošana

Lai veidotu kontaktformulāru ar Site Builder:

1. Atveriet **Gratis AI Agent** čata panelu WordPress admina apakšlapā.
2. Pārliecinieties, ka esat pārvietojušies uz **Site Builder** agenti, noklikot uz agenta ikonu čata galvenajā sarakstā.
3. Aprakstiet kontaktformulāru, ko vēlaties veidot. Piemēram:

   > "Pievienojiet kontaktformulāru Contact lapai ar laukiem vārdu, e-pasta adresi, ziņojumu un tālruņa numuru."

   Vai vienkārši:

   > "Izveido kontaktformulāru Contact lapai."

4. Site Builder veidēs kontaktformulāru un atgriež īsu kodu (shortcode), kas ir gatavs ievietināšanai.

## Generētās īsas kodas izmantošana

Pēc tam, kad Site Builder veido kontaktformulāru, tas atgriež īsu kodu (piemēram, `[contact-form-7 id="123"]`). Jūs varat:

1. **Ievietot to lapā vai postā** — Kopējiet īsu kodu un ievietojiet to jebkurajā lapā vai postā izmantojot bloku redaktoru vai klasisko redaktoru.
2. **Pievienot to ar Site Builderu** — Lūdziet Site Builderi pievienot formulāru konkrētā lapai automātiski:

   > "Pievienojiet kontaktformulāru Contact lapai."

3. **Izmantojiet to šablona** — Ja jūtaties ar PHP, varat uzdevot īss kodu (shortcode) tēmas šablona failā.

## Kontaktformu pielāgošana

Pēc tam, kad Site Builder izveido kontaktformu, jūs varat to turpināt pielāgot:

### Ar čata interfeisu
Lūdzu, lūdziet Site Builderu izmaiņas veikt formai:

> "Atjaunināt kontaktformu, lai pievienotu tēmu lauku un kļotu ziņojuma laukums obligāts."

Site Builder atjauninās formu un atgriežs atjaunināto īss kodu (shortcode).

### Ar formas plāksmes admin interfeisa
Jūs varat arī tieši pielāgot formu savā formas plāksmes iestatījumos:

1. Ieiet uz **Contact Form 7** (vai jūsu instalēto formas plāksmes) WordPress admina.
2. Atrodiet ar Site Builder izveidoto formu.
3. Redi formas laukus, validācijas noteikumus un e-pasta paziņojumus, ja tas ir nepieciešams.

## Formas plāksmes un saderība

Site Builder automātiski atrod, kāda formas plāksme ir instalēta jūsu vietnē, un izmanto to kontaktformu veidot. Ja uz vietnē ir vairākas formas plāksmes, Site Builder prioritizē tos šajā vecumā:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ja neinstalēts nav jebkāda no šiem plāksēm, Site Builder ieteicīs instalēt vienu pirms kontaktformu veidošanas.

## E-pasta paziņojumi

Ar Site Builder izveidotas kontaktformas pēc defaulta ir konfigurētas sūtīt e-pasta paziņojumus vietnes administratoram. Jūs varat pielāgot saņemto e-pasta adresi un paziņojuma ziņojumu:

1. Ieiet uz savas formas plāksmes admin interfeisu.
2. Atrodiet ar Site Builder izveidoto formu.
3. Redi e-pasta paziņojumu iestatījumus.

Detalizētām instrukcijām apskatiet jūsu formas plāksmes dokumentāciju:

- [E-pasta ziņojumi Contact Form 7](https://contactform7.com/docs/)
- [E-pasta ziņojumi WPForms](https://wpforms.com/docs/)
- [E-pasta ziņojumi Fluent Forms](https://fluentforms.com/docs/)
- [E-pasta ziņojumi Gravity Forms](https://docs.gravityforms.com/)

## Piemēri lietošanai

### Vienkarts kontaktformārs

> "Izveido vienkurtu kontaktformāru ar laukiem vārds, e-pasta adresi un ziņojumu."

### Daugstargs formārs

> "Izveido kontaktformāru, kuram ir pirmais solis kontaktinformācijai un otrs solis ziņojumam un iepriekš izvēlētajām kontaktmetodēm."

### Formārs ar nosacījumiem (Conditional Logic)

> "Izveido kontaktformāru, kas redz dažādus laukus atkarībā no lietotāja izvēles dropdown menu."

### Formārs ar faila uzlādi

> "Izveido kontaktformāru, kuram lietotāji var uzlādēt failu vai pielikumu."

:::note
Kontaktformāru izveide ir pieejama Superdav AI Agent v1.10.0 un jaunākos versijas. Lai izmantotu šo iespēju, jābūt aktīvs Site Builder agentam.
:::
