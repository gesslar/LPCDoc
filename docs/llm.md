---
title: LLM Instructions
hide_title: true
toc_max_heading_level: 2
---

# LPCDoc: Instruction set for LLMs

If you would like assistance from an LLM, either integrated with your IDE, or
at a website, you may find adding an instruction set to your arsenal a bit
helpful when asking them to help generate documentation for you.

This document is an evolving work as we tweak it to help LLMs better understand
the needs for ongoing documentation projects.

It is, however, not versioned.

Click to review and save the LLM Instructions

- [FluffOS](pathname:///files/LLM_Instructions_FluffOS.md)
- LDMud - *forthcoming*

## Additional Considerations

You should create an **Additional Considerations** section at the bottom to
note specific instructions for your lib to customise the generation of
comment docblocks.

An example of a customised section follows.

````markdown
## Additional considerations

- Overridden lfuns may be documented with an @override tag
- Driver applies may use the tag @apply before its params
- Nested data structures should document the expected structure as precisely as
  possible. For complex structures, use nested type annotations.

Header documentation that exists should be converted to a new format, with
file-level descriptions added to it. If there is already a description, it can
be modified to be made more complete, or if it is complete enough, it should
just remain worded as it is.

The format to convert to should look like this:

```
/**
* @file /d/clan/abode/warroom_inherit.c
*
* Description of this file and its purpose.
*
* @created YYYY-MM-DD - Name
* @last_modified YYYY-MM-DD - Name
*
* @history
* 2025-03-02 - Name - Created
*/
```

- Any existing comments that do not look like they fit the model for comment
  blocks should be updated and clarified. Any existing comments that do follow
  the current model but maybe could be clarified, should be made to.
- If you see assert() or assert_arg() these are @errors, and not @throws.

Otherwise, if unsure, ask.

### Imperative Information

Do not touch the code. For documentation purposes, we only need comments. There
will be no reason to opine on things like parens placement, semicolon changes,
etc., by updating the code sections of a file. Restrict activities to only
documentation.
````
