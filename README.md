# JavaScript Division by Zero

This example demonstrates how JavaScript handles division by zero. Unlike some languages that throw an error, JavaScript returns `Infinity`.

## Bug

The `foo` function is designed to divide two numbers. However, if the divisor is zero, the function returns `Infinity` instead of throwing an error or returning `NaN`. This might not always be immediately apparent and could lead to unexpected behavior in applications.

## Solution

The solution involves adding explicit checks to handle zero divisors. This ensures that the function behaves as expected and avoids unexpected results.