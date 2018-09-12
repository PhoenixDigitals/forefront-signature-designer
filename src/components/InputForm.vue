<template>

  <div class="container">

  <form>
    <div class="form-group">
        <label for="firstname">Firstname</label>
        <input :value="firstname" @input="updateFirstname" id="firstname" class="form-control">
    </div>

    <div class="form-group">
        <label for="lastname">Lastname</label>
        <input :value="lastname" @input="updateLastname" id="lastname" class="form-control">
    </div>

    <div class="form-group">
        <label for="role">Role</label>
        <input :value="role" @input="updateRole" id="role" class="form-control">
    </div>

    <div class="form-group">
      <label for="address">Address</label>

      <select :value="address" @input="updateAddress" id="address" class="form-control">
        <option disabled value="">Please select one</option>
        <option>Holländargatan 13, 111 36 Stockholm</option>
        <option>Stationsgatan 37M, 302 50 Halmstad</option>
        <option>Media Evolution City, Stora Varvsgatan 6a, 211 19 Malmö</option>
        <option>Torggatan 6, 852 32 Sundsvall</option>
        <option>Dragarbrunnsgatan 65, 753 20 Uppsala</option>
        <option>Ågatan 35, 582 22 Linköping</option>
        <option>Kurortsvägen 20, 837 53 Åre</option>
        <option>Tynäsgatan 10, 650 02 Karlstad</option>
      </select>     
    </div>

    <div class="form-group">
        <label for="mobile">Mobile</label>
        <input :value="mobile" @input="updateMobile" id="mobile" class="form-control">
    </div>

    <div class="form-group">
        <label for="office">Office</label>
        <input :value="office" @input="updateOffice" id="office" class="form-control">
    </div>    

  </form>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "InputForm",
  computed: mapGetters([
    "firstname",
    "lastname",
    "role",
    "address",
    "mobile",
    "office"
  ]),
  methods: {
    updateFirstname(e) {
      this.$store.commit("updateFirstname", e.target.value);
    },
    updateLastname(e) {
      this.$store.commit("updateLastname", e.target.value);
    },
    updateRole(e) {
      this.$store.commit("updateRole", e.target.value);
    },
    updateMobile(e) {
      this.$store.commit("updateMobile", e.target.value);
    },
    updateAddress(e) {
      this.$store.commit("updateAddress", e.target.value);
    },
    updateOffice(e) {
      this.$store.commit("updateOffice", e.target.value);
    }
  }
};
</script>


<style scoped>
.form-group label {
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 12px;
  float: left;
}

form {
  margin-top: 15px;
  margin-bottom: 15px;
  color: white;
}
</style>

