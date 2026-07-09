---
title: Khuul Tsim Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0  introduces **Plugin Builder & Sandbox System**, which lets the AI assistant generate, activate, and manage WordPress plugins on your network — all through a safe, isolated sandbox environment.

## Overview {#overview}

The Plugin Builder allows the AI assistant to write custom WordPress plugins in response to natural language requests. The plugins that are generated get checked for mistakes (validated), saved, and turned on inside a sandbox layer before they ever touch how the live site works.

Use cases include:

- Creating small utility plugins without needing a developer.
- Testing features that need specific WordPress hooks or custom post types.
- Making quick automation scripts for doing things in batches.

## Generating a Plugin via AI {#generating-a-plugin-via-ai}

To make a plugin, open the Gratis AI Agent chat interface and tell it what you want. For example:

> "Create a plugin that adds a special notice on the dashboard."

The AI will do this:

1. It will write the plugin PHP code using structured code generation.
2. It will check the output for any syntax mistakes or dangerous patterns.
3. It will save the generated plugin into the sandbox store.
4. It will give you a confirmation with the plugin slug and an **Activate in Sandbox** button.

You can make it better by asking more questions in the same chat thread before you turn it on.

## Sandbox Activation {#sandbox-activation}

Turning on a plugin in the sandbox is different from turning it on on your live network. The sandbox:

- Runs the plugin inside a separate WordPress environment (wp-env).
- Catches any PHP errors, warnings, or hook conflicts that happen.
- Tells you the result of the activation right back in the chat interface.

To turn on a plugin in the sandbox, just click the **Activate in Sandbox** button in the AI's reply, or use this slash command:

```
/activate-plugin <plugin-slug>
```

Status message ཞིག་གིས་ plugin དེ་བསྐྱར་ཆུ་བྱས་པ་ཡོང་ངན་ཡང་ན་ཡག་པོ་ཡོད་པ་རྟོགས་ཐུབ་ཀྱི་ཡོད། ຖ້າ failure (បរའཕྲད་) བྱུང་ན་ error log དེ་ chat thread ནང་བསྟན་ཡོང་།

## Plugin བཟོས་པའི་ものを འཇོག་པའི་སྐོར་ {#managing-generated-plugins}

Plugin བཟོས་པ་ཚོ་ **Gratis AI Agent → Plugin Builder → Manage Plugins** ནང་ list བྱས་ཡོད་တယ်။ དེའི་སྒྲོན་མོ་ནས་ཁྱེད་རང་གིས་འདི་ལྟར་ လုပ်ဆောင်နိုင်ပါတယ်:

| Action | Description |
|---|---|
| **View source** | plugin PHP code ཡོངས་རྫོགས་བལྟ་རྒྱུ་། |
| **Re-activate in sandbox** | sandbox activation check དེ་ཁྱེད་རང་གིས་ཡང་ run བྱེད་ཐུབ་པ་། |
| **Install on network** | plugin དེ་live network (WordPress multisite) ལ་ deploy བྱེད་པ་དང་། (manual confirmation དགོས་ཀྱི་ཡོད།) |
| **Update** | AI ལས་ code གསར་པ་ཞིག་བསྐྱར་ཆུ་བྱེད་པའི་ཆེད་དུ་ change དེ་ AI ལ་བརྗོད་ནས་བཏང་། |
| **Delete** | plugin དེ་sandbox store ནས་བསྡད་པ་དང་། site ཚོ་ཡོངས་ནས་ deactivate བྱེད་ཀྱི་ཡོད། |

:::warning
**Install on network** འདི་གིས་ generated plugin དེ་ཁྱེད་རང་གི་ live WordPress multisite ལ་ deploy བྱེད་တယ်။ മുന്നോട്ട് བསྐྱོད་པའི་སྔོན་ལ་plugin code དེ་བལྟ་རྒྱུ་གལ་ཆེན་པོ་ཡོད། Gratis AI Agent ནས་live install མཇུག་བསྡད་པ་དང་ མཐུན་འགྲོ་ཚར་བ་རྗེས་ཀྱི་ confirmation ཞུ་རྒྱུ་ཡོད།
:::

