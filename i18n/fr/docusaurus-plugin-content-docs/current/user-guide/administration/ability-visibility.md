---
title: Visibilité des capacités
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilité des capacités

Superdav AI Agent v1.12.0 introduit les contrôles de **Visibilité des capacités** (*Ability Visibility*) qui déterminent quelles interfaces exposent chaque capacité. Cela permet aux administrateurs d'affiner les capacités de l'agent disponibles via les API REST, les serveurs MCP, les intégrations WooCommerce et autres interfaces.

## Qu'est-ce que la Visibilité des capacités ?

La Visibilité des capacités est un système de permission qui contrôle :

- **Quelles capacités** sont disponibles pour les agents
- **Où elles sont exposées** (API REST, MCP, WooCommerce, etc.)
- **Qui peut y accéder** (via les listes d'autorisation des partenaires)
- **Comment elles sont classifiées** (reconnues ou non classifiées)

Chaque capacité possède un niveau de visibilité qui détermine sa disponibilité sur différentes interfaces.

## Niveaux de visibilité

### Public

Les **capacités publiques** sont disponibles partout :

- Points de terminaison de l'API REST
- Serveurs MCP
- Intégrations WooCommerce
- Interfaces de chat
- Tous les rôles d'utilisateurs (avec les permissions appropriées)

Exemple : `scaffold-block-theme`, `activate-theme`, `send-email`

### Interne

Les **capacités internes** ne sont disponibles que dans votre installation WordPress :

- Interfaces de chat
- Panneaux d'administration
- Utilisateurs connectés uniquement
- Non exposées via l'API REST ou les intégrations externes

Exemple : `manage-settings`, `view-analytics`, `export-data`

### Partenaire

Les **capacités partenaires** ne sont disponibles que pour les partenaires mis sur liste blanche :

- Nécessite une entrée explicite dans la liste d'autorisation des partenaires
- Disponible via l'API REST avec les identifiants du partenaire
- Disponible via MCP avec l'authentification du partenaire
- Non disponible pour les utilisateurs réguliers

Exemple : `bulk-import-users`, `modify-billing`, `access-analytics`

### Désactivé

Les **capacités désactivées** ne sont disponibles nulle part :

- Non exposées via aucune interface
- Non disponibles dans le chat
- Non disponibles dans les panneaux d'administration
- Utile pour les capacités obsolètes ou expérimentales

## Gestion de la visibilité des capacités

### Accéder aux paramètres de visibilité des capacités

1. Allez dans **Administration WordPress** → **Superdav AI Agent** → **Paramètres**
2. Cliquez sur l'onglet **Capacités** (*Abilities*)
3. Vous verrez une liste de toutes les capacités installées avec leurs niveaux de visibilité

### Visualiser les détails d'une capacité

Cliquez sur une capacité pour voir :

- **Nom** (*Name*) : L'identifiant de la capacité
- **Description** (*Description*) : Ce que fait la capacité
- **Visibilité actuelle** (*Current visibility*) : Public, Interne, Partenaire ou Désactivé
- **Liste d'autorisation des partenaires** (*Partner allow-list*) : Quels partenaires peuvent y accéder (si visibilité Partenaire)
- **Dernière mise à jour** (*Last updated*) : Quand la visibilité a été modifiée pour la dernière fois
- **Statut** (*Status*) : Reconnue ou Non classifiée

### Modifier les niveaux de visibilité

Pour modifier la visibilité d'une capacité :

1. Cliquez sur la capacité dans la liste
2. Sélectionnez un nouveau niveau de visibilité dans le menu déroulant
3. Si vous sélectionnez "Partenaire", ajoutez les identifiants des partenaires à la liste d'autorisation
4. Cliquez sur **Enregistrer** (*Save*)

Exemple :

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Opérations en masse

Pour modifier la visibilité de plusieurs capacités :

1. Cochez les cases à côté des capacités
2. Sélectionnez un nouveau niveau de visibilité dans le menu déroulant des actions en masse
3. Cliquez sur **Appliquer** (*Apply*)

## Liste d'autorisation des partenaires

La **liste d'autorisation des partenaires** (*partner allow-list*) contrôle quels partenaires externes peuvent accéder aux capacités de niveau Partenaire.

### Ajouter des partenaires

1. Allez dans **Superdav AI Agent** → **Paramètres** → **Partenaires**
2. Cliquez sur **Ajouter un partenaire** (*Add Partner*)
3. Entrez l'identifiant du partenaire (généralement une clé API ou un ID d'organisation)
4. Ajoutez optionnellement un nom et une description du partenaire
5. Cliquez sur **Enregistrer** (*Save*)

### Attribuer des capacités aux partenaires

Après avoir ajouté un partenaire :

1. Allez dans l'onglet **Capacités** (*Abilities*)
2. Trouvez une capacité avec visibilité Partenaire
3. Cliquez pour modifier
4. Dans la section "Liste d'autorisation des partenaires", cochez les cases des partenaires qui doivent y avoir accès
5. Cliquez sur **Enregistrer** (*Save*)

### Révoquer l'accès des partenaires

Pour supprimer l'accès d'un partenaire :

1. Modifiez la capacité
2. Décochez la case du partenaire dans la liste d'autorisation
3. Cliquez sur **Enregistrer** (*Save*)

Le partenaire perdra immédiatement l'accès à cette capacité.

## Capacités non classifiées

Lorsque vous installez une capacité tierce que Superdav AI Agent ne reconnaît pas, elle est marquée comme **Non classifiée** (*Unclassified*).

