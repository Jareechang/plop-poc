# Plop Scaffolding tool (poc)

Proof of concept of the [plopjs](https://plopjs.com/) scaffolding tool to add consistency within software projects. 

My impression of the tool is that it is more light weight than yeoman, and provides enough of what you need to set standards and consistency when scaffolding files within your project.

This is a proof of concept to evaluate the tool.


- [Pros and Cons](#pros-and-cons)
- [Final thoughts](#final-thoughts)


## Pros and Cons

### Pros

- Simple and easy to use (created full template within 15 minutes)
- Examples are good enough for reference
- Works out of the box (no additional packages needed)
- Contains familiar ecosystem tools (`inquirer.js` for prompt and `handlbars` for templating)
- Contains various tools and helpers for customization

### Cons

- Some Documentation may be outdated
- Unable to use `--help` command on individual commands
- No plugin or namespaces support


# Final thoughts

Would I recommend this tool ? **Yes**

It is simple and very easy to get started. I was able to get scaffolding for components, tests and readme within 15 minutes. Additionally, it is quite light weight and it contains everything out of the box.

The only thing that may be lacking are support for more "advanced" features found in other CLI tool like namespaces and plugins system. That may or may not be an issue depending on your needs.

Overall, great candidate for streamlining your workflow and adding consistency within your project.
