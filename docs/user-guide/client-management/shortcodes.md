---
title: "Shortcodes and Gutenberg Blocks"
sidebar_position: 15
---

# Shortcodes and Gutenberg Blocks

Ultimate Multisite provides shortcodes for checkout, login, customer account, and site-management interfaces. Every shortcode below is also available as a corresponding Ultimate Multisite Gutenberg block. Use the block editor when you want a visual configuration experience, or use the shortcode in the Classic Editor, a shortcode-capable widget, template content, or custom page builder.

The shortcode and its matching block provide the same feature and settings. Settings selected in a Gutenberg block are rendered as shortcode attributes when the page is saved.

## Building custom customer dashboards and account pages

Create a WordPress page and combine the account-focused blocks or shortcodes in the order that suits your customer journey. For example, a compact customer dashboard might contain:

```text
[wu_my_sites columns="3"]
[wu_current_membership]
[wu_invoices limit="5"]
[wu_site_actions]
```

For a site-specific account page, use **My Sites** to let a customer choose a site, then add **Site**, **Account Summary**, **Limits & Quotas**, **Domains**, and **Actions** to the destination page. Choose the destination page in the **My Sites** block's custom management-page setting, and use the relevant page setting in **Site** for its breadcrumbs.

Shortcodes that show customer, membership, billing, or site data use the current logged-in customer and selected site. Place them on pages customers can access after signing in. Use page IDs for settings that select another page, such as `custom_manage_page`, `breadcrumbs_my_sites_page`, and `redirect_after_delete`.

## Checkout

### Checkout — `[wu_checkout]`

Adds a checkout form to the page.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `slug` | The checkout form slug. | Text | `main-form` |
| `defer` | Outputs a cache-safe placeholder, then loads fresh checkout markup after visitor intent. | `0`, `1` | — |
| `defer_trigger` | Determines when a deferred form requests its live markup. | `viewport`, `click`, `load` | `viewport` |

## Authentication and content

### Login Form — `[wu_login_form]`

Adds a login form to the page.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `display_title` | Shows or hides the title. | `0`, `1` | `1` |
| `title` | Login form title. | Text | `Login` |
| `redirect_type` | Selects where to send the customer after login. | `default`, `customer_site`, `main_site` | `default` |
| `customer_redirect_path` | Path to use when redirecting to the customer site. | Text | `/wp-admin` |
| `main_redirect_path` | Path to use when redirecting to the main site. | Text | `/wp-admin` |
| `label_username` | Username field label; leave blank to hide it. | Text | `Username or Email Address` |
| `placeholder_username` | Username field placeholder. | Text | — |
| `label_password` | Password field label; leave blank to hide it. | Text | `Password` |
| `placeholder_password` | Password field placeholder. | Text | — |
| `remember` | Shows or hides the Remember Me checkbox. | `0`, `1` | `1` |
| `label_remember` | Remember Me label. | Text | `Remember Me` |
| `desc_remember` | Remember Me description. | Text | `Keep me logged in for two weeks.` |
| `label_log_in` | Login button label. | Text | `Log In` |

### Simple Text — `[wu_simple_text]`

Adds a simple text block. Use it to place text, HTML, or another shortcode between account components.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `simple_text` | Content to display. | Plain text, HTML, or shortcode | `Text, HTML or shortcode.` |

## Sites and memberships

### My Sites — `[wu_my_sites]`

Lists sites owned by the current customer and provides quick-access links.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `site_manage_type` | Selects the page used to manage a selected site. | `default`, `wp_admin`, `custom_page` | `default` |
| `site_show` | Selects which customer sites to list. | `all`, `owned` | `owned` |
| `custom_manage_page` | Page ID to open when `site_manage_type` is `custom_page`. | Page ID | `0` |
| `columns` | Number of columns in the list. | Number | `4` |
| `display_images` | Shows or hides site screenshots. | `0`, `1` | `1` |

### Site — `[wu_current_site]`

Displays the currently selected site's title, URL, and quick actions.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `display_breadcrumbs` | Shows or hides breadcrumbs. | `0`, `1` | `1` |
| `breadcrumbs_my_sites_page` | Page ID for the customer site list used by breadcrumbs. | Page ID | `0` |
| `display_description` | Shows or hides the site description. | `0`, `1` | `0` |
| `display_image` | Shows or hides the site screenshot. | `0`, `1` | `1` |
| `screenshot_size` | Screenshot size. | Number | `200` |
| `screenshot_position` | Screenshot position. | `right`, `left` | `right` |
| `show_admin_link` | Shows or hides the WordPress admin link. | `0`, `1` | `1` |

