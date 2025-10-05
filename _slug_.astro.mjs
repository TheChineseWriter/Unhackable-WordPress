import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_B0OsghPe.mjs';
import 'kleur/colors';
import { w as wpquery, $ as $$Default } from '../../chunks/wordpress_B0jAEAtT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await wpquery({
    query: `
      query LoadAllPosts {
        posts {
          nodes {
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
                srcSet
                sizes
                altText
              }
            }
            content(format: RENDERED)
            author {
              node {
                name
              }
            }
          }
        }
      }
    `
  });
  return data.posts.nodes.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "An Example Blog Post" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<img${addAttribute(post.featuredImage.node.mediaItemUrl, "src")}${addAttribute(post.featuredImage.node.srcSet, "srcset")}${addAttribute(post.featuredImage.node.sizes, "sizes")}${addAttribute(post.featuredImage.node.alt, "alt")}> <h1>${post.title}</h1> <p class="byline">Written by ${post.author.node.name}</p> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(post.content)}` })} <p> <a href="/">&larr; back to all posts</a> </p> ` })}`;
}, "F:/f drive documents/Start my business/website dev/astro doc/unhackable-wordpress-astro-main/unhackable-wordpress-astro-main/src/pages/blog/[slug].astro", void 0);

const $$file = "F:/f drive documents/Start my business/website dev/astro doc/unhackable-wordpress-astro-main/unhackable-wordpress-astro-main/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
