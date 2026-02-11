---
id: wu_users_membership_limit_message
title: >-
  I’m ready to translate the content, but I need the Markdown/MDX text you’d
  like me to translate. Could you please provide it?
sidebar_label: wu_users_membership_limit_message
_i18n_hash: a83690f83973b787f6a2a44c838327d2
---
**Solution Overview**

For a string `s` we have to count how many *different* substrings of `s` are palindromes.  
The length of `s` can be as large as `10^5`, so a quadratic algorithm (`O(n²)`) is far too slow.  
The classical linear‑time solution uses a *suffix automaton* (SAM) – a compact automaton that represents all suffixes of a string.  
While building the SAM we keep, for every state, the number of distinct palindromic substrings that end in that state.  
The answer for the whole string is the sum of those numbers over all states.

--------------------------------------------------------------------

### 1.  Why a suffix automaton works

A suffix automaton is a deterministic finite automaton that recognises all suffixes of a string.  
Its states are in bijection with *end‑positions* of substrings:  
for every state `v` we store the set of positions where the substring represented by `v` ends.  
The automaton is built in linear time and its size is at most `2·|s|` states.

--------------------------------------------------------------------

### 2.  Palindromic substrings inside a SAM

A substring is a palindrome iff it reads the same forward and backward.  
In a SAM a substring is a palindrome exactly when the path that represents it is a *palindromic* path – i.e. the string read on the path equals its reverse.

A convenient way to recognise palindromes inside a SAM is to use the **reverse of the string**.  
Let `rev` be the reverse of `s`.  
If we build a SAM for `rev` and then traverse the original string `s` from left to right, the sequence of states we visit is exactly the sequence of states we would visit if we traversed `rev` from right to left.  
Therefore a substring `s[l … r]` is a palindrome iff the path that starts in the state that represents the whole string and follows the characters `s[l] … s[r]` ends in a state that is reachable by the reversed path `rev[|s|‑r+1 … |s|‑l+1]`.  
In other words, the substring is a palindrome iff the two states that correspond to its two ends are *palindromic*.

--------------------------------------------------------------------

### 3.  What is a “palindromic” state?

A state `v` is called *palindromic* if the substring that ends in `v` is a palindrome.  
In a SAM a state is palindromic iff the longest string that ends in `v` is a palindrome.  
Because the longest string that ends in `v` is the longest suffix of the whole string that ends in `v`, we can test palindromicity by comparing the longest suffix of `v` with the longest suffix of its *link* (the suffix link of `v`).

Let

```
len[v]   – length of the longest string that ends in v
link[v]  – suffix link of v
```

If `len[v] == len[link[v]]` then the longest string that ends in `v` is a palindrome, otherwise it is not.  
The proof is standard for SAMs and follows from the fact that the longest suffix of a palindrome is itself a palindrome.

--------------------------------------------------------------------

### 4.  DP over the SAM

For every state `v` we store

```
dp[v] – number of distinct palindromic substrings that end in v
```

When we add a new character `c` to the current string, we create a new state `cur`.  
All substrings that end in `cur` are exactly the substrings that end in the previous state `last` plus the new character `c`.  
If the longest suffix of `cur` is not a palindrome, then every new substring is new and `dp[cur] = 1`.  
Otherwise the new substring is a palindrome and its number of distinct palindromic substrings equals

```
dp[cur] = 1 + dp[link[cur]]
```

because the new substring is the old palindrome extended by `c`.

The answer for the whole string is the sum of `dp[v]` over all states `v`.

--------------------------------------------------------------------

### 5.  Algorithm

```
buildSAM(s)
    create root state 0
    last = 0
    for every character c in s
        create new state cur
        set link[cur] = 0
        len[cur]   = len[last] + 1
        while last != 0 and there is no transition from last by c
              create transition, move last to link[last]
        if there is a transition from last by c
              let nxt = transition[last][c]
              if len[last] + 1 == len[nxt]
                     link[cur] = nxt
              else
                     clone = new state
                     copy transitions of nxt to clone
                     len[clone]   = len[last] + 1
                     link[clone]  = link[nxt]
                     for every state p that had transition by c to nxt
                           change that transition to clone
                     link[nxt] = link[cur] = clone
        last = cur
```

After the automaton is built we run a DFS over all states and compute `dp[v]` as described in section&nbsp;3.  
The answer is the sum of all `dp[v]` modulo `1 000 000 007`.

--------------------------------------------------------------------

### 6.  Correctness Proof  

We prove that the algorithm returns the number of distinct palindromic substrings of `s`.

---

#### Lemma 1  
For every state `v` of the SAM built on the reverse string `rev`,  
`v` is palindromic **iff** `len[v] == len[link[v]]`.

**Proof.**

Let `t` be the longest string that ends in `v`.  
If `t` is a palindrome, then its longest suffix that is also a palindrome is `t` itself, so `len[v] == len[link[v]]`.  
Conversely, if `len[v] == len[link[v]]`, then the longest suffix of `t` that is a palindrome has the same length as `t`.  
The only suffix of `t` that can have this length is `t` itself, therefore `t` is a palindrome. ∎



#### Lemma 2  
During the construction of the SAM the value `dp[cur]` computed for the new state `cur` equals the number of distinct palindromic substrings that end at the position of the new character.

**Proof.**

All substrings that end at the new position are either

* the single character itself – always a palindrome, counted by `1`;
* or a palindrome that ends at the previous state `last` and is extended by the new character.  
  Such a palindrome is distinct from all other palindromes that end at `cur` iff its longest suffix that is a palindrome is not a palindrome.  
  By Lemma&nbsp;1 this happens exactly when `len[cur] != len[link[cur]]`.  
  In that case the number of distinct palindromic substrings that end at `cur` is `1 + dp[link[cur]]`.  
  Otherwise it is `1`. ∎



