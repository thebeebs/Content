---
title: I have a WebSQL database but I hear that the specification has been dropped will IE ever support WebSQL?
authors:
- thebeebs
intro: 'The browser based WebSQL specification was an in b...'
types:
- shorts
categories:
- web
- html5at5
published: 2011/12/15 12:00:00
updated: 2011/12/15 13:00:00
status: archived
---

The browser based WebSQL specification was an in browser database and has been supported by Chrome and a number of other browsers for some time. However, the specification has been dropped in favour of IndexedDB and chrome will be dropping support for it in a future version. As you have invested some time into developing a WebSQL system this isn&rsquo;t great news as it is unlikely that IE will implement it in the future.<p>Ido Green a developer Advocate at Google Chrome has written a nice post this week showing you how to convert a WebSQL database into an IndexedDB one which you can [find here](http://greenido.wordpress.com/2011/11/29/convert-your-websql-to-indexeddb/).

IndexedDb and WebSQL are fundamentally different types of database below is a table that tries to explain some of the differences in the concepts between the two approaches:
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="151">

**Concept**

</td>
<td width="255">

**Relational DB**

</td>
<td width="440">

**IndexedDB**

</td>
</tr>
<tr>
<td width="151">

Database

</td>
<td width="255">

Database

</td>
<td width="440">

Database

</td>
</tr>
<tr>
<td width="151">

Tables

</td>
<td width="255">

Tables contain columns and rows

</td>
<td width="440">

objectStore contains Javascript objects and keys

</td>
</tr>
<tr>
<td width="151">

Query Mechanism, Join, and Filters

</td>
<td width="255">

SQL

</td>
<td width="440">

Cursor APIs, Key Range APIs, and Application Code

</td>
</tr>
<tr>
<td valign="top" width="151">

Transaction Types and Locks

</td>
<td valign="top" width="255">

Lock can happen on databases, tables,   
or rows on READ_WRITE Transactions

</td>
<td valign="top" width="440">

Lock can happen on database on VERSION_CHANGE transaction, on an objectStores on READ_ONLY and READ_WRITE transactions. There is no object level locking.

</td>
</tr>
<tr>
<td valign="top" width="151">

Transaction Commits

</td>
<td valign="top" width="255">

Transaction creation is explicit. Default is to rollback unless I call commit.

</td>
<td valign="top" width="440">

Transaction creation is explicit. Default is to commit unless I call abort or there is an exception that is not caught.

</td>
</tr>
<tr>
<td width="151">

Property Lookups

</td>
<td width="255">

SQL

</td>
<td width="440">

Indexes are required to query object properties directly

</td>
</tr>
<tr>
<td width="151">

Records/Data

</td>
<td width="255">

Normal form and single valued properties

</td>
<td width="440">

De-normal form and can have multi-valued properties

</td>
</tr>
</tbody>
</table></p>