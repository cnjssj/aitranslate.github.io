<script>

</script>

<template>
  
  <section class="sticky-top">
    <nav class="navbar navbar-expand-lg px-0 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg " id="sidebar">
      <div class="container-lg">
        <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse"
                data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar navbar-toggler-icon"></span>
        </button>
        <router-link to="/">
          <div class="navbar-brand d-inline-block py-lg-2 px-lg-4 me-0">
            <img src="@/assets/images/240407-001-black.png" alt="...">
          </div>
        </router-link>
     
        <div class="navbar-user d-lg-none">
          <div class="dropdown"><a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
            <div class="avatar-parent-child"><img alt="..." src="@/assets/images/img-profile.jpg"
                                                  class="avatar avatar- rounded-circle"> <span
                class="avatar-child avatar-badge bg-success"></span></div>
          </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
              <a href="#" class="dropdown-item">Profile</a>
              <a href="#" class="dropdown-item">Billing</a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">Logout</a></div>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="sidebarCollapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/">
                <div class="nav-link">
                  <p>Translate files</p>
                </div>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/PlanPricing">
                <div class="nav-link">
                  <p>Plan and pricing</p>
                </div>
              </router-link>
            </li>

          </ul>
        </div>

        <div class=" px-lg-6 position-relative d-none d-lg-block">
          <div class="dropdown w-full">
            <button class="btn-primary d-flex w-full py-3 ps-3 pe-4 align-items-center shadow shadow-3-hover rounded-3"
                    type="button" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3"><img
                alt="..." src="@/assets/images/img-profile.jpg" class="avatar avatar-sm rounded-circle"> </span><span
                class="flex-fill text-start text-sm font-semibold">Tahlia Mooney </span><span><i
                class="bi bi-chevron-expand text-white text-opacity-70"></i></span></button>
            <div class="dropdown-menu dropdown-menu-end w-full">
              <div class="dropdown-header">
                <span class="d-block text-sm text-muted mb-1">Signed in as</span> 
                <span class="d-block text-heading font-semibold">Tahlia Mooney</span>
              </div>
              <div class="dropdown-divider"></div>
<!--              <router-link to="/Profile">-->
<!--                <div class="dropdown-item"><i class="bi bi-house me-3"></i>Profile</div>-->
<!--              </router-link>-->
              <router-link to="/Billing">
                <div class="dropdown-item"><i class="bi bi-house me-3"></i>Billing</div>
              </router-link>
<!--              <router-link to="/PaymentDetails">-->
<!--                <div class="dropdown-item"><i class="bi bi-house me-3"></i>PaymentDetails</div>-->
<!--              </router-link>-->
              
              <div class="dropdown-divider"></div>

              <router-link to="/EmailRegister">
                <div class="dropdown-item"><i class="bi bi-box-arrow-left me-3"></i>Logout</div>
              </router-link>
            </div>
          </div>
          <div class="d-flex gap-3 justify-content-center align-items-center mt-6 d-none">
            <div><i class="bi bi-moon-stars me-2 text-warning me-2"></i> <span
                class="text-heading text-sm font-bold">Dark mode</span></div>
            <div class="ms-auto">
              <div class="form-check form-switch me-n2"><input class="form-check-input" type="checkbox"
                                                               id="switch-dark-mode"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>

</template>