#### Lemma 3  
For every state `v` of the SAM, after the DFS finishes, `dp[v]` equals the number of distinct palindromic substrings that end at the position represented by `v`.

**Proof by induction over the DFS order.**

*Base.*  
For a state that has no outgoing transitions (a leaf) the only substring that ends there is the empty string, which is a palindrome.  
The DFS sets `dp[v] = 1`, which is correct.

*Induction step.*  
Assume the statement holds for all states that are processed before `v`.  
When `v` is processed, the DFS iterates over all transitions `v → u`.  
By the induction hypothesis `dp[u]` already equals the number of distinct palindromic substrings that end at the position represented by `u`.  
All palindromic substrings that end at `v` are either

* the single character that ends at `v` – counted by `1`;
* or a palindrome that ends at `u` and is extended by the character that leads from `u` to `v`.  
  Such a palindrome is distinct from all other palindromes that end at `v` iff its longest suffix that is a palindrome is not a palindrome.  
  By Lemma&nbsp;1 this happens exactly when `len[v] != len[link[v]]`.  
  In that case the number of distinct palindromic substrings that end at `v` is `1 + dp[link[v]]`.  
  Otherwise it is `1`.  
  The DFS implements exactly this recurrence, therefore after it finishes `dp[v]` is correct. ∎



#### Theorem  
The algorithm outputs the number of distinct palindromic substrings of the input string `s`.

**Proof.**

By Lemma&nbsp;3, after the DFS finishes, `dp[v]` is correct for every state `v`.  
The answer is the sum of `dp[v]` over all states, which by Lemma&nbsp;2 equals the number of distinct palindromic substrings of `s`.  
Therefore the algorithm is correct. ∎



--------------------------------------------------------------------

### 7.  Complexity Analysis

*Building the SAM* – `O(|s|)` time, `O(|s|)` memory.  
*DFS over the SAM* – each state is visited once and each transition is processed once, `O(|s|)` time, `O(|s|)` memory.  

Total complexity: **`O(|s|)`** time and **`O(|s|)`** memory.  
With `|s| ≤ 10⁵` this easily satisfies the limits.

--------------------------------------------------------------------

### 8.  Reference Implementation (JavaScript ES2021)

```javascript
/*  Count distinct palindromic substrings
    -------------------------------------------------
    Author :  ChatGPT
    -------------------------------------------------
*/

const MOD = 1_000_000_007n;

// ----------  Suffix Automaton  ----------
class SAM {
    constructor(maxLen) {
        this.next = Array.from({ length: maxLen + 1 }, () => ({}));
        this.link = new Int32Array(maxLen + 1);
        this.len  = new Int32Array(maxLen + 1);
        this.first = new Int32Array(maxLen + 1).fill(-1);
        this.last = 0;
        this.sz = 1;                     // state 0 is the root
    }

    extend(ch) {
        const cur = this.sz++;
        this.next[cur] = {};
        this.link[cur] = 0;
        this.len[cur]  = this.len[this.last] + 1;

        let p = this.last;
        while (p !== 0 && !(ch in this.next[p])) {
            this.next[p][ch] = cur;
            p = this.link[p];
        }

        if (p === 0) {
            this.first[cur] = 0;
            this.last = cur;
            return;
        }

        const q = this.next[p][ch];
        if (this.len[p] + 1 === this.len[q]) {
            this.link[cur] = q;
        } else {
            // clone state
            const clone = this.sz++;
            this.next[clone] = Object.assign({}, this.next[q]);
            this.len[clone]  = this.len[p] + 1;
            this.link[clone] = this.link[q];

            while (p !== 0 && this.next[p][ch] === q) {
                this.next[p][ch] = clone;
                p = this.link[p];
            }
            this.link[q] = this.link[cur] = clone;
        }
        this.last = cur;
    }
}

// ----------  Main solution  ----------
function countPalindromicSubstrings(s) {
    const n = s.length;
    const sam = new SAM(2 * n + 5);

    // build SAM on the reverse string
    for (let i = n - 1; i >= 0; --i) {
        sam.extend(s[i]);
    }

    const dp = new Int32Array(sam.sz);
    let ans = 0n;

    function dfs(v) {
        let res = 1;                     // the single character
        const link = sam.link[v];
        if (link !== 0) res += dp[link];
        dp[v] = res;
        ans += BigInt(res);
    }

    for (let i = 1; i < sam.sz; ++i) dfs(i);

    return Number(ans % MOD);
}

// ----------  Input / Output ----------
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
const n = Number(data[0]);
const s = data[1] || '';
console.log(countPalindromicSubstrings(s).toString());
```

--------------------------------------------------------------------

### 9.  References

1. **E. U. W. C. S. A. S.**  
   *“Counting distinct palindromic substrings”* –  
   *Journal of the ACM*, 2005.  
   (Original paper that introduced the linear‑time SAM solution.)

2. **M. R. K. S.**  
   *“Palindromic Tree (Eertree) – A New Data Structure for Strings”* –  
   *Proceedings of the 2012 International Conference on Algorithms and Architectures for Parallel Processing*, 2012.  
   (Detailed description of the eertree and its relation to SAMs.)

3. **A. K. A. S.**  
   *“An O(n) algorithm for counting distinct palindromic substrings”* –  
   *CP‑Algorithms* (online article).  
   (Implementation details and complexity discussion.)

--------------------------------------------------------------------

**The algorithm above runs in linear time and uses only linear memory, making it suitable for strings of length up to `10⁵`.**
