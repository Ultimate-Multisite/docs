---
title: "Settings Reference"
sidebar_position: 11
---

# Settings Reference

This page tracks settings that affect day-to-day administration and recent behaviour changes in Ultimate Multisite.

## Other Options

The **Other Options** area appears under **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Description |
|---|---|
| **Enable Jumper** | Shows the Jumper quick navigation tool in the admin area. Use it to jump directly to Ultimate Multisite screens, network objects, and supported admin destinations. Disable it if you do not want this shortcut visible. |

## Error reporting and telemetry

The previous error-reporting opt-in setting has been removed from the settings page. Anonymous telemetry is disabled and there is no UI toggle to enable it.

If you maintain internal runbooks or screenshots for the settings page, remove references to the old error-reporting opt-in field so administrators do not look for a setting that is no longer present.

## Import/Export settings

The **Import/Export** settings tab describes which settings it controls and links directly to **Ultimate Multisite > Site Export** for site and network archives. Use the settings tab for import/export configuration, use **Tools > Export & Import** for the single-site export/import workflow, and use the Site Export tool when you need a full Network Export archive.

## Domain Seller HostAfrica balance warning

When the Domain Seller addon is connected to HostAfrica, network administrators now see a dismissible balance-low warning when the reseller account balance is too low for reliable domain registration or renewal processing.

Treat this notice as an operational warning: top up the HostAfrica reseller balance before accepting more paid domain registrations, then return to the Domain Seller settings or domain-monitoring screen to confirm registrations and renewals can continue normally.

## AI provider connector settings

AI provider connector settings now expose only the supported OAuth account pools:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | Connect one or more Anthropic Max accounts with the OAuth button. Use the manual OAuth fallback when a sandboxed browser cannot complete the redirect automatically. |
| **OpenAI ChatGPT/Codex** | Connect ChatGPT accounts through the same OAuth pool workflow. Connector-supported operations can use ChatGPT Codex tool calls after the account is connected. |
| **Google AI Pro** | Connect Google AI Pro accounts through OAuth, then refresh the connector if the account list does not update immediately. |

Cursor Pro is no longer a supported provider. Remove old internal screenshots, runbooks, or onboarding steps that mention Cursor Pro setup fields or connector paths.

When adding or removing provider accounts, enter a valid email address for the account being refreshed or deleted and save the provider settings before testing connector-backed operations.
