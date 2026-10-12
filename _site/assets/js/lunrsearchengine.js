
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About CYACS",
    "body": "   Who we are: CYACS was founded in the spring of 2026. We are a concert series designed to promote young talent in classical music connected to Canterbury and Kent, though we are occasionally joined by guests from further afield. It was founded by our Artistic Director Oliver C F Jones, who frequently appears as an accompanist in the series and is still unable comfortably to write about himself in the third person. This website: On this website you may find records of previous and upcoming concerts, including repertoire and artists, as well as sign up for our mailing list, which is used to update you about forthcoming events, ensuring that you never miss a note! Credits: We are exceedingly grateful to St Paul’s Church for their immense kindness in allowing us to use their beautiful space and to Mr Edward Gaut for his work in designing this website.     "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                 Orlando Barton Hodges                              :               A Journey In English Song:                                                                       12 October 2026 at 13:00                                                                                            All:                                                                                                     Tommy Geddes              :       Tenor Delights:                               12 November 2026 at 13:00                                                                                                                     Orlando Barton Hodges              :       A Journey In English Song:                               12 October 2026 at 13:00                                                                                                                     Lydia South              :       Frauenliebe-und-leben and other songs:                               10 September 2026 at 13:00                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/2026-11-12-tommy-geddes/",
    "title": "Tommy Geddes",
    "body": "2026/11/12 - Tenor Delights: Tommy Geddes - Tenor: Robin Walker - Piano: Programme to include:: Il Mio Tesoro Intanto - W. A Mozart Um Mitternacht - Gustav Mahler Phidylé - Henri Duparc Nacht - Alban Berg "
    }, {
    "id": 6,
    "url": "http://localhost:4000/2026-10-12-orlando-barton-hodges/",
    "title": "Orlando Barton Hodges",
    "body": "2026/10/12 - A Journey In English Song: Orlando Barton Hodges - Baritone: Oliver C F Jones - Piano: Programme: Autumn Twilight - Peter Warlock The Cloths of Heaven - Rebecca Clarke It was a lover and his lass - Gerald Finzi Twilight Fancies - Frederick Delius Blow, blow, thou Winter Wind - Roger Quilter Silent Noon - Ralph Vaughan Williams When I Am Dead, My Dearest - Ralph Vaughan Williams Blow, blow, thou winter wind - Madeleine Dring Sleep - Ivor Gurney In Flanders - Ivor Gurney "
    }, {
    "id": 7,
    "url": "http://localhost:4000/2026-09-10-lydia-south/",
    "title": "Lydia South",
    "body": "2026/09/10 - Frauenliebe-und-leben and other songs: Lydia South, Soprano Oliver C F Jones, Piano Programme: Johannes Brahms - Von Ewiger Liebe Richard Strauss - Meinem Kinde Richard Strauss - Cäcilie Richard Strauss - Allerseelen Robert Schumann - Frauenliebe-und-leben Richard Strauss - Morgen "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});