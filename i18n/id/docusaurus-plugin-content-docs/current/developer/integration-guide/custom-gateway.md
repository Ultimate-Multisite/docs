---
title: Pengembangan Gateway Kustom
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Pengembangan Gateway Kustom

Anda dapat membuat gateway pembayaran kustom dengan memperluas class `Base_Gateway`.

## Class Gateway {#gateway-class}

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

## Daftarkan Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metode Utama {#key-methods}

| Metode | Tujuan |
|--------|---------|
| `process_single_payment()` | Menangani pembayaran satu kali |
| `process_signup()` | Menyiapkan langganan berulang |
| `process_refund()` | Menangani permintaan pengembalian dana |
| `get_payment_methods()` | Mengembalikan metode pembayaran tersimpan untuk pelanggan |

## Kredensial perpanjangan untuk keanggotaan berulang {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 memungkinkan integrasi gateway melaporkan apakah keanggotaan berulang memiliki kredensial perpanjangan yang dapat digunakan kembali sebelum `auto_renew` disimpan. Hook `wu_membership_has_renewal_credential` dan kembalikan:

- `true` ketika keanggotaan memiliki langganan gateway, perjanjian penagihan, token vault, atau metode pembayaran setara yang dapat digunakan kembali.
- `false` ketika gateway mengetahui bahwa kredensial berulang hilang atau tidak dapat digunakan.
- `null` untuk tidak ikut serta dan menjaga perilaku default tetap tidak berubah.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Ketika gateway mengembalikan `false`, Ultimate Multisite menyimpan keanggotaan dengan perpanjangan otomatis dinonaktifkan dan menyimpan penanda kredensial hilang. Gunakan `wu_membership_renewal_credential_missing` untuk memberi tahu administrator, memulai alur otorisasi ulang, atau menambahkan catatan dukungan:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Hapus penanda kredensial hilang sebagai bagian dari alur otorisasi ulang gateway Anda yang berhasil setelah kredensial baru yang dapat digunakan kembali disimpan.

## Tips {#tips}

- Selalu kembalikan `WP_Error` saat gagal agar Ultimate Multisite dapat menangani tampilan error
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gunakan `wu_log_add()` untuk pencatatan khusus gateway

## Kemampuan penyedia konektor AI {#ai-connector-provider-capabilities}

Integrasi kustom yang memanggil operasi berbasis konektor AI harus selaras dengan kumpulan penyedia OAuth yang didukung, yang diperkenalkan dengan AI Provider for Anthropic Max v1.3.0:

| Penyedia | Catatan kemampuan |
|---|---|
| **Anthropic Max** | Mendukung alur kerja pool Account OAuth yang sudah ada. Pertahankan payload penggunaan tool Anthropic, termasuk larik tool kosong dan tanda tangan thinking pulang-pergi, saat mem-proxy permintaan konektor. |
| **OpenAI ChatGPT/Codex** | Mendukung alur kerja pool OAuth dan perilaku dukungan tool penuh untuk operasi yang didukung konektor. Teruskan definisi tool dan hasil panggilan tool tanpa menghapus metadata tool khusus Codex. |
| **Google AI Pro** | Mendukung alur kerja pool OAuth dan integrasi penyedia berbasis SDK. Segarkan Account penyedia setelah OAuth selesai sebelum merutekan permintaan. |

Integrasi Cursor Pro dan jalur penyiapan telah dihapus. Jangan daftarkan Cursor Pro sebagai penyedia yang dapat dipilih atau menampilkan instruksi OAuth khusus Cursor di UI konektor kustom.

Untuk lingkungan sandbox atau headless, tampilkan jalur fallback OAuth manual agar administrator dapat menempelkan data otorisasi yang dikembalikan dan menyelesaikan koneksi Account tanpa bergantung pada pengalihan browser otomatis.
