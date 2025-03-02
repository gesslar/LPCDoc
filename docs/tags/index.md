---
title: Tags Overview
hide_title: true
toc_max_heading_level: 2
---

# LPCDoc: Tags Overview

Tags are special LPCDoc annotations that provide structured information about code elements. They are prefixed with an `@` symbol and can include various types of metadata.

## Tag Categories

LPCDoc tags can be broadly categorized into several groups:

### Function-Related Tags

These tags document information about functions:

- `@param` - Documents a function parameter.
- `@callback` - Documents a function passed as an argument to another function.
- `@returns` - Documents the return value of a function.
- `@throws` - Documents exceptions that may be thrown.
- `@errors` - Documents potential error conditions.

### Type-Related Tags

These tags add type information:

- `@type` - Documents the type of a variable.
- `@typedef` - Creates a reusable type definition.
- `@var` - Documents the type of an inherited variable.

### Metadata Tags

These tags add additional context:

- `@author` - Identifies the author of code.
- `@version` - Specifies the version of code.
- `@since` - Indicates when a feature was introduced.
- `@deprecated` - Marks code as deprecated.

## Tag Syntax

Most tags follow a consistent syntax pattern:

```
@tagName {optionalType} name - description
```

For example:

```c
/**
 * @param {int} count - The number of items.
 */
```

## Tag Placement

Tags should be placed within doc comments (`/** */`) and generally follow the descriptive text:

```c
/**
 * This is a description of the function.
 *
 * @param {string} name - The name parameter.
 * @returns {int} The calculated result.
 */
```

## Multiple Tags

Multiple related tags can be used in a single doc comment:

```c
/**
 * @param {int} a - First number.
 * @param {int} b - Second number.
 * @returns {int} The sum of a and b.
 */
int add(int a, int b) {
    return a + b;
}
```

## Inline Tags

Some tags can be used inline within descriptions:

```c
/**
 * This method works like {@link other_function} but has improved performance.
 */
```

Refer to the specific tag documentation for detailed usage information.
