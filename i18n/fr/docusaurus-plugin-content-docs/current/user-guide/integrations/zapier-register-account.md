---
title: Enregistrer un compte via Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Événement : Enregistrer un compte via Zapier

Dans l'article [Integrating Ultimate Multisite with Zapier](zapier.md), nous avons abordé comment utiliser Zapier pour effectuer différentes actions au sein d'Ultimate Multisite en fonction de déclencheurs et d'événements. Dans cet article, nous allons montrer comment vous pouvez intégrer des applications tierces. Nous utiliserons Google Sheets comme source de données et enverrons les informations vers Ultimate Multisite pour enregistrer un compte.

Tout d'abord, vous devez créer une **Google Sheet** dans votre Google Drive. Assurez-vous de définir correctement chaque colonne afin de pouvoir mapper les données plus tard.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)Après avoir créé une Google Sheet, vous pouvez vous connecter à votre compte Zapier et commencer à créer un zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)Dans le champ de recherche pour **"App event"** sélectionnez **"Google Sheets"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

Ensuite, pour le champ **"Event"** sélectionnez **"New spreadsheet row"** et cliquez sur **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)L'étape suivante vous demandera de sélectionner un **Google Account** où la **Google Sheet** est enregistrée. Assurez-vous donc que le bon compte Google est spécifié.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)Sous **"Set up trigger"**, vous devrez sélectionner et spécifier le classeur Google et la feuille de calcul que vous utiliserez comme source des données. Remplissez simplement ces champs et cliquez sur **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)Ensuite, effectuez un **test your trigger** pour vous assurer que votre Google Sheet est correctement connectée.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)Si votre test est réussi, vous devriez voir le résultat affichant certaines valeurs de vos feuilles de calcul. Cliquez sur **"Continue"** pour poursuivre.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)L'étape suivante consiste à configurer la deuxième action qui créera ou enregistrera un compte dans Ultimate Multisite. Dans le champ de recherche, sélectionnez **"Ultimate Multisite(2.0.2)"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)Sous le champ **"Event"**, sélectionnez **"Register an Account in Ultimate Multisite"** puis cliquez sur le bouton **"Continue"**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)Sous **"Set up an action"**, vous verrez différents champs disponibles pour les données client, les adhésions, les produits, etc. Vous pouvez mapper les valeurs de votre Google Sheet et les assigner aux champs appropriés où elles doivent être renseignées, comme indiqué sur la capture d'écran ci-dessous.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)Après avoir mappé les valeurs, vous pouvez tester l'action.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UKI9kdBjIc.png)
