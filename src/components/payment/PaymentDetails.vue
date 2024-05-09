<template>

  <Header/>
  
  <section>
    <main class="py-6 bg-surface-secondary">
      <div class="container-fluid max-w-screen-md vstack gap-6">

        <div class="d-flex justify-content-center mt-10">
          <div class="list-group list-group-horizontal list-group-borderless ms-4">
            <div class="list-group-item px-2 py-0">
              <div class="border-bottom-0 border-start-0 border-end-0 border-4 border-primary">
                <div class="d-flex ms-n6 mt-n6 pb-6">
                  <div class="flex-none me-40">
                    <div class="icon icon-shape text-base w-12 h-12 bg-soft-primary text-primary rounded-circle">
                      <i class="bi bi-check-circle-fill"></i>
                    </div>
                  </div>
                </div>
                <div class="ms-n8">1. Account</div>
              </div>
            </div>
            <div class="list-group-item px-2 py-0">
              <div class="border-bottom-0 border-start-0 border-end-0 border-4">
                <div class="d-flex ms-n6 mt-n6 pb-6">
                  <div class="flex-none me-40">
                    <div class="icon icon-shape text-base w-12 h-12 bg-soft-primary text-primary rounded-circle">
                      <i class="bi bi-circle-fill"></i>
                    </div>
                  </div>
                </div>
                <div class="ms-n7">2. Details</div>
              </div>
            </div>
            <div class="list-group-item px-2 py-0">
              <div class="border-bottom-0 border-start-0 border-end-0 border-4">
                <div class="d-flex ms-n4 mt-n6 pb-6">
                  <div class="flex-none">
                    <div class="icon icon-shape text-base w-12 h-12 bg-soft-primary text-primary rounded-circle">
                      <i class="bi bi-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="ms-n7">3. Review</div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="card">
            <div class="card-body pb-0">

              <div>
                <div class="my-3">
                  <h4 class="mb-2">Contact Information</h4>
                  <p class="text-sm text-muted">Billing address</p>
                </div>
                <form>
                  <div class="row g-5">
                    <div class="col-md-6">
                      <div>
                        <label class="form-label">First name</label>
                        <input type="text" class="form-control" id="first_name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div>
                        <label class="form-label">Last name</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>

                    <div class="col-12 col-md-9">
                      <div><label class="form-label">Address line 1</label> <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-12 col-md-9">
                      <div><label class="form-label">Address line 2</label> <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div><label class="form-label">City</label> <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div>
                        <label class="form-label">Country</label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected="selected">Country</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div>
                        <label class="form-label" for="zip">Postal code</label>
                        <input type="tel" class="form-control" id="zip">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                      </div>
                    </div>
                  </div>
                </form>
              </div>


              <div class="my-10">
                <h4 class="mb-2">Payment method</h4>
                <p class="text-sm text-muted">Credit card</p>
              </div>
              <div class="row">
                <div class="col-12">
                  <div>
                    <label class="form-label">Card number</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-md-6 my-4">
                  <div>
                    <label class="form-label">Expiry date</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-md-6 my-4">
                  <div>
                    <label class="form-label">CVC</label>
                    <input type="text" class="form-control">
                  </div>
                </div>

                <div class="col-12">
                  <div class="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer text-end my-8">
              <button type="submit" class="btn btn-primary">Continue</button>
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
  components: {Header, Footer},
  data() {
    return {}
  },
  methods() {

  }
}

</script>