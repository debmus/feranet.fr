<template>
  <h3>
    <table>
      <tr>
        <td class="ipv">v4</td>
        <td>{{ ipv4 }}</td>
      </tr>
      <tr>
        <td class="ipv">v6</td>
        <td>{{ ipv6 }}</td>
      </tr>
    </table>
  </h3>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      ipv4: null,
      ipv6: null,
    };
  },
  beforeMount() {
    axios
      .all([
        axios.get("https://ipv4.icanhazip.com"),
        axios.get("https://ipv6.icanhazip.com"),
      ])
      .then(
        axios.spread((r1, r2) => {
          this.ipv4 = r1.data;
          this.ipv6 = r2.data;
        })
      )
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="stylus" scoped>
.ipv {
  color: #6C757D;
}
</style>