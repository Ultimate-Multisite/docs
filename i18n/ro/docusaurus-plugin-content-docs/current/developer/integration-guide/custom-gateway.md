---
title: Dezvoltarea unui gateway personalizat
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Dezvoltarea unui gateway personalizat

Poți crea gateway-uri de plată personalizate extinzând clasa `Base_Gateway`.

## Clasa gateway-ului

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

## Înregistrează gateway-ul

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metode cheie

| Metodă | Scop |
|--------|---------|
| `process_single_payment()` | Gestionează plățile unice |
| `process_signup()` | Configurează abonamente recurente |
| `process_refund()` | Gestionează cererile de rambursare |
| `get_payment_methods()` | Returnează metodele de plată salvate pentru un client |

## Credențiale de reînnoire pentru abonamente recurente

Ultimate Multisite v2.13.0 permite integrărilor de gateway să raporteze dacă un abonament recurent are o credențială de reînnoire reutilizabilă înainte ca `auto_renew` să fie persistat. Atașează-te la `wu_membership_has_renewal_credential` și returnează:

- `true` când abonamentul are un abonament de gateway, un acord de facturare, un token de seif sau o metodă de plată reutilizabilă echivalentă.
- `false` când gateway-ul știe că respectiva credențială recurentă lipsește sau nu poate fi utilizată.
- `null` pentru a renunța și a păstra comportamentul implicit neschimbat.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Când un gateway returnează `false`, Ultimate Multisite salvează abonamentul cu reînnoirea automată dezactivată și stochează un marcator de credențială lipsă. Folosește `wu_membership_renewal_credential_missing` pentru a notifica administratorii, a porni un flux de reautorizare sau a adăuga note de suport:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Șterge marcatorul de credențială lipsă ca parte a fluxului de reautorizare reușit al gateway-ului tău, după ce este stocată o nouă credențială reutilizabilă.

## Sfaturi

- Returnează întotdeauna `WP_Error` la eșec, astfel încât Ultimate Multisite să poată gestiona afișarea erorilor
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Folosește `wu_log_add()` pentru jurnalizare specifică gateway-ului

## Capacități ale furnizorilor pentru conectorul AI

Integrările personalizate care apelează operațiuni bazate pe conectorul AI ar trebui să se alinieze cu setul de furnizori OAuth acceptați, introdus cu AI Provider for Anthropic Max v1.3.0:

| Furnizor | Note privind capacitățile |
|---|---|
| **Anthropic Max** | Acceptă fluxul existent de grup de conturi OAuth. Păstrează payload-urile de utilizare a instrumentelor Anthropic, inclusiv array-urile de instrumente goale și semnăturile de gândire dus-întors, atunci când proxy-ezi cererile conectorului. |
| **OpenAI ChatGPT/Codex** | Acceptă fluxul de grup OAuth și comportamentul complet de suport pentru instrumente pentru operațiunile acceptate de conector. Transmite definițiile de instrumente și rezultatele apelurilor de instrumente fără a elimina metadatele de instrument specifice Codex. |
| **Google AI Pro** | Acceptă fluxul de grup OAuth și integrarea furnizorului bazată pe SDK. Reîmprospătează conturile furnizorului după finalizarea OAuth înainte de a ruta cererile. |

Integrarea Cursor Pro și căile de configurare au fost eliminate. Nu înregistra Cursor Pro ca furnizor selectabil și nu prezenta instrucțiuni OAuth specifice Cursor în interfețele de utilizare ale conectorilor personalizați.

Pentru medii sandboxed sau headless, expune calea de rezervă OAuth manuală, astfel încât administratorii să poată lipi datele de autorizare returnate și să finalizeze conectarea contului fără a se baza pe o redirecționare automată a browserului.
