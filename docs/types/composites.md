---
title: Composite Types
hide_title: true
toc_max_heading_level: 2
---

# LPCDoc: Composite Types

This section describes composite types in LPC and how to document them using LPCDoc annotations.

## Mappings with Specific Key-Value Types

Mappings are key-value data structures. The basic mapping type is annotated as `mapping`, but you can provide more detail using the `([ keytype: valuetype ])` notation.

### Annotation Usage

```c
/**
 * @param {([ string: int ])} scores - A mapping of player names to their scores.
 * @returns {int} The total score.
 */
int calculate_total_score(mapping scores) {
    int total = 0;
    foreach (string player, int score in scores) {
        total += score;
    }
    return total;
}
```

## Union Types

Union types indicate that a value could be one of several specified types, separated by commas.

### Annotation Usage

```c
/**
 * @param {int,string} value - Either a numeric ID or a string name.
 * @returns {object} The found entity.
 */
object find_entity(mixed value) {
    if (intp(value)) {
        return find_entity_by_id(value);
    }
    return find_entity_by_name(value);
}
```

## Arrays

Arrays can be annotated using the array notation.

### Annotation Usage

```c
/**
 * @param {string*} names - An array of player names.
 * @returns {int} The number of valid names.
 */
int validate_names(string *names) {
    int valid = 0;
    foreach (string name in names) {
        if (is_valid_name(name)) {
            valid++;
        }
    }
    return valid;
}
```

## Nested Composite Types

More complex data structures can be documented using nested type annotations.

### Annotation Usage

```c
/**
 * @param {([ string: ([ string: int ]) ])} nested_data - Player categories with player names and scores.
 * @returns {([ string: int ])} Average scores by category.
 */
mapping calculate_category_averages(mapping nested_data) {
    mapping averages = ([]);
    foreach (string category, mapping players in nested_data) {
        int total = 0;
        int count = 0;
        foreach (string player, int score in players) {
            total += score;
            count++;
        }
        averages[category] = count ? total / count : 0;
    }
    return averages;
}
```

## Tuples

Tuples represent fixed-size collections of elements with potentially different types.

### Annotation Usage

```c
/**
 * @returns {({ string, int, object })} A tuple containing name, age, and object reference.
 */
mixed *get_player_data() {
    object player = this_player();
    return ({ player->query_name(), player->query_age(), player });
}
```

## Typed Arrays

Arrays in LPC are ordered collections of elements, typically of the same type. They can be annotated using the `type*` notation.

### Annotation Usage

```c
/**
 * @param {object*} players - An array of player objects.
 * @returns {string*} An array of player names.
 */
string *get_player_names(object *players) {
    string *names = ({});
    foreach (object player in players) {
        names += ({ player->query_name() });
    }
    return names;
}
```

## Function References

Function references can be annotated with their parameter and return types.

### Annotation Usage

```c
/**
 * @param {function(int, int): int} callback - A function that takes two integers and returns an integer.
 * @returns {int} The result of applying the callback to 10 and 20.
 */
int apply_callback(function callback) {
    return evaluate(callback, 10, 20);
}
```

For a closure:

```c
/**
 * @returns {function(string): void} A function that displays a message.
 */
function get_display_function() {
    return (: write :);
}
```
