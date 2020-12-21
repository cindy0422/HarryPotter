//1.按鈕點擊之後, 按鈕消失(按鈕的click事件, 按鈕none掉)
//2.按鈕點擊之後, 文字替換成其他文字
//3.按鈕下方秀出題目(文字+數個按鈕)
//4...


var sum = 0; //分數
$(function () {
    var i = 1;
    var j = 1;
    var ans_text = "";
    var lev, come = 0;
    var qb = $('div.questionBlock');
    //點問我吧，會淡出並且由右到左滑入第一題目
    $('.btnAction').click(function () {
        $('.maincontent').fadeOut(500, function () {
            qb.eq(0).animate({ left: 0, opacity: "show" }, 700, function () {
                for (j = 1; j <= 5; j++) { //五個題目
                    for (i = 1; i < 5; i++) {  //四個項目
                        if (i == 1) {
                            $("ul.ans_" + j + " li:nth-child(" + i + ")").click(function () {
                                sum += 2;
                                come += 1;
                                lev = come - 1;
                                $("div.questionBlock:eq(" + lev + ")").animate({ left: '-900px', opacity: '0' }, 700);
                                $("div.questionBlock:eq(" + come + ")").animate({ left: '0', opacity: 'show' }, 700);
                                result(j, come);
                            });
                        } else if (i == 2) {
                            $("ul.ans_" + j + " li:nth-child(" + i + ")").click(function () {
                                sum += 4;
                                come += 1;
                                lev = come - 1;
                                $("div.questionBlock:eq(" + lev + ")").animate({ left: '-900px', opacity: '0' }, 700);
                                $("div.questionBlock:eq(" + come + ")").animate({ left: '0', opacity: 'show' }, 700);
                                result(j, come);
                            });
                        } else if (i == 3) {
                            $("ul.ans_" + j + " li:nth-child(" + i + ")").click(function () {
                                sum += 6;
                                come += 1;
                                lev = come - 1;
                                $("div.questionBlock:eq(" + lev + ")").animate({ left: '-900px', opacity: '0' }, 700);
                                $("div.questionBlock:eq(" + come + ")").animate({ left: '0', opacity: 'show' }, 700);
                                result(j, come);
                            });
                        } else if (i == 4) {
                            $("ul.ans_" + j + " li:nth-child(" + i + ")").click(function () {
                                sum += 8;
                                come += 1;
                                lev = come - 1;
                                $("div.questionBlock:eq(" + lev + ")").animate({ left: '-900px', opacity: '0' }, 700);
                                $("div.questionBlock:eq(" + come + ")").animate({ left: '0', opacity: 'show' }, 700);
                                result(j, come);
                            });
                        }
                    }
                }
            });
        });
    });
});

function result(j, come) {
    if (j == 6 && come == 5) {
        $('.reslutText').delay(2000).animate({ top: "-20px", opacity: "show" }, 2000)
        $('.reslutText1').delay(4500).animate({ top: "-30px", opacity: "show" }, 2000)
        if (sum <= 10) {
            ans_text = "葛來分多";
            $('.sortingHouse p').text(ans_text).css("color", "red").attr("class", "crest_g");
            $('.sortingHouse img').attr({ src: "crest_g.png", alt: "葛來分多", class: "crest_g" });
        } else if (sum > 11 && sum <= 20) {
            ans_text = "赫夫帕夫";
            $('.sortingHouse p').text(ans_text).css("color", "yellow").attr("class", "crest_h");
            $('.sortingHouse img').attr({ src: "crest_h.png", alt: "赫夫帕夫" });

        } else if (sum > 21 && sum <= 30) {
            ans_text = "雷文克勞";
            $('.sortingHouse p').text(ans_text).css("color", "#4395dd").attr("class", "crest_r");
            $('.sortingHouse img').attr({ src: "crest_r.png", alt: "雷文克勞" });

        } else if (sum > 31 && sum <= 40) {
            ans_text = "史來哲林";
            $('.sortingHouse p').text(ans_text).css("color", "green").attr("class", "crest_s");
            $('.sortingHouse img').attr({ src: "crest_s.png", alt: "史來哲林" });
        }
        $('.sortingHouse').delay(7500).animate({ top: "-30px", opacity: "show" }, 1000).css({
            "font-size": "28px", "font-weight": "600", 'text-align': 'center'
        });
    }
}




