---
id: wu_rest_delete_item
title: تصفية - wu_rest_delete_item
sidebar_label: wu_rest_delete_item
_i18n_hash: ea4a29625c1aef260edc421b300d59cc
---
**Answer:**

Below is a straightforward implementation of the `wu_rest_delete_item` filter.  
It checks whether the current user has the capability to delete the entity identified by the `$rest_base` slug. The capability is constructed as `delete_{slug}` (e.g., `delete_post`, `delete_page`). If the user lacks this capability, the function returns `false`; otherwise, it returns `true`.

```php
/**
 * Determine whether the current user is allowed to delete an item.
 *
 * @param bool   $allowed   Initial return value (unused, but kept for compatibility).
 * @param string $rest_base Entity slug (e.g., 'post', 'page').
 * @param \Base_Manager $this The instance of the manager handling the request.
 *
 * @return bool True if the user can delete the item, false otherwise.
 */
public function wu_rest_delete_item( $allowed, $rest_base, $this ) {
    // Ensure we have a user object.
    $user = $this->get_user();
    if ( ! $user ) {
        return false;
    }

    // Build the capability name. WordPress uses the format 'delete_{post_type}'.
    $capability = 'delete_' . $rest_base;

    // Check the capability.
    return current_user_can( $capability );
}
```

**Explanation**

1. **Retrieve the user** – `$this->get_user()` returns the current user object.  
2. **Build the capability string** – The capability follows the pattern `delete_{post_type}`.  
3. **Check the capability** – `current_user_can()` verifies whether the user has that capability.  
4. **Return the result** – The function returns a boolean indicating permission.

Feel free to adjust the capability string or add additional checks (e.g., ownership, status) as needed for your specific use case.
