---
title: IDE Integration
hide_title: true
toc_max_heading_level: 2
---

# LPCDoc: IDE Integration

LPCDoc is designed to work with modern development tools and IDEs. This section
explains how LPCDoc comments can enhance your development experience through
integration with code editors.

## VS Code Extension

The VS Code extension [LPC Language Services](https://marketplace.visualstudio.com/items?itemName=jlchmura.lpc)
provides rich language support for LPC, including integration with LPCDoc
comments.

### Features

When using LPCDoc comments with the LPC Language Services extension, you gain
access to:

- **IntelliSense and Code Completion** - Type information from LPCDoc comments
  is used to provide better suggestions
- **Hover Information** - See documentation when hovering over functions and
  variables
- **Signature Help** - Parameter information appears as you type function calls
- **Type Checking** - The extension uses type annotations to validate your code

## Type Annotations

Type annotations in LPCDoc comments provide additional context to language
servers and IDEs. While these annotations are optional, they significantly
enhance code intelligence features.

### Basic Syntax

The basic syntax for type annotations follows JSDoc conventions:

```c
/**
 * @param {type} name - Description of the parameter
 * @returns {type} Description of the return value
 */
```

### Practical Examples

Here are some practical examples of LPCDoc comments with type annotations that
work with the LPC Language Services extension:

```c
/**
 * Attempts to run a command
 * @param {string} cmd - The command to run
 * @returns {int} 1 if successful, otherwise 0
 */
int doCommand(string cmd) {
    return 1;
}
```

For specifying object types:

```c
/**
 * @param {"/std/player.c"} player - The player to welcome
 */
void welcomePlayer(object player) {
    write("Hi " + player->query_name());
}
```

For variable annotations:

```c
/** @type {"/std/weapon.c"} */
object weapon;
```

For return type annotations:

```c
/**
 * @returns {"/std/player.c"} The current player object
 */
object getPlayer() {
    return lookupPlayer();
}
```

## Special Directives

The LPC Language Services extension also supports special directives that
interact with the type checking system:

### @lpc-ignore

Instructs the checker to ignore errors on a single line:

```c
// @lpc-ignore - ignore int to string assignment error
string foo = 123;
```

### @lpc-nocheck

Disables diagnostics for an entire file:

```c
// @lpc-nocheck
... statements
```

### @lpc-expect-error

Indicates that the next line is expected to return an error:

```c
// @lpc-expect-error: method does not exist
o->foo();
```

### @this_object

Overrides the object type of `this_object()`:

```c
// @this_object /std/living
```

## Setting Up IDE Integration

To fully utilize LPCDoc in your IDE, refer to the [documentation](https://github.com/jlchmura/lpc-language-server)
for the LPC Language Services extension. In general, you'll need to:

1. Install the extension from the VS Code Marketplace
2. Create an `lpc-config.json` file in your workspace root
3. Configure include paths and other settings
4. Enable diagnostics to benefit from type checking

Properly configured, your LPCDoc comments will provide rich contextual
information throughout your development workflow.
