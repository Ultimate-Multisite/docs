---
title: Erè Fichye Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erreur d'installation du fichier Sunrise {#error-installing-the-sunrise-file}

Le fichier sunrise.php est un fichier spécial que WordPress cherche pendant qu'il se lance (bootstraps). Pour que WordPress puisse détecter le fichier sunrise.php, il doit être situé à l'intérieur du dossier **wp-content**.

Quand vous activez Ultimate Multisite et passez par l'assistant de configuration comme celui que vous avez sur la capture d'écran, Ultimate Multisite essaie de copier notre fichier sunrise.php dans le dossier wp-content.

<!-- Capture d'écran indisponible : page de l'assistant de configuration montrant l'étape d'installation de sunrise.php -->

La plupart du temps, on arrive à copier le fichier avec succès et tout fonctionne. Cependant, si quelque chose n'est pas correctement configuré (les permissions des dossiers, par exemple), vous pourriez tomber dans une situation où Ultimate Multisite n'arrive pas à copier le fichier.

Si vous lisez le message d'erreur Ultimo vous donne, vous verrez que c'est exactement ce qui s'est passé ici : **Sunrise copy failed** (Copie de Sunrise échouée).

<!-- Capture d'écran indisponible : Message d'erreur montrant Sunrise copy failed -->

Pour corriger cela, vous pouvez simplement copier le fichier sunrise.php à l'intérieur du dossier plugin wp-ultimo et le coller dans votre dossier wp-content. Après cela, rechargez la page de l'assistant et les vérifications devraient passer.

<!-- Capture d'écran indisponible : Gestionnaire de fichiers montrant sunrise.php à l'intérieur du dossier plugin wp-ultimo --> Dans tous les cas, cela pourrait nécessiter une vérification générale des permissions de vos dossiers pour éviter des problèmes à l'avenir (pas seulement avec Ultimate Multisite, mais aussi avec d'autres plugins et thèmes).

L'outil **Health Check** qui fait partie de WordPress (vous pouvez y accéder via le tableau de bord principal de votre site **admin panel > Tools > Health Check**) est capable de vous dire si vos permissions de dossiers sont réglées sur des valeurs qui pourraient causer des problèmes avec WordPress.

<!-- Ekran pa disponib: Outil WordPress Health Check ap montre statistik pèmisyon dossier -->
