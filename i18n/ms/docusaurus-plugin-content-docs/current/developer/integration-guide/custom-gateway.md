---
title: Pembangunan Gerbang Tersuai
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Pembangunan Gateway Tersuai

Anda boleh mencipta gateway pembayaran tersuai dengan melanjutkan kelas `Base_Gateway`.

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

## Daftarkan Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Kaedah Utama

| Kaedah | Tujuan |
|--------|---------|
| `process_single_payment()` | Mengendalikan pembayaran sekali sahaja |
| `process_signup()` | Menyediakan langganan berulang |
| `process_refund()` | Mengendalikan permintaan bayaran balik |
| `get_payment_methods()` | Mengembalikan kaedah pembayaran tersimpan untuk pelanggan |

## Kelayakan pembaharuan untuk keahlian berulang

Ultimate Multisite v2.13.0 membolehkan integrasi gateway melaporkan sama ada keahlian berulang mempunyai kelayakan pembaharuan boleh guna semula sebelum `auto_renew` disimpan. Hook `wu_membership_has_renewal_credential` dan kembalikan:

- `true` apabila keahlian mempunyai langganan gateway, perjanjian pengebilan, token vault, atau kaedah pembayaran boleh guna semula yang setara.
- `false` apabila gateway mengetahui bahawa kelayakan berulang tiada atau tidak boleh digunakan.
- `null` untuk menarik diri dan mengekalkan tingkah laku lalai tanpa perubahan.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Apabila gateway mengembalikan `false`, Ultimate Multisite menyimpan keahlian dengan pembaharuan automatik dilumpuhkan dan menyimpan penanda kelayakan hilang. Gunakan `wu_membership_renewal_credential_missing` untuk memaklumkan pentadbir, memulakan aliran kebenaran semula, atau menambah nota sokongan:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Kosongkan penanda kelayakan hilang sebagai sebahagian daripada aliran kebenaran semula gateway anda yang berjaya selepas kelayakan boleh guna semula baharu disimpan.

## Petua

- Sentiasa kembalikan `WP_Error` apabila gagal supaya Ultimate Multisite boleh mengendalikan paparan ralat
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gunakan `wu_log_add()` untuk pengelogan khusus gateway

## Keupayaan penyedia penyambung AI

Integrasi tersuai yang memanggil operasi bersandarkan penyambung AI harus selaras dengan set penyedia OAuth yang disokong yang diperkenalkan dengan AI Provider for Anthropic Max v1.3.0:

| Penyedia | Nota keupayaan |
|---|---|
| **Anthropic Max** | Menyokong aliran kerja kumpulan Account OAuth sedia ada. Kekalkan payload penggunaan alat Anthropic, termasuk array alat kosong dan tandatangan pemikiran pergi balik, apabila memproksi permintaan penyambung. |
| **OpenAI ChatGPT/Codex** | Menyokong aliran kerja kumpulan OAuth dan tingkah laku sokongan alat penuh untuk operasi yang disokong penyambung. Teruskan definisi alat dan hasil panggilan alat tanpa membuang metadata alat khusus Codex. |
| **Google AI Pro** | Menyokong aliran kerja kumpulan OAuth dan integrasi penyedia bersandarkan SDK. Segarkan Account penyedia selepas OAuth selesai sebelum menghalakan permintaan. |

Integrasi dan laluan persediaan Cursor Pro telah dialih keluar. Jangan daftarkan Cursor Pro sebagai penyedia yang boleh dipilih atau memaparkan arahan OAuth khusus Cursor dalam UI penyambung tersuai.

Untuk persekitaran sandbox atau headless, dedahkan laluan sandaran OAuth manual supaya pentadbir boleh menampal data kebenaran yang dikembalikan dan melengkapkan sambungan Account tanpa bergantung pada lencongan pelayar automatik.
