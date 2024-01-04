---
_schema: default
title: Configuring the navigation and footer
nav_title: Configuring the navigation and footer
nav_section: Customizing Alto
weight: 1
draft: false
---
You can easily configure Alto's Navigation and Footer items within CloudCannon, under Alto's **Site Settings**.

{ @html diffcode("n```js
new PagefindUI({
    element: "#search",
+    mergeIndex: [{
+        bundlePath: "https://docs.example.com/_pagefind"
+    }]
})
```n") }

## Configuring the navigation

You can edit the navigation title, add links, and a site logo.

## ​​​​​Configuring the footer

You can add image- or text-based links to Alto's footer.