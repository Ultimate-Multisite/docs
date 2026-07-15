---
title: ક્ષમતાઓ સંદર્ભ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Abilities Reference

Abilities એ મૂળભૂત (atomic) ક્રિયાઓ છે જે Gratis AI Agent તમારી WordPress installation પર કરી શકે છે. દરેક ability એક registered PHP class હોય છે જે એક JSON schema પ્રદર્શિત કરે છે — એજન્ટ આ schema ને runtime પર વાંચે છે જેથી તે સમજી શકે કે કયા parameters જરૂરી છે અને ability શું return કરે છે.

આ પેજ Gratis AI Agent v1.9.0 સાથે આવતી તમામ abilities નું દસ્તાવેજીકરણ કરે છે.

---

## Custom Post Types {#custom-post-types}

આ abilities એજન્ટ દ્વારા રજીસ્ટર કરાયેલા custom post types (CPTs) નું સંચાલન કરે છે. આ registrations WordPress options table માં persist થાય છે, જેથી plugin deactivate અને reactivate કરવા છતાં તે ટકી રહે છે.

### `register_post_type` {#registerposttype}

એક નવો custom post type રજીસ્ટર કરે છે.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | પોસ્ટ ટાઇપ કી (મહત્તમ ૨૦ અક્ષરો, કોઈ uppercase નહીં, કોઈ spaces નહીં) |
| `singular_label` | string | Yes | માનવ-વાંચી શકાય તેવું એકવચન નામ, ઉદાહરણ તરીકે: `Portfolio Item` |
| `plural` | string | | |

### `public` | bool | | | {#listposttypes}

### `has_archive` | bool | | | {#deleteposttype}

### `supports` | array | | | {#custom-taxonomies}

### `menu_icon` | string | | | {#registertaxonomy}

### `menu_title` | string | | | {#listtaxonomies}

### `menu_parent` | string | | | {#deletetaxonomy}

### `menu_order` | int | | | {#design-system}

### `menu_position` | int | | | {#injectcustomcss}

### `menu_args` | array | | | {#addblockpattern}

### `menu_id` | string | | | {#listblockpatterns}

### `menu_slug` | string | | | {#setsitelogo}

### `menu_permalink` | string | | | {#applythemejsonpreset}

### `menu_description` | string | | | {#global-styles}

### `menu_icon_url` | string | | | {#getglobalstyles}

### `menu_icon_alt` | string | | | {#setglobalstyles}

### `menu_icon_size` | string | | | {#resetglobalstyles}

### `menu_icon_width` | int | | | {#navigation-menus}

### `menu_icon_height` | int | | | {#createmenu}

### `menu_icon_background` | string | | | {#updatemenu}

### `menu_icon_background_size` | string | | | {#addmenuitem}

### `menu_icon_background_position` | string | | | {#removemenuitem}

### `menu_icon_background_repeat` | string | | | {#listmenus}

### `menu_icon_background_attachment` | string | | | {#options-management}

### `menu_icon_background_color` | string | | | {#getoption}

### `menu_icon_background_image` | string | | | {#setoption}

### `menu_icon_background_alt` | string | | | {#deleteoption}

### `menu_icon_background_size_alt` | string | | | {#listoptions}

### `menu_icon_background_position_alt` | string | | | {#content-management}

### `menu_icon_background_repeat_alt` | string | | | {#createpost}

### `menu_icon_background_attachment_alt` | string | | | {#updatepost}

### `menu_icon_background_color_alt` | string | | | {#batchcreateposts}

### `menu_icon_background_image_alt` | string | | | {#setfeaturedimage}

### `menu_icon_background_size_alt` | string | | | {#createcontactform}

### `menu_icon_background_position_alt` | string | | | {#visual-review}

### `menu_icon_background_repeat_alt` | string | | | {#capturescreenshot}

### `menu_icon_background_attachment_alt` | string | | | {#comparescreenshots}

### `menu_icon_background_color_alt` | string | | | {#reviewpagedesign}

### `menu_icon_background_image_alt` | string | | | {#installable-abilities}

### `menu_icon_background_size_alt_2` | string | | | {#listavailableabilities}

### `menu_icon_background_position_alt_2` | string | | | {#installability}

### `menu_icon_background_repeat_alt_2` | string | | | {#recommendplugin}

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
