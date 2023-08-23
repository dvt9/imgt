function myjav4k(data) {
    var posturl, posttitle, thumburl, skeleton = "", entry = data.feed.entry;
    if (entry !== undefined) {
        skeleton = "<ul class='l_w_l'>";
        for (var i = 0; i < entry.length; i++) {
            for (var j = 0; j < entry[i].link.length; j++)
                if (entry[i].link[j].rel == "alternate") {
                    posturl = entry[i].link[j].href;
                    break
                }
            "media$thumbnail"in entry[i] ? thumburl = entry[i].media$thumbnail.url : thumburl = '"+no_img+"';
            thumburl = thumburl.replace(/s72-c/gi, "s1600");
            posttitle = entry[i].title.$t;
            var Ntitle = posttitle;
            var Etitle = "4K";
            if (posttitle.indexOf("[") != -1 || posttitle.indexOf("]") != -1) {
                Ntitle = posttitle.split("[")[0];
                Etitle = posttitle.split("[")[1].split("]")[0]
            }
            skeleton += '<li><div><a  class="vtip" href="' + posturl + '" title="' + Ntitle + '"><img class="thumbnail" alt="' + posttitle + '" src="' + thumburl + '"></a><div><div class="f_desc"><a class="vtip" href="' + posturl + '" title="' + Ntitle + '" >' + Ntitle.split("-")[0] + '</a></div><div class="f_desc2">' + Ntitle.split("-")[1] + '</div></div><div class="f_tag">' + Etitle + "</div></div></li>"
        }
        skeleton += "</ul>";
        document.write(skeleton)
    }
}