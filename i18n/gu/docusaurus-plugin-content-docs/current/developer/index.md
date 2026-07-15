---
title: વિકાસક દસ્તાવેજીકરણ
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ડેવલપર ડોક્યુમેન્ટેશન

આ માર્ગદર્શિકા ડેવલપર્સને Ultimate Multisite સાથે ઇન્ટિગ્રેટ કરવા, એક્સટેન્ડ કરવા અથવા એડઓન ડેવલ કરવા માટે જરૂરી બધું પ્રદાન કરે છે. Ultimate Multisite એક WordPress Multisite ને Website-as-a-Service (WaaS) પ્લેટફોર્મમાં રૂપાંતરિત કરે છે.

## શું ઉપલબ્ધ છે {#whats-available}

- **[REST API](./rest-api/overview)** — તમામ એન્ટિટીઝ (ગ્રાહકો, સાઇટ્સ, સભ્યપદ, પેમેન્ટ્સ, પ્રોડક્ટ્સ, ડોમેન્સ) માટે સંપૂર્ણ CRUD ઓપરેશન્સ, API કી ઓથેન્ટિકેશન સાથે.
- **[Hooks Reference](./hooks/guide)** — લાઇફસાયકલ ઇવેન્ટ્સ અને કસ્ટમાઇઝેશન માટે ૨૦૦+ એક્શન હૂક્સ અને ૨૮૦+ ફિલ્ટર હૂક્સ.
- **[Integration Guide](./integration-guide/)** — CRM ઇન્ટિગ્રેશન, એનાલિટિક્સ, કસ્ટમ ગેટવે અને વેબહૂક્સ માટેના ઉદાહરણો.
- **[Code Examples](./code-examples/)** — ડાયનેમિક પ્રાઇસિંગ, સાઇટ પ્રોવિઝનિંગ, કસ્ટમ મર્યાદાઓ અને મલ્ટી-ગેટવે પ્રોસેસિંગ માટે એડવાન્સ્ડ પેટર્ન.
- **[Addon Development](./addon-development/getting-started)** — એડઓન પ્લગઇન બનાવવા માટેનું સ્ટ્રક્ચર્ડ ફ્રેમવર્ક.

## જરૂરિયાતો {#requirements}

- WordPress Multisite ઇન્સ્ટોલેશન
- PHP 7.4 અથવા તેથી વધુ
- Ultimate Multisite પ્લગઇન એક્ટિવેટેડ

## Composer / Bedrock ઇન્સ્ટોલેશન {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) પર `ultimate-multisite/ultimate-multisite` તરીકે ઉપલબ્ધ છે. આ [Bedrock](https://roots.io/bedrock/)-આધારિત WordPress સેટઅપ્સ અને અન્ય Composer-મેનેજ્ડ એન્વાયર્નમેન્ટ્સ માટે ભલામણ કરેલ ઇન્સ્ટોલેશન પદ્ધતિ છે.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer પેકેજનું નામ v2.6.1 માં `devstone/ultimate-multisite` માંથી `ultimate-multisite/ultimate-multisite` માં બદલવામાં આવ્યું હતું. જો તમારી `composer.json` જૂના વેન્ડર નામનો સંદર્ભ આપે છે, તો require એન્ટ્રી અપડેટ કરો અને `composer update` ચલાવો.
:::

ઇન્સ્ટોલ કર્યા પછી, નેટવર્ક એડમિનમાંથી પ્લગઇનને નેટવર્ક-એક્ટિવેટ કરો:

```bash
wp plugin activate ultimate-multisite --network
```

અથવા, જો તમે Bedrock ના autoloader દ્વારા પ્લગઇનને must-use પ્લગઇન તરીકે લોડ કરી રહ્યા છો, તો એક્ટિવેશન ગાર્ડને બાયપાસ કરવા માટે `wp_ultimo_skip_network_active_check` ફિલ્ટરનો ઉપયોગ કરો:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## ઝડપી શરૂઆત {#quick-start}

### REST API નો ઉપયોગ કરો {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ઇવેન્ટ્સ સાથે હૂક કરો {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // નવા ગ્રાહક નોંધણીઓ પર પ્રતિક્રિયા આપો
});
```

### એડઓન બનાવો {#build-an-addon}

```bash
# ટેમ્પલેટમાંથી એડઓન સ્કેફોલ્ડ જનરેટ કરો
bash create-addon.sh
```

વધુ વિગતવાર ડોક્યુમેન્ટેશન અને ઉદાહરણો માટે દરેક વિભાગ જુઓ.
