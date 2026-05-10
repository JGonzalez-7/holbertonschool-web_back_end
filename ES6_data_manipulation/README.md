# ES6 Data Manipulation

This directory contains JavaScript exercises focused on ES6 data manipulation features, including arrays, typed arrays, sets, maps, and common iterator methods.

## Requirements

- Node.js
- npm
- Babel
- Jest
- ESLint

Install dependencies with:

```bash
npm install
```

## Usage

Run a file with Babel:

```bash
npm run dev <file>
```

Run tests:

```bash
npm test
```

Run linting and tests:

```bash
npm run full-test
```

## Files

| File | Description |
| --- | --- |
| `0-get_list_students.js` | Returns an array of student objects with `id`, `firstName`, and `location`. |
| `1-get_list_student_ids.js` | Returns an array of student IDs from a list of student objects. |
| `2-get_students_by_loc.js` | Filters students by location. |
| `3-get_ids_sum.js` | Returns the sum of all student IDs. |
| `4-update_grade_by_city.js` | Filters students by city and adds their matching grades. |
| `5-typed_arrays.js` | Creates an `ArrayBuffer` and stores a value at a specific position with `DataView`. |
| `6-set.js` | Converts an array into a `Set`. |
| `7-has_array_values.js` | Checks whether all values in an array exist in a set. |
| `8-clean_set.js` | Filters set values by a starting string and joins the cleaned values with hyphens. |
| `9-groceries_list.js` | Returns a `Map` containing grocery items and quantities. |
| `10-update_uniq_items.js` | Updates grocery map quantities from `1` to `100`. |
| `babel.config.js` | Babel configuration for running ES6 code. |
| `package.json` | Project scripts and development dependencies. |

## Author

Holberton School project.
