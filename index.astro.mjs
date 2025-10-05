import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_B0OsghPe.mjs';
import 'kleur/colors';
import { w as wpquery, $ as $$Default } from '../chunks/wordpress_B0jAEAtT.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = await wpquery({
    query: `
    query LoadAllPostsExcerpts {
      posts {
        nodes {
          title
          slug
          excerpt
        }
      }
    }
  `
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Food Truth" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Posts</h1> ${data.posts.nodes.map((post) => {
    return renderTemplate`<article class="post-preview"> <h2> <a${addAttribute(`/blog/${post.slug}`, "href")}>${post.title}</a> </h2> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(post.excerpt)}` })} <a${addAttribute(`/blog/${post.slug}`, "href")}>read post &rarr;</a> </article>`;
  })}` })}`;
}, "F:/f drive documents/Start my business/website dev/astro doc/unhackable-wordpress-astro-main/unhackable-wordpress-astro-main/src/pages/index.astro", void 0);

const $$file = "F:/f drive documents/Start my business/website dev/astro doc/unhackable-wordpress-astro-main/unhackable-wordpress-astro-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
