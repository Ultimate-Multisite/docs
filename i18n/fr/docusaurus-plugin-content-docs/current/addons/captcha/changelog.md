---
title: Journal des modifications de Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Journal des modifications de Captcha

Version : 1.5.0 - Publiée le 2026-05-22
* Nouveau : limiteur de débit avec arrêt strict — compte chaque GET et POST sur les surfaces protégées par captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) et répond avec HTTP 429, un `Retry-After` header, et une mise en attente tarpit aléatoire (1–5 s, plafonnée strictement à 15 s).
* Nouveau : paramètres `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` pour ajuster la fenêtre tarpit.
* Nouveau : filtre `wu_cap_rate_limit_whitelist_ip` pour exempter les plages d’IP de confiance.
* Nouveau : action `wu_cap_rate_limit_will_block` qui se déclenche immédiatement avant l’envoi de la réponse d’arrêt strict.
* Nouveau : détection de l’IP client résistante à l’usurpation. `Captcha_Core::get_client_ip()` (la source de vérité pour les clés de compartiment de limite de débit, le `remoteip` captcha siteverify, et les hachages d’IP des statistiques) applique désormais un modèle de confiance strict : REMOTE_ADDR est la base, `CF-Connecting-IP` n’est honoré que lorsque le pair immédiat se trouve dans une plage d’IP Cloudflare actuelle, et `X-Forwarded-For` n’est honoré que lorsque le pair immédiat figure dans la liste de proxies de confiance configurée par l’admin, avec un parcours de droite à gauche qui ignore les sauts de confiance/CF avant de s’arrêter sur l’IP du visiteur.
* Nouveau : paramètre `cap_trust_cloudflare_headers` (désactivé par défaut) — activez la confiance envers `CF-Connecting-IP` lorsque vous êtes derrière Cloudflare. Le plugin embarque un instantané CIDR Cloudflare et l’actualise chaque semaine via wp-cron avec un repli embarqué si l’actualisation échoue.
* Nouveau : paramètre `cap_trusted_proxies` — zone de texte de CIDR ou d’IP brutes (une par ligne, commentaires `#` autorisés) listant vos propres proxies / répartiteurs de charge de première ligne. Sans cela, `X-Forwarded-For` est ignoré même lorsque le limiteur de débit est activé.
* Nouveau : auto-détection à la première activation de la posture probable Cloudflare / proxy avec une notification admin « Appliquer les paramètres détectés » en un clic. Le plugin n’écrase jamais vos valeurs enregistrées ; si le trafic ultérieur suggère que votre config ne correspond plus à la réalité (par ex. Cloudflare a modifié les plages CIDR et votre CIDR de proxy est désormais obsolète), une notification de non-correspondance non révocable affiche la mise à jour recommandée.
* Corrigé : le mode invisible ne rétrograde plus silencieusement `cap_security_level` vers FAST — le niveau configuré par l’admin est honoré. Un nouveau filtre `wu_cap_server_security_level` est disponible pour les sites qui veulent une logique sur mesure.
* Corrigé : le compteur de statistiques `rate_limits_triggered` s’incrémente désormais à chaque blocage, pas seulement sur le rare chemin de garde-fou après succès.
* Corrigé : `Captcha_Core::get_client_ip()` est désormais l’unique source de vérité pour l’attribution d’IP visiteur à travers le limiteur de débit, les fournisseurs de captcha (reCAPTCHA + hCaptcha `siteverify`) et les statistiques — fermant un vecteur d’usurpation où des requêtes directes vers le serveur d’origine portant un `CF-Connecting-IP` header falsifié auraient été regroupées selon l’IP usurpée au lieu du pair réel.
* Corrigé : la porte de limite de débit du checkout classique WooCommerce se déclenche désormais sur `template_redirect` (priorité 1) au lieu de `woocommerce_before_checkout_form`. Le hook au niveau du formulaire ne se déclenche jamais lorsque le panier est vide, donc le trafic de flood qui n’ajoute jamais de produit contournait entièrement le limiteur.
* Corrigé : la porte de limite de débit WooCommerce pay-for-order se déclenche désormais sur `template_redirect` au lieu de `woocommerce_before_pay_action`. Ce dernier ne se déclenche qu’après la réussite de `wp_verify_nonce('woocommerce-pay')`, ce qui signifie que les attaquants non authentifiés (le modèle de menace réel) ne déclenchaient jamais le limiteur.
* Corrigé : la porte de limite de débit du checkout WooCommerce Store API (blocs) se déclenche désormais sur `rest_pre_dispatch` au lieu de `woocommerce_store_api_checkout_update_order_from_request`. Ce dernier ne se déclenche qu’après que Store API a validé le panier et les champs de facturation, donc les bots non authentifiés recevaient un 400 du validateur et ne déclenchaient jamais le limiteur.
* Corrigé : la porte de limite de débit Ultimate Multisite inline-login se déclenche désormais sur `wu_ajax_nopriv_wu_inline_login` priorité 1 (et son miroir pour utilisateurs connectés) au lieu de `wu_before_inline_login`. Ce dernier ne se déclenche qu’après la réussite de `check_ajax_referer('wu_checkout')`, donc les bots non authentifiés sans nonce wu_checkout valide recevaient un 403 et ne déclenchaient jamais le limiteur.
* Corrigé : `Rate_Limiter::enforce()` applique désormais une garde une fois par requête, indexée par `surface|ip`, de sorte que les hooks en amont qui se déclenchent deux fois par rendu (notamment `wu_setup_checkout` dans Ultimate Multisite) ne divisent plus par deux le seuil effectif de limite de débit.
* Corrigé : les portes de surface de limite de débit ne consultent plus `Captcha_Core::is_whitelisted()` (filtre `wu_captcha_whitelisted`). Ce filtre signale « captcha déjà géré par une autre surface » et est orthogonal à la protection contre le flood — l’intégration WooCommerce s’y accrochait pour ignorer le captcha de connexion WordPress lorsqu’un nonce Woo était présent, ce qui débordait dans le comptage du débit et permettait aux POST Woo d’éviter le limiteur. Le filtre spécifique à la limite de débit `wu_cap_rate_limit_whitelist_ip` est le seul contournement qui s’applique désormais.

