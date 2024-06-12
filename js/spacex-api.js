$(document).ready(function() {


    $.ajax({
        url: 'https://api.spacexdata.com/v5/launches/latest',
        method: 'GET',
        success: function(data) {
            var Name = data.name;
            var SpaceDate = new Date(data.date_utc);

            $('#nom').text("Nom du lancement: " + Name);
            $('#date').text("Date du lancement: " + SpaceDate);

        },
        error: function(error) {
            console.log('Erreur:', error);
        }
    });
});
