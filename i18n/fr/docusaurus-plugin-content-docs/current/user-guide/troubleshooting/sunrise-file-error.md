---
title: Erreur de fichier Sunrise
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Erreur lors de l'installation du fichier Sunrise

Le fichier sunrise.php est un fichier spécial que WordPress recherche pendant son démarrage. Pour que WordPress puisse détecter le fichier sunrise.php, il doit se trouver dans le dossier **wp-content**.

Lorsque vous activez Ultimate Multisite et que vous parcourez l'assistant de configuration comme celui que vous avez sur la capture d'écran, Ultimate Multisite tente de copier notre fichier sunrise.php dans le dossier wp-content.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-v6hosgLWpt.png)

La plupart du temps, nous parvenons à copier le fichier avec succès et tout fonctionne. Cependant, si quelque chose n'est pas correctement configuré (par exemple, les permissions du dossier), vous pourriez rencontrer un scénario où Ultimate Multisite ne parvient pas à copier le fichier.

Si vous lisez le message d'erreur que vous donne Ultimo, vous verrez que c'est exactement ce qui s'est passé ici : **Sunrise copy failed**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RXS5EbirfM.png)

Pour corriger cela, vous pouvez simplement copier le fichier sunrise.php depuis le dossier du plugin wp-ultimo et le coller dans votre dossier wp-content. Après l'avoir fait, rechargez la page de l'assistant et les vérifications devraient réussir.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-p6hz1I9ycl.png) Dans tous les cas, cela peut justifier une vérification générale des permissions de vos dossiers afin d'éviter d'éventuels problèmes à l'avenir (non seulement avec Ultimate Multisite mais aussi avec d'autres plugins et thèmes).

L'outil **Health Check** qui fait partie de WordPress (vous y accédez via le **panneau d'administration > Outils > Health Check** de votre site principal) vous permet de savoir si vous avez des permissions de dossiers définies sur des valeurs susceptibles de causer des problèmes avec WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oZEKeyxo2E.png)
