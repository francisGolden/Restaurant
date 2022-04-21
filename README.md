# Restaurant Live: https://francisgolden.github.io/Restaurant/

First project made using ES6 Modules and Webpack

PROBLEM: modules are getting loaded incrementally more times every time I click on the tab:<br>
**SOLUTION: adding event listeners inside each module caused this issue, which made the modules load multiple times and  in the long run made the page crash. I just added event listeners once and outside the modules, in global scope.**

PROBLEM: mid section of home page changes size when switching between tabs<br>
**SOLUTION: removed mid.style.minWidth = "fit-content" from contact module**

PROBLEM: mid section text of contact tab overflows the box when using mobile device <br>
**SOLUTION: applied mid.style.wordBreak = "break-word". now the text doesn't overflow**

To deploy the page to GH pages I used this little nice trick: https://gist.github.com/cobyism/4730490
