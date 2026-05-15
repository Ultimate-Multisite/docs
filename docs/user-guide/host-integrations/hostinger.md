---
title: "Hostinger (hPanel) Integration"
sidebar_position: 7
---

# Hostinger (hPanel) Integration

## Overview

Hostinger is a popular web hosting provider with a modern control panel called hPanel. The Ultimate Multisite Hostinger integration enables automatic domain syncing between Ultimate Multisite and Hostinger's hPanel, allowing you to automatically manage domain mappings and subdomains directly from your WordPress admin.

## Features

- Automatic addon domain creation in hPanel
- Automatic subdomain creation in hPanel (for subdomain multisite installations)
- Domain removal when mappings are deleted
- Seamless integration with hPanel's domain management API

## Requirements

To use the Hostinger integration, you need:

1. A Hostinger account with hPanel access
2. An API token from Hostinger
3. The following constants defined in your `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Optionally, you can also define:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Setup Instructions

### 1. Generate Your Hostinger API Token

1. Log in to your Hostinger account and access hPanel
2. Navigate to **Account Settings** → **API Tokens**
3. Click **Create New Token**
4. Give your token a descriptive name (e.g., "Ultimate Multisite")
5. Select the necessary permissions:
   - Domain management
   - Subdomain management
6. Copy the generated token and store it securely

### 2. Find Your Account ID

1. In hPanel, go to **Account Settings** → **Account Information**
2. Your Account ID is displayed on this page
3. Copy and save this ID for the next step

### 3. Add Constants to wp-config.php

Add the following constants to your `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

If your Hostinger account uses a different API endpoint, you can customize it:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Enable the Integration

1. In your WordPress admin, go to **Ultimate Multisite > Settings**
2. Navigate to the **Domain Mapping** tab
3. Scroll down to **Host Integrations**
4. Enable the **Hostinger (hPanel)** integration
5. Click **Save Changes**

## How It Works

### Addon Domains

When you map a domain in Ultimate Multisite:

1. The integration sends a request to Hostinger's API to add the domain as an addon domain
2. The domain is configured to point to your root directory
3. When a domain mapping is removed, the integration automatically removes the addon domain from hPanel

### Subdomains

For subdomain multisite installations, when a new site is created:

1. The integration extracts the subdomain part from the full domain
2. It sends a request to Hostinger's API to add the subdomain
3. The subdomain is configured to point to your root directory

## Important Notes

- The integration uses Hostinger's REST API to communicate with your account
- Your API token must have the necessary permissions for domain and subdomain management
- The integration does not handle DNS configuration; domains must already be pointed to your Hostinger account
- API requests are made securely over HTTPS
- Keep your API token secure and never share it publicly

## Troubleshooting

### API Connection Issues

- Verify that your API token is correct and has not expired
- Check that your Account ID is correct
- Ensure that your API token has the necessary permissions for domain management
- Verify that your Hostinger account is active and in good standing

### Domain Not Added

- Check the Ultimate Multisite logs for any error messages
- Verify that the domain is not already added to your Hostinger account
- Ensure that your Hostinger account has not reached its limit for addon domains
- Confirm that the domain is properly pointed to your Hostinger nameservers

### SSL Certificate Issues

- The integration does not handle SSL certificate issuance
- Hostinger typically provides free SSL certificates through AutoSSL
- You can manage SSL certificates directly in hPanel under **SSL/TLS**
- Alternatively, use Let's Encrypt with Hostinger's AutoSSL feature

## Support

For additional help with the Hostinger integration, please refer to:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
