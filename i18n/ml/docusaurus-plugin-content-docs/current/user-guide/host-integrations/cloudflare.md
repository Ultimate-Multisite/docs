---
title: Cloudflare സംയോജനം
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare സംയോജനം

## അവലോകനം {#overview}
വെബ്സൈറ്റുകൾ സംരക്ഷിക്കാനും വേഗത്തിലാക്കാനും സഹായിക്കുന്ന മുൻനിര content delivery network (CDN) കൂടാതെ സുരക്ഷാ ദാതാവാണ് Cloudflare. പ്രത്യേകിച്ച് subdomain multisite ഇൻസ്റ്റലേഷനുകൾക്കായി Ultimate Multisite-നും Cloudflare-നും ഇടയിൽ സ്വയമേവയുള്ള domain മാനേജ്മെന്റ് ഈ സംയോജനം സാധ്യമാക്കുന്നു.

## സവിശേഷതകൾ {#features}
- Cloudflare-ൽ സ്വയമേവ subdomain സൃഷ്ടിക്കൽ
- Proxied subdomain പിന്തുണ
- DNS record മാനേജ്മെന്റ്
- Ultimate Multisite admin-ൽ മെച്ചപ്പെടുത്തിയ DNS record പ്രദർശനം

## ആവശ്യകതകൾ {#requirements}
താഴെ പറയുന്ന constants നിങ്ങളുടെ `wp-config.php` ഫയലിൽ നിർവചിച്ചിരിക്കണം:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## സജ്ജീകരണ നിർദ്ദേശങ്ങൾ {#setup-instructions}

### 1. നിങ്ങളുടെ Cloudflare API Key നേടുക {#1-get-your-cloudflare-api-key}

1. നിങ്ങളുടെ Cloudflare dashboard-ൽ ലോഗിൻ ചെയ്യുക
2. "എന്റെ പ്രൊഫൈൽ" എന്നതിലേക്ക് പോകുക (മുകളിൽ വലത് മൂലയിലുള്ള നിങ്ങളുടെ ഇമെയിലിൽ ക്ലിക്ക് ചെയ്യുക)
3. മെനുവിൽ നിന്ന് "API Tokens" തിരഞ്ഞെടുക്കുക
4. താഴെ പറയുന്ന permissions ഉള്ള പുതിയ API token സൃഷ്ടിക്കുക:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. നിങ്ങളുടെ API token പകർത്തുക

### 2. നിങ്ങളുടെ Zone ID നേടുക {#2-get-your-zone-id}

1. നിങ്ങളുടെ Cloudflare dashboard-ൽ, ഉപയോഗിക്കാൻ ആഗ്രഹിക്കുന്ന domain തിരഞ്ഞെടുക്കുക
2. "അവലോകനം" ടാബിൽ, വലത് sidebar-ൽ "API" എന്നതിനുകീഴിൽ Zone ID കാണാം
3. Zone ID പകർത്തുക

### 3. wp-config.php-ൽ constants ചേർക്കുക {#3-add-constants-to-wp-configphp}

