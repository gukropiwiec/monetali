# Angular Base Template

## Features
- Angular
- Bootstrap
- Github Actions
- ESLint
- Automated Deploy
- Folder structure ```(Pages/Components with modules)```
- Font integration ```(styles.scss)```
- Meta tags ```(index.html)```
- Color palette ```(styles.scss)```

## Using the template

1. Download zip **OR** clone the repository
2. If cloned, remove ```.git``` folder
3. Open project on terminal

5. Install dependencies

        $ npm install
    
6. Run project

        $ npm start

## Push to a new repository

1. Create a new repository
2. If theres a hidden ```.git``` folder, delete it
3. Open project on terminal
4. Initialize git

        $ git init

5. Add remote

        $ git remote add origin <GIT_REMOTE_URL.git>

6. Commit and push

## Create a new component

1. Use the Angular CLI to create a component

        ng g component components/<COMPONENT_NAME>

2. In ```src/app/components/components.module.ts```, add the new component class to the array ```moduleComponents```

3. To use the component, use its selector, for example: 

        <app-header />

## Create a new page

1. Use the Angular CLI to create a page

        ng g component pages/<Page_NAME>

2. In ```src/app/app-routing-module.ts```, add the new page to the ```routes``` array, for example:

        { path: '', component: HomeComponent }