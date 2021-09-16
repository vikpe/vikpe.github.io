# vikpe.org
> 🦄🚀🌌

My synthwave inspired personal website, built with [Jekyll](https://jekyllrb.com) and [Bulma](https://bulma.io).

![vikpe.org](https://raw.githubusercontent.com/vikpe/vikpe.github.io/master/docs/assets/app/img/vikpe_org_screenshot.jpg)

---

## Development
1. Clone/download repo
2. `yarn install`
3. `cd docs && bundle install`
4. `yarn watch` - site is served @ **`http://localhost:3000`** with live updates.

---

## All commands
Command | Stage | Description
---|---|---
`dev` | `dev` | Build site (Jekyll, assets)
`dev:jekyll` | `dev` | Build Jekyll
`dev:assets` | `dev` | Build assets (images, stylesheets)
`watch` | `dev` | Build site on changes and serve @ http://localhost:3000
||
`build` | `prod` | Build site (Jekyll, assets)
`build:jekyll` | `prod` | Build Jekyll
`build:assets` | `prod` | Build assets (images, stylesheets)
||
`clean` | - | Delete `/public` and clear Jekyll caches
`start` | - | Serve `/public` @ http://localhost:3000
