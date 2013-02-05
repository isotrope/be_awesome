// Be Awesome
// A picker for Font Awesome
// v. 0.1
// by Michal Bluma
// isotrope.net
 
;
(function($) {

    $.beAwesome = function(element, options) {

        var defaults = {
            font_classes : ['icon-adjust', 'icon-align-center', 'icon-align-justify', 'icon-align-left', 'icon-align-right', 'icon-ambulance', 'icon-angle-down', 'icon-angle-left', 'icon-angle-right', 'icon-angle-up', 'icon-arrow-down', 'icon-arrow-left', 'icon-arrow-right', 'icon-arrow-up', 'icon-asterisk', 'icon-backward', 'icon-ban-circle', 'icon-bar-chart', 'icon-barcode', 'icon-beaker', 'icon-beer', 'icon-bell', 'icon-bell-alt', 'icon-bold', 'icon-bolt', 'icon-book', 'icon-bookmark', 'icon-bookmark-empty', 'icon-briefcase', 'icon-building', 'icon-bullhorn', 'icon-calendar', 'icon-camera', 'icon-camera-retro', 'icon-caret-down', 'icon-caret-left', 'icon-caret-right', 'icon-caret-up', 'icon-certificate', 'icon-check', 'icon-check-empty', 'icon-chevron-down', 'icon-chevron-left', 'icon-chevron-right', 'icon-chevron-up', 'icon-circle', 'icon-circle-arrow-down', 'icon-circle-arrow-left', 'icon-circle-arrow-right', 'icon-circle-arrow-up', 'icon-circle-blank', 'icon-cloud', 'icon-cloud-download', 'icon-cloud-upload', 'icon-coffee', 'icon-cog', 'icon-cogs', 'icon-columns', 'icon-comment', 'icon-comment-alt', 'icon-comments', 'icon-comments-alt', 'icon-copy', 'icon-credit-card', 'icon-cut', 'icon-dashboard', 'icon-desktop', 'icon-double-angle-down', 'icon-double-angle-left', 'icon-double-angle-right', 'icon-double-angle-up', 'icon-download', 'icon-download-alt', 'icon-edit', 'icon-eject', 'icon-envelope', 'icon-envelope-alt', 'icon-exchange', 'icon-exclamation-sign', 'icon-external-link', 'icon-eye-close', 'icon-eye-open', 'icon-facebook', 'icon-facebook-sign', 'icon-facetime-video', 'icon-fast-backward', 'icon-fast-forward', 'icon-fighter-jet', 'icon-file', 'icon-file-alt', 'icon-film', 'icon-filter', 'icon-fire', 'icon-flag', 'icon-folder-close', 'icon-folder-close-alt', 'icon-folder-open', 'icon-folder-open-alt', 'icon-font', 'icon-food', 'icon-forward', 'icon-fullscreen', 'icon-gift', 'icon-github', 'icon-github-alt', 'icon-github-sign', 'icon-glass', 'icon-globe', 'icon-google-plus', 'icon-google-plus-sign', 'icon-group', 'icon-h-sign', 'icon-hand-down', 'icon-hand-left', 'icon-hand-right', 'icon-hand-up', 'icon-hdd', 'icon-headphones', 'icon-heart', 'icon-heart-empty', 'icon-home', 'icon-hospital', 'icon-inbox', 'icon-indent-left', 'icon-indent-right', 'icon-info-sign', 'icon-italic', 'icon-key', 'icon-laptop', 'icon-leaf', 'icon-legal', 'icon-lemon', 'icon-lightbulb', 'icon-link', 'icon-linkedin', 'icon-linkedin-sign', 'icon-list', 'icon-list-alt', 'icon-list-ol', 'icon-list-ul', 'icon-lock', 'icon-magic', 'icon-magnet', 'icon-map-marker', 'icon-medkit', 'icon-minus', 'icon-minus-sign', 'icon-mobile-phone', 'icon-money', 'icon-move', 'icon-music', 'icon-off', 'icon-ok', 'icon-ok-circle', 'icon-ok-sign', 'icon-paper-clip', 'icon-paste', 'icon-pause', 'icon-pencil', 'icon-phone', 'icon-phone-sign', 'icon-picture', 'icon-pinterest', 'icon-pinterest-sign', 'icon-plane', 'icon-play', 'icon-play-circle', 'icon-plus', 'icon-plus-sign', 'icon-plus-sign-alt', 'icon-print', 'icon-pushpin', 'icon-qrcode', 'icon-question-sign', 'icon-quote-left', 'icon-quote-right', 'icon-random', 'icon-refresh', 'icon-remove', 'icon-remove-circle', 'icon-remove-sign', 'icon-reorder', 'icon-repeat', 'icon-reply', 'icon-resize-full', 'icon-resize-horizontal', 'icon-resize-small', 'icon-resize-vertical', 'icon-retweet', 'icon-road', 'icon-rss', 'icon-save', 'icon-screenshot', 'icon-search', 'icon-share', 'icon-share-alt', 'icon-shopping-cart', 'icon-sign-blank', 'icon-signal', 'icon-signin', 'icon-signout', 'icon-sitemap', 'icon-sort', 'icon-sort-down', 'icon-sort-up', 'icon-spinner', 'icon-star', 'icon-star-empty', 'icon-star-half', 'icon-step-backward', 'icon-step-forward', 'icon-stethoscope', 'icon-stop', 'icon-strikethrough', 'icon-suitcase', 'icon-table', 'icon-tablet', 'icon-tag', 'icon-tags', 'icon-tasks', 'icon-text-height', 'icon-text-width', 'icon-th', 'icon-th-large', 'icon-th-list', 'icon-thumbs-down', 'icon-thumbs-up', 'icon-time', 'icon-tint', 'icon-trash', 'icon-trophy', 'icon-truck', 'icon-twitter', 'icon-twitter-sign', 'icon-umbrella', 'icon-underline', 'icon-undo', 'icon-unlock', 'icon-upload', 'icon-upload-alt', 'icon-user', 'icon-user-md', 'icon-volume-down', 'icon-volume-off', 'icon-volume-up', 'icon-warning-sign', 'icon-wrench', 'icon-zoom-in', 'icon-zoom-out'],
            container_id: 'beAwesome_picker',
            onFoo: function() {}
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
        element = element;

        plugin.init = function() {
            console.log($element);
            plugin.settings = $.extend({}, defaults, options);
            $element.on('click focus', function() {
                plugin.show_popout();
            });
            $(document).on('click', function(event) {
                console.log( event.target, $element.is(event.target) );
                if( ! $element.is(event.target) ) {
                plugin.destroy_popout();
                }
            });

        }
        
        plugin.list_classes = function() {
            console.log( plugin.settings.font_classes );
        }
        
        var prepare_list = function() {
            var html_out = '<div id="' + plugin.settings.container_id + '" class="be_awesome_picker_container">';
            for (var i = 0; i < plugin.settings.font_classes.length; i++) {
                var curr_name = plugin.settings.font_classes[i];
                html_out += '<div><i class="' + curr_name + '"></i><br /><span>' + curr_name + '</span></div>';
            }
            html_out += '</div>';
            
            return html_out;
        }
        
        plugin.show_popout = function() {
            //One already exists
            if( $('#' + plugin.settings.container_id ).length ) {
                return false;
            }
            
            var list_html = prepare_list();
            
            $('body').append( list_html );

            where_to_show();
            active_scroll();
            
            $( '#' + plugin.settings.container_id ).on( 'click', 'div', function() {
                $element.val( $(this).text() ).addClass('highlight'); 
                setTimeout(function() {
                    $element.removeClass("highlight");
                }, 1500);
               plugin.destroy_popout();
            });
            
        }
        
        plugin.destroy_popout = function() {
             $( '#' + plugin.settings.container_id ).fadeOut( 500 , function() {
                    $(this).remove();
                });
        }
        
        var where_to_show = function() {
            var where = $element.offset(), 
            where_x = Math.floor( where.left),
            where_y = Math.floor( where.top),
            $plugin_container = $('#' + plugin.settings.container_id),
            width = $plugin_container.outerWidth(),
            height = $plugin_container.outerHeight(),
            window_width = $(window).width(),
            window_height = $(window).height(),
            where_to_show_x = '',
            where_to_show_y = '',
            hor_offset = -10,
            vert_offset = 24;
            
            console.log(where = $element.offset(), 
            where_x,
            where_y,
            width ,
            height,
            window_width,
            window_height,
            where_to_show_x,
            where_to_show_y)
            if( where_x + width < window_width ) {
                where_to_show_x = where_x + hor_offset ;
            } else {
                where_to_show_x = where_x - width + hor_offset ;
            }
            
            if( where_y + height < window_height ) {
                where_to_show_y = where_y + vert_offset ;
            } else {
                where_to_show_y = where_y - height + vert_offset;
            }
            
            $plugin_container.css( 'left' , where_to_show_x ).css( 'top', where_to_show_y );
            
        }
        
        var active_scroll = function() {
            var input_value = $element.val(),
                $plugin_container = $( '#' + plugin.settings.container_id );
            if( input_value != '' && plugin.settings.font_classes.indexOf(input_value) ) {
                var where_to_scroll_down = $('.' + input_value).parent('div').position().top;
                $( 'div', $plugin_container ).removeClass('active');
                $('.' + input_value).parent('div').toggleClass('active');
                $plugin_container.scrollTop( where_to_scroll_down );
            }
            
        }
        
   

        plugin.foo_public_method = function() {
        // code goes here
        }

        var foo_private_method = function() {
        // code goes here
        }

        plugin.init();

    }

    $.fn.beAwesome = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('beAwesome')) {
                var plugin = new $.beAwesome(this, options);
                $(this).data('beAwesome', plugin);
            }
        });

    }



})(jQuery);



