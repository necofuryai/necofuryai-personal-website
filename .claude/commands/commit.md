# Git & Commit Standards (Agent‑Agnostic)

- Commit Format: Use Conventional Commits with scopes — `type(scope): description`
- No Auto‑Signatures: Do not include any AI agent and tool attribution (e.g., "via ChatGPT and Claude/Copilot and Windsurf") or co‑authorship footers
- Clean History: Keep messages concise and focused on the change
- English Only: Write commit messages in English
- No Symbols and Emojis: Avoid symbols and emojis to prevent encoding or tooling issues

## Conventional Commit Format with Scopes

**Format**: `type(scope): description`

**Examples**:
```bash
feat(api): add user authentication endpoint
fix(web): resolve header styling issue
docs(agents): update development guidelines for AI tooling
chore(deps): update Go dependencies
refactor(scripts): consolidate test scripts
```

**Commit Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks, dependency updates
- `refactor`: Code refactoring without feature changes
- `test`: Adding or updating tests
- `ci`: CI and CD pipeline changes
- `perf`: Performance improvements

**Recommended Scopes for This Project** (align with folder structure):
- `pages`: Page files in `src/pages/`
- `components`: UI components in `src/components/`
- `layouts`: Layout templates in `src/layouts/`
- `content`: Content collections (blog, store) in `src/content/`
- `styles`: CSS and styling in `src/styles/`
- `config`: Configuration files (`astro.config.mjs`, `src/config.ts`, `tsconfig.json`)
- `public`: Static assets in `public/`
- `deps`: Dependency updates (`package.json`, `pnpm-lock.yaml`)
- `ci`: CI/CD pipeline and GitHub Actions
- `docs`: Documentation (`CLAUDE.md`, etc.)

## Commit Message Principles (inspired by kernel guidelines)

For non-trivial changes, follow Linus Torvalds' commit message principles:

### 1. **Explain WHY, not WHAT**
The code shows WHAT changed. The commit message should explain:
- **Why** was this change necessary?
- What **problem** did it solve?
- What **effect** does it have?

### 2. **Structure for Complex Changes**
```
Short (50 chars or less) summary line

More detailed explanatory text, if necessary. Wrap it to
about 72 characters or so. The blank line separating the
summary from the body is critical.

Explain the problem that this commit is solving. Focus on
why you are making this change as opposed to how (the code
explains that). Are there side effects or other unintuitive
consequences of this change? Here's the place to explain them.

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Typically a hyphen or asterisk is used for the bullet,
  preceded by a single space
```

### 3. **Good vs Bad Examples**

Note: The symbols below are for documentation only — do not use them in actual commit messages.

Bad: `fix: update code`
Good: `fix(components): correct header z-index overlap on mobile`

Bad: `feat: add new feature`
Good: `feat(pages): add project showcase page with card grid`

### 4. **When to Apply These Principles**

- **Always apply** for: Features, bug fixes, refactoring, performance improvements
- **Can be simplified** for: Typo fixes, dependency updates, formatting changes
- **Rule of thumb**: If you need to think about the change, explain your thinking

## Commit Workflow

When using this command file, follow these steps:

1. Review Changes: `git status`, `git diff`
2. Apply Standards: Follow this guide when crafting messages
3. Stage Files: `git add -p` or file‑by‑file to keep commits focused
4. Create Commit: Use Conventional Commits with appropriate scope

## Multiple File Commits

When multiple files have been updated:

1. **Group by Feature and Scope**: Group related changes together
2. **Split Logical Changes**: Create separate commits for:
 - Different features or bug fixes
 - Different layers (frontend and backend/infrastructure)
 - Documentation updates vs code changes
 - Dependency updates vs feature changes

3. **Commit Order**: Consider dependencies between changes
 - Infrastructure changes before application changes
 - Core changes before dependent features
 - Breaking changes clearly marked

Example workflow (web project scopes):
```bash
# 1) Component fix
git add src/components/Header.astro
git commit -m "fix(components): correct nav drawer toggle on mobile Safari"

# 2) New page
git add src/pages/projects.astro
git commit -m "feat(pages): add project showcase page with filtering"

# 3) Style update
git add src/styles/global.css tailwind.config.cjs
git commit -m "style(styles): adjust DaisyUI theme colors for dark mode"
```

## Using AI Agents to Draft Messages (Optional)

- Keep prompts tool‑agnostic. Example: “Summarize staged changes into a single Conventional Commit (≤72 char subject), include WHY and impact; no signatures and emojis.”
- Always review and edit generated messages before committing.
- Never include agent names, chat links, or run logs in commit messages.
