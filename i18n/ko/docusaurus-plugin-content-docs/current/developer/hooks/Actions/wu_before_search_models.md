---
id: wu_before_search_models
title: 액션 - wu_before_search_models
sidebar_label: wu_before_search_models
_i18n_hash: 48be1bde6dde106ab09f563a8e0fa44d
---
**Answer**

The only difference is the `return` keyword.  
The first line simply assigns the result of the query to `$this->user`.  
The second line does the same assignment **and** returns that value from the method.  

Use the first form when you only need to store the result in the object.  
Use the second form when the method itself should return the result of the query.
