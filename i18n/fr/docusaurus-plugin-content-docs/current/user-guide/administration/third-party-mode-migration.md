---
title: Migration en mode tiers
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migration en mode tiers

Superdav AI Agent v1.12.0 modifie la manière dont les capacités tierces sont gérées. **Le mode tiers est désormais réglé par défaut sur « auto »**, ce qui permet une intégration native de l'API Abilities de WordPress sur WordPress 7.0+ sans configuration manuelle.

## Ce qui a changé ?

### Avant v1.12.0

Les capacités tierces nécessitaient une configuration manuelle :

- Vous deviez activer explicitement le « mode tiers »
- Les capacités étaient chargées à partir d'un registre personnalisé
- L'intégration avec l'API Abilities de WordPress était optionnelle
- Le mode hérité était le mode par défaut

### Après v1.12.0

Les capacités tierces fonctionnent automatiquement :

- Le mode tiers est réglé par défaut sur « auto »
- Les capacités s'intègrent nativement à l'API Abilities de WordPress
- Aucune configuration manuelle n'est nécessaire sur WordPress 7.0+
- Le mode hérité reste disponible pour les anciennes versions de WordPress

## Qui est concerné ?

### Nouvelles installations (WordPress 7.0+)

**Aucune action requise.** Le mode tiers est automatiquement réglé sur « auto », et les capacités fonctionnent dès l'installation.

### Installations existantes

**Vos paramètres sont conservés.** Si vous utilisiez :

- **Mode hérité** : Vous restez en mode hérité (aucun changement)
- **Mode tiers manuel** : Vous restez en mode manuel (aucun changement)
- **Mode auto** : Vous continuez avec le mode auto (aucun changement)

### Versions de WordPress antérieures à 7.0

**Le mode hérité est toujours disponible.** Si vous êtes sur WordPress 6.x ou une version antérieure :

- Le mode tiers est réglé par défaut sur « hérité »
- Vous pouvez activer manuellement le mode tiers si vous le souhaitez
- Mettez à niveau vers WordPress 7.0+ pour utiliser l'API Abilities native

## Comprendre les modes

### Mode auto (Nouveau défaut)

**Le mode auto** utilise l'intégration native de l'API Abilities de WordPress :

- Les capacités sont enregistrées via les hooks de WordPress
- Compatibilité totale avec l'API Abilities de WordPress 7.0+
- Découverte automatique des capacités tierces
- Aucune configuration manuelle nécessaire

**Quand l'utiliser** : WordPress 7.0+ avec des capacités tierces

### Mode manuel

**Le mode manuel** nécessite une configuration explicite :

- Vous spécifiez quelles capacités tierces charger
- Utile pour les tests ou le chargement sélectif de capacités
- Nécessite de modifier des fichiers de configuration
- Plus de contrôle, mais plus de configuration

**Quand l'utiliser** : Tests, chargement sélectif de capacités ou configurations personnalisées

### Mode hérité

**Le mode hérité** utilise l'ancien système de capacités tierces :

