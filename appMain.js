const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filterGoods: [],
        searchLine: ''
        
    },

    computed: {
       
    },
    methods: {
        makeGETRequest(url) {
            return new Promise((resolve, reject) => {
                let xhr;
                if (window.XMLHttpRequest) {
                    xhr = new window.XMLHttpRequest();
                } else {
                    xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
                }

                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        let body = (JSON.parse(xhr.responseText));
                        resolve(body);
                    }
                    xhr.onerror = function (err) {
                        PromiseRejectionEvent(err);
                    }

                }
                xhr.open('GET', url);
                xhr.send();
            });
        }

    },
    async mounted() {
        try {
            this.goods = await this.makeGETRequest(`${API_URL}/catalogData.json`);
            this.filterGoods = [... this.goods];
        } catch (e) {
            console.error(e);
        }
    }
   
});