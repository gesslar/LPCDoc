---
title: Types Overview
hide_title: true
---

# LPCDoc: Types

LPCDoc supports type annotations to improve clarity in documentation. Types are used in `@param` and `@returns` tags to indicate expected values.

## Basic Types

LPCDoc recognizes the following primitive types:

- `int` - An integer.
- `float` - A floating-point number.
- `string` - A sequence of characters.
- `object` - An instance of an LPC object.
- `mapping` - A key-value data structure.
- `mixed` - Represents a value that could be of any type.
- `undefined` - Represents an undefined response.
- `function` - Represents a function value.

## Composite Types

To indicate more complex types, or to provide more details, use:

- `([ string: int ])` - A mapping where keys are strings and values are integers.
- `([ string: int, undefined ])` - A mapping where the keys are strings, but the values may be int or undefined.
- `([ string: int ])*` - An array of mappings where keys are strings and values are integers.
- `int,string` - A union type, meaning the value could be an int or a string.
- `({ "/std/weapon.c", "/std/room.c" })` - A tuple of objects, prototyped as a weapon and a room.

## Special Cases

- `void` - Used for functions that do not return a value.

## Examples

```c
/**
 * Converts a number to a string.
 *
 * @param {int} num - The number to convert.
 * @returns {string} The number as a string.
 */
string to_string(int num) {
    return sprintf("%d", num);
}

/**
 * Retrieves an item from a lookup table.
 *
 * @param { ([ string: mixed ]) } table - The lookup table.
 * @param {string} key - The key to look up.
 * @returns {mixed} The value associated with the key.
 */
mixed get_item(mapping table, string key) {
    return table[key];
}
```
