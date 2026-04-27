#!/usr/bin/env python3
"""Returns list of schools matching a topic"""


def schools_by_topic(mongo_collection, topic):
    """Return list of schools where topic is in topics list"""
    return list(mongo_collection.find({"topics": topic}))
