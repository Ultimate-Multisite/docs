---
title: Mise en cache de prompts sensible au fournisseur
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Mise en cache de prompts sensible au fournisseur {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 introduit la **mise en cache de prompts sensible au fournisseur** (*provider-aware prompt caching*), ce qui optimise les coûts et la latence de l'API en mettant en cache les prompts à travers différents fournisseurs de LLM. Chaque fournisseur dispose de mécanismes et de configurations de mise en cache différents.

## Vue d'ensemble {#overview}

La mise en cache de prompts vous permet de :

- Mettre en cache de grands prompts fréquemment utilisés
- Réduire les coûts de l'API en évitant les traitements redondants
- Améliorer la latence pour les requêtes mises en cache
- Gérer le cycle de vie du cache explicitement

Les différents fournisseurs implémentent la mise en cache différemment :

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Mise en cache de prompts avec TTL
- **OpenRouter**: Mise en cache spécifique au fournisseur
- **Vertex Anthropic**: Mise en cache de prompts avec contrôle de cache

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini fournit une gestion explicite du cache via l'API `cachedContents`.

### Configuration {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 heure en secondes
        'max_tokens' => 1000000, // Tokens maximum à mettre en cache
    ],
];
```

### Créer un prompt mis en cache {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'You are a helpful assistant...',
        'context' => 'Large context document...',
        'ttl' => 3600,
    ]
);

// Returns: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Utiliser un prompt mis en cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cycle de vie du cache {#cache-lifecycle}

```php
// Lister les contenus mis en cache
$caches = $gemini->list_cached_contents();

// Obtenir les détails du cache
$cache = $gemini->get_cached_content( 'abc123' );

// Étendre le TTL du cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Étendre à 2 heures
);

// Supprimer le cache
$gemini->delete_cached_content( 'abc123' );
```

### Bonnes pratiques pour Gemini {#best-practices-for-gemini}

- **Définir un TTL approprié** : Équilibrer l'économie de coûts et l'obsolescence du cache
- **Mettre en cache les prompts système** : Réutiliser le même prompt système pour les requêtes
- **Surveiller l'utilisation du cache** : Suivre les caches les plus utilisés
- **Nettoyer les caches expirés** : Supprimer périodiquement les caches inutilisés

## Azure OpenAI: Mise en cache de prompts {#azure-openai-prompt-caching}

Azure OpenAI prend en charge la mise en cache de prompts avec une gestion automatique du TTL.

### Configuration {#configuration-1}

```php
$config = [
    'provider' => 'azure-openai',
    'model' => 'gpt-4-turbo',
    'api_version' => '2024-08-01-preview',
    'caching' => [
        'enabled' => true,
        'cache_control' => 'max_age=3600',
    ],
];
```

### Activer la mise en cache {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'You are a helpful assistant...',
        'context' => 'Large context document...',
        'prompt' => 'User question here',
        'cache_control' => 'max_age=3600',
    ]
);

// La réponse inclut l'utilisation du cache :
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### En-têtes de cache {#cache-headers}

Azure OpenAI utilise des en-têtes HTTP pour le contrôle du cache :

```
Cache-Control: max_age=3600
```

Valeurs supportées :

- `max_age=<secondes>`: Mettre en cache pour la durée spécifiée
- `no_cache`: Ne pas mettre en cache cette requête
- `no_store`: Ne pas mettre en cache et ne pas réutiliser

### Surveiller l'utilisation du cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Création de cache : $cache_tokens tokens\n";
echo "Hits de cache : $cache_hits tokens\n";
```

### Bonnes pratiques pour Azure OpenAI {#best-practices-for-azure-openai}

- **Utiliser des prompts cohérents** : Les prompts identiques bénéficient de la mise en cache
- **Définir un TTL raisonnable** : Équilibrer le coût et la fraîcheur
- **Surveiller les métriques de cache** : Suivre la création par rapport aux hits
- **Traiter les requêtes par lots** : Grouper les requêtes pour maximiser les hits de cache

## OpenRouter: Mise en cache spécifique au fournisseur {#openrouter-provider-specific-caching}

OpenRouter prend en charge la mise en cache via les fournisseurs sous-jacents (OpenAI, Anthropic, etc.).

