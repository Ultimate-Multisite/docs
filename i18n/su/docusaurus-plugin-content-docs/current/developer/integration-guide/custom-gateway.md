---
title: Pamekaran Gateway Kustom
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Pangwangunan Gateway Kustom

Anjeun tiasa nyieun gateway pamayaran kustom ku ngalegaan kelas `Base_Gateway`.

## Kelas Gateway

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

## Daptarkeun Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Métode Konci

| Métode | Tujuan |
|--------|---------|
| `process_single_payment()` | Nanganan pamayaran sakali |
| `process_signup()` | Nyetél langganan anu ngulang |
| `process_refund()` | Nanganan pamundut ngabalikeun dana |
| `get_payment_methods()` | Mulangkeun métode pamayaran anu disimpen pikeun hiji palanggan |

## Kredénsial pembaruan pikeun kaanggotaan anu ngulang

Ultimate Multisite v2.13.0 ngamungkinkeun integrasi gateway ngalaporkeun naha hiji kaanggotaan anu ngulang miboga kredénsial pembaruan anu bisa dipaké deui saméméh `auto_renew` disimpen. Kaitkeun `wu_membership_has_renewal_credential` sarta mulangkeun:

- `true` nalika kaanggotaan miboga langganan gateway, kasapukan tagihan, token vault, atawa métode pamayaran sarimbag anu bisa dipaké deui.
- `false` nalika gateway nyaho yén kredénsial anu ngulang téh leungit atawa teu bisa dipaké.
- `null` pikeun kaluar sarta ngajaga paripolah standar tetep teu robah.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Nalika hiji gateway mulangkeun `false`, Ultimate Multisite nyimpen kaanggotaan kalayan pembaruan otomatis dipareuman sarta nyimpen pananda kredénsial-leungit. Paké `wu_membership_renewal_credential_missing` pikeun ngabéjaan administrator, ngamimitian alur otorisasi deui, atawa nambahkeun catetan rojongan:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Beresihan pananda kredénsial-leungit minangka bagian tina alur otorisasi deui gateway anjeun anu suksés sanggeus kredénsial anyar anu bisa dipaké deui disimpen.

## Tips

- Salawasna mulangkeun `WP_Error` nalika gagal supaya Ultimate Multisite bisa nanganan pintonan kasalahan
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Paké `wu_log_add()` pikeun logging husus gateway

## Kamampuhan panyadia panyambung AI

Integrasi kustom anu nelepon operasi anu didukung panyambung AI kudu saluyu jeung susunan panyadia OAuth anu dirojong anu diwanohkeun ku AI Provider for Anthropic Max v1.3.0:

| Panyadia | Catetan kamampuhan |
|---|---|
| **Anthropic Max** | Ngarojong alur gawé kumpulan Account OAuth anu geus aya. Jaga payload panggunaan alat Anthropic, kaasup array alat kosong jeung tanda tangan pamikiran bolak-balik, nalika ngalantarankeun pamundut panyambung. |
| **OpenAI ChatGPT/Codex** | Ngarojong alur gawé kumpulan OAuth jeung paripolah rojongan alat pinuh pikeun operasi anu dirojong panyambung. Teruskeun watesan alat jeung hasil panggero alat tanpa miceun metadata alat husus Codex. |
| **Google AI Pro** | Ngarojong alur gawé kumpulan OAuth jeung integrasi panyadia anu didukung SDK. Segerkeun Account panyadia sanggeus OAuth réngsé saméméh ngarahkeun pamundut. |

Integrasi jeung jalur setup Cursor Pro geus dipiceun. Ulah ngadaptarkeun Cursor Pro minangka panyadia anu bisa dipilih atawa nampilkeun parentah OAuth husus Cursor dina UI panyambung kustom.

Pikeun lingkungan sandboxed atawa headless, tampilan jalur cadangan OAuth manual supaya administrator bisa nempelkeun data otorisasi anu dibalikeun sarta ngaréngsékeun sambungan Account tanpa gumantung kana alihan browser otomatis.
