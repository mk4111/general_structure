var mandrill = require('mandrill-api/mandrill');
var m = new mandrill.Mandrill();
m.users.info(function(info) {
    console.log('Reputation: ' + info.reputation + ', Hourly Quota: ' + info.hourly_quota);
});
