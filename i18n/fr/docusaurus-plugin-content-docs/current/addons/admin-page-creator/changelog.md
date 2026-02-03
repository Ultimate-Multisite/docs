---
title: Journal des modifications du créateur de page d'administration
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Créateur de pages d'administration Journal des modifications

### Version 1.9.0 - Publié le 2026-01-18

* Correction : Erreurs fatales lors de l'activation.
* Refactorisé : Les classes de source de contenu utilisent le trait Singleton avec une initialisation correcte du constructeur parent.
* Correction : Erreurs de compilation du modèle Vue.js empêchant le sélecteur de type de contenu de se rendre.
* Correction : Propriétés de données Vue manquantes (template_id, external_link_url_embedable, external_link_url_checking).
* Correction : L'éditeur TinyMCE ne s'initialise pas correctement au chargement de la page.
* Correction : Le fichier de support Divi ne se charge pas automatiquement via Composer.
* Correction : Syntaxe PHP corrompue dans la classe de support Divi.
* Amélioration : Organisation et minification des ressources JavaScript.
* Amélioration : Compatibilité avec les dernières versions de WordPress et des constructeurs de pages.

### Version 1.8.0 - Publié le 2025-12-10

* Ajout : Les pages personnalisées peuvent désormais remplacer plusieurs pages d'administration WordPress de niveau supérieur et sous-pages en même temps.
* Ajout : Les administrateurs peuvent désormais masquer les pages d'administration en utilisant WP Admin Pages PRO.

### Version 1.7.0 - Publié le 2025-11-05

* Correction : Brizy 1.10.118 et supérieurs cassant le support SVG sur les pages d'administration.
* Correction : Erreur d'échappement cassant la page d'édition lorsqu'on utilise le français.

### Version 1.6.0 - Publié le 2025-10-01

* Correction : Petite incompatibilité avec Brizy Builder.
* Amélioration : SDK Freemius mis à jour vers 2.3.2.

### Version 1.5.0 - Publié le 2025-09-15

* Correction : Bouton d'édition de page d'administration dans le coin inférieur droit ne fonctionne pas sur les widgets du tableau de bord.
* Correction : Petite incompatibilité avec Astra.
* Correction : Nouvelle version de Brizy cassant la compatibilité.

### Version 1.4.0 - Publié le 2025-08-20

* Correction : Ajout d'un gestionnaire de cas limites pour remplir les éléments de menu sur l'option Remplacer la page.
* Correction : Polices Elementor ne fonctionnent pas.
* Amélioration : SDK Freemius mis à jour pour masquer les informations sensibles de la page Compte.

### Version 1.3.0 - Publié le 2025-07-30

* Correction : Incompatibilité avec WooCommerce Memberships.
* Correction : Composant d'onglet Oxygen Builder ne fonctionne pas.
* Correction : Beaver Themer ne fonctionne pas.

### Version 1.2.0 - Publié le 2025-06-25

* Correction : Pages disparaissant lorsque leur parent est converti en un autre type de page d'administration.
* Amélioration : Meilleurs séparateurs de tableau de liste entre les types de page d'administration.
* Amélioration : Revue de sécurité de l'ensemble du code du plugin.
* Amélioration : Note sur l'avertissement de l'onglet Séparateur lorsque la fonction n'est pas disponible pour un type de menu/source de contenu donné.

### Version 1.1.0 - Publié le 2025-05-15

* Correction : Version du SDK Freemius mise à jour vers 2.3.0.
* Correction : Problème d'incompatibilité avec Flywheel.

### Version 1.0.0 - Publié le 2025-04-10

* Correction : Widget de bienvenue désormais affiché à tous les rôles.
* Correction : Option d'écran pour masquer/afficher le menu Pages d'administration n'est pas ajoutée si le menu est masqué via le filtre documenté sur https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/.
* Amélioration : Masquer les menus Pages d'administration masque désormais également les modèles créés à partir de la liste des modèles enregistrés Beaver Builder sur l'interface du constructeur.
* Ajout : Options pour activer et désactiver en masse les pages d'administration.
* Ajout : Option pour afficher les pages sur le site principal également.
* Ajout : Option pour renommer les libellés de menu de niveau supérieur et inférieur en mode Remplacer.

### Version 0.9.0 - Publié le 2025-03-01

* Correction : Problèmes avec les modèles Oxygen non affichés.
* Ajout : Support à la création de widgets !

### Version 0.8.0 - Publié le 2025-02-15

* Correction : Fautes de frappe.
* Correction : Pages de sous-menu écrasant les éléments de sous-menu précédents avec la même valeur d'ordre.
* Correction : Duplication maintenant réinitialise le slug de la page dupliquée.
* Amélioration : Fichiers po pt_BR et es_ES mis à jour.
* Amélioration : Le tableau de liste affiche désormais le nom des pages personnalisées comme pages parentes.

### Version 0.7.0 - Publié le 2025-01-10

* Ajout : Les liens externes prennent désormais en charge le chargement d'iframe.

### Version 0.6.0 - Publié le 2024-12-05

* Correction : Message d'avertissement généré lorsqu'une page était supprimée ou dupliquée.
* Correction : Paramètres de permission non appliqués aux administrateurs.

### Version 0.5.0 - Publié le 2024-11-01

* Correction : Incompatibilités avec Sliced Invoices.
* Correction : Petite erreur avec Oxygen.
* Correction : Le champ de titre de la page d'administration ne se met pas à jour lors de la saisie.

### Version 0.4.0 - Publié le 2024-10-01

* Correction : Incompatibilité avec les pages d'options Advanced Custom Field.
* Ajout : Option pour ajouter des utilisateurs spécifiques comme cibles des pages d'administration personnalisées.

### Version 0.3.0 - Publié le 2024-09-01

* Correction : Incompatibilités avec les nouvelles versions de Brizy.
* Ajout : Traduction espagnole ajoutée - grâce à John Rozzo. Merci, John !
* Ajout : Support bêta pour Oxygen Builder.

### Version 0.2.0 - Publié le 2024-08-01

* Correction : Problèmes de place-holders dans les éditeurs Normal et HTML.
* Correction : Pages d'administration non affichées dans Outils -> Export.
* Correction : Les scripts et styles ne sont chargés que sur nos propres pages.
* Ajout : Les super administrateurs peuvent désormais dupliquer les pages d'administration.

### Version 0.1.0 - Publié le 2024-07-01

* Correction : Petits bugs détectés par Sentry.
* Correction : Bouton de suppression ne fonctionne pas sur l'écran d'édition de la page d'administration.
* Amélioration : Le bouton BeaverBuilder a été modifié pour clarifier que la licence Standard BB est également prise en charge.
* Ajout : Les administrateurs peuvent désormais définir l'ordre des sous-menus.
* Ajout : Le mode de remplacement de page prend désormais en charge tous les éléments de menu disponibles.

### Version 0.0.1 - Version initiale

0.0.1 - Version initiale
