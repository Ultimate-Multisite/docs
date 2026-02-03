---
title: Registro de cambios de Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
**Solution Explanation**

For every position `i` of the string we want to know the longest
substring that starts at `i` and contains at most `k` different
characters.
If we could check all substrings that start at `i` we would need  
`O(n²)` time – far too slow for `n ≤ 10⁵`.

The classic way to solve this problem is a *sliding window* (two‑pointer)
technique.

--------------------------------------------------------------------

#### 1.  Sliding window

```
left  – start of the current window
right – end of the current window (inclusive)
```

While we move `right` to the right we add the new character to a
frequency table.
If the number of distinct characters becomes larger than `k`,
we shrink the window from the left side until the condition is satisfied
again.

During the whole process we keep the maximum length that we have seen.

--------------------------------------------------------------------

#### 2.  Data structures

* `counts : [Character : Int]` – how many times each character occurs
  inside the current window.
* `distinct : Int` – current number of different characters.
* `maxLen : Int` – answer so far.

The alphabet is small (at most 26 different letters in the test data),
so the dictionary stays tiny – `O(1)` memory.

--------------------------------------------------------------------

#### 3.  Algorithm

```
if k == 0                     // not needed for the given constraints
    answer = 0
else
    left = 0
    maxLen = 0
    distinct = 0
    for right = 0 ..< n
        add s[right] to counts
        if distinct > k
            while distinct > k
                remove s[left] from counts
                left += 1
        maxLen = max(maxLen, right - left + 1)
    answer = maxLen
```

*Adding a character*  
If it is already in the dictionary we just increase its counter.  
Otherwise we insert it with value `1` and increase `distinct`.

*Removing a character*  
If its counter becomes `0` we delete the entry and decrease `distinct`,
otherwise we just decrement the counter.

--------------------------------------------------------------------

#### 4.  Correctness Proof  

We prove that the algorithm outputs the length of the longest substring
containing at most `k` distinct characters.

---

##### Lemma 1  
At any time the window `[left, right]` contains at most `k` distinct
characters.

**Proof.**

*When `right` is increased* we add one character.  
If the number of distinct characters becomes `k+1`, the inner `while`
loop removes characters from the left until the number of distinct
characters is `k` again.  
No other operation can increase the number of distinct characters.
∎



##### Lemma 2  
For every position `right` the algorithm considers the longest
substring ending at `right` that satisfies the condition.

**Proof.**

When `right` is fixed, the algorithm keeps shrinking the window from
the left until the condition is satisfied (Lemma&nbsp;1).  
After the loop terminates, the window `[left, right]` is the *longest*
possible ending at `right` that still contains at most `k` distinct
characters – otherwise we could have moved `left` one step to the left
and still satisfy the condition, contradicting the loop termination.
∎



##### Lemma 3  
`maxLen` is the length of the longest valid substring of the whole
string.

**Proof.**

During the scan, for each `right` we update `maxLen` with the length of
the longest valid substring ending at `right` (Lemma&nbsp;2).  
Therefore after the last iteration `maxLen` is the maximum over all
valid substrings of the string. ∎



##### Theorem  
The algorithm outputs the correct answer.

**Proof.**

By Lemma&nbsp;3 the value printed by the algorithm equals the length of
the longest substring that contains at most `k` distinct characters,
which is exactly the required answer. ∎



--------------------------------------------------------------------

#### 5.  Complexity Analysis

*Time* – Each character is inserted into the window once and removed
at most once.  
`O(n)` where `n = |s|`.

*Memory* – The dictionary stores at most the number of distinct
characters in the current window, bounded by the alphabet size.  
`O(1)` (≤ 26 for the given tests).

--------------------------------------------------------------------

#### 6.  Reference Implementation (Swift 5.5)

```swift
import Foundation

// ---------- Read input ----------
guard let kLine = readLine(),
      let k = Int(kLine.trimmingCharacters(in: .whitespacesAndNewlines)),
      let sLine = readLine() else {
    exit(0)
}
let s = sLine.trimmingCharacters(in: .whitespacesAndNewlines)

// ---------- Edge case ----------
if k == 0 {
    print(0)
    exit(0)
}

// ---------- Sliding window ----------
var counts: [Character: Int] = [:]
var left = 0
var maxLen = 0
var distinct = 0

let chars = Array(s)

for right in 0..<chars.count {
    let c = chars[right]
    if let current = counts[c] {
        counts[c] = current + 1
    } else {
        counts[c] = 1
        distinct += 1
    }

    // shrink from the left while we have too many distinct chars
    while distinct > k {
        let leftChar = chars[left]
        if let cur = counts[leftChar] {
            if cur == 1 {
                counts.removeValue(forKey: leftChar)
                distinct -= 1
            } else {
                counts[leftChar] = cur - 1
            }
        }
        left += 1
    }

    let currentLen = right - left + 1
    if currentLen > maxLen {
        maxLen = currentLen
    }
}

// ---------- Output ----------
print(maxLen)
```

The program follows exactly the algorithm proven correct above and is
fully compatible with Swift 5.5.
