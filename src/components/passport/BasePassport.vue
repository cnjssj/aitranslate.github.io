<template>

<!--  <EmailRegister/>-->
  <PasswordLogin/>
</template>

<script>
  import EmailRegister from "@/components/passport/EmailRegister.vue";
  import PasswordLogin from "@/components/passport/PasswordLogin.vue";

  export default {
    components: { EmailRegister, PasswordLogin },
    data(){
      return{

      }
    }
  }
</script>
