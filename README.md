# SvelteKit Template

This is a template for static SvelteKit apps configured with Typescript, PostCSS, TailwindCSS, ESLint, Prettier and pnpm.

It _should_ work also with `npm` or `yarn` but I've not tested it.

If you don't need SvelteKit you can checkout my [Svelte](https://github.com/billy4479/svelte-template/) or my [TypeScript](https://github.com/billy4479/js-base) template repo.

## Use this template

You can just use the "Use this template" button or with `degit`

```bash
# You can use npx if you want to
pnpx degit billy4479/sveltekit-template my-sveltekit-app
```

Once you have the files `cd` into the cloned directory and run

```bash
pnpm install

# To spin-up a dev server
pnpm run dev

# To build for production
pnpm run build
```

### VSCode

If you use VSCode make sure to add this line to you `settings.json`

```json
"eslint.lintTask.enable": true
```
