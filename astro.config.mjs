import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import links from "./links";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "WIKI",
    logo: {
      src: "./src/assets/osmu-logo.svg"
    },
    social: {
      discord: links.discordInvite
    },
    editLink: {
      baseUrl: links.gitEditBase
    },
    sidebar: [{
      label: "OSMU",
      items: [{
        label: "About",
        link: "/osmu/about"
      }]
    }, {
      label: "Bitaxe",
      items: [{
        label: "Overview",
        link: "/bitaxe/about"
      }, {
        label: "100 / Max",
        link: "/bitaxe/100"
      }, {
        label: "200 / Ultra",
        link: "/bitaxe/200"
      }, {
        label: "300 / Hex",
        link: "/bitaxe/300"
      }]
    }, {
      label: "Nerdminer",
      items: [{
        label: "Overview",
        link: "/nerdminer/about"
      }]
    }, {
      label: "Public Pool",
      items: [{
        label: "Overview",
        link: "/public-pool/about"
      }]
    }, {
      label: "AxeOS",
      items: [{
        label: "Overview",
        link: "/axeos/about"
      }]
    }, {
      label: "Bitcrane",
      items: [{
        label: "Overview",
        link: "/bitcrane/about"
      }]
    }, {
      label: "Piaxe",
      items: [{
        label: "Overview",
        link: "/piaxe/about"
      }]
    }, {
      label: "Antsniffer",
      items: [{
        label: "Overview",
        link: "/antsniffer/about"
      }]
    }, {
      label: "Tips & Tricks",
      items: [{
        label: "Building PCBs",
        link: "/tips/building-pcbs"
      }, {
        label: "Assembly",
        link: "/tips/assembly"
      }]
    }],
    customCss: ['./src/tailwind.css'],
    components: {
      PageTitle: "./src/components/PageTitle.astro"
    }
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false
  }), svelte()],
  output: "static",
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
  })
});