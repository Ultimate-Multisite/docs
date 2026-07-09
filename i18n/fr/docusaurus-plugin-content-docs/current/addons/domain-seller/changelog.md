---
title: Journal des modifications de Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Journal des modifications de Domain Seller

Version 1.3.0 - Publiée le 2026-06-02
- Nouveau : ajout d’un avertissement network-admin lorsque le solde revendeur HostAfrica devient trop faible
- Nouveau : ajout du mappage automatique des domaines nouvellement enregistrés vers le site réseau
- Correction : application des exigences de champs de titulaire uniquement lors de l’enregistrement d’un nouveau domaine
- Correction : rend les notifications de suivi du solde révocables
- Correction : garantie que les informations de facturation du titulaire WooCommerce sont conservées
- Correction : application des exigences de contact du titulaire pendant l’enregistrement
- Correction : empêche la création de produits d’enregistrement de domaine avec une majoration de 0 %
- Correction : conservation des sélections de domaines et des tarifs tout au long du flux de session de checkout
- Correction : amélioration de l’affichage de la devise des tarifs de domaine HostAfrica
- Correction : amélioration du comportement form-action du checkout afin d’éviter les incompatibilités query-var du noyau WP
- Amélioration : lien vers la documentation de configuration revendeur HostAfrica dans les conseils de configuration

Version 1.2.0 - Publiée le 2026-05-25
- Nouveau : Ajout de HostAfrica comme intégration de vente de domaines avec prise en charge du checkout, de l’assistant de configuration, de la recherche, des TLD/tarifs, de l’enregistrement, du renouvellement, du transfert, des serveurs de noms, du DNS, du code EPP, du verrouillage registrar et de la protection d’ID
- Nouveau : Ajout de Openprovider comme intégration de vente de domaines avec prise en charge des tarifs revendeur, de l’enregistrement, du renouvellement, du transfert, des serveurs de noms, du DNS, du code EPP, du verrouillage registrar, de la confidentialité WHOIS et de la synchronisation des TLD
- Nouveau : Ajout de Hostinger comme intégration de vente de domaines utilisant le token API Hostinger partagé depuis l’intégration principale pour les vérifications de disponibilité, l’enregistrement, les mises à jour des serveurs de noms, le verrouillage registrar et la confidentialité WHOIS
- Amélioré : Ajout de docblocks d’actions et de filtres du cycle de vie des domaines pour guider l’intégration développeur
- Amélioré : Mise à jour des métadonnées de compatibilité du plugin vers WordPress 7.0 dans le readme de l’addon
- Amélioré : Mise à jour des modèles de planification utilisés pour la coordination des prochaines releases

Version 1.1.0 - Publiée le 2026-05-08
- Nouveau : Création d’enregistrements DNS (add_dns_record) implémentée pour les registrars ResellerClub, Enom et OpenSRS
- Correction : L’analyseur d’enregistrements DNS par défaut tolère désormais les tokens {DOMAIN} et {SITE_URL}
- Correction : Les slugs des champs de checkout de sélection de domaine utilisent désormais un namespace pour éviter les collisions avec site_url

Version 1.0.8 - Publiée le 2026-05-07
- Correction : Les tarifs de domaines ResellerClub récupèrent désormais les prix de coût en direct depuis le bon endpoint API

