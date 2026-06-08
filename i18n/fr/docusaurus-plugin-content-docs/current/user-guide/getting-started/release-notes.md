---
title: Notes de version
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Notes de version

## Version 2.12.0 — Publiée le 15/05/2026

- Nouveau : Ajout de Hostinger (hPanel) comme fournisseur d'hébergement pris en charge avec intégration de mappage de domaine.
- Nouveau : Site Exporter gère désormais les bundles d'importation de réseau pour une restauration de site simplifiée à l'échelle du réseau.
- Correction : Les e-mails de diffusion BCC utilisent désormais un en-tête `undisclosed-recipients` pour empêcher l'exposition des adresses des destinataires.
- Correction : La date d'expiration de l'adhésion n'est plus corrompue lors de la sauvegarde avec une valeur non-date.
- Correction : Les mises à jour d'adhésion Stripe effacent désormais correctement les réductions sans appeler l'API `deleteDiscount` obsolète.
- Correction : Les redirections SSO sur les sites mappés à un domaine sont désormais limitées pour prévenir les boucles de redirection infinies.
- Correction : La sélection de l'image dans l'assistant de configuration met désormais correctement à jour le modèle de données sous-jacent.
- Correction : L'outil CLI de Site Exporter préserve désormais la sélection correcte du site réseau par défaut.
- Amélioration : Suppression du wp-cli groupé du package plugin, réduisant ainsi la taille du plugin.

## Version 2.11.0 — Publiée le 11/05/2026

- Nouveau : Les exportations de site regroupent désormais un `index.php` auto-amorçant, ce qui permet d'installer le fichier ZIP sur un nouvel hébergeur sans installation de plugin séparée.
- Nouveau : L'exportation de réseau permet aux administrateurs d'exporter tous les sous-sites dans une seule archive depuis la page d'administration de Site Export.
- Nouveau : Le basculement du plan "Allow Site Templates" est désormais forcé via une chaîne de secours, restreignant correctement la disponibilité des modèles en fonction des limites de plan.
- Nouveau : L'éditeur de formulaire de paiement avertit lorsqu'un produit est ajouté sans que le champ requis ne soit configuré.
- Nouveau : L'onglet des paramètres d'importation/exportation décrit désormais clairement son champ d'application et renvoie directement à l'outil Site Export.

## Version 2.10.0 — Publiée le 05/05/2026

- Nouveau : Assistant de configuration guidé PayPal pour la saisie manuelle des identifiants, avec un portail OAuth pour une configuration de passerelle fluide.
- Nouveau : Le panneau client de commutation de modèle a été repensé avec une carte de modèle actuel, une grille persistante et un bouton **Réinitialiser le modèle actuel**.
- Correction : La commutation de modèle ne bloque plus l'interface utilisateur en cas d'échec AJAX.
- Correction : Les états de permission de commutation de modèle sont sécurisés contre les accès non autorisés.
- Correction : Les entrées de remplacement de site sont validées avant la sauvegarde.
- Correction : L'invite d'adresse de facturation est désormais affichée lorsque l'adresse est vide.
- Correction : Les avertissements d'obsolescence de `null` vers `string` de PHP 8.1 sont résolus.
- Correction : Les données de "Currents" sont chargées paresseusement avant le hook `init` pour éviter les problèmes de synchronisation.
- Correction : Le chemin SSO filtré est respecté dans tous les flux de connexion.
- Correction : Les options d'identité de site vide sont préservées lors de la sauvegarde.

## Version 2.9.0 — Publiée le 30/04/2026

- Nouveau : Exportation et importation de site unique ajoutées sous **Outils > Exportation et importation**.
- Correction : Les fichiers ZIP d'exportation sont désormais servis via un point de terminaison de téléchargement authentifié.
- Correction : Les risques d'injection SQL et les problèmes de requête dans les requêtes d'exportation/importation en attente sont corrigés.
- Correction : Le site en attente n'est plus publié lorsque l'administrateur vérifie manuellement l'e-mail du client.
- Correction : Les enregistrements `pending_site` orphelins sont nettoyés lorsque l'adhésion est manquante.
- Correction : Le rembourrage de la navigation des paramètres et la navigation par ancre de recherche sont corrigés.
- Correction : Les sites en attente sont désormais affichés en premier dans la vue Tous les sites.
- Correction : Ajout de l'en-tête User-Agent du fournisseur de captures d'écran (mShots) pour prévenir les erreurs 403.
- Correction : La dépendance circulaire du calendrier cron d'importation est résolue.
- Correction : Les IDs de tour sont normalisés en underscores dans les clés des paramètres utilisateur.
- Amélioration : Utilisation de ZipArchive au lieu d'Alchemy/Zippy pour une meilleure compatibilité.

## Version 2.8.0 — Publiée le 29/04/2026

- Nouveau : Ajout du basculeur "Enable Jumper" dans l'interface des paramètres "Other Options".
- Nouveau : Ajout de la colonne de statut dans le tableau des formulaires de paiement.
- Nouveau : Chargeur de fichiers sunrise Addon pour les extensions MU-plugin sunrise personnalisées.
- Amélioration : Suppression de l'option d'opt-in de rapport d'erreurs de la page des paramètres.
- Correction : Carte de site de la page de remerciement — l'image est désormais contrainte et les liens sont stylisés correctement.
- Correction : Le fournisseur de captures d'écran est passé de thum.io à WordPress.com mShots.
- Correction : "Enable Registration" et "Default Role" sont désormais définis avec les valeurs par défaut lors d'une nouvelle installation.
- Correction : `get_site_url()` ne renvoie plus de valeur vide lorsque le domaine inclut un port.
- Correction : Les fichiers média clonés sont désormais copiés correctement lorsque le paramètre `copy_media` était vide.
- Correction : Le cache objet est correctement invalidé après l'écriture de sitemeta réseau-activate.
- Correction : Le domaine personnalisé est automatiquement promu au domaine principal lors de la vérification DNS pour les domaines à 3 parties.
- Correction : L'adhésion en attente est annulée lorsque le paiement expiré est nettoyé.
- Correction : Le vérificateur de force de mot de passe est réattribué après la fermeture de l'invite de connexion en ligne.
- Correction : Le rechargement de page infini est arrêté sur la page de remerciement lorsque le site est déjà créé.
- Correction : L'option d'enregistrement de WP core est synchronisée lors de l'activation du plugin et de la sauvegarde des paramètres.
- Correction : Une garde contre l'expiration `null` est ajoutée dans `calculate_expiration` pour la compatibilité PHP 8.4.
- Correction : Les inscriptions en double sont bloquées lorsqu'un client possède déjà une adhésion active.
- Correction : Vérification `null` ajoutée pour `date_expiration` dans le paiement.
- Correction : Le provisionnement du site est renforcé — limitations, inférence d'adhésion, promotion de domaine.
- Correction : L'étiquette de statut de vérification pré-installation est corrigée pour afficher NON Activé en cas d'échec de la vérification.
- Correction : Le domaine de paiement est utilisé pour les URL de vérification par e-mail.
- Correction : Connexion automatique après le paiement lorsqu'aucun champ de mot de passe n'est présent.
- Correction : Les adhésions gratuites n'expirent plus — elles sont traitées comme étant à vie.
- Correction : Le portail de vérification par e-mail maintient la publication du site tant que le client n'a pas vérifié son e-mail.
- Correction : Le chemin de base et la route d'identité de l'API SES v2 sont corrigés.
- Correction : Le hook `wu_inline_login_error` est émis dans le bloc `pre-submit` catch.