### Membership — `[wu_current_membership]`

Displays the current membership, including its plan, status, and billing cycle.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `title` | Section title; leave blank to hide it. | Text | `Your Membership` |
| `display_images` | Shows or hides product images. | `0`, `1` | `1` |
| `columns` | Number of columns. | Number | `2` |

### Account Summary — `[wu_account_summary]`

Displays a summary of the customer account, including membership and site information.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `title` | Section title; leave blank to hide it. | Text | `About this Site` |

### Limits & Quotas — `[wu_limits]`

Displays the current site's usage limits, such as disk space, posts, and users.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `title` | Section title; leave blank to hide it. | Text | `Site Limits` |
| `columns` | Number of columns. | Number | `1` |

## Billing and domains

### Billing Information — `[wu_billing_info]`

Displays the customer's billing address and contact information.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `title` | Section title; leave blank to hide it. | Text | `Billing Address` |

### Invoices — `[wu_invoices]`

Displays customer invoices and payment history.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `title` | Section title; leave blank to hide it. | Text | `Invoices` |
| `limit` | Maximum number of invoices to display; `0` shows no limit. | Integer | `0` |

### Payment Methods — `[wu_payment_methods]`

Displays and manages the customer's saved payment methods.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `title` | Section title; leave blank to hide it. | Text | `Payment Method` |

### Domains — `[wu_domain_mapping]`

Allows customers to manage custom domains mapped to their site.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `title` | Section title; leave blank to hide it. | Text | `Domains` |

### Domain Search — `[wu_domain_search]`

Adds a domain search form for purchasing or registering a domain.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `product_id` | ID of the domain product to use at checkout. | Text | — |
| `title` | Heading above the search form. | Text | `Register a Domain` |
| `subtitle` | Description below the heading. | Text | `Search for your perfect domain name.` |
| `button_label` | Label for the register button in each result. | Text | `Register` |

## Customer actions and utilities

### Actions — `[wu_site_actions]`

Displays site-management actions, including preview, publish, and delete controls.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `show_change_password` | Shows or hides the password link. | `0`, `1` | `1` |
| `show_change_email` | Shows or hides the email-change link. | `0`, `1` | `1` |
| `show_change_default_site` | Shows or hides the default-site control. | `0`, `1` | `1` |
| `show_change_payment_method` | Shows or hides the payment-method control. | `0`, `1` | `1` |
| `redirect_after_delete` | Page ID to open after deleting the current site. | Page ID | `0` |

### Magic Link URL — `[wu_magic_link_url]`

Generates a magic-link URL for quick authenticated site access.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `site_id` | ID of the site for which to generate a magic link. | Text | — |
| `display_as` | Selects how to display the link. | `anchor`, `button`, `url` | `anchor` |
| `link_text` | Text for the link or button. | Text | `Visit Site` |
| `open_in_new_tab` | Opens the link in a new tab. | `0`, `1` | `0` |

### Email Management — `[wu_email_management]`

Adds an email-account management panel.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `title` | Heading above the panel. | Text | `Email Accounts` |

### Support Chat Button — `[wu_support_chat_button]`

Adds a button that opens the customer-support chat widget.

| Parameter | Description | Accepted values | Default |
| --- | --- | --- | --- |
| `label` | Button text. | Text | `Start support chat` |
| `fallback_url` | Destination when JavaScript is unavailable or chat cannot open. | Text | `#um-support-chat` |
| `style` | Visual button style. | `primary`, `secondary` | `primary` |
| `size` | Button size. | `regular`, `small`, `large` | `regular` |
| `render_widget` | Enables standalone chat-launcher behaviour; disable only if another chat widget is already on the page. | `0`, `1` | `1` |
| `poll_interval` | Chat update interval in milliseconds; minimum `10000`. | Number | `15000` |
| `ticket_id` | Optional support ticket ID for the chat session. | Number | `0` |
| `ws_url` | Optional `ws://` or `wss://` real-time chat endpoint. | Text | — |
