---
title: Recherche Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Recherche Internet

Gratis AI Agent v1.5.0 ajoute une capacité de **Recherche Internet** qui permet à l'assistant IA de récupérer des informations actualisées sur le web pendant une conversation. Cette fonctionnalité est alimentée par l'API [Brave Search](https://brave.com/search/api/) ou l'API [Tavily](https://tavily.com/).

## Comment ça fonctionne

Lorsque la recherche Internet est activée, l'assistant peut interroger automatiquement votre fournisseur de recherche configuré lorsqu'il détermine qu'une question nécessite des informations actuelles ou externes — par exemple, des nouvelles récentes, des prix en temps réel ou une documentation qui aurait pu changer depuis la date de coupure de formation du modèle.

Les résultats sont récupérés en temps réel et injectés dans le contexte de l'assistant avant qu'il ne génère une réponse. L'assistant indique qu'il a utilisé des résultats de recherche pour répondre à une question.

## Activer la Recherche Internet

La recherche Internet nécessite une clé API de votre fournisseur de recherche choisi. Pour la configurer :

1. Allez dans **Gratis AI Agent → Settings → Advanced**.
2. Localisez le menu déroulant **Internet Search Provider** et sélectionnez soit **Brave Search**, soit **Tavily**.
3. Entrez votre clé API dans le champ correspondant. Des liens d'inscription sont affichés à côté de chaque champ.
4. Cliquez sur **Save Settings**.

Une fois la clé enregistrée, la capacité de Recherche Internet est automatiquement disponible pour l'assistant.

## Brave Search

### Obtenir une clé API Brave Search

1. Visitez la [page Brave Search API](https://brave.com/search/api/).
2. Inscrivez-vous à un forfait. Un niveau gratuit est disponible avec une limite de requêtes mensuelle.
3. Copiez votre clé API depuis le tableau de bord développeur de Brave Search.
4. Collez-la dans le champ **Brave Search API Key** des paramètres de Gratis AI Agent.

### Limites d'utilisation

L'utilisation est facturée par Brave Search en fonction du nombre de requêtes effectuées. Chaque réponse IA qui déclenche une recherche compte comme une requête. Surveillez votre utilisation sur le [tableau de bord développeur Brave Search](https://brave.com/search/api/) pour éviter des frais inattendus.

## Tavily

Superdav AI Agent v1.10.0 ajoute **Tavily** comme fournisseur de recherche Internet alternatif, offrant des résultats de recherche plus riches et des capacités de recherche avancées.

### Obtenir une clé API Tavily

1. Visitez la [page Tavily API](https://tavily.com/).
2. Créez un compte. Un niveau gratuit est disponible avec une limite de requêtes mensuelle.
3. Copiez votre clé API depuis le tableau de bord Tavily.
4. Collez-la dans le champ **Tavily API Key** des paramètres de Gratis AI Agent.

### Limites d'utilisation

L'utilisation est facturée par Tavily en fonction du nombre d'appels API effectués. Chaque réponse IA qui déclenche une recherche compte comme un appel. Surveillez votre utilisation sur le [tableau de bord Tavily](https://tavily.com/) pour éviter des frais inattendus.

## Désactiver la Recherche Internet

Supprimez la clé API du champ du fournisseur de recherche actif et enregistrez. La capacité de Recherche Internet ne sera plus proposée à l'assistant.

:::note
La recherche Internet ajoute une latence aux réponses car l'assistant doit attendre les résultats de recherche avant de générer une réponse. Pour les cas d'utilisation sensibles au temps, envisagez si une recherche en temps réel est nécessaire ou si la connaissance intégrée de l'assistant est suffisante.
:::
