
var nb_messages = 0;
var size_message = 0;
var time_animation = 500;
var scrollPos = 0;

function changepage(type) {
  var oTable = $('#table_all_loans').dataTable();
  var Table = $('#table_all_loans').DataTable();
  oTable.fnPageChange(type);
  pg_info = Table.page.info();
  $('.pagedisplay')[0].value = (pg_info.page + 1) + "/" + pg_info.pages
}

function changelength() {
  var oTable = $('#table_all_loans').dataTable();
  oTable._fnLengthChange(parseInt($('.pagesize').val()));
  oTable.fnDraw();
}

function closingAlert(event) {
  $(event.target).closest(".alert-bib").fadeOut(function () {
    $(event.target).closest(".alert-bib").remove();
    if (typeof nb_messages !== "undefined") {
      nb_messages -= 1;
      update_notification_area_height();
    }
  });
}

function print_message(message, type) {
  var msg_area = $(".messagearea");
  if(!msg_area.length) {
    msg_area = $('.headline_div').after('<div class="messagearea">')
  }
  var box;

  if (type.indexOf("alert") > 0) {
    if (type === "info") {
      box = "<div class='infobox'>" + message + "</div>";
    } else if (type === "warning") {
      box = "<div class='warningbox'>" + message + "</div>";
    } else if (type === "error") {
      box = "<div class='errorbox'>" + message + "</div>";
    } else {
      box = "<div class='infobox'>" + message + "</div>";
    }
  } else {
    box = "<div class='alert-bib " + type + "'>" + message + "<div onclick='closingAlert(event);' class='boxclose' id='boxclose'><i class='fa fa-times'></i></div></div>";
  }
  msg_area.append(box);
}

function delete_borrower(id) {
  print_message("Delete this borrower?&nbsp;&nbsp;<a class='bttn success' onClick='confirm_delete_borrower(event, "+id+")'>Yes</a>" +
                " <a class='bttn danger' onClick='closingAlert(event)'>No</a>", type="alert-bib danger")
}
function confirm_delete_borrower(event, id) {
    $.ajax({
        url: "/admin2/bibcirculation/delete_borrower",
        type: "POST",
        data: {
            id: id,
            confirm: 'yes'
        },
        success: function (data) {
            response = JSON.parse(data)
            if (response["result"] == 2) {
                print_notification("<strong>Error:</strong> Borrower currently has checked out items", 'alert-bib regular error')
            } else {
                if (response["result"] == 1) {
                    warning_string = "<strong>Warning:</strong> The following items were waiting for pickup by this borrower and should be removed from holdshelf:";
                    for (i = 0; i < response['holdshelf_items'].length; i++) {
                        warning_string += "<br><strong>" + response['holdshelf_items'][i]['title'];
                        warning_string += " (Barcode: " + response['holdshelf_items'][i]['barcode'] + ")</strong>";
                    }
                    print_notification(warning_string, "alert-bib regular warning", false);
                }
                print_notification("Borrower deleted successfully", 'alert-bib regular info', false);
                $('.bibcircbottom').remove();
                $('.pagebodystripemiddle').append("<br><a class='formbutton' href='/admin2/bibcirculation/borrower_search_result?action=get_borrower_details'>Back to borrower search</a>");
            }
        }
    });
    closingAlert(event);
}

function recall_x_days(loan_id, template, days ){
    $.ajax({
        'url': "/admin2/bibcirculation/recall_loan",
        'data': {
            'loan_id': loan_id,
            'template': template,
            'days': days
        },
        'success': function(response) {
            data = JSON.parse(response);
            if (data["result"] == 1) {
                print_notification("An error occured during recall process. Please try again later or contact tech@tind.io", 'alert-bib danger');
            } else {
                print_notification("Item recalled sucessfully", 'alert-bib success');

                // Update cell with new info
                var span_nof_recalls = $('span#recalls-' + loan_id);
                var nof_recalls = $(span_nof_recalls).text();
                $(span_nof_recalls).html((parseInt(nof_recalls) + 1));
                var title = $(span_nof_recalls).closest('i').attr("data-original-title");
                if (typeof tittle != "undefined") {
                    $(span_nof_recalls).closest('i').attr("data-original-title", title.split("\n")[0] + "\n(last sent: just now)");
                }
            }
        }
     });
}


