import { createRouter, createWebHashHistory } from "vue-router";


import EmailRegister from "@/components/passport/EmailRegister.vue"
import PasswordLogin from "@/components/passport/PasswordLogin.vue"
import Index from "@/components/main/Index.vue"
import Billing from "@/components/payment/Billing.vue";
import Profile from "@/components/profile/Profile.vue";
import PaymentDetails from "@/components/payment/PaymentDetails.vue";
import PlanPricing from "@/components/payment/PlanPricing.vue";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            alias:["/home", "/index"],
            component: Index
        },
        {
            path:"/EmailRegister",
            component: EmailRegister
        },
        {
            path:"/PasswordLogin",
            component: PasswordLogin
        },
        {
            path:"/Billing",
            component: Billing
        },
        {
            path:"/PaymentDetails",
            component: PaymentDetails
        },
        {
            path:"/Profile",
            component: Profile
        },
        {
            path:"/PlanPricing",
            component: PlanPricing
        },
    ]
});

export default router;