താഴെ പറയുന്ന constants നിങ്ങളുടെ `wp-config.php` ഫയലിൽ ചേർക്കുക:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. സംയോജനം പ്രവർത്തനക്ഷമമാക്കുക {#4-enable-the-integration}

1. നിങ്ങളുടെ WordPress admin-ൽ, Ultimate Multisite > ക്രമീകരണങ്ങൾ എന്നതിലേക്ക് പോകുക
2. "Domain Mapping" ടാബിലേക്ക് പോകുക
3. "Host Integrations" വരെ താഴേക്ക് സ്ക്രോൾ ചെയ്യുക
4. Cloudflare സംയോജനം പ്രവർത്തനക്ഷമമാക്കുക
5. "മാറ്റങ്ങൾ സംരക്ഷിക്കുക" ക്ലിക്ക് ചെയ്യുക

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു {#how-it-works}

### Subdomain മാനേജ്മെന്റ് {#subdomain-management}

ഒരു subdomain multisite ഇൻസ്റ്റലേഷനിൽ പുതിയ site സൃഷ്ടിക്കുമ്പോൾ:

1. subdomain-ിനായി CNAME record ചേർക്കാൻ സംയോജനം Cloudflare-ന്റെ API-ലേക്ക് request അയയ്ക്കുന്നു
2. സ്വതവേ subdomain Cloudflare വഴി proxied ആകുന്ന വിധത്തിൽ ക്രമീകരിക്കും (filters ഉപയോഗിച്ച് ഇത് മാറ്റാം)
3. ഒരു site ഇല്ലാതാക്കുമ്പോൾ, സംയോജനം Cloudflare-ൽ നിന്ന് subdomain നീക്കം ചെയ്യും

### DNS Record പ്രദർശനം {#dns-record-display}

Ultimate Multisite admin-ൽ DNS record പ്രദർശനം സംയോജനം മെച്ചപ്പെടുത്തുന്നത് ഇങ്ങനെ:

1. Cloudflare-ൽ നിന്ന് DNS records നേരിട്ട് ലഭ്യമാക്കുന്നു
2. records proxied ആണോ അല്ലയോ എന്ന് പ്രദർശിപ്പിക്കുന്നു
3. DNS records സംബന്ധിച്ച അധിക വിവരങ്ങൾ കാണിക്കുന്നു

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (മുമ്പ് "Cloudflare for SaaS" എന്നു വിളിച്ചിരുന്നു) നിങ്ങളുടെ multisite network-ൽ ഉപഭോക്താക്കൾക്ക് സ്വന്തം domains SSL സഹിതം ഉപയോഗിക്കാൻ അനുവദിക്കുന്ന Cloudflare സവിശേഷതയാണ്. Cloudflare ഉപയോഗിക്കുന്ന domain-mapped multisite ഇൻസ്റ്റലേഷനുകൾക്ക് ഇത് ശുപാർശ ചെയ്യുന്ന രീതിയാണ്, കാരണം ഓരോ custom domain-നും SSL certificate നൽകലും പുതുക്കലും Cloudflare സ്വയമേവ കൈകാര്യം ചെയ്യുന്നു.

### സാധാരണ Cloudflare സംയോജനത്തിൽ നിന്ന് ഇത് എങ്ങനെ വ്യത്യാസപ്പെടുന്നു {#how-it-differs-from-the-standard-cloudflare-integration}

| | സാധാരണ സംയോജനം | Cloudflare Custom Hostnames |
|---|---|---|
| **ഉദ്ദേശ്യം** | subdomains-നായി DNS records സ്വയമേവ സൃഷ്ടിക്കുന്നു | Cloudflare നിയന്ത്രിക്കുന്ന SSL സഹിതം custom (mapped) domains പ്രവർത്തനക്ഷമമാക്കുന്നു |
| **ഏറ്റവും അനുയോജ്യം** | Subdomain multisite | Domain-mapped multisite |
| **SSL** | വേർതിരിച്ച് കൈകാര്യം ചെയ്യുന്നു | Cloudflare സ്വയമേവ നിയന്ത്രിക്കുന്നു |

### Cloudflare Custom Hostnames സജ്ജീകരിക്കൽ {#setting-up-cloudflare-custom-hostnames}

1. നിങ്ങളുടെ Cloudflare dashboard-ൽ, പ്രധാന domain-ന്റെ zone തുറക്കുക.
2. **SSL/TLS > Custom Hostnames** എന്നതിലേക്ക് പോകുക.
3. നിങ്ങളുടെ server-ന്റെ IP അല്ലെങ്കിൽ hostname-ലേക്ക് ചൂണ്ടുന്ന fallback origin ചേർക്കുക.
4. Ultimate Multisite-ൽ mapped ചെയ്ത ഓരോ customer domain-നും Cloudflare-ൽ Custom Hostname entry ചേർക്കുക. Cloudflare API ഉപയോഗിച്ച് ഈ ഘട്ടം സ്വയമേവ ചെയ്യാം.
5. customer-ന്റെ DNS നിങ്ങളുടെ network-ലേക്ക് ചൂണ്ടിയാൽ, ഓരോ custom hostname-നും Cloudflare സ്വയമേവ TLS certificates നൽകുകയും പുതുക്കുകയും ചെയ്യും.

പൂർണ്ണ API reference-നായി, [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) കാണുക.

:::note പദാവലി പുതുക്കൽ
Ultimate Multisite v2.6.1 മുതൽ, എല്ലാ plugin ക്രമീകരണങ്ങളിലും labels-ലും ഈ സവിശേഷതയെ **Cloudflare Custom Hostnames** എന്നാണ് വിളിക്കുന്നത്. മുൻ പതിപ്പുകളിൽ "Cloudflare for SaaS" എന്ന പേര് ഉപയോഗിച്ചിരുന്നു. അതാണ് അടിസ്ഥാന Cloudflare product name.
:::

## പ്രധാന കുറിപ്പുകൾ {#important-notes}

Cloudflare-ന്റെ അടുത്തകാലത്തെ updates പ്രകാരം, wildcard proxying ഇപ്പോൾ എല്ലാ customers-ക്കും ലഭ്യമാണ്. അതിനാൽ subdomain multisite ഇൻസ്റ്റലേഷനുകൾക്ക് സാധാരണ Cloudflare DNS സംയോജനം മുമ്പത്തെക്കാൾ കുറച്ച് മാത്രം നിർണായകമാണ്, കാരണം Cloudflare-ൽ ഒരു wildcard DNS record ലളിതമായി സജ്ജീകരിക്കാം.

## പ്രശ്നപരിഹാരം {#troubleshooting}

### API Connection പ്രശ്നങ്ങൾ {#api-connection-issues}
- നിങ്ങളുടെ API token ശരിയാണെന്നും ആവശ്യമായ permissions ഉണ്ടെന്നും ഉറപ്പാക്കുക
- നിങ്ങളുടെ Zone ID ശരിയാണെന്ന് പരിശോധിക്കുക
- നിങ്ങളുടെ Cloudflare account-ന് ആവശ്യമായ permissions ഉണ്ടെന്ന് ഉറപ്പാക്കുക

### Subdomain ചേർത്തിട്ടില്ല {#subdomain-not-added}
- പിശക് സന്ദേശങ്ങൾ ഉണ്ടോയെന്ന് Ultimate Multisite logs പരിശോധിക്കുക
- subdomain ഇതിനകം Cloudflare-ൽ ചേർത്തിട്ടില്ലെന്ന് ഉറപ്പാക്കുക
- നിങ്ങൾ സൃഷ്ടിക്കുന്ന DNS records എണ്ണത്തെ നിങ്ങളുടെ Cloudflare plan പിന്തുണയ്ക്കുന്നുവെന്ന് ഉറപ്പാക്കുക

### Proxying പ്രശ്നങ്ങൾ {#proxying-issues}
- subdomains proxied ആകരുതെന്ന് നിങ്ങൾ ആഗ്രഹിക്കുന്നുവെങ്കിൽ, `wu_cloudflare_should_proxy` filter ഉപയോഗിക്കാം
- proxied ആയിരിക്കുമ്പോൾ ചില സവിശേഷതകൾ ശരിയായി പ്രവർത്തിക്കണമെന്നില്ല (ഉദാ., ചില WordPress admin functions)
- admin pages-ന് cache ഒഴിവാക്കാൻ Cloudflare-ന്റെ Page Rules ഉപയോഗിക്കുന്നത് പരിഗണിക്കുക
