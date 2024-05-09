<template>
  
  <Header/>

  <section class="py-5">
    <div class="container">
      <div class="row my-5">
        <div class="col-md-8 mx-auto text-center">
          <div class="display-5">Pick the best plan for you</div>
          <p class="py-4">You have Free Unlimited Updates and Premium Support on each package.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-10 col-12 mx-auto text-center">
          <div class="nav-wrapper mt-5">
            <ul class="nav nav-pills nav-fill flex-row p-1 position-relative" id="tabs-pricing-4" role="tablist">
              <li class="nav-item">
                <a class="nav-link mb-0 active" id="tabs-iconpricing-tab-1" data-bs-toggle="tab" href="#tabs-pricing-tab-1" role="tab" aria-controls="tabs-pricing-tab-1" aria-selected="true">
                  Monthly
                </a>
              </li>
           
              <li class="nav-item">
                <a class="nav-link mb-0" id="tabs-iconpricing-tab-2" data-bs-toggle="tab" href="#tabs-pricing-tab-2" role="tab" aria-controls="tabs-pricing-tab-2" aria-selected="false">
                  Annual
                </a>
              </li>
<!--              <li class="nav-item">-->
<!--                <a class="nav-link mb-0" id="tabs-iconpricing-tab-2" data-bs-toggle="tab" href="#tabs-pricing-tab-2" role="tab" aria-controls="tabs-pricing-tab-2" aria-selected="false">-->
<!--                  Lifetime access-->
<!--                </a>-->
<!--              </li>-->
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-3 col-sm-6 mb-lg-0 mb-4">
          <div class="card shadow-none border h-100">
            <div class="card-header text-sm-start text-center pt-4 pb-3 px-4">
              <h5 class="mb-1">Starter</h5>
              <p class="mb-3 text-sm">Free access for 2 members</p>
              <h3 class="font-weight-bolder mt-3">
                $199 <small class="text-sm text-secondary font-weight-bold">/ year</small>
              </h3>
              <router-link to="/PaymentDetails">
                <div class="btn btn-sm bg-gradient-dark text-white w-100 border-radius-md mt-4 mb-2">Buy now</div>
              </router-link>
            </div>
            <hr class="horizontal dark my-0">
            <div class="card-body">
              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Complete documentation</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Working materials in Sketch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 mb-lg-0 mb-4">
          <div class="card shadow-none border h-100">
            <div class="card-header text-sm-start text-center pt-4 pb-3 px-4">
              <h5 class="mb-1">Pro</h5>
              <p class="mb-3 text-sm">Free access for 30 members</p>
              <h3 class="font-weight-bolder mt-3">
                $299 <small class="text-sm text-secondary font-weight-bold">/ year</small>
              </h3>
              <router-link to="/PaymentDetails">
                <div class="btn btn-sm bg-gradient-dark text-white w-100 border-radius-md mt-4 mb-2">Buy now</div>
              </router-link>
            </div>
            <hr class="horizontal dark my-0">
            <div class="card-body">
              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Complete documentation</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Working materials in Sketch</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">2GB cloud storage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 mb-lg-0 mb-4">
          <div class="card shadow-none border h-100">
            <div class="card-header text-sm-start text-center pt-4 pb-3 px-4">
              <h5 class="mb-1">Premium</h5>
              <p class="mb-3 text-sm">Free access for 200 members</p>
              <h3 class="font-weight-bolder mt-3">
                $299 <small class="text-sm text-secondary font-weight-bold">/ year</small>
              </h3>
              <router-link to="/PaymentDetails">
                <div class="btn btn-sm bg-gradient-dark text-white w-100 border-radius-md mt-4 mb-2">Buy now</div>
              </router-link>
            </div>
            <hr class="horizontal dark my-0">
            <div class="card-body">
              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Complete documentation</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Working materials in Sketch</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">2GB cloud storage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 mb-lg-0 mb-4">
          <div class="card shadow-none border h-100">
            <div class="card-header text-sm-start text-center pt-4 pb-3 px-4">
              <h5 class="mb-1">Enterprise</h5>
              <p class="mb-3 text-sm">Free access for all members</p>
              <h3 class="font-weight-bolder mt-3">
                $899 <small class="text-sm text-secondary font-weight-bold">/ year</small>
              </h3>
              <router-link to="/PaymentDetails">
                <div class="btn btn-sm bg-gradient-dark text-white w-100 border-radius-md mt-4 mb-2">Buy now</div>
              </router-link>
            </div>
            <hr class="horizontal dark my-0">
            <div class="card-body">
              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Complete documentation</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Working materials in Sketch</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">100GB cloud storage</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">500 team members</span>
                </div>
              </div>

              <div class="d-flex pb-3">
                <div>
                  <i class="fas fa-check text-success text-sm"></i>
                </div>
                <div class="ps-3">
                  <span class="text-sm">Premium support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <Footer/>
  
</template>


<script>

  import Header from "@/components/main/Header.vue"
  import Footer from "@/components/main/Footer.vue"
  
  export default {
    components: { Header, Footer },
    data(){
      return{
        
      }
    }
  }
  
</script>