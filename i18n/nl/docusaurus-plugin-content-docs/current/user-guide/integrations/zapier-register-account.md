---
title: Registreer een account via Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Evenement: Een account registreren via Zapier

In het artikel [Integrating Ultimate Multisite with Zapier](zapier.md) bespraken we hoe je Zapier kunt gebruiken om verschillende acties binnen Ultimate Multisite uit te voeren op basis van triggers en gebeurtenissen. In dit artikel laten we zien hoe je applicaties van derden kunt integreren. We gebruiken Google Sheets als gegevensbron en sturen de informatie naar Ultimate Multisite om een account te registreren.

Allereerst moet je een **Google Sheet** aanmaken in je Google Drive. Zorg ervoor dat je elke kolom correct definieert, zodat je de gegevens later gemakkelijk kunt toewijzen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)Na het aanmaken van een Google Sheet kun je inloggen op je Zapier-account en beginnen met het maken van een zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)Onder het zoekveld voor **"App event"** selecteer je **"Google Sheets"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

Selecteer vervolgens voor het veld **"Event"** de optie **"New spreadsheet row"** en klik op **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)De volgende stap vraagt je om een **Google Account** te selecteren waarop de **Google Sheet** is opgeslagen. Zorg er dus voor dat het juiste Google-account is opgegeven.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)

Onder **"Set up trigger"** moet je het Google-werkblad en het werkblad selecteren waarvan de gegevens afkomstig zijn. Vul deze in en klik op **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)Vervolgens test je de **"test your trigger"** om te controleren of je Google Sheet correct is verbonden.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)Als je test succesvol is, zie je een resultaat met enkele waarden uit je spreadsheets. Klik op **"Continue"** om verder te gaan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)De volgende stap is het instellen van de tweede actie die een account in Ultimate Multisite aanmaakt of registreert. Selecteer in het zoekveld **"Ultimate Multisite(2.0.2)"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)

Selecteer onder het veld **"Event"** de optie **"Register an Account in Ultimate Multisite"** en klik op de knop **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)Onder **"Set up an action"** zie je verschillende velden voor klantgegevens, lidmaatschappen, producten, enz. Je kunt de waarden uit je Google Sheet toewijzen aan het juiste veld, zoals weergegeven in de onderstaande screenshot.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)

Na het toewijzen van de waarden kun je de actie testen.
