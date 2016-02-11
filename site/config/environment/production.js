'use strict';

// Production specific configuration
// =================================

var config = {};
config.env = 'production';
config.ip = process.env.OPENSHIFT_NODEJS_IP ||
    process.env.IP ||
    undefined;

config.port = process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.PORT ||
    8080;

config.baseUrl = config.ip + ':' + config.port;


// MongoDB connection options
config.mongo = {
    uri: process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME ||
        'mongodb://react-webvr:1234@ds037185.mongolab.com:37185/react-webvr',
    options: {
        db: {
            safe: true
        }
    }
};

// config.seedUser = true;
// config.seedPost = true;

// config.useOnlyAdminCanPost = true;
// config.useUserEmailVerify = true;

// config.useServerRender = true;
// config.useClientRender = true; //if commented out, only server-side rendering is used.

// // config.useWebpack = true; // If true, browserify will be turn off and webpack should be used. Run `npm run build`
// config.useBrowsersync = true; //for development purpose only

// config.useBlog = true;
// config.blogPerPage = 5;// posts per page of blog page
// config.usersPerPage = 2;// users per page of users page
// config.siteEmail = 'sharelinky@gmail.com';
// config.userid_regex = /^[a-z][a-z0-9]{3,19}$/i;
// config.email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
// config.password_regex = /^[a-zA-Z0-9!@#\$%\^&\*\(\)_\+\|\{\}:"<>\?\-=\\\[\];',\.\/]{4,20}$/;




module.exports = config;