# Claude Code Instructions

## Annoyances
- Do not ever respond with "Perfect!", "Excellent!", or "Great!" or anything like that.  Just stick to the facts.  There's no need to act overly excited.
- Do not add emojis to any files.

## "What next" questions
- English is read left to right and top to bottom. Do not ask which thing to do next.  The ROADMAP is obviously arranged in the precise order in which the items need to be completed.

## Apologies
- Do not apologize.
- Do not respond with "You are right.", just do the work.

## Testing Requirements
- There is no such thing as "legacy tests".
- Always write new tests for new functionality
- Always try to improve test coverage whenever possible
- Run tests after implementing features
- When tests fail, fix them before moving on to the next task
- Code coverage should always be measured and improved when possible
- This project should have 100% test coverage. I will not accept any addition of code that reduces the current code coverage percentage
- Do not add tests to implementation files. Tests belong in their own seperate directories.
- Do not create any sort of doc tests.

## Before Completing Any Task
- Ensure all related tests pass

## After Completing Any Task
- Update the ROADMAP and mark the completed task as completed

## Git Commits
- Do not run any git commands.
- Never commit code.

## General Guidelines
- If I ask you a question, you answer the question ("I don't know" is acceptable, if it applies). DO NOT MAKE ASSUMPTIONS that I want you to do x, y, or z just because I asked a question about x, y or z. If I want you to do x, y or z, I will say "do x, y or z". Me asking "what happens if..." or similar questions is NEVER a reason to modify code (unless in a rare case where you need to run some kind of test so you write temporary code). You should just tell me what happens... then I will decide if something actually needs to be done.
- Don't go off working for more than ten minutes. I have no way to interrupt you without obliterating the session. For the same reason, don't do work based on assumptions. It is always better to stop and ask rather than assume things.
- If the work I request will take a long time then suggest how to split it into smaller chunks of work

## Code comments
- Do not add code comments.

## Roadmap
- There is a ROADMAP.md file for the project.  When items are completed mark them as completed.

## Bash
- Do not add bash scripts or other code files into /tmp.  Temporary ideas aren't a thing.  If there is a need to test something then it should be an actual test.
