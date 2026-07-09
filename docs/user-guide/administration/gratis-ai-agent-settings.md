---
title: "Gratis AI Agent Settings"
sidebar_position: 22
---

# Gratis AI Agent Settings

The **Settings → Advanced** screen in Gratis AI Agent provides administrator-level configuration for backend integrations. This page documents feedback forwarding, search provider keys, managed Superdav service setup, Google Calendar controls, TextBee SMS settings, public/customer chat controls, static documentation imports, calendar SMS reminder setup, and network-wide feature flags.

## Accessing Settings

1. In the WordPress admin, go to **Gratis AI Agent → Settings**.
2. Click the **Advanced** tab.

## Feedback Endpoint Configuration

The feedback endpoint receives POST requests from the AI agent whenever a user submits feedback via the thumbs-down button, the auto-prompt banner, or the `/report-issue` command.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | The URL that receives feedback submissions as HTTP POST requests with a JSON body. |
| **Feedback API Key** | A bearer token sent in the `Authorization` header of each feedback request. Leave blank if your endpoint does not require authentication. |

### Expected JSON Payload

Your feedback endpoint must accept a JSON body with at least the following fields:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Additional fields may be present in the payload depending on the conversation context.

### `triage_category` Values

The AI triage layer assigns one of the following values to `triage_category` before forwarding the payload:

| Value | Meaning |
|---|---|
| `factual_error` | The assistant provided incorrect factual information. |
| `unhelpful_answer` | The response was technically correct but not useful. |
| `inappropriate_content` | The response contained content that should not be shown to users. |
| `other` | The feedback did not match a known category. |

### Authentication

If your endpoint requires authentication, set the **Feedback API Key** field to your bearer token. The agent sends:

```
Authorization: Bearer <your-api-key>
```

If the **Feedback API Key** field is empty, no `Authorization` header is sent.

### Disabling Feedback Collection

Leave both the **Feedback Endpoint URL** and **Feedback API Key** fields blank. The thumbs-down button and feedback UI remain visible to users, but submissions are not forwarded to any external service.

## Brave Search API Key

Also on the **Advanced** tab, the **Brave Search API Key** field enables the [Internet Search](../configuration/internet-search) ability.

| Field | Description |
|---|---|
| **Brave Search API Key** | Your API key from the Brave Search developer dashboard. Required to enable internet search in the AI assistant. |

The field label includes a clickable link to the Brave Search API sign-up page. Leave blank to disable internet search.

See [Internet Search](../configuration/internet-search) for end-user documentation on this feature.

## Managed Superdav Service

Superdav AI Agent v1.18.0 adds managed Superdav service endpoints and automatic connection provisioning for supported sites. Use these controls when your site should connect to the hosted provider instead of a manually configured service endpoint.

| Field | Description |
|---|---|
| **Managed Superdav Service** | Enables the hosted Superdav service connection for supported sites. |
| **Provision Connection** | Starts automatic endpoint and credential provisioning. Use this after confirming the site should use the managed provider. |
| **Service Endpoint / Connection Status** | Shows the current endpoint or connection state after provisioning. |

After provisioning, save settings and verify the connection status before relying on managed-service workflows. If provisioning fails, review the displayed retry guidance and confirm the site has permission to use the hosted provider.

## Google Calendar Configuration

When Superdav AI Agent v1.18.0 calendar features are enabled, the agent can read configured calendars and event details. Calendar tools are read-oriented and are useful for schedule-aware reminders, attendee follow-up, and contact matching.

| Field | Description |
|---|---|
| **Google Calendar Credentials** | Stores the credentials or token connection required to read calendar data. |
| **Calendar Selection** | Limits which configured calendars the agent may inspect. |
| **Calendar Connection Status** | Confirms whether the current credentials can read calendars and events. |

Keep calendar credentials limited to the calendars the agent needs. Reconnect or rotate credentials if the status indicates an expired token.

## TextBee SMS Notifications

Superdav AI Agent v1.18.0 adds TextBee as an SMS provider for configured notification workflows. SMS notifications should be paired with human approval gates for sensitive or user-facing messages.

| Field | Description |
|---|---|
| **TextBee API Key** | Authenticates requests to the TextBee SMS provider. |
| **TextBee Device / Sender** | Selects the TextBee sender or device used for outgoing messages, when required by the provider. |
| **SMS Notifications Enabled** | Allows approved workflows to send text-message notifications. Leave disabled to prevent SMS sends. |

Send a test message only to an administrator-owned number, then confirm approval-gate behaviour before enabling scheduled or attendee-facing reminders.

## Public and Customer Chat Configuration

Superdav AI Agent v1.19.0 adds settings for customer-facing assistant experiences. Use these controls when visitors or customers should be able to ask limited questions without the full administrator chat panel.

| Field | Description |
|---|---|
| **Enable Anonymous Public Chat** | Allows approved unauthenticated visitors to open a public chat experience. Keep enabled tools limited to read-only support or documentation answers. |
| **Customer Simple Chat Mode** | Uses a simplified customer-facing chat interface instead of the full internal assistant panel. |
| **Docs Chat Widget / Embed Code** | Provides the widget or embed settings for placing a documentation-aware assistant on help, product, or documentation pages. |
| **Customer Chat Setup Tool** | Opens a guided setup flow for public-chat mode, widget placement, documentation sources, and safety settings. |

