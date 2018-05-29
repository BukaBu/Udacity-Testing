/* feedreader.js
 */

/* All tests are within the $() function,
 * since some of these tests may require DOM elements. It is to make sure they don't run until the DOM is ready.
 */
$(function() {
    /* the first test suite -  all about the RSS feeds definitions
    */
    describe('RSS Feeds', function() {
        /* the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that loops through each feed
         * and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL are defined', function () {

            allFeeds.forEach(function (feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url).not.toBe(0);
            });

          });

        /*a test that loops through each feed
         * and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Names are defined', function () {

           allFeeds.forEach(function (feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe(0);
            });
        });
    });


    /* test suite named "The menu" */
    describe('The menu', function() {

        /* a test that ensures the menu element is
         * hidden by default.
          */
         const menu = document.getElementsByClassName('menu-hidden');


         it(' element is hidden by default', function () {
            expect(menu.length).toBe(1);

         });



         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */

          it(' changes visibility', function () {
            const menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click();
            expect(menu.length).toBe(0);
            menuIcon.click();
            expect(menu.length).toBe(1);


          });


    });


    /* a test suite named "Initial Entries" */
    describe('Initial Entries', function() {

      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         it(' have at least one feed in the container', function (done) {
           const container = document.querySelector('.feed').innerHTML;
            expect(container).not.toBe('');
            done();

         });

    });


    /*  a test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let firstFeed, secondFeed;

        /* a test to make sure that when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, function() {
                    secondFeed = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        it('should load new content', function(done) {
            expect(firstFeed).not.toBe(secondFeed);
            done();
        });

    });


}());
