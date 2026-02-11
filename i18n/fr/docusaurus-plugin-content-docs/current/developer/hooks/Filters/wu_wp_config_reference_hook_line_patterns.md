---
id: wu_wp_config_reference_hook_line_patterns
title: Filtre - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filtre : wu_wp_config_reference_hook_line_patterns

Nous vérifions trois modèles lorsque nous essayons de déterminer où nous pouvons injecter nos constantes :

1. Nous recherchons la définition de la variable $table_prefix ; 2. Nous recherchons des définitions plus complexes de $table_prefix – celles qui utilisent, par exemple, des variables d’environnement ; 3. Si cela n’est pas disponible, nous cherchons le commentaire « Happy Publishing » ; 4. Si cela n’est pas non plus disponible, nous cherchons le début du fichier. La clé représente le modèle et la valeur le nombre de lignes à ajouter. Un nombre négatif de lignes peut être passé pour écrire avant la ligne trouvée, au lieu d’écrire après.

### Source

Défini dans [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) à la ligne 143
