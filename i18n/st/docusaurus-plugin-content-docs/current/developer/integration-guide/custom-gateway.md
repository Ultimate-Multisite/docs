---
title: Nts'etsopele ea Khoro e Ikhethileng
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Ntshetsopele ya Custom Gateway

O ka bopa dikgoro tsa tefo tse ikgethileng ka ho atolosa sehlopha sa `Base_Gateway`.

## Sehlopha sa Gateway

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

## Ngodisa Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Mekgwa ya Bohlokwa

| Method | Sepheo |
|--------|---------|
| `process_single_payment()` | Tshwara ditefo tsa hang feela |
| `process_signup()` | Hloma dipeeletso tse iphetang |
| `process_refund()` | Tshwara dikopo tsa pusetso ya tjhelete |
| `get_payment_methods()` | Kgutlisa mekgwa ya tefo e bolokilweng bakeng sa moreki |

## Dintlha tsa boitsebiso tsa nchafatso bakeng sa boingodiso bo iphetang

Ultimate Multisite v2.13.0 e dumella dikopanyo tsa gateway ho tlaleha hore na boingodiso bo iphetang bo na le dintlha tsa boitsebiso tsa nchafatso tse ka sebediswang hape pele `auto_renew` e bolokwa. Sebedisa hook `wu_membership_has_renewal_credential` mme o kgutlise:

- `true` ha boingodiso bo na le peeletso ya gateway, tumellano ya tefiso, letshwao la vault, kapa mokgwa o lekanang wa tefo o ka sebediswang hape.
- `false` ha gateway e tseba hore dintlha tsa boitsebiso tse iphetang di siyo kapa ha di sebetse.
- `null` ho itokolla mme o boloke boitshwaro ba kamehla bo sa fetoha.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Ha gateway e kgutlisa `false`, Ultimate Multisite e boloka boingodiso ka nchafatso e iketsang e timilwe mme e boloka letshwao la dintlha tsa boitsebiso tse siyo. Sebedisa `wu_membership_renewal_credential_missing` ho tsebisa batsamaisi, ho qala phallo ya tumello hape, kapa ho eketsa dintlha tsa tshehetso:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Tlosa letshwao la dintlha tsa boitsebiso tse siyo e le karolo ya phallo ya gateway ya hao ya tumello hape e atlehileng kamora hore dintlha tse ntjha tsa boitsebiso tse ka sebediswang hape di bolokwe.

## Malebela

- Kamehla kgutlisa `WP_Error` ha ho hloleha hore Ultimate Multisite e kgone ho sebetsana le pontsho ya phoso
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Sebedisa `wu_log_add()` bakeng sa ho ngola diketsahalo tse kgethehileng tsa gateway

## Bokgoni ba bafani ba sehokedi sa AI

Dikopanyo tse ikgethileng tse bitsang ditshebetso tse tshehetswang ke sehokedi sa AI di lokela ho tsamaisana le sehlopha sa bafani ba OAuth se tshehetswang se hlahisitsweng ka AI Provider for Anthropic Max v1.3.0:

| Mofani | Dintlha tsa bokgoni |
|---|---|
| **Anthropic Max** | E tshehetsa phallo e teng ya letamo la Account ya OAuth. Boloka dithomelo tsa tshebediso ya dithulusi tsa Anthropic, ho kenyeletswa di-array tsa dithulusi tse se nang letho le ditshaeno tsa monahano tsa leeto la ho ya le ho kgutla, ha o fetisa dikopo tsa sehokedi ka proxy. |
| **OpenAI ChatGPT/Codex** | E tshehetsa phallo ya letamo la OAuth le boitshwaro bo felletseng ba tshehetso ya dithulusi bakeng sa ditshebetso tse tshehetswang ke sehokedi. Fetisa ditlhaloso tsa dithulusi le diphetho tsa mehala ya dithulusi ntle le ho tlosa metadata ya dithulusi e kgethehileng ya Codex. |
| **Google AI Pro** | E tshehetsa phallo ya letamo la OAuth le kopanyo ya mofani e tshehetswang ke SDK. Ntjhafatsa di-Account tsa mofani kamora ho phethelwa ha OAuth pele o tsamaisa dikopo. |

Kopanyo ya Cursor Pro le ditsela tsa ho seta di tlositswe. O se ke wa ngodisa Cursor Pro e le mofani ya ka kgethwang kapa wa hlahisa ditaelo tsa OAuth tse kgethehileng tsa Cursor ho di-UI tsa sehokedi se ikgethileng.

Bakeng sa ditikoloho tsa sandbox kapa tse se nang sebopeho sa mosebedisi, hlahisa tsela ya kgutlelo ya OAuth ya letsoho hore batsamaisi ba kgone ho maneha data ya tumello e kgutlisitsweng mme ba phethe kgokahano ya Account ntle le ho itshetleha ka ho fetisetswa ha sebatli ka boiketsetso.
