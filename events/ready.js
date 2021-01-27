module.exports = (client) => {
    console.log(`Connection effectué avec succès !`);
    client.user.setStatus('available');
      client.user.setPresence
      ({
          game: 
          {
              name: `Reconnection en cours...`,
              type: "PLAYING"
          }
      });
  var type = ["WATCHING", "PLAYING"];
  var SNumber = [0];
  setInterval(function(){
      var Status = [`Veille sur ${client.users.size} membres !`, `Offre des nitros à ${client.users.size} membres !`];
      client.user.setPresence
      ({
          game: 
          {
              name: Status[SNumber[0]],
              type: type[SNumber[0]]
          }
      })
      SNumber.push(SNumber[0] + 1);
      SNumber.shift();
      if (SNumber[0] === 2)
    {
          SNumber.shift()
          SNumber.unshift(0)
    };
                        }, 10000);
};