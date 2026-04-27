#!/usr/bin/env python3
"""Updates topics of a school document"""


def update_topics(mongo_collection, name, topics):
    """Update all topics of the school with the given name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
