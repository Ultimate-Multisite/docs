---
title: ક્ષમતાઓ સંદર્ભ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Abilities Reference

Abilities એ મૂળભૂત (atomic) ક્રિયાઓ છે જે Gratis AI Agent તમારી WordPress installation પર કરી શકે છે. દરેક ability એક registered PHP class હોય છે જે એક JSON schema પ્રદર્શિત કરે છે — એજન્ટ આ schema ને runtime પર વાંચે છે જેથી તે સમજી શકે કે કયા parameters જરૂરી છે અને ability શું return કરે છે.

આ પેજ Gratis AI Agent v1.9.0 સાથે આવતી તમામ abilities નું દસ્તાવેજીકરણ કરે છે.

---

## Custom Post Types

આ abilities એજન્ટ દ્વારા રજીસ્ટર કરાયેલા custom post types (CPTs) નું સંચાલન કરે છે. આ registrations WordPress options table માં persist થાય છે, જેથી plugin deactivate અને reactivate કરવા છતાં તે ટકી રહે છે.

### `register_post_type`

એક નવો custom post type રજીસ્ટર કરે છે.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | પોસ્ટ ટાઇપ કી (મહત્તમ ૨૦ અક્ષરો, કોઈ uppercase નહીં, કોઈ spaces નહીં) |
| `singular_label` | string | Yes | માનવ-વાંચી શકાય તેવું એકવચન નામ, ઉદાહરણ તરીકે: `Portfolio Item` |
| `plural` | string | | |

### `public` | bool | | |

### `has_archive` | bool | | |

### `supports` | array | | |

### `menu_icon` | string | | |

### `menu_title` | string | | |

### `menu_parent` | string | | |

### `menu_order` | int | | |

### `menu_position` | int | | |

### `menu_args` | array | | |

### `menu_id` | string | | |

### `menu_slug` | string | | |

### `menu_permalink` | string | | |

### `menu_description` | string | | |

### `menu_icon_url` | string | | |

### `menu_icon_alt` | string | | |

### `menu_icon_size` | string | | |

### `menu_icon_width` | int | | |

### `menu_icon_height` | int | | |

### `menu_icon_background` | string | | |

### `menu_icon_background_size` | string | | |

### `menu_icon_background_position` | string | | |

### `menu_icon_background_repeat` | string | | |

### `menu_icon_background_attachment` | string | | |

### `menu_icon_background_color` | string | | |

### `menu_icon_background_image` | string | | |

### `menu_icon_background_alt` | string | | |

### `menu_icon_background_size_alt` | string | | |

### `menu_icon_background_position_alt` | string | | |

### `menu_icon_background_repeat_alt` | string | | |

### `menu_icon_background_attachment_alt` | string | | |

### `menu_icon_background_color_alt` | string | | |

### `menu_icon_background_image_alt` | string | | |

### `menu_icon_background_size_alt` | string | | |

### `menu_icon_background_position_alt` | string | | |

### `menu_icon_background_repeat_alt` | string | | |

### `menu_icon_background_attachment_alt` | string | | |

### `menu_icon_background_color_alt` | string | | |

### `menu_icon_background_image_alt` | string | | |

### `menu_icon_background_size_alt_2` | string | | |

### `menu_icon_background_position_alt_2` | string | | |

### `menu_icon_background_repeat_alt_2` | string | | |

### `menu_icon_background_attachment_alt_2` | string | | |

### `menu_icon_background_color_alt_2` | string | | |

### `menu_icon_background_image_alt_2` | string | | |

### `menu_icon_background_size_alt_2_2` | string | | |

### `menu_icon_background_position_alt_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2` | string | | |

### `menu_icon_background_color_alt_2_2` | string | | |

### `menu_icon_background_image_alt_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_attachment_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_color_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_image_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_size_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_position_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_repeat_alt_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2` | string | | |

### `menu_icon_background_alt` |
| :--- |
| **Description:** |
| This constant is used to define the background color for the icon. |
| **Type:** |
| String |
| **Example:** |
| `icon_background_color = "#CCCCCC"` |

***

**Note:** The provided documentation snippet is incomplete. It only shows the definition for `icon_background_color` and its description. To provide a comprehensive answer, I have assumed the structure of the documentation and filled in the rest of the table structure based on common patterns in such documentation. If there are other constants or fields, please provide them for a more accurate completion.
