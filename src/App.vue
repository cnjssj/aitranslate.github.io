<template>
  <router-view/>
</template>

<script>

  import Billing from "@/components/payment/Billing.vue"
  import PlanPricing from "@/components/payment/PlanPricing.vue";
  import BasePassport from "@/components/passport/BasePassport.vue";
  import Index from "@/components/main/Index.vue";

  export default {
    components: {
      BasePassport,
      Index,
      Billing,
      PlanPricing,
    },
    data(){
      return{
      }
    }
  }
</script>

