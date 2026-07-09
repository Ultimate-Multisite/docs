---
title: Egyedi átjáró fejlesztése
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Egyéni fizetési átjáró fejlesztése {#custom-gateway-development}

Egyéni fizetési átjárókat hozhatsz létre a `Base_Gateway` osztály kiterjesztésével.

## Fizetési átjáró osztály {#gateway-class}

```php
class My_Custom_Gateway extends \WP_Ultimo\Gateways\Base_Gateway {

    public $id = 'my_gateway';

    public function __construct() {
        $this->title = 'My Payment Gateway';
        $this->description = 'Custom payment processing';
        $this->supports = ['one-time', 'recurring'];

        parent::__construct();
    }

    public function process_single_payment($payment, $cart, $order) {
        $result = $this->api_call('charge', [
            'amount' => $payment->get_total(),
            'currency' => $payment->get_currency(),
            'customer' => $payment->get_customer_id()
        ]);

        if ($result->success) {
            $payment->set_gateway_payment_id($result->transaction_id);
            $payment->set_status('completed');
            return true;
        }

        return new WP_Error('payment_failed', $result->error_message);
    }

    public function process_signup($membership, $customer, $cart, $order) {
        $subscription = $this->api_call('subscription/create', [
            'customer_id' => $customer->get_gateway_customer_id(),
            'plan_id' => $membership->get_plan()->get_gateway_plan_id(),
            'trial_days' => $membership->get_trial_days()
        ]);

        if ($subscription->success) {
            $membership->set_gateway_subscription_id($subscription->id);
            return true;
        }

        return new WP_Error('subscription_failed', $subscription->error);
    }
}
```

## A fizetési átjáró regisztrálása {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Fő metódusok {#key-methods}

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | Egyszeri fizetések kezelése |
| `process_signup()` | Ismétlődő előfizetések beállítása |
| `process_refund()` | Visszatérítési kérelmek kezelése |
| `get_payment_methods()` | Mentett fizetési módok visszaadása egy ügyfélhez |

## Megújítási hitelesítő adatok ismétlődő tagságokhoz {#renewal-credentials-for-recurring-memberships}

Az Ultimate Multisite v2.13.0 lehetővé teszi, hogy a fizetési átjáró integrációk jelezzék, rendelkezik-e egy ismétlődő tagság újrafelhasználható megújítási hitelesítő adattal, mielőtt az `auto_renew` mentésre kerül. Kapcsold meg a `wu_membership_has_renewal_credential` hookot, és térj vissza a következővel:

- `true`, ha a tagságnak van fizetési átjáró-előfizetése, számlázási megállapodása, vault tokenje vagy ezzel egyenértékű újrafelhasználható fizetési módja.
- `false`, ha a fizetési átjáró tudja, hogy az ismétlődő hitelesítő adat hiányzik vagy nem használható.
- `null`, ha ki szeretnél maradni, és az alapértelmezett viselkedést változatlanul szeretnéd hagyni.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Amikor egy fizetési átjáró `false` értékkel tér vissza, az Ultimate Multisite a tagságot letiltott automatikus megújítással menti, és eltárol egy hiányzó hitelesítő adatot jelző jelölőt. Használd a `wu_membership_renewal_credential_missing` hookot az adminisztrátorok értesítésére, egy újbóli engedélyezési folyamat elindítására vagy támogatási megjegyzések hozzáadására:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Töröld a hiányzó hitelesítő adatot jelző jelölőt a fizetési átjáród sikeres újbóli engedélyezési folyamatának részeként, miután az új újrafelhasználható hitelesítő adat mentésre került.

## Tippek {#tips}

- Hiba esetén mindig `WP_Error` értékkel térj vissza, hogy az Ultimate Multisite kezelni tudja a hiba megjelenítését
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Használd a `wu_log_add()` függvényt a fizetési átjáró-specifikus naplózáshoz

## AI connector szolgáltatói képességek {#ai-connector-provider-capabilities}

Azoknak az egyéni integrációknak, amelyek AI connector által támogatott műveleteket hívnak meg, igazodniuk kell az AI Provider for Anthropic Max v1.3.0-val bevezetett támogatott OAuth-szolgáltatói készlethez:

| Szolgáltató | Képességekkel kapcsolatos megjegyzések |
|---|---|
| **Anthropic Max** | Támogatja a meglévő OAuth-fiókkészlet munkafolyamatot. Őrizd meg az Anthropic eszközhasználati payloadokat, beleértve az üres eszköztömböket és az oda-vissza továbbított gondolkodási aláírásokat is, amikor connector kéréseket proxyzol. |
| **OpenAI ChatGPT/Codex** | Támogatja az OAuth-készlet munkafolyamatot és a teljes eszköztámogatási viselkedést a connector által támogatott műveletekhez. Add tovább az eszközdefiníciókat és az eszközhívási eredményeket anélkül, hogy eltávolítanád a Codex-specifikus eszközmetaadatokat. |
| **Google AI Pro** | Támogatja az OAuth-készlet munkafolyamatot és az SDK-alapú szolgáltatói integrációt. Frissítsd a szolgáltatói fiókokat az OAuth befejezése után, mielőtt továbbítanád a kéréseket. |

A Cursor Pro integráció és a beállítási útvonalak el lettek távolítva. Ne regisztráld a Cursor Pro-t választható szolgáltatóként, és ne jeleníts meg Cursor-specifikus OAuth-utasításokat az egyéni connector UI-kban.

Sandboxolt vagy headless környezetekhez tedd elérhetővé a manuális OAuth tartalék útvonalat, hogy az adminisztrátorok beilleszthessék a visszaadott engedélyezési adatokat, és automatikus böngészőátirányítás nélkül befejezhessék a fiók összekapcsolását.
