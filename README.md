repop
=====

A script that automatically repopulates your inputs on the page with whatever they had before you refreshed.

Getting Started
===============

All you need is to include this script tag in your `<head>`:

```javascript
    <script src="repop.js"></script>
```

How It Works
============

Repop stores the values of all your `<input>`s and `<select>`s in a cookie called "repop" via the window's click and keypress events, then uses that to restore 
the inputs in order when your page refreshes via the window's load event.  You don't have to do anything except put the script tag into the document's head.
Please don't use this in production.  This is designed for development only and is naturally very hackish.


Why
===

Because otherwise, if you refresh to see your updated scripts, it's super annoying to repopulate a page's inputs by hand every time.


Questions, Comments
===================

Email me: jameslaymusic@gmail.com


What About Angular?
===================

Yeah, I'm not sure what to do about this yet, but ideally there should be a $scope.$apply() in there some where.  I'm open to ideas.
