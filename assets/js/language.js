/*
    Adapted from https://stackoverflow.com/questions/13427723/jquery-language-switcher
*/
$(function () {
    "use strict";
    var dictionary, set_lang;
  
    dictionary = {
        "en": {
                "_welcome1": "Together with their families",
                "_welcome2": "Request the pleasure of your company at their wedding ceremony",
                "_welcome3": "7th December 2019 15:00-20:00",
                "_welcome4": "Bosphorus Palace Hotel, Istanbul",
                "_venue": "Venue",
                "_timeline": "Timeline",
                "_rsvp": "RSVP",
                "_timeline2": "Timeline & Menu",
                "_venue_blurb": "The Debreli Ismail Pasha Seaside Mansion, built in 1879 and reconstructed in 1993, is a beautiful examples of Neo-Ottoman architecture. Located on the asian shore of the Bosphorus, the building is 300 square meters on 1486 square meters of land.",
                "_venue_dress": "Dress code - formal",
                "_venue_streetview": "Street View",
                "_venue_parking": "Free valet parking is available for our guests",
        },
        "tr": {
                "_welcome1": "aileleriyle birlikte",
                "_welcome2": "düğün töreninde şirketinizin zevkini isteyin",
                "_welcome3": "7 Aralık 2019 15:00-20:00",
                "_welcome4": "Bosphorus Palace Hotel, Istanbul",
                "_venue": "Mekan",
                "_timeline": "Program",
                "_rsvp": "RSVP",
                "_timeline2": "Program & Menü",
                "_venue_blurb": "1879 yılında inşa edilen ve 1993 yılında yeniden yapılanan Debreli İsmail Paşa Yalısı, Neo-Osmanlı mimarisinin güzel bir örneği. Boğaz'ın asya kıyısında yer alan bina, 1486 metrekare arsa üzerine 300 metrekare.",
                "_venue_dress": "Kıyafet kodu - resmi",
                "_venue_streetview": "Sokak Görünümü",
                "_venue_parking": "Misafirlerimiz için ücretsiz vale park hizmeti mevcuttur.",
        }
    };

    // Function for swapping dictionaries
    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    // Set initial language
    set_lang(dictionary.en);
  
    $("#language-tr").click(function(e) { set_lang(dictionary.tr)});
    $("#language-en").click(function(e) { set_lang(dictionary.en)});

});

