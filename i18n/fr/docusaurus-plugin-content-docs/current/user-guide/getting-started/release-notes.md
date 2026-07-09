---
title: Notes de version
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notes de version

## Version 2.13.0 — Publiée le 2026-06-05

- Nouveau : Ajout de la prise en charge des locataires souverains pour les flux de Account client, de paiement, de facturation, de site, de facture, de changement de modèle et de mappage de domaine, afin que les réseaux de locataires puissent rediriger les clients vers le site principal pour les actions gérées.
- Nouveau : Ajout de vérifications des identifiants de renouvellement pour les abonnements récurrents, afin que les passerelles puissent désactiver le renouvellement automatique lorsqu’un accord de facturation enregistré, un abonnement ou un jeton de coffre-fort est manquant.
- Nouveau : Ajout d’une publication en boucle locale vérifiée par HMAC pour la création de site en attente, afin de rendre le provisionnement du paiement vers le site plus fiable chez les hébergeurs où les tâches d’arrière-plan sont retardées.
- Nouveau : Ajout de points d’extension pour les développeurs pour les URL SSO, les domaines de base des formulaires de paiement et la création automatique d’enregistrements de domaine.
- Correctif : Le SSO est plus fiable sur les domaines mappés, les visites anonymes via courtier, la déconnexion et les conflits de dépendances entre plugins.
- Correctif : La création de site en attente récupère désormais les indicateurs de publication obsolètes et évite de laisser les clients bloqués sur l’écran de création de site.
- Correctif : Les enregistrements de domaine ne sont plus créés pour les domaines de base de formulaires de paiement partagés, et les tâches d’arrière-plan des fournisseurs d’hébergement inutilisées sont ignorées lorsqu’aucune intégration n’est active.
- Correctif : Les cas limites liés au paiement, à l’adresse de facturation, à la réinitialisation du mot de passe, à la vérification de l’e-mail, au changement de modèle, aux visites guidées et au Dashboard client ne bloquent plus les flux client normaux.
- Correctif : Les e-mails de diffusion gardent désormais les destinataires privés tout en évitant les erreurs fatales SMTP/plugin lorsque les listes de destinataires ou les transports d’e-mail échouent.
- Correctif : Les cas limites liés aux renouvellements d’abonnements, à l’affichage de l’expiration et à la collecte des paiements évitent désormais les expirations immédiates, les plantages ou les paiements obligatoires manqués.
- Amélioré : La compatibilité WordPress est testée jusqu’à la version 7.0, les ressources Vue de production sont reconstruites depuis les sources npm, et la couverture de bout en bout Cypress exerce désormais davantage de flux de paiement, de configuration, de SSO et de passerelle.

## Version 2.12.0 — Publiée le 2026-05-15

- Nouveau : Ajout de Hostinger (hPanel) comme fournisseur d’hébergement pris en charge avec intégration du mappage de domaine
- Nouveau : Site Exporter gère désormais les lots d’importation réseau pour une restauration rationalisée des sites à l’échelle du réseau
- Correctif : Les e-mails de diffusion en BCC utilisent désormais un en-tête de destinataires non divulgués pour éviter d’exposer les adresses des destinataires
- Correctif : La date d’expiration de l’abonnement n’est plus corrompue lors de l’enregistrement avec une valeur qui n’est pas une date
- Correctif : Les mises à jour d’abonnement Stripe effacent désormais correctement les remises sans appeler l’API deleteDiscount obsolète
- Correctif : Les redirections SSO sur les sites à domaine mappé sont désormais limitées pour éviter les boucles de redirection infinies
- Correctif : La sélection du sélecteur d’image de l’assistant de configuration met désormais correctement à jour le modèle de données sous-jacent
- Correctif : La CLI de Site Exporter conserve désormais la sélection correcte du site réseau par défaut
- Amélioré : Suppression de wp-cli inclus du paquet du plugin, réduisant la taille du plugin

## Version 2.11.0 — Publiée le 2026-05-11

- Nouveau : Les exportations de site incluent désormais un `index.php` auto-amorçable afin que le ZIP puisse être installé sur un nouvel hébergeur sans installation séparée de plugin.
- Nouveau : L’exportation réseau permet aux administrateurs d’exporter tous les sous-sites dans une seule archive depuis la page d’administration Site Export.
- Nouveau : Le basculement de plan Allow Site Templates est désormais appliqué via une chaîne de secours, limitant correctement la disponibilité des modèles selon les limites du plan.
- Nouveau : L’éditeur de formulaire de paiement avertit lorsqu’un produit est ajouté sans champ obligatoire configuré.
- Nouveau : L’onglet des réglages d’importation/exportation décrit désormais clairement sa portée et renvoie directement vers l’outil Site Export.

## Version 2.10.0 — Publiée le 2026-05-05

