<template>
  
  <Header/>
  
  <section>
    <div class="flex-lg-1">
<!--      <header>-->
<!--        <div class="container-lg">-->
<!--          <div class="border-bottom pt-6">-->
<!--            <div class="row align-items-center">-->
<!--              <div class="col-md-6 col-12 mb-4 mb-sm-0"><h3 class="h4 ls-tight">Upload Document</h3></div>-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            &lt;!&ndash;            <ul class="nav nav-tabs overflow-x border-0">&ndash;&gt;-->
<!--            &lt;!&ndash;              <li class="nav-item"><a href="#" class="nav-link active">View all</a></li>&ndash;&gt;-->
<!--            &lt;!&ndash;              <li class="nav-item"><a href="#" class="nav-link">Most recent</a></li>&ndash;&gt;-->
<!--            &lt;!&ndash;              <li class="nav-item"><a href="#" class="nav-link">Popular</a></li>&ndash;&gt;-->
<!--            &lt;!&ndash;            </ul>&ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--        </div>-->
<!--      </header>-->

      <div class="container-lg">
        <div class="row py-5">
          <div class="col-md-6 col-12 mb-sm-0 justify-content-center d-flex align-items-center">
            <div class="display-1">The Best File Translator</div>
          </div>
          <div class="col-md-6 col-12 mb-sm-0">
            <img src="@/assets/images/TranslateHub.png" alt="">
          </div>
        </div>
      </div>
       
      
      <main class="py-10 bg-gray-100">
        <div class="container-lg">
          <div class="vstack gap-3">
              <div class="col-md-6 col-12 mb-sm-0">
                <h5 class="h5">Setup language</h5>
              </div>
              <div class="">
                <div class="dropdown my-2">
                  <button class="btn-primary d-flex py-3 ps-3 pe-4 align-items-center shadow shadow-3-hover rounded-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span>
                    <img class="flag" :src="sourceLanguages[currentSourceLanguageIndex].flag" alt=""/>
                  </span>
                  <span class="flex-fill text-start text-sm font-semibold">
                      {{ sourceLanguages[currentSourceLanguageIndex].language }}
                  </span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <div class="dropdown-item" v-for="(item, index) in sourceLanguages" :key="index" @click="currentSourceLanguageIndex=index">
                      <img class="flag" :src="item.flag" alt=""/>
                      <span>{{ item.language }}</span>
                    </div>
                  </div>
                </div>

                <span class="h2 mx-5 mx-md-10">➔</span>

                <div class="dropdown my-2">
                  <button class="btn-primary d-flex py-3 ps-3 pe-4 align-items-center shadow shadow-3-hover rounded-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span>
                    <img class="flag" :src="targetLanguages[currentTargetLanguageIndex].flag" alt=""/>
                  </span>
                    <span class="flex-fill text-start text-sm font-semibold">
                      {{ targetLanguages[currentTargetLanguageIndex].language }}
                  </span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <div class="dropdown-item" v-for="(item, index) in targetLanguages" :key="index" @click="currentTargetLanguageIndex=index">
                      <img class="flag" :src="item.flag" alt=""/>
                      <span>{{ item.language }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-12 mb-sm-0 mt-5">
                <h5 class="h5">Upload file</h5>
              </div>

              <div class="rounded bg-primary bg-opacity-10 bg-opacity-20-hover border-2 border-primary border-dashed border-primary-hover position-relative">
                <div class="d-flex justify-content-center px-5 pt-5">
                  <label v-if="!isUploadedFile" for="file-upload" class="position-absolute w-full h-full top-0 start-0 cursor-pointer">
                    <input id="file-upload" name="file-upload" type="file" class="visually-hidden" @change="onFileChange">
                  </label>
                  <div class="text-center" v-if="!isUploadedFile">
                    <div class="text-2xl text-primary"><i class="bi bi-cloud-upload-fill"></i></div>
                    <div class="d-flex text-sm text-primary mt-3">
                      <p class="font-semibold">Upload a file or drag and drop</p>
                    </div>
                    <p class="text-xs text-primary">PNG, JPG, GIF up to 3MB</p>
                  </div>
                </div>

                
                <div class="d-flex justify-content-center my-5">
                  <img class="gif mx-5" src="@/assets/images/gif/doc.gif" alt=""/>
                  <img class="gif mx-5" src="@/assets/images/gif/pdf.gif" alt=""/>
                  <img class="gif mx-5" src="@/assets/images/gif/xls.gif" alt=""/>
                </div>

                <div v-if="isUploadedFile" class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar progress-bar-striped" :style="{ width: progress + '%' }"></div>
                </div>
                
                <div v-if="isUploadedFile" class="d-flex justify-content-center px-5 py-5">
                  <div class="row d-flex justify-content-center">
                    <div class="col-12 my-4 text-center"><h4>{{ fileName }}</h4></div>
                    <div class="col-6">
<!--                      <button class="btn btn-secondary my-3">Re-upload file-->
<!--                        <input id="file-upload" name="file-upload" type="file" class="visually-hidden" @change="onFileChange">-->
<!--                      </button>-->

                      <label v-if="isUploadedFile" for="file-upload" class="btn btn-secondary my-3 top-0 start-0 cursor-pointer">
                        Re-upload file
                        <input id="file-upload" name="file-upload" type="file" class="visually-hidden" @change="onFileChange">
                      </label>
                    </div>
                    <div class="col-6">
                      <button class="btn btn-primary my-3">Translate file</button>
                    </div>
                  </div>
                </div>
                
                
              </div>

<!--              <div class="col-md-6 col-12 mb-sm-0 mt-5">-->
<!--                <h5 class="h5">Translate file</h5>-->
<!--              </div>-->

<!--            <div class="py-8 btn btn-secondary"><h3>Translate file</h3></div>-->

              <div class=" mt-5">
                <div class=" d-flex align-items-center">
                  <h5 class="me-auto">Recent files</h5>
                </div>
                <!--              <div class="px-4 py-4 border-top border-bottom d-flex flex-column flex-sm-row gap-3">-->
                <!--                <div class="btn-group"><a href="#" class="btn btn-sm btn-neutral text-primary"-->
                <!--                                          aria-current="page">View all</a> <a href="#"-->
                <!--                                                                              class="btn btn-sm btn-neutral">Private</a>-->
                <!--                  <a href="#" class="btn btn-sm btn-neutral">Shared files</a></div>-->
                <!--                <div class="ms-auto hstack gap-2">-->
                <!--                  <div class="input-group input-group-sm input-group-inline"><span-->
                <!--                      class="input-group-text pe-2"><i class="bi bi-search"></i> </span><input-->
                <!--                      type="email" class="form-control" placeholder="Search" aria-label="Search">-->
                <!--                  </div>-->
                <!--                  <div>-->
                <!--                    <button type="button" class="btn btn-sm px-3 btn-neutral d-flex align-items-center">-->
                <!--                      <i class="bi bi-funnel me-2"></i> <span>Filters</span> <span-->
                <!--                        class="vr opacity-20 mx-3"></span> <span-->
                <!--                        class="text-xs text-primary">2</span></button>-->
                <!--                  </div>-->
                <!--                </div>-->
                <!--              </div>-->
                <div class="table-responsive bg-gray-200 rounded mt-4">
                  <table class="table table-hover table-nowrap border-bottom border-gray-300">
                    <thead class="">
                    <tr>
                      <th scope="col">File</th>
                      <th scope="col">Size</th>
                      <th scope="col">Modified</th>
                      <!--                    <th scope="col">Access</th>-->
                      <th></th>
                    </tr>
                    </thead>
                    <tbody v-for="(item, index) in fileList">
                    
                      <TranslatedFile :file="item"/>

                    </tbody>
                  </table>
                </div>
              </div>
            
          </div>
        </div>
      </main>

      <div class="container-lg my-10">
        <div class="row py-10">
         
          <div class="col-md-4 col-12 mb-sm-0">
            <img src="@/assets/images/translate1.png" alt="">
          </div>
          <div class="col-md-4 col-12 mb-sm-0">
            <img src="@/assets/images/translate2.png" alt="">
          </div>

          <div class="col-md-4 col-12 mb-sm-0 d-flex justify-content-center align-items-center">
            <div class="row">
              <div class="display-2">The best result</div>
              <!--              <div class="h3">◉ Preserve format</div>-->
              <!--              <div class="h3">◉ Preserve format</div>-->
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
  
  import TranslatedFile from "@/components/translate/TranslatedFile.vue"

  import { ref } from 'vue';
  import { FileType } from '@/assets/utils/enum/File.ts';

  export default {
    components: { Header, Footer, TranslatedFile },
    data() {
      return{
        // 源语言
        currentSourceLanguageIndex: 0,
        sourceLanguages:[
          {language:'Chinese', flag:'/src/assets/images/Chinese.svg'},
          {language:'English(British)', flag:'/src/assets/images/english.svg'},
          {language:'English(American)', flag:'/src/assets/images/american.svg'},
          {language:'French', flag:'/src/assets/images/french.svg'},
          {language:'Japanese', flag:'/src/assets/images/japan.svg'},
          {language:'Korean', flag:'/src/assets/images/korea.svg'},
        ],
        
        // 目标语言
        currentTargetLanguageIndex: 0,
        targetLanguages:[
          {language:'Chinese', flag:'/src/assets/images/Chinese.svg'},
          {language:'English(British)', flag:'/src/assets/images/english.svg'},
          {language:'English(American)', flag:'/src/assets/images/american.svg'},
          {language:'French', flag:'/src/assets/images/french.svg'},
          {language:'Japanese', flag:'/src/assets/images/japan.svg'},
          {language:'Korean', flag:'/src/assets/images/korea.svg'},
        ],
        
        // 文件列表
        fileList:[
          {name:"123.doc", type:FileType.Doc, size:"3MB",url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Excel, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
          {name:"123.pdf", type:FileType.Pdf, size:"1KB", url:"https://xiang-test-1302272239.cos.ap-nanjing.myqcloud.com/2/Other/Win%E7%89%88%E5%BF%85%E7%9C%8B%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E_ad0553cc-aec2-4334-90cd-c56e8d26dabe.doc", time:"2023-04-14 23:17:58"},
        ]
      }
    },
    
    setup() {
      const progress = ref(0);

      const increaseProgress = (value) => {
        if (progress.value < 100) {
          progress.value += value; // 或者根据需要设置增加的百分比
        }
      };

      const isUploadedFile = ref(false);
      
      // 创建响应式变量存储文件名
      const fileName = ref('');

      // 文件上传时触发的函数
      const onFileChange = (event) => {
        // 检查是否有文件被上传
        const files = event.target.files;
        if (files.length > 0) {
          // 更新文件名变量
          fileName.value = files[0].name;
          
          // 进度条拉满
          increaseProgress(100);
          // 显示文件
          isUploadedFile.value = true;
        }
      };

      return { progress, increaseProgress, isUploadedFile, fileName, onFileChange };
    }
  }
</script>
