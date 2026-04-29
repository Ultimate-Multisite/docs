---
title: "Gratis AI Agent Settings"
sidebar_position: 22
---

# Gratis AI Agent Settings

The **Settings → Advanced** screen in Gratis AI Agent provides administrator-level configuration for backend integrations introduced in v1.5.0. This page documents the **Feedback Endpoint** fields and their expected format.

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

### Applying Changes

Click **Save Settings** after toggling any flag. Changes take effect immediately — no cache flush or plugin reactivation is required.
