* Codepen: 
    * https://codepen.io/JoshuaHolloway/pen/YzqzzLN?editors=1100

* Corresponding code on local machine:
    * /index.html (uses /styles.css, which is linked in head tag)

* Pull request link:
    * https://github.com/JoshuaHolloway/Git-for-Web-Development-Project/pull/1

* Questions:
    * 1. What is Semantic HTML? 
        * [adapted from wikipedia]: 
            * Sementic HTML is when HTML is used to reinforce the meaning of web-page information as opposed to only defining the appearnce of the web-page.
        * [adapted from w3schools]:
            * An HTML element is used semantically when it is used such that its usage clearly describes its meaning to both the browser and the developer.
    * 2. What is HTML used for? 
        * Defining the structure of the webpage.
    * 3. What is an attribute and where do we put it? 
        * Attributes modify the behavior of html elements.
    * 4. What is the h1 tag used for? How many times should I use it on a page?
        * h1 is for the most important heading on the page.  Use it once!
    * 5. Name two tags that have required attributes
        * img-tag has required src attribute. link-(meta)tag [and a-tag] has required href attribute.
    * 6. What do we put in the head of our HTML document? 
        * meta-data
    * 7. What is an id? 
        * A unique identifier used to target an element in the webpage.
    * 8. What elements can I add an id to? 
        * All html elements can have an ID added to them.
    * 9. How many times can I use the same id on a page? 
        * Once.
    * 10. What is a class? 
        * A class is an identifier like an ID, but it is used to target a set of elements.
    * 11. What elements can I add a class to? 
        * All elements
    * 12. How many times can I use the same class on a page? 
        * As many times as you want.
    * 13. How do I get my link to open in a new tab?
        * ```target="_blank"```
    * 14. What is the alt attribute in the image tag used for? 
        * It is used for accessibility for things like screen readers as well as SEO.
    * 15. How do I reference an id?
        * ```#ID-NAME { /* styles here... */ }```
    * 16. What is the difference between a section and a div
        * A section is used to group together content that is considered to be in one 'section' of a web-page.  A div is just a block-level container.
    * 17. What is CSS used for? 
        * Styling.
    * 18. How to we select an element? Example - every h2 on the page
        * ```h2 { /* styles here... */ }```
    * 19. What is the difference between a class and an id? - Give me an example of when I might use each one
        * Classes are used for targeting sets of elements. ID's are used for targeting a specific element. An ID would be used for something like a specific image we want a specific style on whereas a class would be used on a set of images that we want to style all the same.
    * 20. How do we select classes in CSS?
        * .class-name { /* styles here... */ }
    * 21. How do we select a p element with a single class of “human”?
        * ```p.human { ... }```
    * 22. What is a parent child selector? When would this be useful? 
        * ```parent-name > child-name { ... }```
        * This would be useful when targeting a specific child (or set of children) in reference to their parent element.
    * 23. How do you select all links within a div with the class of sidebar?
        * ```div a.sidebar { ... }```
    * 24. What is a pseudo selector?
        * A psuedo selector is used to target elements upon some event like hovering on the element.
    * 25. What do we use the change the spacing between lines?
        * line-spacing
    * 26. What do we use to change the spacing between letters?
        * letter-spacing
    * 27. What do we use to to change everything to CAPITALS? lowercase? Capitalize?
        * text-transform: capitalize|uppercase|lowercase;
    * 28. How do I add a 1px border around my div that is dotted and black?
        * ``` div { border: 1px dotted black; } ```
    * 29. How do I select everything on the page? 
        * Use the universal selector *{ ... } 
    * 30. How do I write a comment in CSS?
        * ```/* comment here */```
    * 31. How do I find out what file I am in, when I am using the command line? 
        * pwd
    * 32. Using the command line - how do I see a list of files/folders in my current folder?
        * ```ls```
        * ```ls -l  # (my prefered way to see more info and to print vertically)```
    * 33. How do I remove a file via the command line? Why do I have to be careful with this? 
        * ```rm file-name```
        * ```rm -r folder-name   # to remove a folder (and its sub-folders/sub-files [recursively])```
        * You must be careful with these commands as they do not ask if you meant to perform a deletion and there is no way to retrieve the contents once these commands have been applied!!!
    * 34. Why should I use version control? 
        * To help us work on codebases across teams and to organize and record the evolution of a codebase, as well as helping us safely make changes because we can always go back to a point in the codebases history before a bug was introduced (it is like a time machine!).
    * 35. How often should I commit to github?
        * Every time we add a feature or make a (somewhat) substantial change (that works - don't commit code that you have broken!).
    * 36. What is the command we would use to push our repo up to github? 
        * git push
    * 37. Walk me through Lambda's git flow. 
        * Step 1: Fork a copy to my GitHub account.
        * Step 2: Add PM as collaborator.
        * Step 3: Clone to local machine.
        * Step 4: Create a branch via command:
            ```git checkout -b josh-holloway```
            ```git branch # (just to check to make sure we are on the right branch - this will list all branches for my fork of the repo and have a asterisk next to the branch that is checked out)```
        * Step 5: Add, Commit, and Push (to origin) branch via command:
            ```git add .```
            ```git commit -m "comment here..."```
            ```git push -u origin josh-holloway # (git push after initial push upstream to new branch)```
        * Step 6: Submit pull request
            * Use your fork as a base-fork (compare across forks)
            * Add your PM as a collaborator to the pull-request
        * Step 7: The PM should then accept the merge request after conducting the code review.
        

* Stretch Questions:
    * 1. What is the difference between an inline element and a block element?
        * Block takes up a whole lines.
            * More specifically, block elements cause a line break to occur therefore making the following element go to the next line.
        * Inline elements do not force a new line to begin in the document flow [from MDN].
    * 2. What happens when an element is positioned absolutely?
        * [my own words from my own memory utilizing the technique of 'recall']: 
            * Its coordinate system is in reference to the whole page instead of the parent element.
                * After reading MDN I realize my answer is not exactly correct. 
                * If I am interpreting their definition correctly, then I think what they are saying is that position: absolute sets the coordinate system of this element in reference to the elements parent element - i.e., the origin (x=0,y=0)-position, is the uppper left corner of the parent element instead of the viewport.
        * [from MDN]: 
            * An element that is set to ``position: absolute`` is removed from the nromal document flow and now space is created for the element in the page layout.
            * This element is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.
            * Its final position is deteremined by the values of the top, right, left, and bottom properties.
    * 3. How do I make an element take up only the amount of space it needs but also have the ability to give it a width?
        * My initial guess from memory:
            * width: auto;
        * w3schools definition of width: auto;
            * The width property has the possible property value of auto which is described as having the browser calculate the width.

    * 4. Name 3 elements that are diplay block by default, 2 elements that are display inline by default and 1 element that is display inline-block by default
        * display: block (by default):
            * div
            * p
            * article
            * blockquote
            * h1, h2, ..., h6
            * hr
            * li, ol, and ul
            * header, nav, main, footer
            * section
        * display: inline (by default):
            * a (link)
            * span
            * b (bold), u (underline), q (quotation)
        * display: inline-block (by default):
            * img
            * button
    * 5. In your own words, explain the box model. What is the "fix" for the box model, in other words, how do we make all elements respect the width we've given 
    them?
        * In my own words (practicing recall):
            * The box model is used to describe how much space an html-element takes up on the webpage.
            * In the box model each html-element is composed of four parts:
                * 1. The html inner content
                * 2. The padding around the html content
                    * This is the amount of space between the inner content and the padding.
                * 3. The border seperating the padding and the margin.
                * 4. The margin which is space surrounding the html-element.
                    * This can be used to put space between neighboring html elements.

* Stretch Git Tasks
    * While the processes learned here will set you up to be successful in most situations, they are just the tip of the iceberg in learning Git. 
    * Independently research the following topics to learn more about Git.
        * Research and understand what a merge conflict is and how to resolve it.
        * Research the Git commands pull, rebase, merge. 
            * These commands will allow you to bring in changes that other developers push to the main branch.
        * Research the Git commands reset, revert, clean. 
        * These commands will allow you to go back and amends previous commits you have made.
        * Research and set up a Graphical User Interface (GUI) Git console.
        * Research and setup SSH keys with GitHub, so that you do not need to input your username/password each time you push.
    * Personal note on these Git-Tasks:
        * I am in the process of research all of these concepts by taking an online course on git.
        * I won't be able to have all of these completely researched and able to use (practically) by the time I submit this project.
        * I want to learn git at a deep level.
            * Therefore, I will continue researching these daily as I use git and will report back when I have all of them figured out and I can explain them in my own words via Barbara Oakley's recall method.