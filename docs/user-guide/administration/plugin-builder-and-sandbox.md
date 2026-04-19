---
title: "Plugin Builder & Sandbox"
sidebar_position: 21
---

# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introduces the **Plugin Builder & Sandbox System**, which lets the AI assistant generate, activate, and manage WordPress plugins on your network — all through a safe, isolated sandbox environment.

## Overview

The Plugin Builder enables the AI assistant to write custom WordPress plugins in response to natural language requests. Generated plugins are validated, stored, and activated inside a sandbox layer before they ever affect live site functionality.

Use cases include:

- Generating lightweight utility plugins without developer involvement.
- Prototyping features that require WordPress hooks or custom post types.
- Creating short-lived automation scripts for batch operations.

## Generating a Plugin via AI

To generate a plugin, open the Gratis AI Agent chat interface and describe what you need. For example:

> "Create a plugin that adds a custom admin notice on the dashboard."

The AI will:

1. Produce the plugin PHP code using structured code generation.
2. Validate the output for syntax errors and unsafe patterns.
3. Save the generated plugin to the sandbox store.
4. Return a confirmation with the plugin slug and an **Activate in Sandbox** button.

You can refine the result by following up in the same conversation thread before activating.

## Sandbox Activation

Activating a generated plugin in the sandbox is distinct from activating it on the live network. The sandbox:

- Runs the plugin in an isolated WordPress environment (wp-env).
- Captures any PHP errors, warnings, or hook conflicts.
- Reports the activation result back in the chat interface.

To activate a plugin in the sandbox, click the **Activate in Sandbox** button in the AI chat response, or use the slash command:

```
/activate-plugin <plugin-slug>
```

A status message confirms whether activation succeeded or failed. On failure, the error log is displayed in the chat thread.

## Managing Generated Plugins

Generated plugins are listed in **Gratis AI Agent → Plugin Builder → Manage Plugins**. From this screen you can:

| Action | Description |
|---|---|
| **View source** | Review the full plugin PHP code. |
| **Re-activate in sandbox** | Re-run the sandbox activation check. |
| **Install on network** | Deploy the plugin to the live network (requires manual confirmation). |
| **Update** | Provide a new version via the AI, replacing the existing code. |
| **Delete** | Remove the plugin from the sandbox store. Deactivates it from all sites first. |

:::warning
**Install on network** deploys the generated plugin to your live WordPress multisite. Review the plugin code before proceeding. Gratis AI Agent will prompt for confirmation before completing a live install.
:::

## Installing a Generated Plugin on the Network

When you are satisfied with a sandboxed plugin, you can install it on the live network:

1. Go to **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Click **Install on Network** next to the plugin you want to deploy.
3. Confirm the dialog. The plugin is installed to `wp-content/plugins/` and network-activated.

Alternatively, use the slash command in the chat interface:

```
/install-plugin <plugin-slug>
```

## Plugin Updates

To update a generated plugin, describe the change to the AI assistant in a new conversation:

> "Update the dashboard-notice plugin to only show the notice to administrators."

The AI generates a new version, which appears in the sandbox alongside the current version. You review the diff and confirm before the update is applied.

## HookScanner Integration

The Plugin Builder uses an integrated **HookScanner** to analyse the hooks and filters registered by each generated plugin. HookScanner output is shown in the chat response and includes:

- Action hooks registered (`add_action` calls).
- Filter hooks registered (`add_filter` calls).
- Any hooks found in plugin dependencies (skips `vendor/` and `node_modules/` directories).

This helps you understand a plugin's behaviour before activating it.

## Security Considerations

- Generated plugins are stored separately from manually installed plugins and are not accessible via the standard WordPress plugin management screen until you explicitly install them on the network.
- The sandbox uses path validation to prevent directory traversal when writing plugin files.
- Plugins with dangerous function calls (e.g., `eval`, `exec`, `system`) are flagged during validation and will not be activated.
