---
id: wu_setup_wizard
title: تصفية - wu_setup_wizard
sidebar_label: wu_setup_wizard
_i18n_hash: dc634d6e39db4ee62d4b90237fe06c40
---
**wu_setup_wizard.php**

```php
<?php
/**
 * Allows developers to add additional setup wizard steps.
 *
 * @param array  $sections   Current sections.
 * @param bool   $is_migration  If this is a migration or not.
 * @param object $wizard      The current instance.
 *
 * @return array Modified sections array.
 */
function wu_setup_wizard( $sections, $is_migration, $wizard ) {
    // Example: Add a custom "Analytics" step if the user is not migrating.
    if ( ! $is_migration ) {
        $sections[] = [
            'id'          => 'analytics',
            'title'       => __( 'Analytics', 'ultimate-multisite' ),
            'description' => __( 'Set up analytics tracking for your site.', 'ultimate-multisite' ),
            'callback'    => function () {
                // Custom logic for analytics step.
            },
        ];
    }

    // Example: Add a "Security" step for all users.
    $sections[] = [
        'id'          => 'security',
        'title'       => __( 'Security', 'ultimate-multisite' ),
        'description' => __( 'Configure security settings to protect your site.', 'ultimate-multisite' ),
        'callback'    => function () {
            // Custom logic for security step.
        },
    ];

    // Return the modified sections array.
    return $sections;
}
```
