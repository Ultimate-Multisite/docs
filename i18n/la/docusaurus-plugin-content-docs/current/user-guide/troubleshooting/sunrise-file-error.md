---
title: Error de archivo Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erro Instalandi File Sunrise {#error-installing-the-sunrise-file}

Il file `sunrise.php` est un fichier spécial que WordPress cherche pendant qu'il se lance (bootstraps). Pour que WordPress puisse détecter le fichier `sunrise.php`, il doit se trouver à l'intérieur du dossier **wp-content**.

Lorsque attives Ultimate Multisite et suivez l'assistant de configuration comme celui que vous voyez sur la capture d'écran, Ultimate Multisite essaie de copier notre fichier `sunrise.php` dans le dossier wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

La plupart du temps, nous parvenons à copier le fichier avec succès et tout fonctionne. Cependant, si quelque chose n'est pas correctement configuré (les permissions des dossiers, par exemple), vous pourriez rencontrer un scénario où Ultimate Multisite n'arrive pas à copier le fichier.

Si vous lisez le message d'erreur Ultimo qui vous donne, vous verrez que c'est exactement ce qui s'est passé ici : **Sunrise copy failed** (Copie Sunrise échouée).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Pour corriger cela, vous pouvez simplement copier le fichier `sunrise.php` à l'intérieur du dossier de votre plugin wp-ultimo et le coller dans votre dossier wp-content. Après cela, rechargez la page de l'assistant et les vérifications devraient passer.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Dans tous les cas, cela pourrait nécessiter une vérification générale des permissions de vos dossiers pour éviter d'avoir des problèmes à l'avenir (pas seulement avec Ultimate Multisite, mais aussi avec d'autres plugins et thèmes).

L'outil **Health Check** qui fait partie de WordPress (vous pouvez y accéder via votre tableau de bord principal du site **admin panel > Tools > Health Check**) est capable de vous indiquer si vos permissions de dossiers sont réglées sur des valeurs qui pourraient causer des problèmes avec WordPress.

<!-- Captura non est disponibile: Strumento di controllo salute WordPress che mostra lo stato dei permessi delle cartelle -->
