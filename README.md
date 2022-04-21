# Restaurant Live: https://francisgolden.github.io/Restaurant/

PROBLEM: modules are getting loaded incrementally more times every time I click on the tab: 
SOLUTION: adding event listeners inside each module caused this issue, which made the modules load multiple times and  in the long run made the page crash. I just added event listeners once and outside the modules, in global scope.

PROBLEM: mid section of home page changes size when switching between tabs
SOLUTION: removed mid.style.minWidth = "fit-content" from contact module

PROBLEM: mid section text of contact tab overflows the box when using mobile device 
SOLUTION: applied mid.style.wordBreak = "break-word". now the text doesn't overflow
