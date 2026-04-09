# Python Variable Annotations

Practice exercises for Python type annotations using basic functions, variables, and common types from the `typing` module.

## Learning Objectives

- Annotate function parameters and return values
- Declare typed variables
- Use `List`, `Union`, `Tuple`, `Iterable`, `Sequence`, and `Callable`
- Write clearer Python code with explicit type hints

## Files

| File | Description |
|------|-------------|
| `0-add.py` | Defines `add(a: float, b: float) -> float` |
| `1-concat.py` | Defines `concat(str1: str, str2: str) -> str` |
| `2-floor.py` | Defines `floor(n: float) -> int` using `math.floor` |
| `3-to_str.py` | Defines `to_str(n: float) -> str` |
| `4-define_variables.py` | Declares annotated variables of types `int`, `float`, `bool`, and `str` |
| `5-sum_list.py` | Defines `sum_list(input_list: List[float]) -> float` |
| `6-sum_mixed_list.py` | Defines `sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float` |
| `7-to_kv.py` | Defines `to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]` |
| `8-make_multiplier.py` | Defines `make_multiplier(multiplier: float) -> Callable[[float], float]` |
| `9-element_length.py` | Defines `element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]` |

## Requirements

- Python 3.9+

## Running an Example

Because the files use hyphens in their names, load them with `importlib`.

```python
import importlib.util

spec = importlib.util.spec_from_file_location("add_mod", "./0-add.py")
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

print(mod.add(1.5, 2.5))
```

## Author

Holberton School student work.
