# NoSQL

Practice exercises for MongoDB and PyMongo. The files cover basic database commands, CRUD operations, document filtering, and simple log statistics.

## Learning Objectives

- List, create, and select MongoDB databases
- Insert, query, update, count, and delete documents from a collection
- Use MongoDB shell commands for common database operations
- Write Python helper functions that work with PyMongo collections
- Generate basic statistics from MongoDB-stored Nginx logs

## Files

| File | Description |
|------|-------------|
| `0-list_databases` | MongoDB shell command to list all databases |
| `1-use_or_create_database` | MongoDB shell command to use or create the `my_db` database |
| `2-insert` | Inserts one document into the `school` collection |
| `3-all` | Lists all documents in the `school` collection |
| `4-match` | Lists documents in `school` matching the name `Holberton school` |
| `5-count` | Counts all documents in the `school` collection |
| `6-update` | Updates matching `school` documents with an address |
| `7-delete` | Deletes matching `school` documents by name |
| `8-all.py` | Defines `list_all(mongo_collection)`, which returns all documents in a collection |
| `9-insert_school.py` | Defines `insert_school(mongo_collection, **kwargs)`, which inserts a document and returns its `_id` |
| `10-update_topics.py` | Defines `update_topics(mongo_collection, name, topics)`, which updates topics for matching schools |
| `11-schools_by_topic.py` | Defines `schools_by_topic(mongo_collection, topic)`, which finds schools that include a topic |
| `12-log_stats.py` | Prints Nginx log statistics from the `logs.nginx` MongoDB collection |

## Requirements

- MongoDB running locally on `127.0.0.1:27017`
- Python 3.9+
- `pymongo`

## Running MongoDB Shell Commands

Run shell command files with `mongosh`:

```bash
mongosh < 0-list_databases
mongosh < 2-insert
mongosh < 3-all
```

## Running Python Scripts

The helper files are designed to be imported and called with a PyMongo collection.

```python
from pymongo import MongoClient

list_all = __import__("8-all").list_all

client = MongoClient("mongodb://127.0.0.1:27017")
collection = client.my_db.school

print(list_all(collection))
```

Run the log statistics script directly when the `logs.nginx` collection exists:

```bash
python3 12-log_stats.py
```

## Author

Holberton School student work.
