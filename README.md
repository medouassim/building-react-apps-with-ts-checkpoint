# Checkpoint - Building React Apps with TypeScript

Converted two React components (Greeting and Counter) from JavaScript to TypeScript.

## Tech Stack
- React
- TypeScript

## Files
- Greeting.tsx
- Counter.tsx

## Steps Taken

1. Renamed both files from .jsx/.js to .tsx.

2. Greeting component:
   - Created a GreetingProps interface defining name: string.
   - Typed props directly on the function parameter (avoided React.FC, which is discouraged in modern React/TypeScript).

3. Counter component:
   - Created a CounterState interface defining count: number.
   - Typed the class as Component<{}, CounterState> (empty props, typed state).
   - Explicitly typed the state property and the increment method's return type (void).

4. No logic was changed, only type annotations were added. Both components behave identically to the original JavaScript versions.