- Registre de capacités personnalisé (pas l'API Abilities de WordPress)
- Compatible avec les anciennes versions de WordPress
- Aucune intégration native avec WordPress
- Déprécié mais toujours pris en charge

**Quand l'utiliser** : WordPress 6.x ou antérieur, ou lorsque vous avez besoin de compatibilité héritée

## Vérifier votre mode actuel

### Via le panneau d'administration

1. Allez dans **Administration WordPress** → **Superdav AI Agent** → **Paramètres**
2. Recherchez le paramètre **Mode tiers**
3. Vous verrez votre mode actuel et les options pour le modifier

### Via le code

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ou 'legacy'
```

## Changer votre mode

### Passer au mode auto

Si vous êtes sur WordPress 7.0+ et que vous souhaitez utiliser le mode auto :

1. Allez dans **Superdav AI Agent** → **Paramètres**
2. Trouvez **Mode tiers**
3. Sélectionnez **Auto (API Abilities de WordPress)**
4. Cliquez sur **Enregistrer**

Superdav AI Agent découvrira et enregistrera automatiquement les capacités tierces.

### Passer au mode manuel

Si vous souhaitez contrôler manuellement quelles capacités se chargent :

1. Allez dans **Superdav AI Agent** → **Paramètres**
2. Trouvez **Mode tiers**
3. Sélectionnez **Manuel**
4. Cliquez sur **Enregistrer**
5. Modifiez votre fichier de configuration pour spécifier les capacités à charger

### Passer au mode hérité

Si vous avez besoin de compatibilité héritée :

1. Allez dans **Superdav AI Agent** → **Paramètres**
2. Trouvez **Mode tiers**
3. Sélectionnez **Hérité**
4. Cliquez sur **Enregistrer**

## Avantages du mode auto

### Découverte automatique

Les capacités sont automatiquement découvertes à partir de :

- Plugins installés
- Thème actif
- Plugins must-use
- Plugins drop-in

Aucun enregistrement manuel n'est nécessaire.

### Intégration native

Les capacités s'intègrent à l'API Abilities de WordPress :

- Cohérent avec le cœur de WordPress
- Fonctionne avec l'administration WordPress
- Compatible avec d'autres plugins utilisant l'API Abilities
- Pérenne à mesure que WordPress évolue

### Gestion simplifiée

- Aucun fichier de configuration à modifier
- Aucun enregistrement de capacité manuel
- Les contrôles de visibilité des capacités fonctionnent automatiquement
- Les notifications d'administration vous alertent sur les capacités non classifiées

### Meilleures performances

- Les capacités sont mises en cache
- Chargées paresseusement (lazy-loaded) selon les besoins
- Optimisé pour WordPress 7.0+

## Parcours de migration

### Si vous êtes sur WordPress 6.x

1. **Mettez à niveau vers WordPress 7.0+** (lorsque vous êtes prêt)
2. **Mettez à jour Superdav AI Agent** à v1.12.0+
3. **Changez le mode tiers en Auto** (facultatif ; le mode hérité fonctionne toujours)
4. **Vérifiez la visibilité des capacités** pour garantir des contrôles d'accès appropriés

### Si vous êtes sur WordPress 7.0+

1. **Mettez à jour Superdav AI Agent** à v1.12.0+
2. **Vérifiez que le mode tiers est réglé sur Auto** (il devrait l'être par défaut)
3. **Vérifiez la visibilité des capacités** pour garantir des contrôles d'accès appropriés
4. **Testez les capacités tierces** pour confirmer qu'elles fonctionnent

## Dépannage

### Les capacités ne se chargent pas en mode auto

- Vérifiez que vous êtes sur WordPress 7.0+
- Assurez-vous que le mode tiers est réglé sur « Auto »
- Vérifiez que le plugin fournissant la capacité est actif
- Consultez les journaux d'erreurs de WordPress pour les erreurs d'enregistrement

### Je veux conserver le mode hérité

- Allez dans **Paramètres** → **Mode tiers**
- Sélectionnez **Hérité**
- Cliquez sur **Enregistrer**
- Le mode hérité continuera de fonctionner

### Mes capacités personnalisées n'apparaissent pas

- Vérifiez qu'elles sont enregistrées via les hooks de WordPress
- Assurez-vous qu'elles implémentent correctement l'API Abilities
- Consultez les journaux d'erreurs de WordPress
- Utilisez la page d'administration **Visibilité des capacités** pour voir toutes les capacités enregistrées

### Je reçois des notifications de « capacité non classifiée »

- C'est normal pour les nouvelles capacités tierces
- Revoyez-les et classez-les dans la notification d'administration
- Consultez **Visibilité des capacités** pour plus de détails sur la classification

## Compatibilité ascendante

### Configurations existantes

Si vous avez des configurations de capacités tierces existantes :

- **Mode hérité** : Votre configuration continue de fonctionner
- **Mode manuel** : Votre configuration continue de fonctionner
- **Mode auto** : Votre configuration est ignorée (le mode auto prend le dessus)

Pour conserver votre configuration personnalisée, restez en mode Manuel ou Hérité.

### Calendrier de dépréciation

- **v1.12.0** : Les modes Hérité et Manuel sont toujours entièrement pris en charge
- **v1.13.0+** : Le mode Hérité pourrait afficher des notifications de dépréciation
- **v2.0.0** : Le mode Hérité pourrait être supprimé (à déterminer)

## Bonnes pratiques

### Pour les nouvelles installations

- Utilisez le mode auto (c'est le défaut)
- Laissez Superdav AI Agent découvrir les capacités automatiquement
- Utilisez Visibilité des capacités pour contrôler l'accès

### Pour les installations existantes

- Mettez à niveau vers WordPress 7.0+ dès que possible
- Passez au mode auto pour une gestion simplifiée
- Revoyez et classez les capacités à l'aide de Visibilité des capacités

### Pour les capacités personnalisées

- Enregistrez les capacités via les hooks de WordPress (API Abilities)
- Évitez les registres de capacités personnalisés
- Testez sur WordPress 7.0+ avec le mode auto

## Prochaines étapes

1. **Vérifiez votre version de WordPress** : Assurez-vous d'être sur 7.0+ pour le mode auto
2. **Vérifiez votre mode tiers** : Allez dans Paramètres et vérifiez votre mode actuel
3. **Mettez à jour si nécessaire** : Passez au mode auto si vous êtes sur WordPress 7.0+
4. **Classez les capacités** : Revoyez et classez toutes les capacités non classifiées
5. **Testez** : Vérifiez que vos capacités tierces fonctionnent correctement

## Sujets connexes

- **Visibilité des capacités** : Contrôler quelles capacités sont exposées où
- **API Abilities de WordPress** : Apprendre l'enregistrement natif des capacités WordPress
- **Développement de capacités tierces** : Créer des capacités fonctionnant avec le mode auto
