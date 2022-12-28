#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"

DIR=/home/ec2-user/hello-world
if [ -d "$DIR" ] && [ -x "$DIR" ]; then
  cd /home/ec2-user/hello-world

  # we have to do this because it throws an error if it can't find the process... and then the whole build breaks
  node -e 'try{require("child_process").execSync("pm2 stop index.js")}catch(e){}';
fi
