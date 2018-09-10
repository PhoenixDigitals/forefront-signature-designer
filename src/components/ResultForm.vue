<template>
    <div class="container">

      <div class="row lorem-ipsum">
        Lorem ipsum,
      </div>      

      <div class="row lorem-ipsum">
        Dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      <div>
        <hr/>
      </div>

        <div id="clipboard-data">
            <div class="row forefront-creds">
                <table>
                    <tr>
                        <td class="logo" >
                            <img src="data:image/png;base64, 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" alt="logo" />
                        </td>

                        <td>
                            <div class="row name">
                                <span>{{ firstname }} {{ lastname }}</span>
                            </div>

                            <div class="row">
                                <span>
                                    {{ role }}, Forefront Consulting
                                </span>
                                
                            </div> 

                            <div class="row">
                                {{ address }}
                            </div>

                            <div class="row">
                                <span>
                                    Mobile: {{ mobile }} | Office: {{ office }} | <a :href="website" target="_blank"> {{ website }} </a>
                                </span>
                                
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

        </div>

    <div class="footer">
        <hr/>
        <div class="row">
            <button type="button" @click="copyHtmlToClipboard"  class="btn btn-dark btn-forefront">Copy to clipboard</button>
        </div>
    </div>

    </div>
    
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ResultForm",
  computed: mapGetters([
    "firstname",
    "lastname",
    "role",
    "address",
    "mobile",
    "office",
    "website"
  ]),
  methods: {
    copyToClipboard(data) {
      function listener(e) {
        e.clipboardData.setData("text/html", data);
        e.clipboardData.setData("text/plain", data);
        e.preventDefault();
      }

      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
    },

    copyHtmlToClipboard() {
      var data = document.getElementById("clipboard-data").innerHTML;
      this.copyToClipboard(data);
    }
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  color: black;
  padding: 40px;
  margin-top: 30px;
  font-size: 12px;
}

.lorem-ipsum {
  color: gray;
  margin-bottom: 20px;
  text-align: justify;
}

.name {
  font-weight: bold;
}

.role {
  margin-bottom: 5px;
}

.company {
  font-weight: bold;
}

.col-3 {
  padding-left: 0px;
}

.forefront-creds {
  margin-bottom: 30px;
}

.btn-forefront {
  color: black;
  background-color: #f4f4f4;
  border-color: #a3a3a3;
}

.btn-forefront:hover {
  background-color: #fa9214;
}

.logo {
  width: 150px;
}
</style>