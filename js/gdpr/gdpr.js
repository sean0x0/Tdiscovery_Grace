
function initialGDPR() {
    var html = "<div tabindex='2' class='GDinfo'>為提供更好的用戶體驗，本網站使用Cookie分析和其他追蹤。個人資料相關權益事項，請參考本公司 <a href='https://www.thsrc.com.tw/ArticleContent/d1fa3bcb-a016-47e2-88c6-7b7cbed00ed5' target='_blank'>個人資料保護專區</a>。</div>";
    

    
        var popupcookiepolicy = false;
        if ("" + Cookies.get("AcceptThsrcCookiePolicyTime") != "" && "" + Cookies.get("AcceptThsrcCookiePolicyTime") != "null" && "" + Cookies.get("AcceptThsrcCookiePolicyTime") != "undefined") {
            popupcookiepolicy = false
        } else if ("" + Cookies.get("DisagreeThsrcCookiePolicyTime") != "" && "" + Cookies.get("DisagreeThsrcCookiePolicyTime") != "null" && "" + Cookies.get("DisagreeThsrcCookiePolicyTime") != "undefined") {
            popupcookiepolicy = false
        } else {
            popupcookiepolicy = true;
            Cookies.set("DisagreeThsrcCookiePolicyTime", new Date(), { expires: 1 });
            if ("" + Cookies.get("DisagreeThsrcCookiePolicyTime") == "" || "" + Cookies.get("DisagreeThsrcCookiePolicyTime") == "null" || "" + Cookies.get("DisagreeThsrcCookiePolicyTime") == "undefined") {
                popupcookiepolicy = false;
            } else {
                Cookies.remove("DisagreeThsrcCookiePolicyTime");
            }
        }
        if (popupcookiepolicy) {
            var agree = '我同意';
                disagree = '不同意';
            

            Swal.fire({
                html: html,
                showCancelButton: true,
                cancelButtonText: disagree,
                cancelButtonColor: '#736751',
                confirmButtonText: agree,
                confirmButtonColor: '#3b3734',
                animation: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                reverseButtons: true,
            })
            .then(function (value) {
                var posttime = new Date();
                if (value.value) {
                    Cookies.set("AcceptThsrcCookiePolicyTime", posttime, { expires: 365 });
                } else {
                    Object.keys(Cookies.get()).forEach(function (cookieName) {
                        Cookies.remove(cookieName);
                    });
                    Cookies.set("DisagreeThsrcCookiePolicyTime", posttime, { expires: 90 });
                    var newwindow = window.open();
                    
                    newwindow.location = "../index.html";
               
                    
                }
            });
        }
    
}