<template>
  
  <Header/>
  <main class="py-6 bg-surface-secondary">
    <div class="container-fluid max-w-screen-md vstack gap-6">

    
      <hr class="m-6">
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
          <div class="card-footer text-end mt-2">
            <button type="submit" class="btn btn-primary">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </main>
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
    },
    methods(){
      
    }
  }
  
</script>