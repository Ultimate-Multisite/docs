---
id: wu_rest_get_item
title: تصفية - wu_rest_get_item
sidebar_label: wu_rest_get_item
_i18n_hash: 6e3f51a53f5b4bafef3d438273c979c8
---
```php
/**
 * يحدد ما إذا كان يُسمح بالمتابعة مع الطلب أم لا.
 *
 * @param bool   $allowed   القيمة الأولية للعودة.
 * @param array  $rest_base معرف الكيان (slug).
 * @param \Base_Manager $this كائن الفئة.
 *
 * @return bool
 */
function wu_rest_get_item( $allowed, $rest_base, $this ) {
    if ( ! $this->is_allowed( $allowed, $rest_base ) ) {
        return false;
    }

    return true;
}
```
