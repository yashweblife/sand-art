# Fluid Simulation and Sand Art

This project is a demonstration of how we can simulate fluid movement using a 2D grid system.

The concept is rather simple, each frame we create a new grid with updated values based on the previous grid. Then we draw the new grid on top of the previous grid.This is instead of updating the previous grid directly.


### Gettings Started

```bash

# clone the repo
git clone https://github.com/yashweblife/sand-art.git

# cd into the project
cd sand-art

# install dependencies
npm install

# run dev server
npm run dev
```

#### To add new feature or fix a bug:

```bash
# create a new branch for new feature
git checkout -b feature/new-feature-name

# create a new branch for bug fix
git checkout -b bug/fix-bug-name

# commit changes
# for feature
git commit -m "feature: message"
# for bug
git commit -m "bug: message"
```
>[!CAUTION]
>Remember to create a pull request before merging the branch!