### Notification d'administration pour les capacités non classifiées

Vous verrez une notification d'administration :

```
⚠️ Capacités non classifiées détectées

Les capacités suivantes ont été installées mais ne sont pas reconnues :
- custom-import-tool
- external-api-wrapper

Ces capacités peuvent présenter des risques de sécurité ou de compatibilité.
Veuillez les examiner et les classifier.

[Examiner les capacités] [Ignorer]
```

### Examiner les capacités non classifiées

1. Cliquez sur **Examiner les capacités** (*Review Abilities*) dans la notification
2. Pour chaque capacité non classifiée, vous verrez :
   - Nom et description de la capacité
   - Source (quel plugin/addon l'a installé)
   - Niveau de visibilité suggéré
   - Évaluation de sécurité

3. Choisissez un niveau de visibilité :
   - **Public** : Faites confiance à la capacité ; exposez-la partout
   - **Interne** : Restreignez à un usage interne uniquement
   - **Partenaire** : Restreignez à des partenaires spécifiques
   - **Désactivé** : N'utilisez pas cette capacité

4. Cliquez sur **Classifier** (*Classify*) pour enregistrer votre décision

### Pourquoi classifier les capacités non classifiées ?

Classifier les capacités :

- **Améliore la sécurité** : Vous approuvez explicitement ce qui est exposé
- **Prévient les accidents** : Les capacités non classifiées sont désactivées par défaut
- **Active des fonctionnalités** : Une fois classifiée, la capacité devient disponible
- **Documente les décisions** : Vos choix sont enregistrés à des fins d'audit

## Visibilité dans différentes interfaces

### API REST

Les **capacités publiques** sont disponibles via les points de terminaison REST :

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Les **capacités internes et partenaires** ne sont pas disponibles via l'API REST.

### Serveurs MCP

Les **capacités publiques** sont disponibles via MCP :

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

Les **capacités internes** ne sont pas exposées via MCP.

**Les capacités partenaires** ne sont disponibles qu'avec les identifiants du partenaire.

### Intégration WooCommerce

Les **capacités publiques** liées à WooCommerce sont disponibles :

- Gestion des produits
- Traitement des commandes
- Communication client

Les **capacités internes** ne sont pas exposées à WooCommerce.

### Interface de chat

**Toutes les capacités** (Publiques, Internes, Partenaires) sont disponibles dans le chat, selon les permissions de l'utilisateur :

- Les administrateurs voient toutes les capacités
- Les utilisateurs réguliers ne voient que les capacités Publiques
- Les partenaires voient les capacités Publiques + Partenaires (si mis sur liste blanche)

## Bonnes pratiques de sécurité

### Principe du moindre privilège

- Définissez les capacités avec le niveau de visibilité le plus restrictif qui permet toujours leur utilisation
- Utilisez la visibilité Partenaire pour les opérations sensibles
- Désactivez les capacités que vous n'utilisez pas

### Audits réguliers

- Examinez la visibilité des capacités chaque mois
- Vérifiez les capacités non classifiées
- Supprimez l'accès pour les partenaires inutilisés

### Journalisation et surveillance

- Surveillez quelles capacités sont les plus utilisées
- Suivez les modèles d'accès des partenaires
- Alertez en cas d'utilisation inhabituelle des capacités

### Capacités tierces

- Examinez les capacités tierces avant de les activer
- Classifiez-les explicitement
- Commencez avec une visibilité Interne ou Partenaire
- Ne pas promouvoir en Public qu'après vérification

## Dépannage

**Une capacité n'apparaît pas dans la liste**
- Vérifiez que la capacité est installée et active
- Assurez-vous que le plugin/addon est activé
- Actualisez la page

**Je ne peux pas changer la visibilité d'une capacité**
- Vérifiez que vous disposez des permissions d'administrateur
- Vérifiez que la capacité n'est pas verrouillée par un plugin
- Essayez de désactiver les plugins conflictuels

**Un partenaire ne peut pas accéder à une capacité**
- Vérifiez que le partenaire est dans la liste d'autorisation
- Vérifiez que la visibilité de la capacité est définie sur Partenaire
- Confirmez que les identifiants du partenaire sont corrects
- Vérifiez les journaux API pour les erreurs d'authentification

**Les capacités non classifiées continuent d'apparaître**
- Examinez-les et classifiez-les dans la notification d'administration
- Vérifiez que votre classification a été enregistrée
- Vérifiez que le plugin fournissant la capacité est à jour

## Migration du mode hérité

Si vous effectuez une mise à niveau d'une ancienne version de Superdav AI Agent :

- Toutes les capacités existantes sont automatiquement classifiées comme Publiques
- Examinez et ajustez la visibilité si nécessaire
- Aucune action n'est requise, sauf si vous souhaitez restreindre l'accès

Consultez **Migration du mode tiers** (*Third-Party Mode Migration*) pour plus de détails sur la transition vers l'intégration native de l'API des capacités.

## Prochaines étapes

Après avoir configuré la visibilité des capacités :

1. **Examiner vos capacités** : Auditez toutes les capacités installées
2. **Classifier les capacités non classifiées** : Répondez aux notifications d'administration
3. **Configurer les partenaires** : Ajoutez des partenaires si vous utilisez la visibilité Partenaire
4. **Surveiller l'utilisation** : Suivez les capacités les plus utilisées
5. **Documenter les décisions** : Conservez des notes sur les raisons pour lesquelles vous avez choisi chaque niveau de visibilité
