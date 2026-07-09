---
title: Utveckling av anpassad gateway
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Utveckling av anpassad gateway

Du kan skapa anpassade betalningsgateways genom att utöka klassen `Base_Gateway`.

## Gateway-klass

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

## Registrera gatewayen

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Viktiga metoder

| Metod | Syfte |
|--------|---------|
| `process_single_payment()` | Hantera engångsbetalningar |
| `process_signup()` | Konfigurera återkommande prenumerationer |
| `process_refund()` | Hantera återbetalningsförfrågningar |
| `get_payment_methods()` | Returnera sparade betalningsmetoder för en kund |

## Förnyelseuppgifter för återkommande medlemskap

Ultimate Multisite v2.13.0 låter gateway-integrationer rapportera om ett återkommande medlemskap har en återanvändbar förnyelseuppgift innan `auto_renew` sparas. Koppla in `wu_membership_has_renewal_credential` och returnera:

- `true` när medlemskapet har en gateway-prenumeration, ett faktureringsavtal, en vault token eller motsvarande återanvändbar betalningsmetod.
- `false` när gatewayen vet att den återkommande uppgiften saknas eller inte kan användas.
- `null` för att välja bort och behålla standardbeteendet oförändrat.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

När en gateway returnerar `false` sparar Ultimate Multisite medlemskapet med automatisk förnyelse inaktiverad och lagrar en markör för saknade uppgifter. Använd `wu_membership_renewal_credential_missing` för att meddela administratörer, starta ett flöde för ny auktorisering eller lägga till supportanteckningar:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Rensa markören för saknade uppgifter som en del av din gateways lyckade flöde för ny auktorisering efter att en ny återanvändbar uppgift har lagrats.

## Tips

- Returnera alltid `WP_Error` vid fel så att Ultimate Multisite kan hantera felvisning
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Använd `wu_log_add()` för gateway-specifik loggning

## AI-anslutningsleverantörers funktioner

Anpassade integrationer som anropar åtgärder som stöds av AI-anslutningar bör anpassas till den uppsättning OAuth-leverantörer som stöds och som introducerades med AI Provider for Anthropic Max v1.3.0:

| Leverantör | Funktionsanteckningar |
|---|---|
| **Anthropic Max** | Stöder det befintliga arbetsflödet för OAuth-kontopoolen. Bevara Anthropic-nyttolaster för verktygsanvändning, inklusive tomma verktygsmatriser och tur-och-retur-tänkandesignaturer, när anslutningsförfrågningar proxas. |
| **OpenAI ChatGPT/Codex** | Stöder arbetsflödet för OAuth-poolen och fullständigt verktygsstöd för anslutningsstödda åtgärder. Skicka vidare verktygsdefinitioner och verktygsanropsresultat utan att ta bort Codex-specifik verktygsmetadata. |
| **Google AI Pro** | Stöder arbetsflödet för OAuth-poolen och SDK-stödd leverantörsintegration. Uppdatera leverantörskonton efter slutförd OAuth innan förfrågningar dirigeras. |

Cursor Pro-integration och konfigurationsvägar har tagits bort. Registrera inte Cursor Pro som en valbar leverantör och visa inte Cursor-specifika OAuth-instruktioner i anpassade anslutningsgränssnitt.

För sandlådemiljöer eller huvudlösa miljöer, exponera den manuella reservvägen för OAuth så att administratörer kan klistra in returnerade auktoriseringsdata och slutföra kontoanslutningen utan att förlita sig på en automatisk webbläsaromdirigering.
