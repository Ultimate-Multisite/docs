---
title: "CyberPanel Integration"
sidebar_position: 21
---

# CyberPanel Integration

This guide explains how to configure the Ultimate Multisite CyberPanel integration so that mapped domains in your network are automatically added (and removed) as virtual hosts in CyberPanel, with optional auto-SSL provisioning via Let's Encrypt.

## What It Does

- When a domain is mapped in Ultimate Multisite, the integration calls the CyberPanel API to create a virtual host for that domain.
- When a domain mapping is removed, the integration calls the API to delete the corresponding virtual host.
- When auto-SSL is enabled, the integration triggers Let's Encrypt certificate issuance immediately after the virtual host is created.
- Optionally adds/removes the `www.` alias depending on your "Auto-create www subdomain" setting in Domain Mapping settings.

## Prerequisites

- A running CyberPanel instance (v2.3 or later recommended) reachable from your WordPress server.
- An existing website in CyberPanel that already serves your WordPress network root. The integration attaches new virtual hosts to this server.
- CyberPanel API access enabled. Authentication uses your CyberPanel admin username and password.
- Your DNS records for mapped domains must already point to your server's IP address before auto-SSL can issue a valid certificate.

## Requirements

The following constants must be defined in your `wp-config.php` file:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Optionally, you can also define:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Setup Instructions

### 1. Enable the CyberPanel API

1. Log in to your CyberPanel dashboard as an administrator.
2. Go to **Security** > **SSL** and confirm that SSL is active on the CyberPanel interface itself (required for secure API calls).
3. The CyberPanel API is available at `https://your-server-ip:8090/api/` by default. No additional steps are needed to enable it — it is on by default for admin users.

### 2. Add Constants to wp-config.php

Add the following constants to your `wp-config.php` file before the `/* That's all, stop editing! */` line:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

To enable auto-SSL (recommended):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Enable the Integration

1. In your WordPress network admin, go to **Ultimate Multisite** > **Settings**.
2. Navigate to the **Domain Mapping** tab.
3. Scroll down to **Host Integrations**.
4. Enable the **CyberPanel** integration.
5. Click **Save Changes**.

### 4. Verify Connectivity

Use the built-in connection test in the settings wizard:

1. Go to **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Click **Test Connection**.
3. A success message confirms that the plugin can reach the CyberPanel API and authenticate correctly.

## How It Works

### Domain Mapping

When a domain is mapped in Ultimate Multisite:

1. The integration sends a `POST` request to `/api/createWebsite` on your CyberPanel host.
2. CyberPanel creates a new virtual host for the domain under the configured package.
3. The document root is set to point to your WordPress network root directory.
4. When the domain mapping is removed, the integration calls `/api/deleteWebsite` to clean up the virtual host.

### Auto-SSL

When `WU_CYBERPANEL_AUTO_SSL` is `true`:

1. After the virtual host is created, the integration calls `/api/issueSSL` for the domain.
2. CyberPanel requests a Let's Encrypt certificate using the ACME HTTP-01 challenge.
3. The certificate is automatically renewed by CyberPanel before expiry.

> **Important:** DNS must be fully propagated to your server's IP address before Let's Encrypt can validate the domain. If SSL issuance fails immediately after mapping, wait for DNS propagation and re-trigger SSL from the CyberPanel dashboard under **SSL** > **Manage SSL**.

### www Subdomain

If **Auto-create www subdomain** is enabled in your Domain Mapping settings, the integration also creates a virtual host alias for `www.<domain>` and, when auto-SSL is on, issues a certificate covering both the apex and www variants.

### Email Forwarders

When the [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon is active, CyberPanel can also provide customer email forwarders. Forwarders route messages from a domain address to another inbox without creating a full mailbox, which is useful for aliases such as `info@customer-domain.test` or `support@customer-domain.test`.

Before enabling forwarders for customers:

1. Confirm the CyberPanel constants above are configured and the connection test passes.
2. Enable the CyberPanel email provider in the Emails addon settings.
3. Confirm the customer domain already exists in CyberPanel before creating the forwarder.
4. Create a test forwarder and send a message through it before offering the feature on production plans.

If forwarder creation fails, check the Ultimate Multisite activity logs first, then confirm in CyberPanel that the source domain exists and that the API user has email-management permissions.

## Configuration Reference

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | Full URL to your CyberPanel instance including port, e.g. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | CyberPanel hosting package to assign to new virtual hosts |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Issue a Let's Encrypt SSL certificate after domain creation |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | PHP version for new virtual hosts (must match a version installed in CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Contact email for SSL certificate registration |

## Important Notes

- CyberPanel's API uses session-based token authentication. The integration handles token acquisition automatically on each API call.
- Your CyberPanel admin account must have permissions to create and delete websites.
- CyberPanel runs on port `8090` by default. If your server uses a firewall, ensure this port is accessible from the WordPress application server.
- The integration does not manage DNS records. You must point domain DNS to your server's IP address before mapping the domain in Ultimate Multisite.
- If you use OpenLiteSpeed (OLS), a graceful restart is triggered automatically after virtual host changes. No manual intervention is needed.

## Troubleshooting

### API Connection Refused

- Verify that port `8090` is open in your server firewall.
- Confirm the `WU_CYBERPANEL_HOST` value includes the correct protocol (`https://`) and port.
- Check that your CyberPanel SSL certificate is valid; self-signed certificates may cause TLS verification failures. Set `WU_CYBERPANEL_VERIFY_SSL` to `false` only in trusted private network environments.

### Authentication Errors

- Confirm your `WU_CYBERPANEL_USERNAME` and `WU_CYBERPANEL_PASSWORD` are correct by logging in to CyberPanel directly.
- CyberPanel locks accounts after repeated failed login attempts. Check **Security** > **Brute Force Monitor** in CyberPanel if lockouts occur.

### Domain Not Created

- Check the Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) for API error messages.
- Verify that the package defined in `WU_CYBERPANEL_PACKAGE` exists in CyberPanel (**Packages** > **List Packages**).
- Ensure the domain is not already registered as a website in CyberPanel — duplicate website creation returns an error.

### SSL Certificate Not Issued

- Confirm DNS has fully propagated: `dig +short your-domain.com` should return your server's IP.
- Let's Encrypt enforces rate limits. If you have recently issued several certificates for the same domain, wait before retrying.
- Check the CyberPanel SSL logs under **Logs** > **Error Logs** for details on certificate issuance failures.
- As a fallback, you can issue SSL manually from CyberPanel: **SSL** > **Manage SSL** > select the domain > **Issue SSL**.

## References

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
