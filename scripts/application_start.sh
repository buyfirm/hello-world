#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/hello-world

#navigate into our working directory where we have all our github files
cd /home/ec2-user/hello-world

mv .production.env .env

#install node modules
sudo yarn

#start our node app in the background
pm2 start