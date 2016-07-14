define(function(require, exports, module) {

module.exports = function(session, options){
    var YELLOW = "\x1b[01;33m";
    var RESETCOLOR = "\x1b[0m";
    session.introduction = require("text!./intro.html");
    session.preInstallScript = require("text!./pre-install.sh");
    //session.postInstallScript = require("text!./post-install.sh");
    session.install({
        "name": "instcon2016_lti",
        "description": "Instcon 2016 - LTI PreConf Session"
    }, [
        {
            "bash":"git clone https://github.com/kajigga/instcon2016-ltisession.git $HOME/workspace/instcon2016"
        },
        {
            "bash":"cd $HOME/workspace/instcon2016"
        },
        {
            "bash":"git checkout tst_step1"
        },
        {
            "message": YELLOW + "LTI Repository Cloned" + RESETCOLOR + "\n"
        },
        {
            "bash": "virtualenv $HOME/workspace/env"
        },
        {
            "bash": "source $HOME/workspace/env/bin/activate"
        },
        {
            "bash": "pip install -r $HOME/workspace/instcon2016/requirements.txt"
        },
        {
            "message": "virtualenv created"
        }
        
    ]);
    
    session.start();
};

module.exports.version = 1;

});