Version : 1.3.2 - Publiée le 2026-01-27
* Corrigé : le widget Cap ne s’affichait pas sur les formulaires de checkout utilisant Elementor ou d’autres constructeurs de pages
* Corrigé : l’élément personnalisé cap-widget était supprimé par l’assainissement wp_kses()
* Amélioré : utilisation de contenu appelable pour le champ captcha du checkout afin de contourner le filtrage HTML
* Amélioré : JavaScript simplifié avec repli pour les cas limites

Version : 1.3.1 - Publiée le 2026-01-26
* Corrigé : le mode invisible Cap Captcha ne se résolvait pas automatiquement sur les formulaires de checkout Ultimate Multisite dynamiques
* Amélioré : le script de checkout Cap utilise désormais MutationObserver pour détecter les widgets chargés dynamiquement
* Amélioré : ajout de l’interception du bouton de checkout pour attendre le token avant la soumission

Version : 1.3.0 - Publiée le 2026-01-27
* Nouveau : intégration du checkout WooCommerce Blocks avec interception des fetch Store API
* Nouveau : prise en charge du captcha invisible pour le checkout WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nouveau : page de réglages autonome pour une utilisation sans Ultimate Multisite
* Nouveau : Jetpack Autoloader pour la prévention des conflits de dépendances
* Corrigé : hCaptcha ne s’affichait pas sur le checkout dynamique Ultimate Multisite (contenu chargé via AJAX)
* Corrigé : le captcha ne se rafraîchissait/ne se réinitialisait pas lorsque des erreurs de validation de formulaire survenaient
* Corrigé : hCaptcha ne s’affichait pas sur la page de checkout WooCommerce
* Corrigé : erreur de classe reCAPTCHA introuvable (bibliothèque PHP google/recaptcha ajoutée)
* Amélioré : détection des erreurs via les hooks WordPress, MutationObserver et l’interception AJAX
* Amélioré : les descriptions des réglages incluent désormais les URLs du dashboard pour les clés API

Version : 1.2.2 - Publiée le 2026-01-24
* Corrigé : le captcha ne s’affichait pas sur l’élément de formulaire de connexion Ultimate Multisite (nom du filtre de formulaire incohérent)
* Corrigé : le HTML du widget Cap était supprimé par la sanitisation wp_kses()
* Corrigé : les sélecteurs JavaScript ne trouvaient pas les formulaires avec des barres obliques dans les IDs d’éléments
* Ajouté : hook de filtre `wu_kses_allowed_html` permettant aux classaddons d’étendre les balises HTML autorisées
* Supprimé : fichiers JavaScript de code mort remplacés par des scripts spécifiques aux fournisseurs

Version : 1.2.1 - Publiée le 2026-01-23

* Corrigé : la validation du token Cap Captcha échouait dans les environnements multisite (utilise désormais des transients à l’échelle du réseau)
* Corrigé : le captcha s’affiche désormais de manière cohérente pour tous les utilisateurs, quel que soit leur statut de connexion
* Corrigé : incohérence entre l’affichage et la validation du captcha qui provoquait des échecs de checkout

Version : 1.2.0 - Publiée le 2026-01-21

* Nouveau : Cap Captcha - captcha auto-hébergé à preuve de travail, activé par défaut lors de l’activation
* Nouveau : protection sans configuration - activez l’addon et vous êtes immédiatement protégé
* Nouveau : architecture polymorphe de fournisseur de captcha pour une extensibilité facile
* Nouveau : protection du checkout WooCommerce Store API contre les attaques de test de cartes
* Nouveau : dashboard de suivi des statistiques affichant les défis, les vérifications et les attaques bloquées
* Nouveau : préréglages de niveau de sécurité (Rapide, Moyen, Max) pour la difficulté de Cap Captcha
* Nouveau : classes de base abstraites pour les fournisseurs reCAPTCHA et hCaptcha
* Amélioré : base de code refactorisée en classes de fournisseurs modulaires
* Amélioré : meilleure séparation des responsabilités avec une classe de gestionnaire dédiée
* Fixed: Security improvements for $_SERVER variable sanitization
* Corrigé : configuration des tests PHPUnit pour les conventions de nommage WordPress

Version : 1.0.1 - Publiée le 2025-09-28

* Renommer le préfixe en ultimate-multisite ; mettre à jour le domaine de texte ; incrémenter la version.
