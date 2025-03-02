---
title: Introduction to LPCDoc
hide_title: true
slug: /
---

# LPCDoc: LPC Documentation Format

LPCDoc is a documentation format for LPC (Lars Pensjö C), inspired by JSDoc. It
defines a structured way to annotate LPC source code with standardized
comments, facilitating the generation of comprehensive and user-friendly
documentation.

## Commenting Conventions

LPCDoc comments, known as "doc comments," should be placed immediately before
the code they describe. Each comment must start with a `/**` sequence to be
recognized as an LPCDoc annotation. For example:

```c
/**
 * This is a description of the foo function.
 */
void foo() {
    // Function implementation
}
```

The simplest documentation includes a description of the function, variable, or
function. Additional details can be provided using LPCDoc tags.

## LPCDoc Tags

LPCDoc utilizes various tags to structure documentation. Some of the most commonly used tags include:

- `@param {type} name` - Documents a function parameter.
- `@returns {type}` - Documents the return value of a function.
- `@example` - Provide example code snippets to show usage.
- `@throws reason` - Documents a reason this function could throw.
- `@errors reason` - Documents a reason this function might error.
- `@deprecated` - Indicates that a function is deprecated.
- `@author name` - Identifies the author of an item.

## Example

```c
/**
 * Parses a configuration file.
 *
 * @param {string} filepath - The path to the configuration file.
 * @returns {mapping} The parsed configuration.
 * @throws If the configuration file was not found.
 * @errors If the configuration was malformed.
 * @example
 * mapping config = parse_config("/data/config/seasons.cfg");
 *
 * // ([
 * //   "spring": 0,
 * //   "summer": 365,
 * //   "autumn": 0,
 * //   "winter": 0,
 * // ])
 */
mapping parse_config(string filepath) {
    // Implementation
}
```