## Network ལ་ Generated Plugin འཇོག་པའི་སྐོར་ {#installing-a-generated-plugin-on-the-network}

ཁྱེད་རང་གིས་ sandbox ནང་ plugin དེ་བཟང་པོ་ཡིན་པ་རྟོགས་པ་དང་མཐུན་པའི་སྐབས་སུ་ live network ལ་ install བྱེད་ཆོག:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** ལ་འགྲོ་ပါ။
2. deploy བྱེད་དགོས་པའི་ plugin ཚོར་དེའི་ནང་ **Install on Network** ལ་click བྱས་རོགས།
3. dialog (dialog) དེ་confirmation བྱེད་ཀྱི་ཡོད། plugin དེ་`wp-content/plugins/` ནང་ install བྱས་པ་དང་ network ལ་activate བྱས་པ་རེད།

གཞན་ལྟར་ chat interface ནང་ slash command འདི་བཀྲལ་བའི་སྐོར་ལ།

```
/install-plugin <plugin-slug>
```

## Plugin Update བྱེད་པ། {#plugin-updates}

Generated plugin ཞིག་ update བྱེད་དགོས་ན་ new conversation (对话) ནང་ AI assistant ལ་ change ག་རེ་བསྒྱུར་རྒྱུ་ཡིན་པ་བརྗོད་ပေးလိုက်:

> "Update the dashboard-notice plugin to only show the notice to administrators."

AI ལས་new version ཞིག་བཟོས་ཐོན་པ་དེ་sandbox ནང་ད་ལྟ་བའི་version དང་མཉམ་དུ་འཁྱོལ་ཡོང་། change (diff) དེ་ཁྱེད་རང་གིས་བལྟ་རྒྱུའི་སྐབས་ confirmation བྱས་ནས་ update ཞིག་ apply བྱེད་ཆོག។

## HookScanner Integration {#hookscanner-integration}

Plugin Builder ໃຊ້ **HookScanner** ທີ່ເຊື່ອມຕໍ່ເຂົ້າກັນ ເພື່ອວິເຄາະ hook ແລະ filter ທັງໝົດທີ່ plugin ແຕ່ລະໂຕສ້າງຂຶ້ນໄດ້ຕັ້ງໄວ້. ຜົນຂອງ HookScanner ຈະສະແດງຢູ່ໃນການຕອບກັບໃນ chat ແລະ ລວມມີ:

- Action hooks ທີ່ຖືກຕັ້ງໄວ້ (`add_action` calls).
- Filter hooks ທີ່ຖືກຕັ້ງໄວ້ (`add_filter` calls).
- hook ທັງໝົດທີ່ພົບໃນ plugin dependencies (ມັນຈະຂ້າມ directory `vendor/` ແລະ `node_modules/`).

ສິ່ງນີ້ຊ່ວຍໃຫ້ເຈົ້າເຂົ້າໃຈການເຮັດວຽກຂອງ plugin ກ່ອນທີ່ຈະເປີດໃຊ້ງານມັນ.

## Security Considerations {#security-considerations}

- Plugin ທີ່ສ້າງຂຶ້ນຖືກເກັບໄວ້ແຍກອອກຈາກ plugin ທີ່ຕິດຕັ້ງດ້ວຍຕົນເອງ ແລະ ບໍ່ສາມາດເຂົ້າເຖິງໄດ້ຜ່ານໜ້າການຈັດການ plugin ຂອງ WordPress ແບບປົກກະຕິ ຈົນກວ່າເຈົ້າຈະຕິດຕັ້ງມັນໃນ network ຢ່າງຊັດເຈນ.
- sandbox ນີ້ໃຊ້ path validation ເພື່ອປ້ອງກັນການເຂົ້າເຖິງ directory (directory traversal) ເມື່ອຂຽນໄຟລ໌ plugin.
- Plugin ທີ່ມີການເອີ້ນໃຊ້ function ອັນຕະລາຍ (ເຊັ່ນ: `eval`, `exec`, `system`) ຈະຖືກແຈ້ງເຕືອນໃນລະຫວ່າງການກວດສອບ ແລະ ຈະບໍ່ຖືກເປີດໃຊ້ງານ.
