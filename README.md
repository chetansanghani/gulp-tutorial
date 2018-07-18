# gulp-tutorial
<b>An Introduction to Automation with Gulp</b>

 Once in the root directory of your project, you can use the following command to install all the plugins required.
 
 <code>npm install</code>
 
 This command reads the package.json file and installs all the dependencies required. We are using “npm install” here as a shorthand for the following:
 
 <code>npm install gulp --save-dev</code>
 <code>npm install gulp-sass --save-dev</code>

The “–save-dev” flag adds the selected plugins to the package.json devDependencies so that the next time you want to install everything, you can use the handy “npm install”.

At this point you can run your first task. Run the following command and watch as all the SCSS files in the /scss folder are compiled into CSS in the corresponding directory:

 <code>gulp scss</code>
 
 Note that in this example we are specifying the task to be run. If we omitted the task name, the one named “default” would be run.