Version 1.0.7 - Publiée le 2026-05-06
* Correction : ResellerClub test_connection envoie le paramètre tlds requis (#224)

Version 1.0.6 - Publiée le 2026-05-05
* Correction : l’enregistrement de domaines ResellerClub fonctionne désormais correctement grâce à une meilleure gestion des réponses de l’API et à un routage des fournisseurs piloté par le registre
* Correction : améliorations de l’UX de la page d’administration d’enregistrement de domaine
* Supprimé : intégration du registraire CyberPanel

Version 1.0.5 - Publiée le 2026-04-02
* Nouveau : intégration du registraire GoDaddy pour l’enregistrement et la gestion de domaines
* Nouveau : intégration du registraire NameSilo
* Nouveau : intégration du registraire ResellerClub
* Nouveau : vérification automatique du domaine d’envoi SES lors de l’achat et du mappage du domaine
* Correction : protection des constantes du plugin contre la redéfinition dans l’environnement de test
* Correction : les drapeaux MySQL sont correctement séparés en mots dans install-wp-tests.sh

Version 1.0.4 - Publiée le 2026-03-14
* **Correction :** certains assets css manquants
* **Correction :** erreur liée aux tlds indisponibles

Version 1.0.3 - Publiée le 2026-03-09
* **Correction :** erreurs de propriétés réactives Vue (domain_option, selected_domain, domain_provider) lors de l’utilisation de l’ancien template d’inscription avec le shortcode de paiement
* **Correction :** mauvais alignement du champ de saisie de sous-domaine et texte surdimensionné dans le champ de sélection de domaine au paiement
* **Correction :** masquer le bloc d’aperçu « Your URL will be » lorsque le champ de sélection de domaine est présent

Version 1.0.2 - Publiée le 2026-03-01
* **Amélioration :** Suppression des réglages de majoration globaux de la page des réglages — la tarification est désormais exclusivement par produit
* **Amélioration :** Ajout du lien "Manage Domain Products" sur la page des réglages pour une navigation rapide
* **Amélioration :** Descriptions de champs et infobulles plus claires pour les réglages des produits de domaine (catch-all vs propres au TLD, types de majoration, tarification de lancement)
* **Amélioration :** Meilleures descriptions dans toute la page des réglages (recherche de TLDs, renouvellements, DNS, notifications)

Version 1.0.1 - Publiée le 2026-02-27

* **Nouveau :** outil d’importation de TLD pour la gestion des prix en masse
* **Nouveau :** prise en charge des prix de lancement pour les produits de domaine
* **Nouveau :** suite de tests E2E avec Cypress
* **Nouveau :** modèles d’e-mails pour les notifications du cycle de vie des domaines
* **Nouveau :** champs d’adresse du titulaire sur la fenêtre modale d’enregistrement de domaine admin, préremplis depuis les paramètres
* **Nouveau :** interface de gestion DNS client avec prise en charge de l’ajout, de la modification et de la suppression d’enregistrements
* **Nouveau :** option de checkout « Bring your own domain » avec mappage automatique du domaine
* **Nouveau :** génération automatique de l’URL du site à partir du nom de domaine pendant le checkout
* **Nouveau :** configuration du nameserver par défaut et des enregistrements DNS dans les paramètres
* **Nouveau :** détails d’enregistrement de domaine et gestion DNS sur la page principale de modification du domaine
* **Nouveau :** l’assistant de configuration crée automatiquement un produit de domaine par défaut avec des valeurs par défaut raisonnables
* **Nouveau :** synchronisation TLD automatique quotidienne via cron sur tous les fournisseurs configurés
* **Nouveau :** protection de la confidentialité WHOIS avec configuration par produit (toujours activée, choix du client ou désactivée)
* **Nouveau :** case à cocher de confidentialité WHOIS au checkout avec affichage du prix et prise en charge du mode sombre
* **Nouveau :** page admin Register Domain pour l’enregistrement manuel de domaines
* **Nouveau :** mises à jour automatiques du plugin via le serveur de mise à jour Ultimate Multisite
* **Nouveau :** onglet de filtre par type de produit de domaine dans le tableau de liste des produits avec style de badge violet
* **Nouveau :** champs de contact du titulaire (nom, adresse, ville, état, code postal, pays, téléphone) sur le formulaire de checkout de domaine

* **Nouveau :** validation du champ du titulaire avant d’appeler l’API du bureau d’enregistrement, avec des messages d’erreur clairs
* **Nouveau :** canaux de journalisation spécifiques aux fournisseurs pour les événements d’enregistrement de domaine (p. ex. domain-seller-namecheap.log)
* **Nouveau :** champs de contact du titulaire sur le formulaire principal de checkout d’inscription/enregistrement (affichés lors de l’enregistrement d’un domaine)
* **Amélioré :** remplacement du champ de checkout de recherche de domaine par un champ unifié de sélection de domaine prenant en charge les onglets sous-domaine, enregistrement et domaine existant
* **Amélioré :** les paramètres du produit de domaine s’affichent en ligne sur la page de modification du produit via le système de widgets principal
* **Amélioré :** les informations de domaine du client s’intègrent au widget principal de mappage de domaine au lieu d’une metabox autonome
* **Amélioré :** assistant d’importation des TLD simplifié en synchronisation en un clic depuis tous les fournisseurs
* **Amélioré :** la disponibilité des domaines Namecheap utilise un appel d’API par lot pour une recherche plus rapide
* **Amélioré :** l’API de tarification Namecheap utilise les bons paramètres et l’analyse correcte des réponses
* **Amélioré :** stockage centralisé des TLD dans une seule option réseau
* **Amélioré :** journalisation de l’activité des domaines pour les changements DNS, les transferts et l’application de la configuration
* **Amélioré :** synchronisation complète des TLD pour OpenSRS à l’aide de la liste maîtresse IANA avec validation par lot
* **Amélioré :** synchronisation complète des TLD pour Namecheap avec requêtes d’API paginées
* **Amélioré :** remplacement des anciennes classes de fournisseurs par le modèle Integration Registry
* **Amélioré :** panneau de paramètres avec configuration DNS et de transfert
* **Amélioré :** numéros de téléphone automatiquement formatés au format de bureau d’enregistrement +CC.NNN

* **Amélioré :** La validation du champ téléphone supprime les caractères de mise en forme avant la soumission
* **Amélioré :** L’exigence de version passe à Ultimate Multisite 2.4.12 avec un avis plus clair
* **Amélioré :** Le workflow CI utilise le checkout approprié pour l’addon et le plugin principal
* **Amélioré :** prepare_registrant_info() lit les métadonnées utilisateur enregistrées lors du checkout avec repli sur l’adresse de facturation
* **Corrigé :** La recherche de domaine AJAX échouait pour les utilisateurs non connectés pendant le checkout
* **Corrigé :** La tarification de domaine AJAX échouait pour les utilisateurs non connectés pendant le checkout
* **Corrigé :** Erreur fatale de redéclaration de la classe Spyc lors de l’exécution de commandes WP-CLI
* **Corrigé :** Délai d’expiration de l’API sandbox Namecheap trop court
* **Corrigé :** Le texte du bouton Select de la recherche de domaine n’était pas visible sur fond vert
* **Corrigé :** L’enregistrement de domaine échouait avec l’erreur "RegistrantFirstName is Missing" en raison d’informations de contact manquantes
* **Corrigé :** Enregistrement de domaine créé avec blog_id=0 lorsque le site n’existait pas encore au moment du checkout
* **Corrigé :** Le réglage des TLD par défaut était renvoyé sous forme de chaîne au lieu d’un tableau analysé
* **Supprimé :** Page d’administration autonome Domain Management — désormais gérée via les pages de domaine du cœur

Version 1.0.0 - Publiée le 2025-09-28

**Réécriture majeure pour Ultimate Multisite v2**

* **Nouveau :** Réécriture complète avec une architecture moderne PHP 7.4+
* **Nouveau :** Intégration transparente avec le système de paiement Ultimate Multisite v2
* **Nouveau :** Gestion des produits de domaine avec des options de tarification flexibles
* **Nouveau :** Architecture de prise en charge de plusieurs fournisseurs de domaines
* **Nouveau :** Intégration du renouvellement automatique et des abonnements
* **Nouveau :** Interface de gestion des domaines clients
* **Nouveau :** Surveillance et journaux des domaines côté admin
* **Nouveau :** Prise en charge des coupons pour les produits de domaine
* **Nouveau :** Gestion complète des réglages
* **Nouveau :** Base de code extensible et adaptée aux développeurs
* **Amélioré :** Fournisseur OpenSRS mis à jour avec prise en charge complète des fonctionnalités
* **Amélioré :** UI moderne cohérente avec Ultimate Multisite v2
* **Corrigé :** Tout le code v1 obsolète mis à jour aux standards v2
* **Supprimé :** Compatibilité héritée v1 (changement cassant)

### Versions précédentes (v1 héritée)

### Version 0.0.3 - 20/08/2019

* Corrigé : Incompatibilité avec Groundhogg CRM
* Note : Il s’agissait de la dernière version compatible v1

### Version 0.0.2 - 07/12/2018

* Corrigé : Suppression du champ License Key
* Corrigé : Onglets de plan manquants lorsque le plugin de fonctionnalité est actif
* Amélioré : Ajout d’un bouton ignorer sur le champ d’inscription

### Version 0.0.1 - Version initiale

* Intégration OpenSRS de base pour WP Ultimo v1
* Recherche et enregistrement de domaine simples
* Autorisations de domaine basées sur les plans
