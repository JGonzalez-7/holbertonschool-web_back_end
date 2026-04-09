# Python Async Function

Practice exercises for Python asynchronous programming with `asyncio`, including coroutines, concurrent execution, runtime measurement, and task creation.

## Learning Objectives

- Write and run basic coroutines with `async` and `await`
- Execute multiple coroutines concurrently
- Measure the average runtime of asynchronous work
- Create and schedule `asyncio.Task` objects
- Collect asynchronous results in completion order

## Files

| File | Description |
|------|-------------|
| `0-basic_async_syntax.py` | Defines `wait_random(max_delay: int = 10) -> float`, which waits for a random delay and returns it |
| `1-concurrent_coroutines.py` | Defines `wait_n(n: int, max_delay: int) -> List[float]`, which runs `wait_random` multiple times concurrently and returns delays in ascending completion order |
| `2-measure_runtime.py` | Defines `measure_time(n: int, max_delay: int) -> float`, which runs `wait_n` and returns the average runtime per coroutine |
| `3-tasks.py` | Defines `task_wait_random(max_delay: int) -> asyncio.Task`, which wraps `wait_random` in an `asyncio` task |
| `4-tasks.py` | Defines `task_wait_n(n: int, max_delay: int) -> List[float]`, which runs multiple tasks concurrently and returns delays in ascending completion order |

## Requirements

- Python 3.9+
- Standard library only: `asyncio`, `random`, `time`, and `typing`

## Running an Example

Because the files use hyphens in their names, they are imported with `__import__` inside the project files. For a quick manual test:

```python
import asyncio

wait_n = __import__("1-concurrent_coroutines").wait_n

print(asyncio.run(wait_n(5, 3)))
```

## Author

Holberton School student work.
