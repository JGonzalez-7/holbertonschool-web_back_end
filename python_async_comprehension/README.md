# Python Async Comprehension

Practice exercises for asynchronous generators and asynchronous comprehensions in Python using `asyncio`.

## Learning Objectives

- Create and use asynchronous generators
- Consume asynchronous iterables with async comprehensions
- Run asynchronous operations concurrently with `asyncio.gather`
- Measure the runtime of concurrent asynchronous execution

## Files

| File | Description |
|------|-------------|
| `0-async_generator.py` | Defines `async_generator()`, which yields 10 random floats between 0 and 10 with a 1-second pause between values |
| `1-async_comprehension.py` | Defines `async_comprehension()`, which collects the 10 values produced by `async_generator()` using an async comprehension |
| `2-measure_runtime.py` | Defines `measure_runtime()`, which runs `async_comprehension()` four times concurrently and returns the total elapsed runtime |

## Requirements

- Python 3.9+
- Standard library only: `asyncio`, `random`, and `time`

## Running an Example

Because the files use hyphens in their names, they are imported with `__import__` inside the project files. For a quick manual test:

```python
import asyncio

async_comprehension = __import__("1-async_comprehension").async_comprehension

print(asyncio.run(async_comprehension()))
```

## Author

Holberton School student work.
