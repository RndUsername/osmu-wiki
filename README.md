# OSMU Wiki
This project is the source code of the [osmu.wiki](https://osmu.wiki) page.

The wiki is meant as a place to store all information about projects, which are affiliated to OSMU. It makes the projects searchable and more accessible. Any participation is welcome!

## How to Contribute?

The wiki is built with the [Starlight](https://starlight.astro.build) template on top of [Astro](https://astro.build). That's why it's a good idea to first read through the ["Authoring Content"](https://starlight.astro.build/guides/authoring-content/) section of Starlight. Please read it thoroughly and completely before moving on.

### Edit existing pages
At the bottom of every page, you will find an "Edit page" button. It will take you to GitHub where you can edit the chosen page. If you are wondering about the stuff between the `---` at the top, this is explained in the [lower section](#custom_frontmatter)

### Add new pages
New content is added to the `src/content/docs` folder. As a convention, every project has its own folder which always has an `about.md` page. 
Every page starts with the [frontmatter](#custom_frontmatter) with at least the `title` value set.

To make the page visible in the navigation sidebar you need to edit `astro.config.mjs`. Add another object inside the `sidebar` array:
```mjs
export default defineConfig({
    integrations: [starlight({
        sidebar: [{
            label: "Example", // displayed in sidebar as drop-down
            items: [
                {
                    label: "About", // displayed in sidebar as page
                    link: "/example/about" // folder path / url to page
                }, {
                    label: "Another Thing", // add more objects for multiple pages
                    link: "/example/another"
                }
            ]
        }]
    })]
})

/* asumed folder structure:
.
├── src/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── example/
│   │   │   │   ├── about.md
│   │   │   │   └── another.md
*/
```

## Custom Frontmatter
Through frontmatter, you can add common info, which is automatically rendered. Here is an example with all properties, that are already available:
```yaml
# example.md
---
title: Example Title # displayed as <h1/> header
logo: ./example-logo.svg # should be an all-white svg with transparent background of the projects logo
discordChannel: https://discord.gg/e1x2a3m4p5l6e7 # link to actual channel on the osmu discord server
githubRepo: https://github.com/ex/ample # GitHub repository of the project
shops: # list of shops, where you can buy products of the project
    - name: ExampleShop
      link: https://example.com/
      official: true # displays a little 'official' badge next to the shop when set to true
      region: US # countrycode of shop after wikipedia.org/wiki/ISO_3166-1#Codes
    - name: european ExampleShop
      link: https://europe-example.com/
      region: EU
      # you can omit 'official: true' instead of writing 'official: false'
---

Here begins the the normal content of the page!
```

## Developing
If you want to develop the wiki locally, you need [Node.js](https://nodejs.org/en/download/current) installed. Then at the root of the project run
```
npm install
```
in your terminal. With
```
npm run dev
```
you can start the local dev server at `localhost:4321`. Before you push, always run
```
npm run build
```
beforehand to check for any build errors.

If your commit gets to be on the master branch, it will be automatically deployed through [Vercel](https://vercel.com).

## Resources
- you can find the Figma Design Files [here](https://www.figma.com/community/file/1327223930083607761/osmu-website)
- this project was made with [Starlight](https://starlight.astro.build)