- Nouveau : Assistant de configuration guidée PayPal pour la saisie manuelle des identifiants avec indicateur OAuth pour une configuration transparente de la passerelle.
- Nouveau : Panneau client de changement de modèle repensé avec carte du modèle actuel, grille persistante et bouton **Réinitialiser le modèle actuel**.
- Correctif : Le changement de modèle ne bloque plus l’interface utilisateur en cas d’échec AJAX.
- Correctif : Les états d’autorisation du changement de modèle sont sécurisés contre les accès non autorisés.
- Correctif : Les champs de remplacement du site sont validés avant l’enregistrement.
- Correctif : L’invite d’adresse de facturation s’affiche désormais lorsque l’adresse est vide.
- Correctif : Les avis de dépréciation PHP 8.1 null-to-string sont résolus.
- Correctif : Currents chargé en différé avant le hook init pour éviter les problèmes de synchronisation.
- Correctif : Le chemin SSO filtré est respecté dans tous les flux de connexion.
- Correctif : Les options d’identité de site vides sont conservées lors de l’enregistrement.

## Version 2.9.0 — Publiée le 2026-04-30

- Nouveau : Exportation et importation de site unique ajoutées sous **Outils > Exportation et importation**.
- Correctif : Les fichiers ZIP d’exportation sont désormais servis via un endpoint de téléchargement authentifié.
- Correctif : Le risque d’injection SQL et les problèmes de requête dans les requêtes d’exportation/importation en attente ont été corrigés.
- Correctif : Le site en attente n’est pas publié lorsque l’administrateur vérifie manuellement l’e-mail du client.
- Correctif : Les enregistrements pending_site orphelins sont nettoyés lorsque l’abonnement est manquant.
- Correctif : L’espacement de la navigation des réglages et la navigation par ancre de recherche ont été corrigés.
- Correctif : Les sites en attente sont désormais affichés en premier dans la vue All Sites.
- Correctif : En-tête User-Agent du fournisseur de captures d’écran (mShots) ajouté pour éviter les erreurs 403.
- Correctif : Dépendance circulaire du planning cron d’importation résolue.
- Correctif : Les ID de visite guidée sont normalisés avec des underscores dans les clés de réglages utilisateur.
- Amélioré : ZipArchive est désormais utilisé à la place d’Alchemy/Zippy pour une meilleure compatibilité.

## Version 2.8.0 — Publiée le 2026-04-29

- Nouveau : bouton d’activation Enable Jumper ajouté à l’interface utilisateur des paramètres Other Options.
- Nouveau : colonne de statut ajoutée au tableau de liste des formulaires de paiement.
- Nouveau : chargeur de fichier sunrise d’addon pour les extensions sunrise MU-plugin personnalisées.
- Amélioration : suppression du paramètre d’adhésion au signalement d’erreurs de la page des paramètres.
- Correction : carte de site de la page de remerciement — image désormais contrainte et liens correctement stylés.
- Correction : fournisseur de captures d’écran remplacé de thum.io par WordPress.com mShots.
- Correction : Enable Registration et Default Role définissent désormais les bonnes valeurs par défaut lors d’une nouvelle installation.
- Correction : `get_site_url()` ne renvoie plus de valeur vide lorsque le domaine inclut un port.
- Correction : les fichiers médias clonés sont désormais copiés correctement lorsque le paramètre `copy_media` était vide.
- Correction : cache d’objets invalidé correctement après l’écriture de sitemeta lors de l’activation réseau.
- Correction : domaine personnalisé automatiquement promu en primaire lors de la vérification DNS pour les domaines en 3 parties.
- Correction : abonnement en attente annulé lorsque le paiement expiré est nettoyé.
- Correction : vérificateur de force du mot de passe reconnecté après la fermeture de l’invite de connexion intégrée.
- Correction : rechargement infini de la page arrêté sur la page de remerciement lorsque le site est déjà créé.
- Correction : option d’inscription du cœur WP synchronisée lors de l’activation du plugin et de l’enregistrement des paramètres.
- Correction : garde contre l’expiration nulle ajouté dans `calculate_expiration` pour la compatibilité avec PHP 8.4.
- Correction : inscriptions en double bloquées lorsque le client a déjà un abonnement actif.
- Correction : vérification de valeur nulle ajoutée pour `date_expiration` dans le paiement.
- Correction : provisionnement de site renforcé — limitations, inférence d’abonnement, promotion de domaine.
- Correction : libellé de statut de la vérification de pré-installation corrigé en NOT Activated lorsque la vérification échoue.
- Correction : domaine de paiement utilisé pour les URL de vérification d’e-mail.
- Correction : connexion automatique après le paiement lorsqu’aucun champ de mot de passe n’est présent.
- Correction : les abonnements gratuits n’expirent plus — traités comme à vie.
- Correction : la barrière de vérification d’e-mail retient la publication du site jusqu’à ce que le client vérifie son e-mail.
- Correction : chemin de base de l’endpoint API SES v2 et route d’identité corrigés.
- Correction : hook `wu_inline_login_error` émis dans le bloc de capture avant soumission.
