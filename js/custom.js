/**
 * Main JS file for BlogBox behaviours
 */
(function ($) {
    "use strict";

    var $searchField = $('#search-field'),
        $searchResults = $('#search-results'),
        $searchCount = $('.search-count');

    $(document).ready(function(){
        var $body = $(document.body),
            $menuToggle = $('#menu-toggle'),
            $navMenu = $('#nav-menu');

        // Responsive video embeds
        $('.entry-content').fitVids();

        // Scroll to top
        $('.top-link').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({'scrollTop': 0});
        });

        // Site search navigation
        $('.search-toggle').on('click', function(e){
            if ( $body.hasClass('search--opened') ) {
                $body.removeClass('search--opened');
                setTimeout(function() {
					$searchField.val('');
					$searchResults.html('');
					$searchCount.text('0');
				}, 300);
            } else {
                $body.addClass('search--opened');
                setTimeout(function() {
                    $('#search-field').focus();
                }, 300);
            }
            e.preventDefault();
        });

        // Enable menu toggle
        $menuToggle.click(function(){
            if ( $menuToggle.hasClass( 'toggled--on' ) ) {
                $menuToggle.removeClass('toggled--on').attr('aria-expanded', 'false');
                $navMenu.slideUp();
            } else {
                $menuToggle.addClass('toggled--on').attr('aria-expanded', 'true');
                $navMenu.slideDown();
            }
        });

        // Adjust full-width images
        adjustImages();

        $(window).bind('resize orientationchange', function() {
            adjustImages();
            if ( $menuToggle.is(':hidden') ) {
                $menuToggle.removeClass('toggled--on').attr('aria-expanded', 'false');
                $navMenu.removeAttr('style');
            }
        });
    });

    function adjustImages() {
        var $entry = $('.entry-box'),
            $entryContent = $entry.find('.entry-content'),
            entryWidth = $entry.outerWidth(),
            entryContentWidth = $entryContent.width();
        $entryContent.find('.full-width').each(function() {
            var _this = $(this);
            _this.css({ 'margin-left': entryContentWidth / 2 - entryWidth / 2, 'max-width': 'none', 'width': entryWidth });
            _this.find('img').css({ 'width': entryWidth });
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const codeToggles = document.querySelectorAll('.code-toggle');
        const isExpandedByDefault = document.body.classList.contains('code-blocks-expanded');
        
        document.querySelectorAll('.code-block-container').forEach(container => {
            const pre = container.querySelector('pre');
            const toggle = container.querySelector('.code-toggle');
            
            if (isExpandedByDefault) {
                container.classList.add('expanded');
                pre.style.maxHeight = 'none';
                if (toggle) {
                    toggle.textContent = 'Collapse';
                }
            }

            // Add click event listener to toggle button
            if (toggle) {
                toggle.addEventListener('click', function() {
                    const isExpanded = container.classList.contains('expanded');
                    if (isExpanded) {
                        container.classList.remove('expanded');
                        pre.style.maxHeight = '300px'; // or whatever your collapsed height should be
                        toggle.textContent = 'Expand';
                    } else {
                        container.classList.add('expanded');
                        pre.style.maxHeight = 'none';
                        toggle.textContent = 'Collapse';
                    }
                });
            }
        });



        const sidebar = document.querySelector('.category-sidebar'); // Adjust the selector to match your sidebar
        const sidebarToggle = document.getElementById('sidebar-toggle') || document.createElement('button');


        if (sidebar) {
            const isMobile = () => window.innerWidth <= 1610;
    
            function updateSidebarPosition() {
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                const headerHeight = 60;
                const topMargin = 20;
                const maxTop = document.body.offsetHeight - sidebar.offsetHeight - topMargin;
    
                let topPosition = Math.max(headerHeight + topMargin, scrollPosition + topMargin);
                topPosition = Math.min(topPosition, maxTop);
    
                sidebar.style.top = `${topPosition}px`;
            }
    
            function showSidebar() {
                sidebar.classList.remove('hidden');
                if (isMobile()) {
                    sidebarToggle.style.display = 'none';
                }
            }
    
            function hideSidebar() {
                sidebar.classList.add('hidden');
                if (isMobile()) {
                    sidebarToggle.style.display = 'block';
                }
            }
    
            // 토글 버튼 설정
            if (!document.getElementById('sidebar-toggle')) {
                sidebarToggle.id = 'sidebar-toggle';
                sidebarToggle.textContent = '카테고리 보기';
                document.body.appendChild(sidebarToggle);
            }
    
            sidebarToggle.addEventListener('click', showSidebar);
    
            // 목차 외부 클릭 시 목차 닫기
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && e.target !== sidebarToggle && isMobile()) {
                    hideSidebar();
                }
            });

            updateSidebarPosition();
            window.addEventListener('scroll', updateSidebarPosition);
            window.addEventListener('resize', () => {
                updateSidebarPosition();
                if (isMobile()) {
                    hideSidebar();
                } else {
                    showSidebar();
                }
            });
    
            // 초기 상태 설정
            if (isMobile()) {
                hideSidebar();
            } else {
                showSidebar();
            }
        }





    });

}(jQuery));
