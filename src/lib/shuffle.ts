/**
 * Randomly shuffles an array using the Fisher-Yates (Knuth) algorithm.
 *
 * Walks the array backwards from the last index to the first. At each step `i`,
 * it picks a random index `j` in the range `[0, i]` (inclusive) and swaps
 * `arr[i]` with `arr[j]`. This guarantees every permutation is equally likely
 * (uniform distribution) and runs in O(n) time with O(n) space, since a copy
 * of the input array is made first (the original array is not mutated).
 *
 * Example:
 *   shuffle([1, 2, 3, 4, 5])
 *   // => [3, 1, 5, 2, 4]   (order is random on every call)
 */
export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
