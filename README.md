# Holberton School Web Back End

This repository contains back-end practice projects for Python and NoSQL concepts. Each directory focuses on a separate topic and includes small, task-based scripts.

## Projects

| Directory | Description |
|-----------|-------------|
| `python_variable_annotations` | Python type annotation exercises covering typed functions, variables, lists, tuples, unions, callables, iterables, and sequences |
| `python_async_function` | Async Python exercises using `async`, `await`, `asyncio`, concurrent coroutines, runtime measurement, and tasks |
| `python_async_comprehension` | Async generator and async comprehension exercises using `asyncio` |
| `pagination` | Pagination exercises covering index ranges, simple pagination, hypermedia pagination, and deletion-resilient pagination |
| `NoSQL` | MongoDB shell and PyMongo exercises for creating, reading, updating, deleting, filtering, and reporting on documents |

## Repository Structure

```text
.
├── NoSQL
├── pagination
├── python_async_comprehension
├── python_async_function
└── python_variable_annotations
```

## Requirements

- Python 3.9+
- MongoDB for the `NoSQL` project
- `pymongo` for the Python MongoDB scripts in `NoSQL`
- Standard Python library modules used throughout the Python projects, including `asyncio`, `random`, `time`, `math`, `csv`, and `typing`

## Usage

Navigate into a project directory before running its files. Many Python files use Holberton task naming with hyphens, so examples often load modules with `__import__` or `importlib`.

```bash
cd python_async_function
python3 0-basic_async_syntax.py
```

For MongoDB shell tasks:

```bash
cd NoSQL
mongosh < 0-list_databases
```

## Author

Holberton School student work.
