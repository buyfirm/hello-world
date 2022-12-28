#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/hello-world

#navigate into our working directory where we have all our github files
cd /home/ec2-user/hello-world

#install node modules
sudo yarn

#start our node app in the background
pm2 stop all
pm2 start index.js
pm2 startup
pm2 save