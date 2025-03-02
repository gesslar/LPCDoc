---
title: Primitives
hide_title: true
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# LPCDoc: Primitives

This section describes the primitive types available in LPC and how to document them using LPCDoc annotations.

## Integer (`int`)

An integer is a whole number, either positive or negative.

### Annotation Usage

```c
/**
 * @param {int} count - The number of items.
 * @returns {int} The total value.
 */
int calculate_total(int count) {
    return count * 10;
}
```

**NB**: It should be mentioned that if a value could be undefined, while it is `0` in all senses of the definition, it does merit specific annotation as `undefined`.

```c
/**
 * @param {mapping} registry - A mapping of player names to their ages.
 * @param {string} name - The name of the player.
 * @returns {int, undefined} - The age of the player, or undefined if not found.
 */
int player_age(mapping registry, string name) {
    return registry[name];
}
```

## Floating-Point Number (`float`)

A floating-point number represents real numbers with decimal precision.

### Annotation Usage

```c
/**
 * @param {float} rate - The interest rate.
 * @returns {float} The computed value.
 */
float compute_interest(float rate) {
    return rate * 1.05;
}
```

## String (`string`)

A string is a sequence of characters.

### Annotation Usage

```c
/**
 * @param {string} name - The name of the user.
 * @returns {string} A greeting message.
 */
string greet(string name) {
    return "Hello, " + name + "!";
}
```

## Array (`array`)

An array is an ordered collection of values, which can be of any type.

### Annotation Usage

```c
/**
 * @param {string*} names - An array of strings containing names.
 * @returns {int} The number of names.
 */
int count_names(string *names) {
    return sizeof(names);
}

/**
 * @returns {mixed*} An array containing various types of values.
 */
mixed *get_mixed_data() {
    return ({ "text", 42, this_object() });
}
```

## Object (`object`)

An object refers to an instance of an LPC file. It can be annoted as simply `{object}`.

### Annotation Usage

```c
/**
 * @returns {object} A reference to the player's object.
 */
object get_player() {
    return this_player();
}
```

Or, you can provide more information about what kind of object it is, by instead putting the full path to the object enclosed in quotes.

```c
/**
 * @returns {"/std/player.c"} A reference to the player's object.
 */
object get_player() {
    return this_player();
}
```

## Mapping (`mapping`)

A key-value data structure.

### Annotation Usage

```c
/**
 * @returns {mapping} A mapping of configuration settings.
 */
mapping get_config() {
    return ([ "max_hp": 100, "regen_rate": 5 ]);
}
```

## Function (`function`)

Represents a callable function reference.

### Annotation Usage

```c
/**
 * @returns {function} A function reference for callbacks.
 */
function get_callback() {
    return (: write, "Callback executed!" :);
}
```

## Buffer (`buffer`)

A binary data buffer for efficient byte manipulation.

### Annotation Usage

```c
/**
 * @param {int} size - The size of the buffer to create.
 * @returns {buffer} A new buffer of the specified size.
 */
buffer create_buffer(int size) {
    return allocate_buffer(size);
}
```

## Class (`class`)

A structured data type that groups values together.

### Annotation Usage

```c
/**
 * @returns {class} An instance of the data structure.
 */
class Example get_example() {
    return new(class Example);
}
```

## Mixed (`mixed`)

Indicates a variable may contain **any** type.

### Annotation Usage

```c
/**
 * @returns {mixed} A value that could be any type.
 */
mixed get_value() {
    return random(2) ? "text" : 42;
}
```

## Undefined (`undefined`)

Represents an undefined response, typically when accessing a non-existent key in a mapping or array element.

### Annotation Usage

```c
/**
 * @param {mapping} data - A mapping of configuration values.
 * @param {string} key - The key to look up.
 * @returns {mixed, undefined} The value for the key, or undefined if not found.
 */
mixed get_config_value(mapping data, string key) {
    return data[key];
}
```

## Void (`void`)

Used for functions that do not return a value.

### Annotation Usage

```c
/**
 * @param {string} message - The message to display.
 * @returns {void} This function does not return a value.
 */
void display_message(string message) {
    write(message);
}
```
