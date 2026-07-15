---
title: Définir la constante Sunrise sur Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Définir la constante Sunrise sur true sur Closte

Certains fournisseurs d’hébergement verrouillent le wp-config.php pour des raisons de sécurité. Cela signifie que Ultimate Multisite ne peut pas modifier automatiquement le fichier pour y inclure les constantes nécessaires afin de faire fonctionner le mappage de domaines et d’autres fonctionnalités. Closte est l’un de ces hébergeurs.

Cependant, Closte offre un moyen d’ajouter des constantes au wp-config.php de manière sécurisée. Il vous suffit de suivre les étapes ci-dessous :

## Sur le Dashboard Closte {#on-the-closte-dashboard}

Tout d’abord, [connectez-vous à votre Account Closte](https://app.closte.com/), cliquez sur l’élément de menu Sites, puis cliquez sur le lien Dashboard du site sur lequel vous travaillez actuellement :

<!-- Capture d’écran indisponible : Dashboard Closte affichant le menu Sites et le lien Dashboard -->

Un certain nombre de nouveaux éléments de menu s’afficheront sur le côté gauche de l’écran. Accédez à la page **Settings** à l’aide de ce menu :

<!-- Capture d’écran indisponible : menu latéral gauche de Closte affichant l’option Settings -->

Ensuite, dans **Settings**, trouvez l’onglet WP-Config, puis le champ « Additional wp-config.php content » dans cet onglet :

<!-- Capture d’écran indisponible : page Settings de Closte avec l’onglet WP-Config affichant le champ Additional wp-config.php content -->

Dans le cadre de l’installation de Ultimate Multisite, vous devrez ajouter la constante sunrise dans ce champ. Ajoutez simplement une nouvelle ligne et collez la ligne ci-dessous. Après cela, cliquez sur le bouton **Save All**.

define('SUNRISE', true);

C’est tout, tout est prêt. Retournez à l’assistant d’installation de Ultimate Multisite et actualisez la page pour continuer le processus.
