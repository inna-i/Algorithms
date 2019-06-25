/*

In contrast to most languages, which implement arrays with, well, 
arrays, in Javascript Arrays are objects, and values are stored in a hashtable, 
just like regular object values.

As such:

Access - O(1)
Appending - Amortized O(1) (sometimes resizing the hashtable is required; usually only insertion is required)
Prepending - O(n) via unshift, since it requires reassigning all the indexes
Insertion - Amortized O(1) if the value does not exist. O(n) if you want to shift existing values (Eg, using splice).
Deletion - Amortized O(1) to remove a value, O(n) if you want to reassign indices via splice.
Swapping - O(1)

In general, setting or unsetting any key in a dict is amortized O(1), 
and the same goes for arrays, regardless of what the index is.
Any operation that requires renumbering existing values is O(n) simply because you have 
to update all the affected values.

*/