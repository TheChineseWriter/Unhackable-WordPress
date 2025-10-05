import { c as createComponent, a as createAstro, d as addAttribute, e as renderHead, f as renderSlot, b as renderTemplate } from './astro/server_B0OsghPe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$Default = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Default;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-5z7xtygo> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-5z7xtygo> <header data-astro-cid-5z7xtygo> <a href="/" rel="home" data-astro-cid-5z7xtygo> <span role="img" aria-label="Cheese" data-astro-cid-5z7xtygo>🧀</span>
Food Truth
</a> <nav data-astro-cid-5z7xtygo> <a href="/" data-astro-cid-5z7xtygo>Blog</a> </nav> </header> <main data-astro-cid-5z7xtygo> ${renderSlot($$result, $$slots["default"])} </main>  </body></html>`;
}, "F:/f drive documents/Start my business/website dev/astro doc/unhackable-wordpress-astro-main/unhackable-wordpress-astro-main/src/layouts/default.astro", void 0);

async function wpquery({ query, variables = {} }) {
  const res = await fetch("http://unhackable-wordpress.local/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  if (!res.ok) {
    console.error(res);
    return {};
  }
  const { data } = await res.json();
  return data;
}

export { $$Default as $, wpquery as w };
