'use strict';

// Development specific configuration
// =================================

var config = {};
config.env = 'test';
config.ip = 'http://localhost';

config.port = 3000;
config.baseUrl = config.ip + ':' + config.port;


// MongoDB connection options
config.mongo = {
    uri: 'mongodb://localhost/merm-test',
    options: {
        db: {
            safe: true
        }
    }
};

config.seedUser = true;
config.seedPost = true;

config.useOnlyAdminCanPost = true;
config.useUserEmailVerify = true;

config.useServerRender = true;
config.useClientRender = true; //if commented out, only server-side rendering is used.

// config.useWebpack = true; // If true, browserify will be turn off and webpack should be used. Run `npm run build`
config.useBrowsersync = true; //for development purpose only

config.useBlog = true;
config.blogPerPage = 5;// posts per page of blog page
config.usersPerPage = 2;// users per page of users page
config.siteEmail = 'sharelinky@gmail.com';
config.userid_regex = /^[a-z][a-z0-9]{3,19}$/i;
config.email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
config.password_regex = /^[a-zA-Z0-9!@#\$%\^&\*\(\)_\+\|\{\}:"<>\?\-=\\\[\];',\.\/]{4,20}$/;


module.exports = config;