function send_pickup_note(request_id, barcode, borrower_id){
    $.ajax({
        "url": "/admin2/bibcirculation/send_pickup_note",
        "data": {
            "request_id": request_id,
            "barcode" : barcode,
            "borrower_id": borrower_id
        },
        "success": function(response) {
            var data = JSON.parse(response);
            if (data["result"] == 1) {
                print_notification("An error occured during sending process. Please try again later or contact tech@tind.io", "alert-bib danger");
            } else {
                print_notification("Pickup note sent sucessfully", "alert-bib success");

                // Update cell with new info
                var nof_letters_span = $('span.pickup[data-barcode="' + barcode + '"]');
                var nof_letters = $(nof_letters_span).text();
                $(nof_letters_span).html('<i class="fa fa-envelope-o"></i> ' + (parseInt(nof_letters) + 1));
                var title = $(nof_letters_span).attr("data-original-title");
                $(nof_letters_span).attr("data-original-title", title.split(":")[0] + ": Just now");
            }
        }
     });
}


function print_notification(message, type, timeout, callback) {
  var msg_area = $(".messagearea"), box;
  if(msg_area.length===0) {
      $('.headline_div').append('<div class="messagearea">');
      msg_area = $(".messagearea");
  }

  if ((type.indexOf("alert") === -1) || (type.indexOf("alert") > 0 )) {
    if (type === "warning") {
      box = "<div class='warningbox'>" + message + "</div>";
    } else if (type === "error") {
      box = "<div class='errorbox'>" + message + "</div>";
    } else {
      box = "<div class='infobox'>" + message + "</div>";
    }
  } else {
    box = "<div class='alert-bib " + type + "'>" + message + "<div onclick='closingAlert(event);' class='boxclose' id='boxclose'><i class='fa fa-times'></i></div></div>";
  }

  if (typeof callback !== 'undefined') {
    callback();
  }
  msg_area.append(box);
  if (typeof timeout === 'undefined') {
    setTimeout(function () {
      $(box).fadeOut(300, function () {
        $(box).remove();
      });
    }, 6000);
  } else {
    if (timeout !== -1) {
      setTimeout(function () {
        $(box).fadeOut(300, function () {
          $(box).remove();
        });
      }, timeout);
    }
  }
}

function change_item_status(barcode, status) {

  return $.ajax("/admin2/bibcirculation/change_item_status?barcode=" + barcode + "&status=" + status);
}

function altern_notif(target, message, class_from, class_to) {
  var top = $(target).closest("div");
  var txt = top.find(".txt_al");
  $(target).remove();
  txt.fadeOut(500, function () {
    txt.text(message).fadeIn(500);
  });
  top.switchClass(class_from, class_to, 1000, "easeInBack");
}

function change_status_on_click(event, barcode, status) {


  change_item_status(barcode, status, undefined, undefined, -1).done(function (data) {
    if (data["result"] === 1) {
      altern_notif("Item status update failed! Please retry later.", "alert-bib info", "alert-bib danger");
    } else {

      if ((status === "In transfer") && ghas_in_transfer) {
        $(event.target).closest("div").fadeOut(function () {
          $(event.target).remove();
          print_message("This item is in transfer!", "alert-bib transfer");
        });
      } else {
        if (($(".alert-bib transfer").length > 0) && ghas_in_transfer) {
          if (typeof nb_messages !== "undefined") {
            nb_messages -= 1;
            update_notification_area_height();
          }
          $(".alert-bib transfer").fadeOut(300, function () {
            $(".alert-bib transfer").remove();
          });
        }
        altern_notif(event.target, 'Item status changed to "' + status + '".', 'info', 'completed');
      }
    }
  });
  event.preventDefault();
  return false; // prevent default click action from happening!
}

function update_sort(direction, update_table, inverse) {
    var dir_button = $('#sort-btn');
    if(direction == 'asc' && !inverse || (direction == 'desc' && inverse)) {
        $(dir_button).attr("dir", "desc");
        if(update_table) {
            $("#bibcirc_list").DataTable().ajax.reload(function () {
                $(window).scrollTop(scrollPos)
            });
        }
        $(dir_button).find("i").removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc");
    } else if(direction == 'desc' && !inverse || (direction == 'asc' && inverse)) {
        $(dir_button).attr("dir", "asc")
        if(update_table) {
            $("#bibcirc_list").DataTable().ajax.reload(function () {
                $(window).scrollTop(scrollPos)
            });
        }
        $(dir_button).find("i").removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc");
    }
}

function update_nof(name) {
  var nof_selected = $("input[name='" + name + "']:checkbox:checked").length;
  var nof_total = $("input[name='" + name + "']:checkbox").length;
  if (nof_selected > 0) {
    $("#nof_" + name).html("(" + nof_selected + "/" + nof_total + ")");
  } else {
    $("#nof_" + name).html("(All)");
  }
}

function update_all_facets() {
    $("span.facet_nof").each(function() {
        var name = $(this).attr("id").split(/_(.+)?/)[1]
        update_nof(name);
    });
}

function URLToArray() {
    var request = {};
    var pairs = location.hash.substring(location.hash.indexOf('#') + 1).split('&');
    for (var i = 0; i < pairs.length; i++) {
        if(!pairs[i])
            continue;
        var pair = pairs[i].split('=');
        values = decodeURIComponent(pair[1]).split(",");
        request[decodeURIComponent(pair[0])] = values;
     }
     return request;
}

