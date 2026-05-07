---
title: "Cloudways Integration"
sidebar_position: 3
---

# Cloudways Integration

## Overview
Cloudways is a managed cloud hosting platform that allows you to deploy WordPress sites on various cloud providers like DigitalOcean, AWS, Google Cloud, and more. This integration enables automatic domain syncing and SSL certificate management between Ultimate Multisite and Cloudways.

## Features
- Automatic domain syncing
- SSL certificate management
- Support for extra domains
- DNS validation for SSL certificates

## Requirements
The following constants must be defined in your `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Optionally, you can also define:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions

### 1. Get Your Cloudways API Credentials

1. Log in to your Cloudways dashboard
2. Go to "Account" > "API Keys"
3. Generate an API key if you don't already have one
4. Copy your email and API key

### 2. Get Your Server and Application IDs

1. In your Cloudways dashboard, go to "Servers"
2. Select the server where your WordPress multisite is hosted
3. The Server ID is visible in the URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Go to "Applications" and select your WordPress application
5. The App ID is visible in the URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants to wp-config.php

Add the following constants to your `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

If you have additional **external** domains (outside your multisite network) that should always be kept on the Cloudways aliases list:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Do not include your own network's wildcard
Do **not** add `*.your-network.com` (or any subdomain pattern of your own network) to
`WU_CLOUDWAYS_EXTRA_DOMAINS`. See [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall)
below for why this prevents per-tenant SSL certificates from being issued.
:::

### 4. Enable the Integration

1. In your WordPress admin, go to Ultimate Multisite > Settings
2. Navigate to the "Domain Mapping" tab
3. Scroll down to "Host Integrations"
4. Enable the Cloudways integration
5. Click "Save Changes"

## How It Works

### Domain Syncing

When a domain is mapped in Ultimate Multisite:

1. The integration retrieves all currently mapped domains
2. It adds the new domain to the list (along with a www version if applicable)
3. It sends the complete list to Cloudways via the API
4. Cloudways updates the domain aliases for your application

Note: The Cloudways API requires sending the complete list of domains each time, not just adding or removing individual domains.

### SSL Certificate Management

After domains are synced:

1. The integration checks which domains have valid DNS records pointing to your server
2. It sends a request to Cloudways to install Let's Encrypt SSL certificates for those domains
3. Cloudways handles the SSL certificate issuance and installation

The integration always requests **standard** (non-wildcard) Let's Encrypt certificates from
Cloudways. If a wildcard pattern is supplied in `WU_CLOUDWAYS_EXTRA_DOMAINS`, the leading
`*.` is stripped before the SSL request — the wildcard itself is never installed by this
integration. To use a wildcard certificate on Cloudways you would have to install it
manually, but doing so blocks per-domain Let's Encrypt issuance for mapped custom domains
(see the pitfall below).

## Extra Domains

The `WU_CLOUDWAYS_EXTRA_DOMAINS` constant allows you to specify additional **external**
domains that should always be kept on the Cloudways application's aliases list. Use it for:

- External domains that are not managed by Ultimate Multisite (e.g. a separate marketing site sharing the same Cloudways application)
- Parked or staging domains you want kept on the application aliases list

Do **not** use this constant for your own network's subdomain wildcard
(e.g. `*.your-network.com`). See the wildcard SSL pitfall below.

## Important — Wildcard SSL Pitfall

A common mistake when following Cloudways' default setup is to add a wildcard such as
`*.your-network.com` to `WU_CLOUDWAYS_EXTRA_DOMAINS`, or to manually install a Cloudways
wildcard SSL certificate for that wildcard.

**If you do this, Cloudways will refuse to issue Let's Encrypt certificates for the
per-tenant custom domains that Ultimate Multisite maps.** Cloudways replaces the active
SSL certificate on the application each time, and a pre-existing wildcard certificate on
the application blocks the per-domain Let's Encrypt issuance the integration relies on.

### Recommended Cloudways SSL setup for an Ultimate Multisite network

1. In the Cloudways application's **SSL Certificate** tab, install a **standard
   Let's Encrypt certificate** covering only `your-network.com` and `www.your-network.com`
   — **not** a wildcard.
2. Do **not** put `*.your-network.com` (or any subdomain pattern of your own network) in
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserve that constant for **external** domains only.
3. Create the per-tenant subdomain wildcard at the **DNS** level only (an `A` record for
   `*.your-network.com` pointing at your Cloudways server IP) so subsites resolve. SSL
   for individual mapped custom domains is then issued automatically by the integration
   via Let's Encrypt.

If your tenants' custom domains are stuck without SSL, check the Cloudways SSL tab. If a
wildcard certificate is active there, remove it, reissue a standard Let's Encrypt
certificate for the main network domain only, and remove any wildcard entries from
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Then re-trigger a domain mapping (or wait for the next one)
and the integration will start issuing per-domain certificates again.

## Troubleshooting

### API Connection Issues
- Verify that your email and API key are correct
- Check that your server and application IDs are correct
- Ensure that your Cloudways account has the necessary permissions

### SSL Certificate Issues
- Cloudways requires that domains have valid DNS records pointing to your server before issuing SSL certificates
- The integration validates DNS records before requesting SSL certificates
- If SSL certificates are not being issued, check that your domains are properly pointing to your server's IP address
- **Per-tenant custom domains stuck without SSL?** Check the Cloudways application's SSL Certificate tab. If a wildcard certificate (manually installed, or covering `*.your-network.com`) is active, Cloudways will not issue Let's Encrypt certificates for individually mapped custom domains. Replace it with a standard Let's Encrypt certificate covering only the main network domain (`your-network.com`, `www.your-network.com`) and remove any wildcard entries from `WU_CLOUDWAYS_EXTRA_DOMAINS`. Then re-trigger a domain mapping (or wait for the next one) and the integration will request per-domain certificates.

### Domain Not Added
- Check the Ultimate Multisite logs for any error messages
- Verify that the domain is not already added to Cloudways
- Ensure that your Cloudways plan supports the number of domains you're adding
