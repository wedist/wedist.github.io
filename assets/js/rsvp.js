(function ($) {
    "use strict";
    var guest = 1;

    $("#rsvp-add").click(function(e) {
        guest++;
        var guestdiv = `
                         <hr />
                         <div class="fields rsvp-fields" id="guest-GUEST">
                         <div class="field half">
                             <label for="name-GUEST" data-translate="_rsvp_guestname"></label>
                             <input type="text" name="name-GUEST" id="name-GUEST" />
                         </div>
                         <div class="field half">
                             <label for="attending-GUEST" data-translate="_rsvp_attending"></label>
                             <input type="radio" id="attending-yes-GUEST" value="yes" name="attending-yesno-GUEST" checked=""> <label for="attending-yes-GUEST" data-translate="_rsvp_attending_yes"></label>
                             <input type="radio" id="attending-no-GUEST" value="no" name="attending-yesno-GUEST"> <label for="attending-no-GUEST" data-translate="_rsvp_attending_no"></label>
                         </div>
                         <div class="field">
                                 <label for="diet-GUEST" data-translate="_rsvp_diet"></label>
                                 <textarea name="diet-GUEST" id="diet-GUEST" placeholder="" rows="1" data-translate-placeholder="_rsvp_diet_placeholder"></textarea>
                         </div>
                         </div>
                         `;
        $('#guest-'+String(guest-1)).after(guestdiv.replace(/GUEST/g,String(guest)));

        // Set language
        $.set_lang($.current_language);
                         
        $('#guest-'+String(guest)).focus(); // force reflow
        $('#guest-'+String(guest)).addClass('show');
    });
     
})(jQuery);
