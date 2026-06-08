---
title: 'Leçon 3 : Configurer votre réseau'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Leçon 3 : Configuration de votre réseau

Il est temps de construire. Dans cette leçon, vous allez installer Ultimate Multisite et configurer les fondations du réseau FitSite. Chaque décision prise ici est pensée pour la niche du fitness.

## Où nous nous étions arrêtés

Nous avons choisi les studios de fitness comme niche et validé l'opportunité. Maintenant, nous transformons cette idée en une plateforme fonctionnelle.

## Choisir votre hébergement

Votre choix d'hébergement est plus important pour une plateforme de niche que pour un site web unique. Vous n'hébergez pas un seul site ; vous hébergez un réseau qui pourrait atteindre des dizaines, voire des centaines de sites.

### Ce qu'il faut rechercher

- **Prise en charge de WordPress Multisite** : Tous les hébergeurs ne gèrent pas bien le multisite.
- **SSL avec caractère générique (Wildcard SSL)** : Essentiel pour les réseaux basés sur des sous-domaines.
- **Ressources évolutives** : Vous avez besoin de marge de manœuvre pour grandir sans avoir à migrer.
- **Intégration Ultimate Multisite** : Le mappage de domaine et l'automatisation du SSL vous font gagner un temps opérationnel considérable.

### Approche recommandée

Choisissez un hébergeur dans la liste des [Fournisseurs compatibles](/user-guide/host-integrations/closte). Ils ont été testés avec Ultimate Multisite et offrent les intégrations nécessaires pour le mappage de domaine et l'automatisation du SSL.

Pour FitSite, nous allons utiliser une configuration de sous-domaine. Cela signifie que les sites clients apparaîtront initialement sous la forme `nomdusite.fitsite.com` avant qu'ils ne mappent optionnellement leur propre domaine.

## Installation de WordPress Multisite

Si vous n'avez pas encore d'installation WordPress Multisite :

1. Installez WordPress auprès de votre fournisseur d'hébergement.
2. Suivez le guide [Comment installer WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).
3. Choisissez la configuration **sous-domaine** lorsque vous y êtes invité.

:::tip Pourquoi les sous-domaines ?
Les sous-domaines donnent à chaque site client son propre adresse distincte (`studio.fitsite.com`) plutôt qu'un chemin (`fitsite.com/studio`). C'est plus professionnel pour vos clients et cela évite les conflits de permaliens. Consultez [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) pour une comparaison détaillée.
:::

## Installation d'Ultimate Multisite

Suivez le guide [Installer Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) pour :

1. Télécharger et activer le plugin à l'échelle du réseau.
2. Exécuter l'[Assistant de configuration](/user-guide/getting-started/multisite-setup-wizard).

Pendant l'assistant de configuration, gardez à l'esprit la niche FitSite :

- **Devise (Currency)** : Définissez la devise utilisée par vos clients studios de fitness.
- **Nom de l'entreprise (Company name)** : "FitSite" (ou le nom de marque que vous avez choisi).
- **Logo de l'entreprise (Company logo)** : Téléchargez votre logo de marque — il apparaîtra sur les factures et les e-mails.

## Configuration pour la niche fitness

Une fois Ultimate Multisite installé, effectuez ces choix de configuration spécifiques à la niche :

### Paramètres généraux

Accédez à **Ultimate Multisite > Settings** et configurez :

- **Nom du site (Site name)** : FitSite
- **Rôle par défaut (Default role)** : Administrateur — les propriétaires de studios de fitness ont besoin d'un contrôle total sur le contenu de leur site.
- **Inscription (Registration)** : Activez l'inscription des utilisateurs afin que les propriétaires de studios puissent s'inscrire eux-mêmes.

### Configuration des e-mails

Les e-mails de votre système doivent parler le langage de votre niche. Accédez à **Ultimate Multisite > Settings > Emails** et personnalisez :

- Remplacez le langage générique "votre nouveau site" par des messages spécifiques au fitness.
- Exemple d'objet de bienvenue : "Votre site web de studio de fitness est prêt"
- Exemple de corps de bienvenue : Faites référence à leur studio, à leurs cours et aux premières étapes de leur site de fitness.

Nous affinerons cela dans la Leçon 8 (Intégration client), mais définir le ton dès maintenant garantit que même les premières inscriptions de test semblent spécifiques à la niche.

### Configuration des domaines

Si vous utilisez un hébergeur compatible, configurez le mappage de domaine dès maintenant :

1. Accédez à **Ultimate Multisite > Settings > Domain Mapping**.
2. Suivez le guide d'intégration pour votre hébergeur spécifique.
3. Testez que les nouveaux sous-sites obtiennent automatiquement un SSL.

Cela garantit que lorsque nous commencerons à créer des modèles et des sites de test dans la prochaine leçon, tout fonctionnera de bout en bout.

## Le réseau FitSite jusqu'à présent

À la fin de cette leçon, voici ce que vous avez :

```
Réseau FitSite
├── WordPress Multisite (mode sous-domaine)
├── Ultimate Multisite (installé et configuré)
├── Hébergement avec SSL avec caractère générique
├── Mappage de domaine configuré
├── Modèles d'e-mails spécifiques à la niche (initial)
└── Prêt pour les modèles de sites (prochaine leçon)
```

## Ce que nous avons construit cette leçon

- **Une installation WordPress Multisite fonctionnelle** en mode sous-domaine.
- **Ultimate Multisite installé** et configuré avec l'identité de marque FitSite.
- **Hébergement et SSL** configurés pour un réseau en croissance.
- **Mappage de domaine** configuré pour votre fournisseur d'hébergement.
- **Ton d'e-mail spécifique à la niche** établi dès le premier jour.

---

**Suivant :** [Leçon 4 : Création de modèles de niche](lesson-4-templates) — nous allons créer des modèles de sites que les propriétaires de studios de fitness voudront réellement utiliser.
