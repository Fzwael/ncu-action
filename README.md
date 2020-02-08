# ncu-action

![Test developement version](https://github.com/Fzwael/ncu-action/workflows/Test%20developement%20version/badge.svg)
![Test released version](https://github.com/Fzwael/ncu-action/workflows/Test%20released%20version/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/fzwael/ncu-action/badge)](https://www.codefactor.io/repository/github/fzwael/ncu-action)
[![Known Vulnerabilities](https://snyk.io/test/github/fzwael/ncu-action/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fzwael/ncu-action?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/146ecacdbb5301100b6f/maintainability)](https://codeclimate.com/github/fzwael/ncu-action/maintainability)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

### Usage

This Github action is based on [tjunnone/npm-check-updates](https://github.com/tjunnone/npm-check-updates)

The action will run the command `ncu` and will fail if any dependency needs an update.

### Example

``` yml
name: Test released version

on: [push]

jobs:
  test_released_job:
    runs-on: ubuntu-latest
    name: A job to test the latest released ncu-action
    steps:
    - name: Test the released step
      id: test_released
      uses: fzwael/ncu-action@v1
  
```

### Output

If you have an outdated dependency the job will fail with this message in the logs:

```
dependencies to upgrade: {<name>: <version>}
```
