---
title: LPCDoc Examples
hide_title: true
toc_max_heading_level: 2
---

# LPCDoc: Examples

This section provides practical examples of using LPCDoc in various common scenarios.

## Basic Function Documentation

```c
/**
 * Calculates damage based on attack and defense values.
 *
 * @param {int} attack - The attack value.
 * @param {int} defense - The defense value.
 * @returns {int} The calculated damage.
 */
int calculate_damage(int attack, int defense) {
    return max(1, attack - defense);
}
```

## Advanced Function Documentation

```c
/**
 * Transfers items between two containers.
 *
 * This function moves items from one container to another,
 * respecting weight limits and ownership restrictions.
 *
 * @param {object} source - The source container.
 * @param {object} target - The target container.
 * @param {string} item_id - The ID of the item to transfer.
 * @param {int} count - (Optional) The number of items to transfer. Default is 1.
 * @returns {int} The number of items successfully transferred.
 * @throws If either container does not exist.
 * @errors If the item cannot be found in the source container.
 * @errors If the target container is full or over weight limit.
 * @example
 * int moved = transfer_items(player, chest, "gold_coin", 100);
 * if (moved < 100) {
 *     write("Could only move " + moved + " coins.");
 * }
 */
int transfer_items(object source, object target, string item_id, int count) {
    // Implementation
}
```

## Variable Documentation

```c
/**
 * @type {int} The maximum health points for a player.
 */
int MAX_PLAYER_HP = 1000;

/**
 * @type {([ string: int ])} Mapping of damage types to resistance values.
 */
mapping resistances = ([ "fire": 10, "cold": 5, "physical": 3 ]);
```

## Class or Module Documentation

```c
/**
 * Combat utility module providing damage calculation functions.
 *
 * This module includes various functions for calculating combat outcomes,
 * including damage, hit chance, and critical effects.
 *
 * @author Wizard
 * @version 1.2.0
 */

/**
 * Calculates the chance to hit based on accuracy and evasion.
 *
 * @param {int} accuracy - The attacker's accuracy value.
 * @param {int} evasion - The defender's evasion value.
 * @returns {float} A value between 0.0 and 1.0 representing hit chance.
 */
float hit_chance(int accuracy, int evasion) {
    return min(0.95, max(0.05, to_float(accuracy) / (accuracy + evasion)));
}

// Additional functions...
```

## Documentation with Multiple Tags

```c
/**
 * Crafts an item from components.
 *
 * @param {object} crafter - The player crafting the item.
 * @param {string*} components - Array of component item IDs.
 * @param {string} recipe_id - The ID of the recipe to use.
 * @param {mapping} options - (Optional) Additional crafting options.
 * @returns {object} The crafted item, or 0 on failure.
 * @throws If the recipe does not exist.
 * @errors If the crafter lacks required skills.
 * @errors If components are missing or of insufficient quality.
 * @see check_crafting_skills
 * @example
 * object sword = craft_item(
 *     this_player(),
 *     ({"iron_ingot", "leather_strip", "wood_handle"}),
 *     "iron_sword"
 * );
 */
object craft_item(object crafter, string *components, string recipe_id, mapping options) {
    // Implementation
}
```

## Private Function Documentation

```c
/**
 * Validates a player name against naming rules.
 *
 * @private
 * @param {string} name - The name to validate.
 * @returns {int} 1 if valid, 0 if invalid.
 */
static int is_valid_name(string name) {
    // Implementation
}
```

## Documenting Deprecated Functions

```c
/**
 * Gets a player's experience points.
 *
 * @deprecated Use query_experience() instead.
 * @param {string} player_name - The name of the player.
 * @returns {int} The player's experience points.
 */
int get_exp(string player_name) {
    return find_player(player_name)->query_experience();
}
```

These examples demonstrate common patterns for LPCDoc usage. As you incorporate LPCDoc into your codebase, you'll develop patterns that best suit your specific documentation needs.
