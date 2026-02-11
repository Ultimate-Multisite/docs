---
id: wu_current_set_membership
title: フィルタ - wu_current_set_membership
sidebar_label: wu_current_set_membership
_i18n_hash: f9dbf408f6f9eb6ad7f0a9303ce2c564
---
**Filter: Allow developers to override the current user**

## Description

This filter lets developers override the default behavior of the current user. By default, the current user is determined by the `wp_get_current_user()` function. However, developers can use this filter to override the current user with a custom user ID.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$user_id` | int | The ID of the user to override the current user with. |
| `$user` | WP_User | The current user object. |

## Return

| Type | Description |
|------|-------------|
| WP_User | The overridden user object. |

## Example

```php
add_filter( 'wp_get_current_user', function( $user, $user_id ) {
    // Override the current user with a custom user ID
    return new WP_User( $user_id );
}, 10, 2 );
```

## Notes

- This filter is only available in WordPress 5.0 and later.
- The filter is only applied when the `wp_get_current_user()` function is called.
- The filter is only applied when the current user is not already set.

## See Also

- `wp_get_current_user()`
- `wp_set_current_user()`
- `wp_get_current_user_id()`

## References

- https://developer.wordpress.org/reference/hooks/wp_get_current_user/
- https://developer.wordpress.org/reference/functions/wp_get_current_user/
- https://developer.wordpress.org/reference/functions/wp_set_current_user/
- https://developer.wordpress.org/reference/functions/wp_get_current_user_id/