function ArrayToURL(array) {
  var pairs = [];
  for (var key in array)
    if (array.hasOwnProperty(key))

      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(array[key]));
  return pairs.join('&');
}

function parse_url_params() {
    params = URLToArray();
    for(var key in params) {
        if (params.hasOwnProperty(key)) {
            for (var i = 0; i < params[key].length; i++) {
                var checkbox = $('input[name="' + key + '"][value="' + params[key][i] + '"]');
                $(checkbox).attr("checked", true);
                $(checkbox).closest(".dropdown-elems").siblings(".clear-facet").show();

                // Update sort
                if (key == 'sort_dir') {
                    update_sort(params[key][i], false, true);
                }
            }
        }
    }
}

function update_url_params() {
    var params = {};
    var elements = $('.circulation_list_menu input[type="checkbox"]:checked, .circulation_list_menu input[type="radio"]:checked');
    for(var i = 0; i < elements.length; i++) {
        var name = $(elements[i]).attr('name');
        var value = $(elements[i]).attr('value');
        if(params.hasOwnProperty(name)){
            params[name] += "," + value;
        } else {
            params[name] = value;
        }
    }

    // Also add sorting direction
    params['sort_dir'] = $('#sort-btn').attr("dir");

    history.pushState({}, "", window.location.pathname + '#' + ArrayToURL(params));
}

function init_sort() {
    if(typeof(sort) != 'undefined') {
        $('input[name="sort"][value="' + sort + '"]').attr("checked", true);
    }
}

$(document).ready(function () {

  // Make the page body horizontally scrollable because of the left menu
  $(".pagebody").addClass("hasleftmenu")

    // Populate datatable for loans with holds
    // Set number of selected checkboxes in buttons

    bibcirc_table = $("#bibcirc_list");

    init_sort();
    parse_url_params();
    update_all_facets();

    // Define blueprints for different lists
    list_blueprints = {
      'loans': [
        {"className": "list-1stcol"},
        {"className": "list-2ndcol"},
        {"className": "list-3rdcol"},
        {"className": "text-center"},
        null,
        null,
        {"className": "text-center"}
      ],
      'holds': [
        {"className": "list-1stcol"},
        {"className": "list-2ndcol"},
        {"className": "list-3rdcol"},
        null,
        {"className": "text-center"},
        {"className": "text-center"},
        null,
        {"className": "text-center"}
      ],
      'loans_with_holds': [
        {"className": "list-1stcol"},
        {"className": "list-2ndcol"},
        {"className": "list-3rdcol"},
        {"className": "text-center"},
        null,
        {"className": "text-center"},
        null,
        {"className": "text-center"}
      ]
    }

    $(bibcirc_table).each(function() {
        $(this).DataTable({
            "columns": list_blueprints[list_type],
            "processing": true,
            "serverSide": true,
            "searching": false,
            "bInfo" : false,
            "language": {
                "zeroRecords": "No result"
            },
            "dom": 'rt<"bottom"iflp<"clear">>',
            "ajax": {
                url: ajax_url,
                data: function ( d ) {
                    return $.extend( {}, d, {
                    "library" :$("input[name='libraries']:checkbox:checked").map(function(){
                                  return $(this).val();
                                }).get(),
                    "patron_type" :$("input[name='patron_types']:checkbox:checked").map(function(){
                                  return $(this).val();
                                }).get(),
                    "item_type" :$("input[name='item_types']:checkbox:checked").map(function(){
                                  return $(this).val();
                                }).get(),
                    "item_status" :$("input[name='item_statuses']:checkbox:checked").map(function(){
                                  return $(this).val();
                                }).get(),
                    "location" :$("input[name='locations']:checkbox:checked").map(function(){
                                  return $(this).val();
                                }).get(),
                    "sort"      :$("input[name='sort']:radio:checked").val(),
                    "sort_dir"  :$('#sort-btn').attr("dir"),
                    "show"      :$("input[name='show']:checkbox:checked").map(function(){
                                  return $(this).val();
                                }).get(),
                    "overdue"   :$("input[name='overdue_toggle']:checkbox:checked").map(function(){
                                  return $(this).val();
                                }).get()
                    })

                },
            }
        });
    });
    // Change content of processing div
    $('.dataTables_processing').html("<i class='fa fa-spinner fa-spin'></i> Loading");

    // Search in facets
    $('.facet-search input').each(function () {
        $(this).on('keyup', function (e) {
            var code = e.keyCode || e.which;
            re = new RegExp($(this).val().toUpperCase(), "g");
            search_elements = $("input[name='" + $(this).attr('data-search') + "']");
            for (i = 0; i < search_elements.length; i++) {
                if (!$(search_elements[i]).parent().text().toUpperCase().match(re)) {
                    $(search_elements[i]).parent().hide();
                } else {
                    $(search_elements[i]).parent().show();
                }
            }
            // If we hit enter when only one alternative is visible, select that one
            if(code === 13) {
                var alternatives = $(this).parents(':eq(1)').find('.checkboxes_exp_loan:visible');
                if(alternatives.length == 1) {
                    alternatives.find('input[type="checkbox"]').attr("checked", "checked").trigger("change");
                    alternatives.closest('div.btn-group').removeClass("open");
                }
            }
        });
    });

    // Add action to "clear all" links
    $('.clear-facet').click(function () {
        $(this).siblings('.dropdown-elems').find("input[type='checkbox']").attr("checked", false).last().trigger("change");

    });

    // Clear search input on dropdown click + show all elements
    $('.dropdown-toggle').click(function () {
        var searchfield = $(this).parent().find('input[type="text"]');
        $(searchfield).val('');
        $(this).parent().find('label').show();
        window.setTimeout(function() {
                $(this).focus();
        }.bind(searchfield), 0);
    });

    // Event listener for checking a facet/sorting checkbox
    $("input[type='checkbox']").on("change", function() {
        // Update location list based on selected libraries
        if($(this).attr('name') == 'libraries') {
            checked_libs = $('input[name="libraries"]:checked').map(function() {
                return $(this).val();
            }).get();
            $('input[name="locations"]').each(function() {
                $(this).attr('checked', false);
                if(checked_libs.length > 0 && checked_libs.indexOf($(this).attr("library")) == -1){
                    $(this).parent().parent().hide();
                } else {
                    $(this).parent().parent().show();
                }
            });
            update_nof("locations");
        }
        scrollPos =  $(window).scrollTop();

        // Hide/show 'clear all' line
        var nof_checked = $('input[name="' + $(this).attr('name') + '"]:checked').length
        if(nof_checked > 0) {
            $(this).closest(".dropdown-elems").siblings(".clear-facet").show();
        } else {
            $(this).closest(".dropdown-elems").siblings(".clear-facet").slideUp("fast");
        }

        // Refresh table
        $("#bibcirc_list").DataTable().ajax.reload(function () {$(window).scrollTop(scrollPos)});
        update_nof($(this).attr("name"));
        update_url_params();
    });

    // Add action to sort radio buttons
    $('input[type="radio"]').on("change", function() {
        scrollPos =  $(window).scrollTop();
        $("#bibcirc_list").DataTable().ajax.reload(function () {$(window).scrollTop(scrollPos)});
        update_nof($(this).attr("name"));
        update_url_params();
    });
    //Add action to sort dir button
    $('#sort-btn').click(function() {
        update_sort($(this).attr("dir"), update_table=true);
        update_url_params();
    });

    // Remove sorting on header click
    $('th').unbind('click');

    // Update pagination on upate, also reapply tooltips
    $(bibcirc_table).on( 'draw.dt', function () {
        $(window).scrollTop(scrollPos);
        $('[data-toggle="tooltip"]').tooltip()
    });


});