### Configuration {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Utiliser le cache d'OpenAI
    ],
];
```

### Utiliser la mise en cache OpenRouter {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'You are a helpful assistant...',
        'context' => 'Large context document...',
        'prompt' => 'User question here',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Options spécifiques au fournisseur {#provider-specific-options}

Les différents fournisseurs ont des mécanismes de mise en cache différents :

```php
// Mise en cache compatible OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Mise en cache compatible Anthropic
$response = $router->generate(
    [
        'model' => 'anthropic/claude-3-opus',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);
```

### Bonnes pratiques pour OpenRouter {#best-practices-for-openrouter}

- **Connaître le cache de votre fournisseur** : Chaque fournisseur a des mécanismes différents
- **Tester le comportement de mise en cache** : Vérifier que la mise en cache fonctionne avec le fournisseur choisi
- **Surveiller les coûts** : Suivre les économies réalisées grâce au cache
- **Utiliser des modèles cohérents** : Changer de modèle annule les hits de cache

## Vertex Anthropic: Mise en cache de prompts avec contrôle de cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) prend en charge la mise en cache de prompts avec un contrôle de cache explicite.

### Configuration {#configuration-3}

```php
$config = [
    'provider' => 'vertex-anthropic',
    'model' => 'claude-3-opus',
    'project_id' => 'your-gcp-project',
    'region' => 'us-central1',
    'caching' => [
        'enabled' => true,
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ],
];
```

### Utiliser la mise en cache Vertex Anthropic {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'You are a helpful assistant...',
        'context' => 'Large context document...',
        'prompt' => 'User question here',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// La réponse inclut les métriques de cache :
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Types de contrôle de cache {#cache-control-types}

- **ephemeral** : Cache pour la durée de la requête (par défaut)
- **persistent** : Cache sur plusieurs requêtes (si pris en charge)

### Surveiller l'utilisation du cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache créé : $cache_created tokens\n";
echo "Cache lu : $cache_read tokens\n";
```

### Bonnes pratiques pour Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Utiliser le cache éphémère** : Idéal pour la mise en cache de session unique
- **Définir max_tokens de manière appropriée** : Équilibrer la taille du cache et le coût
- **Surveiller les métriques de cache** : Suivre l'efficacité du cache
- **Tester avec votre charge de travail** : Vérifier que la mise en cache bénéficie à votre cas d'utilisation

## Stratégie de mise en cache inter-fournisseurs {#cross-provider-caching-strategy}

### Configuration unifiée {#unified-configuration}

```php
$config = [
    'caching' => [
        'enabled' => true,
        'default_ttl' => 3600,
        'providers' => [
            'google-gemini' => [
                'ttl' => 3600,
                'max_tokens' => 1000000,
            ],
            'azure-openai' => [
                'cache_control' => 'max_age=3600',
            ],
            'vertex-anthropic' => [
                'cache_control' => [
                    'type' => 'ephemeral',
                    'max_tokens' => 1000000,
                ],
            ],
        ],
    ],
];
```

### Détection du fournisseur {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Utiliser la configuration de mise en cache spécifique au fournisseur
```

### Stratégie de repli (Fallback) {#fallback-strategy}

```php
try {
    // Essayer de mettre en cache avec le fournisseur principal
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Revenir à une requête non mise en cache
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optimisation des coûts {#cost-optimization}

### Calcul des économies {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Tarification typique (varie selon le fournisseur) :
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x moins cher
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x moins cher
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Économies estimées : \$$savings\n";
```

### Conseils d'optimisation {#optimization-tips}

- **Mettre en cache les prompts système volumineux** : Les plus grandes économies de coûts
- **Réutiliser le contexte** : Mettre en cache les documents de contexte fréquemment utilisés
- **Traiter les requêtes par lots** : Grouper les requêtes similaires pour maximiser les hits de cache
- **Surveiller l'efficacité du cache** : Suivre les économies réelles
- **Ajuster le TTL** : Équilibrer le coût et la fraîcheur

## Dépannage {#troubleshooting}

### Le cache n'est pas utilisé {#cache-not-being-used}

- Vérifier que la mise en cache est activée dans la configuration
- S'assurer que les prompts sont identiques (la mise en cache exige une correspondance exacte)
- Vérifier que le cache n'a pas expiré
- Vérifier les limites de cache spécifiques au fournisseur

### Échec de la création du cache {#cache-creation-failing}

- Vérifier que la taille du cache est dans les limites du fournisseur
- S'assurer que la syntaxe de contrôle de cache est correcte
- Confirmer que le fournisseur prend en charge la mise en cache pour votre modèle
- Consulter la documentation du fournisseur pour les limitations

### Coûts inattendus {#unexpected-costs}

- Surveiller les tokens de création de cache par rapport aux tokens de lecture de cache
- Vérifier que le cache est réellement utilisé
- Rechercher des manques de cache dus à des variations de prompts
- Envisager d'ajuster le TTL ou la stratégie de cache

## Comparaison des fournisseurs {#provider-comparison}

| Fonctionnalité | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API de cache | cachedContents | En-têtes HTTP | Spécifique au fournisseur | Contrôle de cache |
| Contrôle TTL | Explicite | Via en-têtes | Dépend du fournisseur | Éphémère/persistant |
| Taille max du cache | 1M tokens | Dépend du fournisseur | Dépend du fournisseur | 1M tokens |
| Réduction des coûts | 90% | 90% | Dépend du fournisseur | 90% |
| Surveillance | Détaillée | Via métriques | Dépend du fournisseur | Via utilisation |

## Prochaines étapes {#next-steps}

1. **Choisir votre fournisseur** : Sélectionner en fonction de vos besoins
2. **Configurer la mise en cache** : Mettre en place la mise en cache spécifique au fournisseur
3. **Tester la mise en cache** : Vérifier qu'elle fonctionne avec vos prompts
4. **Surveiller l'utilisation** : Suivre les hits de cache et les économies de coûts
5. **Optimiser** : Ajuster le TTL et la stratégie de cache en fonction des résultats
