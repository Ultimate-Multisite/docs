---
title: Définir la constante Sunrise sur Closte
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Définir la constante Sunrise à true sur Closte

Certains fournisseurs d'hébergement verrouillent le wp-config.php pour des raisons de sécurité. Cela signifie qu'Ultimate Multisite ne peut pas modifier automatiquement le fichier pour inclure les constantes nécessaires afin que le mappage de domaine et d'autres fonctionnalités fonctionnent. Closte est l'un de ces hébergeurs.

Cependant, Closte propose une façon d'ajouter des constantes au wp-config.php de manière sécurisée. Vous devez simplement suivre les étapes ci-dessous:

## Sur le tableau de bord Closte

Tout d'abord, [connectez-vous à votre compte Closte](https://app.closte.com/), cliquez sur l'élément de menu Sites, puis cliquez sur le lien Tableau de bord sur le site sur lequel vous travaillez actuellement:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Vous verrez un certain nombre de nouveaux éléments de menu sur le côté gauche de l'écran. Accédez à la page **Settings** en utilisant ce menu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Ensuite, sur la page **Settings**, trouvez l'onglet WP-Config, puis le champ « Additional wp-config.php content » sur cet onglet:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Dans le contexte de l'installation d'Ultimate Multisite, vous devrez ajouter la constante sunrise dans ce champ. Ajoutez simplement une nouvelle ligne et collez la ligne ci-dessous. Ensuite, cliquez sur le bouton **Save All**.

define('SUNRISE', true);

C'est tout, vous êtes prêt. Revenez à l'assistant d'installation d'Ultimate Multisite et actualisez la page pour poursuivre le processus.
