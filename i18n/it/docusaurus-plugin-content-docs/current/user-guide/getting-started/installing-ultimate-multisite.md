---
title: Installazione di Ultimate Multisite
sidebar_position: 12
_i18n_hash: 400c7f9fc01ce3a8275a1710ef7e903a
---
**Answer**

The “real” answer is that the problem is *not* a bug in the compiler – it is a bug in the *standard*.  
The standard says that a *constexpr* function can be evaluated at compile‑time *only* if it is
*trivially* evaluable.  
A function that contains a `switch` over a non‑integral type is not considered trivially
evaluable, so the compiler is free to reject it.  GCC and Clang are following the
standard, MSVC is being permissive.

The fix is to rewrite the function so that the compiler can see that the `switch`
is over an integral type.  The usual trick is to use a helper that turns the enum
into an integer and then switch on that integer.

```cpp
enum class E { A, B, C };

constexpr int to_int(E e) noexcept
{
    return static_cast<int>(e);          // integral value of the enum
}

constexpr int f(E e) noexcept
{
    switch (to_int(e))                   // switch on an integral value
    {
        case 0: return 1;                // E::A
        case 1: return 2;                // E::B
        case 2: return 3;                // E::C
    }
}
```

Now `f` is a valid `constexpr` function on all compilers, and the compiler can
evaluate it at compile time.

If you want to keep the enum values in the `switch` labels, you can use a
`constexpr` helper that maps the enum to an integer:

```cpp
constexpr int to_int(E e) noexcept
{
    return static_cast<int>(e);
}

constexpr int f(E e) noexcept
{
    switch (to_int(e))
    {
        case to_int(E::A): return 1;
        case to_int(E::B): return 2;
        case to_int(E::C): return 3;
    }
}
```

Either way, the key point is that the `switch` must be over an integral type
for the function to be considered `constexpr`‑friendly.  This is the reason
why GCC and Clang reject the original code while MSVC accepts it.
