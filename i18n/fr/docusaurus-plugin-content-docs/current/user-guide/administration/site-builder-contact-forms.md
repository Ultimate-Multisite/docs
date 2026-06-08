---
title: Formulaires de contact du constructeur de sites
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formulaires de contact du Site Builder

Superdav AI Agent v1.10.0 ajoute la possibilité de créer des formulaires de contact directement depuis l'interface de chat en utilisant l'agent Site Builder. Cela vous permet d'ajouter des formulaires de contact entièrement fonctionnels à n'importe quelle page sans quitter le chat.

## Aperçu

La fonctionnalité de formulaire de contact du Site Builder (`create_contact_form`) détecte automatiquement le plugin de formulaire que vous avez installé et crée un formulaire de contact en utilisant les capacités natives de ce plugin. Les plugins de formulaire pris en charge comprennent :

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

L'assistant sélectionne automatiquement le meilleur plugin de formulaire disponible sur votre site et génère un formulaire de contact adapté à ce plugin.

## Créer un formulaire de contact

Pour créer un formulaire de contact à l'aide du Site Builder :

1. Ouvrez le panneau de chat **Gratis AI Agent** dans l'administration WordPress.
2. Basculez vers l'agent **Site Builder** en cliquant sur l'icône de l'agent dans l'en-tête du chat.
3. Décrivez le formulaire de contact que vous souhaitez créer. Par exemple :

   > "Ajouter un formulaire de contact à la page Contact avec des champs pour le nom, l'email, le message et le numéro de téléphone."

   Ou simplement :

   > "Créer un formulaire de contact pour la page Contact."

4. Le Site Builder générera le formulaire de contact et vous retournera un shortcode prêt à être intégré.

## Utiliser le shortcode généré

Une fois que le Site Builder a créé le formulaire de contact, il vous retourne un shortcode (par exemple, `[contact-form-7 id="123"]`). Vous pouvez :

1. **L'intégrer dans une page ou un article** — Copiez le shortcode et collez-le dans n'importe quelle page ou article en utilisant l'éditeur de blocs ou l'éditeur classique.
2. **L'ajouter via le Site Builder** — Demandez au Site Builder d'ajouter le formulaire à une page spécifique automatiquement :

   > "Ajouter le formulaire de contact à la page Contact."

3. **L'utiliser dans un modèle** — Si vous êtes à l'aise avec PHP, vous pouvez ajouter le shortcode à un fichier de modèle de thème.

## Personnaliser le formulaire de contact

Après que le Site Builder ait créé le formulaire de contact, vous pouvez le personnaliser davantage :

### Via l'interface de chat

Demandez au Site Builder de modifier le formulaire :

> "Mettre à jour le formulaire de contact pour ajouter un champ objet et rendre le champ message obligatoire."

Le Site Builder mettra à jour le formulaire et vous retournera le shortcode mis à jour.

### Via l'interface d'administration du plugin de formulaire

Vous pouvez également personnaliser le formulaire directement dans les paramètres de votre plugin de formulaire :

1. Allez dans **Contact Form 7** (ou votre plugin de formulaire installé) dans l'administration WordPress.
2. Trouvez le formulaire créé par le Site Builder.
3. Modifiez les champs du formulaire, les règles de validation et les notifications par email selon vos besoins.

## Plugins de formulaire et compatibilité

Le Site Builder détecte automatiquement quel plugin de formulaire est installé sur votre site et l'utilise pour créer le formulaire de contact. Si plusieurs plugins de formulaire sont installés, le Site Builder les priorise dans cet ordre :

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Si aucun de ces plugins n'est installé, le Site Builder recommandera d'en installer un avant de créer le formulaire de contact.

## Notifications par email

Les formulaires de contact créés par le Site Builder sont configurés par défaut pour envoyer des notifications par email à l'administrateur du site. Vous pouvez personnaliser l'adresse email du destinataire et le message de notification :

1. Allez dans l'interface d'administration de votre plugin de formulaire.
2. Trouvez le formulaire créé par le Site Builder.
3. Modifiez les paramètres de notification par email.

Pour des instructions détaillées, veuillez consulter la documentation de votre plugin de formulaire :

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Cas d'utilisation exemples

### Formulaire de contact simple

> "Créer un formulaire de contact simple avec des champs nom, email et message."

### Formulaire multi-étapes

> "Créer un formulaire de contact avec une première étape pour les informations de contact et une deuxième étape pour le message et la méthode de contact préférée."

### Formulaire avec logique conditionnelle

> "Créer un formulaire de contact qui affiche différents champs en fonction de la sélection de l'utilisateur dans un menu déroulant."

### Formulaire avec téléversement de fichiers

> "Créer un formulaire de contact qui permet aux utilisateurs de téléverser un fichier ou une pièce jointe."

:::note
La création de formulaires de contact est disponible dans Superdav AI Agent v1.10.0 et versions ultérieures. L'agent Site Builder doit être actif pour utiliser cette fonctionnalité.
:::
