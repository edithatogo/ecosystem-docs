# Technology Stack

## Documentation Framework

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Site Framework | **Astro** v5+ | Static site generation |
| Theme | **Starlight** v0.39+ | Documentation site framework |
| Content | **MDX** | Markdown with JSX components |
| CSS | **Custom CSS** | Ecosystem branding and layout |
| Language | **TypeScript** | Configuration and components |

## Plugins

| Plugin | Purpose |
|--------|---------|
| `starlight-links-validator` | Validates all internal and external links at build time |
| `starlight-llms-txt` | Generates llms.txt for AI/LLM consumption |
| `starlight-polyglot` | Multi-language API documentation generation (file: reference) |

## Infrastructure

| Component | Service |
|-----------|---------|
| Source Control | GitHub |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |
| Domain | `edithatogo.github.io/ecosystem-docs` |

## Development

| Tool | Purpose |
|------|---------|
| pnpm | Package manager |
| Node.js 22 | Runtime |
| astro dev | Local development server |
| astro build | Production build |

## Integration Points

- **starlight-polyglot** is referenced via `file:../../starlight-polyglot/packages/starlight-polyglot` for local development
- Each project's documentation site is deployed independently to its own GitHub Pages subpath
- The ecosystem docs site links to each project's full doc site via external URLs
