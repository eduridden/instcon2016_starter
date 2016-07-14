#!/bin/bash

git clone https://github.com/kajigga/instcon2016-ltisession.git $HOME/workspace/instcon2016
cd $HOME/workspace/instcon2016
git checkout tst_step1
echo "LTI Repository Cloned"
virtualenv $HOME/workspace/env
source $HOME/workspace/env/bin/activate
pip install -r $HOME/workspace/instcon2016/requirements.txt
echo "virtualenv created"
