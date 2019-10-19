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
                "_seating": "Seating",
                "_rsvp": "RSVP",
                "_timeline2": "Timeline & Menu",
                "_venue_blurb": "The Debreli Ismail Pasha Seaside Mansion, built in 1879 and reconstructed in 1993, is a beautiful example of Neo-Ottoman architecture. Located on the asian shore of the Bosphorus, the building is 300 square meters on 1486 square meters of land.",
                "_venue_dresscode1": "Dress code: ",
                "_venue_dresscode2": "Formal (suits & ties)",
                "_venue_streetview": "Street View",
                "_venue_parking": "Free valet parking is available for our guests",
                "_timeline_cocktail": "Cocktail",
                "_timeline_refreshments": "Light refreshments",
                "_timeline_drinks": "Soft drinks",
                "_timeline_ceremony": "Ceremony",
                "_timeline_meal": "Meal",
                "_timeline_starter1": "Hors d'oeuvres",
                "_timeline_starter2": "Appetizer",
                "_timeline_main": "Main - (Meat) | (Veg) | (Vegan)",
                "_timeline_dessert": "Dessert",
                "_timeline_teacoffee": "Tea/Coffee",
                "_timeline_drinks2": "Soft drinks",
                "_timeline_diet": "Please inform us of any dietary preferences and/or allergies when accepting our invitation.",
                "_seating_plan": "Seating plan available on 05/12/2019",
                "_rsvp_applecal" : "Add to Apple Calendar",
                "_rsvp_googlecal" : "Add to Google Calendar",
                "_rsvp_microsoftcal" : "Add to Microsoft Calendar",
        },
        "tr": {
                "_welcome1": "AİLELERİ İLE BİRLİKTE",
                "_welcome2": "NİKÂH TÖRENLERİNDE SİZLERİ DE ARALARINDA GÖRMEKTEN MUTLULUK DUYAR",
                "_welcome3": "7 ARALIK 2019 15:00-20:00",
                "_welcome4": "Bosphorus Palace Hotel, İSTANBUL",
                "_venue": "MEKÂN",
                "_timeline": "PROGRAM",
                "_seating": "OTURMA",
                "_rsvp": "LCV",
                "_timeline2": "PROGRAM & MENÜ",
                "_venue_blurb": "1876 yılında inşa, 1993 yılında ise restore edilen Debreli İsmail Paşa Yalısı Neo-Osmanlı mimarisinin en güzel örneklerinden biridir. Boğaz’ın Asya kıyısında yer alan yapı 1486 metrekare arsa üzerine kurulu 300 metrekaredir.",
                "_venue_dresscode1": "Kıyafet kodu: ",
                "_venue_dresscode2": "Resmi",
                "_venue_streetview": "Sokak Görünümü",
                "_venue_parking": "Misafirlerimiz için ücretsiz vale park hizmeti mevcuttur",
                "_timeline_cocktail": "Kokteyl",
                "_timeline_refreshments": "Hafif yiyecekler",
                "_timeline_drinks": "Alkolsüz içecekler",
                "_timeline_ceremony": "Nikâh",
                "_timeline_meal": "Yemek",
                "_timeline_starter1": "Ordövr Tabağı",
                "_timeline_starter2": "Appetizer",
                "_timeline_main": "Ana Yemek - (Kuzu Tandır) | (Vejetaryen) | (Vegan)",
                "_timeline_dessert": "Tatlı",
                "_timeline_teacoffee": "Çay/Kahve",
                "_timeline_drinks2": "Alkolsüz içecekler",
                "_timeline_diet": "Lütfen davetimizi kabul ederken, diyet tercihlerinizi ve/veya alerjilerinizi bize bildiriniz.",
                "_seating_plan": "Oturma düzeni 05/12/2019 tarihinde eklenecektir",
                "_rsvp_applecal" : "Apple Takvime Ekle",
                "_rsvp_googlecal" : "Google Takvime Ekle",
                "_rsvp_microsoftcal" : "Microsoft Takvime Ekle",
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

