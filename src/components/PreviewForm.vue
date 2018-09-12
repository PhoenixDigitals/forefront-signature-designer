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
          <SignatureDesign />
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
import SignatureDesign from "./SignatureDesign.vue";

export default {
  name: "PreviewForm",
  components: {
    SignatureDesign
  },
  methods: {
    isSafari() {
      var ua = window.navigator.userAgent;
      var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
      var webkit = !!ua.match(/WebKit/i);
      var isSafari = iOS && webkit && !ua.match(/CriOS/i);

      return isSafari;
    },

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

    selectElementContents(el) {
      var range = document.createRange();
      range.selectNodeContents(el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },

    copyHtmlToClipboard() {
      var dataHtmlElement = document.getElementById("clipboard-data");

      dataHtmlElement.contentEditable = true;
      dataHtmlElement.readOnly = false;

      this.selectElementContents(dataHtmlElement);
      this.copyToClipboard(dataHtmlElement.innerHTML);

      dataHtmlElement.contentEditable = false;
      dataHtmlElement.readOnly = true;

      window.getSelection().removeAllRanges();
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
  margin-left: 10px;
  font-size: 12px;
}

.lorem-ipsum {
  color: gray;
  margin-bottom: 20px;
  text-align: justify;
}

.btn-forefront {
  color: black;
  background-color: #f4f4f4;
  border-color: #a3a3a3;
}

.btn-forefront:hover {
  background-color: #fa9214;
}
</style>