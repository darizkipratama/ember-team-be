var async = require('async');
module.exports = function(app) {
  //data sources
  var localDs = app.dataSources.testLocal;
  //create all models
  async.parallel({
    members: async.apply(createMember),
  }, function(err, results) {
    if (err) throw err;
    createTeam(results.members, function(err) {
      console.log('> models created sucessfully');
    });
  });
 
  function createTeam(cb) {
    localDs.automigrate('Team', function(err) {
      if (err) return cb(err);
      var Team = app.models.Team;
      Team.create([{
        teamName: 'foo@bar.com',
        teamDescription: 'foobar'
      }, {
        teamName: 'john@doe.com',
        teamDescription: 'johndoe'
      }, {
        teamName: 'jane@doe.com',
        teamDescription: 'janedoe'
      }], cb);
    });
  }
  //create coffee shops
  function createMember(cb) {
    localDs.automigrate('Member', function(err) {
      if (err) return cb(err);
      var Member = app.models.Member;
      Member.create([{
        memberName: 'Bel Cafe',
        memberRole: 'Vancouver'
      }, {
        memberName: 'Three Bees Coffee House',
        memberRole: 'San Mateo'
      }, {
        memberName: 'Caffe Artigiano',
        memberRole: 'Vancouver'
      }, ], cb);
    });
  }
  
};