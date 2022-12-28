#!/bin/sh

DIR=/home/ec2-user/hello-world
if [ -d "$DIR" ] && [ -x "$DIR" ]; then
  cd /home/ec2-user/hello-world

  rm -rf *
fi
