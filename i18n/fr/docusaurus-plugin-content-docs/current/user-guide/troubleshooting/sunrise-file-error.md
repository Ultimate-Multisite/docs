---
title: Erreur de fichier Sunrise
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Erreur lors de l'installation du fichier Sunrise

Le fichier sunrise.php est un fichier spécial que WordPress recherche pendant son démarrage. Pour que WordPress puisse détecter le fichier sunrise.php, il doit se trouver dans le dossier **wp-content**.

Lorsque vous activez Ultimate Multisite et que vous parcourez l'assistant de configuration comme celui que vous avez sur la capture d'écran, Ultimate Multisite tente de copier notre fichier sunrise.php dans le dossier wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

La plupart du temps, nous parvenons à copier le fichier avec succès et tout fonctionne. Cependant, si quelque chose n'est pas correctement configuré (par exemple, les permissions du dossier), vous pourriez rencontrer un scénario où Ultimate Multisite ne parvient pas à copier le fichier.

Si vous lisez le message d'erreur que vous donne Ultimo, vous verrez que c'est exactement ce qui s'est passé ici : **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Pour corriger cela, vous pouvez simplement copier le fichier sunrise.php depuis le dossier du plugin wp-ultimo et le coller dans votre dossier wp-content. Après l'avoir fait, rechargez la page de l'assistant et les vérifications devraient réussir.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In any case, this might warrant a general check of your folder permissions to avoid having problems in the future (not only with Ultimate Multisite but with other plugins and themes as well).

L'outil **Health Check** qui fait partie de WordPress (vous y accédez via le **panneau d'administration > Outils > Health Check** de votre site principal) vous permet de savoir si vous avez des permissions de dossiers définies sur des valeurs susceptibles de causer des problèmes avec WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
