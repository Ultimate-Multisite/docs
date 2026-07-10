---
title: అనుసంధాన మార్గదర్శిని
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# సమీకరణ మార్గదర్శిని {#integration-guide}

ఈ మార్గదర్శిని Ultimate Multisiteతో సాధారణ సమీకరణ విధానాలను వివరిస్తుంది. ఇందులో బాహ్య సేవలకు కనెక్ట్ చేయడం, అనుకూల చెల్లింపు గేట్‌వేలను నిర్మించడం, వెబ్‌హుక్‌లను నిర్వహించడం ఉన్నాయి.

విడివిడిగా ఉండే అద్దెదారు మౌలిక వసతుల కోసం, స్వతంత్ర అద్దెదారు బూట్‌స్ట్రాప్, వలస ధృవీకరణ, SSO, మరియు తొలగింపు మార్గదర్శకత్వం కోసం [బహుళ-అద్దెదారు సమీకరణ](./multi-tenancy) చూడండి.

## CRM సమీకరణ {#crm-integration}

కొత్త కస్టమర్‌లు నమోదు చేసుకున్నప్పుడు కస్టమర్ డేటాను మీ CRMతో సమకాలీకరించండి:

```php
add_action('wu_customer_post_create', 'sync_customer_to_crm');

function sync_customer_to_crm($customer) {
    $crm_api = new Your_CRM_API();

    $crm_api->create_contact([
        'email' => $customer->get_email(),
        'name' => $customer->get_display_name(),
        'signup_date' => $customer->get_date_registered(),
        'plan' => $customer->get_membership()->get_plan()->get_name()
    ]);

    // Store CRM ID for future reference
    $customer->add_meta('crm_contact_id', $crm_api->get_last_contact_id());
}
```

## విశ్లేషణల సమీకరణ {#analytics-integration}

కస్టమర్ జీవితచక్రం అంతటా ముఖ్య వ్యాపార సంఘటనలను ట్రాక్ చేయండి:

```php
add_action('wu_checkout_completed', 'track_conversion', 10, 3);
add_action('wu_membership_status_to_cancelled', 'track_churn');
add_action('wu_payment_failed', 'track_payment_failure');

function track_conversion($payment, $customer, $membership) {
    // Google Analytics 4
    gtag('event', 'purchase', [
        'transaction_id' => $payment->get_id(),
        'value' => $payment->get_total(),
        'currency' => $payment->get_currency(),
        'items' => [
            [
                'item_id' => $membership->get_plan()->get_id(),
                'item_name' => $membership->get_plan()->get_name(),
                'category' => 'subscription',
                'quantity' => 1,
                'price' => $payment->get_total()
            ]
        ]
    ]);
}
```

## తదుపరి దశలు {#next-steps}

- [అనుకూల గేట్‌వే అభివృద్ధి](./custom-gateway) — మీ స్వంత చెల్లింపు గేట్‌వేను నిర్మించండి
- [వెబ్‌హుక్ నిర్వహణ](./webhooks) — అనుకూల వెబ్‌హుక్ endpointలను సృష్టించండి
- [బహుళ-అద్దెదారు సమీకరణ](./multi-tenancy) — స్వతంత్ర అద్దెదారు జీవితచక్ర ప్రవాహాలతో సమీకరించండి
