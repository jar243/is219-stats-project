# is219-stats-project

[![Build Status](https://travis-ci.com/jar243/is219-stats-project.svg?branch=main)](https://travis-ci.com/jar243/is219-stats-project)
[![Coverage Status](https://coveralls.io/repos/github/jar243/is219-stats-project/badge.svg?branch=main)](https://coveralls.io/github/jar243/is219-stats-project?branch=main)

## Participation

**All work done by John Rezk**

## Program Layout

Operations Class (static methods only)
- sum method
- multiply method
- exponentiate method

Calculator Class (utilizes operations class)
- lastResult property
- add method (overloaded)
- subtract method
- multiply method
- divide method
- cube method
- square method
- sqRoot method

Statistics Calculator Class (extends Calculator)
- mean method
- median method
- modes method (returns arr of modes)
- variance method
- stdDeviation method
- skewness method
- zScore method
- medianAbsoluteDev

RandomGen Class (used for testing)
- randomNum method
- seededNum method
- randomNumArr method
- seededNumArr method
- randomSelect method (from array)
- seededSelect method
- randomSelectMany method
- seededSelectMany method

Utils Module
- validateNum function
- validateArray function
- sortArray function
- roundTo function (used for testing)
