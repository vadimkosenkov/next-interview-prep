import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

// Returns false during SSR/the first client render, then true after hydration.
// Avoids the setState-in-useEffect "isMounted" pattern flagged by
// react-hooks/set-state-in-effect.
export function useIsClient(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
