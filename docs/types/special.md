---
title: Special Type Annotations
hide_title: true
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# LPCDoc: Special Type Annotations

This section covers special type annotations used in LPCDoc that don't directly
correspond to LPC primitive types but are useful for documentation purposes.

## Undefined (`undefined`)

In LPC, accessing a non-existent key in a mapping or a non-existent index in an
array returns `0`, which is an integer value. However, when documenting
functions, it's often important to distinguish between a legitimate `0` return
value and a "not found" or "undefined" result.

The `undefined` annotation helps document this special case.

### Annotation Usage

```c
/**
 * @param {mapping} data - A mapping of player information.
 * @param {string} player_name - The name of the player to look up.
 * @returns {int, undefined} The score for the player, or undefined if player not found.
 */
int get_score(mapping data, string player_name) {
    return data[player_name]["score"];
}
```

```c
/**
 * @param {mapping} items - A mapping of item names to quantities.
 * @param {string} item_name - The name of the item to check.
 * @returns {int, undefined} The quantity of the item, or undefined if not in inventory.
 */
int check_inventory(mapping items, string item_name) {
    return items[item_name];
}
```

## Void (`void`)

Although `void` is not a type that can be assigned to a variable in LPC, it's
used in function declarations to indicate that the function does not return a
value. When documenting functions with `@returns`, it's useful to explicitly
state when a function doesn't return anything.

### Annotation Usage

```c
/**
 * @param {string} message - The message to display.
 * @returns {void} This function does not return a value.
 */
void log_message(string message) {
    write_file("/log/system.log", message + "\n");
}
```

## Multiple Return Types

Sometimes functions can return different types depending on their inputs or
conditions. LPCDoc uses the [tuple](composites#tuples) annotation to indicate
multiple possible return types.

### Annotation Usage

```c
/**
 * @param {string} identifier - An entity identifier.
 * @returns {object, string} The entity object if found, or an error message string if not found.
 */
mixed find_entity(string identifier) {
    object entity = find_object(identifier);
    if (!entity) {
        return "Entity not found: " + identifier;
    }
    return entity;
}
```

## Optional Types

For parameters or return values that might not always be present, LPCDoc uses
optional type notation, surrounding the variable name with `[]`.

### Annotation Usage

```c
/**
 * @param {string} name - The name to look up.
 * @param {mapping} [options] - Optional settings for the lookup.
 * @returns {object} The found entity.
 */
object find_by_name(string name, mapping options) {
    // Implementation
}
```

To specify a value that is used as a default, either because the driver permits
default parameters, or one is set within the function body upon detection of an
undefined argument, you may add `=value`.

```c
/**
 * @param {string} [which="door"] - The specific door to unlock.
 * @returns {int} 1 if successful, otherwise 0.
 */
int unlock(string which) {
  which = which || "door";
}
```

## Any Type (`*`)

For cases where any type is acceptable but you want to document this
explicitly, the `*` annotation can be used. This is different from `mixed` in
that it specifically documents the acceptance of any type, rather than a
variable that might contain different types in different contexts.

### Annotation Usage

```c
/**
 * @param {*} value - Any value to be stored.
 * @param {string} key - The key under which to store the value.
 * @returns {void}
 */
void store_value(mixed value, string key) {
    storage[key] = value;
}
```

These special type annotations help document code behavior accurately even when
the underlying language might not have a dedicated type for these concepts.
