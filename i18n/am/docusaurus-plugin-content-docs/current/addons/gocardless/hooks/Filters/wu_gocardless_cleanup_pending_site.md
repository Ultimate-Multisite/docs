---
id: wu_gocardless_cleanup_pending_site
title: ማጣሪያ - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

የተሰረዘ የGoCardless አባልነት ምክንያት የጠፋ (orphaned) ተስፋ የሚደረግበትን ድረ-ገጽ ከመሰረዝ በፊት ይሠራል።

ይህንን filter ዋጋ (false) በመመለስ መሰረዝን መከላከል ይችላሉ።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | የጠፋው ተስፋ የሚደረግበት ድረ-ገጽ የWordPress ብሎግ ID። |
| $membership | `\WP_Ultimo\Models\Membership` | የተሰረዘው የአባልነት መረጃ። |
| $old_status | `string` | ከመሰረዙ በፊት የነበረው ሁኔታ (status)። |

### Since

- 2.0.0
### Source

በ[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) በ1086ኛው መስመር ተገልጿል።
