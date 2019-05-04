<template>
  <div class="publish">
    <i class="iconfont iconreturn"></i>
    <div class="top">发布作品</div>
    <ul class="list">
      <li class="lititle">
        <i class="iconfont iconzuopin"></i>
        作品主题
      </li>
      <li><input type="text" v-model.trim="workdata.theme" placeholder="请输入作品主题" class="inputsty"/></li>
      <li class="desc">
        <i class="iconfont iconmiaoshu"></i>
        作品描述
      </li>
      <li><input type="text" v-model.trim="workdata.describe" placeholder="请输入作品描述" class="inputsty descinput"/></li>
      <li class="desc">
        <i class="iconfont iconfl-tupian"></i>
        上传作品图片<span class="remark"> 必须本人拍摄</span>
      </li>
      <li>
        <div class="workshow">
          <div class="addpic">
            <input class="file" ref="inputer"  name="file" type="file" multiple accept="image/png,image/jpeg,image/gif,image/jpg" @change="update" />
            <i class="iconfont iconxiangji1"></i>
            <div class="addword">上传作品</div>
          </div>
          <div class="showchoosepic" v-for='(value, key) in imgs'>
            <a class="close" @click="delImg(key)">×</a>
            <img :src="getObjectURL(value)" class="showpic">
          </div>
        </div>
      </li>
      <li class="desc">
        <i class="iconfont iconxiangji"></i>
        使用设备
        <input type="text" v-model.trim="workdata.equipment" placeholder="请输入使用设备(选填)" class="tools"/>
      </li>
      <li class="lititle">
        <i class="iconfont iconjingtou1"></i>
        拍摄镜头
        <input type="text" v-model.trim="workdata.lens" placeholder="请输入拍摄镜头(选填)" class="tools"/>
      </li>
      <li class="lititle">
        <i class="iconfont iconpingtaiapicanshu2"></i>
        镜头参数
        <input type="text" v-model.trim="workdata.parameter" placeholder="请输入镜头参数(选填)" class="tools"/>
      </li>
      <li class="lititle">
        <i class="iconfont iconlocation"></i>
        拍摄地点
        <input type="text" v-model.trim="workdata.place" placeholder="请输入拍摄地点(选填)" class="tools"/>
      </li>
      <li class="lititle">
        <i class="iconfont iconbiaoqiantags3"></i>
        主题标签
        <div class="marks">
            <div :class="mark.ischoose ? 'choosedmarkname' : 'markname'" v-for="(mark,index) in marks" @click="choosemark(index)">{{mark.name}}</div>
        </div>
      </li>
    </ul>
    <input type="button" value="发布作品"
           :class="(workdata.theme == '' || workdata.describe == '' || workdata.urls == {} || workdata.mark.length == 0)? 'noactivebtn' : 'btn'"
           :disabled="workdata.theme == '' || workdata.describe == '' || workdata.urls == {} || workdata.mark.length == 0"
            @click="publishwork"
    ></input>
  </div>
</template>

<script>
  import utils from "../../components/utils/utils"
  export default {
    name:'publish',
    data(){
      return{
        formData:new FormData(),
        imgLen:0,
        marks:[
          {'id':1,'name':'情侣','ischoose':false},
          {'id':2,'name':'商务','ischoose':false},
          {'id':3,'name':'国民','ischoose':false},
          {'id':4,'name':'情侣','ischoose':false},
          {'id':5,'name':'商务','ischoose':false},
          {'id':6,'name':'情侣','ischoose':false},
          {'id':7,'name':'商务','ischoose':false},
          {'id':8,'name':'情侣','ischoose':false},
          {'id':9,'name':'商务','ischoose':false}
        ],
        imgs:{},
        workdata:{
          'userid':localStorage.getItem('userid'),
          'theme':'',
          'mark':[],
          'equipment':'',
          'lens':'',
          'parameter':'',
          'describe':'',
          'place':'',
          'urls':this.formData
        }
      }
    },
    methods:{
      update(e){
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.fil = inputDOM.files;
        let oldLen=this.imgLen;//选择图片的数量
        let len=this.fil.length+oldLen;
        if(len>4){
          alert('最多可上传4张，您还可以上传'+(4-oldLen)+'张');
          return false;
        }
        for (let i=0; i < this.fil.length; i++) {
          let size = Math.floor(this.fil[i].size / 1024);
          if (size > 5*1024*1024) {
            alert('请选择5M以内的图片！');
            return false
          }
          this.imgLen++;
          this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);
        }
      },
      publishwork(){
        for(let key in this.imgs){
          let name=key.split('?')[0];
          this.formData.append('multipartFiles',this.imgs[key],name);
        }

        let success=(response)=>{
          console.log(response.data);
          if(response.data.code == 0) {//发布成功

          }
        }
        utils.axiosMethod({
          method:"POST",
          url:"/work/addwork/",
          data:this.workdata,
          callback:success
        })
      },
      getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }

        return url ;
      },
      delImg(key){
        this.$delete(this.imgs,key);
        this.imgLen--;
      },
      choosemark(index){
        let choosemarks = this.workdata.mark;
        let currentmark =  this.marks[index];
        currentmark.ischoose = !currentmark.ischoose;

        if(currentmark.ischoose){
          choosemarks.push(currentmark.id);
        }else{
          for(let i = 0; i < choosemarks.length; i++){
            if(choosemarks[i] == currentmark.id){
              //从i出开始删除1个元素
              choosemarks.splice(i,1);
              break;
            }
          }
        }

      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .iconreturn
    color #333333
    font-size 30px
    position absolute
    margin-left 5%
    line-height 50px
  .top
    header-style(#333333)
  .list
    width 100%
    font-size 15px
    li
      line-height 40px
      padding-left 5%
      padding-right 5%
      background-color white
      .iconfont
        font-size 20px
        color $red
      .inputsty
        width 100%
        line-height 40px
      .descinput
        min-height 50px
      .workshow
        padding 10px 0px
        .addpic,.showchoosepic
          width 80px
          height 80px
          display inline-block
          border 1px dashed lightgray
          display table-cell
          text-align center
          vertical-align middle
          line-height 20px
          position relative
          .file
            opacity 0
            width 100%
            height 100%
            top 0
            left 0
            position absolute
          .iconxiangji1
            font-size 25px
            color #bbbbbb
          .addword
            width 100%
            color #bbbbbb
            font-size 12px
        .showchoosepic
          border 1px solid #eeeeee
          overflow hidden
          .showpic
            width 100%
          .close
            position absolute
            color black
            top 0px
            font-size 12px
            right 0px
    .lititle
      border-bottom 1px solid #eeeeee
      .marks
        padding 5px
        margin-bottom 40px
        .markname,.choosedmarkname
          display inline-block
          padding 0px 10px
          line-height 25px
          background-color white
          border 1px solid gray
          border-radius 10px
          color gray
          margin-right 5px
          font-size 13px
        .choosedmarkname
          background-color $red
          border 1px solid $red
          color white
    .desc
      margin-top 10px
      border-bottom 1px solid #eeeeee
      .remark
        color #aaaaaa
    .tools
      line-height 40px
      padding 0px 10px
  .btn,.noactivebtn
    width 100%
    background-color $red
    color white
    border none
    height 40px
    font-size 18px
    line-height 40px
  .noactivebtn
    background-color #f588a2
</style>
