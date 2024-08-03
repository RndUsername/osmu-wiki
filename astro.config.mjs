import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import links from "./links";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Wiki",
      logo: {
        src: "./src/assets/osmu-logo.svg",
      },
      social: {
        discord: links.discordInvite,
      },
      editLink: {
        baseUrl: links.gitEditBase,
      },
      sidebar: [
        {
          label: "OSMU",
          items: [
            {
              label: "About",
              link: "/osmu/about",
            },
          ],
        },
        {
          label: "Bitaxe",
          items: [
            {
              label: "Overview",
              link: "/bitaxe/about",
            },
            {
              label: "100 / Max",
              link: "/bitaxe/100",
            },
            {
              label: "200 / Ultra",
              link: "/bitaxe/200",
            },
            {
              label: "300 / Hex",
              link: "/bitaxe/300",
            },
            {
              label: "400 / Supra",
              link: "/bitaxe/400",
            },
            {
              label: "600 / Gamma",
              link: "/bitaxe/600",
            },
            {
              label: "API",
              link: "/bitaxe/api",
            },
            {
              label: "BAP",
              link: "/bitaxe/bap",
            },
            {
              label: "AxeTester",
              link: "/bitaxe/axetester",
            },
          ],
        },
        {
          label: "Bitaxe Accessories",
          items: [
            {
              label: "BitHalo",
              link: "/bitaxe/bithalo",
            },
          ],
        },
        {
          label: "Nerdminer",
          items: [
            {
              label: "Overview",
              link: "/nerdminer/about",
            },
          ],
        },
        {
          label: "Public Pool",
          items: [
            {
              label: "Overview",
              link: "/public-pool/about",
            },
          ],
        },
        {
          label: "AxeOS",
          items: [
            {
              label: "Overview",
              link: "/axeos/about",
            },
            {
              label: "Install onto BitAxe",
              link: "/axeos/install-onto-bitaxe",
            },
            {
              label: "Build from Source",
              link: "/axeos/compile",
            },
          ],
        },
        {
          label: "Bitcrane",
          items: [
            {
              label: "Overview",
              link: "/bitcrane/about",
            },
          ],
        },
        {
          label: "Piaxe",
          items: [
            {
              label: "Overview",
              link: "/piaxe/about",
            },
            {
              label: "Assemble Piaxe",
              link: "/piaxe/assembly",
            },
            {
              label: "Building Piaxe",
              link: "/piaxe/building",
            },
          ],
        },
        {
          label: "Qaxe",
          items: [
            {
              label: "Overview",
              link: "/qaxe/about",
            },
            {
              label: "Assembly",
              link: "/qaxe/assembly",
            },
            {
              label: "Installation",
              link: "/qaxe/installation",
            },
          ],
        },
        {
          label: "Antsniffer",
          items: [
            {
              label: "Overview",
              link: "/antsniffer/about",
            },
          ],
        },
        {
          label: "OSMU Lab",
          items: [
            {
              label: "Overview",
              link: "/osmu-lab/about",
            },
            {
              label: "BM1397",
              link: "/osmu-lab/bm1397",
            },
            {
              label: "BM1366",
              link: "/osmu-lab/bm1366",
            },
            {
              label: "BM1370",
              link: "/osmu-lab/bm1370",
            },
          ],
        },
        {
          label: "Tips & Tricks",
          items: [
            {
              label: "Building PCBs",
              link: "/tips/building-pcbs",
            },
            {
              label: "Assembly",
              link: "/tips/assembly",
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
      components: {
        PageTitle: "./src/components/PageTitle.astro",
      },
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
    svelte(),
  ],
});
