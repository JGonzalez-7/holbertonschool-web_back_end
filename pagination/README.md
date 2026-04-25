# Pagination

Practice exercises for paginating a dataset in Python, from simple index
calculation to hypermedia pagination and deletion-resilient pagination.

## Learning Objectives

- Calculate start and end indexes for a page of data
- Return slices of a dataset using page and page size values
- Validate pagination arguments with assertions
- Add hypermedia metadata such as previous page, next page, and total pages
- Build pagination that continues to work when indexed rows are deleted

## Files

| File | Description |
|------|-------------|
| `0-simple_helper_function.py` | Defines `index_range(page: int, page_size: int) -> tuple`, which returns the start and end indexes for a page |
| `1-simple_pagination.py` | Defines a `Server` class that loads `Popular_Baby_Names.csv` and returns a requested page of rows with `get_page` |
| `2-hypermedia_pagination.py` | Extends pagination with `get_hyper`, returning page data and metadata in a dictionary |
| `3-hypermedia_del_pagination.py` | Defines deletion-resilient pagination with `indexed_dataset` and `get_hyper_index` |

## Requirements

- Python 3.9+
- Standard library only: `csv`, `math`, and `typing`
- The dataset file `Popular_Baby_Names.csv` must be available in the working
  directory when running the `Server` examples

## Running an Example

Because the files use hyphens in their names, load them with `__import__` when
testing from inside the `pagination` directory.

```python
Server = __import__("2-hypermedia_pagination").Server

server = Server()
print(server.get_page(1, 5))
print(server.get_hyper(2, 5))
```

Example return shape for `get_hyper`:

```python
{
    "page_size": 5,
    "page": 2,
    "data": [...],
    "next_page": 3,
    "prev_page": 1,
    "total_pages": 3885
}
```

## Author

Holberton School student work.
