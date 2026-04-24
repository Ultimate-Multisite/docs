---
title: "Membership Expiration and Site Blocking"
sidebar_position: 10
---

# Membership Expiration and Site Blocking

This guide explains how Ultimate Multisite handles membership expiration, trial endings, and frontend site blocking. It covers the lifecycle of a membership from active to expired, the settings that control whether sites are blocked, and what to check when sites remain accessible after a membership expires.

## Membership Status Lifecycle

Every membership in Ultimate Multisite has one of the following statuses:

| Status | Meaning |
|---|---|
| **Pending** | Awaiting first payment or email verification |
| **Trialing** | Active trial period, no payment collected yet |
| **Active** | Paid and current |
| **On Hold** | Renewal payment is pending (invoice created, awaiting payment) |
| **Expired** | Past the expiration date and grace period without renewal |
| **Cancelled** | Explicitly cancelled by the customer or admin |

### How Memberships Transition to Expired

Ultimate Multisite runs a background check **every hour** that looks for memberships that should be marked as expired. This check uses [Action Scheduler](https://actionscheduler.org/) (not WP-Cron directly) and runs as the `wu_membership_check` scheduled action.

The expiration check has a **built-in grace period of 3 days** by default. A membership will not be marked as `expired` until 3 days after its `date_expiration` passes. This gives customers time to complete a late payment before their status changes.

:::info
The 3-day expiration grace period is separate from the Frontend Block Grace Period setting described below. The expiration grace period controls when the **status changes** from active/on-hold to expired. The frontend block grace period controls when the **site is blocked** after the status has already changed.
:::

#### Auto-Renewing vs. Non-Auto-Renewing Memberships

This distinction is critical to understanding expiration behavior:

- **Non-auto-renewing memberships** (`auto_renew = false`): The hourly cron job handles the full lifecycle -- it creates renewal payments, transitions the membership to on-hold, and eventually marks it as expired if payment is not received.

- **Auto-renewing memberships** (`auto_renew = true`): The cron expiration check **skips these entirely**. The payment gateway (Stripe, PayPal, etc.) is expected to notify Ultimate Multisite via webhooks when a subscription fails or is cancelled. If the webhook is not received -- due to a misconfigured endpoint, a gateway outage, or a subscription cancelled outside the system -- the membership may remain `active` indefinitely even after the expiration date passes.

### How Trials End

When a trialing membership's trial period ends, the system:

1. Creates a pending renewal payment with the full subscription amount
2. Transitions the membership status from `trialing` to `on-hold`
3. Sends a renewal payment notification email to the customer

This process runs on the same hourly schedule as the regular expiration check, but **only for non-auto-renewing memberships**. For auto-renewing trials, the payment gateway handles the transition from trial to paid subscription.

## Block Frontend Access

By default, when a membership expires or goes on hold, **only the wp-admin dashboard is restricted**. The site's public frontend remains accessible to visitors. To also block public access, you must enable the **Block Frontend Access** setting.

### Configuring the Setting

Navigate to **Ultimate Multisite > Settings > Memberships** and enable **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Three related settings control this behavior:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Master toggle. When enabled, blocks the public frontend of network sites when their membership is no longer active. | Off |
| **Frontend Block Grace Period** | Number of days to wait after the membership goes inactive before blocking. Set to `0` to block immediately. | 0 |
| **Frontend Block Page** | A page on the main site to redirect visitors to when a site is blocked. If not set, visitors see a generic "Site not available" message. | None |

### What Visitors See When a Site Is Blocked

When frontend access is blocked, visitors to the site will either:

1. **Be redirected** to the page you selected in **Frontend Block Page** (if configured), or
2. **See a default message**: "This site is not available at the moment." with a link to the login page for the site admin.

Site admins can still log in -- the login page is never blocked.

### What Gets Blocked and When

The blocking behavior depends on the membership status:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (see note below) | -- |
| On Hold | Considered active -- not blocked | -- |
| Expired | **Yes**, if Block Frontend Access is on | Yes |
| Cancelled | **Yes**, always (regardless of setting) | **No** -- blocked immediately |
| Pending | Not blocked via membership check | -- |

:::warning Trialing memberships are not blocked
Even if a trial period has ended, a membership with `trialing` status will **not** be blocked on the frontend. The trial must first transition to another status (typically `on-hold` via the cron job, then `expired` if unpaid). If you are seeing trialing memberships that have not transitioned, check the troubleshooting section below.
:::

:::note Cancelled memberships bypass the grace period
Cancelled memberships are always blocked once the expiration date has passed, regardless of whether Block Frontend Access is enabled. The Frontend Block Grace Period does **not** apply to cancelled memberships.
:::

## Troubleshooting: Sites Remaining Accessible After Expiration

If sites remain publicly accessible after a membership expires, work through these checks in order:

### 1. Verify the Block Frontend Access Setting Is Enabled

Go to **Ultimate Multisite > Settings > Memberships** and confirm the **Block Frontend Access** toggle is on. This setting is **off by default**, meaning only wp-admin is restricted when a membership becomes inactive.

### 2. Check the Frontend Block Grace Period

On the same settings page, check the **Frontend Block Grace Period** value. If this is set to 7 days, for example, the frontend will not be blocked until 7 days after the membership's expiration date -- even if the membership status is already `expired`.

Set this to `0` if you want immediate blocking after the membership becomes inactive.

### 3. Confirm the Membership Status Has Actually Changed

Go to **Ultimate Multisite > Memberships** and check the status of the affected membership. If it still shows `active` despite the expiration date having passed, the status transition has not occurred. Common causes:

- **The membership is auto-renewing**: Check the `auto_renew` field on the membership edit page. If auto-renew is enabled, the expiration cron skips this membership -- it relies on the payment gateway to report the failure. Check your gateway dashboard (Stripe, PayPal) to confirm the subscription status matches what Ultimate Multisite shows.

- **The cron job has not run**: See the next step.

### 4. Verify Action Scheduler Is Running

Ultimate Multisite uses Action Scheduler for its cron jobs. Go to **Tools > Scheduled Actions** in the network admin and look for:

- **`wu_membership_check`** -- This should appear as a recurring action running every hour. If it is missing, the membership checks are not being scheduled.
- **`wu_async_mark_membership_as_expired`** -- These are individual tasks to mark specific memberships as expired. If you see failed actions here, they may contain error messages explaining why.

If you see stuck or failed actions, you may have an Action Scheduler issue. Common causes:

- **`DISABLE_WP_CRON` is set to `true`** in `wp-config.php` without a system-level cron replacement
- **Low site traffic** -- WP-Cron only runs when someone visits the site

To ensure reliable cron execution, set up a system cron job:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Check for Gateway Webhook Issues (Auto-Renewing Memberships)

If the membership is auto-renewing and the gateway subscription has been cancelled or has failed, but Ultimate Multisite still shows it as `active`:

- **Stripe**: Go to the Stripe Dashboard > Customers and check the subscription status. Then verify the webhook endpoint is active under Developers > Webhooks. The endpoint should point to your site and show successful deliveries.
- **PayPal**: Check the subscription status in your PayPal business account and verify IPN/webhook delivery.

If the gateway shows the subscription as cancelled but Ultimate Multisite does not, the webhook notification was likely lost. You can manually change the membership status in **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Check the Expiration Grace Period (Cron Level)

The cron check has its own grace period (default: 3 days) before marking a membership as expired. This is separate from the frontend block grace period. The total time before a site is blocked can be:

**Expiration grace period (3 days)** + **Frontend block grace period (your setting)** = Total delay

For example, with default settings and a 7-day frontend grace period, it could take up to 10 days after the `date_expiration` before the site is actually blocked.

### 7. Manually Expire a Membership

If you need to immediately block a site without waiting for the cron cycle, you can manually change the membership status:

1. Go to **Ultimate Multisite > Memberships**
2. Click on the affected membership
3. Change the status to **Expired** or **Cancelled**
4. Click **Save**

The frontend block will take effect on the next page load (subject to the Frontend Block Grace Period for expired memberships, or immediately for cancelled memberships).

## Summary

The full timeline from expiration date to site blocking:

```text
date_expiration passes
       |
       v
  [3-day cron grace period]     <-- membership still shows as active/on-hold
       |
       v
  Cron marks membership as "expired"
       |
       v
  [Frontend Block Grace Period]  <-- configured in Settings > Memberships
       |
       v
  Site frontend is blocked
```

For cancelled memberships, the path is shorter:

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## Developer Reference

The following hooks and filters allow you to customize the expiration and blocking behavior:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filter the number of grace period days before marking a membership as expired (default: 3) |
| `wu_schedule_membership_check_interval` | Filter the interval between membership checks (default: 1 hour) |
| `wu_membership_renewal_days_before_expiring` | Filter how many days before expiration to create a renewal payment (default: 3) |
| `wu_blocked_site_reactivation_url` | Filter to provide a custom reactivation URL when a site is blocked |
| `wu_membership_is_active` | Filter whether a membership is considered active |
| `wu_membership_expired_check_query_params` | Filter the query parameters used to find expired memberships |
| `wu_membership_trial_check_query_params` | Filter the query parameters used to find expired trials |
