# Workflow Rules

## Demand Elegance (Balanced)

For non-trivial changes (new components, architectural decisions, multi-file refactors):
- Pause before implementation and propose approach with trade-offs
- Ask: "Is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Challenge your own work before presenting it

For simple changes (typo fixes, single-line edits, config tweaks):
- Execute directly without pause
- Report what was done

## Self-Improvement Loop

- After ANY correction or feedback from the user, record the pattern in auto-memory
- Write a concise rule that prevents the same mistake: what went wrong, why, and how to avoid it
- Review relevant memory files at session start to avoid repeating past errors
- Integrates with PDCA Act phase: when a check fails, capture the root cause as a reusable lesson

## Verification Before Done

Before marking any task complete:
1. Run `pnpm build` to verify no build errors
2. Verify changes match the original requirement
3. Check that no unrelated files were modified
4. Diff behavior between main and your changes when relevant
5. Ask: "Would a staff engineer approve this?" — if not, iterate
6. Ensure AI運用4原則 compliance (no detours, no unsolicited optimization)

## Autonomous Bug Fixing

When encountering build/runtime errors during a task:
1. Read the full error message and stack trace
2. Identify the root cause (do not guess — verify)
3. Fix the specific error with minimal change
4. Re-run verification
5. If fix fails, report to user (per 第1原則: no unauthorized detours)

## Subagent Strategy

- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution
- Provide clear scope: which files, what outcome, acceptance criteria
- Request concise summaries (100-200 words) from each subtask
- Validate subagent output before integrating
