---
title: Erreur du fichier Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erreur lors de l’installation du fichier Sunrise {#error-installing-the-sunrise-file}

Le fichier sunrise.php est un fichier spécial que WordPress recherche pendant son amorçage. Pour que WordPress puisse détecter le fichier sunrise.php, il doit se trouver dans le **dossier wp-content**.

Lorsque vous activez Ultimate Multisite et passez par l’assistant de configuration comme celui que vous voyez sur la capture d’écran, Ultimate Multisite essaie de copier notre fichier sunrise.php dans le dossier wp-content.

<!-- Capture d’écran indisponible : page de l’assistant de configuration montrant l’étape d’installation de sunrise.php -->

La plupart du temps, nous pouvons copier le fichier avec succès et tout fonctionne. Cependant, si quelque chose n’est pas correctement configuré (les autorisations du dossier, par exemple), vous pourriez vous retrouver dans une situation où Ultimate Multisite ne peut pas copier le fichier.

Si vous lisez le message d’erreur qu’Ultimo vous affiche, vous verrez que c’est exactement ce qui s’est passé ici : **échec de la copie de Sunrise**.

<!-- Capture d’écran indisponible : message d’erreur indiquant l’échec de la copie de Sunrise -->

Pour corriger cela, vous pouvez simplement copier le fichier sunrise.php dans le dossier du plugin wp-ultimo et le coller dans votre dossier wp-content. Après cela, rechargez la page de l’assistant et les vérifications devraient réussir.

<!-- Capture d’écran indisponible : gestionnaire de fichiers montrant sunrise.php dans le dossier du plugin wp-ultimo --> Dans tous les cas, cela pourrait justifier une vérification générale des autorisations de vos dossiers afin d’éviter des problèmes à l’avenir (non seulement avec Ultimate Multisite, mais aussi avec d’autres plugins et thèmes).

L’**outil Health Check** qui fait partie de WordPress (vous pouvez y accéder via le **panneau d’administration > Outils > Health Check** de votre site principal) peut vous indiquer si les autorisations de vos dossiers sont définies sur des valeurs susceptibles de causer des problèmes avec WordPress.

<!-- Capture d’écran indisponible : outil WordPress Health Check montrant l’état des autorisations des dossiers -->
