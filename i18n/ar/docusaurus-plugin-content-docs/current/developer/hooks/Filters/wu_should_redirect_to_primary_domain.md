---
id: wu_should_redirect_to_primary_domain
title: فلتر - wu_should_redirect_to_primary_domain
sidebar_label: wu_should_redirect_to_primary_domain
_i18n_hash: 6e085e579f17d09e630f12f429cc413b
---
```php
/**
 * يتيح للمطورين تجاوز عملية إعادة التوجيه، مما يمنع حدوثها.
 *
 * @param bool $should_redirect إذا كان يجب إعادة التوجيه أم لا.
 * @return bool
 */
public function wu_should_redirect_to_primary_domain( $should_redirect ) {
    return $should_redirect;
}
```
