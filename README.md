# QRM

### Description



### Configuration

**server/config/keys.js**
```
module.exports = {
    google: {
        callbackURL: '/#/#/#',
        clientID: '#-#.apps.googleusercontent.com',
        clientSecret: '#-#'
    },
    mongodb: {
        dbURI: 'mongodb://hostname/database_name'
    },
    session: {
        cookieKey: '###'
    }
};
```

### Troubleshooting

`UnhandledPromiseRejectionWarning: Error: passport.initilize()middleware not in use`

**Solution**

Order of app.use should be as follows:

1. cookieParser
2. session
3. passport.initialize
4. passport.session
5. app.router