function addThumbnailCirc(container, recID) {
  var NannaServer = '//' + window.location.hostname + '/nanna';
  if (recID) {
    $.ajax({
      url: NannaServer + '/thumbnail/' + recID,
      success: function (response) {
        var thumbUrl = response.small;
        var thumbUrlBig = response.big;

        container.data('thumb-small', thumbUrl);
        container.data('thumb-big', thumbUrlBig);

        var thumb = $('<img>').attr('src', thumbUrl);
        thumb.on('load', function () {
          container.removeClass("loading");
          container.removeClass('no-preview');
          container.html(thumb);

        });
        thumb.on('error', function () {
          container.removeClass("loading");
          container.addClass('no-preview');
          container.html('');
        });
      },
      error: function (xhr, ajaxOptions, thrownError) {
        if (xhr.status === 404) {
          container.removeClass("loading");
          container.addClass('no-preview');
          container.html('');
        }
      }
    });
  }
}

function update_notification_area_height() {
  if (typeof nb_messages !== "undefined") {
    if (nb_messages > 0) {
      $(".messagearea").animate({height: (size_message * (nb_messages))}, time_animation);
    } else {
      var old_margin_top = $(".item_detail_return").css("margin-top");
      $(".messagearea").animate({height: (size_message * nb_messages)}, time_animation, "linear", function () {
        $(".item_detail_return").css("margin-top", parseInt(old_margin_top) + 30);
        $(".item_detail_return").animate({"margin-top": old_margin_top}, time_animation);
      });

    }
  }
}

function init_notification_area() {
  nb_messages = $(".messagearea").children().length;
  size_message = $(".messagearea").height() / nb_messages;
  update_notification_area_height();
}