Recommended setup:

1. Configure the assistant name, branding, and public-chat scope.
2. Enable **Customer Simple Chat Mode** for customer-facing pages.
3. Use the **Customer Chat Setup Tool** to review allowed tools, anonymous access, and widget placement.
4. Test the widget in a private or staging page before adding it to public navigation.
5. Review a sample anonymous conversation and confirm the assistant answers only from approved sources or safe public context.

## Static Documentation Knowledge Imports

Static documentation imports let administrators build a searchable knowledge base from approved documentation sites. Use them before publishing a docs chat widget so the assistant can answer from current product documentation.

| Field | Description |
|---|---|
| **Documentation Import Sources** | Lists documentation sites, sections, or source URLs that may be imported. Use only trusted public or internal documentation sources that the assistant is allowed to quote. |
| **Run Documentation Import** | Starts or refreshes the static documentation import job. |
| **Knowledge Counts / Import Status** | Shows how many documents or chunks were imported and whether the last import completed successfully. |
| **Docs Chat Knowledge Scope** | Selects which imported documentation collections the public docs widget may use. |

After each import, check the knowledge count and test representative questions in the docs chat widget. Refresh imports after major documentation releases so customer-facing answers match the current docs.

## Calendar SMS Reminder Setup

Superdav AI Agent v1.19.0 adds setup controls for calendar-driven SMS reminder orchestration. These controls combine calendar access, attendee/contact mapping, SMS provider settings, approval gates, and reminder deduplication.

| Field | Description |
|---|---|
| **Calendar Reminder Workflow** | Enables calendar-driven reminder orchestration for selected calendars or event types. |
| **Reminder Calendar Selection** | Chooses which configured calendars may trigger reminder workflows. |
| **Attendee / Contact Mapping** | Controls how event attendees are matched to WordPress users, customer records, or known contacts before SMS reminders are prepared. |
| **Require Approval Before SMS** | Pauses reminder sends until an authorised administrator approves the proposed message. Recommended for customer-facing reminders. |
| **Reminder Deduplication** | Records sent reminders so retries or scheduled runs do not notify the same contact repeatedly. |

Before enabling recurring reminders, send a test reminder to an administrator-owned number, confirm attendee mapping, approve the proposed message, and verify that reminder records prevent duplicate sends.

## Feature Flags

Also introduced in v1.9.0, the **Settings → Feature Flags** tab provides toggle switches for optional functionality. Each flag is either enabled or disabled network-wide; there is no per-site override at this time.

### Accessing Feature Flags

1. In the WordPress admin, go to **Gratis AI Agent → Settings**.
2. Click the **Feature Flags** tab.

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | When enabled, only users with the `administrator` role can open the AI Agent chat panel. All other roles see a "Contact your administrator" message instead. |
| **Restrict to Network Admins** | Off | When enabled on a multisite network, only Super Admins can use the agent. Individual site admins are blocked. Takes precedence over "Restrict to Administrators" if both are enabled. |
| **Allow Subscriber Access** | Off | When enabled, users with the `subscriber` role can use the chat interface but are limited to read-only abilities (no post creation or settings changes). |
| **Disable for Non-Members** | Off | Integrates with Ultimate Multisite membership status. When enabled, chat is hidden for sites that do not have an active membership. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Removes the branding attribution line shown at the bottom of the chat widget. Recommended for white-label deployments. |
| **Custom Agent Name** | *(blank)* | Replaces the default "Gratis AI Agent" label in the chat header and admin menu with your own product name. Leave blank to use the default. |
| **Hide Agent Picker** | Off | When enabled, users cannot switch between the five built-in agents. The current agent is fixed to whatever is configured as the default in Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Replaces the default AI icon in the chat widget header with the WordPress site icon (set under Appearance → Customize → Site Identity). |

### Automation Safety Flags

Superdav AI Agent v1.18.0 introduces human approval gates and reminder records for safer automation runs. These controls may appear in the feature flags or advanced automation settings, depending on the installed package.

| Flag | Default | Description |
|---|---|---|
| **Require Human Approval** | Recommended on | Pauses sensitive automations until an authorised user reviews and confirms the proposed action. |
| **Reminder Deduplication** | On | Records sent reminders so retries or scheduled runs do not send duplicate notifications. |
| **Enable Calendar Tools** | Off until configured | Allows the agent to read configured Google calendars and events. |
| **Enable SMS Notifications** | Off until configured | Allows approved workflows to send TextBee SMS notifications after credentials are saved. |
| **Enable Public Chat** | Off | Allows anonymous public chat when public-chat settings and safety controls are configured. |
| **Enable Customer Simple Chat** | Off | Shows the simplified customer-facing chat mode instead of the internal administrator assistant. |
| **Enable Docs Chat Widget** | Off | Allows the embeddable documentation chat widget to answer from selected imported documentation sources. |

### Applying Changes

Click **Save Settings** after toggling any flag. Changes take effect immediately — no cache flush or plugin reactivation is required.
