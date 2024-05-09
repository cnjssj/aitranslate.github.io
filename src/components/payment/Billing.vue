<template>
  
  <Header/>
  
  <section>
    <main class="py-6 bg-surface-secondary">
      <div class="container-fluid max-w-screen-md vstack gap-6">
        <div class="card">
          <div class="card-body py-4">
            <div class="d-flex align-items-center justify-content-between mb-5">
              <div class="flex-1"><h6 class="h5 font-semibold mb-1">Standard Plan</h6>
                <p class="text-sm text-muted">The perfect way to get started.</p></div>
              <div class="ms-auto">
                <div class="d-flex align-items-center mt-5 mb-3 lh-none text-heading d-block display-5 ls-tight mb-0">
                  <span class="font-semibold text-2xl align-self-start mt-1 mt-sm-1 me-1">$</span>
                  <span>59</span> <span
                    class="d-inline-block font-regular text-muted text-lg mt-sm-3 ms-1">/ month</span>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-1"><span
                class="text-sm text-muted font-semibold text-heading d-block">30 days</span> <span
                class="text-sm text-muted font-semibold d-block">12 days left</span></div>
            <div class="progress progress-sm shadow-none mb-6">
              <div class="progress-bar bg-warning" role="progressbar" style="width:70%" aria-valuenow="70"
                   aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <hr class="my-4">
            <div class="d-flex align-items-center justify-content-between"><a href="#"
                                                                              class="text-muted text-danger-hover text-sm font-semibold">Cancel
              plan</a> <a href="#" class="btn btn-sm btn-neutral">Change plan</a></div>
          </div>
        </div>
        <div class="card">
          <div class="card-body pb-4">
            <div class="d-flex align-items-center justify-content-between mb-5">
              <div class="flex-1"><h4 class="mb-1">Payment Method</h4>
                <p class="text-sm text-muted">The perfect way to get started.</p></div>
            </div>
            <div class="p-3 border border-dashed rounded-2 d-flex align-items-center mb-2">
              <div><img alt="..." src="../../assets/images/visa.svg" class="w-20 rounded-2"></div>
              <div class="ms-4 flex-fill">
                <div class="d-block text-sm text-heading font-semibold mb-1">Visa ending in 4291</div>
                <div class="d-block text-sm text-muted">Expiry date: 12/26</div>
              </div>
            </div>
            <div class="p-3 border border-dashed rounded-2 d-flex align-items-center">
              <div><img alt="..." src="../../assets/images/mastercard.svg" class="w-20 rounded-2"></div>
              <div class="ms-4 flex-fill">
                <div class="d-block text-sm text-heading font-semibold mb-1">Mastercard ending in 3399
                </div>
                <div class="d-block text-sm text-muted">Expiry date: 12/23</div>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between pt-4"><a href="#"
                                                                                   class="text-muted text-danger-hover text-sm font-semibold">Remove
              card</a> <a href="#" class="btn btn-sm btn-neutral">Edit payment method</a></div>
          </div>
        </div>
        <div class="card">
          <div class="card-body pb-0">
            <div class="mb-3"><h4>Paid invoices</h4></div>
            <div class="list-group list-group-flush">
              <div class="list-group-item d-flex">
                <div><a href="" class="text-sm text-muted"></a></div>
                <div class="flex-fill"><a href="#" class="d-block h6 font-semibold mb-1">January
                  2022</a>
                  <p class="text-sm text-muted">Pro, Team Seats, Bandwidth – Overage Fee, &amp;
                    Serverless Function</p></div>
                <div class="ms-auto text-end align-self-center">
                  <div class="d-flex align-items-center gap-4">
                    <div><span class="font-semibold text-base text-heading">$29</span></div>
                    <div class="dropdown"><a class="text-muted" href="#" role="button"
                                             data-bs-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false"><i
                        class="bi bi-three-dots-vertical"></i></a>
                      <div class="dropdown-menu"><a href="#!" class="dropdown-item">Download
                        PDF</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-group-item d-flex">
                <div><a href="" class="text-sm text-muted"></a></div>
                <div class="flex-fill"><a href="#" class="d-block h6 font-semibold mb-1">February
                  2022</a>
                  <p class="text-sm text-muted">Pro, Team Seats, Bandwidth – Overage Fee, &amp;
                    Serverless Function</p></div>
                <div class="ms-auto text-end align-self-center">
                  <div class="d-flex align-items-center gap-4">
                    <div><span class="font-semibold text-base text-heading">$29</span></div>
                    <div class="dropdown"><a class="text-muted" href="#" role="button"
                                             data-bs-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false"><i
                        class="bi bi-three-dots-vertical"></i></a>
                      <div class="dropdown-menu"><a href="#!" class="dropdown-item">Download
                        PDF</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-group-item d-flex">
                <div><a href="" class="text-sm text-muted"></a></div>
                <div class="flex-fill"><a href="#" class="d-block h6 font-semibold mb-1">March 2022</a>
                  <p class="text-sm text-muted">Pro, Team Seats, Bandwidth – Overage Fee, &amp;
                    Serverless Function</p></div>
                <div class="ms-auto text-end align-self-center">
                  <div class="d-flex align-items-center gap-4">
                    <div><span class="font-semibold text-base text-heading">$29</span></div>
                    <div class="dropdown"><a class="text-muted" href="#" role="button"
                                             data-bs-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false"><i
                        class="bi bi-three-dots-vertical"></i></a>
                      <div class="dropdown-menu"><a href="#!" class="dropdown-item">Download
                        PDF</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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