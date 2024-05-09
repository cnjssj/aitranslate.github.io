
<template>
  <tr class="border-bottom border-gray-300">
    <td>
      <div class="d-flex align-items-center">
        <div class="icon icon-shape rounded-3 text-sm text-white mx-5">
<!--          <i class="bi bi-card-image"></i>-->
          <img :src="fileLogo" alt=""/>
        </div>
        <div class="ms-3">
          <a class="d-inline-block h6 font-semibold mb-1" href="#">{{file.name}}</a>
        </div>
      </div>
    </td>
    <td>
      <span>{{file.size}}</span>
    </td>
    <td>
      <a class="text-current" href="mailto:">{{file.time}}</a>
    </td>
<!--    <td>-->
<!--      <span class="badge rounded-pill bg-soft-success text-success">2 members</span>-->
<!--    </td>-->

    <td>
      <i class="bi bi-cloud-download"></i>
      <a class="text-current mx-2" href="mailto:">Download</a>
    </td>
    <td>
      <i class="bi bi-trash"></i>
      <a class="text-current mx-2" href="mailto:">Delete</a>
    </td>
  </tr>
</template>


<script>

  import { FileType, FileLogo } from '@/assets/utils/enum/File.ts';

  export default {
    data(){
      return{
        fileLogo:FileLogo[this.file.type],
      }
      
    },
    methods:{
    },
    props:["file"]
  }
</script>