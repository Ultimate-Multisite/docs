---
title: Chèche sou entènèt
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Rechèch Internet {#internet-search}

Gratis AI Agent v1.5.0 ajoute une capacité de **Recherche Internet** qui permet à l'assistant IA de récupérer des informations à jour sur le web pendant une conversation. Cela est alimenté par l'API [Brave Search](https://brave.com/search/api/) ou l'API [Tavily](https://tavily.com/).

## Comment ça marche {#how-it-works}

Quand la recherche Internet est activée, l'assistant peut automatiquement interroger votre fournisseur de recherche configuré lorsqu'il détermine qu'une question nécessite des informations actuelles ou externes — par exemple, les dernières nouvelles, les prix en direct, ou la documentation qui pourrait avoir changé depuis la date limite d'entraînement du modèle.

Les résultats sont récupérés en temps réel et injectés dans le contexte de l'assistant avant qu'il ne génère une réponse. L'assistant indique quand il a utilisé les résultats de recherche pour répondre à une question.

## Activer la Recherche Internet {#enabling-internet-search}

La recherche Internet nécessite une clé API de votre fournisseur de recherche choisi. Pour la configurer :

1. Allez dans **Gratis AI Agent → Settings → Advanced**.
2. Trouvez le menu déroulant **Internet Search Provider** et sélectionnez soit **Brave Search**, soit **Tavily**.
3. Entrez votre clé API dans le champ correspondant. Les liens d'inscription sont affichés à côté de chaque champ.
4. Cliquez sur **Save Settings** (Sauvegarder les paramètres).

Une fois la clé enregistrée, la capacité de Recherche Internet est automatiquement disponible pour l'assistant.

## Brave Search {#brave-search}

### Obtenir une Clé API Brave Search {#obtaining-a-brave-search-api-key}

1. Visitez la [page API Brave Search](https://brave.com/search/api/).
2. Inscrivez-vous à un plan. Un niveau gratuit est disponible avec une limite de requêtes mensuelles.
3. Copiez votre clé API depuis le tableau de bord développeur de Brave Search.
4. Collez-la dans le champ **Brave Search API Key** dans les paramètres de Gratis AI Agent.

### Limites d'utilisation {#usage-limits}

L'utilisation est facturée par Brave Search en fonction du nombre de requêtes effectuées. Chaque réponse d'IA qui déclenche une recherche compte comme une requête. Surveillez votre utilisation dans le [tableau de bord développeur de Brave Search](https://brave.com/search/api/) pour éviter des frais inattendus.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 ajoute **Tavily** comme fournisseur de recherche internet alternatif, offrant des résultats de recherche plus riches et des capacités de recherche avancées.

### Obtenir une clé API Tavily {#obtaining-a-tavily-api-key}

1. Rendez-vous sur la [page API Tavily](https://tavily.com/).
2. Inscrivez-vous pour un compte. Un niveau gratuit est disponible avec une limite de requêtes mensuelles.
3. Copiez votre clé API depuis le tableau de bord Tavily.
4. Collez-la dans le champ **Tavily API Key** des paramètres de Gratis AI Agent.

### Limites d'utilisation {#usage-limits-1}

L'utilisation est facturée par Tavily en fonction du nombre d'appels API effectués. Chaque réponse d'IA qui déclenche une recherche compte comme un appel. Surveillez votre utilisation dans le [tableau de bord Tavily](https://tavily.com/) pour éviter des frais inattendus.

## Désactiver la recherche Internet {#disabling-internet-search}

Supprimez la clé API du champ du fournisseur de recherche actif et enregistrez. La capacité de recherche Internet ne sera plus proposée à l'assistant.

:::note
La recherche Internet ajoute une latence aux réponses car l'assistant doit attendre les résultats de la recherche avant de générer une réponse. Pour les cas d'utilisation sensibles au temps, envisagez si la recherche en temps réel est nécessaire ou si la connaissance intégrée de l'assistant est suffisante.
:::
